/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);
// @ts-nocheck

function initView() {
  function injectStyles(context) {
    var style0 = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 22);
    if (style0.__inject__) style0.__inject__(context);
  }
  typeof injectStyles === 'function' && injectStyles();
  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!*******************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages.json?{"type":"view"} ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
window.__uniConfig = {
  "window": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  }
};
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);
});
__definePage('pages/first/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/first/index.vue?mpType=page */ 14).default);
});

/***/ }),
/* 2 */
/*!**************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 7);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!********************************************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c(
        "div",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
          _c(
            "div",
            { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
            [
              _c(
                "div",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c("p", { attrs: { _i: 4 } }, [_vm._v("登陆界面")]),
                  _vm._$g(5, "i")
                    ? _c("div", { attrs: { _i: 5 } }, [
                        _vm._v(
                          "--------" + _vm._$g(5, "t0-0") + "---------------"
                        ),
                      ])
                    : _vm._e(),
                  _c(
                    "div",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [
                      _c(
                        "p",
                        { attrs: { _i: 7 } },
                        [
                          _vm._v("用户名:"),
                          _c("v-uni-input", {
                            staticStyle: { border: "1px solid #d2d2d2" },
                            attrs: { type: "text", name: "username", _i: 8 },
                            model: {
                              value: _vm._$g(8, "v-model"),
                              callback: function ($$v) {
                                _vm.$handleVModelEvent(8, $$v)
                              },
                              expression: "input_val[0]",
                            },
                          }),
                        ],
                        1
                      ),
                      _c(
                        "p",
                        { attrs: { _i: 9 } },
                        [
                          _vm._v("密 码:"),
                          _c("v-uni-input", {
                            attrs: {
                              type: "password",
                              name: "password",
                              _i: 10,
                            },
                            model: {
                              value: _vm._$g(10, "v-model"),
                              callback: function ($$v) {
                                _vm.$handleVModelEvent(10, $$v)
                              },
                              expression: "input_val[1]",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._$g(11, "i")
                        ? _c(
                            "div",
                            { attrs: { _i: 11 } },
                            [
                              _vm._v("确认密码:"),
                              _c("v-uni-input", {
                                attrs: {
                                  type: "password",
                                  name: "password2",
                                  _i: 12,
                                },
                                model: {
                                  value: _vm._$g(12, "v-model"),
                                  callback: function ($$v) {
                                    _vm.$handleVModelEvent(12, $$v)
                                  },
                                  expression: "input_val[2]",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(13, "i")
                        ? _c(
                            "div",
                            { attrs: { _i: 13 } },
                            [
                              _vm._v("新密码:"),
                              _c("v-uni-input", {
                                attrs: {
                                  type: "password",
                                  name: "new_password",
                                  _i: 14,
                                },
                                model: {
                                  value: _vm._$g(14, "v-model"),
                                  callback: function ($$v) {
                                    _vm.$handleVModelEvent(14, $$v)
                                  },
                                  expression: "input_val[3]",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _c(
                        "v-uni-button",
                        {
                          staticClass: _vm._$g(15, "sc"),
                          attrs: { _i: 15 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [_vm._v("确定")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                    [
                      _vm._$g(17, "i")
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$g(17, "sc"),
                              attrs: { _i: 17 },
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { _i: 18 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [_vm._v("修改密码")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(19, "i")
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$g(19, "sc"),
                              attrs: { _i: 19 },
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { _i: 20 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [_vm._v("注册")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(21, "i")
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$g(21, "sc"),
                              attrs: { _i: 21 },
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { _i: 22 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [_vm._v("登录")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(23, "i")
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$g(23, "sc"),
                              attrs: { _i: 23 },
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { _i: 24 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [_vm._v("注册")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(25, "i")
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$g(25, "sc"),
                              attrs: { _i: 25 },
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { _i: 26 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [_vm._v("修改密码")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._$g(27, "i")
                        ? _c(
                            "div",
                            {
                              staticClass: _vm._$g(27, "sc"),
                              attrs: { _i: 27 },
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: { _i: 28 },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$handleViewEvent($event)
                                    },
                                  },
                                },
                                [_vm._v("登录")]
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**************************************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 8);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 9);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("cb6833f2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 9 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/index/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n.logo {\n\theight: 200rpx;\n\twidth: 200rpx;\n\tmargin-top: 200rpx;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 50rpx;\n}\n.text-area {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.title {\n\tfont-size: 36rpx;\n\tcolor: #8f8f94;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 12);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}|@media.+?\{/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 12 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/*!**************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?mpType=page ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=50aa199a&mpType=page */ 15);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/first/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!********************************************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=template&id=50aa199a&mpType=page ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=50aa199a&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_50aa199a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=template&id=50aa199a&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticStyle: {
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
      },
      attrs: { _i: 0 },
    },
    [
      _c(
        "header",
        { attrs: { id: "top", _i: 1 } },
        [
          _c(
            "div",
            { attrs: { id: "top_box", _i: 2 } },
            [
              _c(
                "ul",
                { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
                [
                  _c("li", { attrs: { _i: 4 } }, [
                    _vm._v("用户名: " + _vm._$g(4, "t0-0")),
                  ]),
                  _c(
                    "li",
                    { attrs: { _i: 5 } },
                    [
                      _c(
                        "a",
                        {
                          attrs: { _i: 6 },
                          on: {
                            click: function ($event) {
                              return _vm.$handleViewEvent($event)
                            },
                          },
                        },
                        [_vm._v("退出登录")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "div",
        {
          staticStyle: {
            display: "flex",
            "flex-direction": "column",
            "align-items": "center",
          },
          attrs: { _i: 7 },
        },
        [
          _c("br", { attrs: { _i: 8 } }),
          _c("br", { attrs: { _i: 9 } }),
          _c(
            "span",
            { staticStyle: { "white-space": "nowrap" }, attrs: { _i: 10 } },
            [
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(11, "sc"),
                  attrs: { _i: 11 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("查询系统")]
              ),
              _c("span", {
                attrs: { _i: 12 },
                domProps: { innerHTML: _vm._s(_vm._$g(12, "v-html")) },
              }),
              _c(
                "v-uni-button",
                {
                  staticClass: _vm._$g(13, "sc"),
                  attrs: { _i: 13 },
                  on: {
                    click: function ($event) {
                      return _vm.$handleViewEvent($event)
                    },
                  },
                },
                [_vm._v("修改信息")]
              ),
              _c("span", {
                attrs: { _i: 14 },
                domProps: { innerHTML: _vm._s(_vm._$g(14, "v-html")) },
              }),
              _vm._$g(15, "i")
                ? _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(15, "sc"),
                      attrs: { _i: 15 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("用户管理")]
                  )
                : _vm._e(),
              _c("span", {
                attrs: { _i: 16 },
                domProps: { innerHTML: _vm._s(_vm._$g(16, "v-html")) },
              }),
            ],
            1
          ),
          _c("br", { attrs: { _i: 17 } }),
          _c("br", { attrs: { _i: 18 } }),
          _c("br", { attrs: { _i: 19 } }),
          _vm._$g(20, "i")
            ? _c(
                "div",
                {
                  staticStyle: {
                    display: "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                  },
                  attrs: { _i: 20 },
                },
                [
                  _c("h2", { attrs: { _i: 21 } }, [_vm._v("查询系统")]),
                  _c("p", { attrs: { _i: 22 } }, [
                    _vm._v("当前时间" + _vm._$g(22, "t0-0")),
                  ]),
                  _c("hr", {
                    staticStyle: { width: "100%", size: "3em" },
                    attrs: { _i: 23 },
                  }),
                  _vm._l(_vm._$g(24, "f"), function (each, index, $20, $30) {
                    return _c(
                      "div",
                      {
                        key: each,
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "column",
                          "align-items": "center",
                        },
                        attrs: { _i: "24-" + $30 },
                      },
                      [
                        _c("hr", {
                          staticStyle: { width: "100%", size: "3em" },
                          attrs: { _i: "25-" + $30 },
                        }),
                      ],
                      1
                    )
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm._$g(26, "i")
            ? _c(
                "div",
                { staticStyle: { display: "inline-block" }, attrs: { _i: 26 } },
                [
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 27 } },
                    [_vm._v("设备产品ID：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 28 },
                    model: {
                      value: _vm._$g(28, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(28, $$v)
                      },
                      expression: "input_val[0]",
                    },
                  }),
                  _c("br", { attrs: { _i: 29 } }),
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 30 } },
                    [_vm._v("密钥：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 31 },
                    model: {
                      value: _vm._$g(31, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(31, $$v)
                      },
                      expression: "input_val[1]",
                    },
                  }),
                  _c("br", { attrs: { _i: 32 } }),
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 33 } },
                    [_vm._v("备注：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 34 },
                    model: {
                      value: _vm._$g(34, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(34, $$v)
                      },
                      expression: "input_val[2]",
                    },
                  }),
                  _c("br", { attrs: { _i: 35 } }),
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 36 } },
                    [_vm._v("报警邮箱：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 37 },
                    model: {
                      value: _vm._$g(37, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(37, $$v)
                      },
                      expression: "input_val[3]",
                    },
                  }),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(38, "sc"),
                      staticStyle: {
                        display: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                      },
                      attrs: { _i: 38 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("新增/修改设备配置")]
                  ),
                  _c("br", { attrs: { _i: 39 } }),
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 40 } },
                    [_vm._v("引脚Id：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 41 },
                    model: {
                      value: _vm._$g(41, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(41, $$v)
                      },
                      expression: "input_val[4]",
                    },
                  }),
                  _c("br", { attrs: { _i: 42 } }),
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 43 } },
                    [_vm._v("引脚备注：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 44 },
                    model: {
                      value: _vm._$g(44, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(44, $$v)
                      },
                      expression: "input_val[5]",
                    },
                  }),
                  _c("br", { attrs: { _i: 45 } }),
                  _c(
                    "v-uni-label",
                    { staticStyle: { float: "left" }, attrs: { _i: 46 } },
                    [_vm._v("引脚报警配置：")]
                  ),
                  _c("v-uni-input", {
                    staticStyle: {
                      border: "0.5px solid #378888",
                      "white-space": "nowrap",
                    },
                    attrs: { _i: 47 },
                    model: {
                      value: _vm._$g(47, "v-model"),
                      callback: function ($$v) {
                        _vm.$handleVModelEvent(47, $$v)
                      },
                      expression: "input_val[6]",
                    },
                  }),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(48, "sc"),
                      staticStyle: {
                        display: "flex",
                        "flex-direction": "column",
                        "align-items": "center",
                      },
                      attrs: { _i: 48 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("新增/修改子引脚配置")]
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._$g(49, "i")
            ? _c(
                "div",
                {
                  staticStyle: {
                    display: "flex",
                    "flex-direction": "column",
                    "align-items": "center",
                  },
                  attrs: { _i: 49 },
                },
                [
                  _c("h2", { attrs: { _i: 50 } }, [_vm._v("账号管理")]),
                  _c(
                    "p",
                    { attrs: { _i: 51 } },
                    [
                      _vm._v("账号"),
                      _c("v-uni-input", {
                        staticStyle: { border: "1" },
                        attrs: { _i: 52 },
                        model: {
                          value: _vm._$g(52, "v-model"),
                          callback: function ($$v) {
                            _vm.$handleVModelEvent(52, $$v)
                          },
                          expression: "input_val[0]",
                        },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "p",
                    { attrs: { _i: 53 } },
                    [
                      _vm._v("新密码"),
                      _c("v-uni-input", {
                        attrs: { _i: 54 },
                        model: {
                          value: _vm._$g(54, "v-model"),
                          callback: function ($$v) {
                            _vm.$handleVModelEvent(54, $$v)
                          },
                          expression: "input_val[1]",
                        },
                      }),
                    ],
                    1
                  ),
                  _c("br", { attrs: { _i: 55 } }),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(56, "sc"),
                      attrs: { _i: 56 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("修改")]
                  ),
                  _vm._v(""),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(57, "sc"),
                      attrs: { _i: 57 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("注册")]
                  ),
                  _c("hr", {
                    staticStyle: { width: "25%", size: "3em" },
                    attrs: { _i: 58 },
                  }),
                  _c("h2", { attrs: { _i: 59 } }, [_vm._v("查询")]),
                  _c("br", { attrs: { _i: 60 } }),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(61, "sc"),
                      attrs: { _i: 61 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("查询")]
                  ),
                  _c("br", { attrs: { _i: 62 } }),
                  _c("br", { attrs: { _i: 63 } }),
                  _c(
                    "table",
                    { attrs: { border: "1", _i: 64 } },
                    [
                      _c(
                        "tr",
                        { attrs: { _i: 65 } },
                        [
                          _c("td", { attrs: { _i: 66 } }, [_vm._v("账户")]),
                          _c("td", { attrs: { _i: 67 } }, [_vm._v("密码")]),
                          _c("td", { attrs: { _i: 68 } }, [_vm._v("操作")]),
                        ],
                        1
                      ),
                      _vm._l(
                        _vm._$g(69, "f"),
                        function (each, index, $21, $31) {
                          return _c(
                            "tr",
                            { key: each, attrs: { _i: "69-" + $31 } },
                            [
                              _c("td", {
                                attrs: { _i: "70-" + $31 },
                                domProps: {
                                  textContent: _vm._s(
                                    _vm._$g("70-" + $31, "v-text")
                                  ),
                                },
                              }),
                              _c("td", {
                                attrs: { _i: "71-" + $31 },
                                domProps: {
                                  textContent: _vm._s(
                                    _vm._$g("71-" + $31, "v-text")
                                  ),
                                },
                              }),
                              _c(
                                "td",
                                { attrs: { _i: "72-" + $31 } },
                                [
                                  _c(
                                    "v-uni-button",
                                    {
                                      staticClass: _vm._$g("73-" + $31, "sc"),
                                      attrs: { _i: "73-" + $31 },
                                      on: {
                                        click: function ($event) {
                                          return _vm.$handleViewEvent($event)
                                        },
                                      },
                                    },
                                    [_vm._v("删除用户")]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        }
                      ),
                    ],
                    2
                  ),
                  _c("br", { attrs: { _i: 74 } }),
                  _c("br", { attrs: { _i: 75 } }),
                  _c("hr", {
                    staticStyle: { width: "25%", size: "3em" },
                    attrs: { _i: 76 },
                  }),
                  _vm._v("开关设置:"),
                  _c("br", { attrs: { _i: 77 } }),
                  _c("br", { attrs: { _i: 78 } }),
                  _c("br", { attrs: { _i: 79 } }),
                  _c("br", { attrs: { _i: 80 } }),
                  _c("hr", {
                    staticStyle: { width: "25%", size: "3em" },
                    attrs: { _i: 81 },
                  }),
                  _vm._v("删除文件/文件夹"),
                  _c("br", { attrs: { _i: 82 } }),
                  _c("br", { attrs: { _i: 83 } }),
                  _c(
                    "p",
                    { attrs: { _i: 84 } },
                    [
                      _vm._v("文件/文件夹相对路径路径:(/src)/files/"),
                      _c("v-uni-input", {
                        staticStyle: {
                          "background-color": "rgb(211, 211, 215)",
                        },
                        attrs: { _i: 85 },
                        model: {
                          value: _vm._$g(85, "v-model"),
                          callback: function ($$v) {
                            _vm.$handleVModelEvent(85, $$v)
                          },
                          expression: "input_val[0]",
                        },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "v-uni-button",
                    {
                      staticClass: _vm._$g(86, "sc"),
                      attrs: { _i: 86 },
                      on: {
                        click: function ($event) {
                          return _vm.$handleViewEvent($event)
                        },
                      },
                    },
                    [_vm._v("删除文件/文件夹")]
                  ),
                  _c("br", { attrs: { _i: 87 } }),
                  _c("br", { attrs: { _i: 88 } }),
                  _c("br", { attrs: { _i: 89 } }),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!**************************************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 18);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_software_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      wxsProps: {}
    };
  },
  components: {}
};
exports.default = _default;

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 20);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 21);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("46b35265", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/pages/first/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n}\n.logo {\n\theight: 200rpx;\n\twidth: 200rpx;\n\tmargin-top: 200rpx;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-bottom: 50rpx;\n}\n.text-area {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.title {\n\tfont-size: 36rpx;\n\tcolor: #8f8f94;\n}\n\n/* .charts{width: 750upx; height:500upx;background-color: #FFFFFF;} */\n.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
/*!*********************************************************************************!*\
  !*** C:/Users/W/Desktop/remotecontrol/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 23);
/* harmony import */ var _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_E_software_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_E_software_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_software_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("78454054", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 24 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/W/Desktop/remotecontrol/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! mobi.css v3.1.1 http://getmobicss.com */html{-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;box-sizing:border-box;text-size-adjust:100%}*,:after,:before{box-sizing:inherit}body{background-color:#fff;color:#333;font-size:1rem;line-height:1.5;margin:0}body,uni-button,uni-input,select,uni-textarea{font-family:-apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}h1,h2,h3,h4,h5,h6{margin:1.875rem 0 0}address,blockquote,dl,figure,hr,ol,p,pre,table,ul{margin:.9375rem 0 0}h1,h2,h3,h4,h5,h6{font-weight:600}h1{font-size:2rem}h2{font-size:1.625rem}h3{font-size:1.375rem}h4{font-size:1.25rem}h5{font-size:1.125rem}h6{font-size:1rem}a{-webkit-text-decoration-skip:objects;color:#267fd9;text-decoration:none}a:active,a:hover{text-decoration:underline}b,dt,strong{font-weight:600}code,kbd,samp{background-color:#f2f2f2;font-size:85%;padding:.2em .3em}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}pre{-webkit-overflow-scrolling:touch;background-color:#f2f2f2;line-height:1.2;overflow:auto;padding:.9375rem}pre,pre code{font-size:.8125rem}pre code{background-color:transparent;padding:0}blockquote{border-left:5px solid #ddd;color:#777;padding-left:.9375rem}ol,ul{padding-left:1.875rem}dd,dt,ol ol,ol ul,ul ol,ul ul{margin:0}hr{border:0;border-top:1px solid #ddd}small,sub,sup{font-size:85%}sub,sup{line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.2em}sup{top:-.4em}address,time{font-style:normal}mark{background-color:#ff0;color:#333;padding:0 .2em}rt{font-size:60%}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:0;text-decoration:underline;text-decoration:underline dotted}uni-audio:not([controls]){display:none;height:0}img{border-style:none;vertical-align:middle}uni-audio,img,uni-video{max-width:100%}figcaption{color:#777;font-size:85%}[role=button]{cursor:pointer}[role=button],a,area,uni-button,uni-input,uni-label,select,summary,uni-textarea{touch-action:manipulation}::-webkit-file-upload-button,[type=reset],[type=submit],uni-button,html [type=button]{-webkit-appearance:button;appearance:button}[type=search]{-webkit-appearance:none;appearance:none}::-webkit-file-upload-button{font:inherit}[hidden]{display:none}fieldset{border:1px solid #ddd;margin:.9375rem 0 0;padding:0 .9375rem .9375rem}legend{padding:0 .2em}optgroup{color:#777;font-style:normal;font-weight:400}option{color:#333}uni-progress{max-width:100%}.container,.container-fluid,.container-wider{flex-grow:1;overflow:hidden;padding:0 .9375rem .9375rem}.container{max-width:50rem}.container-wider{max-width:75rem}.flex-bottom,.flex-center,.flex-left,.flex-middle,.flex-right,.flex-top,.flex-vertical{display:flex;flex-flow:row nowrap}.flex-bottom,.flex-center,.flex-left,.flex-middle,.flex-right,.flex-top,.flex-vertical.flex-bottom,.flex-vertical.flex-center,.flex-vertical.flex-left,.flex-vertical.flex-middle,.flex-vertical.flex-right,.flex-vertical.flex-top{-ms-flex-align:stretch;-ms-flex-pack:start;-webkit-align-items:stretch;-webkit-box-align:stretch;-webkit-box-pack:start;-webkit-justify-content:flex-start;align-items:stretch;justify-content:flex-start}.flex-center,.flex-vertical.flex-middle{justify-content:center}.flex-right,.flex-vertical.flex-bottom{justify-content:flex-end}.flex-top,.flex-vertical.flex-left{align-items:flex-start}.flex-middle,.flex-vertical.flex-center{align-items:center}.flex-bottom,.flex-vertical.flex-right{align-items:flex-end}.units-gap{margin-left:-.46875rem;margin-right:-.46875rem}.units-gap>.unit,.units-gap>.unit-0,.units-gap>.unit-1,.units-gap>.unit-1-2,.units-gap>.unit-1-3,.units-gap>.unit-1-4,.units-gap>.unit-1-on-mobile,.units-gap>.unit-2-3,.units-gap>.unit-3-4{padding-left:.46875rem;padding-right:.46875rem}.units-gap-big{margin-left:-.9375rem;margin-right:-.9375rem}.units-gap-big>.unit,.units-gap-big>.unit-0,.units-gap-big>.unit-1,.units-gap-big>.unit-1-2,.units-gap-big>.unit-1-3,.units-gap-big>.unit-1-4,.units-gap-big>.unit-1-on-mobile,.units-gap-big>.unit-2-3,.units-gap-big>.unit-3-4{padding-left:.9375rem;padding-right:.9375rem}.unit{-ms-flex-positive:1;-ms-flex-preferred-size:0;-webkit-box-flex:1;-webkit-flex-basis:0;-webkit-flex-grow:1;flex-basis:0;flex-grow:1;max-width:100%}.unit-1,.unit-1-2,.unit-1-3,.unit-1-4,.unit-1-on-mobile,.unit-2-3,.unit-3-4{flex-shrink:0}.unit-1{flex-basis:100%;max-width:100%}.unit-1-2{flex-basis:50%;max-width:50%}.unit-1-3{flex-basis:33.33%;max-width:33.33%}.unit-2-3{flex-basis:66.67%;max-width:66.67%}.unit-1-4{flex-basis:25%;max-width:25%}.unit-3-4{flex-basis:75%;max-width:75%}.flex-vertical{flex-direction:column}.flex-vertical>.unit,.flex-vertical>.unit-0,.flex-vertical>.unit-1,.flex-vertical>.unit-1-2,.flex-vertical>.unit-1-3,.flex-vertical>.unit-1-4,.flex-vertical>.unit-1-on-mobile,.flex-vertical>.unit-2-3,.flex-vertical>.unit-3-4{max-width:none}.flex-vertical>.unit-1{max-height:100%}.flex-vertical>.unit-1-2{max-height:50%}.flex-vertical>.unit-1-3{max-height:33.33%}.flex-vertical>.unit-2-3{max-height:66.67%}.flex-vertical>.unit-1-4{max-height:25%}.flex-vertical>.unit-3-4{max-height:75%}.flex-wrap{flex-wrap:wrap}@media (max-width:767px){.unit-1-on-mobile{flex-basis:100%;max-width:100%}.flex-vertical>.unit-1-on-mobile{max-height:100%}}.top-gap-big{margin-top:1.875rem!important}.top-gap{margin-top:.9375rem!important}.top-gap-0{margin-top:0!important}@media (max-width:767px){.hide-on-mobile{display:none!important}}@media (min-width:768px){.show-on-mobile{display:none!important}}.table{background-color:#fff;border:0;border-collapse:collapse;border-spacing:0;width:100%}.table caption{caption-side:bottom;color:#777;font-size:85%}.table caption,.table td,.table th{padding:.3125rem;text-align:left}.table td,.table th{border:0;border-bottom:1px solid #ddd}.table th{background-color:#f2f2f2;font-weight:600}.btn{-webkit-appearance:none;appearance:none;background-color:#fff;border:1px solid #ddd;border-radius:.1875rem;color:#333;cursor:pointer;display:inline-block;font-family:-apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1rem;line-height:1.25;margin:.9375rem 0 0;padding:.3125rem .625rem;text-align:center}.btn:active,.btn:hover{background-color:#f2f2f2;text-decoration:none}.btn[disabled]{cursor:default;opacity:.5;pointer-events:none}.btn-primary{background-color:#267fd9;border-color:#267fd9;color:#fff}.btn-primary:active,.btn-primary:hover{background-color:#2273c3}.btn-primary[disabled]{cursor:default;opacity:.5;pointer-events:none}.btn-danger{background-color:#db5757;border-color:#db5757;color:#fff}.btn-danger:active,.btn-danger:hover{background-color:#d74242}.btn-danger[disabled]{cursor:default;opacity:.5;pointer-events:none}.btn-block{display:block;width:100%}.form{margin:0}.form uni-label{border:1px solid transparent;cursor:pointer;display:block;line-height:1.25;margin-top:.9375rem;padding-bottom:.3125rem;padding-top:.3125rem}.form [type=email],.form [type=number],.form [type=password],.form [type=search],.form [type=tel],.form [type=text],.form [type=url],.form select,.form uni-textarea{-webkit-appearance:none;appearance:none;background-color:#fff;border:1px solid #ddd;border-radius:.1875rem;color:#333;display:block;font-family:-apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1rem;line-height:1.25;margin:.9375rem 0 0;padding:.3125rem;width:100%}.form [type=email]:focus,.form [type=number]:focus,.form [type=password]:focus,.form [type=search]:focus,.form [type=tel]:focus,.form [type=text]:focus,.form [type=url]:focus,.form select:focus,.form uni-textarea:focus{border-color:#267fd9;outline:0}@media (max-width:767px){.form [type=date],.form [type=datetime-local],.form [type=month],.form [type=time],.form [type=week]{-webkit-appearance:none;appearance:none;background-color:#fff;border:1px solid #ddd;border-radius:.1875rem;color:#333;display:block;font-family:-apple-system,BlinkMacSystemFont,Hiragino Sans GB,Roboto,Segoe UI,Microsoft Yahei,微软雅黑,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,STHeiti,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1rem;line-height:1.25;margin:.9375rem 0 0;padding:.3125rem;width:100%}}@media (max-width:767px){.form [type=date]:focus,.form [type=datetime-local]:focus,.form [type=month]:focus,.form [type=time]:focus,.form [type=week]:focus{border-color:#267fd9;outline:0}}.form [type=checkbox],.form [type=radio]{cursor:pointer;margin:0 .3125rem 0 0}.form select{cursor:pointer}.form [type=file],.form [type=range]{border-bottom:1px solid transparent;border-top:1px solid transparent;line-height:1.25;padding-bottom:.3125rem;padding-top:.3125rem;width:100%}.form [type=color],.form [type=file],.form [type=image],.form [type=range]{cursor:pointer;display:block;margin:.9375rem 0 0}.form [disabled]{cursor:default;opacity:.5;pointer-events:none}.form [readonly]{background-color:#f2f2f2}.scroll-view{-webkit-overflow-scrolling:touch;overflow:auto}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-muted{color:#777}.text-primary{color:#267fd9}.text-danger{color:#db5757}a.text-danger,a.text-muted,a.text-primary{text-decoration:underline}.text-small{font-size:85%}/*通用css*/.top{\r\n    width:100%;\r\n    margin:0px;\r\n    padding:0px;\r\n    font:12px \"microsoft yahei\",Arial,Helvetica,sans-serif;\r\n    color:#666;\r\n    margin:0px;\n}.channel-floor,#banner_img,nav,footer,section,#top_main,#banner{\n}.channel-floor,#banner_img,nav,footer,section,#top_main,#banner:after{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}body{\r\nmargin:0px;\r\n    padding:0px;\n}ul,ol,li,p,h1,h2,h3,h4,h5,h6,dl,dt,dd{\r\n    margin:0px;\r\n    padding:0px;\r\n    list-style:none;\n}uni-input{border:none;}.lf{float:left;}.rt{float:right;}.clear{clear:both;}/****************************************************/.channel-floor,#top_box,#top_main,#banner,#main,#nav,#footer,#banner_img,#foot{\r\n    width:100%;\r\n    margin:0 auto;\r\n    padding:0px;\n}#top{\r\n    width:100%;\r\n    height:30px;\r\n    line-height:30px;\r\n    background-color:#F7F7F7;\r\n    margin:0px;\r\n    padding:0px;\n}/*********top_box**********//* 页面顶部 img部分，收藏京东设置*//* 超链接a*/a{\r\n    color:#666;\r\n    text-decoration:none;\n}/*超链接添加鼠标悬停在 html元素上的动态伪类*/a:hover{\r\n    color:#ff0700;\r\n    text-decoration:underline;\n}#top_box{\r\n    height:30px;\n}#top_box>img{\r\n    float:left;\r\n    margin-top:8px;\r\n    margin-right:5px;\n}#top_main:after{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}#top_box>ul>li{\r\n    float:left;\r\n    text-align:center;\r\n    padding-right: 25px;\n}.search_box{\r\n    width:510px;\r\n    padding:10px 0px 0 40px;\r\n    margin:10px 0px 10px 110px;\r\n    position:relative;\n}.search_box div.search{\r\n    width:500px;\r\n    height:30px;\r\n    border: 3px solid #CA141D;\r\n    background-color: #CA141D;\n}uni-input.text{\r\n    width:405px;\r\n    height:19px;\r\n    padding:5px;\r\n    background-color: #ffffff;\r\n    line-height: 20px;\r\n    color: #999999;\r\n    font-family: arial,\"\\5b8b\\4f53\";\n}uni-input.button{\r\n    width:75px;\r\n    height:30px;\r\n    font-size:14px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    background:#CA141D;\n}div.hot_words,{\r\n    height:18px;\n}div.hot_words:after{\r\n    content: \"\";\r\n    display:block;\r\n    clear: both;\n}div.hot_words span, div.hot_words a{\r\n    float:left;\r\n    font-weight: 400;\r\n    margin-right: 15px;\n}#my_hw,#settle_up{\r\n    width:99px;\r\n    height:30px;\r\n    line-height: 30px;\r\n    margin-top: 26px;\r\n    padding: 0 4px 0 0px;\r\n    border: 1px solid #EFEFEF;\r\n    background-color: #FFF;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    position: relative;\r\n    border-radius: 2px;\n}#weixin{\r\n    margin: 10px 0px 5px 80px;\n}.top_main_left{\r\n    margin-top: 26px;\n}/*导航*/#nav {\r\n    height: 40px;\n}#category {\r\n    width: 245px;\r\n    float: left;\r\n    background: #CD2A2C;\r\n    height: 40px;\n}#category>a {\r\n     display: inline-block;\r\n     height: 40px;\r\n     padding-left: 20px;\r\n     line-height: 40px;\r\n     color: #fff;\r\n     font-size: 14px;\r\n     font-weight: bold;\r\n     text-decoration: none;\n}#nav{\r\n    background-color: #333333;\n}#nav_items li{\r\n    float: left;\r\n    height: 40px;\r\n    padding: 0 15px 0 55px;\n}#nav_items li a {\r\n    height: 40px;\r\n    width: 85px;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    line-height: 40px;\n}/* banner 广告 */#cate_box {\r\n    position: relative;\r\n    width:240px;\r\n    height:420px;\r\n    padding: 4px 3px 3px 0;\r\n    background: #FFFFFF;\r\n    border-top-width: 0px;\r\n    overflow: visible;\r\n    border: 1px solid #ddddff;\r\n    float: left;\r\n    z-index: 999px;\n}#cate_box>li {\r\n    width: 190px;\r\n    height: 63px;\r\n    margin-left: 10px;\n}#cate_box li>p>span{\r\n    margin: 0px;\r\n    font-size: 12px;\r\n    width: 186px;\r\n    height: 28px;\r\n    padding-right:5px;\r\n    line-height: 28px;\r\n    font-weight: 400;\n}/*公共样式*/.hr-1, .hr-2, .hr-3, .hr-4, .hr-5, .hr-7, .hr-9, .hr-10, .hr-15, .hr-20, .hr-22, .hr-25, .hr-30, .hr-35, .hr-40, .hr-45, .hr-50, .hr-55, .hr-60, .hr-65, .hr-70, .hr-75, .hr-80, .hr-85, .hr-90 {\r\n    clear: both;\r\n    font-size: 1px;\r\n    line-height: 1px;\n}.hr-2{\r\n    height: 20px;\n}.layout{\r\n    height: 661px;\n}.layout:before, .layout:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\n}.u-4-3 {\r\n    width: 996px;\r\n    height: 302px;\n}.u-4-3:after{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}.u-4-3>ul:after{\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\n}.channel-pro-item {\r\n    float: left;\r\n    color: #F8F8F8;\r\n    width:490px;\r\n    height:310px;\n}.channel-pro-item:hover{\r\n    border:3px solid pink;\n}.channel-pro-item:after{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}.p-img {\r\n    padding: 20px 30px 0 24px;\r\n    float: left;\n}.p-name {\r\n    margin: 61px 32px 0 0;\r\n    padding-right: 0;\r\n    font-size: 25px;\r\n    line-height: 1.3;\r\n    margin-bottom: 10px;\r\n    width:258px;\r\n    float:right;\r\n    position:relative;\r\n    top:-277px;\n}.p-img a {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    color:#333333;\n}.p-shining {\r\n    /*margin: 16px 0px 5px 100px;*/\r\n    font-size: 15px;\r\n    line-height: 22px;\r\n    min-height: 78px;\n}.p-shining>.p-slogan{\r\n    color: #777;\r\n    font-size: 14px;\r\n    margin-top:-266px;\r\n    margin-left: 212px;\r\n    float:left;\n}.p-promotions {\r\n    color: #e01d20;\r\n    margin-top: 140px;\n}.p-price {\r\n    float:left;\r\n    line-height: 29px;\r\n    line-height: 32px;\r\n    font-size: 25px;\r\n    margin-top: -175px;\r\n    margin-left: 206px;\r\n    font-family: Arial;\r\n    color: #e01d20;\n}.p-price em{\r\n    line-height: 32px;\r\n    font-size: 24px;\r\n    margin-right: 5px;\r\n    margin-right: 4px;\r\n    font-size: 20px;\r\n    float:left;\n}.price span {\r\n    margin-right: 4px;\r\n    float:left;\n}.p-button{\r\n    background-color: #d81b24;\r\n    color: #FFF;\r\n    border-color: #b3131a;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    width: 78px;\r\n    text-align: center;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-radius: 3px;\r\n    height: 30px;\r\n    line-height: 28px;\r\n    float: left;\r\n    margin-top:-173px;\r\n    margin-left: 290px;\n}.p-button>a{\r\n    color: #f0f0f0;\r\n    font-weight: 500;\n}.p-tag {\r\n    position: absolute;\r\n    z-index: 5;\n}.p-tag>img{\r\n    left:0px\n}.u-4-1{\r\n    width:280px;\r\n    border: 1px solid #ddd;\n}.current {\r\n    color: #333;\r\n    background-color: #FFF;\n}.h-tab{\r\n    height: 160px;\r\n    border: 1px solid #ddddff;\n}.h-tab li{\r\n    float: left;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    color: #838181;\r\n    background-color:#ffffff ;\r\n    width: 50%;\r\n    font-size: 14px;\n}.h-tab li:hover{\r\n    background-color:#f5f5f5;\n}.h-tab:after{\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\n}.b li {\r\n    line-height: 20px;\r\n    height: 20px;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\n}.b li{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}.b ul>li>a {\r\n    padding-left: 10px;\r\n    color: #9c9590;\r\n    background-position: -12px 6px;\r\n    font-size: 10px;\n}#banner_img{\r\n    height: 160px;\n}/*平板 & 穿戴华为精品平板*/.channel-floor .h {\r\n    padding-bottom: 10px;\n}.channel-floor .h:after{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}.channel-floor .h h2 {\r\n    float: left;\r\n    border-left: 4px solid #c82c2c;\r\n    padding-left: 7px;\r\n    line-height: 1.1;\r\n    font-size: 18px;\r\n    font-weight: 700;\n}.channel-floor .channel-subtitle {\r\n    float: left;\r\n    display: inline;\r\n    font-size: 13.5px;\r\n    color: #777;\r\n    margin-left: 10px;\r\n    position: relative;\r\n    top: 1px;\r\n    _top: 1px;\r\n    font-weight: 400;\n}.channel-floor .channel-pro-rec-item {\r\n    width:50%;\r\n    height: 663px;\r\n    margin-left: 0;\n}.channel-pro-item {\r\n    float: left;\n}.hannel-pro-list>.channel-pro-item{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}.channel-pro-panels {\r\n    background-color: #efefef;\r\n    padding: 1px 4px 4px 1px;\r\n    margin: 0 -1px -1px 0;\r\n    position: relative;\n}#channel-pro-2-1 .pro-info02 {\r\n    background-color: #f2ffe8;\r\n    border-color: #f2ffe8;\r\n    text-align: left;\n}.channel-floor .channel-nav li {\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    padding-left: 20px;\n}/* 华为 M2 青春版 7.0英寸楼层*/.floor_two{\r\n    width:1281px;\r\n    height:969px;\n}.channel-pro-list{\r\n    width:1280px;\r\n    height:969px;\n}.channel-pro-1-1{\r\n    width:635px;\r\n    height:323px;\r\n    background-color:#F6F6F6;\n}.p-name>.HUAWEIP9{\r\n    font-size:25px;\r\n    font-weight:bold;\r\n    margin-bottom:12px;\r\n    line-height:30px;\r\n    margin-top: 250px;\n}.p-name>p{\r\n    font-size:20px;\r\n    text-align:center;\n}.HUAWEIP9_p1{\r\n    margin-top:36px;\r\n    font-size:40px;\r\n    color:#D81B24;\r\n    font-weight:bold;\n}.HUAWEIP9_p1_span{\r\n    padding:5px 10px 10px 10px;\r\n    background-color:#D81B24;\r\n    border-radius:6px;\r\n    color:#fff;\n}.channel-pro-1-2{\r\n    width:320px;\r\n    height:323px;\r\n    border:1px solid #ddd;\r\n    float:right;\r\n    background-color:#E2F9FB;\n}.channel-pro-1-2_p{\r\n    text-align:center;\r\n    font-size:15px;\n}.channel-pro-1-2_p a{\r\n    color:#E01D20;\n}.channel-pro-1-2  .channel-pro-1-2_p2{\r\n    text-align:center;\r\n    font-size:20px;\r\n    color:#E01D20;\r\n    font-weight:bold;\n}.channel-pro-1-2img{\r\n    width:195px;\r\n    height:185px;\n}.channel-pro-1-3{\r\n    width:320px;\r\n    height:323px;\r\n    border:1px solid #ddd;\r\n    background-color:#FFECEF;\n}.channel-pro-1-3>img{\r\n    margin-top: 67px;\n}.channel-pro-1-2_p{\r\n    text-align:center;\r\n    font-size:15px;\n}.channel-pro-1-2_p a{\r\n    color:#E01D20;\n}.channel-pro-1-2_p2{\r\n    text-align:center;\r\n    font-size:16px;\r\n    color:#E01D20;\r\n    font-weight:bold;\n}.channel-pro-1-4 {\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-5{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-5>a>img{\r\n    margin-top: 59px;\n}.channel-pro-1-6{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-7{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-7>img{\r\n    margin-top: 59px;\n}.channel-pro-1-8{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-8>img{\r\n    margin-top: 59px;\n}.channel-pro-1-9{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-10{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-10>img{\r\n    margin-top: 59px;\n}.channel-pro-1-11{\r\n    width:317px;\r\n    height:320px;\r\n    border:1px solid #ddd;\n}.channel-pro-1-11>img{\r\n    margin-top: 59px;\n}/*ul li的浮动*/.channel-pro-list>li{\r\n    float:left;\n}/*尾部*/.hr-40 {\r\n    height: 40px;\n}.hr-40:after{\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\n}.follow{\r\n    min-width: 1280px;\r\n    height: 223px;\r\n    background-position: 50% 0;\r\n    font-family: 'Tahoma',\\5FAE\\8F6F\\96C5\\9ED1;\r\n    /*background: url(img/bg51.jpg) scroll no-repeat;\r\n */\n}.follow ul {\r\n    float: right;\r\n    margin-top: -28px;\n}.follow img {\r\n    vertical-align: top;\r\n    margin-top: 5px;\n}/*脚部*/.slogan {\r\n    border-top: 1px solid #e5e5e5;\r\n    padding: 23px 0 22px;\r\n    width: 1280px;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    font-family: 'Tahoma',\\5FAE\\8F6F\\96C5\\9ED1;\n}.slogan .s1 {\r\n    width: 270px;\n}.slogan li i {\r\n    float: left;\r\n    height: 44px;\r\n    margin-right: 12px;\n}.slogan li {\r\n    float: left;\r\n    line-height: 44px;\r\n    font-size: 14px;\r\n    height: 44px;\r\n    margin-left: 50px;\n}.service {\r\n    border-top: 1px solid #e5e5e5;\r\n    padding: 30px 0 20px;\r\n    width: 1002px;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n    font-family: 'Tahoma',\\5FAE\\8F6F\\96C5\\9ED1;\n}.service .s1 dt i {\r\n    background-position: 0 -54px;\n}.service dt i {\r\n    width: 16px;\r\n    height: 14px;\n}.service dl {\r\n    float: left;\n}.service .s2 {\r\n    margin-left: 165px;\n}.service>.s1>dt{\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\n}.service>.s2>dt{\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\n}/*脚部*/.footer-otherLink {\r\n    padding: 0 8px;\r\n    text-align: center;\r\n    word-break: break-all;\n}.footer-warrant-area {\r\n    padding-top: 4859px;\r\n    text-align: center;\n}.footer-warrant-area>.footer-img{\r\n    margin-top:20px;\n}/*图片轮播*/.img_slider{\r\n    width: 1032px;\r\n    height: 429px;\n}@charset \"UTF-8\";/*!\r\n * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)\r\n * Copyright 2011-2020 The Bootstrap Authors\r\n * Copyright 2011-2020 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */:root {\r\n  --bs-blue: #0d6efd;\r\n  --bs-indigo: #6610f2;\r\n  --bs-purple: #6f42c1;\r\n  --bs-pink: #d63384;\r\n  --bs-red: #dc3545;\r\n  --bs-orange: #fd7e14;\r\n  --bs-yellow: #ffc107;\r\n  --bs-green: #198754;\r\n  --bs-teal: #20c997;\r\n  --bs-cyan: #0dcaf0;\r\n  --bs-white: #fff;\r\n  --bs-gray: #6c757d;\r\n  --bs-gray-dark: #343a40;\r\n  --bs-primary: #0d6efd;\r\n  --bs-secondary: #6c757d;\r\n  --bs-success: #198754;\r\n  --bs-info: #0dcaf0;\r\n  --bs-warning: #ffc107;\r\n  --bs-danger: #dc3545;\r\n  --bs-light: #f8f9fa;\r\n  --bs-dark: #212529;\r\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n}*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\n}@media (prefers-reduced-motion: no-preference) {\n:root {\r\n    scroll-behavior: smooth;\n}\n}body {\r\n  margin: 0;\r\n  font-family: var(--bs-font-sans-serif);\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  background-color: #fff;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}[tabindex=\"-1\"]:focus:not(:focus-visible) {\r\n  outline: 0 !important;\n}hr {\r\n  margin: 1rem 0;\r\n  color: inherit;\r\n  background-color: currentColor;\r\n  border: 0;\r\n  opacity: 0.25;\n}hr:not([size]) {\r\n  height: 1px;\n}h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 500;\r\n  line-height: 1.2;\n}h1, .h1 {\r\n  font-size: calc(1.375rem + 1.5vw);\n}@media (min-width: 1200px) {\nh1, .h1 {\r\n    font-size: 2.5rem;\n}\n}h2, .h2 {\r\n  font-size: calc(1.325rem + 0.9vw);\n}@media (min-width: 1200px) {\nh2, .h2 {\r\n    font-size: 2rem;\n}\n}h3, .h3 {\r\n  font-size: calc(1.3rem + 0.6vw);\n}@media (min-width: 1200px) {\nh3, .h3 {\r\n    font-size: 1.75rem;\n}\n}h4, .h4 {\r\n  font-size: calc(1.275rem + 0.3vw);\n}@media (min-width: 1200px) {\nh4, .h4 {\r\n    font-size: 1.5rem;\n}\n}h5, .h5 {\r\n  font-size: 1.25rem;\n}h6, .h6 {\r\n  font-size: 1rem;\n}p {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\n}abbr[title],\r\nabbr[data-bs-original-title] {\r\n  text-decoration: underline;\r\n  -webkit-text-decoration: underline dotted;\r\n  text-decoration: underline dotted;\r\n  cursor: help;\r\n  -webkit-text-decoration-skip-ink: none;\r\n  text-decoration-skip-ink: none;\n}address {\r\n  margin-bottom: 1rem;\r\n  font-style: normal;\r\n  line-height: inherit;\n}ol,\r\nul {\r\n  padding-left: 2rem;\n}ol,\r\nul,\r\ndl {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\n}ol ol,\r\nul ul,\r\nol ul,\r\nul ol {\r\n  margin-bottom: 0;\n}dt {\r\n  font-weight: 700;\n}dd {\r\n  margin-bottom: 0.5rem;\r\n  margin-left: 0;\n}blockquote {\r\n  margin: 0 0 1rem;\n}b,\r\nstrong {\r\n  font-weight: bolder;\n}small, .small {\r\n  font-size: 0.875em;\n}mark, .mark {\r\n  padding: 0.2em;\r\n  background-color: #fcf8e3;\n}sub,\r\nsup {\r\n  position: relative;\r\n  font-size: 0.75em;\r\n  line-height: 0;\r\n  vertical-align: baseline;\n}sub {\r\n  bottom: -0.25em;\n}sup {\r\n  top: -0.5em;\n}/*a {*//*  color: #0d6efd;*//*  text-decoration: underline;*//*}*//*a:hover {*//*  color: #0a58ca;*//*}*//*a:not([href]):not([class]), a:not([href]):not([class]):hover {*//*  color: inherit;*//*  text-decoration: none;*//*}*/pre,\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: var(--bs-font-monospace);\r\n  font-size: 1em;\r\n  direction: ltr /* rtl:ignore */;\r\n  unicode-bidi: bidi-override;\n}pre {\r\n  display: block;\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  overflow: auto;\r\n  font-size: 0.875em;\n}pre code {\r\n  font-size: inherit;\r\n  color: inherit;\r\n  word-break: normal;\n}code {\r\n  font-size: 0.875em;\r\n  color: #d63384;\r\n  word-wrap: break-word;\n}a > code {\r\n  color: inherit;\n}kbd {\r\n  padding: 0.2rem 0.4rem;\r\n  font-size: 0.875em;\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-radius: 0.2rem;\n}kbd kbd {\r\n  padding: 0;\r\n  font-size: 1em;\r\n  font-weight: 700;\n}figure {\r\n  margin: 0 0 1rem;\n}img,\r\nsvg {\r\n  vertical-align: middle;\n}table {\r\n  caption-side: bottom;\r\n  border-collapse: collapse;\n}caption {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n  color: #6c757d;\r\n  text-align: left;\n}th {\r\n  text-align: inherit;\r\n  text-align: -webkit-match-parent;\n}thead,\r\ntbody,\r\ntfoot,\r\ntr,\r\ntd,\r\nth {\r\n  border-color: inherit;\r\n  border-style: solid;\r\n  border-width: 0;\n}uni-label {\r\n  display: inline-block;\n}uni-button {\r\n  border-radius: 0;\n}uni-button:focus {\r\n  outline: dotted 1px;\r\n  outline: -webkit-focus-ring-color auto 5px;\n}uni-input,\r\nuni-button,\r\nselect,\r\noptgroup,\r\nuni-textarea {\r\n  margin: 0;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  line-height: inherit;\n}uni-button,\r\nselect {\r\n  text-transform: none;\n}[role=button] {\r\n  cursor: pointer;\n}select {\r\n  word-wrap: normal;\n}[list]::-webkit-calendar-picker-indicator {\r\n  display: none;\n}uni-button,\r\n[type=button],\r\n[type=reset],\r\n[type=submit] {\r\n  -webkit-appearance: button;\n}uni-button:not(:disabled),\r\n[type=button]:not(:disabled),\r\n[type=reset]:not(:disabled),\r\n[type=submit]:not(:disabled) {\r\n  cursor: pointer;\n}::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\n}uni-textarea {\r\n  resize: vertical;\n}fieldset {\r\n  min-width: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\n}legend {\r\n  float: left;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin-bottom: 0.5rem;\r\n  font-size: calc(1.275rem + 0.3vw);\r\n  line-height: inherit;\n}@media (min-width: 1200px) {\nlegend {\r\n    font-size: 1.5rem;\n}\n}legend + * {\r\n  clear: left;\n}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field {\r\n  padding: 0;\n}::-webkit-inner-spin-button {\r\n  height: auto;\n}[type=search] {\r\n  outline-offset: -2px;\r\n  -webkit-appearance: textfield;\n}/* rtl:raw:\r\n[type=\"tel\"],\r\n[type=\"url\"],\r\n[type=\"email\"],\r\n[type=\"number\"] {\r\n  direction: ltr;\r\n}\r\n*/::-webkit-search-decoration {\r\n  -webkit-appearance: none;\n}::-webkit-color-swatch-wrapper {\r\n  padding: 0;\n}::file-selector-button {\r\n  font: inherit;\n}::-webkit-file-upload-button {\r\n  font: inherit;\r\n  -webkit-appearance: button;\n}output {\r\n  display: inline-block;\n}iframe {\r\n  border: 0;\n}summary {\r\n  display: list-item;\r\n  cursor: pointer;\n}uni-progress {\r\n  vertical-align: baseline;\n}[hidden] {\r\n  display: none !important;\n}.lead {\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\n}.display-1 {\r\n  font-size: calc(1.625rem + 4.5vw);\r\n  font-weight: 300;\r\n  line-height: 1.2;\n}@media (min-width: 1200px) {\n.display-1 {\r\n    font-size: 5rem;\n}\n}.display-2 {\r\n  font-size: calc(1.575rem + 3.9vw);\r\n  font-weight: 300;\r\n  line-height: 1.2;\n}@media (min-width: 1200px) {\n.display-2 {\r\n    font-size: 4.5rem;\n}\n}.display-3 {\r\n  font-size: calc(1.525rem + 3.3vw);\r\n  font-weight: 300;\r\n  line-height: 1.2;\n}@media (min-width: 1200px) {\n.display-3 {\r\n    font-size: 4rem;\n}\n}.display-4 {\r\n  font-size: calc(1.475rem + 2.7vw);\r\n  font-weight: 300;\r\n  line-height: 1.2;\n}@media (min-width: 1200px) {\n.display-4 {\r\n    font-size: 3.5rem;\n}\n}.display-5 {\r\n  font-size: calc(1.425rem + 2.1vw);\r\n  font-weight: 300;\r\n  line-height: 1.2;\n}@media (min-width: 1200px) {\n.display-5 {\r\n    font-size: 3rem;\n}\n}.display-6 {\r\n  font-size: calc(1.375rem + 1.5vw);\r\n  font-weight: 300;\r\n  line-height: 1.2;\n}@media (min-width: 1200px) {\n.display-6 {\r\n    font-size: 2.5rem;\n}\n}.list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\n}.list-inline {\r\n  padding-left: 0;\r\n  list-style: none;\n}.list-inline-item {\r\n  display: inline-block;\n}.list-inline-item:not(:last-child) {\r\n  margin-right: 0.5rem;\n}.initialism {\r\n  font-size: 0.875em;\r\n  text-transform: uppercase;\n}.blockquote {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.25rem;\n}.blockquote > :last-child {\r\n  margin-bottom: 0;\n}.blockquote-footer {\r\n  margin-top: -1rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 0.875em;\r\n  color: #6c757d;\n}.blockquote-footer::before {\r\n  content: \"— \";\n}.img-fluid {\r\n  max-width: 100%;\r\n  height: auto;\n}.img-thumbnail {\r\n  padding: 0.25rem;\r\n  background-color: #fff;\r\n  border: 1px solid #dee2e6;\r\n  border-radius: 0.25rem;\r\n  max-width: 100%;\r\n  height: auto;\n}.figure {\r\n  display: inline-block;\n}.figure-img {\r\n  margin-bottom: 0.5rem;\r\n  line-height: 1;\n}.figure-caption {\r\n  font-size: 0.875em;\r\n  color: #6c757d;\n}.container,\r\n.container-fluid,\r\n.container-xxl,\r\n.container-xl,\r\n.container-lg,\r\n.container-md,\r\n.container-sm {\r\n  width: 100%;\r\n  padding-right: var(--bs-gutter-x, 0.75rem);\r\n  padding-left: var(--bs-gutter-x, 0.75rem);\r\n  margin-right: auto;\r\n  margin-left: auto;\n}@media (min-width: 576px) {\n.container-sm, .container {\r\n    max-width: 540px;\n}\n}@media (min-width: 768px) {\n.container-md, .container-sm, .container {\r\n    max-width: 720px;\n}\n}@media (min-width: 992px) {\n.container-lg, .container-md, .container-sm, .container {\r\n    max-width: 960px;\n}\n}@media (min-width: 1200px) {\n.container-xl, .container-lg, .container-md, .container-sm, .container {\r\n    max-width: 1140px;\n}\n}@media (min-width: 1400px) {\n.container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\r\n    max-width: 1320px;\n}\n}.row {\r\n  --bs-gutter-x: 1.5rem;\r\n  --bs-gutter-y: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-top: calc(var(--bs-gutter-y) * -1);\r\n  margin-right: calc(var(--bs-gutter-x) / -2);\r\n  margin-left: calc(var(--bs-gutter-x) / -2);\n}.row > * {\r\n  flex-shrink: 0;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  padding-right: calc(var(--bs-gutter-x) / 2);\r\n  padding-left: calc(var(--bs-gutter-x) / 2);\r\n  margin-top: var(--bs-gutter-y);\n}.col {\r\n  flex: 1 0 0%;\n}.row-cols-auto > * {\r\n  flex: 0 0 auto;\r\n  width: auto;\n}.row-cols-1 > * {\r\n  flex: 0 0 auto;\r\n  width: 100%;\n}.row-cols-2 > * {\r\n  flex: 0 0 auto;\r\n  width: 50%;\n}.row-cols-3 > * {\r\n  flex: 0 0 auto;\r\n  width: 33.3333333333%;\n}.row-cols-4 > * {\r\n  flex: 0 0 auto;\r\n  width: 25%;\n}.row-cols-5 > * {\r\n  flex: 0 0 auto;\r\n  width: 20%;\n}.row-cols-6 > * {\r\n  flex: 0 0 auto;\r\n  width: 16.6666666667%;\n}.col-auto {\r\n  flex: 0 0 auto;\r\n  width: auto;\n}.col-1 {\r\n  flex: 0 0 auto;\r\n  width: 8.3333333333%;\n}.col-2 {\r\n  flex: 0 0 auto;\r\n  width: 16.6666666667%;\n}.col-3 {\r\n  flex: 0 0 auto;\r\n  width: 25%;\n}.col-4 {\r\n  flex: 0 0 auto;\r\n  width: 33.3333333333%;\n}.col-5 {\r\n  flex: 0 0 auto;\r\n  width: 41.6666666667%;\n}.col-6 {\r\n  flex: 0 0 auto;\r\n  width: 50%;\n}.col-7 {\r\n  flex: 0 0 auto;\r\n  width: 58.3333333333%;\n}.col-8 {\r\n  flex: 0 0 auto;\r\n  width: 66.6666666667%;\n}.col-9 {\r\n  flex: 0 0 auto;\r\n  width: 75%;\n}.col-10 {\r\n  flex: 0 0 auto;\r\n  width: 83.3333333333%;\n}.col-11 {\r\n  flex: 0 0 auto;\r\n  width: 91.6666666667%;\n}.col-12 {\r\n  flex: 0 0 auto;\r\n  width: 100%;\n}.offset-1 {\r\n  margin-left: 8.3333333333%;\n}.offset-2 {\r\n  margin-left: 16.6666666667%;\n}.offset-3 {\r\n  margin-left: 25%;\n}.offset-4 {\r\n  margin-left: 33.3333333333%;\n}.offset-5 {\r\n  margin-left: 41.6666666667%;\n}.offset-6 {\r\n  margin-left: 50%;\n}.offset-7 {\r\n  margin-left: 58.3333333333%;\n}.offset-8 {\r\n  margin-left: 66.6666666667%;\n}.offset-9 {\r\n  margin-left: 75%;\n}.offset-10 {\r\n  margin-left: 83.3333333333%;\n}.offset-11 {\r\n  margin-left: 91.6666666667%;\n}.g-0,\r\n.gx-0 {\r\n  --bs-gutter-x: 0;\n}.g-0,\r\n.gy-0 {\r\n  --bs-gutter-y: 0;\n}.g-1,\r\n.gx-1 {\r\n  --bs-gutter-x: 0.25rem;\n}.g-1,\r\n.gy-1 {\r\n  --bs-gutter-y: 0.25rem;\n}.g-2,\r\n.gx-2 {\r\n  --bs-gutter-x: 0.5rem;\n}.g-2,\r\n.gy-2 {\r\n  --bs-gutter-y: 0.5rem;\n}.g-3,\r\n.gx-3 {\r\n  --bs-gutter-x: 1rem;\n}.g-3,\r\n.gy-3 {\r\n  --bs-gutter-y: 1rem;\n}.g-4,\r\n.gx-4 {\r\n  --bs-gutter-x: 1.5rem;\n}.g-4,\r\n.gy-4 {\r\n  --bs-gutter-y: 1.5rem;\n}.g-5,\r\n.gx-5 {\r\n  --bs-gutter-x: 3rem;\n}.g-5,\r\n.gy-5 {\r\n  --bs-gutter-y: 3rem;\n}@media (min-width: 576px) {\n.col-sm {\r\n    flex: 1 0 0%;\n}\n.row-cols-sm-auto > * {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.row-cols-sm-1 > * {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.row-cols-sm-2 > * {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.row-cols-sm-3 > * {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.row-cols-sm-4 > * {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.row-cols-sm-5 > * {\r\n    flex: 0 0 auto;\r\n    width: 20%;\n}\n.row-cols-sm-6 > * {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-sm-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.col-sm-1 {\r\n    flex: 0 0 auto;\r\n    width: 8.3333333333%;\n}\n.col-sm-2 {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-sm-3 {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.col-sm-4 {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.col-sm-5 {\r\n    flex: 0 0 auto;\r\n    width: 41.6666666667%;\n}\n.col-sm-6 {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.col-sm-7 {\r\n    flex: 0 0 auto;\r\n    width: 58.3333333333%;\n}\n.col-sm-8 {\r\n    flex: 0 0 auto;\r\n    width: 66.6666666667%;\n}\n.col-sm-9 {\r\n    flex: 0 0 auto;\r\n    width: 75%;\n}\n.col-sm-10 {\r\n    flex: 0 0 auto;\r\n    width: 83.3333333333%;\n}\n.col-sm-11 {\r\n    flex: 0 0 auto;\r\n    width: 91.6666666667%;\n}\n.col-sm-12 {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.offset-sm-0 {\r\n    margin-left: 0;\n}\n.offset-sm-1 {\r\n    margin-left: 8.3333333333%;\n}\n.offset-sm-2 {\r\n    margin-left: 16.6666666667%;\n}\n.offset-sm-3 {\r\n    margin-left: 25%;\n}\n.offset-sm-4 {\r\n    margin-left: 33.3333333333%;\n}\n.offset-sm-5 {\r\n    margin-left: 41.6666666667%;\n}\n.offset-sm-6 {\r\n    margin-left: 50%;\n}\n.offset-sm-7 {\r\n    margin-left: 58.3333333333%;\n}\n.offset-sm-8 {\r\n    margin-left: 66.6666666667%;\n}\n.offset-sm-9 {\r\n    margin-left: 75%;\n}\n.offset-sm-10 {\r\n    margin-left: 83.3333333333%;\n}\n.offset-sm-11 {\r\n    margin-left: 91.6666666667%;\n}\n.g-sm-0,\r\n.gx-sm-0 {\r\n    --bs-gutter-x: 0;\n}\n.g-sm-0,\r\n.gy-sm-0 {\r\n    --bs-gutter-y: 0;\n}\n.g-sm-1,\r\n.gx-sm-1 {\r\n    --bs-gutter-x: 0.25rem;\n}\n.g-sm-1,\r\n.gy-sm-1 {\r\n    --bs-gutter-y: 0.25rem;\n}\n.g-sm-2,\r\n.gx-sm-2 {\r\n    --bs-gutter-x: 0.5rem;\n}\n.g-sm-2,\r\n.gy-sm-2 {\r\n    --bs-gutter-y: 0.5rem;\n}\n.g-sm-3,\r\n.gx-sm-3 {\r\n    --bs-gutter-x: 1rem;\n}\n.g-sm-3,\r\n.gy-sm-3 {\r\n    --bs-gutter-y: 1rem;\n}\n.g-sm-4,\r\n.gx-sm-4 {\r\n    --bs-gutter-x: 1.5rem;\n}\n.g-sm-4,\r\n.gy-sm-4 {\r\n    --bs-gutter-y: 1.5rem;\n}\n.g-sm-5,\r\n.gx-sm-5 {\r\n    --bs-gutter-x: 3rem;\n}\n.g-sm-5,\r\n.gy-sm-5 {\r\n    --bs-gutter-y: 3rem;\n}\n}@media (min-width: 768px) {\n.col-md {\r\n    flex: 1 0 0%;\n}\n.row-cols-md-auto > * {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.row-cols-md-1 > * {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.row-cols-md-2 > * {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.row-cols-md-3 > * {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.row-cols-md-4 > * {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.row-cols-md-5 > * {\r\n    flex: 0 0 auto;\r\n    width: 20%;\n}\n.row-cols-md-6 > * {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-md-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.col-md-1 {\r\n    flex: 0 0 auto;\r\n    width: 8.3333333333%;\n}\n.col-md-2 {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-md-3 {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.col-md-4 {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.col-md-5 {\r\n    flex: 0 0 auto;\r\n    width: 41.6666666667%;\n}\n.col-md-6 {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.col-md-7 {\r\n    flex: 0 0 auto;\r\n    width: 58.3333333333%;\n}\n.col-md-8 {\r\n    flex: 0 0 auto;\r\n    width: 66.6666666667%;\n}\n.col-md-9 {\r\n    flex: 0 0 auto;\r\n    width: 75%;\n}\n.col-md-10 {\r\n    flex: 0 0 auto;\r\n    width: 83.3333333333%;\n}\n.col-md-11 {\r\n    flex: 0 0 auto;\r\n    width: 91.6666666667%;\n}\n.col-md-12 {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.offset-md-0 {\r\n    margin-left: 0;\n}\n.offset-md-1 {\r\n    margin-left: 8.3333333333%;\n}\n.offset-md-2 {\r\n    margin-left: 16.6666666667%;\n}\n.offset-md-3 {\r\n    margin-left: 25%;\n}\n.offset-md-4 {\r\n    margin-left: 33.3333333333%;\n}\n.offset-md-5 {\r\n    margin-left: 41.6666666667%;\n}\n.offset-md-6 {\r\n    margin-left: 50%;\n}\n.offset-md-7 {\r\n    margin-left: 58.3333333333%;\n}\n.offset-md-8 {\r\n    margin-left: 66.6666666667%;\n}\n.offset-md-9 {\r\n    margin-left: 75%;\n}\n.offset-md-10 {\r\n    margin-left: 83.3333333333%;\n}\n.offset-md-11 {\r\n    margin-left: 91.6666666667%;\n}\n.g-md-0,\r\n.gx-md-0 {\r\n    --bs-gutter-x: 0;\n}\n.g-md-0,\r\n.gy-md-0 {\r\n    --bs-gutter-y: 0;\n}\n.g-md-1,\r\n.gx-md-1 {\r\n    --bs-gutter-x: 0.25rem;\n}\n.g-md-1,\r\n.gy-md-1 {\r\n    --bs-gutter-y: 0.25rem;\n}\n.g-md-2,\r\n.gx-md-2 {\r\n    --bs-gutter-x: 0.5rem;\n}\n.g-md-2,\r\n.gy-md-2 {\r\n    --bs-gutter-y: 0.5rem;\n}\n.g-md-3,\r\n.gx-md-3 {\r\n    --bs-gutter-x: 1rem;\n}\n.g-md-3,\r\n.gy-md-3 {\r\n    --bs-gutter-y: 1rem;\n}\n.g-md-4,\r\n.gx-md-4 {\r\n    --bs-gutter-x: 1.5rem;\n}\n.g-md-4,\r\n.gy-md-4 {\r\n    --bs-gutter-y: 1.5rem;\n}\n.g-md-5,\r\n.gx-md-5 {\r\n    --bs-gutter-x: 3rem;\n}\n.g-md-5,\r\n.gy-md-5 {\r\n    --bs-gutter-y: 3rem;\n}\n}@media (min-width: 992px) {\n.col-lg {\r\n    flex: 1 0 0%;\n}\n.row-cols-lg-auto > * {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.row-cols-lg-1 > * {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.row-cols-lg-2 > * {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.row-cols-lg-3 > * {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.row-cols-lg-4 > * {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.row-cols-lg-5 > * {\r\n    flex: 0 0 auto;\r\n    width: 20%;\n}\n.row-cols-lg-6 > * {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-lg-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.col-lg-1 {\r\n    flex: 0 0 auto;\r\n    width: 8.3333333333%;\n}\n.col-lg-2 {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-lg-3 {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.col-lg-4 {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.col-lg-5 {\r\n    flex: 0 0 auto;\r\n    width: 41.6666666667%;\n}\n.col-lg-6 {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.col-lg-7 {\r\n    flex: 0 0 auto;\r\n    width: 58.3333333333%;\n}\n.col-lg-8 {\r\n    flex: 0 0 auto;\r\n    width: 66.6666666667%;\n}\n.col-lg-9 {\r\n    flex: 0 0 auto;\r\n    width: 75%;\n}\n.col-lg-10 {\r\n    flex: 0 0 auto;\r\n    width: 83.3333333333%;\n}\n.col-lg-11 {\r\n    flex: 0 0 auto;\r\n    width: 91.6666666667%;\n}\n.col-lg-12 {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.offset-lg-0 {\r\n    margin-left: 0;\n}\n.offset-lg-1 {\r\n    margin-left: 8.3333333333%;\n}\n.offset-lg-2 {\r\n    margin-left: 16.6666666667%;\n}\n.offset-lg-3 {\r\n    margin-left: 25%;\n}\n.offset-lg-4 {\r\n    margin-left: 33.3333333333%;\n}\n.offset-lg-5 {\r\n    margin-left: 41.6666666667%;\n}\n.offset-lg-6 {\r\n    margin-left: 50%;\n}\n.offset-lg-7 {\r\n    margin-left: 58.3333333333%;\n}\n.offset-lg-8 {\r\n    margin-left: 66.6666666667%;\n}\n.offset-lg-9 {\r\n    margin-left: 75%;\n}\n.offset-lg-10 {\r\n    margin-left: 83.3333333333%;\n}\n.offset-lg-11 {\r\n    margin-left: 91.6666666667%;\n}\n.g-lg-0,\r\n.gx-lg-0 {\r\n    --bs-gutter-x: 0;\n}\n.g-lg-0,\r\n.gy-lg-0 {\r\n    --bs-gutter-y: 0;\n}\n.g-lg-1,\r\n.gx-lg-1 {\r\n    --bs-gutter-x: 0.25rem;\n}\n.g-lg-1,\r\n.gy-lg-1 {\r\n    --bs-gutter-y: 0.25rem;\n}\n.g-lg-2,\r\n.gx-lg-2 {\r\n    --bs-gutter-x: 0.5rem;\n}\n.g-lg-2,\r\n.gy-lg-2 {\r\n    --bs-gutter-y: 0.5rem;\n}\n.g-lg-3,\r\n.gx-lg-3 {\r\n    --bs-gutter-x: 1rem;\n}\n.g-lg-3,\r\n.gy-lg-3 {\r\n    --bs-gutter-y: 1rem;\n}\n.g-lg-4,\r\n.gx-lg-4 {\r\n    --bs-gutter-x: 1.5rem;\n}\n.g-lg-4,\r\n.gy-lg-4 {\r\n    --bs-gutter-y: 1.5rem;\n}\n.g-lg-5,\r\n.gx-lg-5 {\r\n    --bs-gutter-x: 3rem;\n}\n.g-lg-5,\r\n.gy-lg-5 {\r\n    --bs-gutter-y: 3rem;\n}\n}@media (min-width: 1200px) {\n.col-xl {\r\n    flex: 1 0 0%;\n}\n.row-cols-xl-auto > * {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.row-cols-xl-1 > * {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.row-cols-xl-2 > * {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.row-cols-xl-3 > * {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.row-cols-xl-4 > * {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.row-cols-xl-5 > * {\r\n    flex: 0 0 auto;\r\n    width: 20%;\n}\n.row-cols-xl-6 > * {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-xl-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.col-xl-1 {\r\n    flex: 0 0 auto;\r\n    width: 8.3333333333%;\n}\n.col-xl-2 {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-xl-3 {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.col-xl-4 {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.col-xl-5 {\r\n    flex: 0 0 auto;\r\n    width: 41.6666666667%;\n}\n.col-xl-6 {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.col-xl-7 {\r\n    flex: 0 0 auto;\r\n    width: 58.3333333333%;\n}\n.col-xl-8 {\r\n    flex: 0 0 auto;\r\n    width: 66.6666666667%;\n}\n.col-xl-9 {\r\n    flex: 0 0 auto;\r\n    width: 75%;\n}\n.col-xl-10 {\r\n    flex: 0 0 auto;\r\n    width: 83.3333333333%;\n}\n.col-xl-11 {\r\n    flex: 0 0 auto;\r\n    width: 91.6666666667%;\n}\n.col-xl-12 {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.offset-xl-0 {\r\n    margin-left: 0;\n}\n.offset-xl-1 {\r\n    margin-left: 8.3333333333%;\n}\n.offset-xl-2 {\r\n    margin-left: 16.6666666667%;\n}\n.offset-xl-3 {\r\n    margin-left: 25%;\n}\n.offset-xl-4 {\r\n    margin-left: 33.3333333333%;\n}\n.offset-xl-5 {\r\n    margin-left: 41.6666666667%;\n}\n.offset-xl-6 {\r\n    margin-left: 50%;\n}\n.offset-xl-7 {\r\n    margin-left: 58.3333333333%;\n}\n.offset-xl-8 {\r\n    margin-left: 66.6666666667%;\n}\n.offset-xl-9 {\r\n    margin-left: 75%;\n}\n.offset-xl-10 {\r\n    margin-left: 83.3333333333%;\n}\n.offset-xl-11 {\r\n    margin-left: 91.6666666667%;\n}\n.g-xl-0,\r\n.gx-xl-0 {\r\n    --bs-gutter-x: 0;\n}\n.g-xl-0,\r\n.gy-xl-0 {\r\n    --bs-gutter-y: 0;\n}\n.g-xl-1,\r\n.gx-xl-1 {\r\n    --bs-gutter-x: 0.25rem;\n}\n.g-xl-1,\r\n.gy-xl-1 {\r\n    --bs-gutter-y: 0.25rem;\n}\n.g-xl-2,\r\n.gx-xl-2 {\r\n    --bs-gutter-x: 0.5rem;\n}\n.g-xl-2,\r\n.gy-xl-2 {\r\n    --bs-gutter-y: 0.5rem;\n}\n.g-xl-3,\r\n.gx-xl-3 {\r\n    --bs-gutter-x: 1rem;\n}\n.g-xl-3,\r\n.gy-xl-3 {\r\n    --bs-gutter-y: 1rem;\n}\n.g-xl-4,\r\n.gx-xl-4 {\r\n    --bs-gutter-x: 1.5rem;\n}\n.g-xl-4,\r\n.gy-xl-4 {\r\n    --bs-gutter-y: 1.5rem;\n}\n.g-xl-5,\r\n.gx-xl-5 {\r\n    --bs-gutter-x: 3rem;\n}\n.g-xl-5,\r\n.gy-xl-5 {\r\n    --bs-gutter-y: 3rem;\n}\n}@media (min-width: 1400px) {\n.col-xxl {\r\n    flex: 1 0 0%;\n}\n.row-cols-xxl-auto > * {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.row-cols-xxl-1 > * {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.row-cols-xxl-2 > * {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.row-cols-xxl-3 > * {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.row-cols-xxl-4 > * {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.row-cols-xxl-5 > * {\r\n    flex: 0 0 auto;\r\n    width: 20%;\n}\n.row-cols-xxl-6 > * {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-xxl-auto {\r\n    flex: 0 0 auto;\r\n    width: auto;\n}\n.col-xxl-1 {\r\n    flex: 0 0 auto;\r\n    width: 8.3333333333%;\n}\n.col-xxl-2 {\r\n    flex: 0 0 auto;\r\n    width: 16.6666666667%;\n}\n.col-xxl-3 {\r\n    flex: 0 0 auto;\r\n    width: 25%;\n}\n.col-xxl-4 {\r\n    flex: 0 0 auto;\r\n    width: 33.3333333333%;\n}\n.col-xxl-5 {\r\n    flex: 0 0 auto;\r\n    width: 41.6666666667%;\n}\n.col-xxl-6 {\r\n    flex: 0 0 auto;\r\n    width: 50%;\n}\n.col-xxl-7 {\r\n    flex: 0 0 auto;\r\n    width: 58.3333333333%;\n}\n.col-xxl-8 {\r\n    flex: 0 0 auto;\r\n    width: 66.6666666667%;\n}\n.col-xxl-9 {\r\n    flex: 0 0 auto;\r\n    width: 75%;\n}\n.col-xxl-10 {\r\n    flex: 0 0 auto;\r\n    width: 83.3333333333%;\n}\n.col-xxl-11 {\r\n    flex: 0 0 auto;\r\n    width: 91.6666666667%;\n}\n.col-xxl-12 {\r\n    flex: 0 0 auto;\r\n    width: 100%;\n}\n.offset-xxl-0 {\r\n    margin-left: 0;\n}\n.offset-xxl-1 {\r\n    margin-left: 8.3333333333%;\n}\n.offset-xxl-2 {\r\n    margin-left: 16.6666666667%;\n}\n.offset-xxl-3 {\r\n    margin-left: 25%;\n}\n.offset-xxl-4 {\r\n    margin-left: 33.3333333333%;\n}\n.offset-xxl-5 {\r\n    margin-left: 41.6666666667%;\n}\n.offset-xxl-6 {\r\n    margin-left: 50%;\n}\n.offset-xxl-7 {\r\n    margin-left: 58.3333333333%;\n}\n.offset-xxl-8 {\r\n    margin-left: 66.6666666667%;\n}\n.offset-xxl-9 {\r\n    margin-left: 75%;\n}\n.offset-xxl-10 {\r\n    margin-left: 83.3333333333%;\n}\n.offset-xxl-11 {\r\n    margin-left: 91.6666666667%;\n}\n.g-xxl-0,\r\n.gx-xxl-0 {\r\n    --bs-gutter-x: 0;\n}\n.g-xxl-0,\r\n.gy-xxl-0 {\r\n    --bs-gutter-y: 0;\n}\n.g-xxl-1,\r\n.gx-xxl-1 {\r\n    --bs-gutter-x: 0.25rem;\n}\n.g-xxl-1,\r\n.gy-xxl-1 {\r\n    --bs-gutter-y: 0.25rem;\n}\n.g-xxl-2,\r\n.gx-xxl-2 {\r\n    --bs-gutter-x: 0.5rem;\n}\n.g-xxl-2,\r\n.gy-xxl-2 {\r\n    --bs-gutter-y: 0.5rem;\n}\n.g-xxl-3,\r\n.gx-xxl-3 {\r\n    --bs-gutter-x: 1rem;\n}\n.g-xxl-3,\r\n.gy-xxl-3 {\r\n    --bs-gutter-y: 1rem;\n}\n.g-xxl-4,\r\n.gx-xxl-4 {\r\n    --bs-gutter-x: 1.5rem;\n}\n.g-xxl-4,\r\n.gy-xxl-4 {\r\n    --bs-gutter-y: 1.5rem;\n}\n.g-xxl-5,\r\n.gx-xxl-5 {\r\n    --bs-gutter-x: 3rem;\n}\n.g-xxl-5,\r\n.gy-xxl-5 {\r\n    --bs-gutter-y: 3rem;\n}\n}.table {\r\n  --bs-table-bg: transparent;\r\n  --bs-table-striped-color: #212529;\r\n  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);\r\n  --bs-table-active-color: #212529;\r\n  --bs-table-active-bg: rgba(0, 0, 0, 0.1);\r\n  --bs-table-hover-color: #212529;\r\n  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  color: #212529;\r\n  vertical-align: top;\r\n  border-color: #dee2e6;\n}.table > :not(caption) > * > * {\r\n  padding: 0.5rem 0.5rem;\r\n  background-color: var(--bs-table-bg);\r\n  background-image: linear-gradient(var(--bs-table-accent-bg), var(--bs-table-accent-bg));\r\n  border-bottom-width: 1px;\n}.table > tbody {\r\n  vertical-align: inherit;\n}.table > thead {\r\n  vertical-align: bottom;\n}.table > :not(:last-child) > :last-child > * {\r\n  border-bottom-color: currentColor;\n}.caption-top {\r\n  caption-side: top;\n}.table-sm > :not(caption) > * > * {\r\n  padding: 0.25rem 0.25rem;\n}.table-bordered > :not(caption) > * {\r\n  border-width: 1px 0;\n}.table-bordered > :not(caption) > * > * {\r\n  border-width: 0 1px;\n}.table-borderless > :not(caption) > * > * {\r\n  border-bottom-width: 0;\n}.table-striped > tbody > tr:nth-of-type(odd) {\r\n  --bs-table-accent-bg: var(--bs-table-striped-bg);\r\n  color: var(--bs-table-striped-color);\n}.table-active {\r\n  --bs-table-accent-bg: var(--bs-table-active-bg);\r\n  color: var(--bs-table-active-color);\n}.table-hover > tbody > tr:hover {\r\n  --bs-table-accent-bg: var(--bs-table-hover-bg);\r\n  color: var(--bs-table-hover-color);\n}.table-primary {\r\n  --bs-table-bg: #cfe2ff;\r\n  --bs-table-striped-bg: #c5d7f2;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #bacbe6;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #bfd1ec;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #bacbe6;\n}.table-secondary {\r\n  --bs-table-bg: #e2e3e5;\r\n  --bs-table-striped-bg: #d7d8da;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #cbccce;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #d1d2d4;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #cbccce;\n}.table-success {\r\n  --bs-table-bg: #d1e7dd;\r\n  --bs-table-striped-bg: #c7dbd2;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #bcd0c7;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #c1d6cc;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #bcd0c7;\n}.table-info {\r\n  --bs-table-bg: #cff4fc;\r\n  --bs-table-striped-bg: #c5e8ef;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #badce3;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #bfe2e9;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #badce3;\n}.table-warning {\r\n  --bs-table-bg: #fff3cd;\r\n  --bs-table-striped-bg: #f2e7c3;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #e6dbb9;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #ece1be;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #e6dbb9;\n}.table-danger {\r\n  --bs-table-bg: #f8d7da;\r\n  --bs-table-striped-bg: #eccccf;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #dfc2c4;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #e5c7ca;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #dfc2c4;\n}.table-light {\r\n  --bs-table-bg: #f8f9fa;\r\n  --bs-table-striped-bg: #ecedee;\r\n  --bs-table-striped-color: #000;\r\n  --bs-table-active-bg: #dfe0e1;\r\n  --bs-table-active-color: #000;\r\n  --bs-table-hover-bg: #e5e6e7;\r\n  --bs-table-hover-color: #000;\r\n  color: #000;\r\n  border-color: #dfe0e1;\n}.table-dark {\r\n  --bs-table-bg: #212529;\r\n  --bs-table-striped-bg: #2c3034;\r\n  --bs-table-striped-color: #fff;\r\n  --bs-table-active-bg: #373b3e;\r\n  --bs-table-active-color: #fff;\r\n  --bs-table-hover-bg: #323539;\r\n  --bs-table-hover-color: #fff;\r\n  color: #fff;\r\n  border-color: #373b3e;\n}.table-responsive {\r\n  overflow-x: auto;\r\n  -webkit-overflow-scrolling: touch;\n}@media (max-width: 575.98px) {\n.table-responsive-sm {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\n}\n}@media (max-width: 767.98px) {\n.table-responsive-md {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\n}\n}@media (max-width: 991.98px) {\n.table-responsive-lg {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\n}\n}@media (max-width: 1199.98px) {\n.table-responsive-xl {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\n}\n}@media (max-width: 1399.98px) {\n.table-responsive-xxl {\r\n    overflow-x: auto;\r\n    -webkit-overflow-scrolling: touch;\n}\n}.form-label {\r\n  margin-bottom: 0.5rem;\n}.col-form-label {\r\n  padding-top: calc(0.375rem + 1px);\r\n  padding-bottom: calc(0.375rem + 1px);\r\n  margin-bottom: 0;\r\n  font-size: inherit;\r\n  line-height: 1.5;\n}.col-form-label-lg {\r\n  padding-top: calc(0.5rem + 1px);\r\n  padding-bottom: calc(0.5rem + 1px);\r\n  font-size: 1.25rem;\n}.col-form-label-sm {\r\n  padding-top: calc(0.25rem + 1px);\r\n  padding-bottom: calc(0.25rem + 1px);\r\n  font-size: 0.875rem;\n}.form-text {\r\n  margin-top: 0.25rem;\r\n  font-size: 0.875em;\r\n  color: #6c757d;\n}.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.form-control {\r\n    transition: none;\n}\n}.form-control[type=file] {\r\n  overflow: hidden;\n}.form-control[type=file]:not(:disabled):not([readonly]) {\r\n  cursor: pointer;\n}.form-control:focus {\r\n  color: #212529;\r\n  background-color: #fff;\r\n  border-color: #86b7fe;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.form-control::-webkit-date-and-time-value {\r\n  height: 1.5em;\n}.form-control::-webkit-input-placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\n}.form-control::placeholder {\r\n  color: #6c757d;\r\n  opacity: 1;\n}.form-control:disabled, .form-control[readonly] {\r\n  background-color: #e9ecef;\r\n  opacity: 1;\n}.form-control::file-selector-button {\r\n  padding: 0.375rem 0.75rem;\r\n  margin: -0.375rem -0.75rem;\r\n  -webkit-margin-end: 0.75rem;\r\n  margin-inline-end: 0.75rem;\r\n  color: #212529;\r\n  background-color: #e9ecef;\r\n  pointer-events: none;\r\n  border-color: inherit;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  border-inline-end-width: 1px;\r\n  border-radius: 0;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.form-control::file-selector-button {\r\n    transition: none;\n}\n}.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\r\n  background-color: #dde0e3;\n}.form-control::-webkit-file-upload-button {\r\n  padding: 0.375rem 0.75rem;\r\n  margin: -0.375rem -0.75rem;\r\n  -webkit-margin-end: 0.75rem;\r\n  margin-inline-end: 0.75rem;\r\n  color: #212529;\r\n  background-color: #e9ecef;\r\n  pointer-events: none;\r\n  border-color: inherit;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  border-inline-end-width: 1px;\r\n  border-radius: 0;\r\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.form-control::-webkit-file-upload-button {\r\n    -webkit-transition: none;\r\n    transition: none;\n}\n}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\r\n  background-color: #dde0e3;\n}.form-control-plaintext {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0;\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  background-color: transparent;\r\n  border: solid transparent;\r\n  border-width: 1px 0;\n}.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\r\n  padding-right: 0;\r\n  padding-left: 0;\n}.form-control-sm {\r\n  min-height: calc(1.5em + 0.5rem + 2px);\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\n}.form-control-sm::file-selector-button {\r\n  padding: 0.25rem 0.5rem;\r\n  margin: -0.25rem -0.5rem;\r\n  -webkit-margin-end: 0.5rem;\r\n  margin-inline-end: 0.5rem;\n}.form-control-sm::-webkit-file-upload-button {\r\n  padding: 0.25rem 0.5rem;\r\n  margin: -0.25rem -0.5rem;\r\n  -webkit-margin-end: 0.5rem;\r\n  margin-inline-end: 0.5rem;\n}.form-control-lg {\r\n  min-height: calc(1.5em + 1rem + 2px);\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.25rem;\r\n  border-radius: 0.3rem;\n}.form-control-lg::file-selector-button {\r\n  padding: 0.5rem 1rem;\r\n  margin: -0.5rem -1rem;\r\n  -webkit-margin-end: 1rem;\r\n  margin-inline-end: 1rem;\n}.form-control-lg::-webkit-file-upload-button {\r\n  padding: 0.5rem 1rem;\r\n  margin: -0.5rem -1rem;\r\n  -webkit-margin-end: 1rem;\r\n  margin-inline-end: 1rem;\n}uni-textarea.form-control {\r\n  min-height: calc(1.5em + 0.75rem + 2px);\n}uni-textarea.form-control-sm {\r\n  min-height: calc(1.5em + 0.5rem + 2px);\n}uni-textarea.form-control-lg {\r\n  min-height: calc(1.5em + 1rem + 2px);\n}.form-control-color {\r\n  max-width: 3rem;\r\n  height: auto;\r\n  padding: 0.375rem;\n}.form-control-color:not(:disabled):not([readonly]) {\r\n  cursor: pointer;\n}.form-control-color::-moz-color-swatch {\r\n  height: 1.5em;\r\n  border-radius: 0.25rem;\n}.form-control-color::-webkit-color-swatch {\r\n  height: 1.5em;\r\n  border-radius: 0.25rem;\n}.form-select {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  vertical-align: middle;\r\n  background-color: #fff;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 0.75rem center;\r\n  background-size: 16px 12px;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  -webkit-appearance: none;\r\n  appearance: none;\n}.form-select:focus {\r\n  border-color: #86b7fe;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\r\n  padding-right: 0.75rem;\r\n  background-image: none;\n}.form-select:disabled {\r\n  color: #6c757d;\r\n  background-color: #e9ecef;\n}.form-select:-moz-focusring {\r\n  color: transparent;\r\n  text-shadow: 0 0 0 #212529;\n}.form-select-sm {\r\n  padding-top: 0.25rem;\r\n  padding-bottom: 0.25rem;\r\n  padding-left: 0.5rem;\r\n  font-size: 0.875rem;\n}.form-select-lg {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n  padding-left: 1rem;\r\n  font-size: 1.25rem;\n}.form-check {\r\n  display: block;\r\n  min-height: 1.5rem;\r\n  padding-left: 1.5em;\r\n  margin-bottom: 0.125rem;\n}.form-check .form-check-input {\r\n  float: left;\r\n  margin-left: -1.5em;\n}.form-check-input {\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: 0.25em;\r\n  vertical-align: top;\r\n  background-color: #fff;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n  border: 1px solid rgba(0, 0, 0, 0.25);\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  -webkit-print-color-adjust: exact;\r\n  color-adjust: exact;\r\n  transition: background-color 0.15s ease-in-out, background-position 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.form-check-input {\r\n    transition: none;\n}\n}.form-check-input[type=checkbox] {\r\n  border-radius: 0.25em;\n}.form-check-input[type=radio] {\r\n  border-radius: 50%;\n}.form-check-input:active {\r\n  -webkit-filter: brightness(90%);\r\n          filter: brightness(90%);\n}.form-check-input:focus {\r\n  border-color: #86b7fe;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.form-check-input:checked {\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.form-check-input:checked[type=checkbox] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\");\n}.form-check-input:checked[type=radio] {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}.form-check-input[type=checkbox]:indeterminate {\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}.form-check-input:disabled {\r\n  pointer-events: none;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  opacity: 0.5;\n}.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\r\n  opacity: 0.5;\n}.form-switch {\r\n  padding-left: 2.5em;\n}.form-switch .form-check-input {\r\n  width: 2em;\r\n  margin-left: -2.5em;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\r\n  background-position: left center;\r\n  border-radius: 2em;\n}.form-switch .form-check-input:focus {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}.form-switch .form-check-input:checked {\r\n  background-position: right center;\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}.form-check-inline {\r\n  display: inline-block;\r\n  margin-right: 1rem;\n}.btn-check {\r\n  position: absolute;\r\n  clip: rect(0, 0, 0, 0);\r\n  pointer-events: none;\n}.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\r\n  pointer-events: none;\r\n  -webkit-filter: none;\r\n          filter: none;\r\n  opacity: 0.65;\n}.form-range {\r\n  width: 100%;\r\n  height: 1.5rem;\r\n  padding: 0;\r\n  background-color: transparent;\r\n  -webkit-appearance: none;\r\n  appearance: none;\n}.form-range:focus {\r\n  outline: none;\n}.form-range:focus::-webkit-slider-thumb {\r\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.form-range:focus::-moz-range-thumb {\r\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.form-range::-moz-focus-outer {\r\n  border: 0;\n}.form-range::-webkit-slider-thumb {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  margin-top: -0.25rem;\r\n  background-color: #0d6efd;\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  -webkit-appearance: none;\r\n  appearance: none;\n}@media (prefers-reduced-motion: reduce) {\n.form-range::-webkit-slider-thumb {\r\n    -webkit-transition: none;\r\n    transition: none;\n}\n}.form-range::-webkit-slider-thumb:active {\r\n  background-color: #b6d4fe;\n}.form-range::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 0.5rem;\r\n  color: transparent;\r\n  cursor: pointer;\r\n  background-color: #dee2e6;\r\n  border-color: transparent;\r\n  border-radius: 1rem;\n}.form-range::-moz-range-thumb {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  background-color: #0d6efd;\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  appearance: none;\n}@media (prefers-reduced-motion: reduce) {\n.form-range::-moz-range-thumb {\r\n    -moz-transition: none;\r\n    transition: none;\n}\n}.form-range::-moz-range-thumb:active {\r\n  background-color: #b6d4fe;\n}.form-range::-moz-range-track {\r\n  width: 100%;\r\n  height: 0.5rem;\r\n  color: transparent;\r\n  cursor: pointer;\r\n  background-color: #dee2e6;\r\n  border-color: transparent;\r\n  border-radius: 1rem;\n}.form-range:disabled {\r\n  pointer-events: none;\n}.form-range:disabled::-webkit-slider-thumb {\r\n  background-color: #adb5bd;\n}.form-range:disabled::-moz-range-thumb {\r\n  background-color: #adb5bd;\n}.form-floating {\r\n  position: relative;\n}.form-floating > .form-control,\r\n.form-floating > .form-select {\r\n  height: calc(3.5rem + 2px);\r\n  padding: 1rem 0.75rem;\n}.form-floating > uni-label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  padding: 1rem 0.75rem;\r\n  pointer-events: none;\r\n  border: 1px solid transparent;\r\n  -webkit-transform-origin: 0 0;\r\n          transform-origin: 0 0;\r\n  transition: opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\r\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\r\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.form-floating > uni-label {\r\n    transition: none;\n}\n}.form-floating > .form-control::-webkit-input-placeholder {\r\n  color: transparent;\n}.form-floating > .form-control::placeholder {\r\n  color: transparent;\n}.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\r\n  padding-top: 1.625rem;\r\n  padding-bottom: 0.625rem;\n}.form-floating > .form-control:-webkit-autofill {\r\n  padding-top: 1.625rem;\r\n  padding-bottom: 0.625rem;\n}.form-floating > .form-select {\r\n  padding-top: 1.625rem;\r\n  padding-bottom: 0.625rem;\n}.form-floating > .form-control:focus ~ uni-label,\r\n.form-floating > .form-control:not(:placeholder-shown) ~ uni-label,\r\n.form-floating > .form-select ~ uni-label {\r\n  opacity: 0.65;\r\n  -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\r\n          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}.form-floating > .form-control:-webkit-autofill ~ uni-label {\r\n  opacity: 0.65;\r\n  -webkit-transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\r\n          transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}.input-group {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: stretch;\r\n  width: 100%;\n}.input-group > .form-control,\r\n.input-group > .form-select {\r\n  position: relative;\r\n  flex: 1 1 auto;\r\n  width: 1%;\r\n  min-width: 0;\n}.input-group > .form-control:focus,\r\n.input-group > .form-select:focus {\r\n  z-index: 3;\n}.input-group .btn {\r\n  position: relative;\r\n  z-index: 2;\n}.input-group .btn:focus {\r\n  z-index: 3;\n}.input-group-text {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  background-color: #e9ecef;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\n}.input-group-lg > .form-control,\r\n.input-group-lg > .form-select,\r\n.input-group-lg > .input-group-text,\r\n.input-group-lg > .btn {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.25rem;\r\n  border-radius: 0.3rem;\n}.input-group-sm > .form-control,\r\n.input-group-sm > .form-select,\r\n.input-group-sm > .input-group-text,\r\n.input-group-sm > .btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\n}.input-group-lg > .form-select,\r\n.input-group-sm > .form-select {\r\n  padding-right: 1.75rem;\n}.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\r\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\n}.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),\r\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\n}.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\r\n  margin-left: -1px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\n}.valid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 0.875em;\r\n  color: #198754;\n}.valid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: 0.25rem 0.5rem;\r\n  margin-top: 0.1rem;\r\n  font-size: 0.875rem;\r\n  color: #fff;\r\n  background-color: rgba(25, 135, 84, 0.9);\r\n  border-radius: 0.25rem;\n}.was-validated :valid ~ .valid-feedback,\r\n.was-validated :valid ~ .valid-tooltip,\r\n.is-valid ~ .valid-feedback,\r\n.is-valid ~ .valid-tooltip {\r\n  display: block;\n}.was-validated .form-control:valid, .form-control.is-valid {\r\n  border-color: #198754;\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right calc(0.375em + 0.1875rem) center;\r\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\r\n  border-color: #198754;\r\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}.was-validated uni-textarea.form-control:valid, uni-textarea.form-control.is-valid {\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}.was-validated .form-select:valid, .form-select.is-valid {\r\n  border-color: #198754;\r\n  padding-right: calc(0.75em + 2.3125rem);\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\r\n  background-position: right 0.75rem center, center right 1.75rem;\r\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\r\n  border-color: #198754;\r\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}.was-validated .form-check-input:valid, .form-check-input.is-valid {\r\n  border-color: #198754;\n}.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\r\n  background-color: #198754;\n}.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);\n}.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\r\n  color: #198754;\n}.form-check-inline .form-check-input ~ .valid-feedback {\r\n  margin-left: 0.5em;\n}.invalid-feedback {\r\n  display: none;\r\n  width: 100%;\r\n  margin-top: 0.25rem;\r\n  font-size: 0.875em;\r\n  color: #dc3545;\n}.invalid-tooltip {\r\n  position: absolute;\r\n  top: 100%;\r\n  z-index: 5;\r\n  display: none;\r\n  max-width: 100%;\r\n  padding: 0.25rem 0.5rem;\r\n  margin-top: 0.1rem;\r\n  font-size: 0.875rem;\r\n  color: #fff;\r\n  background-color: rgba(220, 53, 69, 0.9);\r\n  border-radius: 0.25rem;\n}.was-validated :invalid ~ .invalid-feedback,\r\n.was-validated :invalid ~ .invalid-tooltip,\r\n.is-invalid ~ .invalid-feedback,\r\n.is-invalid ~ .invalid-tooltip {\r\n  display: block;\n}.was-validated .form-control:invalid, .form-control.is-invalid {\r\n  border-color: #dc3545;\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right calc(0.375em + 0.1875rem) center;\r\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}.was-validated uni-textarea.form-control:invalid, uni-textarea.form-control.is-invalid {\r\n  padding-right: calc(1.5em + 0.75rem);\r\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}.was-validated .form-select:invalid, .form-select.is-invalid {\r\n  border-color: #dc3545;\r\n  padding-right: calc(0.75em + 2.3125rem);\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"), url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\r\n  background-position: right 0.75rem center, center right 1.75rem;\r\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\r\n  border-color: #dc3545;\r\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\r\n  border-color: #dc3545;\n}.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\r\n  background-color: #dc3545;\n}.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\r\n  color: #dc3545;\n}.form-check-inline .form-check-input ~ .invalid-feedback {\r\n  margin-left: 0.5em;\n}.btn {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  border-radius: 0.25rem;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.btn {\r\n    transition: none;\n}\n}.btn:hover {\r\n  color: #212529;\n}.btn-check:focus + .btn, .btn:focus {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.btn:disabled, .btn.disabled, fieldset:disabled .btn {\r\n  pointer-events: none;\r\n  opacity: 0.65;\n}.btn-primary {\r\n  color: #fff;\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #0b5ed7;\r\n  border-color: #0a58ca;\n}.btn-check:focus + .btn-primary, .btn-primary:focus {\r\n  color: #fff;\r\n  background-color: #0b5ed7;\r\n  border-color: #0a58ca;\r\n  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #0a58ca;\r\n  border-color: #0a53be;\n}.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);\n}.btn-primary:disabled, .btn-primary.disabled {\r\n  color: #fff;\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.btn-secondary {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\n}.btn-secondary:hover {\r\n  color: #fff;\r\n  background-color: #5c636a;\r\n  border-color: #565e64;\n}.btn-check:focus + .btn-secondary, .btn-secondary:focus {\r\n  color: #fff;\r\n  background-color: #5c636a;\r\n  border-color: #565e64;\r\n  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #565e64;\r\n  border-color: #51585e;\n}.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);\n}.btn-secondary:disabled, .btn-secondary.disabled {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\n}.btn-success {\r\n  color: #fff;\r\n  background-color: #198754;\r\n  border-color: #198754;\n}.btn-success:hover {\r\n  color: #fff;\r\n  background-color: #157347;\r\n  border-color: #146c43;\n}.btn-check:focus + .btn-success, .btn-success:focus {\r\n  color: #fff;\r\n  background-color: #157347;\r\n  border-color: #146c43;\r\n  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #146c43;\r\n  border-color: #13653f;\n}.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);\n}.btn-success:disabled, .btn-success.disabled {\r\n  color: #fff;\r\n  background-color: #198754;\r\n  border-color: #198754;\n}.btn-info {\r\n  color: #000;\r\n  background-color: #0dcaf0;\r\n  border-color: #0dcaf0;\n}.btn-info:hover {\r\n  color: #000;\r\n  background-color: #31d2f2;\r\n  border-color: #25cff2;\n}.btn-check:focus + .btn-info, .btn-info:focus {\r\n  color: #000;\r\n  background-color: #31d2f2;\r\n  border-color: #25cff2;\r\n  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {\r\n  color: #000;\r\n  background-color: #3dd5f3;\r\n  border-color: #25cff2;\n}.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);\n}.btn-info:disabled, .btn-info.disabled {\r\n  color: #000;\r\n  background-color: #0dcaf0;\r\n  border-color: #0dcaf0;\n}.btn-warning {\r\n  color: #000;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\n}.btn-warning:hover {\r\n  color: #000;\r\n  background-color: #ffca2c;\r\n  border-color: #ffc720;\n}.btn-check:focus + .btn-warning, .btn-warning:focus {\r\n  color: #000;\r\n  background-color: #ffca2c;\r\n  border-color: #ffc720;\r\n  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {\r\n  color: #000;\r\n  background-color: #ffcd39;\r\n  border-color: #ffc720;\n}.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);\n}.btn-warning:disabled, .btn-warning.disabled {\r\n  color: #000;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\n}.btn-danger {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\n}.btn-danger:hover {\r\n  color: #fff;\r\n  background-color: #bb2d3b;\r\n  border-color: #b02a37;\n}.btn-check:focus + .btn-danger, .btn-danger:focus {\r\n  color: #fff;\r\n  background-color: #bb2d3b;\r\n  border-color: #b02a37;\r\n  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #b02a37;\r\n  border-color: #a52834;\n}.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);\n}.btn-danger:disabled, .btn-danger.disabled {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\n}.btn-light {\r\n  color: #000;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\n}.btn-light:hover {\r\n  color: #000;\r\n  background-color: #f9fafb;\r\n  border-color: #f9fafb;\n}.btn-check:focus + .btn-light, .btn-light:focus {\r\n  color: #000;\r\n  background-color: #f9fafb;\r\n  border-color: #f9fafb;\r\n  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {\r\n  color: #000;\r\n  background-color: #f9fafb;\r\n  border-color: #f9fafb;\n}.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);\n}.btn-light:disabled, .btn-light.disabled {\r\n  color: #000;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\n}.btn-dark {\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-color: #212529;\n}.btn-dark:hover {\r\n  color: #fff;\r\n  background-color: #1c1f23;\r\n  border-color: #1a1e21;\n}.btn-check:focus + .btn-dark, .btn-dark:focus {\r\n  color: #fff;\r\n  background-color: #1c1f23;\r\n  border-color: #1a1e21;\r\n  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #1a1e21;\r\n  border-color: #191c1f;\n}.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);\n}.btn-dark:disabled, .btn-dark.disabled {\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-color: #212529;\n}.btn-outline-primary {\r\n  color: #0d6efd;\r\n  border-color: #0d6efd;\n}.btn-outline-primary:hover {\r\n  color: #fff;\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {\r\n  color: #fff;\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);\n}.btn-outline-primary:disabled, .btn-outline-primary.disabled {\r\n  color: #0d6efd;\r\n  background-color: transparent;\n}.btn-outline-secondary {\r\n  color: #6c757d;\r\n  border-color: #6c757d;\n}.btn-outline-secondary:hover {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\n}.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {\r\n  color: #fff;\r\n  background-color: #6c757d;\r\n  border-color: #6c757d;\n}.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);\n}.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {\r\n  color: #6c757d;\r\n  background-color: transparent;\n}.btn-outline-success {\r\n  color: #198754;\r\n  border-color: #198754;\n}.btn-outline-success:hover {\r\n  color: #fff;\r\n  background-color: #198754;\r\n  border-color: #198754;\n}.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {\r\n  color: #fff;\r\n  background-color: #198754;\r\n  border-color: #198754;\n}.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);\n}.btn-outline-success:disabled, .btn-outline-success.disabled {\r\n  color: #198754;\r\n  background-color: transparent;\n}.btn-outline-info {\r\n  color: #0dcaf0;\r\n  border-color: #0dcaf0;\n}.btn-outline-info:hover {\r\n  color: #000;\r\n  background-color: #0dcaf0;\r\n  border-color: #0dcaf0;\n}.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {\r\n  color: #000;\r\n  background-color: #0dcaf0;\r\n  border-color: #0dcaf0;\n}.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);\n}.btn-outline-info:disabled, .btn-outline-info.disabled {\r\n  color: #0dcaf0;\r\n  background-color: transparent;\n}.btn-outline-warning {\r\n  color: #ffc107;\r\n  border-color: #ffc107;\n}.btn-outline-warning:hover {\r\n  color: #000;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\n}.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {\r\n  color: #000;\r\n  background-color: #ffc107;\r\n  border-color: #ffc107;\n}.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);\n}.btn-outline-warning:disabled, .btn-outline-warning.disabled {\r\n  color: #ffc107;\r\n  background-color: transparent;\n}.btn-outline-danger {\r\n  color: #dc3545;\r\n  border-color: #dc3545;\n}.btn-outline-danger:hover {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\n}.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {\r\n  color: #fff;\r\n  background-color: #dc3545;\r\n  border-color: #dc3545;\n}.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);\n}.btn-outline-danger:disabled, .btn-outline-danger.disabled {\r\n  color: #dc3545;\r\n  background-color: transparent;\n}.btn-outline-light {\r\n  color: #f8f9fa;\r\n  border-color: #f8f9fa;\n}.btn-outline-light:hover {\r\n  color: #000;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\n}.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {\r\n  color: #000;\r\n  background-color: #f8f9fa;\r\n  border-color: #f8f9fa;\n}.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);\n}.btn-outline-light:disabled, .btn-outline-light.disabled {\r\n  color: #f8f9fa;\r\n  background-color: transparent;\n}.btn-outline-dark {\r\n  color: #212529;\r\n  border-color: #212529;\n}.btn-outline-dark:hover {\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-color: #212529;\n}.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {\r\n  color: #fff;\r\n  background-color: #212529;\r\n  border-color: #212529;\n}.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {\r\n  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);\n}.btn-outline-dark:disabled, .btn-outline-dark.disabled {\r\n  color: #212529;\r\n  background-color: transparent;\n}.btn-link {\r\n  font-weight: 400;\r\n  color: #0d6efd;\r\n  text-decoration: underline;\n}.btn-link:hover {\r\n  color: #0a58ca;\n}.btn-link:disabled, .btn-link.disabled {\r\n  color: #6c757d;\n}.btn-lg, .btn-group-lg > .btn {\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1.25rem;\r\n  border-radius: 0.3rem;\n}.btn-sm, .btn-group-sm > .btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\n}.fade {\r\n  transition: opacity 0.15s linear;\n}@media (prefers-reduced-motion: reduce) {\n.fade {\r\n    transition: none;\n}\n}.fade:not(.show) {\r\n  opacity: 0;\n}.collapse:not(.show) {\r\n  display: none;\n}.collapsing {\r\n  height: 0;\r\n  overflow: hidden;\r\n  transition: height 0.35s ease;\n}@media (prefers-reduced-motion: reduce) {\n.collapsing {\r\n    transition: none;\n}\n}.dropup,\r\n.dropend,\r\n.dropdown,\r\n.dropstart {\r\n  position: relative;\n}.dropdown-toggle {\r\n  white-space: nowrap;\n}.dropdown-toggle::after {\r\n  display: inline-block;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0.3em solid;\r\n  border-right: 0.3em solid transparent;\r\n  border-bottom: 0;\r\n  border-left: 0.3em solid transparent;\n}.dropdown-toggle:empty::after {\r\n  margin-left: 0;\n}.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  min-width: 10rem;\r\n  padding: 0.5rem 0;\r\n  margin: 0.125rem 0 0;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\n}.dropdown-menu[style] {\r\n  right: auto !important;\n}.dropdown-menu-start {\r\n  --bs-position: start;\r\n  right: auto /* rtl:ignore */;\r\n  left: 0 /* rtl:ignore */;\n}.dropdown-menu-end {\r\n  --bs-position: end;\r\n  right: 0 /* rtl:ignore */;\r\n  left: auto /* rtl:ignore */;\n}@media (min-width: 576px) {\n.dropdown-menu-sm-start {\r\n    --bs-position: start;\r\n    right: auto /* rtl:ignore */;\r\n    left: 0 /* rtl:ignore */;\n}\n.dropdown-menu-sm-end {\r\n    --bs-position: end;\r\n    right: 0 /* rtl:ignore */;\r\n    left: auto /* rtl:ignore */;\n}\n}@media (min-width: 768px) {\n.dropdown-menu-md-start {\r\n    --bs-position: start;\r\n    right: auto /* rtl:ignore */;\r\n    left: 0 /* rtl:ignore */;\n}\n.dropdown-menu-md-end {\r\n    --bs-position: end;\r\n    right: 0 /* rtl:ignore */;\r\n    left: auto /* rtl:ignore */;\n}\n}@media (min-width: 992px) {\n.dropdown-menu-lg-start {\r\n    --bs-position: start;\r\n    right: auto /* rtl:ignore */;\r\n    left: 0 /* rtl:ignore */;\n}\n.dropdown-menu-lg-end {\r\n    --bs-position: end;\r\n    right: 0 /* rtl:ignore */;\r\n    left: auto /* rtl:ignore */;\n}\n}@media (min-width: 1200px) {\n.dropdown-menu-xl-start {\r\n    --bs-position: start;\r\n    right: auto /* rtl:ignore */;\r\n    left: 0 /* rtl:ignore */;\n}\n.dropdown-menu-xl-end {\r\n    --bs-position: end;\r\n    right: 0 /* rtl:ignore */;\r\n    left: auto /* rtl:ignore */;\n}\n}@media (min-width: 1400px) {\n.dropdown-menu-xxl-start {\r\n    --bs-position: start;\r\n    right: auto /* rtl:ignore */;\r\n    left: 0 /* rtl:ignore */;\n}\n.dropdown-menu-xxl-end {\r\n    --bs-position: end;\r\n    right: 0 /* rtl:ignore */;\r\n    left: auto /* rtl:ignore */;\n}\n}.dropup .dropdown-menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  margin-top: 0;\r\n  margin-bottom: 0.125rem;\n}.dropup .dropdown-toggle::after {\r\n  display: inline-block;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0;\r\n  border-right: 0.3em solid transparent;\r\n  border-bottom: 0.3em solid;\r\n  border-left: 0.3em solid transparent;\n}.dropup .dropdown-toggle:empty::after {\r\n  margin-left: 0;\n}.dropend .dropdown-menu {\r\n  top: 0;\r\n  right: auto;\r\n  left: 100%;\r\n  margin-top: 0;\r\n  margin-left: 0.125rem;\n}.dropend .dropdown-toggle::after {\r\n  display: inline-block;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0.3em solid transparent;\r\n  border-right: 0;\r\n  border-bottom: 0.3em solid transparent;\r\n  border-left: 0.3em solid;\n}.dropend .dropdown-toggle:empty::after {\r\n  margin-left: 0;\n}.dropend .dropdown-toggle::after {\r\n  vertical-align: 0;\n}.dropstart .dropdown-menu {\r\n  top: 0;\r\n  right: 100%;\r\n  left: auto;\r\n  margin-top: 0;\r\n  margin-right: 0.125rem;\n}.dropstart .dropdown-toggle::after {\r\n  display: inline-block;\r\n  margin-left: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\n}.dropstart .dropdown-toggle::after {\r\n  display: none;\n}.dropstart .dropdown-toggle::before {\r\n  display: inline-block;\r\n  margin-right: 0.255em;\r\n  vertical-align: 0.255em;\r\n  content: \"\";\r\n  border-top: 0.3em solid transparent;\r\n  border-right: 0.3em solid;\r\n  border-bottom: 0.3em solid transparent;\n}.dropstart .dropdown-toggle:empty::after {\r\n  margin-left: 0;\n}.dropstart .dropdown-toggle::before {\r\n  vertical-align: 0;\n}.dropdown-divider {\r\n  height: 0;\r\n  margin: 0.5rem 0;\r\n  overflow: hidden;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.15);\n}.dropdown-item {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.25rem 1rem;\r\n  clear: both;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  text-align: inherit;\r\n  text-decoration: none;\r\n  white-space: nowrap;\r\n  background-color: transparent;\r\n  border: 0;\n}.dropdown-item:hover, .dropdown-item:focus {\r\n  color: #1e2125;\r\n  background-color: #f8f9fa;\n}.dropdown-item.active, .dropdown-item:active {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #0d6efd;\n}.dropdown-item.disabled, .dropdown-item:disabled {\r\n  color: #6c757d;\r\n  pointer-events: none;\r\n  background-color: transparent;\n}.dropdown-menu.show {\r\n  display: block;\n}.dropdown-header {\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 0;\r\n  font-size: 0.875rem;\r\n  color: #6c757d;\r\n  white-space: nowrap;\n}.dropdown-item-text {\r\n  display: block;\r\n  padding: 0.25rem 1rem;\r\n  color: #212529;\n}.dropdown-menu-dark {\r\n  color: #dee2e6;\r\n  background-color: #343a40;\r\n  border-color: rgba(0, 0, 0, 0.15);\n}.dropdown-menu-dark .dropdown-item {\r\n  color: #dee2e6;\n}.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, 0.15);\n}.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {\r\n  color: #fff;\r\n  background-color: #0d6efd;\n}.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {\r\n  color: #adb5bd;\n}.dropdown-menu-dark .dropdown-divider {\r\n  border-color: rgba(0, 0, 0, 0.15);\n}.dropdown-menu-dark .dropdown-item-text {\r\n  color: #dee2e6;\n}.dropdown-menu-dark .dropdown-header {\r\n  color: #adb5bd;\n}.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  display: inline-flex;\r\n  vertical-align: middle;\n}.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n  position: relative;\r\n  flex: 1 1 auto;\n}.btn-group > .btn-check:checked + .btn,\r\n.btn-group > .btn-check:focus + .btn,\r\n.btn-group > .btn:hover,\r\n.btn-group > .btn:focus,\r\n.btn-group > .btn:active,\r\n.btn-group > .btn.active,\r\n.btn-group-vertical > .btn-check:checked + .btn,\r\n.btn-group-vertical > .btn-check:focus + .btn,\r\n.btn-group-vertical > .btn:hover,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group-vertical > .btn.active {\r\n  z-index: 1;\n}.btn-toolbar {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\n}.btn-toolbar .input-group {\r\n  width: auto;\n}.btn-group > .btn:not(:first-child),\r\n.btn-group > .btn-group:not(:first-child) {\r\n  margin-left: -1px;\n}.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\r\n.btn-group > .btn-group:not(:last-child) > .btn {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\n}.btn-group > .btn:nth-child(n+3),\r\n.btn-group > :not(.btn-check) + .btn,\r\n.btn-group > .btn-group:not(:first-child) > .btn {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\n}.dropdown-toggle-split {\r\n  padding-right: 0.5625rem;\r\n  padding-left: 0.5625rem;\n}.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {\r\n  margin-left: 0;\n}.dropstart .dropdown-toggle-split::before {\r\n  margin-right: 0;\n}.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\r\n  padding-right: 0.375rem;\r\n  padding-left: 0.375rem;\n}.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\r\n  padding-right: 0.75rem;\r\n  padding-left: 0.75rem;\n}.btn-group-vertical {\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\n}.btn-group-vertical > .btn,\r\n.btn-group-vertical > .btn-group {\r\n  width: 100%;\n}.btn-group-vertical > .btn:not(:first-child),\r\n.btn-group-vertical > .btn-group:not(:first-child) {\r\n  margin-top: -1px;\n}.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\r\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\n}.btn-group-vertical > .btn ~ .btn,\r\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\n}.nav {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\n}.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n  text-decoration: none;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.nav-link {\r\n    transition: none;\n}\n}.nav-link.disabled {\r\n  color: #6c757d;\r\n  pointer-events: none;\r\n  cursor: default;\n}.nav-tabs {\r\n  border-bottom: 1px solid #dee2e6;\n}.nav-tabs .nav-link {\r\n  margin-bottom: -1px;\r\n  border: 1px solid transparent;\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\n}.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\r\n  border-color: #e9ecef #e9ecef #dee2e6;\n}.nav-tabs .nav-link.disabled {\r\n  color: #6c757d;\r\n  background-color: transparent;\r\n  border-color: transparent;\n}.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\n}.nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\n}.nav-pills .nav-link {\r\n  border-radius: 0.25rem;\n}.nav-pills .nav-link.active,\r\n.nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #0d6efd;\n}.nav-fill > .nav-link,\r\n.nav-fill .nav-item {\r\n  flex: 1 1 auto;\r\n  text-align: center;\n}.nav-justified > .nav-link,\r\n.nav-justified .nav-item {\r\n  flex-basis: 0;\r\n  flex-grow: 1;\r\n  text-align: center;\n}.tab-content > .tab-pane {\r\n  display: none;\n}.tab-content > .active {\r\n  display: block;\n}.navbar {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\n}.navbar > .container,\r\n.navbar > .container-fluid,\r\n.navbar > .container-sm,\r\n.navbar > .container-md,\r\n.navbar > .container-lg,\r\n.navbar > .container-xl,\r\n.navbar > .container-xxl {\r\n  display: flex;\r\n  flex-wrap: inherit;\r\n  align-items: center;\r\n  justify-content: space-between;\n}.navbar-brand {\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  text-decoration: none;\r\n  white-space: nowrap;\n}.navbar-nav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\n}.navbar-nav .nav-link {\r\n  padding-right: 0;\r\n  padding-left: 0;\n}.navbar-nav .dropdown-menu {\r\n  position: static;\n}.navbar-text {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\n}.navbar-collapse {\r\n  align-items: center;\r\n  width: 100%;\n}.navbar-toggler {\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.navbar-toggler {\r\n    transition: none;\n}\n}.navbar-toggler:hover {\r\n  text-decoration: none;\n}.navbar-toggler:focus {\r\n  text-decoration: none;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem;\n}.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 100%;\n}@media (min-width: 576px) {\n.navbar-expand-sm {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\n}\n.navbar-expand-sm .navbar-nav {\r\n    flex-direction: row;\n}\n.navbar-expand-sm .navbar-nav .dropdown-menu {\r\n    position: absolute;\n}\n.navbar-expand-sm .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\n}\n.navbar-expand-sm .navbar-collapse {\r\n    display: flex !important;\n}\n.navbar-expand-sm .navbar-toggler {\r\n    display: none;\n}\n}@media (min-width: 768px) {\n.navbar-expand-md {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\n}\n.navbar-expand-md .navbar-nav {\r\n    flex-direction: row;\n}\n.navbar-expand-md .navbar-nav .dropdown-menu {\r\n    position: absolute;\n}\n.navbar-expand-md .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\n}\n.navbar-expand-md .navbar-collapse {\r\n    display: flex !important;\n}\n.navbar-expand-md .navbar-toggler {\r\n    display: none;\n}\n}@media (min-width: 992px) {\n.navbar-expand-lg {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\n}\n.navbar-expand-lg .navbar-nav {\r\n    flex-direction: row;\n}\n.navbar-expand-lg .navbar-nav .dropdown-menu {\r\n    position: absolute;\n}\n.navbar-expand-lg .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\n}\n.navbar-expand-lg .navbar-collapse {\r\n    display: flex !important;\n}\n.navbar-expand-lg .navbar-toggler {\r\n    display: none;\n}\n}@media (min-width: 1200px) {\n.navbar-expand-xl {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\n}\n.navbar-expand-xl .navbar-nav {\r\n    flex-direction: row;\n}\n.navbar-expand-xl .navbar-nav .dropdown-menu {\r\n    position: absolute;\n}\n.navbar-expand-xl .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\n}\n.navbar-expand-xl .navbar-collapse {\r\n    display: flex !important;\n}\n.navbar-expand-xl .navbar-toggler {\r\n    display: none;\n}\n}@media (min-width: 1400px) {\n.navbar-expand-xxl {\r\n    flex-wrap: nowrap;\r\n    justify-content: flex-start;\n}\n.navbar-expand-xxl .navbar-nav {\r\n    flex-direction: row;\n}\n.navbar-expand-xxl .navbar-nav .dropdown-menu {\r\n    position: absolute;\n}\n.navbar-expand-xxl .navbar-nav .nav-link {\r\n    padding-right: 0.5rem;\r\n    padding-left: 0.5rem;\n}\n.navbar-expand-xxl .navbar-collapse {\r\n    display: flex !important;\n}\n.navbar-expand-xxl .navbar-toggler {\r\n    display: none;\n}\n}.navbar-expand {\r\n  flex-wrap: nowrap;\r\n  justify-content: flex-start;\n}.navbar-expand .navbar-nav {\r\n  flex-direction: row;\n}.navbar-expand .navbar-nav .dropdown-menu {\r\n  position: absolute;\n}.navbar-expand .navbar-nav .nav-link {\r\n  padding-right: 0.5rem;\r\n  padding-left: 0.5rem;\n}.navbar-expand .navbar-collapse {\r\n  display: flex !important;\n}.navbar-expand .navbar-toggler {\r\n  display: none;\n}.navbar-light .navbar-brand {\r\n  color: rgba(0, 0, 0, 0.9);\n}.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\r\n  color: rgba(0, 0, 0, 0.9);\n}.navbar-light .navbar-nav .nav-link {\r\n  color: rgba(0, 0, 0, 0.55);\n}.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\r\n  color: rgba(0, 0, 0, 0.7);\n}.navbar-light .navbar-nav .nav-link.disabled {\r\n  color: rgba(0, 0, 0, 0.3);\n}.navbar-light .navbar-nav .show > .nav-link,\r\n.navbar-light .navbar-nav .nav-link.active {\r\n  color: rgba(0, 0, 0, 0.9);\n}.navbar-light .navbar-toggler {\r\n  color: rgba(0, 0, 0, 0.55);\r\n  border-color: rgba(0, 0, 0, 0.1);\n}.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}.navbar-light .navbar-text {\r\n  color: rgba(0, 0, 0, 0.55);\n}.navbar-light .navbar-text a,\r\n.navbar-light .navbar-text a:hover,\r\n.navbar-light .navbar-text a:focus {\r\n  color: rgba(0, 0, 0, 0.9);\n}.navbar-dark .navbar-brand {\r\n  color: #fff;\n}.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\r\n  color: #fff;\n}.navbar-dark .navbar-nav .nav-link {\r\n  color: rgba(255, 255, 255, 0.55);\n}.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\r\n  color: rgba(255, 255, 255, 0.75);\n}.navbar-dark .navbar-nav .nav-link.disabled {\r\n  color: rgba(255, 255, 255, 0.25);\n}.navbar-dark .navbar-nav .show > .nav-link,\r\n.navbar-dark .navbar-nav .nav-link.active {\r\n  color: #fff;\n}.navbar-dark .navbar-toggler {\r\n  color: rgba(255, 255, 255, 0.55);\r\n  border-color: rgba(255, 255, 255, 0.1);\n}.navbar-dark .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}.navbar-dark .navbar-text {\r\n  color: rgba(255, 255, 255, 0.55);\n}.navbar-dark .navbar-text a,\r\n.navbar-dark .navbar-text a:hover,\r\n.navbar-dark .navbar-text a:focus {\r\n  color: #fff;\n}.card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\n}.card > hr {\r\n  margin-right: 0;\r\n  margin-left: 0;\n}.card > .list-group {\r\n  border-top: inherit;\r\n  border-bottom: inherit;\n}.card > .list-group:first-child {\r\n  border-top-width: 0;\r\n  border-top-left-radius: calc(0.25rem - 1px);\r\n  border-top-right-radius: calc(0.25rem - 1px);\n}.card > .list-group:last-child {\r\n  border-bottom-width: 0;\r\n  border-bottom-right-radius: calc(0.25rem - 1px);\r\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}.card > .card-header + .list-group,\r\n.card > .list-group + .card-footer {\r\n  border-top: 0;\n}.card-body {\r\n  flex: 1 1 auto;\r\n  padding: 1rem 1rem;\n}.card-title {\r\n  margin-bottom: 0.5rem;\n}.card-subtitle {\r\n  margin-top: -0.25rem;\r\n  margin-bottom: 0;\n}.card-text:last-child {\r\n  margin-bottom: 0;\n}.card-link:hover {\r\n  text-decoration: none;\n}.card-link + .card-link {\r\n  margin-left: 1rem /* rtl:ignore */;\n}.card-header {\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}.card-header:first-child {\r\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}.card-footer {\r\n  padding: 0.5rem 1rem;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}.card-footer:last-child {\r\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}.card-header-tabs {\r\n  margin-right: -0.5rem;\r\n  margin-bottom: -0.5rem;\r\n  margin-left: -0.5rem;\r\n  border-bottom: 0;\n}.card-header-pills {\r\n  margin-right: -0.5rem;\r\n  margin-left: -0.5rem;\n}.card-img-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n  border-radius: calc(0.25rem - 1px);\n}.card-img,\r\n.card-img-top,\r\n.card-img-bottom {\r\n  width: 100%;\n}.card-img,\r\n.card-img-top {\r\n  border-top-left-radius: calc(0.25rem - 1px);\r\n  border-top-right-radius: calc(0.25rem - 1px);\n}.card-img,\r\n.card-img-bottom {\r\n  border-bottom-right-radius: calc(0.25rem - 1px);\r\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}.card-group > .card {\r\n  margin-bottom: 0.75rem;\n}@media (min-width: 576px) {\n.card-group {\r\n    display: flex;\r\n    flex-flow: row wrap;\n}\n.card-group > .card {\r\n    flex: 1 0 0%;\r\n    margin-bottom: 0;\n}\n.card-group > .card + .card {\r\n    margin-left: 0;\r\n    border-left: 0;\n}\n.card-group > .card:not(:last-child) {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\n}\n.card-group > .card:not(:last-child) .card-img-top,\r\n.card-group > .card:not(:last-child) .card-header {\r\n    border-top-right-radius: 0;\n}\n.card-group > .card:not(:last-child) .card-img-bottom,\r\n.card-group > .card:not(:last-child) .card-footer {\r\n    border-bottom-right-radius: 0;\n}\n.card-group > .card:not(:first-child) {\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\n}\n.card-group > .card:not(:first-child) .card-img-top,\r\n.card-group > .card:not(:first-child) .card-header {\r\n    border-top-left-radius: 0;\n}\n.card-group > .card:not(:first-child) .card-img-bottom,\r\n.card-group > .card:not(:first-child) .card-footer {\r\n    border-bottom-left-radius: 0;\n}\n}.accordion-button {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding: 1rem 1.25rem;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  background-color: transparent;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0;\r\n  overflow-anchor: none;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n}@media (prefers-reduced-motion: reduce) {\n.accordion-button {\r\n    transition: none;\n}\n}.accordion-button.collapsed {\r\n  border-bottom-width: 0;\n}.accordion-button:not(.collapsed) {\r\n  color: #0c63e4;\r\n  background-color: #e7f1ff;\n}.accordion-button:not(.collapsed)::after {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\n}.accordion-button::after {\r\n  flex-shrink: 0;\r\n  width: 1.25rem;\r\n  height: 1.25rem;\r\n  margin-left: auto;\r\n  content: \"\";\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-size: 1.25rem;\r\n  transition: -webkit-transform 0.2s ease-in-out;\r\n  transition: transform 0.2s ease-in-out;\r\n  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.accordion-button::after {\r\n    transition: none;\n}\n}.accordion-button:hover {\r\n  z-index: 2;\n}.accordion-button:focus {\r\n  z-index: 3;\r\n  border-color: #86b7fe;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.accordion-header {\r\n  margin-bottom: 0;\n}.accordion-item:first-of-type .accordion-button {\r\n  border-top-left-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\n}.accordion-item:last-of-type .accordion-button.collapsed {\r\n  border-bottom-width: 1px;\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\n}.accordion-item:last-of-type .accordion-collapse {\r\n  border-bottom-width: 1px;\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\n}.accordion-collapse {\r\n  border: solid rgba(0, 0, 0, 0.125);\r\n  border-width: 0 1px;\n}.accordion-body {\r\n  padding: 1rem 1.25rem;\n}.accordion-flush .accordion-button {\r\n  border-right: 0;\r\n  border-left: 0;\r\n  border-radius: 0;\n}.accordion-flush .accordion-collapse {\r\n  border-width: 0;\n}.accordion-flush .accordion-item:first-of-type .accordion-button {\r\n  border-top-width: 0;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\n}.accordion-flush .accordion-item:last-of-type .accordion-button.collapsed {\r\n  border-bottom-width: 0;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\n}.breadcrumb {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  padding: 0 0;\r\n  margin-bottom: 1rem;\r\n  list-style: none;\n}.breadcrumb-item + .breadcrumb-item {\r\n  padding-left: 0.5rem;\n}.breadcrumb-item + .breadcrumb-item::before {\r\n  float: left;\r\n  padding-right: 0.5rem;\r\n  color: #6c757d;\r\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}.breadcrumb-item.active {\r\n  color: #6c757d;\n}.pagination {\r\n  display: flex;\r\n  padding-left: 0;\r\n  list-style: none;\n}.page-link {\r\n  position: relative;\r\n  display: block;\r\n  color: #0d6efd;\r\n  text-decoration: none;\r\n  background-color: #fff;\r\n  border: 1px solid #dee2e6;\r\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.page-link {\r\n    transition: none;\n}\n}.page-link:hover {\r\n  z-index: 2;\r\n  color: #0a58ca;\r\n  background-color: #e9ecef;\r\n  border-color: #dee2e6;\n}.page-link:focus {\r\n  z-index: 3;\r\n  color: #0a58ca;\r\n  background-color: #e9ecef;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}.page-item:not(:first-child) .page-link {\r\n  margin-left: -1px;\n}.page-item.active .page-link {\r\n  z-index: 3;\r\n  color: #fff;\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.page-item.disabled .page-link {\r\n  color: #6c757d;\r\n  pointer-events: none;\r\n  background-color: #fff;\r\n  border-color: #dee2e6;\n}.page-link {\r\n  padding: 0.375rem 0.75rem;\n}.page-item:first-child .page-link {\r\n  border-top-left-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\n}.page-item:last-child .page-link {\r\n  border-top-right-radius: 0.25rem;\r\n  border-bottom-right-radius: 0.25rem;\n}.pagination-lg .page-link {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.25rem;\n}.pagination-lg .page-item:first-child .page-link {\r\n  border-top-left-radius: 0.3rem;\r\n  border-bottom-left-radius: 0.3rem;\n}.pagination-lg .page-item:last-child .page-link {\r\n  border-top-right-radius: 0.3rem;\r\n  border-bottom-right-radius: 0.3rem;\n}.pagination-sm .page-link {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\n}.pagination-sm .page-item:first-child .page-link {\r\n  border-top-left-radius: 0.2rem;\r\n  border-bottom-left-radius: 0.2rem;\n}.pagination-sm .page-item:last-child .page-link {\r\n  border-top-right-radius: 0.2rem;\r\n  border-bottom-right-radius: 0.2rem;\n}.badge {\r\n  display: inline-block;\r\n  padding: 0.35em 0.65em;\r\n  font-size: 0.75em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\n}.badge:empty {\r\n  display: none;\n}.btn .badge {\r\n  position: relative;\r\n  top: -1px;\n}.alert {\r\n  position: relative;\r\n  padding: 1rem 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\n}.alert-heading {\r\n  color: inherit;\n}.alert-link {\r\n  font-weight: 700;\n}.alert-dismissible {\r\n  padding-right: 3rem;\n}.alert-dismissible .btn-close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  padding: 1.25rem 1rem;\n}.alert-primary {\r\n  color: #084298;\r\n  background-color: #cfe2ff;\r\n  border-color: #b6d4fe;\n}.alert-primary .alert-link {\r\n  color: #06357a;\n}.alert-secondary {\r\n  color: #41464b;\r\n  background-color: #e2e3e5;\r\n  border-color: #d3d6d8;\n}.alert-secondary .alert-link {\r\n  color: #34383c;\n}.alert-success {\r\n  color: #0f5132;\r\n  background-color: #d1e7dd;\r\n  border-color: #badbcc;\n}.alert-success .alert-link {\r\n  color: #0c4128;\n}.alert-info {\r\n  color: #055160;\r\n  background-color: #cff4fc;\r\n  border-color: #b6effb;\n}.alert-info .alert-link {\r\n  color: #04414d;\n}.alert-warning {\r\n  color: #664d03;\r\n  background-color: #fff3cd;\r\n  border-color: #ffecb5;\n}.alert-warning .alert-link {\r\n  color: #523e02;\n}.alert-danger {\r\n  color: #842029;\r\n  background-color: #f8d7da;\r\n  border-color: #f5c2c7;\n}.alert-danger .alert-link {\r\n  color: #6a1a21;\n}.alert-light {\r\n  color: #636464;\r\n  background-color: #fefefe;\r\n  border-color: #fdfdfe;\n}.alert-light .alert-link {\r\n  color: #4f5050;\n}.alert-dark {\r\n  color: #141619;\r\n  background-color: #d3d3d4;\r\n  border-color: #bcbebf;\n}.alert-dark .alert-link {\r\n  color: #101214;\n}@-webkit-keyframes progress-bar-stripes {\n0% {\r\n    background-position-x: 1rem;\n}\n}@keyframes progress-bar-stripes {\n0% {\r\n    background-position-x: 1rem;\n}\n}.progress {\r\n  display: flex;\r\n  height: 1rem;\r\n  overflow: hidden;\r\n  font-size: 0.75rem;\r\n  background-color: #e9ecef;\r\n  border-radius: 0.25rem;\n}.progress-bar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  background-color: #0d6efd;\r\n  transition: width 0.6s ease;\n}@media (prefers-reduced-motion: reduce) {\n.progress-bar {\r\n    transition: none;\n}\n}.progress-bar-striped {\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-size: 1rem 1rem;\n}.progress-bar-animated {\r\n  -webkit-animation: 1s linear infinite progress-bar-stripes;\r\n  animation: 1s linear infinite progress-bar-stripes;\n}@media (prefers-reduced-motion: reduce) {\n.progress-bar-animated {\r\n    -webkit-animation: none;\r\n    animation: none;\n}\n}.list-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  border-radius: 0.25rem;\n}.list-group-item-action {\r\n  width: 100%;\r\n  color: #495057;\r\n  text-align: inherit;\n}.list-group-item-action:hover, .list-group-item-action:focus {\r\n  z-index: 1;\r\n  color: #495057;\r\n  text-decoration: none;\r\n  background-color: #f8f9fa;\n}.list-group-item-action:active {\r\n  color: #212529;\r\n  background-color: #e9ecef;\n}.list-group-item {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n  text-decoration: none;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\n}.list-group-item:first-child {\r\n  border-top-left-radius: inherit;\r\n  border-top-right-radius: inherit;\n}.list-group-item:last-child {\r\n  border-bottom-right-radius: inherit;\r\n  border-bottom-left-radius: inherit;\n}.list-group-item.disabled, .list-group-item:disabled {\r\n  color: #6c757d;\r\n  pointer-events: none;\r\n  background-color: #fff;\n}.list-group-item.active {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #0d6efd;\r\n  border-color: #0d6efd;\n}.list-group-item + .list-group-item {\r\n  border-top-width: 0;\n}.list-group-item + .list-group-item.active {\r\n  margin-top: -1px;\r\n  border-top-width: 1px;\n}.list-group-horizontal {\r\n  flex-direction: row;\n}.list-group-horizontal > .list-group-item:first-child {\r\n  border-bottom-left-radius: 0.25rem;\r\n  border-top-right-radius: 0;\n}.list-group-horizontal > .list-group-item:last-child {\r\n  border-top-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0;\n}.list-group-horizontal > .list-group-item.active {\r\n  margin-top: 0;\n}.list-group-horizontal > .list-group-item + .list-group-item {\r\n  border-top-width: 1px;\r\n  border-left-width: 0;\n}.list-group-horizontal > .list-group-item + .list-group-item.active {\r\n  margin-left: -1px;\r\n  border-left-width: 1px;\n}@media (min-width: 576px) {\n.list-group-horizontal-sm {\r\n    flex-direction: row;\n}\n.list-group-horizontal-sm > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-sm > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-sm > .list-group-item.active {\r\n    margin-top: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\n}\n.list-group-horizontal-sm > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\n}\n}@media (min-width: 768px) {\n.list-group-horizontal-md {\r\n    flex-direction: row;\n}\n.list-group-horizontal-md > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-md > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-md > .list-group-item.active {\r\n    margin-top: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\n}\n.list-group-horizontal-md > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\n}\n}@media (min-width: 992px) {\n.list-group-horizontal-lg {\r\n    flex-direction: row;\n}\n.list-group-horizontal-lg > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-lg > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-lg > .list-group-item.active {\r\n    margin-top: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\n}\n.list-group-horizontal-lg > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\n}\n}@media (min-width: 1200px) {\n.list-group-horizontal-xl {\r\n    flex-direction: row;\n}\n.list-group-horizontal-xl > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-xl > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-xl > .list-group-item.active {\r\n    margin-top: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\n}\n.list-group-horizontal-xl > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\n}\n}@media (min-width: 1400px) {\n.list-group-horizontal-xxl {\r\n    flex-direction: row;\n}\n.list-group-horizontal-xxl > .list-group-item:first-child {\r\n    border-bottom-left-radius: 0.25rem;\r\n    border-top-right-radius: 0;\n}\n.list-group-horizontal-xxl > .list-group-item:last-child {\r\n    border-top-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0;\n}\n.list-group-horizontal-xxl > .list-group-item.active {\r\n    margin-top: 0;\n}\n.list-group-horizontal-xxl > .list-group-item + .list-group-item {\r\n    border-top-width: 1px;\r\n    border-left-width: 0;\n}\n.list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\r\n    margin-left: -1px;\r\n    border-left-width: 1px;\n}\n}.list-group-flush {\r\n  border-radius: 0;\n}.list-group-flush > .list-group-item {\r\n  border-width: 0 0 1px;\n}.list-group-flush > .list-group-item:last-child {\r\n  border-bottom-width: 0;\n}.list-group-item-primary {\r\n  color: #084298;\r\n  background-color: #cfe2ff;\n}.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\r\n  color: #084298;\r\n  background-color: #bacbe6;\n}.list-group-item-primary.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #084298;\r\n  border-color: #084298;\n}.list-group-item-secondary {\r\n  color: #41464b;\r\n  background-color: #e2e3e5;\n}.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\r\n  color: #41464b;\r\n  background-color: #cbccce;\n}.list-group-item-secondary.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #41464b;\r\n  border-color: #41464b;\n}.list-group-item-success {\r\n  color: #0f5132;\r\n  background-color: #d1e7dd;\n}.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\r\n  color: #0f5132;\r\n  background-color: #bcd0c7;\n}.list-group-item-success.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #0f5132;\r\n  border-color: #0f5132;\n}.list-group-item-info {\r\n  color: #055160;\r\n  background-color: #cff4fc;\n}.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\r\n  color: #055160;\r\n  background-color: #badce3;\n}.list-group-item-info.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #055160;\r\n  border-color: #055160;\n}.list-group-item-warning {\r\n  color: #664d03;\r\n  background-color: #fff3cd;\n}.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\r\n  color: #664d03;\r\n  background-color: #e6dbb9;\n}.list-group-item-warning.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #664d03;\r\n  border-color: #664d03;\n}.list-group-item-danger {\r\n  color: #842029;\r\n  background-color: #f8d7da;\n}.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\r\n  color: #842029;\r\n  background-color: #dfc2c4;\n}.list-group-item-danger.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #842029;\r\n  border-color: #842029;\n}.list-group-item-light {\r\n  color: #636464;\r\n  background-color: #fefefe;\n}.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\r\n  color: #636464;\r\n  background-color: #e5e5e5;\n}.list-group-item-light.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #636464;\r\n  border-color: #636464;\n}.list-group-item-dark {\r\n  color: #141619;\r\n  background-color: #d3d3d4;\n}.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\r\n  color: #141619;\r\n  background-color: #bebebf;\n}.list-group-item-dark.list-group-item-action.active {\r\n  color: #fff;\r\n  background-color: #141619;\r\n  border-color: #141619;\n}.btn-close {\r\n  box-sizing: content-box;\r\n  width: 1em;\r\n  height: 1em;\r\n  padding: 0.25em 0.25em;\r\n  color: #000;\r\n  background: transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;\r\n  border: 0;\r\n  border-radius: 0.25rem;\r\n  opacity: 0.5;\n}.btn-close:hover {\r\n  color: #000;\r\n  text-decoration: none;\r\n  opacity: 0.75;\n}.btn-close:focus {\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\r\n  opacity: 1;\n}.btn-close:disabled, .btn-close.disabled {\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n  user-select: none;\r\n  opacity: 0.25;\n}.btn-close-white {\r\n  -webkit-filter: invert(1) grayscale(100%) brightness(200%);\r\n          filter: invert(1) grayscale(100%) brightness(200%);\n}.toast {\r\n  width: 350px;\r\n  max-width: 100%;\r\n  font-size: 0.875rem;\r\n  pointer-events: auto;\r\n  background-color: rgba(255, 255, 255, 0.85);\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\n}.toast:not(.showing):not(.show) {\r\n  opacity: 0;\n}.toast.hide {\r\n  display: none;\n}.toast-container {\r\n  width: -webkit-max-content;\r\n  width: max-content;\r\n  max-width: 100%;\r\n  pointer-events: none;\n}.toast-container > :not(:last-child) {\r\n  margin-bottom: 0.75rem;\n}.toast-header {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0.5rem 0.75rem;\r\n  color: #6c757d;\r\n  background-color: rgba(255, 255, 255, 0.85);\r\n  background-clip: padding-box;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  border-top-left-radius: calc(0.25rem - 1px);\r\n  border-top-right-radius: calc(0.25rem - 1px);\n}.toast-header .btn-close {\r\n  margin-right: -0.375rem;\r\n  margin-left: 0.75rem;\n}.toast-body {\r\n  padding: 0.75rem;\n}.modal-open {\r\n  overflow: hidden;\n}.modal-open .modal {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\n}.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  outline: 0;\n}.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 0.5rem;\r\n  pointer-events: none;\n}.modal.fade .modal-dialog {\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\r\n  -webkit-transform: translate(0, -50px);\r\n          transform: translate(0, -50px);\n}@media (prefers-reduced-motion: reduce) {\n.modal.fade .modal-dialog {\r\n    transition: none;\n}\n}.modal.show .modal-dialog {\r\n  -webkit-transform: none;\r\n          transform: none;\n}.modal.modal-static .modal-dialog {\r\n  -webkit-transform: scale(1.02);\r\n          transform: scale(1.02);\n}.modal-dialog-scrollable {\r\n  height: calc(100% - 1rem);\n}.modal-dialog-scrollable .modal-content {\r\n  max-height: 100%;\r\n  overflow: hidden;\n}.modal-dialog-scrollable .modal-body {\r\n  overflow-y: auto;\n}.modal-dialog-centered {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: calc(100% - 1rem);\n}.modal-content {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  pointer-events: auto;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  outline: 0;\n}.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #000;\n}.modal-backdrop.fade {\r\n  opacity: 0;\n}.modal-backdrop.show {\r\n  opacity: 0.5;\n}.modal-header {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1rem 1rem;\r\n  border-bottom: 1px solid #dee2e6;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\n}.modal-header .btn-close {\r\n  padding: 0.5rem 0.5rem;\r\n  margin: -0.5rem -0.5rem -0.5rem auto;\n}.modal-title {\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\n}.modal-body {\r\n  position: relative;\r\n  flex: 1 1 auto;\r\n  padding: 1rem;\n}.modal-footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-shrink: 0;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  padding: 0.75rem;\r\n  border-top: 1px solid #dee2e6;\r\n  border-bottom-right-radius: calc(0.3rem - 1px);\r\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}.modal-footer > * {\r\n  margin: 0.25rem;\n}.modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\n}@media (min-width: 576px) {\n.modal-dialog {\r\n    max-width: 500px;\r\n    margin: 1.75rem auto;\n}\n.modal-dialog-scrollable {\r\n    height: calc(100% - 3.5rem);\n}\n.modal-dialog-centered {\r\n    min-height: calc(100% - 3.5rem);\n}\n.modal-sm {\r\n    max-width: 300px;\n}\n}@media (min-width: 992px) {\n.modal-lg,\r\n.modal-xl {\r\n    max-width: 800px;\n}\n}@media (min-width: 1200px) {\n.modal-xl {\r\n    max-width: 1140px;\n}\n}.modal-fullscreen {\r\n  width: 100vw;\r\n  max-width: none;\r\n  height: 100%;\r\n  margin: 0;\n}.modal-fullscreen .modal-content {\r\n  height: 100%;\r\n  border: 0;\r\n  border-radius: 0;\n}.modal-fullscreen .modal-header {\r\n  border-radius: 0;\n}.modal-fullscreen .modal-body {\r\n  overflow-y: auto;\n}.modal-fullscreen .modal-footer {\r\n  border-radius: 0;\n}@media (max-width: 575.98px) {\n.modal-fullscreen-sm-down {\r\n    width: 100vw;\r\n    max-width: none;\r\n    height: 100%;\r\n    margin: 0;\n}\n.modal-fullscreen-sm-down .modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\n}\n.modal-fullscreen-sm-down .modal-header {\r\n    border-radius: 0;\n}\n.modal-fullscreen-sm-down .modal-body {\r\n    overflow-y: auto;\n}\n.modal-fullscreen-sm-down .modal-footer {\r\n    border-radius: 0;\n}\n}@media (max-width: 767.98px) {\n.modal-fullscreen-md-down {\r\n    width: 100vw;\r\n    max-width: none;\r\n    height: 100%;\r\n    margin: 0;\n}\n.modal-fullscreen-md-down .modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\n}\n.modal-fullscreen-md-down .modal-header {\r\n    border-radius: 0;\n}\n.modal-fullscreen-md-down .modal-body {\r\n    overflow-y: auto;\n}\n.modal-fullscreen-md-down .modal-footer {\r\n    border-radius: 0;\n}\n}@media (max-width: 991.98px) {\n.modal-fullscreen-lg-down {\r\n    width: 100vw;\r\n    max-width: none;\r\n    height: 100%;\r\n    margin: 0;\n}\n.modal-fullscreen-lg-down .modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\n}\n.modal-fullscreen-lg-down .modal-header {\r\n    border-radius: 0;\n}\n.modal-fullscreen-lg-down .modal-body {\r\n    overflow-y: auto;\n}\n.modal-fullscreen-lg-down .modal-footer {\r\n    border-radius: 0;\n}\n}@media (max-width: 1199.98px) {\n.modal-fullscreen-xl-down {\r\n    width: 100vw;\r\n    max-width: none;\r\n    height: 100%;\r\n    margin: 0;\n}\n.modal-fullscreen-xl-down .modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\n}\n.modal-fullscreen-xl-down .modal-header {\r\n    border-radius: 0;\n}\n.modal-fullscreen-xl-down .modal-body {\r\n    overflow-y: auto;\n}\n.modal-fullscreen-xl-down .modal-footer {\r\n    border-radius: 0;\n}\n}@media (max-width: 1399.98px) {\n.modal-fullscreen-xxl-down {\r\n    width: 100vw;\r\n    max-width: none;\r\n    height: 100%;\r\n    margin: 0;\n}\n.modal-fullscreen-xxl-down .modal-content {\r\n    height: 100%;\r\n    border: 0;\r\n    border-radius: 0;\n}\n.modal-fullscreen-xxl-down .modal-header {\r\n    border-radius: 0;\n}\n.modal-fullscreen-xxl-down .modal-body {\r\n    overflow-y: auto;\n}\n.modal-fullscreen-xxl-down .modal-footer {\r\n    border-radius: 0;\n}\n}.tooltip {\r\n  position: absolute;\r\n  z-index: 1070;\r\n  display: block;\r\n  margin: 0;\r\n  font-family: var(--bs-font-sans-serif);\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  white-space: normal;\r\n  line-break: auto;\r\n  font-size: 0.875rem;\r\n  word-wrap: break-word;\r\n  opacity: 0;\n}.tooltip.show {\r\n  opacity: 0.9;\n}.tooltip .tooltip-arrow {\r\n  position: absolute;\r\n  display: block;\r\n  width: 0.8rem;\r\n  height: 0.4rem;\n}.tooltip .tooltip-arrow::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  border-color: transparent;\r\n  border-style: solid;\n}.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {\r\n  padding: 0.4rem 0;\n}.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {\r\n  bottom: 0;\n}.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\r\n  top: -1px;\r\n  border-width: 0.4rem 0.4rem 0;\r\n  border-top-color: #000;\n}.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {\r\n  padding: 0 0.4rem;\n}.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {\r\n  left: 0;\r\n  width: 0.4rem;\r\n  height: 0.8rem;\n}.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {\r\n  right: -1px;\r\n  border-width: 0.4rem 0.4rem 0.4rem 0;\r\n  border-right-color: #000;\n}.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {\r\n  padding: 0.4rem 0;\n}.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {\r\n  top: 0;\n}.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\r\n  bottom: -1px;\r\n  border-width: 0 0.4rem 0.4rem;\r\n  border-bottom-color: #000;\n}.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {\r\n  padding: 0 0.4rem;\n}.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {\r\n  right: 0;\r\n  width: 0.4rem;\r\n  height: 0.8rem;\n}.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {\r\n  left: -1px;\r\n  border-width: 0.4rem 0 0.4rem 0.4rem;\r\n  border-left-color: #000;\n}.tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 0.25rem 0.5rem;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #000;\r\n  border-radius: 0.25rem;\n}.popover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0 /* rtl:ignore */;\r\n  z-index: 1060;\r\n  display: block;\r\n  max-width: 276px;\r\n  font-family: var(--bs-font-sans-serif);\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  letter-spacing: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  white-space: normal;\r\n  line-break: auto;\r\n  font-size: 0.875rem;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\n}.popover .popover-arrow {\r\n  position: absolute;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 0.5rem;\r\n  margin: 0 0.3rem;\n}.popover .popover-arrow::before, .popover .popover-arrow::after {\r\n  position: absolute;\r\n  display: block;\r\n  content: \"\";\r\n  border-color: transparent;\r\n  border-style: solid;\n}.bs-popover-top, .bs-popover-auto[data-popper-placement^=top] {\r\n  margin-bottom: 0.5rem !important;\n}.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {\r\n  bottom: calc(-0.5rem - 1px);\n}.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {\r\n  bottom: 0;\r\n  border-width: 0.5rem 0.5rem 0;\r\n  border-top-color: rgba(0, 0, 0, 0.25);\n}.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\r\n  bottom: 1px;\r\n  border-width: 0.5rem 0.5rem 0;\r\n  border-top-color: #fff;\n}.bs-popover-end, .bs-popover-auto[data-popper-placement^=right] {\r\n  margin-left: 0.5rem !important;\n}.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {\r\n  left: calc(-0.5rem - 1px);\r\n  width: 0.5rem;\r\n  height: 1rem;\r\n  margin: 0.3rem 0;\n}.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {\r\n  left: 0;\r\n  border-width: 0.5rem 0.5rem 0.5rem 0;\r\n  border-right-color: rgba(0, 0, 0, 0.25);\n}.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\r\n  left: 1px;\r\n  border-width: 0.5rem 0.5rem 0.5rem 0;\r\n  border-right-color: #fff;\n}.bs-popover-bottom, .bs-popover-auto[data-popper-placement^=bottom] {\r\n  margin-top: 0.5rem !important;\n}.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {\r\n  top: calc(-0.5rem - 1px);\n}.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {\r\n  top: 0;\r\n  border-width: 0 0.5rem 0.5rem 0.5rem;\r\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n}.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\r\n  top: 1px;\r\n  border-width: 0 0.5rem 0.5rem 0.5rem;\r\n  border-bottom-color: #fff;\n}.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  display: block;\r\n  width: 1rem;\r\n  margin-left: -0.5rem;\r\n  content: \"\";\r\n  border-bottom: 1px solid #f0f0f0;\n}.bs-popover-start, .bs-popover-auto[data-popper-placement^=left] {\r\n  margin-right: 0.5rem !important;\n}.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {\r\n  right: calc(-0.5rem - 1px);\r\n  width: 0.5rem;\r\n  height: 1rem;\r\n  margin: 0.3rem 0;\n}.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {\r\n  right: 0;\r\n  border-width: 0.5rem 0 0.5rem 0.5rem;\r\n  border-left-color: rgba(0, 0, 0, 0.25);\n}.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\r\n  right: 1px;\r\n  border-width: 0.5rem 0 0.5rem 0.5rem;\r\n  border-left-color: #fff;\n}.popover-header {\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n  background-color: #f0f0f0;\r\n  border-bottom: 1px solid #d8d8d8;\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n  border-top-right-radius: calc(0.3rem - 1px);\n}.popover-header:empty {\r\n  display: none;\n}.popover-body {\r\n  padding: 1rem 1rem;\r\n  color: #212529;\n}.carousel {\r\n  position: relative;\n}.carousel.pointer-event {\r\n  touch-action: pan-y;\n}.carousel-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\n}.carousel-inner::after {\r\n  display: block;\r\n  clear: both;\r\n  content: \"\";\n}.carousel-item {\r\n  position: relative;\r\n  display: none;\r\n  float: left;\r\n  width: 100%;\r\n  margin-right: -100%;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  transition: -webkit-transform 0.6s ease-in-out;\r\n  transition: transform 0.6s ease-in-out;\r\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n}@media (prefers-reduced-motion: reduce) {\n.carousel-item {\r\n    transition: none;\n}\n}.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: block;\n}/* rtl:begin:ignore */.carousel-item-next:not(.carousel-item-start),\r\n.active.carousel-item-end {\r\n  -webkit-transform: translateX(100%);\r\n          transform: translateX(100%);\n}.carousel-item-prev:not(.carousel-item-end),\r\n.active.carousel-item-start {\r\n  -webkit-transform: translateX(-100%);\r\n          transform: translateX(-100%);\n}/* rtl:end:ignore */.carousel-fade .carousel-item {\r\n  opacity: 0;\r\n  transition-property: opacity;\r\n  -webkit-transform: none;\r\n          transform: none;\n}.carousel-fade .carousel-item.active,\r\n.carousel-fade .carousel-item-next.carousel-item-start,\r\n.carousel-fade .carousel-item-prev.carousel-item-end {\r\n  z-index: 1;\r\n  opacity: 1;\n}.carousel-fade .active.carousel-item-start,\r\n.carousel-fade .active.carousel-item-end {\r\n  z-index: 0;\r\n  opacity: 0;\r\n  transition: opacity 0s 0.6s;\n}@media (prefers-reduced-motion: reduce) {\n.carousel-fade .active.carousel-item-start,\r\n.carousel-fade .active.carousel-item-end {\r\n    transition: none;\n}\n}.carousel-control-prev,\r\n.carousel-control-next {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 15%;\r\n  color: #fff;\r\n  text-align: center;\r\n  opacity: 0.5;\r\n  transition: opacity 0.15s ease;\n}@media (prefers-reduced-motion: reduce) {\n.carousel-control-prev,\r\n.carousel-control-next {\r\n    transition: none;\n}\n}.carousel-control-prev:hover, .carousel-control-prev:focus, .carousel-control-next:hover, .carousel-control-next:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  outline: 0;\r\n  opacity: 0.9;\n}.carousel-control-prev {\r\n  left: 0;\n}.carousel-control-next {\r\n  right: 0;\n}.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  display: inline-block;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n  background-size: 100% 100%;\n}/* rtl:options: {\r\n  \"autoRename\": true,\r\n  \"stringMap\":[ {\r\n    \"name\"    : \"prev-next\",\r\n    \"search\"  : \"prev\",\r\n    \"replace\" : \"next\"\r\n  } ]\r\n} */.carousel-control-prev-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}.carousel-control-next-icon {\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}.carousel-indicators {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-left: 0;\r\n  margin-right: 15%;\r\n  margin-left: 15%;\r\n  list-style: none;\n}.carousel-indicators li {\r\n  box-sizing: content-box;\r\n  flex: 0 1 auto;\r\n  width: 30px;\r\n  height: 3px;\r\n  margin-right: 3px;\r\n  margin-left: 3px;\r\n  text-indent: -999px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\r\n  opacity: 0.5;\r\n  transition: opacity 0.6s ease;\n}@media (prefers-reduced-motion: reduce) {\n.carousel-indicators li {\r\n    transition: none;\n}\n}.carousel-indicators .active {\r\n  opacity: 1;\n}.carousel-caption {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 1.25rem;\r\n  left: 15%;\r\n  padding-top: 1.25rem;\r\n  padding-bottom: 1.25rem;\r\n  color: #fff;\r\n  text-align: center;\n}.carousel-dark .carousel-control-prev-icon,\r\n.carousel-dark .carousel-control-next-icon {\r\n  -webkit-filter: invert(1) grayscale(100);\r\n          filter: invert(1) grayscale(100);\n}.carousel-dark .carousel-indicators li {\r\n  background-color: #000;\n}.carousel-dark .carousel-caption {\r\n  color: #000;\n}@-webkit-keyframes spinner-border {\nto {\r\n    -webkit-transform: rotate(360deg) /* rtl:ignore */;\r\n            transform: rotate(360deg) /* rtl:ignore */;\n}\n}@keyframes spinner-border {\nto {\r\n    -webkit-transform: rotate(360deg) /* rtl:ignore */;\r\n            transform: rotate(360deg) /* rtl:ignore */;\n}\n}.spinner-border {\r\n  display: inline-block;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  vertical-align: text-bottom;\r\n  border: 0.25em solid currentColor;\r\n  border-right-color: transparent;\r\n  border-radius: 50%;\r\n  -webkit-animation: 0.75s linear infinite spinner-border;\r\n  animation: 0.75s linear infinite spinner-border;\n}.spinner-border-sm {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border-width: 0.2em;\n}@-webkit-keyframes spinner-grow {\n0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\n}\n50% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\n}\n}@keyframes spinner-grow {\n0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\n}\n50% {\r\n    opacity: 1;\r\n    -webkit-transform: none;\r\n            transform: none;\n}\n}.spinner-grow {\r\n  display: inline-block;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  vertical-align: text-bottom;\r\n  background-color: currentColor;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  -webkit-animation: 0.75s linear infinite spinner-grow;\r\n  animation: 0.75s linear infinite spinner-grow;\n}.spinner-grow-sm {\r\n  width: 1rem;\r\n  height: 1rem;\n}@media (prefers-reduced-motion: reduce) {\n.spinner-border,\r\n.spinner-grow {\r\n    -webkit-animation-duration: 1.5s;\r\n    animation-duration: 1.5s;\n}\n}.clearfix::after {\r\n  display: block;\r\n  clear: both;\r\n  content: \"\";\n}.link-primary {\r\n  color: #0d6efd;\n}.link-primary:hover, .link-primary:focus {\r\n  color: #0a58ca;\n}.link-secondary {\r\n  color: #6c757d;\n}.link-secondary:hover, .link-secondary:focus {\r\n  color: #565e64;\n}.link-success {\r\n  color: #198754;\n}.link-success:hover, .link-success:focus {\r\n  color: #146c43;\n}.link-info {\r\n  color: #0dcaf0;\n}.link-info:hover, .link-info:focus {\r\n  color: #3dd5f3;\n}.link-warning {\r\n  color: #ffc107;\n}.link-warning:hover, .link-warning:focus {\r\n  color: #ffcd39;\n}.link-danger {\r\n  color: #dc3545;\n}.link-danger:hover, .link-danger:focus {\r\n  color: #b02a37;\n}.link-light {\r\n  color: #f8f9fa;\n}.link-light:hover, .link-light:focus {\r\n  color: #f9fafb;\n}.link-dark {\r\n  color: #212529;\n}.link-dark:hover, .link-dark:focus {\r\n  color: #1a1e21;\n}.ratio {\r\n  position: relative;\r\n  width: 100%;\n}.ratio::before {\r\n  display: block;\r\n  padding-top: var(--aspect-ratio);\r\n  content: \"\";\n}.ratio > * {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\n}.ratio-1x1 {\r\n  --aspect-ratio: 100%;\n}.ratio-4x3 {\r\n  --aspect-ratio: calc(3 / 4 * 100%);\n}.ratio-16x9 {\r\n  --aspect-ratio: calc(9 / 16 * 100%);\n}.ratio-21x9 {\r\n  --aspect-ratio: calc(9 / 21 * 100%);\n}.fixed-top {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\n}.fixed-bottom {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1030;\n}.sticky-top {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1020;\n}@media (min-width: 576px) {\n.sticky-sm-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\n}\n}@media (min-width: 768px) {\n.sticky-md-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\n}\n}@media (min-width: 992px) {\n.sticky-lg-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\n}\n}@media (min-width: 1200px) {\n.sticky-xl-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\n}\n}@media (min-width: 1400px) {\n.sticky-xxl-top {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1020;\n}\n}.visually-hidden,\r\n.visually-hidden-focusable:not(:focus) {\r\n  position: absolute !important;\r\n  width: 1px !important;\r\n  height: 1px !important;\r\n  padding: 0 !important;\r\n  margin: -1px !important;\r\n  overflow: hidden !important;\r\n  clip: rect(0, 0, 0, 0) !important;\r\n  white-space: nowrap !important;\r\n  border: 0 !important;\n}.stretched-link::after {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  content: \"\";\n}.text-truncate {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\n}.align-baseline {\r\n  vertical-align: baseline !important;\n}.align-top {\r\n  vertical-align: top !important;\n}.align-middle {\r\n  vertical-align: middle !important;\n}.align-bottom {\r\n  vertical-align: bottom !important;\n}.align-text-bottom {\r\n  vertical-align: text-bottom !important;\n}.align-text-top {\r\n  vertical-align: text-top !important;\n}.float-start {\r\n  float: left !important;\n}.float-end {\r\n  float: right !important;\n}.float-none {\r\n  float: none !important;\n}.overflow-auto {\r\n  overflow: auto !important;\n}.overflow-hidden {\r\n  overflow: hidden !important;\n}.overflow-visible {\r\n  overflow: visible !important;\n}.overflow-scroll {\r\n  overflow: scroll !important;\n}.d-inline {\r\n  display: inline !important;\n}.d-inline-block {\r\n  display: inline-block !important;\n}.d-block {\r\n  display: block !important;\n}.d-grid {\r\n  display: grid !important;\n}.d-table {\r\n  display: table !important;\n}.d-table-row {\r\n  display: table-row !important;\n}.d-table-cell {\r\n  display: table-cell !important;\n}.d-flex {\r\n  display: flex !important;\n}.d-inline-flex {\r\n  display: inline-flex !important;\n}.d-none {\r\n  display: none !important;\n}.shadow {\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}.shadow-sm {\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}.shadow-lg {\r\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}.shadow-none {\r\n  box-shadow: none !important;\n}.position-static {\r\n  position: static !important;\n}.position-relative {\r\n  position: relative !important;\n}.position-absolute {\r\n  position: absolute !important;\n}.position-fixed {\r\n  position: fixed !important;\n}.position-sticky {\r\n  position: -webkit-sticky !important;\r\n  position: sticky !important;\n}.top-0 {\r\n  top: 0 !important;\n}.top-50 {\r\n  top: 50% !important;\n}.top-100 {\r\n  top: 100% !important;\n}.bottom-0 {\r\n  bottom: 0 !important;\n}.bottom-50 {\r\n  bottom: 50% !important;\n}.bottom-100 {\r\n  bottom: 100% !important;\n}.start-0 {\r\n  left: 0 !important;\n}.start-50 {\r\n  left: 50% !important;\n}.start-100 {\r\n  left: 100% !important;\n}.end-0 {\r\n  right: 0 !important;\n}.end-50 {\r\n  right: 50% !important;\n}.end-100 {\r\n  right: 100% !important;\n}.translate-middle {\r\n  -webkit-transform: translate(-50%, -50%) !important;\r\n          transform: translate(-50%, -50%) !important;\n}.translate-middle-x {\r\n  -webkit-transform: translateX(-50%) !important;\r\n          transform: translateX(-50%) !important;\n}.translate-middle-y {\r\n  -webkit-transform: translateY(-50%) !important;\r\n          transform: translateY(-50%) !important;\n}.border {\r\n  border: 1px solid #dee2e6 !important;\n}.border-0 {\r\n  border: 0 !important;\n}.border-top {\r\n  border-top: 1px solid #dee2e6 !important;\n}.border-top-0 {\r\n  border-top: 0 !important;\n}.border-end {\r\n  border-right: 1px solid #dee2e6 !important;\n}.border-end-0 {\r\n  border-right: 0 !important;\n}.border-bottom {\r\n  border-bottom: 1px solid #dee2e6 !important;\n}.border-bottom-0 {\r\n  border-bottom: 0 !important;\n}.border-start {\r\n  border-left: 1px solid #dee2e6 !important;\n}.border-start-0 {\r\n  border-left: 0 !important;\n}.border-primary {\r\n  border-color: #0d6efd !important;\n}.border-secondary {\r\n  border-color: #6c757d !important;\n}.border-success {\r\n  border-color: #198754 !important;\n}.border-info {\r\n  border-color: #0dcaf0 !important;\n}.border-warning {\r\n  border-color: #ffc107 !important;\n}.border-danger {\r\n  border-color: #dc3545 !important;\n}.border-light {\r\n  border-color: #f8f9fa !important;\n}.border-dark {\r\n  border-color: #212529 !important;\n}.border-white {\r\n  border-color: #fff !important;\n}.border-0 {\r\n  border-width: 0 !important;\n}.border-1 {\r\n  border-width: 1px !important;\n}.border-2 {\r\n  border-width: 2px !important;\n}.border-3 {\r\n  border-width: 3px !important;\n}.border-4 {\r\n  border-width: 4px !important;\n}.border-5 {\r\n  border-width: 5px !important;\n}.w-25 {\r\n  width: 25% !important;\n}.w-50 {\r\n  width: 50% !important;\n}.w-75 {\r\n  width: 75% !important;\n}.w-100 {\r\n  width: 100% !important;\n}.w-auto {\r\n  width: auto !important;\n}.mw-100 {\r\n  max-width: 100% !important;\n}.vw-100 {\r\n  width: 100vw !important;\n}.min-vw-100 {\r\n  min-width: 100vw !important;\n}.h-25 {\r\n  height: 25% !important;\n}.h-50 {\r\n  height: 50% !important;\n}.h-75 {\r\n  height: 75% !important;\n}.h-100 {\r\n  height: 100% !important;\n}.h-auto {\r\n  height: auto !important;\n}.mh-100 {\r\n  max-height: 100% !important;\n}.vh-100 {\r\n  height: 100vh !important;\n}.min-vh-100 {\r\n  min-height: 100vh !important;\n}.flex-fill {\r\n  flex: 1 1 auto !important;\n}.flex-row {\r\n  flex-direction: row !important;\n}.flex-column {\r\n  flex-direction: column !important;\n}.flex-row-reverse {\r\n  flex-direction: row-reverse !important;\n}.flex-column-reverse {\r\n  flex-direction: column-reverse !important;\n}.flex-grow-0 {\r\n  flex-grow: 0 !important;\n}.flex-grow-1 {\r\n  flex-grow: 1 !important;\n}.flex-shrink-0 {\r\n  flex-shrink: 0 !important;\n}.flex-shrink-1 {\r\n  flex-shrink: 1 !important;\n}.flex-wrap {\r\n  flex-wrap: wrap !important;\n}.flex-nowrap {\r\n  flex-wrap: nowrap !important;\n}.flex-wrap-reverse {\r\n  flex-wrap: wrap-reverse !important;\n}.gap-0 {\r\n  gap: 0 !important;\n}.gap-1 {\r\n  gap: 0.25rem !important;\n}.gap-2 {\r\n  gap: 0.5rem !important;\n}.gap-3 {\r\n  gap: 1rem !important;\n}.gap-4 {\r\n  gap: 1.5rem !important;\n}.gap-5 {\r\n  gap: 3rem !important;\n}.justify-content-start {\r\n  justify-content: flex-start !important;\n}.justify-content-end {\r\n  justify-content: flex-end !important;\n}.justify-content-center {\r\n  justify-content: center !important;\n}.justify-content-between {\r\n  justify-content: space-between !important;\n}.justify-content-around {\r\n  justify-content: space-around !important;\n}.justify-content-evenly {\r\n  justify-content: space-evenly !important;\n}.align-items-start {\r\n  align-items: flex-start !important;\n}.align-items-end {\r\n  align-items: flex-end !important;\n}.align-items-center {\r\n  align-items: center !important;\n}.align-items-baseline {\r\n  align-items: baseline !important;\n}.align-items-stretch {\r\n  align-items: stretch !important;\n}.align-content-start {\r\n  align-content: flex-start !important;\n}.align-content-end {\r\n  align-content: flex-end !important;\n}.align-content-center {\r\n  align-content: center !important;\n}.align-content-between {\r\n  align-content: space-between !important;\n}.align-content-around {\r\n  align-content: space-around !important;\n}.align-content-stretch {\r\n  align-content: stretch !important;\n}.align-self-auto {\r\n  align-self: auto !important;\n}.align-self-start {\r\n  align-self: flex-start !important;\n}.align-self-end {\r\n  align-self: flex-end !important;\n}.align-self-center {\r\n  align-self: center !important;\n}.align-self-baseline {\r\n  align-self: baseline !important;\n}.align-self-stretch {\r\n  align-self: stretch !important;\n}.order-first {\r\n  order: -1 !important;\n}.order-0 {\r\n  order: 0 !important;\n}.order-1 {\r\n  order: 1 !important;\n}.order-2 {\r\n  order: 2 !important;\n}.order-3 {\r\n  order: 3 !important;\n}.order-4 {\r\n  order: 4 !important;\n}.order-5 {\r\n  order: 5 !important;\n}.order-last {\r\n  order: 6 !important;\n}.m-0 {\r\n  margin: 0 !important;\n}.m-1 {\r\n  margin: 0.25rem !important;\n}.m-2 {\r\n  margin: 0.5rem !important;\n}.m-3 {\r\n  margin: 1rem !important;\n}.m-4 {\r\n  margin: 1.5rem !important;\n}.m-5 {\r\n  margin: 3rem !important;\n}.m-auto {\r\n  margin: auto !important;\n}.mx-0 {\r\n  margin-right: 0 !important;\r\n  margin-left: 0 !important;\n}.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n  margin-left: 0.25rem !important;\n}.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n  margin-left: 0.5rem !important;\n}.mx-3 {\r\n  margin-right: 1rem !important;\r\n  margin-left: 1rem !important;\n}.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n  margin-left: 1.5rem !important;\n}.mx-5 {\r\n  margin-right: 3rem !important;\r\n  margin-left: 3rem !important;\n}.mx-auto {\r\n  margin-right: auto !important;\r\n  margin-left: auto !important;\n}.my-0 {\r\n  margin-top: 0 !important;\r\n  margin-bottom: 0 !important;\n}.my-1 {\r\n  margin-top: 0.25rem !important;\r\n  margin-bottom: 0.25rem !important;\n}.my-2 {\r\n  margin-top: 0.5rem !important;\r\n  margin-bottom: 0.5rem !important;\n}.my-3 {\r\n  margin-top: 1rem !important;\r\n  margin-bottom: 1rem !important;\n}.my-4 {\r\n  margin-top: 1.5rem !important;\r\n  margin-bottom: 1.5rem !important;\n}.my-5 {\r\n  margin-top: 3rem !important;\r\n  margin-bottom: 3rem !important;\n}.my-auto {\r\n  margin-top: auto !important;\r\n  margin-bottom: auto !important;\n}.mt-0 {\r\n  margin-top: 0 !important;\n}.mt-1 {\r\n  margin-top: 0.25rem !important;\n}.mt-2 {\r\n  margin-top: 0.5rem !important;\n}.mt-3 {\r\n  margin-top: 1rem !important;\n}.mt-4 {\r\n  margin-top: 1.5rem !important;\n}.mt-5 {\r\n  margin-top: 3rem !important;\n}.mt-auto {\r\n  margin-top: auto !important;\n}.me-0 {\r\n  margin-right: 0 !important;\n}.me-1 {\r\n  margin-right: 0.25rem !important;\n}.me-2 {\r\n  margin-right: 0.5rem !important;\n}.me-3 {\r\n  margin-right: 1rem !important;\n}.me-4 {\r\n  margin-right: 1.5rem !important;\n}.me-5 {\r\n  margin-right: 3rem !important;\n}.me-auto {\r\n  margin-right: auto !important;\n}.mb-0 {\r\n  margin-bottom: 0 !important;\n}.mb-1 {\r\n  margin-bottom: 0.25rem !important;\n}.mb-2 {\r\n  margin-bottom: 0.5rem !important;\n}.mb-3 {\r\n  margin-bottom: 1rem !important;\n}.mb-4 {\r\n  margin-bottom: 1.5rem !important;\n}.mb-5 {\r\n  margin-bottom: 3rem !important;\n}.mb-auto {\r\n  margin-bottom: auto !important;\n}.ms-0 {\r\n  margin-left: 0 !important;\n}.ms-1 {\r\n  margin-left: 0.25rem !important;\n}.ms-2 {\r\n  margin-left: 0.5rem !important;\n}.ms-3 {\r\n  margin-left: 1rem !important;\n}.ms-4 {\r\n  margin-left: 1.5rem !important;\n}.ms-5 {\r\n  margin-left: 3rem !important;\n}.ms-auto {\r\n  margin-left: auto !important;\n}.p-0 {\r\n  padding: 0 !important;\n}.p-1 {\r\n  padding: 0.25rem !important;\n}.p-2 {\r\n  padding: 0.5rem !important;\n}.p-3 {\r\n  padding: 1rem !important;\n}.p-4 {\r\n  padding: 1.5rem !important;\n}.p-5 {\r\n  padding: 3rem !important;\n}.px-0 {\r\n  padding-right: 0 !important;\r\n  padding-left: 0 !important;\n}.px-1 {\r\n  padding-right: 0.25rem !important;\r\n  padding-left: 0.25rem !important;\n}.px-2 {\r\n  padding-right: 0.5rem !important;\r\n  padding-left: 0.5rem !important;\n}.px-3 {\r\n  padding-right: 1rem !important;\r\n  padding-left: 1rem !important;\n}.px-4 {\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\n}.px-5 {\r\n  padding-right: 3rem !important;\r\n  padding-left: 3rem !important;\n}.py-0 {\r\n  padding-top: 0 !important;\r\n  padding-bottom: 0 !important;\n}.py-1 {\r\n  padding-top: 0.25rem !important;\r\n  padding-bottom: 0.25rem !important;\n}.py-2 {\r\n  padding-top: 0.5rem !important;\r\n  padding-bottom: 0.5rem !important;\n}.py-3 {\r\n  padding-top: 1rem !important;\r\n  padding-bottom: 1rem !important;\n}.py-4 {\r\n  padding-top: 1.5rem !important;\r\n  padding-bottom: 1.5rem !important;\n}.py-5 {\r\n  padding-top: 3rem !important;\r\n  padding-bottom: 3rem !important;\n}.pt-0 {\r\n  padding-top: 0 !important;\n}.pt-1 {\r\n  padding-top: 0.25rem !important;\n}.pt-2 {\r\n  padding-top: 0.5rem !important;\n}.pt-3 {\r\n  padding-top: 1rem !important;\n}.pt-4 {\r\n  padding-top: 1.5rem !important;\n}.pt-5 {\r\n  padding-top: 3rem !important;\n}.pe-0 {\r\n  padding-right: 0 !important;\n}.pe-1 {\r\n  padding-right: 0.25rem !important;\n}.pe-2 {\r\n  padding-right: 0.5rem !important;\n}.pe-3 {\r\n  padding-right: 1rem !important;\n}.pe-4 {\r\n  padding-right: 1.5rem !important;\n}.pe-5 {\r\n  padding-right: 3rem !important;\n}.pb-0 {\r\n  padding-bottom: 0 !important;\n}.pb-1 {\r\n  padding-bottom: 0.25rem !important;\n}.pb-2 {\r\n  padding-bottom: 0.5rem !important;\n}.pb-3 {\r\n  padding-bottom: 1rem !important;\n}.pb-4 {\r\n  padding-bottom: 1.5rem !important;\n}.pb-5 {\r\n  padding-bottom: 3rem !important;\n}.ps-0 {\r\n  padding-left: 0 !important;\n}.ps-1 {\r\n  padding-left: 0.25rem !important;\n}.ps-2 {\r\n  padding-left: 0.5rem !important;\n}.ps-3 {\r\n  padding-left: 1rem !important;\n}.ps-4 {\r\n  padding-left: 1.5rem !important;\n}.ps-5 {\r\n  padding-left: 3rem !important;\n}.fs-1 {\r\n  font-size: calc(1.375rem + 1.5vw) !important;\n}.fs-2 {\r\n  font-size: calc(1.325rem + 0.9vw) !important;\n}.fs-3 {\r\n  font-size: calc(1.3rem + 0.6vw) !important;\n}.fs-4 {\r\n  font-size: calc(1.275rem + 0.3vw) !important;\n}.fs-5 {\r\n  font-size: 1.25rem !important;\n}.fs-6 {\r\n  font-size: 1rem !important;\n}.fst-italic {\r\n  font-style: italic !important;\n}.fst-normal {\r\n  font-style: normal !important;\n}.fw-light {\r\n  font-weight: 300 !important;\n}.fw-lighter {\r\n  font-weight: lighter !important;\n}.fw-normal {\r\n  font-weight: 400 !important;\n}.fw-bold {\r\n  font-weight: 700 !important;\n}.fw-bolder {\r\n  font-weight: bolder !important;\n}.text-lowercase {\r\n  text-transform: lowercase !important;\n}.text-uppercase {\r\n  text-transform: uppercase !important;\n}.text-capitalize {\r\n  text-transform: capitalize !important;\n}.text-start {\r\n  text-align: left !important;\n}.text-end {\r\n  text-align: right !important;\n}.text-center {\r\n  text-align: center !important;\n}.text-primary {\r\n  color: #0d6efd !important;\n}.text-secondary {\r\n  color: #6c757d !important;\n}.text-success {\r\n  color: #198754 !important;\n}.text-info {\r\n  color: #0dcaf0 !important;\n}.text-warning {\r\n  color: #ffc107 !important;\n}.text-danger {\r\n  color: #dc3545 !important;\n}.text-light {\r\n  color: #f8f9fa !important;\n}.text-dark {\r\n  color: #212529 !important;\n}.text-white {\r\n  color: #fff !important;\n}.text-body {\r\n  color: #212529 !important;\n}.text-muted {\r\n  color: #6c757d !important;\n}.text-black-50 {\r\n  color: rgba(0, 0, 0, 0.5) !important;\n}.text-white-50 {\r\n  color: rgba(255, 255, 255, 0.5) !important;\n}.text-reset {\r\n  color: inherit !important;\n}.lh-1 {\r\n  line-height: 1 !important;\n}.lh-sm {\r\n  line-height: 1.25 !important;\n}.lh-base {\r\n  line-height: 1.5 !important;\n}.lh-lg {\r\n  line-height: 2 !important;\n}.bg-primary {\r\n  background-color: #0d6efd !important;\n}.bg-secondary {\r\n  background-color: #6c757d !important;\n}.bg-success {\r\n  background-color: #198754 !important;\n}.bg-info {\r\n  background-color: #0dcaf0 !important;\n}.bg-warning {\r\n  background-color: #ffc107 !important;\n}.bg-danger {\r\n  background-color: #dc3545 !important;\n}.bg-light {\r\n  background-color: #f8f9fa !important;\n}.bg-dark {\r\n  background-color: #212529 !important;\n}.bg-body {\r\n  background-color: #fff !important;\n}.bg-white {\r\n  background-color: #fff !important;\n}.bg-transparent {\r\n  background-color: transparent !important;\n}.bg-gradient {\r\n  background-image: var(--bs-gradient) !important;\n}.text-wrap {\r\n  white-space: normal !important;\n}.text-nowrap {\r\n  white-space: nowrap !important;\n}.text-decoration-none {\r\n  text-decoration: none !important;\n}.text-decoration-underline {\r\n  text-decoration: underline !important;\n}.text-decoration-line-through {\r\n  text-decoration: line-through !important;\n}/* rtl:begin:remove */.text-break {\r\n  word-wrap: break-word !important;\r\n  word-break: break-word !important;\n}/* rtl:end:remove */.font-monospace {\r\n  font-family: var(--bs-font-monospace) !important;\n}.user-select-all {\r\n  -webkit-user-select: all !important;\r\n  user-select: all !important;\n}.user-select-auto {\r\n  -webkit-user-select: auto !important;\r\n  user-select: auto !important;\n}.user-select-none {\r\n  -webkit-user-select: none !important;\r\n  user-select: none !important;\n}.pe-none {\r\n  pointer-events: none !important;\n}.pe-auto {\r\n  pointer-events: auto !important;\n}.rounded {\r\n  border-radius: 0.25rem !important;\n}.rounded-0 {\r\n  border-radius: 0 !important;\n}.rounded-1 {\r\n  border-radius: 0.2rem !important;\n}.rounded-2 {\r\n  border-radius: 0.25rem !important;\n}.rounded-3 {\r\n  border-radius: 0.3rem !important;\n}.rounded-circle {\r\n  border-radius: 50% !important;\n}.rounded-pill {\r\n  border-radius: 50rem !important;\n}.rounded-top {\r\n  border-top-left-radius: 0.25rem !important;\r\n  border-top-right-radius: 0.25rem !important;\n}.rounded-end {\r\n  border-top-right-radius: 0.25rem !important;\r\n  border-bottom-right-radius: 0.25rem !important;\n}.rounded-bottom {\r\n  border-bottom-right-radius: 0.25rem !important;\r\n  border-bottom-left-radius: 0.25rem !important;\n}.rounded-start {\r\n  border-bottom-left-radius: 0.25rem !important;\r\n  border-top-left-radius: 0.25rem !important;\n}.visible {\r\n  visibility: visible !important;\n}.invisible {\r\n  visibility: hidden !important;\n}@media (min-width: 576px) {\n.float-sm-start {\r\n    float: left !important;\n}\n.float-sm-end {\r\n    float: right !important;\n}\n.float-sm-none {\r\n    float: none !important;\n}\n.d-sm-inline {\r\n    display: inline !important;\n}\n.d-sm-inline-block {\r\n    display: inline-block !important;\n}\n.d-sm-block {\r\n    display: block !important;\n}\n.d-sm-grid {\r\n    display: grid !important;\n}\n.d-sm-table {\r\n    display: table !important;\n}\n.d-sm-table-row {\r\n    display: table-row !important;\n}\n.d-sm-table-cell {\r\n    display: table-cell !important;\n}\n.d-sm-flex {\r\n    display: flex !important;\n}\n.d-sm-inline-flex {\r\n    display: inline-flex !important;\n}\n.d-sm-none {\r\n    display: none !important;\n}\n.flex-sm-fill {\r\n    flex: 1 1 auto !important;\n}\n.flex-sm-row {\r\n    flex-direction: row !important;\n}\n.flex-sm-column {\r\n    flex-direction: column !important;\n}\n.flex-sm-row-reverse {\r\n    flex-direction: row-reverse !important;\n}\n.flex-sm-column-reverse {\r\n    flex-direction: column-reverse !important;\n}\n.flex-sm-grow-0 {\r\n    flex-grow: 0 !important;\n}\n.flex-sm-grow-1 {\r\n    flex-grow: 1 !important;\n}\n.flex-sm-shrink-0 {\r\n    flex-shrink: 0 !important;\n}\n.flex-sm-shrink-1 {\r\n    flex-shrink: 1 !important;\n}\n.flex-sm-wrap {\r\n    flex-wrap: wrap !important;\n}\n.flex-sm-nowrap {\r\n    flex-wrap: nowrap !important;\n}\n.flex-sm-wrap-reverse {\r\n    flex-wrap: wrap-reverse !important;\n}\n.gap-sm-0 {\r\n    gap: 0 !important;\n}\n.gap-sm-1 {\r\n    gap: 0.25rem !important;\n}\n.gap-sm-2 {\r\n    gap: 0.5rem !important;\n}\n.gap-sm-3 {\r\n    gap: 1rem !important;\n}\n.gap-sm-4 {\r\n    gap: 1.5rem !important;\n}\n.gap-sm-5 {\r\n    gap: 3rem !important;\n}\n.justify-content-sm-start {\r\n    justify-content: flex-start !important;\n}\n.justify-content-sm-end {\r\n    justify-content: flex-end !important;\n}\n.justify-content-sm-center {\r\n    justify-content: center !important;\n}\n.justify-content-sm-between {\r\n    justify-content: space-between !important;\n}\n.justify-content-sm-around {\r\n    justify-content: space-around !important;\n}\n.justify-content-sm-evenly {\r\n    justify-content: space-evenly !important;\n}\n.align-items-sm-start {\r\n    align-items: flex-start !important;\n}\n.align-items-sm-end {\r\n    align-items: flex-end !important;\n}\n.align-items-sm-center {\r\n    align-items: center !important;\n}\n.align-items-sm-baseline {\r\n    align-items: baseline !important;\n}\n.align-items-sm-stretch {\r\n    align-items: stretch !important;\n}\n.align-content-sm-start {\r\n    align-content: flex-start !important;\n}\n.align-content-sm-end {\r\n    align-content: flex-end !important;\n}\n.align-content-sm-center {\r\n    align-content: center !important;\n}\n.align-content-sm-between {\r\n    align-content: space-between !important;\n}\n.align-content-sm-around {\r\n    align-content: space-around !important;\n}\n.align-content-sm-stretch {\r\n    align-content: stretch !important;\n}\n.align-self-sm-auto {\r\n    align-self: auto !important;\n}\n.align-self-sm-start {\r\n    align-self: flex-start !important;\n}\n.align-self-sm-end {\r\n    align-self: flex-end !important;\n}\n.align-self-sm-center {\r\n    align-self: center !important;\n}\n.align-self-sm-baseline {\r\n    align-self: baseline !important;\n}\n.align-self-sm-stretch {\r\n    align-self: stretch !important;\n}\n.order-sm-first {\r\n    order: -1 !important;\n}\n.order-sm-0 {\r\n    order: 0 !important;\n}\n.order-sm-1 {\r\n    order: 1 !important;\n}\n.order-sm-2 {\r\n    order: 2 !important;\n}\n.order-sm-3 {\r\n    order: 3 !important;\n}\n.order-sm-4 {\r\n    order: 4 !important;\n}\n.order-sm-5 {\r\n    order: 5 !important;\n}\n.order-sm-last {\r\n    order: 6 !important;\n}\n.m-sm-0 {\r\n    margin: 0 !important;\n}\n.m-sm-1 {\r\n    margin: 0.25rem !important;\n}\n.m-sm-2 {\r\n    margin: 0.5rem !important;\n}\n.m-sm-3 {\r\n    margin: 1rem !important;\n}\n.m-sm-4 {\r\n    margin: 1.5rem !important;\n}\n.m-sm-5 {\r\n    margin: 3rem !important;\n}\n.m-sm-auto {\r\n    margin: auto !important;\n}\n.mx-sm-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\n}\n.mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.mx-sm-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\n}\n.mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\n}\n.mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\n}\n.mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\n}\n.mx-sm-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\n}\n.my-sm-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\n}\n.my-sm-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\n}\n.my-sm-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\n}\n.my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\n}\n.my-sm-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\n}\n.my-sm-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\n}\n.mt-sm-0 {\r\n    margin-top: 0 !important;\n}\n.mt-sm-1 {\r\n    margin-top: 0.25rem !important;\n}\n.mt-sm-2 {\r\n    margin-top: 0.5rem !important;\n}\n.mt-sm-3 {\r\n    margin-top: 1rem !important;\n}\n.mt-sm-4 {\r\n    margin-top: 1.5rem !important;\n}\n.mt-sm-5 {\r\n    margin-top: 3rem !important;\n}\n.mt-sm-auto {\r\n    margin-top: auto !important;\n}\n.me-sm-0 {\r\n    margin-right: 0 !important;\n}\n.me-sm-1 {\r\n    margin-right: 0.25rem !important;\n}\n.me-sm-2 {\r\n    margin-right: 0.5rem !important;\n}\n.me-sm-3 {\r\n    margin-right: 1rem !important;\n}\n.me-sm-4 {\r\n    margin-right: 1.5rem !important;\n}\n.me-sm-5 {\r\n    margin-right: 3rem !important;\n}\n.me-sm-auto {\r\n    margin-right: auto !important;\n}\n.mb-sm-0 {\r\n    margin-bottom: 0 !important;\n}\n.mb-sm-1 {\r\n    margin-bottom: 0.25rem !important;\n}\n.mb-sm-2 {\r\n    margin-bottom: 0.5rem !important;\n}\n.mb-sm-3 {\r\n    margin-bottom: 1rem !important;\n}\n.mb-sm-4 {\r\n    margin-bottom: 1.5rem !important;\n}\n.mb-sm-5 {\r\n    margin-bottom: 3rem !important;\n}\n.mb-sm-auto {\r\n    margin-bottom: auto !important;\n}\n.ms-sm-0 {\r\n    margin-left: 0 !important;\n}\n.ms-sm-1 {\r\n    margin-left: 0.25rem !important;\n}\n.ms-sm-2 {\r\n    margin-left: 0.5rem !important;\n}\n.ms-sm-3 {\r\n    margin-left: 1rem !important;\n}\n.ms-sm-4 {\r\n    margin-left: 1.5rem !important;\n}\n.ms-sm-5 {\r\n    margin-left: 3rem !important;\n}\n.ms-sm-auto {\r\n    margin-left: auto !important;\n}\n.p-sm-0 {\r\n    padding: 0 !important;\n}\n.p-sm-1 {\r\n    padding: 0.25rem !important;\n}\n.p-sm-2 {\r\n    padding: 0.5rem !important;\n}\n.p-sm-3 {\r\n    padding: 1rem !important;\n}\n.p-sm-4 {\r\n    padding: 1.5rem !important;\n}\n.p-sm-5 {\r\n    padding: 3rem !important;\n}\n.px-sm-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\n}\n.px-sm-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\n}\n.px-sm-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\n}\n.px-sm-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\n}\n.px-sm-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\n}\n.px-sm-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\n}\n.py-sm-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\n}\n.py-sm-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\n}\n.py-sm-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\n}\n.py-sm-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\n}\n.py-sm-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\n}\n.py-sm-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\n}\n.pt-sm-0 {\r\n    padding-top: 0 !important;\n}\n.pt-sm-1 {\r\n    padding-top: 0.25rem !important;\n}\n.pt-sm-2 {\r\n    padding-top: 0.5rem !important;\n}\n.pt-sm-3 {\r\n    padding-top: 1rem !important;\n}\n.pt-sm-4 {\r\n    padding-top: 1.5rem !important;\n}\n.pt-sm-5 {\r\n    padding-top: 3rem !important;\n}\n.pe-sm-0 {\r\n    padding-right: 0 !important;\n}\n.pe-sm-1 {\r\n    padding-right: 0.25rem !important;\n}\n.pe-sm-2 {\r\n    padding-right: 0.5rem !important;\n}\n.pe-sm-3 {\r\n    padding-right: 1rem !important;\n}\n.pe-sm-4 {\r\n    padding-right: 1.5rem !important;\n}\n.pe-sm-5 {\r\n    padding-right: 3rem !important;\n}\n.pb-sm-0 {\r\n    padding-bottom: 0 !important;\n}\n.pb-sm-1 {\r\n    padding-bottom: 0.25rem !important;\n}\n.pb-sm-2 {\r\n    padding-bottom: 0.5rem !important;\n}\n.pb-sm-3 {\r\n    padding-bottom: 1rem !important;\n}\n.pb-sm-4 {\r\n    padding-bottom: 1.5rem !important;\n}\n.pb-sm-5 {\r\n    padding-bottom: 3rem !important;\n}\n.ps-sm-0 {\r\n    padding-left: 0 !important;\n}\n.ps-sm-1 {\r\n    padding-left: 0.25rem !important;\n}\n.ps-sm-2 {\r\n    padding-left: 0.5rem !important;\n}\n.ps-sm-3 {\r\n    padding-left: 1rem !important;\n}\n.ps-sm-4 {\r\n    padding-left: 1.5rem !important;\n}\n.ps-sm-5 {\r\n    padding-left: 3rem !important;\n}\n.text-sm-start {\r\n    text-align: left !important;\n}\n.text-sm-end {\r\n    text-align: right !important;\n}\n.text-sm-center {\r\n    text-align: center !important;\n}\n}@media (min-width: 768px) {\n.float-md-start {\r\n    float: left !important;\n}\n.float-md-end {\r\n    float: right !important;\n}\n.float-md-none {\r\n    float: none !important;\n}\n.d-md-inline {\r\n    display: inline !important;\n}\n.d-md-inline-block {\r\n    display: inline-block !important;\n}\n.d-md-block {\r\n    display: block !important;\n}\n.d-md-grid {\r\n    display: grid !important;\n}\n.d-md-table {\r\n    display: table !important;\n}\n.d-md-table-row {\r\n    display: table-row !important;\n}\n.d-md-table-cell {\r\n    display: table-cell !important;\n}\n.d-md-flex {\r\n    display: flex !important;\n}\n.d-md-inline-flex {\r\n    display: inline-flex !important;\n}\n.d-md-none {\r\n    display: none !important;\n}\n.flex-md-fill {\r\n    flex: 1 1 auto !important;\n}\n.flex-md-row {\r\n    flex-direction: row !important;\n}\n.flex-md-column {\r\n    flex-direction: column !important;\n}\n.flex-md-row-reverse {\r\n    flex-direction: row-reverse !important;\n}\n.flex-md-column-reverse {\r\n    flex-direction: column-reverse !important;\n}\n.flex-md-grow-0 {\r\n    flex-grow: 0 !important;\n}\n.flex-md-grow-1 {\r\n    flex-grow: 1 !important;\n}\n.flex-md-shrink-0 {\r\n    flex-shrink: 0 !important;\n}\n.flex-md-shrink-1 {\r\n    flex-shrink: 1 !important;\n}\n.flex-md-wrap {\r\n    flex-wrap: wrap !important;\n}\n.flex-md-nowrap {\r\n    flex-wrap: nowrap !important;\n}\n.flex-md-wrap-reverse {\r\n    flex-wrap: wrap-reverse !important;\n}\n.gap-md-0 {\r\n    gap: 0 !important;\n}\n.gap-md-1 {\r\n    gap: 0.25rem !important;\n}\n.gap-md-2 {\r\n    gap: 0.5rem !important;\n}\n.gap-md-3 {\r\n    gap: 1rem !important;\n}\n.gap-md-4 {\r\n    gap: 1.5rem !important;\n}\n.gap-md-5 {\r\n    gap: 3rem !important;\n}\n.justify-content-md-start {\r\n    justify-content: flex-start !important;\n}\n.justify-content-md-end {\r\n    justify-content: flex-end !important;\n}\n.justify-content-md-center {\r\n    justify-content: center !important;\n}\n.justify-content-md-between {\r\n    justify-content: space-between !important;\n}\n.justify-content-md-around {\r\n    justify-content: space-around !important;\n}\n.justify-content-md-evenly {\r\n    justify-content: space-evenly !important;\n}\n.align-items-md-start {\r\n    align-items: flex-start !important;\n}\n.align-items-md-end {\r\n    align-items: flex-end !important;\n}\n.align-items-md-center {\r\n    align-items: center !important;\n}\n.align-items-md-baseline {\r\n    align-items: baseline !important;\n}\n.align-items-md-stretch {\r\n    align-items: stretch !important;\n}\n.align-content-md-start {\r\n    align-content: flex-start !important;\n}\n.align-content-md-end {\r\n    align-content: flex-end !important;\n}\n.align-content-md-center {\r\n    align-content: center !important;\n}\n.align-content-md-between {\r\n    align-content: space-between !important;\n}\n.align-content-md-around {\r\n    align-content: space-around !important;\n}\n.align-content-md-stretch {\r\n    align-content: stretch !important;\n}\n.align-self-md-auto {\r\n    align-self: auto !important;\n}\n.align-self-md-start {\r\n    align-self: flex-start !important;\n}\n.align-self-md-end {\r\n    align-self: flex-end !important;\n}\n.align-self-md-center {\r\n    align-self: center !important;\n}\n.align-self-md-baseline {\r\n    align-self: baseline !important;\n}\n.align-self-md-stretch {\r\n    align-self: stretch !important;\n}\n.order-md-first {\r\n    order: -1 !important;\n}\n.order-md-0 {\r\n    order: 0 !important;\n}\n.order-md-1 {\r\n    order: 1 !important;\n}\n.order-md-2 {\r\n    order: 2 !important;\n}\n.order-md-3 {\r\n    order: 3 !important;\n}\n.order-md-4 {\r\n    order: 4 !important;\n}\n.order-md-5 {\r\n    order: 5 !important;\n}\n.order-md-last {\r\n    order: 6 !important;\n}\n.m-md-0 {\r\n    margin: 0 !important;\n}\n.m-md-1 {\r\n    margin: 0.25rem !important;\n}\n.m-md-2 {\r\n    margin: 0.5rem !important;\n}\n.m-md-3 {\r\n    margin: 1rem !important;\n}\n.m-md-4 {\r\n    margin: 1.5rem !important;\n}\n.m-md-5 {\r\n    margin: 3rem !important;\n}\n.m-md-auto {\r\n    margin: auto !important;\n}\n.mx-md-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\n}\n.mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\n}\n.mx-md-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\n}\n.mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\n}\n.mx-md-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\n}\n.mx-md-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\n}\n.my-md-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\n}\n.my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\n}\n.my-md-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\n}\n.my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\n}\n.my-md-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\n}\n.my-md-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\n}\n.mt-md-0 {\r\n    margin-top: 0 !important;\n}\n.mt-md-1 {\r\n    margin-top: 0.25rem !important;\n}\n.mt-md-2 {\r\n    margin-top: 0.5rem !important;\n}\n.mt-md-3 {\r\n    margin-top: 1rem !important;\n}\n.mt-md-4 {\r\n    margin-top: 1.5rem !important;\n}\n.mt-md-5 {\r\n    margin-top: 3rem !important;\n}\n.mt-md-auto {\r\n    margin-top: auto !important;\n}\n.me-md-0 {\r\n    margin-right: 0 !important;\n}\n.me-md-1 {\r\n    margin-right: 0.25rem !important;\n}\n.me-md-2 {\r\n    margin-right: 0.5rem !important;\n}\n.me-md-3 {\r\n    margin-right: 1rem !important;\n}\n.me-md-4 {\r\n    margin-right: 1.5rem !important;\n}\n.me-md-5 {\r\n    margin-right: 3rem !important;\n}\n.me-md-auto {\r\n    margin-right: auto !important;\n}\n.mb-md-0 {\r\n    margin-bottom: 0 !important;\n}\n.mb-md-1 {\r\n    margin-bottom: 0.25rem !important;\n}\n.mb-md-2 {\r\n    margin-bottom: 0.5rem !important;\n}\n.mb-md-3 {\r\n    margin-bottom: 1rem !important;\n}\n.mb-md-4 {\r\n    margin-bottom: 1.5rem !important;\n}\n.mb-md-5 {\r\n    margin-bottom: 3rem !important;\n}\n.mb-md-auto {\r\n    margin-bottom: auto !important;\n}\n.ms-md-0 {\r\n    margin-left: 0 !important;\n}\n.ms-md-1 {\r\n    margin-left: 0.25rem !important;\n}\n.ms-md-2 {\r\n    margin-left: 0.5rem !important;\n}\n.ms-md-3 {\r\n    margin-left: 1rem !important;\n}\n.ms-md-4 {\r\n    margin-left: 1.5rem !important;\n}\n.ms-md-5 {\r\n    margin-left: 3rem !important;\n}\n.ms-md-auto {\r\n    margin-left: auto !important;\n}\n.p-md-0 {\r\n    padding: 0 !important;\n}\n.p-md-1 {\r\n    padding: 0.25rem !important;\n}\n.p-md-2 {\r\n    padding: 0.5rem !important;\n}\n.p-md-3 {\r\n    padding: 1rem !important;\n}\n.p-md-4 {\r\n    padding: 1.5rem !important;\n}\n.p-md-5 {\r\n    padding: 3rem !important;\n}\n.px-md-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\n}\n.px-md-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\n}\n.px-md-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\n}\n.px-md-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\n}\n.px-md-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\n}\n.px-md-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\n}\n.py-md-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\n}\n.py-md-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\n}\n.py-md-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\n}\n.py-md-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\n}\n.py-md-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\n}\n.py-md-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\n}\n.pt-md-0 {\r\n    padding-top: 0 !important;\n}\n.pt-md-1 {\r\n    padding-top: 0.25rem !important;\n}\n.pt-md-2 {\r\n    padding-top: 0.5rem !important;\n}\n.pt-md-3 {\r\n    padding-top: 1rem !important;\n}\n.pt-md-4 {\r\n    padding-top: 1.5rem !important;\n}\n.pt-md-5 {\r\n    padding-top: 3rem !important;\n}\n.pe-md-0 {\r\n    padding-right: 0 !important;\n}\n.pe-md-1 {\r\n    padding-right: 0.25rem !important;\n}\n.pe-md-2 {\r\n    padding-right: 0.5rem !important;\n}\n.pe-md-3 {\r\n    padding-right: 1rem !important;\n}\n.pe-md-4 {\r\n    padding-right: 1.5rem !important;\n}\n.pe-md-5 {\r\n    padding-right: 3rem !important;\n}\n.pb-md-0 {\r\n    padding-bottom: 0 !important;\n}\n.pb-md-1 {\r\n    padding-bottom: 0.25rem !important;\n}\n.pb-md-2 {\r\n    padding-bottom: 0.5rem !important;\n}\n.pb-md-3 {\r\n    padding-bottom: 1rem !important;\n}\n.pb-md-4 {\r\n    padding-bottom: 1.5rem !important;\n}\n.pb-md-5 {\r\n    padding-bottom: 3rem !important;\n}\n.ps-md-0 {\r\n    padding-left: 0 !important;\n}\n.ps-md-1 {\r\n    padding-left: 0.25rem !important;\n}\n.ps-md-2 {\r\n    padding-left: 0.5rem !important;\n}\n.ps-md-3 {\r\n    padding-left: 1rem !important;\n}\n.ps-md-4 {\r\n    padding-left: 1.5rem !important;\n}\n.ps-md-5 {\r\n    padding-left: 3rem !important;\n}\n.text-md-start {\r\n    text-align: left !important;\n}\n.text-md-end {\r\n    text-align: right !important;\n}\n.text-md-center {\r\n    text-align: center !important;\n}\n}@media (min-width: 992px) {\n.float-lg-start {\r\n    float: left !important;\n}\n.float-lg-end {\r\n    float: right !important;\n}\n.float-lg-none {\r\n    float: none !important;\n}\n.d-lg-inline {\r\n    display: inline !important;\n}\n.d-lg-inline-block {\r\n    display: inline-block !important;\n}\n.d-lg-block {\r\n    display: block !important;\n}\n.d-lg-grid {\r\n    display: grid !important;\n}\n.d-lg-table {\r\n    display: table !important;\n}\n.d-lg-table-row {\r\n    display: table-row !important;\n}\n.d-lg-table-cell {\r\n    display: table-cell !important;\n}\n.d-lg-flex {\r\n    display: flex !important;\n}\n.d-lg-inline-flex {\r\n    display: inline-flex !important;\n}\n.d-lg-none {\r\n    display: none !important;\n}\n.flex-lg-fill {\r\n    flex: 1 1 auto !important;\n}\n.flex-lg-row {\r\n    flex-direction: row !important;\n}\n.flex-lg-column {\r\n    flex-direction: column !important;\n}\n.flex-lg-row-reverse {\r\n    flex-direction: row-reverse !important;\n}\n.flex-lg-column-reverse {\r\n    flex-direction: column-reverse !important;\n}\n.flex-lg-grow-0 {\r\n    flex-grow: 0 !important;\n}\n.flex-lg-grow-1 {\r\n    flex-grow: 1 !important;\n}\n.flex-lg-shrink-0 {\r\n    flex-shrink: 0 !important;\n}\n.flex-lg-shrink-1 {\r\n    flex-shrink: 1 !important;\n}\n.flex-lg-wrap {\r\n    flex-wrap: wrap !important;\n}\n.flex-lg-nowrap {\r\n    flex-wrap: nowrap !important;\n}\n.flex-lg-wrap-reverse {\r\n    flex-wrap: wrap-reverse !important;\n}\n.gap-lg-0 {\r\n    gap: 0 !important;\n}\n.gap-lg-1 {\r\n    gap: 0.25rem !important;\n}\n.gap-lg-2 {\r\n    gap: 0.5rem !important;\n}\n.gap-lg-3 {\r\n    gap: 1rem !important;\n}\n.gap-lg-4 {\r\n    gap: 1.5rem !important;\n}\n.gap-lg-5 {\r\n    gap: 3rem !important;\n}\n.justify-content-lg-start {\r\n    justify-content: flex-start !important;\n}\n.justify-content-lg-end {\r\n    justify-content: flex-end !important;\n}\n.justify-content-lg-center {\r\n    justify-content: center !important;\n}\n.justify-content-lg-between {\r\n    justify-content: space-between !important;\n}\n.justify-content-lg-around {\r\n    justify-content: space-around !important;\n}\n.justify-content-lg-evenly {\r\n    justify-content: space-evenly !important;\n}\n.align-items-lg-start {\r\n    align-items: flex-start !important;\n}\n.align-items-lg-end {\r\n    align-items: flex-end !important;\n}\n.align-items-lg-center {\r\n    align-items: center !important;\n}\n.align-items-lg-baseline {\r\n    align-items: baseline !important;\n}\n.align-items-lg-stretch {\r\n    align-items: stretch !important;\n}\n.align-content-lg-start {\r\n    align-content: flex-start !important;\n}\n.align-content-lg-end {\r\n    align-content: flex-end !important;\n}\n.align-content-lg-center {\r\n    align-content: center !important;\n}\n.align-content-lg-between {\r\n    align-content: space-between !important;\n}\n.align-content-lg-around {\r\n    align-content: space-around !important;\n}\n.align-content-lg-stretch {\r\n    align-content: stretch !important;\n}\n.align-self-lg-auto {\r\n    align-self: auto !important;\n}\n.align-self-lg-start {\r\n    align-self: flex-start !important;\n}\n.align-self-lg-end {\r\n    align-self: flex-end !important;\n}\n.align-self-lg-center {\r\n    align-self: center !important;\n}\n.align-self-lg-baseline {\r\n    align-self: baseline !important;\n}\n.align-self-lg-stretch {\r\n    align-self: stretch !important;\n}\n.order-lg-first {\r\n    order: -1 !important;\n}\n.order-lg-0 {\r\n    order: 0 !important;\n}\n.order-lg-1 {\r\n    order: 1 !important;\n}\n.order-lg-2 {\r\n    order: 2 !important;\n}\n.order-lg-3 {\r\n    order: 3 !important;\n}\n.order-lg-4 {\r\n    order: 4 !important;\n}\n.order-lg-5 {\r\n    order: 5 !important;\n}\n.order-lg-last {\r\n    order: 6 !important;\n}\n.m-lg-0 {\r\n    margin: 0 !important;\n}\n.m-lg-1 {\r\n    margin: 0.25rem !important;\n}\n.m-lg-2 {\r\n    margin: 0.5rem !important;\n}\n.m-lg-3 {\r\n    margin: 1rem !important;\n}\n.m-lg-4 {\r\n    margin: 1.5rem !important;\n}\n.m-lg-5 {\r\n    margin: 3rem !important;\n}\n.m-lg-auto {\r\n    margin: auto !important;\n}\n.mx-lg-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\n}\n.mx-lg-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.mx-lg-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\n}\n.mx-lg-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\n}\n.mx-lg-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\n}\n.mx-lg-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\n}\n.mx-lg-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\n}\n.my-lg-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\n}\n.my-lg-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.my-lg-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\n}\n.my-lg-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\n}\n.my-lg-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\n}\n.my-lg-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\n}\n.my-lg-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\n}\n.mt-lg-0 {\r\n    margin-top: 0 !important;\n}\n.mt-lg-1 {\r\n    margin-top: 0.25rem !important;\n}\n.mt-lg-2 {\r\n    margin-top: 0.5rem !important;\n}\n.mt-lg-3 {\r\n    margin-top: 1rem !important;\n}\n.mt-lg-4 {\r\n    margin-top: 1.5rem !important;\n}\n.mt-lg-5 {\r\n    margin-top: 3rem !important;\n}\n.mt-lg-auto {\r\n    margin-top: auto !important;\n}\n.me-lg-0 {\r\n    margin-right: 0 !important;\n}\n.me-lg-1 {\r\n    margin-right: 0.25rem !important;\n}\n.me-lg-2 {\r\n    margin-right: 0.5rem !important;\n}\n.me-lg-3 {\r\n    margin-right: 1rem !important;\n}\n.me-lg-4 {\r\n    margin-right: 1.5rem !important;\n}\n.me-lg-5 {\r\n    margin-right: 3rem !important;\n}\n.me-lg-auto {\r\n    margin-right: auto !important;\n}\n.mb-lg-0 {\r\n    margin-bottom: 0 !important;\n}\n.mb-lg-1 {\r\n    margin-bottom: 0.25rem !important;\n}\n.mb-lg-2 {\r\n    margin-bottom: 0.5rem !important;\n}\n.mb-lg-3 {\r\n    margin-bottom: 1rem !important;\n}\n.mb-lg-4 {\r\n    margin-bottom: 1.5rem !important;\n}\n.mb-lg-5 {\r\n    margin-bottom: 3rem !important;\n}\n.mb-lg-auto {\r\n    margin-bottom: auto !important;\n}\n.ms-lg-0 {\r\n    margin-left: 0 !important;\n}\n.ms-lg-1 {\r\n    margin-left: 0.25rem !important;\n}\n.ms-lg-2 {\r\n    margin-left: 0.5rem !important;\n}\n.ms-lg-3 {\r\n    margin-left: 1rem !important;\n}\n.ms-lg-4 {\r\n    margin-left: 1.5rem !important;\n}\n.ms-lg-5 {\r\n    margin-left: 3rem !important;\n}\n.ms-lg-auto {\r\n    margin-left: auto !important;\n}\n.p-lg-0 {\r\n    padding: 0 !important;\n}\n.p-lg-1 {\r\n    padding: 0.25rem !important;\n}\n.p-lg-2 {\r\n    padding: 0.5rem !important;\n}\n.p-lg-3 {\r\n    padding: 1rem !important;\n}\n.p-lg-4 {\r\n    padding: 1.5rem !important;\n}\n.p-lg-5 {\r\n    padding: 3rem !important;\n}\n.px-lg-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\n}\n.px-lg-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\n}\n.px-lg-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\n}\n.px-lg-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\n}\n.px-lg-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\n}\n.px-lg-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\n}\n.py-lg-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\n}\n.py-lg-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\n}\n.py-lg-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\n}\n.py-lg-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\n}\n.py-lg-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\n}\n.py-lg-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\n}\n.pt-lg-0 {\r\n    padding-top: 0 !important;\n}\n.pt-lg-1 {\r\n    padding-top: 0.25rem !important;\n}\n.pt-lg-2 {\r\n    padding-top: 0.5rem !important;\n}\n.pt-lg-3 {\r\n    padding-top: 1rem !important;\n}\n.pt-lg-4 {\r\n    padding-top: 1.5rem !important;\n}\n.pt-lg-5 {\r\n    padding-top: 3rem !important;\n}\n.pe-lg-0 {\r\n    padding-right: 0 !important;\n}\n.pe-lg-1 {\r\n    padding-right: 0.25rem !important;\n}\n.pe-lg-2 {\r\n    padding-right: 0.5rem !important;\n}\n.pe-lg-3 {\r\n    padding-right: 1rem !important;\n}\n.pe-lg-4 {\r\n    padding-right: 1.5rem !important;\n}\n.pe-lg-5 {\r\n    padding-right: 3rem !important;\n}\n.pb-lg-0 {\r\n    padding-bottom: 0 !important;\n}\n.pb-lg-1 {\r\n    padding-bottom: 0.25rem !important;\n}\n.pb-lg-2 {\r\n    padding-bottom: 0.5rem !important;\n}\n.pb-lg-3 {\r\n    padding-bottom: 1rem !important;\n}\n.pb-lg-4 {\r\n    padding-bottom: 1.5rem !important;\n}\n.pb-lg-5 {\r\n    padding-bottom: 3rem !important;\n}\n.ps-lg-0 {\r\n    padding-left: 0 !important;\n}\n.ps-lg-1 {\r\n    padding-left: 0.25rem !important;\n}\n.ps-lg-2 {\r\n    padding-left: 0.5rem !important;\n}\n.ps-lg-3 {\r\n    padding-left: 1rem !important;\n}\n.ps-lg-4 {\r\n    padding-left: 1.5rem !important;\n}\n.ps-lg-5 {\r\n    padding-left: 3rem !important;\n}\n.text-lg-start {\r\n    text-align: left !important;\n}\n.text-lg-end {\r\n    text-align: right !important;\n}\n.text-lg-center {\r\n    text-align: center !important;\n}\n}@media (min-width: 1200px) {\n.float-xl-start {\r\n    float: left !important;\n}\n.float-xl-end {\r\n    float: right !important;\n}\n.float-xl-none {\r\n    float: none !important;\n}\n.d-xl-inline {\r\n    display: inline !important;\n}\n.d-xl-inline-block {\r\n    display: inline-block !important;\n}\n.d-xl-block {\r\n    display: block !important;\n}\n.d-xl-grid {\r\n    display: grid !important;\n}\n.d-xl-table {\r\n    display: table !important;\n}\n.d-xl-table-row {\r\n    display: table-row !important;\n}\n.d-xl-table-cell {\r\n    display: table-cell !important;\n}\n.d-xl-flex {\r\n    display: flex !important;\n}\n.d-xl-inline-flex {\r\n    display: inline-flex !important;\n}\n.d-xl-none {\r\n    display: none !important;\n}\n.flex-xl-fill {\r\n    flex: 1 1 auto !important;\n}\n.flex-xl-row {\r\n    flex-direction: row !important;\n}\n.flex-xl-column {\r\n    flex-direction: column !important;\n}\n.flex-xl-row-reverse {\r\n    flex-direction: row-reverse !important;\n}\n.flex-xl-column-reverse {\r\n    flex-direction: column-reverse !important;\n}\n.flex-xl-grow-0 {\r\n    flex-grow: 0 !important;\n}\n.flex-xl-grow-1 {\r\n    flex-grow: 1 !important;\n}\n.flex-xl-shrink-0 {\r\n    flex-shrink: 0 !important;\n}\n.flex-xl-shrink-1 {\r\n    flex-shrink: 1 !important;\n}\n.flex-xl-wrap {\r\n    flex-wrap: wrap !important;\n}\n.flex-xl-nowrap {\r\n    flex-wrap: nowrap !important;\n}\n.flex-xl-wrap-reverse {\r\n    flex-wrap: wrap-reverse !important;\n}\n.gap-xl-0 {\r\n    gap: 0 !important;\n}\n.gap-xl-1 {\r\n    gap: 0.25rem !important;\n}\n.gap-xl-2 {\r\n    gap: 0.5rem !important;\n}\n.gap-xl-3 {\r\n    gap: 1rem !important;\n}\n.gap-xl-4 {\r\n    gap: 1.5rem !important;\n}\n.gap-xl-5 {\r\n    gap: 3rem !important;\n}\n.justify-content-xl-start {\r\n    justify-content: flex-start !important;\n}\n.justify-content-xl-end {\r\n    justify-content: flex-end !important;\n}\n.justify-content-xl-center {\r\n    justify-content: center !important;\n}\n.justify-content-xl-between {\r\n    justify-content: space-between !important;\n}\n.justify-content-xl-around {\r\n    justify-content: space-around !important;\n}\n.justify-content-xl-evenly {\r\n    justify-content: space-evenly !important;\n}\n.align-items-xl-start {\r\n    align-items: flex-start !important;\n}\n.align-items-xl-end {\r\n    align-items: flex-end !important;\n}\n.align-items-xl-center {\r\n    align-items: center !important;\n}\n.align-items-xl-baseline {\r\n    align-items: baseline !important;\n}\n.align-items-xl-stretch {\r\n    align-items: stretch !important;\n}\n.align-content-xl-start {\r\n    align-content: flex-start !important;\n}\n.align-content-xl-end {\r\n    align-content: flex-end !important;\n}\n.align-content-xl-center {\r\n    align-content: center !important;\n}\n.align-content-xl-between {\r\n    align-content: space-between !important;\n}\n.align-content-xl-around {\r\n    align-content: space-around !important;\n}\n.align-content-xl-stretch {\r\n    align-content: stretch !important;\n}\n.align-self-xl-auto {\r\n    align-self: auto !important;\n}\n.align-self-xl-start {\r\n    align-self: flex-start !important;\n}\n.align-self-xl-end {\r\n    align-self: flex-end !important;\n}\n.align-self-xl-center {\r\n    align-self: center !important;\n}\n.align-self-xl-baseline {\r\n    align-self: baseline !important;\n}\n.align-self-xl-stretch {\r\n    align-self: stretch !important;\n}\n.order-xl-first {\r\n    order: -1 !important;\n}\n.order-xl-0 {\r\n    order: 0 !important;\n}\n.order-xl-1 {\r\n    order: 1 !important;\n}\n.order-xl-2 {\r\n    order: 2 !important;\n}\n.order-xl-3 {\r\n    order: 3 !important;\n}\n.order-xl-4 {\r\n    order: 4 !important;\n}\n.order-xl-5 {\r\n    order: 5 !important;\n}\n.order-xl-last {\r\n    order: 6 !important;\n}\n.m-xl-0 {\r\n    margin: 0 !important;\n}\n.m-xl-1 {\r\n    margin: 0.25rem !important;\n}\n.m-xl-2 {\r\n    margin: 0.5rem !important;\n}\n.m-xl-3 {\r\n    margin: 1rem !important;\n}\n.m-xl-4 {\r\n    margin: 1.5rem !important;\n}\n.m-xl-5 {\r\n    margin: 3rem !important;\n}\n.m-xl-auto {\r\n    margin: auto !important;\n}\n.mx-xl-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\n}\n.mx-xl-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.mx-xl-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\n}\n.mx-xl-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\n}\n.mx-xl-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\n}\n.mx-xl-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\n}\n.mx-xl-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\n}\n.my-xl-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\n}\n.my-xl-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.my-xl-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\n}\n.my-xl-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\n}\n.my-xl-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\n}\n.my-xl-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\n}\n.my-xl-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\n}\n.mt-xl-0 {\r\n    margin-top: 0 !important;\n}\n.mt-xl-1 {\r\n    margin-top: 0.25rem !important;\n}\n.mt-xl-2 {\r\n    margin-top: 0.5rem !important;\n}\n.mt-xl-3 {\r\n    margin-top: 1rem !important;\n}\n.mt-xl-4 {\r\n    margin-top: 1.5rem !important;\n}\n.mt-xl-5 {\r\n    margin-top: 3rem !important;\n}\n.mt-xl-auto {\r\n    margin-top: auto !important;\n}\n.me-xl-0 {\r\n    margin-right: 0 !important;\n}\n.me-xl-1 {\r\n    margin-right: 0.25rem !important;\n}\n.me-xl-2 {\r\n    margin-right: 0.5rem !important;\n}\n.me-xl-3 {\r\n    margin-right: 1rem !important;\n}\n.me-xl-4 {\r\n    margin-right: 1.5rem !important;\n}\n.me-xl-5 {\r\n    margin-right: 3rem !important;\n}\n.me-xl-auto {\r\n    margin-right: auto !important;\n}\n.mb-xl-0 {\r\n    margin-bottom: 0 !important;\n}\n.mb-xl-1 {\r\n    margin-bottom: 0.25rem !important;\n}\n.mb-xl-2 {\r\n    margin-bottom: 0.5rem !important;\n}\n.mb-xl-3 {\r\n    margin-bottom: 1rem !important;\n}\n.mb-xl-4 {\r\n    margin-bottom: 1.5rem !important;\n}\n.mb-xl-5 {\r\n    margin-bottom: 3rem !important;\n}\n.mb-xl-auto {\r\n    margin-bottom: auto !important;\n}\n.ms-xl-0 {\r\n    margin-left: 0 !important;\n}\n.ms-xl-1 {\r\n    margin-left: 0.25rem !important;\n}\n.ms-xl-2 {\r\n    margin-left: 0.5rem !important;\n}\n.ms-xl-3 {\r\n    margin-left: 1rem !important;\n}\n.ms-xl-4 {\r\n    margin-left: 1.5rem !important;\n}\n.ms-xl-5 {\r\n    margin-left: 3rem !important;\n}\n.ms-xl-auto {\r\n    margin-left: auto !important;\n}\n.p-xl-0 {\r\n    padding: 0 !important;\n}\n.p-xl-1 {\r\n    padding: 0.25rem !important;\n}\n.p-xl-2 {\r\n    padding: 0.5rem !important;\n}\n.p-xl-3 {\r\n    padding: 1rem !important;\n}\n.p-xl-4 {\r\n    padding: 1.5rem !important;\n}\n.p-xl-5 {\r\n    padding: 3rem !important;\n}\n.px-xl-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\n}\n.px-xl-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\n}\n.px-xl-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\n}\n.px-xl-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\n}\n.px-xl-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\n}\n.px-xl-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\n}\n.py-xl-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\n}\n.py-xl-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\n}\n.py-xl-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\n}\n.py-xl-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\n}\n.py-xl-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\n}\n.py-xl-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\n}\n.pt-xl-0 {\r\n    padding-top: 0 !important;\n}\n.pt-xl-1 {\r\n    padding-top: 0.25rem !important;\n}\n.pt-xl-2 {\r\n    padding-top: 0.5rem !important;\n}\n.pt-xl-3 {\r\n    padding-top: 1rem !important;\n}\n.pt-xl-4 {\r\n    padding-top: 1.5rem !important;\n}\n.pt-xl-5 {\r\n    padding-top: 3rem !important;\n}\n.pe-xl-0 {\r\n    padding-right: 0 !important;\n}\n.pe-xl-1 {\r\n    padding-right: 0.25rem !important;\n}\n.pe-xl-2 {\r\n    padding-right: 0.5rem !important;\n}\n.pe-xl-3 {\r\n    padding-right: 1rem !important;\n}\n.pe-xl-4 {\r\n    padding-right: 1.5rem !important;\n}\n.pe-xl-5 {\r\n    padding-right: 3rem !important;\n}\n.pb-xl-0 {\r\n    padding-bottom: 0 !important;\n}\n.pb-xl-1 {\r\n    padding-bottom: 0.25rem !important;\n}\n.pb-xl-2 {\r\n    padding-bottom: 0.5rem !important;\n}\n.pb-xl-3 {\r\n    padding-bottom: 1rem !important;\n}\n.pb-xl-4 {\r\n    padding-bottom: 1.5rem !important;\n}\n.pb-xl-5 {\r\n    padding-bottom: 3rem !important;\n}\n.ps-xl-0 {\r\n    padding-left: 0 !important;\n}\n.ps-xl-1 {\r\n    padding-left: 0.25rem !important;\n}\n.ps-xl-2 {\r\n    padding-left: 0.5rem !important;\n}\n.ps-xl-3 {\r\n    padding-left: 1rem !important;\n}\n.ps-xl-4 {\r\n    padding-left: 1.5rem !important;\n}\n.ps-xl-5 {\r\n    padding-left: 3rem !important;\n}\n.text-xl-start {\r\n    text-align: left !important;\n}\n.text-xl-end {\r\n    text-align: right !important;\n}\n.text-xl-center {\r\n    text-align: center !important;\n}\n}@media (min-width: 1400px) {\n.float-xxl-start {\r\n    float: left !important;\n}\n.float-xxl-end {\r\n    float: right !important;\n}\n.float-xxl-none {\r\n    float: none !important;\n}\n.d-xxl-inline {\r\n    display: inline !important;\n}\n.d-xxl-inline-block {\r\n    display: inline-block !important;\n}\n.d-xxl-block {\r\n    display: block !important;\n}\n.d-xxl-grid {\r\n    display: grid !important;\n}\n.d-xxl-table {\r\n    display: table !important;\n}\n.d-xxl-table-row {\r\n    display: table-row !important;\n}\n.d-xxl-table-cell {\r\n    display: table-cell !important;\n}\n.d-xxl-flex {\r\n    display: flex !important;\n}\n.d-xxl-inline-flex {\r\n    display: inline-flex !important;\n}\n.d-xxl-none {\r\n    display: none !important;\n}\n.flex-xxl-fill {\r\n    flex: 1 1 auto !important;\n}\n.flex-xxl-row {\r\n    flex-direction: row !important;\n}\n.flex-xxl-column {\r\n    flex-direction: column !important;\n}\n.flex-xxl-row-reverse {\r\n    flex-direction: row-reverse !important;\n}\n.flex-xxl-column-reverse {\r\n    flex-direction: column-reverse !important;\n}\n.flex-xxl-grow-0 {\r\n    flex-grow: 0 !important;\n}\n.flex-xxl-grow-1 {\r\n    flex-grow: 1 !important;\n}\n.flex-xxl-shrink-0 {\r\n    flex-shrink: 0 !important;\n}\n.flex-xxl-shrink-1 {\r\n    flex-shrink: 1 !important;\n}\n.flex-xxl-wrap {\r\n    flex-wrap: wrap !important;\n}\n.flex-xxl-nowrap {\r\n    flex-wrap: nowrap !important;\n}\n.flex-xxl-wrap-reverse {\r\n    flex-wrap: wrap-reverse !important;\n}\n.gap-xxl-0 {\r\n    gap: 0 !important;\n}\n.gap-xxl-1 {\r\n    gap: 0.25rem !important;\n}\n.gap-xxl-2 {\r\n    gap: 0.5rem !important;\n}\n.gap-xxl-3 {\r\n    gap: 1rem !important;\n}\n.gap-xxl-4 {\r\n    gap: 1.5rem !important;\n}\n.gap-xxl-5 {\r\n    gap: 3rem !important;\n}\n.justify-content-xxl-start {\r\n    justify-content: flex-start !important;\n}\n.justify-content-xxl-end {\r\n    justify-content: flex-end !important;\n}\n.justify-content-xxl-center {\r\n    justify-content: center !important;\n}\n.justify-content-xxl-between {\r\n    justify-content: space-between !important;\n}\n.justify-content-xxl-around {\r\n    justify-content: space-around !important;\n}\n.justify-content-xxl-evenly {\r\n    justify-content: space-evenly !important;\n}\n.align-items-xxl-start {\r\n    align-items: flex-start !important;\n}\n.align-items-xxl-end {\r\n    align-items: flex-end !important;\n}\n.align-items-xxl-center {\r\n    align-items: center !important;\n}\n.align-items-xxl-baseline {\r\n    align-items: baseline !important;\n}\n.align-items-xxl-stretch {\r\n    align-items: stretch !important;\n}\n.align-content-xxl-start {\r\n    align-content: flex-start !important;\n}\n.align-content-xxl-end {\r\n    align-content: flex-end !important;\n}\n.align-content-xxl-center {\r\n    align-content: center !important;\n}\n.align-content-xxl-between {\r\n    align-content: space-between !important;\n}\n.align-content-xxl-around {\r\n    align-content: space-around !important;\n}\n.align-content-xxl-stretch {\r\n    align-content: stretch !important;\n}\n.align-self-xxl-auto {\r\n    align-self: auto !important;\n}\n.align-self-xxl-start {\r\n    align-self: flex-start !important;\n}\n.align-self-xxl-end {\r\n    align-self: flex-end !important;\n}\n.align-self-xxl-center {\r\n    align-self: center !important;\n}\n.align-self-xxl-baseline {\r\n    align-self: baseline !important;\n}\n.align-self-xxl-stretch {\r\n    align-self: stretch !important;\n}\n.order-xxl-first {\r\n    order: -1 !important;\n}\n.order-xxl-0 {\r\n    order: 0 !important;\n}\n.order-xxl-1 {\r\n    order: 1 !important;\n}\n.order-xxl-2 {\r\n    order: 2 !important;\n}\n.order-xxl-3 {\r\n    order: 3 !important;\n}\n.order-xxl-4 {\r\n    order: 4 !important;\n}\n.order-xxl-5 {\r\n    order: 5 !important;\n}\n.order-xxl-last {\r\n    order: 6 !important;\n}\n.m-xxl-0 {\r\n    margin: 0 !important;\n}\n.m-xxl-1 {\r\n    margin: 0.25rem !important;\n}\n.m-xxl-2 {\r\n    margin: 0.5rem !important;\n}\n.m-xxl-3 {\r\n    margin: 1rem !important;\n}\n.m-xxl-4 {\r\n    margin: 1.5rem !important;\n}\n.m-xxl-5 {\r\n    margin: 3rem !important;\n}\n.m-xxl-auto {\r\n    margin: auto !important;\n}\n.mx-xxl-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\n}\n.mx-xxl-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\n}\n.mx-xxl-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\n}\n.mx-xxl-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\n}\n.mx-xxl-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\n}\n.mx-xxl-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\n}\n.mx-xxl-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\n}\n.my-xxl-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\n}\n.my-xxl-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\n}\n.my-xxl-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\n}\n.my-xxl-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\n}\n.my-xxl-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\n}\n.my-xxl-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\n}\n.my-xxl-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\n}\n.mt-xxl-0 {\r\n    margin-top: 0 !important;\n}\n.mt-xxl-1 {\r\n    margin-top: 0.25rem !important;\n}\n.mt-xxl-2 {\r\n    margin-top: 0.5rem !important;\n}\n.mt-xxl-3 {\r\n    margin-top: 1rem !important;\n}\n.mt-xxl-4 {\r\n    margin-top: 1.5rem !important;\n}\n.mt-xxl-5 {\r\n    margin-top: 3rem !important;\n}\n.mt-xxl-auto {\r\n    margin-top: auto !important;\n}\n.me-xxl-0 {\r\n    margin-right: 0 !important;\n}\n.me-xxl-1 {\r\n    margin-right: 0.25rem !important;\n}\n.me-xxl-2 {\r\n    margin-right: 0.5rem !important;\n}\n.me-xxl-3 {\r\n    margin-right: 1rem !important;\n}\n.me-xxl-4 {\r\n    margin-right: 1.5rem !important;\n}\n.me-xxl-5 {\r\n    margin-right: 3rem !important;\n}\n.me-xxl-auto {\r\n    margin-right: auto !important;\n}\n.mb-xxl-0 {\r\n    margin-bottom: 0 !important;\n}\n.mb-xxl-1 {\r\n    margin-bottom: 0.25rem !important;\n}\n.mb-xxl-2 {\r\n    margin-bottom: 0.5rem !important;\n}\n.mb-xxl-3 {\r\n    margin-bottom: 1rem !important;\n}\n.mb-xxl-4 {\r\n    margin-bottom: 1.5rem !important;\n}\n.mb-xxl-5 {\r\n    margin-bottom: 3rem !important;\n}\n.mb-xxl-auto {\r\n    margin-bottom: auto !important;\n}\n.ms-xxl-0 {\r\n    margin-left: 0 !important;\n}\n.ms-xxl-1 {\r\n    margin-left: 0.25rem !important;\n}\n.ms-xxl-2 {\r\n    margin-left: 0.5rem !important;\n}\n.ms-xxl-3 {\r\n    margin-left: 1rem !important;\n}\n.ms-xxl-4 {\r\n    margin-left: 1.5rem !important;\n}\n.ms-xxl-5 {\r\n    margin-left: 3rem !important;\n}\n.ms-xxl-auto {\r\n    margin-left: auto !important;\n}\n.p-xxl-0 {\r\n    padding: 0 !important;\n}\n.p-xxl-1 {\r\n    padding: 0.25rem !important;\n}\n.p-xxl-2 {\r\n    padding: 0.5rem !important;\n}\n.p-xxl-3 {\r\n    padding: 1rem !important;\n}\n.p-xxl-4 {\r\n    padding: 1.5rem !important;\n}\n.p-xxl-5 {\r\n    padding: 3rem !important;\n}\n.px-xxl-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\n}\n.px-xxl-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\n}\n.px-xxl-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\n}\n.px-xxl-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\n}\n.px-xxl-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\n}\n.px-xxl-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\n}\n.py-xxl-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\n}\n.py-xxl-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\n}\n.py-xxl-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\n}\n.py-xxl-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\n}\n.py-xxl-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\n}\n.py-xxl-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\n}\n.pt-xxl-0 {\r\n    padding-top: 0 !important;\n}\n.pt-xxl-1 {\r\n    padding-top: 0.25rem !important;\n}\n.pt-xxl-2 {\r\n    padding-top: 0.5rem !important;\n}\n.pt-xxl-3 {\r\n    padding-top: 1rem !important;\n}\n.pt-xxl-4 {\r\n    padding-top: 1.5rem !important;\n}\n.pt-xxl-5 {\r\n    padding-top: 3rem !important;\n}\n.pe-xxl-0 {\r\n    padding-right: 0 !important;\n}\n.pe-xxl-1 {\r\n    padding-right: 0.25rem !important;\n}\n.pe-xxl-2 {\r\n    padding-right: 0.5rem !important;\n}\n.pe-xxl-3 {\r\n    padding-right: 1rem !important;\n}\n.pe-xxl-4 {\r\n    padding-right: 1.5rem !important;\n}\n.pe-xxl-5 {\r\n    padding-right: 3rem !important;\n}\n.pb-xxl-0 {\r\n    padding-bottom: 0 !important;\n}\n.pb-xxl-1 {\r\n    padding-bottom: 0.25rem !important;\n}\n.pb-xxl-2 {\r\n    padding-bottom: 0.5rem !important;\n}\n.pb-xxl-3 {\r\n    padding-bottom: 1rem !important;\n}\n.pb-xxl-4 {\r\n    padding-bottom: 1.5rem !important;\n}\n.pb-xxl-5 {\r\n    padding-bottom: 3rem !important;\n}\n.ps-xxl-0 {\r\n    padding-left: 0 !important;\n}\n.ps-xxl-1 {\r\n    padding-left: 0.25rem !important;\n}\n.ps-xxl-2 {\r\n    padding-left: 0.5rem !important;\n}\n.ps-xxl-3 {\r\n    padding-left: 1rem !important;\n}\n.ps-xxl-4 {\r\n    padding-left: 1.5rem !important;\n}\n.ps-xxl-5 {\r\n    padding-left: 3rem !important;\n}\n.text-xxl-start {\r\n    text-align: left !important;\n}\n.text-xxl-end {\r\n    text-align: right !important;\n}\n.text-xxl-center {\r\n    text-align: center !important;\n}\n}@media (min-width: 1200px) {\n.fs-1 {\r\n    font-size: 2.5rem !important;\n}\n.fs-2 {\r\n    font-size: 2rem !important;\n}\n.fs-3 {\r\n    font-size: 1.75rem !important;\n}\n.fs-4 {\r\n    font-size: 1.5rem !important;\n}\n.fs-sm-1 {\r\n    font-size: 2.5rem !important;\n}\n.fs-sm-2 {\r\n    font-size: 2rem !important;\n}\n.fs-sm-3 {\r\n    font-size: 1.75rem !important;\n}\n.fs-sm-4 {\r\n    font-size: 1.5rem !important;\n}\n.fs-md-1 {\r\n    font-size: 2.5rem !important;\n}\n.fs-md-2 {\r\n    font-size: 2rem !important;\n}\n.fs-md-3 {\r\n    font-size: 1.75rem !important;\n}\n.fs-md-4 {\r\n    font-size: 1.5rem !important;\n}\n.fs-lg-1 {\r\n    font-size: 2.5rem !important;\n}\n.fs-lg-2 {\r\n    font-size: 2rem !important;\n}\n.fs-lg-3 {\r\n    font-size: 1.75rem !important;\n}\n.fs-lg-4 {\r\n    font-size: 1.5rem !important;\n}\n}@media print {\n.d-print-inline {\r\n    display: inline !important;\n}\n.d-print-inline-block {\r\n    display: inline-block !important;\n}\n.d-print-block {\r\n    display: block !important;\n}\n.d-print-grid {\r\n    display: grid !important;\n}\n.d-print-table {\r\n    display: table !important;\n}\n.d-print-table-row {\r\n    display: table-row !important;\n}\n.d-print-table-cell {\r\n    display: table-cell !important;\n}\n.d-print-flex {\r\n    display: flex !important;\n}\n.d-print-inline-flex {\r\n    display: inline-flex !important;\n}\n.d-print-none {\r\n    display: none !important;\n}\n}@charset \"utf-8\";table\r\n        {\r\n            border: black solid 1px;\r\n            border-collapse: collapse;\n}td\r\n        {\r\n            border: black solid 1px;\r\n            padding: 3px;\n}.td_Num\r\n        {\r\n            width: 60px;\r\n            text-align: center;\n}.td_Item\r\n        {\r\n            width: 160px;\r\n            text-align: center;\n}.td_Oper\r\n        {\r\n            width: 120px;\r\n            text-align: center;\n}.td_Oper span\r\n        {\r\n            cursor: pointer;\n}/*每个页面公共css */\r\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);