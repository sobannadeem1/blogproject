(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(30),r=a.n(s),o=(a(89),a(167)),i=a(12),l=a(15),d=a(1);const j=Object(n.createContext)(null);var b=e=>{let{children:t}=e;const[a,c]=Object(n.useState)({name:"",username:""});return Object(d.jsx)(j.Provider,{value:{account:a,setAccount:c},children:t})},p=a(4),x=a(164),u=a(166);const h=Object(p.a)(x.a)`
    background: #FFFFFF;
    color: black;
`,O=Object(p.a)(u.a)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;var g=()=>{Object(i.h)();return Object(d.jsx)(h,{children:Object(d.jsxs)(O,{children:[Object(d.jsx)(l.b,{to:"/",children:"HOME"}),Object(d.jsx)(l.b,{to:"/about",children:"ABOUT"}),Object(d.jsx)(l.b,{to:"/contact",children:"CONTACT"}),Object(d.jsx)(l.b,{to:"/account",children:"LOGOUT"})]})})},m=a(163),f=a(168);const w=Object(p.a)(o.a)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,y=Object(p.a)(f.a)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`,v=Object(p.a)(f.a)`
    font-size: 20px;
    background: #FFFFFF;
`;var S=()=>Object(d.jsxs)(w,{children:[Object(d.jsx)(y,{children:"BLOG"}),Object(d.jsx)(v,{children:"Code for Interview"})]}),k=a(169),F=a(160),E=a(170),T=a(171),C=a(172),P=a(173);const A=[{id:1,type:"Music"},{id:2,type:"Movies"},{id:3,type:"Sports"},{id:4,type:"Tech"},{id:5,type:"Fashion"}],M=Object(p.a)(k.a)`
    border: 1px solid rgba(224, 224, 224, 1);
`,D=Object(p.a)(F.a)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`,z=Object(p.a)(l.b)`
    text-decoration: none;
    color: inherit;
`;var I=()=>{const[e]=Object(l.c)(),t=e.get("category");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.b,{to:`/create?category=${t||""}`,style:{textDecoration:"none"},children:Object(d.jsx)(D,{variant:"contained",children:"Create Blog"})}),Object(d.jsxs)(M,{children:[Object(d.jsx)(E.a,{children:Object(d.jsx)(T.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(z,{to:"/",children:"All Categories"})})})}),Object(d.jsx)(P.a,{children:A.map((e=>Object(d.jsx)(T.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(z,{to:`/?category=${e.type}`,children:e.type})})},e.id)))})]})]})},B=a(71);const q={loading:{title:"Loading...",message:"Data is being loaded. Please wait"},success:{title:"Success",message:"Data successfully loaded"},requestFailure:{title:"Error!",message:"An error occur while parsing request data"},responseFailure:{title:"Error!",message:"An error occur while fetching response from server. Please try again"},networkError:{title:"Error!",message:"Unable to connect to the server. Please check internet connectivity and try again."}},R={userLogin:{url:"/login",method:"POST"},userSignup:{url:"/signup",method:"POST"},getAllPosts:{url:"/posts",method:"GET",params:!0},getRefreshToken:{url:"/token",method:"POST"},uploadFile:{url:"file/upload",method:"POST"},createPost:{url:"create",method:"POST"},deletePost:{url:"delete",method:"DELETE",query:!0},getPostById:{url:"post",method:"GET",query:!0},newComment:{url:"/comment/new",method:"POST"},getAllComments:{url:"comments",method:"GET",query:!0},deleteComment:{url:"comment/delete",method:"DELETE",query:!0},updatePost:{url:"update",method:"PUT",query:!0}},G=(e,t)=>e.params?{params:t}:e.query?"object"===typeof t?{query:t._id}:{query:t}:{},L=a.n(B).a.create({baseURL:"https://blogproject-pearl.vercel.app",timeout:1e4,headers:{"content-type":"application/json"}});L.interceptors.request.use((function(e){return e.TYPE.params?e.params=e.TYPE.params:e.TYPE.query&&(e.url=e.url+"/"+e.TYPE.query),e}),(function(e){return Promise.reject(e)})),L.interceptors.response.use((function(e){return H(e)}),(function(e){return Promise.reject(N(e))}));const H=e=>200===(null===e||void 0===e?void 0:e.status)?{isSuccess:!0,data:e.data}:{isFailure:!0,status:null===e||void 0===e?void 0:e.status,msg:null===e||void 0===e?void 0:e.msg,code:null===e||void 0===e?void 0:e.code},N=async e=>{return e.response?403!==(null===(t=e.response)||void 0===t?void 0:t.status)?(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:q.responseFailure,code:e.response.status}):void sessionStorage.clear():e.request?(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:q.requestFailure,code:""}):(console.log("ERROR IN RESPONSE: ",e.toJSON()),{isError:!0,msg:q.networkError,code:""});var t},U={};for(const[ot,it]of Object.entries(R))U[ot]=(e,t,a)=>L({method:it.method,url:it.url,data:"DELETE"===it.method?"":e,responseType:it.responseType,headers:{authorization:sessionStorage.getItem("accessToken")},TYPE:G(it,e),onUploadProgress:function(e){if(t){let a=Math.round(100*e.loaded/e.total);t(a)}},onDownloadProgress:function(e){if(a){let t=Math.round(100*e.loaded/e.total);a(t)}}});const _=Object(p.a)(o.a)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`,Y=Object(p.a)("img")({width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:150}),J=Object(p.a)(f.a)`
    color: #878787
    font-size: 12px;
