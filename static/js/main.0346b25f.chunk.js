(this.webpackJsonpapoa=this.webpackJsonpapoa||[]).push([[0],{24:function(e,t,n){e.exports=n(45)},35:function(e,t,n){var a={"./1.jpg":36,"./2.jpg":37,"./3.jpg":38,"./4.jpg":39,"./5.jpg":40,"./6.jpg":41,"./7.jpg":42,"./8.jpg":43,"./9.jpg":44};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=35},36:function(e,t,n){e.exports=n.p+"static/media/1.60ffa4eb.jpg"},37:function(e,t,n){e.exports=n.p+"static/media/2.49eb3d81.jpg"},38:function(e,t,n){e.exports=n.p+"static/media/3.bead5267.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/4.5e757486.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/5.dfc7aef5.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/6.af315670.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/7.bc938d00.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/8.e7b5597d.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/9.1b673bff.jpg"},45:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),i=n(14),u=n(2),f=n(3),l=n(5),b=n(10),p=1,d=2,j=3,O=4;function s(){var e=Object(l.a)(["\n    background-color: ",";\n    color: white;\n    &:hover {\n      background: ",";\n    }\n  "]);return s=function(){return e},e}function g(){var e=Object(l.a)(["\n  display: inline-block;\n  padding: 18px 15px;\n  color: black;\n  text-align: center;\n  text-decoration: none;\n  ","\n"]);return g=function(){return e},e}function m(){var e=Object(l.a)(["\n  float: left;\n"]);return m=function(){return e},e}var h=f.c.li(m()),v=Object(f.c)(i.b)(g(),(function(e){return"true"===e.isselected&&Object(f.b)(s(),(function(e){return e.theme.colours.action500}),(function(e){return e.theme.colours.action600}))})),E=function(e){var t=e.children,n=e.className,a=e.isSelected,r=e.setHover,o=void 0===r?function(){}:r,i=e.url;return c.a.createElement(h,{className:n,isSelected:a,onClick:function(){},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},c.a.createElement(v,{isselected:"".concat(a),to:i},t))};function x(){var e=Object(l.a)(["\n\tfloat: right;\n  font-size: 18px;\n  font-weight: bold;\n  a {\n    padding: 11px 14px;\n    border: 2px solid transparent;\n    color: red;\n    text-decoration: none;\n    &:hover {\n      border: 2px solid ",";\n    }\n  }\n"]);return x=function(){return e},e}function w(){var e=Object(l.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 9px;\n  overflow: hidden;\n  background-color: #FFF;\n  font-size: 12px;\n"]);return w=function(){return e},e}var k=f.c.ul(w()),N=Object(f.c)(E)(x(),(function(e){return e.theme.colours.action600})),y=function(e){var t=e.pageName,n=Object(a.useState)(t),r=Object(b.a)(n,2),o=r[0],i=r[1],u=function(e,n){i(e?n:t)};return c.a.createElement(k,null,c.a.createElement(E,{isSelected:o===p,setHover:function(e){return u(e,p)},url:"/apoa-app"},"Home"),c.a.createElement(E,{isSelected:o===d,setHover:function(e){return u(e,d)},url:"/apoa-app/projects"},"Projects"),c.a.createElement(E,{isSelected:o===j,setHover:function(e){return u(e,j)},url:"/apoa-app/new"},"New"),c.a.createElement(N,{url:"/apoa-app/about"},"Apoa Falby Clark"))};function S(){var e=Object(l.a)(["\n    position: relative;\n    flex: 1;    \n    max-width: 90vw;\n    width: 100%;\n    margin: auto;\n    padding: 0 20px;\n"]);return S=function(){return e},e}function A(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n"]);return A=function(){return e},e}var H=f.c.div(A()),I=f.c.div(S()),L=function(e){var t=e.children,n=e.pageName;return c.a.createElement(H,null,c.a.createElement(y,{pageName:n}),c.a.createElement(I,null,t))},P=function(){return c.a.createElement(L,{pageName:O},"About")},_=function(){return c.a.createElement(L,{pageName:p},"Home")},D=function(){return c.a.createElement(L,{pageName:j},"New")};function T(){var e=Object(l.a)(["\n    visibility: hidden;\n    height: 100%;\n    z-index: -1;\n"]);return T=function(){return e},e}function M(){var e=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: grid;\n    height: ",";\n    max-width: ",";\n    margin: auto;\n    padding: 10px 0 20px;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-gap: 10px;\n"]);return M=function(){return e},e}var R=f.c.div(M(),(function(e){return e.height?"".concat(e.height,"px"):"100%"}),(function(e){return e.height?"".concat(1.5*e.height,"px"):"90vw"})),W=f.c.div(T()),C=function(e){var t=e.children,n=e.className,r=e.fillMaxHeight,o=Object(a.useRef)(null),i=Object(a.useState)(),u=Object(b.a)(i,2),f=u[0],l=u[1];return Object(a.useEffect)((function(){var e=function(){o.current&&(l(0),l(o.current.offsetHeight))};return r&&(e(),window.addEventListener("resize",e)),function(){return window.removeEventListener("resize",e)}}),[r]),c.a.createElement(c.a.Fragment,null,r&&c.a.createElement(W,{ref:o}),c.a.createElement(R,{className:n,height:f},t))};function F(){var e=Object(l.a)(["\n    font-size: 14px;\n    font-weight: bold;\n    text-align: center;\n    color: white;\n"]);return F=function(){return e},e}function G(){var e=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 12px 9px;\n    background: rgba(0, 0, 0, 0.6);\n    background: rgba(0, 0, 0, 0.6);\n"]);return G=function(){return e},e}function z(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n"]);return z=function(){return e},e}function U(){var e=Object(l.a)(["\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n"]);return U=function(){return e},e}var Y,B,J=f.c.div(U()),V=f.c.img(z()),Q=f.c.div(G()),$=f.c.div(F()),q=function(e){var t=e.imageUrl,n=e.text,r=Object(a.useState)(!1),o=Object(b.a)(r,2),i=o[0],u=o[1];return c.a.createElement(J,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)}},c.a.createElement(V,{src:t}),i&&c.a.createElement(Q,null,c.a.createElement($,null,n)))},K=n(1),X={LADIES_POND:1,PLAYA_PLAYA:2,CHRISTINE:3,CARNIVAL:4,THE_GUEST:5,HIGH_WINDOWS:6,POWER_OF_PRINT:7,BLOODY_MESS:8,DRAWINGS:9},Z=(Y={},Object(K.a)(Y,X.LADIES_POND,"Ladies' Pond"),Object(K.a)(Y,X.PLAYA_PLAYA,"Playa Playa"),Object(K.a)(Y,X.CHRISTINE,"Christine & The Queens"),Object(K.a)(Y,X.CARNIVAL,"Carnival"),Object(K.a)(Y,X.THE_GUEST,"The Guest Animation"),Object(K.a)(Y,X.HIGH_WINDOWS,"High Windows Graphic Novel"),Object(K.a)(Y,X.POWER_OF_PRINT,"The Power of Print"),Object(K.a)(Y,X.BLOODY_MESS,"A Bloody Mess"),Object(K.a)(Y,X.DRAWINGS,"Sketchbook"),Y),ee=function(){return c.a.createElement(L,{pageName:d},c.a.createElement(C,{fillMaxHeight:!0},Object.values(X).map((function(e){return c.a.createElement(q,{imageUrl:n(35)("./".concat(e,".jpg")),text:Z[e],key:e})}))))},te=(B={pink100:"#880e4f",pink200:"#ad1457",pink300:"#c2185b",pink400:"#d81b60",pink500:"#e91e63",pink600:"#ec407a"},Object(K.a)(B,"pink600","#f94d87"),Object(K.a)(B,"pink700","#f06292"),Object(K.a)(B,"pink700","#ff6297"),Object(K.a)(B,"pink700","#ff69a1"),Object(K.a)(B,"pink800","#f48fb1"),Object(K.a)(B,"pink900","#f8bbd0"),Object(K.a)(B,"pink1000","#fce4ec"),Object(K.a)(B,"red100","#b71c1c"),Object(K.a)(B,"red200","#c62828"),Object(K.a)(B,"red300","#d32f2f"),Object(K.a)(B,"red400","#e53935"),Object(K.a)(B,"red500","#f44336"),Object(K.a)(B,"red600","#ef5350"),Object(K.a)(B,"red600","#ff5757"),Object(K.a)(B,"red700","#e57373"),Object(K.a)(B,"red700","#ff6c6c"),Object(K.a)(B,"red800","#ef9a9a"),Object(K.a)(B,"red900","#ffcdd2"),Object(K.a)(B,"red1000","#ffebee"),Object(K.a)(B,"orange100","#e65100"),Object(K.a)(B,"orange200","#ef6c00"),Object(K.a)(B,"orange300","#f57c00"),Object(K.a)(B,"orange400","#fb8c00"),Object(K.a)(B,"orange500","#ff9800"),Object(K.a)(B,"orange600","#ffa726"),Object(K.a)(B,"orange700","#ffb74d"),Object(K.a)(B,"orange800","#ffcc80"),Object(K.a)(B,"orange900","#ffe0b2"),Object(K.a)(B,"orange1000","#fff3e0"),Object(K.a)(B,"yellow100","#f57f17"),Object(K.a)(B,"yellow200","#f9a825"),Object(K.a)(B,"yellow300","#fbc02d"),Object(K.a)(B,"yellow400","#fdd835"),Object(K.a)(B,"yellow500","#ffeb3b"),Object(K.a)(B,"yellow600","#ffee58"),Object(K.a)(B,"yellow700","#fff176"),Object(K.a)(B,"yellow800","#fff59d"),Object(K.a)(B,"yellow900","#fff9c4"),Object(K.a)(B,"yellow1000","#fffde7"),Object(K.a)(B,"green100","#1b5e20"),Object(K.a)(B,"green200","#2e7d32"),Object(K.a)(B,"green300","#388e3c"),Object(K.a)(B,"green400","#43a047"),Object(K.a)(B,"green500","#4caf50"),Object(K.a)(B,"green600","#66bb6a"),Object(K.a)(B,"green700","#81c784"),Object(K.a)(B,"green800","#a5d6a7"),Object(K.a)(B,"green900","#c8e6c9"),Object(K.a)(B,"green1000","#e8f5e9"),Object(K.a)(B,"blue100","#0d47a1"),Object(K.a)(B,"blue200","#1565c0"),Object(K.a)(B,"blue300","#1976d2"),Object(K.a)(B,"blue400","#1e88e5"),Object(K.a)(B,"blue500","#2196f3"),Object(K.a)(B,"blue600","#42a5f5"),Object(K.a)(B,"blue700","#64b5f6"),Object(K.a)(B,"blue800","#90caf9"),Object(K.a)(B,"blue900","#bbdefb"),Object(K.a)(B,"blue1000","#e3f2fd"),Object(K.a)(B,"purple100","#4a148c"),Object(K.a)(B,"purple200","#6a1b9a"),Object(K.a)(B,"purple300","#7b1fa2"),Object(K.a)(B,"purple400","#8e24aa"),Object(K.a)(B,"purple500","#9c27b0"),Object(K.a)(B,"purple600","#ab47bc"),Object(K.a)(B,"purple700","#ba68c8"),Object(K.a)(B,"purple800","#ce93d8"),Object(K.a)(B,"purple900","#e1bee7"),Object(K.a)(B,"purple1000","#f3e5f5"),B),ne={colours:{action100:te.red100,action200:te.red200,action300:te.red300,action400:te.red400,action500:te.red500,action600:te.red600,action700:te.red700,action800:te.red800,action900:te.red900,action1000:te.red1000}},ae=function(){return c.a.createElement(f.a,{theme:ne},c.a.createElement(u.a,{exact:!0,path:"/apoa-app",component:_}),c.a.createElement(u.a,{exact:!0,path:"/apoa-app/projects",component:ee}),c.a.createElement(u.a,{exact:!0,path:"/apoa-app/new",component:D}),c.a.createElement(u.a,{exact:!0,path:"/apoa-app/about",component:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0346b25f.chunk.js.map