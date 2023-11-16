import{g as O,u as T,o as M,r as v,a as R,c as F,b as D,d as $,e as K,f as c,h as a,w as n,E as X,i as G,j as y,k as H,l as Q,m as W,n as b,t as Y,s as Z,p as ee,q as se,v as te,x as oe,y as re,z as ae,A as le,B as ne}from"./index-294f53ea.js";import{e as ie,u as ue,d as de,a as ce}from"./jsencrpyt-ee6bc71a.js";import{a as P}from"./axios-47b9d439.js";const me={set(e,t){sessionStorage&&e!=null&&t!=null&&sessionStorage.setItem(e,t)},get(e){return!sessionStorage||e==null?null:sessionStorage.getItem(e)},setJSON(e,t){t!=null&&this.set(e,JSON.stringify(t))},getJSON(e){const t=this.get(e);if(t!=null)return JSON.parse(t)},remove(e){sessionStorage.removeItem(e)}},pe={set(e,t){localStorage&&e!=null&&t!=null&&localStorage.setItem(e,t)},get(e){return!localStorage||e==null?null:localStorage.getItem(e)},setJSON(e,t){t!=null&&this.set(e,JSON.stringify(t))},getJSON(e){const t=this.get(e);if(t!=null)return JSON.parse(t)},remove(e){localStorage.removeItem(e)}},N={session:me,local:pe},C={401:"认证失败，无法访问系统资源",403:"当前操作没有权限",404:"访问资源不存在",default:"系统未知错误，请反馈给管理员"};function fe(e){let t="";for(const m of Object.keys(e)){const s=e[m];var o=encodeURIComponent(m)+"=";if(s!==null&&s!==""&&typeof s<"u")if(typeof s=="object"){for(const u of Object.keys(s))if(s[u]!==null&&s[u]!==""&&typeof s[u]<"u"){let _=m+"["+u+"]";var l=encodeURIComponent(_)+"=";t+=l+encodeURIComponent(s[u])+"&"}}else t+=o+encodeURIComponent(s)+"&"}return t}const x={VITE_BASE_API:"/prod-api",BASE_URL:"/",MODE:"prod",DEV:!1,PROD:!0,SSR:!1};let V={show:!1};P.defaults.headers["Content-Type"]="application/json;charset=utf-8";const S=P.create({baseURL:x.VITE_BASE_API,timeout:1e4});console.log("当前环境",x.VITE_BASE_API);S.interceptors.request.use(e=>{const t=(e.headers||{}).isToken===!1;if(O()&&!t&&(e.headers.Authorization="Bearer "+O()),e.method==="get"&&e.params){let o=e.url+"?"+fe(e.params);o=o.slice(0,-1),e.params={},e.url=o}if(e.method==="post"||e.method==="put"){const o={url:e.url,data:typeof e.data=="object"?JSON.stringify(e.data):e.data,time:new Date().getTime()},l=N.session.getJSON("sessionObj");if(l==null||l==="")N.session.setJSON("sessionObj",o);else{const m=l.url,s=l.data,u=l.time,_=1e3;if(s===o.data&&o.time-u<_&&m===o.url){const f="数据正在处理，请勿重复提交";return console.warn(`[${m}]: `+f),Promise.reject(new Error(f))}else N.session.setJSON("sessionObj",o)}}return e},e=>{console.log(e),Promise.reject(e)});S.interceptors.response.use(e=>{const t=e.data.code||200,o=C[t]||e.data.msg||C.default;return e.request.responseType==="blob"||e.request.responseType==="arraybuffer"?e.data:t===401?(V.show||(V.show=!0,T().replace("/401")),Promise.reject("无效的会话，或者会话已过期，请重新登录。")):t===500?(ie(o),Promise.reject(new Error(o))):e.data});function _e(){return S({url:"/captchaImage",headers:{isToken:!1},method:"get",timeout:2e4})}function ge(e){return S({url:"/login",headers:{isToken:!1},method:"post",timeout:1e4,data:e})}const he={class:"login"},be={class:"loginContainer"},ve=c("span",{class:"title"},"欢迎登录 LoadRunnerX 压力测试平台",-1),Se={class:"codeImg"},we={class:"codeInput"},Ie={class:"operate"},ye={class:"publicModule"},Ne={class:"gotoRegister"},Re={__name:"Login",setup(e){M(()=>{w()});const t=T(),o=ue(),l=v(null);let m=v("");const s=R({isRememberPassword:o.userInfo.isRememberPassword,userName:o.userInfo.userName,password:de(o.userInfo.password),code:o.userInfo.code,uuid:""}),u=v("first"),_=R({userName:[{required:!0,message:"请输入用户名!",trigger:"change"}],password:[{required:!0,message:"请输入密码!",trigger:"change"}],code:[{required:!0,message:"请输入验证码!",trigger:"change"}]}),f=v(!1),j=(d,r)=>{console.log(d,r)};function E(d){d.validate(r=>{if(r){f.value=!0;const g={username:s.userName,password:s.password,code:s.code,uuid:s.uuid};ge(g).then(p=>{if(p.code==200){if(s.isRememberPassword){const h={...s,password:ce(s.password),code:""};o.setuserInfo(h)}else{const h={userName:"",password:"",isRememberPassword:!1};o.setuserInfo(h)}Z(p.token),t.replace("/index")}}).catch(p=>{console.log("errMsg--->",p.message),w()}).finally(()=>{f.value=!1})}})}function w(){_e().then(d=>{d.code==200&&(m.value="data:image/gif;base64,"+d.img,s.uuid=d.uuid)})}const J=F(()=>d=>d?"登录中":"登录");return(d,r)=>{const g=ee,p=se,h=te,B=oe,U=re,k=ae,I=le,A=X,q=ne,z=D("router-link"),L=G;return $(),K("div",he,[c("div",be,[ve,a(A,{modelValue:u.value,"onUpdate:modelValue":r[5]||(r[5]=i=>u.value=i),class:"tabs",onTabClick:j},{default:n(()=>[a(I,{label:"密码登陆",name:"first"},{default:n(()=>[a(B,{model:s,ref_key:"accountFormRef",ref:l,rules:_,style:{width:"100%"}},{default:n(()=>[a(p,{prop:"userName"},{default:n(()=>[a(g,{modelValue:s.userName,"onUpdate:modelValue":r[0]||(r[0]=i=>s.userName=i),modelModifiers:{trim:!0},placeholder:"请输入用户名",clearable:"","prefix-icon":y(H),size:"large",style:{width:"100%"}},null,8,["modelValue","prefix-icon"])]),_:1}),a(p,{prop:"password"},{default:n(()=>[a(g,{modelValue:s.password,"onUpdate:modelValue":r[1]||(r[1]=i=>s.password=i),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",clearable:"","prefix-icon":y(Q),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),a(p,{prop:"code"},{default:n(()=>[c("div",Se,[c("div",we,[a(g,{modelValue:s.code,"onUpdate:modelValue":r[2]||(r[2]=i=>s.code=i),modelModifiers:{trim:!0},placeholder:"请输入验证码",clearable:"",size:"large",onKeydown:r[3]||(r[3]=W(i=>E(l.value),["enter"]))},null,8,["modelValue"])]),c("div",{class:"codePicture",onClick:w},[a(h,{style:{width:"100%",height:"100%"},src:y(m),fit:"fill"},null,8,["src"])])])]),_:1})]),_:1},8,["model","rules"]),c("div",Ie,[c("div",null,[a(U,{modelValue:s.isRememberPassword,"onUpdate:modelValue":r[4]||(r[4]=i=>s.isRememberPassword=i),label:"记住密码",size:"small"},null,8,["modelValue"])]),c("div",null,[a(k,{href:""},{default:n(()=>[b("忘记密码?")]),_:1})])])]),_:1}),a(I,{label:"短信登录",name:"second"},{default:n(()=>[b("短信登录")]),_:1}),a(I,{label:"邮箱登陆",name:"third"},{default:n(()=>[b("邮箱登陆")]),_:1})]),_:1},8,["modelValue"]),c("div",ye,[a(L,{direction:"vertical",size:15,alignment:"normal",style:{width:"100%"}},{default:n(()=>[a(q,{type:"primary",size:"large",class:"loginBtn",onClick:r[6]||(r[6]=i=>E(l.value)),loading:f.value},{default:n(()=>[b(Y(J.value(f.value)),1)]),_:1},8,["loading"]),c("div",Ne,[a(z,{to:"/member/register"},{default:n(()=>[a(k,{type:"primary"},{default:n(()=>[b("没有账号我要免费注册>>")]),_:1})]),_:1})])]),_:1})])])])}}};export{Re as default};
