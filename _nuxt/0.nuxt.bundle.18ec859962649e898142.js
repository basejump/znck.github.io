webpackJsonp([0],{172:function(t,e,i){function n(t){i(237)}var r=i(18)(i(201),i(225),n,null,null);t.exports=r.exports},179:function(t,e,i){"use strict";e.__esModule=!0;var n=i(184),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new r.default(function(t,i){function n(a,o){try{var l=e[a](o),s=l.value}catch(t){return void i(t)}if(!l.done)return r.default.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}},180:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=i(186),a=n(r),o=i(185),l=n(o),s="function"==typeof l.default&&"symbol"==typeof a.default?function(t){return typeof t}:function(t){return t&&"function"==typeof l.default&&t.constructor===l.default&&t!==l.default.prototype?"symbol":typeof t};e.default="function"==typeof l.default&&"symbol"===s(a.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof l.default&&t.constructor===l.default&&t!==l.default.prototype?"symbol":void 0===t?"undefined":s(t)}},181:function(t,e,i){t.exports=i(80)},182:function(t,e,i){t.exports={default:i(76),__esModule:!0}},183:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(t){var e=new Date(t);return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}},184:function(t,e,i){t.exports={default:i(77),__esModule:!0}},185:function(t,e,i){t.exports={default:i(78),__esModule:!0}},186:function(t,e,i){t.exports={default:i(79),__esModule:!0}},187:function(t,e,i){"use strict";function n(t,e){return d()(e).forEach(function(i){["number","string"].includes(c()(e[i]))&&(t=t.replace(new RegExp(":"+i,"gi"),""+e[i]))}),t.replace(/\/?:[^\/]+/g,"").replace(/\/+/g,"/").replace(/\/$/,"")}i.d(e,"a",function(){return f});var r=i(181),a=i.n(r),o=i(179),l=i.n(o),s=i(180),c=i.n(s),u=i(182),d=i.n(u),p=this,A="https://znck.me".replace(/\/$/,""),f=function(){var t=l()(a.a.mark(function t(e,i,r){var o,l;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r.$axios.get(""+A+n("/_nuxt/api/blog/"+e,i)+".json");case 3:return o=t.sent,t.abrupt("return",o.data);case 5:return t.next=7,r.$axios.get(""+A+n("/api/blog/"+e,i));case 7:return l=t.sent,t.abrupt("return",l.data);case 9:case"end":return t.stop()}},t,p)}));return function(e,i,n){return t.apply(this,arguments)}}()},193:function(t,e,i){t.exports={default:i(81),__esModule:!0}},194:function(t,e,i){"use strict";e.__esModule=!0;var n=i(193),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}},195:function(t,e,i){"use strict";var n=i(194),r=i.n(n),a=i(182),o=i.n(a),l=i(193),s=i.n(l),c=i(181),u=i.n(c),d=i(180),p=i.n(d),A=i(179),f=i.n(A),g=i(183),m=i(187);e.a={name:"Article",asyncData:function(){function t(t){return e.apply(this,arguments)}var e=f()(u.a.mark(function t(e){var n,r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.params,r=e.payload,a=e.app,"object"!==(void 0===r?"undefined":p()(r))||!r){t.next=3;break}return t.abrupt("return",{article:r});case 3:return t.next=5,i.i(m.a)("/posts/:id",n,a);case 5:return t.t0=t.sent,t.abrupt("return",{article:t.t0});case 7:case"end":return t.stop()}},t,this)}));return t}(),head:function(){if(!this.article)return{title:"404. Not Found"};var t=[{hid:"description",name:"description",content:this.article.description},{hid:"keywords",name:"keywords",content:this.article.keywords.join(", ")}],e=[];this.article.highlightedLanguages.length&&e.push({rel:"stylesheet",href:"//unpkg.com/prismjs/themes/prism"+(this.article.attributes.highlight?"-"+this.article.attributes.highlight:"")+".css"});var i=s()({card:"summary",title:this.article.title,description:this.article.description,image:this.article.photo,url:this.$route.path},this.article.attributes.twitter||{},{}),n=o()(i).map(function(t){return"image"===t?{name:"twitter:"+t,content:i[t]}:{hid:"twitter:"+t,name:"twitter:"+t,content:i[t]}}),r=s()({type:"article",title:this.article.title,description:this.article.description,image:this.article.photo,url:this.$route.path},this.article.attributes.og||{},{}),a=o()(r).map(function(t){return{hid:"og:"+t,name:"og:"+t,content:r[t]}}),l=s()(this.article.attributes.fb||{},{}),c=o()(l).map(function(t){return{hid:"fb:"+t,name:"fb:"+t,content:l[t]}});return{title:this.article.attributes.title,meta:[].concat(t,n,a,c),link:e}},filters:{formatDate:g.a},computed:{disqus:function(){var t={url:"https://znck.me",shortname:"rahulkadyan",api_key:void 0,sso_config:JSON.parse("{}")},e=this.article;return r()({},t,{identifier:e.id,title:e.title,url:""+(t.url||"").replace(/\/$/,"")+this.$route.path})},comments:function(){return"comments"in this.article.attributes&&this.article.attributes.comments}}}},199:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Collection",props:{id:{type:String,required:!0},name:{type:String,required:!0}}}},200:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tag",props:{id:{type:String,required:!0},name:{type:String,required:!0}}}},201:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(195),r=i(220),a=i.n(r),o=i(219),l=i.n(o),s=i(223),c=i.n(s);e.default={extends:n.a,components:{CollectionPreview:l.a,DisqusComments:c.a,TagPreview:a.a}}},208:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1}},mounted:function(){if(window.DISQUS)return void this.reset(window.DISQUS);this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){this.page.identifier=e.identifier||e.$route.path||window.location.pathname,this.page.url=e.url||e.$el.baseURI,e.title&&(this.page.title=e.title),e.remote_auth_s3&&(this.page.remote_auth_s3=e.remote_auth_s3),e.key&&(this.page.api_key=e.key),e.sso_config&&(this.sso=e.sso_config)}})},init:function(){var t=this,e=this;window.disqus_config=function(){this.page.identifier=e.identifier||e.$route.path||window.location.pathname,this.page.url=e.url||e.$el.baseURI,e.title&&(this.page.title=e.title),e.remote_auth_s3&&(this.page.remote_auth_s3=e.remote_auth_s3),e.api_key&&(this.page.api_key=e.api_key),e.sso_config&&(this.sso=e.sso_config)},setTimeout(function(){var e=document,i=e.createElement("script");i.type="text/javascript",i.async=!0,i.setAttribute("id","embed-disqus"),i.setAttribute("data-timestamp",+new Date),i.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(i)},0)}}}},212:function(t,e,i){e=t.exports=i(49)(!0),e.push([t.i,'.blog-article{font-size:1.2rem;line-height:1.618;text-rendering:optimizeLegibility}.blog-article p{color:#2b2b2b}.blog-article p:not(.skip){font-family:inherit}.blog-article blockquote{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:.5em 10px;quotes:"\\201C" "\\201D" "\\2018" "\\2019"}.blog-article blockquote>*{opacity:.75}.blog-article-banner{overflow:hidden}.blog-article-links{display:-webkit-box;display:-ms-flexbox;display:flex}.blog-article-links>*{-webkit-box-flex:1;-ms-flex:1;flex:1}.blog-article-meta{font-size:.75rem;opacity:.9;padding-left:1px}.blog-article-next{padding:3em 1em;text-align:center;background-color:#fff;background-position:50%;background-size:cover;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;min-height:320px}.blog-article-next:after{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.75)}.blog-article-next .title{position:relative;font-size:2.5rem;z-index:2}.blog-article-next a{color:#fff}.blog-article-next small{display:block;text-align:left;font-size:.8rem;letter-spacing:3px;text-transform:uppercase;color:#ff574a}.blog-article-container .collection-list .active:before{margin-left:-1rem;margin-right:.4rem;content:"\\25E6"}.blog-article-comments{margin-top:2rem}.blog-article-tags-wrapper{display:inline-block}.blog-article-banner{width:100%;max-height:50vh}.blog-article-banner img{width:100%}',"",{version:3,sources:["/Users/300005163/Workspace/nuxt-community/blog-module/src/app/pages/Article.vue"],names:[],mappings:"AACA,cAAc,iBAAiB,kBAAkB,iCAAiC,CACjF,AACD,gBAAgB,aAAa,CAC5B,AACD,2BAA2B,mBAAmB,CAC7C,AACD,yBAAyB,mBAAmB,4BAA4B,kBAAkB,kBAAmB,sCAAsB,CAClI,AACD,2BAA2B,WAAY,CACtC,AACD,qBAAgC,eAAe,CAC9C,AAGD,oBAAoB,oBAAoB,oBAAoB,YAAY,CACvE,AACD,sBAAsB,mBAAmB,WAAW,MAAM,CACzD,AACD,mBAAmB,iBAAiB,WAAW,gBAAgB,CAC9D,AACD,mBAAmB,gBAAgB,kBAAkB,sBAAuB,wBAA2B,sBAAsB,oBAAoB,oBAAoB,aAAa,yBAAyB,sBAAsB,mBAAmB,wBAAwB,qBAAqB,uBAAuB,kBAAkB,gBAAgB,CACzV,AACD,yBAAyB,WAAW,cAAc,kBAAkB,MAAM,OAAO,QAAQ,SAAS,0BAA2B,CAC5H,AACD,0BAA0B,kBAAkB,iBAAiB,SAAS,CACrE,AACD,qBAAqB,UAAW,CAC/B,AACD,yBAAyB,cAAc,gBAAgB,gBAAgB,mBAAmB,yBAAyB,aAAa,CAC/H,AACD,wDAAwD,kBAAkB,mBAAoB,eAAW,CACxG,AACD,uBAAuB,eAAe,CACrC,AACD,2BAA2B,oBAAoB,CAC9C,AACD,qBAAqB,WAAW,eAAe,CAC9C,AACD,yBAAyB,UAAU,CAClC",file:"Article.vue",sourcesContent:['\n.blog-article{font-size:1.2rem;line-height:1.618;text-rendering:optimizeLegibility\n}\n.blog-article p{color:#2b2b2b\n}\n.blog-article p:not(.skip){font-family:inherit\n}\n.blog-article blockquote{background:#f9f9f9;border-left:10px solid #ccc;margin:1.5em 10px;padding:0.5em 10px;quotes:"“" "”" "‘" "’"\n}\n.blog-article blockquote>*{opacity:0.75\n}\n.blog-article-banner{width:100%;overflow:hidden\n}\n.blog-article-banner img{width:100%\n}\n.blog-article-links{display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.blog-article-links>*{-webkit-box-flex:1;-ms-flex:1;flex:1\n}\n.blog-article-meta{font-size:.75rem;opacity:.9;padding-left:1px\n}\n.blog-article-next{padding:3em 1em;text-align:center;background-color:white;background-position:center;background-size:cover;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;min-height:320px\n}\n.blog-article-next:after{content:\'\';display:block;position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.75)\n}\n.blog-article-next .title{position:relative;font-size:2.5rem;z-index:2\n}\n.blog-article-next a{color:white\n}\n.blog-article-next small{display:block;text-align:left;font-size:.8rem;letter-spacing:3px;text-transform:uppercase;color:#ff574a\n}\n.blog-article-container .collection-list .active:before{margin-left:-1rem;margin-right:0.4rem;content:"◦"\n}\n.blog-article-comments{margin-top:2rem\n}\n.blog-article-tags-wrapper{display:inline-block\n}\n.blog-article-banner{width:100%;max-height:50vh\n}\n.blog-article-banner img{width:100%\n}\n'],sourceRoot:""}])},218:function(t,e,i){e=t.exports=i(49)(!0),e.push([t.i,".tag[data-v-ce13bc40]{display:inline-block;margin:0 2px;padding:0 4px;border-radius:4px;text-decoration:none!important;white-space:nowrap;color:#fff;background:#999}.tag[data-v-ce13bc40]:focus,.tag[data-v-ce13bc40]:hover{color:#efefef}","",{version:3,sources:["/Users/300005163/Workspace/nuxt-community/blog-module/src/app/components/Tag.vue"],names:[],mappings:"AACA,sBAAsB,qBAAqB,aAAa,cAAc,kBAAkB,+BAAgC,mBAAmB,WAAW,eAAe,CACpK,AACD,wDAAwD,aAAa,CACpE",file:"Tag.vue",sourcesContent:["\n.tag[data-v-ce13bc40]{display:inline-block;margin:0 2px;padding:0 4px;border-radius:4px;text-decoration:none !important;white-space:nowrap;color:#fff;background:#999\n}\n.tag[data-v-ce13bc40]:hover,.tag[data-v-ce13bc40]:focus{color:#efefef\n}\n"],sourceRoot:""}])},219:function(t,e,i){var n=i(18)(i(199),i(234),null,null,null);t.exports=n.exports},220:function(t,e,i){function n(t){i(243)}var r=i(18)(i(200),i(235),n,"data-v-ce13bc40",null);t.exports=r.exports},223:function(t,e,i){var n=i(18)(i(208),i(228),null,null,null);t.exports=n.exports},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.article?i("article",{staticClass:"blog-article-container"},[t.article.photo?i("div",{staticClass:"blog-article-banner"},[i("img",{attrs:{src:t.article.photo}})]):t._e(),i("div",{staticClass:"container mt-3"},[i("div",{staticClass:"row"},[i("article",{staticClass:"blog-article col-xs-12 col-lg-8 offset-lg-2"},[i("small",{staticClass:"blog-article-links"},[i("small",{staticClass:"text-uppercase"},[i("nuxt-link",{attrs:{to:{name:"@nuxtjs/blog:index"}}},[t._v("Back to blog")])],1),t.article.attributes.medium?i("small",{staticClass:"medium text-uppercase text-right"},[i("a",{attrs:{href:t.article.attributes.medium,target:"_blank",rel:"noreferrer noopener"}},[t._v("Read on Medium")])]):t._e()]),i("h1",{staticClass:"blog-article-title"},[t._v(t._s(t.article.title))]),i("div",{staticClass:"blog-article-meta"},[t.article.attributes.collection?[i("CollectionPreview",{attrs:{id:t.article.attributes.collection.id,name:t.article.attributes.collection.name}}),i("span",[t._v(" | ")])]:t._e(),i("time",{attrs:{datatime:t.article.attributes.date}},[t._v("Published on "+t._s(t._f("formatDate")(t.article.attributes.date))+" ")]),t.article.updated_at&&t.article.published_at!==t.article.updated_at?i("time",{attrs:{datatime:t.article.updated_at}},[t._v("| Last updated on "+t._s(t._f("formatDate")(t.article.updated_at))+"\n          ")]):t._e(),t.article.attributes.tags?i("div",{staticClass:"blog-article-tags-wrapper d-inline"},t._l(t.article.attributes.tags,function(t){return i("TagPreview",{key:t,attrs:{id:t.id,name:t.name}})})):t._e()],2),i("div",{staticClass:"blog-article-content",domProps:{innerHTML:t._s(t.article.rendered.replace(/<h1[^>]*>([^<]*)<\/h1>/i,""))}})]),!0===t.comments&&t.disqus?i("div",{staticClass:"col-xs-12 col-lg-8 offset-lg-2 blog-article-comments"},[i("DisqusComments",t._b({},"DisqusComments",t.disqus))],1):t._e()])]),t.article.next?i("div",{staticClass:"blog-article-next mt-3",style:{"background-image":t.article.next.photo?"url("+t.article.next.photo+")":"rgba(255, 255, 255, 0)"}},[i("div",{staticClass:"title"},[i("small",[t._v("Up next")]),i("router-link",{attrs:{to:t.article.next.id}},[t._v(t._s(t.article.next.title))])],1)]):t._e()]):i("div",[t._v("\n  Loading....\n")])},staticRenderFns:[]}},228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[]}},234:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{attrs:{to:{name:"@nuxtjs/blog:collection",params:{id:t.id}},title:"This article is part of '"+t.name+"' collection."}},[t._v(t._s(t.name))])},staticRenderFns:[]}},235:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{staticClass:"tag",class:["tag-"+t.id],attrs:{to:{name:"@nuxtjs/blog:tag",params:{id:t.id}}}},[t._v(t._s(t.name))])},staticRenderFns:[]}},237:function(t,e,i){var n=i(212);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(50)("cabdf12c",n,!0)},243:function(t,e,i){var n=i(218);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(50)("29464cda",n,!0)}});