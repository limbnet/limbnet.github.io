// Here we specify a very basic morphomovie prototype,
// simply in order to test the hosting on github.
//
// Requires a fairly modern browser.
//
// Data will not be cached (outside of the browser's 
// own internal mechanisms) in this version, it will
// be re-downloaded every time the browser deems
// necessary.

// Core
(function(){

    console.log('Initialising morphomovie experiment...');

    // Should go back to being auto-generated from DB
    // outside of experiments!
    let metadata = {
        species : {
            'sim_sox9' : 0,
            'sim_wnt' : 1,
            'sim_bmp' : 2,
            'fgf8sig' : 3,
            'hoxd13' : 4,
            'smad' : 5,
        }
    }

    // Will hold the morphomovie dataset that will be loaded
    var mm = {};

    // Generate time slider UI.
    let theTimeSlider = document.getElementById('timeSlider');
    theTimeSlider.min = 0;
    theTimeSlider.max = 0;

    theTimeSlider.addEventListener('input',
                function(){
                    requestSingleFrameDraw(theTimeSlider.value);
                }
            );

    // Set up to load our binary blob directly as an arraybuffer.
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/test-rasmar.blob', true);
    xhr.responseType = 'arraybuffer';

    // Sparse blob structure of the morphomovie:
    // - Timepoints are only stored where there is a change in the mesh.
    // - Otherwise we will interpolate in between the recorded time points.
    function loadSparseBlob() {
        if (this.readyState === 4 && this.status == 200) {
            // Using DataStream lib to parse the blob.
            let ds = new DataStream(xhr.response);
            ds.endianness = ds.BIG_ENDIAN;

            mm = ds.readStruct([
                'morphomovie', ['[]', [
                    't', 'float32',
                    'nVerts', 'int32',
                    'verts', ['[]', ['[]', 'float32', 2],
                        function (s, ds) {
                            return s.nVerts - 1;
                        }],
                    'nTris', 'int32',
                    'tris', ['[]', ['[]', 'int32', 3], 'nTris'],
                    'nChem', 'int32',
                    'chem', ['[]', ['[]', 'float32', 'nTris'], 'nChem'],
                ], '*']
            ])


			// Rescale chemicals to range 0..1:
			for(var i_frame = 0; i_frame < mm.morphomovie.length; i_frame++ ) {
				for (var i = 0; i < mm.morphomovie[i_frame].chem.length; i++) {

					// TODO: the spread operator (...) is new; refactor for compatibility!
					var minConc = Math.min(... mm.morphomovie[i_frame].chem[i]);
					var maxConc = Math.max(... mm.morphomovie[i_frame].chem[i]);

					if (minConc === maxConc) {
						var concRescale = 0.0;
					} else {
						var concRescale = 1.0 / (maxConc - minConc);
					}

					// Well, this is quite nasty.
					for (var j = 0; j < mm.morphomovie[i_frame].chem[i].length; j++) {
						mm.morphomovie[i_frame].chem[i][j] = concRescale * (mm.morphomovie[i_frame].chem[i][j] - minConc);
					}
				}
			}


            theTimeSlider.max = mm.morphomovie.length - 1;

            // Finally, draw the initial frame of the morphomovie to the canvas
            requestAnimationFrame(function(timestamp){
                drawing(0, mm);
            });
        }
    };

    xhr.onreadystatechange = loadSparseBlob;
    xhr.send();

    console.log('Request XHR blob.');

    // Store the index of the last drawn timepoint
    let lastDrawnFrame = 0;

    // Animation timer
    let requestAnimationId = 0;

    // The currently selected signal 
    // Make sure the 'currently selected' chemical is valid
    // Just choose the first one by default.
    let selectedChemical = Object.getOwnPropertyNames( metadata.species )[0];

    // Queue drawing a single frame
    function requestSingleFrameDraw(frameIx) {
        // Are we already animating?
        if (requestAnimationId) {
            cancelAnimationFrame(requestAnimationId);
            requestAnimationId = undefined;
        }

        requestAnimationFrame(function (timestamp) {
            var theTimeSlider = document.getElementById('timeSlider');
            theTimeSlider.value = frameIx;
            drawing(frameIx, mm);
        });
    };

    // Buttons for controlling the current time.
    // We will actually add the buttons later, once the data are loaded!
    let timeControlButtons = [];

    // Start index button
    let btnNavToStart = document.createElement('BUTTON');

    btnNavToStart.onclick = function () {
        requestSingleFrameDraw(0);
    };

    var t = document.createTextNode('|<<');
    btnNavToStart.appendChild(t);
    timeControlButtons.push(btnNavToStart);

    // Animation button test.
    let btnAnimate = document.createElement('BUTTON');

    btnAnimate.onclick = function () {
        if (!requestAnimationId) {
            requestAnimationId = requestAnimationFrame(function (timestamp) {
                animateDrawing();
            });
        } else {
            cancelAnimationFrame(requestAnimationId);
            requestAnimationId = undefined;
        }
    };

    var t = document.createTextNode('Animate');
    btnAnimate.appendChild(t);
    timeControlButtons.push(btnAnimate);

    // End index button
    let btnNavToEnd = document.createElement('BUTTON');

    btnNavToEnd.onclick = function () {
        requestSingleFrameDraw( mm.morphomovie.length - 1 );
    };

    var t = document.createTextNode('>>|');
    btnNavToEnd.appendChild(t);
    timeControlButtons.push(btnNavToEnd);

    // Populate the species list
    document.getElementById('speciesList')
        .appendChild(generateChemicalList(Object.getOwnPropertyNames( metadata.species )));

    // Populate the time control buttons
    for( bi = 0; bi < timeControlButtons.length; bi++ ){
        document.getElementById('timeControls').appendChild( timeControlButtons[bi] );
    }

    // Uniform scaling of the mesh points et al.
    let scale = 0.15;
    let xShift = 450;

    // Animate the drawing per frame of morphomovie
    function animateDrawing(timeDelay = 10, frameIx = 0, numFrames = mm.morphomovie.length) {
        requestSingleFrameDraw(frameIx);

        if( frameIx < numFrames - 1 ) {
            requestAnimationId = requestAnimationFrame(function(timestamp){
                animateDrawing(timeDelay, frameIx + 1, numFrames);
            });
        }
    }

    function drawing(tpIx = 0, mm) {

        // Current timePoint of the morphomovie
        tp = mm.morphomovie[tpIx];

        // The current set of nodes
        nodes = tp.verts;
        numNodes = nodes.length;

        // The current set of elements
        elements = tp.tris;
        numElements = elements.length;

        // Get a canvas (existent) and its context
        canvas = document.getElementById("mainDrawing");
        ctx = canvas.getContext("2d");

        // We want to re-draw everything on the canvas, for now
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //frame.ctx.clearRect(0, 0, frame.canvas.width, frame.canvas.height);

        concentrations = tp.chem[metadata.species[selectedChemical]];

        // Write current time to website text
        // Rounded, for now. 
        document.getElementById("timePoint")
            .innerHTML = Math.round(tp.t);

        //drawTris(frame);
        //drawElementsAsSquares(frame);
        //drawElementsAsTriangles(frame);

        lastDrawnFrame = tpIx;

        //
        // We draw all the elements as triangles.
        //

        // Try to avoid drawing outlines
        // (doesn't really work...)
        ctx.strokeStyle = "none";
        ctx.lineWidth = 0;

        for( var i = 0; i < numElements; i++ ){
            ctx.beginPath();

            // Current element and its corresponding nodes
            // We offset the index, as JS array indexes from 0 & nodes numbered from 1.
            let cEle = elements[i];
            let n1 = nodes[cEle[0] - 1];
            let n2 = nodes[cEle[1] - 1];
            let n3 = nodes[cEle[2] - 1];

            // Draw each triangle.
            // Not that it really matters, but this means that many (most?) edges 
            // will be drawn twice.
            // If necessary, this could be pre-computed and re-structured in future.
            ctx.moveTo((xShift + n1[0])*scale, canvas.height*0.5 - scale*n1[1]);
            ctx.lineTo((xShift + n2[0])*scale, canvas.height*0.5 - scale*n2[1]);
            ctx.lineTo((xShift + n3[0])*scale, canvas.height*0.5 - scale*n3[1]);
            ctx.closePath();

            var renderConc = concentrations[i];
            ctx.fillStyle = "rgb("+ Math.round(255*renderConc).toString() + ", 0, 0)";

            ctx.fill();
        }
    }

    function generateChemicalList(array) {
        // Create the list element:
        let list = document.createElement('ul');

        for (var i = 0; i < array.length; i++) {
            // Create the list item:
            let item = document.createElement('li');

            var btn = document.createElement('BUTTON');

            if (array[i] === selectedChemical) {
                btn.style.border = '1px solid #f44336';
            }

            btn.id = 'but_' + array[i];

            btn.onclick = function (tmp) {
                return function () {
                    console.log('Drawing: ' + tmp);
                    let prevButton = document.getElementById('but_' + selectedChemical);
                    prevButton.style.border = '';
                    selectedChemical = tmp;
                    this.style.border = '1px solid #f44336';
                    requestAnimationFrame(function (timestamp) {
                        drawing(lastDrawnFrame, mm);
                    });
                };
            }(array[i]);

            let t = document.createTextNode(array[i]);

            btn.appendChild(t);

            // Set its contents:
            item.appendChild(btn);

            // Add it to the list:
            list.appendChild(item);
        }

        // Finally, return the constructed list:
        return list;
    }

})();
