(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),l=a(22),m=a(12);var o=function(){return r.a.createElement("div",null)},u=(a(28),a(29),a(6)),d=a(8),s=a.n(d);function h(e){var t=e.min,a=e.max,n=e.name,c=e.img,i=e.onClose,l=e.id;return r.a.createElement("div",{className:"div"},r.a.createElement("div",{className:"btnn"},r.a.createElement("button",{onClick:function(){s()({position:"top-end",icon:"success",title:"Card deleted",showConfirmButton:!1,timer:1500}),i()},className:"btn"},"X")),r.a.createElement(u.b,{to:"/ciudad/".concat(l)},r.a.createElement("h5",{className:"card-title"},n)),r.a.createElement("div",{className:"fotos"},r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"Min\ud83e\uddca: ",t,"\xb0"),r.a.createElement("p",null,"Max\ud83e\udd75: ",a,"\xb0")),r.a.createElement("div",{className:"imagen"},r.a.createElement("img",{className:"img",src:"http://openweathermap.org/img/wn/"+c+"@2x.png",width:"80",height:"80",alt:""}))))}a(36);function E(e){var t=e.cities,a=e.onClose;return t?r.a.createElement("div",{className:"cards"},t.map((function(e){return r.a.createElement(h,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return a(e.id)},id:e.id})}))):r.a.createElement("div",null,"Sin ciudades")}a(37);function v(e){var t=e.onSearch,a=Object(n.useState)(""),c=Object(m.a)(a,2),i=c[0],l=c[1];return r.a.createElement("form",{className:"todo",onSubmit:function(e){e.preventDefault(),t(i)}},r.a.createElement("input",{className:"text",type:"text",placeholder:"Ciudad...",value:i,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{className:"boton",type:"submit",value:"Agregar"}))}a(38);var f=function(e){var t=e.onSearch;return r.a.createElement("nav",{className:"nav"},r.a.createElement(u.b,{to:"/"},r.a.createElement("span",{className:"navbar-brand"})),r.a.createElement("div",{className:"aboutdiv"},r.a.createElement(u.b,{to:"/about"},r.a.createElement("span",{className:"about"},"About me"))),r.a.createElement("div",{className:"hola"},r.a.createElement(v,{onSearch:t,className:"searchbar"})))},p=a(1);a(39);function b(e){var t=e.city;return t?r.a.createElement("div",{className:"ciudad"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,t.name),r.a.createElement("div",{className:"info"},r.a.createElement("div",null,"Temperatura\ud83c\udf21\ufe0f: ",t.temp," \xbaC"),r.a.createElement("div",null,"Clima\ud83c\udf08: ",t.weather),r.a.createElement("div",null,"Viento\ud83d\udca8: ",t.wind," km/h"),r.a.createElement("div",null,"Cantidad de nubes\u2601: ",t.clouds),r.a.createElement("div",null,"Latitud\ud83e\udded: ",t.latitud,"\xba"),r.a.createElement("div",null,"Longitud\ud83e\udded: ",t.longitud,"\xba")))):r.a.createElement("div",null,'("no encontrada")')}function g(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];function i(e){fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("11eb6a052535065313b3c194887996d0","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var t={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon},n=a.filter((function(e){return e.id!==t.id}));a.length!==n.length?s()({icon:"error",title:"Oops...",text:"The city you entered was already added",footer:"<a href>Why do I have this issue?</a>"}):(c([].concat(Object(l.a)(n),[t])),s()({title:"New city!",text:t.name+" was added successfully!",icon:"success",timer:1e3}))}else s()({icon:"error",title:"Oops...",text:"The city you entered was not found!",footer:"<a href>Why do I have this issue?</a>"})}))}function u(e){c(a.filter((function(t){return t.id!==e})))}function d(e){var t=a.filter((function(t){return t.id===parseInt(e)}));return t.length>0?t[0]:null}return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(p.a,{path:"/",render:function(){return r.a.createElement(f,{onSearch:i})}}),r.a.createElement(p.a,{path:"/about",component:o})),r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,{onClose:u,cities:a})}})),r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/ciudad/:ciudadId",render:function(e){var t=e.match;return r.a.createElement(b,{city:d(t.params.ciudadId)})}})))}i.a.render(r.a.createElement(u.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.765c971b.chunk.js.map