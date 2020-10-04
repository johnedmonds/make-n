(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/math24wasm.js":
/*!****************************!*\
  !*** ../pkg/math24wasm.js ***!
  \****************************/
/*! exports provided: compute_match_iterator, next_match, free_match_iterator, __wbindgen_json_serialize, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbindgen_string_get, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math24wasm_bg.wasm */ \"../pkg/math24wasm_bg.wasm\");\n/* harmony import */ var _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math24wasm_bg.js */ \"../pkg/math24wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compute_match_iterator\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"compute_match_iterator\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"next_match\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"next_match\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"free_match_iterator\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"free_match_iterator\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_json_serialize\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_get\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return _math24wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_rethrow\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/math24wasm.js?");

/***/ }),

/***/ "../pkg/math24wasm_bg.js":
/*!*******************************!*\
  !*** ../pkg/math24wasm_bg.js ***!
  \*******************************/
/*! exports provided: compute_match_iterator, next_match, free_match_iterator, __wbindgen_json_serialize, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbindgen_string_get, __wbindgen_rethrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compute_match_iterator\", function() { return compute_match_iterator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"next_match\", function() { return next_match; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"free_match_iterator\", function() { return free_match_iterator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return __wbindgen_json_serialize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony import */ var _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math24wasm_bg.wasm */ \"../pkg/math24wasm_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n/**\n* @param {number} target\n* @param {any} numbers\n* @returns {number}\n*/\nfunction compute_match_iterator(target, numbers) {\n    var ret = _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"compute_match_iterator\"](target, addHeapObject(numbers));\n    return ret;\n}\n\n/**\n* @param {number} iterator\n* @returns {string | undefined}\n*/\nfunction next_match(iterator) {\n    try {\n        const retptr = _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].value - 16;\n        _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].value = retptr;\n        _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"next_match\"](retptr, iterator);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        let v0;\n        if (r0 !== 0) {\n            v0 = getStringFromWasm0(r0, r1).slice();\n            _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n        }\n        return v0;\n    } finally {\n        _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].value += 16;\n    }\n}\n\n/**\n* @param {number} iterator\n*/\nfunction free_match_iterator(iterator) {\n    _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"free_match_iterator\"](iterator);\n}\n\nconst __wbindgen_json_serialize = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = JSON.stringify(obj === undefined ? null : obj);\n    var ptr0 = passStringToWasm0(ret, _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_string_get = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = typeof(obj) === 'string' ? obj : undefined;\n    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _math24wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    throw takeObject(arg0);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/math24wasm_bg.js?");

/***/ }),

/***/ "../pkg/math24wasm_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/math24wasm_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, compute_match_iterator, next_match, free_match_iterator, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./math24wasm_bg.js */ \"../pkg/math24wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/math24wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var math24wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math24wasm */ \"../pkg/math24wasm.js\");\n\r\n\r\nfunction parseInput() {\r\n    return {\r\n        target: parseInt(document.getElementById(\"target\").value),\r\n        numbers: document.getElementById(\"numbers\").value.split(\" \").map((number) => parseInt(number)),\r\n        limit: parseInt(document.getElementById(\"limit\").value)\r\n    }\r\n}\r\n\r\nfunction removeNoResults() {\r\n    const noresults = document.getElementById(\"noresults\");\r\n    if (noresults != null) {\r\n        noresults.parentElement.removeChild(noresults);\r\n    }\r\n}\r\n\r\nfunction validateRequest({target, numbers, limit}) {\r\n    const errors = [];\r\n    if (isNaN(target)) {\r\n        errors.push(\"Target must be a number.\");\r\n    }\r\n    if (isNaN(limit)) {\r\n        errors.push(\"Limit must be a number.\");\r\n    }\r\n    if (numbers.length == 0) {\r\n        errors.push(\"Must enter some numbers.\");\r\n    }\r\n    if (numbers.some(isNaN)) {\r\n        errors.push(\"Numbers must be valid and separated by spaces.\");\r\n    }\r\n    return errors;\r\n}\r\n\r\nfunction makeResultElement(s) {\r\n    const listItem = document.createElement(\"li\");\r\n    listItem.innerText = s;\r\n    return listItem;\r\n}\r\n\r\ndocument.getElementById(\"search\").onclick = function() {\r\n    removeNoResults();\r\n    const request = parseInput();   \r\n    const resultsElement = document.getElementById(\"results\");\r\n    resultsElement.innerHTML = \"\";\r\n    \r\n    const errors = validateRequest(request);\r\n    if (errors.length != 0) {\r\n        errors.forEach(error => {\r\n            resultsElement.appendChild(makeResultElement(\"Error: \" + error));\r\n        });\r\n        return;\r\n    }\r\n\r\n    let matchCount = 0;\r\n    const iterator = math24wasm__WEBPACK_IMPORTED_MODULE_0__[\"compute_match_iterator\"](request.target, request.numbers);\r\n    for (let i = 0; i < request.limit; i++) {\r\n        const nextMatch = math24wasm__WEBPACK_IMPORTED_MODULE_0__[\"next_match\"](iterator);\r\n        if (!nextMatch) {\r\n            break;\r\n        }\r\n        matchCount++;\r\n        if (matchCount > request.limit) {\r\n            break;\r\n        }\r\n        resultsElement.appendChild(makeResultElement(nextMatch));\r\n    }\r\n    math24wasm__WEBPACK_IMPORTED_MODULE_0__[\"free_match_iterator\"](iterator);\r\n};\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);