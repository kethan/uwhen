var uwhen=function(e){"use strict";var t=new Set;function n(e,n){var o=new Set;function u(){document.querySelectorAll(e).forEach((function(u){if(!o.has(u)){o.add(u);var s=n(u),c="function"==typeof s?s:function(){};!function(e,n,o){function u(){n&&document.contains(n)&&n.matches(e)||(t.delete(u),o())}setTimeout(u),t.add(u)}(e,u,(function(){o.delete(u),c()}))}}))}setTimeout(u),t.add(u)}new window.MutationObserver((function(){t.forEach((function(e){return e()}))})).observe(document,{attributes:!0,childList:!0,subtree:!0});var o="function"==typeof Promise?Promise:function(e){let t,n=[],o=0;return e((e=>{t=e,o=1,n.splice(0).forEach(u)})),{then:u};function u(e){return o?setTimeout(e,0,t):n.push(e),this}};let u=null,s=new Set;const c=e=>{const{$:t,r:n,h:o}=e;d(n)&&(i.get(o).delete(e),n()),d(e.r=t())&&i.get(o).add(e)},r=()=>{const e=s;s=new Set,e.forEach((({h:e,c:t,a:n,e:o})=>{o&&e.apply(t,n)}))},i=new WeakMap,a=[],l=[];function h(e,t){return e!==this[t]}const f=()=>u,d=e=>"function"==typeof e,p=e=>{const t={h:n,c:null,a:null,e:0,i:0,s:[]};return n;function n(){const n=u;u=t,t.e=t.i=0;try{return e.apply(t.c=this,t.a=arguments)}finally{u=n,a.length&&v.then(a.forEach.bind(a.splice(0),c)),l.length&&l.splice(0).forEach(c)}}},v=new o((e=>e()));function m(e){const{_:t,value:n}=this;n!==e&&(this._=new Set,this.value=e,t.forEach((({h:e,c:t,a:n})=>{e.apply(t,n)})))}const w=(e,t)=>{const n=f(),{i:o,s:u}=n;return o!==u.length&&t&&!t.some(h,u[o]._)||(u[o]={$:e(),_:t}),u[n.i++].$},y=e=>(t,n)=>{const o=f(),{i:u,s:s,h:c}=o,r=u===s.length;o.i++,r&&(i.has(c)||i.set(c,new Set),s[u]={$:t,_:n,r:null,h:c}),(r||!n||n.some(h,s[u]._))&&e.push(s[u]),s[u].$=t,s[u]._=n},g=y(a),S=y(l),_=(e,t)=>d(t)?t(e):t,E=(e,t,n)=>{const o=f(),{i:u,s:c}=o;u===c.length&&c.push({$:d(n)?n(t):_(void 0,t),set:t=>{c[u].$=e(c[u].$,t),(e=>{s.has(e)||(e.e=1,s.add(e),v.then(r))})(o)}});const{$:i,set:a}=c[o.i++];return[i,a]};return e.createContext=e=>({_:new Set,provide:m,value:e}),e.useCallback=(e,t)=>w((()=>e),t),e.useContext=({_:e,value:t})=>(e.add(f()),t),e.useEffect=g,e.useLayoutEffect=S,e.useMemo=w,e.useReducer=E,e.useRef=e=>{const t=f(),{i:n,s:o}=t;return n===o.length&&o.push({current:e}),o[t.i++]},e.useState=e=>E(_,e),e.when=(e,t)=>{n(e,(e=>{const n={};for(const t of e.attributes)n[[t.name]]=t.value;const o=p(t);return o(e,n),()=>{(e=>i.has(e))(o)&&(e=>{const t=i.get(e);t&&v.then((()=>{t.forEach((e=>{e.r(),e.r=null})),t.clear()}))})(o)}}))},Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module",e}({});
