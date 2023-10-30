"use strict";(self.webpackChunkcrema=self.webpackChunkcrema||[]).push([[241],{68438:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(74165),o=t(15861),c=t(74569),a=t.n(c);a().defaults.baseURL="".concat("http://95.46.96.105/backend/api"),a().interceptors.request.use((function(e){var n=function(e){try{return localStorage.getItem(e)}catch(n){console.log("Error getting data")}}("richtoken"),t=null!==n?"Bearer ".concat(n):"";return e.headers.authorization=t,e}));var i=a(),l={getData:function(e){return(0,o.Z)((0,r.Z)().mark((function n(){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.get(e);case 2:return t=n.sent,o=t.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})))()},getDataByID:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){var o,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat(e,"/").concat(n));case 2:return o=t.sent,c=o.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))()},postData:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){var o,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post(e,n);case 2:return o=t.sent,c=o.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))()},editData:function(e,n,t){return(0,o.Z)((0,r.Z)().mark((function o(){var c,a;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.put("".concat(e,"/").concat(t,"/"),n);case 2:return c=r.sent,a=c.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),o)})))()},deleteData:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("".concat(e,"/").concat(n));case 2:case"end":return t.stop()}}),t)})))()},deleteImages:function(e,n){return(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(),t.next=3,i.delete(e,{data:n});case 3:case"end":return t.stop()}}),t)})))()}}},33241:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(29439),o=t(72791),c=t(74165),a=t(15861),i=t(47528),l=t(83099),u=t(87309),s=t(34571),d=t(7112),f=t(31752),p=t(82622),v=t(16030),m=t(77221),Z=t(57689),h=t(80184),x=function(e){var n=e.data,t=e.deleteHandle,x=(0,v.I0)(),y=(0,Z.s0)(),g=function(){var e=(0,a.Z)((0,c.Z)().mark((function e(n){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t("/products/index-category",n);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=(0,o.useState)([]),b=(0,r.Z)(C,2),k=b[0],E=b[1];(0,o.useEffect)((function(){var e=null===n||void 0===n?void 0:n.reverse();E(e)}),[n]);var w=[{title:"Name",dataIndex:"name",id:"name",render:function(e){return(0,h.jsx)("p",{children:e})}},{title:"Date",dataIndex:"date",id:"date",render:function(e){return(0,h.jsx)(i.Z,{children:e})}},{title:"Action",id:"action",render:function(e,n){return(0,h.jsxs)(l.Z,{size:20,children:[(0,h.jsx)(u.Z,{onClick:function(){return e=n.id,localStorage.setItem("editDataId",e),x({type:m.Pb,payload:e}),void y("/index-category/add");var e},type:"primary",icon:(0,h.jsx)(f.Z,{}),children:"Edit"}),(0,h.jsx)(s.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:function(){return g(n.id)},children:(0,h.jsx)(u.Z,{type:"danger",icon:(0,h.jsx)(p.Z,{}),children:"Delete"})})]})}}];return(0,h.jsx)("div",{children:(0,h.jsx)(d.Z,{columns:w,dataSource:k,rowKey:function(e){return e.id}})})},y=t(50419),g=t(66106),C=t(30914),b=t(49389),k=t(37083),E=t(79286),w=t(68438),j=t(91933),O=function(){var e=(0,Z.s0)(),n=(0,v.I0)(),t=(0,j.useMutation)((function(e){var n=e.url,t=e.id;return w.Z.deleteData(n,t)})),c=t.mutate,a=t.isSuccess,i=t.isLoading,s=(0,j.useQuery)("index-category-get",(function(){return w.Z.getData("/products/index-category/")}),{onError:function(e){y.ZP.error(e)}}),d=s.data,f=s.isLoading,p=s.refetch,O=(0,o.useState)([]),P=(0,r.Z)(O,2),N=P[0],D=P[1],S=(0,o.useState)(!1),I=(0,r.Z)(S,2),T=I[0],R=I[1];(0,o.useEffect)((function(){a&&p()}),[a]);return(0,h.jsx)("div",{className:"site-space-compact-wrapper",children:(0,h.jsxs)(l.Z,{direction:"vertical",style:{width:"100%"},children:[(0,h.jsxs)(g.Z,{gutter:20,children:[(0,h.jsx)(C.Z,{span:16,children:(0,h.jsx)(b.Z,{onChange:function(e){return function(e){R(""!==e);var n=null===d||void 0===d?void 0:d.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));D(n)}(e.target.value)}})}),(0,h.jsx)(C.Z,{span:8,children:(0,h.jsx)(u.Z,{type:"primary",icon:(0,h.jsx)(E.Z,{}),style:{width:"100%"},onClick:function(){n({type:m.Pb,payload:""}),e("/index-category/add")},children:"Add"})})]}),(0,h.jsx)(k.Z,{size:"medium",spinning:f||i,children:(0,h.jsx)(x,{data:T?N:d,deleteHandle:function(e,n){c({url:e,id:n})}})})]})})}},82622:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(1413),o=t(72791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=t(54291),i=function(e,n){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:c}))};i.displayName="DeleteOutlined";var l=o.forwardRef(i)},41783:function(e,n,t){var r=t(87462),o=t(29439),c=t(98368),a=t(72791),i=t(87309),l=t(2571);function u(e){return!(!e||!e.then)}n.Z=function(e){var n=a.useRef(!1),t=a.useRef(null),s=(0,c.Z)(!1),d=(0,o.Z)(s,2),f=d[0],p=d[1],v=e.close,m=function(){null===v||void 0===v||v.apply(void 0,arguments)};a.useEffect((function(){var n=null;return e.autoFocus&&(n=setTimeout((function(){var e;null===(e=t.current)||void 0===e||e.focus()}))),function(){n&&clearTimeout(n)}}),[]);var Z=e.type,h=e.children,x=e.prefixCls,y=e.buttonProps;return a.createElement(i.Z,(0,r.Z)({},(0,l.n)(Z),{onClick:function(t){var r=e.actionFn;if(!n.current)if(n.current=!0,r){var o;if(e.emitEvent){if(o=r(t),e.quitOnNullishReturnValue&&!u(o))return n.current=!1,void m(t)}else if(r.length)o=r(v),n.current=!1;else if(!(o=r()))return void m();!function(e){u(e)&&(p(!0),e.then((function(){p(!1,!0),m.apply(void 0,arguments),n.current=!1}),(function(e){console.error(e),p(!1,!0),n.current=!1})))}(o)}else m()},loading:f,prefixCls:x},y,{ref:t}),h)}},34571:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(87462),o=t(29439),c=t(10187),a=t(81694),i=t.n(a),l=t(75179),u=t(11354),s=t(72791),d=t(71929),f=t(69228),p=t(61113),v=t(87309),m=t(2571),Z=t(41783),h=t(93486),x=t(70454),y=t(57924),g=function(e){var n=e.prefixCls,t=e.okButtonProps,o=e.cancelButtonProps,c=e.title,a=e.cancelText,i=e.okText,l=e.okType,u=e.icon,f=e.showCancel,p=void 0===f||f,g=e.close,C=e.onConfirm,b=e.onCancel,k=s.useContext(d.E_).getPrefixCls;return s.createElement(h.Z,{componentName:"Popconfirm",defaultLocale:x.Z.Popconfirm},(function(e){return s.createElement("div",{className:"".concat(n,"-inner-content")},s.createElement("div",{className:"".concat(n,"-message")},u&&s.createElement("span",{className:"".concat(n,"-message-icon")},u),s.createElement("div",{className:"".concat(n,"-message-title")},(0,y.Z)(c))),s.createElement("div",{className:"".concat(n,"-buttons")},p&&s.createElement(v.Z,(0,r.Z)({onClick:b,size:"small"},o),null!==a&&void 0!==a?a:e.cancelText),s.createElement(Z.Z,{buttonProps:(0,r.Z)((0,r.Z)({size:"small"},(0,m.n)(l)),t),actionFn:C,close:g,prefixCls:k("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==i&&void 0!==i?i:e.okText)))}))},C=void 0,b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},k=s.forwardRef((function(e,n){var t=s.useContext(d.E_).getPrefixCls,a=(0,l.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),v=(0,o.Z)(a,2),m=v[0],Z=v[1],h=function(n,t){var r,o;Z(n,!0),null===(r=e.onVisibleChange)||void 0===r||r.call(e,n,t),null===(o=e.onOpenChange)||void 0===o||o.call(e,n,t)},x=e.prefixCls,y=e.placement,k=void 0===y?"top":y,E=e.trigger,w=void 0===E?"click":E,j=e.okType,O=void 0===j?"primary":j,P=e.icon,N=void 0===P?s.createElement(c.Z,null):P,D=e.children,S=e.overlayClassName,I=b(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),T=t("popover",x),R=t("popconfirm",x),z=i()(R,S);return s.createElement(f.Z,(0,r.Z)({},I,{trigger:w,prefixCls:T,placement:k,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||h(n)},open:m,ref:n,overlayClassName:z,_overlay:s.createElement(g,(0,r.Z)({okType:O,icon:N},e,{prefixCls:T,close:function(e){h(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(C,n)},onCancel:function(n){var t;h(!1,n),null===(t=e.onCancel)||void 0===t||t.call(C,n)}}))}),(0,p.Tm)(D,{onKeyDown:function(e){var n,t;s.isValidElement(D)&&(null===(t=null===D||void 0===D?void 0:(n=D.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===u.Z.ESC&&m&&h(!1,e)}(e)}}))}))},47528:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(4942),o=t(87462),c=t(29439),a=t(60732),i=t(81694),l=t.n(i),u=t(41818),s=t(72791),d=t(71929),f=t(54466),p=t(12833),v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},m=function(e){var n,t=e.prefixCls,c=e.className,a=e.checked,i=e.onChange,u=e.onClick,f=v(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,s.useContext(d.E_).getPrefixCls)("tag",t),m=l()(p,(n={},(0,r.Z)(n,"".concat(p,"-checkable"),!0),(0,r.Z)(n,"".concat(p,"-checkable-checked"),a),n),c);return s.createElement("span",(0,o.Z)({},f,{className:m,onClick:function(e){null===i||void 0===i||i(!a),null===u||void 0===u||u(e)}}))},Z=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},h=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(f.E.join("|"),")$")),y=function(e,n){var t,i=e.prefixCls,f=e.className,v=e.style,m=e.children,y=e.icon,g=e.color,C=e.onClose,b=e.closeIcon,k=e.closable,E=void 0!==k&&k,w=Z(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),j=s.useContext(d.E_),O=j.getPrefixCls,P=j.direction,N=s.useState(!0),D=(0,c.Z)(N,2),S=D[0],I=D[1];s.useEffect((function(){"visible"in w&&I(w.visible)}),[w.visible]);var T=function(){return!!g&&(h.test(g)||x.test(g))},R=(0,o.Z)({backgroundColor:g&&!T()?g:void 0},v),z=T(),H=O("tag",i),L=l()(H,(t={},(0,r.Z)(t,"".concat(H,"-").concat(g),z),(0,r.Z)(t,"".concat(H,"-has-color"),g&&!z),(0,r.Z)(t,"".concat(H,"-hidden"),!S),(0,r.Z)(t,"".concat(H,"-rtl"),"rtl"===P),t),f),V=function(e){e.stopPropagation(),null===C||void 0===C||C(e),e.defaultPrevented||"visible"in w||I(!1)},B="onClick"in w||m&&"a"===m.type,_=(0,u.Z)(w,["visible"]),F=y||null,q=F?s.createElement(s.Fragment,null,F,s.createElement("span",null,m)):m,A=s.createElement("span",(0,o.Z)({},_,{ref:n,className:L,style:R}),q,E?b?s.createElement("span",{className:"".concat(H,"-close-icon"),onClick:V},b):s.createElement(a.Z,{className:"".concat(H,"-close-icon"),onClick:V}):null);return B?s.createElement(p.Z,null,A):A},g=s.forwardRef(y);g.CheckableTag=m;var C=g}}]);
//# sourceMappingURL=241.47b5c2e6.chunk.js.map