(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){var r=n(130);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(132)(r,o);r.locals&&(e.exports=r.locals)},130:function(e,t,n){(e.exports=n(131)(!1)).push([e.i,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-select: none;\n  -webkit-touch-callout: none;\n  user-select: none;\n  outline: none;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbutton {\n  background: none;\n  border: none;\n  font-size: 16px;\n}\n\n/*\n.App-logo {\n  height: 160px;\n}\n\n.Search-button {\n  padding: 2px 8px;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n  margin-bottom: 10px;\n  background-color: #eee;\n  border: 1px solid #ccc;\n}\n\n.Search-button:focus {\n  outline: none!important;\n}\n\n.Search-button:hover {\n  background-color: #ccc;\n}\n\n.Search-button img {\n  height: 20px;\n}\n\n.App-tags-item {\n  margin: 5px;\n  background-color: #eee;\n  padding: 7px 14px;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  font-size: 15px;\n}\n\n.App-tags-label {\n  margin: 4px 4px 6px 4px;\n  background-color: #eee;\n  padding: 5px 6px 0;\n  border-radius: 10px;\n  font-weight: bold;\n}\n\n.App-tags-label img {\n  width: 23px;\n}\n\n.App-tags-item:hover, .App-tags-item.selected {\n  background-color: #ccc;\n}\n\n.App-message {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n  margin: 25px 0 0;\n  color: red;\n}\n\n.App-picture-items {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  text-align: center;\n}\n\n.App-picture-item {\n  margin: 4% 0 10%;\n  position: relative;\n}\n*/\n\n.App-picture-item-tags button:hover {\n  background-color: #222;\n  cursor: pointer;\n}\n\n.App-picture-item-image {\n  width: 100%;\n  border-radius: 10px;\n  display: block;\n}\n\n.App-picture-item-info {\n  width: 100%;\n  position: absolute;\n  bottom: 3%;\n  padding: 10px;\n}\n\n@media only screen and (max-width: 640px) {\n  .App-picture-item-image {\n    border-radius: 0;\n  }\n\n  .App-picture-item-tags button {\n    font-size: 16px;\n    margin: 0 3px;\n    padding: 6px 10px;\n  }\n}\n\n.App-picture-resizable {\n  overflow: hidden;\n}\n\n.App-footer.dark {\n  background-color: #000;\n}\n\n.App-footer.dark button {\n  color: white;\n  background-color: transparent;\n}\n\n.App-settings {\n  bottom: 44px;\n  opacity: 0.8;\n}\n\n.App-footer-label {\n  padding: 0 6px;\n}\n\n/*\n.App-footer {\n  text-align: center;\n  background-color: #ececec;\n  padding: 10px 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  line-height: 14px;\n}\n\n.App-footer-item {\n  margin: 0 4px;\n  border-left: 1px solid #6b6b6b;\n  padding: 0 6px 0 8px;\n  color: black;\n  text-decoration: none;\n}\n\n.App-footer-item:first-child {\n  border-left: none\n}\n\n.App-footer-item:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.loader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  position: absolute;\n  top:0;\n  width: 100%;\n  background-color: #000;\n  height: 100%;\n  opacity: 0.45;\n  z-index: 1;\n  padding-bottom: 100px;\n}\n*/\n',""])},77:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(41),i=n.n(a),c=n(42),l=n.n(c),s=n(43),p=n.n(s),u=n(14),d=n.n(u),g=n(8),m=n(10),f=n(78),b=n(12),h=n(55),y=n.n(h),x=n(56),w=n.n(x),S=n(57),k=function(e){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d\n&q="+e+"&image_type=photo&orientation=horizontal&per_page=100"},E=["animals","fruits","planets"],I={imageWidth:640,theme:"light"},O=localStorage.getItem("tags")?JSON.parse(localStorage.getItem("tags")||""):E,A=localStorage.getItem("settings")?JSON.parse(localStorage.getItem("settings")||""):I,v={app:{paddingTop:15,paddingBottom:30,height:"100%",backgroundColor:"#000000"},button:{backgroundColor:"#eee",padding:6,paddingLeft:10,paddingRight:10,borderRadius:5,borderColor:"#ddd",borderWidth:1,width:"fit-content"},searchForm:{justifyContent:"center",flexDirection:"row"},searchButtonView:{height:40,marginLeft:12,marginTop:3},searchButton:{height:48,padding:4,fontSize:18,borderRadius:7},searchInput:{fontSize:16,padding:8,backgroundColor:"#eee",borderColor:"#ddd",borderWidth:1,borderRadius:5,width:260,height:40},tags:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginTop:15,marginBottom:15,marginLeft:"auto",marginRight:"auto",maxWidth:800},tag:{margin:5,backgroundColor:"#eee",padding:5,paddingLeft:11,paddingRight:11,borderRadius:5,borderColor:"#ddd",borderWidth:1},message:{flexWrap:"wrap",justifyContent:"center",marginTop:25,color:"red",fontSize:16,alignSelf:"center"},loader:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",top:0,width:"100%",backgroundColor:"#000",height:"100%",opacity:.6,zIndex:1,paddingBottom:100},AppFooter:{backgroundColor:"#ececec",padding:"10 0",position:"absolute",width:"100%",bottom:0,left:0,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap"},AppFooterItem:{margin:"0 5",borderColor:"#999999",padding:5,paddingLeft:10,paddingRight:10},pictureHolder:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center"},picture:{marginTop:"4%",marginBottom:"10%",position:"relative"},pictureInfo:{position:"absolute",bottom:"3%",padding:10,flexDirection:"row",alignSelf:"center"}};n(129);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){localStorage.getItem("pictures")||localStorage.setItem("pictures",JSON.stringify({})),localStorage.getItem("tags")||localStorage.setItem("tags",JSON.stringify(E)),localStorage.getItem("settings")||localStorage.setItem("settings",JSON.stringify(I));var e=Object(r.useState)([]),t=d()(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=d()(c,2),u=s[0],h=s[1],x=Object(r.useState)(O),C=d()(x,2),F=C[0],L=C[1],P=Object(r.useState)(0),D=d()(P,2),W=D[0],z=D[1],R=Object(r.useState)(A),N=d()(R,2),J=N[0],T=N[1],B=Object(r.useState)(null),M=d()(B,2),U=M[0],_=M[1],H=Object(r.useState)(!1),V=d()(H,2),q=V[0],G=V[1],K=Object(r.useState)(10),Q=d()(K,2),X=Q[0],Y=Q[1],Z=v,$=J.theme,ee=J.imageWidth;"light"===$&&(Z=j({},v,{app:j({},v.app,{backgroundColor:"#FFFFFF"})}));var te=function(e){""!==e&&-1===F.indexOf(e)&&(F.unshift(e),L(F),localStorage.setItem("tags",JSON.stringify(F)))},ne=function(e){var t,n,r,o,i;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(t=e.trim(),_(null),Y(10),n=JSON.parse(localStorage.getItem("pictures")||""),Array.isArray(n[t])&&n[t].length&&!(Math.round((new Date).getTime()/1e3)-n[t+"_lastUpdate"]>43200)){c.next=14;break}return G(!0),c.next=8,l.a.awrap(y.a.get(k(t)));case 8:r=c.sent,(o=r.data.hits).length?(i=[],o.forEach((function(e){i.push({image:e.webformatURL,tags:e.tags,isDeleted:!1,showInfo:!1})})),n[t]=i,n[t+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),localStorage.setItem("pictures",JSON.stringify(n)),a(i),te(t)):(setTimeout((function(){_("Couldn't find any results ")}),500),a([])),setTimeout((function(){G(!1)}),500),c.next=16;break;case 14:a(n[t]),-1===F.indexOf(t)&&te(t);case 16:case"end":return c.stop()}}))},re=function(){z(W+1)},oe=function(e,t){var n=j({},J,p()({},e,t));T(n),localStorage.setItem("settings",JSON.stringify(n))},ae=n.filter((function(e){return!e.isDeleted})).slice(0,X);return o.a.createElement(g.a,{style:Z.app},o.a.createElement(g.a,{style:Z.searchForm},o.a.createElement(f.a,{style:Z.searchInput,value:u,onChangeText:function(e){return function(e){h(e.toLowerCase())}(e)},onSubmitEditing:function(){ne(u)},placeholder:"cats, planets, fruits,...",selectTextOnFocus:!0})),o.a.createElement(g.a,{style:Z.tags},F.map((function(e){return o.a.createElement(b.a,{key:e,style:Z.tag,onPress:function(){h(e),ne(e)}},o.a.createElement(m.a,null,e))}))),U&&o.a.createElement(m.a,{style:Z.message},U),q&&o.a.createElement(g.a,{style:Z.loader},o.a.createElement(w.a,{type:"BallTriangle",color:"#FFF",height:100,width:100,timeout:5e5})),!q&&0!==n.length&&o.a.createElement(g.a,{style:Z.pictureHolder},o.a.createElement(S.Resizable,{size:{width:ee,height:"auto"},className:"App-picture-resizable",enable:{top:!1,right:window.innerWidth>ee,bottom:!1,left:window.innerWidth>ee,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,t,n,r){oe("imageWidth",(parseInt(String(ee))+parseInt(String(r.width))).toString())}},ae.map((function(e,t){return o.a.createElement(g.a,{style:Z.picture,key:e.image},o.a.createElement("img",{src:e.image,alt:e.tags,className:"App-picture-item-image",onClick:function(){return function(e){var t=i()(n);t[e].showInfo=!t[e].showInfo,a(t)}(t)}}),e.showInfo?o.a.createElement(g.a,{style:Z.pictureInfo},o.a.createElement(b.a,{underlayColor:"#cccccc",style:j({},Z.button,{marginLeft:2,marginRight:2}),onPress:function(){return function(e,t){var r=i()(n);r[e].isDeleted=!0,a(r);var o=JSON.parse(localStorage.getItem("pictures")||"");o[t]=r,o[t+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),localStorage.setItem("pictures",JSON.stringify(o))}(t,u)}},o.a.createElement(m.a,null,"x")),e.tags.split(",").map((function(e){return o.a.createElement(b.a,{key:e,style:j({},Z.button,{marginLeft:2,marginRight:2}),underlayColor:"#cccccc",onPress:function(){h(e),ne(e)}},o.a.createElement(m.a,null,e))}))):null)})),o.a.createElement(b.a,{style:j({},Z.button,{marginBottom:50,marginLeft:"auto",marginRight:"auto"}),underlayColor:"#cccccc",onPress:function(){return Y(X+10)}},o.a.createElement(m.a,null,"Load More")))),o.a.createElement(g.a,{style:Z.AppFooter},W<4&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{style:Z.AppFooterItem,underlayColor:"#ccc",onPress:function(){re()}},o.a.createElement(m.a,null,"Media Viewer")),o.a.createElement(b.a,{style:j({},Z.AppFooterItem,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){oe("theme","dark"===$?"light":"dark")}},o.a.createElement(m.a,null,"dark"===$?"Light":"Dark"," Mode"))),W>20&&o.a.createElement(b.a,{style:Z.AppFooterItem,onPress:function(){return re()},underlayColor:"#ccc"},o.a.createElement(m.a,null,"Language (English)")),4===W&&o.a.createElement(b.a,{style:Z.AppFooterItem,onPress:function(){return re()},underlayColor:"#ccc"},o.a.createElement(m.a,null,"Settings")),W>4&&o.a.createElement(b.a,{style:Z.AppFooterItem,onPress:function(){return z(0)},underlayColor:"#ccc"},o.a.createElement(m.a,null,"Back")),W>4&&o.a.createElement(b.a,{style:j({},Z.AppFooterItem,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){localStorage.setItem("tags",JSON.stringify([])),L([])}},o.a.createElement(m.a,null,"Clear tags")),W>4&&o.a.createElement(b.a,{style:j({},Z.AppFooterItem,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){a([]),localStorage.setItem("pictures",JSON.stringify({}))}},o.a.createElement(m.a,null,"Clear cache"))))};t.a=F},79:function(e,t,n){n(80),e.exports=n(151)},80:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[79,1,2]]]);
//# sourceMappingURL=../../9ae4e2266745ceee7092.map