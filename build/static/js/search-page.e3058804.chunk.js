(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{37:function(t,e,c){"use strict";var n=c(40),a=c.n(n),r=c(41),i=c(42),o=c.n(i),s="https://api.themoviedb.org/3/",l="4e3ee43a33940cdc2c536aa8c24e20b3";function u(){return(u=Object(r.a)(a.a.mark((function t(e){var c,n,r,i,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=u.length>1&&void 0!==u[1]?u[1]:null,n=u.length>2&&void 0!==u[2]?u[2]:null,r={trends:"".concat(s,"trending/all/day?api_key=").concat(l),search:"".concat(s,"search/movie?api_key=").concat(l,"&query=").concat(n,"&page=1"),filmInfo:"".concat(s,"movie/").concat(c,"?api_key=").concat(l),actors:"".concat(s,"movie/").concat(c,"/credits?api_key=").concat(l),reviews:"".concat(s,"movie/").concat(c,"/reviews?api_key=").concat(l),similar:"".concat(s,"movie/").concat(c,"/similar?api_key=").concat(l)},t.next=5,o()(r[e]);case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},38:function(t,e,c){"use strict";c(0);var n=c(8),a=c(1);e.a=function(t){return Object(a.jsx)("ul",{className:"listBox",children:t.movies.map((function(e){var c=e.id,r=e.title,i=e.name,o=e.poster_path,s=o?"https://image.tmdb.org/t/p/w200".concat(o):"https://abletrektours.com/wp-content/uploads/2020/01/Scandinavian-Mystery-e1578001346789.png";return Object(a.jsx)("li",{className:"listItem",children:Object(a.jsxs)(n.b,{to:{pathname:"/movies/".concat(c),state:{from:t.location}},children:[Object(a.jsx)("img",{src:s,alt:r||i}),Object(a.jsx)("p",{children:r||i})]})},c)}))})}},71:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var n=c(39),a=c(0),r=c(37),i=c(38),o=(c(71),c(1));e.default=function(t){var e=Object(a.useState)(t.location.search.split("=")[1]),c=Object(n.a)(e,2),s=c[0],l=c[1],u=Object(a.useState)([]),h=Object(n.a)(u,2),p=h[0],m=h[1],j=function(){Object(r.a)("search",null,s).then((function(t){return m(t.data.results)}))};return Object(a.useEffect)((function(){""!==t.location.search&&j()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m([]),t.history.push("".concat(t.match.url,"?query=").concat(s)),j()},children:[Object(o.jsxs)("label",{className:"form",children:["Enter the part of film title:",Object(o.jsx)("input",{type:"text",onChange:function(t){return l(t.target.value)}})]}),Object(o.jsx)("button",{type:"submit",children:"Search film!"})]}),""!==t.location.search&&Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)("h2",{className:"title",children:"Here's your search results:"}),Object(o.jsx)(i.a,{movies:p,location:t.location})]})]})}}}]);
//# sourceMappingURL=search-page.e3058804.chunk.js.map