`,W=Object(p.a)(f.a)`
    font-size: 18px;
    font-weight: 600
`,$=Object(p.a)(f.a)`
    font-size: 14px;
    word-break: break-word;
`;var Z=e=>{let{post:t}=e;const a=t.picture?t.picture:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",n=(e,t)=>e.length>t?e.substring(0,t)+"...":e;return Object(d.jsxs)(_,{children:[Object(d.jsx)(Y,{src:a,alt:"post"}),Object(d.jsx)(J,{children:t.categories}),Object(d.jsx)(W,{children:n(t.title,20)}),Object(d.jsxs)(J,{children:["Author: ",t.username]}),Object(d.jsx)($,{children:n(t.description,100)})]})};var V=()=>{const[e,t]=Object(n.useState)([]),[a]=Object(l.c)(),c=a.get("category");return Object(n.useEffect)((()=>{(async()=>{let e=await U.getAllPosts({category:c||""});e.isSuccess&&t(e.data)})()}),[c]),Object(d.jsx)(d.Fragment,{children:(null===e||void 0===e?void 0:e.length)?e.map((e=>Object(d.jsx)(m.a,{item:!0,lg:3,sm:4,xs:12,children:Object(d.jsx)(l.b,{style:{textDecoration:"none",color:"inherit"},to:`details/${e._id}`,children:Object(d.jsx)(Z,{post:e})})}))):Object(d.jsx)(o.a,{style:{color:"878787",margin:"30px 80px",fontSize:18},children:"No data is available for selected category"})})};var X=()=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsxs)(m.a,{container:!0,children:[Object(d.jsx)(m.a,{item:!0,lg:2,xs:12,sm:2,children:Object(d.jsx)(I,{})}),Object(d.jsx)(m.a,{container:!0,item:!0,xs:12,sm:10,lg:10,children:Object(d.jsx)(V,{})})]})]}),K=a(161),Q=a(18),ee=a(153),te=a(154);const ae=Object(p.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),ne=Object(p.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),ce=Object(p.a)(K.a)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`,se=Object(p.a)(Q.c)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`,re=Object(p.a)(ee.a)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`,oe={title:"",description:"",picture:"",username:"",categories:"",createdDate:new Date};var ie=()=>{const e=Object(i.h)(),t=Object(i.g)(),[a,c]=Object(n.useState)(oe),[s,r]=Object(n.useState)(""),{account:o}=Object(n.useContext)(j),l=a.picture?a.picture:"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";Object(n.useEffect)((()=>{var e;(async()=>{if(s){const e=new FormData;e.append("name",s.name),e.append("file",s);const t=await U.uploadFile(e);a.picture=t.data}})(),a.categories=(null===(e=t.search)||void 0===e?void 0:e.split("=")[1])||"All",a.username=o.username}),[s]);const b=e=>{c({...a,[e.target.name]:e.target.value})};return Object(d.jsxs)(ae,{children:[Object(d.jsx)(ne,{src:l,alt:"post"}),Object(d.jsxs)(ce,{children:[Object(d.jsx)("label",{htmlFor:"fileInput",children:Object(d.jsx)(te.a,{fontSize:"large",color:"action"})}),Object(d.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>r(e.target.files[0])}),Object(d.jsx)(se,{onChange:e=>b(e),name:"title",placeholder:"Title"}),Object(d.jsx)(F.a,{onClick:()=>(async()=>{await U.createPost(a),e("/")})(),variant:"contained",color:"primary",children:"Publish"})]}),Object(d.jsx)(re,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>b(e)})]})},le=a(156),de=a(155);const je=Object(p.a)(o.a)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`,be=Object(p.a)(o.a)`
    display: flex;
    margin-bottom: 5px;
