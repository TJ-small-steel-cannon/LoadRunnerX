import{u as Q,r as x,a as u,C as q,b as W,d as B,e as Y,f as m,h as t,w as o,j as g,D as R,F as L,G as ee,H as te,E as oe,z as le,k as re,n as d,t as C,M as A,K as S,l as Z,p as ae,q as se,B as ne,x as ie,A as de,P as ue}from"./index-29126af5.js";import{u as me,e as M,s as U}from"./jsencrypt.min-c1c4be45.js";import{C as E,s as pe}from"./success8-6b7f737e.js";const fe={class:"RetrievePassword"},ge={class:"RetrievePasswordContainer"},ce=m("span",{class:"title"},"LoadRunnerX 密码找回",-1),_e={class:"RPMethod"},we={class:"emailCode"},ye=m("div",{class:"divider"},null,-1),xe={class:"phoneCode"},ve=m("div",{class:"divider"},null,-1),Ce={__name:"RetrievePassword",setup(be){me();const O=Q();x(pe+"?"+ +new Date);let n=x(0);const V=x(null),v=x(null),N=x(null),T=x(""),z=u({userName:""}),i=u({email:"",emailCode:"",phone:"",phoneCode:""}),p=u({problemOne:"我的手机号是？",answerOne:"",problemTwo:"我的邮箱是？",answerTwo:""}),c=u({password:"",confirmPassword:""}),I=u({userName:[{required:!0,message:"请输入用户名!",trigger:"change"},{validator(r,e,l){/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(e)?l():l(new Error("账号必须是字母开头，可以包含字母、数字、下划线，长度在3到16个字符之间"))},trigger:"change"}]}),P=u({email:[{required:!0,message:"请输入邮箱!",trigger:"change"},{validator(r,e,l){!/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/.test(e)&&e!=""?(_.disabled=!0,l(new Error("请输入正确邮箱"))):(e==""?_.disabled=!0:_.disabled=!1,l())},trigger:"change"}],emailCode:[{validator(r,e,l){const s=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{3,4})$/;s.test(i.email)&&e.length!=4?l(new Error("请正确输入邮箱验证码")):!s.test(i.email)&&e.length!=0?l(new Error("请勿输入验证码")):l()},trigger:"change"}],phone:[{required:!0,message:"请输入手机号码!",trigger:"change"},{validator(r,e,l){!/^1[3-9]\d{9}$/.test(e)&&e!=""?(w.disabled=!0,l(new Error("请输入正确手机号"))):(e==""?w.disabled=!0:w.disabled=!1,l())},trigger:"change"}],phoneCode:[{validator(r,e,l){const s=/^1[3-9]\d{9}$/;s.test(i.phone)&&e.length!=4?l(new Error("请正确输入手机验证码")):!s.test(i.phone)&&e.length!=0?l(new Error("请勿输入验证码")):l()},trigger:"change"}]}),D=u({answerOne:[{required:!0,message:"请输入密保答案一",trigger:"change"}],answerTwo:[{required:!0,message:"请输入密保答案二",trigger:"change"}]}),j=u({password:[{required:!0,message:"请输入密码!",trigger:"change"},{validator(r,e,l){/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/.test(e)?l():l(new Error("密码可以由字母、数字、下划线组成，至少包含一个字母和一个数字，长度在8到16个字符之间"))},trigger:"change"}],confirmPassword:[{required:!0,message:"请再次输入密码!",trigger:"change"},{validator(r,e,l){e!=c.password?l(new Error("两次密码输入不相符")):l()},trigger:"change"}]}),_=u({type:"primary",btnText:"获取验证码",disabled:!0}),w=u({type:"primary",btnText:"获取验证码",disabled:!0});u({state:!1,text:"注册中"});function b(r){r.validate(e=>{e&&(r==V.value?n.value=.5:r==N.value?p.answerOne.length!=0&&p.answerTwo.length!=0?n.value=5:M("请输入的密保答案不正确！"):r==v.value?(console.log("sb"),i.phoneCode==1234||i.emailCode==1234?(console.log(i.emailCode),n.value=5):M("验证码错误！")):r==T.value&&(U("修改密码成功!"),O.replace("/member/login")))})}function K(){n.value==1||n.value==2||n.value==3?n.value=.5:n.value==.5?n.value=0:(H([i,p]),n.value=.5)}function F(r){r.type="",r.disabled=!0,r.btnText="请稍候...",setTimeout(()=>{G(60,r)},500)}function G(r,e){U("验证码已发送!"),r=r||60,e.btnText=r+"s后获取",setTimeout(()=>{r>0&&(e.btnText=r+"s后获取",--r)},1e3);let l=setInterval(()=>{r>0?(e.btnText=r+"s后获取",--r):(e.btnText="获取验证码",e.disabled=!1,e.type="primary",clearInterval(l))},1e3)}q(()=>z.userName,(r,e)=>{const l=/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;r.length==1?document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="29px":r.length==0||l.test(r)?document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="18px":document.querySelector(".user_name").parentNode.parentNode.style.marginBottom="29px"}),q(()=>c.password,(r,e)=>{const l=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;r.length==1?document.querySelector(".password").parentNode.parentNode.style.marginBottom="41px":r.length==0||l.test(r)?document.querySelector(".password").parentNode.parentNode.style.marginBottom="18px":document.querySelector(".password").parentNode.parentNode.style.marginBottom="41px"});function H(r){r.forEach(e=>{for(const l in e)e[l]=""})}return(r,e)=>{const l=ae,s=se,f=ne,h=ie,y=de,k=ue,X=oe,$=le,J=W("router-link");return B(),Y("div",fe,[m("div",ge,[ce,t(X,{modelValue:g(n),"onUpdate:modelValue":e[19]||(e[19]=a=>R(n)?n.value=a:n=a),class:"tabs"},{default:o(()=>[t(y,{name:0},{default:o(()=>[t(h,{model:z,ref_key:"accountFormRef",ref:V,rules:I,class:"myForm"},{default:o(()=>[t(s,{prop:"userName"},{default:o(()=>[t(l,{modelValue:z.userName,"onUpdate:modelValue":e[0]||(e[0]=a=>z.userName=a),modelModifiers:{trim:!0},placeholder:"请输入用户名",clearable:"","prefix-icon":g(re),size:"large",class:"user_name"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,null,{default:o(()=>[t(f,{type:"primary",size:"large",style:{width:"100%"},onClick:e[1]||(e[1]=a=>b(V.value))},{default:o(()=>[d(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(y,{name:.5},{default:o(()=>[m("div",_e,[m("div",{class:"PRitem",onClick:e[2]||(e[2]=a=>R(n)?n.value=1:n=1)},[t(f,{bg:"",size:"large",style:{"font-size":"18px"}},{default:o(()=>[d(" 密保找回")]),_:1})]),m("div",{class:"PRitem",onClick:e[3]||(e[3]=a=>R(n)?n.value=2:n=2)},[t(f,{bg:"",size:"large",style:{"font-size":"18px"}},{default:o(()=>[d(" 邮箱找回")]),_:1})]),m("div",{class:"PRitem",onClick:e[4]||(e[4]=a=>R(n)?n.value=3:n=3)},[t(f,{bg:"",size:"large",style:{"font-size":"18px"}},{default:o(()=>[d(" 手机找回")]),_:1})])])]),_:1}),t(y,{name:1},{default:o(()=>[t(h,{model:p,ref_key:"confidentialityFormRef",ref:N,rules:D,class:"myForm"},{default:o(()=>[t(s,null,{default:o(()=>[t(k,{tag:"b"},{default:o(()=>[d(C(p.problemOne),1)]),_:1})]),_:1}),t(s,{prop:"answerOne"},{default:o(()=>[t(l,{modelValue:p.answerOne,"onUpdate:modelValue":e[5]||(e[5]=a=>p.answerOne=a),modelModifiers:{trim:!0},placeholder:"请输入密保答案一","prefix-icon":g(A),size:"large",maxlength:"4"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,null,{default:o(()=>[t(k,{tag:"b"},{default:o(()=>[d(C(p.problemTwo),1)]),_:1})]),_:1}),t(s,{prop:"answerTwo"},{default:o(()=>[t(l,{modelValue:p.answerTwo,"onUpdate:modelValue":e[6]||(e[6]=a=>p.answerTwo=a),modelModifiers:{trim:!0},placeholder:"请输入密保答案二","prefix-icon":g(A),size:"large",maxlength:"4"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,null,{default:o(()=>[t(f,{type:"primary",size:"large",style:{width:"100%"},onClick:e[7]||(e[7]=a=>b(N.value))},{default:o(()=>[d(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(y,{name:2},{default:o(()=>[t(h,{ref_key:"emailPhoneFormRef",ref:v,model:i,rules:P,class:"myForm"},{default:o(()=>[t(s,{prop:"email"},{default:o(()=>[t(l,{modelValue:i.email,"onUpdate:modelValue":e[8]||(e[8]=a=>i.email=a),modelModifiers:{trim:!0},placeholder:"请输入邮箱",clearable:"","prefix-icon":g(S),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,{prop:"emailCode"},{default:o(()=>[m("div",we,[t(l,{modelValue:i.emailCode,"onUpdate:modelValue":e[9]||(e[9]=a=>i.emailCode=a),modelModifiers:{trim:!0},placeholder:"请输入邮箱验证码","prefix-icon":E,size:"large",maxlength:"4"},null,8,["modelValue"]),ye,t(f,{link:"",type:_.type,class:"btnCode",disabled:_.disabled,onClick:e[10]||(e[10]=a=>F(_))},{default:o(()=>[d(C(_.btnText),1)]),_:1},8,["type","disabled"])])]),_:1}),t(s,null,{default:o(()=>[t(f,{type:"primary",size:"large",style:{width:"100%"},onClick:e[11]||(e[11]=a=>b(v.value))},{default:o(()=>[d(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(y,{name:3},{default:o(()=>[t(h,{ref_key:"emailPhoneFormRef",ref:v,model:i,rules:P,class:"myForm"},{default:o(()=>[t(s,{prop:"phone"},{default:o(()=>[t(l,{modelValue:i.phone,"onUpdate:modelValue":e[12]||(e[12]=a=>i.phone=a),modelModifiers:{trim:!0},placeholder:"请输入手机号",clearable:"","prefix-icon":g(S),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,{prop:"phoneCode"},{default:o(()=>[m("div",xe,[t(l,{modelValue:i.phoneCode,"onUpdate:modelValue":e[13]||(e[13]=a=>i.phoneCode=a),modelModifiers:{trim:!0},placeholder:"请输入手机验证码","prefix-icon":E,size:"large",maxlength:"4"},null,8,["modelValue"]),ve,t(f,{link:"",type:w.type,class:"btnCode",disabled:w.disabled,onClick:e[14]||(e[14]=a=>F(w))},{default:o(()=>[d(C(w.btnText),1)]),_:1},8,["type","disabled"])])]),_:1}),t(s,null,{default:o(()=>[t(f,{type:"primary",size:"large",style:{width:"100%"},onClick:e[15]||(e[15]=a=>b(v.value))},{default:o(()=>[d(" 下一步")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),t(y,{name:5},{default:o(()=>[t(h,{ref_key:"newPasswordFormRef",ref:T,model:c,rules:j,class:"myForm"},{default:o(()=>[t(s,{prop:"password"},{default:o(()=>[t(l,{modelValue:c.password,"onUpdate:modelValue":e[16]||(e[16]=a=>c.password=a),modelModifiers:{trim:!0},placeholder:"请输入密码",type:"password",class:"password",clearable:"","show-password":"","prefix-icon":g(Z),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,{prop:"confirmPassword"},{default:o(()=>[t(l,{modelValue:c.confirmPassword,"onUpdate:modelValue":e[17]||(e[17]=a=>c.confirmPassword=a),modelModifiers:{trim:!0},placeholder:"请再次输入密码",type:"password",clearable:"","show-password":"","prefix-icon":g(Z),size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(s,null,{default:o(()=>[t(f,{type:"primary",size:"large",style:{width:"100%"},onClick:e[18]||(e[18]=a=>b(T.value))},{default:o(()=>[d(" 确认")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1},8,["modelValue"]),m("div",{class:"gotoLogin",style:L({justifyContent:g(n)>0?"space-between":"right"})},[g(n)>0?(B(),ee($,{key:0,type:"primary",onClick:K},{default:o(()=>[d("上一步")]),_:1})):te("",!0),t(J,{to:"/member/login"},{default:o(()=>[t($,{type:"primary"},{default:o(()=>[d("去登录>>")]),_:1})]),_:1})],4)])])}}};export{Ce as default};
