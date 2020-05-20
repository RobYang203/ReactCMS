(this["webpackJsonpreact-cms"]=this["webpackJsonpreact-cms"]||[]).push([[0],{67:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},76:function(e,t,n){e.exports=n(92)},81:function(e,t,n){},83:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),i=(n(81),n(82),n(83),n(45)),s=n.n(i),l=n(59),u=n(30),m=n(31),f=n(36),d=n(34),p=n(22),E=n(67),h=n.n(E),g=n(104),v=n(103),b=n(106),C=n(107),w=n(17),R=function(e,t){return{type:"USER_LOGIN",payload:{userInfo:e,loginCode:t}}},O=function(e,t){return{type:"REGISTER_USER",payload:{registerCode:e,errCode:t}}},y=n(10),S=function(){return null!==T()},L=function(){var e=T();return new Promise((function(t,n){t(0!==Object.keys(e.loginInfo).length)}))},I=function(e){var t=T(),n=Object(y.a)(Object(y.a)({},t),{},{loginInfo:e});_(n)},k=function(e,t,n){var a=A()||[];a.push({id:a.length,name:e,account:t,password:n,createDate:new Date}),N(a)},j=function(e){var t=A();return void 0===t?[]:t.filter((function(t){return t.account===e}))},N=function(e){var t=T(),n=Object(y.a)(Object(y.a)({},t),{},{userList:e});_(n)},A=function(){var e=T();if(null!==e)return e.userList},T=function(){return JSON.parse(window.localStorage.getItem("cms"))},_=function(e){window.localStorage.setItem("cms",JSON.stringify(e))};var P=Object(w.b)((function(e){return{loginInfo:e.login.userInfo}}),(function(e){return{getLoginInfo:function(){e({type:"GET_LOGININFO"})},userLogout:function(){new Promise((function(e,t){setTimeout((function(){I({}),e()}),100)})).then((function(){e({type:"USER_LOGOUT"})}))}}}))((function(e){var t=e.loginInfo,n=e.getLoginInfo,o=e.showConfirmWin,c=e.userLogout,i=(e.history,Object(a.useState)(!1)),s=Object(p.a)(i,2),l=s[0],u=s[1],m=Object(a.useState)(null),f=Object(p.a)(m,2),d=f[0],E=f[1],w=Object(a.useRef)(null),R=function(){c()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{bg:"dark",variant:"dark",fixed:"top",sticky:"top",className:"headerBar",bsPrefix:""},r.a.createElement(g.a.Brand,{href:"/"},r.a.createElement("img",{src:h.a,alt:"logo",className:"btnLogo"}),"CMS"),r.a.createElement(g.a.Collapse,null,r.a.createElement(v.a,{className:"mr-auto"}),r.a.createElement(v.a,null,r.a.createElement(v.a.Link,{onClick:function(e){var t;t=e,n(),u(!l),E(t.target)}},r.a.createElement("i",{class:"fa fa-binoculars headerIcon"})),r.a.createElement(v.a.Link,{onClick:function(e){o(!0,"Do you want to logout?",R)}},r.a.createElement("i",{class:"fa fa-power-off headerIcon"}))))),r.a.createElement(b.a,{show:l,target:d,placement:"bottom",container:w.current,containerPadding:20},r.a.createElement(C.a,null,r.a.createElement(C.a.Title,{as:"h3"},"User Information"),r.a.createElement(C.a.Content,null,r.a.createElement("div",null,"account :",t.account),r.a.createElement("div",null,"name : ",t.name," ")))))})),G=n(25);function U(){return r.a.createElement(v.a,{variant:"pills",className:"flex-column text-center"},r.a.createElement(v.a.Item,{bsPrefix:"meunItem"},r.a.createElement(G.b,{to:"/mainframe/searchAccount"},"Search Account")))}var x=n(105),D=n(100),M=n(73),B=n(101),W=n(97);function F(e){var t=e.isShow,n=e.msg,a=e.onWindowShow;return r.a.createElement(B.a,{show:t,centered:!0,onHide:function(){a(!1)},backdrop:"static"},r.a.createElement(B.a.Header,{closeButton:!0},"Message"),r.a.createElement(B.a.Body,null,n))}function H(e){var t=e.isShow,n=e.msg,a=e.onConfirm,o=e.onWindowShow;return r.a.createElement(B.a,{show:t,centered:!0,onHide:function(){o(!1)},backdrop:"static"},r.a.createElement(B.a.Header,{closeButton:!0},"Message"),r.a.createElement(B.a.Body,null,n),r.a.createElement(B.a.Footer,null,r.a.createElement(W.a,{variant:"outline-primary",onClick:function(){a()}},"Confirm")))}var Y=n(98),J=n(72),X=n(99);var K=Object(w.b)((function(e){return{userList:e.userList.userList}}),(function(e){return{getUserList:function(t){(function(e){var t=A().filter((function(t){var n=t.name,a=t.account;return-1!==n.indexOf(e)||-1!==a.indexOf(e)||""===e}));return new Promise((function(e){setTimeout((function(){e(t)}))}))})(t).then((function(t){e({type:"GET_USER_LIST",payload:{userList:t}})}))}}}))((function(e){var t=e.userList,n=e.getUserList,o=Object(a.useState)(t),c=Object(p.a)(o,2),i=c[0],s=c[1],l=Object(a.useRef)(null);return Object(a.useEffect)((function(){s(function(e){var t=[];return e.map((function(e){var n=r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.account),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.createDate));t.push(n)})),t}(t))}),[t]),r.a.createElement("div",{className:"article-content"},r.a.createElement(Y.a,{className:"mb-3"},r.a.createElement(J.a,{ref:l,placeholder:"Input keyword of search","aria-label":"Input keyword of search","aria-describedby":"basic-addon2"}),r.a.createElement(Y.a.Append,null,r.a.createElement(W.a,{variant:"outline-secondary",onClick:function(){var e=l.current.value;n(e)}},"Search"))),r.a.createElement(X.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Account"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Create Date"))),r.a.createElement("tbody",null,i)))})),V=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).checkRedirect=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:e.sent||a.isRedirect?0===Object.keys(a.props.loginInfo).length&&a.props.recoveryLogin():(a.props.history.push("/login"),a.isRedirect=!0);case 4:case"end":return e.stop()}}),e)}))),a.showConfirmWin=function(e,t,n){a.setState({isShow:e,confirmMsg:t,comfrimFun:n})},a.onAfterConfirmClick=function(){a.state.comfrimFun(),a.setState({isShow:!1,confirmMsg:"",comfrimFun:null})},a.selectContentComp=function(e){if((e=void 0===e?"searchAccount":e)!==a.state.key){var t=null;switch(e){case"searchAccount":t=r.a.createElement(K,null)}a.setState({contentComp:t,key:e})}},e.history.listen((function(e){a.checkRedirect(),console.log(a.props.match)})),a.state={isShow:!1,confirmMsg:"",comfrimFun:null,contentComp:null,key:""},a.isRedirect=!1,a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkRedirect(),t=this.props.match.params.subFrame,console.log(t),this.selectContentComp(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{showConfirmWin:this.showConfirmWin}),r.a.createElement(x.a.Container,{fluid:!0,defaultActiveKey:"first"},r.a.createElement(D.a,{className:"Content"},r.a.createElement(M.a,{sm:2,className:"bg-light"},r.a.createElement(U,null)),r.a.createElement(M.a,{sm:10,className:"content-border"},this.state.contentComp))),r.a.createElement(H,{isShow:this.state.isShow,msg:this.state.confirmMsg,onConfirm:this.onAfterConfirmClick}))}},{key:"componentDidUpdate",value:function(){this.checkRedirect();var e=this.props.match.params.subFrame;this.selectContentComp(e)}}]),n}(r.a.Component),z=Object(w.b)((function(e){return{loginInfo:e.login.userInfo}}),(function(e){return{recoveryLogin:function(){(function(){var e=T();return new Promise((function(t){setTimeout((function(){t(e.loginInfo)}),100)}))})().then((function(t){var n=0!==Object.keys(t).length;e(function(e,t){return{type:"RECOVERY_LOGIN",payload:{userInfo:e,isLogined:t}}}(t,n))}))}}}))(V),$=n(48),q=n(108),Q=n(102),Z=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onLoginClick=function(){var e=a.accountRef.value,t=a.passwordRef.value;a.props.userLogin(e,t)},a.onWindowShow=function(e){e||a.props.cleanData()},a.accountRef=r.a.createRef(),a.passwordRef=r.a.createRef(),console.log(Object($.a)(a)),a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputform"},r.a.createElement("div",{className:"inputBody"},r.a.createElement(q.a,null,r.a.createElement(q.a.Header,null,"Login"),r.a.createElement(q.a.Body,null,r.a.createElement(Q.a,null,r.a.createElement(Q.a.Group,{controlId:"formBasicAccount"},r.a.createElement(Q.a.Label,null,"Account"),r.a.createElement(Q.a.Control,{ref:function(t){e.accountRef=t},type:"text",placeholder:"Enter Account"})),r.a.createElement(Q.a.Group,{controlId:"formBasicPassword"},r.a.createElement(Q.a.Label,null,"Password"),r.a.createElement(Q.a.Control,{ref:function(t){e.passwordRef=t},type:"password",placeholder:"Password"})),r.a.createElement(Q.a.Text,{className:"text-muted"},"if you haven't account , ",r.a.createElement(G.b,{to:"/register"},"please register")),r.a.createElement(W.a,{variant:"primary",type:"button",onClick:this.onLoginClick},"Login")))),r.a.createElement(F,{isShow:""!==this.props.errMsg,msg:this.props.errMsg,onWindowShow:this.onWindowShow})))}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props,r=a.errMsg,o=a.isLogined;""===r&&o&&this.props.history.push("/mainFrame")}}]),n}(r.a.Component),ee=Object(w.b)((function(e){var t=e.login,n=t.loginCode,a=t.isLogined,r="";switch(n){case"ACCOUNT_ERR":r="Account is fail";break;case"PWD_ERR":r="Password is fail";break;case"DATA_EMPTY":r="Input is empty"}return{errMsg:r,isLogined:a}}),(function(e){return{userLogin:function(t,n){""!==t&&""!==n?function(e,t){return new Promise((function(n,a){var r=j(e),o="LOGIN_SUCCESS";0===r.length?o="ACCOUNT_ERR":r[0].password!==t&&(o="PWD_ERR"),setTimeout((function(){"LOGIN_SUCCESS"===o&&I(r[0]),n([r[0],o])}),100)}))}(t,n).then((function(t){var n=Object(p.a)(t,2),a=n[0],r=n[1];e(R(a,r))})):e(R(null,"DATA_EMPTY"))},cleanData:function(){e({type:"CLEAN_DATA"})}}}))(Z),te=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onRegisterClick=function(){var e=a.nameRef.value,t=a.accountRef.value,n=a.passwordRef.value,r=a.passwordConfirmRef.value;a.props.registerUser(e,t,n,r)},a.onWindowShow=function(e){e||a.props.registerClean()},a.onAfterRegClick=function(){console.log(a.props),a.props.history.push("/login")},a.nameRef=r.a.createRef(),a.accountRef=r.a.createRef(),a.passwordRef=r.a.createRef(),a.passwordConfirmRef=r.a.createRef(),a.state={isRegSuccess:!1},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputform"},r.a.createElement("div",{className:"inputBody"},r.a.createElement(q.a,null,r.a.createElement(q.a.Header,null,r.a.createElement("span",null,"Register")),r.a.createElement(q.a.Body,null,r.a.createElement(Q.a,null,r.a.createElement(Q.a.Group,{controlId:"formBasicName"},r.a.createElement(Q.a.Label,null,"Name"),r.a.createElement(Q.a.Control,{ref:function(t){return e.nameRef=t},type:"text",placeholder:"Enter Name"})),r.a.createElement(Q.a.Group,{controlId:"formBasicAcount"},r.a.createElement(Q.a.Label,null,"Account"),r.a.createElement(Q.a.Control,{ref:function(t){return e.accountRef=t},type:"text",placeholder:"Enter Account"})),r.a.createElement(Q.a.Group,{controlId:"formBasicPassword"},r.a.createElement(Q.a.Label,null,"Password"),r.a.createElement(Q.a.Control,{ref:function(t){return e.passwordRef=t},type:"text",placeholder:"Password"})),r.a.createElement(Q.a.Group,{controlId:"formBasicPasswordConfirm"},r.a.createElement(Q.a.Label,null,"Password Confirm"),r.a.createElement(Q.a.Control,{ref:function(t){return e.passwordConfirmRef=t},type:"text",placeholder:"Password Confirm"})),r.a.createElement(W.a,{variant:"primary",type:"button",onClick:this.onRegisterClick},"Register")," ",r.a.createElement(W.a,{variant:"outline-secondary",type:"button"},r.a.createElement(G.b,{to:"/"},"Back"))))),this.props.isRegSuccess?r.a.createElement(H,{isShow:this.state.isRegSuccess,msg:"Register Success",onConfirm:this.onAfterRegClick}):r.a.createElement(F,{isShow:!this.props.isRegSuccess&&""!==this.props.errMsg,msg:this.props.errMsg,onWindowShow:this.onWindowShow})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.errMsg;return t.isRegSuccess=""===n,t}}]),n}(r.a.Component),ne=Object(w.b)((function(e){var t="",n=!1;switch(e.register.registerCode){case"ACCOUNT_EXIST":t="Account is exist";break;case"PWD_ERR":t="Password is fail";break;case"DATA_EMPTY":t="Input is empty";break;case"REGISTER_SUCCESS":n=!0}return{errMsg:t,isRegSuccess:n}}),(function(e){return{registerUser:function(t,n,a,r){""!==n&&""!==a&&""!==t?function(e,t,n,a){return new Promise((function(r,o){var c=j(t),i="";0!==c.length&&(i="ACCOUNT_EXIST"),setTimeout((function(){"ACCOUNT_EXIST"!==i&&(n===a?(k(e,t,n),i="REGISTER_SUCCESS"):i="PWD_ERR"),r([i])}),100)}))}(t,n,a,r).then((function(t){var n=Object(p.a)(t,1)[0];e(O(n))})):e(O("DATA_EMPTY"))},registerClean:function(){e({type:"REGISTER_CLEAN"})}}}))(te),ae=n(8),re=n(32),oe={userInfo:{},isLogined:!1,loginCode:"NONE"},ce={registerCode:"NONE"},ie={userList:[]},se=Object(re.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"USER_LOGIN":case"RECOVERY_LOGIN":var a=t.payload,r=a.userInfo,o=a.loginCode;return Object(y.a)(Object(y.a)({},e),{},{userInfo:r,isLogined:0!==Object.keys(r).length,loginCode:o});case"CHECK_LOGIN":var c=t.payload.isLogined;return Object(y.a)(Object(y.a)({},e),{},{isLogined:c});case"GET_LOGININFO":return Object(y.a)({},e);case"CLEAN_DATA":case"USER_LOGOUT":return oe;default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"REGISTER_USER":var a=t.payload.registerCode;return Object(y.a)(Object(y.a)({},e),{},{registerCode:a});case"REGISTER_CLEAN":return ce;default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"GET_USER_LIST":var a=t.payload.userList;return Object(y.a)(Object(y.a)({},e),{},{userList:a});default:return e}}}),le=Object(re.c)(se);var ue=function(){return function(){if(!S()){_({userList:[],loginInfo:null})}}(),r.a.createElement(w.a,{store:le},r.a.createElement(G.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ae.a,{exact:!0,path:["/mainFrame/:subFrame","/mainFrame","/"],component:z}),r.a.createElement(ae.a,{path:"/register",component:ne}),r.a.createElement(ae.a,{path:"/login",component:ee}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.0d33ff24.chunk.js.map