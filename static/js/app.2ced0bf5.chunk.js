(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,n){e.exports=n.p+"./fonts/UbuntuMono-R.ttf"},94:function(e,t,n){"use strict";var r=n(6),a=n.n(r),o=n(11),i=n.n(o),c=n(1),s=n.n(c),u=n(20),l=n.n(u),f=n(3),p=n(19),d=n(95),g=n(84),m=n(24),h=n(34),y=n(85),b=n(51),w=n(81),O=n.n(w),E=function(e){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d\n&q="+e+"&image_type=photo&safesearch=true&orientation=horizontal&per_page=100"},x=["animals","fruits","planets"],S={theme:"light"},v=n(82),j=n(33),k="web"===j.a.OS?localStorage:v.a,P=function(e,t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(k.setItem(e,t));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),null,null,[[0,5]])},C=function(e){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.a.awrap(k.getItem(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),null,null,[[0,6]])},D={app:{paddingTop:40,paddingBottom:10,height:"100%",backgroundColor:"#000000",overflow:"hidden"},button:{backgroundColor:"#eee",padding:3,paddingLeft:7,paddingRight:7,borderRadius:4,borderColor:"#ddd",borderWidth:1,margin:2},buttonText:{fontFamily:"Ubuntu Mono",fontSize:16},searchForm:{justifyContent:"center",flexDirection:"row"},searchButtonView:{height:40,marginLeft:12,marginTop:3},searchButton:{height:48,padding:4,fontSize:18,borderRadius:7},searchInput:{fontSize:18,padding:8,backgroundColor:"#f8f8f8",borderColor:"#ddd",borderWidth:1,borderRadius:5,width:300,height:36,fontFamily:"Ubuntu Mono"},tags:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginTop:15,marginBottom:25,marginLeft:"auto",marginRight:"auto",maxWidth:800},message:{flexWrap:"wrap",justifyContent:"center",marginTop:25,color:"red",fontSize:16,alignSelf:"center"},loader:{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",position:"absolute",top:0,width:"100%",backgroundColor:"#FFF",height:"100%",opacity:.7,zIndex:1,paddingBottom:100},footer:{backgroundColor:"#ececec",padding:10,position:"absolute",width:"100%",bottom:0,left:0,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap"},footerLink:{borderWidth:0,borderColor:"#ddd",padding:5,paddingLeft:10,paddingRight:10},pictureHolder:{flexDirection:"column",position:"relative"},picture:{marginBottom:40},pictureInfo:{position:"absolute",bottom:"17%",flexDirection:"row",alignSelf:"center"}};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){return s.a.createElement(m.a,{style:F({},D.button,{},e.addStyles),underlayColor:"#cccccc",onPress:e.onPress},s.a.createElement(p.a,{style:D.buttonText},e.text))},I=n(93);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(){C("pictures").then((function(e){null===e&&P("pictures",JSON.stringify({})).then()})),C("tags").then((function(e){null===e&&P("tags",JSON.stringify(x)).then()})),C("settings").then((function(e){null===e&&P("settings",JSON.stringify(S)).then()}));var e=Object(c.useState)([]),t=i()(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),u=i()(o,2),w=u[0],v=u[1],j=Object(c.useState)(0),k=i()(j,2),L=k[0],F=k[1],T=Object(c.useState)(null),W=i()(T,2),R=W[0],B=W[1],U=Object(c.useState)(!1),z=i()(U,2),M=z[0],_=z[1],H=Object(c.useState)(10),A=i()(H,2),q=A[0],V=A[1],G=Object(c.useState)(S),K=i()(G,2),Q=K[0],X=K[1],Y=Object(c.useState)([]),Z=i()(Y,2),$=Z[0],ee=Z[1];Object(c.useEffect)((function(){C("settings").then((function(e){X(JSON.parse(e))})),C("tags").then((function(e){ee(JSON.parse(e))})),C("pictures").then((function(e){r(JSON.parse(e))}))}),[]);var te=D,ne=Q.theme;"light"===ne&&(te=N({},D,{app:N({},D.app,{backgroundColor:"#FFFFFF"})}));var re=function(e){var t,o,i,c;return a.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.trim(),B(null),V(10),_(!0),Array.isArray(n[t])&&n[t].length&&!(Math.round((new Date).getTime()/1e3)-n[t+"_lastUpdate"]>43200)){s.next=12;break}return s.next=7,a.a.awrap(O.a.get(E(t)));case 7:o=s.sent,(i=o.data.hits).length?(ae(t),c=[],i.forEach((function(e){c.push({image:e.webformatURL,tags:e.tags,isDeleted:!1})})),n[t]=c,n[t+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),P("pictures",JSON.stringify(n)),r(N({},n))):setTimeout((function(){B("Couldn't find any results ")}),500),s.next=13;break;case 12:-1===$.indexOf(t)&&ae(t);case 13:setTimeout((function(){_(!1)}),100);case 14:case"end":return s.stop()}}))},ae=function(e){""!==e&&-1===$.indexOf(e)&&($.unshift(e),ee($),P("tags",JSON.stringify($)))},oe=null,ie=function(e){n[w][e].showInfo=!n[w][e].showInfo,r(N({},n))},ce=function(){F(L+1)},se=n[w]?n[w].filter((function(e){return!e.isDeleted})).slice(0,q):[];return s.a.createElement(f.a,{style:te.app},s.a.createElement(f.a,{style:te.searchForm},s.a.createElement(g.a,{style:te.searchInput,value:w,onChangeText:function(e){return function(e){v(e.toLowerCase())}(e)},onSubmitEditing:function(){re(w)},placeholder:"cats, planets, fruits,...",selectTextOnFocus:!0})),s.a.createElement(f.a,{style:te.tags},$.map((function(e){return s.a.createElement(J,{key:e,text:e,onPress:function(){v(e),re(e)}})}))),R&&s.a.createElement(p.a,{style:te.message},R),M&&s.a.createElement(f.a,{style:te.loader},s.a.createElement(y.a,{size:"large",color:"#0000ff"})),!M&&0!==se.length&&s.a.createElement(d.a,{style:te.pictureHolder},se.map((function(e,t){return s.a.createElement(h.a,{key:e.image,onLongPress:function(){return ie(t)},onPress:function(){return function(e){var t=Date.now();oe&&t-oe<300?ie(e):oe=t}(t)}},s.a.createElement(f.a,{style:te.pictureHolder},s.a.createElement(I.a,{style:te.picture,source:{uri:e.image},width:b.a.get("window").width}),e.showInfo&&s.a.createElement(f.a,{style:te.pictureInfo},s.a.createElement(m.a,{underlayColor:"#cccccc",style:N({},te.button,{marginLeft:2,marginRight:2}),onPress:function(){return function(e){n[w][e].isDeleted=!0,n[w+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),P("pictures",JSON.stringify(n)),r(N({},n))}(t)}},s.a.createElement(p.a,null,"x")),e.tags.split(",").map((function(e){return s.a.createElement(J,{onPress:function(){v(e.trim()),re(e)},text:e,key:e})})))))})),s.a.createElement(J,{onPress:function(){return V(q+10)},text:"more",addStyles:{marginBottom:70,marginLeft:"auto",marginRight:"auto"}})),s.a.createElement(f.a,{style:te.footer},L<4&&s.a.createElement(s.a.Fragment,null,s.a.createElement(J,{onPress:function(){ce()},text:"media viewer",addStyles:te.footerLink}),s.a.createElement(J,{onPress:function(){!function(e,t){var n=N({},Q,l()({},e,t));X(n),P("settings",JSON.stringify(n))}("theme","dark"===ne?"light":"dark")},text:"dark"===ne?"light mode":"dark mode",addStyles:te.footerLink})),L>20&&s.a.createElement(m.a,{style:te.footerLink,onPress:function(){return ce()},underlayColor:"#ccc"},s.a.createElement(p.a,null,"Language (English)")),4===L&&s.a.createElement(m.a,{style:te.footerLink,onPress:function(){return ce()},underlayColor:"#ccc"},s.a.createElement(p.a,null,"Settings")),L>4&&s.a.createElement(m.a,{style:te.footerLink,onPress:function(){return F(0)},underlayColor:"#ccc"},s.a.createElement(p.a,null,"Back")),L>4&&s.a.createElement(m.a,{style:N({},te.footerLink,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){localStorage.setItem("tags",JSON.stringify([])),ee([]),v("")}},s.a.createElement(p.a,null,"Clear tags")),L>4&&s.a.createElement(m.a,{style:N({},te.footerLink,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){r([]),localStorage.setItem("pictures",JSON.stringify({}))}},s.a.createElement(p.a,null,"Clear cache"))))},R=n(86);"web"===j.a.OS&&(window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1});t.a=function(){var e=Object(c.useState)(!0),t=i()(e,2),r=t[0],o=t[1];return Object(c.useEffect)((function(){a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.awrap(R.a({"Ubuntu Mono":n(141)}));case 2:o(!1);case 3:case"end":return e.stop()}}))}),[]),!r&&s.a.createElement(W,null)}},96:function(e,t,n){n(97),e.exports=n(145)},97:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[96,1,2]]]);
//# sourceMappingURL=../../9398502a3f3c7464548c.map