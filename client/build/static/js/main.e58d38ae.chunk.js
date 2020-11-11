(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{44:function(e,t,n){e.exports=n(74)},49:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),o=n.n(l),i=(n(49),n(42)),c=n(5),u=n(76),m=n(77),s=n(39),f=n(78);function E(){return r.a.createElement("div",null,r.a.createElement(u.a,{style:{border:"2px solid black",height:100,margin:"30px",justifyContent:"center",alignItems:"center"}},r.a.createElement(m.a,{size:"md-12"},r.a.createElement(s.a,null,r.a.createElement(f.a,{style:{textAlign:"center"}},r.a.createElement("h1",null,r.a.createElement("b",null,"(React) Google Books Search")),r.a.createElement("p",null,"Search for and Save Books of Interest"))))))}var d=n(80),g=n(82),h={padding:"10px",margin:"20px",backgroundColor:"grey",color:"black"};function p(){return r.a.createElement(d.a,{variant:"dark",fixed:"top"},r.a.createElement(g.a,{bg:"dark"},r.a.createElement(g.a.Item,{style:h},r.a.createElement(g.a.Link,{href:"/",style:h},"Google Books"),r.a.createElement(g.a.Link,{href:"/search",style:h},"Search"),r.a.createElement(g.a.Link,{href:"/saved",style:h},"Saved"))))}var v=n(17),b=n(81),k=n(18),x=n.n(k),y=function(e){return x.a.get("https://www.googleapis.com/books/v1/volumes/?maxResults=5",{params:{q:e}})},w=function(e){return x.a.post("/api/favorites",e)},I=function(){return x.a.get("/api/favorites")},S=function(e){return x.a.delete("/api/favorites/".concat(e))},j=n(83),L=n(79);function R(e){return r.a.createElement("div",null,e.books?r.a.createElement("h3",{style:{margin:"20px"}}," Results :"):" ",e.books.map((function(e){return r.a.createElement(f.a,null,r.a.createElement(m.a,{key:e.id},r.a.createElement(u.a,{style:{border:"2px solid black",padding:"10px",margin:"20px"}},r.a.createElement(j.a,null,r.a.createElement(j.a.Title,{name:"title"},r.a.createElement("b",null,e.volumeInfo.title," ")),r.a.createElement(j.a.Subtitle,{name:"sub_title"},"Written by : ",e.volumeInfo.authors.join(", ")),r.a.createElement(j.a.Img,{name:"image",variant:"top",src:e.volumeInfo.imageLinks.smallThumbnail,style:{float:"left",height:"100px",width:"100px",padding:"20px"}}),r.a.createElement(j.a.Text,{name:"description"},e.volumeInfo.description),r.a.createElement(j.a.Text,{name:"rating"},"Rating : ",e.volumeInfo.averageRating),r.a.createElement(L.a,{variant:"primary",name:"infoLink"},r.a.createElement("a",{href:e.volumeInfo.infoLink,target:"_blank",rel:"noopener noreferrer"},"View")),r.a.createElement(L.a,{variant:"primary",onClick:function(){return function(e){w({title:e.volumeInfo.title,authors:e.volumeInfo.authors,image:e.volumeInfo.imageLinks.smallThumbnail,description:e.volumeInfo.description,rating:e.volumeInfo.averageRating,infoLink:e.volumeInfo.infoLink}).then((function(e){alert("Book saved")})).catch((function(e){alert(e.error)}))}(e)}},"Save")))))})))}function B(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),i=Object(v.a)(o,2),c=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement(u.a,{style:{border:"2px solid black",height:140,margin:"30px",justifyContent:"center",alignItems:"center"}},r.a.createElement(f.a,{style:{margin:"30px"}},r.a.createElement("h3",null,"Book Search"),r.a.createElement(b.a,{className:"form-horizontal",onSubmit:function(e){e.preventDefault(),y(c).then((function(e){return l(e.data.items)})).catch((function(e){return console.log(e)}))}},r.a.createElement(b.a.Group,null,r.a.createElement(b.a.Control,{size:"lg",type:"text",className:"search-bar",name:"BookSearch",value:c,onChange:function(e){var t=e.target.value;m(t)},style:{width:"100%"}}),r.a.createElement("button",{type:"Submit",className:"search-button",style:{float:"right",margin:"10px"}},"Search"))))),r.a.createElement(R,{books:n}))}function C(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(E,null),r.a.createElement(B,null))}function O(){var e=Object(a.useState)([]),t=Object(v.a)(e,2),n=t[0],l=t[1];function o(){I().then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){o()}),[]),r.a.createElement("div",null,r.a.createElement("h3",{style:{margin:"20px"}}," Results :"),n.map((function(e){return r.a.createElement(f.a,null,r.a.createElement(m.a,{key:e.title},r.a.createElement(u.a,{style:{border:"2px solid black",padding:"10px",margin:"20px"}},r.a.createElement(j.a,null,r.a.createElement(j.a.Title,{name:"title"},r.a.createElement("b",null,e.title," ")),r.a.createElement(j.a.Subtitle,{name:"sub_title"},"Written by : ",e.authors),r.a.createElement(j.a.Img,{name:"image",variant:"top",src:e.image,style:{float:"left",height:"100px",width:"100px",padding:"20px"}}),r.a.createElement(j.a.Text,{name:"description"},e.description),r.a.createElement(j.a.Text,{name:"rating"},"Rating : ",e.rating),r.a.createElement(L.a,{variant:"primary"},r.a.createElement("a",{href:e.infoLink,target:"_blank",rel:"noopener noreferrer"},"View")),r.a.createElement(L.a,{variant:"primary",type:"submit",onClick:function(){return t=e._id,void S(t).then((function(e){return o()})).catch((function(e){return console.log(e)}));var t}},"Delete")))))})))}function T(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(E,null),r.a.createElement(O,null))}function W(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(E,null),r.a.createElement(B,null),r.a.createElement(u.a,{fluid:!0},r.a.createElement(m.a,{size:"md-12"},r.a.createElement(s.a,null,r.a.createElement(f.a,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))))}n(70);var N=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:["/","/search"]},r.a.createElement(C,null)),r.a.createElement(c.a,{exact:!0,path:"/saved"},r.a.createElement(T,null)),r.a.createElement(c.a,null,r.a.createElement(W,null)))))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");_?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):z(e)}))}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.e58d38ae.chunk.js.map