(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,739110,e=>{let t;function n(){return"u">typeof window}function i(e){return o(e)?(e.nodeName||"").toLowerCase():"#document"}function r(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function a(e){var t;return null==(t=(o(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function o(e){return!!n()&&(e instanceof Node||e instanceof r(e).Node)}function s(e){return!!n()&&(e instanceof Element||e instanceof r(e).Element)}function l(e){return!!n()&&(e instanceof HTMLElement||e instanceof r(e).HTMLElement)}function c(e){return!(!n()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof r(e).ShadowRoot)}function d(e){let{overflow:t,overflowX:n,overflowY:i,display:r}=m(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&"inline"!==r&&"contents"!==r}function u(e){try{if(e.matches(":popover-open"))return!0}catch(e){}try{return e.matches(":modal")}catch(e){return!1}}let h=/transform|translate|scale|rotate|perspective|filter/,p=/paint|layout|strict|content/,f=e=>!!e&&"none"!==e;function g(e){let t=s(e)?m(e):e;return f(t.transform)||f(t.translate)||f(t.scale)||f(t.rotate)||f(t.perspective)||!x()&&(f(t.backdropFilter)||f(t.filter))||h.test(t.willChange||"")||p.test(t.contain||"")}function x(){return null==t&&(t="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),t}function v(e){return/^(html|body|#document)$/.test(i(e))}function m(e){return r(e).getComputedStyle(e)}function y(e){if("html"===i(e))return e;let t=e.assignedSlot||e.parentNode||c(e)&&e.host||a(e);return c(t)?t.host:t}function w(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}e.s(["X",0,m,"f",0,function(e){let t=y(e);for(;l(t)&&!v(t);){if(g(t))return t;if(u(t))break;t=y(t)}return null},"I",0,a,"w",0,w,"A",0,i,"Q",0,function(e){return s(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}},"G",0,function e(t,n,i){var a;void 0===n&&(n=[]),void 0===i&&(i=!0);let o=function e(t){let n=y(t);return v(n)?(t.ownerDocument||t).body:l(n)&&d(n)?n:e(n)}(t),s=o===(null==(a=t.ownerDocument)?void 0:a.body),c=r(o);if(!s)return n.concat(o,e(o,[],i));{let t=w(c);return n.concat(c,c.visualViewport||[],d(o)?o:[],t&&i?e(t):[])}},"J",0,y,"K",0,r,"e",0,g,"m",0,s,"E",0,l,"Z",0,v,"t",0,o,"B",0,d,"R",0,c,"S",0,function(e){return/^(table|td|th)$/.test(i(e))},"D",0,u,"i",0,x])},469723,e=>{var t=e.i(6674);let n=t.forwardRef(function({title:e,titleId:n,...i},r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});e.s(["f",0,n])},390687,e=>{var t=e.i(6674);let n=t.forwardRef(function({title:e,titleId:n,...i},r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))});e.s(["f",0,n])},373945,e=>{var t=e.i(6674);let n=t.forwardRef(function({title:e,titleId:n,...i},r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},i),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))});e.s(["f",0,n])},75994,e=>{var t=e.i(704688),n=e.i(469723),i=e.i(6674),r=e.i(855141),a=e.i(586641),o=e.i(658698),s=e.i(76706),l=e.i(467907),c=e.i(492550),d=e.i(469972),u=e.i(880228),h=e.i(353124),p=e.i(879100),f=e.i(941177),g=e.i(817834),x=e.i(962130),v=e.i(731651),m=e.i(800307),y=e.i(918507),w=e.i(627814),C=e.i(705390),j=e.i(180126),b=e.i(639920),k=e.i(565094),S=e.i(8542),L=e.i(981048),F=e.i(330635),E=e.i(709283),I=e.i(705527),T=e.i(393918),z=e.i(183196),M=e.i(893129),A=e.i(152621),B=e.i(336664),N=e.i(901436);let P={component:()=>{let{rpcConfig:e,appId:P,closePrivyModal:V,createAnalyticsEvent:_}=(0,C.u)(),{navigate:$,setModalData:D,data:H}=(0,j.u)(),U=(0,m.a)(),{wallets:R}=(0,k.u)(),[O,W]=(0,i.useState)(!1),[q,G]=(0,i.useState)(0n),[Z,X]=(0,i.useState)(!1),[Y,K]=(0,i.useState)(null),[Q,J]=(0,i.useState)(null),[ee,et]=(0,i.useState)([]),[en,ei]=(0,i.useState)(0),[er,ea]=(0,i.useState)([]),[eo,es]=(0,i.useState)(!1),[el,ec]=(0,i.useState)(!1),[ed,eu]=(0,i.useState)(!1),[eh,ep]=(0,i.useState)(!1),[ef,eg]=(0,i.useState)(),[ex,ev]=(0,i.useState)();if(!H?.funding||"ethereum"!==H.funding.chainType)throw Error("Invalid funding data");let{erc20ContractInfo:em,chain:ey,connectedWallet:ew}=H.funding,eC=H.funding.address,ej=H.funding.erc20Address,[eb,ek]=(0,i.useState)(H.funding.amount);(0,i.useEffect)(()=>{ej&&!em&&K(Error("Unable to fetch token details"))},[]);let eS=!!ej&&!!em,eL=eS?BigInt(parseFloat(eb)*10**em.decimals):(0,r.f)(eb),eF=("ethereum"===ew?.type?ew:void 0)??R[0],eE=(0,w.e)(eF?.walletClientType||"unknown"),eI=eE?.name||"wallet",[eT,ez]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{if(!eF)return;let e=await eF.getEthereumProvider();ez((0,a.f)({account:eF.address,transport:(0,o.f)(e)}).extend(s.f))})().catch(console.error)},[eF]);let[eM,eA]=(0,i.useState)(0n);(0,i.useEffect)(()=>{(0,l.f)({chain:ey,transport:(0,c.f)((0,B.a)(ey,e,P))}).getBalance({address:eC}).then(eA).catch(console.error)},[]);let[eB,eN]=(0,i.useState)(0n);(0,i.useEffect)(()=>{eS&&(0,M.g)({chain:ey,address:eC,appId:P,rpcConfig:e,erc20Address:ej}).then(e=>eN(e.balance)).catch(console.error)},[]);let{tokenPrice:eP}=(0,b.u)(ey.id),[eV,e_]=(0,i.useState)({to:eC,chain:ey,value:eL,data:void 0});(0,i.useEffect)(()=>{(async()=>{let t,n;if(!eT||!eF||eo||ed)return;es(!0);let i=(0,l.f)({chain:eV.chain,transport:(0,c.f)((0,B.a)(eV.chain,e,P))});if(eS&&!eV.data)return await i.simulateContract({address:ej,chain:eV.chain,abi:S.E,functionName:"transfer",args:[eC,eL],account:eF.address}).catch(e=>{if("ContractFunctionZeroDataError"===e?.cause?.name||e?.message?.includes("returned no data"))return i.simulateContract({address:ej,chain:eV.chain,abi:S.a,functionName:"transfer",args:[eC,eL],account:eF.address}).catch(e=>{console.warn("Simulated token transfer failed with error, fetching bridge options.",e)});console.warn("Simulated token transfer failed with error, fetching bridge options.",e)})?(es(!1),void e_({to:ej,chain:eV.chain,data:(0,d.f)({abi:S.E,functionName:"transfer",args:[eC,eL]}),value:"0x0"})):(es(!1),void X(!0));try{t=await i.prepareTransactionRequest({account:eF.address,to:eV.to,chain:eV.chain,data:eV.data,value:BigInt(eV.value??0)})}catch(e){if(console.error(e),ee.length>1)J(e.shortMessage??"Something went wrong");else if(el&&0===ee.length)return void K(new y.P(`Wallet ${(0,A.c)(eF.address)} does not have enough funds.`,void 0,y.a.INSUFFICIENT_BALANCE))}if(!t)return es(!1),void X(!0);"eip1559"===t.type||"eip4844"===t.type||"eip7702"===t.type?void 0!==t.gasPrice&&delete t.gasPrice:("legacy"===t.type||"eip2930"===t.type)&&(void 0!==t.maxFeePerGas&&delete t.maxFeePerGas,void 0!==t.maxPriorityFeePerGas&&delete t.maxPriorityFeePerGas),es(!1),eu(!0),W(!0),G(t.gas);try{await eT.switchChain({id:eV.chain.id})}catch(e){await eT.addChain({chain:eV.chain}),await eT.switchChain({id:eV.chain.id})}try{n=await eT.sendTransaction(t)}catch(e){if(console.error(e),"TransactionExecutionError"===e.name)if(ee.length<1){let t=e.shortMessage;(e.shortMessage.includes("rejected the request")||e.details.includes("rejected the request"))&&(t="User rejected the request."),K(new y.P(t,void 0,y.a.TRANSACTION_FAILURE))}else J(e.shortMessage??"Something went wrong")}if(n){if(await eT.waitForTransactionReceipt({hash:n}),eu(!1),el){if(er.length>0){let[e,...t]=er;if(!e)return;return ea(t),void e_(e)}return eg(n),void ev("pending")}ep(!0),D((0,T.q)(H,"completed",n,eF?.walletClientType,eS,em,ey)),_({eventName:E.O,payload:{provider:"external",status:"success",txHash:n,address:eF.address,chainId:eV.chain.id,chainType:"ethereum",value:eV.value?(0,u.f)(BigInt(eV.value),em?.decimals??18):void 0,token:em?.symbol??ej??"ETH",destinationAddress:eC,destinationChainId:ey.id,destinationChainType:"ethereum",destinationValue:eL?(0,u.f)(eL,em?.decimals??18):void 0,destinationToken:em?.symbol??ej??ey.nativeCurrency.name}})}else eu(!1)})().catch(console.error)},[eT,eV]),(0,i.useEffect)(()=>{(async()=>{if(!Z||!eT||!eF)return;let t=(0,h.i)(U.chains).filter(e=>e.id!==ey.id&&!!e.testnet==!!ey.testnet);eS&&t.unshift(ey);let n=await (0,z.g)({chains:t,address:eF.address,appId:P,rpcConfig:e}),i=eS?n.filter(e=>e.balance>0n):n.filter(e=>e.balance>eL),r=eS&&n.every(e=>0n===e.balance);if(i.length<1)return void K(new y.P(r?`Wallet ${(0,A.c)(eF.address)} doesn't have enough funds to cover gas fees. Top up your wallet and try again.`:`Wallet ${(0,A.c)(eF.address)} does not have enough funds.`,void 0,y.a.INSUFFICIENT_BALANCE));i.sort((e,t)=>Number(eS?(t.erc20Balance??0n)-(e.erc20Balance??0n):t.balance-e.balance));let a=i.flatMap(e=>{let t=[{...e,isErc20Quote:!1,isTestnet:!!ey.testnet,input:(0,I.t)({appId:P,amount:eL.toString(),user:eF.address,recipient:eC,destinationChainId:ey.id,destinationCurrency:ej,originChainId:e.chain.id})}];return eS&&ej&&(e.erc20Balance??0n)>0n&&t.push({...e,isErc20Quote:!0,isTestnet:!!ey.testnet,input:(0,I.t)({appId:P,amount:eL.toString(),user:eF.address,recipient:eC,destinationChainId:ey.id,destinationCurrency:ej,originChainId:e.chain.id,originCurrency:e.erc20Address})}),t}),o=(await Promise.allSettled(a.map(async e=>({...e,quote:await (0,I.g)(e)})))).filter(e=>"fulfilled"===e.status).map(e=>e.value);if(o.length<1)return void K(new y.P(`Wallet ${(0,A.c)(eF.address)} does not have enough funds.`,void 0,y.a.INSUFFICIENT_BALANCE));let s=o.map(e=>({bridgeTx:(0,I.a)(e.quote),allTxSteps:(0,I.d)(e.quote),balance:e.balance,chain:e.chain,erc20Balance:e.erc20Balance,isErc20Quote:e.isErc20Quote})).filter(e=>!!e.bridgeTx);if(s.length>1)return void et(s);let l=s[0];if(!l)return void K(new y.P(`Wallet ${(0,A.c)(eF.address)} does not have enough funds.`,void 0,y.a.INSUFFICIENT_BALANCE));let[c,...d]=l.allTxSteps??[l.bridgeTx];c?(ec(!0),ea(d.map(e=>({...e,chain:l.chain}))),e_({data:c.data,to:c.to,value:c.value,chain:l.chain})):K(new y.P(`Wallet ${(0,A.c)(eF.address)} does not have enough funds.`,void 0,y.a.INSUFFICIENT_BALANCE))})().catch(console.error)},[Z]),(0,I.u)({transactionHash:ef,isTestnet:!!ey.testnet,bridgingStatus:ex,setBridgingStatus:ev,onSuccess({transactionHash:e}){ec(!1),ep(!0),D((0,T.q)(H,"completed",e,eF?.walletClientType,eS,em,ey)),_({eventName:E.O,payload:{provider:"external",status:"success",txHash:e,address:eF?.address,chainId:eV.chain.id,chainType:"ethereum",value:eV.value?(0,u.f)(BigInt(eV.value),em?.decimals??18):void 0,token:em?.symbol??ej??"ETH",destinationAddress:eC,destinationChainId:ey.id,destinationChainType:"ethereum",destinationValue:eL?(0,u.f)(eL,em?.decimals??18):void 0,destinationToken:em?.symbol??ej??ey.nativeCurrency.name}})},onFailure({error:e}){ec(!1),K(e)}}),(0,i.useEffect)(()=>{Y&&(D({funding:H?.funding,solanaFundingData:H?.solanaFundingData,sendTransaction:H?.sendTransaction,errorModalData:{error:Y,previousScreen:"TransferFromWalletScreen"}}),$("ErrorScreen",!1))},[Y]);let e$=!eS&&eP?(0,F.c)(eb??"0",eP):void 0,eD=eS?q:(0,F.s)([q,eL]),eH=eD&&eP?(0,F.a)(eD,eP):void 0,eU=eD?(0,F.g)(eD,H?.funding?.erc20Address?H?.funding?.erc20ContractInfo?.symbol||"ETH":H?.funding?.chain.nativeCurrency.symbol||"ETH"):void 0,eR=q&&eP?(0,F.a)(q,eP):void 0,eO=q?(0,F.g)(q,ey?.nativeCurrency?.symbol||"ETH"):void 0;if((0,i.useEffect)(()=>{if(!eh)return;let e=setTimeout(V,m.X);return()=>clearTimeout(e)},[eh]),eh)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.t,{}),(0,t.jsx)(p.b,{}),(0,t.jsxs)(p.c,{children:[(0,t.jsx)(n.f,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,t.jsx)(g.C,{title:"Success!",description:`You’ve successfully added ${eb} ${eS?em.symbol:ey.nativeCurrency.symbol} to your ${U.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,t.jsx)(p.R,{}),(0,t.jsx)(f.B,{})]});let eW=eS?`${(0,L.f)({amount:eB,decimals:em.decimals})}  ${em.symbol}`:(0,F.g)(eM,ey.nativeCurrency.symbol,3,!0),eq=ee[en];return ee.length>1&&eq?(0,t.jsx)(z.B,{displayName:eI,configuredFundingChain:ey,formattedBalance:eW,fundingAmount:eb,fundingCurrency:eS?em.symbol:ey.nativeCurrency.symbol,fundingAmountInUsd:e$,options:ee,selectedOption:eq,isPreparing:eo,isSubmitting:ed,addressToFund:eC,fundingWalletAddress:eF?.address||"",errorMessage:Q,onSubmit:()=>{if(H.funding?.amount===eb){let[e,...t]=eq.allTxSteps??[eq.bridgeTx];if(!e)return;return ec(!0),ea(t.map(e=>({...e,chain:eq.chain}))),void e_({to:e.to,data:e.data,value:e.value,chain:eq.chain})}(async function(){if(eF&&eq)try{let e=await (0,I.g)({isTestnet:!!ey.testnet,input:(0,I.t)({appId:P,amount:eL.toString(),user:eF.address,recipient:eC,destinationChainId:ey.id,destinationCurrency:ej,originChainId:eq.chain.id})}),[t,...n]=(0,I.d)(e);if(!t)throw Error("Invalid transaction request");ec(!0),ea(n.map(e=>({...e,chain:eq.chain}))),e_({data:t.data,to:t.to,value:t.value,chain:eq.chain})}catch(e){console.error(e),K(new y.P("Unable to fetch quotes for bridging",e,y.a.INSUFFICIENT_BALANCE))}})().catch(console.error)},onSelect:e=>{e!==en&&(J(null),ei(e))},onAmountChange:ek}):O&&q&&eF&&H?.funding?(0,t.jsx)(N.T,{walletClientType:eF?.walletClientType||"unknown",displayName:eI,addressToFund:eC,isBridging:el,isErc20Flow:eS,totalPriceInUsd:eH,totalPriceInNativeCurrency:eU,gasPriceInUsd:eR,gasPriceInNativeCurrency:eO,chainId:ey.id,chainName:ey.name}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.t,{}),(0,t.jsx)(v.N,{}),(0,t.jsx)("div",{style:{marginTop:"1rem"}}),(0,t.jsx)(f.B,{})]})}};e.s(["AwaitingExternalEthereumTransferScreen",0,P,"default",0,P])},761731,e=>{var t=e.i(704688),n=e.i(60058),i=e.i(83985);let r=n.z.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let t,i;"green"===e.$color&&(t="var(--privy-color-success-dark)",i="var(--privy-color-success-light)"),"red"===e.$color&&(t="var(--privy-color-error)",i="var(--privy-color-error-light)"),"gray"===e.$color&&(t="var(--privy-color-foreground-2)",i="var(--privy-color-background-2)");let r=n.q`
      from, to {
        background-color: ${i};
      }

      50% {
        background-color: rgba(${i}, 0.8);
      }
    `;return n.m`
      color: ${t};
      background-color: ${i};
      ${e.$isPulsing&&n.m`
        animation: ${r} 3s linear infinite;
      `};
    `}}

  ${i.L}
`;e.s(["C",0,({children:e,color:n,isLoading:i,isPulsing:a,...o})=>(0,t.jsx)(r,{$color:n,$isLoading:i,$isPulsing:a,...o,children:e})])},962130,e=>{var t=e.i(704688),n=e.i(180126),i=e.i(772949);e.s(["t",0,function({title:e}){let{currentScreen:r,navigateBack:a,navigate:o,data:s,setModalData:l}=(0,n.u)();return(0,t.jsx)(i.M,{title:e,backFn:"ManualTransferScreen"===r?a:r===s?.funding?.methodScreen?s.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:s?.funding?.methodScreen?()=>{let e=s.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:s?.solanaFundingData}),o(e.methodScreen)}:void 0})}])},541487,e=>{var t=e.i(704688),n=e.i(373945);e.s(["I",0,({icon:e,name:i})=>"string"==typeof e?(0,t.jsx)("img",{alt:`${i||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):void 0===e?(0,t.jsx)(n.f,{style:{height:24,width:24}}):e?(0,t.jsx)(e,{style:{height:24,width:24}}):null])},919304,e=>{var t=e.i(704688),n=e.i(756099),i=e.i(290360);let r=(0,e.i(542786).f)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);var a=e.i(6674),o=e.i(60058),s=e.i(852560),l=e.i(610174),c=e.i(918507),d=e.i(705390),u=e.i(180126),h=e.i(800307),p=e.i(995210),f=e.i(299820);let g=({passkeys:e,name:r,isLoading:a,errorReason:o,success:s,expanded:l,onLinkPasskey:c,onUnlinkPasskey:d,onExpand:u,onBack:h,onClose:p})=>s?(0,t.jsx)(f.S,{title:"Passkeys updated",icon:n.f,iconVariant:"success",primaryCta:{label:"Done",onClick:p},onClose:p,watermark:!0}):l?(0,t.jsx)(f.S,{icon:i.f,title:"Your passkeys",onBack:h,onClose:p,watermark:!0,children:(0,t.jsx)(w,{passkeys:e,expanded:l,onUnlink:d,onExpand:u})}):(0,t.jsxs)(f.S,{icon:i.f,title:"Set up passkey verification",subtitle:"Verify with passkey",primaryCta:{label:"Add new passkey",onClick:c,loading:a},onClose:p,watermark:!0,helpText:o||void 0,children:[0===e.length?(0,t.jsx)(C,{}):(0,t.jsx)(x,{children:(0,t.jsx)(w,{passkeys:e,expanded:l,onUnlink:d,onExpand:u})}),r?(0,t.jsxs)(v,{children:[(0,t.jsx)(m,{children:"New Passkey Name"}),(0,t.jsx)(y,{children:r})]}):null]}),x=o.z.div`
  margin-bottom: 0.75rem;
`,v=o.z.div`
  margin-top: 0.25rem;
`,m=o.z.div`
  color: var(--privy-color-foreground-2);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,y=o.z.div`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  line-height: 1.25rem;
`,w=({passkeys:e,expanded:n,onUnlink:i,onExpand:o})=>{let[l,c]=(0,a.useState)([]),d=n?e.length:2;return(0,t.jsxs)("div",{children:[(0,t.jsx)(F,{children:"Your passkeys"}),(0,t.jsxs)(L,{children:[e.slice(0,d).map(e=>(0,t.jsxs)(T,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(E,{children:e.authenticatorName?e.createdWithBrowser?`${e.authenticatorName} on ${e.createdWithBrowser}`:e.authenticatorName:e.createdWithBrowser?e.createdWithOs?`${e.createdWithBrowser} on ${e.createdWithOs}`:`${e.createdWithBrowser}`:"Unknown device"}),(0,t.jsxs)(I,{children:["Last used:"," ",(e.latestVerifiedAt??e.firstVerifiedAt)?.toLocaleString()??"N/A"]})]}),(0,t.jsx)(M,{disabled:l.includes(e.credentialId),onClick:()=>(async e=>{c(t=>t.concat([e])),await i(e),c(t=>t.filter(t=>t!==e))})(e.credentialId),children:l.includes(e.credentialId)?(0,t.jsx)(s.B,{}):(0,t.jsx)(r,{size:16})})]},e.credentialId)),e.length>2&&!n&&(0,t.jsx)(S,{onClick:o,children:"View all"})]})]})},C=()=>(0,t.jsxs)(l.T,{style:{color:"var(--privy-color-foreground)"},children:[(0,t.jsx)(l.a,{children:"Verify with Touch ID, Face ID, PIN, or hardware key"}),(0,t.jsx)(l.a,{children:"Takes seconds to set up and use"}),(0,t.jsx)(l.a,{children:"Use your passkey to verify transactions and login to your account"})]}),j={component:()=>{let{user:e}=(0,h.u)(),{unlink:n}=(0,p.l)(),{linkWithPasskey:i,closePrivyModal:r}=(0,d.u)(),{data:o}=(0,u.u)(),s=e?.linkedAccounts.filter(e=>"passkey"===e.type),[l,f]=(0,a.useState)(!1),[x,v]=(0,a.useState)(""),[m,y]=(0,a.useState)(!1),[w,C]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{0===s.length&&C(!1)},[s.length]),(0,t.jsx)(g,{passkeys:s,name:o?.passkeyAuthModalData?.name,isLoading:l,errorReason:x,success:m,expanded:w,onLinkPasskey:()=>{f(!0),i({name:o?.passkeyAuthModalData?.name}).then(()=>y(!0)).catch(e=>{if(e instanceof c.b){if(e.privyErrorCode===c.a.CANNOT_LINK_MORE_OF_TYPE)return void v("Cannot link more passkeys to account.");if(e.privyErrorCode===c.a.PASSKEY_NOT_ALLOWED)return void v("Passkey request timed out or rejected by user.")}v("Unknown error occurred.")}).finally(()=>{f(!1)})},onUnlinkPasskey:async e=>(f(!0),await n({credentialId:e}).then(()=>y(!0)).catch(e=>{e instanceof c.b&&e.privyErrorCode===c.a.MISSING_MFA_CREDENTIALS?v("Cannot unlink a passkey enrolled in MFA"):v("Unknown error occurred.")}).finally(()=>{f(!1)})),onExpand:()=>C(!0),onBack:()=>C(!1),onClose:()=>r()})}},b=o.z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`,k=o.m`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,S=o.z.button`
  ${k}
`,L=o.z.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0 0;
  flex-grow: 1;
  width: 100%;
`,F=o.z.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`,E=o.z.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,I=o.z.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,T=o.z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid var(--privy-color-border-default) !important;
  width: 100%;
  height: 5em;
`,z=o.m`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,M=o.z.button`
  ${z}
`;e.s(["DoubleIconWrapper",0,b,"LinkButton",0,S,"LinkPasskeyScreen",0,j,"LinkPasskeyView",0,g,"default",0,j],919304)},83985,e=>{var t=e.i(60058);let n=t.q`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,i=t.m`
  ${e=>e.$isLoading?t.m`
          width: 35%;
          animation: ${n} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",0,i])},346454,e=>{var t=e.i(60058);let n=t.z.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,i=t.z.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`;e.s(["R",0,i,"a",0,n])},817834,e=>{var t=e.i(704688),n=e.i(60058);let i=({title:e,description:n,children:i,...a})=>(0,t.jsx)(r,{...a,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:e}),"string"==typeof n?(0,t.jsx)("p",{children:n}):n,i]})});(0,n.z)(i)`
  margin-bottom: 24px;
`;let r=n.z.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,a=(0,n.z)(r)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;e.s(["C",0,({title:e,description:n,icon:i,children:r,...o})=>(0,t.jsxs)(a,{...o,children:[i||null,(0,t.jsx)("h3",{children:e}),n&&"string"==typeof n?(0,t.jsx)("p",{children:n}):n,r]}),"S",0,i])},610174,e=>{var t=e.i(704688),n=e.i(555470),i=e.i(548503),r=e.i(6674),a=e.i(60058);let o=a.z.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;a.z.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;let s=a.z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg)";case"error":return"var(--privy-color-error-bg)";default:return"var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,l=a.z.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`;e.s(["T",0,o,"a",0,({children:e,variant:a="default",icon:o})=>{let c=()=>{switch(a){case"success":return"var(--privy-color-icon-success)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}};return(0,t.jsxs)(l,{children:[(0,t.jsx)(s,{$variant:a,"data-variant":a,children:(()=>{if(o)return r.default.isValidElement(o)?r.default.cloneElement(o,{stroke:c(),strokeWidth:2}):o;switch(a){case"success":default:return(0,t.jsx)(i.f,{size:12,stroke:c(),strokeWidth:3});case"error":return(0,t.jsx)(n.X,{size:12,stroke:c(),strokeWidth:3})}})()}),e]})}])},901436,324051,e=>{var t=e.i(704688),n=e.i(60058),i=e.i(879100),r=e.i(941177),a=e.i(817834),o=e.i(962130),s=e.i(541487),l=e.i(731651),c=e.i(346454),d=e.i(694231),u=e.i(564027),h=e.i(390687),p=e.i(353124);let f=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 397.7 311.7",enableBackground:"new 0 0 397.7 311.7",xmlSpace:"preserve",...e,children:[(0,t.jsxs)("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"360.8791",y1:"351.4553",x2:"141.213",y2:"-69.2936",gradientTransform:"matrix(1 0 0 -1 0 314)",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#00FFA3"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,t.jsx)("path",{d:"M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z",fill:"url(#SVGID_1_)"}),(0,t.jsxs)("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:"264.8291",y1:"401.6014",x2:"45.163",y2:"-19.1475",gradientTransform:"matrix(1 0 0 -1 0 314)",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#00FFA3"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,t.jsx)("path",{d:"M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z",fill:"url(#SVGID_2_)"}),(0,t.jsxs)("linearGradient",{id:"SVGID_3_",gradientUnits:"userSpaceOnUse",x1:"312.5484",y1:"376.688",x2:"92.8822",y2:"-44.061",gradientTransform:"matrix(1 0 0 -1 0 314)",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#00FFA3"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,t.jsx)("path",{d:"M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4  c5.8,0,8.7-7,4.6-11.1L333.1,120.1z",fill:"url(#SVGID_3_)"})]}),g={[p.g.id]:e=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 2500 2500",xmlSpace:"preserve",...e,children:(0,t.jsx)("g",{id:"Layer_x0020_1",children:(0,t.jsxs)("g",{id:"_2405588477232",children:[(0,t.jsx)("rect",{fill:"none",width:"2500",height:"2500"}),(0,t.jsx)("g",{children:(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{fill:"#213147",d:"M226,760v980c0,63,33,120,88,152l849,490c54,31,121,31,175,0l849-490c54-31,88-89,88-152V760      c0-63-33-120-88-152l-849-490c-54-31-121-31-175,0L314,608c-54,31-87,89-87,152H226z"}),(0,t.jsx)("g",{children:(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#12AAFF",d:"M1435,1440l-121,332c-3,9-3,19,0,29l208,571l241-139l-289-793C1467,1422,1442,1422,1435,1440z"})}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#12AAFF",d:"M1678,882c-7-18-32-18-39,0l-121,332c-3,9-3,19,0,29l341,935l241-139L1678,883V882z"})})]})}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#9DCCED",d:"M1250,155c6,0,12,2,17,5l918,530c11,6,17,18,17,30v1060c0,12-7,24-17,30l-918,530c-5,3-11,5-17,5       s-12-2-17-5l-918-530c-11-6-17-18-17-30V719c0-12,7-24,17-30l918-530c5-3,11-5,17-5l0,0V155z M1250,0c-33,0-65,8-95,25L237,555       c-59,34-95,96-95,164v1060c0,68,36,130,95,164l918,530c29,17,62,25,95,25s65-8,95-25l918-530c59-34,95-96,95-164V719       c0-68-36-130-95-164L1344,25c-29-17-62-25-95-25l0,0H1250z"})}),(0,t.jsx)("polygon",{fill:"#213147",points:"642,2179 727,1947 897,2088 738,2234     "}),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{fill:"#FFFFFF",d:"M1172,644H939c-17,0-33,11-39,27L401,2039l241,139l550-1507c5-14-5-28-19-28L1172,644z"}),(0,t.jsx)("path",{fill:"#FFFFFF",d:"M1580,644h-233c-17,0-33,11-39,27L738,2233l241,139l620-1701c5-14-5-28-19-28V644z"})]})]})})]})})}),[p.M.id]:e=>(0,t.jsxs)("svg",{width:"1503",height:"1504",viewBox:"0 0 1503 1504",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("rect",{x:"287",y:"258",width:"928",height:"844",fill:"white"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z",fill:"#E84142"})]}),[p.j.id]:e=>(0,t.jsx)("svg",{width:"146",height:"146",viewBox:"0 0 1280 1280",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{d:"M0,101.12c0-34.64,0-51.95,6.53-65.28,6.25-12.76,16.56-23.07,29.32-29.32C49.17,0,66.48,0,101.12,0h1077.76c34.63,0,51.96,0,65.28,6.53,12.75,6.25,23.06,16.56,29.32,29.32,6.52,13.32,6.52,30.64,6.52,65.28v1077.76c0,34.63,0,51.96-6.52,65.28-6.26,12.75-16.57,23.06-29.32,29.32-13.32,6.52-30.65,6.52-65.28,6.52H101.12c-34.64,0-51.95,0-65.28-6.52-12.76-6.26-23.07-16.57-29.32-29.32-6.53-13.32-6.53-30.65-6.53-65.28V101.12Z",fill:"#0000FF"})}),[p.$.id]:e=>(0,t.jsxs)("svg",{fill:"none",height:"400",viewBox:"0 0 400 400",width:"400",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("path",{d:"m0 0h400v400h-400z",fill:"#fcff52"}),(0,t.jsx)("path",{d:"m300 100h-200v200h199.996v-69.813h-33.191c-11.442 25.468-37.194 43.206-66.665 43.206-40.63 0-73.533-33.187-73.533-73.533s32.903-73.249 73.533-73.249c30.043 0 55.795 18.313 67.24 44.349h32.62z",fill:"#000"})]}),[p.R.id]:e=>(0,t.jsxs)("svg",{width:"200",height:"208",viewBox:"0 0 200 208",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("rect",{width:"199.4",height:"207.623",fill:"#121212"}),(0,t.jsxs)("g",{"clip-path":"url(#clip0_2303_643)",children:[(0,t.jsx)("path",{d:"M132.369 155.99H49.7001V68.8854H68.6148V139.109H132.369V155.981V155.99Z",fill:"white"}),(0,t.jsx)("path",{d:"M132.369 85.7575C141.687 85.7575 149.241 78.2036 149.241 68.8855C149.241 59.5673 141.687 52.0134 132.369 52.0134C123.05 52.0134 115.497 59.5673 115.497 68.8855C115.497 78.2036 123.05 85.7575 132.369 85.7575Z",fill:"white"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2303_643",children:(0,t.jsx)("rect",{width:"99.5407",height:"103.977",fill:"white",transform:"translate(49.7001 52.0134)"})})})]}),[p.q.id]:e=>(0,t.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 327.5 533.3",enableBackground:"new 0 0 327.5 533.3;",xmlSpace:"preserve",...e,children:[(0,t.jsx)("path",{fill:"#8492B2",d:"M163.7,197.2V0L0,271.6L163.7,197.2z"}),(0,t.jsx)("path",{fill:"#62688F",d:"M163.7,368.4V197.2L0,271.6L163.7,368.4z M163.7,197.2l163.7,74.4L163.7,0V197.2z"}),(0,t.jsx)("path",{fill:"#454A75",d:"M163.7,197.2v171.2l163.7-96.8L163.7,197.2z"}),(0,t.jsx)("path",{fill:"#8492B2",d:"M163.7,399.4L0,302.7l163.7,230.7V399.4z"}),(0,t.jsx)("path",{fill:"#62688F",d:"M327.5,302.7l-163.8,96.7v134L327.5,302.7z"})]}),[p.S.id]:e=>(0,t.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("circle",{cx:"250",cy:"250",r:"250",fill:"#FF0420"}),(0,t.jsx)("path",{d:"M177.133 316.446C162.247 316.446 150.051 312.943 140.544 305.938C131.162 298.808 126.471 288.676 126.471 275.541C126.471 272.789 126.784 269.411 127.409 265.408C129.036 256.402 131.35 245.581 134.352 232.947C142.858 198.547 164.812 181.347 200.213 181.347C209.845 181.347 218.476 182.973 226.107 186.225C233.738 189.352 239.742 194.106 244.12 200.486C248.498 206.74 250.688 214.246 250.688 223.002C250.688 225.629 250.375 228.944 249.749 232.947C247.873 244.08 245.621 254.901 242.994 265.408C238.616 282.546 231.048 295.368 220.29 303.874C209.532 312.255 195.147 316.446 177.133 316.446ZM179.76 289.426C186.766 289.426 192.707 287.362 197.586 283.234C202.59 279.106 206.155 272.789 208.281 264.283C211.158 252.524 213.348 242.266 214.849 233.51C215.349 230.883 215.599 228.194 215.599 225.441C215.599 214.058 209.657 208.366 197.774 208.366C190.768 208.366 184.764 210.43 179.76 214.558C174.882 218.687 171.379 225.004 169.253 233.51C167.001 241.891 164.749 252.149 162.498 264.283C161.997 266.784 161.747 269.411 161.747 272.163C161.747 283.672 167.752 289.426 179.76 289.426Z",fill:"white"}),(0,t.jsx)("path",{d:"M259.303 314.57C257.927 314.57 256.863 314.132 256.113 313.256C255.487 312.255 255.3 311.13 255.55 309.879L281.444 187.914C281.694 186.538 282.382 185.412 283.508 184.536C284.634 183.661 285.822 183.223 287.073 183.223H336.985C350.87 183.223 362.003 186.1 370.384 191.854C378.891 197.609 383.144 205.927 383.144 216.81C383.144 219.937 382.769 223.19 382.018 226.567C378.891 240.953 372.574 251.586 363.067 258.466C353.685 265.346 340.8 268.786 324.413 268.786H299.082L290.451 309.879C290.2 311.255 289.512 312.38 288.387 313.256C287.261 314.132 286.072 314.57 284.822 314.57H259.303ZM325.727 242.892C330.98 242.892 335.546 241.453 339.424 238.576C343.427 235.699 346.054 231.571 347.305 226.192C347.68 224.065 347.868 222.189 347.868 220.563C347.868 216.935 346.805 214.183 344.678 212.307C342.551 210.305 338.924 209.305 333.795 209.305H311.278L304.148 242.892H325.727Z",fill:"white"})]}),[p.y.id]:e=>(0,t.jsxs)("svg",{width:"360",height:"360",viewBox:"0 0 360 360",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("rect",{width:"360",height:"360",rx:"180",fill:"#6C00F6"}),(0,t.jsx)("path",{d:"M157.743 154.241L141.052 144.58L90.9766 173.561V231.519L141.052 260.5L191.13 231.519V141.359L218.948 125.26L246.77 141.359V173.561L218.948 189.66L202.257 180.002V205.759L218.948 215.42L269.024 186.439V128.481L218.948 99.5L168.873 128.481V218.641L141.052 234.74L113.233 218.641V186.439L141.052 170.34L157.743 179.998V154.241Z",fill:"white"})]}),[p.l.id]:e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",...e,children:[(0,t.jsx)("g",{clipPath:"url(#clip0)",children:(0,t.jsx)("g",{clipPath:"url(#clip1)",children:(0,t.jsx)("path",{d:"M14.9188 29.8373C6.67944 29.8373 0.00012207 23.1581 0.00012207 14.9187C0.00012207 6.67931 6.67944 0 14.9188 0C23.1581 0 29.8373 6.67931 29.8373 14.9187C29.8373 23.1581 23.1581 29.8373 14.9188 29.8373Z",fill:"url(#paint0)"})})}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("radialGradient",{id:"paint0",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(21.6921 8.02215) rotate(180) scale(25.2008)",children:[(0,t.jsx)("stop",{offset:"0.00682297",stopColor:"#F2CEFE"}),(0,t.jsx)("stop",{offset:"0.1913",stopColor:"#AFBAF1"}),(0,t.jsx)("stop",{offset:"0.4982",stopColor:"#4281D3"}),(0,t.jsx)("stop",{offset:"0.666667",stopColor:"#2E427D"}),(0,t.jsx)("stop",{offset:"0.822917",stopColor:"#230101"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#8F6B40"})]}),(0,t.jsx)("clipPath",{id:"clip0",children:(0,t.jsx)("rect",{width:"30",height:"30",fill:"white"})}),(0,t.jsx)("clipPath",{id:"clip1",children:(0,t.jsx)("rect",{width:"30",height:"30",fill:"white"})})]})]})},x=({chainId:e,...n})=>{if("solana"===e)return(0,t.jsx)(f,{...n});let i=g[e];return(0,t.jsx)(i||h.f,{...n})};e.s(["N",0,x],324051);var v=e.i(627814);let m=n.z.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;e.s(["T",0,({walletClientType:e,displayName:n,addressToFund:h,chainId:p,chainName:f,isBridging:g,isErc20Flow:y,totalPriceInNativeCurrency:w,totalPriceInUsd:C,gasPriceInNativeCurrency:j,gasPriceInUsd:b})=>{let k=(0,v.e)(e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.t,{}),(0,t.jsx)(l.N,{centerIcon:(0,t.jsx)(s.I,{icon:k?.image_url?.md,name:e})}),(0,t.jsx)(a.C,{style:{marginTop:"8px",marginBottom:"12px"},title:`${g?"Bridging":"Confirming"} with ${n}`}),!g&&!y&&(0,t.jsxs)(c.a,{children:[(0,t.jsxs)(c.R,{children:[(0,t.jsx)(d.L,{children:"Total"}),(0,t.jsx)(d.V,{children:C||w})]}),(0,t.jsxs)(c.R,{children:[(0,t.jsx)(d.L,{children:"To"}),(0,t.jsx)(d.V,{children:(0,t.jsx)(u.A,{address:h,showCopyIcon:!1})})]}),(0,t.jsxs)(c.R,{children:[(0,t.jsx)(d.L,{children:"Network"}),(0,t.jsx)(d.V,{children:(0,t.jsxs)(m,{children:[(0,t.jsx)(x,{chainId:p,height:16,width:16})," ",f]})})]}),j&&(0,t.jsxs)(c.R,{children:[(0,t.jsx)(d.L,{children:"Estimated fee"}),(0,t.jsx)(d.V,{children:b||j})]})]}),(0,t.jsx)(i.d,{height:24}),(0,t.jsx)(r.B,{})]})}],901436)},694231,e=>{var t=e.i(60058),n=e.i(83985);let i=t.z.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,r=(0,t.z)(i)`
  color: var(--privy-color-accent);
`,a=t.z.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${n.L}
`;e.s(["L",0,i,"V",0,a,"a",0,r])},709283,e=>{e.s(["O",0,"sdk_fiat_on_ramp_completed_with_status"])},334140,e=>{e.s(["g",0,function(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}])},893129,e=>{var t=e.i(467907),n=e.i(492550),i=e.i(336664);let r=async({chain:e,address:r,appId:o,rpcConfig:s,erc20Address:l})=>{let c=(0,t.f)({chain:e,transport:(0,n.f)((0,i.a)(e,s,o))});return{balance:await c.readContract({address:l,abi:a,functionName:"balanceOf",args:[r]}).catch(()=>0n),chain:e}},a=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}];e.s(["g",0,r])},798201,e=>{var t=e.i(60058),n=e.i(772949),i=e.i(919304);let r=t.z.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,a=t.z.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,o=t.z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,s=t.z.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;t.z.div`
  font-size: 42px !important;
`;let l=t.z.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,c=(0,t.z)(l)`
  && {
    font-size: 42px;
  }
`;t.z.button`
  cursor: pointer;
  padding-left: 4px;
`;let d=t.z.div`
  font-size: 18px;
`,u=t.z.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  /* we need this container to maintain a static height if there's no content */
  height: 20px;
`;t.z.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin: auto;
  }
`,(0,t.z)(i.LinkButton)`
  margin-top: 16px;
`;let h=t.q`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,t.z)(n.c)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${h} 0.3s ease-in-out;
`;let p=t.z.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;e.s(["F",0,o,"I",0,a,"a",0,s,"b",0,l,"c",0,d,"d",0,u,"e",0,r,"f",0,p,"g",0,c])},8542,e=>{e.s(["E",0,[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],"a",0,[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]])},756099,e=>{let t=(0,e.i(542786).f)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);e.s(["f",0,t],756099)},290360,e=>{let t=(0,e.i(542786).f)("fingerprint-pattern",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);e.s(["f",0,t],290360)},555470,e=>{let t=(0,e.i(542786).f)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",0,t],555470)},855141,e=>{var t=e.i(216216);e.s(["f",0,function(e,n="wei"){return t.L(e,n)}])}])})();