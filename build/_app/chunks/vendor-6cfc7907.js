function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const s=u(t,n,e,o);return t[0](s)}}function u(t,n,o,s){return t[1]&&s?e(o.ctx.slice(),t[1](s(n))):o.ctx}function l(t,n,e,o,s,r,i){const c=function(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(void 0===n.dirty)return s;if("object"==typeof s){const t=[],e=Math.max(n.dirty.length,s.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|s[o];return t}return n.dirty|s}return n.dirty}(n,o,s,r);if(c){const s=u(n,e,o,i);t.p(s,c)}}function f(n){return n&&i(n.destroy)?n.destroy:t}const d="undefined"!=typeof window;let h=d?()=>window.performance.now():()=>Date.now(),p=d?t=>requestAnimationFrame(t):t;const m=new Set;function g(t){m.forEach((n=>{n.c(t)||(m.delete(n),n.f())})),0!==m.size&&p(g)}function $(t){let n;return 0===m.size&&p(g),{promise:new Promise((e=>{m.add(n={c:t,f:e})})),abort(){m.delete(n)}}}function y(t,n){t.appendChild(n)}function _(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function w(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function C(){return E(" ")}function k(){return E("")}function S(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function R(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function M(t){return Array.from(t.childNodes)}function A(t,n,e,o){for(let s=0;s<t.length;s+=1){const o=t[s];if(o.nodeName===n){let n=0;const r=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)o.removeAttribute(r[t]);return t.splice(s,1)[0]}}return o?v(n):x(n)}function B(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return E(n)}function F(t){return B(t," ")}function L(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n,e){t.classList[e?"add":"remove"](n)}function j(t,n=document.body){return Array.from(n.querySelectorAll(t))}const q=new Set;let N,O=0;function z(t,n,e,o,s,r,i,c=0){const a=16.666/o;let u="{\n";for(let g=0;g<=1;g+=a){const t=n+(e-n)*r(g);u+=100*g+`%{${i(t,1-t)}}\n`}const l=u+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${c}`,d=t.ownerDocument;q.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(x("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${s}ms 1 both`,O+=1,f}function G(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),s=e.length-o.length;s&&(t.style.animation=o.join(", "),O-=s,O||p((()=>{O||(q.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),q.clear())})))}function W(e,o,s,r){if(!o)return t;const i=e.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:c=0,duration:a=300,easing:u=n,start:l=h()+c,end:f=l+a,tick:d=t,css:p}=s(e,{from:o,to:i},r);let m,g=!0,y=!1;function _(){p&&G(e,m),g=!1}return $((t=>{if(!y&&t>=l&&(y=!0),y&&t>=f&&(d(1,0),_()),!g)return!1;if(y){const n=0+1*u((t-l)/a);d(n,1-n)}return!0})),p&&(m=z(e,0,1,a,c,u,p)),c||(y=!0),d(0,1),_}function P(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,D(t,s)}}function D(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform;t.style.transform=`${s} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function H(t){N=t}function I(){if(!N)throw new Error("Function called outside component initialization");return N}function V(t){I().$$.on_mount.push(t)}function J(t){I().$$.after_update.push(t)}function K(t,n){I().$$.context.set(t,n)}const Q=[],U=[],X=[],Y=[],Z=Promise.resolve();let tt=!1;function nt(){tt||(tt=!0,Z.then(it))}function et(t){X.push(t)}function ot(t){Y.push(t)}let st=!1;const rt=new Set;function it(){if(!st){st=!0;do{for(let t=0;t<Q.length;t+=1){const n=Q[t];H(n),ct(n.$$)}for(H(null),Q.length=0;U.length;)U.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];rt.has(n)||(rt.add(n),n())}X.length=0}while(Q.length);for(;Y.length;)Y.pop()();tt=!1,st=!1,rt.clear()}}function ct(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(et)}}let at;function ut(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const lt=new Set;let ft;function dt(){ft={r:0,c:[],p:ft}}function ht(){ft.r||r(ft.c),ft=ft.p}function pt(t,n){t&&t.i&&(lt.delete(t),t.i(n))}function mt(t,n,e,o){if(t&&t.o){if(lt.has(t))return;lt.add(t),ft.c.push((()=>{lt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const gt={duration:0};function $t(e,o,s,c){let a=o(e,s),u=c?0:1,l=null,f=null,d=null;function p(){d&&G(e,d)}function m(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function g(o){const{delay:s=0,duration:i=300,easing:c=n,tick:g=t,css:y}=a||gt,_={start:h()+s,b:o};o||(_.group=ft,ft.r+=1),l||f?f=_:(y&&(p(),d=z(e,u,o,i,s,c,y)),o&&g(0,1),l=m(_,i),et((()=>ut(e,o,"start"))),$((t=>{if(f&&t>f.start&&(l=m(f,i),f=null,ut(e,l.b,"start"),y&&(p(),d=z(e,u,l.b,l.duration,0,c,a.css))),l)if(t>=l.end)g(u=l.b,1-u),ut(e,l.b,"end"),f||(l.b?p():--l.group.r||r(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;u=l.a+l.d*c(n/l.duration),g(u,1-u)}return!(!l&&!f)})))}return{run(t){i(a)?(at||(at=Promise.resolve(),at.then((()=>{at=null}))),at).then((()=>{a=a(),g(t)})):g(t)},end(){p(),l=f=null}}}function yt(t,n){t.f(),function(t,n){mt(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function _t(t,n,e,o,s,r,i,c,a,u,l,f){let d=t.length,h=r.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],$=new Map,y=new Map;for(p=h;p--;){const t=f(s,r,p),c=e(t);let a=i.get(c);a?o&&a.p(t,n):(a=u(c,t),a.c()),$.set(c,g[p]=a),c in m&&y.set(c,Math.abs(p-m[c]))}const _=new Set,b=new Set;function w(t){pt(t,1),t.m(c,l),i.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=g[h-1],e=t[d-1],o=n.key,s=e.key;n===e?(l=n.first,d--,h--):$.has(s)?!i.has(o)||_.has(o)?w(n):b.has(s)?d--:y.get(o)>y.get(s)?(b.add(o),w(n)):(_.add(s),d--):(a(e,i),d--)}for(;d--;){const n=t[d];$.has(n.key)||a(n,i)}for(;h;)w(g[h-1]);return g}function bt(t,n){const e={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],c=n[r];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)s[t]||(e[t]=c[t],s[t]=1);t[r]=c}else for(const t in i)s[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function wt(t){return"object"==typeof t&&null!==t?t:{}}function xt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function vt(t){t&&t.c()}function Et(t,n){t&&t.l(n)}function Ct(t,n,e,s){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,e),s||et((()=>{const n=a.map(o).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(et)}function kt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function St(n,e,o,i,c,a,u=[-1]){const l=N;H(n);const f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:e.context||[]),callbacks:s(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=o?o(n,e.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return f.ctx&&c(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),d&&function(t,n){-1===t.$$.dirty[0]&&(Q.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){const t=M(e.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&pt(n.$$.fragment),Ct(n,e.target,e.anchor,e.customElement),it()}H(l)}class Rt{$destroy(){kt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Mt=[];function At(n,e=t){let o;const s=[];function r(t){if(c(n,t)&&(n=t,o)){const t=!Mt.length;for(let e=0;e<s.length;e+=1){const t=s[e];t[1](),Mt.push(t,n)}if(t){for(let t=0;t<Mt.length;t+=2)Mt[t][0](Mt[t+1]);Mt.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(i,c=t){const a=[i,c];return s.push(a),1===s.length&&(o=e(r)||t),i(n),()=>{const t=s.indexOf(a);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}function Bt(t){return Math.sqrt(1- --t*t)}function Ft(t){const n=t-1;return n*n*n+1}function Lt(t,{delay:n=0,duration:e=400,easing:o=Ft,x:s=0,y:r=0,opacity:i=0}={}){const c=getComputedStyle(t),a=+c.opacity,u="none"===c.transform?"":c.transform,l=a*(1-i);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*s}px, ${(1-t)*r}px);\n\t\t\topacity: ${a-l*n}`}}function Tt(t,{delay:n=0,duration:e=400,easing:o=Ft,start:s=0,opacity:r=0}={}){const i=getComputedStyle(t),c=+i.opacity,a="none"===i.transform?"":i.transform,u=1-s,l=c*(1-r);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} scale(${1-u*n});\n\t\t\topacity: ${c-l*n}\n\t\t`}}function jt(t){let n,e,o,s;const r=t[7].default,i=a(r,t,t[6],null);return{c(){n=x("div"),i&&i.c(),this.h()},l(t){n=A(t,"DIV",{class:!0,style:!0});var e=M(n);i&&i.l(e),e.forEach(b),this.h()},h(){R(n,"class",e="__grid--masonry "+(t[0]?"__stretch-first":"")),R(n,"style",o=`--grid-gap: ${t[1]}; --col-width: ${t[2]};`)},m(e,o){_(e,n,o),i&&i.m(n,null),t[8](n),s=!0},p(t,[c]){i&&i.p&&(!s||64&c)&&l(i,r,t,t[6],c,null,null),(!s||1&c&&e!==(e="__grid--masonry "+(t[0]?"__stretch-first":"")))&&R(n,"class",e),(!s||6&c&&o!==(o=`--grid-gap: ${t[1]}; --col-width: ${t[2]};`))&&R(n,"style",o)},i(t){s||(pt(i,t),s=!0)},o(t){mt(i,t),s=!1},d(e){e&&b(n),i&&i.d(e),t[8](null)}}}function qt(t,n,e){let o,{$$slots:s={},$$scope:r}=n,{stretchFirst:i=!1}=n,{gridGap:c="0.5em"}=n,{colWidth:a="minmax(Min(20em, 100%), 1fr)"}=n,{items:u=[]}=n,l=[];const f=async()=>{l.forEach((async t=>{let n=getComputedStyle(t._el).gridTemplateColumns.split(" ").length;t.items.forEach((n=>{let e=n.getBoundingClientRect().height;e!==+n.dataset.h&&(n.dataset.h=e,t.mod++)})),(t.ncol!==n||t.mod)&&(t.ncol=n,t.items.forEach((t=>t.style.removeProperty("margin-top"))),t.ncol>1&&t.items.slice(n).forEach(((n,e)=>{let o=t.items[e].getBoundingClientRect().bottom,s=n.getBoundingClientRect().top;n.style.marginTop=o+t.gap-s+"px"})),t.mod=0)}))},d=async t=>{await(nt(),Z),t.length&&"masonry"!==getComputedStyle(t[0]).gridTemplateRows&&(l=t.map((t=>({_el:t,gap:parseFloat(getComputedStyle(t).gridRowGap),items:[...t.childNodes].filter((t=>1===t.nodeType&&-1!=+getComputedStyle(t).gridColumnEnd)),ncol:0,mod:0}))),f())};let h;var p;return V((()=>{h=window,h.addEventListener("resize",f,!1)})),p=()=>{h&&h.removeEventListener("resize",f,!1)},I().$$.on_destroy.push(p),t.$$set=t=>{"stretchFirst"in t&&e(0,i=t.stretchFirst),"gridGap"in t&&e(1,c=t.gridGap),"colWidth"in t&&e(2,a=t.colWidth),"items"in t&&e(4,u=t.items),"$$scope"in t&&e(6,r=t.$$scope)},t.$$.update=()=>{24&t.$$.dirty&&u&&e(3,o=o),8&t.$$.dirty&&o&&d([o])},[i,c,a,o,u,f,r,s,function(t){U[t?"unshift":"push"]((()=>{o=t,e(3,o),e(4,u)}))}]}class Nt extends Rt{constructor(t){super(),St(this,t,qt,jt,c,{stretchFirst:0,gridGap:1,colWidth:2,items:4,refreshLayout:5})}get refreshLayout(){return this.$$.ctx[5]}}function Ot(t,n,e={}){const o=getComputedStyle(t),s="none"===o.transform?"":o.transform,r=n.from.width/t.clientWidth,c=n.from.height/t.clientHeight,a=(n.from.left-n.to.left)/r,u=(n.from.top-n.to.top)/c,l=Math.sqrt(a*a+u*u),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=Ft}=e;return{delay:f,duration:i(d)?d(l):d,easing:h,css:(t,n)=>`transform: ${s} translate(${n*a}px, ${n*u}px);`}}export{_t as $,e as A,dt as B,At as C,v as D,y as E,S as F,et as G,$t as H,Bt as I,Lt as J,r as K,a as L,l as M,t as N,Nt as O,U as P,xt as Q,j as R,Rt as S,ot as T,i as U,w as V,T as W,f as X,P as Y,D as Z,W as _,M as a,Ot as a0,Tt as a1,yt as a2,R as b,A as c,b as d,x as e,_ as f,B as g,L as h,St as i,vt as j,C as k,k as l,Et as m,F as n,Ct as o,bt as p,wt as q,mt as r,c as s,E as t,ht as u,pt as v,kt as w,K as x,J as y,V as z};