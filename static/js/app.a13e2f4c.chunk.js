(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,n,t){var a=t(116);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(33)(a,r);a.locals&&(e.exports=a.locals)},116:function(e,n,t){(e.exports=t(32)(!1)).push([e.i,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer */\n  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */\n  -webkit-user-select: none; /* Chrome, Safari, and Opera */\n  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/\n  user-select: none;\n\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}',""])},118:function(e,n,t){var a=t(119);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(33)(a,r);a.locals&&(e.exports=a.locals)},119:function(e,n,t){(e.exports=t(32)(!1)).push([e.i,".App {\n  padding: 20px 5px;\n  height: 100%;\n}\n\n.App-logo {\n  height: 160px;\n}\n\n.Search-form {\n  display: flex;\n  justify-content: center;\n}\n\n.Search-input {\n  font-size: 18px;\n  padding: 8px;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 260px;\n  max-width: calc(100% - 60px);\n  outline: none;\n  margin: 0 10px 10px 0;\n}\n\n.Search-button {\n  padding: 2px 8px;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n  margin-bottom: 10px;\n  background-color: #eee;\n  border: 1px solid #ccc;\n}\n\n.Search-button:focus {\n  outline: none!important;\n}\n\n.Search-button:hover {\n  background-color: #ccc;\n}\n\n.Search-button img {\n  height: 20px;\n}\n\n.App-tags {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  margin: 5px auto;\n  max-width: 800px;\n}\n\n.App-tags-item {\n  margin: 4px 6px 8px 6px;\n  background-color: #eee;\n  padding: 7px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n}\n\n.App-tags-label {\n  margin: 4px 6px 8px 6px;\n  background-color: #eee;\n  padding: 5px 6px 0;\n  border-radius: 10px;\n  font-weight: bold;\n}\n\n.App-tags-label img {\n  width: 23px;\n}\n\n.App-tags-item:hover, .App-tags-item.selected {\n  background-color: #ccc;\n}\n\n.App-message {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  margin: 25px 0 0;\n  color: red;\n}\n\n.App-picture-items-holder {\n  text-align: center;\n}\n\n.App-picture-items {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  padding-bottom: 40px;\n}\n\n.App-picture-item {\n  max-width: 480px;\n  margin: 20px -5px 50px;\n}\n\n.App-picture-item-title {\n  font-size: 18px;\n  line-height: 18px;\n}\n\n.App-picture-item-subtitle {\n  font-size: 20px;\n}\n\n.App-picture-item-image {\n  width: 100%;\n  border-radius: 10px;\n}\n\n@media only screen and (min-width: 500px) {\n  .App-picture-item {\n    margin: 30px 15px 10px;\n  }\n}\n\n.App-footer {\n  text-align: center;\n  background-color: #ececec;\n  padding: 12px 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  line-height: 20px;\n}\n\n.App-settings {\n  bottom: 44px;\n  opacity: 0.8;\n}\n\n.App-footer-label {\n  padding: 0 6px;\n}\n\n.App-footer-item {\n  margin: 0 3px;\n  border-left: 1px solid #6b6b6b;\n  padding: 0 6px;\n  color: black;\n  text-decoration: none;\n}\n\n.App-footer-item:first-child {\n  border-left: none\n}\n\n.App-footer-item:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.loader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  background-color: white;\n  height: 100%;\n  opacity: 0.8;\n  z-index: 1;\n  padding-bottom: 100px;\n}\n\n.react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}",""])},120:function(e,n,t){e.exports=t.p+"static/media/home.1bb81d2b.svg"},39:function(e,n,t){e.exports=t.p+"static/media/search.98ad6261.svg"},60:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(35),i=t.n(o),c=t(19),s=t.n(c),p=t(36),l=t.n(p),m=t(11),g=t.n(m),d=t(7),u=t.n(d),f=t(5),b=t(18),x=t(22),h=t.n(x),w=t(37),y=t.n(w),S=t(38),v={app:{paddingTop:20,paddingBottom:30,height:"100%",backgroundColor:"#000000"}},A=(t(115),t(118),t(120),t(39)),I=t.n(A);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(t,!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(e){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d&q="+e+"&image_type=photo&orientation=horizontal"},E=function(){var e=Object(a.useRef)(null);JSON.parse(localStorage.getItem("pictures"))||localStorage.setItem("pictures",JSON.stringify({})),JSON.parse(localStorage.getItem("tags"))||localStorage.setItem("tags",JSON.stringify(["animals","fruits","planets"]));var n=JSON.parse(localStorage.getItem("tags")),t=Object(a.useState)([]),o=u()(t,2),c=o[0],p=o[1],l=Object(a.useState)([]),m=u()(l,2),d=(m[0],m[1],Object(a.useState)("")),x=u()(d,2),w=x[0],A=x[1],k=Object(a.useState)(n),E=u()(k,2),z=E[0],j=E[1],C=Object(a.useState)(0),D=u()(C,2),M=D[0],P=D[1],F=Object(a.useState)("light"),H=u()(F,2),J=H[0],B=H[1],Z=Object(a.useState)(null),L=u()(Z,2),T=L[0],W=L[1],R=Object(a.useState)(!1),G=u()(R,2),Q=G[0],U=G[1],Y=v;"light"===J&&(Y=g()({},v,{app:N({},v.app,{backgroundColor:"#FFFFFF"})}));var K=f.a.create(Y),_=function(e){var n,t,a,r;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(W(null),n=JSON.parse(localStorage.getItem("pictures")),Array.isArray(n[e])&&n[e].length&&!(Math.round((new Date).getTime()/1e3)-n[e+"_lastUpdate"]>86400)){o.next=12;break}return U(!0),o.next=6,s.a.awrap(h.a.get(O(e)));case 6:t=o.sent,(a=t.data.hits).length?(r=[],a.forEach((function(e){r.push({image:e.webformatURL,tags:e.tags})})),n[e]=r,n[e+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),localStorage.setItem("pictures",JSON.stringify(n)),p(r),q(e)):(setTimeout((function(){W("Couldn't find any results ")}),500),p([])),setTimeout((function(){U(!1)}),500),o.next=14;break;case 12:p(n[e]),-1===z.indexOf(e)&&q(e);case 14:case"end":return o.stop()}}))},q=function(e){""!==e&&-1===z.indexOf(e)&&(z.unshift(e),j(z),localStorage.setItem("tags",JSON.stringify(z)))},X=function(){P(M+1)};return r.a.createElement(b.a,{style:K.app},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),_(w)},className:"Search-form"},r.a.createElement("input",{ref:e,name:"searchQuery",type:"text",className:"Search-input",placeholder:"Search for pictures",autoComplete:"off",onChange:function(e){A(e.target.value.toLowerCase())},onFocus:function(e){return e.target.select()},value:w}),r.a.createElement("button",{className:"Search-button"},r.a.createElement("img",{src:I.a,alt:"Homepage"}))),r.a.createElement("div",{className:"App-tags"},!1,z.map((function(e){return r.a.createElement("div",{className:"App-tags-item "+(e===w&&"selected"),key:e,onClick:function(){A(e),_(e)}},e)}))),T&&r.a.createElement("div",{className:"App-message"},T),Q&&r.a.createElement("div",{className:"loader"},r.a.createElement(y.a,{type:"BallTriangle",color:"#333",height:100,width:100,timeout:5e5})),r.a.createElement("div",{className:"App-picture-items-holder"},!Q&&0!==c.length&&r.a.createElement("div",{className:"App-picture-items"},c.map((function(e,n){return r.a.createElement("div",{className:"App-picture-item",key:e.image},!e.showImage&&r.a.createElement(S.ResizableBox,{width:480,draggableOpts:{},minConstraints:[100,100],maxConstraints:[640,640]},r.a.createElement("img",{src:e.image,alt:e.tags,className:"App-picture-item-image"})),e.showImage&&r.a.createElement("h2",{className:"App-picture-item-title"},e.tags),e.showImage&&r.a.createElement("div",null,r.a.createElement("button",{name:n,type:"submit",className:"Search-button",onClick:function(){return function(e){var n=i()(c);n[e].showImage=!n[e].showImage,p(n)}(n)}},e.showImage?"Hide":"Show"," Image")))})))),r.a.createElement("div",{className:"App-footer"},M<=4&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App-footer-label",onClick:function(){return X()}},"Media Player for Kids"),r.a.createElement("span",{className:"App-footer-item",onClick:function(){return B("dark"===J?"light":"dark")}},"dark"===J?"Light":"Dark"," Mode")),!1,4===M&&r.a.createElement("span",{className:"App-footer-item",onClick:function(){return X()}},"Settings"),M>4&&r.a.createElement("span",{className:"App-footer-item",onClick:function(){return P(0)}},"Back"),M>4&&r.a.createElement("span",{className:"App-footer-item",onClick:function(){localStorage.setItem("tags",JSON.stringify([])),j([])}},"Clear tags"),M>4&&r.a.createElement("span",{className:"App-footer-item",onClick:function(){p([]),localStorage.setItem("pictures",JSON.stringify({}))}},"Clear cache")))};n.a=E},61:function(e,n,t){t(62),e.exports=t(132)},62:function(e,n){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[61,1,2]]]);
//# sourceMappingURL=../../625aa5b95f5279dc3ca8.map