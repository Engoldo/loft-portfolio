(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{403:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"work__content-child work__content-tags"},[n("app-input",{attrs:{title:"Добавление тега",type:"text",value:this.tags,placeholder:"Теги через запятую",errorText:this.errorText,nopadding:""},on:{input:this.handleInput}}),n("tags",{attrs:{tags:this.tagsArray,interactive:!0},on:{remove:this.removeTag}})],1)};function i(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r._withStripped=!0;var a={props:{value:String,errorText:String},components:{tags:function(){return e.e(3).then(e.bind(null,402))},appInput:function(){return e.e(0).then(e.bind(null,399))}},data:function(){return{tagsString:this.value}},computed:{tagsArray:function(){return!1==!!this.tags.length?[]:this.tags.split(",")},tags:{get:function(){return this.value},set:function(t){this.tagsString=t}}},methods:{handleInput:function(t){this.$emit("input",t),this.tags=t},removeTag:function(t){var n=i(this.tagsArray);n.splice(t,1),this.$emit("removeTag",n.join(","))}}},s=e(96),o=Object(s.a)(a,r,[],!1,null,null,null);o.options.__file="src/admin/templates/add-tags.vue";n.default=o.exports}}]);