import{u as Y,r as v,a as c,B as F,b as L,d as C,e as ee,f as _,g as t,w as r,i as n,C as te,D as oe,F as S,G as re,H as le,E as ae,y as se,j as ne,l as E,m as g,I as ie,t as Z,J as de,K as O,L as M,M as me,n as ue,p as pe,A as fe,v as ce,z as ge,N as _e,O as we}from"./index-4ff56a06.js";import{u as ye}from"./jsencrypt.min-07a97c17.js";import{s as $}from"./index-48071e1a.js";import{C as D,s as he}from"./success8-b9d53d94.js";import{e as xe}from"./jsencrpyt-f8a7432b.js";import{s as U}from"./request-d4e7de7f.js";import"./axios-47b9d439.js";function be(x){return U({url:"/register",headers:{isToken:!1},method:"post",data:x})}function ve(x){return U({url:"/valida_code/get_email",headers:{isToken:!1},method:"get",params:x})}function Ve(x){return U({url:"/valida_code/get_phone",headers:{isToken:!1},method:"get",params:x})}const Ce={class:"register"},Te={class:"registerContainer"},Ne=_("span",{class:"title"},"注册 LoadRunnerX 压力测试平台",-1),ze={class:"emailCode"},Re=_("div",{class:"divider"},null,-1),Se={class:"phoneCode"},Ue=_("div",{class:"divider"},null,-1),Ae={style:{width:"100%","min-height":"272px",display:"flex","flex-direction":"column","align-items":"center"}},ke=["src"],Oe={__name:"Register",setup(x){const G=ye();Y();const j=v(he+"?"+ +new Date);let u=v(0);const A=v(null),k=v(null),T=v(null),i=c({userName:"",password:"",confirmPassword:""}),s=c({email:"",emailCode:"",emailUUID:"",phone:"",phoneCode:"",phoneUUID:""}),p=c({problemOne:"",answerOne:"",problemTwo:"",answerTwo:""}),H=c({userName:[{required:!0,message:"请输入用户名!",trigger:"change"},{validator(o,e,l){/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(e)?l():l(new Error("账号必须是字母开头，可以包含字母、数字、下划线，长度在3到16个字符之间"))},trigger:"change"}],password:[{required:!0,message:"请输入密码!",trigger:"change"},{validator(o,e,l){/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e)?l():l(new Error("密码可以由字母、数字、下划线组成，至少包含一个字母和一个数字，长度在8到16个字符之间"))},trigger:"change"}],confirmPassword:[{required:!0,message:"请再次输入密码!",trigger:"change"},{validator(o,e,l){e!=i.password?l(new Error("两次密码输入不相符")):l()},trigger:"change"}]}),J=c({email:[{validator(o,e,l){!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/.test(e)&&e!=""?(w.disabled=!0,l(new Error("请输入正确邮箱"))):(e==""?w.disabled=!0:w.disabled=!1,l())},trigger:"change"}],emailCode:[{validator(o,e,l){const d=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/;d.test(s.email)&&e.length!=6?l(new Error("请正确输入邮箱验证码")):!d.test(s.email)&&e.length!=0?l(new Error("请勿输入验证码")):l()},trigger:"change"}],phone:[{validator(o,e,l){!/^1[3-9]\d{9}$/.test(e)&&e!=""?(y.disabled=!0,l(new Error("请输入正确手机号"))):(e==""?y.disabled=!0:y.disabled=!1,l())},trigger:"change"}],phoneCode:[{validator(o,e,l){const d=/^1[3-9]\d{9}$/;d.test(s.phone)&&e.length!=6?l(new Error("请正确输入手机验证码")):!d.test(s.phone)&&e.length!=0?l(new Error("请勿输入验证码")):l()},trigger:"change"}]}),K=c({problemOne:[{required:!0,message:"请输入密保问题一",trigger:"change"}],answerOne:[{required:!0,message:"请输入密保答案一",trigger:"change"}],problemTwo:[{required:!0,message:"请输入密保问题二",trigger:"change"}],answerTwo:[{required:!0,message:"请输入密保答案二",trigger:"change"}]}),w=c({type:"primary",btnText:"获取验证码",disabled:!0}),y=c({type:"primary",btnText:"获取验证码",disabled:!0});let h=c({state:!1,text:"注册中"});function N(o){o.validate(e=>{if(e)if(o==T.value){h.state=!0,h.text="注册中";const l={userBornDay:"",userCompany:"",userGender:"",userHome:"",userIdCard:"",userName:i.userName,userNickName:"",userPassword:i.password,userPersonalProfile:"",userSecProblem1:p.problemOne,userSecProblem2:p.problemTwo,userSecAnswer3:"",userSecAnswer1:p.answerOne,userSecAnswer2:p.answerTwo,userSecProblem3:"",userSysEmail:s.email,vcEmailCode:{validation:s.emailCode,vcId:s.emailUUID},userTelephone:s.phone,vcTelephoneCode:{validation:s.phoneCode,vcId:s.phoneUUID}};be(l).then(d=>{if(d.code==200){$("注册成功"),u.value=4,h.state=!1,h.text="注册";const f={userName:i.userName,password:xe(i.password),isRememberPassword:!0};G.setuserInfo(f)}else console.log("err-->",d)}).finally(()=>{h.state=!1,h.text="注册"})}else u.value++})}function X(){u.value--}function P(o){o.type="",o.disabled=!0,o.btnText="请稍候...",o==y?Ve({phoneNum:s.phone}).then(e=>{e.code==200&&(setTimeout(()=>{I(60,o)},500),s.phoneUUID=e.vcId)}):o==w&&ve({emailAddr:s.email}).then(e=>{e.code==200&&(setTimeout(()=>{I(60,o)},500),s.emailUUID=e.vcId)})}function I(o,e){$("验证码已发送! 有效期为5分钟"),o=o||60,e.btnText=o+"s后获取",setTimeout(()=>{o>0&&(e.btnText=o+"s后获取",--o)},1e3);let l=setInterval(()=>{o>0?(e.btnText=o+"s后获取",--o):(e.btnText="获取验证码",e.disabled=!1,e.type="primary",clearInterval(l))},1e3)}return F(()=>i.userName,(o,e)=>{const l=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;o.length==1?document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="29px":o.length==0||l.test(o)?document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="18px":document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="29px"}),F(()=>i.password,(o,e)=>{const l=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;o.length==1?document.querySelector(".password").parentNode.parentNode.style.marginBottom="41px":o.length==0||l.test(o)?document.querySelector(".password").parentNode.parentNode.style.marginBottom="18px":document.querySelector(".password").parentNode.parentNode.style.marginBottom="41px"}),(o,e)=>{const l=me,d=le,f=ue,m=pe,b=fe,z=ce,V=ge,B=_e,Q=we,W=ae,R=se,q=L("router-link");return C(),ee("div",Ce,[_("div",Te,[Ne,t(d,{active:n(u),"finish-status":"success","process-status":"finish","align-center":"",space:100,class:"register_steps"},{default:r(()=>[t(l,{title:"填写账号密码"}),t(l,{title:"绑定邮箱/手机号"}),t(l,{title:"设置密保"}),t(l,{title:"完成注册"})]),_:1},8,["active"]),t(W,{modelValue:n(u),"onUpdate:modelValue":e[16]||(e[16]=a=>te(u)?u.value=a:u=a),class:"tabs"},{default:r(()=>[t(V,{name:0},{default:r(()=>[t(z,{model:i,ref_key:"accountFormRef",ref:A,rules:H,class:"myForm"},{default:r(()=>[t(m,{prop:"userName"},{default:r(()=>[t(f,{modelValue:i.userName,"onUpdate:modelValue":e[0]||(e[0]=a=>i.userName=a),modelModifiers:{trim:!0},placeholder:"请输入用户名",clearable:"","prefix-icon":n(ne),size:"large",class:"user_name"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,{prop:"password"},{default:r(()=>[t(f,{modelValue:i.password,"onUpdate:modelValue":e[1]||(e[1]=a=>i.password=a),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",class:"password",clearable:"","show-password":"","prefix-icon":n(E),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,{prop:"confirmPassword"},{default:r(()=>[t(f,{modelValue:i.confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=a=>i.confirmPassword=a),modelModifiers:{trim:!0},placeholder:"请再次输入密码",type:"password",clearable:"","show-password":"","prefix-icon":n(E),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,null,{default:r(()=>[t(b,{type:"primary",size:"large",style:{width:"100%"},onClick:e[3]||(e[3]=a=>N(A.value))},{default:r(()=>[g(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(V,{name:1},{default:r(()=>[t(z,{model:s,ref_key:"emailPhoneFormRef",ref:k,rules:J,class:"myForm"},{default:r(()=>[t(m,{prop:"email"},{default:r(()=>[t(B,{class:"box-item",effect:"dark",content:"如不需绑定邮箱不要填写直接下一步即可",placement:"top"},{default:r(()=>[t(f,{modelValue:s.email,"onUpdate:modelValue":e[4]||(e[4]=a=>s.email=a),modelModifiers:{trim:!0},placeholder:"请输入邮箱地址",clearable:"","prefix-icon":n(ie),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),t(m,{prop:"emailCode"},{default:r(()=>[_("div",ze,[t(f,{modelValue:s.emailCode,"onUpdate:modelValue":e[5]||(e[5]=a=>s.emailCode=a),modelModifiers:{trim:!0},placeholder:"请输入邮箱验证码","prefix-icon":D,size:"large",maxlength:"6"},null,8,["modelValue"]),Re,t(b,{link:"",type:w.type,class:"btnCode",disabled:w.disabled,onClick:e[6]||(e[6]=a=>P(w))},{default:r(()=>[g(Z(w.btnText),1)]),_:1},8,["type","disabled"])])]),_:1}),t(m,{prop:"phone"},{default:r(()=>[t(B,{class:"box-item",effect:"dark",content:"如不需绑定手机不要填写直接下一步即可",placement:"top"},{default:r(()=>[t(f,{modelValue:s.phone,"onUpdate:modelValue":e[7]||(e[7]=a=>s.phone=a),modelModifiers:{trim:!0},placeholder:"请输入手机号",clearable:"","prefix-icon":n(de),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),t(m,{prop:"phoneCode"},{default:r(()=>[_("div",Se,[t(f,{modelValue:s.phoneCode,"onUpdate:modelValue":e[8]||(e[8]=a=>s.phoneCode=a),modelModifiers:{trim:!0},placeholder:"请输入手机验证码","prefix-icon":D,size:"large",maxlength:"6"},null,8,["modelValue"]),Ue,t(b,{link:"",type:y.type,class:"btnCode",disabled:y.disabled,onClick:e[9]||(e[9]=a=>P(y))},{default:r(()=>[g(Z(y.btnText),1)]),_:1},8,["type","disabled"])])]),_:1}),t(m,null,{default:r(()=>[t(b,{type:"primary",size:"large",style:{width:"100%"},onClick:e[10]||(e[10]=a=>N(k.value))},{default:r(()=>[g(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(V,{name:2},{default:r(()=>[t(z,{model:p,ref_key:"confidentialityFormRef",ref:T,rules:K,class:"myForm"},{default:r(()=>[t(m,{prop:"problemOne"},{default:r(()=>[t(f,{modelValue:p.problemOne,"onUpdate:modelValue":e[11]||(e[11]=a=>p.problemOne=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题一",clearable:"","prefix-icon":n(O),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,{prop:"answerOne"},{default:r(()=>[t(f,{modelValue:p.answerOne,"onUpdate:modelValue":e[12]||(e[12]=a=>p.answerOne=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题答案一",clearable:"","prefix-icon":n(M),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,{prop:"problemTwo"},{default:r(()=>[t(f,{modelValue:p.problemTwo,"onUpdate:modelValue":e[13]||(e[13]=a=>p.problemTwo=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题二",clearable:"","prefix-icon":n(O),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,{prop:"answerTwo"},{default:r(()=>[t(f,{modelValue:p.answerTwo,"onUpdate:modelValue":e[14]||(e[14]=a=>p.answerTwo=a),modelModifiers:{trim:!0},placeholder:"请输入密保问题答案二","prefix-icon":n(M),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(m,null,{default:r(()=>[t(b,{type:"primary",size:"large",style:{width:"100%"},onClick:e[15]||(e[15]=a=>N(T.value)),loading:n(h).state},{default:r(()=>[g(" 注册")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(V,{name:4},{default:r(()=>[_("div",Ae,[t(Q,{type:"success"},{default:r(()=>[g("注册成功！")]),_:1}),_("img",{src:j.value,width:"100",height:"100",alt:"Girl has dropped her ice cream."},null,8,ke)])]),_:1})]),_:1},8,["modelValue"]),_("div",{class:"gotoLogin",style:oe({justifyContent:n(u)>0&&n(u)!=4?"space-between":"right"})},[n(u)>0&&n(u)!=4?(C(),S(R,{key:0,type:"primary",onClick:X},{default:r(()=>[g("上一步")]),_:1})):re("",!0),n(u)!=4?(C(),S(q,{key:1,to:"/member/login"},{default:r(()=>[t(R,{type:"primary"},{default:r(()=>[g("已有账号去登录>>")]),_:1})]),_:1})):(C(),S(q,{key:2,to:"/member/login"},{default:r(()=>[t(R,{type:"primary"},{default:r(()=>[g("立即登录>>")]),_:1})]),_:1}))],4)])])}}};export{Oe as default};
