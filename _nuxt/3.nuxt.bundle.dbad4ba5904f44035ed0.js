webpackJsonp([3],{173:function(t,e,n){var r=n(18)(n(202),n(233),null,null,null);t.exports=r.exports},179:function(t,e,n){"use strict";e.__esModule=!0;var r=n(184),u=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new u.default(function(t,n){function r(a,i){try{var o=e[a](i),c=o.value}catch(t){return void n(t)}if(!o.done)return u.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},180:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var u=n(186),a=r(u),i=n(185),o=r(i),c="function"==typeof o.default&&"symbol"==typeof a.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};e.default="function"==typeof o.default&&"symbol"===c(a.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":c(t)}},181:function(t,e,n){t.exports=n(80)},182:function(t,e,n){t.exports={default:n(76),__esModule:!0}},183:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){var e=new Date(t);return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}},184:function(t,e,n){t.exports={default:n(77),__esModule:!0}},185:function(t,e,n){t.exports={default:n(78),__esModule:!0}},186:function(t,e,n){t.exports={default:n(79),__esModule:!0}},187:function(t,e,n){"use strict";function r(t,e){return f()(e).forEach(function(n){["number","string"].includes(s()(e[n]))&&(t=t.replace(new RegExp(":"+n,"gi"),""+e[n]))}),t.replace(/\/?:[^\/]+/g,"").replace(/\/+/g,"/").replace(/\/$/,"")}n.d(e,"a",function(){return v});var u=n(181),a=n.n(u),i=n(179),o=n.n(i),c=n(180),s=n.n(c),l=n(182),f=n.n(l),p=this,d="https://znck.me".replace(/\/$/,""),v=function(){var t=o()(a.a.mark(function t(e,n,u){var i,o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,u.$axios.get(""+d+r("/_nuxt/api/blog/"+e,n)+".json");case 3:return i=t.sent,t.abrupt("return",i.data);case 5:return t.next=7,u.$axios.get(""+d+r("/api/blog/"+e,n));case 7:return o=t.sent,t.abrupt("return",o.data);case 9:case"end":return t.stop()}},t,p)}));return function(e,n,r){return t.apply(this,arguments)}}()},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(183);e.default={name:"Article",props:{id:{required:!0,type:String},title:{required:!0,type:String},description:{required:!0,type:String},published_at:{required:!0,type:String}},filters:{formatDate:r.a}}},189:function(t,e,n){e=t.exports=n(49)(!0),e.push([t.i,".nuxt-blog-article-preview[data-v-9985cb88]{margin-bottom:15px}.nuxt-blog-article-preview-meta[data-v-9985cb88]{font-size:.75rem;opacity:.75}","",{version:3,sources:["/Users/300005163/Workspace/nuxt-community/blog-module/src/app/components/Article.vue"],names:[],mappings:"AACA,4CACE,kBAAoB,CACrB,AACD,iDACE,iBAAkB,AAClB,WAAa,CACd",file:"Article.vue",sourcesContent:["\n.nuxt-blog-article-preview[data-v-9985cb88] {\n  margin-bottom: 15px;\n}\n.nuxt-blog-article-preview-meta[data-v-9985cb88] {\n  font-size: .75rem;\n  opacity: .75;\n}\n"],sourceRoot:""}])},190:function(t,e,n){function r(t){n(192)}var u=n(18)(n(188),n(191),r,"data-v-9985cb88",null);t.exports=u.exports},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"nuxt-blog-article-preview"},[n("router-link",{attrs:{to:{name:"@nuxtjs/blog:article",params:{id:t.id}}}},[t._v(t._s(t.title))]),n("div",{staticClass:"nuxt-blog-article-preview-meta"},[n("time",{attrs:{datatime:t.published_at}},[t._v(t._s(t._f("formatDate")(t.published_at)))])]),n("p",[t._v(t._s(t.description))])],1)},staticRenderFns:[]}},192:function(t,e,n){var r=n(189);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(50)("96ef89e6",r,!0)},196:function(t,e,n){"use strict";var r=n(181),u=n.n(r),a=n(180),i=n.n(a),o=n(179),c=n.n(o),s=n(187);e.a={name:"BlogIndex",asyncData:function(){function t(t){return e.apply(this,arguments)}var e=c()(u.a.mark(function t(e){var r,a,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.params,a=e.payload,o=e.app,"object"!==(void 0===a?"undefined":i()(a))||!a){t.next=3;break}return t.abrupt("return",{page:a});case 3:return t.next=5,n.i(s.a)("/",r,o);case 5:return t.t0=t.sent,t.abrupt("return",{page:t.t0});case 7:case"end":return t.stop()}},t,this)}));return t}(),computed:{articles:function(){return this.page||[]}}}},202:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(196),u=n(190),a=n.n(u);e.default={extends:r.a,components:{ArticlePreview:a.a}}},233:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-lg-8 offset-lg-2"},t._l(t.articles,function(t){return n("ArticlePreview",{key:t.id,attrs:{id:t.id,title:t.title,description:t.description,published_at:t.published_at}})}))])])},staticRenderFns:[]}}});