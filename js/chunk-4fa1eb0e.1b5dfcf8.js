(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fa1eb0e"],{"4bdf":function(t,a,n){"use strict";var i=n("df4d"),s=n.n(i);s.a},a1d1:function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"about"},[n("img",{attrs:{src:t.imgUrl,alt:""}}),n("h3",[t._v(t._s(t.title))])]),n("p",[t._v(t._s(t.summary))])])},s=[],e=(n("f386"),n("cadf"),n("551c"),n("097d"),n("a91b")),u=n.n(e),r={name:"About",data:function(){return{imgUrl:"",title:"",summary:""}},mounted:function(){var t=this,a=this.$route.params.id,n="https://api.douban.com/v2/movie/subject/";u.a.jsonp(n+a).then(function(a){t.imgUrl=a.images.small,t.title=a.title,t.summary=a.summary})}},o=r,c=(n("4bdf"),n("2877")),l=Object(c["a"])(o,i,s,!1,null,"09b45a6b",null);l.options.__file="About.vue";a["default"]=l.exports},df4d:function(t,a,n){}}]);
//# sourceMappingURL=chunk-4fa1eb0e.1b5dfcf8.js.map