(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{60:function(e,t,n){e.exports=n(79)},66:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c);n(65),n(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(9),l=n(49),s=n.n(l),u=(n(67),n(70),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_FIREBASE_APP_ID});s.a.initializeApp(u);var p=s.a.database(),d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,t=["adonis.png","after.png","agilityjs.png","ampersand.png","amplitude.png","angular-meteor.png","angularjs.png","babel.png","backbone.png","chartist.png","chartjs.png","charts.png","clementine.png","codecept.png","codeclimate.png","coffeescript.png","commonjs.png","cordova.png","cujojs.png","cyclejs.png","cyclow.png","ember.png","emotion.png","ender.png","enquirer.png","enyo.png","epoch.png","expressjs.png","flux.png","mobx-state-tree.png","mobx.png","mocha.png","modernizr.png","mojs.png","moleculer.png","momentjs.png","moon.png","muuri.png","nativescript-angular.png","nativescript.png","nemo.png","nerv.png","nest.png","neutrino.png","next.js.png","nightwatch.png","nile.js.png","nivo.png","nodal.png","nodejs.png"],n=[];n.length<2*e;){var a=Math.floor(Math.random()*t.length),r=t[a].split(".png")[0];-1===n.indexOf(r)&&n.push.apply(n,[r,r])}for(var c=n.length-1;c>0;c--){var i=Math.floor(Math.random()*(c+1)),o=[n[i],n[c]];n[c]=o[0],n[i]=o[1];var l=[n[i=Math.floor(Math.random()*(c+1))],n[c]];n[c]=l[0],n[i]=l[1]}return n.map((function(e){return{name:e,isOpen:!1,isMatch:!1}}))},m=n(91),f=n(84),E=n(57),O=n(90),v=n(93),y=n(35),b=function(e){e.location;return r.a.createElement("div",null,r.a.createElement("p",null,"404! Not Found - ",r.a.createElement(y.b,{to:"/"},"Go Home")))},g=function(e){var t=e.match,n=e.history,c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],s=i[1],u=Object(a.useState)("easy"),y=Object(o.a)(u,2),g=y[0],h=y[1],S=t.params.id;Object(a.useEffect)((function(){S&&p.ref("games").child(S).once("value",(function(e){e.val()||n.push("404")}))}),[]);var j=function(e){if(e.preventDefault(),0!==l.length){var a=12;t.params.id?p.ref("games/".concat(S,"/players")).push({username:l,point:0,isReady:!1}).then((function(e){localStorage.setItem("player",JSON.stringify({game:e.key,id:e.key,username:l,point:0,isReady:!1})),n.push("/game/".concat(S))})):p.ref("games").push().then((function(e){switch(g){case"easy":a=12;break;case"medium":a=18;break;case"hard":a=35}var t=d(a);p.ref("games/".concat(e.key)).update({board:t,type:a,winner:null}),p.ref("games/".concat(e.key,"/players")).push({username:l,point:0,isReady:!1}).then((function(t){localStorage.setItem("player",JSON.stringify({game:e.key,id:t.key,username:l,point:0,isReady:!0})),n.push("/game/".concat(e.key),"owner")}))}))}};return"/404"!==t.url?r.a.createElement(O.a.Dialog,null,r.a.createElement(O.a.Header,{className:"justify-content-center"},r.a.createElement(O.a.Title,null,"Enter your name")),r.a.createElement(O.a.Body,null,r.a.createElement(m.a,{onSubmit:j},r.a.createElement(m.a.Control,{type:"text",placeholder:"Name",onChange:function(e){return s(e.target.value.substring(0,10))}}),function(){if(!t.params.id)return r.a.createElement(m.a.Group,{as:f.a,className:"mt-3 mb-0"},["easy","medium","hard"].map((function(e,t){return r.a.createElement(E.a,{sm:4,md:4,key:t},r.a.createElement(m.a.Check,{type:"radio",label:e,name:"formHorizontalRadios",id:"formHorizontalRadios1",onClick:function(){return h(e)}}))})))}())),r.a.createElement(O.a.Footer,{className:"justify-content-center"},r.a.createElement(v.a,{type:"submit",variant:"primary",onClick:j},t.params.id?"Join Game":"Create Board"))):r.a.createElement(b,null)},h=n(11),S=n(15),j=n.n(S),_=n(23),T=r.a.createContext(),C=function(e){var t=e.name,n=e.isOpen,c=e.isMatch,i=e.cardClick,o=Object(a.useContext)(T).wait;return r.a.createElement("div",{className:"card"+(n?" opened":"")+(c?" matched":""),onClick:function(){o||n||c||i()}},r.a.createElement("div",{className:"front"},"?"),r.a.createElement("div",{className:"back"},r.a.createElement("img",{src:"".concat("","/logos/").concat(t,".png"),alt:t})))},P=function(){var e=Object(a.useContext)(T),t=e.setWait,n=e.audio,c=e.turn,i=e.nextTurn,o=e.canUpdateTurn,l=e.setCanUpdateTurn,s=e.openCard,u=e.setOpenCard,p=e.players,d=e.localPlayer,m=e.setLocalPlayer,f=e.frameworks,E=e.fwDispatch,O=e.dbRef;Object(a.useEffect)((function(){c!==d.id?O.child("board").on("value",(function(e){var t=e.val();E({type:"POPULATE",board:t})})):O.child("board").off()}),[c]),Object(a.useEffect)((function(){function e(){return(e=Object(_.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c===d.id&&f.length>0)){e.next=8;break}return e.next=3,O.update({board:f});case 3:if(!o){e.next=7;break}return e.next=6,i();case 6:l(!1);case 7:b();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]);var v=function(){var e=Object(_.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.src="/open.wav",n.play(),E({type:"OPEN",index:a}),null!==s?(t(!0),setTimeout(Object(_.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(a,s);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),600)):u(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(_.a)(j.a.mark((function e(a,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(null),f[a].name===f[r].name?(n.src="/match.mp3",n.play(),E({type:"MATCH",index:a,open:r}),m(Object(h.a)(Object(h.a)({},d),{},{point:++d.point})),t(!1)):(1===p.length?t(!1):l(!0),E({type:"CLOSE",index:a,open:r}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){if(f.every((function(e){return!0===e.isMatch}))&&p.length>0){var e=p.reduce((function(e,t){return e.point>t.point?e:t}));O.child("winner").push(Object(h.a)({},e))}};return r.a.createElement("div",{className:"board"},f.map((function(e,t){return r.a.createElement(C,Object.assign({key:t,index:t},e,{cardClick:function(){return v(t)}}))})))},x=n(85),k=n(94),R=n(92),w=n(59),A=function(){var e=Object(a.useContext)(T),t=e.dbRef,n=e.localPlayer,c=e.timer,i=e.setTimer,o=e.setLocalPlayer,l=e.isCreator,s=e.turn,u=e.setWait,p=e.players,d=e.setTurn,m=e.setShowInviteModal,f=e.nextTurn;Object(a.useEffect)((function(){t.child("turn").on("value",(function(e){var t=e.val();t&&(i(10),d(t),t===n.id?u(!1):u(!0))}))}),[]),function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}(Object(_.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c>1)){e.next=4;break}i(c-1),e.next=7;break;case 4:if(!(null!==c&&p.length>1)){e.next=7;break}return e.next=7,f();case 7:case"end":return e.stop()}}),e)}))),1e3);return r.a.createElement(k.a,{border:"info"},r.a.createElement(k.a.Header,{className:"p-2"},"Players"),r.a.createElement(k.a.Body,{className:"p-0"},r.a.createElement(R.a,{variant:"flush"},p&&p.map((function(e){return r.a.createElement(w.a,{variant:"dark",style:{fontSize:"13px"},className:"d-inline px-1 py-1"+(e.id===s?" active":""),key:e.id},r.a.createElement(x.a,{variant:"success",pill:!0,className:"float-left",style:{fontSize:"90%"}},e.point),e.username,function(e){if(!s)return r.a.createElement(x.a,{pill:!0,variant:e.isReady?"primary":"secondary",style:{fontSize:"10px"},className:"float-right mt-1"},"Ready")}(e),function(e){if(e.id===s)return r.a.createElement(x.a,{variant:"dark",pill:!0,className:"float-right",style:{fontSize:"90%"}},c)}(e))})))),r.a.createElement(k.a.Footer,{className:"p-1 text-center"},r.a.createElement("div",null,function(){if(l){var e=p&&p.every((function(e){return e.isReady}));return r.a.createElement(v.a,{style:{fontSize:"13px"},variant:e?"success":"secondary",size:"sm",disabled:!!s,onClick:function(){e&&t.update({turn:n.id})}},"Start")}return r.a.createElement(v.a,{style:{fontSize:"13px"},variant:n.isReady?"success":"secondary",size:"sm",disabled:!!s,onClick:function(){o(Object(h.a)(Object(h.a)({},n),{},{isReady:!n.isReady}))}},"I'm Ready")}()),r.a.createElement("div",{className:"mt-1"},r.a.createElement(v.a,{style:{fontSize:"13px"},size:"sm",variant:"warning",onClick:function(){return m(!0)}},"Invite Link"))))},N=n(88),D=n(58),I=n.n(D),L=n(86),W=n(89),U=n(87),B=function(){new I.a("#btnClipboard");var e=Object(a.useContext)(T),t=e.showInviteModal,n=e.setShowInviteModal,c=e.gameId,i=Object(a.useState)(!1),l=Object(o.a)(i,2),s=l[0],u=l[1],p=Object(a.useState)(""),d=Object(o.a)(p,2),f=d[0],E=d[1],y=Object(a.useRef)(null);return Object(a.useState)((function(){return E(window.location.host+"/"+c)}),[]),r.a.createElement(O.a,{show:t,onHide:function(){return n(!1)}},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,"This is your invite link")),r.a.createElement(O.a.Body,null,r.a.createElement(L.a,null,r.a.createElement(m.a.Control,{ref:y,id:"inviteLink",type:"text",value:f,readOnly:!0,style:{backgroundColor:"lightgray"}}),r.a.createElement(W.a,{target:y.current,show:s,placement:"top"},(function(e){return r.a.createElement(U.a,Object.assign({id:"overlay-example"},e),"Copied!")})),r.a.createElement(L.a.Append,{id:"btnClipboard","data-clipboard-target":"#inviteLink",onClick:function(){return u(!0)}},r.a.createElement(L.a,{style:{cursor:"pointer"},className:"btn btn-primary",id:"inputGroupPrepend"},"Copy")))),r.a.createElement(O.a.Footer,null,r.a.createElement("div",null,"Share this link to invite your opponents to game"),r.a.createElement(v.a,{variant:"secondary",onClick:function(){return n(!1)}},"Ok")))},H=n(26),K=function(e,t){switch(t.type){case"POPULATE":return t.board;case"OPEN":return e[t.index].isOpen=!0,Object(H.a)(e);case"CLOSE":return t.index||t.open?(void 0!==t.index&&(e[t.index].isOpen=!1),void 0!==t.open&&(e[t.open].isOpen=!1),Object(H.a)(e)):e;case"MATCH":return e[t.index].isMatch=!0,e[t.open].isMatch=!0,Object(H.a)(e);default:return e}},M=function(e,t){switch(t.type){case"SET":return t.players;case"ADD":return[t.player].concat(Object(H.a)(e));case"REMOVE":return e.filter((function(e){return e.id!==t.id}));default:return e}},z=function(e){var t=e.match,n=e.history,c=t.params.id,i=!!n.location.state,l=p.ref("games/".concat(c)),s=Object(a.useState)(""),u=Object(o.a)(s,2),m=u[0],O=u[1],v=Object(a.useState)(!0),y=Object(o.a)(v,2),g=y[0],S=y[1],j=Object(a.useState)(null),_=Object(o.a)(j,2),C=_[0],x=_[1],k=Object(a.useState)(!0),R=Object(o.a)(k,2),w=R[0],D=R[1],I=Object(a.useState)(!1),L=Object(o.a)(I,2),W=L[0],U=L[1],H=Object(a.useReducer)(K,[]),z=Object(o.a)(H,2),F=z[0],J=z[1],V=function(e){var t=Object(a.useReducer)(M),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){e.child("players").on("value",(function(e){c({type:"SET",players:Object.entries(e.val()).map((function(e){return Object(h.a)({id:e[0]},e[1])}))})})),e.child("players").on("child_removed",(function(t){var n=e.child("turn").once("value");if(n&&n===t.key){var a=(r.indexOf(n)+1)%r.length;e.update({turn:r[a].id})}}))}),[]),{players:r}}(l).players,G=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem("player"))),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){e.child("players").once("value",(function(t){var n=t.val();n&&0!==n.length&&-1!==Object.keys(n).indexOf(r.id)||e.child("players").push({username:r.username,point:r.point}).then((function(e){c({id:e.key,username:r.username,point:r.point})}))})),e.child("players/".concat(r.id)).onDisconnect().remove()}),[]),Object(a.useEffect)((function(){localStorage.setItem("player",JSON.stringify(r)),e.child("players/".concat(r.id)).update(Object(h.a)({},r))}),[r]),{localPlayer:r,setLocalPlayer:c}}(l),q=G.localPlayer,Y=G.setLocalPlayer,$=Object(a.useState)(null),Q=Object(o.a)($,2),X=Q[0],Z=Q[1],ee=new Audio;Object(a.useEffect)((function(){q||q.game===c||n.push("/".concat(c)),l.child("board").once("value",(function(e){J({type:"POPULATE",board:e.val()})})),l.child("winner").on("child_added",(function(e){ee.src="/winner.flac",ee.play();var t=e.val();setTimeout((function(){window.confirm("Winner: ".concat(t.username,"! Would you like to start a new game?"))?(e.ref.remove(),l.child("type").once("value",(function(e){Y(Object(h.a)(Object(h.a)({},q),{},{point:0}));var t=d(e.val());te(),J({type:"POPULATE",board:t})}))):(l.off(),window.location.href="/")}),200)}))}),[]),Object(a.useEffect)((function(){var e=F.reduce((function(e,t,n){return!0===t.isOpen&&!1===t.isMatch&&e.push(n),e}),[]);e.length&&J({type:"CLOSE",index:e[0],open:e[1]})}),[m]);var te=function(){if(V.length>1){var e=(V.findIndex((function(e){return e.id===m}))+1)%V.length;return l.update({turn:V[e].id})}};return F?r.a.createElement(T.Provider,{value:{dbRef:l,audio:ee,timer:X,isCreator:i,canUpdateTurn:W,setCanUpdateTurn:U,openCard:C,setOpenCard:x,setTimer:Z,frameworks:F,fwDispatch:J,gameId:c,turn:m,setTurn:O,localPlayer:q,setLocalPlayer:Y,wait:g,setWait:S,nextTurn:te,players:V,showInviteModal:w,setShowInviteModal:D}},r.a.createElement(N.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-around"},i&&r.a.createElement(B,null),r.a.createElement(E.a,{xs:3,sm:3,md:2,xl:2,className:"my-0 px-0 py-0"},r.a.createElement(A,null)),r.a.createElement(E.a,{xs:9,sm:9,md:10,xl:9,className:"pl-2 pr-0"},r.a.createElement(P,null))))):r.a.createElement(b,null)},F=n(6),J=function(){return r.a.createElement(y.a,null,r.a.createElement("div",null,r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/:id?",exact:!0,component:g}),r.a.createElement(F.a,{path:"/game/:id",component:z}),r.a.createElement(F.a,{component:b}))))};i.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.c133aa8f.chunk.js.map