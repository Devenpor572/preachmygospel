"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[262],{74e3:(e,t,r)=>{r.d(t,{Z:()=>n});const n=class{constructor(){let{win:e=window,doc:t=document,context:r,baseUri:n=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.win=e,this.doc=t,this.context=r||t,this.baseUri=n,Range.prototype.intersectsNode||(Range.prototype.intersectsNode=function(e){let t=document.createRange();return t.selectNode(e),0>this.compareBoundaryPoints(Range.END_TO_START,t)&&0<this.compareBoundaryPoints(Range.START_TO_END,t)}),this.elements=Array.from(this.context.querySelectorAll("[data-aid]")),this.wordBoundryRegex=/\s+|[\u002D\u058A\u05BE\u1400\u1806\u2010-\u2015\u2053\u207B\u208B\u2212\u2E17\u2E1A\u2E3A-\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D]/g}getHighlightFromRange(e){const t=(e=this.normalizeRange(e)).startContainer,r=e.startOffset,n=this.elements.filter((t=>e.intersectsNode(t)));if(0===n.length)if(e.commonAncestorContainer.dataset.aid)n.push(e.commonAncestorContainer);else{const t=this._closestAID(e.commonAncestorContainer);t&&n.push(t)}if(0===n.length)return;let o=this._closestAID(t),a=e.endContainer,i=e.endOffset,s=this._closestAID(a);return n.reduce(((e,n)=>{const l=n.dataset.aid.toString(),c=`${this.baseUri}.${n.id}`;let d=-1,h=-1;return n===o&&(d=this._getWordOffset(t,r,o,!0)),n===s&&(h=this._getWordOffset(a,i,s,!1)),-1===d&&0===h?e:(-1!==h&&(d=Math.min(d,h)),[...e,{pid:l,uri:c,startOffset:d,endOffset:h}])}),[])}isTextNode(e){return[Node.TEXT_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE].includes(e.nodeType)}normalizeStartBoundary(e,t){if((this.isTextNode(e)?t===e.textContent.length:t===e.childNodes.length)&&e.nextSibling&&(e=e.nextSibling,t=0),!this.isTextNode(e)){const r=this.doc.createTreeWalker(e.childNodes[t],NodeFilter.SHOW_TEXT);r.firstChild(),e=r.currentNode,t=0}return{container:e,offset:t}}normalizeEndBoundary(e,t){if(0===t&&(e=e.previousSibling,t=t=this.isTextNode(e)?e.textContent.length:e.childNodes.length),!this.isTextNode(e)){const r=this.doc.createTreeWalker(e.childNodes[t-1],NodeFilter.SHOW_TEXT);r.lastChild(),e=r.currentNode,t=r.currentNode.textContent.length||0}return{container:e,offset:t}}normalizeRange(e){let{startContainer:t,startOffset:r,endContainer:n,endOffset:o}=e,a=this.normalizeStartBoundary(t,r),i=this.normalizeEndBoundary(n,o);const s=document.createRange();return s.setStart(a.container,a.offset),s.setEnd(i.container,i.offset),s}getRangeFromHighlight(e){const t=this.context.querySelector(`[data-aid="${e&&e.pid}"]`);if(!t)return;const{container:r,offset:n}=this._getContainerAndOffset({el:t,wordOffset:e.startOffset,isStart:!0}),{container:o,offset:a}=this._getContainerAndOffset({el:t,wordOffset:e.endOffset});return this.buildRange({startContainer:r,endContainer:o,startOffset:n,endOffset:a})}_closestAID(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[data-aid]";return e&&e.closest?e.closest(t):e.parentElement.closest(t)}_getWordOffset(e,t,r,n){let o,a=!1,i=0,s=0,l=0;const c=r=>{const c=r.length;if(0===(r=r.trim()).length)return void(l+=c);if(i++,a)return;if(s++,d.currentNode!==e){const t=e.compareDocumentPosition(d.currentNode),r=t&Node.DOCUMENT_POSITION_PRECEDING,o=t&Node.DOCUMENT_POSITION_FOLLOWING;if(r)return;!n&&o&&s--}const h=o.length>1,u=l+c+h;a=n&&t<u||!n&&t<=u,l+=c+h},d=this.doc.createTreeWalker(r,NodeFilter.SHOW_TEXT);for(;d.nextNode();)l=0,o=d.currentNode.nodeValue.split(this.wordBoundryRegex),o.forEach(c);return(n&&1===s||!n&&s===i)&&(s=-1),n&&s>i&&(s=i),s}_getContainerAndOffset(e){let{el:t,wordOffset:r,isStart:n}=e,o=0,a=this._getMaxWordOffset(t);if(r=parseInt(r,10),r=r>=a?a:r,n){if(0===a)return{container:t,offset:0};if(r<=-1||1===r)return{container:this._getFirstTextNode(t),offset:0}}else{if(0===a)return{container:t,offset:t.children.length};if(0===r)return{container:this._getFirstTextNode(t),offset:0};-1===r&&(r=a)}const i=this.doc.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(;i.nextNode();){const e=i.currentNode.nodeValue.split(this.wordBoundryRegex);let t=0,a=e.length;for(let l=0;l<a;l++){let c=e[l];var s=c.length;if(a>1&&l!==a-1&&s++,t+=s,c=c.trim(),0!==c.length&&(o++,r===o))return n?t-=s:a>1&&l!==a-1&&t--,{container:i.currentNode,offset:t}}}}_getMaxWordOffset(e){let t=0;const r=this.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(;r.nextNode();){t+=r.currentNode.nodeValue.split(this.wordBoundryRegex).reduce(((e,t)=>e+!!t.trim().length),0)}return t}_getFirstTextNode(e){const t=this.doc.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:e=>e.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});return t.nextNode()}getRangeFromHighlights(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=this.getRangeFromHighlight(e[0]),r=this.getRangeFromHighlight(e[e.length-1]);return this.buildRange({startContainer:t.startContainer,startOffset:t.startOffset,endContainer:r.endContainer,endOffset:r.endOffset})}addMark(e,t,r){"sup"===e.startContainer.parentElement.localName&&e.setStartBefore(e.startContainer.parentElement),"sup"===e.endContainer.parentElement.localName&&e.setEndAfter(e.endContainer.parentElement);const n=this.doc.createElement("mark"),{style:o,...a}=t;delete a.first,Object.entries(a).forEach((e=>{let[t,r]=e;return n.setAttribute(t,r)})),t.style&&n.setAttribute("underline","underline"),t.first&&r&&n.setAttribute("first","first"),e.surroundContents(n)}buildRange(e){let{startContainer:t,endContainer:r,startOffset:n,endOffset:o}=e;const a=new Range;return t!==r||n||void 0!==o&&o!==(r.data||r.childNodes).length?(void 0!==n?a.setStart(t,n):a.setStartBefore(t),void 0!==o?a.setEnd(r,o):a.setEndAfter(r)):a.selectNodeContents(t),a}safeAddMark(e){const t=this.getRangeFromHighlight(e);if(!t)return;if(t.startContainer.parentElement===t.endContainer.parentElement)return this.addMark(t,e,!0);const r=this.doc.createTreeWalker(t.commonAncestorContainer,NodeFilter.SHOW_TEXT,{acceptNode:e=>t.intersectsNode(e)&&e.data.length?NodeFilter.FILTER_ACCEPT:NodeFilter.Filter_REJECT});let n,o,a=t.startOffset,i=[];for(;r.nextNode();)n=r.currentNode,n===t.endContainer&&(o=t.endOffset),i.push(this.buildRange({startContainer:n,startOffset:a,endContainer:n,endOffset:o})),a=void 0;return i.forEach(((t,r)=>this.addMark(t,e,0===r))),!0}}},26145:(e,t,r)=>{r.d(t,{vc:()=>c,O9:()=>l,ZP:()=>b});var n=r(67294),o=r(25935),a=r(12788),i=r(50080),s=r.n(i);const l={blue:{default:{color:"#10D9E1",alpha:24},night:{color:"#60B5B8",alpha:24},sepia:{color:"#10D9E1",alpha:24}},brown:{default:{color:"#CD7D5A",alpha:24},night:{color:"#956D5C",alpha:24},sepia:{color:"#CD7D5A",alpha:24}},dark_blue:{default:{color:"#2596FF",alpha:25},night:{color:"#5687B5",alpha:27},sepia:{color:"#2596FF",alpha:25}},gray:{default:{color:"#AEB8C1",alpha:30},night:{color:"#8E969E",alpha:30},sepia:{color:"#AEB8C1",alpha:30}},green:{default:{color:"#A9D527",alpha:27},night:{color:"#8CA051",alpha:27},sepia:{color:"#A9D527",alpha:27}},orange:{default:{color:"#FE9829",alpha:27},night:{color:"#C68C4E",alpha:28},sepia:{color:"#FE9829",alpha:27}},pink:{default:{color:"#F85BEA",alpha:24},night:{color:"#B66BB1",alpha:26},sepia:{color:"#F85BEA",alpha:24}},purple:{default:{color:"#9D53FE",alpha:20},night:{color:"#7754A5",alpha:24},sepia:{color:"#9D53FE",alpha:20}},red:{default:{color:"#FE4F66",alpha:22},night:{color:"#BA505D",alpha:24},sepia:{color:"#FE4F66",alpha:22}},yellow:{default:{color:"#FCDB3B",alpha:32},night:{color:"#D6C059",alpha:32},sepia:{color:"#FCDB3B",alpha:32}},clear:{default:{color:"#FFFFFF",alpha:0},night:{color:"#0D0F10",alpha:0},sepia:{color:"#FAF3E7",alpha:0}}},c=a.ZP.mark.withConfig({displayName:"Mark",componentId:"sc-1l3tppr-0"})(["background:",";box-shadow:",";color:inherit;"],(e=>{let{clear:t,color:r,underline:n,highlightTheme:o="default"}=e;const a=l[t?"clear":r][o];return n||t?"transparent":s()(a.color,a.alpha)}),(e=>{let{clear:t,color:r,underline:n,highlightTheme:o="default"}=e;const a=l[t?"clear":r][o];return n?`inset 0 -2px 0 ${a.color}`:"unset"})),d=a.ZP.iframe.withConfig({displayName:"IsolatedDom",componentId:"sc-h3zeen-0"})(["display:none;"]);var h=r(74e3),u=r(74962),f=r.n(u),p=r(85893);function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=["audio","embed","iframe","img","input","script","source","track","video"],E=["src","srcset","poster"],N=new RegExp(`<(?:${m.join("|")})[^>]+?>`,"gi"),O=new RegExp(`\\b(${E.join("|")})`,"gi");class C extends n.PureComponent{constructor(){super(...arguments),g(this,"stripProtectedAttributes",f()((e=>e.replace(N,(e=>e.replace(O,"data-$1")))))),g(this,"addMarks",f()(((e,t)=>(this.isolatedDom.contentDocument.body.innerHTML=t,this.Highlights=new h.Z({win:this.isolatedDom.contentWindow,doc:this.isolatedDom.contentDocument}),e.forEach((e=>{try{this.Highlights.safeAddMark(e)}catch(e){}})),this.isolatedDom.contentDocument.body.innerHTML)))),g(this,"defaultTransform",(()=>{const e=this.props.parseOptions.replace,t={},r=a=>{t[a.name]=(t[a.name]||0)+1,"tag"!==a.type||a.attribs.key||(a.attribs.key=a.name+t[a.name]),m.includes(a.name)&&E.forEach((e=>{a.attribs[e]=a.attribs[`data-${e}`],a.attribs[`data-${e}`]=a.attribs[`data-data-${e}`],delete a.attribs[`data-data-${e}`]}));let i=e&&e(a,r);if((0,n.isValidElement)(i))return i;if("mark"===a.name){const e=(0,o.e_)(a.attribs),t=(0,o.du)(a.children,{replace:r});return(0,p.jsx)(c,{...e,children:t})}};return r}))}componentDidMount(){this.forceUpdate()}render(){let{children:e,highlights:t,parseOptions:r}=this.props;return e=this.stripProtectedAttributes(e),this.isolatedDom&&(e=this.addMarks(t,e)),(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)(d,{ref:e=>this.isolatedDom=e},"isolatedDom"),(0,o.ZP)(e,{...r,replace:this.defaultTransform()})]})}}g(C,"defaultProps",{children:"",highlights:[],parseOptions:{}});const b=C},50080:e=>{e.exports=function(e,t){if(t=t||100,6===(e=e.replace("#","")).length)var r=parseInt(e.substring(0,2),16),n=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);else{var a=e.substring(0,1)+e.substring(0,1),i=e.substring(1,2)+e.substring(1,2),s=e.substring(2,3)+e.substring(2,3);r=parseInt(a,16),n=parseInt(i,16),o=parseInt(s,16)}return"rgba("+r+", "+n+", "+o+", "+t/100+")"}},74962:(e,t,r)=>{const n=r(52363),o=r(37900),a=new WeakMap,i=function(e){return 1===arguments.length&&(null==e||"function"!=typeof e&&"object"!=typeof e)?e:JSON.stringify(arguments)};e.exports=(e,t)=>{t=Object.assign({cacheKey:i,cache:new Map,cachePromiseRejection:!1},t);const r=function(){const n=a.get(r),i=t.cacheKey.apply(null,arguments);if(n.has(i)){const e=n.get(i);if("number"!=typeof t.maxAge||Date.now()<e.maxAge)return e.data;n.delete(i)}const s=e.apply(this,arguments);return((e,r)=>{n.set(e,{data:r,maxAge:Date.now()+(t.maxAge||0)})})(i,s),o(s)&&!1===t.cachePromiseRejection&&s.catch((()=>n.delete(i))),s};return n(r,e),a.set(r,t.cache),r},e.exports.clear=e=>{const t=a.get(e);t&&"function"==typeof t.clear&&t.clear()}},52363:e=>{e.exports=(e,t)=>{for(const r of Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)))Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));return e}},37900:e=>{e.exports=e=>e instanceof Promise||null!==e&&"object"==typeof e&&"function"==typeof e.then&&"function"==typeof e.catch}}]);
//# sourceMappingURL=reader~annotation-panel~cross-ref-panel~disambiguation-panel~footnote.6f8123fb105c1bd3efc5.bundle.js.map