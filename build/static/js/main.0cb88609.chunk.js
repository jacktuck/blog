(window["webpackJsonpjacktuck.github.io"]=window["webpackJsonpjacktuck.github.io"]||[]).push([[0],{161:function(e,t,n){},352:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(57),l=n.n(r),i=(n(75),n(21)),o=n(8);n(76),n(77);var u=function(){return c.a.createElement("div",{id:"nav"},c.a.createElement("p",null,"Hi \ud83d\udc4b\ud83c\udffcI'm Jack, a software engineer. I live in Gloucester, England. I will be writing about Go and Node.js mostly."),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/jacktuck"},"GitHub")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://stackoverflow.com/users/2784487/jack-tuck"},"StackOverflow")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://twitter.com/jack_tuck"},"Twitter"))))},s=n(13),m=n.n(s),f=n(20),d=n(9),p=n(58),h=n.n(p);var E=function(){return Object(a.useEffect)((function(){document.title="Not Found \u2014 jtuck.io"}),[]),c.a.createElement("div",null,c.a.createElement("h1",null,"Hmm, page not found \ud83d\ude15.",c.a.createElement("br",null),"Sorry about that!"))},v=(n(161),n(59)),b=n(60),k=n(68),w=n(61),j=n(69),g=n(356),y=n(65),O=function(e){function t(){return Object(v.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return c.a.createElement(g.a,{language:t,style:y.a},n)}}]),t}(a.PureComponent);O.defaultProps={language:null};var A=O,S=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),r=(n[0],n[1]),l=Object(a.useState)({}),i=Object(d.a)(l,2),o=i[0],u=i[1],s=Object(a.useState)(!0),p=Object(d.a)(s,2),v=p[0],b=p[1];function k(){return(k=Object(f.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new URL("https://cdn.contentful.com/spaces/sfbobw4fvv5k/environments/master/entries")).search=new URLSearchParams({access_token:"4OJtWZcNNAxKAhLrYNzedEPAuUNYgWdkD-zQJ5Rfzi0",order:"-sys.createdAt",select:"fields.title,fields.content,sys.createdAt",content_type:"post","fields.slug":e.match.params.slug}),t.next=4,fetch(n);case 4:t.sent.json().then((function(e){if(b(!1),1===e.total){var t=e.items[0];t.fields.pub=new Date(t.sys.createdAt).toLocaleDateString("en",{day:"numeric",month:"short",year:"numeric"}),u(t.fields),document.title="".concat(t.fields.title," \u2014 jtuck.io")}})).catch((function(e){return r(e)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),v?c.a.createElement("div",null):o.title?c.a.createElement("div",null,c.a.createElement("p",{id:"backBtn"},c.a.createElement("a",{href:"/"},"\u2190 back to list")),c.a.createElement("div",{id:"post"},c.a.createElement("h1",null,o.title),c.a.createElement("p",null,"Published ",o.pub),c.a.createElement("p",null,c.a.createElement(h.a,{source:o.content,renderers:{code:A}})))):c.a.createElement(E,null)},N=(n(352),function(e){var t=new Date(e.item.sys.createdAt).toLocaleDateString("en",{day:"numeric",month:"short",year:"numeric"});return c.a.createElement("div",null,c.a.createElement("div",{id:"pub"},t),c.a.createElement("h1",{id:"title"},c.a.createElement(i.b,{to:"/".concat(e.item.fields.slug)},e.item.fields.title)))});function x(e){if(!e.posts.items)return c.a.createElement("div",null);var t=e.posts.items.map((function(e){return c.a.createElement("li",{key:e.sys.id},c.a.createElement(N,{item:e}))}));return c.a.createElement("ul",{id:"posts"},t)}var L=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)({}),l=Object(d.a)(r,2),i=l[0],o=l[1];function u(){return(u=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new URL("https://cdn.contentful.com/spaces/sfbobw4fvv5k/environments/master/entries")).search=new URLSearchParams({access_token:"4OJtWZcNNAxKAhLrYNzedEPAuUNYgWdkD-zQJ5Rfzi0",order:"-sys.createdAt",select:"fields.slug,fields.title,sys.id,sys.createdAt",content_type:"post"}),e.next=4,fetch(t);case 4:e.sent.json().then((function(e){return o(e)})).catch((function(e){return n(e)}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),c.a.createElement(x,{posts:i})};var J=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{id:"container"},c.a.createElement("div",{id:"sidenav"},c.a.createElement(u,null)),c.a.createElement("div",{id:"page"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:L}),c.a.createElement(o.a,{path:"/:slug",component:S}),c.a.createElement(o.a,{component:E})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,t,n){e.exports=n(354)},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.0cb88609.chunk.js.map