(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/Mallikarjuna_Sharma.6dfaff0d.pdf"},2:function(e){e.exports=JSON.parse('{"backgroundType":"gradient","plainBackgroundMode":"daylight","devIntro":"Mallikarjuna Sharma","devDesc":"| Engineer | Programmer | Web Developer | Mobile App Developer ","gradientColors":"#EE7752, #E73C7E, #23A6D5, #23D5AB","icons":[{"id":0,"image":"fa-github","url":"https://github.com/mallikarjuna-sharma","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/mallikarjunasharma96","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/rmalliksharma96/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/mallikarjuna-sharma-475663142/","style":"socialicons"}],"instaLink":"https://www.instagram.com/","instaUsername":"rmalliksharma96","instaQuerry":"/?__a=1","showInstaProfilePic":true,"aboutDev":"Specialized front-end technologies using react native react.js android SDK. with experience on full stack web development using node.js SQl","gitHubLink":"https://api.github.com/users/","gitHubUsername":"mallikarjuna-sharma","gitHubQuerry":"/repos?sort=updated&direction=desc","projectsLength":10}')},25:function(e,a,t){e.exports=t.p+"static/media/rotary.fba49fb4.png"},26:function(e,a,t){e.exports=t.p+"static/media/mhealth.d005e82d.png"},27:function(e,a,t){e.exports=t.p+"static/media/fea1.2364ae1a.png"},28:function(e,a,t){e.exports=t.p+"static/media/ios.e4372950.png"},29:function(e,a,t){e.exports=t.p+"static/media/tictoe.086cba9f.png"},30:function(e,a,t){e.exports=t(55)},35:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),o=(t(35),t(12)),i=t(1),s=t(23),m=t.n(s),d=t(2),u=(t(5),t(6),function(){var e=d.icons,a=Object(n.useState)(d.devIntro),t=Object(i.a)(a,1)[0],r=Object(n.useState)(d.devDesc),c=Object(i.a)(r,1)[0],s=Object(n.useState)(["socialicons","socialicons","socialicons","socialicons"]),u=Object(i.a)(s,2),g=u[0],f=u[1],p=function(e){var a=Object(o.a)(g);return"enter"===e.event?(a[e.icon.id]="socialiconshover",f(a)):"leave"===e.event?(a[e.icon.id]="socialicons",f(a)):void 0};return l.a.createElement("div",null,l.a.createElement("div",{id:"title"},l.a.createElement("div",{id:"stars"})),l.a.createElement("div",{id:"divmainbody",className:"jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{className:"container container-fluid text-center "},l.a.createElement("h1",{className:"d-none d-md-block display-1"},t),l.a.createElement("h1",{className:"d-md-none"},t),l.a.createElement(m.a,{className:"lead"}," ",c),l.a.createElement("div",{className:"p-5"},e.map((function(e){return l.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(g[e.id]),onMouseOver:function(){return p({icon:e,event:"enter"})},onMouseOut:function(){return p({icon:e,event:"leave"})}}))}))),l.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))}),g=t(8),f=t.n(g),p=t(13),b=t.n(p),h=function(){var e=Object(n.useState)("About me"),a=Object(i.a)(e,1)[0],t=Object(n.useState)(d.aboutDev),r=Object(i.a)(t,1)[0],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(d.showInstaProfilePic),g=Object(i.a)(u,2),p=g[0],h=g[1],E=Object(n.useState)(b.a),v=Object(i.a)(E,1)[0];Object(n.useEffect)((function(){p&&y()}),[p]);var y=function(e){f.a.get(d.instaLink+d.instaUsername+d.instaQuerry).then((function(e){return m(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return h(!1),console.error(e.message)})).finally((function(){}))};return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},l.a.createElement("div",{className:"container container-fluid p-5"},l.a.createElement("div",{className:"row"},p&&l.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},l.a.createElement("img",{className:"border border-secondary rounded-circle",src:s,alt:"profilepicture"})),l.a.createElement("div",{className:"col-lg-".concat(p?"7":"12")},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},a),l.a.createElement("p",{className:"lead text-center"},r),v&&l.a.createElement("p",{className:"lead text-center"},l.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:b.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},E=t(4),v=(t(7),function(e){var a=e.name,t=e.img,n=e.href,r=e.duration;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"card-title col-lg-10 col-sm-12"},a," "),l.a.createElement("p",{className:"col-sm-12 col-lg-2",style:{fontStyle:"italic",fontSize:"14px",color:"#999",lineHeight:"18px",float:"right"}}," ",r," ")),l.a.createElement("hr",null),l.a.createElement("img",{src:t,style:{height:60,width:60},className:"mr-3",alt:"..."}),l.a.createElement("a",{href:n,target:"_blank"},l.a.createElement("button",{className:"btn btn-outline-dark btn-icon-text"},l.a.createElement("i",{className:"material-icons"},"android"),l.a.createElement("span",{className:"d-inline-block text-left"},l.a.createElement("small",{className:"font-weight-light d-block"},"Get it on the"),"Google Play "))))))}),y=t(24),N=function(e){var a,t=e.name,n=e.id,r=e.duration,c=e.web_href,o=e.mobile_href;e.Highlights;return l.a.createElement("div",{className:"col-md-6 draggable",draggable:"true"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("a",{className:"card-title col-lg-8 col-sm-12",href:c,style:{fontSize:18},target:"_blank"},t),l.a.createElement("p",{className:"col-sm-12 col-lg-4",style:{fontStyle:"italic",fontSize:"14px",color:"#999",lineHeight:"18px",float:"right"}}," ",r)),l.a.createElement("a",{href:c,target:"_blank",className:"btn btn-outline-secondary mr-3 mt-3"},l.a.createElement("i",{class:"fas fa-globe-asia"}),"Web App"),o?l.a.createElement("a",{href:o,target:"_blank",className:"btn btn-outline-secondary mt-3 "},l.a.createElement("i",{class:"fab fa-android"}),"Mobile App"):null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{id:"accordion",className:"accordion"},l.a.createElement("button",(a={className:"btn btn-link col-lg-12 col-sm-12 shimmer  collapsed",type:"button",style:{color:"rgba(148,148,148,.98)"},"data-toggle":"collapse","data-target":"#"+n,onClick:function(e){document.getElementById("myId").src=function(e){switch(e){case"collapse0":return"https://drive.google.com/file/d/1q9j7R5TDIbnScH3mds00y7a4D79ON7T0/preview";case"collapse1":return"https://drive.google.com/file/d/1kCXIGOOA5uK1Sz8whLecL_L0BPugXR3l/preview";case"collapse2":return"https://docs.google.com/document/d/1t6SQMgaHOfnvIuzoqKRr3FPCEMI0QnsRbExzaKJUyqI/preview"}}(n)}},Object(E.a)(a,"data-toggle","modal"),Object(E.a)(a,"data-target","#myModal"),Object(E.a)(a,"aria-expanded","true"),Object(E.a)(a,"aria-controls",n),a),"View Highlights"),l.a.createElement("div",{class:"modal fade",id:"myModal",style:{marginTop:"2%"}},l.a.createElement("div",{class:"modal-dialog modal-lg",role:"document"},l.a.createElement("div",{class:"modal-content"},l.a.createElement("div",{class:"modal-header",className:"d-lg-none d-xl-block"},l.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal"},"\xd7")),l.a.createElement("div",{class:"modal-body",style:{padding:0}},l.a.createElement(y.a,{width:"100%",height:"700px",id:"myId"})))))))))},w=function(e){var a=e.value,t=Object(n.useState)([]),r=Object(i.a)(t,2),c=r[0],o=r[1];Object(n.useEffect)((function(){s()}),[]);var s=function(){f.a.get(a).then((function(e){return o(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))},m=[],d=0;for(var u in c)m.push(u),d+=c[u];return l.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.map((function(e){return l.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/d*1e3)/10," %")})))},j=function(e){var a=e.value,t=Object(n.useState)("0 mints"),r=Object(i.a)(t,2),c=r[0],o=r[1];Object(n.useEffect)((function(){s()}));var s=function(){var e=new Date(a.pushed_at),t=(new Date).getTime()-e.getTime(),n=Math.trunc(t/1e3/60/60);if(n<24)return o("".concat(n.toString()," hours ago"));var l=e.getDate(),r=e.getMonth(),c=e.getFullYear();return o("on ".concat(l," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][r]," ").concat(c))},m=a.name,d=a.description,u=a.svn_url,g=a.stargazers_count,f=a.languages_url;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},m," "),l.a.createElement("p",{className:"card-text"},d," "),l.a.createElement("a",{href:"".concat(u,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},l.a.createElement("i",{className:"fab fa-github"})," Clone Project"),l.a.createElement("a",{href:u,target:"_blank",className:"btn btn-outline-secondary"},l.a.createElement("i",{className:"fab fa-github"})," Repo"),l.a.createElement("hr",null),l.a.createElement(w,{value:f}),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"text-dark card-link mr-4"},l.a.createElement("i",{className:"fab fa-github"})," Stars"," ",l.a.createElement("span",{className:"badge badge-dark"},g)),l.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},k=t(25),O=t.n(k),S=t(26),x=t.n(S),_=function(){return[{img:x.a,name:"mHealth",href:"https://play.google.com/store/apps/details?id=com.saieshinfosolutions.itc.doctor_app&hl=en",duration:"2018"},{img:O.a,name:"Rotary",href:"https://play.google.com/store/apps/details?id=com.shalominfotech.rotaryInstitute&hl=en",duration:"2018"}]},I=function(e){var a=e.name,t=e.id,r=e.duration,c=e.href,o=e.jobrole,s=e.Highlights,m=e.setProject,d=Object(n.useState)(!1),u=Object(i.a)(d,2),g=u[0],f=u[1];return l.a.createElement("div",{className:"col-md-6 draggable",draggable:"true"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body",style:{padding:"2%"}},l.a.createElement("div",{className:"row"},l.a.createElement("a",{className:"card-title col-lg-8 col-sm-12",href:c,style:{fontSize:18},target:"_blank"},a),l.a.createElement("p",{className:"col-sm-12 col-lg-4",style:{fontStyle:"italic",fontSize:"14px",color:"#999",lineHeight:"18px",float:"right",padding:0}}," ",r)),l.a.createElement("p",{style:{fontSize:"16px",color:"#999",lineHeight:"18px",float:"left"}}," ",o),l.a.createElement("div",{id:"accordion",className:"accordion"},l.a.createElement("button",{className:"btn btn-link col-lg-12 col-sm-12 shimmer  collapsed",type:"button",style:{color:"rgba(148,148,148,.98)"},"data-toggle":"collapse","data-target":"#"+t,onClick:function(e){return f(!g)},"aria-expanded":"true","aria-controls":t},"View Highlights"),l.a.createElement("div",{id:t,className:"collapse","data-parent":"#accordion"},l.a.createElement("hr",null),l.a.createElement("div",{className:"card-body"},null===s||void 0===s?void 0:s.split("\n").map((function(e,a){return l.a.createElement("p",{key:a},e)}))),"collapse1"===t&&l.a.createElement("a",{className:"btn btn-link col-lg-12 col-sm-12",type:"button",href:"#shalom",onClick:function(e){m(!!g&&_)},style:{color:"rgba(148,148,148,.98)"}},"View projects"))))))},M=t(27),D=t.n(M),H=t(28),C=t.n(H),A=t(29),L=t.n(A),B=function(){var e=Object(n.useState)("Recent Projects"),a=Object(i.a)(e,1)[0],t=Object(n.useState)([]),r=Object(i.a)(t,2),c=r[0],s=r[1],m=Object(n.useState)(d.projectsLength),u=Object(i.a)(m,1)[0],g=Object(n.useState)(!1),p=Object(i.a)(g,2),b=p[0],h=p[1],y=Object(n.useState)(0),w=Object(i.a)(y,2),k=(w[0],w[1]),O=Object(n.useCallback)((function(e){f.a.get(d.gitHubLink+d.gitHubUsername+d.gitHubQuerry).then((function(e){return s(e.data.slice(0,u))})).catch((function(e){return s("failed"),console.error(e.message)})).finally((function(){}))}),[u]);return Object(n.useEffect)((function(){O()}),[O]),Object(n.useEffect)((function(){b&&b.length>0&&k(window.scrollY)}),[b]),Object(n.useEffect)((function(){document.querySelectorAll(".draggable").forEach((function(e){e.addEventListener("dragstart",(function(){e.classList.add("dragging")})),e.addEventListener("dragend",(function(){e.classList.remove("dragging")}))})),document.querySelectorAll(".dragcontainer").forEach((function(a){a.addEventListener("dragover",(function(t){t.preventDefault();var n=document.querySelector(".dragging");a.appendChild(n);var l=e(a,t.clientY);console.log(n,"draggedEle"),null===l?a.appendChild(n):a.insertBefore(n,l)}))}));var e=function(e,a){return Object(o.a)(e.querySelectorAll(".draggable:not(.dragging)")).reduce((function(e,t){var n=t.getBoundingClientRect(),l=a-n.top-n.height/2;return console.log(n,"box",l),l<0&&l>e.offset?{offset:l,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element}}),[]),l.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},l.a.createElement("div",{className:"container container-fluid p-5"},l.a.createElement("a",{href:"malik"}),l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 pb-5"},"My Products"),l.a.createElement("div",{className:"row dragcontainer"},[{duration:"2020/Apr",name:"Covid-19",web_href:"https://elastic-hugle-e08f29.netlify.app/",mobile_href:"https://drive.google.com/file/d/1ffwQq42aO7M8nnv-u-kOyDiIrC2t7Uv0/view?usp=sharing"},{duration:"2020/May",name:"Contacts-CRM",web_href:"https://mallik-crm-dashboard.netlify.app/",mobile_href:"https://drive.google.com/file/d/1F_QMsTiKeOv-GS0zaWZwgGOv5igdwI9Q/view"},{duration:"2020/May",name:"Bank Details-India",web_href:"https://banks-details.netlify.app/",mobile_href:!1}].map((function(e,a){return l.a.createElement(N,{key:a,id:"collapse"+a,web_href:e.web_href,mobile_href:e.mobile_href,name:e.name,duration:e.duration})})))),l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 pb-5"},"Work Experience"),l.a.createElement("div",{className:"row dragcontainer"},[{duration:"2020/Aug - Present",name:"Bosch India (Mobinius Payroll)",href:"https://www.mobinius.com/",jobrole:"Senior Software Engineer",Highlights:"\n        \u2714 Responsible for maintaining/Bug fixing and developing UI features in scientific IOT project using\n        react-native with Bluetooth (BLE manager)\n        \u2714 Developed chat application for web app using React.js, material UI, Graph Ql with twillio.\n        \u2714 Completely configured Twillio for instant texts, audio, video messages using WEBRTC protocol\n        \u2714 Developed react with typescript project from scratch using Webpack for an supply chain application on food tracking\n        "},{duration:"2018/Dec - 2020/Aug",name:"Infosys",href:"https://www.infosys.com/",jobrole:"Systems Engineer",Highlights:"\n        \u2714 Developed admin and associate/student web application \n        \u2714 In which admin gives questions for targeted associates and these questions are in turn answered by those associates. \n        \u2714  handled image/video/hotspot question types,complex logic for fetching questions,leaderboard data with various filters and more complex features"},{duration:"2018/Apr - Nov",name:"Shalom Infotech",href:"http://www.shalominfotech.com/",jobrole:"Jr. Mobile app developer",Highlights:"Developed,Maintained,Deployed various native android application"}].map((function(e,a){var t;return l.a.createElement(I,(t={key:a,id:"collapse"+a,name:e.name,href:e.href},Object(E.a)(t,"name",e.name),Object(E.a)(t,"setProject",(function(e){h(e),document.getElementById("shalom")&&(document.getElementById("shalom").style.visibility="visible",k(window.scrollY))})),Object(E.a)(t,"duration",e.duration),Object(E.a)(t,"jobrole",e.jobrole),Object(E.a)(t,"Highlights",e.Highlights),t))})))),"failed"!==c&&l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 pb-5"},a),l.a.createElement("div",{className:"row"},c.map((function(e){return l.a.createElement(j,{key:e.id,id:e.id,value:e})})))),l.a.createElement("h1",{className:"display-4 pb-5"},"My Apps"),l.a.createElement("div",{className:"row"},[{img:D.a,name:"Finite Element Analysis",href:"https://play.google.com/store/apps/details?id=my.fea.mallik.finiteelementanalysis&hl=en",duration:"2017"},{img:C.a,name:"ios calculator",href:"https://play.google.com/store/apps/details?id=my.calculator.mallik.ioscalculator&hl=en",duration:"2017"},{img:L.a,name:"tic tac toe",href:"https://play.google.com/store/apps/details?id=my.game.tictactoe&hl=en",duration:"2017"}].map((function(e,a){return l.a.createElement(v,{key:a,img:e.img,name:e.name,href:e.href,duration:e.duration})}))),b&&l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 pb-5"},"Client Apps"),l.a.createElement("div",{className:"row",id:"shalom"},b.map((function(e,a){return l.a.createElement(v,{key:a,img:e.img,name:e.name,href:e.href,duration:e.duration})}))))))},P=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(i.a)(e,1)[0];return l.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},l.a.createElement("i",{className:"fas fa-code"})," with ",l.a.createElement("i",{className:"fas fa-heart"})," by"," ",l.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/mallikarjuna-sharma","aria-label":"My GitHub"},"mallikarjuna sharma")," ","using ",l.a.createElement("i",{className:"fab fa-react"}),l.a.createElement("p",null,l.a.createElement("small",{className:"text-muted"}," ","Project code is open source. Feel free to fork and make your own version.")))},R=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(u,null),l.a.createElement(h,null),l.a.createElement(B,null),l.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){}},[[30,1,2]]]);
//# sourceMappingURL=main.31906a17.chunk.js.map