(this.webpackJsonpcoffeewithcloud=this.webpackJsonpcoffeewithcloud||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(35),r=a.n(o),c=(a(45),a(8)),i=a(1),m=a(36),s=[{id:"0",tags:"Intro, Test Blog",name:"''Hello World''",date:"09-04-2020",author:"Isaac Campbell",teaser:"Origin Story",source:a.n(m).a}],u=function(){return l.a.createElement("div",{className:"nav"},l.a.createElement(c.b,{to:"/"},"Home"),l.a.createElement(c.b,{to:"/blogs"},"Search for Blogs"),l.a.createElement(c.b,{to:"/contactme"},"Got Questions?"),l.a.createElement(c.b,{to:"/about"},"About Me"))},d=a(37),A=a.n(d),g=function(e){return e.blogs.slice(0,4).reverse().map((function(e,t){return l.a.createElement("div",{key:e.id,className:"blogDemo",style:{marginBottom:"3ch",marginTop:"1ch"}},l.a.createElement(c.b,{to:"/blogs/".concat(t)},l.a.createElement("h3",{style:{paddingBottom:"0px"}},e.name),l.a.createElement("h5",null,e.date),l.a.createElement("p",null,e.teaser),l.a.createElement("p",{style:{fontSize:"14px"}},"Tags: ",e.tags)))}))};function h(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("header",{className:"homeheader"},"CoffeeWithCloud"),l.a.createElement("header",{className:"homeheadersub"},"Exploring newest technologies, one cup at a time"),l.a.createElement("table",{className:"aboutMe",align:"center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left",valign:"top"},l.a.createElement("img",{src:A.a,className:"profile",alt:"profile"})),l.a.createElement("td",{align:"left",valign:"top"},l.a.createElement("p",null,l.a.createElement("br",null),"Welcome to the blog! Grab a seat, your coffee is almost ready!",l.a.createElement("br",null),"While you wait, check out ",l.a.createElement("a",{href:"http://www.github.com/ikepcampbell"},"my GitHub")," for all content in this blog."))))),l.a.createElement("p",{style:{width:"40%",left:"30%",margin:"0 auto"}},"Recent Posts: "),l.a.createElement("main",null,l.a.createElement(g,{blogs:s})))}var E=a(10),f=a(38),p=a.n(f);function b(e){var t=Object(n.useState)(null),a=Object(E.a)(t,2),o=a[0],r=a[1],c=e.match.params.blogId;return Object(n.useEffect)((function(){"undefined"!==typeof s[c]&&fetch(s[c].source).then((function(e){return e.text()})).then((function(e){return r(e)}))}),[c]),l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),s[c]?l.a.createElement("div",{className:"blogPost"},l.a.createElement("h1",null,s[c].name),l.a.createElement("h4",null,"By: ",s[c].author," \xa0\xa0\xa0 ",s[c].date),l.a.createElement("div",{className:"markdownContent"},l.a.createElement(p.a,{source:o,escapeHtml:!1}))):l.a.createElement("div",{className:"blogPostNotFound"},l.a.createElement("p",null,"yikes no blog here :/ ")))}var v=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(e.blogs),m=Object(E.a)(i,2),s=m[0],u=m[1],d=function(t){var a=e.blogs.map((function(e){return{id:e.id,tags:e.tags,name:e.name,date:e.date,author:e.author,teaser:e.teaser,source:e.source}}));if(""!==t){var n;r(t),n=a.filter((function(e){return e.name.toLowerCase().includes(o)||e.tags.toLowerCase().includes(o)})),u(n)}else u(e.blogs)};return l.a.createElement("div",null,l.a.createElement("div",{className:"filterinput"},"Search title and tags for: ",l.a.createElement("input",{onChange:function(e){return d(e.target.value.toLowerCase())},onKeyUp:function(e){return d(e.target.value.toLowerCase())}})),s.map((function(e,t){return l.a.createElement("div",{key:e.i,className:"blogDemo",style:{marginBottom:"3ch",marginTop:"1ch"}},l.a.createElement(c.b,{to:"/blogs/".concat(e.id)},l.a.createElement("h3",{style:{paddingBottom:"0px"}},e.name),l.a.createElement("h5",null,e.date),l.a.createElement("p",null,e.teaser),l.a.createElement("p",{style:{fontSize:"14px"}},"Tags: ",e.tags)))})))};function w(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("main",null,l.a.createElement(v,{blogs:s})))}function y(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",{className:"aboutMePage"},l.a.createElement("h1",{class:"container-content"}," Hello all !!"),l.a.createElement("p",{style:{paddingTop:"1%",fontSize:"18px"},class:"container-content"},"My name is Isaac, and the lovely woman who is making me cheese is my wife Sam!"),l.a.createElement("p",{style:{paddingTop:"1%"},class:"container-content"}," We got married in the midst of the 2020 pandemic and let me just say how incredible she is and that life is a living dream because of her. She is the the primary inspiration and creative genius for this blog."),l.a.createElement("p",{style:{paddingTop:"1%"},class:"container-content"},"Currently I am a Software Engineer with YASH Technologies, Inc. where I have been enhancing the Software Delivery Life Cycle with DevOps practices. I also get to work with some pretty cool and exciting technologies."),l.a.createElement("p",{style:{paddingTop:"1%"},class:"container-content"},"Over the last year and a half I have learned some tremendous knowledge that I think could benefit the people in the industry, students in college, or even people just looking to learn something new!"),l.a.createElement("p",{style:{paddingTop:"1%"},class:"container-content"},"I wanted to design CoffeeWithCloud after spending an incredible amount of hours in my local coffee shops studying, programming and of course drinking endless cups with Sam. Being able to work from home has given me a ton of creative freedom and ability to create this website, with the help of a few friends."),l.a.createElement("p",{style:{paddingTop:"1%"},class:"container-content"},"I'm hoping this blog will have a lot of wonderful entries, and we can grow a little community."),l.a.createElement("p",{style:{paddingTop:"1%"},class:"container-content"},"Thanks for stopping by, I hope I can help you get farther along in your journey! Grab a seat, let me get you a fresh cup :)")))}var C=a(16),B=a.n(C),D=a(39);Object(C.init)("user_rDmZxoYyuflV3LIrIZoGp");var H=function(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],o=t[1];return l.a.createElement("form",{id:"contact-form",className:"contact-form",onSubmit:function(e){e.preventDefault(),B.a.sendForm("service_kwz3sfp","template_j9egi9f",e.target,"user_rDmZxoYyuflV3LIrIZoGp").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Thank you so much for the message! I will get back to you as soon as I can!!"),document.getElementById("contact-form").reset()}},l.a.createElement("div",{style:{paddingBottom:"3vw"}},l.a.createElement("label",null,"Name: "),l.a.createElement("input",{type:"text",name:"name",required:!0})),l.a.createElement("div",{style:{paddingBottom:"3vw"}},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",required:!0})),l.a.createElement("div",{style:{paddingBottom:"3vw"}},l.a.createElement("label",null,"Subject: "),l.a.createElement("input",{type:"text",name:"subject",required:!0})),l.a.createElement("div",{style:{paddingBottom:"3vw"}},l.a.createElement("label",null,"Message: "),l.a.createElement("textarea",{name:"message",required:!0})),l.a.createElement("div",{className:"submitSection"},l.a.createElement(D.a,{sitekey:"6LfvMcwZAAAAABJ3AXxgurBgziXCy6gzDWBFXqbf",onChange:function(){o(!1)}}),l.a.createElement("input",{type:"submit",disabled:a,value:"Submit"})))};function I(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",null,l.a.createElement(H,null)))}function Q(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement("div",null,l.a.createElement("h1",null,"404 Theres nothing here!")))}a(132).config();var O=function(){return l.a.createElement(c.a,{basename:"/"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:h}),l.a.createElement(i.a,{path:"/blogs/:blogId",component:b}),l.a.createElement(i.a,{path:"/blogs",component:w}),l.a.createElement(i.a,{path:"/contactme",component:I}),l.a.createElement(i.a,{path:"/about",component:y}),l.a.createElement(i.a,{component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){e.exports=a.p+"static/media/blog1.352051d2.md"},37:function(e,t){e.exports="data:image/png;base64,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"},40:function(e,t,a){e.exports=a(134)},45:function(e,t,a){}},[[40,1,2]]]);
//# sourceMappingURL=main.cbc03e5b.chunk.js.map