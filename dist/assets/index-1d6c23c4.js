(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function W(){}function fe(e){return e()}function ie(){return Object.create(null)}function C(e){e.forEach(fe)}function pe(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ge(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function O(){return G(" ")}function w(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){let t;return{p(...n){t=n,t.forEach(l=>e.push(l))},r(){t.forEach(n=>e.splice(e.indexOf(n),1))}}}function te(e){return e===""?null:+e}function ye(e){return Array.from(e.childNodes)}function $e(e,t){t=""+t,e.data!==t&&(e.data=t)}function E(e,t){e.value=t??""}function K(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function ue(e,t,n){for(let l=0;l<e.options.length;l+=1){const r=e.options[l];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function be(e){const t=e.querySelector(":checked");return t&&t.__value}let le;function N(e){le=e}const M=[],oe=[];let q=[];const ae=[],De=Promise.resolve();let ne=!1;function ke(){ne||(ne=!0,De.then(de))}function H(e){q.push(e)}const ee=new Set;let I=0;function de(){if(I!==0)return;const e=le;do{try{for(;I<M.length;){const t=M[I];I++,N(t),we(t.$$)}}catch(t){throw M.length=0,I=0,t}for(N(null),M.length=0,I=0;oe.length;)oe.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];ee.has(n)||(ee.add(n),n())}q.length=0}while(M.length);for(;ae.length;)ae.pop()();ne=!1,ee.clear(),N(e)}function we(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}function Oe(e){const t=[],n=[];q.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),q=t}const U=new Set;let T;function _e(){T={r:0,c:[],p:T}}function he(){T.r||C(T.c),T=T.p}function j(e,t){e&&e.i&&(U.delete(e),e.i(t))}function A(e,t,n,l){if(e&&e.o){if(U.has(e))return;U.add(e),T.c.push(()=>{U.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function V(e){e&&e.c()}function B(e,t,n,l){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),l||H(()=>{const u=e.$$.on_mount.map(fe).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...u):C(u),e.$$.on_mount=[]}),s.forEach(H)}function R(e,t){const n=e.$$;n.fragment!==null&&(Oe(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(M.push(e),ke(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,l,r,s,u,d=[-1]){const h=le;N(e);const f=e.$$={fragment:null,ctx:[],props:s,update:W,not_equal:r,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:ie(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};u&&u(f.root);let c=!1;if(f.ctx=n?n(e,t.props||{},(p,i,...m)=>{const _=m.length?m[0]:i;return f.ctx&&r(f.ctx[p],f.ctx[p]=_)&&(!f.skip_bound&&f.bound[p]&&f.bound[p](_),c&&Se(e,p)),i}):[],f.update(),c=!0,C(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const p=ye(t.target);f.fragment&&f.fragment.l(p),p.forEach(z)}else f.fragment&&f.fragment.c();t.intro&&j(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),de()}N(h)}class Y{$destroy(){R(this,1),this.$destroy=W}$on(t,n){if(!pe(n))return W;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ee(e){let t,n;return{c(){t=g("p"),n=G(e[0]),a(t,"class","svelte-1k2s7p7")},m(l,r){Q(l,t,r),o(t,n)},p(l,[r]){r&1&&$e(n,l[0])},i:W,o:W,d(l){l&&z(t)}}}function je(e,t,n){let{text:l}=t;return e.$$set=r=>{"text"in r&&n(0,l=r.text)},[l]}class me extends Y{constructor(t){super(),X(this,t,je,Ee,J,{text:0})}}function ce(e){let t,n;return t=new me({props:{text:`Days: ${e[2]()}`}}),{c(){V(t.$$.fragment)},m(l,r){B(t,l,r),n=!0},p(l,r){const s={};r&4&&(s.text=`Days: ${l[2]()}`),t.$set(s)},i(l){n||(j(t.$$.fragment,l),n=!0)},o(l){A(t.$$.fragment,l),n=!1},d(l){R(t,l)}}}function xe(e){let t,n,l,r,s,u,d,h,f,c,p,i=e[0]&&e[1]&&ce(e);return{c(){t=g("main"),n=g("div"),l=g("p"),l.textContent="Select Dates:",r=O(),s=g("input"),u=O(),d=g("input"),h=O(),i&&i.c(),a(l,"class","svelte-8chqcj"),a(s,"type","date"),a(s,"class","svelte-8chqcj"),a(d,"type","date"),a(d,"class","svelte-8chqcj"),a(n,"class","svelte-8chqcj"),a(t,"class","svelte-8chqcj")},m(m,_){Q(m,t,_),o(t,n),o(n,l),o(n,r),o(n,s),E(s,e[0]),o(n,u),o(n,d),E(d,e[1]),o(n,h),i&&i.m(n,null),f=!0,c||(p=[w(s,"input",e[3]),w(d,"input",e[4])],c=!0)},p(m,[_]){_&1&&E(s,m[0]),_&2&&E(d,m[1]),m[0]&&m[1]?i?(i.p(m,_),_&3&&j(i,1)):(i=ce(m),i.c(),j(i,1),i.m(n,null)):i&&(_e(),A(i,1,1,()=>{i=null}),he())},i(m){f||(j(i),f=!0)},o(m){A(i),f=!1},d(m){m&&z(t),i&&i.d(),c=!1,C(p)}}}function Ae(e,t,n){let l,r=new Date().toISOString().split("T")[0],s=new Date().toISOString().split("T")[0];function u(){r=this.value,n(0,r)}function d(){s=this.value,n(1,s)}return e.$$.update=()=>{e.$$.dirty&3&&n(2,l=()=>{const h=new Date(r),f=new Date(s),c=Math.abs(f.getTime()-h.getTime());return Math.ceil(c/(1e3*3600*24))})},[r,s,l,u,d]}class Ce extends Y{constructor(t){super(),X(this,t,Ae,xe,J,{})}}function Pe(e){let t,n,l,r,s,u,d,h,f,c,p,i,m,_,D,$,y,P,v,k,S,F,L,Z,re;return v=new me({props:{text:`Date: ${e[4](e[3]())}`}}),{c(){t=g("main"),n=g("input"),l=O(),r=g("div"),s=g("div"),u=g("button"),u.textContent="-",d=O(),h=g("input"),f=O(),c=g("button"),c.textContent="+",p=O(),i=g("input"),m=O(),_=g("select"),D=g("option"),D.textContent="Day",$=g("option"),$.textContent="Week",y=g("option"),y.textContent="Month",P=O(),V(v.$$.fragment),k=O(),S=g("input"),a(n,"type","date"),a(n,"class","svelte-19mx0al"),K(u,"background-color","#676774"),K(u,"font-size","14px"),a(u,"class","svelte-19mx0al"),a(h,"min",1),a(h,"type","range"),a(h,"class","svelte-19mx0al"),K(c,"background-color","#676774"),K(c,"font-size","14px"),a(c,"class","svelte-19mx0al"),a(s,"class","svelte-19mx0al"),a(i,"min",1),a(i,"type","number"),a(i,"class","svelte-19mx0al"),D.__value="Day",D.value=D.__value,a(D,"class","svelte-19mx0al"),$.__value="Week",$.value=$.__value,a($,"class","svelte-19mx0al"),y.__value="Month",y.value=y.__value,a(y,"class","svelte-19mx0al"),a(_,"class","svelte-19mx0al"),e[2]===void 0&&H(()=>e[11].call(_)),a(r,"id","daysDiv"),a(r,"class","svelte-19mx0al"),a(S,"type","date"),S.value=F=e[5](e[3]()),a(S,"class","svelte-19mx0al"),a(t,"class","svelte-19mx0al")},m(b,x){Q(b,t,x),o(t,n),E(n,e[0]),o(t,l),o(t,r),o(r,s),o(s,u),o(s,d),o(s,h),E(h,e[1]),o(s,f),o(s,c),o(r,p),o(r,i),E(i,e[1]),o(r,m),o(r,_),o(_,D),o(_,$),o(_,y),ue(_,e[2],!0),o(t,P),B(v,t,null),o(t,k),o(t,S),L=!0,Z||(re=[w(n,"input",e[6]),w(u,"click",e[7]),w(h,"change",e[8]),w(h,"input",e[8]),w(c,"click",e[9]),w(i,"input",e[10]),w(_,"change",e[11]),w(S,"change",e[12])],Z=!0)},p(b,[x]){x&1&&E(n,b[0]),x&2&&E(h,b[1]),x&2&&te(i.value)!==b[1]&&E(i,b[1]),x&4&&ue(_,b[2]);const se={};x&8&&(se.text=`Date: ${b[4](b[3]())}`),v.$set(se),(!L||x&8&&F!==(F=b[5](b[3]())))&&(S.value=F)},i(b){L||(j(v.$$.fragment,b),L=!0)},o(b){A(v.$$.fragment,b),L=!1},d(b){b&&z(t),R(v),Z=!1,C(re)}}}function Te(e,t,n){let l,r=new Date().toISOString().split("T")[0],s=1,u="Day";const d=$=>$.toUTCString().split(" ").slice(0,-2).join(" "),h=$=>$.toISOString().split("T")[0];function f(){r=this.value,n(0,r)}const c=()=>n(1,s=Math.max(1,s-1));function p(){s=te(this.value),n(1,s)}const i=()=>n(1,s++,s);function m(){s=te(this.value),n(1,s)}function _(){u=be(this),n(2,u)}const D=$=>$.target.value=h(l());return e.$$.update=()=>{e.$$.dirty&7&&n(3,l=()=>{const $=(P,v)=>{const k=new Date(P);return k.setDate(k.getDate()+v),k};let y=s;switch(u){case"Day":break;case"Week":y*=7;break;case"Month":y*=30;break}return $(r,y)})},[r,s,u,l,d,h,f,c,p,i,m,_,D]}class Ie extends Y{constructor(t){super(),X(this,t,Te,Pe,J,{})}}function Me(e){let t,n;return t=new Ie({}),{c(){V(t.$$.fragment)},m(l,r){B(t,l,r),n=!0},i(l){n||(j(t.$$.fragment,l),n=!0)},o(l){A(t.$$.fragment,l),n=!1},d(l){R(t,l)}}}function qe(e){let t,n;return t=new Ce({}),{c(){V(t.$$.fragment)},m(l,r){B(t,l,r),n=!0},i(l){n||(j(t.$$.fragment,l),n=!0)},o(l){A(t.$$.fragment,l),n=!1},d(l){R(t,l)}}}function Le(e){let t,n,l,r,s,u,d,h,f,c,p,i,m,_,D;const $=[qe,Me],y=[];function P(v,k){return v[0]==="dateDiff"?0:v[0]==="addDates"?1:-1}return~(c=P(e))&&(p=y[c]=$[c](e)),m=ve(e[2][0]),{c(){t=g("main"),n=g("label"),l=g("input"),r=G(`
    Date Diff`),s=O(),u=g("label"),d=g("input"),h=G(`
    Add Dates`),f=O(),p&&p.c(),a(l,"type","radio"),a(l,"name","appOption"),l.__value="dateDiff",l.value=l.__value,a(n,"class","svelte-1u9oo1s"),a(d,"type","radio"),a(d,"name","appOption"),d.__value="addDates",d.value=d.__value,a(u,"class","svelte-1u9oo1s"),m.p(l,d)},m(v,k){Q(v,t,k),o(t,n),o(n,l),l.checked=l.__value===e[0],o(n,r),o(t,s),o(t,u),o(u,d),d.checked=d.__value===e[0],o(u,h),o(t,f),~c&&y[c].m(t,null),i=!0,_||(D=[w(l,"change",e[1]),w(d,"change",e[3])],_=!0)},p(v,[k]){k&1&&(l.checked=l.__value===v[0]),k&1&&(d.checked=d.__value===v[0]);let S=c;c=P(v),c!==S&&(p&&(_e(),A(y[S],1,1,()=>{y[S]=null}),he()),~c?(p=y[c],p||(p=y[c]=$[c](v),p.c()),j(p,1),p.m(t,null)):p=null)},i(v){i||(j(p),i=!0)},o(v){A(p),i=!1},d(v){v&&z(t),~c&&y[c].d(),m.r(),_=!1,C(D)}}}function Ne(e,t,n){let l="dateDiff";const r=[[]];function s(){l=this.__value,n(0,l)}function u(){l=this.__value,n(0,l)}return[l,s,r,u]}class We extends Y{constructor(t){super(),X(this,t,Ne,Le,J,{})}}new We({target:document.getElementById("app")});
