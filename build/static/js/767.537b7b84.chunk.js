"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[767],{68438:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(74165),a=t(15861),i=t(74569),u=t.n(i);u().defaults.baseURL="".concat("http://95.46.96.105/backend/api"),u().interceptors.request.use((function(e){var n=function(e){try{return localStorage.getItem(e)}catch(n){console.log("Error getting data")}}("richtoken"),t=null!==n?"Bearer ".concat(n):"";return e.headers.authorization=t,e}));var o=u(),s={getData:function(e){return(0,a.Z)((0,r.Z)().mark((function n(){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get(e);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},getDataByID:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("".concat(e,"/").concat(n));case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))()},postData:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){var a,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post(e,n);case 2:return a=t.sent,i=a.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))()},editData:function(e,n,t){return(0,a.Z)((0,r.Z)().mark((function a(){var i,u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.put("".concat(e,"/").concat(t,"/"),n);case 2:return i=r.sent,u=i.data,r.abrupt("return",u);case 5:case"end":return r.stop()}}),a)})))()},deleteData:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.delete("".concat(e,"/").concat(n));case 2:case"end":return t.stop()}}),t)})))()},deleteImages:function(e,n){return(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(),t.next=3,o.delete(e,{data:n});case 3:case"end":return t.stop()}}),t)})))()}}},43016:function(e,n,t){t.r(n);var r=t(74165),a=t(15861),i=t(93433),u=t(29439),o=t(72791),s=t(521),c=t(2409),l=t(50419),d=t(66106),m=t(30914),f=t(93086),v=t(49389),g=t(87309),p=t(91933),h=t(68438),Z=t(14138),x=t(57689),b=t(16030),_=t(22645),w=t(68747),j=t(66920),y=t(77221),z=t(80184),F=s.Z.Title,S={image:[],text_uz:"",text_ru:"",about_children:[{name_uz:"",name_ru:"",image:[]}]};n.default=function(){var e=c.Z.useForm(),n=(0,u.Z)(e,1)[0],t=(0,x.s0)(),s=(0,b.v9)((function(e){return e.editData})).editId,k=(0,b.I0)(),E=(0,o.useState)([]),I=(0,u.Z)(E,2),D=I[0],L=I[1],C=(0,o.useState)([]),P=(0,u.Z)(C,2),V=P[0],M=P[1],q=(0,o.useState)(""),A=(0,u.Z)(q,2),O=A[0],B=A[1],T=(0,o.useState)(0),U=(0,u.Z)(T,2),R=U[0],N=U[1],H=(0,p.useMutation)((function(e){var n=e.url,t=e.formData;return h.Z.postData(n,t)}),{onSuccess:function(){l.ZP.success("Success")},onError:function(e){for(var n in e.response.data)l.ZP.error("".concat(n,": ").concat(e.response.data[n][0]))}}),J=H.mutate,K=H.data,Q=H.isLoading,G=H.isSuccess,W=(0,p.useMutation)((function(e){var n=e.url,t=e.data;return h.Z.postData(n,t)}),{onSuccess:function(){l.ZP.success("Success")},onError:function(e){for(var n in e.response.data)l.ZP.error("".concat(n,": ").concat(e.response.data[n][0]))}}),X=W.mutate,Y=W.data,$=W.isLoading,ee=W.isSuccess,ne=(0,p.useQuery)(["edit-about",s],(function(){return h.Z.getDataByID("/about/about",s)}),{enabled:!1}),te=ne.isLoading,re=ne.data,ae=ne.refetch,ie=ne.isSuccess,ue=(0,p.useMutation)((function(e){var n=e.url,t=e.data,r=e.id;return h.Z.editData(n,t,r)}),{onSuccess:function(){l.ZP.success("Success")},onError:function(e){for(var n in e.response.data)l.ZP.error("".concat(n,": ").concat(e.response.data[n][0]))}}),oe=ue.mutate,se=ue.isLoading,ce=ue.data,le=ue.isSuccess,de=(0,p.useMutation)((function(e){var n=e.url,t=e.ids;return h.Z.deleteImages(n,t)}),{onSuccess:function(){return l.ZP.success("Success")},onError:function(e){return l.ZP.error(e.message)}}).mutate;(0,o.useEffect)((function(){le&&k({type:y.Pb,payload:""}),(ee||le)&&t("/about")}),[Y,ce]),(0,o.useEffect)((function(){""!==s&&ae()}),[s]),(0,o.useEffect)((function(){""===s&&n.setFieldsValue(S)}),[]),(0,o.useEffect)((function(){var e,t,r,a=[],i=[];if(void 0!==re)for(var u=0;u<re.about_children.length;u++){var o,s,c,l,d,m,f=[{uid:null===(o=re.about_children[u])||void 0===o||null===(s=o.image)||void 0===s?void 0:s.id,name:null===(c=re.about_children[u])||void 0===c||null===(l=c.image)||void 0===l?void 0:l.id,status:"done",url:null===(d=re.about_children[u])||void 0===d||null===(m=d.image)||void 0===m?void 0:m.image}],v={name_uz:re.about_children[u].name_uz,name_ru:re.about_children[u].name_ru,image:f};a.push(v),i.push(f)}var g=[{uid:null===re||void 0===re||null===(e=re.image)||void 0===e?void 0:e.id,name:null===re||void 0===re||null===(t=re.image)||void 0===t?void 0:t.id,status:"done",url:null===re||void 0===re||null===(r=re.image)||void 0===r?void 0:r.image}];if(ie){var p={image:g,text_uz:re.text_uz,text_ru:re.text_ru,about_children:a};L(g),M(i),n.setFieldsValue(p)}}),[re]);(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("myFormValues"));e&&(e.images=[],n.setFieldsValue(e));var t=function(){localStorage.setItem("myFormValues",JSON.stringify(n.getFieldsValue()))};return window.addEventListener("beforeunload",t),function(){localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",t)}}),[]),(0,o.useEffect)((function(){if(G&&"main"===O){var e,t,r,a=[{uid:null===K||void 0===K||null===(e=K.images[0])||void 0===e?void 0:e.id,name:null===K||void 0===K||null===(t=K.images[0])||void 0===t?void 0:t.id,status:"done",url:null===K||void 0===K||null===(r=K.images[0])||void 0===r?void 0:r.url}];L(a),B("")}var u=(0,i.Z)(V);if(G&&"child"===O){var o,s,c,l=[{uid:null===K||void 0===K||null===(o=K.images[0])||void 0===o?void 0:o.id,name:null===K||void 0===K||null===(s=K.images[0])||void 0===s?void 0:s.id,status:"done",url:null===K||void 0===K||null===(c=K.images[0])||void 0===c?void 0:c.url}];u[R]=l,M(u);var d=n.getFieldsValue(),m=null===d||void 0===d?void 0:d.about_children;m[R]||(m[R]={name_uz:"",name_ru:"",image:[]}),m[R].image=l,n.setFieldsValue({items:m}),B("")}}),[K]);var me=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.url){e.next=5;break}return e.next=4,new Promise((function(e){var t=new FileReader;t.readAsDataURL(n.originFileObj),t.onload=function(){return e(t.result)}}));case 4:t=e.sent;case 5:(a=new Image).src=t,null===(i=window.open(t))||void 0===i||i.document.write(a.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,z.jsx)("div",{children:$||te||se||Q?(0,z.jsx)(Z.QP,{}):(0,z.jsxs)(c.Z,{form:n,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:S,onFinish:function(e){for(var n,t=[],r=0;r<e.about_children.length;r++){var a,i,u="";if(V.length>0)if(null===V[r]||(null===(a=V[r])||void 0===a?void 0:a.length)<1)u="";else u=null===(i=V[r][0])||void 0===i?void 0:i.uid;var o={name_uz:e.about_children[r].name_uz,name_ru:e.about_children[r].name_ru,image:[u]};t.push(o)}var c={text_uz:e.text_uz,text_ru:e.text_uz,image:[null===(n=D[0])||void 0===n?void 0:n.uid],about_children:t};ie?oe({url:"/about/about",data:c,id:s}):X({url:"/about/about/",data:c})},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,z.jsxs)(d.Z,{gutter:20,children:[(0,z.jsx)(m.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0412\u0430\u0440\u0438\u0430\u043d\u0442",name:"text_uz",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0440\u0438\u0430\u043d\u0442"}],children:(0,z.jsx)(j.Z,{rows:4})})}),(0,z.jsx)(m.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:"Kompaniya haqida matn",name:"text_ru",rules:[{required:!0,message:"Matn talab qilinadi"}],children:(0,z.jsx)(j.Z,{rows:4})})})]}),(0,z.jsx)(d.Z,{gutter:20,children:(0,z.jsx)(m.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439"}],children:(0,z.jsx)(_.Z,{children:(0,z.jsx)(f.Z,{maxCount:1,fileList:D,listType:"picture-card",onChange:function(e){var t=e.fileList;if(n.setFieldsValue({image:t}),0!==D.length||0===t.length){var r,a=[null===(r=D[0])||void 0===r?void 0:r.uid];de({url:"/products/product-image",ids:{ids:a}}),L([])}var i=new FormData;0!==t.length&&(i.append("uploaded_images",t[0].originFileObj),J({url:"/products/product-image/",formData:i}),B("main"))},onPreview:me,beforeUpload:function(){return!1},children:D.length>0?"":"Upload"})})})})}),(0,z.jsx)(F,{level:3,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}),(0,z.jsx)(c.Z.List,{name:"about_children",children:function(e,t){var r=t.add,a=t.remove;return(0,z.jsxs)(z.Fragment,{children:[e.map((function(e,n){var t=V[n]||[];return(0,z.jsxs)("div",{style:{marginBottom:20},children:[(0,z.jsxs)(d.Z,{gutter:20,children:[(0,z.jsx)(m.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:"Afzalliklar nomi",name:[e.name,"name_uz"],rules:[{required:!0,message:"Afzalliklar nomi talab qilinadi"}],children:(0,z.jsx)(v.Z,{})})}),(0,z.jsx)(m.Z,{span:12,children:(0,z.jsx)(c.Z.Item,{label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",name:[e.name,"name_ru"],rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}],children:(0,z.jsx)(v.Z,{})})})]}),(0,z.jsx)(c.Z.Item,{label:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0424\u043e\u0442\u043e ".concat(n+1),name:[e.name,"image"],rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}],children:(0,z.jsx)(_.Z,{rotate:!0,children:(0,z.jsx)(f.Z,{maxCount:1,listType:"picture-card",fileList:t,onChange:function(e){return function(e,n){var t=n.fileList;if(N(e),V[e]||0===t.length){var r=[V[e][0].uid];de({url:"/products/product-image",ids:{ids:r}}),V[e]=null,M(V)}var a=new FormData;0!==t.length&&(a.append("uploaded_images",t[0].originFileObj),J({url:"/products/product-image/",formData:a}),B("child"))}(n,e)},onPreview:me,beforeUpload:function(){return!1},children:t.length<1&&"+ Upload"})})}),(0,z.jsx)(w.Z,{onClick:function(){return function(e,n,t,r){if(r===V[t]&&V.length>0){var a,i=[null===(a=V[t][0])||void 0===a?void 0:a.uid];V.splice(t,1),de({url:"/medias",ids:{ids:i}})}n(e)}(e.name,a,n,t)}})]},e.fieldKey)})),(0,z.jsx)(c.Z.Item,{children:(0,z.jsx)(g.Z,{type:"primary",onClick:function(){return function(e){var t=[];e();var r=n.getFieldsValue();null!==r&&void 0!==r&&r.about_children[0]||t.push({name_uz:"",name_ru:"",image:[]}),n.setFieldsValue({items:t})}(r)},block:!0,style:{backgroundColor:"#28a745"},children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442"})})]})}}),(0,z.jsx)(g.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:ie?"Edit":"Add"})]})})}},31752:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},u=t(54291),o=function(e,n){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="EditOutlined";var s=a.forwardRef(o)},68747:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a=t(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"},u=t(54291),o=function(e,n){return a.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:i}))};o.displayName="MinusCircleOutlined";var s=a.forwardRef(o)},30914:function(e,n,t){var r=t(89752);n.Z=r.Z},42748:function(e,n,t){t.d(n,{G:function(){return u}});var r=t(14937),a=function(e){if((0,r.Z)()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some((function(e){return e in t.style}))}return!1},i=function(e,n){if(!a(e))return!1;var t=document.createElement("div"),r=t.style[e];return t.style[e]=n,t.style[e]!==r};function u(e,n){return Array.isArray(e)||void 0===n?a(e):i(e,n)}}}]);
//# sourceMappingURL=767.537b7b84.chunk.js.map