"use strict";(self.webpackChunkkapusta_team_project=self.webpackChunkkapusta_team_project||[]).push([[917],{5698:function(e,t,n){n.d(t,{Z:function(){return y}});var a,r=n(885),o="Modal_modal__DJDMv",i="Modal_active__-p53x Modal_modal__DJDMv",l="Modal_partOfModal__yZSNf",s="Modal_text__KJZTz",c=n(2791),u=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){var n=e.title,r=e.titleId,o=p(e,u);return c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},o),n?c.createElement("title",{id:r},n):null,a||(a=c.createElement("path",{d:"M8 3 0 13h16z"})))}var m=c.forwardRef(f),_=(n.p,n(184)),v=function(e){var t=e.handleToggle,n=e.active;e.setActive;return(0,_.jsxs)("div",{className:"".concat(n?i:o," "),onClick:function(e){e.target===e.currentTarget&&t()},children:[(0,_.jsx)("p",{children:"Hello! To get started, enter the current balance of your account!"}),(0,_.jsx)("p",{className:s,children:"You can't spend money until you have it :)"}),(0,_.jsx)(m,{width:"25px",className:l})]})},g=n(5048),h=n(8724),x={container:"Balance_container__qL3d1",balance:"Balance_balance__41oSS",wrap:"Balance_wrap__-7-60",amount:"Balance_amount__PZJn2",confirmBtn:"Balance_confirmBtn__ctfY4"},y=function(){var e=(0,c.useState)(!1),t=(0,r.Z)(e,2),n=t[0],a=t[1],o=(0,g.v9)((function(e){return e.auth.userData.balance})),i=(0,g.I0)();(0,c.useEffect)((function(){0!==o||a(!0)}),[o]);return(0,_.jsxs)("div",{className:x.container,children:[(0,_.jsx)("span",{className:x.balance,children:"Balance:"}),(0,_.jsxs)("div",{className:x.wrap,children:[(0,_.jsxs)("div",{className:x.amount,children:[o," UAH"]}),(0,_.jsx)("button",{className:x.confirmBtn,type:"button",onClick:function(){return i((0,h.Xv)(40))},children:"CONFIRM"}),n&&(0,_.jsx)(v,{className:x.modal,handleToggle:function(){a(!n)},active:n,setActive:a})]})]})}},5917:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var a=n(885),r="ReportsPage_container__x6J4v",o="ReportsPage_block__c8tYZ",i="ReportsPage_header__go1nI",l="ReportsPage_text__uvXFd",s="ReportsPage_btn__EdsEq",c="ReportsPage_item__AJZqg",u="ReportsPage_chart_container__AR5gZ",d="ReportsPage_icon__fuYUy",p="ReportsPage_title__Yo8Oj",f="ReportsPage_types__SVOnv",m="ReportsPage_leftArrow__iBs3U ReportsPage_arrows__qWqm6",_="ReportsPage_rightArrow__siZoH ReportsPage_arrows__qWqm6",v="ReportsPage_iconArrow__RoElM",g=n(2791),h=n(3504),x=n(5698),y="MonthTotal_list__w-wtn",j="MonthTotal_item__SF4ME",b="MonthTotal_extense__S8qoV MonthTotal_total__legI+",w="MonthTotal_income__fXaVK MonthTotal_total__legI+",N="MonthTotal_text__j+-Vr",O=n(6912),k=n(184);function F(e){var t,n,a=e.date,r=(0,O.L5)(function(e){var t=(e.getMonth()+1).toString(),n=e.getFullYear();return t.length<2&&(t="0"+t),[n,t].join("-")}(a)),o=null===(t=r.currentData)||void 0===t?void 0:t.incomes.incomeTotal,i=null===(n=r.currentData)||void 0===n?void 0:n.expenses.expenseTotal,l="- "+(null===i||void 0===i?void 0:i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.",s="+ "+(null===o||void 0===o?void 0:o.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.";return(0,k.jsxs)("ul",{className:y,children:[(0,k.jsxs)("li",{className:j,children:[(0,k.jsx)("p",{className:N,children:" Expenses: "}),(0,k.jsx)("span",{className:b,children:l})]}),(0,k.jsxs)("li",{className:j,children:[(0,k.jsx)("p",{className:N,children:"Income:"}),(0,k.jsx)("span",{className:w,children:s})]})]})}var D={list:"ExpenseByCategories_list__jYiK+",link:"ExpenseByCategories_link__bO25p",item:"ExpenseByCategories_item__Q5xCm",info:"ExpenseByCategories_info__FBcti",icon:"ExpenseByCategories_icon__6h8ck"},R=n(5273);var E=n.p+"static/media/sprite.dcfd1d33c3bc98ab28f4ef2a4810df72.svg",C=n(5048),P=function(e){var t=e.dateTransactionFilter,n=e.setCategory,a=e.category,r=(0,C.v9)((function(e){return e.auth.accessToken})),o=(0,O.H6)({skip:r}).data,i=(0,O.FF)({skip:r}).data,l=(void 0===i?[]:i).expenses,s=void 0===l?[]:l,c=null===o||void 0===o?void 0:o.map((function(e){var n;return{name:e,amount:null===(n=t(s))||void 0===n?void 0:n.reduce((function(t,n){return e===n.category?t+n.amount:t}),0)}})),u=null===c||void 0===c?void 0:c.map((function(e){var t=e.name,r=e.amount,o=E+"#".concat(t),i=r.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ");return(0,k.jsx)("li",{className:D.item,children:(0,k.jsxs)(h.OL,{to:t,className:function(e){return e.isActive?D.activeLink:D.link},onClick:function(){a!==t&&n(t)},children:[(0,k.jsx)("p",{className:D.info,children:i}),(0,k.jsx)("svg",{className:D.icon,width:"56px",height:"56px",children:(0,k.jsx)("use",{href:o})}),(0,k.jsx)("p",{className:D.info,children:t})]})},(0,R.x0)())}));return(0,k.jsx)("ul",{className:D.list,children:u})},M=n(2982),B=n(3199),T=n(9683),I=n(8081),Z={TabletAndDesktop:{responsive:!0,maintainAspectRatio:!1,layout:{padding:25},scales:{y:{beginAtZero:!0,ticks:{display:!1},grid:{display:!0,drawBorder:!1}},x:{grid:{display:!1}}},plugins:{legend:{display:!1},datalabels:{align:"top",anchor:"end",formatter:function(e,t){return t.dataset.parsedData[t.dataIndex]}}}},Mobile:{responsive:!0,maintainAspectRatio:!1,categoryPercentage:.8,barPercetage:1,indexAxis:"y",layout:{padding:{top:15,right:20}},scales:{y:{beginAtZero:!0,ticks:{display:!1},grid:{offset:!0,display:!1,drawBorder:!1}},x:{display:!1}},plugins:{legend:{display:!1},datalabels:{labels:{name:{align:-50,anchor:"start",formatter:function(e,t){return t.dataset.category[t.dataIndex]},clip:!0,padding:{bottom:12},textAlign:"start",color:"#52555F",font:{size:10,lineHeight:1.17,family:"Roboto",weight:400}},value:{display:"auto",align:"top",anchor:"end",formatter:function(e,t){return t.dataset.parsedData[t.dataIndex]},padding:{bottom:10},color:"#52555F",font:{size:10,lineHeight:1.17,family:"Roboto",weight:400}}}}}}};function S(e){var t,n,a=e.dateTransactionFilter,r=e.category,o=null===(t=(0,O.FF)().currentData)||void 0===t?void 0:t.expenses,i=null===(n=(0,O.yp)().currentData)||void 0===n?void 0:n.incomes,l=[];void 0!==i&&void 0!==o&&l.push.apply(l,(0,M.Z)(i).concat((0,M.Z)(o)));var s=function(e,t){var n;return null===e||void 0===e||null===(n=e.filter((function(e){return e.category===t})))||void 0===n?void 0:n.map((function(e){return e.description})).filter((function(e,t,n){return n.indexOf(e)===t}))}(l,r),c=null===s||void 0===s?void 0:s.map((function(e){return{descriptionName:e,amount:a(l).reduce((function(t,n){return e===n.description?t+n.amount:t}),0)}})).sort((function(e,t){return t.amount-e.amount})).filter((function(e){return 0!==e.amount})),u=null===c||void 0===c?void 0:c.map((function(e){return e.descriptionName})),d=null===c||void 0===c?void 0:c.map((function(e){var t=e.amount.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")+" \u0433\u0440\u043d"})),p={labels:u,datasets:[{data:null===c||void 0===c?void 0:c.map((function(e){return e.amount})),backgroundColor:["#FF751D","#FFDAC0","#FFDAC0"],borderRadius:35,parsedData:d,barThickness:38}]},f={labels:u,datasets:[{data:null===c||void 0===c?void 0:c.map((function(e){return e.amount})),backgroundColor:["#FF751D","#FFDAC0","#FFDAC0"],borderRadius:35,parsedData:d,barThickness:15,category:u}]};return(0,k.jsx)(k.Fragment,{children:window.innerWidth>768?(0,k.jsx)(T.$Q,{options:Z.TabletAndDesktop,data:p}):(0,k.jsx)(T.$Q,{options:Z.Mobile,data:f})})}B.kL.register.apply(B.kL,[I.Z].concat((0,M.Z)(B.zX)));var A,L="IncomeByCategories_list__8ZVMy",H="IncomeByCategories_item__2uv10",q="IncomeByCategories_info__52wE3",J="IncomeByCategories_icon__ic2G2",z=function(e){var t=e.dateTransactionFilter,n=e.setCategory,a=e.category,r=(0,C.v9)((function(e){return e.auth.accessToken})),o=(0,O.jN)({skip:r}).data,i=(0,O.yp)({skip:r}).data,l=(void 0===i?[]:i).incomes,s=void 0===l?[]:l,c=null===o||void 0===o?void 0:o.map((function(e){return{categoryName:e,amount:t(s).reduce((function(t,n){return e===n.category?t+n.amount:t}),0)}})),u=null===c||void 0===c?void 0:c.map((function(e){var t=e.categoryName,r=e.amount,o=E+"#".concat(t),i=r.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ");return(0,k.jsxs)("li",{className:H,onClick:function(){a!==t&&n(t)},children:[(0,k.jsx)("p",{className:q,children:i}),(0,k.jsx)("svg",{className:J,width:"56px",height:"56px",children:(0,k.jsx)("use",{href:o})}),(0,k.jsx)("p",{className:q,children:t})]},(0,R.x0)())}));return(0,k.jsx)("ul",{className:L,children:u})},V="ReportsDate_container__ZAfxT",Y="ReportsDate_block__8TOx6",W="ReportsDate_leftBtn__glEjc ReportsDate_btn__JeZ7j",$="ReportsDate_rightBtn__VbZmk ReportsDate_btn__JeZ7j",U="ReportsDate_text__71uVZ",X="ReportsDate_date__EPHhG",G="ReportsDate_icon__EGHnW",K=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Q.apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function te(e,t){var n=e.title,a=e.titleId,r=ee(e,K);return g.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 12",ref:t,"aria-labelledby":a},r),n?g.createElement("title",{id:a},n):null,A||(A=g.createElement("path",{stroke:"#FF751D",strokeWidth:2,d:"M6 1L2 6l4 5"})))}var ne,ae=g.forwardRef(te),re=(n.p,["title","titleId"]);function oe(){return oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},oe.apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function le(e,t){var n=e.title,a=e.titleId,r=ie(e,re);return g.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 12",ref:t,"aria-labelledby":a},r),n?g.createElement("title",{id:a},n):null,ne||(ne=g.createElement("path",{stroke:"#FF751D",strokeWidth:2,d:"M1 1l4 5-4 5"})))}var se,ce,ue=g.forwardRef(le);n.p;function de(e){var t=e.date,n=e.setDate,a=t.toLocaleString("en",{year:"numeric",month:"long"}).toUpperCase();return(0,k.jsxs)("div",{className:V,children:[(0,k.jsx)("p",{className:U,children:"Current period:"}),(0,k.jsxs)("div",{className:Y,children:[(0,k.jsx)("button",{type:"button",className:W,onClick:function(){return function(e){var t=e.setMonth(e.getMonth()-1),a=new Date(t);n(a)}(t)},children:(0,k.jsx)(ae,{className:G})}),(0,k.jsxs)("p",{className:X,children:[" ",a]}),(0,k.jsx)("button",{type:"button",className:$,onClick:function(){return function(e){var t=e.setMonth(e.getMonth()+1),a=new Date(t);n(a)}(t)},children:(0,k.jsx)(ue,{className:G})})]})]})}var pe=["title","titleId"];function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)}function me(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function _e(e,t){var n=e.title,a=e.titleId,r=me(e,pe);return g.createElement("svg",fe({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},r),n?g.createElement("title",{id:a},n):null,se||(se=g.createElement("g",{clipPath:"url(#clip0_11_747)"},g.createElement("path",{fill:"#FF751D",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}))),ce||(ce=g.createElement("defs",null,g.createElement("clipPath",{id:"clip0_11_747"},g.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var ve=g.forwardRef(_e),ge=(n.p,function(){var e=(0,g.useState)(!1),t=(0,a.Z)(e,2),n=t[0],y=t[1],j=(0,g.useState)((function(){return new Date})),b=(0,a.Z)(j,2),w=b[0],N=b[1],O=(0,g.useState)(null),D=(0,a.Z)(O,2),R=D[0],E=D[1],C=w.toLocaleString("en",{year:"numeric",month:"long"}),M=function(e){return null===e||void 0===e?void 0:e.filter((function(e){var t=new Date(e.date).toLocaleString("en",{year:"numeric",month:"long"});return C===t}))},B=function(){y(!n)};return(0,k.jsxs)("div",{className:r,children:[(0,k.jsxs)("div",{className:i,children:[(0,k.jsxs)(h.rU,{className:s,to:"/transactions",children:[(0,k.jsx)(ve,{className:d})," ",(0,k.jsx)("p",{className:l,children:"Main page"})]}),(0,k.jsx)("div",{className:c,children:(0,k.jsx)(x.Z,{})}),(0,k.jsx)("div",{className:c,children:(0,k.jsx)(de,{date:w,setDate:N})})]}),(0,k.jsx)(F,{date:w}),(0,k.jsxs)("div",{className:o,children:[(0,k.jsxs)("div",{className:f,children:[(0,k.jsx)("button",{type:"button",className:m,onClick:function(){return B()},children:(0,k.jsx)(ae,{className:v})}),(0,k.jsxs)("p",{className:p,children:[n?"Income":"Expenses"," "]}),(0,k.jsx)("button",{type:"button",className:_,onClick:function(){return B()},children:(0,k.jsx)(ue,{className:v})})]}),n?(0,k.jsx)(z,{dateTransactionFilter:M,setCategory:E,category:R}):(0,k.jsx)(P,{dateTransactionFilter:M,setCategory:E,category:R})]}),(0,k.jsx)("div",{className:u,children:(0,k.jsx)(S,{dateTransactionFilter:M,category:R})})]})})}}]);
//# sourceMappingURL=917.c67d1359.chunk.js.map