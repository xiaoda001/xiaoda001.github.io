import{Y as o,aH as p,aI as u,aJ as l,aK as c,aL as f,aM as d,aN as m,aO as h,aP as g,aQ as A,d as P,B as v,h as y,I as C,aR as w,aS as R,aT as S,y as T}from"./chunks/framework.Cwcv6XmJ.js";import{B as b}from"./chunks/theme.D6dQMgG9.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(b),E=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),R(),S(),s.setup&&s.setup(),()=>T(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=D(),a=B();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function B(){return h(E)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{_ as createApp};
