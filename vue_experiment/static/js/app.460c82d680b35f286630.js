webpackJsonp([1],Array(33).concat([function(t,e,i){"use strict";var n=i(34),r=i(123),s=i(111),a=i.n(s),o=i(112),h=i.n(o),f=i(108),u=i.n(f),l=i(107),p=i.n(l),c=i(106),y=i.n(c);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Index",component:a.a,title:"Home"},{path:"/ln",name:"LnApp",component:h.a,title:"Morphomovie"},{path:"/data",name:"Data",component:u.a,title:"Datasets"},{path:"/model",name:"CompModel",component:p.a,title:"Computational model"},{path:"/about",name:"About",component:y.a,title:"About"}]})},,function(t,e,i){"use strict";(function(t){function n(t,e,i){this._byteOffset=e||0,t instanceof ArrayBuffer?this.buffer=t:"object"==(void 0===t?"undefined":s()(t))?(this.dataView=t,e&&(this._byteOffset+=e)):this.buffer=new ArrayBuffer(t||1),this.position=0,this.endianness=null==i?n.LITTLE_ENDIAN:i}e.a=n;var r=i(66),s=i.n(r);n.prototype={},void 0===Uint8Array.prototype.BYTES_PER_ELEMENT&&(Uint8Array.prototype.BYTES_PER_ELEMENT=Uint8Array.BYTES_PER_ELEMENT,Int8Array.prototype.BYTES_PER_ELEMENT=Int8Array.BYTES_PER_ELEMENT,Uint8ClampedArray.prototype.BYTES_PER_ELEMENT=Uint8ClampedArray.BYTES_PER_ELEMENT,Uint16Array.prototype.BYTES_PER_ELEMENT=Uint16Array.BYTES_PER_ELEMENT,Int16Array.prototype.BYTES_PER_ELEMENT=Int16Array.BYTES_PER_ELEMENT,Uint32Array.prototype.BYTES_PER_ELEMENT=Uint32Array.BYTES_PER_ELEMENT,Int32Array.prototype.BYTES_PER_ELEMENT=Int32Array.BYTES_PER_ELEMENT,Float64Array.prototype.BYTES_PER_ELEMENT=Float64Array.BYTES_PER_ELEMENT),n.prototype.save=function(t){var e=new Blob(this.buffer),i=window.webkitURL||window.URL;if(!i||!i.createObjectURL)throw"DataStream.save: Can't create object URL.";var n=i.createObjectURL(e),r=document.createElement("a");r.setAttribute("href",n),r.setAttribute("download",t),r.click(),i.revokeObjectURL(n)},n.BIG_ENDIAN=!1,n.LITTLE_ENDIAN=!0,n.prototype._dynamicSize=!0,Object.defineProperty(n.prototype,"dynamicSize",{get:function(){return this._dynamicSize},set:function(t){t||this._trimAlloc(),this._dynamicSize=t}}),n.prototype._byteLength=0,Object.defineProperty(n.prototype,"byteLength",{get:function(){return this._byteLength-this._byteOffset}}),Object.defineProperty(n.prototype,"buffer",{get:function(){return this._trimAlloc(),this._buffer},set:function(t){this._buffer=t,this._dataView=new DataView(this._buffer,this._byteOffset),this._byteLength=this._buffer.byteLength}}),Object.defineProperty(n.prototype,"byteOffset",{get:function(){return this._byteOffset},set:function(t){this._byteOffset=t,this._dataView=new DataView(this._buffer,this._byteOffset),this._byteLength=this._buffer.byteLength}}),Object.defineProperty(n.prototype,"dataView",{get:function(){return this._dataView},set:function(t){this._byteOffset=t.byteOffset,this._buffer=t.buffer,this._dataView=new DataView(this._buffer,this._byteOffset),this._byteLength=this._byteOffset+t.byteLength}}),n.prototype._realloc=function(t){if(this._dynamicSize){var e=this._byteOffset+this.position+t,i=this._buffer.byteLength;if(e<=i)return void(e>this._byteLength&&(this._byteLength=e));for(i<1&&(i=1);e>i;)i*=2;var n=new ArrayBuffer(i),r=new Uint8Array(this._buffer);new Uint8Array(n,0,r.length).set(r),this.buffer=n,this._byteLength=e}},n.prototype._trimAlloc=function(){if(this._byteLength!=this._buffer.byteLength){var t=new ArrayBuffer(this._byteLength),e=new Uint8Array(t),i=new Uint8Array(this._buffer,0,e.length);e.set(i),this.buffer=t}},n.prototype.seek=function(t){var e=Math.max(0,Math.min(this.byteLength,t));this.position=isNaN(e)||!isFinite(e)?0:e},n.prototype.isEof=function(){return this.position>=this.byteLength},n.prototype.mapInt32Array=function(t,e){this._realloc(4*t);var i=new Int32Array(this._buffer,this.byteOffset+this.position,t);return n.arrayToNative(i,null==e?this.endianness:e),this.position+=4*t,i},n.prototype.mapInt16Array=function(t,e){this._realloc(2*t);var i=new Int16Array(this._buffer,this.byteOffset+this.position,t);return n.arrayToNative(i,null==e?this.endianness:e),this.position+=2*t,i},n.prototype.mapInt8Array=function(t){this._realloc(1*t);var e=new Int8Array(this._buffer,this.byteOffset+this.position,t);return this.position+=1*t,e},n.prototype.mapUint32Array=function(t,e){this._realloc(4*t);var i=new Uint32Array(this._buffer,this.byteOffset+this.position,t);return n.arrayToNative(i,null==e?this.endianness:e),this.position+=4*t,i},n.prototype.mapUint16Array=function(t,e){this._realloc(2*t);var i=new Uint16Array(this._buffer,this.byteOffset+this.position,t);return n.arrayToNative(i,null==e?this.endianness:e),this.position+=2*t,i},n.prototype.mapUint8Array=function(t){this._realloc(1*t);var e=new Uint8Array(this._buffer,this.byteOffset+this.position,t);return this.position+=1*t,e},n.prototype.mapFloat64Array=function(t,e){this._realloc(8*t);var i=new Float64Array(this._buffer,this.byteOffset+this.position,t);return n.arrayToNative(i,null==e?this.endianness:e),this.position+=8*t,i},n.prototype.mapFloat32Array=function(t,e){this._realloc(4*t);var i=new Float32Array(this._buffer,this.byteOffset+this.position,t);return n.arrayToNative(i,null==e?this.endianness:e),this.position+=4*t,i},n.prototype.readInt32Array=function(t,e){t=null==t?this.byteLength-this.position/4:t;var i=new Int32Array(t);return n.memcpy(i.buffer,0,this.buffer,this.byteOffset+this.position,t*i.BYTES_PER_ELEMENT),n.arrayToNative(i,null==e?this.endianness:e),this.position+=i.byteLength,i},n.prototype.readInt16Array=function(t,e){t=null==t?this.byteLength-this.position/2:t;var i=new Int16Array(t);return n.memcpy(i.buffer,0,this.buffer,this.byteOffset+this.position,t*i.BYTES_PER_ELEMENT),n.arrayToNative(i,null==e?this.endianness:e),this.position+=i.byteLength,i},n.prototype.readInt8Array=function(t){t=null==t?this.byteLength-this.position:t;var e=new Int8Array(t);return n.memcpy(e.buffer,0,this.buffer,this.byteOffset+this.position,t*e.BYTES_PER_ELEMENT),this.position+=e.byteLength,e},n.prototype.readUint32Array=function(t,e){t=null==t?this.byteLength-this.position/4:t;var i=new Uint32Array(t);return n.memcpy(i.buffer,0,this.buffer,this.byteOffset+this.position,t*i.BYTES_PER_ELEMENT),n.arrayToNative(i,null==e?this.endianness:e),this.position+=i.byteLength,i},n.prototype.readUint16Array=function(t,e){t=null==t?this.byteLength-this.position/2:t;var i=new Uint16Array(t);return n.memcpy(i.buffer,0,this.buffer,this.byteOffset+this.position,t*i.BYTES_PER_ELEMENT),n.arrayToNative(i,null==e?this.endianness:e),this.position+=i.byteLength,i},n.prototype.readUint8Array=function(t){t=null==t?this.byteLength-this.position:t;var e=new Uint8Array(t);return n.memcpy(e.buffer,0,this.buffer,this.byteOffset+this.position,t*e.BYTES_PER_ELEMENT),this.position+=e.byteLength,e},n.prototype.readFloat64Array=function(t,e){t=null==t?this.byteLength-this.position/8:t;var i=new Float64Array(t);return n.memcpy(i.buffer,0,this.buffer,this.byteOffset+this.position,t*i.BYTES_PER_ELEMENT),n.arrayToNative(i,null==e?this.endianness:e),this.position+=i.byteLength,i},n.prototype.readFloat32Array=function(t,e){t=null==t?this.byteLength-this.position/4:t;var i=new Float32Array(t);return n.memcpy(i.buffer,0,this.buffer,this.byteOffset+this.position,t*i.BYTES_PER_ELEMENT),n.arrayToNative(i,null==e?this.endianness:e),this.position+=i.byteLength,i},n.prototype.writeInt32Array=function(t,e){if(this._realloc(4*t.length),t instanceof Int32Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapInt32Array(t.length,e);else for(var i=0;i<t.length;i++)this.writeInt32(t[i],e)},n.prototype.writeInt16Array=function(t,e){if(this._realloc(2*t.length),t instanceof Int16Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapInt16Array(t.length,e);else for(var i=0;i<t.length;i++)this.writeInt16(t[i],e)},n.prototype.writeInt8Array=function(t){if(this._realloc(1*t.length),t instanceof Int8Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapInt8Array(t.length);else for(var e=0;e<t.length;e++)this.writeInt8(t[e])},n.prototype.writeUint32Array=function(t,e){if(this._realloc(4*t.length),t instanceof Uint32Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapUint32Array(t.length,e);else for(var i=0;i<t.length;i++)this.writeUint32(t[i],e)},n.prototype.writeUint16Array=function(t,e){if(this._realloc(2*t.length),t instanceof Uint16Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapUint16Array(t.length,e);else for(var i=0;i<t.length;i++)this.writeUint16(t[i],e)},n.prototype.writeUint8Array=function(t){if(this._realloc(1*t.length),t instanceof Uint8Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapUint8Array(t.length);else for(var e=0;e<t.length;e++)this.writeUint8(t[e])},n.prototype.writeFloat64Array=function(t,e){if(this._realloc(8*t.length),t instanceof Float64Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapFloat64Array(t.length,e);else for(var i=0;i<t.length;i++)this.writeFloat64(t[i],e)},n.prototype.writeFloat32Array=function(t,e){if(this._realloc(4*t.length),t instanceof Float32Array&&(this.byteOffset+this.position)%t.BYTES_PER_ELEMENT==0)n.memcpy(this._buffer,this.byteOffset+this.position,t.buffer,t.byteOffset,t.byteLength),this.mapFloat32Array(t.length,e);else for(var i=0;i<t.length;i++)this.writeFloat32(t[i],e)},n.prototype.readInt32=function(t){var e=this._dataView.getInt32(this.position,null==t?this.endianness:t);return this.position+=4,e},n.prototype.readInt16=function(t){var e=this._dataView.getInt16(this.position,null==t?this.endianness:t);return this.position+=2,e},n.prototype.readInt8=function(){var t=this._dataView.getInt8(this.position);return this.position+=1,t},n.prototype.readUint32=function(t){var e=this._dataView.getUint32(this.position,null==t?this.endianness:t);return this.position+=4,e},n.prototype.readUint16=function(t){var e=this._dataView.getUint16(this.position,null==t?this.endianness:t);return this.position+=2,e},n.prototype.readUint8=function(){var t=this._dataView.getUint8(this.position);return this.position+=1,t},n.prototype.readFloat32=function(t){var e=this._dataView.getFloat32(this.position,null==t?this.endianness:t);return this.position+=4,e},n.prototype.readFloat64=function(t){var e=this._dataView.getFloat64(this.position,null==t?this.endianness:t);return this.position+=8,e},n.prototype.writeInt32=function(t,e){this._realloc(4),this._dataView.setInt32(this.position,t,null==e?this.endianness:e),this.position+=4},n.prototype.writeInt16=function(t,e){this._realloc(2),this._dataView.setInt16(this.position,t,null==e?this.endianness:e),this.position+=2},n.prototype.writeInt8=function(t){this._realloc(1),this._dataView.setInt8(this.position,t),this.position+=1},n.prototype.writeUint32=function(t,e){this._realloc(4),this._dataView.setUint32(this.position,t,null==e?this.endianness:e),this.position+=4},n.prototype.writeUint16=function(t,e){this._realloc(2),this._dataView.setUint16(this.position,t,null==e?this.endianness:e),this.position+=2},n.prototype.writeUint8=function(t){this._realloc(1),this._dataView.setUint8(this.position,t),this.position+=1},n.prototype.writeFloat32=function(t,e){this._realloc(4),this._dataView.setFloat32(this.position,t,null==e?this.endianness:e),this.position+=4},n.prototype.writeFloat64=function(t,e){this._realloc(8),this._dataView.setFloat64(this.position,t,null==e?this.endianness:e),this.position+=8},n.endianness=new Int8Array(new Int16Array([1]).buffer)[0]>0,n.memcpy=function(t,e,i,n,r){var s=new Uint8Array(t,e,r),a=new Uint8Array(i,n,r);s.set(a)},n.arrayToNative=function(t,e){return e==this.endianness?t:this.flipArrayEndianness(t)},n.nativeToEndian=function(t,e){return this.endianness==e?t:this.flipArrayEndianness(t)},n.flipArrayEndianness=function(t){for(var e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength),i=0;i<t.byteLength;i+=t.BYTES_PER_ELEMENT)for(var n=i+t.BYTES_PER_ELEMENT-1,r=i;n>r;n--,r++){var s=e[r];e[r]=e[n],e[n]=s}return t},n.createStringFromArray=function(t){for(var e=[],i=0;i<t.length;i+=32768)e.push(String.fromCharCode.apply(null,t.subarray(i,i+32768)));return e.join("")},n.prototype.failurePosition=0,n.prototype.readStruct=function(t){for(var e,i,n={},r=this.position,s=0;s<t.length;s+=2){if(e=t[s+1],null==(i=this.readType(e,n)))return 0==this.failurePosition&&(this.failurePosition=this.position),this.position=r,null;n[t[s]]=i}return n},n.prototype.readUCS2String=function(t,e){return n.createStringFromArray(this.readUint16Array(t,e))},n.prototype.writeUCS2String=function(t,e,i){null==i&&(i=t.length);for(var n=0;n<t.length&&n<i;n++)this.writeUint16(t.charCodeAt(n),e);for(;n<i;n++)this.writeUint16(0)},n.prototype.readString=function(t,e){return null==e||"ASCII"==e?n.createStringFromArray(this.mapUint8Array(null==t?this.byteLength-this.position:t)):new TextDecoder(e).decode(this.mapUint8Array(t))},n.prototype.writeString=function(t,e,i){if(null==e||"ASCII"==e)if(null!=i){var n=0,r=Math.min(t.length,i);for(n=0;n<r;n++)this.writeUint8(t.charCodeAt(n));for(;n<i;n++)this.writeUint8(0)}else for(var n=0;n<t.length;n++)this.writeUint8(t.charCodeAt(n));else this.writeUint8Array(new TextEncoder(e).encode(t.substring(0,i)))},n.prototype.readCString=function(t){var e=this.byteLength-this.position,i=new Uint8Array(this._buffer,this._byteOffset+this.position),r=e;null!=t&&(r=Math.min(t,e));for(var s=0;s<r&&0!=i[s];s++);var a=n.createStringFromArray(this.mapUint8Array(s));return null!=t?this.position+=r-s:s!=e&&(this.position+=1),a},n.prototype.writeCString=function(t,e){if(null!=e){var i=0,n=Math.min(t.length,e);for(i=0;i<n;i++)this.writeUint8(t.charCodeAt(i));for(;i<e;i++)this.writeUint8(0)}else{for(var i=0;i<t.length;i++)this.writeUint8(t.charCodeAt(i));this.writeUint8(0)}},n.prototype.readType=function(t,e){if("function"==typeof t)return t(this,e);if(!("object"!=(void 0===t?"undefined":s()(t))||t instanceof Array))return t.get(this,e);if(t instanceof Array&&3!=t.length)return this.readStruct(t,e);var i,r=null,a=null,o="ASCII",h=this.position;if("string"==typeof t&&/:/.test(t)){var f=t.split(":");t=f[0],i=f[1],a=null!=e[i]?parseInt(e[i]):parseInt(f[1])}if("string"==typeof t&&/,/.test(t)){var f=t.split(",");t=f[0],o=parseInt(f[1])}switch(t){case"uint8":r=this.readUint8();break;case"int8":r=this.readInt8();break;case"uint16":r=this.readUint16(this.endianness);break;case"int16":r=this.readInt16(this.endianness);break;case"uint32":r=this.readUint32(this.endianness);break;case"int32":r=this.readInt32(this.endianness);break;case"float32":r=this.readFloat32(this.endianness);break;case"float64":r=this.readFloat64(this.endianness);break;case"uint16be":r=this.readUint16(n.BIG_ENDIAN);break;case"int16be":r=this.readInt16(n.BIG_ENDIAN);break;case"uint32be":r=this.readUint32(n.BIG_ENDIAN);break;case"int32be":r=this.readInt32(n.BIG_ENDIAN);break;case"float32be":r=this.readFloat32(n.BIG_ENDIAN);break;case"float64be":r=this.readFloat64(n.BIG_ENDIAN);break;case"uint16le":r=this.readUint16(n.LITTLE_ENDIAN);break;case"int16le":r=this.readInt16(n.LITTLE_ENDIAN);break;case"uint32le":r=this.readUint32(n.LITTLE_ENDIAN);break;case"int32le":r=this.readInt32(n.LITTLE_ENDIAN);break;case"float32le":r=this.readFloat32(n.LITTLE_ENDIAN);break;case"float64le":r=this.readFloat64(n.LITTLE_ENDIAN);break;case"cstring":r=this.readCString(a);break;case"string":r=this.readString(a,o);break;case"u16string":r=this.readUCS2String(a,this.endianness);break;case"u16stringle":r=this.readUCS2String(a,n.LITTLE_ENDIAN);break;case"u16stringbe":r=this.readUCS2String(a,n.BIG_ENDIAN);break;default:if(3==t.length){var u=t[1],i=t[2],l=0;if(l="function"==typeof i?i(e,this,t):"string"==typeof i&&null!=e[i]?parseInt(e[i]):parseInt(i),"string"==typeof u){var p=u.replace(/(le|be)$/,""),c=null;switch(/le$/.test(u)?c=n.LITTLE_ENDIAN:/be$/.test(u)&&(c=n.BIG_ENDIAN),"*"==i&&(l=null),p){case"uint8":r=this.readUint8Array(l);break;case"uint16":r=this.readUint16Array(l,c);break;case"uint32":r=this.readUint32Array(l,c);break;case"int8":r=this.readInt8Array(l);break;case"int16":r=this.readInt16Array(l,c);break;case"int32":r=this.readInt32Array(l,c);break;case"float32":r=this.readFloat32Array(l,c);break;case"float64":r=this.readFloat64Array(l,c);break;case"cstring":case"utf16string":case"string":if(null==l)for(r=[];!this.isEof();){var y=this.readType(u,e);if(null==y)break;r.push(y)}else{r=new Array(l);for(var d=0;d<l;d++)r[d]=this.readType(u,e)}}}else if("*"==i)for(r=[],this.buffer;;){var _=this.position;try{var b=this.readType(u,e);if(null==b){this.position=_;break}r.push(b)}catch(t){this.position=_;break}}else{r=new Array(l);for(var d=0;d<l;d++){var y=this.readType(u,e);if(null==y)return null;r[d]=y}}break}}return null!=a&&(this.position=h+a),r},n.prototype.writeStruct=function(t,e){for(var i=0;i<t.length;i+=2){var n=t[i+1];this.writeType(n,e[t[i]],e)}},n.prototype.writeType=function(t,e,i){if("function"==typeof t)return t(this,e);if("object"==(void 0===t?"undefined":s()(t))&&!(t instanceof Array))return t.set(this,e,i);var r=null,a="ASCII",o=this.position;if("string"==typeof t&&/:/.test(t)){var h=t.split(":");t=h[0],r=parseInt(h[1])}if("string"==typeof t&&/,/.test(t)){var h=t.split(",");t=h[0],a=parseInt(h[1])}switch(t){case"uint8":this.writeUint8(e);break;case"int8":this.writeInt8(e);break;case"uint16":this.writeUint16(e,this.endianness);break;case"int16":this.writeInt16(e,this.endianness);break;case"uint32":this.writeUint32(e,this.endianness);break;case"int32":this.writeInt32(e,this.endianness);break;case"float32":this.writeFloat32(e,this.endianness);break;case"float64":this.writeFloat64(e,this.endianness);break;case"uint16be":this.writeUint16(e,n.BIG_ENDIAN);break;case"int16be":this.writeInt16(e,n.BIG_ENDIAN);break;case"uint32be":this.writeUint32(e,n.BIG_ENDIAN);break;case"int32be":this.writeInt32(e,n.BIG_ENDIAN);break;case"float32be":this.writeFloat32(e,n.BIG_ENDIAN);break;case"float64be":this.writeFloat64(e,n.BIG_ENDIAN);break;case"uint16le":this.writeUint16(e,n.LITTLE_ENDIAN);break;case"int16le":this.writeInt16(e,n.LITTLE_ENDIAN);break;case"uint32le":this.writeUint32(e,n.LITTLE_ENDIAN);break;case"int32le":this.writeInt32(e,n.LITTLE_ENDIAN);break;case"float32le":this.writeFloat32(e,n.LITTLE_ENDIAN);break;case"float64le":this.writeFloat64(e,n.LITTLE_ENDIAN);break;case"cstring":this.writeCString(e,r);break;case"string":this.writeString(e,a,r);break;case"u16string":this.writeUCS2String(e,this.endianness,r);break;case"u16stringle":this.writeUCS2String(e,n.LITTLE_ENDIAN,r);break;case"u16stringbe":this.writeUCS2String(e,n.BIG_ENDIAN,r);break;default:if(3==t.length){for(var f=t[1],u=0;u<e.length;u++)this.writeType(f,e[u]);break}this.writeStruct(t,e)}null!=r&&(this.position=o,this._realloc(r),this.position=o+r)},"function"==typeof define&&i(125)&&define("DataStream",[],function(){return n}),"object"===s()(t)&&t&&t.exports&&(t.exports=n)}).call(e,i(127)(t))},function(t,e,i){"use strict";function n(t,e,i){return new s.a(function(n,r){var s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType=e,i&&(s.onprogress=function(t){if(t.lengthComputable){var e=t.loaded/t.total*100;i(e)}}),s.onload=function(){200===s.status?n(s.response):r(Error("Data didn't load successfully; error code: "+s.statusText))},s.onerror=function(){return r(Error("A network error occurred while fetching data."))},s.send()})}i.d(e,"a",function(){return n});var r=i(63),s=i.n(r);i(35)},,,,,,,,,,,,,,,,,,function(t,e,i){function n(t){i(105)}var r=i(2)(i(56),i(121),n,null,null);t.exports=r.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(34),r=i(54),s=i.n(r),a=i(33);n.a.config.productionTip=!1,new n.a({el:"#app",router:a.a,render:function(t){return t(s.a)}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(110),r=i.n(n),s=i(113),a=i.n(s);e.default={name:"app",components:{"ln-header":r.a,"ln-menu":a.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"about",data:function(){return{msg:"About the app"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(109),r=i.n(n),s=i(36);e.default={name:"data",components:{"dataset-box":r.a},data:function(){return{dataList:{}}},mounted:function(){var t=this;i.i(s.a)("data/index.json","json").then(function(e){for(var i=0;i<e.length;i+=1)e[i].id=i;t.dataList=e})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(36),r=i(35);e.default={name:"dataset-box",props:["name","path"],data:function(){return{progress:"Not loaded."}},methods:{buttonFunction:function(){var t=this;i.i(n.a)("data/"+this.path,"arraybuffer",function(e){t.progress="Loading: "+e.toPrecision(3)+"%"}).then(function(e){t.progress="Loaded.";var i=new r.a(e);i.endianness=i.BIG_ENDIAN,console.log(i)})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"index",data:function(){return{msg:"Welcome"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"limbnetApp"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(33),r=n.a.options.routes;e.default={name:"ln-menu",data:function(){return{routes:r.filter(function(t){return t.title})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,i){var n=i(2)(i(57),i(115),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(2)(null,i(116),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(2)(i(58),i(114),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(2)(i(59),i(122),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(103)}var r=i(2)(null,i(117),n,"data-v-55c32f9c",null);t.exports=r.exports},function(t,e,i){var n=i(2)(i(60),i(118),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(104)}var r=i(2)(i(61),i(120),n,"data-v-7cb5278a",null);t.exports=r.exports},function(t,e,i){var n=i(2)(i(62),i(119),null,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ln-data"}},[i("h2",[t._v("Dataset information")]),t._v(" "),t._l(t.dataList,function(t){return i("dataset-box",{key:t.id,attrs:{name:t.name,path:t.data}})})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ln-about"}},[i("h2",[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),i("p",[t._v("\n    For further information, contact us.\n  ")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("\n    Github repository is "),i("a",{attrs:{href:"https://github.com/limbnet/limbnet.github.io"}},[t._v("here")]),t._v(".\n  ")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ln-comp-model"}},[i("h2",[t._v("Computational model")]),t._v(" "),i("p",[t._v("Here are the details of the computational model that was used.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ln-header"},[i("h1",[t._v("Morphomovie Experiment")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ln-index"}},[i("h2",[t._v(" "+t._s(t.msg)+" ")]),t._v(" "),i("p",[t._v("\n    Welcome to the morphomovie app.\n  ")]),t._v(" "),i("p",[t._v("\n    Stay tuned for updates!\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ln-menu"},t._l(t.routes,function(e){return i("div",{staticClass:"ln-menu-link"},[i("p",[i("router-link",{attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")])],1)])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ln-morphomovie"}},[i("h2",[t._v("Morphomovie Viewer")]),t._v(" "),i("h2",[t._v("Time: "),i("span",{attrs:{id:"timePoint"}})]),t._v(" "),i("div",{attrs:{id:"timeControls"}}),t._v(" "),i("br"),t._v(" "),i("input",{attrs:{id:"timeSlider",type:"range",min:"0",max:"100",value:"0",step:"1"}}),t._v(" "),i("br"),t._v(" "),i("canvas",{attrs:{id:"mainDrawing",width:"450",height:"300"}}),t._v(" "),i("h2",[t._v("Chemical species: ")]),t._v(" "),i("div",{attrs:{id:"speciesList"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("ln-header"),t._v(" "),i("hr"),t._v(" "),i("router-view"),t._v(" "),i("hr"),t._v(" "),i("ln-menu")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dataset-box"},[i("p",[t._v(t._s(t.name)+"\n    "),i("button",{on:{click:t.buttonFunction}},[t._v("\n      Fetch\n    ")]),t._v("\n    "+t._s(t.progress)+"\n  ")])])},staticRenderFns:[]}}]),[55]);
//# sourceMappingURL=app.460c82d680b35f286630.js.map