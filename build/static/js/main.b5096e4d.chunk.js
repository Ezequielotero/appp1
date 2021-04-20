(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{23:function(e,t,a){e.exports=a(40)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),i=a(22),o=a(11),m=(a(28),a(29),a(6));function d(e){var t=e.min,a=e.max,n=e.name,r=e.img,l=e.onClose,i=e.id;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{id:"closeIcon",className:"row"},c.a.createElement("button",{onClick:l,className:"btn btn-sm btn-danger"},"X")),c.a.createElement("div",{className:"card-body"},c.a.createElement(m.b,{to:"/ciudad/".concat(i)},c.a.createElement("h5",{className:"card-title"},n)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4 col-md-4 col-lg-4"},c.a.createElement("p",null,"Min\u2744"),c.a.createElement("p",null,t,"\xb0")),c.a.createElement("div",{className:"col-sm-4 col-md-4 col-lg-4"},c.a.createElement("p",null,"Max\u2600"),c.a.createElement("p",null,a,"\xb0")),c.a.createElement("div",{className:"col-sm-4 col-md-4 col-lg-4"},c.a.createElement("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+r+"@2x.png",width:"80",height:"80",alt:""})))))}a(34);function u(e){var t=e.cities,a=e.onClose;return t?c.a.createElement("div",{className:"cards"},t.map((function(e){return c.a.createElement(d,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return a(e.id)},id:e.id})}))):c.a.createElement("div",{className:"vacio"},"To add a city, go to the text input on the navigation bar and write the name of the city that you want to add and press the green button. If you want to check the details of a city, just add it and then click on its card.")}a(35);function s(e){var t=e.onSearch,a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],i=r[1];return c.a.createElement("form",{className:"todo",onSubmit:function(e){e.preventDefault(),t(l)}},c.a.createElement("input",{className:"text",type:"text",placeholder:"Ciudad...",value:l,onChange:function(e){return i(e.target.value)}}),c.a.createElement("input",{className:"boton",type:"submit",value:"Agregar"}))}a(36);var h=function(e){var t=e.onSearch;return c.a.createElement("nav",{className:"nav"},c.a.createElement(m.b,{to:"/"},c.a.createElement("span",{className:"navbar-brand"})),c.a.createElement("div",{className:"aboutdiv"}),c.a.createElement("div",{className:"hola"},c.a.createElement(s,{onSearch:t,className:"searchbar"})))},E=a(1);a(37);function v(e){var t=e.city;return t?c.a.createElement("div",{className:"ciudad"},c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,t.name),c.a.createElement("div",{className:"info"},c.a.createElement("div",null,"Temperatura\ud83c\udf21: ",t.temp," \xbaC"),c.a.createElement("div",null,"Clima\ud83c\udf08: ",t.weather),c.a.createElement("div",null,"Viento\ud83d\udca8: ",t.wind," km/h"),c.a.createElement("div",null,"Cantidad de nubes\u2601: ",t.clouds),c.a.createElement("div",null,"Latitud\ud83e\udded: ",t.latitud,"\xba"),c.a.createElement("div",null,"Longitud\ud83e\udded: ",t.longitud,"\xba")))):c.a.createElement("div",null,'("no encontrada")')}var f=a(12),p=a.n(f);function g(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];function l(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("11eb6a052535065313b3c194887996d0","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var t={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon},n=a.filter((function(e){return e.id!==t.id}));a.length!==n.length?p()({icon:"error",title:"Oops...",text:"The city you entered was already added",footer:"<a href>Why do I have this issue?</a>"}):(r([].concat(Object(i.a)(n),[t])),p()({title:"New city!",text:t.name+" was added successfully!",icon:"success",timer:1e3}))}else p()({icon:"error",title:"Oops...",text:"The city you entered was not found!",footer:"<a href>Why do I have this issue?</a>"})}))}function m(e){r(a.filter((function(t){return t.id!==e})))}function d(e){var t=a.filter((function(t){return t.id===parseInt(e)}));return t.length>0?t[0]:null}return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(E.a,{path:"/",render:function(){return c.a.createElement(h,{onSearch:l})}})),c.a.createElement("div",null,c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return c.a.createElement(u,{onClose:m,cities:a})}})),c.a.createElement("div",null,c.a.createElement(E.a,{exact:!0,path:"/ciudad/:ciudadId",render:function(e){var t=e.match;return c.a.createElement(v,{city:d(t.params.ciudadId)})}})))}l.a.render(c.a.createElement(m.a,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b5096e4d.chunk.js.map