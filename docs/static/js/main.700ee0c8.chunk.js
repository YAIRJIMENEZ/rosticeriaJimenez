(this.webpackJsonprycjimenez=this.webpackJsonprycjimenez||[]).push([[0],{20:function(e,c,a){},30:function(e,c,a){},31:function(e,c,a){},41:function(e,c,a){},42:function(e,c,a){},43:function(e,c,a){},47:function(e,c,a){"use strict";a.r(c);var t=a(1),n=a(12),s=a.n(n),i=(a(30),a(31),a(0)),r=function(){return Object(i.jsx)("footer",{children:Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("div",{children:"Direcci\xf3n: Carretera a calvillo km 17"}),Object(i.jsx)("div",{children:"(A un costado de la entrada a venadero)"}),Object(i.jsx)("div",{className:"left",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"left",children:[Object(i.jsx)("img",{src:"/assets/images/whatsapp.png"}),Object(i.jsx)("a",{href:"https://wa.me/524493475716",target:"_blank",children:"4493475716"})]})}),Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"left",children:[Object(i.jsx)("img",{src:"/assets/images/facebook.png"}),Object(i.jsx)("a",{href:"https://www.facebook.com/rosticeriaycarniceriajimenez",target:"_blank",children:"@rosticeriaycarniceriajimenez"})]})})]})}),Object(i.jsx)("div",{className:"rigth",children:Object(i.jsx)("div",{className:"Recomendacion",children:Object(i.jsx)("p",{children:"Recomendaciones: Gorditas y Carnitas SanMiguel Carretera a Calvillo Km. 17 (Enfrente de la gas de venadero)"})})})]})})},j=a.p+"static/media/logo.00d8a984.png",l=a(8),o=a(2),d=a(25),b=(a(33),a(22)),m=(a(41),function(e){var c=e.Name,a=e.Path,t=e.Description;return Object(i.jsx)("div",{className:"ContainerItem",children:Object(i.jsxs)("div",{className:"Item",children:[Object(i.jsx)("div",{className:"Legend",children:t}),Object(i.jsxs)("div",{className:"Blur",children:[Object(i.jsx)("img",{src:a}),Object(i.jsx)("p",{className:"legend",children:c})]}),Object(i.jsxs)("div",{className:"Frame",children:[Object(i.jsx)("img",{src:a}),Object(i.jsx)("p",{className:"legend",children:c})]})]})})}),u=function(e){var c=e.images;return Object(i.jsx)(b.Carousel,{children:c.map((function(e){var c=e.Id,a=e.Name,t=e.Path,n=e.Description;return Object(i.jsx)(m,{Name:a,Path:t,Description:n},c)}))})},x=(a(20),function(e){var c=e.Path;return Object(i.jsxs)("div",{className:"Video",children:[Object(i.jsx)("video",{src:c,autoPlay:!0,loop:!0,muted:!0}),Object(i.jsx)(r,{})]})}),O=function(e){e.Id,e.Name;var c=e.Path,a=e.Description;return Object(i.jsxs)("div",{className:"Container",children:[Object(i.jsx)(x,{Path:c}),Object(i.jsx)("div",{className:"BackGround",children:Object(i.jsx)("p",{className:"Text",children:a})})]})},h=function(e){var c=e.Titulo;return Object(i.jsx)("h1",{children:c})},v=(a(42),function(e){var c=e.Titulo;return Object(i.jsx)("h6",{children:c})}),p=function(e){var c=e.MainTitle,a=e.SubTitle;return Object(i.jsxs)("div",{className:"containerAdd",children:[Object(i.jsx)(h,{Titulo:c}),Object(i.jsx)(v,{Titulo:a})]})},f=(a(43),a(7)),N=a.n(f),g=function(e){var c=e.Titulo,a=e.Subtitulo;return Object(i.jsx)("div",{className:"brand",children:Object(i.jsx)(p,{MainTitle:c,SubTitle:a})})};g.prototype={Titulo:N.a.string,Subtitulo:N.a.string};var C=a(24),T=function(e){var c=Object(t.useState)({data:[],loading:!0}),a=Object(C.a)(c,2),n=a[0],s=a[1];return Object(t.useEffect)((function(){fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){s({data:e,loading:!1})})).catch((function(e){console.log(e)}))}),[e]),n},k=function(){var e=T("ImagesHome.json"),c=e.data,a=e.loading,t=T("VideosR.json"),n=t.data,s=t.loading;return Object(i.jsxs)("div",{children:[Object(i.jsx)(g,{Titulo:"CARNICER\xcdA",Subtitulo:"Abierto todos los dias de 8am a 4pm"}),a&&Object(i.jsx)("p",{children:"Cargando..."}),Object(i.jsx)(u,{images:c}),Object(i.jsxs)("div",{className:"FixBrand",children:[s&&Object(i.jsx)("p",{children:"Cargando..."}),Object(i.jsx)(g,{Titulo:"ROSTICER\xcdA",Subtitulo:"Abierto sabados y domingos de 8am a 4pm"}),n.map((function(e){return Object(i.jsx)(O,Object(d.a)({},e),e.Id)}))]})]})},y=function(){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark",children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Servicios/Productos"}),Object(i.jsx)("div",{className:"navbar-collapse",children:Object(i.jsxs)("div",{className:"navbar-nav",children:[Object(i.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Carniceria"}),Object(i.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Rosticeria"})]})}),Object(i.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(i.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(i.jsx)(l.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/login",children:"Contacto"})})})]})},S=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{}),Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:"/Home",component:k}),Object(i.jsx)(o.a,{exact:!0,path:"/",component:k})]})]})})},I=function(){return Object(i.jsxs)("div",{className:"containerLogo",children:[Object(i.jsx)("img",{src:j}),Object(i.jsx)(S,{})]})};s.a.render(Object(i.jsx)(I,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.700ee0c8.chunk.js.map