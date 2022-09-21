"use strict";(self.webpackChunkkapusta_team_project=self.webpackChunkkapusta_team_project||[]).push([[965],{7628:function(e,t,n){n.d(t,{r:function(){return d}});var a,r,o=n(2791),i=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){var n=e.title,c=e.titleId,d=l(e,i);return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},d),n?o.createElement("title",{id:c},n):null,a||(a=o.createElement("g",{clipPath:"url(#clip0_11_747)"},o.createElement("path",{fill:"#FF751D",d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}))),r||(r=o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_11_747"},o.createElement("path",{fill:"#fff",d:"M0 0h24v24H0z"})))))}var d=o.forwardRef(c);n.p},5698:function(e,t,n){n.d(t,{Z:function(){return b}});var a,r=n(885),o="Modal_modal__DJDMv",i="Modal_active__-p53x Modal_modal__DJDMv",s="Modal_partOfModal__yZSNf",l="Modal_text__KJZTz",c=n(2791),d=["title","titleId"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){var n=e.title,r=e.titleId,o=p(e,d);return c.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",style:{enableBackground:"new 0 0 16 16"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},o),n?c.createElement("title",{id:r},n):null,a||(a=c.createElement("path",{d:"M8 3 0 13h16z"})))}var f=c.forwardRef(m),_=(n.p,n(184)),v=function(e){var t=e.handleToggle,n=e.active;e.setActive;return(0,_.jsxs)("div",{className:"".concat(n?i:o," "),onClick:function(e){e.target===e.currentTarget&&t()},children:[(0,_.jsx)("p",{children:"Hello! To get started, enter the current balance of your account!"}),(0,_.jsx)("p",{className:l,children:"You can't spend money until you have it :)"}),(0,_.jsx)(f,{width:"25px",className:s})]})},g=n(5048),h=n(6871),x=n(6912),j=n(8724),y={container:"Balance_container__qL3d1",balance:"Balance_balance__41oSS",wrap:"Balance_wrap__-7-60",input:"Balance_input__5zeug",spinner:"Balance_spinner__y8L42",confirmBtn:"Balance_confirmBtn__ctfY4",amount:"Balance_amount__PZJn2"},b=function(){var e=(0,g.I0)(),t=(0,c.useState)(!1),n=(0,r.Z)(t,2),a=n[0],o=n[1],i=(0,g.v9)((function(e){return e.auth.userData.transactions})),s=(0,h.TH)().pathname,l=(0,g.v9)((function(e){return e.auth.userData.balance})),d=(0,c.useState)(l),u=(0,r.Z)(d,2),p=u[0],m=u[1],f=(0,c.useState)("".concat(l.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")," UAH")),b=(0,r.Z)(f,2),N=b[0],w=b[1],F=i.length>0,O=(0,x.FF)().data,E=void 0===O?[]:O,k=(0,x.yp)().data,B=void 0===k?[]:k,C=E.expenses,D=B.incomes;(0,c.useEffect)((function(){e((0,j.ts)())}),[e,C,D]),(0,c.useEffect)((function(){e((0,j.ts)())}),[e]),(0,c.useEffect)((function(){w("".concat(l.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ")," UAH"))}),[l]),(0,c.useEffect)((function(){"/transactions/expenses"!==s||0!==i.length||0!==l||o(!0)}),[s,i,l]);return(0,_.jsxs)("div",{className:y.container,children:[(0,_.jsx)("span",{className:y.balance,children:"Balance:"}),(0,_.jsxs)("form",{className:y.wrap,onSubmit:function(t){t.preventDefault();var n=Number(p).toFixed(2);e((0,j.Xv)(Number(n))),t.target.balance.blur()},children:[(0,_.jsx)("div",{className:y.amount,children:(0,_.jsx)("input",{className:y.input,name:"balance",value:N,onChange:function(e){var t=e.target.value;!Number(t)&&t||(w(t),m(t))},onFocus:function(){w("")},onBlur:function(){w("".concat(l.toFixed(2)," UAH"))},disabled:F})}),(0,_.jsx)("button",{className:y.confirmBtn,type:"submit",disabled:F,children:"CONFIRM"})]}),a&&(0,_.jsx)(v,{className:y.modal,handleToggle:function(){o(!a)},active:a,setActive:o})]})}},2965:function(e,t,n){n.r(t),n.d(t,{default:function(){return Re}});var a=n(885),r="ReportsPage_main__AMhtK",o="ReportsPage_meta__NDdSx",i="ReportsPage_container__x6J4v",s="ReportsPage_block__c8tYZ",l="ReportsPage_header__go1nI",c="ReportsPage_text__uvXFd",d="ReportsPage_btn__EdsEq",u="ReportsPage_item__AJZqg",p="ReportsPage_chart_container__AR5gZ",m="ReportsPage_icon__fuYUy",f="ReportsPage_title__Yo8Oj",_="ReportsPage_types__SVOnv",v="ReportsPage_leftArrow__iBs3U ReportsPage_arrows__qWqm6",g="ReportsPage_rightArrow__siZoH ReportsPage_arrows__qWqm6",h="ReportsPage_iconArrow__RoElM",x=n(2791),j=n(3504),y=n(6871),b=n(5698),N="MonthTotal_list__w-wtn",w="MonthTotal_item__SF4ME",F="MonthTotal_expense__B-gyv MonthTotal_total__legI+",O="MonthTotal_income__fXaVK MonthTotal_total__legI+",E="MonthTotal_text__j+-Vr",k="MonthTotal_textLoading__fsS1O MonthTotal_text__j+-Vr",B="MonthTotal_spinner__6bv-A",C=n(1726),D=n(6912),R=n(184);function T(e){var t=e.date,n=(0,D.L5)(function(e){var t=(e.getMonth()+1).toString(),n=e.getFullYear();return t.length<2&&(t="0"+t),[n,t].join("-")}(t)),a=n.currentData,r=n.isFetching,o=null===a||void 0===a?void 0:a.incomes.incomeTotal,i=null===a||void 0===a?void 0:a.expenses.expenseTotal,s=0===i?(null===i||void 0===i?void 0:i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.":"- "+(null===i||void 0===i?void 0:i.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.",l=0===o?(null===o||void 0===o?void 0:o.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.":"+ "+(null===o||void 0===o?void 0:o.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& "))+" \u0433\u0440\u043d.";return(0,R.jsxs)("ul",{className:N,children:[(0,R.jsx)("li",{className:w,children:r?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{className:k,children:"Expenses:"}),(0,R.jsx)("div",{className:B,children:(0,R.jsx)(C.Nx,{width:"70",color:"#3f51b5"})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{className:E,children:"Expenses:"}),(0,R.jsx)("span",{className:F,children:s})]})}),(0,R.jsx)("li",{className:w,children:r?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{className:k,children:"Income:"}),(0,R.jsx)("div",{className:B,children:(0,R.jsx)(C.Nx,{width:"70",color:"#3f51b5"})})]}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{className:E,children:"Income:"}),(0,R.jsx)("span",{className:O,children:l})]})})]})}var M=n(2982),S="ExpenseByCategories_list__jYiK+",P="ExpenseByCategories_item__Q5xCm",Z="ExpenseByCategories_info__FBcti",A="ExpenseByCategories_link__bO25p",I="ExpenseByCategories_iconBackground__h-q8C",L="ExpenseByCategories_icon__6h8ck",H="ExpenseByCategories_activeLink__LnJDL",J="ExpenseByCategories_spinner__MDnZx",q=n(5273);var z=n.p+"static/media/icons.13564d682188ff87cd0145486783fb7a.svg";var W=n.p+"static/media/symbols.1e3dc31e8782231ede15f87e35d4584f.svg",$=JSON.parse('{"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b":"Products","\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c":"Alcohol","\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f":"Entertainment","\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435":"Health","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442":"Transport","\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430":"Housing","\u0422\u0435\u0445\u043d\u0438\u043a\u0430":"Technique","\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c":"CommunalAndCommunication","\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438":"SportsAndHobbies","\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":"Education","\u041f\u0440\u043e\u0447\u0435\u0435":"Other"}'),U=JSON.parse('{"\u0417/\u041f":"Salary","\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434":"Spin-off"}'),V=function(e){return e.isActive?H:A},Y=function(e){var t,n=e.dateTransactionFilter,a=e.setCategory,r=e.category,o=e.reportsType,i=e.date,s=(0,y.s0)(),l=(0,D.H6)().data,c=(0,D.FF)(),d=c.data,u=void 0===d?[]:d,p=c.isFetching,m=u.expenses,f=void 0===m?[]:m,_=(0,y.TH)().pathname,v=null===l||void 0===l?void 0:l.map((function(e){var t;return{name:e,amount:null===(t=n(f))||void 0===t?void 0:t.reduce((function(t,n){return e===n.category?t+n.amount:t}),0),convertName:$[e]}})),g=(0,M.Z)(v).sort((function(e,t){return t.amount-e.amount}))[0].name,h=Object.values(U).includes(_.slice(9));(0,x.useEffect)((function(){!1===o&&a(g)}),[a,g,o]),(0,x.useEffect)((function(){s($[g])}),[i]);var b=null===v||void 0===v||null===(t=v.filter((function(e){return e.amount>0})))||void 0===t?void 0:t.map((function(e){var t=e.name,n=e.amount,o=e.convertName,i=z+"#".concat(t),s=W+"#".concat(t),l=n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ");return(0,R.jsxs)("li",{className:P,onClick:function(){r!==t&&a(t)},children:[(0,R.jsx)("p",{className:Z,children:l}),(0,R.jsxs)(j.OL,{to:o,className:V,children:[(0,R.jsx)("svg",{className:I,width:"56px",height:"56px",children:(0,R.jsx)("use",{href:s})}),(0,R.jsx)("svg",{className:L,width:"56px",height:"56px",children:(0,R.jsx)("use",{href:i})})]}),(0,R.jsx)("p",{className:Z,children:t})]},(0,q.x0)())}));return(0,R.jsx)(R.Fragment,{children:p?(0,R.jsx)("div",{className:J,children:(0,R.jsx)(C.Nx,{width:"200",color:"#3f51b5"})}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("ul",{className:S,children:b}),h&&(0,R.jsx)(y.Fg,{to:$[g]})]})})},K=n(1426),Q=n(9683),X=n(8081),G={TabletAndDesktop:{responsive:!0,maintainAspectRatio:!1,layout:{padding:{top:35,bottom:15}},scales:{y:{ticks:{beginAtZero:!0,display:!1},grid:{display:!0,drawBorder:!1}},x:{ticks:{padding:0},grid:{display:!1}}},plugins:{legend:{display:!1},datalabels:{align:"top",anchor:"end",formatter:function(e,t){return t.dataset.parsedData[t.dataIndex]}}}},Mobile:{responsive:!0,maintainAspectRatio:!1,indexAxis:"y",layout:{padding:{top:15,right:25}},scales:{y:{beginAtZero:!0,ticks:{display:!1},grid:{offset:!0,display:!1,drawBorder:!1}},x:{display:!1}},plugins:{legend:{display:!1},datalabels:{labels:{name:{align:-50,anchor:"start",formatter:function(e,t){return t.dataset.category[t.dataIndex]},clip:!0,padding:{bottom:12},textAlign:"start",color:"#52555F",font:{size:10,lineHeight:1.17,family:"Roboto",weight:400}},value:{display:"auto",align:"top",anchor:"end",formatter:function(e,t){return t.dataset.parsedData[t.dataIndex]},padding:{bottom:10},color:"#52555F",font:{size:10,lineHeight:1.17,family:"Roboto",weight:400}}}}}}};function ee(e){var t,n,r=e.dateTransactionFilter,o=e.category,i=null===(t=(0,D.FF)().currentData)||void 0===t?void 0:t.expenses,s=null===(n=(0,D.yp)().currentData)||void 0===n?void 0:n.incomes,l=[],c=(0,x.useState)(""),d=(0,a.Z)(c,2),u=d[0],p=d[1],m=function(){p(window.innerWidth<768)};(0,x.useEffect)((function(){return window.addEventListener("resize",m),function(){return window.removeEventListener("resize",m)}}),[]);var f=document.querySelector("canvas");void 0!==s&&void 0!==i&&l.push.apply(l,(0,M.Z)(s).concat((0,M.Z)(i)));var _=function(e,t){var n;return null===e||void 0===e||null===(n=e.filter((function(e){return e.category===t})))||void 0===n?void 0:n.map((function(e){return e.description})).filter((function(e,t,n){return n.indexOf(e)===t}))}(l,o),v=null===_||void 0===_?void 0:_.map((function(e){return{descriptionName:e,amount:r(l).reduce((function(t,n){return e===n.description?t+n.amount:t}),0)}})).sort((function(e,t){return t.amount-e.amount})).filter((function(e){return 0!==e.amount})),g=null===v||void 0===v?void 0:v.map((function(e){return e.descriptionName})),h=null===v||void 0===v?void 0:v.map((function(e){var t=e.amount.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")+" \u0433\u0440\u043d"})),j={labels:g,datasets:[{data:null===v||void 0===v?void 0:v.map((function(e){return e.amount})),backgroundColor:["#FF751D","#FFDAC0","#FFDAC0"],borderRadius:35,parsedData:h,barThickness:38}]},y={labels:g,datasets:[{data:null===v||void 0===v?void 0:v.map((function(e){return e.amount})),backgroundColor:["#FF751D","#FFDAC0","#FFDAC0"],borderRadius:35,parsedData:h,barThickness:15,category:g}]};return function(e,t){if(void 0!==t){var n="",a=null===e||void 0===e?void 0:e.length;if(a>1&&window.innerWidth<768)n=40*(a-1)+60,t.style.height=n+"px";else{if(!(1===a&&window.innerWidth<768))return;t.style.height="60px"}}}(v,f),(0,R.jsx)(R.Fragment,{children:u?(0,R.jsx)(Q.$Q,{options:G.Mobile,data:y}):(0,R.jsx)(Q.$Q,{options:G.TabletAndDesktop,data:j})})}K.kL.register.apply(K.kL,[X.Z].concat((0,M.Z)(K.zX)));var te,ne="IncomeByCategories_list__8ZVMy",ae="IncomeByCategories_item__2uv10",re="IncomeByCategories_info__52wE3",oe="IncomeByCategories_link__SbULm",ie="IncomeByCategories_iconBackground__ZoTWE",se="IncomeByCategories_icon__ic2G2",le="IncomeByCategories_activeLink__KjfMQ",ce="IncomeByCategories_spinner__tAZaH",de=function(e){return e.isActive?le:oe},ue=function(e){var t,n=e.dateTransactionFilter,a=e.setCategory,r=e.category,o=e.reportsType,i=e.date,s=(0,y.s0)(),l=(0,D.jN)().data,c=(0,D.yp)(),d=c.data,u=void 0===d?[]:d,p=c.isFetching,m=u.incomes,f=void 0===m?[]:m,_=(0,y.TH)().pathname,v=null===l||void 0===l?void 0:l.map((function(e){return{name:e,amount:n(f).reduce((function(t,n){return e===n.category?t+n.amount:t}),0),convertName:U[e]}})),g=Object.values($).includes(_.slice(9)),h=(0,M.Z)(v).sort((function(e,t){return t.amount-e.amount}))[0].name;(0,x.useEffect)((function(){!0===o&&a(h)}),[a,h,o]),(0,x.useEffect)((function(){s(U[h])}),[i]);var b=null===v||void 0===v||null===(t=v.filter((function(e){return e.amount>0})))||void 0===t?void 0:t.map((function(e){var t=e.name,n=e.amount,o=e.convertName,i=z+"#".concat(t),s=W+"#".concat(t),l=n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$& ");return(0,R.jsxs)("li",{className:ae,onClick:function(){r!==t&&a(t)},children:[(0,R.jsx)("p",{className:re,children:l}),(0,R.jsxs)(j.OL,{to:o,className:de,children:[(0,R.jsx)("svg",{className:ie,width:"56px",height:"56px",children:(0,R.jsx)("use",{href:s})}),(0,R.jsx)("svg",{className:se,width:"56px",height:"56px",children:(0,R.jsx)("use",{href:i})})]}),(0,R.jsx)("p",{className:re,children:t})]},(0,q.x0)())}));return(0,R.jsx)(R.Fragment,{children:p?(0,R.jsx)("div",{className:ce,children:(0,R.jsx)(C.Nx,{width:"200",color:"#3f51b5"})}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("ul",{className:ne,children:b}),g&&(0,R.jsx)(y.Fg,{to:U[h]})]})})},pe="ReportsDate_container__ZAfxT",me="ReportsDate_block__8TOx6",fe="ReportsDate_leftBtn__glEjc ReportsDate_btn__JeZ7j",_e="ReportsDate_rightBtn__VbZmk ReportsDate_btn__JeZ7j",ve="ReportsDate_text__71uVZ",ge="ReportsDate_date__EPHhG",he="ReportsDate_icon__EGHnW",xe=["title","titleId"];function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},je.apply(this,arguments)}function ye(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function be(e,t){var n=e.title,a=e.titleId,r=ye(e,xe);return x.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 12",ref:t,"aria-labelledby":a},r),n?x.createElement("title",{id:a},n):null,te||(te=x.createElement("path",{stroke:"#FF751D",strokeWidth:2,d:"M6 1L2 6l4 5"})))}var Ne,we=x.forwardRef(be),Fe=(n.p,["title","titleId"]);function Oe(){return Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Oe.apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ke(e,t){var n=e.title,a=e.titleId,r=Ee(e,Fe);return x.createElement("svg",Oe({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 7 12",ref:t,"aria-labelledby":a},r),n?x.createElement("title",{id:a},n):null,Ne||(Ne=x.createElement("path",{stroke:"#FF751D",strokeWidth:2,d:"M1 1l4 5-4 5"})))}var Be=x.forwardRef(ke);n.p;function Ce(e){var t=e.date,n=e.setDate,a=t.toLocaleString("en",{year:"numeric",month:"long"}).toUpperCase();return(0,R.jsxs)("div",{className:pe,children:[(0,R.jsx)("p",{className:ve,children:"Current period:"}),(0,R.jsxs)("div",{className:me,children:[(0,R.jsx)("button",{type:"button",className:fe,onClick:function(){return function(e){var t=e.setMonth(e.getMonth()-1),a=new Date(t);n(a)}(t)},children:(0,R.jsx)(we,{className:he})}),(0,R.jsxs)("p",{className:ge,children:[" ",a]}),(0,R.jsx)("button",{type:"button",className:_e,onClick:function(){return function(e){var t=e.setMonth(e.getMonth()+1),a=new Date(t);n(a)}(t)},children:(0,R.jsx)(Be,{className:he})})]})]})}var De=n(7628),Re=function(){var e=(0,x.useState)(new Date),t=(0,a.Z)(e,2),n=t[0],N=t[1],w=(0,x.useState)(!1),F=(0,a.Z)(w,2),O=F[0],E=F[1],k=(0,x.useState)(null),B=(0,a.Z)(k,2),C=B[0],D=B[1],M=n.toLocaleString("en",{year:"numeric",month:"long"}),S=function(e){return null===e||void 0===e?void 0:e.filter((function(e){var t=new Date(e.date).toLocaleString("en",{year:"numeric",month:"long"});return M===t}))},P=function(){E(!O),D(null)};return(0,R.jsxs)("main",{className:o,children:[(0,R.jsx)("div",{className:i}),(0,R.jsxs)("div",{className:r,children:[(0,R.jsxs)("div",{className:l,children:[(0,R.jsxs)(j.rU,{className:d,to:"/transactions/expenses",children:[(0,R.jsx)(De.r,{className:m})," ",(0,R.jsx)("p",{className:c,children:"Main page"})]}),(0,R.jsx)("div",{className:u,children:(0,R.jsx)(b.Z,{})}),(0,R.jsx)("div",{className:u,children:(0,R.jsx)(Ce,{date:n,setDate:N})})]}),(0,R.jsx)(T,{date:n}),(0,R.jsxs)("div",{className:s,children:[(0,R.jsxs)("div",{className:_,children:[(0,R.jsx)("button",{type:"button",className:v,onClick:function(){return P()},children:(0,R.jsx)(we,{className:h})}),(0,R.jsxs)("p",{className:f,children:[" ",O?"Income":"Expenses"," "]}),(0,R.jsx)("button",{type:"button",className:g,onClick:function(){return P()},children:(0,R.jsx)(Be,{className:h})})]}),O?(0,R.jsx)(ue,{dateTransactionFilter:S,setCategory:D,category:C,reportsType:O,date:n}):(0,R.jsx)(Y,{dateTransactionFilter:S,setCategory:D,category:C,reportsType:O,date:n})]}),(0,R.jsx)("div",{className:p,id:"flexible",children:(0,R.jsx)(y.Z5,{children:(0,R.jsx)(y.AW,{path:":categoryName",element:(0,R.jsx)(ee,{dateTransactionFilter:S,category:C})})})})]})]})}}}]);
//# sourceMappingURL=965.66415582.chunk.js.map