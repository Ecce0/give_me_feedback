(this["webpackJsonpfeedback-app"]=this["webpackJsonpfeedback-app"]||[]).push([[0],{43:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n,i=c(0),a=c(29),r=(c(43),c(30)),s=c(31),j=c(13),d=c(2),o=s.a.header(n||(n=Object(r.a)(["\n background: #8F2D56;\n color: #FFBC42\n"]))),b=function(e){var t=e.text;return Object(d.jsx)(o,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("h2",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)(j.a,{color:"#fff",size:45})," "]}),t,Object(d.jsxs)("span",{children:[" ",Object(d.jsx)(j.e,{color:"#fff",size:45})]})]})})})};b.defaultProps={text:"Feedback UI"};var l=b,u=function(e){var t=e.children,c=e.reverse;return Object(d.jsx)("div",{className:"card ".concat(c," && 'reverse'"),children:t})};u.defaultProps={reverse:!1};var O=u,x=c(26),h=c(35),f=c(7),m=c(53),p=Object(i.createContext)(),v=function(e){var t=e.children,c=Object(i.useState)([{id:1,text:"Feedback item 1",rating:10},{id:2,text:"Feedback item 2",rating:9},{id:3,text:"Feedback item 3",rating:7}]),n=Object(f.a)(c,2),a=n[0],r=n[1],s=Object(i.useState)({item:{},isEditing:!1}),j=Object(f.a)(s,2),o=j[0],b=j[1];return Object(d.jsx)(p.Provider,{value:{feedback:a,edit:o,addFeedback:function(e){e.id=Object(m.a)(),r([e].concat(Object(h.a)(a)))},onDelete:function(e){window.confirm("are your sure you want to delete?")&&r(a.filter((function(t){return t.id!==e})))},editStatement:function(e){b({item:e,isEditing:!0})},updateStatement:function(e,t){r(a.map((function(c){return c.id===e?Object(x.a)(Object(x.a)({},c),t):c})))}},children:t})},g=p,k=function(e){var t=e.statement,c=Object(i.useContext)(g),n=c.onDelete,a=c.editStatement;return Object(d.jsxs)(O,{children:[Object(d.jsx)("div",{className:"num-display",children:t.rating}),Object(d.jsx)("button",{className:"close",onClick:function(){return n(t.id)},children:Object(d.jsx)(j.f,{color:"#D81159",size:20})}),Object(d.jsx)("button",{onClick:function(){return a(t)},className:"edit",children:Object(d.jsx)(j.b,{color:"#D81159",size:20})}),Object(d.jsx)("div",{className:"text-display",children:t.text})]})},y=c(54),N=c(52),F=function(){var e=Object(i.useContext)(g).feedback;return 0!==e.length&&e?Object(d.jsx)("div",{className:"feedback-list",children:Object(d.jsx)(y.a,{children:e.map((function(e){return Object(d.jsx)(N.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layout:!0,children:Object(d.jsx)(k,{statement:e},e.id)},e.id)}))})}):Object(d.jsx)("h3",{className:"feedback-stats",children:"Be the first to add feedback for Erica!"})},C=function(){var e=Object(i.useContext)(g).feedback,t=Math.round(e.reduce((function(e,t){return e+t.rating}),0)/e.length);return Object(d.jsxs)("div",{className:"feedback-stats",children:[Object(d.jsxs)("h4",{children:[e.length," Reviews"]}),Object(d.jsxs)("h4",{children:["Average Rating: ",isNaN(t)?0:t]})]})},S=function(e){var t=e.children,c=e.version,n=e.type,i=e.isDisabled;return Object(d.jsx)("button",{type:n,disabled:i,className:"btn btn-".concat(c),children:t})};S.defaultProps={version:"primary",type:"button",isDisabled:!1};var E=S,w=function(e){var t=e.select,c=e.selected,n=function(e){t(+e.currentTarget.value)};return Object(d.jsx)("ul",{className:"rating",children:Array.from({length:10},(function(e,t){return Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",id:"num".concat(t+1),name:"rating",value:t+1,onChange:n,checked:c===t+1}),Object(d.jsx)("label",{htmlFor:"num".concat(t+1),children:t+1})]},"rating-".concat(t+1))}))})},D=function(){var e=Object(i.useState)(""),t=Object(f.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!0),r=Object(f.a)(a,2),s=r[0],j=r[1],o=Object(i.useState)(""),b=Object(f.a)(o,2),l=b[0],u=b[1],x=Object(i.useState)(10),h=Object(f.a)(x,2),m=h[0],p=h[1],v=Object(i.useContext)(g),k=v.addFeedback,y=v.edit,N=v.updateStatement;Object(i.useEffect)((function(){!0===y.isEditing&&(j(!1),n(y.item.text),p(y.item.rating))}),[y]);return Object(d.jsx)(O,{children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),c.trim().length>10){var t={text:c,rating:m};!0===y.isEditing?N(y.item.id,t):k(t),n(""),j(!0),p(10)}},children:[Object(d.jsx)("h2",{style:{color:"#3E4E50"},children:"How would you rate my feedback app?"}),Object(d.jsx)(w,{select:p,selected:m}),Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("input",{type:"text",placeholder:"Write a Review",onChange:function(e){var t=e.target.value;""===t?(j(!0),u(null)):t.trim().length<10||""===m?(j(!0),u("Come on, give me more! Don't forget to rate me")):(u(null),j(!1)),n(t)},value:c}),Object(d.jsx)(E,{type:"submit",version:"secondary",isDisabled:s,children:"Send"})]}),l&&Object(d.jsx)("div",{className:"message",children:l})]})})},B=c(20),z=function(){return Object(d.jsx)(O,{children:Object(d.jsxs)("div",{className:"about",children:[Object(d.jsxs)("h1",{children:["About This Project",Object(d.jsxs)("span",{children:[" ",Object(d.jsx)(j.c,{color:"#FFBC42"})]})]}),Object(d.jsx)("p",{children:"This is a react app to leave feedback for me, the Software Engineer of this app, E.Collier"}),Object(d.jsx)("p",{children:"Version 1.0.0"}),Object(d.jsx)("p",{children:Object(d.jsx)(B.b,{to:"/",children:"Back to Home"})})]})})},P=c(3),R=function(){return Object(d.jsx)("div",{className:"about-link",children:Object(d.jsx)(B.b,{to:{pathname:"/about"},children:Object(d.jsx)(j.d,{color:"#FFBC42",size:30})})})},A=function(){return Object(d.jsx)(v,{children:Object(d.jsxs)(B.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{exact:!0,path:"/",element:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(D,{}),Object(d.jsx)(C,{}),Object(d.jsx)(F,{})]})}),Object(d.jsx)(P.a,{path:"/about",element:Object(d.jsx)(z,{})})]}),Object(d.jsx)(R,{})]})]})})},T=document.getElementById("root");Object(a.createRoot)(T).render(Object(d.jsx)(i.StrictMode,{children:Object(d.jsx)(A,{})}))}},[[49,1,2]]]);
//# sourceMappingURL=main.c66295c2.chunk.js.map