`,pe=Object(p.a)(f.a)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`,xe=Object(p.a)(f.a)`
    font-size: 14px;
    color: #878787;
`,ue=Object(p.a)(de.a)`
    margin-left: auto;
`;var he=e=>{let{comment:t,setToggle:a}=e;const{account:c}=Object(n.useContext)(j);return Object(d.jsxs)(je,{children:[Object(d.jsxs)(be,{children:[Object(d.jsx)(pe,{children:t.name}),Object(d.jsx)(xe,{children:new Date(t.date).toDateString()}),t.name===c.username&&Object(d.jsx)(ue,{onClick:()=>(async()=>{await U.deleteComment(t._id),a((e=>!e))})()})]}),Object(d.jsx)(f.a,{children:t.comments})]})};const Oe=Object(p.a)(o.a)`
    margin-top: 100px;
    display: flex;
`,ge=Object(p.a)("img")({width:50,height:50,borderRadius:"50%"}),me=Object(p.a)(ee.a)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`,fe={name:"",postId:"",date:new Date,comments:""};var we=e=>{let{post:t}=e;const[a,c]=Object(n.useState)(fe),[s,r]=Object(n.useState)([]),[i,l]=Object(n.useState)(!1),{account:b}=Object(n.useContext)(j);Object(n.useEffect)((()=>{(async()=>{const e=await U.getAllComments(t._id);e.isSuccess&&r(e.data)})()}),[i,t]);return Object(d.jsxs)(o.a,{children:[Object(d.jsxs)(Oe,{children:[Object(d.jsx)(ge,{src:"https://static.thenounproject.com/png/12017-200.png",alt:"dp"}),Object(d.jsx)(me,{rowsMin:5,placeholder:"what's on your mind?",onChange:e=>(e=>{c({...a,name:b.username,postId:t._id,comments:e.target.value})})(e),value:a.comments}),Object(d.jsx)(F.a,{variant:"contained",color:"primary",size:"medium",style:{height:40},onClick:e=>(async()=>{await U.newComment(a),c(fe),l((e=>!e))})(),children:"Post"})]}),Object(d.jsx)(o.a,{children:s&&s.length>0&&s.map((e=>Object(d.jsx)(he,{comment:e,setToggle:l})))})]})};const ye=Object(p.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",padding:"20px",background:"#fff",borderRadius:"10px",boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.1)",[t.breakpoints.down("md")]:{margin:"20px"}}})),ve=Object(p.a)("img")({width:"100%",height:"50vh",objectFit:"cover",borderRadius:"10px",marginBottom:"20px"}),Se=Object(p.a)(le.a)`
  margin: 5px;
  padding: 10px;
  border: 1px solid #1976d2;
  border-radius: 50%;
  background-color: #e3f2fd;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1976d2;
    color: #fff;
  }
`,ke=Object(p.a)(de.a)`
  margin: 5px;
  padding: 10px;
  border: 1px solid #d32f2f;
  border-radius: 50%;
  background-color: #ffebee;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d32f2f;
    color: #fff;
  }
`,Fe=Object(p.a)(f.a)`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0 10px 0;
  color: #333;
`,Ee=Object(p.a)(o.a)((e=>{let{theme:t}=e;return{color:"#555",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"14px",marginBottom:"20px",[t.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"flex-start",gap:"10px"}}})),Te=Object(p.a)(f.a)`
  font-size: 18px;
  color: #444;
  line-height: 1.8;
  margin: 20px 0;
