import{r as s,j as H}from"./jsx-runtime-DexIYAB0.js";const He={desktop:2080,laptop:1680,tablet:1040,mobile:696,mobileS:400},_=t=>`${t}px`,c=t=>`${t/16}rem`,Me=t=>Number(t.replace("ms","")),N=t=>`${t}ms`;function be(t,e={}){let n={};const r=Object.keys(t);for(const o of r){let a=t[o];typeof a=="number"&&o==="delay"&&(a=N(a)),typeof a=="number"&&o!=="opacity"&&(a=_(a)),typeof a=="number"&&o==="opacity"&&(a=`${a*100}%`),n[`--${o}`]=a}return{...n,...e}}function F(...t){return t.filter(Boolean).join(" ")}const K={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:c(140),fontSizeH1:c(100),fontSizeH2:c(58),fontSizeH3:c(38),fontSizeH4:c(28),fontSizeH5:c(24),fontSizeBodyXL:c(22),fontSizeBodyL:c(20),fontSizeBodyM:c(18),fontSizeBodyS:c(16),fontSizeBodyXS:c(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},U={fontSizeH0:c(120),fontSizeH1:c(80)},q={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:c(100),fontSizeH1:c(70),fontSizeH2:c(50),fontSizeH3:c(36),fontSizeH4:c(26),fontSizeH5:c(22)},A={fontSizeH0:c(80),fontSizeH1:c(60),fontSizeH2:c(48),fontSizeH3:c(32),fontSizeH4:c(24),fontSizeH5:c(20)},G={spaceOuter:"24px",fontSizeH0:c(56),fontSizeH1:c(40),fontSizeH2:c(34),fontSizeH3:c(28),fontSizeH4:c(22),fontSizeH5:c(18),fontSizeBodyL:c(17),fontSizeBodyM:c(16),fontSizeBodyS:c(14)},D={spaceOuter:"16px",fontSizeH0:c(42),fontSizeH1:c(38),fontSizeH2:c(28),fontSizeH3:c(24),fontSizeH4:c(20)},Q={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"oklch(84.42% 0.19 202.24)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},V={background:"oklch(96.12% 0 0)",backgroundLight:"var(--white)",primary:"var(--black)",accent:"oklch(84.42% 0.19 202.24)",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},Ce={base:K,desktop:U,laptop:q,tablet:A,mobile:G,mobileS:D},ve={dark:Q,light:V},J="_icon_1tdl1_2",Y={icon:J},Z="/assets/icons-PuRfbd6n.svg",Le=s.forwardRef(({icon:t,className:e,size:n,...r},o)=>H.jsx("svg",{"aria-hidden":!0,ref:o,className:F(Y.icon,e),width:n||24,height:n||24,...r,children:H.jsx("use",{href:`${Z}#${t}`})})),ee="_text_13dm1_2",te={text:ee},Te=({children:t,size:e="m",as:n="span",align:r="auto",weight:o="auto",secondary:a,className:f,...l})=>H.jsx(n,{className:F(te.text,f),"data-align":r,"data-size":e,"data-weight":o,"data-secondary":a,...l,children:t}),E=s.createContext(null),$=typeof document<"u",j=$?s.useLayoutEffect:s.useEffect;class B{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function ne(t){let e=new B,n=new B,r=0,o=!1,a=!1;const f=new WeakSet,l={schedule:(d,p=!1,u=!1)=>{const i=u&&o,m=i?e:n;return p&&f.add(d),m.add(d)&&i&&o&&(r=e.order.length),d},cancel:d=>{n.remove(d),f.delete(d)},process:d=>{if(o){a=!0;return}if(o=!0,[e,n]=[n,e],n.clear(),r=e.order.length,r)for(let p=0;p<r;p++){const u=e.order[p];f.has(u)&&(l.schedule(u),t()),u(d)}o=!1,a&&(a=!1,l.process(d))}};return l}const L=["prepare","read","update","preRender","render","postRender"],se=40;function re(t,e){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=L.reduce((i,m)=>(i[m]=ne(()=>n=!0),i),{}),f=i=>{a[i].process(o)},l=()=>{const i=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(i-o.timestamp,se),1),o.timestamp=i,o.isProcessing=!0,L.forEach(f),o.isProcessing=!1,n&&e&&(r=!1,t(l))},d=()=>{n=!0,r=!0,o.isProcessing||t(l)};return{schedule:L.reduce((i,m)=>{const S=a[m];return i[m]=(g,y=!1,R=!1)=>(n||d(),S.schedule(g,y,R)),i},{}),cancel:i=>L.forEach(m=>a[m].cancel(i)),state:o,steps:a}}const oe=s.createContext({});function ae(t){const e=s.useRef(null);return e.current===null&&(e.current=t()),e.current}const ce=t=>t,{schedule:ie,cancel:Pe,state:Fe,steps:we}=re(typeof requestAnimationFrame<"u"?requestAnimationFrame:ce,!0);function ue(){const t=s.useContext(E);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,o=s.useId();return s.useEffect(()=>r(o),[]),!e&&n?[!1,()=>n&&n(o)]:[!0]}const P={current:null},W={current:!1};function le(){if(W.current=!0,!!$)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>P.current=t.matches;t.addListener(e),e()}else P.current=!1}function O(){const t=s.useRef(!1);return j(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function fe(){const t=O(),[e,n]=s.useState(0),r=s.useCallback(()=>{t.current&&n(e+1)},[e]);return[s.useCallback(()=>ie.postRender(r),[r]),e]}class de extends s.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function pe({children:t,isPresent:e}){const n=s.useId(),r=s.useRef(null),o=s.useRef({width:0,height:0,top:0,left:0});return s.useInsertionEffect(()=>{const{width:a,height:f,top:l,left:d}=o.current;if(e||!r.current||!a||!f)return;r.current.dataset.motionPopId=n;const p=document.createElement("style");return document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${f}px !important;
            top: ${l}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),s.createElement(de,{isPresent:e,childRef:r,sizeRef:o},s.cloneElement(t,{ref:r}))}const T=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:f})=>{const l=ae(me),d=s.useId(),p=s.useMemo(()=>({id:d,initial:e,isPresent:n,custom:o,onExitComplete:u=>{l.set(u,!0);for(const i of l.values())if(!i)return;r&&r()},register:u=>(l.set(u,!1),()=>l.delete(u))}),a?void 0:[n]);return s.useMemo(()=>{l.forEach((u,i)=>l.set(i,!1))},[n]),s.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),f==="popLayout"&&(t=s.createElement(pe,{isPresent:n},t)),s.createElement(E.Provider,{value:p},t)};function me(){return new Map}function he(t){return s.useEffect(()=>()=>t(),[])}const k=t=>t.key||"";function xe(t,e){t.forEach(n=>{const r=k(n);e.set(r,n)})}function Se(t){const e=[];return s.Children.forEach(t,n=>{s.isValidElement(n)&&e.push(n)}),e}const ge=({children:t,custom:e,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:f="sync"})=>{const l=s.useContext(oe).forceRender||fe()[0],d=O(),p=Se(t);let u=p;const i=s.useRef(new Map).current,m=s.useRef(u),S=s.useRef(new Map).current,g=s.useRef(!0);if(j(()=>{g.current=!1,xe(p,S),m.current=u}),he(()=>{g.current=!0,S.clear(),i.clear()}),g.current)return s.createElement(s.Fragment,null,u.map(h=>s.createElement(T,{key:k(h),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:f},h)));u=[...u];const y=m.current.map(k),R=p.map(k),v=y.length;for(let h=0;h<v;h++){const x=y[h];R.indexOf(x)===-1&&!i.has(x)&&i.set(x,void 0)}return f==="wait"&&i.size&&(u=[]),i.forEach((h,x)=>{if(R.indexOf(x)!==-1)return;const M=S.get(x);if(!M)return;const b=y.indexOf(x);let z=h;if(!z){const X=()=>{i.delete(x);const w=Array.from(S.keys()).filter(C=>!R.includes(C));if(w.forEach(C=>S.delete(C)),m.current=p.filter(C=>{const I=k(C);return I===x||w.includes(I)}),!i.size){if(d.current===!1)return;l(),r&&r()}};z=s.createElement(T,{key:k(M),isPresent:!1,onExitComplete:X,custom:e,presenceAffectsLayout:a,mode:f},M),i.set(x,z)}u.splice(b,0,z)}),u=u.map(h=>{const x=h.key;return i.has(x)?h:s.createElement(T,{key:k(h),isPresent:!0,presenceAffectsLayout:a,mode:f},h)}),s.createElement(s.Fragment,null,i.size?u:u.map(h=>s.cloneElement(h)))};function Ie(){!W.current&&le();const[t]=s.useState(P.current);return t}const Be=({children:t,in:e,unmount:n,initial:r=!0,...o})=>{const a=s.useRef(),f=s.useRef();return s.useEffect(()=>{clearTimeout(e?f.current:a.current)},[e]),H.jsx(ge,{children:(e||!n)&&H.jsx(ze,{enterTimeout:a,exitTimeout:f,in:e,initial:r,...o,children:t})})},ze=({children:t,timeout:e=0,enterTimeout:n,exitTimeout:r,onEnter:o,onEntered:a,onExit:f,onExited:l,initial:d,nodeRef:p,in:u})=>{const[i,m]=s.useState(d?"exited":"entered"),[S,g]=ue(),[y,R]=s.useState(!d),v=typeof e=="object",h=s.useRef(null),x=p||h,M=y&&u?S:!1;return s.useEffect(()=>{var z;if(y||!u)return;const b=v?e.enter:e;clearTimeout(n.current),clearTimeout(r.current),R(!0),m("entering"),o==null||o(),(z=x.current)==null||z.offsetHeight,n.current=setTimeout(()=>{m("entered"),a==null||a()},b)},[o,a,e,i,u]),s.useEffect(()=>{var z;if(S&&u)return;const b=v?e.exit:e;clearTimeout(n.current),clearTimeout(r.current),m("exiting"),f==null||f(),(z=x.current)==null||z.offsetHeight,r.current=setTimeout(()=>{m("exited"),g==null||g(),l==null||l()},b)},[S,f,g,e,l,u]),t({visible:M,status:i,nodeRef:x})},ye="_heading_e2qtd_2",Re={heading:ye},Ee=({children:t,level:e=1,as:n,align:r="auto",weight:o="medium",className:a,...f})=>{const l=Math.min(Math.max(e,0),5),d=n||`h${Math.max(l,1)}`;return H.jsx(s.Fragment,{children:H.jsx(d,{className:F(Re.heading,a),"data-align":r,"data-weight":o,"data-level":l,...f,children:t})})};export{Ee as H,Le as I,Be as T,Te as a,F as b,be as c,ae as d,j as e,Fe as f,He as g,ve as h,_ as i,ce as j,ie as k,Pe as l,Me as m,N as n,$ as o,W as p,le as q,P as r,Ce as t,Ie as u};
