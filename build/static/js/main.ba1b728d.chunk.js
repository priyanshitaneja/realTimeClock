(this["webpackJsonpreal-time-clock-usestate-hook-practice"]=this["webpackJsonpreal-time-clock-usestate-hook-practice"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=n(1),s=r.a.memo((function(e){var t=e.hours;return console.log("hours rendered"),r.a.createElement("h1",null," ",t," ")})),u=r.a.memo((function(e){var t=e.min;return console.log("min rendered"),r.a.createElement("h1",null," ",t," ")})),i=r.a.memo((function(e){var t=e.sec;return console.log("sec rendered"),r.a.createElement("h1",null," ",t," ")})),m=function(){var e=Object(a.useState)(new Date),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(n.getHours()),m=Object(l.a)(o,2),d=m[0],E=m[1],g=Object(a.useState)(n.getMinutes()),h=Object(l.a)(g,2),p=h[0],v=h[1],b=Object(a.useState)(n.getSeconds()),O=Object(l.a)(b,2),f=O[0],j=O[1];console.log("clock rendered");return setInterval((function(){c(n=new Date),d!==n.getHours()&&E(n.getHours()),p!==n.getMinutes()&&v(n.getMinutes()),f!==n.getSeconds()&&j(n.getSeconds())}),1e3),r.a.createElement("div",{className:"clock"},r.a.createElement(s,{hours:d}),r.a.createElement("h1",null,":"),r.a.createElement(u,{min:p}),r.a.createElement("h1",null,":"),r.a.createElement(i,{sec:f}))},d=r.a.memo((function(){return console.log("Optimization content rerendered"),r.a.createElement("div",{className:"optimization"},r.a.createElement("h3",{className:"optimisation-heading"},"Optimization:"),r.a.createElement("ul",{className:"optimisation-list"},r.a.createElement("li",null,"Hours and minutes don't re-render when seconds change."),r.a.createElement("li",null,"Hours don't re-render when minutes change, seconds obviously do."),r.a.createElement("li",null,"Only seconds re-render every second.")))}));var E=function(){return console.log("App rendered"),r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(d,null))};o.a.render(r.a.createElement(E,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(12)}},[[4,1,2]]]);
//# sourceMappingURL=main.ba1b728d.chunk.js.map