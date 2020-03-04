(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a(73)},66:function(e,t){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),l=a(2),o=a(81),s=a(7),u=a(30),m=a.n(u),p=Object(o.a)({chatForm:{width:"300px"},mainWindow:{height:"300px",overflow:"auto",border:"4px solid #00f",borderRadius:"3px",padding:"3px"},chatText:{borderRadius:"3px"},inputForm:{display:"flex",flexDirection:"column",border:"3px solid #eee",padding:"6px",borderRadius:"5px",marginTop:"6px"},input:{background:"#fff",padding:"3px",margin:"3px",borderRadius:"5px"},button:{background:"#00f",color:"#eee",borderRadius:"5px"}}),d=function(e){var t=e.title,a=p(),r=Object(n.useState)(m.a.connect("https://desolate-eyrie-58645.herokuapp.com/")),i=Object(l.a)(r,1)[0],o=Object(n.useState)([]),u=Object(l.a)(o,2),d=u[0],h=u[1],b=Object(n.useState)(""),f=Object(l.a)(b,2),g=f[0],v=f[1],E=Object(n.useState)(""),w=Object(l.a)(E,2),x=w[0],j=w[1],O=Object(n.useState)({}),y=Object(l.a)(O,2),N=y[0],k=y[1];Object(n.useEffect)((function(){return i.on("chat",(function(e){var t=Object(s.a)(d);t.push(e),h(t)})),i.on("typing",(function(e){var t=Object.assign({},N);t[e.handle]=e.handle,k(t)})),i.on("typing-stopped",(function(e){var t=Object.assign({},N);delete t[e.handle],k(t)})),function(){i.removeListener("chat"),i.removeListener("typing"),i.removeListener("typing-stopped")}}),[d,N]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Window: ",t),c.a.createElement("form",{className:a.chatForm,onSubmit:function(e){e.preventDefault(),i.emit("chat",{handle:g,message:x}),j(""),i.emit("typing-stopped",{handle:g})}},c.a.createElement("div",{className:a.mainWindow},c.a.createElement("div",{className:a.chatText},d.map((function(e,t){return c.a.createElement("div",{key:t,className:a.chatEntry},c.a.createElement("strong",null,e.handle),": ",e.message)}))),c.a.createElement("div",{className:a.typing},Object.values(N).map((function(e){return c.a.createElement("div",{key:e},c.a.createElement("em",null,e," is typing"))})))),c.a.createElement("div",{className:a.inputForm},c.a.createElement("input",{className:a.input,value:g,placeholder:"Handle",onChange:function(e){return v(e.target.value)}}),c.a.createElement("input",{className:a.input,value:x,placeholder:"Message",onChange:function(e){j(e.target.value),e.target.value?i.emit("typing",{handle:g}):i.emit("typing-stopped",{handle:g})}}),c.a.createElement("button",{className:a.button},"Send"))))},h=a(31),b=a.n(h),f=Object(o.a)({chatWindows:{display:"flex"},chatContainer:{margin:"6px"}}),g=function(){var e=f(),t=Object(n.useState)(1),a=Object(l.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",null,c.a.createElement("h1",null,"Chat Demo"),c.a.createElement("p",null,"This demonstrates a chat app using web sockets. You can select up to 4 chat windows to open in the same window, or open multiple windows.",c.a.createElement("br",null),"Each chat window connects to the server and transmits data via web sockets.",c.a.createElement("br",null),"See the source on Github at ",c.a.createElement("a",{href:"https://github.com/wesdean/chat-app"},"https://github.com/wesdean/chat-app"),"."),c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",null,"Number of chat windows:",c.a.createElement("select",{onChange:function(e){var t=Number(e.target.value);t&&i(t)},value:r},[1,2,3,4].map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))),c.a.createElement("div",{className:e.chatWindows},b.a.times(r,(function(t){return c.a.createElement("div",{key:t,className:e.chatContainer},c.a.createElement(d,{title:(t+1).toString()}))}))))};var v=function(){return c.a.createElement(g,null)};i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.11f90854.chunk.js.map