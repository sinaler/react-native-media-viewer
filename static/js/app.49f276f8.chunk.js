(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){e.exports=n.p+"static/media/favicon.a48e2f02.png"},134:function(e,t,n){e.exports=n.p+"static/media/pixabay.0722ed81.png"},136:function(e,t,n){e.exports=n.p+"./fonts/UbuntuMono-R.ttf"},88:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(8),i=n.n(o),c=n(0),s=n.n(c),u=n(15),l=n.n(u),f=n(1),d=n(14),p=n(89),g=n(76),m=n(79),h=n(77),b=n(80),y=n(42),w=n(74),O=n.n(w),x=function(e,t){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d\n&q="+e+"&lang="+t+"&image_type=photo&safesearch=true&orientation=horizontal&per_page=50"},E=["animals","fruits","planets"],S={language:"en",resolution:640,suggestions:!1,theme:"light"},j=localStorage,k=function(e,t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(j.setItem(e,t));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),null,null,[[0,5]])},v=function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(j.getItem(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),null,null,[[0,6]])},P=n(75);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t={app:{paddingTop:30,paddingBottom:30,height:"100%",backgroundColor:"#FFF",overflow:"hidden"},button:{backgroundColor:"#EEE",paddingLeft:8,paddingRight:8,borderRadius:4,borderColor:"#DDD",borderWidth:1,margin:3,justifyContent:"center",height:26},buttonText:{fontFamily:"Ubuntu Mono",fontSize:16},searchForm:{justifyContent:"center",flexDirection:"row"},searchButtonView:{height:40,marginLeft:12,marginTop:3},searchButton:{height:48,padding:4,fontSize:18,borderRadius:7},searchInput:{fontSize:18,padding:8,paddingLeft:10,backgroundColor:"#f8f8f8",borderColor:"#ddd",borderWidth:1,borderRadius:5,width:300,height:36,fontFamily:"Ubuntu Mono",color:"#000"},tags:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginTop:15,marginBottom:60,marginLeft:"auto",marginRight:"auto",maxWidth:800,paddingLeft:5,paddingRight:5},message:{flexWrap:"wrap",justifyContent:"center",marginTop:25,color:"red",fontSize:16,alignSelf:"center"},loader:{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",position:"absolute",top:0,width:"100%",backgroundColor:"#FFF",height:"100%",opacity:.6,zIndex:1,paddingBottom:100},footer:{backgroundColor:"#ececec",position:"absolute",width:"100%",bottom:0,left:0,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap"},footerLink:{borderWidth:0,borderColor:"#CCC",padding:5,paddingLeft:10,paddingRight:10,borderRadius:0,margin:0},pictureHolder:{flexDirection:"column",position:"relative",maxWidth:1280,alignSelf:"center"},picture:{marginTop:"5%",marginBottom:"20%"},pictureInfo:{position:"absolute",bottom:"23%",flexDirection:"row",alignSelf:"center"},textHolder:{paddingLeft:10,paddingRight:10,marginTop:"17%",maxWidth:320,alignSelf:"center"},text:{color:"#666",fontSize:14,fontFamily:"Ubuntu Mono"}};return"dark"===e&&(t=C({},t,{app:C({},t.app,{backgroundColor:"#000"}),loader:C({},t.loader,{backgroundColor:"#000"}),searchInput:C({},t.searchInput,{backgroundColor:"#333",borderColor:"#525252",color:"#DDDDDD"}),button:C({},t.button,{backgroundColor:"#333",borderColor:"#525252"}),buttonText:C({},t.buttonText,{color:"#aaaaaa"}),footer:C({},t.footer,{backgroundColor:"#333"}),footerLink:C({},t.footerLink,{borderColor:"#5a5a5a"})})),t};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){var t=Object(c.useContext)(N),n=L(t);return s.a.createElement(P.a,{style:F({},n.button,{},e.addStyles),underlayColor:"dark"===t?"#555":"#ccc",onPress:e.onPress},s.a.createElement(d.a,{style:n.buttonText},e.text))},I=n(45);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=s.a.createContext("light"),U=function(){v("pictures").then((function(e){null===e&&k("pictures",JSON.stringify({})).then()})),v("tags").then((function(e){null===e&&k("tags",JSON.stringify(E)).then()})),v("settings").then((function(e){null===e&&k("settings",JSON.stringify(S)).then()}));var e=Object(c.useState)([]),t=i()(e,2),r=t[0],o=t[1],u=Object(c.useState)(""),w=i()(u,2),j=w[0],P=w[1],D=Object(c.useState)(0),C=i()(D,2),T=C[0],F=C[1],J=Object(c.useState)(null),U=i()(J,2),B=U[0],z=U[1],M=Object(c.useState)(!1),H=i()(M,2),_=H[0],V=H[1],A=Object(c.useState)(!1),q=i()(A,2),G=q[0],K=q[1],Q=Object(c.useState)(10),X=i()(Q,2),Y=X[0],Z=X[1],$=Object(c.useState)(S),ee=i()($,2),te=ee[0],ne=ee[1],re=Object(c.useState)([]),ae=i()(re,2),oe=ae[0],ie=ae[1],ce=y.a.get("window").width,se=te.theme,ue=te.language,le=te.suggestions,fe=te.resolution,de=L(se);Object(c.useEffect)((function(){v("settings").then((function(e){e&&ne(JSON.parse(e))})),v("tags").then((function(e){e&&ie(JSON.parse(e))})),v("pictures").then((function(e){e&&o(JSON.parse(e))}))}),[]);var pe=function(e,t){var n=R({},te,l()({},e,t));ne(n),k("settings",JSON.stringify(n))},ge=function(e){""!==e&&-1===oe.indexOf(e)&&(oe.unshift(e),ie(oe),k("tags",JSON.stringify(oe)))},me=function(e){var t,n,i,c;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.trim(),z(null),Z(10),V(!0),K(!1),pe("suggestions",!1),Array.isArray(r[t])&&r[t].length&&!(Math.round((new Date).getTime()/1e3)-r[t+"_lastUpdate"]>43200)){s.next=14;break}return s.next=9,a.a.awrap(O.a.get(x(t,ue)));case 9:n=s.sent,(i=n.data.hits).length?(ge(t),c=[],i.forEach((function(e){c.push({image:e.webformatURL,imageBig:e.largeImageURL,tags:e.tags,isDeleted:!1})})),r[t]=c,r[t+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),k("pictures",JSON.stringify(r)),o(R({},r))):setTimeout((function(){z("Couldn't find any results ")}),500),s.next=15;break;case 14:-1===oe.indexOf(t)&&ge(t);case 15:setTimeout((function(){V(!1)}),200),setTimeout((function(){K(!0)}),600);case 17:case"end":return s.stop()}}))},he=null,be=function(e){var t=Date.now();he&&t-he<400?function(e){r[j][e].showInfo=!r[j][e].showInfo,o(R({},r))}(e):he=t},ye=r[j]?r[j].slice(0,Y):[],we=[];return ye.forEach((function(e){e.tags&&e.tags.split(",").forEach((function(e){e=e.trim(),-1===we.indexOf(e)&&we.push(e)}))})),s.a.createElement(N.Provider,{value:se},s.a.createElement(f.a,{style:de.app},s.a.createElement(f.a,{style:de.searchForm},s.a.createElement(g.a,{style:de.searchInput,value:j,onChangeText:function(e){return function(e){P(e.toLowerCase())}(e)},onSubmitEditing:function(){me(j)},placeholder:"cats, planets, fruits,...",selectTextOnFocus:!0})),s.a.createElement(f.a,{style:de.tags},s.a.createElement(W,{text:"x",onPress:function(){P("")}}),oe.map((function(e){return s.a.createElement(W,{key:e,text:e,onPress:function(){P(e),me(e)}})}))),B&&s.a.createElement(d.a,{style:de.message},B),_&&s.a.createElement(f.a,{style:de.loader},s.a.createElement(h.a,{size:"large",color:"light"===se?"#0000ff":"#FFFFFF"})),!_&&0!==ye.length&&s.a.createElement(p.a,{style:de.pictureHolder},ye.map((function(e,t){return!e.isDeleted&&s.a.createElement(m.a,{key:e.image,onPress:function(){return be(t)}},s.a.createElement(f.a,{style:de.pictureHolder},s.a.createElement(I.a,{style:de.picture,source:{uri:640===fe?e.image:e.imageBig},width:ce>fe?fe:ce}),e.showInfo&&s.a.createElement(f.a,{style:de.pictureInfo},s.a.createElement(W,{onPress:function(){return function(e){r[j][e].isDeleted=!0,r[j+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),k("pictures",JSON.stringify(r)),o(R({},r))}(t)},text:"x",addStyles:{marginLeft:2,marginRight:2}}),e.tags.split(",").map((function(e){return s.a.createElement(W,{onPress:function(){P(e.trim()),me(e)},text:e,key:e})})))))})),G&&s.a.createElement(f.a,{style:[de.tags,{marginBottom:60}]},s.a.createElement(W,{onPress:function(){return Z(Y+10)},text:"show more pictures"}),s.a.createElement(W,{onPress:function(){return pe("suggestions",!le)},text:"show more tags"})),le&&s.a.createElement(f.a,{style:de.tags},we.map((function(e){return s.a.createElement(W,{key:e,text:e,onPress:function(){P(e),me(e)}})})))),!j&&s.a.createElement(f.a,{style:de.textHolder},s.a.createElement(f.a,null,s.a.createElement(d.a,{style:[de.text,{fontSize:24}]},"mediaViewer")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:[de.text,{marginTop:14}]},"-this app is dedicated to my son")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:de.text},"-made for hobby to learn and teach")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:de.text},"-build with react native & typescript. works on web, android and ios")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:de.text},"-you can change theme, resolution and language in the footer")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:de.text},"-double click on images to show menu items")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:de.text},"-click 5 times on mediaViewer in footer to access settings")),s.a.createElement(f.a,null,s.a.createElement(d.a,{style:[de.text,{marginTop:14}]},"- sercan ;)")),s.a.createElement(f.a,{style:{width:70}},s.a.createElement(I.a,{style:{marginTop:12},source:{uri:n(133)},width:70}),s.a.createElement(I.a,{style:{marginTop:12,marginBottom:12,marginLeft:3},source:{uri:n(134)},width:60,onPress:function(){return b.a.openURL("http://pixabay.com")}}))),T>4&&s.a.createElement(f.a,{style:[de.footer,{bottom:46}]},s.a.createElement(W,{onPress:function(){return F(0)},text:"close",addStyles:de.footerLink}),s.a.createElement(W,{onPress:function(){k("tags",JSON.stringify([])),ie([]),P("")},text:"clear tags",addStyles:R({},de.footerLink,{borderLeftWidth:1})}),s.a.createElement(W,{onPress:function(){o([]),k("pictures",JSON.stringify({}))},text:"clear cache",addStyles:R({},de.footerLink,{borderLeftWidth:1})})),s.a.createElement(f.a,{style:de.footer},s.a.createElement(W,{onPress:function(){F(T+1)},text:"mediaViewer",addStyles:de.footerLink}),s.a.createElement(W,{onPress:function(){return pe("language","en"===ue?"tr":"en")},text:"en"===ue?"english":"turkish",addStyles:R({},de.footerLink,{borderLeftWidth:1})}),s.a.createElement(W,{onPress:function(){return pe("resolution",640===fe?1280:640)},text:640===fe?"640p":"1280p",addStyles:R({},de.footerLink,{borderLeftWidth:1})}),s.a.createElement(W,{onPress:function(){pe("theme","dark"===se?"light":"dark")},text:"dark"===se?"dark":"light",addStyles:R({},de.footerLink,{borderLeftWidth:1})}))))},B=n(81);"web"===n(43).a.OS&&(window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1});t.a=function(){var e=Object(c.useState)(!0),t=i()(e,2),r=t[0],o=t[1];return Object(c.useEffect)((function(){a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(B.a({"Ubuntu Mono":n(136)}));case 2:o(!1);case 3:case"end":return e.stop()}}))}),[]),!r&&s.a.createElement(U,null)}},90:function(e,t,n){n(91),e.exports=n(140)},91:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[90,1,2]]]);
//# sourceMappingURL=../../5430de4f0bb93b0acf22.map