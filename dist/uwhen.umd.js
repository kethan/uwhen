!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).uwhen={})}(this,(function(e){"use strict";var t=new Set;function n(e,n){var o=new Set;function s(){document.querySelectorAll(e).forEach((function(s){if(!o.has(s)){o.add(s);var u=n(s),c="function"==typeof u?u:function(){};!function(e,n,o){function s(){n&&document.contains(n)&&n.matches(e)||(t.delete(s),o())}setTimeout(s),t.add(s)}(e,s,(function(){o.delete(s),c()}))}}))}setTimeout(s),t.add(s)}new window.MutationObserver((function(){t.forEach((function(e){return e()}))})).observe(document,{attributes:!0,childList:!0,subtree:!0});var o="function"==typeof Promise?Promise:function(e){let t,n=[],o=0;return e((e=>{t=e,o=1,n.splice(0).forEach(s)})),{then:s};function s(e){return o?setTimeout(e,0,t):n.push(e),this}};let s=null,u=new Set;const c=e=>{const{$:t,r:n,h:o}=e;d(n)&&(r.get(o).delete(e),n()),d(e.r=t())&&r.get(o).add(e)},i=()=>{const e=u;u=new Set,e.forEach((({h:e,c:t,a:n,e:o})=>{o&&e.apply(t,n)}))},r=new WeakMap,a=[],l=[];function f(e,t){return e!==this[t]}const h=()=>s,d=e=>"function"==typeof e,p=e=>{const t={h:n,c:null,a:null,e:0,i:0,s:[]};return n;function n(){const n=s;s=t,t.e=t.i=0;try{return e.apply(t.c=this,t.a=arguments)}finally{s=n,a.length&&m.then(a.forEach.bind(a.splice(0),c)),l.length&&l.splice(0).forEach(c)}}},m=new o((e=>e()));function y(e){const{_:t,value:n}=this;n!==e&&(this._=new Set,this.value=e,t.forEach((({h:e,c:t,a:n})=>{e.apply(t,n)})))}const v=(e,t)=>{const n=h(),{i:o,s:s}=n;return o!==s.length&&t&&!t.some(f,s[o]._)||(s[o]={$:e(),_:t}),s[n.i++].$},w=e=>(t,n)=>{const o=h(),{i:s,s:u,h:c}=o,i=s===u.length;o.i++,i&&(r.has(c)||r.set(c,new Set),u[s]={$:t,_:n,r:null,h:c}),(i||!n||n.some(f,u[s]._))&&e.push(u[s]),u[s].$=t,u[s]._=n},g=w(a),b=w(l),S=(e,t)=>d(t)?t(e):t,_=(e,t,n)=>{const o=h(),{i:s,s:c}=o;s===c.length&&c.push({$:d(n)?n(t):S(void 0,t),set:t=>{c[s].$=e(c[s].$,t),(e=>{u.has(e)||(e.e=1,u.add(e),m.then(i))})(o)}});const{$:r,set:a}=c[o.i++];return[r,a]};e.createContext=e=>({_:new Set,provide:y,value:e}),e.useCallback=(e,t)=>v((()=>e),t),e.useContext=({_:e,value:t})=>(e.add(h()),t),e.useEffect=g,e.useLayoutEffect=b,e.useMemo=v,e.useReducer=_,e.useRef=e=>{const t=h(),{i:n,s:o}=t;return n===o.length&&o.push({current:e}),o[t.i++]},e.useState=e=>_(S,e),e.when=(e,t)=>{n(e,(e=>{const n=[...e.childNodes],o={};for(const t of e.attributes)o[[t.name]]=t.value;const s=p(t);return s(e,o,n),()=>{(e=>r.has(e))(s)&&(e=>{const t=r.get(e);t&&m.then((()=>{t.forEach((e=>{e.r(),e.r=null})),t.clear()}))})(s)}}))},Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
