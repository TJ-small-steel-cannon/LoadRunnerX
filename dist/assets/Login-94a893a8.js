import{u as X,o as G,r as _,a as m,g as H,c as J,b as O,d as Q,e as d,f as o,w as a,E as W,h as Y,i as L,j as b,k,l as R,m as ee,n as h,t as T,p as oe,s as le,q as te,v as ae,x as se,y as de,z as ie,A as re,B as ne,C as ue,D as me}from"./index-c5e18d79.js";/* empty css                    */import{u as ce}from"./jsencrypt.min-fe123176.js";/* empty css                    *//* empty css                     */import{d as pe,e as ge}from"./jsencrpyt-ba99b2b0.js";const fe={class:"login"},_e={class:"loginContainer"},be=d("span",{class:"title"},"欢迎登录 LoadRunnerX 压力测试平台",-1),ve={class:"codeImg"},he={class:"codeInput"},ye={class:"operate"},we={class:"codeImg"},xe={class:"codeInput"},Ve={class:"phoneCode"},Ie=d("div",{class:"divider"},null,-1),Ce={class:"codeImg"},ke={class:"codeInput"},Re={class:"emailCode"},Te=d("div",{class:"divider"},null,-1),ze={class:"publicModule"},Fe={class:"gotoRegister"},Ee={__name:"Login",setup(Ne){const q=X(),f=ce();G(()=>{console.log(f.userInfo),c("account"),c("phone"),c("email")});const w=_(null),z=_(null),F=_(null);_("");const i=m({isRememberPassword:f.userInfo.isRememberPassword,userName:f.userInfo.userName,password:pe(f.userInfo.password),code:"",uuid:"",codeImg:""}),n=m({phone:"",uuid:"",code:"",phoneCode:"",codeImg:""}),u=m({email:"",code:"",emailCode:"",codeImg:"",uuid:""}),v=_("account"),B=m({userName:[{required:!0,message:"请输入用户名!",trigger:"change"}],password:[{required:!0,message:"请输入密码!",trigger:"change"}],code:[{required:!0,message:"请输入验证码!",trigger:"change"}]}),$=m({phone:[{required:!0,message:"请输入手机号码!",trigger:"change"},{validator(l,e,s){!/^1[3-9]\d{9}$/.test(e)&&e!=""?(g.disabled=!0,s(new Error("请输入正确手机号"))):(e==""?g.disabled=!0:g.disabled=!1,s())},trigger:"change"}],code:[{required:!0,message:"请输入验证码!",trigger:"change"}],phoneCode:[{required:!0,message:"请输入验证码!",trigger:"change"}]}),E=m({email:[{required:!0,message:"请输入邮箱!",trigger:"change"},{validator(l,e,s){!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/.test(e)&&e!=""?(p.disabled=!0,s(new Error("请输入正确邮箱"))):(e==""?p.disabled=!0:p.disabled=!1,s())},trigger:"change"}],code:[{required:!0,message:"请输入验证码!",trigger:"change"}],emailCode:[{required:!0,message:"请输入验证码!",trigger:"change"}]}),y=_(!1),S=(l,e)=>{console.log(l,e)};function N(){v.value=="account"?w.value.validate(l=>{if(l){y.value=!0;const e={userName:i.userName,userPassword:i.password,vcPictureCode:{result:i.code,vcId:i.uuid}};oe(e).then(s=>{if(s.code==200){if(i.isRememberPassword){const r={...i,password:ge(i.password),code:""};f.setuserInfo(r)}else{const r={userName:"",password:"",isRememberPassword:!1};f.setuserInfo(r)}le(s.uuid),q.replace("/index")}}).catch(s=>{console.log("errMsg--->",s.message),c("account")}).finally(()=>{y.value=!1})}}):v.value=="phone"?z.value.validate(l=>{}):v.value=="email"&&F.value.validate(l=>{})}function c(l){H().then(e=>{e.code==200&&(l=="account"?(i.codeImg="data:image/gif;base64,"+e.base64Img,i.uuid=e.vcId):l=="phone"?(n.codeImg="data:image/gif;base64,"+e.base64Img,n.uuid=e.vcId):l=="email"&&(u.codeImg="data:image/gif;base64,"+e.base64Img,u.uuid=e.vcId))})}const p=m({type:"primary",btnText:"获取验证码",disabled:!0}),g=m({type:"primary",btnText:"获取验证码",disabled:!0});function P(l){l.type="",l.disabled=!0,l.btnText="请稍候...",setTimeout(()=>{A(60,l)},500)}function A(l,e){te("验证码已发送!"),l=l||60,e.btnText=l+"s后获取",setTimeout(()=>{l>0&&(e.btnText=l+"s后获取",--l)},1e3);let s=setInterval(()=>{l>0?(e.btnText=l+"s后获取",--l):(e.btnText="获取验证码",e.disabled=!1,e.type="primary",clearInterval(s))},1e3)}const Z=J(()=>l=>l?"登录中":"登录");return(l,e)=>{const s=ae,r=se,x=de,V=ie,D=re,M=ne,U=O("router-link"),I=ue,C=me,K=W,j=Y;return L(),Q("div",fe,[d("div",_e,[be,o(K,{modelValue:v.value,"onUpdate:modelValue":e[16]||(e[16]=t=>v.value=t),class:"tabs",onTabClick:S},{default:a(()=>[o(I,{label:"密码登陆",name:"account"},{default:a(()=>[o(V,{model:i,ref_key:"accountFormRef",ref:w,rules:B,style:{width:"100%"}},{default:a(()=>[o(r,{prop:"userName"},{default:a(()=>[o(s,{modelValue:i.userName,"onUpdate:modelValue":e[0]||(e[0]=t=>i.userName=t),modelModifiers:{trim:!0},placeholder:"请输入用户名",clearable:"","prefix-icon":b(k),size:"large",style:{width:"100%"}},null,8,["modelValue","prefix-icon"])]),_:1}),o(r,{prop:"password"},{default:a(()=>[o(s,{modelValue:i.password,"onUpdate:modelValue":e[1]||(e[1]=t=>i.password=t),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",clearable:"","prefix-icon":b(R),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),o(r,{prop:"code"},{default:a(()=>[d("div",ve,[d("div",he,[o(s,{modelValue:i.code,"onUpdate:modelValue":e[2]||(e[2]=t=>i.code=t),modelModifiers:{trim:!0},placeholder:"请输入验证码",clearable:"",size:"large",onKeydown:e[3]||(e[3]=ee(t=>N(w.value),["enter"])),maxlength:"6"},null,8,["modelValue"])]),d("div",{class:"codePicture",onClick:e[4]||(e[4]=t=>c("account"))},[o(x,{style:{width:"100%",height:"100%"},src:i.codeImg,fit:"fill"},null,8,["src"])])])]),_:1})]),_:1},8,["model","rules"]),d("div",ye,[d("div",null,[o(D,{modelValue:i.isRememberPassword,"onUpdate:modelValue":e[5]||(e[5]=t=>i.isRememberPassword=t),label:"记住密码",size:"small"},null,8,["modelValue"])]),d("div",null,[o(U,{to:"/member/retrievePassword"},{default:a(()=>[o(M,null,{default:a(()=>[h("忘记密码?")]),_:1})]),_:1})])])]),_:1}),o(I,{label:"短信登录",name:"phone"},{default:a(()=>[o(V,{model:n,ref_key:"phoneFormRef",ref:z,rules:$,style:{width:"100%"}},{default:a(()=>[o(r,{prop:"phone"},{default:a(()=>[o(s,{modelValue:n.phone,"onUpdate:modelValue":e[6]||(e[6]=t=>n.phone=t),modelModifiers:{trim:!0},placeholder:"请输入手机号",clearable:"","prefix-icon":b(k),size:"large",style:{width:"100%"}},null,8,["modelValue","prefix-icon"])]),_:1}),o(r,{prop:"code"},{default:a(()=>[d("div",we,[d("div",xe,[o(s,{modelValue:n.code,"onUpdate:modelValue":e[7]||(e[7]=t=>n.code=t),modelModifiers:{trim:!0},placeholder:"请输入验证码",clearable:"",size:"large",maxlength:"6"},null,8,["modelValue"])]),d("div",{class:"codePicture",onClick:e[8]||(e[8]=t=>c("phone"))},[o(x,{style:{width:"100%",height:"100%"},src:n.codeImg,fit:"fill"},null,8,["src"])])])]),_:1}),o(r,{prop:"phoneCode"},{default:a(()=>[d("div",Ve,[o(s,{modelValue:n.phoneCode,"onUpdate:modelValue":e[9]||(e[9]=t=>n.phoneCode=t),modelModifiers:{trim:!0},placeholder:"请输入验证码",type:"password","prefix-icon":b(R),size:"large",maxlength:"6"},null,8,["modelValue","prefix-icon"]),Ie,o(C,{link:"",type:g.type,class:"btnCode",disabled:g.disabled||n.code.length==0,onClick:e[10]||(e[10]=t=>P(g))},{default:a(()=>[h(T(g.btnText),1)]),_:1},8,["type","disabled"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),o(I,{label:"邮箱登陆",name:"email"},{default:a(()=>[o(V,{model:u,ref_key:"emailFormRef",ref:F,rules:E,style:{width:"100%"}},{default:a(()=>[o(r,{prop:"email"},{default:a(()=>[o(s,{modelValue:u.email,"onUpdate:modelValue":e[11]||(e[11]=t=>u.email=t),modelModifiers:{trim:!0},placeholder:"请输入邮箱",clearable:"","prefix-icon":b(k),size:"large",style:{width:"100%"}},null,8,["modelValue","prefix-icon"])]),_:1}),o(r,{prop:"code"},{default:a(()=>[d("div",Ce,[d("div",ke,[o(s,{modelValue:u.code,"onUpdate:modelValue":e[12]||(e[12]=t=>u.code=t),modelModifiers:{trim:!0},placeholder:"请输入验证码",clearable:"",size:"large",maxlength:"6"},null,8,["modelValue"])]),d("div",{class:"codePicture",onClick:e[13]||(e[13]=t=>c("email"))},[o(x,{style:{width:"100%",height:"100%"},src:u.codeImg,fit:"fill"},null,8,["src"])])])]),_:1}),o(r,{prop:"emailCode"},{default:a(()=>[d("div",Re,[o(s,{modelValue:u.emailCode,"onUpdate:modelValue":e[14]||(e[14]=t=>u.emailCode=t),modelModifiers:{trim:!0},placeholder:"请输入验证码",type:"password","prefix-icon":b(R),size:"large",maxlength:"6"},null,8,["modelValue","prefix-icon"]),Te,o(C,{link:"",type:p.type,class:"btnCode",disabled:p.disabled||u.code==0,onClick:e[15]||(e[15]=t=>P(p))},{default:a(()=>[h(T(p.btnText),1)]),_:1},8,["type","disabled"])])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1},8,["modelValue"]),d("div",ze,[o(j,{direction:"vertical",size:15,alignment:"normal",style:{width:"100%"}},{default:a(()=>[o(C,{type:"primary",size:"large",class:"loginBtn",onClick:N,loading:y.value},{default:a(()=>[h(T(Z.value(y.value)),1)]),_:1},8,["loading"]),d("div",Fe,[o(U,{to:"/member/register"},{default:a(()=>[o(M,{type:"primary"},{default:a(()=>[h("没有账号我要免费注册>>")]),_:1})]),_:1})])]),_:1})])])])}}};export{Ee as default};