`;var Ce=()=>{const[e,t]=Object(n.useState)({}),{account:a}=Object(n.useContext)(j),c=Object(i.h)(),{id:s}=Object(i.i)();Object(n.useEffect)((()=>{(async()=>{let e=await U.getPostById(s);e.isSuccess&&t(e.data)})()}),[s]);return Object(d.jsxs)(ye,{children:[Object(d.jsx)(ve,{src:e.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(d.jsx)(o.a,{style:{textAlign:"right"},children:a.username===e.username&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.b,{to:`/update/${e._id}`,children:Object(d.jsx)(Se,{})}),Object(d.jsx)(ke,{onClick:()=>(async()=>{await U.deletePost(e._id),c("/")})()})]})}),Object(d.jsx)(Fe,{children:e.title}),Object(d.jsxs)(Ee,{children:[Object(d.jsx)(l.b,{to:`/?username=${e.username}`,style:{textDecoration:"none",color:"inherit"},children:Object(d.jsxs)(f.a,{children:["Author: ",Object(d.jsx)("span",{style:{fontWeight:600},children:e.username})]})}),Object(d.jsx)(f.a,{children:new Date(e.createdDate).toDateString()})]}),Object(d.jsx)(Te,{children:e.description}),Object(d.jsx)(we,{post:e})]})};const Pe=Object(p.a)(o.a)((e=>{let{theme:t}=e;return{margin:"50px 100px",[t.breakpoints.down("md")]:{margin:0}}})),Ae=Object(p.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),Me=Object(p.a)(K.a)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`,De=Object(p.a)(Q.c)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`,ze=Object(p.a)(ee.a)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`,Ie={title:"",description:"",picture:"",username:"codeforinterview",categories:"Tech",createdDate:new Date};var Be=()=>{const e=Object(i.h)(),[t,a]=Object(n.useState)(Ie),[c,s]=Object(n.useState)(""),[r,o]=Object(n.useState)(""),{id:l}=Object(i.i)();Object(n.useEffect)((()=>{(async()=>{let e=await U.getPostById(l);e.isSuccess&&a(e.data)})()}),[]),Object(n.useEffect)((()=>{(async()=>{if(c){const e=new FormData;e.append("name",c.name),e.append("file",c);const a=await U.uploadFile(e);a.isSuccess&&(t.picture=a.data,o(a.data))}})()}),[c]);const j=e=>{a({...t,[e.target.name]:e.target.value})};return Object(d.jsxs)(Pe,{children:[Object(d.jsx)(Ae,{src:t.picture||"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",alt:"post"}),Object(d.jsxs)(Me,{children:[Object(d.jsx)("label",{htmlFor:"fileInput",children:Object(d.jsx)(te.a,{fontSize:"large",color:"action"})}),Object(d.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>s(e.target.files[0])}),Object(d.jsx)(De,{onChange:e=>j(e),value:t.title,name:"title",placeholder:"Title"}),Object(d.jsx)(F.a,{onClick:()=>(async()=>{await U.updatePost(t),e(`/details/${l}`)})(),variant:"contained",color:"primary",children:"Update"})]}),Object(d.jsx)(ze,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:e=>j(e),value:t.description})]})},qe=a(174),Re=a(157);const Ge=Object(p.a)(o.a)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`,Le=Object(p.a)(o.a)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;Object(p.a)(f.a)`
  color: #878787;
`;var He=()=>Object(d.jsxs)(o.a,{children:[Object(d.jsx)(Ge,{}),Object(d.jsxs)(Le,{children:[Object(d.jsx)(f.a,{variant:"h3",children:"MERN BLOG APP"}),Object(d.jsx)(o.a,{component:"span",style:{marginLeft:5},children:Object(d.jsx)(qe.a,{href:"https://github.com/sobannadeem1",color:"inherit",target:"_blank",children:Object(d.jsx)(Re.a,{})})})]})]}),Ne=a(158);const Ue=Object(p.a)(o.a)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px top -100px;
  background-size: cover;
`,_e=Object(p.a)(o.a)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`,Ye=Object(p.a)(f.a)`
  color: #878787;
`;var Je=()=>Object(d.jsxs)(o.a,{children:[Object(d.jsx)(Ue,{}),Object(d.jsxs)(_e,{children:[Object(d.jsx)(f.a,{variant:"h3",children:"Getting in touch is easy!"}),Object(d.jsxs)(Ye,{variant:"h5",children:["send me an Email",Object(d.jsx)(qe.a,{href:"mailto:soban312004@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:Object(d.jsx)(Ne.a,{})}),"."]})]})]}),We=a(159);const $e=Object(p.a)(o.a)`
  width: 400px;
  margin: 100px auto;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background: #f9f9f9;
