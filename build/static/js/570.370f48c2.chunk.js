"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[570],{68438:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(74165),a=n(15861),u=n(74569),o=n.n(u);o().defaults.baseURL="".concat("https://richparfum.uz/backend/api"),o().interceptors.request.use((function(e){var t=function(e){try{return localStorage.getItem(e)}catch(t){console.log("Error getting data")}}("richtoken"),n=null!==t?"Bearer ".concat(t):"";return e.headers.authorization=n,e}));var s=o(),i={getData:function(e){return(0,a.Z)((0,r.Z)().mark((function t(){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get(e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))()},getDataByID:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("".concat(e,"/").concat(t));case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})))()},postData:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){var a,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.post(e,t);case 2:return a=n.sent,u=a.data,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})))()},editData:function(e,t,n){return(0,a.Z)((0,r.Z)().mark((function a(){var u,o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.put("".concat(e,"/").concat(n,"/"),t);case 2:return u=r.sent,o=u.data,r.abrupt("return",o);case 5:case"end":return r.stop()}}),a)})))()},deleteData:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.delete("".concat(e,"/").concat(t));case 2:case"end":return n.stop()}}),n)})))()},deleteImages:function(e,t){return(0,a.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.delete(e,{data:t});case 2:case"end":return n.stop()}}),n)})))()}}},46570:function(e,t,n){n.r(t);var r=n(74165),a=n(15861),u=n(29439),o=n(72791),s=n(2409),i=n(50419),c=n(66106),l=n(30914),d=n(49389),f=n(93086),p=n(87309),m=n(91933),Z=n(68438),x=n(14138),g=n(57689),v=n(16030),h=n(77221),_=n(66920),b=n(22645),j=n(80184),w={full_name_uz:"",full_name_ru:"",job_uz:"",job_ru:"",text_uz:"",text_ru:"",image:"",facebook:"",instagram:"",telegram:"",youtube:""};t.default=function(){var e=s.Z.useForm(),t=(0,u.Z)(e,1)[0],n=(0,g.s0)(),F=(0,v.v9)((function(e){return e.editData})).editId,z=(0,v.I0)(),k=(0,o.useState)([]),y=(0,u.Z)(k,2),I=y[0],S=y[1],D=(0,m.useMutation)((function(e){var t=e.url,n=e.data;return Z.Z.postData(t,n)}),{onSuccess:function(){i.ZP.success("Success")},onError:function(e){for(var t in e.response.data)i.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),E=D.mutate,L=D.data,V=D.isLoading,P=D.isSuccess,q=(0,m.useQuery)(["edit-partner",F],(function(){return Z.Z.getDataByID("/about/partner",F)}),{enabled:!1}),C=q.isLoading,O=q.data,U=q.refetch,R=q.isSuccess,T=(0,m.useMutation)((function(e){var t=e.url,n=e.data,r=e.id;return Z.Z.editData(t,n,r)}),{onSuccess:function(){i.ZP.success("Success")},onError:function(e){for(var t in e.response.data)i.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),B=T.mutate,M=T.isLoading,N=T.data,A=T.isSuccess;(0,o.useEffect)((function(){A&&z({type:h.Pb,payload:""}),(P||A)&&n("/partner")}),[L,N]),(0,o.useEffect)((function(){""!==F&&U()}),[F]),(0,o.useEffect)((function(){""===F&&t.setFieldsValue(w)}),[]),(0,o.useEffect)((function(){if(R){var e=[{uid:null===O||void 0===O?void 0:O.id,name:null===O||void 0===O?void 0:O.id,status:"done",url:null===O||void 0===O?void 0:O.image}],n={full_name_uz:O.full_name_uz,full_name_ru:O.full_name_ru,job_uz:O.job_uz,job_ru:O.job_ru,text_uz:O.text_uz,text_ru:O.text_ru,image:O.image,facebook:"",instagram:"",telegram:"",youtube:""};S(e),t.setFieldsValue(n)}}),[O]);(0,o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("myFormValues"));e&&(e.images=[],t.setFieldsValue(e));var n=function(){localStorage.setItem("myFormValues",JSON.stringify(t.getFieldsValue()))};return window.addEventListener("beforeunload",n),function(){localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",n)}}),[]);var J=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.url){e.next=5;break}return e.next=4,new Promise((function(e){var n=new FileReader;n.readAsDataURL(t.originFileObj),n.onload=function(){return e(n.result)}}));case 4:n=e.sent;case 5:(a=new Image).src=n,null===(u=window.open(n))||void 0===u||u.document.write(a.outerHTML);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,j.jsx)("div",{children:V||C||M?(0,j.jsx)(x.QP,{}):(0,j.jsxs)(s.Z,{form:t,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:w,onFinish:function(e){var t,n,r=new FormData;(r.append("full_name_uz",e.full_name_uz),r.append("full_name_ru",e.full_name_ru),r.append("job_uz",""),r.append("job_ru",""),r.append("text_uz",e.text_uz),r.append("text_ru",e.text_ru),null!==(t=I[0])&&void 0!==t&&t.originFileObj)&&r.append("image",null===(n=I[0])||void 0===n?void 0:n.originFileObj);r.append("facebook",""),r.append("telegram",""),r.append("instagram",""),r.append("youtube",""),O?B({url:"/about/partner",data:r,id:F}):E({url:"/about/partner/",data:r})},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,j.jsxs)(c.Z,{gutter:20,children:[(0,j.jsx)(l.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:"Full Name Uz",name:"full_name_uz",rules:[{required:!0,message:"F.I.O ni kiritish talab qilinadi"}],children:(0,j.jsx)(d.Z,{})})}),(0,j.jsx)(l.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:"\u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f Ru",name:"full_name_ru",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u041f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f"}],children:(0,j.jsx)(d.Z,{})})})]}),(0,j.jsxs)(c.Z,{gutter:20,children:[(0,j.jsx)(l.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:"Fikr-mulohaza",name:"text_uz",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f Fikr-mulohaza"}],children:(0,j.jsx)(_.Z,{rows:4})})}),(0,j.jsx)(l.Z,{span:12,children:(0,j.jsx)(s.Z.Item,{label:"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c",name:"text_ru",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"}],children:(0,j.jsx)(_.Z,{rows:4})})})]}),(0,j.jsx)(c.Z,{gutter:20,children:(0,j.jsx)(s.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}],children:(0,j.jsx)(b.Z,{rotationSlider:!0,children:(0,j.jsx)(f.Z,{maxCount:1,fileList:I,listType:"picture-card",onChange:function(e){var n=e.fileList;S(n),t.setFieldsValue({image:n})},onPreview:J,beforeUpload:function(){return!1},children:I.length>0?"":"Upload"})})})}),(0,j.jsx)(p.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:R?"Edit":"Add"})]})})}},30914:function(e,t,n){var r=n(89752);t.Z=r.Z}}]);
//# sourceMappingURL=570.370f48c2.chunk.js.map