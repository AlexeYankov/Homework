(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={userPost:"HW1_userPost__2jBXg",userAvatar:"HW1_userAvatar__1Sxxy",userName:"HW1_userName__2pqv3",userMessageContainer:"HW1_userMessageContainer__15GKH",userMessageText:"HW1_userMessageText__xv2MH",userMessageTextTime:"HW1_userMessageTextTime__2EWy-",userMessageCorner:"HW1_userMessageCorner__3zGyW"}},,,,function(e,a,t){e.exports={HW2:"Affairs_HW2__1ZUen",userTaskName:"Affairs_userTaskName__1PgLJ",userTaskPriority:"Affairs_userTaskPriority__1ZO1r",userDeleteButton:"Affairs_userDeleteButton__1_J-c",nonActiveFilter:"Affairs_nonActiveFilter__3crKt",activFilter:"Affairs_activFilter__3xGpb"}},function(e,a,t){},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={superInput:"Greeting_superInput__3xCRP",errorInput:"Greeting_errorInput__2Khas"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),s=(t(25),t(17)),o=t.n(s),i=t(5),u=t.n(i);var m=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:u.a.userPost},r.a.createElement("div",{className:u.a.userAvatar},r.a.createElement("img",{src:e.tasks.avatar,alt:"avatar must be here"})),r.a.createElement("div",{className:u.a.userMessageContainer},r.a.createElement("div",{className:u.a.userName},r.a.createElement("span",null,e.tasks.name)),r.a.createElement("div",{className:u.a.userMessageText},r.a.createElement("span",null,e.tasks.message)),r.a.createElement("div",{className:u.a.userMessageTextTime},r.a.createElement("a",null,e.tasks.time))),r.a.createElement("div",{className:u.a.userMessageCorner},r.a.createElement("svg",{width:"21.95",height:"22.0",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",{filter:"url(#filter0_d_2_8)"},r.a.createElement("path",{d:"M4.73684 14C14.3474 14 18 4.66667 18 0V14H4Z",fill:"#043b04"}),r.a.createElement("path",{d:"M18 14V0C18 9.1 15.3474 14 9.73684 14H18ZM18 14H4",stroke:"#043b04",strokeWidth:"0.1"})),r.a.createElement("defs",null,r.a.createElement("filter",{id:"filter0_d_2_8",x:"0",y:"0",width:"22",height:"22",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},r.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),r.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 157 0",result:"hardAlpha"}),r.a.createElement("feOffset",{dy:"4"}),r.a.createElement("feGaussianBlur",{stdDeviation:"2"}),r.a.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),r.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),r.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2_8"}),r.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2_8",result:"shape"})))))))},d={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Artem",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"20:00"},f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement(m,{tasks:d}))},E=t(2),p=t(9),_=t.n(p),h=t(7),v=t(11),g=t.n(v),k=["red","className"],b=function(e){var a=e.red,t=e.className,n=Object(h.a)(e,k),l="".concat(a?g.a.red:g.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var C=function(e){return r.a.createElement("div",{className:_.a.HW2},r.a.createElement("div",{className:_.a.userTaskName},e.affair.name),r.a.createElement("div",{className:_.a.userTaskPriority},"[",e.affair.priority,"]"),r.a.createElement("div",{style:{padding:"3px"}},r.a.createElement(b,{style:{width:"25px"},onClick:function(){return e.deleteAffairCallback(e.affair._id)},red:!0},"x")))};var x=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(b,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(b,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(b,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(b,{onClick:function(){e.setFilter("low")}},"Low"))},N=t(27),y=[{_id:Object(N.a)(),name:"React",priority:"high"},{_id:Object(N.a)(),name:"anime",priority:"low"},{_id:Object(N.a)(),name:"games",priority:"low"},{_id:Object(N.a)(),name:"work",priority:"high"},{_id:Object(N.a)(),name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(y),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(E.a)(c,2),o=s[0],i=s[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:u,filter:o,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},j=t(18),w=t(12),S=t.n(w),A=t(10),T=t.n(A),H=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=(e.className,e.spanClassName),o=Object(h.a)(e,H),i="".concat(T.a.error," ").concat(s||""),u="".concat(T.a.errorInput," ").concat(c?T.a.superInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},o)),c&&r.a.createElement("span",{className:i},c))},W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.onEnter,o=l?S.a.superInput:S.a.errorInput;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(M,{value:a,onChange:t,className:o,onKeyDown:s,onBlur:t})),l&&r.a.createElement("div",null,l),r.a.createElement(b,{onClick:n,disabled:!a},"add"),r.a.createElement("div",null,c))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(E.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),u=Object(E.a)(i,2),m=u[0],d=u[1],f=function(){t(s),alert("Hello ".concat(s," !")),o("")},p=a.length;return r.a.createElement(W,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(o(a),d("")):(o(""),d("Title is required"))},addUser:f,onEnter:function(e){"Enter"===e.key&&s&&(f(),o(""))},error:m,totalUsers:p})};var F=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e){var a={_id:Object(N.a)(),name:e};l([].concat(Object(j.a)(t),[a]))}}))},I=t(13),P=t.n(I),G=t(14),U=t.n(G),K=["type","onChange","onChangeChecked","className","spanClassName","children"],J=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(h.a)(e,K),s="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],c=t?"":"Please, enter some text",s=function(){c?alert("text is not entered"):(alert(t),l(""))},o=Object(n.useState)(!1),i=Object(E.a)(o,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(M,{className:P.a.blue}),r.a.createElement(b,null,"default"),r.a.createElement(b,{red:!0,onClick:s},"delete "),r.a.createElement(b,{disabled:!0},"disabled"),r.a.createElement(J,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(J,{checked:u,onChange:function(e){}})))};var D=function(){return r.a.createElement("div",null)};var R=function(){return r.a.createElement("div",null)},X=t(4);var q=function(){return r.a.createElement("div",null,r.a.createElement(X.b,null,r.a.createElement(D,null),r.a.createElement(R,null)))},z=t(1);var L=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement(X.c,{to:"/"},"main"),"---",r.a.createElement(X.c,{to:"/login"},"login"),"---",r.a.createElement(X.c,{to:"/profile"},"profile"),"---",r.a.createElement("img",{src:"SpacePhoto.jpg",alt:""}),r.a.createElement("div",null,"react homeworks:"),r.a.createElement(f,null),r.a.createElement(O,null),r.a.createElement(F,null),r.a.createElement(Z,null),r.a.createElement(q,null),r.a.createElement(z.c,null,r.a.createElement(z.a,{path:"/",element:r.a.createElement("div",null,"main")}),r.a.createElement(z.a,{path:"/login",element:r.a.createElement("div",null,"login")}),r.a.createElement(z.a,{path:"/profile",element:r.a.createElement("div",null,"profile")})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X.a,null,r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.143eeebe.chunk.js.map