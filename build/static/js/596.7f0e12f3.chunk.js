"use strict";(self.webpackChunkskyinvest=self.webpackChunkskyinvest||[]).push([[596],{77253:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(70885),i=n(72791),a=n(94669),r=n(80184),l=function(e){var t=e.children,n=e.className,l=e.defaultOption,o=e.onChange,c=(0,i.useState)(!1),d=(0,s.Z)(c,2),u=d[0],h=d[1],f=(0,i.useState)(l),_=(0,s.Z)(f,2),v=_[0],C=_[1];document.addEventListener("click",(function(e){"li"===e.target.localName&&C(e.target.innerText)})),(0,i.useEffect)((function(){o&&o(v)}),[v]);return(0,r.jsxs)("div",{className:"select ".concat(n),onClick:function(){h(!u)},children:[(0,r.jsx)("span",{children:v}),u&&(0,r.jsx)("ul",{className:"select__list",children:t}),(0,r.jsx)("img",{src:a.Z,alt:"arrow"})]})}},41122:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var s=n(70885),i=n(72791),a=n(16871),r=n(24889),l=n(45987),o=n(43504),c=n(7614),d=n(77253),u=n(2423),h=(n(830),n(46455)),f=n(80184),_=function(e){var t=e.e,n=e.payment,s=void 0!==n&&n,i=e.cash,a=void 0!==i&&i;return(0,f.jsxs)("div",{className:"messageblock",children:[(0,f.jsxs)("div",{className:"messageblock__header",children:[(0,f.jsx)("div",{className:"messageblock__header__title",children:(0,f.jsx)("span",{children:s?"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435":a?"\u0412\u044b\u0432\u043e\u0434":"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443 (#".concat(null===t||void 0===t?void 0:t.id,")")})}),(0,f.jsx)("div",{className:"messageblock__header__success",children:(0,f.jsx)("span",{className:s||a?"expectation"===(null===t||void 0===t?void 0:t.status)?"load":"success"===(null===t||void 0===t?void 0:t.status)?"success":"fail":"success",children:s||a?"expectation"===(null===t||void 0===t?void 0:t.status)?"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435":"success"===(null===t||void 0===t?void 0:t.status)?"\u0423\u0441\u043f\u0435\u0448\u043d\u043e":"\u041d\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e":"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"})})]}),(0,f.jsxs)("div",{className:"messageblock__footer",children:[(0,f.jsxs)("div",{className:"messageblock__footer__date",children:[(0,f.jsx)("span",{children:"\u0414\u0430\u0442\u0430:"}),(0,f.jsx)("span",{className:"opacity",children:(0,h.vh)(new Date((null===t||void 0===t?void 0:t.date_joined)||(null===t||void 0===t?void 0:t.created)))})]}),(0,f.jsxs)("div",{className:"messageblock__footer__sum",children:[(0,f.jsx)("span",{children:"\u0421\u0443\u043c\u043c\u0430:"}),(0,f.jsx)("span",{className:"opacity",children:(null===t||void 0===t?void 0:t.invested_sum)||(null===t||void 0===t?void 0:t.amount)})]})]})]})},v=n(81405),C=n(34990),p=function(){var e=(0,i.useState)(!1),t=(0,s.Z)(e,2),n=t[0],a=t[1],r=(0,i.useState)(!1),l=(0,s.Z)(r,2),o=l[0],h=l[1],p=(0,i.useState)(null),g=(0,s.Z)(p,2),x=g[0],m=g[1],j=(0,i.useState)(null),y=(0,s.Z)(j,2),w=y[0],S=y[1],Z=(0,i.useState)("\u0412\u0441\u0435"),H=(0,s.Z)(Z,2),N=H[0],b=H[1],L=(0,v.I0)(),V=(0,v.v9)((function(e){return e.history})).history;return(0,i.useEffect)((function(){L((0,C.hD)())}),[]),(0,i.useEffect)((function(){var e=document.querySelector(".react-calendar__month-view__days");null===e||void 0===e||e.addEventListener("click",(function(e){setTimeout((function(){h(!1),a(!1)}),.5)}))}),[n,o]),(0,i.useEffect)((function(){if(x&&!w){var e=new Date(x).toISOString().split("T")[0],t=(new Date).toISOString().split("T")[0];L((0,C.hD)(e,t))}else if(!x&&w){var n=(new Date).toISOString().split("T")[0],s=new Date(w).toISOString().split("T")[0];L((0,C.hD)(n,s))}else if(x&&w){var i=new Date(x).toISOString().split("T")[0],a=new Date(w).toISOString().split("T")[0];L((0,C.hD)(i,a))}}),[x,w]),(0,f.jsxs)("div",{className:"history_page history_payment",children:[(0,f.jsx)("div",{className:"history_page__title",children:(0,f.jsx)("span",{children:"\u0412\u044b\u0432\u043e\u0434"})}),(0,f.jsxs)("div",{className:"history_page__filter",children:[(0,f.jsxs)("div",{className:"history_page__filter__date",children:[(0,f.jsx)(c.Z,{label:"\u0414\u0430\u0442\u0430 \u043e\u0442",placeholder:"-- / -- / ----",onFocus:function(){a(!0),h(!1)},value:x?new Date(x).toLocaleDateString():""}),n?(0,f.jsx)(u.Z,{className:"calendar_one",onChange:m,value:x}):null]}),(0,f.jsxs)("div",{className:"history_page__filter__date",children:[(0,f.jsx)(c.Z,{label:"\u0414\u0430\u0442\u0430 \u043e\u0442",placeholder:"-- / -- / ----",onFocus:function(){h(!0),a(!1)},value:w?new Date(w).toLocaleDateString():""}),o?(0,f.jsx)(u.Z,{className:"calendar_one",onChange:S,value:w}):null]}),(0,f.jsxs)("div",{className:"history_page__filter__select",children:[(0,f.jsx)("label",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,f.jsxs)(d.Z,{defaultOption:N,onChange:function(e){return b(e)},children:[(0,f.jsx)("li",{children:"\u0412\u0441\u0435"}),(0,f.jsx)("li",{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"}),(0,f.jsx)("li",{children:"\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e"}),(0,f.jsx)("li",{children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"})]})]})]}),(0,f.jsxs)("div",{className:"history_page__messages_info",children:[(0,f.jsx)("div",{className:"history_page__messages_info__title opacity f12",children:(0,f.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439"})}),(0,f.jsx)("div",{className:"history_page__messages_info__content",children:V&&V.length?V.map((function(e){return(0,f.jsx)(_,{e:e,cash:!0})})):null})]})]})},g=function(){var e=(0,i.useState)(!1),t=(0,s.Z)(e,2),n=t[0],a=t[1],r=(0,i.useState)(!1),l=(0,s.Z)(r,2),o=l[0],h=l[1],p=(0,i.useState)(null),g=(0,s.Z)(p,2),x=g[0],m=g[1],j=(0,i.useState)(null),y=(0,s.Z)(j,2),w=y[0],S=y[1],Z=(0,i.useState)("\u0412\u0441\u0435"),H=(0,s.Z)(Z,2),N=H[0],b=H[1],L=(0,v.I0)(),V=(0,v.v9)((function(e){return e.history})).history;(0,i.useEffect)((function(){L((0,C.iv)())}),[]);return(0,i.useEffect)((function(){var e=document.querySelector(".react-calendar__month-view__days");null===e||void 0===e||e.addEventListener("click",(function(e){setTimeout((function(){h(!1),a(!1)}),.5)}))}),[n,o]),(0,i.useEffect)((function(){if(x&&!w){var e=new Date(x).toISOString().split("T")[0],t=(new Date).toISOString().split("T")[0];L((0,C.iv)(e,t))}else if(!x&&w){var n=(new Date).toISOString().split("T")[0],s=new Date(w).toISOString().split("T")[0];L((0,C.iv)(n,s))}else if(x&&w){var i=new Date(x).toISOString().split("T")[0],a=new Date(w).toISOString().split("T")[0];L((0,C.iv)(i,a))}}),[x,w]),(0,f.jsxs)("div",{className:"history_page history_payment",children:[(0,f.jsx)("div",{className:"history_page__title",children:(0,f.jsx)("span",{children:"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u044b"})}),(0,f.jsxs)("div",{className:"history_page__filter",children:[(0,f.jsxs)("div",{className:"history_page__filter__date",children:[(0,f.jsx)(c.Z,{label:"\u0414\u0430\u0442\u0430 \u043e\u0442",placeholder:"-- / -- / ----",onFocus:function(){a(!0),h(!1)},value:x?new Date(x).toLocaleDateString():""}),n?(0,f.jsx)(u.Z,{className:"calendar_one",onChange:m,value:x}):null]}),(0,f.jsxs)("div",{className:"history_page__filter__date",children:[(0,f.jsx)(c.Z,{label:"\u0414\u0430\u0442\u0430 \u043e\u0442",placeholder:"-- / -- / ----",onFocus:function(){h(!0),a(!1)},value:w?new Date(x).toLocaleDateString():""}),o?(0,f.jsx)(u.Z,{className:"calendar_one",onChange:S,value:w}):null]}),(0,f.jsxs)("div",{className:"history_page__filter__select",children:[(0,f.jsx)("label",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,f.jsxs)(d.Z,{defaultOption:N,onChange:function(e){return b(e)},children:[(0,f.jsx)("li",{children:"\u0412\u0441\u0435"}),(0,f.jsx)("li",{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"}),(0,f.jsx)("li",{children:"\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e"}),(0,f.jsx)("li",{children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"})]})]})]}),(0,f.jsxs)("div",{className:"history_page__messages_info",children:[(0,f.jsx)("div",{className:"history_page__messages_info__title opacity f12",children:(0,f.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439"})}),(0,f.jsx)("div",{className:"history_page__messages_info__content",children:V&&V.length?V.map((function(e){return(0,f.jsx)(_,{e:e})})):null})]})]})},x=n(42982),m=function(){var e=(0,i.useState)(!1),t=(0,s.Z)(e,2),n=t[0],a=t[1],r=(0,i.useState)(!1),l=(0,s.Z)(r,2),o=l[0],h=l[1],p=(0,i.useState)(null),g=(0,s.Z)(p,2),m=g[0],j=g[1],y=(0,i.useState)(null),w=(0,s.Z)(y,2),S=w[0],Z=w[1],H=(0,i.useState)("\u0412\u0441\u0435"),N=(0,s.Z)(H,2),b=N[0],L=N[1],V=(0,i.useState)([]),D=(0,s.Z)(V,2),E=D[0],T=D[1],M=(0,v.I0)(),k=(0,v.v9)((function(e){return e.history})).history;return(0,i.useEffect)((function(){var e=document.querySelector(".react-calendar__month-view__days");null===e||void 0===e||e.addEventListener("click",(function(e){setTimeout((function(){h(!1),a(!1)}),.5)}))}),[n,o]),(0,i.useEffect)((function(){M((0,C.ap)())}),[]),(0,i.useEffect)((function(){k&&k.payments&&T([].concat((0,x.Z)(k.payments),(0,x.Z)(k.tether_payments)).sort((function(e,t){return new Date(t.created)-new Date(e.created)})))}),[k]),(0,i.useEffect)((function(){if(m&&!S){var e=new Date(m).toISOString().split("T")[0],t=(new Date).toISOString().split("T")[0];M((0,C.ap)(e,t))}else if(!m&&S){var n=(new Date).toISOString().split("T")[0],s=new Date(S).toISOString().split("T")[0];M((0,C.ap)(n,s))}else if(m&&S){var i=new Date(m).toISOString().split("T")[0],a=new Date(S).toISOString().split("T")[0];M((0,C.ap)(i,a))}}),[m,S]),(0,f.jsxs)("div",{className:"history_page history_payment",children:[(0,f.jsx)("div",{className:"history_page__title",children:(0,f.jsx)("span",{children:"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"})}),(0,f.jsxs)("div",{className:"history_page__filter",children:[(0,f.jsxs)("div",{className:"history_page__filter__date",children:[(0,f.jsx)(c.Z,{label:"\u0414\u0430\u0442\u0430 \u043e\u0442",placeholder:"-- / -- / ----",onFocus:function(){a(!0),h(!1)},value:m?new Date(m).toLocaleDateString():""}),n?(0,f.jsx)(u.Z,{className:"calendar_one",onChange:j,value:m}):null]}),(0,f.jsxs)("div",{className:"history_page__filter__date",children:[(0,f.jsx)(c.Z,{label:"\u0414\u0430\u0442\u0430 \u043e\u0442",placeholder:"-- / -- / ----",onFocus:function(){h(!0),a(!1)},value:S?new Date(S).toLocaleDateString():""}),o?(0,f.jsx)(u.Z,{className:"calendar_one",onChange:Z,value:S}):null]}),(0,f.jsxs)("div",{className:"history_page__filter__select",children:[(0,f.jsx)("label",{children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),(0,f.jsxs)(d.Z,{defaultOption:b,onChange:function(e){return L(e)},children:[(0,f.jsx)("li",{children:"\u0412\u0441\u0435"}),(0,f.jsx)("li",{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e"}),(0,f.jsx)("li",{children:"\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e"}),(0,f.jsx)("li",{children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435"})]})]})]}),(0,f.jsxs)("div",{className:"history_page__messages_info",children:[(0,f.jsx)("div",{className:"history_page__messages_info__title opacity f12",children:(0,f.jsx)("span",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439"})}),(0,f.jsx)("div",{className:"history_page__messages_info__content",children:E&&E.length?E.map((function(e){return(0,f.jsx)(_,{e:e,payment:!0})})):null})]})]})},j=[{url:r.Z.history_payment,svg:(0,f.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M6.67188 9.39062C6.75391 9.47266 6.86328 9.5 7 9.5C7.10938 9.5 7.21875 9.47266 7.30078 9.39062L10.3633 6.32812C10.5273 6.16406 10.5273 5.86328 10.3633 5.69922C10.1992 5.53516 9.89844 5.53516 9.73438 5.69922L7.4375 8.02344V1.1875C7.4375 0.96875 7.21875 0.75 7 0.75C6.75391 0.75 6.5625 0.96875 6.5625 1.1875V8.02344L4.23828 5.69922C4.07422 5.53516 3.77344 5.53516 3.60938 5.69922C3.44531 5.86328 3.44531 6.16406 3.60938 6.32812L6.67188 9.39062ZM12.6875 9.5H10.5C10.3086 9.5 10.1719 9.60938 10.0898 9.74609L9.35156 11.25H4.62109L3.88281 9.74609C3.80078 9.60938 3.66406 9.5 3.5 9.5H1.3125C0.574219 9.5 0 10.1016 0 10.8125V13.4375C0 14.1758 0.574219 14.75 1.3125 14.75H12.6875C13.3984 14.75 14 14.1758 14 13.4375V10.8125C14 10.1016 13.3984 9.5 12.6875 9.5ZM13.125 13.4375C13.125 13.6836 12.9062 13.875 12.6875 13.875H1.3125C1.06641 13.875 0.875 13.6836 0.875 13.4375V10.8125C0.875 10.5938 1.06641 10.375 1.3125 10.375H3.22656L3.96484 11.9062C4.04688 12.043 4.18359 12.125 4.34766 12.125H9.625C9.78906 12.125 9.92578 12.043 10.0078 11.9062L10.7461 10.375H12.6875C12.9062 10.375 13.125 10.5938 13.125 10.8125V13.4375Z",fill:"#09090E"})}),title:"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"},{url:r.Z.history_cash,svg:(0,f.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M4.23828 4.57812L6.5625 2.25391V9.0625C6.5625 9.30859 6.75391 9.5 7 9.5C7.21875 9.5 7.4375 9.30859 7.4375 9.0625V2.25391L9.73438 4.57812C9.89844 4.74219 10.1992 4.74219 10.3633 4.57812C10.5273 4.41406 10.5273 4.11328 10.3633 3.94922L7.30078 0.886719C7.21875 0.804688 7.10938 0.75 7 0.75C6.86328 0.75 6.75391 0.804688 6.67188 0.886719L3.60938 3.94922C3.44531 4.11328 3.44531 4.41406 3.60938 4.57812C3.77344 4.74219 4.07422 4.74219 4.23828 4.57812ZM12.6875 9.5H10.5C10.3086 9.5 10.1719 9.60938 10.0898 9.74609L9.35156 11.25H4.62109L3.88281 9.74609C3.80078 9.60938 3.66406 9.5 3.5 9.5H1.3125C0.574219 9.5 0 10.1016 0 10.8125V13.4375C0 14.1758 0.574219 14.75 1.3125 14.75H12.6875C13.3984 14.75 14 14.1758 14 13.4375V10.8125C14 10.1016 13.3984 9.5 12.6875 9.5ZM13.125 13.4375C13.125 13.6836 12.9062 13.875 12.6875 13.875H1.3125C1.06641 13.875 0.875 13.6836 0.875 13.4375V10.8125C0.875 10.5938 1.06641 10.375 1.3125 10.375H3.22656L3.96484 11.9062C4.04688 12.043 4.18359 12.125 4.34766 12.125H9.625C9.78906 12.125 9.92578 12.043 10.0078 11.9062L10.7461 10.375H12.6875C12.9062 10.375 13.125 10.5938 13.125 10.8125V13.4375Z",fill:"#09090E"})}),title:"\u0412\u044b\u0432\u043e\u0434"},{url:r.Z.history_group,svg:(0,f.jsx)("svg",{width:"18",height:"15",viewBox:"0 0 18 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M16.5742 9.99219H16.3555V9.77344C16.3555 9.14453 15.8633 8.625 15.2344 8.625H14.1406C13.4844 8.625 12.9922 9.14453 12.9922 9.77344V9.99219H12.7734C12.1172 9.99219 11.625 10.5117 11.625 11.1406V12.2344C11.625 12.8906 12.1172 13.3828 12.7461 13.3828H12.9648V13.6016C12.9648 14.2578 13.457 14.75 14.1133 14.75H15.207C15.8359 14.75 16.3281 14.2578 16.3281 13.6016V13.3828H16.5469C17.2305 13.3828 17.75 12.8906 17.75 12.2344V11.1406C17.75 10.5117 17.2305 9.99219 16.5742 9.99219ZM16.875 12.2344C16.875 12.3984 16.7383 12.5078 16.6016 12.5078H15.5078V13.6016C15.5078 13.7656 15.3711 13.875 15.2344 13.875H14.1406C14.0039 13.875 13.8672 13.7656 13.8672 13.6016V12.5078H12.7734C12.6094 12.5078 12.5 12.3984 12.5 12.2344V11.1406C12.5 11.0039 12.6094 10.8672 12.7461 10.8672H13.8398V9.77344C13.8398 9.63672 13.9492 9.5 14.1133 9.5H15.207C15.3438 9.5 15.4531 9.63672 15.4531 9.77344V10.8672H16.5469C16.7383 10.8672 16.875 11.0039 16.875 11.1406V12.2344ZM13.8125 6C13.5117 6 13.2109 6.08203 12.9375 6.19141C12.7188 6.30078 12.6094 6.54688 12.6914 6.76562C12.7734 7.01172 13.0469 7.12109 13.293 7.01172C13.457 6.92969 13.6211 6.875 13.8125 6.875H15.5898C16.0273 6.875 16.4375 7.14844 16.6562 7.53125C16.7383 7.66797 16.875 7.75 17.0391 7.75C17.3945 7.75 17.5859 7.39453 17.4219 7.09375C17.0391 6.4375 16.3555 6 15.5898 6H13.8125ZM14.25 5.125C15.4531 5.125 16.4375 4.16797 16.4375 2.9375C16.4375 1.73438 15.4531 0.75 14.25 0.75C13.0195 0.75 12.0625 1.73438 12.0625 2.9375C12.0625 4.16797 13.0195 5.125 14.25 5.125ZM14.25 1.625C14.9609 1.625 15.5625 2.22656 15.5625 2.9375C15.5625 3.67578 14.9609 4.25 14.25 4.25C13.5117 4.25 12.9375 3.67578 12.9375 2.9375C12.9375 2.22656 13.5117 1.625 14.25 1.625ZM11.1875 13.875H4.625C4.70703 12.4258 6.01953 11.25 7.60547 11.25H10.3125C10.5312 11.25 10.75 11.0586 10.75 10.8125C10.75 10.5938 10.5312 10.375 10.3125 10.375H7.63281C5.47266 10.375 3.75 12.0156 3.75 14.0391C3.75 14.4492 4.07812 14.75 4.51562 14.75H11.1875C11.4062 14.75 11.625 14.5586 11.625 14.3125C11.625 14.0938 11.4062 13.875 11.1875 13.875ZM4.67969 7.01172C4.89844 7.12109 5.17188 7.01172 5.28125 6.79297C5.36328 6.57422 5.28125 6.32812 5.0625 6.21875C4.78906 6.08203 4.48828 6 4.1875 6H2.38281C1.20703 6 0.25 7.03906 0.25 8.26953V8.625C0.25 8.87109 0.441406 9.0625 0.6875 9.0625C0.90625 9.0625 1.125 8.87109 1.125 8.625V8.26953C1.125 7.50391 1.69922 6.875 2.38281 6.875H4.1875C4.35156 6.875 4.51562 6.92969 4.67969 7.01172ZM3.75 5.125C4.95312 5.125 5.9375 4.16797 5.9375 2.9375C5.9375 1.73438 4.95312 0.75 3.75 0.75C2.51953 0.75 1.5625 1.73438 1.5625 2.9375C1.5625 4.16797 2.51953 5.125 3.75 5.125ZM3.75 1.625C4.46094 1.625 5.0625 2.22656 5.0625 2.9375C5.0625 3.67578 4.46094 4.25 3.75 4.25C3.01172 4.25 2.4375 3.67578 2.4375 2.9375C2.4375 2.22656 3.01172 1.625 3.75 1.625ZM8.97266 9.5C10.5586 9.5 11.8164 8.24219 11.8164 6.65625C11.8164 5.09766 10.5312 3.8125 8.97266 3.8125C7.41406 3.8125 6.15625 5.09766 6.15625 6.65625C6.12891 8.24219 7.41406 9.5 8.97266 9.5ZM8.97266 4.6875C10.0664 4.6875 10.9414 5.58984 10.9414 6.65625C10.9414 7.75 10.0664 8.625 8.97266 8.625C7.90625 8.625 7.00391 7.75 7.00391 6.65625C7.00391 5.58984 7.90625 4.6875 8.97266 4.6875Z",fill:"#09090E"})}),title:"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0440\u0443\u043f\u043f\u044b"}],y=function(){var e=(0,a.TH)(),t=(0,o.lr)(),n=(0,s.Z)(t,2),r=n[0],l=(n[1],(0,i.useState)()),c=(0,s.Z)(l,2),d=c[0],u=c[1];return(0,i.useEffect)((function(){e.search&&u(r.get("type"))}),[e.search]),(0,f.jsx)("div",{className:"history_sidebar",children:(0,f.jsx)("nav",{className:"history_sidebar__links",children:j.map((function(e){return(0,f.jsxs)(o.rU,{className:e.url==="/history?type="+d?"active":"",to:e.url,children:[e.svg,e.title]})}))})})},w=n(76203),S=n(56647),Z=[{url:r.Z.history_payment,svg:(0,f.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M6.67188 9.39062C6.75391 9.47266 6.86328 9.5 7 9.5C7.10938 9.5 7.21875 9.47266 7.30078 9.39062L10.3633 6.32812C10.5273 6.16406 10.5273 5.86328 10.3633 5.69922C10.1992 5.53516 9.89844 5.53516 9.73438 5.69922L7.4375 8.02344V1.1875C7.4375 0.96875 7.21875 0.75 7 0.75C6.75391 0.75 6.5625 0.96875 6.5625 1.1875V8.02344L4.23828 5.69922C4.07422 5.53516 3.77344 5.53516 3.60938 5.69922C3.44531 5.86328 3.44531 6.16406 3.60938 6.32812L6.67188 9.39062ZM12.6875 9.5H10.5C10.3086 9.5 10.1719 9.60938 10.0898 9.74609L9.35156 11.25H4.62109L3.88281 9.74609C3.80078 9.60938 3.66406 9.5 3.5 9.5H1.3125C0.574219 9.5 0 10.1016 0 10.8125V13.4375C0 14.1758 0.574219 14.75 1.3125 14.75H12.6875C13.3984 14.75 14 14.1758 14 13.4375V10.8125C14 10.1016 13.3984 9.5 12.6875 9.5ZM13.125 13.4375C13.125 13.6836 12.9062 13.875 12.6875 13.875H1.3125C1.06641 13.875 0.875 13.6836 0.875 13.4375V10.8125C0.875 10.5938 1.06641 10.375 1.3125 10.375H3.22656L3.96484 11.9062C4.04688 12.043 4.18359 12.125 4.34766 12.125H9.625C9.78906 12.125 9.92578 12.043 10.0078 11.9062L10.7461 10.375H12.6875C12.9062 10.375 13.125 10.5938 13.125 10.8125V13.4375Z",fill:"#09090E"})}),title:"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"},{url:r.Z.history_cash,svg:(0,f.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M4.23828 4.57812L6.5625 2.25391V9.0625C6.5625 9.30859 6.75391 9.5 7 9.5C7.21875 9.5 7.4375 9.30859 7.4375 9.0625V2.25391L9.73438 4.57812C9.89844 4.74219 10.1992 4.74219 10.3633 4.57812C10.5273 4.41406 10.5273 4.11328 10.3633 3.94922L7.30078 0.886719C7.21875 0.804688 7.10938 0.75 7 0.75C6.86328 0.75 6.75391 0.804688 6.67188 0.886719L3.60938 3.94922C3.44531 4.11328 3.44531 4.41406 3.60938 4.57812C3.77344 4.74219 4.07422 4.74219 4.23828 4.57812ZM12.6875 9.5H10.5C10.3086 9.5 10.1719 9.60938 10.0898 9.74609L9.35156 11.25H4.62109L3.88281 9.74609C3.80078 9.60938 3.66406 9.5 3.5 9.5H1.3125C0.574219 9.5 0 10.1016 0 10.8125V13.4375C0 14.1758 0.574219 14.75 1.3125 14.75H12.6875C13.3984 14.75 14 14.1758 14 13.4375V10.8125C14 10.1016 13.3984 9.5 12.6875 9.5ZM13.125 13.4375C13.125 13.6836 12.9062 13.875 12.6875 13.875H1.3125C1.06641 13.875 0.875 13.6836 0.875 13.4375V10.8125C0.875 10.5938 1.06641 10.375 1.3125 10.375H3.22656L3.96484 11.9062C4.04688 12.043 4.18359 12.125 4.34766 12.125H9.625C9.78906 12.125 9.92578 12.043 10.0078 11.9062L10.7461 10.375H12.6875C12.9062 10.375 13.125 10.5938 13.125 10.8125V13.4375Z",fill:"#09090E"})}),title:"\u0412\u044b\u0432\u043e\u0434"}],H=function(){var e=(0,a.TH)(),t=(0,o.lr)(),n=(0,s.Z)(t,2),r=n[0],l=(n[1],(0,i.useState)()),c=(0,s.Z)(l,2),d=c[0],u=c[1];return(0,i.useEffect)((function(){e.search&&u(r.get("type"))}),[e.search]),(0,f.jsx)("div",{className:"history_sidebar",children:(0,f.jsx)("nav",{className:"history_sidebar__links",children:Z.map((function(e){return(0,f.jsxs)(o.rU,{className:e.url==="/history?type="+d?"active":"",to:e.url,children:[e.svg,e.title]})}))})})},N=["children","setGetTitle"],b=[{component:p,type:"cash",title:"\u0412\u044b\u0432\u043e\u0434"},{component:g,type:"group",title:"\u0413\u0440\u0443\u043f\u043f"},{component:m,type:"payment",title:"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"}],L=function(e){e.children;var t=e.setGetTitle,n=((0,l.Z)(e,N),(0,a.TH)()),r=(0,S.T)().rename,c=(0,o.lr)(),d=(0,s.Z)(c,2),u=d[0],h=d[1],_=(0,i.useState)(),C=(0,s.Z)(_,2),p=C[0],g=C[1],x=(0,i.useState)(),m=(0,s.Z)(x,2),j=m[0],Z=m[1],L=(0,i.useState)(),V=(0,s.Z)(L,2),D=V[0],E=V[1],T=(0,v.v9)((function(e){return e.user})).isTraider;(0,i.useEffect)((function(){M()}),[n.search]),(0,i.useEffect)((function(){window.addEventListener("resize",(function(e){M()}))}),[]);var M=function(){k(u.get("type")),document.body.offsetWidth>=700?(E(!0),Z(!0),n.search||(h({type:"payment"}),k("payment"))):n.search?(E(!1),Z(!0)):(E(!0),Z(!1))},k=function(e){var n=b.filter((function(t){return t.type===e}))[0];n?(r("\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 | ".concat(n.title)),t(n.title),g((0,f.jsx)(n.component,{}))):g((0,f.jsx)(w.Z,{codeError:"404"}))};return(0,f.jsxs)("div",{className:"historylayout",children:[D?T?(0,f.jsx)(H,{}):(0,f.jsx)(y,{}):null,j?(0,f.jsx)("div",{className:"historylayout__content",children:p}):null]})},V=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],l=t[1],o=(0,v.v9)((function(e){return e.user})),c=o.isTraider,d=o.user,u=(0,a.TH)(),h=(0,a.s0)();return(0,f.jsxs)("div",{className:"main",children:[(0,f.jsx)("div",{className:"main__header history_header",children:(0,f.jsxs)("div",{className:"main__header__title",children:[(0,f.jsx)("div",{className:"history_header__back",onClick:function(){u.search?(h(r.Z.history),l("\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438")):d&&h(c?r.Z.traider_page:r.Z.investor_page)}}),(0,f.jsx)("svg",{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,f.jsx)("path",{d:"M14 7.75C14 11.6328 10.8555 14.75 7 14.75C3.11719 14.75 0 11.6328 0 7.75C0 6.30078 0.4375 4.96094 1.20312 3.83984C1.33984 3.62109 1.61328 3.56641 1.80469 3.70312C1.99609 3.83984 2.05078 4.11328 1.91406 4.33203C1.25781 5.31641 0.875 6.49219 0.875 7.75C0.875 11.1406 3.60938 13.875 7 13.875C10.3633 13.875 13.125 11.1406 13.125 7.75C13.125 4.52344 10.6094 1.87109 7.4375 1.65234V3.8125C7.4375 4.05859 7.21875 4.25 7 4.25C6.75391 4.25 6.5625 4.05859 6.5625 3.8125V1.1875C6.5625 0.96875 6.75391 0.75 7 0.75C10.8555 0.75 14 3.89453 14 7.75ZM7.30078 7.44922C7.46484 7.61328 7.46484 7.91406 7.30078 8.07812C7.13672 8.24219 6.83594 8.24219 6.67188 8.07812L4.04688 5.45312C3.88281 5.28906 3.88281 4.98828 4.04688 4.82422C4.21094 4.66016 4.51172 4.66016 4.67578 4.82422L7.30078 7.44922Z",fill:"#09090E"})}),(0,f.jsx)("span",{children:n||"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"})]})}),(0,f.jsx)("div",{className:"main__history_content",children:(0,f.jsx)(L,{setGetTitle:function(e){e&&l(e)}})})]})}},32948:function(e,t,n){n.d(t,{Z:function(){return p}});var s=n(87462),i=n(63366),a=n(72791),r=a.useLayoutEffect,l=function(e,t){"function"!==typeof e?e.current=t:e(t)},o=function(e,t){var n=(0,a.useRef)();return(0,a.useCallback)((function(s){e.current=s,n.current&&l(n.current,null),n.current=t,t&&l(t,s)}),[t])},c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(c).forEach((function(t){e.style.setProperty(t,c[t],"important")}))},u=null;var h=function(){},f=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],_=!!document.documentElement.currentStyle,v=function(e){var t=function(e){var t=a.useRef(e);return r((function(){t.current=e})),t}(e);(0,a.useLayoutEffect)((function(){var e=function(e){t.current(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[])},C=function(e,t){var n=e.cacheMeasurements,r=e.maxRows,l=e.minRows,c=e.onChange,C=void 0===c?h:c,p=e.onHeightChange,g=void 0===p?h:p,x=(0,i.Z)(e,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]);var m=void 0!==x.value,j=(0,a.useRef)(null),y=o(j,t),w=(0,a.useRef)(0),S=(0,a.useRef)(),Z=function(){var e=j.current,t=n&&S.current?S.current:function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n,s=(n=t,f.reduce((function(e,t){return e[t]=n[t],e}),{})),i=s.boxSizing;return""===i?null:(_&&"border-box"===i&&(s.width=parseFloat(s.width)+parseFloat(s.borderRightWidth)+parseFloat(s.borderLeftWidth)+parseFloat(s.paddingRight)+parseFloat(s.paddingLeft)+"px"),{sizingStyle:s,paddingSize:parseFloat(s.paddingBottom)+parseFloat(s.paddingTop),borderSize:parseFloat(s.borderBottomWidth)+parseFloat(s.borderTopWidth)})}(e);if(t){S.current=t;var s=function(e,t,n,s){void 0===n&&(n=1),void 0===s&&(s=1/0),u||((u=document.createElement("textarea")).setAttribute("tabindex","-1"),u.setAttribute("aria-hidden","true"),d(u)),null===u.parentNode&&document.body.appendChild(u);var i=e.paddingSize,a=e.borderSize,r=e.sizingStyle,l=r.boxSizing;Object.keys(r).forEach((function(e){var t=e;u.style[t]=r[t]})),d(u),u.value=t;var o=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize}(u,e);u.value="x";var c=u.scrollHeight-i,h=c*n;"border-box"===l&&(h=h+i+a),o=Math.max(h,o);var f=c*s;return"border-box"===l&&(f=f+i+a),[o=Math.min(f,o),c]}(t,e.value||e.placeholder||"x",l,r),i=s[0],a=s[1];w.current!==i&&(w.current=i,e.style.setProperty("height",i+"px","important"),g(i,{rowHeight:a}))}};return(0,a.useLayoutEffect)(Z),v(Z),(0,a.createElement)("textarea",(0,s.Z)({},x,{onChange:function(e){m||Z(),C(e)},ref:y}))},p=(0,a.forwardRef)(C)}}]);
//# sourceMappingURL=596.7f0e12f3.chunk.js.map