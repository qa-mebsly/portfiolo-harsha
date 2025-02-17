import{r,j as f}from"./jsx-runtime-DexIYAB0.js";import{B as Q}from"./button-D0PSGkr3.js";import{b as R,g as N,t as L,h as C,c as P,n as E,u as z,I as J}from"./heading-DBAtXoap.js";const X="/assets/gotham-bold-italic-C_msAlmW.woff2",Y="/assets/gotham-bold-D1kvQ7KV.woff2",Z="/assets/gotham-book-italic-Bm2IEtSK.woff2",ee="/assets/gotham-book-Bnaws0Ef.woff2",te="/assets/gotham-medium-italic-Dok430ou.woff2",oe="/assets/gotham-medium-0VT3RO8I.woff2",se="/assets/ipa-gothic-DimHCOud.woff2",W=r.createContext({}),$e=({theme:e="dark",children:t,className:n,as:s="div",toggleTheme:i,...a})=>{const o=D(),c=!o.theme;return f.jsxs(W.Provider,{value:{theme:e,toggleTheme:i||o.toggleTheme},children:[c&&t,!c&&f.jsx(s,{className:R(n),"data-theme":e,...a,children:t})]})};function D(){return r.useContext(W)}function p(e){return e.replace(/\s\s+/g," ")}function _(e){return p(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function ae(){return p(Object.keys(N).map(e=>`
        @media (max-width: ${N[e]}px) {
          :root {
            ${_(L[e])}
          }
        }
      `).join(`
`))}const ne=p(`
  @layer theme, base, components, layout;
`),re=p(`
  :root {
    ${_(L.base)}
  }

  ${ae()}

  [data-theme='dark'] {
    ${_(C.dark)}
  }

  [data-theme='light'] {
    ${_(C.light)}
  }
`),ce=p(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${ee}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${Z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${oe}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${te}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${X}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${se}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),ke=p(`
  ${ne}

  @layer theme {
    ${re}
    ${ce}
  }
`);function ie(){const[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}function le(e,t,n={},s=!0){const[i,a]=r.useState(!1),[o,c]=r.useState(!1);return r.useEffect(()=>{if(!(e!=null&&e.current))return;const l=new IntersectionObserver(([m])=>{const{isIntersecting:u,target:h}=m;a(u),u&&t&&(l.unobserve(h),c(!0))},n);return!o&&s&&l.observe(e.current),()=>l.disconnect()},[e,t,n,o,s]),i}async function fe({src:e,srcSet:t,sizes:n}){return new Promise((s,i)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let a=new Image;e&&(a.src=e),t&&(a.srcset=t),n&&(a.sizes=n);const o=()=>{a.removeEventListener("load",o);const c=a.currentSrc;a=null,s(c)};a.addEventListener("load",o)}catch(a){i(`Error loading ${t}: ${a}`)}})}async function me(e=1,t=1){return new Promise(n=>{const s=document.createElement("canvas"),i=s.getContext("2d");s.width=e,s.height=t,i.fillStyle="rgba(0, 0, 0, 0)",i.fillRect(0,0,e,t),s.toBlob(async a=>{if(!a)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(a);s.remove(),n(o)})})}async function ue({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async o=>{const[c,l]=o.split(" "),m=Number(l.replace("w","")),u=await me(m);return{src:c,image:u,width:l}})),s=n.map(({image:o,width:c})=>`${o} ${c}`).join(", "),i=await fe({srcSet:s,sizes:t});return n.find(o=>o.image===i).src}const de="_image_ymorb_3",he="_container_ymorb_83",ye="_elementWrapper_ymorb_97",pe="_placeholder_ymorb_139",ge="_element_ymorb_97",be="_button_ymorb_233",y={image:de,container:he,elementWrapper:ye,"custom-image":"_custom-image_ymorb_139",placeholder:pe,element:ge,button:be},xe=({className:e,style:t,reveal:n,delay:s=0,raised:i,src:a,srcSet:o,placeholder:c,...l})=>{const[m,u]=r.useState(!1),{theme:h}=D(),g=r.useRef(),b=a||o.split(" ")[0],S=le(g,!F(b)),w=r.useCallback(()=>{u(!0)},[]);return f.jsx("div",{className:R(y.image,e),"data-visible":S||m,"data-reveal":n,"data-raised":i,"data-theme":h,style:P({delay:E(s)},t),ref:g,children:f.jsx(we,{delay:s,onLoad:w,loaded:m,inViewport:S,reveal:n,src:b,srcSet:o,placeholder:c,...l})})},we=({onLoad:e,loaded:t,inViewport:n,srcSet:s,placeholder:i,delay:a,src:o,alt:c,play:l=!0,restartOnPause:m,reveal:u,sizes:h,width:g,height:b,noPauseButton:S,cover:w,...G})=>{const I=z(),[U,A]=r.useState(!0),[T,$]=r.useState(!I),[j,V]=r.useState(),[B,O]=r.useState(!1),H=r.useRef(),d=r.useRef(),v=F(o),M=n,K=ie();r.useEffect(()=>{v&&s?(async()=>{const x=await ue({srcSet:s,sizes:h});V(x)})():v&&V(o)},[v,h,o,s]),r.useEffect(()=>{if(!d.current||!j)return;const k=()=>{$(!0),d.current.play()},x=()=>{$(!1),d.current.pause()};l||(x(),m&&(d.current.currentTime=0)),!B&&(n?n&&!I&&l&&k():x())},[n,l,I,m,B,j]);const q=k=>{k.preventDefault(),O(!0),d.current.paused?($(!0),d.current.play()):($(!1),d.current.pause())};return f.jsxs("div",{className:y.elementWrapper,"data-reveal":u,"data-visible":n||t,style:P({delay:E(a+1e3)}),children:[v&&K&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:y.element,"data-loaded":t,"data-cover":w,autoPlay:!I,onLoadStart:e,src:j,"aria-label":c,ref:d,...G}),!S&&f.jsxs(Q,{className:y.button,onClick:q,children:[f.jsx(J,{icon:T?"pause":"play"}),T?"Pause":"Play"]})]}),!v&&f.jsx("img",{className:y.element,"data-loaded":t,"data-cover":w,onLoad:e,decoding:"async",src:M?o:void 0,srcSet:M?s:void 0,width:g,height:b,alt:c,sizes:h,...G}),U&&f.jsx("img",{"aria-hidden":!0,className:y.placeholder,"data-loaded":t,"data-cover":w,style:P({delay:E(a)}),ref:H,src:i,width:g,height:b,onTransitionEnd:()=>A(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function F(e){return typeof e=="string"&&e.includes(".mp4")}export{oe as G,xe as I,$e as T,D as a,ee as b,ue as r,ke as t,le as u};
