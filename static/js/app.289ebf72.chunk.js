(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(27),i=t.n(o),s=t(9),p=t.n(s),c=t(10),l=t.n(c),u=t(14),m=t.n(u),g=(t(76),t(79),function(e){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d&q="+e+"&image_type=photo&orientation=horizontal"}),d=function(){var e=Object(a.useState)([]),n=l()(e,2),t=n[0],o=n[1],s=Object(a.useState)([]),c=l()(s,2),u=(c[0],c[1],Object(a.useState)("cats")),d=l()(u,2),f=d[0],x=d[1],h=Object(a.useState)(["fruits","animals","planets"]),b=l()(h,2),w=b[0],v=b[1];JSON.parse(localStorage.getItem("pictures"))||localStorage.setItem("pictures",JSON.stringify({})),JSON.parse(localStorage.getItem("tags"))||localStorage.setItem("tags",JSON.stringify(["fruits","animals","planets"]));var S=function(e){var n,t,a,r;return p.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(n=JSON.parse(localStorage.getItem("pictures")),Array.isArray(n[e])&&n[e].length){i.next=13;break}return i.next=4,p.a.awrap(m.a.get(g(e)));case 4:t=i.sent,a=t.data.hits,r=[],a.forEach((function(e){r.push({image:e.webformatURL,tags:e.tags})})),n[e]=r,localStorage.setItem("pictures",JSON.stringify(n)),o(r),i.next=14;break;case 13:o(n[e]);case 14:case"end":return i.stop()}}))};return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n,t=(n=f,w.filter((function(e){return e!==n})));t.unshift(f),v(t),S(f)},className:"Search-form"},r.a.createElement("input",{name:"searchQuery",type:"text",className:"Search-input",placeholder:"Search for pictures",autoComplete:"off",onChange:function(e){x(e.target.value.toLowerCase())},onFocus:function(e){return e.target.select()},value:f}),r.a.createElement("button",{className:"Search-button"},"Search")),r.a.createElement("div",{className:"App-tags"},0!==w.length&&r.a.createElement("div",{className:"App-tags-label"},"Tags"),w.map((function(e){return r.a.createElement("div",{className:"App-tags-item "+(e===f&&"selected"),key:e,onClick:function(){x(e),S(e)}},e)}))),r.a.createElement("div",{className:"App-picture-items-holder"},0!==t.length&&r.a.createElement("div",{className:"App-picture-items"},t.map((function(e,n){return r.a.createElement("div",{className:"App-picture-item",key:e.image},!e.showImage&&r.a.createElement("img",{src:e.image,alt:e.tags,className:"App-picture-item-image"}),e.showImage&&r.a.createElement("h2",{className:"App-picture-item-title"},e.tags),e.showImage&&r.a.createElement("div",null,r.a.createElement("button",{name:n,type:"submit",className:"Search-button",onClick:function(){return function(e){var n=i()(t);n[e].showImage=!n[e].showImage,o(n)}(n)}},e.showImage?"Hide":"Show"," Image")))})))))};n.a=d},49:function(e,n,t){t(50),e.exports=t(97)},50:function(e,n){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},76:function(e,n,t){var a=t(77);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(25)(a,r);a.locals&&(e.exports=a.locals)},77:function(e,n,t){(e.exports=t(24)(!1)).push([e.i,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n',""])},79:function(e,n,t){var a=t(80);"string"===typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(25)(a,r);a.locals&&(e.exports=a.locals)},80:function(e,n,t){(e.exports=t(24)(!1)).push([e.i,".App {\n  padding: 18px 0;\n}\n\n.App-logo {\n  height: 160px;\n}\n\n.App-picture-items {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n}\n\n.App-tags {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  margin: 5px 0;\n}\n\n.App-tags-label {\n  margin: 4px 6px 8px 6px;\n  background-color: #eeeeee;\n  padding: 8px 15px;\n  border-radius: 10px;\n  font-weight: bold;\n}\n\n.App-tags-item {\n  margin: 4px 6px 8px 6px;\n  background-color: #eeeeee;\n  padding: 8px 15px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.App-tags-item:hover, .App-tags-item.selected {\n  background-color: #ddd;\n}\n\n.App-picture-item {\n  max-width: 400px;\n  margin: 5px 5px;\n}\n\n.App-picture-item-title {\n  font-size: 18px;\n  line-height: 18px;\n}\n\n.App-picture-item-subtitle {\n  font-size: 20px;\n}\n\n.App-picture-item-image {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.Search-form {\n  text-align: center;\n}\n\n.Search-input {\n  font-size: 18px;\n  padding: 8px;\n  background-color: #F9F9F9;\n  border: 1px solid #DDD;\n  border-radius: 4px;\n  width: 200px;\n  max-width: calc(100% - 88px);\n  outline: none;\n  margin: 0 10px 10px 0;\n}\n\n.Search-button {\n  font-size: 16px;\n  padding: 8px 12px;\n  background-color: #209b2c;\n  color: white;\n  border: 1px solid #DDD;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n  font-weight: bold;\n  margin-bottom: 10px;\n}",""])}},[[49,1,2]]]);
//# sourceMappingURL=../../308556dc6cbdb0ef334e.map