var Q=Object.defineProperty;var W=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(W(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function E(){}function R(e){return e()}function I(){return Object.create(null)}function L(e){e.forEach(R)}function T(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Y(e){return Object.keys(e).length===0}function M(e){return e??""}function p(e,t){e.appendChild(t)}function $(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function k(){return N(" ")}function G(){return N("")}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Z(e){return Array.from(e.childNodes)}function P(e,t){t=""+t,e.data!==t&&(e.data=t)}let j;function x(e){j=e}function ee(){if(!j)throw new Error("Function called outside component initialization");return j}function te(e){ee().$$.on_mount.push(e)}const w=[],V=[];let O=[];const q=[],ne=Promise.resolve();let B=!1;function le(){B||(B=!0,ne.then(H))}function F(e){O.push(e)}const S=new Set;let v=0;function H(){if(v!==0)return;const e=j;do{try{for(;v<w.length;){const t=w[v];v++,x(t),re(t.$$)}}catch(t){throw w.length=0,v=0,t}for(x(null),w.length=0,v=0;V.length;)V.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];S.has(n)||(S.add(n),n())}O.length=0}while(w.length);for(;q.length;)q.pop()();B=!1,S.clear(),x(e)}function re(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}function ce(e){const t=[],n=[];O.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),O=t}const oe=new Set;function se(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function C(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ie(e,t,n){const{fragment:r,after_update:l}=e.$$;r&&r.m(t,n),F(()=>{const u=e.$$.on_mount.map(R).filter(T);e.$$.on_destroy?e.$$.on_destroy.push(...u):L(u),e.$$.on_mount=[]}),l.forEach(F)}function ue(e,t){const n=e.$$;n.fragment!==null&&(ce(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(w.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,r,l,u,c=null,i=[-1]){const o=j;x(e);const s=e.$$={fragment:null,ctx:[],props:u,update:E,not_equal:l,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:I(),dirty:i,skip_bound:!1,root:t.target||o.$$.root};c&&c(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(a,d,..._)=>{const h=_.length?_[0]:d;return s.ctx&&l(s.ctx[a],s.ctx[a]=h)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](h),f&&fe(e,a)),d}):[],s.update(),f=!0,L(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const a=Z(t.target);s.fragment&&s.fragment.l(a),a.forEach(y)}else s.fragment&&s.fragment.c();t.intro&&se(e.$$.fragment),ie(e,t.target,t.anchor),H()}x(o)}class de{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){ue(this,1),this.$destroy=E}$on(t,n){if(!T(n))return E;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const he="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(he);function z(e,t,n){const r=e.slice();return r[6]=t[n][0],r[7]=t[n][1],r}function D(e,t,n){const r=e.slice();return r[10]=t[n],r}function pe(e){let t;return{c(){t=g("p"),t.textContent="Loading..."},m(n,r){$(n,t,r)},p:E,d(n){n&&y(t)}}}function _e(e){let t,n=C(Object.entries(e[0])),r=[];for(let l=0;l<n.length;l+=1)r[l]=K(z(e,n,l));return{c(){for(let l=0;l<r.length;l+=1)r[l].c();t=G()},m(l,u){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(l,u);$(l,t,u)},p(l,u){if(u&1){n=C(Object.entries(l[0]));let c;for(c=0;c<n.length;c+=1){const i=z(l,n,c);r[c]?r[c].p(i,u):(r[c]=K(i),r[c].c(),r[c].m(t.parentNode,t))}for(;c<r.length;c+=1)r[c].d(1);r.length=n.length}},d(l){l&&y(t),U(r,l)}}}function J(e){let t,n,r,l=e[10].name+"",u,c,i,o=e[10].dhalls+"",s,f,a,d,_;return{c(){t=g("div"),n=g("div"),r=g("h3"),u=N(l),c=k(),i=g("p"),s=N(o),f=k(),a=g("div"),_=k(),b(r,"class","svelte-1tlaery"),b(i,"class","svelte-1tlaery"),b(n,"class","mealCardContent svelte-1tlaery"),b(a,"class",d=M("vegLight isVeg"+e[10].vegetarian)+" svelte-1tlaery"),b(t,"class","mealCard svelte-1tlaery")},m(h,m){$(h,t,m),p(t,n),p(n,r),p(r,u),p(n,c),p(n,i),p(i,s),p(t,f),p(t,a),p(t,_)},p(h,m){m&1&&l!==(l=h[10].name+"")&&P(u,l),m&1&&o!==(o=h[10].dhalls+"")&&P(s,o),m&1&&d!==(d=M("vegLight isVeg"+h[10].vegetarian)+" svelte-1tlaery")&&b(a,"class",d)},d(h){h&&y(t)}}}function K(e){let t,n=e[6]+"",r,l,u,c=C(e[7]),i=[];for(let o=0;o<c.length;o+=1)i[o]=J(D(e,c,o));return{c(){t=g("h2"),r=N(n),l=k();for(let o=0;o<i.length;o+=1)i[o].c();u=G()},m(o,s){$(o,t,s),p(t,r),$(o,l,s);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(o,s);$(o,u,s)},p(o,s){if(s&1&&n!==(n=o[6]+"")&&P(r,n),s&1){c=C(o[7]);let f;for(f=0;f<c.length;f+=1){const a=D(o,c,f);i[f]?i[f].p(a,s):(i[f]=J(a),i[f].c(),i[f].m(u.parentNode,u))}for(;f<i.length;f+=1)i[f].d(1);i.length=c.length}},d(o){o&&(y(t),y(l),y(u)),U(i,o)}}}function ge(e){let t,n,r,l;function u(o,s){return o[0]!={}?_e:pe}let c=u(e),i=c(e);return{c(){t=g("main"),n=g("h1"),n.textContent="Dining",r=k(),l=g("div"),i.c()},m(o,s){$(o,t,s),p(t,n),p(t,r),p(t,l),i.m(l,null)},p(o,[s]){c===(c=u(o))&&i?i.p(o,s):(i.d(1),i=c(o),i&&(i.c(),i.m(l,null)))},i:E,o:E,d(o){o&&y(t),i.d()}}}function me(e,t,n){let r={},l=[];async function u(){let f=await(await fetch("https://general-backend-db.onrender.com/polls")).text();r=JSON.parse(f),console.log(r),i(r),o()}let c={};function i(s){l=Object.keys(s);let f=Object.keys(s[l[0]]);n(0,c={}),f.forEach(a=>{let d=[];l.forEach(_=>{Object.values(s[_][a]).forEach(h=>{d.some(m=>m.name===h.name)||d.push(h)})}),d.forEach(_=>{_.dhalls=[],l.forEach(h=>{Object.values(s[h][a]).some(m=>m.name===_.name)&&_.dhalls.push(h)})}),n(0,c[a]=d,c)})}function o(){Object.keys(c).forEach(s=>{c[s].sort((f,a)=>{if(f.dhalls.length-a.dhalls.length!=0)return f.dhalls.length-a.dhalls.length;for(let d=0;d<l.length;d++){if(f.dhalls.includes(l[d])&&!a.dhalls.includes(l[d]))return-1;if(a.dhalls.includes(l[d])&&!f.dhalls.includes(l[d]))return 1}return 1})})}return te(()=>{u()}),[c]}class ye extends de{constructor(t){super(),ae(this,t,me,ge,X,{})}}new ye({target:document.getElementById("app")});
