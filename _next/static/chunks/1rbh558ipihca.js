(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,770331,r=>{var e=r.i(6674);let o=e.forwardRef(function({title:r,titleId:o,...a},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":o},a),r?e.createElement("title",{id:o},r):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});r.s(["f",0,o])},536024,r=>{var e=r.i(6674);let o=e.forwardRef(function({title:r,titleId:o,...a},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":o},a),r?e.createElement("title",{id:o},r):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}))});r.s(["f",0,o])},564027,r=>{var e=r.i(704688),o=r.i(548503),a=r.i(42789),i=r.i(6674),n=r.i(60058),t=r.i(152621),l=r.i(772949);let c=n.z.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,s=n.z.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,d=n.z.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;r.s(["A",0,({address:r,showCopyIcon:n,url:u,className:v})=>{let[p,h]=(0,i.useState)(!1);function f(e){e.stopPropagation(),navigator.clipboard.writeText(r).then(()=>h(!0)).catch(console.error)}return(0,i.useEffect)(()=>{if(p){let r=setTimeout(()=>h(!1),3e3);return()=>clearTimeout(r)}},[p]),(0,e.jsxs)(c,u?{children:[(0,e.jsx)(d,{title:r,className:v,href:`${u}/address/${r}`,target:"_blank",children:(0,t.c)(r)}),n&&(0,e.jsx)(l.S,{onClick:f,size:"sm",style:{gap:"0.375rem"},children:(0,e.jsxs)(e.Fragment,p?{children:["Copied",(0,e.jsx)(o.f,{size:16})]}:{children:["Copy",(0,e.jsx)(a.f,{size:16})]})})]}:{children:[(0,e.jsx)(s,{title:r,className:v,children:(0,t.c)(r)}),n&&(0,e.jsx)(l.S,{onClick:f,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,e.jsxs)(e.Fragment,p?{children:["Copied",(0,e.jsx)(o.f,{size:14})]}:{children:["Copy",(0,e.jsx)(a.f,{size:14})]})})]})}])},487804,r=>{var e=r.i(60058);let o=e.z.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`;r.s(["E",0,o])},962130,r=>{var e=r.i(704688),o=r.i(180126),a=r.i(772949);r.s(["t",0,function({title:r}){let{currentScreen:i,navigateBack:n,navigate:t,data:l,setModalData:c}=(0,o.u)();return(0,e.jsx)(a.M,{title:r,backFn:"ManualTransferScreen"===i?n:i===l?.funding?.methodScreen?l.funding.comingFromSendTransactionScreen?()=>t("SendTransactionScreen"):void 0:l?.funding?.methodScreen?()=>{let r=l.funding;r.usingDefaultFundingMethod&&(r.usingDefaultFundingMethod=!1),c({funding:r,solanaFundingData:l?.solanaFundingData}),t(r.methodScreen)}:void 0})}])},795326,r=>{var e=r.i(704688),o=r.i(6674);let a=o.forwardRef(function({title:r,titleId:e,...a},i){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":e},a),r?o.createElement("title",{id:e},r):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var i=r.i(60058);let n=i.z.div`
  display: flex;
  gap: 0.5rem;
  background-color: var(--privy-color-info-bg);
  border: 1px solid var(--privy-color-border-info);
  align-items: flex-start;
  padding: 0.75rem;
  border-radius: 0.5rem;
  overflow: clip;
  width: 100%;
`,t=i.z.div`
  color: ${r=>"dark"===r.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  flex: 1;
  text-align: left;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  font-feature-settings:
    'calt' 0,
    'kern' 0;
`;r.s(["I",0,({children:r,theme:o,className:i})=>(0,e.jsxs)(n,{$theme:o,className:i,children:[(0,e.jsx)(a,{width:"16px",height:"16px",color:"var(--privy-color-foreground-2)",strokeWidth:2,style:{flexShrink:0}}),(0,e.jsx)(t,{$theme:o,children:r})]})],795326)},534054,r=>{var e=r.i(60058);let o=e.z.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
`;r.s(["L",0,o])},879100,r=>{var e=r.i(60058);let o=e.z.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,a=e.z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,i=e.z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,n=(0,e.z)(a)`
  padding: 20px 0;
`,t=(0,e.z)(a)`
  gap: 16px;
`,l=e.z.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=e.z.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;e.z.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let s=e.z.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: 500;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,d=e.z.div`
  height: 16px;
`,u=e.z.div`
  height: 12px;
`;e.z.div`
  position: relative;
`;let v=e.z.div`
  height: ${r=>r.height??"12"}px;
`;e.z.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`,r.s(["B",0,o,"C",0,n,"F",0,l,"H",0,i,"R",0,u,"S",0,s,"a",0,c,"b",0,d,"c",0,t,"d",0,v,"e",0,a])},126077,r=>{var e=r.i(704688),o=r.i(6674),a=r.i(880228),i=r.i(162609),n=r.i(772949),t=r.i(879100),l=r.i(941177),c=r.i(483851),s=r.i(962130),d=r.i(795326),u=r.i(967192),v=r.i(675539),p=r.i(601888),h=r.i(800307),f=r.i(627814),g=r.i(705390),m=r.i(180126),b=r.i(883019),y=r.i(565094),x=r.i(709283),w=r.i(393918),k=r.i(334140),j=r.i(459220),C=r.i(286048),z=r.i(893129),S=r.i(152621);let $={component:()=>{let{wallets:r}=(0,y.u)(),{connectors:$}=(0,g.u)(),T=$.filter(f.b).flatMap(r=>r.wallets),{data:A,setModalData:B,navigate:F,lastScreen:E}=(0,m.u)(),{rpcConfig:Z,appId:D,createAnalyticsEvent:P,closePrivyModal:L}=(0,g.u)(),N=(0,h.a)(),[U,_]=(0,o.useState)(void 0),[V,I]=(0,o.useState)(!1),O=A?.funding,{reloadBalance:W}=(0,b.u)({rpcConfig:Z,appId:D,address:"ethereum"===O.chainType?O.address:void 0,chain:"ethereum"===O.chainType?O.chain:void 0}),H="solana"===O.chainType,R=H?O.isUSDC?"USDC":"SOL":O.erc20Address?O.erc20ContractInfo?.symbol:O.chain.nativeCurrency.symbol,q=H?T.find(({address:r})=>r===O.address):r.find(({address:r})=>(0,S.c)(r)===(0,S.c)(O.address));if(!O)return B({errorModalData:{error:Error("Couldn't find funding config"),previousScreen:E||"FundingMethodSelectionScreen"},funding:A?.funding,solanaFundingData:A?.solanaFundingData,sendTransaction:A?.sendTransaction}),F("ErrorScreen"),(0,e.jsx)(e.Fragment,{});(0,o.useEffect)(()=>{let r=H?async function(){if("solana"!==O.chainType)return;let r=N.solanaRpcs[O.chain];r?(O.isUSDC?async function({rpc:r,address:e,mintAddress:o}){let a=await r.getTokenAccountsByOwner(e,{mint:o},{encoding:"jsonParsed",commitment:"confirmed"}).send(),i=a.value[0]?.account;return i?BigInt(i.data.parsed.info.tokenAmount.amount):0n}({rpc:r.rpc,address:O.address,mintAddress:(0,j.g)(O.chain)}):(0,w.p)({rpc:r.rpc,address:O.address})).then(r=>{let e=BigInt(r);U&&e>U&&(I(!0),P({eventName:x.O,payload:{provider:"manual",status:"success",chainType:"solana",address:q?.address,value:O.isUSDC?(0,a.f)(e-U,6):(0,a.f)(e-U,9),token:O.isUSDC?"USDC":"SOL"}})),_(e)}):console.warn("Unable to load solana rpc, skipping balance")}:async function(){"ethereum"===O.chainType&&(async()=>{if(!O.erc20Address)return await W()??BigInt(0);{let{balance:r}=await (0,z.g)({chain:O.chain,address:O.address,erc20Address:O.erc20Address,rpcConfig:Z,appId:D});return r}})().then(r=>{U&&r>U&&(I(!0),P({eventName:x.O,payload:{provider:"manual",status:"success",chainType:"ethereum",address:q?.address,chainId:O.chain.id,value:(0,a.f)(r-U,O.erc20ContractInfo?.decimals??18),token:O.erc20ContractInfo?.symbol??O.erc20Address??"ETH"}})),_(r)}).catch(()=>_(void 0))},e=setInterval(r,2e3);return r(),()=>clearInterval(e)},[U]);let G=(0,o.useMemo)(()=>null==U?"":O.isUSDC?(0,i.e)({amount:U,decimals:6}):H?(0,C.g)(U,3,!0,!0):null!=O.erc20ContractInfo?.decimals?(0,i.e)({amount:U,decimals:O.erc20ContractInfo.decimals}):(0,i.w)({wei:U}),[U,H,O]),J="ethereum"===O.chainType?O.chain.name:(0,k.g)(O.chain),Q=(0,o.useMemo)(()=>""===O.uiConfig?.receiveFundsTitle?null:(0,e.jsx)(v.T,{children:O.uiConfig?.receiveFundsTitle??`Receive ${O.amount} ${R??""}`.trim()}),[O.uiConfig?.receiveFundsTitle,O.amount,R]),Y=(0,o.useMemo)(()=>""===O.uiConfig?.receiveFundsSubtitle?null:(0,e.jsx)(u.S,{children:O.uiConfig?.receiveFundsSubtitle??`Scan this code or copy your wallet address to receive funds on ${J}.`}),[O.uiConfig?.receiveFundsSubtitle,J]),K="solana"===O.chainType&&O.isUSDC&&(0,j.g)(O.chain)?`?spl-token=${(0,j.g)(O.chain)}`:"";return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.t,{}),Q,Y,(0,e.jsxs)(t.F,{style:{gap:"1rem",margin:Q||Y?"1rem 0":"0"},children:[(0,e.jsx)(c.Q,{url:`${O.chainType}:${O.address}${K}`,size:200,squareLogoElement:M}),(0,e.jsxs)(d.I,{theme:N.appearance.palette.colorScheme,children:["Make sure to send funds on ",J,"."]}),(0,e.jsx)(p.W,{title:"Your wallet",errMsg:void 0,showCopyButton:!0,balance:`${G} ${R}`,address:O.address}),V&&(0,e.jsx)(n.P,{onClick:()=>L({shouldCallAuthOnSuccess:!1,isSuccess:!0}),children:"Continue"})]}),(0,e.jsx)(l.B,{})]})}},M=({...r})=>(0,e.jsx)(w.B,{color:"black",...r});r.s(["ManualTransferScreen",0,$,"default",0,$])},941177,r=>{var e=r.i(704688),o=r.i(60058),a=r.i(800307);function i(r){return(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460 40",...r,children:(0,e.jsx)("g",{fill:r.color||"var(--privy-color-foreground)",children:(0,e.jsx)("path",{d:"M0 15.4v15.38h4.64V19.96h3.58c2.47 0 3.63-.01 3.77-.02 1-.08 1.49-.15 2.18-.3a9.45 9.45 0 0 0 4.6-2.37c1.66-1.57 2.64-3.87 2.81-6.56.02-.3.02-1.19 0-1.49-.1-1.77-.56-3.35-1.36-4.72A8.84 8.84 0 0 0 15.14.57c-.93-.3-1.75-.43-3.09-.54C11.9.02 10.2 0 5.93 0H0ZM10.85 4c1.85.05 3.1.45 4.16 1.3.22.17.54.49.69.68a5.97 5.97 0 0 1 1.19 3.13c.04.35.04 1.36 0 1.71-.08.68-.23 1.3-.44 1.85a4.8 4.8 0 0 1-1.09 1.68A5.63 5.63 0 0 1 12 15.92c-.6.08-.4.08-4.01.09H4.64V3.98h2.9c1.6 0 3.08 0 3.31.02ZM187.65 5.71v5.72h-.27l-.09-.14a15.9 15.9 0 0 0-1.21-1.73c-.43-.5-1-.95-1.7-1.36-.54-.3-1.05-.5-1.73-.63a8.98 8.98 0 0 0-1.7-.17 8.84 8.84 0 0 0-7.8 4.03 12.95 12.95 0 0 0-2.03 6.39c-.07.98-.06 2.15.02 3.13.2 2.47.87 4.53 2.02 6.25a8.98 8.98 0 0 0 10.22 3.65 6.5 6.5 0 0 0 2.8-1.93c.41-.51.84-1.1 1.1-1.55l.1-.17h.37v3.58h4.38V0h-4.48Zm-5.24 5.54c1.3.14 2.3.6 3.17 1.48.9.9 1.5 2.09 1.85 3.64.36 1.6.39 3.72.06 5.43a8.13 8.13 0 0 1-1.54 3.62 5.1 5.1 0 0 1-3.93 1.96 6.13 6.13 0 0 1-2.32-.31 5.87 5.87 0 0 1-3.33-3.5c-.39-1-.62-2.05-.72-3.32-.03-.32-.04-1.35-.02-1.73.08-1.56.4-2.91.96-4.05a6.2 6.2 0 0 1 1.06-1.58 5.08 5.08 0 0 1 3.6-1.66c.25-.02.9 0 1.16.02ZM210.07 15.39l.01 15.38h4.38l.01-3.57h.37l.09.15c.24.44.84 1.26 1.21 1.7a6.79 6.79 0 0 0 2.57 1.75 9.3 9.3 0 0 0 6.86-.49 9.28 9.28 0 0 0 4.05-4.07A13.05 13.05 0 0 0 231 21.6c.21-1.73.18-3.7-.09-5.32a13.03 13.03 0 0 0-1.5-4.3 9.1 9.1 0 0 0-3.75-3.63 9.15 9.15 0 0 0-4.43-.96 7.46 7.46 0 0 0-2.8.5A7.07 7.07 0 0 0 216 9.7c-.4.52-.82 1.12-1.1 1.59l-.07.14h-.27V0h-4.5Zm11.13-4.14c1.07.1 1.94.44 2.7 1.04a6.1 6.1 0 0 1 1.64 1.98c.43.84.78 2 .94 3.11.15 1.16.16 2.4.02 3.54a9.34 9.34 0 0 1-1.39 4.03 5.33 5.33 0 0 1-2.69 2.15c-.9.3-2.04.38-3.06.2a5.14 5.14 0 0 1-3.45-2.37 6.03 6.03 0 0 1-.45-.8c-.5-1.03-.8-2.2-.92-3.58-.04-.49-.06-.89-.05-1.53.01-.76.05-1.23.13-1.85.38-2.53 1.47-4.38 3.15-5.31a5.46 5.46 0 0 1 2.3-.63 10 10 0 0 1 1.13.02ZM69.05 2.17l-.01 2.77V7.7h-3.36v3.6h3.36v6.8l.01 7.15c.06 1.4.4 2.44 1.1 3.37a5.8 5.8 0 0 0 2.97 2.07c.91.3 1.83.42 2.9.38a8.71 8.71 0 0 0 2.66-.48l-.8-3.7-.38.06a4.96 4.96 0 0 1-2.43-.06c-.33-.1-.56-.25-.8-.49-.4-.41-.6-.88-.7-1.67-.02-.2-.02-.62-.03-6.82v-6.6h4.73V7.7h-4.73V2.16h-4.49ZM133.34 2.17V7.7h-3.39v3.6h3.38v6.9l.01 7.17a5.66 5.66 0 0 0 2.36 4.49c.85.6 2.03 1.03 3.26 1.17.85.1 2.03.05 2.81-.1.3-.06.75-.18 1-.26l.2-.06v-.05l-.81-3.67-.37.06a4.99 4.99 0 0 1-1.8.09c-.85-.13-1.32-.4-1.7-.97a2.63 2.63 0 0 1-.39-1.04c-.06-.4-.06 0-.06-7.1V11.3h4.7V7.7h-4.7l-.01-2.77V2.16h-4.49ZM293.41 2.36a14.56 14.56 0 0 0-13.7 16.07 14.59 14.59 0 0 0 21.86 11.08 14.5 14.5 0 0 0 7.11-14.07 14.61 14.61 0 0 0-6.53-10.73 14.49 14.49 0 0 0-8.74-2.35ZM350.8 2.36a10.17 10.17 0 0 0-7.56 4.2c-.16.2-.45.63-.58.83l-.05.1h-.47l-.01-4.36h-7.36v36.4h7.82V27.27h.49l.05.07a11.3 11.3 0 0 0 7.49 4.15 10.52 10.52 0 0 0 9.38-4.1c1.66-2.1 2.73-4.9 3.07-8.06.1-.87.13-1.4.13-2.37 0-.8 0-1.1-.07-1.76a15.95 15.95 0 0 0-3.23-8.72 12.8 12.8 0 0 0-1.85-1.84 10.49 10.49 0 0 0-7.26-2.28Zm-.94 6.05c1.27.15 2.33.65 3.2 1.5.98.96 1.67 2.31 2.03 4 .34 1.57.38 3.68.12 5.39a9.78 9.78 0 0 1-1.04 3.25c-.14.25-.44.69-.6.89a5.35 5.35 0 0 1-4.31 2.07 5.25 5.25 0 0 1-4.41-1.9 7.35 7.35 0 0 1-1.26-2.32 14.09 14.09 0 0 1-.62-4.83c.05-1.98.38-3.53 1.02-4.85a5.63 5.63 0 0 1 2.5-2.65c.66-.34 1.3-.5 2.14-.58.18-.02 1.04 0 1.23.03ZM363.63 3.1l-.01 3.2v3.16h1.43c1.26.01 1.44.02 1.54.04.42.09.66.28.79.62.08.23.08.08.08 2.96a911.57 911.57 0 0 1 .03 10.18v7.54h7.82v-7.4l.01-7.83c.03-.94.11-1.63.27-2.28.46-1.9 1.54-2.93 3.35-3.23.52-.08.2-.08 5-.08h4.4V3.08h-3.1c-3.48 0-3.91.01-4.67.1-1.83.2-3.04.79-3.96 1.88-.5.6-.9 1.32-1.26 2.26l-.06.17h-.46V3.09h-5.6c-4.46 0-5.6 0-5.6.02ZM390.8 16.95V30.8h3.87l3.86-.01V3.09h-7.73ZM400.6 3.1l-.01.4v.38l4.66 13.4 4.69 13.47.02.05h10.3l.03-.05 4.67-13.45 4.67-13.4V3.1h-7.43l-6.7 19.26h-.5l-3.28-9.5-3.31-9.64-.05-.12h-3.88l-3.88.01ZM430.98 3.1c-.01 0-.02.19-.02.4v.39l5.08 14.59c2.8 8.02 5.08 14.6 5.08 14.61.01.02-.22.02-4.8.02h-4.82v6.42h4.95c5.09 0 5.23 0 5.87-.06 3.15-.28 5.29-1.63 6.63-4.15.28-.55.44-.95.87-2.16L459 6.78l1-2.89v-.8h-7.43l-6.69 19.26h-.5l-3.27-9.46-3.31-9.64-.06-.16h-3.88l-3.88.01ZM36.57 7.36c-1.36.1-2.6.6-3.62 1.45a5.65 5.65 0 0 0-1.67 2.42l-.05.13H31V7.7h-4.35v23.08h4.5v-7.3c0-8 0-7.34.08-7.82a4.89 4.89 0 0 1 2.06-3.18c.83-.58 1.74-.89 2.87-.98a11.87 11.87 0 0 1 2.8.25H39v-4.3l-.21-.02c-.61-.07-1.74-.1-2.22-.07ZM51.08 7.41c-2.33.12-4.3.84-5.95 2.16a9.89 9.89 0 0 0-2.03 2.2 12.5 12.5 0 0 0-2 5.78 18.04 18.04 0 0 0 0 3.65 12.13 12.13 0 0 0 2.26 6.05 9.74 9.74 0 0 0 5 3.52c2.11.64 4.7.64 6.8 0a9.78 9.78 0 0 0 4.88-3.37c1.38-1.78 2.19-4 2.4-6.58.13-1.46.06-3.06-.18-4.42a11.24 11.24 0 0 0-3.58-6.6 10 10 0 0 0-5.75-2.35c-.56-.06-1.31-.07-1.85-.04Zm1.42 3.78c.88.1 1.62.34 2.28.75a6.13 6.13 0 0 1 1.99 2.15 10.31 10.31 0 0 1 1.2 5c.02 1.23-.12 2.44-.42 3.51a7.14 7.14 0 0 1-1.81 3.32c-.61.6-1.2.98-1.95 1.24a6 6 0 0 1-2 .3 5.7 5.7 0 0 1-2.72-.6 5 5 0 0 1-1.28-.94A7.1 7.1 0 0 1 46 22.73c-.57-1.99-.6-4.46-.08-6.5a7.24 7.24 0 0 1 2.03-3.67 5.13 5.13 0 0 1 3.35-1.4 11 11 0 0 1 1.2.03ZM92.05 7.4c-.96.06-1.56.15-2.3.33a9.62 9.62 0 0 0-6.09 4.66 13.5 13.5 0 0 0-1.71 7c0 .83 0 1.04.06 1.6.16 1.77.58 3.32 1.29 4.7A9.72 9.72 0 0 0 90.28 31c1.84.37 4.08.32 5.85-.13a9.07 9.07 0 0 0 5.02-3.1A7.64 7.64 0 0 0 102.5 25l-2.11-.39-2.11-.38-.08.13a4.72 4.72 0 0 1-2.35 2.55 6.3 6.3 0 0 1-2.23.58c-.29.03-1.13.03-1.44 0a6.35 6.35 0 0 1-3.02-1.04 5.93 5.93 0 0 1-2.02-2.43 8.44 8.44 0 0 1-.72-3.18v-.26h16.38v-.81c0-1.83-.06-2.76-.25-3.87-.2-1.22-.53-2.24-1.05-3.28a8.9 8.9 0 0 0-2.66-3.26 10.1 10.1 0 0 0-5.34-1.94 18.3 18.3 0 0 0-1.46-.03Zm1.3 3.75c1.2.13 2.19.55 3.05 1.3a5.8 5.8 0 0 1 1.78 2.96c.13.51.21 1.17.21 1.66v.15H86.43v-.12c.08-.97.3-1.78.72-2.61.5-1 1.2-1.8 2.14-2.42a5.32 5.32 0 0 1 2.9-.95c.2-.01.97 0 1.17.03ZM116.79 7.41c-2 .1-3.73.65-5.22 1.65a10.7 10.7 0 0 0-4.25 6.06 16.1 16.1 0 0 0-.5 5.8c.2 2.17.84 4.13 1.88 5.76.58.9 1.32 1.73 2.15 2.4a9.37 9.37 0 0 0 3.6 1.8 12.06 12.06 0 0 0 3.92.34 10.2 10.2 0 0 0 3.84-.95 8.31 8.31 0 0 0 4.76-6.75l.01-.04h-4.37l-.05.16a4.87 4.87 0 0 1-4.24 3.75c-.59.07-1.32.06-1.93-.05a5.47 5.47 0 0 1-3.5-2.27c-.56-.75-1-1.73-1.26-2.79a13.8 13.8 0 0 1-.16-5.24 7.77 7.77 0 0 1 2.1-4.3 5.48 5.48 0 0 1 2.15-1.3 6.4 6.4 0 0 1 3.89.1c.59.21 1.03.5 1.5.96a5.32 5.32 0 0 1 1.46 2.5l.04.15h4.37v-.06a8.22 8.22 0 0 0-5.31-6.94 10.98 10.98 0 0 0-4.88-.74ZM156.2 7.41a9.87 9.87 0 0 0-6 2.29 11.02 11.02 0 0 0-3.41 5.43c-.52 1.78-.68 3.9-.48 5.97.17 1.8.63 3.38 1.37 4.8a9.68 9.68 0 0 0 5.91 4.86c1.65.48 3.63.61 5.53.36 3.72-.49 6.55-2.62 7.56-5.69.12-.39.13-.42.1-.43-.02 0-4.13-.75-4.19-.75-.03 0-.04 0-.1.16-.18.42-.45.9-.72 1.22-.16.2-.49.53-.7.7-.67.54-1.5.9-2.43 1.08-.48.08-.83.11-1.41.11-.64 0-1.07-.04-1.6-.15a5.76 5.76 0 0 1-3.93-2.83 8 8 0 0 1-.99-3.79v-.16h16.38v-1.11l-.02-1.43c-.1-2.25-.53-4-1.35-5.59a9.24 9.24 0 0 0-6.18-4.75c-1.04-.26-2.2-.36-3.33-.3Zm1.45 3.74a5.35 5.35 0 0 1 3.66 1.94 6.1 6.1 0 0 1 1.38 4.01v.12h-11.97v-.06c0-.02 0-.14.02-.25a6.6 6.6 0 0 1 2.15-4.32 5.73 5.73 0 0 1 3.5-1.46c.25-.02 1 0 1.26.02ZM233.58 7.82l8.37 23.22a49.22 49.22 0 0 1-.67 1.9 5.36 5.36 0 0 1-1.14 1.8c-.41.4-.82.58-1.48.69-.27.04-1.03.03-1.35 0a8.05 8.05 0 0 1-1.1-.23l-1.08 3.67c0 .02.32.14.66.22.83.21 1.57.29 2.56.28.56-.01.8-.03 1.24-.1 2.71-.4 4.66-2.09 5.86-5.08l9.64-26.44c0-.02-4.82-.06-4.83-.05l-2.93 8.96-2.91 8.94h-.24l-.22-.65-2.91-8.95-2.7-8.3H233.53ZM293.05 35.8c-1.18.04-1.93.09-2.8.16-2.52.24-4.53.69-5.43 1.23-.7.41-.76.86-.2 1.28.88.66 3.29 1.19 6.36 1.4a48.55 48.55 0 0 0 5.75.05c3.47-.19 6.24-.78 7.11-1.5.22-.19.3-.34.3-.53 0-.1 0-.12-.04-.22-.35-.69-2.32-1.3-5.25-1.63a41.09 41.09 0 0 0-5.8-.24Zm0 0"})})})}let n=o.z.span`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: var(--privy-color-foreground-3);
  display: block;

  && > a {
    color: var(--privy-color-accent);
  }
`,t=o.z.a`
  && {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,l=o.z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 12px;
  gap: 8px;

  font-size: 13px;

  && a {
    padding: 0.5rem 0;

    &:hover {
      text-decoration: none;
    }
  }

  @media all and (display-mode: standalone) {
    padding-bottom: 30px;
  }
`;r.s(["B",0,({className:r})=>{let{appearance:o}=(0,a.a)();return(0,e.jsx)(l,{className:r,children:o.footerLogo??(0,e.jsx)(t,{href:"https://privy.io/?utm_source=module&utm_medium=module&utm_campaign=registration_module",target:"_blank",rel:"noopener noreferrer",id:"protected-by-privy",children:(0,e.jsx)(i,{color:"currentColor",height:13,width:150})})})},"M",0,l,"T",0,function({app:{legal:{privacyPolicyUrl:r,termsAndConditionsUrl:o,requireUsersAcceptTerms:a}},alwaysShowImplicitConsent:i}){let t=!(!r||!o);return(!a||i)&&(o||r)?(0,e.jsxs)(n,{children:["By logging in I agree to the"," ",o&&(0,e.jsx)("a",{href:o,target:"_blank",children:t?"Terms":"Terms of Service"}),t&&" & ",r&&(0,e.jsx)("a",{href:r,target:"_blank",children:"Privacy Policy"})]}):(0,e.jsx)(n,{})}])},772949,r=>{var e=r.i(704688),o=r.i(60058),a=r.i(852560),i=r.i(770331),n=r.i(536024),t=r.i(6674);let l=t.forwardRef(function({title:r,titleId:e,...o},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":e},o),r?t.createElement("title",{id:e},r):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});var c=r.i(800307),s=r.i(705390);let d=o.z.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: auto;
    cursor: pointer;
    border-radius: ${({$size:r})=>"sm"===r?"6px":"var(--privy-border-radius-sm)"};

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.016px;
  }

  && {
    height: ${({$size:r})=>"sm"===r?"28px":"48px"};
    padding: 0 ${({$size:r})=>"sm"===r?"10px":"16px"};
  }
`,u=({children:r,loading:o,disabled:i,success:n,size:t="lg",loadingText:l="Loading...",as:c,onClick:s,...d})=>{let u="a"===c,v=!(!o&&!i);return(0,e.jsx)(p,{as:c,disabled:u?void 0:v,"aria-disabled":u?v:void 0,$success:n,$size:t,onClick:r=>{u&&v?r.preventDefault():s?.(r)},...d,children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.B,{}),l?(0,e.jsx)("span",{style:{marginLeft:"8px"},children:l}):null]}):r})},v=(0,o.z)(d)`
  position: relative;

  && {
    background-color: var(--privy-color-accent);
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: var(--privy-color-accent-dark);
  }

  &:active {
    background-color: var(--privy-color-accent-dark);
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled {
    cursor: not-allowed;
    color: var(--privy-color-foreground-disabled);
    background-color: var(--privy-color-accent-dark);
  }
`,p=(0,o.z)(d)`
  position: relative;

  && {
    background-color: ${r=>r.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: ${r=>r.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent-dark)"};
  }

  &:active {
    background-color: ${r=>r.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent-dark)"};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--privy-shadow-focus-ring);
  }

  &:disabled {
    background-color: var(--privy-color-background-2);
    border: 1px solid var(--privy-color-border-default);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  &:hover:disabled,
  &:active:disabled {
    background-color: var(--privy-color-background-2);
    border: 1px solid var(--privy-color-border-default);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  /* Emulate disabled look for anchors via the prop */
  ${r=>r.disabled&&o.m`
      &&&,
      &&&:hover,
      &&&:active {
        background-color: var(--privy-color-background-2);
        border: 1px solid var(--privy-color-border-default);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,h=({children:r,loading:o,disabled:i,size:n="lg",loadingText:t="Loading...",as:l,onClick:c,...s})=>{let d="a"===l,u=!(!o&&!i);return(0,e.jsx)(g,{as:l,disabled:d?void 0:u,"aria-disabled":d?u:void 0,$size:n,onClick:r=>{d&&u?r.preventDefault():c?.(r)},...s,children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.B,{}),t?(0,e.jsx)("span",{style:{marginLeft:"8px"},children:t}):null]}):r})},f=({children:r,loading:o,disabled:i,size:n="lg",loadingText:t="Loading...",as:l,onClick:c,...s})=>{let d="a"===l,u=!(!o&&!i);return(0,e.jsx)(m,{as:l,disabled:d?void 0:u,"aria-disabled":d?u:void 0,$size:n,onClick:r=>{d&&u?r.preventDefault():c?.(r)},...s,children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.B,{}),t?(0,e.jsx)("span",{style:{marginLeft:"8px"},children:t}):null]}):r})},g=(0,o.z)(d)`
  && {
    border-width: 1px;
    border-style: solid;
    border-color: ${r=>r.$warn?"var(--privy-color-border-error)":"var(--privy-color-accent)"};
    background-color: var(--privy-color-background);
    color: ${r=>r.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
    transition:
      border-color 200ms ease,
      color 200ms ease,
      background-color 200ms ease;
  }

  &:hover {
    border-color: ${r=>r.$warn?"var(--privy-color-border-error)":"var(--privy-color-border-interactive-hover)"};
    background-color: ${r=>r.$warn?"var(--privy-color-error-light)":"var(--privy-color-info-bg-hover)"};
    color: ${r=>r.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
  }

  &:active {
    border-color: ${r=>r.$warn?"var(--privy-color-border-error)":"var(--privy-color-border-interactive)"};
    background-color: ${r=>r.$warn?"var(--privy-color-error-bg-hover)":"var(--privy-color-info-bg)"};
    color: ${r=>r.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
  }

  &:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  &:hover:disabled,
  &:active:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  /* Anchor disabled look (prop-driven) */
  ${r=>r.disabled&&o.m`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,m=(0,o.z)(d)`
  && {
    border-width: 1px;
    border-style: solid;
    border-color: var(--privy-color-border-default);
    background-color: transparent;
    color: var(--privy-color-foreground-2);

    transition:
      border-color 200ms ease,
      color 200ms ease,
      background-color 200ms ease;
  }

  &:hover {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-info-bg-hover);
    color: var(--privy-color-foreground-2);
  }

  &:active {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-info-bg);
    color: var(--privy-color-foreground-2);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--privy-shadow-focus-ring);
  }

  &:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  &:hover:disabled,
  &:active:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  /* Anchor disabled look (prop-driven) */
  ${r=>r.disabled&&o.m`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,b=o.z.button`
  && {
    padding: 12px 16px;
    font-weight: 500;
    text-align: center;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent);
    border-radius: var(--privy-border-radius-sm);
    min-width: 144px;
    opacity: ${r=>r.invisible?"0":"1"};
    transition:
      opacity 200ms ease,
      background-color 200ms ease,
      color 200ms ease;
    user-select: none;

    ${r=>r.invisible&&o.m`
        pointer-events: none;
      `}

    &:hover {
      background-color: var(--privy-color-accent-dark);
    }
    &:active {
      background-color: var(--privy-color-accent-dark);
    }

    &:hover:disabled,
    &:active:disabled {
      background-color: var(--privy-color-background-2);
      color: var(--privy-color-foreground-disabled);
      cursor: not-allowed;
    }
  }
`;o.z.div`
  /* Set to match height of SoftCtaButton to avoid reflow if conditionally rendered */
  height: 44px;
`;let y=o.z.button`
  && {
    color: var(--privy-color-accent);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    border-radius: 0 var(--privy-border-radius-mdlg) var(--privy-border-radius-mdlg) 0;
    border: none;
    transition: color 200ms ease;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
    }

    :hover {
      color: var(--privy-color-accent-dark);
    }

    && > :first-child {
      opacity: ${r=>+!r.$isSubmitting};
    }

    && > :last-child {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);

      /** Will map to the opposite of first span */
      opacity: ${r=>+!!r.$isSubmitting};
    }

    :disabled,
    :hover:disabled {
      color: var(--privy-color-foreground-disabled);
      cursor: not-allowed;
    }
  }
`,x=({backFn:r,disabled:o=!1,"aria-label":a})=>(0,e.jsx)("div",{children:(0,e.jsx)(j,{type:"button","aria-label":a,disabled:o,onClick:o?void 0:r,children:(0,e.jsx)(i.f,{height:"16px",width:"16px",strokeWidth:2})})}),w=({infoFn:r})=>(0,e.jsx)("div",{children:(0,e.jsx)(C,{"aria-label":"info",onClick:r,children:(0,e.jsx)(n.f,{height:"22px",width:"22px",strokeWidth:2})})}),k=r=>(0,e.jsx)("div",{children:(0,e.jsx)(j,{type:"button","aria-label":r["aria-label"]??"close modal",onClick:r.onClose,children:(0,e.jsx)(l,{height:"16px",width:"16px",strokeWidth:2})})}),j=o.z.button`
  && {
    cursor: pointer;
    display: flex;
    opacity: 0.6;

    background-color: var(--privy-color-background-2);
    border-radius: var(--privy-border-radius-full);
    padding: 4px;

    > svg {
      margin: auto;
      color: var(--privy-color-foreground);
    }

    :hover {
      opacity: 1;
    }

    :disabled {
      cursor: default;
      opacity: 0.3;
    }

    :disabled:hover {
      opacity: 0.3;
    }
  }
`,C=(0,o.z)(j)`
  && {
    background-color: transparent;
  }
`,z=o.z.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--privy-color-foreground);
  }
