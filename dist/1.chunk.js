webpackJsonp([1],{12:function(t,a,o){var l=o(0),i=o(13),s=o(14),e=l(i,s,null,null,null);t.exports=e.exports},13:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{vcModal2_active:!0,vcModal2_animateEntry:!0}},mounted:function(){console.log("vcModal2.vue mounted")},methods:{toggleModal:function(t){this.vcModal2_active=t},toggleMainModal:function(t){"bs4modal"===t.target.id&&this.toggleModal(!1)}}}},14:function(t,a){var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("button",{on:{click:function(a){t.toggleModal(!0)}}},[t._v("vcModal2")]),t._v(" "),o("div",{class:{"bs4modal vcmodal_hide":!t.vcModal2_active,"bs4modal vcmodal2 vcmodal_show":t.vcModal2_active},attrs:{"data-backdrop":"static",tabindex:"-1",role:"dialog",id:"bs4modal","aria-labelledby":"bs4modal_title","aria-hidden":"true"},on:{click:function(a){t.toggleMainModal(a)}}},[o("div",{staticClass:"bs4modal-dialog bs4modal-md",attrs:{role:"document"}},[o("div",{class:{"bs4modal-content":!t.vcModal2_animateEntry,"bs4modal-content animated bounceIn":t.vcModal2_animateEntry}},[o("div",{staticClass:"bs4modal-header"},[o("h5",{staticClass:"bs4modal-title"},[t._v("vcModal2 title")]),t._v(" "),o("button",{staticClass:"btn btn1-01",attrs:{type:"button","data-dismiss":"bs4modal","aria-label":"Close"},on:{click:function(a){t.toggleModal(!1)}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"bs4modal-body"},[o("div",{staticClass:"vcmodal2_prevholder"},[o("div",{staticClass:"vcmodal2_svgholder"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})])])]),t._v(" "),o("p",[t._v("modal content...\r\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\r\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\r\n            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\r\n          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),o("div",{staticClass:"vcmodal2_nextholder"},[o("div",{staticClass:"vcmodal2_svgholder"},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])])])]),t._v(" "),o("div",{staticClass:"bs4modal-footer"},[o("button",{staticClass:"btn btn1-01",attrs:{type:"button","data-dismiss":"bs4modal"},on:{click:function(a){t.toggleModal(!1)}}},[t._v("Close")]),t._v(" "),o("button",{staticClass:"btn btn1-01",attrs:{type:"button"}},[t._v("Save changes")])])])])])])},l=[];t.exports={render:o,staticRenderFns:l}}});