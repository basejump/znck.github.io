webpackJsonp([2],{174:function(t,e,n){function r(t){n(242)}var o=n(18)(n(203),n(232),r,null,null);t.exports=o.exports},179:function(t,e,n){"use strict";e.__esModule=!0;var r=n(184),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,a){try{var u=e[i](a),c=u.value}catch(t){return void n(t)}if(!u.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},180:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(186),i=r(o),a=n(185),u=r(a),c="function"==typeof u.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":c(t)}},181:function(t,e,n){t.exports=n(80)},182:function(t,e,n){t.exports={default:n(76),__esModule:!0}},183:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){var e=new Date(t);return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}},184:function(t,e,n){t.exports={default:n(77),__esModule:!0}},185:function(t,e,n){t.exports={default:n(78),__esModule:!0}},186:function(t,e,n){t.exports={default:n(79),__esModule:!0}},187:function(t,e,n){"use strict";function r(t,e){return f()(e).forEach(function(n){["number","string"].includes(s()(e[n]))&&(t=t.replace(new RegExp(":"+n,"gi"),""+e[n]))}),t.replace(/\/?:[^\/]+/g,"").replace(/\/+/g,"/").replace(/\/$/,"")}n.d(e,"a",function(){return m});var o=n(181),i=n.n(o),a=n(179),u=n.n(a),c=n(180),s=n.n(c),l=n(182),f=n.n(l),p=this,d="https://znck.me".replace(/\/$/,""),m=function(){var t=u()(i.a.mark(function t(e,n,o){var a,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,o.$axios.get(""+d+r("/_nuxt/api/blog/"+e,n)+".json");case 3:return a=t.sent,t.abrupt("return",a.data);case 5:return t.next=7,o.$axios.get(""+d+r("/api/blog/"+e,n));case 7:return u=t.sent,t.abrupt("return",u.data);case 9:case"end":return t.stop()}},t,p)}));return function(e,n,r){return t.apply(this,arguments)}}()},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(183);e.default={name:"Article",props:{id:{required:!0,type:String},title:{required:!0,type:String},description:{required:!0,type:String},published_at:{required:!0,type:String}},filters:{formatDate:r.a}}},189:function(t,e,n){e=t.exports=n(49)(!0),e.push([t.i,".nuxt-blog-article-preview{margin-bottom:15px}.nuxt-blog-article-preview-meta{font-size:.75rem;opacity:.75}","",{version:3,sources:["/Users/300005163/Workspace/nuxt-community/blog-module/src/app/components/Article.vue"],names:[],mappings:"AACA,2BACE,kBAAoB,CACrB,AACD,gCACE,iBAAkB,AAClB,WAAa,CACd",file:"Article.vue",sourcesContent:["\n.nuxt-blog-article-preview {\n  margin-bottom: 15px;\n}\n.nuxt-blog-article-preview-meta {\n  font-size: .75rem;\n  opacity: .75;\n}\n"],sourceRoot:""}])},190:function(t,e,n){function r(t){n(192)}var o=n(18)(n(188),n(191),r,null,null);t.exports=o.exports},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"nuxt-blog-article-preview"},[n("router-link",{attrs:{to:{name:"@nuxtjs/blog:article",params:{id:t.id}}}},[t._v(t._s(t.title))]),n("div",{staticClass:"nuxt-blog-article-preview-meta"},[n("time",{attrs:{datatime:t.published_at}},[t._v(t._s(t._f("formatDate")(t.published_at)))])]),n("p",[t._v(t._s(t.description))])],1)},staticRenderFns:[]}},192:function(t,e,n){var r=n(189);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(50)("42c12e08",r,!0)},197:function(t,e,n){"use strict";var r=n(181),o=n.n(r),i=n(180),a=n.n(i),u=n(179),c=n.n(u),s=n(183),l=n(187);e.a={name:"CollectionPage",asyncData:function(){function t(t){return e.apply(this,arguments)}var e=c()(o.a.mark(function t(e){var r,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.params,i=e.payload,u=e.app,"object"!==(void 0===i?"undefined":a()(i))||!i){t.next=3;break}return t.abrupt("return",{collection:i});case 3:return t.next=5,n.i(l.a)("/collections/:id",r,u);case 5:return t.t0=t.sent,t.abrupt("return",{collection:t.t0});case 7:case"end":return t.stop()}},t,this)}));return t}(),computed:{articles:function(){return this.collection?this.collection.articles:[]}},filters:{formatDate:s.a}}},203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(197),o=n(190),i=n.n(o);e.default={extends:r.a,components:{ArticlePreview:i.a}}},217:function(t,e,n){e=t.exports=n(49)(!0),e.push([t.i,".collection-links{margin-bottom:-1rem;display:block;text-align:right}.blog-collection-index-meta{opacity:.75;font-size:.75rem}","",{version:3,sources:["/Users/300005163/Workspace/nuxt-community/blog-module/src/app/pages/Collection.vue"],names:[],mappings:"AACA,kBAAkB,oBAAoB,cAAc,gBAAgB,CACnE,AACD,4BAA4B,YAAY,gBAAgB,CACvD",file:"Collection.vue",sourcesContent:["\n.collection-links{margin-bottom:-1rem;display:block;text-align:right\n}\n.blog-collection-index-meta{opacity:.75;font-size:.75rem\n}\n"],sourceRoot:""}])},232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-3"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12 col-lg-8 offset-lg-2"},[n("header",[n("small",{staticClass:"collection-links"},[n("small",{staticClass:"text-uppercase"},[n("nuxt-link",{attrs:{to:{name:"@nuxtjs/blog:index"}}},[t._v("Back to blog")])],1)]),n("h1",{staticClass:"collection-header"},[t._v(t._s(t.collection.name))])]),t._l(t.articles,function(t){return n("ArticlePreview",{key:t.id,attrs:{id:t.id,title:t.title,description:t.description,published_at:t.published_at}})})],2)])])},staticRenderFns:[]}},242:function(t,e,n){var r=n(217);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(50)("74cbf2fe",r,!0)}});