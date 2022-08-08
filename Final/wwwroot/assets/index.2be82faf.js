var se=Object.defineProperty;var R=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var U=(o,e,t)=>e in o?se(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,O=(o,e)=>{for(var t in e||(e={}))ne.call(e,t)&&U(o,t,e[t]);if(R)for(var t of R(e))re.call(e,t)&&U(o,t,e[t]);return o};import{r as ce,c as l,a as y,o as _,b as m,d as s,e as k,F as q,f as le,S as z,g as H,w as Y,h as w,v as K,i as $,u as E,M as G,t as f,j as M,k as N,l as ie,m as x,n as j,p as ue,q as B,s as D,x as de,y as pe,z as W,A as _e,B as me,C as F,D as ge,E as ve,G as fe}from"./vendor.97463cff.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(c){if(c.ep)return;c.ep=!0;const u=t(c);fetch(c.href,u)}};he();const n=ce({user:{},account:{},profile:{},activeProfile:{},keeps:[],vaults:[],vaultKeeps:[],profileKeeps:[],profileVaults:[],profileVaultKeeps:[],activeVault:{},myVaults:[],activeKeep:{},activeVaultKeeps:[],accountKeeps:[],accountVaults:[]});var b=(o,e)=>{for(const[t,a]of e)o[t]=a;return o};const be={name:"App",setup(){return{appState:l(()=>n)}}},ye=s("footer",null,null,-1);function ke(o,e,t,a,c,u){const r=y("Navbar"),p=y("router-view");return _(),m(q,null,[s("header",null,[k(r)]),s("main",null,[k(p)]),ye],64)}var we=b(be,[["render",ke]]);const L=window.location.origin.includes("localhost"),Q=L?"https://localhost:5001":"",Ve="dev-3m-y0xxd.us.auth0.com",Ke="https://DomDev.com",$e="G4ZPiDNVdwquzBEPf1t4fIg2bBm6ucuM";function T(o,e){if(L)console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(o){case"log":case"assert":return}console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const d={log(){T("log",arguments)},error(){T("error",arguments)},warn(){T("warn",arguments)},assert(){T("assert",arguments)},trace(){T("trace",arguments)}};function S(o,e){if(L)console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(o){case"log":case"assert":return}console[o](`[${o}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const g={log(){S("log",arguments)},error(){S("error",arguments)},warn(){S("warn",arguments)},assert(){S("assert",arguments)},trace(){S("trace",arguments)}},i=le.create({baseURL:Q,timeout:8e3});class xe{async createKeep(e){try{const t=await i.post("api/keeps",e);g.log("[createKeep]",t.data),n.keeps.unshift(t.data)}catch(t){g.error(t)}}async getKeeps(){try{const e=await i.get("api/keeps");g.log("[getKeeps]",e.data),n.keeps=e.data}catch(e){g.error(e)}}async getKeepsByUserId(e){const t=await i.get(`api/profiles/${e}/keeps`);g.log("[getKeepsByUserId]",t.data),n.profileKeeps=t.data}async getKeep(e){try{const t=await i.get("api/keeps/"+e);g.log("[getKeep]",t.data),n.activeKeep=t.data}catch(t){g.error(t)}}async updateKeep(e){try{const t=await i.put("api/keeps/"+e.id,e);g.log("Keep updated",t.data),n.keeps.push=t.data}catch(t){g.error(t)}}async deleteKeep(e){try{const t=await i.delete("api/keeps/"+e);g.log("[deleteKeep]",t.data),n.keeps.unshift=t.data}catch(t){g.error(t)}}async setActive(e){n.activeKeep=e;const t=await i.get(`api/keeps/${e.id}`);n.activeKeep=t.data}async addToVault(e,t){const a={vaultId:t,keepId:e},c=await i.post("api/vaultkeeps/",a);g.log("[addToVault]",c.data),n.vaultKeeps.push(c.data)}async getKeepsByVaultId(e){try{const t=await i.get(`api/vaults/${e}/keeps`);g.log("[getKeepsByVaultId]",t.data),n.keeps=t.data}catch(t){g.error(t)}}}const A=new xe;class h{static async confirm(e="Are you sure?",t="You won't be able to revert this!",a="warning",c="Yes, delete it!"){try{return!!(await z.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",a="top-end",c=3e3,u=!0){z.fire({title:e,icon:t,position:a,timer:c,timerProgressBar:u,toast:!0,showConfirmButton:!1})}static error(e){var t;if(e.isAxiosError){const{response:a}=e;this.toast(((t=a.data.error)==null?void 0:t.message)||a.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const Te={props:{keep:{type:Object,required:!0}},setup(o){const e=H({});return Y(()=>{e.value=O({},o.keep)}),{editable:e,keep:l(()=>n.keeps),account:l(()=>n.account),profile:l(()=>n.profile),async createKeep(){try{await A.createKeep(e.value),h.success("Keep created")}catch(t){d.error(t)}}}}},Se={class:"row g-3 py-3 text-white"},Ee={class:"col-md-6"},Ae=s("label",{for:"",class:"form-label"},"New Keep Name",-1),Ce=s("label",{for:"",class:"form-label"},"New Keep description",-1),Pe=s("label",{for:"",class:"form-label"},"Image Url",-1),Ie={class:"col-12"};function Oe(o,e,t,a,c,u){return _(),m("form",Se,[s("div",Ee,[Ae,w(s("input",{type:"text",class:"form-control",id:"keep-name","onUpdate:modelValue":e[0]||(e[0]=r=>a.editable.name=r)},null,512),[[K,a.editable.name]]),Ce,w(s("input",{type:"text",class:"form-control",id:"keep-description","onUpdate:modelValue":e[1]||(e[1]=r=>a.editable.description=r)},null,512),[[K,a.editable.description]]),Pe,w(s("input",{type:"url",class:"form-control",id:"keep-img","onUpdate:modelValue":e[2]||(e[2]=r=>a.editable.img=r)},null,512),[[K,a.editable.img]])]),s("div",Ie,[s("button",{type:"submit",onClick:e[3]||(e[3]=$((...r)=>a.createKeep&&a.createKeep(...r),["prevent"])),class:"btn btn-primary"}," Make new keep ")])])}var Me=b(Te,[["render",Oe]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me});class je{async getVaults(){const e=await i.get("api/vaults");n.vaults=e.data}async getVaultById(e){const t=await i.get(`api/vaults/${e}`);n.activeVault=t.data}async getVaultsByUserId(e){const t=await i.get(`api/profiles/${e}/vaults`);d.log("[getVaultsByUserId]",t.data),n.profileVaults=t.data}async getVaultKeeps(e){const t=await i.get(`api/vaults/${e}/keeps`);d.log("[getVaultKeeps]",t.data),n.keeps=t.data}async createVaults(e){const t=await i.post("api/vaults",e);d.log("Vault created",t.data),n.vaults.unshift(t.data)}async updateVaults(e){const t=await i.put(`api/vaults/${e.id}`,e);n.activeVault=t.data}async deleteVaults(e){const t=await i.delete(`api/vaults/${e}`);d.log("Vault deleted",t.data),n.vaults=t.data}async getMyVaults(e){const t=await i.get("account/vaults/");d.log("[getMyVaults]",t.data),n.myVaults=t.data}}const Z=new je;class Be{async getVaultKeeps(e){const t=await i.get(`api/vaults/${e}/keeps`);d.log("[getVaultKeeps]",t.data),n.vaultKeeps=t.data}async getVaultKeepsByVaultId(e){const t=await i.get(`api/vaults/${e}/keeps`);d.log("[getVaultKeepsByVaultId]",t.data),n.vaultKeeps=t.data}async createVaultKeeps(e){const t=await i.post("api/vaultkeeps",e);d.log("[createVaultKeeps]",t.data)}async deleteVaultKeeps(e){const t=await i.delete("api/vaultkeeps/"+e);d.log("[deleteVaultKeeps]",t.data);const a=n.activeVaultKeeps.findIndex(c=>c.vaultKeepId===e);n.activeVaultKeeps.splice(a,1)}}const De=new Be;const Le={props:{keep:{type:Object,required:!0}},setup(o){const e=E();return{async setActive(){try{await A.getKeep(o.keep.id)}catch(t){d.error(t)}},keeps:l(()=>n.keeps),account:l(()=>n.account),vaults:l(()=>n.vaults),profile:l(()=>n.profile),pkeeps:l(()=>n.profileKeeps),vaultKeeps:l(()=>n.vaultKeeps),activeKeep:l(()=>n.activeKeep),async goToProfile(){G.getOrCreateInstance(document.getElementById("keep-modal")).toggle(),e.push({name:"Profile",params:{id:o.keep.creatorId}})},async deleteKeep(t){try{d.log(t),await h.confirm("Are you sure you want to delete this keep?")&&(await A.deleteKeep(t),h.toast("Keep deleted"))}catch(a){d.error(a)}}}}},Re=["src"],Ue={class:"card-img-overlay d-flex justify-content-around align-items-end flex-row"},qe={class:"card-title txt text-white justify-content-between d-flex"},ze={class:"btn d-flex align-items-end"},He=["src"];function Ye(o,e,t,a,c,u){return _(),m("div",{class:"selectable card",onClick:e[2]||(e[2]=$((...r)=>a.setActive&&a.setActive(...r),["stop"])),"data-bs-target":"#keep-modal","data-bs-toggle":"modal"},[s("img",{src:t.keep.img,class:"img-fluid card-img",alt:""},null,8,Re),s("div",Ue,[s("h3",qe,f(t.keep.name),1),t.keep.creator.id==a.account.id?(_(),m("button",{key:0,class:"mdi mdi-delete btn text-danger btn-dark d-flex align-items-end mb-2",onClick:e[0]||(e[0]=$(r=>a.deleteKeep(t.keep.id),["stop"]))})):M("",!0),s("button",ze,[s("img",{onClick:e[1]||(e[1]=$((...r)=>a.goToProfile&&a.goToProfile(...r),["stop"])),src:t.keep.creator.picture,class:"p-0 rounded-circle pfp selectable",alt:""},null,8,He)])])])}var Ge=b(Le,[["render",Ye],["__scopeId","data-v-4b6c78bc"]]),We=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ge});const Fe={props:{keep:{type:Object},vaultKeep:{type:Object}},setup(o){const e=E(),t=N();return{keep:l(()=>n.activeKeep),vaults:l(()=>n.myVaults),profile:l(()=>n.profile),account:l(()=>n.account),keeps:l(()=>n.profileKeeps),vaultKeep:l(()=>n.vaultKeeps),vault:l(()=>n.activeVault),async addToVault(a){try{await A.addToVault(n.activeKeep.id,a),h.toast("Keep added to vault","success")}catch(c){d.error(c)}},goToProfile(){var a;G.getOrCreateInstance(document.getElementById("keep-modal")).hide(),e.push({name:"Profile",params:{id:(a=n.activeKeep)==null?void 0:a.creatorId}})},async deleteVaultKeeps(){try{if(n.activeVault.creator.id!==n.account.id){h.toast("You can only delete your own keeps","danger");return}await h.confirm("Are you sure you want to remove this keep?")&&(await De.deleteVaultKeeps(t.params.id),h.toast("Keep removed"))}catch(a){d.error(a)}}}}},Qe=o=>(B("data-v-439a8596"),o=o(),D(),o),Ze={class:"d-flex justify-content-between align-items-center"},Je=["src"],Xe={class:"container-fluid position-relative"},et={class:"row"},tt={class:"col-md-6 d-flex flex-column"},at={class:"dropdown d-flex justify-content-center"},ot=Qe(()=>s("button",{class:"btn btn-primary mb-3 dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Add to Vault ",-1)),st={class:"dropdown-menu"},nt=["onClick"],rt=["src","alt"],ct={class:"col-md-6 align-items-center flex-column justify-content-center d-flex"};function lt(o,e,t,a,c,u){const r=y("Modal");return _(),ie(r,{id:"keep-modal",class:"keepmodal"},{"modal-title":x(()=>{var p,V;return[s("div",Ze,[j(f(a.keep.name)+" by: "+f((p=a.keep.creator)==null?void 0:p.name)+" ",1),s("img",{onClick:e[0]||(e[0]=(...oe)=>a.goToProfile&&a.goToProfile(...oe)),src:(V=a.keep.creator)==null?void 0:V.picture,class:"pfp selectable object-fit rounded-circle",alt:""},null,8,Je)])]}),"modal-body":x(()=>[s("div",Xe,[s("div",et,[s("div",tt,[s("div",at,[ot,s("ul",st,[(_(!0),m(q,null,ue(a.vaults,p=>(_(),m("li",{key:p.id},[s("a",{onClick:V=>a.addToVault(p.id),class:"dropdown-item"},f(p.name),9,nt)]))),128))])]),s("div",null,[s("img",{src:a.keep.img,class:"w-100 h-100 object-fit keepimg",alt:a.keep.img},null,8,rt)])]),s("div",ct,[s("h3",null,"View Count: "+f(a.keep.views),1),s("h3",null,"Kept Count: "+f(a.keep.kept),1),s("h3",null,"Description: "+f(a.keep.description),1),s("div",null,[s("button",{class:"mdi mdi-delete btn text-danger btn-success",onClick:e[1]||(e[1]=$(p=>a.deleteVaultKeeps(a.keep.id),["stop"]))}," Remove from vault? ")])])])])]),_:1})}var it=b(Fe,[["render",lt],["__scopeId","data-v-439a8596"]]),ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:it});const dt="modulepreload",J={},pt="/",C=function(e,t){return!t||t.length===0?e():Promise.all(t.map(a=>{if(a=`${pt}${a}`,a in J)return;J[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const r=document.createElement("link");if(r.rel=c?"stylesheet":dt,c||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),c)return new Promise((p,V)=>{r.addEventListener("load",p),r.addEventListener("error",V)})})).then(()=>e())};function _t(o){switch(o){case"./pages/AccountPage.vue":return C(()=>import("./AccountPage.82283a57.js"),["assets/AccountPage.82283a57.js","assets/AccountPage.568afdf2.css","assets/vendor.97463cff.js"]);case"./pages/HomePage.vue":return C(()=>import("./HomePage.37c547a1.js"),["assets/HomePage.37c547a1.js","assets/HomePage.8bef25b8.css","assets/vendor.97463cff.js"]);case"./pages/ProfilePage.vue":return C(()=>import("./ProfilePage.4c05eac0.js"),["assets/ProfilePage.4c05eac0.js","assets/ProfilePage.f86aa44a.css","assets/vendor.97463cff.js"]);case"./pages/VaultPage.vue":return C(()=>import("./VaultPage.3494a0ec.js"),["assets/VaultPage.3494a0ec.js","assets/VaultPage.2ae5e398.css","assets/vendor.97463cff.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function P(o){return()=>_t(`./pages/${o}.vue`)}const mt=[{path:"/",name:"Home",component:P("HomePage")},{path:"/profiles/:id",name:"Profile",component:P("ProfilePage"),beforeEnter:W},{path:"/vaults/:id",name:"Vault",component:P("VaultPage"),beforeEnter:W},{path:"/account",name:"Account",component:P("AccountPage"),beforeEnter:_e}],X=de({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:pe(),routes:mt});class gt{async getAccount(){try{const e=await i.get("/account");n.account=e.data}catch(e){d.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getAccountKeeps(e){try{const t=await i.get("account/keeps",e);n.accountKeeps=t.data}catch(t){d.error("no",t)}}async getAccountVaults(e){try{const t=await i.get("account/vaults",e);d.log("[getAccountVaults]",t.data),n.accountVaults=t.data}catch(t){d.error("no",t)}}}const vt=new gt,ft={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class ht{constructor(e=!1,t=Q){}on(e,t){var a;return(a=this.socket)==null||a.on(e,t.bind(this)),this}onConnected(e){d.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){d.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(ft.authenticate,e)}onError(e){d.error("[SOCKET_ERROR]",e)}enqueue(e,t){d.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){d.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class bt extends ht{constructor(){super();this.on("error",this.onError)}onError(e){h.toast(e.message,"error")}}const ee=new bt,v=me({domain:Ve,clientId:$e,audience:Ke,useRefreshTokens:!0,onRedirectCallback:o=>{X.push(o&&o.targetUrl?o.targetUrl:window.location.pathname)}});v.on(v.AUTH_EVENTS.AUTHENTICATED,async function(){i.defaults.headers.authorization=v.bearer,i.interceptors.request.use(yt),n.user=v.user,await vt.getAccount(),ee.authenticate(v.bearer),await Z.getMyVaults()});async function yt(o){if(!v.isAuthenticated)return o;const e=v.identity.exp*1e3,t=e<Date.now(),a=e<Date.now()+1e3*60*60*12;return t?await v.loginWithPopup():a&&(await v.getTokenSilently(),i.defaults.headers.authorization=v.bearer,ee.authenticate(v.bearer)),o}const kt={setup(){return{user:l(()=>n.user),account:l(()=>n.account),async login(){v.loginWithPopup()},async logout(){v.logout({returnTo:window.location.origin})}}}},te=o=>(B("data-v-38167a45"),o=o(),D(),o),wt={class:"navbar-text"},Vt={key:1,class:"dropdown my-2 my-lg-0"},Kt={key:0},$t=["src"],xt={class:"mx-3 text-success lighten-30"},Tt={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},St=te(()=>s("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),Et=te(()=>s("i",{class:"mdi mdi-logout"},null,-1)),At=j(" logout "),Ct=[Et,At];function Pt(o,e,t,a,c,u){const r=y("router-link");return _(),m("span",wt,[a.user.isAuthenticated?(_(),m("div",Vt,[a.account.picture?(_(),m("div",Kt,[s("img",{src:a.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,$t),s("span",xt,f(a.account.name),1)])):M("",!0),s("div",Tt,[k(r,{to:{name:"Account"}},{default:x(()=>[St]),_:1}),s("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...p)=>a.logout&&a.logout(...p))},Ct)])])):(_(),m("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...p)=>a.login&&a.login(...p))}," GET IN HERE "))])}var It=b(kt,[["render",Pt],["__scopeId","data-v-38167a45"]]),Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:It});const Mt={},Nt={class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},jt={class:"modal-dialog modal-xl modal-dialog-centered",role:"document"},Bt={class:"modal-content"},Dt={class:"modal-header bg-secondary"},Lt={class:"modal-title",id:"exampleModalLongTitle"},Rt=s("a",{class:"close","data-dismiss":"modal","aria-label":"Close"},null,-1),Ut={class:"modal-body"};function qt(o,e){return _(),m("div",Nt,[s("div",jt,[s("div",Bt,[s("div",Dt,[s("h5",Lt,[F(o.$slots,"modal-title")]),Rt]),s("div",Ut,[F(o.$slots,"modal-body")])])])])}var zt=b(Mt,[["render",qt]]),Ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zt});const Yt={setup(){return{}}},Gt={class:"component"},Wt={class:"container"};function Ft(o,e,t,a,c,u){return _(),m("div",Gt,[s("div",Wt,f(o.accountVault.name),1)])}var Qt=b(Yt,[["render",Ft]]),Zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qt});const Jt={setup(){return{profile:l(()=>n.profile),account:l(()=>n.account)}}},I=o=>(B("data-v-78a4ac94"),o=o(),D(),o),Xt={class:"navbar navbar-expand-lg navbar-dark bg-secondary px-3"},ea=I(()=>s("div",{class:"d-flex flex-column align-items-center"},[s("button",{class:"mdi mdi-home btn btn-outline-dark"})],-1)),ta=I(()=>s("div",{class:"d-flex flex-column align-items-center"},[s("button",{class:"mdi mdi-head btn btn-outline-dark"})],-1)),aa=I(()=>s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1)),oa={class:"collapse navbar-collapse",id:"navbarText"},sa=I(()=>s("ul",{class:"navbar-nav me-auto"},[s("li")],-1));function na(o,e,t,a,c,u){const r=y("router-link"),p=y("Login");return _(),m("nav",Xt,[k(r,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:x(()=>[ea]),_:1}),k(r,{class:"navbar-brand d-flex",to:{name:"Profile",params:{id:a.account.id}}},{default:x(()=>[ta]),_:1},8,["to"]),aa,s("div",oa,[sa,k(p)])])}var ra=b(Jt,[["render",na],["__scopeId","data-v-78a4ac94"]]),ca=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ra});const la={props:{vault:{type:Object,required:!0}},setup(o){N(),E();const e=H({});return Y(()=>{e.value=O({},o.vault)}),{editable:e,account:l(()=>n.account),vault:l(()=>n.vaults),keep:l(()=>n.activeKeep),async createVaults(){try{const t=await Z.createVaults(e.value);h.toast("Vault created")}catch(t){d.error(t),h.toast(t.message)}}}}},ia={class:"col-12"},ua={class:"col-md-6"},da=s("label",{for:"vault-name",class:"form-label"},"New Vault Name",-1),pa={class:"col-md-6"},_a=s("label",{for:"vault-name",class:"form-label"},"Vault description",-1),ma={class:"form-check ms-4"},ga=s("label",{class:"form-check-label",for:"gridCheck"}," Make this vault private? ",-1),va=s("div",{class:"col-12"},[s("button",{type:"submit",class:"btn btn-primary"},"New Vault")],-1);function fa(o,e,t,a,c,u){return _(),m("form",{class:"row g-3 py-3 text-white",onSubmit:e[3]||(e[3]=r=>a.createVaults())},[s("div",ia,[s("div",ua,[da,w(s("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>a.editable.name=r),type:"text",class:"form-control",id:"vault-name"},null,512),[[K,a.editable.name]])]),s("div",pa,[_a,w(s("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>a.editable.description=r),type:"text",class:"form-control",id:"vault-name"},null,512),[[K,a.editable.description]])])]),s("div",ma,[w(s("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>a.editable.isPrivate=r),class:"form-check-input",type:"checkbox",id:"gridCheck"},null,512),[[ge,a.editable.isPrivate]]),ga]),va],32)}var ha=b(la,[["render",fa]]),ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ha});const ya={props:{vault:{type:Object,required:!0}},setup(o){ve(async()=>{});const e=E();return N(),{async goToVault(){e.push({name:"Vault",params:{id:o.vault.id}});try{o.vault.isPrivate&&o.vault.creator.id!==n.account.id&&(h.toast("You do not have access to this vault"),e.push({name:"Home"}))}catch(t){d.error(t)}},account:l(()=>n.account),profile:l(()=>n.profile),vaults:l(()=>n.profileVaults),keeps:l(()=>n.profileKeeps)}}},ka={key:0,class:"mdi mdi-lock"},wa=s("div",null,null,-1);function Va(o,e,t,a,c,u){var r;return _(),m("button",{class:"btn d-flex flex-column btn-dark",onClick:e[0]||(e[0]=(...p)=>a.goToVault&&a.goToVault(...p))},[s("p",null,[j(f(t.vault.name)+" ",1),t.vault.isPrivate?(_(),m("i",ka)):M("",!0)]),wa,s("div",null,f((r=t.vault.creator)==null?void 0:r.name),1)])}var Ka=b(ya,[["render",Va]]),$a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ka});const xa={};var Ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xa});function Sa(o){Object.entries({"./components/CreateKeep.vue":Ne,"./components/Keep.vue":We,"./components/KeepModal.vue":ut,"./components/Login.vue":Ot,"./components/Modal.vue":Ht,"./components/MyVault.vue":Zt,"./components/Navbar.vue":ca,"./components/NewVault.vue":ba,"./components/Vault.vue":$a,"./components/VaultKeep.vue":Ta}).forEach(([t,a])=>{const c=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");o.component(c,a.default)})}const ae=fe(we);Sa(ae);ae.use(X).mount("#app");export{n as A,h as P,b as _,vt as a,i as b,De as c,A as k,d as l,Z as v};
