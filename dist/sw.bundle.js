if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.png",revision:"3d7d7aa15b44ef9c864b1b3d9c1c3c67"},{url:"index.html",revision:"049bc200902c18322d1dcdb3cd2ca22b"},{url:"main.bundle.js",revision:"c8fe845b00124b49110e66b254dabb06"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
