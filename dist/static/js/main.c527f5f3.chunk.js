(this["webpackJsonpproject-app"]=this["webpackJsonpproject-app"]||[]).push([[0],{72:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c(1),a=c.n(n),s=c(39),i=c.n(s),j=(c(72),c(25)),o=c(13),l=c(12),u=c(96),b=c(94),d=c(22),O=c(17),p=c.n(O),x=c(27),h=c(43);c(87),c(86),c(80);h.a.initializeApp({apiKey:"AIzaSyAEre8D8IUYGD_2MVMrp7gc0IH3aVn391M",authDomain:"project-app-e49d6.firebaseapp.com",projectId:"project-app-e49d6",storageBucket:"project-app-e49d6.appspot.com",messagingSenderId:"298931497155",appId:"1:298931497155:web:6315a76b14763fa95c5a76",measurementId:"G-LC2CQRK38B"}),h.a.analytics();var m=h.a.firestore(),f=h.a.auth(),v=a.a.createContext();function g(){return Object(n.useContext)(v)}function N(e){var t=e.children,c=Object(n.useState)(),a=Object(l.a)(c,2),s=a[0],i=a[1],j=Object(n.useState)(!0),o=Object(l.a)(j,2),u=o[0],b=o[1],d=Object(n.useState)(""),O=Object(l.a)(d,2),h=O[0],m=O[1],g=Object(n.useState)(""),N=Object(l.a)(g,2),y=N[0],w=N[1],k=Object(n.useState)(""),L=Object(l.a)(k,2),C=L[0],S=L[1],I=Object(n.useState)(!1),P=Object(l.a)(I,2),D=P[0],A=P[1],U=function(){var e=Object(x.a)(p.a.mark((function e(t,c,r,n){var a,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e,t){var c=e[0],r=t[0],n=c.concat(r).toUpperCase();return"".concat(n,",").concat(e,",").concat(t)}(r,n),e.next=4,f.createUserWithEmailAndPassword(t,c);case 4:if(!(s=e.sent)){e.next=15;break}return i=s.user,e.prev=7,e.next=10,i.updateProfile({displayName:a});case 10:A(!0),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(7);case 15:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(t,c,r,n){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return f.onAuthStateChanged((function(e){if(i(e),b(!1),e){var t=e.displayName;if(null!==t){var c=t.split(",");m(c[1]),w(c[2]),S(c[0])}}}))}),[D]);var B={currentUser:s,signUp:U,signIn:function(e,t){return f.signInWithEmailAndPassword(e,t)},signOut:function(){return f.signOut()},firstN:h,lastN:y,initials:C};return Object(r.jsx)(v.Provider,{value:B,children:!u&&t})}var y=c(90),w=function(){var e=g(),t=e.signOut,c=e.initials,a=Object(o.k)(),s=Object(n.useState)(""),i=Object(l.a)(s,1)[0],j=Object(n.useState)(""),u=Object(l.a)(j,2),O=u[0],h=u[1];Object(n.useEffect)((function(){c&&h(c)}),[O,c]);var m=function(){var e=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:a.push("/signin"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),i("failed to log out");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a.Item,{children:Object(r.jsx)(d.LinkContainer,{to:"/create",children:Object(r.jsx)(b.a.Link,{children:"New Project"})})}),Object(r.jsx)(b.a.Item,{children:Object(r.jsx)(y.a,{style:{textDecoration:"none"},variant:"link",onClick:m,children:"Log Out"})}),Object(r.jsx)(b.a.Item,{children:Object(r.jsx)(d.LinkContainer,{to:"/",children:Object(r.jsx)(b.a.Link,{className:"badge  rounded-circle bg-primary py-2 mt-2 mx-3 ",children:c})})})]})},k=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b.a.Item,{children:Object(r.jsx)(d.LinkContainer,{to:"/signup",children:Object(r.jsx)(b.a.Link,{children:"Sign Up"})})}),Object(r.jsx)(b.a.Item,{children:Object(r.jsx)(d.LinkContainer,{to:"/signin",children:Object(r.jsx)(b.a.Link,{children:"Log In"})})})]})},L=function(){var e=g().currentUser,t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){s(!!e)}),[e]),Object(r.jsxs)(u.a,{bg:"dark",variant:"dark",className:"mb-3",children:[Object(r.jsx)(d.LinkContainer,{to:"/",children:Object(r.jsx)(u.a.Brand,{children:"AlexooO"})}),Object(r.jsx)(b.a,{className:"ml-auto ",children:a?Object(r.jsx)(w,{}):Object(r.jsx)(k,{})})]})},C=c(91),S=c(92),I=c(65),P=c(100),D=c(36),A=c.n(D),U=function(e){var t=e.notifications.slice(0,3);return Object(r.jsx)("section",{className:"mt-3",children:Object(r.jsx)(P.a,{children:Object(r.jsxs)(P.a.Body,{children:[Object(r.jsx)(P.a.Title,{className:"text-center t-color",children:"Notifications"}),Object(r.jsx)("ul",{className:"list-group",children:t&&t.map((function(e){return Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsxs)("span",{className:"t-color",children:[e.authorFirstName," ",e.authorLastName]})," ","created a project",Object(r.jsx)("br",{}),A()(e.createdAt.toDate()).calendar()]},e.id)}))})]})})})},B=c(101),F=function(e){for(var t=e.projectsPerPage,c=e.totalProjects,n=e.paginator,a=e.currentPage,s=[],i=function(e){s.push(Object(r.jsx)(B.a.Item,{onClick:function(){return n(e)},active:e===a,children:e},e))},j=1;j<=Math.ceil(c/t);j++)i(j);return Object(r.jsx)(B.a,{children:s})},E=function(e){var t=e.project,c=A()(t.createdAt.toDate()).calendar();return Object(r.jsx)(P.a,{className:"mb-2 mt-3",children:Object(r.jsxs)(P.a.Body,{children:[Object(r.jsx)(P.a.Title,{className:"t-color",children:t.title}),Object(r.jsxs)(P.a.Text,{className:"text-muted",children:["Posted by: ",t.authorFirstName," ",Object(r.jsx)("br",{}),c]})]})})},G=function(e){var t=e.projects;return Object(r.jsx)("div",{children:t&&t.map((function(e){return Object(r.jsx)(j.Link,{style:{textDecoration:"none"},to:"/Project/".concat(e.id),children:Object(r.jsx)(E,{project:e})},e.id)}))})},R=c(35),T=c(97),q=function(){var e=function(){var e=Object(x.a)(p.a.mark((function e(){var t,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.collection("projects").orderBy("createdAt","desc"),e.next=3,t.get();case 3:return c=e.sent,r=c.docs.map((function(e){return Object(R.a)(Object(R.a)({},e.data()),{},{id:e.id})})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.a)("allprojects",e)},M=function(){var e=q(),t=e.data,c=e.isLoading,a=Object(n.useState)([]),s=Object(l.a)(a,2),i=s[0],j=s[1],o=Object(n.useState)(1),u=Object(l.a)(o,2),b=u[0],d=u[1],O=Object(n.useState)(5),p=Object(l.a)(O,1)[0];Object(n.useEffect)((function(){t&&j(t)}),[t]);var x=b*p,h=x-p,m=i.slice(h,x);return Object(r.jsx)(C.a,{fluid:!0,className:"",children:c?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)(S.a,{children:[Object(r.jsxs)(I.a,{md:7,children:[Object(r.jsx)(G,{projects:m}),Object(r.jsx)(F,{projectsPerPage:p,totalProjects:i.length,paginator:function(e){return d(e)},currentPage:b})]}),Object(r.jsx)(I.a,{md:5,children:Object(r.jsx)(U,{notifications:i})})]})})},W=c(48),z=function(e){return Object(W.b)().getQueryData().find((function(t){return t.id===e}))},H=function(e){var t=e.match.params.id,c=z(t),n=A()(c.createdAt.toDate()).calendar();return Object(r.jsx)(C.a,{children:Object(r.jsxs)(P.a,{children:[Object(r.jsxs)(P.a.Body,{children:[Object(r.jsxs)(P.a.Title,{className:"t-color",children:["Project Title:-",c.title]}),Object(r.jsxs)(P.a.Text,{children:[" ",c.content]})]}),Object(r.jsxs)(P.a.Footer,{className:"text-muted",children:[Object(r.jsxs)("p",{children:["posted by: ",c.authorFirstName," ","",c.authorLastName]}),Object(r.jsx)("p",{children:n})]})]})})},J=c(98),K=c(93),Q=function(){var e=Object(o.k)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),u=j[0],O=j[1],p=Object(n.useRef)(),x=Object(n.useRef)(),h=Object(n.useRef)(),m=Object(n.useRef)(),f=Object(n.useRef)(),v=g(),N=v.signUp;return v.currentUser?Object(r.jsx)(o.c,{to:"/"}):Object(r.jsxs)(C.a,{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(r.jsx)(P.a,{className:"w-100 mt-4",style:{maxWidth:"400px"},children:Object(r.jsxs)(P.a.Body,{children:[a&&Object(r.jsx)(J.a,{variant:"danger",children:a}),Object(r.jsx)("h2",{className:"text-center mb-2",children:"Sign up"}),Object(r.jsxs)(K.a,{onSubmit:function(t){if(t.preventDefault(),m.current.value!==f.current.value)return s("password do not match");try{s(""),O(!0),N(h.current.value,m.current.value,p.current.value,x.current.value),e.push("/")}catch(c){s(c.message)}O(!1)},children:[Object(r.jsxs)(K.a.Group,{id:"email",children:[Object(r.jsx)(K.a.Label,{children:" First Name"}),Object(r.jsx)(K.a.Control,{type:"text",ref:p,required:!0,placeholder:"enter first name"})]}),Object(r.jsxs)(K.a.Group,{id:"text",children:[Object(r.jsx)(K.a.Label,{children:" Last name"}),Object(r.jsx)(K.a.Control,{type:"text",ref:x,required:!0,placeholder:"enter last name"})]}),Object(r.jsxs)(K.a.Group,{id:"email",children:[Object(r.jsx)(K.a.Label,{children:" Email"}),Object(r.jsx)(K.a.Control,{type:"email",ref:h,required:!0,placeholder:"enter email"})]}),Object(r.jsxs)(K.a.Group,{id:"password",children:[Object(r.jsx)(K.a.Label,{children:" Password"}),Object(r.jsx)(K.a.Control,{type:"password",ref:m,required:!0,placeholder:"enter password"})]}),Object(r.jsxs)(K.a.Group,{id:"password-confirm",children:[Object(r.jsx)(K.a.Label,{children:" Password Confirmation"}),Object(r.jsx)(K.a.Control,{type:"password-confirm",ref:f,placeholder:"confirm password",required:!0})]}),Object(r.jsx)(y.a,{className:"w-100",type:"submit",disabled:u,children:"Sign Up"})]})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2 pb-4",children:["Have an account already?"," ",Object(r.jsx)(d.LinkContainer,{to:"/signin",children:Object(r.jsx)(b.a.Link,{children:"Sign In"})})]})]})},V=function(){var e=Object(o.k)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),u=j[0],O=j[1],h=Object(n.useRef)(),m=Object(n.useRef)(),f=g(),v=f.signIn,N=f.currentUser,w=function(){var t=Object(x.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,s(""),O(!0),t.next=6,v(h.current.value,m.current.value);case 6:e.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),s(t.t0.message);case 12:O(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){return function(){O(!1)}}),[u]),N?Object(r.jsx)(o.c,{to:"/"}):Object(r.jsxs)(C.a,{className:"d-flex justify-content-center align-items-center flex-column",children:[Object(r.jsx)(P.a,{className:"w-100 mt-4",style:{maxWidth:"400px"},children:Object(r.jsxs)(P.a.Body,{children:[a&&Object(r.jsx)(J.a,{variant:"danger",children:a}),Object(r.jsx)("h2",{className:"text-center mb-2",children:"Sign In"}),Object(r.jsxs)(K.a,{onSubmit:w,children:[Object(r.jsxs)(K.a.Group,{id:"email",children:[Object(r.jsx)(K.a.Label,{children:" Email"}),Object(r.jsx)(K.a.Control,{type:"email",ref:h,required:!0,placeholder:"enter email"})]}),Object(r.jsxs)(K.a.Group,{id:"password",children:[Object(r.jsx)(K.a.Label,{children:" Password"}),Object(r.jsx)(K.a.Control,{type:"password",ref:m,required:!0,placeholder:"enter password"})]}),Object(r.jsx)(y.a,{className:"w-100",type:"submit",disabled:u,children:"Sign In"})]})]})}),Object(r.jsxs)("div",{className:"w-100 text-center mt-2 pb-4",children:["Create an account"," ",Object(r.jsx)(d.LinkContainer,{to:"/signup",children:Object(r.jsx)(b.a.Link,{children:"Sign Up"})})]})]})},Y=c(99),_=function(){var e=Object(o.k)(),t=g(),c=t.firstN,a=t.lastN,s=Object(n.useState)(""),i=Object(l.a)(s,2),j=i[0],u=i[1],b=Object(n.useState)(""),d=Object(l.a)(b,2),O=d[0],h=d[1],f={authorFirstName:c,authorLastName:a,content:O,createdAt:new Date,title:j},v=Object(Y.a)((function(e){return m.collection("projects").add(e)})),N=function(){var t=Object(x.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,v.mutateAsync(f);case 4:u(""),h(""),e.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)(C.a,{children:[Object(r.jsx)("h5",{className:"text-center mb-5",children:"Create New Project"}),Object(r.jsx)(S.a,{children:Object(r.jsxs)(I.a,{md:12,className:"center",children:[" ",Object(r.jsxs)(K.a,{className:"mx-5",onSubmit:N,children:[Object(r.jsxs)(K.a.Group,{controlId:"title",children:[Object(r.jsx)(K.a.Label,{className:"text-start",children:"Title"}),Object(r.jsx)(K.a.Control,{type:"text",value:j,placeholder:"project title",onChange:function(e){return u(e.target.value)}})]}),Object(r.jsxs)(K.a.Group,{controlId:"content",children:[Object(r.jsx)(K.a.Label,{children:"Content"}),Object(r.jsx)(K.a.Control,{as:"textarea",type:"text",value:O,placeholder:"project content",onChange:function(e){return h(e.target.value)}})]}),Object(r.jsx)(y.a,{variant:"primary",type:"submit",children:v.isLoading?Object(r.jsx)("h4",{children:"send..."}):Object(r.jsx)("h4",{children:"Create"})})]})]})})]})},X=c(66),Z=function(e){var t=e.privatecomp,c=Object(X.a)(e,["privatecomp"]),n=g().currentUser;return Object(r.jsx)(o.d,Object(R.a)(Object(R.a)({},c),{},{render:function(e){return n?Object(r.jsx)(t,Object(R.a)({},e)):Object(r.jsx)(o.c,{to:"/signin"})}}))},$=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Page Not found"})})};var ee=function(){return Object(r.jsxs)(j.BrowserRouter,{children:[Object(r.jsx)(L,{}),Object(r.jsxs)(o.g,{children:[Object(r.jsx)(Z,{path:"/",exact:!0,privatecomp:M}),Object(r.jsx)(Z,{path:"/project/:id",privatecomp:H}),Object(r.jsx)(o.d,{path:"/signin",component:V}),Object(r.jsx)(o.d,{path:"/signup",component:Q}),Object(r.jsx)(Z,{path:"/create",privatecomp:_}),Object(r.jsx)(Z,{path:"/",privatecomp:$})]})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},ce=c(95),re=(c(84),new ce.a);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(W.a,{client:re,children:Object(r.jsx)(N,{children:Object(r.jsx)(ee,{})})})}),document.getElementById("root")),te()}},[[85,1,2]]]);
//# sourceMappingURL=main.c527f5f3.chunk.js.map