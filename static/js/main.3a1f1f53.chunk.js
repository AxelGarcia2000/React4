(this.webpackJsonppractica4=this.webpackJsonppractica4||[]).push([[0],{10:function(t,e,c){},24:function(t,e,c){},25:function(t,e,c){},27:function(t,e,c){"use strict";c.r(e);var i=c(1),n=c.n(i),r=c(13),o=c.n(r),d=(c(24),c(10),c(11),c(14)),a=c(15),s=c(18),j=c(16),l=(c(25),c.p+"static/media/gandhi.ea391ecb.png"),b=c(0),h=function(t){Object(s.a)(c,t);var e=Object(j.a)(c);function c(){return Object(d.a)(this,c),e.apply(this,arguments)}return Object(a.a)(c,[{key:"render",value:function(){var t=this.props;t.titulo,t.numero;return Object(b.jsx)("div",{className:"Header",children:Object(b.jsx)("img",{src:l,className:"App-logo",alt:"logo"})})}}]),c}(i.Component),u=h,O=c(28),x=c(29),g=c(17),v=c(3),m=Object(i.createContext)(),f=function(t){var e=Object(i.useState)([]),c=Object(v.a)(e,2),n=c[0],r=c[1],o=Object(i.useState)([{codigo:1,titulo:"Programaci\xf3n",idioma:"ESP",desactivado:!1},{codigo:2,titulo:"Aprende Python",idioma:"ESP",desactivado:!1},{codigo:3,titulo:"Prec\xe1lculo",idioma:"ESP",desactivado:!1},{codigo:4,titulo:"Ingenieria De Software",idioma:"ESP",desactivado:!1}]),d=Object(v.a)(o,2),a=d[0],s=d[1];return Object(b.jsx)(m.Provider,{value:{catalogo:a,wishList:n,eliminar:function(t){var e=a,c=e.findIndex((function(e){return e.codigo===t.codigo}));e[c].desactivado=!1;var i=n.filter((function(e){return e.codigo!==t.codigo}));r(i),s(e)},agregar:function(t){var e=a,c=e.findIndex((function(e){return e.codigo===t.codigo}));e[c].desactivado=!0;var i=[].concat(Object(g.a)(n),[t]);i=i.sort((function(t,e){return t.codigo>e.codigo})),r(i),s(e)}},children:t.children})},p=function(){var t=Object(i.useContext)(m),e=t.wishList,c=t.eliminar;return Object(b.jsxs)("div",{className:"Listadeproductos",children:[Object(b.jsx)("h3",{style:{marginBottom:"10vmin"},children:"Lista"}),0===e.length?Object(b.jsx)("h4",{children:"Carrito vacio"}):Object(b.jsxs)(O.a,{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Codigo"}),Object(b.jsx)("th",{children:"Titulo"}),Object(b.jsx)("th",{children:"Idioma"}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:e.map((function(t,e){return Object(b.jsxs)("tr",{p:e,children:[Object(b.jsx)("td",{children:t.codigo}),Object(b.jsx)("td",{children:t.titulo}),Object(b.jsx)("td",{children:t.idioma}),Object(b.jsx)("td",{children:Object(b.jsx)(x.a,{variant:"dark",onClick:function(){return c(t)},children:"Borrar"})})]})}))})]})]})};function C(){var t=Object(i.useContext)(m),e=t.catalogo,c=t.agregar;return Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h4",{style:{marginBottom:"10vmin"},children:"Libros disponibles"}),Object(b.jsxs)(O.a,{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Codigo"}),Object(b.jsx)("th",{children:"Titulo"}),Object(b.jsx)("th",{children:"Idioma"}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:e.map((function(t,e){return Object(b.jsxs)("tr",{x:e,children:[Object(b.jsx)("td",{children:t.codigo}),Object(b.jsx)("td",{children:t.titulo}),Object(b.jsx)("td",{children:t.idioma}),Object(b.jsx)("td",{children:Object(b.jsx)(x.a,{variant:"dark",disabled:t.desactivado,onClick:function(){return c(t)},children:"Agregar"})})]})}))})]})]})}var P=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(f,{children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"Contenedor",children:[Object(b.jsx)(C,{}),Object(b.jsx)(p,{})]})]})})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(e){var c=e.getCLS,i=e.getFID,n=e.getFCP,r=e.getLCP,o=e.getTTFB;c(t),i(t),n(t),r(t),o(t)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),S()}},[[27,1,2]]]);
//# sourceMappingURL=main.3a1f1f53.chunk.js.map