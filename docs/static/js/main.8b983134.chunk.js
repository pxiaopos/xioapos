(window.webpackJsonpxiaopos=window.webpackJsonpxiaopos||[]).push([[0],{39:function(e,t,r){e.exports=r(54)},4:function(e,t,r){e.exports={menuContainer:"Order_menuContainer__1q_zS",container:"Order_container__eKvd1",sum:"Order_sum__1k3kh",item:"Order_item__3HHoQ",box:"Order_box__3F8p9",btn:"Order_btn__3vqfM"}},49:function(e,t,r){},54:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"add",function(){return g});var a={};r.r(a),r.d(a,"load",function(){return w});var c={};r.r(c),r.d(c,"add",function(){return U}),r.d(c,"load",function(){return W});var o=r(0),i=r.n(o),u=r(22),l=r(9),s=r(17),m=(r(49),r(13)),p=r(14),d=r(18),f=r(15),b=r(19),O=r(11),h=r(24),y=r(26),v=r.n(y),j=r(5),E={item:{add:"ADD_ITEM"},history:{load:"LOAD_HISTORY",update:"UPDATE_HISTORY"}},g=function(e){return{type:E.item.add,payload:e}},w=function(){return{type:E.history.load}},_={item:n,history:a},k=r(4),P=r.n(k),S={list:[{item:"\u6c34\u98df\u852c\u9910\u76d2\uff08\u7d20\uff09",price:65},{item:"\u59d1\u59d1\u9bae\u852c\u9910\uff08\u7d20\uff09",price:80},{item:"\u8ff7\u8fed\u9999\u5ae9\u96de\u80f8",price:90},{item:"\u9ed1\u9ebb\u6cb9\u8c6c\u91cc\u808c",price:90},{item:"\u6e05\u9999\u6ef7\u96de\u817f",price:95},{item:"\u9999\u6ab8\u7f85\u52d2\u96d5",price:100},{item:"\u85e5\u81b3\u71c9\u96de\u817f",price:105},{item:"\u5bb6\u9109\u6ef7\u725b\u8171",price:120},{item:"\u7fa9\u5f0f\u70e4\u96de\u817f\u6392",price:120},{item:"\u8ff7\u8fed\u9999\u96de\u80f8",price:45},{item:"\u9ebb\u6cb9\u8c6c\u91cc\u808c",price:45},{item:"\u6ef7\u96de\u817f",price:45},{item:"\u9999\u6ab8\u7f85\u52d2\u96d5",price:50},{item:"\u85e5\u81b3\u96de\u817f",price:50},{item:"\u6ef7\u725b\u8171",price:60},{item:"\u6c34\u716e\u86cb",price:10},{item:"\u5341\u7a40\u7c73",price:15},{item:"\u852c\u83dc",price:45}]},x=function(){var e=new Date,t=e.getDate(),r=e.getMonth()+1;return e.getFullYear()+"/"+r+"/"+t},D="cache_"+x(),C=function(e,t){return e+t},N=function(e,t,r){var n=Object.assign({},e);return n[t]||(n[t]=0),n[t]=n[t]+r,n},I=function(e){function t(e){var r;if(Object(m.a)(this,t),(r=Object(d.a)(this,Object(f.a)(t).call(this,e))).Count=function(e,t,n){var a=r.state,c=a.counter,o=a.sum,i=0===o,u=n<0,l=-1===t,s=c&&(0===c[e]||void 0===c[e]);i&&u||l&&s||r.setState({counter:N(c,e,t),sum:C(o,n)})},r.state={counter:{},sum:0},localStorage.hasOwnProperty(D)){var n=localStorage.getItem(D);r.state=JSON.parse(n)}return r.Count=r.Count.bind(Object(h.a)(r)),r}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state!==t&&localStorage.setItem(D,JSON.stringify(this.state))}},{key:"render",value:function(){var e=this,t=this.state,r=t.counter,n=t.sum;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(l.b,{to:"/order"},"Order "),i.a.createElement(l.b,{to:"/history"},"History")),i.a.createElement("div",{className:P.a.container},i.a.createElement("p",null,x()," ",i.a.createElement("span",{className:P.a.sum},"\u7e3d\u91d1\u984d: ",n," \u5143"))),i.a.createElement("div",{className:P.a.menuContainer},S.list.map(function(t,n){return i.a.createElement("div",{key:n},i.a.createElement("div",{className:P.a.container},i.a.createElement("p",{className:v()(P.a.box,P.a.item)},t.item),i.a.createElement("p",{className:P.a.box},t.price),i.a.createElement("p",{className:P.a.box},"\u76ee\u524d\u6578\u91cf ",r[n]||0)),i.a.createElement("div",{className:P.a.container,key:n},i.a.createElement("p",{className:v()(P.a.box,P.a.btn),onClick:function(r){e.Count(n,-1,-t.price)}},"-"),i.a.createElement("p",{className:v()(P.a.box,P.a.btn),onClick:function(r){e.Count(n,1,t.price)}},"+")))})))}}]),t}(o.PureComponent),H=Object(j.d)(Object(s.b)(function(e){return{item:e.item}},function(e){return{add:function(t){return e(_.item.add(t))}}}))(I),z=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var e=this.props.history;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.b,{to:"/order"},"Order "),i.a.createElement(l.b,{to:"/history"},"History"),i.a.createElement("p",null,"size: ",e.size),i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u65e5\u671f"),S.list.map(function(e,t){return i.a.createElement("th",{key:t},e.item)}),i.a.createElement("th",null,"\u7e3d\u91d1\u984d"))),i.a.createElement("tbody",null,e.data.map(function(e,t){return i.a.createElement("tr",{key:e.date},i.a.createElement("th",null,e.date.substring(6)),S.list.map(function(t,r){return i.a.createElement("th",{key:e.date+"_"+r},e.list.counter[r]?e.list.counter[r]:0)}),i.a.createElement("th",null,e.list.sum))}))))}}]),t}(o.Component),J=Object(j.d)(Object(s.b)(function(e){return{history:e.history}},function(e){return{load:function(){return e(_.history.load())}}}))(z),B=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.match.path===this.props.location.pathname;return i.a.createElement(O.d,null,e&&i.a.createElement(O.a,{from:"/",to:"/order"}),i.a.createElement(O.b,{path:"/order",render:function(e){return i.a.createElement(H,e)}}),i.a.createElement(O.b,{path:"/history",render:function(e){return i.a.createElement(J,e)}}))}}]),t}(o.Component),M=Object(O.g)(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=r(38),A=r(12),F=r.n(A),K=r(21),Y=r(25),q=(r(52),function(e){var t,r=[];for(t in localStorage)if(localStorage.hasOwnProperty(t)&&(t.match(e)||!e&&"string"===typeof t)){var n=JSON.parse(localStorage.getItem(t));r.push({date:t,list:n})}return r}),R=function(){var e="";for(var t in window.localStorage)window.localStorage.hasOwnProperty(t)&&(e+=window.localStorage[t]);return e?3+16*e.length/8192+" KB":"Empty (0 KB)"},U=function(e){console.log("payload",e)},W=function(){return{data:q("cache_*"),size:R()}};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var Q=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(r,!0).forEach(function(t){Object(Y.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},c),$=F.a.mark(X),G=F.a.mark(Z),V=F.a.mark(ee);function X(e){return F.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.add(e);case 2:case"end":return t.stop()}},$)}function Z(e){var t;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.load();case 2:return t=e.sent,e.next=5,Object(K.b)({type:E.history.update,res:t});case 5:case"end":return e.stop()}},G)}function ee(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([Object(K.c)(E.item.add,X),Object(K.c)(E.history.load,Z)]);case 2:case"end":return e.stop()}},V)}var te=r(32),re={h:"abc"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.item.increase:case E.item.decrease:return Object(te.assign)({},e,{});default:return e}};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(r,!0).forEach(function(t){Object(Y.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var oe={data:[],size:""},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.history.update:return ce({},e,{},t.res);default:return e}},ue=Object(j.c)({item:ne,history:ie}),le=Object(T.a)(),se=Object(j.e)(ue,Object(j.a)(le));le.run(ee);var me=se;Object(u.render)(i.a.createElement(l.a,null,i.a.createElement(s.a,{store:me},i.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.8b983134.chunk.js.map