`,S=o.z.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`,$=o.z.div`
  display: flex;
  justify-content: flex-end;
`,M=o.z.div`
  color: var(--privy-color-foreground);

  font-kerning: none;
  font-feature-settings: 'calt' off;
  /* text-xl/font-semiBold */
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; /* 160% */

  text-align: left;

  margin-left: 0.5rem;
`,T=o.z.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground);
`;r.s(["B",0,({variant:r="primary",size:o="lg",children:a,success:i,...n})=>{switch(r){case"secondary":return(0,e.jsx)(h,{size:o,...n,children:a});case"error":return(0,e.jsx)(h,{$warn:!0,size:o,...n,children:a});case"muted":return(0,e.jsx)(f,{size:o,...n,children:a});default:return(0,e.jsx)(u,{size:o,success:i,...n,children:a})}},"E",0,({children:r,onClick:o,disabled:i,isSubmitting:n,...t})=>(0,e.jsxs)(y,{$isSubmitting:n,onClick:o,disabled:i,...t,children:[(0,e.jsx)("span",{children:r}),(0,e.jsx)("span",{children:(0,e.jsx)(a.B,{})})]}),"M",0,({backFn:r,infoFn:o,onClose:a,title:i,eyebrow:n,closeable:t=!0,className:l})=>{let{closePrivyModal:d}=(0,s.u)(),u=(0,c.a)();return(0,e.jsxs)(z,{className:l,children:[(0,e.jsxs)(S,{children:[r&&(0,e.jsx)(x,{backFn:r}),n&&(0,e.jsx)(T,{children:n}),!n&&i&&(0,e.jsx)(M,{id:"privy-dialog-title",children:i}),(0,e.jsx)("div",{style:{height:24}}),o&&(0,e.jsx)(w,{infoFn:o})]}),(0,e.jsx)($,{children:!u.render.standalone&&t&&(0,e.jsx)(k,{onClose:a||(()=>d())})})]})},"P",0,u,"S",0,h,"b",0,({children:r,loading:o,disabled:i,...n})=>(0,e.jsx)(v,{disabled:i,...n,children:o?(0,e.jsx)(a.B,{color:"var(--privy-color-foreground-accent)"}):r}),"c",0,b,"d",0,f],772949)},967192,r=>{var e=r.i(60058);let o=e.z.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`;r.s(["S",0,o])},675539,r=>{var e=r.i(60058);let o=e.z.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`;r.s(["T",0,o])},601888,r=>{var e=r.i(704688),o=r.i(548503),a=r.i(42789),i=r.i(6674),n=r.i(60058),t=r.i(772949),l=r.i(487804),c=r.i(534054),s=r.i(564027),d=r.i(686508);let u=(0,n.z)(d.B)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,v=n.z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,p=n.z.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,h=n.z.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,f=(0,n.z)(c.L)`
  text-align: left;
  margin-bottom: 0.5rem;
`,g=(0,n.z)(l.E)`
  margin-top: 0.25rem;
`,m=(0,n.z)(t.S)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;r.s(["W",0,({errMsg:r,balance:n,address:t,className:l,title:c,showCopyButton:d=!1})=>{let[b,y]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(b){let r=setTimeout(()=>y(!1),3e3);return()=>clearTimeout(r)}},[b]),(0,e.jsxs)("div",{children:[c&&(0,e.jsx)(f,{children:c}),(0,e.jsx)(u,{className:l,$state:r?"error":void 0,children:(0,e.jsxs)(v,{children:[(0,e.jsxs)(p,{children:[(0,e.jsx)(s.A,{address:t,showCopyIcon:!1}),void 0!==n&&(0,e.jsx)(h,{children:n})]}),d&&(0,e.jsx)(m,{onClick:function(r){r.stopPropagation(),navigator.clipboard.writeText(t).then(()=>y(!0)).catch(console.error)},size:"sm",children:(0,e.jsxs)(e.Fragment,b?{children:["Copied",(0,e.jsx)(o.f,{size:14})]}:{children:["Copy",(0,e.jsx)(a.f,{size:14})]})})]})}),r&&(0,e.jsx)(g,{children:r})]})}])},709283,r=>{r.s(["O",0,"sdk_fiat_on_ramp_completed_with_status"])},334140,r=>{r.s(["g",0,function(r){switch(r){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}])},893129,r=>{var e=r.i(467907),o=r.i(492550),a=r.i(336664);let i=async({chain:r,address:i,appId:t,rpcConfig:l,erc20Address:c})=>{let s=(0,e.f)({chain:r,transport:(0,o.f)((0,a.a)(r,l,t))});return{balance:await s.readContract({address:c,abi:n,functionName:"balanceOf",args:[i]}).catch(()=>0n),chain:r}},n=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}];r.s(["g",0,i])},287028,459331,r=>{r.s(["A",0,"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL","D",0,{"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}},"J",0,["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],"L",0,1e9,"R",0,["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],"S",0,"11111111111111111111111111111111","T",0,"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA","a",0,"TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"],459331);let e=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2});r.s(["g",0,function(r,o){let a=parseFloat(r.toString())/1e9,i=e.format(o*a);return"$0.00"===i?"<$0.01":i}],287028)},459220,r=>{var e=r.i(459331);r.s(["g",0,function(r){let[o]=Object.entries(e.D[r]).find(([r,e])=>"USDC"===e.symbol)??[];return o}])},686508,r=>{var e=r.i(60058);let o=e.m`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${r=>"error"===r.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,a=e.z.div`
  ${o}
`;r.s(["B",0,a,"a",0,o])},286048,r=>{var e=r.i(287028);function o(r,e=6,a=!1,i=!1){let n=(parseFloat(r.toString())/1e9).toFixed(e).replace(/0+$/,"").replace(/\.$/,""),t=i?"":" SOL";return a?`${n}${t}`:`${"0"===n?"<0.001":n}${t}`}r.s(["a",0,function({amount:r,fee:a,tokenPrice:i,isUsdc:n}){let t=BigInt(Math.floor(parseFloat(r)*10**(n?6:9))),l=n?t:t+a;return{fundingAmountInBaseUnit:t,fundingAmountInUsd:i?(0,e.g)(t,i):void 0,totalPriceInUsd:i?(0,e.g)(l,i):void 0,totalPriceInNativeCurrency:o(l),feePriceInNativeCurrency:o(a),feePriceInUsd:i?(0,e.g)(a,i):void 0}},"g",0,o])},883019,r=>{var e=r.i(6674),o=r.i(467907),a=r.i(492550),i=r.i(336664),n=r.i(705390);r.s(["u",0,function({rpcConfig:r,appId:t,address:l,chain:c}){let{chains:s}=(0,n.u)(),[d,u]=(0,e.useState)(0n),[v,p]=(0,e.useState)(!1),h=(0,e.useMemo)(()=>{let e=c||s[0];if(e)return(0,o.f)({chain:c,transport:(0,a.f)((0,i.a)(e,r,t))})},[c,r,t]),f=(0,e.useCallback)(async()=>{if(!l||!h)return;p(!0);let r=await h.getBalance({address:l}).catch(console.error);return r?(u(r),p(!1),r):void 0},[h,l,u]);return(0,e.useEffect)(()=>{f().catch(console.error)},[]),{balance:d,isLoading:v,reloadBalance:f}}])},334554,(r,e,o)=>{var a={single_source_shortest_paths:function(r,e,o){var i,n,t,l,c,s,d,u={},v={};v[e]=0;var p=a.PriorityQueue.make();for(p.push(e,0);!p.empty();)for(t in n=(i=p.pop()).value,l=i.cost,c=r[n]||{})c.hasOwnProperty(t)&&(s=l+c[t],d=v[t],(void 0===v[t]||d>s)&&(v[t]=s,p.push(t,s),u[t]=n));if(void 0!==o&&void 0===v[o])throw Error(["Could not find a path from ",e," to ",o,"."].join(""));return u},extract_shortest_path_from_predecessor_list:function(r,e){for(var o=[],a=e;a;)o.push(a),r[a],a=r[a];return o.reverse(),o},find_path:function(r,e,o){var i=a.single_source_shortest_paths(r,e,o);return a.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(r){var e,o=a.PriorityQueue,i={};for(e in r=r||{},o)o.hasOwnProperty(e)&&(i[e]=o[e]);return i.queue=[],i.sorter=r.sorter||o.default_sorter,i},default_sorter:function(r,e){return r.cost-e.cost},push:function(r,e){this.queue.push({value:r,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=a},542786,r=>{var e=r.i(6674);let o=r=>{let e=r.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,e,o)=>o?o.toUpperCase():e.toLowerCase());return e.charAt(0).toUpperCase()+e.slice(1)},a=(...r)=>r.filter((r,e,o)=>!!r&&""!==r.trim()&&o.indexOf(r)===e).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,e.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:t,className:l="",children:c,iconNode:s,...d},u)=>(0,e.createElement)("svg",{ref:u,...i,width:o,height:o,stroke:r,strokeWidth:t?24*Number(n)/Number(o):n,className:a("lucide",l),...!c&&!(r=>{for(let e in r)if(e.startsWith("aria-")||"role"===e||"title"===e)return!0})(d)&&{"aria-hidden":"true"},...d},[...s.map(([r,o])=>(0,e.createElement)(r,o)),...Array.isArray(c)?c:[c]]));r.s(["f",0,(r,i)=>{let t=(0,e.forwardRef)(({className:t,...l},c)=>(0,e.createElement)(n,{ref:c,iconNode:i,className:a(`lucide-${o(r).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${r}`,t),...l}));return t.displayName=o(r),t}],542786)},548503,r=>{let e=(0,r.i(542786).f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);r.s(["f",0,e],548503)},42789,r=>{let e=(0,r.i(542786).f)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);r.s(["f",0,e],42789)}])})();