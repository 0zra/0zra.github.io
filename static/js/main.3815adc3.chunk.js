(this["webpackJsonpkibel-app"]=this["webpackJsonpkibel-app"]||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(28),n(9)),o=n.n(s),d=n(17),p=n(20),u=n(55),l=n(58),f=n(57),h=n(59),j=n(3),b=Object(u.a)((function(e){return{root:{flexGrow:1,marginTop:"40vh"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function x(){var e=c.a.useState(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],r=b();return c.a.useEffect((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://dfranczu.webd.pro/dmajka/kibel/public/api/7589deed-d338-4a90-8000-e93ad76428b6/status",{method:"GET",headers:{}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),a(n.is_occupied);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}setInterval((function(){return e.apply(this,arguments)}),1e4)}),[]),Object(j.jsx)("div",{className:r.root,children:Object(j.jsxs)(f.a,{container:!0,spacing:5,justify:"flex-end",alignItems:"center",children:[Object(j.jsx)(f.a,{item:!0,xs:12,children:Object(j.jsx)(l.a,{className:r.paper,children:n?"Zaj\u0119te":"Wolne"})}),Object(j.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(h.a,{variant:"contained",color:"secondary",size:"large",fullWidth:!0,style:{padding:"20px",fontSize:"30px",fontWeight:700},disabled:n,onClick:function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://dfranczu.webd.pro/dmajka/kibel/public/api/7589deed-d338-4a90-8000-e93ad76428b6/occupate",{method:"GET",headers:{}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),a(n.is_occupied);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},children:"Zajmij"})}),Object(j.jsx)(f.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(h.a,{variant:"contained",color:"primary",size:"large",fullWidth:!0,style:{padding:"20px",fontSize:"30px",fontWeight:700},disabled:!n,onClick:function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://dfranczu.webd.pro/dmajka/kibel/public/api/7589deed-d338-4a90-8000-e93ad76428b6/make-free",{method:"GET",headers:{}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),a(n.is_occupied);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},children:"Uwolnij"})})]})})}n(35);var m=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(x,{})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.3815adc3.chunk.js.map