import{u as X,r as b,a as c,C as F,b as W,d as v,e as Y,f as _,h as t,w as o,j as n,D as L,F as ee,G as S,H as te,I as oe,E as le,z as re,k as ae,l as Z,n as g,J as se,t as E,K as ne,L as M,M as P,O as ie,p as de,q as me,B as pe,x as ue,A as fe,P as ce,Q as ge}from"./index-7217ab1d.js";import{u as _e,e as U,s as ye}from"./jsencrypt.min-3e6523fb.js";import{C as $,s as xe}from"./success8-04a59eb3.js";import{e as we}from"./jsencrpyt-2ee2d367.js";const he={class:"register"},be={class:"registerContainer"},Ve=_("span",{class:"title"},"注册 LoadRunnerX 压力测试平台",-1),ve={class:"emailCode"},ze=_("div",{class:"divider"},null,-1),Ce={class:"phoneCode"},Te=_("div",{class:"divider"},null,-1),Ne={style:{width:"100%","min-height":"272px",display:"flex","flex-direction":"column","align-items":"center"}},Re=["src"],Fe={__name:"Register",setup(Se){const O=_e();X();const I=b(xe+"?"+ +new Date);let d=b(0);const k=b(null),z=b(null),C=b(null),m=c({userName:"",password:"",confirmPassword:""}),s=c({email:"",emailCode:"",phone:"",phoneCode:""}),f=c({problemOne:"",answerOne:"",problemTwo:"",answerTwo:""}),D=c({userName:[{required:!0,message:"请输入用户名!",trigger:"change"},{validator(l,e,r){/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(e)?r():r(new Error("账号必须是字母开头，可以包含字母、数字、下划线，长度在3到16个字符之间"))},trigger:"change"}],password:[{required:!0,message:"请输入密码!",trigger:"change"},{validator(l,e,r){/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e)?r():r(new Error("密码可以由字母、数字、下划线组成，至少包含一个字母和一个数字，长度在8到16个字符之间"))},trigger:"change"}],confirmPassword:[{required:!0,message:"请再次输入密码!",trigger:"change"},{validator(l,e,r){e!=m.password?r(new Error("两次密码输入不相符")):r()},trigger:"change"}]}),G=c({email:[{validator(l,e,r){!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/.test(e)&&e!=""?(y.disabled=!0,r(new Error("请输入正确邮箱"))):(e==""?y.disabled=!0:y.disabled=!1,r())},trigger:"change"}],emailCode:[{validator(l,e,r){const p=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/;p.test(s.email)&&e.length!=4?r(new Error("请正确输入邮箱验证码")):!p.test(s.email)&&e.length!=0?r(new Error("请勿输入验证码")):r()},trigger:"change"}],phone:[{validator(l,e,r){!/^1[3-9]\d{9}$/.test(e)&&e!=""?(x.disabled=!0,r(new Error("请输入正确手机号"))):(e==""?x.disabled=!0:x.disabled=!1,r())},trigger:"change"}],phoneCode:[{validator(l,e,r){const p=/^1[3-9]\d{9}$/;p.test(s.phone)&&e.length!=4?r(new Error("请正确输入手机验证码")):!p.test(s.phone)&&e.length!=0?r(new Error("请勿输入验证码")):r()},trigger:"change"}]}),j=c({problemOne:[{required:!0,message:"请输入密保问题一",trigger:"change"}],answerOne:[{required:!0,message:"请输入密保答案一",trigger:"change"}],problemTwo:[{required:!0,message:"请输入密保问题二",trigger:"change"}],answerTwo:[{required:!0,message:"请输入密保答案二",trigger:"change"}]}),y=c({type:"primary",btnText:"获取验证码",disabled:!0}),x=c({type:"primary",btnText:"获取验证码",disabled:!0});let w=c({state:!1,text:"注册中"});function T(l){l.validate(e=>{if(e)if(l==C.value)w.state=!0,w.text="注册中",setTimeout(()=>{d.value=4,w.state=!1,w.text="注册";const r={userName:m.userName,password:we(m.password),isRememberPassword:!0};O.setuserInfo(r)},1e3);else if(l==z.value&&(s.email.length!=0||s.phone!=0)){if(s.emailCode!="1234")return U("验证码错误");if(s.phoneCode!="1234")return U("验证码错误")}else d.value++})}function H(){d.value--}function q(l){l.type="",l.disabled=!0,l.btnText="请稍候...",setTimeout(()=>{J(60,l)},500)}function J(l,e){ye("验证码已发送!"),l=l||60,e.btnText=l+"s后获取",setTimeout(()=>{l>0&&(e.btnText=l+"s后获取",--l)},1e3);let r=setInterval(()=>{l>0?(e.btnText=l+"s后获取",--l):(e.btnText="获取验证码",e.disabled=!1,e.type="primary",clearInterval(r))},1e3)}return F(()=>m.userName,(l,e)=>{const r=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;l.length==1?document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="29px":l.length==0||r.test(l)?document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="18px":document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="29px"}),F(()=>m.password,(l,e)=>{const r=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;l.length==1?document.querySelector(".password").parentNode.parentNode.style.marginBottom="41px":l.length==0||r.test(l)?document.querySelector(".password").parentNode.parentNode.style.marginBottom="18px":document.querySelector(".password").parentNode.parentNode.style.marginBottom="41px"}),(l,e)=>{const r=ie,p=oe,u=de,i=me,h=pe,N=ue,V=fe,B=ce,K=ge,Q=le,R=re,A=W("router-link");return v(),Y("div",he,[_("div",be,[Ve,t(p,{active:n(d),"finish-status":"success","process-status":"finish","align-center":"",space:100,class:"register_steps"},{default:o(()=>[t(r,{title:"填写账号密码"}),t(r,{title:"绑定邮箱/手机号"}),t(r,{title:"设置密保"}),t(r,{title:"完成注册"})]),_:1},8,["active"]),t(Q,{modelValue:n(d),"onUpdate:modelValue":e[16]||(e[16]=a=>L(d)?d.value=a:d=a),class:"tabs"},{default:o(()=>[t(V,{name:0},{default:o(()=>[t(N,{model:m,ref_key:"accountFormRef",ref:k,rules:D,class:"myForm"},{default:o(()=>[t(i,{prop:"userName"},{default:o(()=>[t(u,{modelValue:m.userName,"onUpdate:modelValue":e[0]||(e[0]=a=>m.userName=a),modelModifiers:{trim:!0},placeholder:"请输入用户名",clearable:"","prefix-icon":n(ae),size:"large",class:"user_name"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,{prop:"password"},{default:o(()=>[t(u,{modelValue:m.password,"onUpdate:modelValue":e[1]||(e[1]=a=>m.password=a),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",class:"password",clearable:"","show-password":"","prefix-icon":n(Z),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,{prop:"confirmPassword"},{default:o(()=>[t(u,{modelValue:m.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=a=>m.confirmPassword=a),modelModifiers:{trim:!0},placeholder:"请再次输入密码",type:"password",clearable:"","show-password":"","prefix-icon":n(Z),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,null,{default:o(()=>[t(h,{type:"primary",size:"large",style:{width:"100%"},onClick:e[3]||(e[3]=a=>T(k.value))},{default:o(()=>[g(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(V,{name:1},{default:o(()=>[t(N,{model:s,ref_key:"emailPhoneFormRef",ref:z,rules:G,class:"myForm"},{default:o(()=>[t(i,{prop:"email"},{default:o(()=>[t(B,{class:"box-item",effect:"dark",content:"如不需绑定邮箱不要填写直接下一步即可",placement:"top"},{default:o(()=>[t(u,{modelValue:s.email,"onUpdate:modelValue":e[4]||(e[4]=a=>s.email=a),modelModifiers:{trim:!0},placeholder:"请输入邮箱地址",clearable:"","prefix-icon":n(se),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),t(i,{prop:"emailCode"},{default:o(()=>[_("div",ve,[t(u,{modelValue:s.emailCode,"onUpdate:modelValue":e[5]||(e[5]=a=>s.emailCode=a),modelModifiers:{trim:!0},placeholder:"请输入邮箱验证码","prefix-icon":$,size:"large",maxlength:"4"},null,8,["modelValue"]),ze,t(h,{link:"",type:y.type,class:"btnCode",disabled:y.disabled,onClick:e[6]||(e[6]=a=>q(y))},{default:o(()=>[g(E(y.btnText),1)]),_:1},8,["type","disabled"])])]),_:1}),t(i,{prop:"phone"},{default:o(()=>[t(B,{class:"box-item",effect:"dark",content:"如不需绑定手机不要填写直接下一步即可",placement:"top"},{default:o(()=>[t(u,{modelValue:s.phone,"onUpdate:modelValue":e[7]||(e[7]=a=>s.phone=a),modelModifiers:{trim:!0},placeholder:"请输入手机号",clearable:"","prefix-icon":n(ne),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),t(i,{prop:"phoneCode"},{default:o(()=>[_("div",Ce,[t(u,{modelValue:s.phoneCode,"onUpdate:modelValue":e[8]||(e[8]=a=>s.phoneCode=a),modelModifiers:{trim:!0},placeholder:"请输入手机验证码","prefix-icon":$,size:"large",maxlength:"4"},null,8,["modelValue"]),Te,t(h,{link:"",type:x.type,class:"btnCode",disabled:x.disabled,onClick:e[9]||(e[9]=a=>q(x))},{default:o(()=>[g(E(x.btnText),1)]),_:1},8,["type","disabled"])])]),_:1}),t(i,null,{default:o(()=>[t(h,{type:"primary",size:"large",style:{width:"100%"},onClick:e[10]||(e[10]=a=>T(z.value))},{default:o(()=>[g(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(V,{name:2},{default:o(()=>[t(N,{model:f,ref_key:"confidentialityFormRef",ref:C,rules:j,class:"myForm"},{default:o(()=>[t(i,{prop:"problemOne"},{default:o(()=>[t(u,{modelValue:f.problemOne,"onUpdate:modelValue":e[11]||(e[11]=a=>f.problemOne=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题一",clearable:"","prefix-icon":n(M),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,{prop:"answerOne"},{default:o(()=>[t(u,{modelValue:f.answerOne,"onUpdate:modelValue":e[12]||(e[12]=a=>f.answerOne=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题答案一",clearable:"","prefix-icon":n(P),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,{prop:"problemTwo"},{default:o(()=>[t(u,{modelValue:f.problemTwo,"onUpdate:modelValue":e[13]||(e[13]=a=>f.problemTwo=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题二",clearable:"","prefix-icon":n(M),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,{prop:"answerTwo"},{default:o(()=>[t(u,{modelValue:f.answerTwo,"onUpdate:modelValue":e[14]||(e[14]=a=>f.answerTwo=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题答案二","prefix-icon":n(P),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(i,null,{default:o(()=>[t(h,{type:"primary",size:"large",style:{width:"100%"},onClick:e[15]||(e[15]=a=>T(C.value)),loading:n(w).state},{default:o(()=>[g(" 注册")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(V,{name:4},{default:o(()=>[_("div",Ne,[t(K,{type:"success"},{default:o(()=>[g("注册成功！")]),_:1}),_("img",{src:I.value,width:"100",height:"100",alt:"Girl has dropped her ice cream."},null,8,Re)])]),_:1})]),_:1},8,["modelValue"]),_("div",{class:"gotoLogin",style:ee({justifyContent:n(d)>0&&n(d)!=4?"space-between":"right"})},[n(d)>0&&n(d)!=4?(v(),S(R,{key:0,type:"primary",onClick:H},{default:o(()=>[g("上一步")]),_:1})):te("",!0),n(d)!=4?(v(),S(A,{key:1,to:"/member/login"},{default:o(()=>[t(R,{type:"primary"},{default:o(()=>[g("已有账号去登录>>")]),_:1})]),_:1})):(v(),S(A,{key:2,to:"/member/login"},{default:o(()=>[t(R,{type:"primary"},{default:o(()=>[g("立即登录>>")]),_:1})]),_:1}))],4)])])}}};export{Fe as default};
