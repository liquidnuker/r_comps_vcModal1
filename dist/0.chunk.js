webpackJsonp([0],{

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(8)
/* template */
var __vue_template__ = __webpack_require__(9)
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b7a970", Component.options)
  } else {
    hotAPI.reload("data-v-19b7a970", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      vcModal1_active: false,
      vcModal1_animateEntry: true
    };
  },

  mounted: function mounted() {
    console.log("Home-test.vue mounted");
  },
  methods: {
    toggleModal: function toggleModal(isActive) {
      this.vcModal1_active = isActive;
    },
    toggleMainModal: function toggleMainModal(event) {
      if (event.target.id === "bs4modal") {
        this.toggleModal(false);
      }
    }
  }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('button', {
    on: {
      "click": function($event) {
        _vm.toggleModal(true)
      }
    }
  }, [_vm._v("Modal1")]), _vm._v(" "), _c('div', {
    class: {
      'bs4modal vcmodal_hide': !_vm.vcModal1_active,
      'bs4modal vcmodal_show': _vm.vcModal1_active
    },
    attrs: {
      "data-backdrop": "static",
      "tabindex": "-1",
      "role": "dialog",
      "id": "bs4modal",
      "aria-labelledby": "bs4modal_title",
      "aria-hidden": "true"
    },
    on: {
      "click": function($event) {
        _vm.toggleMainModal($event)
      }
    }
  }, [_c('div', {
    staticClass: "bs4modal-dialog bs4modal-md",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    class: {
      'bs4modal-content': !_vm.vcModal1_animateEntry,
      'bs4modal-content animated bounceIn': _vm.vcModal1_animateEntry
    }
  }, [_c('div', {
    staticClass: "bs4modal-header"
  }, [_c('h5', {
    staticClass: "bs4modal-title"
  }, [_vm._v("bs4modal title")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn1-01",
    attrs: {
      "type": "button",
      "data-dismiss": "bs4modal",
      "aria-label": "Close"
    },
    on: {
      "click": function($event) {
        _vm.toggleModal(false)
      }
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "bs4modal-footer"
  }, [_c('button', {
    staticClass: "btn btn1-01",
    attrs: {
      "type": "button",
      "data-dismiss": "bs4modal"
    },
    on: {
      "click": function($event) {
        _vm.toggleModal(false)
      }
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn1-01",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Save changes")])])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bs4modal-body"
  }, [_c('p', [_vm._v("modal content...")])])
}]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b7a970", module.exports)
  }
}

/***/ })

});