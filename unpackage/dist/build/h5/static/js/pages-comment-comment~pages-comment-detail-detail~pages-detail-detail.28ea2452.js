(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-comment-comment~pages-comment-detail-detail~pages-detail-detail"],{"07f1":function(A,t,e){"use strict";e.r(t);var n=e("dd3a"),r=e("232f");for(var a in r)"default"!==a&&function(A){e.d(t,A,(function(){return r[A]}))}(a);e("1d88");var i,o=e("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"1c1e3f0b",null,!1,n["a"],i);t["default"]=u.exports},"0b2d":function(A,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-gap",props:{bgColor:{type:String,default:"transparent "},height:{type:[String,Number],default:30},marginTop:{type:[String,Number],default:0},marginBottom:{type:[String,Number],default:0}},computed:{gapStyle:function(){return{backgroundColor:this.bgColor,height:this.height+"rpx",marginTop:this.marginTop+"rpx",marginBottom:this.marginBottom+"rpx"}}}};t.default=n},1031:function(A,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var n={uIcon:e("a9fd").default},r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"u-avatar",style:[A.wrapStyle],on:{click:function(t){arguments[0]=t=A.$handleEvent(t),A.click.apply(void 0,arguments)}}},[!A.uText&&A.avatar?e("v-uni-image",{staticClass:"u-avatar__img",style:[A.imgStyle],attrs:{src:A.avatar,mode:A.imgMode},on:{error:function(t){arguments[0]=t=A.$handleEvent(t),A.loadError.apply(void 0,arguments)}}}):A.uText?e("v-uni-text",{staticClass:"u-line-1",style:{fontSize:"38rpx"}},[A._v(A._s(A.uText))]):A._t("default"),A.showSex?e("v-uni-view",{staticClass:"u-avatar__sex",class:["u-avatar__sex--"+A.sexIcon],style:[A.uSexStyle]},[e("u-icon",{attrs:{name:A.sexIcon,size:"20"}})],1):A._e(),A.showLevel?e("v-uni-view",{staticClass:"u-avatar__level",style:[A.uLevelStyle]},[e("u-icon",{attrs:{name:A.levelIcon,size:"20"}})],1):A._e()],2)},a=[]},"1d88":function(A,t,e){"use strict";var n=e("2a3e"),r=e.n(n);r.a},"22fa":function(A,t,e){"use strict";e.r(t);var n=e("b710"),r=e.n(n);for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);t["default"]=r.a},"232f":function(A,t,e){"use strict";e.r(t);var n=e("9766"),r=e.n(n);for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);t["default"]=r.a},2720:function(A,t,e){"use strict";var n=e("882d"),r=e.n(n);r.a},"2a3e":function(A,t,e){var n=e("3cd6");"string"===typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);var r=e("4f06").default;r("0473ea52",n,!0,{sourceMap:!1,shadowMode:!1})},"2de9":function(A,t,e){var n=e("24fb");t=n(!1),t.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-avatar[data-v-3827d775]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#606266;-webkit-border-radius:10px;border-radius:10px;position:relative}.u-avatar__img[data-v-3827d775]{width:100%;height:100%}.u-avatar__sex[data-v-3827d775]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:%?100?%;border-radius:%?100?%;top:5%;z-index:1;right:-7%;border:1px #fff solid}.u-avatar__sex--man[data-v-3827d775]{background-color:#2979ff}.u-avatar__sex--woman[data-v-3827d775]{background-color:#fa3534}.u-avatar__sex--none[data-v-3827d775]{background-color:#f90}.u-avatar__level[data-v-3827d775]{position:absolute;width:%?32?%;color:#fff;height:%?32?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-border-radius:%?100?%;border-radius:%?100?%;bottom:5%;z-index:1;right:-7%;border:1px #fff solid;background-color:#f90}',""]),A.exports=t},"3a82":function(A,t,e){"use strict";e.r(t);var n=e("584a"),r=e("4632");for(var a in r)"default"!==a&&function(A){e.d(t,A,(function(){return r[A]}))}(a);e("2720");var i,o=e("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"0c45c33e",null,!1,n["a"],i);t["default"]=u.exports},"3cd6":function(A,t,e){var n=e("24fb");t=n(!1),t.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.comment[data-v-1c1e3f0b]{height:%?85?%;background-color:#f8f8f8}.comment .comment-input[data-v-1c1e3f0b]{background-color:#fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;width:%?600?%;font-size:%?25?%;padding:%?15?%;margin-left:%?10?%}',""]),A.exports=t},4632:function(A,t,e){"use strict";e.r(t);var n=e("0b2d"),r=e.n(n);for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);t["default"]=r.a},"4b5e":function(A,t,e){"use strict";var n=e("623e"),r=e.n(n);r.a},"584a":function(A,t,e){"use strict";var n;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",{staticClass:"u-gap",style:[A.gapStyle]})},a=[]},"623e":function(A,t,e){var n=e("2de9");"string"===typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);var r=e("4f06").default;r("4e03c107",n,!0,{sourceMap:!1,shadowMode:!1})},"876a":function(A,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"book-gap",props:{height:{type:[Number,String],default:20}},data:function(){return{}}};t.default=n},"882d":function(A,t,e){var n=e("98c9");"string"===typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);var r=e("4f06").default;r("792a8e3d",n,!0,{sourceMap:!1,shadowMode:!1})},"8e52":function(A,t,e){"use strict";e.r(t);var n=e("876a"),r=e.n(n);for(var a in n)"default"!==a&&function(A){e.d(t,A,(function(){return n[A]}))}(a);t["default"]=r.a},9766:function(A,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"comment-input2",props:{index:Number},data:function(){return{show:!1,keyH:0,sendData:{nickname:"",pid:0,content:"",rate:0}}},watch:{show:function(A){0==A&&(this.sendData.nickname="",this.sendData.pid=0,this.sendData.content="")}},methods:{keyboardH:function(A){A.detail.height?this.keyH=A.detail.height+220:this.keyH=0},sendComment:function(A){var t=this;if(!this.sendData.content.length)return this.$H.msg("评论内容不能为空");setTimeout((function(){t.show=!1}),100),this.$emit("submit",this.sendData,A)}}};t.default=n},"98c9":function(A,t,e){var n=e("24fb");t=n(!1),t.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */',""]),A.exports=t},b710:function(A,t,e){"use strict";e("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",r={name:"u-avatar",props:{bgColor:{type:String,default:"transparent"},src:{type:String,default:""},size:{type:[String,Number],default:"default"},mode:{type:String,default:"circle"},text:{type:String,default:""},imgMode:{type:String,default:"aspectFill"},index:{type:[String,Number],default:""},sexIcon:{type:String,default:"man"},levelIcon:{type:String,default:"level"},levelBgColor:{type:String,default:""},sexBgColor:{type:String,default:""},showSex:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},data:function(){return{error:!1,avatar:this.src?this.src:n}},watch:{src:function(A){A?(this.avatar=A,this.error=!1):(this.avatar=n,this.error=!0)}},computed:{wrapStyle:function(){var A={};return A.height="large"==this.size?"120rpx":"default"==this.size?"90rpx":"mini"==this.size?"70rpx":this.size+"rpx",A.width=A.height,A.flex="0 0 ".concat(A.height),A.backgroundColor=this.bgColor,A.borderRadius="circle"==this.mode?"500px":"5px",this.text&&(A.padding="0 6rpx"),A},imgStyle:function(){var A={};return A.borderRadius="circle"==this.mode?"500px":"5px",A},uText:function(){return String(this.text)[0]},uSexStyle:function(){var A={};return this.sexBgColor&&(A.backgroundColor=this.sexBgColor),A},uLevelStyle:function(){var A={};return this.levelBgColor&&(A.backgroundColor=this.levelBgColor),A}},methods:{loadError:function(){this.error=!0,this.avatar=n},click:function(){this.$emit("click",this.index)}}};t.default=r},dd3a:function(A,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var n={uMask:e("064c").default},r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",[e("u-mask",{attrs:{show:A.show}}),A.show?e("v-uni-view",{staticClass:"w100 flex align-center justify-between comment",staticStyle:{"z-index":"999999",position:"fixed"},style:{bottom:A.keyH+"rpx"}},[e("v-uni-input",{staticClass:"comment-input",attrs:{type:"text",placeholder:"回复"+A.sendData.nickname+":",focus:!0,"adjust-position":!1},on:{blur:function(t){arguments[0]=t=A.$handleEvent(t),A.show=!1},keyboardheightchange:function(t){arguments[0]=t=A.$handleEvent(t),A.keyboardH.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=A.$handleEvent(t),A.sendComment(A.index)}},model:{value:A.sendData.content,callback:function(t){A.$set(A.sendData,"content",t)},expression:"sendData.content"}}),e("v-uni-view",{staticClass:"mr-3",on:{touchend:function(t){t.preventDefault(),arguments[0]=t=A.$handleEvent(t),A.sendComment(A.index)}}},[A._v("发送")])],1):A._e()],1)},a=[]},e1e3:function(A,t,e){"use strict";e.r(t);var n=e("1031"),r=e("22fa");for(var a in r)"default"!==a&&function(A){e.d(t,A,(function(){return r[A]}))}(a);e("4b5e");var i,o=e("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3827d775",null,!1,n["a"],i);t["default"]=u.exports},e343:function(A,t,e){"use strict";e.r(t);var n=e("e363"),r=e("8e52");for(var a in r)"default"!==a&&function(A){e.d(t,A,(function(){return r[A]}))}(a);var i,o=e("f0c5"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"b562d2f4",null,!1,n["a"],i);t["default"]=u.exports},e363:function(A,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return n}));var n={uGap:e("3a82").default},r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-uni-view",[e("u-gap",{attrs:{height:A.height,"bg-color":"#f8f8fa"}})],1)},a=[]}}]);