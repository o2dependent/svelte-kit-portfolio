function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=u(t,n,e,o);return t[0](r)}}function u(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,n,e,o,r,s,i){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=u(n,e,o,i);t.p(r,c)}}const f="undefined"!=typeof window;let d=f?()=>window.performance.now():()=>Date.now(),p=f?t=>requestAnimationFrame(t):t;const h=new Set;function g(t){h.forEach((n=>{n.c(t)||(h.delete(n),n.f())})),0!==h.size&&p(g)}function m(t){let n;return 0===h.size&&p(g),{promise:new Promise((e=>{h.add(n={c:t,f:e})})),abort(){h.delete(n)}}}function y(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function v(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function k(){return x(" ")}function E(){return x("")}function C(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function S(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function O(t){return Array.from(t.childNodes)}function j(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?w(n):v(n)}function R(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return x(n)}function A(t){return R(t," ")}function M(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function F(t,n=document.body){return Array.from(n.querySelectorAll(t))}const P=new Set;let T,q=0;function B(t,n,e,o,r,s,i,c=0){const a=16.666/o;let u="{\n";for(let m=0;m<=1;m+=a){const t=n+(e-n)*s(m);u+=100*m+`%{${i(t,1-t)}}\n`}const l=u+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${c}`,d=t.ownerDocument;P.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${l}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,q+=1,f}function L(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),q-=r,q||p((()=>{q||(P.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),P.clear())})))}function N(t){T=t}function z(){if(!T)throw new Error("Function called outside component initialization");return T}function G(t){z().$$.on_mount.push(t)}function W(t){z().$$.after_update.push(t)}function D(t,n){z().$$.context.set(t,n)}const I=[],V=[],H=[],J=[],K=Promise.resolve();let Q=!1;function U(){Q||(Q=!0,K.then(nt))}function X(t){H.push(t)}function Y(t){J.push(t)}let Z=!1;const tt=new Set;function nt(){if(!Z){Z=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];N(n),et(n.$$)}for(N(null),I.length=0;V.length;)V.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];tt.has(n)||(tt.add(n),n())}H.length=0}while(I.length);for(;J.length;)J.pop()();Q=!1,Z=!1,tt.clear()}}function et(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}let ot;function rt(){return ot||(ot=Promise.resolve(),ot.then((()=>{ot=null}))),ot}function st(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const it=new Set;let ct;function at(){ct={r:0,c:[],p:ct}}function ut(){ct.r||s(ct.c),ct=ct.p}function lt(t,n){t&&t.i&&(it.delete(t),t.i(n))}function ft(t,n,e,o){if(t&&t.o){if(it.has(t))return;it.add(t),ct.c.push((()=>{it.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const dt={duration:0};function pt(e,o,r){let s,c,a=o(e,r),u=!1,l=0;function f(){s&&L(e,s)}function p(){const{delay:o=0,duration:r=300,easing:i=n,tick:p=t,css:h}=a||dt;h&&(s=B(e,0,1,r,o,i,h,l++)),p(0,1);const g=d()+o,y=g+r;c&&c.abort(),u=!0,X((()=>st(e,!0,"start"))),c=m((t=>{if(u){if(t>=y)return p(1,0),st(e,!0,"end"),f(),u=!1;if(t>=g){const n=i((t-g)/r);p(n,1-n)}}return u}))}let h=!1;return{start(){h||(L(e),i(a)?(a=a(),rt().then(p)):p())},invalidate(){h=!1},end(){u&&(f(),u=!1)}}}function ht(e,o,r){let c,a=o(e,r),u=!0;const l=ct;function f(){const{delay:o=0,duration:r=300,easing:i=n,tick:f=t,css:p}=a||dt;p&&(c=B(e,1,0,r,o,i,p));const h=d()+o,g=h+r;X((()=>st(e,!1,"start"))),m((t=>{if(u){if(t>=g)return f(0,1),st(e,!1,"end"),--l.r||s(l.c),!1;if(t>=h){const n=i((t-h)/r);f(1-n,n)}}return u}))}return l.r+=1,i(a)?rt().then((()=>{a=a(),f()})):f(),{end(t){t&&a.tick&&a.tick(1,0),u&&(c&&L(e,c),u=!1)}}}function gt(e,o,r,c){let a=o(e,r),u=c?0:1,l=null,f=null,p=null;function h(){p&&L(e,p)}function g(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:r=0,duration:i=300,easing:c=n,tick:y=t,css:$}=a||dt,b={start:d()+r,b:o};o||(b.group=ct,ct.r+=1),l||f?f=b:($&&(h(),p=B(e,u,o,i,r,c,$)),o&&y(0,1),l=g(b,i),X((()=>st(e,o,"start"))),m((t=>{if(f&&t>f.start&&(l=g(f,i),f=null,st(e,l.b,"start"),$&&(h(),p=B(e,u,l.b,l.duration,0,c,a.css))),l)if(t>=l.end)y(u=l.b,1-u),st(e,l.b,"end"),f||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;u=l.a+l.d*c(n/l.duration),y(u,1-u)}return!(!l&&!f)})))}return{run(t){i(a)?rt().then((()=>{a=a(),y(t)})):y(t)},end(){h(),l=f=null}}}function mt(t,n){const e=n.token={};function o(t,o,r,s){if(n.token!==e)return;n.resolved=s;let i=n.ctx;void 0!==r&&(i=i.slice(),i[r]=s);const c=t&&(n.current=t)(i);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(at(),ft(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),ut())})):n.block.d(1),c.c(),lt(c,1),c.m(n.mount(),n.anchor),a=!0),n.block=c,n.blocks&&(n.blocks[o]=c),a&&nt()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=z();if(t.then((t=>{N(e),o(n.then,1,n.value,t),N(null)}),(t=>{if(N(e),o(n.catch,2,n.error,t),N(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function yt(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}function $t(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function bt(t){return"object"==typeof t&&null!==t?t:{}}function _t(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function vt(t){t&&t.c()}function wt(t,n){t&&t.l(n)}function xt(t,n,e,r){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,e),r||X((()=>{const n=a.map(o).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(X)}function kt(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Et(n,e,o,i,c,a,u=[-1]){const l=T;N(n);const f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&function(t,n){-1===t.$$.dirty[0]&&(I.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],f.update(),d=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){const t=O(e.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&lt(n.$$.fragment),xt(n,e.target,e.anchor,e.customElement),nt()}N(l)}class Ct{$destroy(){kt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const St=[];function Ot(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!St.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),St.push(t,n)}if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const a=[i,c];return r.push(a),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function jt(t){return Math.sqrt(1- --t*t)}function Rt(t){const n=t-1;return n*n*n+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function At(t,{delay:e=0,duration:o=400,easing:r=n}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Mt(t,{delay:n=0,duration:e=400,easing:o=Rt,x:r=0,y:s=0,opacity:i=0}={}){const c=getComputedStyle(t),a=+c.opacity,u="none"===c.transform?"":c.transform,l=a*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${a-l*n}`}}function Ft(t,{delay:n=0,duration:e=400,easing:o=Rt,start:r=0,opacity:s=0}={}){const i=getComputedStyle(t),c=+i.opacity,a="none"===i.transform?"":i.transform,u=1-r,l=c*(1-s);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} scale(${1-u*n});\n\t\t\topacity: ${c-l*n}\n\t\t`}}function Pt(t){var{fallback:n}=t,o=function(t,n){var e={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(e[o[r]]=t[o[r]])}return e}(t,["fallback"]);const r=new Map,s=new Map;function c(t,r,s){return(c,a)=>(t.set(a.key,{rect:c.getBoundingClientRect()}),()=>{if(r.has(a.key)){const{rect:t}=r.get(a.key);return r.delete(a.key),function(t,n,r){const{delay:s=0,duration:c=(t=>30*Math.sqrt(t)),easing:a=Rt}=e(e({},o),r),u=n.getBoundingClientRect(),l=t.left-u.left,f=t.top-u.top,d=t.width/u.width,p=t.height/u.height,h=Math.sqrt(l*l+f*f),g=getComputedStyle(n),m="none"===g.transform?"":g.transform,y=+g.opacity;return{delay:s,duration:i(c)?c(h):c,easing:a,css:(t,n)=>`\n\t\t\t\topacity: ${t*y};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${m} translate(${n*l}px,${n*f}px) scale(${t+(1-t)*d}, ${t+(1-t)*p});\n\t\t\t`}}(t,c,a)}return t.delete(a.key),n&&n(c,a,s)})}return[c(s,r,!1),c(r,s,!0)]}function Tt(t){let n,e,o,r;const s=t[7].default,i=a(s,t,t[6],null);return{c(){n=v("div"),i&&i.c(),this.h()},l(t){n=j(t,"DIV",{class:!0,style:!0});var e=O(n);i&&i.l(e),e.forEach(b),this.h()},h(){S(n,"class",e="__grid--masonry "+(t[0]?"__stretch-first":"")),S(n,"style",o=`--grid-gap: ${t[1]}; --col-width: ${t[2]};`)},m(e,o){$(e,n,o),i&&i.m(n,null),t[8](n),r=!0},p(t,[c]){i&&i.p&&(!r||64&c)&&l(i,s,t,t[6],c,null,null),(!r||1&c&&e!==(e="__grid--masonry "+(t[0]?"__stretch-first":"")))&&S(n,"class",e),(!r||6&c&&o!==(o=`--grid-gap: ${t[1]}; --col-width: ${t[2]};`))&&S(n,"style",o)},i(t){r||(lt(i,t),r=!0)},o(t){ft(i,t),r=!1},d(e){e&&b(n),i&&i.d(e),t[8](null)}}}function qt(t,n,e){let o,{$$slots:r={},$$scope:s}=n,{stretchFirst:i=!1}=n,{gridGap:c="0.5em"}=n,{colWidth:a="minmax(Min(20em, 100%), 1fr)"}=n,{items:u=[]}=n,l=[];const f=async()=>{l.forEach((async t=>{let n=getComputedStyle(t._el).gridTemplateColumns.split(" ").length;t.items.forEach((n=>{let e=n.getBoundingClientRect().height;e!==+n.dataset.h&&(n.dataset.h=e,t.mod++)})),(t.ncol!==n||t.mod)&&(t.ncol=n,t.items.forEach((t=>t.style.removeProperty("margin-top"))),t.ncol>1&&t.items.slice(n).forEach(((n,e)=>{let o=t.items[e].getBoundingClientRect().bottom,r=n.getBoundingClientRect().top;n.style.marginTop=o+t.gap-r+"px"})),t.mod=0)}))},d=async t=>{await(U(),K),t.length&&"masonry"!==getComputedStyle(t[0]).gridTemplateRows&&(l=t.map((t=>({_el:t,gap:parseFloat(getComputedStyle(t).gridRowGap),items:[...t.childNodes].filter((t=>1===t.nodeType&&-1!=+getComputedStyle(t).gridColumnEnd)),ncol:0,mod:0}))),f())};let p;var h;return G((()=>{p=window,p.addEventListener("resize",f,!1)})),h=()=>{p&&p.removeEventListener("resize",f,!1)},z().$$.on_destroy.push(h),t.$$set=t=>{"stretchFirst"in t&&e(0,i=t.stretchFirst),"gridGap"in t&&e(1,c=t.gridGap),"colWidth"in t&&e(2,a=t.colWidth),"items"in t&&e(4,u=t.items),"$$scope"in t&&e(6,s=t.$$scope)},t.$$.update=()=>{24&t.$$.dirty&&u&&e(3,o=o),8&t.$$.dirty&&o&&d([o])},[i,c,a,o,u,f,s,r,function(t){V[t?"unshift":"push"]((()=>{o=t,e(3,o),e(4,u)}))}]}class Bt extends Ct{constructor(t){super(),Et(this,t,qt,Tt,c,{stretchFirst:0,gridGap:1,colWidth:2,items:4,refreshLayout:5})}get refreshLayout(){return this.$$.ctx[5]}}export{i as $,e as A,at as B,Ot as C,w as D,y as E,C as F,t as G,s as H,X as I,gt as J,a as K,l as L,jt as M,Mt as N,Bt as O,V as P,_t as Q,mt as R,Ct as S,yt as T,ht as U,F as V,Y as W,Pt as X,pt as Y,At as Z,Ft as _,O as a,_ as a0,S as b,j as c,b as d,v as e,$ as f,R as g,M as h,Et as i,vt as j,k,E as l,wt as m,A as n,xt as o,$t as p,bt as q,ft as r,c as s,x as t,ut as u,lt as v,kt as w,D as x,W as y,G as z};