`,Ze=Object(p.a)("img")({width:80,display:"flex",margin:"30px auto 0"}),Ve=Object(p.a)(o.a)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #fff;

  & > div {
    width: 100%;
  }

  & > button {
    width: 100%;
    padding: 10px;
  }

  & > p {
    margin-top: 20px;
    color: #666;
    font-size: 14px;
  }
`,Xe=Object(p.a)(F.a)`
  text-transform: none;
  background: linear-gradient(90deg, #ff7a18, #ff2e63);
  color: #fff;
  border-radius: 25px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 15px rgba(255, 46, 99, 0.3);
    background: linear-gradient(90deg, #ff2e63, #ff7a18);
  }
`,Ke=Object(p.a)(F.a)`
  text-transform: none;
  color: #ff2e63;
  background: #f9f9f9;
  border: 1px solid #ff2e63;
  border-radius: 25px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 8px 15px rgba(255, 46, 99, 0.2);
  }
`,Qe=Object(p.a)(f.a)`
  font-size: 12px;
  color: #666;
`,et=Object(p.a)(f.a)`
  font-size: 14px;
  color: #ff4d4d;
  font-weight: 600;
  text-align: center;
`,tt={username:"",password:""},at={name:"",username:"",password:""};var nt=e=>{let{isUserAuthenticated:t}=e;const[a,c]=Object(n.useState)(tt),[s,r]=Object(n.useState)(at),[l,b]=Object(n.useState)(""),[p,x]=Object(n.useState)("login"),u=Object(i.h)(),{setAccount:h}=Object(n.useContext)(j);Object(n.useEffect)((()=>{sessionStorage.getItem("accessToken")&&(t(!0),u("/"))}),[t,u]);const O=e=>{c({...a,[e.target.name]:e.target.value})},g=e=>{r({...s,[e.target.name]:e.target.value})},m=()=>{x("signup"===p?"login":"signup"),b("")};return Object(d.jsx)($e,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(Ze,{src:"https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png",alt:"blog"}),"login"===p?Object(d.jsxs)(Ve,{children:[Object(d.jsx)(We.a,{variant:"standard",value:a.username,onChange:O,name:"username",label:"Enter Username"}),Object(d.jsx)(We.a,{variant:"standard",value:a.password,onChange:O,name:"password",type:"password",label:"Enter Password"}),l&&Object(d.jsx)(et,{children:l}),Object(d.jsx)(Xe,{variant:"contained",onClick:async()=>{if(!a.username||!a.password)return void b("Both username and password are required!");const e=await U.userLogin(a);e.isSuccess?(b(""),sessionStorage.setItem("accessToken",`Bearer ${e.data.accessToken}`),sessionStorage.setItem("refreshToken",`Bearer ${e.data.refreshToken}`),h({name:e.data.name,username:e.data.username}),t(!0),u("/")):b("Invalid username or password!")},children:"Login"}),Object(d.jsx)(Qe,{style:{textAlign:"center"},children:"OR"}),Object(d.jsx)(Ke,{onClick:m,children:"Create an account"})]}):Object(d.jsxs)(Ve,{children:[Object(d.jsx)(We.a,{variant:"standard",onChange:g,name:"name",label:"Enter Name"}),Object(d.jsx)(We.a,{variant:"standard",onChange:g,name:"username",label:"Enter Username"}),Object(d.jsx)(We.a,{variant:"standard",onChange:g,name:"password",type:"password",label:"Enter Password"}),l&&Object(d.jsx)(et,{children:l}),Object(d.jsx)(Ke,{onClick:async()=>{if(!s.name||!s.username||!s.password)return void b("All fields are required!");(await U.userSignup(s)).isSuccess?(b(""),r(at),x("login")):b("Signup failed! Please try again.")},children:"Signup"}),Object(d.jsx)(Qe,{style:{textAlign:"center"},children:"OR"}),Object(d.jsx)(Xe,{variant:"contained",onClick:m,children:"Already have an account"})]})]})})};const ct=e=>{let{isAuthenticated:t,...a}=e;const n=sessionStorage.getItem("accessToken");return t&&n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(i.b,{})]}):Object(d.jsx)(i.a,{replace:!0,to:"/account"})};var st=function(){const[e,t]=Object(n.useState)(!1);return Object(d.jsx)(b,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(o.a,{style:{marginTop:64},children:Object(d.jsxs)(i.e,{children:[Object(d.jsx)(i.c,{path:"/account",element:Object(d.jsx)(nt,{isUserAuthenticated:t})}),Object(d.jsx)(i.c,{path:"/",element:Object(d.jsx)(ct,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/",element:Object(d.jsx)(X,{})})}),Object(d.jsx)(i.c,{path:"/create",element:Object(d.jsx)(ct,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/create",element:Object(d.jsx)(ie,{})})}),Object(d.jsx)(i.c,{path:"/details/:id",element:Object(d.jsx)(ct,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/details/:id",element:Object(d.jsx)(Ce,{})})}),Object(d.jsx)(i.c,{path:"/update/:id",element:Object(d.jsx)(ct,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/update/:id",element:Object(d.jsx)(Be,{})})}),Object(d.jsx)(i.c,{path:"/about",element:Object(d.jsx)(ct,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/about",element:Object(d.jsx)(He,{})})}),Object(d.jsx)(i.c,{path:"/contact",element:Object(d.jsx)(ct,{isAuthenticated:e}),children:Object(d.jsx)(i.c,{path:"/contact",element:Object(d.jsx)(Je,{})})})]})})})})};var rt=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:s,getTTFB:r}=t;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(st,{})}),document.getElementById("root")),rt()},89:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.b7ee6bf5.chunk.js.map