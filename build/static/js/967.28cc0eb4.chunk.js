"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[967],{68438:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(74165),a=n(15861),o=n(74569),u=n.n(o);u().defaults.baseURL="".concat("https://richparfum.uz/backend/api"),u().interceptors.request.use((function(e){var t=function(e){try{return localStorage.getItem(e)}catch(t){console.log("Error getting data")}}("richtoken"),n=null!==t?"Bearer ".concat(t):"";return e.headers.authorization=n,e}));var c=u(),s={getData:function(e){return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get(e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getDataByID:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("".concat(e,"/").concat(t));case 2:return a=n.sent,o=a.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()},postData:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.post(e,t);case 2:return a=n.sent,o=a.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()},editData:function(e,t,n){return(0,a.Z)((0,r.Z)().mark((function a(){var o,u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.put("".concat(e,"/").concat(n,"/"),t);case 2:return o=r.sent,u=o.data,r.abrupt("return",u);case 5:case"end":return r.stop()}}),a)})))()},deleteData:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.delete("".concat(e,"/").concat(t));case 2:case"end":return n.stop()}}),n)})))()},deleteImages:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.delete(e,{data:t});case 2:case"end":return n.stop()}}),n)})))()}}},44967:function(e,t,n){n.r(t);var r=n(74165),a=n(15861),o=n(29439),u=n(72791),c=n(2409),s=n(50419),i=n(66106),l=n(93086),d=n(87309),f=n(91933),p=n(68438),v=n(14138),m=n(57689),g=n(16030),Z=n(77221),h=n(22645),w=n(80184),x={logo:""};t.default=function(){var e=c.Z.useForm(),t=(0,o.Z)(e,1)[0],n=(0,m.s0)(),b=(0,g.v9)((function(e){return e.editData})).editId,F=(0,g.I0)(),y=(0,u.useState)([]),S=(0,o.Z)(y,2),k=S[0],D=S[1],I=(0,f.useMutation)((function(e){var t=e.url,n=e.data;return p.Z.postData(t,n)}),{onSuccess:function(){s.ZP.success("Success")},onError:function(e){for(var t in e.response.data)s.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),j=I.mutate,E=I.data,L=I.isLoading,V=I.isSuccess,P=(0,f.useQuery)(["edit-logo",b],(function(){return p.Z.getDataByID("/products/site-logo",b)}),{enabled:!1}),C=P.isLoading,O=P.data,T=P.refetch,U=P.isSuccess,B=(0,f.useMutation)((function(e){var t=e.url,n=e.data,r=e.id;return p.Z.editData(t,n,r)}),{onSuccess:function(){s.ZP.success("Success")},onError:function(e){for(var t in e.response.data)s.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),M=B.mutate,R=B.isLoading,q=B.data,z=B.isSuccess;(0,u.useEffect)((function(){z&&F({type:Z.Pb,payload:""}),(V||z)&&n("/logo")}),[E,q]),(0,u.useEffect)((function(){""!==b&&T()}),[b]),(0,u.useEffect)((function(){""===b&&t.setFieldsValue(x)}),[]),(0,u.useEffect)((function(){if(U){var e=[{uid:null===O||void 0===O?void 0:O.id,name:null===O||void 0===O?void 0:O.id,status:"done",url:null===O||void 0===O?void 0:O.logo}],n={logo:O.logo};D(e),t.setFieldsValue(n)}}),[O]);(0,u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("myFormValues"));e&&(e.images=[],t.setFieldsValue(e));var n=function(){localStorage.setItem("myFormValues",JSON.stringify(t.getFieldsValue()))};return window.addEventListener("beforeunload",n),function(){localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",n)}}),[]);var A=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.url){e.next=5;break}return e.next=4,new Promise((function(e){var n=new FileReader;n.readAsDataURL(t.originFileObj),n.onload=function(){return e(n.result)}}));case 4:n=e.sent;case 5:(a=new Image).src=n,null===(o=window.open(n))||void 0===o||o.document.write(a.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsx)("div",{children:L||C||R?(0,w.jsx)(v.QP,{}):(0,w.jsxs)(c.Z,{form:t,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:x,onFinish:function(){var e,t,n=new FormData;null!==(e=k[0])&&void 0!==e&&e.originFileObj&&n.append("logo",null===(t=k[0])||void 0===t?void 0:t.originFileObj);O?M({url:"/products/site-logo",data:n,id:b}):j({url:"/products/site-logo/",data:n})},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,w.jsx)(i.Z,{gutter:20,children:(0,w.jsx)(c.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 png 90x60",name:"logo",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0442\u0438\u043f"}],children:(0,w.jsx)(h.Z,{rotationSlider:!0,children:(0,w.jsx)(l.Z,{maxCount:1,fileList:k,listType:"picture-card",onChange:function(e){var n=e.fileList;D(n),t.setFieldsValue({logo:n})},onPreview:A,beforeUpload:function(){return!1},children:k.length>0?"":"Upload"})})})}),(0,w.jsx)(d.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:U?"Edit":"Add"})]})})}}}]);
//# sourceMappingURL=967.28cc0eb4.chunk.js.map