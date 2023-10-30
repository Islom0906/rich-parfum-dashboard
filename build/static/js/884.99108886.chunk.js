"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[884],{68438:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(74165),a=n(15861),c=n(74569),u=n.n(c);u().defaults.baseURL="".concat("http://95.46.96.105/backend/api"),u().interceptors.request.use((function(e){var t=function(e){try{return localStorage.getItem(e)}catch(t){console.log("Error getting data")}}("richtoken"),n=null!==t?"Bearer ".concat(t):"";return e.headers.authorization=n,e}));var o=u(),i={getData:function(e){return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get(e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getDataByID:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("".concat(e,"/").concat(t));case 2:return a=n.sent,c=a.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})))()},postData:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.post(e,t);case 2:return a=n.sent,c=a.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})))()},editData:function(e,t,n){return(0,a.Z)((0,r.Z)().mark((function a(){var c,u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.put("".concat(e,"/").concat(n,"/"),t);case 2:return c=r.sent,u=c.data,r.abrupt("return",u);case 5:case"end":return r.stop()}}),a)})))()},deleteData:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.delete("".concat(e,"/").concat(t));case 2:case"end":return n.stop()}}),n)})))()},deleteImages:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(),n.next=3,o.delete(e,{data:t});case 3:case"end":return n.stop()}}),n)})))()}}},62613:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(29439),a=n(72791),c=n(83099),u=n(87309),o=n(7112),i=n(31752),s=n(16030),d=n(77221),l=n(57689),f=n(80184),p=function(e){var t=e.data,n=(0,s.I0)(),p=(0,l.s0)(),Z=(0,a.useState)([]),x=(0,r.Z)(Z,2),h=x[0],v=x[1];(0,a.useEffect)((function(){var e=null===t||void 0===t?void 0:t.reverse();v(e)}),[t]);var m=[{title:"Facebook",dataIndex:"facebook",id:"facebook",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Instagram",dataIndex:"instagram",id:"instagram",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Telegram",dataIndex:"telegram",id:"telegram",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Youtube",dataIndex:"youtube",id:"youtube",render:function(e){return(0,f.jsx)("p",{children:e})}},{title:"Action",id:"action",render:function(e,t){return(0,f.jsx)(c.Z,{size:20,children:(0,f.jsx)(u.Z,{onClick:function(){return e=t.id,localStorage.setItem("editDataId",e),n({type:d.Pb,payload:e}),void p("/social/add");var e},type:"primary",icon:(0,f.jsx)(i.Z,{}),children:"Edit"})})}}];return(0,f.jsx)("div",{children:(0,f.jsx)(o.Z,{columns:m,dataSource:h,rowKey:function(e){return e.id}})})},Z=n(50419),x=n(66106),h=n(30914),v=n(49389),m=n(37083),g=n(79286),w=n(68438),j=n(91933),b=function(){var e=(0,l.s0)(),t=(0,s.I0)(),n=(0,j.useQuery)("social-get",(function(){return w.Z.getData("/about/social-media")}),{onError:function(e){Z.ZP.error(e)}}),o=n.data,i=n.isLoading,b=(0,a.useState)([]),k=(0,r.Z)(b,2),y=k[0],I=k[1],C=(0,a.useState)(!1),D=(0,r.Z)(C,2),L=D[0],S=D[1];return(0,f.jsx)("div",{className:"site-space-compact-wrapper",children:(0,f.jsxs)(c.Z,{direction:"vertical",style:{width:"100%"},children:[(0,f.jsxs)(x.Z,{gutter:20,children:[(0,f.jsx)(h.Z,{span:16,children:(0,f.jsx)(v.Z,{onChange:function(e){return function(e){S(""!==e);var t=null===o||void 0===o?void 0:o.filter((function(t){return t.name_ru.toLowerCase().includes(e.toLowerCase())||t.name_uz.toLowerCase().includes(e.toLowerCase())}));I(t)}(e.target.value)}})}),(0,f.jsx)(h.Z,{span:8,children:(0,f.jsx)(u.Z,{type:"primary",disabled:(null===o||void 0===o?void 0:o.length)>0,icon:(0,f.jsx)(g.Z,{}),style:{width:"100%"},onClick:function(){t({type:d.Pb,payload:""}),e("social/add")},children:"Add"})})]}),(0,f.jsx)(m.Z,{size:"medium",spinning:i,children:(0,f.jsx)(p,{data:L?y:o})})]})})}}}]);
//# sourceMappingURL=884.99108886.chunk.js.map