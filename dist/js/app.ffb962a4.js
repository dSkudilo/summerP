(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-001c8fbc":"7f8a52b5","chunk-11714af4":"1534b702","chunk-198871a0":"d511d7c4","chunk-257bbe34":"491a48cd","chunk-2d0c1282":"47a88339","chunk-2d0c518a":"cf056ab1","chunk-30e8c609":"f78cbf24","chunk-3102cd5f":"24019eef","chunk-47e5d611":"ca95fddf","chunk-708a681d":"0dfdaaee","chunk-723d1dec":"468d1089"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-11714af4":1,"chunk-3102cd5f":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-001c8fbc":"31d6cfe0","chunk-11714af4":"2b4dae7e","chunk-198871a0":"31d6cfe0","chunk-257bbe34":"31d6cfe0","chunk-2d0c1282":"31d6cfe0","chunk-2d0c518a":"31d6cfe0","chunk-30e8c609":"31d6cfe0","chunk-3102cd5f":"e46dd363","chunk-47e5d611":"31d6cfe0","chunk-708a681d":"31d6cfe0","chunk-723d1dec":"31d6cfe0"}[e]+".css",c=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===r||d===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var l=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"441a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){return a.layout?(Object(r["t"])(),Object(r["e"])(Object(r["C"])(a.layout+"-layout"),{key:0})):Object(r["f"])("",!0)}var c=n("6c02"),o=Object(r["R"])("data-v-4257a9d7");Object(r["w"])("data-v-4257a9d7");var u={class:"container with-nav"};Object(r["u"])();var s=o((function(e,t,n,a,c,o){var s=Object(r["B"])("the-navbar"),i=Object(r["B"])("app-message"),d=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(s),Object(r["h"])("div",u,[Object(r["h"])(i),Object(r["h"])(d)])],64)})),i=Object(r["R"])("data-v-967716fe");Object(r["w"])("data-v-967716fe");var d={class:"navbar"},l=Object(r["h"])("h3",null,"Vue Лавка",-1),f={class:"navbar-menu"},p={key:0},m=Object(r["g"])("Магазин"),h=Object(r["g"])(" Корзина "),b={key:0,class:"badge warning filled"},g={key:1};Object(r["u"])();var v=i((function(e,t,n,a,c,o){var u=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["e"])("nav",d,[l,Object(r["h"])("ul",f,[a.isAuth?(Object(r["t"])(),Object(r["e"])("li",p,[Object(r["h"])("small",null,Object(r["F"])(a.user.email),1)])):Object(r["f"])("",!0),Object(r["h"])("li",null,[Object(r["h"])(u,{to:"/"},{default:i((function(){return[m]})),_:1})]),Object(r["h"])("li",null,[Object(r["h"])(u,{to:"/cart"},{default:i((function(){return[h]})),_:1}),a.count?(Object(r["t"])(),Object(r["e"])("span",b,Object(r["F"])(a.count),1)):Object(r["f"])("",!0)]),a.isAuth?(Object(r["t"])(),Object(r["e"])("li",g,[Object(r["h"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["Q"])((function(){return a.logout&&a.logout.apply(a,arguments)}),["prevent"]))},"Выйти")])):Object(r["f"])("",!0)])])})),j=n("5502"),O={setup:function(){var e=Object(j["b"])();return{isAuth:Object(r["c"])((function(){return e.getters["auth/isAuthenticated"]})),user:Object(r["c"])((function(){return e.getters["auth/user"]})),count:Object(r["c"])((function(){return e.getters["cart/count"]})),logout:function(){return e.commit("auth/logout")}}}};O.render=v,O.__scopeId="data-v-967716fe";var k=O,w=Object(r["R"])("data-v-892e3f1c");Object(r["w"])("data-v-892e3f1c");var y={key:0,class:"alert-title"};Object(r["u"])();var x=w((function(e,t,n,a,c,o){return a.message?(Object(r["t"])(),Object(r["e"])("div",{key:0,class:["alert",a.message.type]},[a.title?(Object(r["t"])(),Object(r["e"])("p",y,Object(r["F"])(a.title),1)):Object(r["f"])("",!0),Object(r["h"])("p",null,Object(r["F"])(a.message.value),1),Object(r["h"])("span",{class:"alert-close",onClick:t[1]||(t[1]=function(){return a.close&&a.close.apply(a,arguments)})},"×")],2)):Object(r["f"])("",!0)})),R={setup:function(){var e=Object(j["b"])(),t={primary:"Успешно!",danger:"Ошибка!",warning:"Внимание!"},n=Object(r["c"])((function(){return e.state.message})),a=Object(r["c"])((function(){return n.value?t[n.value.type]:null}));return{message:n,title:a,close:function(){return e.commit("clearMessage")}}}};R.render=x,R.__scopeId="data-v-892e3f1c";var A=R,S={components:{TheNavbar:k,AppMessage:A}};S.render=s,S.__scopeId="data-v-4257a9d7";var _=S,I=Object(r["R"])("data-v-58f42e19");Object(r["w"])("data-v-58f42e19");var T={class:"container"};Object(r["u"])();var C=I((function(e,t,n,a,c,o){var u=Object(r["B"])("app-message"),s=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["e"])("div",T,[Object(r["h"])(u),Object(r["h"])(s)])})),M={components:{AppMessage:A}};M.render=C,M.__scopeId="data-v-58f42e19";var P=M,E=Object(r["R"])("data-v-e7288258");Object(r["w"])("data-v-e7288258");var N={class:"container with-nav"};Object(r["u"])();var B=E((function(e,t,n,a,c,o){var u=Object(r["B"])("the-admin-navbar"),s=Object(r["B"])("app-message"),i=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])("div",N,[Object(r["h"])(s),Object(r["h"])(i)])],64)})),D=Object(r["R"])("data-v-0be663f4");Object(r["w"])("data-v-0be663f4");var J={class:"navbar"},U=Object(r["h"])("h3",null,"Админка",-1),z={class:"navbar-menu"},L=Object(r["g"])("Инвентарь"),F=Object(r["g"])("Категории"),Z=Object(r["g"])("Заказы");Object(r["u"])();var Q=D((function(e,t,n,a,c,o){var u=Object(r["B"])("router-link");return Object(r["t"])(),Object(r["e"])("nav",J,[U,Object(r["h"])("ul",z,[Object(r["h"])("li",null,[Object(r["h"])(u,{to:{name:"AdminProducts"}},{default:D((function(){return[L]})),_:1})]),Object(r["h"])("li",null,[Object(r["h"])(u,{to:{name:"AdminCategories"}},{default:D((function(){return[F]})),_:1})]),Object(r["h"])("li",null,[Object(r["h"])(u,{to:{name:"AdminOrders"}},{default:D((function(){return[Z]})),_:1})]),Object(r["h"])("li",null,[Object(r["h"])("a",{href:"#",onClick:t[1]||(t[1]=Object(r["Q"])((function(){return a.logout&&a.logout.apply(a,arguments)}),["prevent"]))},"Выйти")])])])})),q={setup:function(){var e=Object(c["e"])(),t=Object(j["b"])();return{logout:function(){t.commit("auth/logout"),e.push("/")}}}};q.render=Q,q.__scopeId="data-v-0be663f4";var G=q,K={components:{TheAdminNavbar:G,AppMessage:A}};K.render=B,K.__scopeId="data-v-e7288258";var X=K,H={setup:function(){var e=Object(c["d"])();return{layout:Object(r["c"])((function(){return e.meta.layout}))}},components:{MainLayout:_,AuthLayout:P,AdminLayout:X}};H.render=a;var V=H,W=n("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("4795"),n("0d03"),n("a9e3"),n("25f0");var Y=n("5530"),$=(n("96cf"),n("1da1")),ee=n("bc3a"),te=n.n(ee),ne=te.a.create({baseURL:"https://super-magazin-6722b-default-rtdb.firebaseio.com/"});ne.defaults.params={},ne.interceptors.request.use(function(){var e=Object($["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(ge.getters["auth/isAuthenticated"]){e.next=2;break}return e.abrupt("return",t);case 2:if(!ge.getters["auth/isExpired"]){e.next=5;break}return e.next=5,ge.dispatch("auth/refresh");case 5:return t.params["auth"]=ge.getters["auth/token"],e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ne.interceptors.response.use(null,(function(e){return 401===e.response.status&&(ge.commit("auth/logout"),Oe.push("/auth?message=auth")),Promise.reject(e)}));var re=ne,ae="jwt-token",ce="jwt-refresh-token",oe="jwt-expires",ue="shop-user",se={namespaced:!0,state:function(){var e;return{token:localStorage.getItem(ae),refreshToken:localStorage.getItem(ce),expiresDate:new Date(localStorage.getItem(oe)),user:null!==(e=JSON.parse(localStorage.getItem(ue)))&&void 0!==e?e:{}}},mutations:{setUser:function(e,t){e.user=t,localStorage.setItem(ue,JSON.stringify(t))},setToken:function(e,t){var n=t.refreshToken,r=t.idToken,a=t.expiresIn,c=void 0===a?"3600":a,o=new Date((new Date).getTime()+1e3*Number(c));e.token=r,e.refreshToken=n,e.expiresDate=o,localStorage.setItem(ae,r),localStorage.setItem(ce,n),localStorage.setItem(oe,o.toString())},logout:function(e){e.token=null,e.refreshToken=null,e.expiresDate=null,e.user={},localStorage.removeItem(ae),localStorage.removeItem(ce),localStorage.removeItem(oe),localStorage.removeItem(ue)}},actions:{login:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyDE5JrRZbe7z1u6KEggcQ_nTz7sZXGjJc4"),n.next=4,te.a.post(c,Object(Y["a"])(Object(Y["a"])({},t),{},{returnSecureToken:!0}));case 4:return o=n.sent,u=o.data,r("setToken",u),r("clearMessage",null,{root:!0}),n.next=10,a("getUser",u.localId);case 10:case"end":return n.stop()}}),n)})))()},signUp:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,c="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat("AIzaSyDE5JrRZbe7z1u6KEggcQ_nTz7sZXGjJc4"),n.next=4,te.a.post(c,Object(Y["a"])(Object(Y["a"])({},t),{},{returnSecureToken:!0}));case 4:return o=n.sent,u=o.data,r("setToken",u),n.next=9,a("createUser",u);case 9:case"end":return n.stop()}}),n)})))()},createUser:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,re.put("/users/".concat(t.localId,".json"),{role:"user",email:t.email});case 3:a=n.sent,c=a.data,r("setUser",Object(Y["a"])(Object(Y["a"])({},c),{},{id:t.localId}));case 6:case"end":return n.stop()}}),n)})))()},getUser:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.dispatch,e.getters,n.next=3,re.get("/users/".concat(t,".json"));case 3:a=n.sent,c=a.data,r("setUser",Object(Y["a"])(Object(Y["a"])({},c),{},{id:t})),r("clearMessage",null,{root:!0});case 7:case"end":return n.stop()}}),n)})))()},refresh:function(e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,t.prev=1,t.next=4,te.a.post("https://securetoken.googleapis.com/v1/token?key=".concat("AIzaSyDE5JrRZbe7z1u6KEggcQ_nTz7sZXGjJc4"),{grant_type:"refresh_token",refresh_token:n.refreshToken});case 4:a=t.sent,c=a.data,r("setToken",{refreshToken:c.refresh_token,idToken:c.id_token,expiresIn:c.expires_in}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log("Error:",t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},getters:{token:function(e){return e.token},isAuthenticated:function(e,t){return!!t.token&&!t.isExpired},isAdmin:function(e){return"admin"===e.user.role},isUser:function(e,t){return!t.isAdmin},isExpired:function(e){return new Date>=e.expiresDate},user:function(e){return e.user}}},ie=(n("99af"),n("4de4"),n("7db0"),n("b0c0"),n("2909"));n("d81d"),n("b64b");function de(e){var t=Object.keys(e).map((function(t){return Object(Y["a"])(Object(Y["a"])({},e[t]),{},{id:t})}));return e?t:[]}var le={namespaced:!0,state:function(){return{products:[]}},mutations:{setProducts:function(e,t){e.products=t},addProduct:function(e,t){e.products.push(t)},updateProductCount:function(e,t){var n=t.id,r=t.count,a=e.products.find((function(e){return e.id===n}));a.count=r}},actions:{create:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,n.next=4,re.post("/products.json",t);case 4:c=n.sent,o=c.data,r("addProduct",Object(Y["a"])(Object(Y["a"])({},t),{},{id:o.name})),a("setMessage",{value:"Товар успешно создана",type:"primary"},{root:!0}),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](1),a("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},load:function(e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,re.get("/products.json");case 4:r=t.sent,a=r.data,n("setProducts",de(a)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),n("setMessage",{value:t.t0.message,type:"danger"},{root:!0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},loadOne:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,r=e.dispatch,n.prev=1,n.next=4,re.get("/products/".concat(t,".json"));case 4:return a=n.sent,c=a.data,n.abrupt("return",Object(Y["a"])(Object(Y["a"])({},c),{},{id:t}));case 9:n.prev=9,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},remove:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,n.next=4,re["delete"]("/products/".concat(t,".json"));case 4:r("setMessage",{value:"Товар удалена",type:"primary"},{root:!0}),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()},update:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,n.next=4,re.put("/products/".concat(t.id,".json"),t);case 4:return a=n.sent,c=a.data,r("setMessage",{value:"Товар обновлен",type:"primary"},{root:!0}),n.abrupt("return",c);case 10:n.prev=10,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()}},getters:{products:function(e){return[].concat(Object(ie["a"])(e.products.filter((function(e){return 0!==e.count}))),Object(ie["a"])(e.products.filter((function(e){return 0===e.count}))))}}},fe={namespaced:!0,state:function(){return{categories:[]}},mutations:{setCategories:function(e,t){e.categories=t},addCategory:function(e,t){e.categories.push(t)},removeCategory:function(e,t){e.categories=e.categories.filter((function(e){return e.id!==t}))}},actions:{load:function(e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,re.get("/categories.json");case 3:r=t.sent,a=r.data,n("setCategories",de(a));case 6:case"end":return t.stop()}}),t)})))()},create:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,re.post("/categories.json",t);case 3:a=n.sent,c=a.data,r("addCategory",Object(Y["a"])(Object(Y["a"])({},t),{},{id:c.name}));case 6:case"end":return n.stop()}}),n)})))()},remove:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,re["delete"]("/categories/".concat(t,".json"));case 3:r("removeCategory",t);case 4:case"end":return n.stop()}}),n)})))()}},getters:{categories:function(e){return e.categories}}},pe=(n("13d5"),n("07ac"),{namespaced:!0,state:function(){var e;return{cart:null!==(e=JSON.parse(localStorage.getItem("cart")))&&void 0!==e?e:{}}},mutations:{clear:function(e){e.cart={},localStorage.removeItem("cart")},add:function(e,t){e.cart[t]||(e.cart[t]=0);var n=e.cart[t];e.cart[t]=n+1,localStorage.setItem("cart",JSON.stringify(e.cart))},remove:function(e,t){var n=e.cart[t];if("undefined"!==typeof n){if(n<=1)return delete e.cart[t],void localStorage.setItem("cart",JSON.stringify(e.cart));e.cart[t]=n-1,localStorage.setItem("cart",JSON.stringify(e.cart))}}},getters:{count:function(e){return Object.values(e.cart).reduce((function(e,t){return e+t}),0)},cart:function(e){return e.cart}}}),me=(n("6eba"),n("4fad"),n("3835")),he={namespaced:!0,actions:{load:function(){return Object($["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,re.get("/orders.json");case 2:return t=e.sent,n=t.data,e.abrupt("return",de(n));case 5:case"end":return e.stop()}}),e)})))()},create:function(e){return Object($["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,o,u,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n=e.commit,r=e.rootGetters,a=r["cart/cart"],c=r["product/products"],o={userId:r["auth/user"].id,date:Date.now(),items:[]},u=function(){var e=Object(me["a"])(i[s],2),t=e[0],r=e[1],a=c.find((function(e){return e.id===t})),u={name:a.title,price:a.price,count:r},d=a.count-r;o.items.push(u),n("product/updateProductCount",{id:t,count:d},{root:!0}),re.patch("/products/".concat(t,".json"),{count:d})},s=0,i=Object.entries(a);s<i.length;s++)u();return n("cart/clear",null,{root:!0}),t.next=9,re.post("/orders.json",o);case 9:case"end":return t.stop()}}),t)})))()}}},be=[];var ge=Object(j["a"])({plugins:be,state:function(){return{message:null}},mutations:{setMessage:function(e,t){e.message=t},clearMessage:function(e){e.message=null}},actions:{setMessage:function(e,t){var n=e.commit;n("setMessage",t),setTimeout((function(){return n("clearMessage")}),3e3)}},modules:{auth:se,product:le,category:fe,cart:pe,order:he}}),ve=[{path:"/",name:"Shop",component:function(){return n.e("chunk-11714af4").then(n.bind(null,"0fa5"))},meta:{layout:"main",auth:!1}},{path:"/product/:id",name:"Product",component:function(){return n.e("chunk-47e5d611").then(n.bind(null,"d2f1"))},meta:{layout:"main",auth:!1}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-30e8c609").then(n.bind(null,"b789"))},meta:{layout:"main",auth:!1}},{path:"/auth",name:"Auth",component:function(){return n.e("chunk-198871a0").then(n.bind(null,"2fef"))},meta:{layout:"auth",auth:!1}},{path:"/thanks",name:"Thanks",component:function(){return n.e("chunk-001c8fbc").then(n.bind(null,"aa78"))},meta:{layout:"main",auth:!1}},{path:"/admin",name:"Admin",redirect:{name:"AdminProducts"},component:function(){return n.e("chunk-2d0c1282").then(n.bind(null,"459d"))},meta:{admin:!0,layout:"admin"},children:[{path:"products",name:"AdminProducts",component:function(){return n.e("chunk-3102cd5f").then(n.bind(null,"d416"))}},{path:"playground",name:"Playground",component:function(){return n.e("chunk-2d0c518a").then(n.bind(null,"3e46"))}},{path:"categories",name:"AdminCategories",component:function(){return n.e("chunk-708a681d").then(n.bind(null,"6b754"))}},{path:"orders",name:"AdminOrders",component:function(){return n.e("chunk-257bbe34").then(n.bind(null,"5651"))}},{path:"product/:id",name:"AdminProduct",component:function(){return n.e("chunk-723d1dec").then(n.bind(null,"6e0a"))}}]}],je=Object(c["a"])({history:Object(c["b"])("/"),routes:ve,linkActiveClass:"active",linkExactActiveClass:"active"});je.beforeEach((function(e,t,n){var r=e.meta.auth,a=e.meta.admin;return a?ge.getters["auth/isAdmin"]?n():n("/auth?message=admin"):r?ge.getters["auth/isAuthenticated"]?n():n("/auth?message=auth"):void n()}));var Oe=je;n("441a");Object(r["d"])(V).use(ge).use(Oe).mount("#app")}});
//# sourceMappingURL=app.ffb962a4.js.map