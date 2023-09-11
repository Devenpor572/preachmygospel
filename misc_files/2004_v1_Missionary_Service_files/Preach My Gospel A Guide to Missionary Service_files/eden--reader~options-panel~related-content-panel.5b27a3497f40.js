"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[285],{17263:(r,l,o)=>{o.d(l,{Z:()=>O});var e=o(67294),a=o(45697),t=o.n(a),i=o(12788),d=o(47741);const n={light:{},dark:{}},c={},h=(r,l)=>{let{light:o,dark:e,prefix:a="--unity-",noDuplicateCheck:t}=l;const i=a+r,h=`var(${i}, ${o})`;return void 0===c[i]||c[i]===h||t||console.warn(`Duplicate variable name ${i}.\nOld Value: ${c[i]}\nNew Value: ${h}`),c[i]=h,o?n.light[i]=o:console.warn(`No \`light\` value set for ${r}`),e?n.dark[i]=e:console.warn(`No \`dark\` value set for ${r}`),(0,d.x)(i,{light:o,dark:e}),h},g=(r,l)=>{let{light:o,dark:e}=l;return h(r,{light:o,dark:e,prefix:"--unity-"})},s="#eff0f0",b="#e0e2e2",k="#878a8c",p=(g("red10",{light:"#fc4e6d",dark:"#FF7591"}),g("red15",{light:"#e10f5a",dark:"#ED3A65"}),"#49cce6"),u="#ffffff",F="#FFFFFF99",f="#FFFFFF61",x="#FFFFFF1F",m=(g("background-color-alt",{light:s,dark:f}),g("background-color-hover",{light:s,dark:"#FFFFFF29"}),g("background-color-focused",{light:b,dark:"#FFFFFF3D"}),g("background-color-disabled",{light:"#f7f8f8",dark:x}),g("background-color-level-current",{light:u,dark:"#121212"}),g("background-color-level1",{light:u,dark:"#121212"}),g("background-color-level2",{light:u,dark:"#252525"}),g("background-color-level3",{light:u,dark:"#2c2c2c"}),g("background-color-level4",{light:u,dark:"#333333"}),g("background-color-level5",{light:u,dark:"#383838"}),g("text-color-primary",{light:"#212225",dark:"#FFFFFFDE"}),g("text-color-secondary",{light:"#53575b",dark:F}),g("text-color-tertiary",{light:k,dark:f}),g("text-color-inverted",{light:u,dark:"#000000"}),g("accent-color-link",{light:"#157493",dark:p}),g("accent-color-link-active",{light:"#b00504",dark:"#FF7770"}),g("accent-color-link-visited",{light:"#9C4F9C",dark:"#C092FC"}),g("accent-color-primary",{light:"#006184",dark:p})),w=(g("accent-color-info",{light:"#1E9FC8",dark:p}),g("accent-color-confirmation",{light:"#64A53D",dark:"#93c742"}),g("accent-color-warning",{light:"#EC7000",dark:"#faa61a"}),g("accent-color-danger",{light:"#b00504",dark:"#ff7770"}),g("border-color-primary",{light:k,dark:F})),y=(g("border-color-secondary",{light:"#bdc0c0",dark:f}),g("border-color-tertiary",{light:b,dark:x}),g("highlight-red",{light:"#FE4F6633",dark:"#BA505E61"}),g("highlight-orange",{light:"#FE98293D",dark:"#C68A4E61"}),g("highlight-yellow",{light:"#FCDB3B61",dark:"#D6BF5961"}),g("highlight-green",{light:"#A9D5273D",dark:"#8CA05261"}),g("highlight-blue",{light:"#10D9E133",dark:"#60B5B861"}),g("highlight-darkblue",{light:"#2596FF29",dark:"#5587B561"}),g("highlight-purple",{light:"#9D53FE29",dark:"#7654A561"}),g("highlight-pink",{light:"#F85BEA33",dark:"#B56BB04D"}),g("highlight-brown",{light:"#CD7D5A33",dark:"#946D5D61"}),g("highlight-grey",{light:"#AEB8C13D",dark:"#8E969C61"}),g("box-shadow-raised",{light:"0 2px 4px 0 #00000033",dark:"0 2px 4px 0 #00000066"}));g("box-shadow-detached",{light:"0 4px 8px 0 #00000033",dark:"0 4px 8px 0 #00000066"}),g("box-shadow-overlaid",{light:"0 8px 16px 0 #00000033",dark:"0 8px 16px 0 #00000066"}),g("box-shadow-popped",{light:"0 16px 32px 0 #00000033",dark:"0 16px 32px 0 #00000066"});var D=o(85893);const v=i.ZP.button.withConfig({componentId:"sc-1v62o0r-0"})(["background:0;border:0;padding:0;margin:0;text-align:inherit;cursor:pointer;color:inherit;text-decoration:none;&[disabled]{cursor:not-allowed;}"]),A=e.forwardRef(((r,l)=>{let{href:o,disabled:e,renderAs:a=(e?"button":o?"a":"button"),type:t=("button"===a?"button":void 0),...i}=r;return(0,D.jsx)(v,{...i,ref:l,type:t,href:o,disabled:e,as:a,children:i.children})}));A.displayName="A11y",A.propTypes={children:t().node.isRequired,type:t().string,disabled:t().bool,href:t().string,renderAs:t().elementType};const C=A,E="cubic-bezier(0,0.5,0.5,1)",B="1.125rem",_="1.375rem",$=i.ZP.span.withConfig({componentId:"sc-1bldwon-0"})(["display:block;transition:margin-inline-start 200ms ",";height:100%;width:",";background:",";box-shadow:",";border-radius:50%;"],E,(r=>{let{small:l}=r;return l?B:_}),u,y),L=(0,i.ZP)(C).withConfig({componentId:"sc-1bldwon-1"})(["contain:strict;overflow:hidden;width:",";height:",";transition:background-color 200ms ",",border-color 200ms ",";background-color:",";border-radius:15px;border:1px solid transparent;color:",';&[aria-pressed="true"]{background-color:currentcolor;border-color:currentcolor;',"{margin-inline-start:",";box-shadow:inset 0 0 0 1px ",",",";}&:disabled{","{box-shadow:none;}}}&:hover ","{background:",";}&:disabled{opacity:0.38;","{box-shadow:none;}}"],"2.625rem",(r=>{let{small:l}=r;return l?"1.25rem":"1.5rem"}),E,E,w,m,$,(r=>{let{small:l}=r;return`calc(100% - ${l?B:_})`}),u,y,$,$,u,$),N=r=>{let{on:l,small:o,disabled:a,"aria-labelledby":t,"aria-label":i,onToggle:d=(()=>{}),...n}=r;const[c,h]=(0,e.useState)(l);(0,e.useEffect)((()=>{h(l)}),[l]);return(0,D.jsx)(L,{...n,small:o,disabled:a,"aria-pressed":c?"true":"false","aria-labelledby":t,"aria-label":i,onClick:()=>{let r=!c;const l=d(r);"boolean"==typeof l&&(r=l),h(r)},children:(0,D.jsx)($,{small:o})})};N.propTypes={on:t().bool,small:t().bool,disabled:t().bool,onToggle:t().func,"aria-label":t().string,"aria-labelledby":t().string};const O=N}}]);
//# sourceMappingURL=eden--reader~options-panel~related-content-panel.5b27a3497f40e59e9b58.bundle.js.map