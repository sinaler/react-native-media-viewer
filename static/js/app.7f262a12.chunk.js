(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n.p+"./fonts/UbuntuMono-R.ttf"},87:function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(9),i=n.n(a),c=n(0),s=n.n(c),u=n(14),l=n.n(u),f=n(1),p=n(36),g=n(88),d=n(75),b=n(42),m=n(78),h=n(76),y=n(43),O=n(74),w=n.n(O),x=function(e,t){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d\n&q="+e+"&lang="+t+"&image_type=photo&safesearch=true&orientation=horizontal&per_page=50"},E=["animals","fruits","planets"],j={language:"en",suggestions:!1,theme:"light"},v=localStorage,S=function(e,t){return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.awrap(v.setItem(e,t));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),null,null,[[0,5]])},k=function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.awrap(v.getItem(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),null,null,[[0,6]])};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t={app:{paddingTop:30,paddingBottom:30,height:"100%",backgroundColor:"#FFF",overflow:"hidden"},button:{backgroundColor:"#EEE",paddingLeft:8,paddingRight:8,borderRadius:4,borderColor:"#DDD",borderWidth:1,margin:3,justifyContent:"center",height:26},buttonText:{fontFamily:"Ubuntu Mono",fontSize:16},searchForm:{justifyContent:"center",flexDirection:"row"},searchButtonView:{height:40,marginLeft:12,marginTop:3},searchButton:{height:48,padding:4,fontSize:18,borderRadius:7},searchInput:{fontSize:18,padding:8,paddingLeft:10,backgroundColor:"#f8f8f8",borderColor:"#ddd",borderWidth:1,borderRadius:5,width:300,height:36,fontFamily:"Ubuntu Mono",color:"#000"},tags:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginTop:15,marginBottom:60,marginLeft:"auto",marginRight:"auto",maxWidth:800},message:{flexWrap:"wrap",justifyContent:"center",marginTop:25,color:"red",fontSize:16,alignSelf:"center"},loader:{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",position:"absolute",top:0,width:"100%",backgroundColor:"#FFF",height:"100%",opacity:.6,zIndex:1,paddingBottom:100},footer:{backgroundColor:"#ececec",position:"absolute",width:"100%",bottom:0,left:0,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap"},footerLink:{borderWidth:0,borderColor:"#CCC",padding:5,paddingLeft:10,paddingRight:10,borderRadius:0,margin:0},pictureHolder:{flexDirection:"column",position:"relative",maxWidth:640,alignSelf:"center"},picture:{marginTop:"5%",marginBottom:"20%"},pictureInfo:{position:"absolute",bottom:"17%",flexDirection:"row",alignSelf:"center"}};return"dark"===e&&(t=D({},t,{app:D({},t.app,{backgroundColor:"#000"}),loader:D({},t.loader,{backgroundColor:"#000"}),searchInput:D({},t.searchInput,{backgroundColor:"#333",borderColor:"#525252",color:"#DDDDDD"}),button:D({},t.button,{backgroundColor:"#333",borderColor:"#525252"}),buttonText:D({},t.buttonText,{color:"#aaaaaa"}),footer:D({},t.footer,{backgroundColor:"#333"}),footerLink:D({},t.footerLink,{borderColor:"#5a5a5a"})})),t};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=Object(c.useContext)(N),n=C(t);return s.a.createElement(b.a,{style:F({},n.button,{},e.addStyles),underlayColor:"dark"===t?"#555":"#ccc",onPress:e.onPress},s.a.createElement(p.a,{style:n.buttonText},e.text))},J=n(86);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=s.a.createContext("light"),R=function(){k("pictures").then((function(e){null===e&&S("pictures",JSON.stringify({})).then()})),k("tags").then((function(e){null===e&&S("tags",JSON.stringify(E)).then()})),k("settings").then((function(e){null===e&&S("settings",JSON.stringify(j)).then()}));var e=Object(c.useState)([]),t=i()(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),u=i()(a,2),O=u[0],v=u[1],P=Object(c.useState)(0),D=i()(P,2),L=D[0],F=D[1],W=Object(c.useState)(null),R=i()(W,2),U=R[0],z=R[1],B=Object(c.useState)(!1),M=i()(B,2),_=M[0],H=M[1],A=Object(c.useState)(10),V=i()(A,2),q=V[0],G=V[1],K=Object(c.useState)(j),Q=i()(K,2),X=Q[0],Y=Q[1],Z=Object(c.useState)([]),$=i()(Z,2),ee=$[0],te=$[1],ne=y.a.get("window").width,re=X.theme,oe=X.language,ae=X.suggestions,ie=C(re);Object(c.useEffect)((function(){k("settings").then((function(e){e&&Y(JSON.parse(e))})),k("tags").then((function(e){e&&te(JSON.parse(e))})),k("pictures").then((function(e){e&&r(JSON.parse(e))}))}),[]);var ce=function(e,t){var n=I({},X,l()({},e,t));Y(n),S("settings",JSON.stringify(n))},se=function(e){""!==e&&-1===ee.indexOf(e)&&(ee.unshift(e),te(ee),S("tags",JSON.stringify(ee)))},ue=function(e){var t,a,i,c;return o.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.trim(),z(null),G(10),H(!0),ce("suggestions",!1),Array.isArray(n[t])&&n[t].length&&!(Math.round((new Date).getTime()/1e3)-n[t+"_lastUpdate"]>43200)){s.next=13;break}return s.next=8,o.a.awrap(w.a.get(x(t,oe)));case 8:a=s.sent,(i=a.data.hits).length?(se(t),c=[],i.forEach((function(e){c.push({image:e.webformatURL,tags:e.tags,isDeleted:!1})})),n[t]=c,n[t+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),S("pictures",JSON.stringify(n)),r(I({},n))):setTimeout((function(){z("Couldn't find any results ")}),500),s.next=14;break;case 13:-1===ee.indexOf(t)&&se(t);case 14:setTimeout((function(){H(!1)}),100);case 15:case"end":return s.stop()}}))},le=null,fe=function(e){var t=Date.now();le&&t-le<300?function(e){n[O][e].showInfo=!n[O][e].showInfo,r(I({},n))}(e):le=t},pe=n[O]?n[O].filter((function(e){return!e.isDeleted})).slice(0,q):[],ge=[];return pe.forEach((function(e){e.tags&&e.tags.split(",").forEach((function(e){e=e.trim(),-1===ge.indexOf(e)&&ge.push(e)}))})),s.a.createElement(N.Provider,{value:re},s.a.createElement(f.a,{style:ie.app},s.a.createElement(f.a,{style:ie.searchForm},s.a.createElement(d.a,{style:ie.searchInput,value:O,onChangeText:function(e){return function(e){v(e.toLowerCase())}(e)},onSubmitEditing:function(){ue(O)},placeholder:"cats, planets, fruits,...",selectTextOnFocus:!0})),s.a.createElement(f.a,{style:ie.tags},ee.map((function(e){return s.a.createElement(T,{key:e,text:e,onPress:function(){v(e),ue(e)}})}))),U&&s.a.createElement(p.a,{style:ie.message},U),_&&s.a.createElement(f.a,{style:ie.loader},s.a.createElement(h.a,{size:"large",color:"light"===re?"#0000ff":"#FFFFFF"})),!_&&0!==pe.length&&s.a.createElement(g.a,{style:ie.pictureHolder},pe.map((function(e,t){return s.a.createElement(m.a,{key:e.image,onPress:function(){return fe(t)}},s.a.createElement(f.a,{style:ie.pictureHolder},s.a.createElement(J.a,{style:ie.picture,source:{uri:e.image},width:ne>640?640:ne}),e.showInfo&&s.a.createElement(f.a,{style:ie.pictureInfo},s.a.createElement(b.a,{underlayColor:"#cccccc",style:I({},ie.button,{marginLeft:2,marginRight:2}),onPress:function(){return function(e){n[O][e].isDeleted=!0,n[O+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),S("pictures",JSON.stringify(n)),r(I({},n))}(t)}},s.a.createElement(p.a,null,"x")),e.tags.split(",").map((function(e){return s.a.createElement(T,{onPress:function(){v(e.trim()),ue(e)},text:e,key:e})})))))})),s.a.createElement(f.a,{style:[ie.tags,{marginTop:"-3%",marginBottom:60}]},s.a.createElement(T,{onPress:function(){return G(q+10)},text:"more pictures"}),s.a.createElement(T,{onPress:function(){return ce("suggestions",!ae)},text:"more tags"})),ae&&s.a.createElement(f.a,{style:ie.tags},ge.map((function(e){return s.a.createElement(T,{key:e,text:e,onPress:function(){v(e),ue(e)}})})))),L>4&&s.a.createElement(f.a,{style:[ie.footer,{bottom:46}]},s.a.createElement(T,{onPress:function(){return F(0)},text:"close",addStyles:ie.footerLink}),s.a.createElement(T,{onPress:function(){S("tags",JSON.stringify([])),te([]),v("")},text:"clear tags",addStyles:I({},ie.footerLink,{borderLeftWidth:1})}),s.a.createElement(T,{onPress:function(){r([]),S("pictures",JSON.stringify({}))},text:"clear cache",addStyles:I({},ie.footerLink,{borderLeftWidth:1})})),s.a.createElement(f.a,{style:ie.footer},s.a.createElement(T,{onPress:function(){F(L+1)},text:"mediaViewer",addStyles:ie.footerLink}),s.a.createElement(T,{onPress:function(){return ce("language","en"===oe?"tr":"en")},text:"en"===oe?"english":"turkish",addStyles:I({},ie.footerLink,{borderLeftWidth:1})}),s.a.createElement(T,{onPress:function(){ce("theme","dark"===re?"light":"dark")},text:"dark"===re?"dark":"light",addStyles:I({},ie.footerLink,{borderLeftWidth:1})}))))},U=n(79);"web"===n(44).a.OS&&(window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1});t.a=function(){var e=Object(c.useState)(!0),t=i()(e,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(U.a({"Ubuntu Mono":n(132)}));case 2:a(!1);case 3:case"end":return e.stop()}}))}),[]),!r&&s.a.createElement(R,null)}},89:function(e,t,n){n(90),e.exports=n(136)},90:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[89,1,2]]]);
//# sourceMappingURL=../../04c7dffaa3d153bcb478.map