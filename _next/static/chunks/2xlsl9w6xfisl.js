(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,565963,e=>{"use strict";e.i(501719);var t=e.i(955747),o=e.i(763009);e.i(435063);var i=e.i(150681),a=e.i(570111);e.i(80998);var r=e.i(755372),n=e.i(190895),s=e.i(569905),c=e.i(692959),l=e.i(984607),d=e.i(293096),u=e.i(2282),p=e.i(347257),w=e.i(764575),h=e.i(249211),m=e.i(995078);let f={isUnsupportedChainView:()=>"UnsupportedChain"===h.f.state.view||"SwitchNetwork"===h.f.state.view&&h.f.state.history.includes("UnsupportedChain"),async safeClose(){this.isUnsupportedChainView()||await m.f.isSIWXCloseDisabled()?p.f.shake():(("DataCapture"===h.f.state.view||"DataCaptureOtpConfirm"===h.f.state.view)&&w.f.disconnect(),p.f.close())}};var g=e.i(433452),v=e.i(997761),b=e.i(471933),y=e.i(236801),k=e.i(528135),x=e.i(393496),T=e.i(406768),S=e.i(925189),C=e.i(640445),P=e.i(702271);let $={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){let i=$.getGasPriceInEther(t,o);return k.f.bigNumber(e).times(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){let a=k.f.bigNumber(e).times(t),r=k.f.bigNumber(i).times(o);return a.minus(r).div(a).times(100).toNumber()},getMaxSlippage(e,t){let o=k.f.bigNumber(e).div(100);return k.f.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>k.f.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas:(e,t)=>!!k.f.bigNumber(e).eq(0)||k.f.bigNumber(k.f.bigNumber(t||"0")).gt(e),isInsufficientSourceTokenForSwap(e,t,o){let i=o?.find(e=>e.address===t)?.quantity?.numeric;return k.f.bigNumber(i||"0").lt(e)}};var A=e.i(10172),I=e.i(252157),E=e.i(136391),N=e.i(439710);let W={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:C.W.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},R=(0,b.s)({...W}),O={state:R,subscribe:e=>(0,b.i)(R,()=>e(R)),subscribeKey:(e,t)=>(0,y.T)(R,e,t),getParams(){let e=l.f.state.activeChain,t=l.f.getAccountData(e)?.caipAddress??l.f.state.activeCaipAddress,o=u.f.getPlainAddress(t),i=(0,S.f)(),a=d.f.getConnectorId(l.f.state.activeChain);if(!o)throw Error("No address found to swap the tokens from.");let r=!R.toToken?.address||!R.toToken?.decimals,s=!R.sourceToken?.address||!R.sourceToken?.decimals||!k.f.bigNumber(R.sourceTokenAmount).gt(0),c=!R.sourceTokenAmount;return{networkAddress:i,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:R.sourceToken?.address,toTokenAddress:R.toToken?.address,toTokenAmount:R.toTokenAmount,toTokenDecimals:R.toToken?.decimals,sourceTokenAmount:R.sourceTokenAmount,sourceTokenDecimals:R.sourceToken?.decimals,invalidToToken:r,invalidSourceToken:s,invalidSourceTokenAmount:c,availableToSwap:t&&!r&&!s&&!c,isAuthConnector:a===n.f.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){R.sourceToken=e,R.sourceTokenAmount="",R.sourceTokenPriceInUSD=0;return}R.sourceToken=e,await D.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){R.sourceTokenAmount=e},async setToToken(e){if(!e){R.toToken=e,R.toTokenAmount="",R.toTokenPriceInUSD=0;return}R.toToken=e,await D.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){R.toTokenAmount=e?k.f.toFixed(e,6):""},async setTokenPrice(e,t){let o=R.tokensPriceMap[e]||0;o||(R.loadingPrices=!0,o=await D.getAddressPrice(e)),"sourceToken"===t?R.sourceTokenPriceInUSD=o:"toToken"===t&&(R.toTokenPriceInUSD=o),R.loadingPrices&&(R.loadingPrices=!1),D.getParams().availableToSwap&&!R.switchingTokens&&D.swapTokens()},async switchTokens(){if(!R.initializing&&R.initialized&&!R.switchingTokens){R.switchingTokens=!0;try{let e=R.toToken?{...R.toToken}:void 0,t=R.sourceToken?{...R.sourceToken}:void 0,o=e&&""===R.toTokenAmount?"1":R.toTokenAmount;D.setSourceTokenAmount(o),D.setToTokenAmount(""),await D.setSourceToken(e),await D.setToToken(t),R.switchingTokens=!1,D.swapTokens()}catch(e){throw R.switchingTokens=!1,e}}},resetState(){R.myTokensWithBalance=W.myTokensWithBalance,R.tokensPriceMap=W.tokensPriceMap,R.initialized=W.initialized,R.initializing=W.initializing,R.switchingTokens=W.switchingTokens,R.sourceToken=W.sourceToken,R.sourceTokenAmount=W.sourceTokenAmount,R.sourceTokenPriceInUSD=W.sourceTokenPriceInUSD,R.toToken=W.toToken,R.toTokenAmount=W.toTokenAmount,R.toTokenPriceInUSD=W.toTokenPriceInUSD,R.networkPrice=W.networkPrice,R.networkTokenSymbol=W.networkTokenSymbol,R.networkBalanceInUSD=W.networkBalanceInUSD,R.inputError=W.inputError},resetValues(){let{networkAddress:e}=D.getParams(),t=R.tokens?.find(t=>t.address===e);D.setSourceToken(t),D.setToToken(void 0)},getApprovalLoadingState:()=>R.loadingApprovalTransaction,clearError(){R.transactionError=void 0},async initializeState(){if(!R.initializing){if(R.initializing=!0,!R.initialized)try{await D.fetchTokens(),R.initialized=!0}catch(e){R.initialized=!1,v.f.showError("Failed to initialize swap"),h.f.goBack()}R.initializing=!1}},async fetchTokens(){let{networkAddress:e}=D.getParams();await D.getNetworkTokenPrice(),await D.getMyTokensWithBalance();let t=R.myTokensWithBalance?.find(t=>t.address===e);t&&(R.networkTokenSymbol=t.symbol,D.setSourceToken(t),D.setSourceTokenAmount("0"))},async getTokenList(){let e=l.f.state.activeCaipNetwork?.caipNetworkId;if(R.caipNetworkId!==e||!R.tokens)try{R.tokensLoading=!0;let t=await P.f.getTokenList(e);R.tokens=t,R.caipNetworkId=e,R.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:+(e.symbol>t.symbol)),R.suggestedTokens=t.filter(e=>!!C.W.SWAP_SUGGESTED_TOKENS.includes(e.symbol))}catch(e){R.tokens=[],R.popularTokens=[],R.suggestedTokens=[]}finally{R.tokensLoading=!1}},async getAddressPrice(e){let t=R.tokensPriceMap[e];if(t)return t;let o=await E.f.fetchTokenPrice({addresses:[e]}),i=o?.fungibles||[],a=[...R.tokens||[],...R.myTokensWithBalance||[]],r=a?.find(t=>t.address===e)?.symbol,n=parseFloat((i.find(e=>e.symbol.toLowerCase()===r?.toLowerCase())?.price||0).toString());return R.tokensPriceMap[e]=n,n},async getNetworkTokenPrice(){let{networkAddress:e}=D.getParams(),t=await E.f.fetchTokenPrice({addresses:[e]}).catch(()=>(v.f.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],i=o?.price.toString()||"0";R.tokensPriceMap[e]=parseFloat(i),R.networkTokenSymbol=o?.symbol||"",R.networkPrice=i},async getMyTokensWithBalance(e){let t=await T.f.getMyTokensWithBalance(e),o=P.f.mapBalancesToSwapTokens(t);o&&(await D.getInitialGasPrice(),D.setBalances(o))},setBalances(e){let{networkAddress:t}=D.getParams(),o=l.f.state.activeCaipNetwork;if(!o)return;let i=e.find(e=>e.address===t);e.forEach(e=>{R.tokensPriceMap[e.address]=e.price||0}),R.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),R.networkBalanceInUSD=i?k.f.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){let e=await P.f.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(l.f.state?.activeCaipNetwork?.chainNamespace){case n.f.CHAIN.SOLANA:return R.gasFee=e.standard??"0",R.gasPriceInUSD=k.f.multiply(e.standard,R.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(R.gasFee),gasPriceInUSD:Number(R.gasPriceInUSD)};case n.f.CHAIN.EVM:default:let t=e.standard??"0",o=BigInt(t),i=BigInt(15e4),a=$.getGasPriceInUSD(R.networkPrice,i,o);return R.gasFee=t,R.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){let e=l.f.getAccountData()?.address,t=R.sourceToken,o=R.toToken,i=k.f.bigNumber(R.sourceTokenAmount).gt(0);if(i||D.setToTokenAmount(""),!o||!t||R.loadingPrices||!i||!e)return;R.loadingQuote=!0;let a=k.f.bigNumber(R.sourceTokenAmount).times(10**t.decimals).round(0);try{let i=await E.f.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:R.gasFee,amount:a.toString()});R.loadingQuote=!1;let r=i?.quotes?.[0]?.toAmount;if(!r)return void I.f.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");let n=k.f.bigNumber(r).div(10**o.decimals).toString();D.setToTokenAmount(n),D.hasInsufficientToken(R.sourceTokenAmount,t.address)?R.inputError="Insufficient balance":(R.inputError=void 0,D.setTransactionDetails())}catch(t){let e=await P.f.handleSwapError(t);R.loadingQuote=!1,R.inputError=e||"Insufficient balance"}},async getTransaction(){let{fromCaipAddress:e,availableToSwap:t}=D.getParams(),o=R.sourceToken,i=R.toToken;if(e&&t&&o&&i&&!R.loadingQuote)try{let t;return R.loadingBuildTransaction=!0,t=await P.f.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:R.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await D.createSwapTransaction():await D.createAllowanceTransaction(),R.loadingBuildTransaction=!1,R.fetchError=!1,t}catch(e){h.f.goBack(),v.f.showError("Failed to check allowance"),R.loadingBuildTransaction=!1,R.approvalTransaction=void 0,R.swapTransaction=void 0,R.fetchError=!0;return}},async createAllowanceTransaction(){let{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=D.getParams();if(e&&o){if(!t)throw Error("createAllowanceTransaction - No source token address found.");try{let i=await E.f.generateApproveCalldata({from:t,to:o,userAddress:e}),a=u.f.getPlainAddress(i.tx.from);if(!a)throw Error("SwapController:createAllowanceTransaction - address is required");let r={data:i.tx.data,to:a,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:R.toTokenAmount};return R.swapTransaction=void 0,R.approvalTransaction={data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount},{data:r.data,to:r.to,gasPrice:r.gasPrice,value:r.value,toAmount:r.toAmount}}catch(e){h.f.goBack(),v.f.showError("Failed to create approval transaction"),R.approvalTransaction=void 0,R.swapTransaction=void 0,R.fetchError=!0;return}}},async createSwapTransaction(){let{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=D.getParams(),i=R.sourceToken,a=R.toToken;if(!t||!o||!i||!a)return;let r=w.f.parseUnits(o,i.decimals)?.toString();try{let o=await E.f.generateSwapCalldata({userAddress:t,from:i.address,to:a.address,amount:r,disableEstimate:!0}),n=i.address===e,s=BigInt(o.tx.eip155.gas),c=BigInt(o.tx.eip155.gasPrice),l=u.f.getPlainAddress(o.tx.to);if(!l)throw Error("SwapController:createSwapTransaction - address is required");let d={data:o.tx.data,to:l,gas:s,gasPrice:c,value:n?BigInt(r??"0"):BigInt("0"),toAmount:R.toTokenAmount};return R.gasPriceInUSD=$.getGasPriceInUSD(R.networkPrice,s,c),R.approvalTransaction=void 0,R.swapTransaction=d,d}catch(e){h.f.goBack(),v.f.showError("Failed to create transaction"),R.approvalTransaction=void 0,R.swapTransaction=void 0,R.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){v.f.showLoading("Approve limit increase in your wallet"),h.f.replace("SwapPreview")},async sendTransactionForApproval(e){let{fromAddress:t,isAuthConnector:o}=D.getParams();R.loadingApprovalTransaction=!0,o?h.f.pushTransactionStack({onSuccess:D.onEmbeddedWalletApprovalSuccess}):v.f.showLoading("Approve limit increase in your wallet");try{await w.f.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.f.CHAIN.EVM}),await D.swapTokens(),await D.getTransaction(),R.approvalTransaction=void 0,R.loadingApprovalTransaction=!1}catch(e){R.transactionError=e?.displayMessage,R.loadingApprovalTransaction=!1,v.f.showError(e?.displayMessage||"Transaction error"),N.f.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:l.f.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:D.state.sourceToken?.symbol||"",swapToToken:D.state.toToken?.symbol||"",swapFromAmount:D.state.sourceTokenAmount||"",swapToAmount:D.state.toTokenAmount||"",isSmartAccount:(0,S.P)(n.f.CHAIN.EVM)===x.f.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;let{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=D.getParams();R.loadingTransaction=!0;let a=`Swapping ${R.sourceToken?.symbol} to ${k.f.formatNumberToLocalString(o,3)} ${R.toToken?.symbol}`,r=`Swapped ${R.sourceToken?.symbol} to ${k.f.formatNumberToLocalString(o,3)} ${R.toToken?.symbol}`;i?h.f.pushTransactionStack({onSuccess(){h.f.replace("Account"),v.f.showLoading(a),O.resetState()}}):v.f.showLoading("Confirm transaction in your wallet");try{let o=[R.sourceToken?.address,R.toToken?.address].join(","),a=await w.f.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.f.CHAIN.EVM});return R.loadingTransaction=!1,v.f.showSuccess(r),N.f.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:l.f.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:D.state.sourceToken?.symbol||"",swapToToken:D.state.toToken?.symbol||"",swapFromAmount:D.state.sourceTokenAmount||"",swapToAmount:D.state.toTokenAmount||"",isSmartAccount:(0,S.P)(n.f.CHAIN.EVM)===x.f.ACCOUNT_TYPES.SMART_ACCOUNT}}),O.resetState(),i||h.f.replace("Account"),O.getMyTokensWithBalance(o),a}catch(e){R.transactionError=e?.displayMessage,R.loadingTransaction=!1,v.f.showError(e?.displayMessage||"Transaction error"),N.f.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:e?.displayMessage||e?.message||"Unknown",network:l.f.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:D.state.sourceToken?.symbol||"",swapToToken:D.state.toToken?.symbol||"",swapFromAmount:D.state.sourceTokenAmount||"",swapToAmount:D.state.toTokenAmount||"",isSmartAccount:(0,S.P)(n.f.CHAIN.EVM)===x.f.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken:(e,t)=>$.isInsufficientSourceTokenForSwap(e,t,R.myTokensWithBalance),setTransactionDetails(){let{toTokenAddress:e,toTokenDecimals:t}=D.getParams();e&&t&&(R.gasPriceInUSD=$.getGasPriceInUSD(R.networkPrice,BigInt(R.gasFee),BigInt(15e4)),R.priceImpact=$.getPriceImpact({sourceTokenAmount:R.sourceTokenAmount,sourceTokenPriceInUSD:R.sourceTokenPriceInUSD,toTokenPriceInUSD:R.toTokenPriceInUSD,toTokenAmount:R.toTokenAmount}),R.maxSlippage=$.getMaxSlippage(R.slippage,R.toTokenAmount),R.providerFee=$.getProviderFee(R.sourceTokenAmount))}},D=(0,A.O)(O);var z=e.i(355733);e.i(513180);var B=e.i(199250),F=e.i(717407),U=e.i(969934),L=e.i(690841),j=t;let H=L.m`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e["8"]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`,M=class extends j.f{render(){return o.c`<slot></slot>`}};M.styles=[U.e,H],M=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n}([(0,F.f)("wui-card")],M),e.i(891825);var V=t,_=t;e.i(507899),e.i(914689),e.i(704482);let K=L.m`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e["2"]};
    background-color: var(--local-icon-bg-value);
  }
`;var G=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Y={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"},X=class extends _.f{constructor(){super(...arguments),this.message="",this.type="info"}render(){return o.c`
      <wui-flex
        data-type=${(0,r.f)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${Y[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){I.f.close()}};X.styles=[U.e,K],G([(0,i.f)()],X.prototype,"message",void 0),G([(0,i.f)()],X.prototype,"type",void 0),X=G([(0,F.f)("wui-alertbar")],X);let q=L.m`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e["3"]};
    left: ${({spacing:e})=>e["4"]};
    right: ${({spacing:e})=>e["4"]};
    opacity: 0;
    pointer-events: none;
  }
`;var Q=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let Z={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}},J=class extends V.f{constructor(){super(),this.unsubscribe=[],this.open=I.f.state.open,this.onOpen(!0),this.unsubscribe.push(I.f.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=I.f.state,i=Z[t];return o.c`
      <wui-alertbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};J.styles=q,Q([(0,a.f)()],J.prototype,"open",void 0),J=Q([(0,F.f)("w3m-alertbar")],J);var ee=t,et=e.i(910335),eo=e.i(980606),ei=t;let ea=L.m`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var er=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let en=class extends ei.f{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return o.c`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,r.f)(this.iconSize)}></wui-icon>
    </button>`}};en.styles=[U.e,U.j,ea],er([(0,i.f)()],en.prototype,"icon",void 0),er([(0,i.f)()],en.prototype,"variant",void 0),er([(0,i.f)()],en.prototype,"type",void 0),er([(0,i.f)()],en.prototype,"size",void 0),er([(0,i.f)()],en.prototype,"iconSize",void 0),er([(0,i.f)({type:Boolean})],en.prototype,"fullWidth",void 0),er([(0,i.f)({type:Boolean})],en.prototype,"disabled",void 0),en=er([(0,F.f)("wui-icon-button")],en);var es=t;e.i(597538);let ec=L.m`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var el=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let ed={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},eu={lg:"lg",md:"md",sm:"sm"},ep=class extends es.f{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return o.c`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){let e=ed[this.size];return this.text?o.c`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return o.c`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;let e=eu[this.size];return o.c` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};ep.styles=[U.e,U.j,ec],el([(0,i.f)()],ep.prototype,"imageSrc",void 0),el([(0,i.f)()],ep.prototype,"text",void 0),el([(0,i.f)()],ep.prototype,"size",void 0),el([(0,i.f)()],ep.prototype,"type",void 0),el([(0,i.f)({type:Boolean})],ep.prototype,"disabled",void 0),ep=el([(0,F.f)("wui-select")],ep),e.i(14495),e.i(948825);var ew=e.i(67793);let eh=L.m`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var em=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let ef=["SmartSessionList"],eg={PayWithExchange:L.i.tokens.theme.foregroundPrimary};function ev(){let e=h.f.state.data?.connector?.name,t=h.f.state.data?.wallet?.name,o=h.f.state.data?.network?.name,i=t??e,a=d.f.getConnectors(),r=1===a.length&&a[0]?.id==="w3m-email",n=l.f.getAccountData()?.socialProvider;return{Connect:`Connect ${r?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let eb=class extends ee.f{constructor(){super(),this.unsubscribe=[],this.heading=ev()[h.f.state.view],this.network=l.f.state.activeCaipNetwork,this.networkImage=eo.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=h.f.state.view,this.viewDirection="",this.unsubscribe.push(et.f.subscribeNetworkImages(()=>{this.networkImage=eo.f.getNetworkImage(this.network)}),h.f.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=ev()[e]},ew.f.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),l.f.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=eo.f.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=eg[h.f.state.view]??L.i.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",e),o.c`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){N.f.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),h.f.push("WhatIsAWallet")}async onClose(){await f.safeClose()}rightHeaderTemplate(){let e=g.f?.state?.features?.smartSessions;return"Account"===h.f.state.view&&e?o.c`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>h.f.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.c`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){let e=ef.includes(this.view);return o.c`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?o.c`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){let{view:e}=h.f.state,t="Connect"===e,i=g.f.state.enableEmbedded,a=g.f.state.enableNetworkSwitch;return"Account"===e&&a?o.c`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,r.f)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,r.f)(this.networkImage)}
      ></wui-select>`:this.showBack&&!("ApproveTransaction"===e||"ConnectingSiwe"===e||t&&i)?o.c`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:o.c`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(N.f.sendEvent({type:"track",event:"CLICK_NETWORKS"}),h.f.push("Networks"))}isAllowedNetworkSwitch(){let e=l.f.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=e?.find(({id:e})=>e===this.network?.id);return t||!o}onViewChange(){let{history:e}=h.f.state,t=ew.f.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=ew.f.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){let{history:e}=h.f.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){h.f.goBack()}};eb.styles=eh,em([(0,a.f)()],eb.prototype,"heading",void 0),em([(0,a.f)()],eb.prototype,"network",void 0),em([(0,a.f)()],eb.prototype,"networkImage",void 0),em([(0,a.f)()],eb.prototype,"showBack",void 0),em([(0,a.f)()],eb.prototype,"prevHistoryLength",void 0),em([(0,a.f)()],eb.prototype,"view",void 0),em([(0,a.f)()],eb.prototype,"viewDirection",void 0),eb=em([(0,F.f)("w3m-header")],eb);var ey=t,ek=t;e.i(366144),e.i(791679);let ex=L.m`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var eT=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eS=class extends ek.f{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return o.c`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?o.c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.c`<wui-icon-box
      size="md"
      color=${({success:"success",error:"error",warning:"warning",info:"default"})[this.variant]}
      icon=${({success:"checkmark",error:"warning",warning:"warningCircle",info:"info"})[this.variant]}
    ></wui-icon-box>`}};eS.styles=[U.e,ex],eT([(0,i.f)()],eS.prototype,"message",void 0),eT([(0,i.f)()],eS.prototype,"variant",void 0),eS=eT([(0,F.f)("wui-snackbar")],eS);var eC=e.i(437239);let eP=eC.m`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var e$=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eA=class extends ey.f{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=v.f.state.open,this.unsubscribe.push(v.f.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=v.f.state;return o.c` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),v.f.state.autoClose&&(this.timeout=setTimeout(()=>v.f.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};eA.styles=eP,e$([(0,a.f)()],eA.prototype,"open",void 0),eA=e$([(0,F.f)("w3m-snackbar")],eA);var eI=t;let eE=(0,b.s)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),eN=(0,A.O)({state:eE,subscribe:e=>(0,b.i)(eE,()=>e(eE)),subscribeKey:(e,t)=>(0,y.T)(eE,e,t),showTooltip({message:e,triggerRect:t,variant:o}){eE.open=!0,eE.message=e,eE.triggerRect=t,eE.variant=o},hide(){eE.open=!1,eE.message="",eE.triggerRect={width:0,height:0,top:0,left:0}}});e.i(745580);let eW=L.m`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e["3"]} 10px ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e["5"]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var eR=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eO=class extends eI.f{constructor(){super(),this.unsubscribe=[],this.open=eN.state.open,this.message=eN.state.message,this.triggerRect=eN.state.triggerRect,this.variant=eN.state.variant,this.unsubscribe.push(eN.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;let e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,o.c`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};eO.styles=[eW],eR([(0,a.f)()],eO.prototype,"open",void 0),eR([(0,a.f)()],eO.prototype,"message",void 0),eR([(0,a.f)()],eO.prototype,"triggerRect",void 0),eR([(0,a.f)()],eO.prototype,"variant",void 0),eO=eR([(0,F.f)("w3m-tooltip")],eO);let eD={getTabsByNamespace:e=>e&&e===n.f.CHAIN.EVM?g.f.state.remoteFeatures?.activity===!1?ew.f.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):ew.f.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let e=h.f.state.view;if(ew.f.VIEWS_WITH_LEGAL_FOOTER.includes(e)){let{termsConditionsUrl:e,privacyPolicyUrl:t}=g.f.state,o=g.f.state.features?.legalCheckbox;return(!!e||!!t)&&!o}return ew.f.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};var ez=t,eB=t;e.i(316153);let eF=L.m`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var eU=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eL=class extends eB.f{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=g.f.state.remoteFeatures,this.unsubscribe.push(g.f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=g.f.state,i=g.f.state.features?.legalCheckbox;return(e||t)&&!i?o.c`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:o.c`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=g.f.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=g.f.state;return e?o.c`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:e}=g.f.state;return e?o.c`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?o.c`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.c`<wui-ux-by-reown></wui-ux-by-reown>`:null}};eL.styles=[eF],eU([(0,a.f)()],eL.prototype,"remoteFeatures",void 0),eL=eU([(0,F.f)("w3m-legal-footer")],eL);var ej=t;e.i(962090);let eH=eC.m``,eM=class extends ej.f{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=g.f.state;return e||t?o.c`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o.c` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){N.f.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,S.P)(l.f.state.activeChain)===x.f.ACCOUNT_TYPES.SMART_ACCOUNT}}),h.f.push("WhatIsABuy")}};eM.styles=[eH],eM=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n}([(0,F.f)("w3m-onramp-providers-footer")],eM);let eV=L.m`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var e_=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eK=class extends ez.f{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=h.f.state.view}firstUpdated(){this.status=eD.hasFooter()?"show":"hide",this.unsubscribe.push(h.f.subscribeKey("view",e=>{this.view=e,this.status=eD.hasFooter()?"show":"hide","hide"===this.status&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return o.c`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return eD.hasFooter()?o.c` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return o.c`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return o.c`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return o.c` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){N.f.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),h.f.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};eK.styles=[eV],e_([(0,a.f)()],eK.prototype,"status",void 0),e_([(0,a.f)()],eK.prototype,"view",void 0),eK=e_([(0,F.f)("w3m-footer")],eK);var eG=t;let eY=L.m`
  :host {
    display: block;
    width: inherit;
  }
`;var eX=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eq=class extends eG.f{constructor(){super(),this.unsubscribe=[],this.viewState=h.f.state.view,this.history=h.f.state.history.join(","),this.unsubscribe.push(h.f.subscribeKey("view",()=>{this.history=h.f.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return o.c`${this.templatePageContainer()}`}templatePageContainer(){return o.c`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=h.f.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return o.c`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.c`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.c`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.c`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.c`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.c`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.c`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.c`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.c`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.c`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.c`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.c`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.c`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.c`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.c`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return o.c`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return o.c`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return o.c`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.c`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.c`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.c`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.c`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.c`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.c`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return o.c`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return o.c`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.c`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return o.c`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.c`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.c`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.c`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.c`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.c`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.c`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.c`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.c`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.c`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.c`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.c`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.c`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return o.c`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return o.c`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.c`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.c`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.c`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.c`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.c`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.c`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.c`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.c`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.c`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.c`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.c`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.c`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.c`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.c`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return o.c`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return o.c`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return o.c`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`}}};eq.styles=[eY],eX([(0,a.f)()],eq.prototype,"viewState",void 0),eX([(0,a.f)()],eq.prototype,"history",void 0),eq=eX([(0,F.f)("w3m-router")],eq);let eQ=L.m`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var eZ=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let eJ="scroll-lock",e0={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class e3 extends t.f{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=g.f.state.enableEmbedded,this.open=p.f.state.open,this.caipAddress=l.f.state.activeCaipAddress,this.caipNetwork=l.f.state.activeCaipNetwork,this.shake=p.f.state.shake,this.filterByNamespace=d.f.state.filterByNamespace,this.padding=L.i.spacing[1],this.mobileFullScreen=g.f.state.enableMobileFullScreen,this.initializeTheming(),c.f.prefetchAnalyticsConfig(),this.unsubscribe.push(p.f.subscribeKey("open",e=>e?this.onOpen():this.onClose()),p.f.subscribeKey("shake",e=>this.shake=e),l.f.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),l.f.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),g.f.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),d.f.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||l.f.getAccountData(e)?.caipAddress||(c.f.fetchRecommendedWallets(),this.filterByNamespace=e)}),h.f.subscribeKey("view",()=>{this.dataset.border=eD.hasFooter()?"true":"false",this.padding=e0[h.f.state.view]??L.i.spacing[1]}))}firstUpdated(){if(this.dataset.border=eD.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){p.f.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return(this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded)?o.c`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?o.c`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return o.c` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,r.f)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&(this.mobileFullScreen||await this.handleClose())}async handleClose(){await f.safeClose()}initializeTheming(){let{themeVariables:e,themeMode:t}=z.f.state,o=B.f.getColorTheme(t);(0,U.k)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),v.f.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=eJ,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${eJ}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){let t=l.f.state.isSwitchingNamespace,o="ProfileWallets"===h.f.state.view;e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:o}):t||this.enableEmbedded||o||p.f.close(),await m.f.initializeIfEnabled(e),this.caipAddress=e,l.f.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;let{chainNamespace:t,chainId:o,address:i}=s.f.parseCaipAddress(e.caipAddress),a=`${t}:${o}`,r=!u.f.getPlainAddress(this.caipAddress),n=await m.f.getSessions({address:i,caipNetworkId:a}),c=!m.f.getSIWX()||n.some(e=>e.data.accountAddress===i),l=e.isSwitchingNamespace&&c&&!this.enableEmbedded,d=this.enableEmbedded&&r;l?h.f.goBack():d&&p.f.close()}onNewNetwork(e){let t=this.caipNetwork,o=t?.caipNetworkId?.toString(),i=t?.chainNamespace,a=e?.caipNetworkId?.toString(),r=e?.chainNamespace,s=o!==a,c=t?.name===n.f.UNSUPPORTED_NETWORK_NAME,d="ConnectingExternal"===h.f.state.view,u="ProfileWallets"===h.f.state.view,w=!l.f.getAccountData(e?.chainNamespace)?.caipAddress,m="UnsupportedChain"===h.f.state.view,f=p.f.state.open,g=!1;this.enableEmbedded&&"SwitchNetwork"===h.f.state.view&&(g=!0),s&&D.resetState(),f&&!d&&!u&&(w?s&&(g=!0):m?g=!0:s&&i===r&&!c&&(g=!0)),g&&"SIWXSignMessage"!==h.f.state.view&&h.f.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(c.f.prefetch(),c.f.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}e3.styles=eQ,eZ([(0,i.f)({type:Boolean})],e3.prototype,"enableEmbedded",void 0),eZ([(0,a.f)()],e3.prototype,"open",void 0),eZ([(0,a.f)()],e3.prototype,"caipAddress",void 0),eZ([(0,a.f)()],e3.prototype,"caipNetwork",void 0),eZ([(0,a.f)()],e3.prototype,"shake",void 0),eZ([(0,a.f)()],e3.prototype,"filterByNamespace",void 0),eZ([(0,a.f)()],e3.prototype,"padding",void 0),eZ([(0,a.f)()],e3.prototype,"mobileFullScreen",void 0);let e1=class extends e3{};e1=eZ([(0,F.f)("w3m-modal")],e1);let e2=class extends e3{};e2=eZ([(0,F.f)("appkit-modal")],e2),e.s(["AppKitModal",0,e2,"W3mModal",0,e1,"W3mModalBase",0,e3],517465);var e5=t;e.i(961686);let e4=L.m`
  :host {
    width: 100%;
  }
`;var e9=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let e6=class extends e5.f{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1),e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&N.f.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:h.f.state.view,displayIndex:this.displayIndex}))}render(){return o.c`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,r.f)(this.imageSrc)}
        name=${this.name}
        size=${(0,r.f)(this.size)}
        tagLabel=${(0,r.f)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};e6.styles=e4,e9([(0,i.f)({type:Array})],e6.prototype,"walletImages",void 0),e9([(0,i.f)()],e6.prototype,"imageSrc",void 0),e9([(0,i.f)()],e6.prototype,"name",void 0),e9([(0,i.f)()],e6.prototype,"size",void 0),e9([(0,i.f)()],e6.prototype,"tagLabel",void 0),e9([(0,i.f)()],e6.prototype,"tagVariant",void 0),e9([(0,i.f)()],e6.prototype,"walletIcon",void 0),e9([(0,i.f)()],e6.prototype,"tabIdx",void 0),e9([(0,i.f)({type:Boolean})],e6.prototype,"disabled",void 0),e9([(0,i.f)({type:Boolean})],e6.prototype,"showAllWallets",void 0),e9([(0,i.f)({type:Boolean})],e6.prototype,"loading",void 0),e9([(0,i.f)({type:String})],e6.prototype,"loadingSpinnerColor",void 0),e9([(0,i.f)()],e6.prototype,"rdnsId",void 0),e9([(0,i.f)()],e6.prototype,"displayIndex",void 0),e9([(0,i.f)()],e6.prototype,"walletRank",void 0),e6=e9([(0,F.f)("w3m-list-wallet")],e6),e.s(["W3mListWallet",0,e6],632645);var e8=t;let e7=L.m`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var te=function(e,t,o,i){var a,r=arguments.length,n=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,o,n):a(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let tt=class extends e8.f{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=g.f.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){let e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(let t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height,o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");this.mobileFullScreen?(e=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-o,this.style.setProperty("--local-border-bottom-radius","0px")):(e+=o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){let e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return o.c`
      <div class="container" data-mobile-fullscreen="${(0,r.f)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,r.f)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){let t=e.split(",").filter(Boolean),o=this.historyState.split(",").filter(Boolean),i=o.length,a=t.length,r=t[t.length-1]||"",n=B.f.cssDurationToNumber(this.transitionDuration),s="";a>i?s="next":a<i?s="prev":a===i&&t[a-1]!==o[i-1]&&(s="next"),this.viewDirection=`${s}-${r}`,setTimeout(()=>{this.historyState=e,this.setView?.(r)},n),setTimeout(()=>{this.viewDirection=""},2*n)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){let e=this.getWrapper();if(!e)return;let t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0"),o=0;this.mobileFullScreen?(o=(window.visualViewport?.height||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")):(o=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px")),this.style.setProperty("--local-container-height",`${o}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}getHeaderHeight(){return 60}};tt.styles=[e7],te([(0,i.f)({type:String})],tt.prototype,"transitionDuration",void 0),te([(0,i.f)({type:String})],tt.prototype,"transitionFunction",void 0),te([(0,i.f)({type:String})],tt.prototype,"history",void 0),te([(0,i.f)({type:String})],tt.prototype,"view",void 0),te([(0,i.f)({attribute:!1})],tt.prototype,"setView",void 0),te([(0,a.f)()],tt.prototype,"viewDirection",void 0),te([(0,a.f)()],tt.prototype,"historyState",void 0),te([(0,a.f)()],tt.prototype,"previousHeight",void 0),te([(0,a.f)()],tt.prototype,"mobileFullScreen",void 0),tt=te([(0,F.f)("w3m-router-container")],tt),e.s(["W3mRouterContainer",0,tt],798153),e.i(517465),e.i(632645),e.i(798153),e.s(["AppKitModal",0,e2,"W3mListWallet",0,e6,"W3mModal",0,e1,"W3mModalBase",0,e3,"W3mRouterContainer",0,tt],565963)}]);