"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[786],{49786:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var d=a(72791),i=a(50390),r=a(83099),s=a(87309),n=a(89461),o=a(31752),l=a(16030),c=a(77221),u=a(57689),x=a(80184);const h=e=>{let{data:t}=e;const a=(0,l.I0)(),h=(0,u.s0)(),[p,j]=(0,d.useState)([]);(0,d.useEffect)((()=>{const e=null===t||void 0===t?void 0:t.reverse();j(e)}),[t]);const v=[{title:"Text Uz",dataIndex:"text_uz",id:"text_uz",render:e=>(0,x.jsx)("p",{children:e})},{title:"Text Ru",dataIndex:"text_ru",id:"text_ru",render:e=>(0,x.jsx)("p",{children:e})},{title:"Image",dataIndex:"image",id:"image",render:e=>(0,x.jsx)(i.Z,{width:50,src:null===e||void 0===e?void 0:e.image})},{title:"Action",id:"action",render:(e,t)=>(0,x.jsx)(r.Z,{size:20,children:(0,x.jsx)(s.Z,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),a({type:c.Pb,payload:e}),void h("/about/add");var e},type:"primary",icon:(0,x.jsx)(o.Z,{}),children:"Edit"})})}];return(0,x.jsx)("div",{children:(0,x.jsx)(n.Z,{columns:v,dataSource:p,rowKey:e=>e.id})})};var p=a(50419),j=a(66106),v=a(30914),m=a(49389),Z=a(37083),g=a(79286),y=a(27169),w=a(91933);const b=()=>{const e=(0,u.s0)(),t=(0,l.I0)(),{data:a,isLoading:i}=(0,w.useQuery)("about-get",(()=>y.Z.getData("/about/about")),{onError:e=>{p.ZP.error(e)}}),[n,o]=(0,d.useState)([]),[b,C]=(0,d.useState)(!1);return(0,x.jsx)("div",{className:"site-space-compact-wrapper",children:(0,x.jsxs)(r.Z,{direction:"vertical",style:{width:"100%"},children:[(0,x.jsxs)(j.Z,{gutter:20,children:[(0,x.jsx)(v.Z,{span:16,children:(0,x.jsx)(m.default,{onChange:e=>(e=>{C(""!==e);const t=null===a||void 0===a?void 0:a.filter((t=>t.name_ru.toLowerCase().includes(e.toLowerCase())||t.name_uz.toLowerCase().includes(e.toLowerCase())));o(t)})(e.target.value)})}),(0,x.jsx)(v.Z,{span:8,children:(0,x.jsx)(s.Z,{disabled:(null===a||void 0===a?void 0:a.length)>0,type:"primary",icon:(0,x.jsx)(g.Z,{}),style:{width:"100%"},onClick:()=>{t({type:c.Pb,payload:""}),e("/about/add")},children:"Add"})})]}),(0,x.jsx)(Z.Z,{size:"medium",spinning:i,children:(0,x.jsx)(h,{data:b?n:a})})]})})}}}]);
//# sourceMappingURL=786.a6f7609e.chunk.js.map