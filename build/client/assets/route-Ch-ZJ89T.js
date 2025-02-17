import{r as l,j as e}from"./jsx-runtime-DexIYAB0.js";import{D as L}from"./divider-CnIzUG0T.js";import{S as b,F as W,L as C,b as w}from"./meta-BZd-BHk4.js";import{T as N,m as H,a as g,H as u,c as S,t as B,n as $,I as y}from"./heading-D33qRn6I.js";import{I as T,a as q}from"./image-Cp8wFePM.js";import{u as D}from"./useParallax-CEmNyGtY.js";import{u as M}from"./useScrollToHash-CiMqZHrw.js";import{c as R}from"./clamp-e7DugykH.js";import{f as z}from"./date-DvyCAN0s.js";import{L as v,e as E,O}from"./components-DTD7rZ5W.js";import{B as A}from"./button-CDeQh0cj.js";import{L as P,a as F}from"./list-Djor-bR7.js";import{M as U}from"./index-L_4ix5aQ.js";import"./config-CnlXJVLV.js";const X="_post_kr7uo_20",G="_header_kr7uo_44",J="_headerText_kr7uo_55",K="_date_kr7uo_79",Q="_dateText_kr7uo_91",V="_titleWordWrapper_kr7uo_118",Y="_titleWord_kr7uo_118",Z="_postTitleWord_kr7uo_1",ee="_banner_kr7uo_138",se="_bannerImage_kr7uo_190",te="_bannerImageBlur_kr7uo_191",oe="_details_kr7uo_202",ae="_arrow_kr7uo_209",re="_timecode_kr7uo_233",ne="_wrapper_kr7uo_254",ce="_content_kr7uo_266",a={post:X,header:G,headerText:J,date:K,dateText:Q,titleWordWrapper:V,titleWord:Y,postTitleWord:Z,banner:ee,bannerImage:se,bannerImageBlur:te,details:oe,arrow:ae,timecode:re,wrapper:ne,content:ce},le=({children:s,title:t,date:o,banner:n,timecode:d})=>{const k=M(),m=l.useRef(),[_,x]=l.useState(null);l.useEffect(()=>{x(z(o))},[o,_]),D(.004,c=>{m.current&&m.current.style.setProperty("--blurOpacity",R(c,0,1))});const h=c=>{c.preventDefault(),k(c.currentTarget.href)},i=`${n==null?void 0:n.split(".")[0]}-placeholder.jpg`;return e.jsxs("article",{className:a.post,children:[e.jsxs(b,{children:[n&&e.jsxs("div",{className:a.banner,ref:m,children:[e.jsx("div",{className:a.bannerImage,children:e.jsx(T,{role:"presentation",src:n,placeholder:i,alt:""})}),e.jsx("div",{className:a.bannerImageBlur,children:e.jsx(T,{role:"presentation",src:i,placeholder:i,alt:""})})]}),e.jsx("header",{className:a.header,children:e.jsxs("div",{className:a.headerText,children:[e.jsx(N,{in:!0,timeout:H(B.base.durationM),children:({visible:c,nodeRef:p})=>e.jsxs("div",{className:a.date,ref:p,children:[e.jsx(L,{notchWidth:"64px",notchHeight:"8px",collapsed:!c}),e.jsx(g,{className:a.dateText,"data-visible":c,children:_})]})}),e.jsx(u,{level:2,as:"h1",className:a.title,"aria-label":t,children:t.split(" ").map((c,p)=>e.jsx("span",{className:a.titleWordWrapper,children:e.jsxs("span",{className:a.titleWord,style:S({delay:$(p*100+100)}),children:[c,p!==t.split(" ").length-1?" ":""]})},`${c}-${p}`))}),e.jsxs("div",{className:a.details,children:[e.jsx(v,{to:"#postContent",className:a.arrow,"aria-label":"Scroll to post content",onClick:h,children:e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})}),e.jsx("div",{className:a.timecode,children:d})]})]})})]}),e.jsx(b,{className:a.wrapper,id:"postContent",tabIndex:-1,children:e.jsx(g,{as:"div",size:"l",className:a.content,children:s})}),e.jsx(W,{})]})},ie="_code_113ft_2",de="_actions_113ft_159",me="_copyIcon_113ft_176",he="_lang_113ft_198",j={code:ie,actions:de,copyIcon:me,lang:he},pe=s=>{var x;const[t,o]=l.useState(!1),{theme:n}=q(),d=l.useRef(),k=l.useRef(),m=(x=s.className)==null?void 0:x.split("-")[1],_=()=>{clearTimeout(k),navigator.clipboard.writeText(d.current.textContent),o(!0),setTimeout(()=>{o(!1)},2e3)};return e.jsxs("div",{className:j.code,"data-theme":n,children:[!!m&&e.jsx(g,{secondary:!0,size:"s",className:j.lang,children:m}),e.jsx("pre",{ref:d,...s}),e.jsx("div",{className:j.actions,children:e.jsx(A,{iconOnly:!0,onClick:_,"aria-label":"Copy",children:e.jsxs("span",{className:j.copyIcon,children:[e.jsx(N,{in:!t,children:({visible:h,nodeRef:i})=>e.jsx(y,{ref:i,icon:"copy","data-visible":h})}),e.jsx(N,{in:t,children:({visible:h,nodeRef:i})=>e.jsx(y,{ref:i,icon:"check","data-visible":h})})]})})})]})},ue="_heading_69uyj_2",_e="_paragraph_69uyj_14",xe="_list_69uyj_14",je="_image_69uyj_14",ge="_headingLink_69uyj_19",fe="_code_69uyj_72",ke="_pre_69uyj_90",Ne="_hr_69uyj_106",ye="_blockquote_69uyj_120",be="_strong_69uyj_139",Te="_embed_69uyj_143",r={heading:ue,paragraph:_e,list:xe,image:je,headingLink:ge,code:fe,pre:ke,hr:Ne,blockquote:ye,strong:be,embed:Te},f=({id:s})=>e.jsx(v,{className:r.headingLink,to:`#${s}`,"aria-label":"Link to heading",children:e.jsx(y,{icon:"link"})}),ve=({children:s,id:t,...o})=>e.jsxs(u,{className:r.heading,id:t,level:2,as:"h1",...o,children:[e.jsx(f,{id:t}),s]}),Pe=({children:s,id:t,...o})=>e.jsxs(u,{className:r.heading,id:t,level:3,as:"h2",...o,children:[e.jsx(f,{id:t}),s]}),Ie=({children:s,id:t,...o})=>e.jsxs(u,{className:r.heading,id:t,level:4,as:"h3",...o,children:[e.jsx(f,{id:t}),s]}),Le=({children:s,id:t,...o})=>e.jsxs(u,{className:r.heading,id:t,level:5,as:"h4",...o,children:[e.jsx(f,{id:t}),s]}),We=({children:s,...t})=>{const o=l.Children.count(s)===1,n=l.Children.toArray(s)[0];return o&&n.type===I?s:e.jsx(g,{className:r.paragraph,size:"l",as:"p",...t,children:s})},Ce=({...s})=>e.jsx(C,{...s}),we=s=>e.jsx(P,{className:r.list,...s}),He=s=>e.jsx(P,{className:r.list,ordered:!0,...s}),Se=({children:s,...t})=>e.jsx(F,{...t,children:s}),Be=({children:s,...t})=>e.jsx("code",{className:r.code,...t,children:s}),$e=s=>e.jsx("div",{className:r.pre,children:e.jsx(pe,{...s})}),qe=s=>e.jsx("blockquote",{className:r.blockquote,...s}),De=s=>e.jsx("hr",{className:r.hr,...s}),Me=s=>e.jsx("strong",{className:r.strong,...s}),I=({src:s,alt:t,width:o,height:n,...d})=>e.jsx("img",{className:r.image,src:s,loading:"lazy",alt:t,width:o,height:n,...d}),Re=({src:s})=>e.jsx("div",{className:r.embed,children:e.jsx("iframe",{src:s,loading:"lazy",title:"Embed"})}),ze={h1:ve,h2:Pe,h3:Ie,h4:Le,p:We,a:Ce,ul:we,ol:He,li:Se,pre:$e,code:Be,blockquote:qe,hr:De,img:I,strong:Me,Embed:Re};function ss({data:s}){const{title:t,abstract:o}=s.frontmatter;return w({title:t,description:o,prefix:"",ogImage:s.ogImage})}function ts(){const{frontmatter:s,timecode:t}=E();return e.jsx(U,{components:ze,children:e.jsx(le,{...s,timecode:t,children:e.jsx(O,{})})})}export{ts as default,ss as meta};
