import{f as r,h as l,s as t,j as _,w as c,F as u}from"./index-79e301ba.js";import{a}from"./axios-47b9d439.js";const m={__name:"B",setup(p){const o={VITE_BASE_API:"/prod-api",BASE_URL:"/",MODE:"prod",DEV:!1,PROD:!0,SSR:!1};a.defaults.baseURL=o.VITE_BASE_API;function s(){a({url:"/students",method:"get"}).then(e=>{console.log(e)})}return(e,d)=>{const n=u;return r(),l("div",null,[t(" B标签 "),_(n,{type:"primary",size:"default",onClick:s},{default:c(()=>[t("点击发送请求")]),_:1})])}}};export{m as default};
