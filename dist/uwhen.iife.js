var uwhen=function(){"use strict";const r=new Set,o=new Map;new window.MutationObserver(u=>{for(const e of u)if(e.type==="attributes"){const{target:n,attributeName:t,oldValue:s}=e;if(o.has(n)){let[c,i]=o.get(n);if(i.includes(t)||i.length==0){const a=n.getAttribute(t);c(t,s,a,n)}}}r.forEach(e=>e())}).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeOldValue:!0});function d(u,e){setTimeout(n),r.add(n);function n(){document.querySelectorAll(u).forEach(t=>{if(!o.has(t)){const{connected:s=()=>{},disconnected:c=()=>{},attributeChanged:i=()=>{},observedAttributes:a=[]}=e(t);o.set(t,[i,a]),s(),b(u,t,()=>c())}})}}function b(u,e,n){setTimeout(t),r.add(t);function t(){e&&document.contains(e)&&e.matches(u)||(o.delete(e),r.delete(t),n())}}return d}();
