(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[14],{1283:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(99),c=a(17),s=a(1),i=a(896),o=a(880),l=a(812),u=a(1288),f=a(828),b=a(5),p=a(8),d=a(47),j=a(15),m=a(11),O=a.n(m),v=a(107),x=a(65),h=a(72),g=a(46),y=a(853),E=a(883),N=s.createContext("default"),w=function(e){var t=e.children,a=e.size;return s.createElement(N.Consumer,null,(function(e){return s.createElement(N.Provider,{value:a||e},t)}))},C=N,P=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},S=function(e,t){var a,r,n=s.useContext(C),c=s.useState(1),i=Object(j.a)(c,2),o=i[0],l=i[1],u=s.useState(!1),f=Object(j.a)(u,2),m=f[0],N=f[1],w=s.useState(!0),S=Object(j.a)(w,2),k=S[0],z=S[1],_=s.useRef(),D=s.useRef(),L=Object(x.a)(t,_),M=s.useContext(h.b).getPrefixCls,A=function(){if(D.current&&_.current){var t=D.current.offsetWidth,a=_.current.offsetWidth;if(0!==t&&0!==a){var r=e.gap,n=void 0===r?4:r;2*n<a&&l(a-2*n<t?(a-2*n)/t:1)}}};s.useEffect((function(){N(!0)}),[]),s.useEffect((function(){z(!0),l(1)}),[e.src]),s.useEffect((function(){A()}),[e.gap]);var R=e.prefixCls,I=e.shape,T=e.size,H=e.src,W=e.srcSet,F=e.icon,J=e.className,V=e.alt,B=e.draggable,G=e.children,K=P(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),U="default"===T?n:T,X=Object(E.a)(),q=s.useMemo((function(){if("object"!==Object(d.a)(U))return{};var e=y.b.find((function(e){return X[e]})),t=U[e];return t?{width:t,height:t,lineHeight:"".concat(t,"px"),fontSize:F?t/2:18}:{}}),[X,U]);Object(g.a)(!("string"===typeof F&&F.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(F,"` at https://ant.design/components/icon"));var Q,Y=M("avatar",R),Z=O()((a={},Object(p.a)(a,"".concat(Y,"-lg"),"large"===U),Object(p.a)(a,"".concat(Y,"-sm"),"small"===U),a)),$=s.isValidElement(H),ee=O()(Y,Z,(r={},Object(p.a)(r,"".concat(Y,"-").concat(I),!!I),Object(p.a)(r,"".concat(Y,"-image"),$||H&&k),Object(p.a)(r,"".concat(Y,"-icon"),!!F),r),J),te="number"===typeof U?{width:U,height:U,lineHeight:"".concat(U,"px"),fontSize:F?U/2:18}:{};if("string"===typeof H&&k)Q=s.createElement("img",{src:H,draggable:B,srcSet:W,onError:function(){var t=e.onError;!1!==(t?t():void 0)&&z(!1)},alt:V});else if($)Q=H;else if(F)Q=F;else if(m||1!==o){var ae="scale(".concat(o,") translateX(-50%)"),re={msTransform:ae,WebkitTransform:ae,transform:ae},ne="number"===typeof U?{lineHeight:"".concat(U,"px")}:{};Q=s.createElement(v.a,{onResize:A},s.createElement("span",{className:"".concat(Y,"-string"),ref:function(e){D.current=e},style:Object(b.a)(Object(b.a)({},ne),re)},G))}else Q=s.createElement("span",{className:"".concat(Y,"-string"),style:{opacity:0},ref:function(e){D.current=e}},G);return delete K.onError,delete K.gap,s.createElement("span",Object(b.a)({},K,{style:Object(b.a)(Object(b.a)(Object(b.a)({},te),q),K.style),className:ee,ref:L}),Q)},k=s.forwardRef(S);k.displayName="Avatar",k.defaultProps={shape:"circle",size:"default"};var z=k,_=a(63),D=a(37),L=a(152),M=function(e){return e?"function"===typeof e?e():e:null},A=a(83),R=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},I=s.forwardRef((function(e,t){var a=e.prefixCls,r=e.title,n=e.content,c=R(e,["prefixCls","title","content"]),i=s.useContext(h.b).getPrefixCls,o=i("popover",a),l=i();return s.createElement(L.a,Object(b.a)({},c,{prefixCls:o,ref:t,overlay:function(e){return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:"".concat(e,"-title")},M(r)),s.createElement("div",{className:"".concat(e,"-inner-content")},M(n)))}(o),transitionName:Object(A.b)(l,"zoom-big",c.transitionName)}))}));I.displayName="Popover",I.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var T=I,H=function(e){var t=s.useContext(h.b),a=t.getPrefixCls,r=t.direction,n=e.prefixCls,c=e.className,i=void 0===c?"":c,o=e.maxCount,l=e.maxStyle,u=e.size,f=a("avatar-group",n),b=O()(f,Object(p.a)({},"".concat(f,"-rtl"),"rtl"===r),i),d=e.children,j=e.maxPopoverPlacement,m=void 0===j?"top":j,v=Object(_.a)(d).map((function(e,t){return Object(D.a)(e,{key:"avatar-key-".concat(t)})})),x=v.length;if(o&&o<x){var g=v.slice(0,o),y=v.slice(o,x);return g.push(s.createElement(T,{key:"avatar-popover-key",content:y,trigger:"hover",placement:m,overlayClassName:"".concat(f,"-popover")},s.createElement(z,{style:l},"+".concat(x-o)))),s.createElement(w,{size:u},s.createElement("div",{className:b,style:e.style},g))}return s.createElement(w,{size:u},s.createElement("div",{className:b,style:e.style},v))},W=z;W.Group=H;var F=W,J=a(90),V=a(858),B=a.n(V),G=a(12),K=a(7),U=a.n(K),X=a(45),q=a(451),Q=a(25),Y=a(141);var Z=a(50),$=a(19),ee=a(285),te=a(206),ae=a(410),re=a(30),ne=a(303),ce=a.n(ne),se=a(2);t.default=function(){var e=Object(s.useState)(+new Date),t=Object(c.a)(e,2),a=t[0],b=t[1],p=function(e){var t=Object(Q.c)();return Object(q.a)(Object(X.a)(U.a.mark((function a(){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Y.a.pool.getLeaderboard(t,e));case 1:case"end":return a.stop()}}),a)}))),[e])}(a),d=p.loading,j=p.value,m=Object(ee.a)(),O=Object(Q.c)(),v=Object(te.a)(),x=Object(ae.a)(),h=Object(s.useMemo)((function(){return[].concat(Object(n.a)(x||[]),Object(n.a)(v||[]))}),[v,x]),g=(j&&j.docs&&Array.isArray(j.docs)?j.docs:[]).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{pool_detail:Object(G.f)(e.pool_detail)})})).filter((function(e){return h.indexOf(e.pool_address)<0})),y=Object(G.v)(+new Date(2021,6,25),+new Date),E=function(e){return+new Date-7*Number(e)*24*60*60*1e3};return Object(s.useEffect)((function(){ce.a.send({hitType:"pageview",page:"/#/leaderboard/",page_title:"Leaderboards",title:"Leaderboards"})}),[]),Object(se.jsx)("div",{className:"py-6 container",children:Object(se.jsxs)(i.a,{children:[Object(se.jsx)(o.a,{defaultActiveKey:"0",onChange:function(e){b(E(e))},children:B()(y).map((function(e){var t=new Date(E(e)),a=Object(G.r)(t),r=Object(c.a)(a,2),n=r[0],s=r[1];return Object(se.jsx)(o.a.TabPane,{tab:"Week ".concat(s,"/").concat(n)},e)}))}),Object(se.jsx)(l.a,{spinning:d,children:Object(se.jsx)(u.b,{itemLayout:"horizontal",dataSource:g,renderItem:function(e,t){return Object(se.jsxs)(u.b.Item,{children:[Object(se.jsx)("div",{className:"mr-4",children:Object(se.jsx)(f.a.Title,{level:4,children:t+1})}),Object(se.jsx)(u.b.Item.Meta,{avatar:Object(se.jsx)(F,{size:{xs:24,sm:32,md:36,lg:44,xl:44,xxl:44},src:e.pool_detail.logoUrl}),title:Object(se.jsxs)("div",{children:[Object(se.jsx)("span",{children:e.token_name}),Object(se.jsx)("span",{className:"ml-2 is-size-7",children:e.token_symbol})]}),description:Object(se.jsxs)("div",{className:"flex items-center",children:[Object(se.jsxs)("p",{children:[Object(se.jsx)("span",{children:"Hardcap: "}),Object(se.jsxs)("a",{children:[Object(G.i)(e.hard_cap,m.decimals||0)," ",m.symbol]})]}),Object(se.jsx)("p",{children:"\xa0\u2013\xa0"}),Object(se.jsxs)("p",{children:[Object(se.jsx)("span",{children:"Listing time: "}),Object(se.jsx)("a",{children:Object(G.k)(Object(G.p)(e.finish_time))})]})]})}),Object(se.jsx)("div",{className:"mr-2",children:Object(se.jsx)("div",{className:"flex-wrapper",children:Object(se.jsx)("div",{className:"single-chart",children:Object(se.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-chart green",children:[Object(se.jsx)("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(se.jsx)("path",{className:"circle",strokeDasharray:"".concat(e.raised_percent,", 100"),d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(se.jsxs)("text",{x:"18",y:"20.35",className:"percentage",children:[e.raised_percent.toString().length>3?e.raised_percent.toFixed(1):e.raised_percent,"%"]})]})})})}),Object(se.jsx)(Z.b,{to:Object(re.a)(Object($.b)($.a.LauchpadDetail).replace(":id",e.pool_address),O),children:Object(se.jsx)(J.a,{type:"primary",size:"middle",children:"View pool"})})]},e.pool_address)}})})]})})}},839:function(e,t,a){var r=a(845),n=a(455),c=a(457),s=a(240);e.exports=function(e,t,a){if(!s(a))return!1;var i=typeof t;return!!("number"==i?n(a)&&c(t,a.length):"string"==i&&t in a)&&r(a[t],e)}},842:function(e,t,a){var r=a(458),n=1/0;e.exports=function(e){return e?(e=r(e))===n||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}},845:function(e,t){e.exports=function(e,t){return e===t||e!==e&&t!==t}},858:function(e,t,a){var r=a(867)();e.exports=r},867:function(e,t,a){var r=a(868),n=a(839),c=a(842);e.exports=function(e){return function(t,a,s){return s&&"number"!=typeof s&&n(t,a,s)&&(a=s=void 0),t=c(t),void 0===a?(a=t,t=0):a=c(a),s=void 0===s?t<a?1:-1:c(s),r(t,a,s,e)}}},868:function(e,t){var a=Math.ceil,r=Math.max;e.exports=function(e,t,n,c){for(var s=-1,i=r(a((t-e)/(n||1)),0),o=Array(i);i--;)o[c?i:++s]=e,e+=n;return o}}}]);