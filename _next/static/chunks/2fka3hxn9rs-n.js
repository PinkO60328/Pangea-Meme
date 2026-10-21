(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,913551,e=>{"use strict";e.i(501719);var t=e.i(955747),i=e.i(763009);e.i(435063);var r=e.i(570111),o=e.i(692959),n=e.i(2282),a=e.i(433452),s=e.i(294498);e.i(513180);var l=e.i(717407);e.i(891825);var c=t,d=e.i(150681);e.i(80998);var u=e.i(755372),h=e.i(190895),p=e.i(764575),f=e.i(293096),g=e.i(439710),m=e.i(249211);e.i(961686);var w=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let b=class extends c.f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=f.f.state.connectors,this.count=o.f.state.count,this.filteredCount=o.f.state.filteredWallets.length,this.isFetchingRecommendedWallets=o.f.state.isFetchingRecommendedWallets,this.unsubscribe.push(f.f.subscribeKey("connectors",e=>this.connectors=e),o.f.subscribeKey("count",e=>this.count=e),o.f.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),o.f.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=a.f.state;if(!e||"HIDE"===t||"ONLY_MOBILE"===t&&!n.f.isMobile())return null;let r=o.f.state.featured.length,s=this.count+r,l=s<10?s:10*Math.floor(s/10),c=this.filteredCount>0?this.filteredCount:l,d=`${c}`;this.filteredCount>0?d=`${this.filteredCount}`:c<s&&(d=`${c}+`);let f=p.f.hasAnyConnection(h.f.CONNECTOR_ID.WALLET_CONNECT);return i.c`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${d}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,u.f)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${f}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){g.f.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),m.f.push("AllWallets",{redirectView:m.f.state.data?.redirectView})}};w([(0,d.f)()],b.prototype,"tabIdx",void 0),w([(0,r.f)()],b.prototype,"connectors",void 0),w([(0,r.f)()],b.prototype,"count",void 0),w([(0,r.f)()],b.prototype,"filteredCount",void 0),w([(0,r.f)()],b.prototype,"isFetchingRecommendedWallets",void 0),b=w([(0,l.f)("w3m-all-wallets-widget")],b);var y=t,v=e.i(910335),x=e.i(980606),$=e.i(989057),C=e.i(553906),k=e.i(690841);let E=k.m`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var R=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let T=class extends y.f{constructor(){super(),this.unsubscribe=[],this.connectors=f.f.state.connectors,this.recommended=o.f.state.recommended,this.featured=o.f.state.featured,this.explorerWallets=o.f.state.explorerWallets,this.connections=p.f.state.connections,this.connectorImages=v.f.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(f.f.subscribeKey("connectors",e=>this.connectors=e),p.f.subscribeKey("connections",e=>this.connections=e),v.f.subscribeKey("connectorImages",e=>this.connectorImages=e),o.f.subscribeKey("recommended",e=>this.recommended=e),o.f.subscribeKey("featured",e=>this.featured=e),o.f.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e?.length?e:o.f.state.explorerWallets}),o.f.subscribeKey("explorerWallets",e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),n.f.isTelegram()&&n.f.isIos()&&(this.loadingTelegram=!p.f.state.wcUri,this.unsubscribe.push(p.f.subscribeKey("wcUri",e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.c`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,t){return e.map(e=>{if("MULTI_CHAIN"===e.type&&e.connectors){let i=e.connectors.map(e=>e.id),r=e.connectors.map(e=>e.name),o=e.connectors.map(e=>e.info?.rdns);return e.explorerWallet=t?.find(e=>i.includes(e.id)||r.includes(e.name)||e.rdns&&(o.includes(e.rdns)||i.includes(e.rdns)))??e.explorerWallet,e}let i=t?.find(t=>t.id===e.id||t.rdns===e.info?.rdns||t.name===e.name);return e.explorerWallet=i??e.explorerWallet,e})}processConnectorsByType(e,t=!0){let i=C.f.sortConnectorsByExplorerWallet([...e]);return t?i.filter(C.f.showConnector):i}connectorListTemplate(){let e=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),t=C.f.getConnectorsByType(e,this.recommended,this.featured),i=this.processConnectorsByType(t.announced.filter(e=>"walletConnect"!==e.id)),r=this.processConnectorsByType(t.injected),o=this.processConnectorsByType(t.multiChain.filter(e=>"WalletConnect"!==e.name),!1),a=t.custom,s=t.recent,l=this.processConnectorsByType(t.external.filter(e=>e.id!==h.f.CONNECTOR_ID.COINBASE_SDK)),c=t.recommended,d=t.featured,u=C.f.getConnectorTypeOrder({custom:a,recent:s,announced:i,injected:r,multiChain:o,recommended:c,featured:d,external:l}),p=this.connectors.find(e=>"walletConnect"===e.id),f=n.f.isMobile(),g=[];for(let e of u)switch(e){case"walletConnect":!f&&p&&g.push({kind:"connector",subtype:"walletConnect",connector:p});break;case"recent":C.f.getFilteredRecentWallets().forEach(e=>g.push({kind:"wallet",subtype:"recent",wallet:e}));break;case"injected":o.forEach(e=>g.push({kind:"connector",subtype:"multiChain",connector:e})),i.forEach(e=>g.push({kind:"connector",subtype:"announced",connector:e})),r.forEach(e=>g.push({kind:"connector",subtype:"injected",connector:e}));break;case"featured":d.forEach(e=>g.push({kind:"wallet",subtype:"featured",wallet:e}));break;case"custom":C.f.getFilteredCustomWallets(a??[]).forEach(e=>g.push({kind:"wallet",subtype:"custom",wallet:e}));break;case"external":l.forEach(e=>g.push({kind:"connector",subtype:"external",connector:e}));break;case"recommended":C.f.getCappedRecommendedWallets(c).forEach(e=>g.push({kind:"wallet",subtype:"recommended",wallet:e}));break;default:console.warn(`Unknown connector type: ${e}`)}return g.map((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t))}renderConnector(e,t){let r,o,n=e.connector,a=x.f.getConnectorImage(n)||this.connectorImages[n?.imageId??""],s=(this.connections.get(n.chain)??[]).some(e=>$.f.isLowerCaseMatch(e.connectorId,n.id));"multiChain"===e.subtype?(r="multichain",o="info"):"walletConnect"===e.subtype?(r="qr code",o="accent"):"injected"===e.subtype||"announced"===e.subtype?(r=s?"connected":"installed",o=s?"info":"success"):(r=void 0,o=void 0);let l=p.f.hasAnyConnection(h.f.CONNECTOR_ID.WALLET_CONNECT),c=("walletConnect"===e.subtype||"external"===e.subtype)&&l;return i.c`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,u.f)(a)}
        .installed=${!0}
        name=${n.name??"Unknown"}
        .tagVariant=${o}
        tagLabel=${(0,u.f)(r)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,u.f)(this.tabIdx)}
        ?disabled=${c}
        rdnsId=${(0,u.f)(n.explorerWallet?.rdns||void 0)}
        walletRank=${(0,u.f)(n.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=m.f.state.data?.redirectView;if("walletConnect"===e.subtype){f.f.setActiveConnector(e.connector),n.f.isMobile()?m.f.push("AllWallets"):m.f.push("ConnectingWalletConnect",{redirectView:t});return}if("multiChain"===e.subtype){f.f.setActiveConnector(e.connector),m.f.push("ConnectingMultiChain",{redirectView:t});return}if("injected"===e.subtype){f.f.setActiveConnector(e.connector),m.f.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}if("announced"===e.subtype)return"walletConnect"===e.connector.id?void(n.f.isMobile()?m.f.push("AllWallets"):m.f.push("ConnectingWalletConnect",{redirectView:t})):(m.f.push("ConnectingExternal",{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet}),void 0);m.f.push("ConnectingExternal",{connector:e.connector,redirectView:t})}renderWallet(e,t){let r=e.wallet,o=x.f.getWalletImage(r),n=p.f.hasAnyConnection(h.f.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,s="recent"===e.subtype?"recent":void 0,l="recent"===e.subtype?"info":void 0;return i.c`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,u.f)(o)}
        name=${r.name??"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${(0,u.f)(this.tabIdx)}
        ?loading=${a}
        ?disabled=${n}
        rdnsId=${(0,u.f)(r.rdns||void 0)}
        walletRank=${(0,u.f)(r.order)}
        tagLabel=${(0,u.f)(s)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=m.f.state.data?.redirectView;if("featured"===e.subtype)return void f.f.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;f.f.selectWalletConnector(e.wallet);return}if("custom"===e.subtype){if(this.loadingTelegram)return;m.f.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let i=f.f.getConnector({id:e.wallet.id,rdns:e.wallet.rdns});i?m.f.push("ConnectingExternal",{connector:i,redirectView:t}):m.f.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:t})}};T.styles=E,R([(0,d.f)({type:Number})],T.prototype,"tabIdx",void 0),R([(0,r.f)()],T.prototype,"connectors",void 0),R([(0,r.f)()],T.prototype,"recommended",void 0),R([(0,r.f)()],T.prototype,"featured",void 0),R([(0,r.f)()],T.prototype,"explorerWallets",void 0),R([(0,r.f)()],T.prototype,"connections",void 0),R([(0,r.f)()],T.prototype,"connectorImages",void 0),R([(0,r.f)()],T.prototype,"loadingTelegram",void 0),T=R([(0,l.f)("w3m-connector-list")],T);var I=t,P=e.i(503945),S=e.i(10172),A=e.i(984607),L=e.i(347257),B=e.i(997761),O=e.i(686653),j=t,W=t,z=e.i(969934),N=t;e.i(507899),e.i(914689);let M=k.m`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var D=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let _={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},U={lg:"md",md:"sm",sm:"sm"},F=class extends N.f{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return i.c`
      <button data-active=${this.active}>
        ${this.icon?i.c`<wui-icon size=${U[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${_[this.size]}> ${this.label} </wui-text>
      </button>
    `}};F.styles=[z.e,z.j,M],D([(0,d.f)()],F.prototype,"icon",void 0),D([(0,d.f)()],F.prototype,"size",void 0),D([(0,d.f)()],F.prototype,"label",void 0),D([(0,d.f)({type:Boolean})],F.prototype,"active",void 0),F=D([(0,l.f)("wui-tab-item")],F);let V=k.m`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var K=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let q=class extends W.f{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let r=t===this.activeTab;return i.c`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};q.styles=[z.e,z.j,V],K([(0,d.f)({type:Array})],q.prototype,"tabs",void 0),K([(0,d.f)()],q.prototype,"onTabChange",void 0),K([(0,d.f)()],q.prototype,"size",void 0),K([(0,r.f)()],q.prototype,"activeTab",void 0),q=K([(0,l.f)("wui-tabs")],q);var H=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let Y=class extends j.f{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return i.c`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>{if("browser"===e)return{label:"Browser",icon:"extension",platform:"browser"};if("mobile"===e)return{label:"Mobile",icon:"mobile",platform:"mobile"};if("qrcode"===e)return{label:"Mobile",icon:"mobile",platform:"qrcode"};if("web"===e)return{label:"Webapp",icon:"browser",platform:"web"};if("desktop"===e)return{label:"Desktop",icon:"desktop",platform:"desktop"};return{label:"Browser",icon:"extension",platform:"unsupported"}});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};H([(0,d.f)({type:Array})],Y.prototype,"platforms",void 0),H([(0,d.f)()],Y.prototype,"onSelectPlatfrom",void 0),Y=H([(0,l.f)("w3m-connecting-header")],Y);var J=t,G=e.i(355733),Q=t;e.i(366144);let X=k.m`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var Z=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ee={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},et={lg:"md",md:"md",sm:"sm"},ei=class extends Q.f{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;let e=this.textVariant??ee[this.size];return i.c`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){let e=et[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return i.c`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};ei.styles=[z.e,z.j,X],Z([(0,d.f)()],ei.prototype,"size",void 0),Z([(0,d.f)({type:Boolean})],ei.prototype,"disabled",void 0),Z([(0,d.f)({type:Boolean})],ei.prototype,"fullWidth",void 0),Z([(0,d.f)({type:Boolean})],ei.prototype,"loading",void 0),Z([(0,d.f)()],ei.prototype,"variant",void 0),Z([(0,d.f)()],ei.prototype,"textVariant",void 0),ei=Z([(0,l.f)("wui-button")],ei),e.i(745580),e.i(791679),e.i(962090);var er=t;let eo=k.m`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var en=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ea=class extends er.f{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return i.c`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};ea.styles=[z.e,eo],en([(0,d.f)({type:Number})],ea.prototype,"radius",void 0),ea=en([(0,l.f)("wui-loading-thumbnail")],ea),e.i(948825),e.i(12528);var es=t,el=e.i(199250),ec=t;e.i(704482);let ed=k.m`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var eu=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eh=class extends ec.f{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return i.c`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eh.styles=[z.e,z.j,ed],eu([(0,d.f)({type:Boolean})],eh.prototype,"disabled",void 0),eu([(0,d.f)()],eh.prototype,"label",void 0),eu([(0,d.f)()],eh.prototype,"buttonLabel",void 0),eh=eu([(0,l.f)("wui-cta-button")],eh);let ep=k.m`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e["5"]} ${({spacing:e})=>e["5"]};
  }
`;var ef=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eg=class extends es.f{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:o,homepage:a}=this.wallet,s=n.f.isMobile(),l=n.f.isIos(),c=n.f.isAndroid(),d=[t,r,a,o].filter(Boolean).length>1,u=el.f.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return d&&!s?i.c`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>m.f.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!d&&a?i.c`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?i.c`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?i.c`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.f.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.f.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.f.openHref(this.wallet.homepage,"_blank")}};eg.styles=[ep],ef([(0,d.f)({type:Object})],eg.prototype,"wallet",void 0),eg=ef([(0,l.f)("w3m-mobile-download-links")],eg);let em=k.m`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var ew=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};class eb extends J.f{constructor(){super(),this.wallet=m.f.state.data?.wallet,this.connector=m.f.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=x.f.getConnectorImage(this.connector)??x.f.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=p.f.state.wcUri,this.error=p.f.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(p.f.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),p.f.subscribeKey("wcError",e=>this.error=e)),(n.f.isTelegram()||n.f.isSafari())&&n.f.isIos()&&p.f.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),p.f.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),i.c`
      <wui-flex
        data-error=${(0,u.f)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,u.f)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?i.c`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?i.c`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){p.f.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=G.f.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.c`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.f.copyToClopboard(this.uri),B.f.showSuccess("Link copied"))}catch{B.f.showError("Failed to copy")}}}eb.styles=em,ew([(0,r.f)()],eb.prototype,"isRetrying",void 0),ew([(0,r.f)()],eb.prototype,"uri",void 0),ew([(0,r.f)()],eb.prototype,"error",void 0),ew([(0,r.f)()],eb.prototype,"ready",void 0),ew([(0,r.f)()],eb.prototype,"showRetry",void 0),ew([(0,r.f)()],eb.prototype,"label",void 0),ew([(0,r.f)()],eb.prototype,"secondaryBtnLabel",void 0),ew([(0,r.f)()],eb.prototype,"secondaryLabel",void 0),ew([(0,r.f)()],eb.prototype,"isLoading",void 0),ew([(0,d.f)({type:Boolean})],eb.prototype,"isMobile",void 0),ew([(0,d.f)()],eb.prototype,"onRetry",void 0);let ey=class extends eb{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),g.f.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.f.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=f.f.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(t)await p.f.connectExternal(t,t.chain);else throw Error("w3m-connecting-wc-browser: No connector found");L.f.close(),g.f.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:m.f.state.view,walletRank:this.wallet?.order}})}catch(e){e instanceof S.v&&e.originalName===P.Y.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.f.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):g.f.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};ey=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.f)("w3m-connecting-wc-browser")],ey);let ev=class extends eb{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),g.f.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.f.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.f.formatNativeUrl(e,this.uri);p.f.setWcLinking({name:t,href:r}),p.f.setRecentWallet(this.wallet),n.f.openHref(i,"_blank")}catch{this.error=!0}}};ev=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.f)("w3m-connecting-wc-desktop")],ev);var ex=e.i(640445),e$=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eC=class extends eb{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.f.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:r,redirectUniversalLink:o,href:a}=n.f.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=r,this.redirectUniversalLink=o,this.target=n.f.isIframe()?"_top":"_self",p.f.setWcLinking({name:i,href:a}),p.f.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?n.f.openHref(this.redirectUniversalLink,this.target):n.f.openHref(this.redirectDeeplink,this.target)}catch(e){g.f.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ex.W.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(p.f.subscribeKey("wcUri",()=>{this.onHandleURI()})),g.f.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:m.f.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){p.f.setWcError(!1),this.onConnect?.()}};e$([(0,r.f)()],eC.prototype,"redirectDeeplink",void 0),e$([(0,r.f)()],eC.prototype,"redirectUniversalLink",void 0),e$([(0,r.f)()],eC.prototype,"target",void 0),e$([(0,r.f)()],eC.prototype,"preferUniversalLinks",void 0),e$([(0,r.f)()],eC.prototype,"isLoading",void 0),eC=e$([(0,l.f)("w3m-connecting-wc-mobile")],eC);var ek=t;e.i(597538);var eE=e.i(564930);function eR(e,t,i){return e!==t&&(e-t<0?t-e:e-t)<=i+.1}let eT={generate({uri:e,size:t,logoSize:r,padding:o=8,dotColor:n="var(--apkt-colors-black)"}){let a,s,l=[],c=(s=Math.sqrt((a=Array.prototype.slice.call(eE.default.create(e,{errorCorrectionLevel:"Q"}).modules.data,0)).length),a.reduce((e,t,i)=>(i%s==0?e.push([t]):e[e.length-1].push(t))&&e,[])),d=(t-2*o)/c.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:e,y:t})=>{let r=(c.length-7)*d*e+o,a=(c.length-7)*d*t+o;for(let e=0;e<u.length;e+=1){let t=d*(7-2*e);l.push(i.V`
            <rect
              fill=${2===e?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===e?t-10:t}
              rx= ${0===e?(t-10)*.45:.45*t}
              ry= ${0===e?(t-10)*.45:.45*t}
              stroke=${n}
              stroke-width=${10*(0===e)}
              height=${0===e?t-10:t}
              x= ${0===e?a+d*e+5:a+d*e}
              y= ${0===e?r+d*e+5:r+d*e}
            />
          `)}});let h=Math.floor((r+25)/d),p=c.length/2-h/2,f=c.length/2+h/2-1,g=[];c.forEach((e,t)=>{e.forEach((e,i)=>{!c[t][i]||t<7&&i<7||t>c.length-8&&i<7||t<7&&i>c.length-8||t>p&&t<f&&i>p&&i<f||g.push([t*d+d/2+o,i*d+d/2+o])})});let m={};return g.forEach(([e,t])=>{m[e]?m[e]?.push(t):m[e]=[t]}),Object.entries(m).map(([e,t])=>{let i=t.filter(e=>t.every(t=>!eR(e,t,d)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{l.push(i.V`<circle cx=${e} cy=${t} fill=${n} r=${d/2.5} />`)})}),Object.entries(m).filter(([e,t])=>t.length>1).map(([e,t])=>{let i=t.filter(e=>t.some(t=>eR(e,t,d)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let i=[];for(let e of t){let t=i.find(t=>t.some(t=>eR(e,t,d)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{l.push(i.V`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)})}),l}},eI=k.m`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var eP=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eS=class extends ek.f{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,i.c`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return i.V`
      <svg height=${this.size} width=${this.size}>
        ${eT.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?i.c`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?i.c`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.c`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};eS.styles=[z.e,eI],eP([(0,d.f)()],eS.prototype,"uri",void 0),eP([(0,d.f)({type:Number})],eS.prototype,"size",void 0),eP([(0,d.f)()],eS.prototype,"theme",void 0),eP([(0,d.f)()],eS.prototype,"imageSrc",void 0),eP([(0,d.f)()],eS.prototype,"alt",void 0),eP([(0,d.f)({type:Boolean})],eS.prototype,"arenaClear",void 0),eP([(0,d.f)({type:Boolean})],eS.prototype,"farcaster",void 0),eS=eP([(0,l.f)("wui-qr-code")],eS);var eA=t;let eL=k.m`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var eB=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eO=class extends eA.f{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",i.c`<slot></slot>`}};eO.styles=[eL],eB([(0,d.f)()],eO.prototype,"width",void 0),eB([(0,d.f)()],eO.prototype,"height",void 0),eB([(0,d.f)()],eO.prototype,"variant",void 0),eB([(0,d.f)({type:Boolean})],eO.prototype,"rounded",void 0),eO=eB([(0,l.f)("wui-shimmer")],eO),e.i(316153);let ej=k.m`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var eW=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let ez=class extends eb{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||g.f.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.f.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),i.c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;p.f.setWcLinking(void 0),p.f.setRecentWallet(this.wallet);let r=this.uri;if(this.wallet?.mobile_link){let{redirect:e}=n.f.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);r=e}return i.c` <wui-qr-code
      size=${e}
      theme=${G.f.state.themeMode}
      uri=${r}
      imageSrc=${(0,u.f)(x.f.getWalletImage(this.wallet))}
      color=${(0,u.f)(G.f.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,u.f)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return i.c`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};ez.styles=ej,eW([(0,d.f)({type:Boolean})],ez.prototype,"basic",void 0),ez=eW([(0,l.f)("w3m-connecting-wc-qrcode")],ez);var eN=t;let eM=class extends eN.f{constructor(){if(super(),this.wallet=m.f.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");g.f.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.f.state.view}})}render(){return i.c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,u.f)(x.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};eM=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.f)("w3m-connecting-wc-unsupported")],eM);var eD=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let e_=class extends eb{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ex.W.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(p.f.subscribeKey("wcUri",()=>{this.updateLoadingState()})),g.f.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:m.f.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.f.formatUniversalUrl(e,this.uri);p.f.setWcLinking({name:t,href:r}),p.f.setRecentWallet(this.wallet),n.f.openHref(i,"_blank")}catch{this.error=!0}}};eD([(0,r.f)()],e_.prototype,"isLoading",void 0),e_=eD([(0,l.f)("w3m-connecting-wc-web")],e_);let eU=k.m`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var eF=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eV=class extends I.f{constructor(){super(),this.wallet=m.f.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!a.f.state.siwx,this.remoteFeatures=a.f.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return a.f.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),i.c`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?i.c`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!a.f.state.manualWCControl||e))try{let{wcPairingExpiry:t,status:i}=p.f.state,{redirectView:r}=m.f.state.data??{};if(e||a.f.state.enableEmbedded||n.f.isPairingExpired(t)||"connecting"===i){let e=p.f.getConnections(A.f.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await p.f.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(m.f.replace("ProfileWallets"),B.f.showSuccess("New Wallet Added")):r?m.f.replace(r):L.f.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!a.f.state.enableNetworkSwitch&&A.f.state.activeChain){A.f.setActiveCaipNetwork(O.f.getUnsupportedNetwork(`${A.f.state.activeChain}:${A.f.state.activeCaipNetwork?.id}`)),A.f.showUnsupportedChainUI();return}e instanceof S.v&&e.originalName===P.Y.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?g.f.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:e.message}}):g.f.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),p.f.setWcError(!0),B.f.showError(e.message??"Connection error"),p.f.resetWcConnection(),m.f.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:i,injected:r,rdns:o}=this.wallet,s=r?.map(({injected_id:e})=>e).filter(Boolean),l=[...o?[o]:s??[]],c=!a.f.state.isUniversalProvider&&l.length,d=p.f.checkInstalled(l),u=c&&d,h=t&&!n.f.isMobile();u&&!A.f.state.noAdapters&&this.platforms.push("browser"),e&&this.platforms.push(n.f.isMobile()?"mobile":"qrcode"),i&&this.platforms.push("web"),h&&this.platforms.push("desktop"),u||!c||A.f.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return i.c`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return i.c`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return i.c`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return i.c`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return i.c`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return i.c`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?i.c`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};eV.styles=eU,eF([(0,r.f)()],eV.prototype,"platform",void 0),eF([(0,r.f)()],eV.prototype,"platforms",void 0),eF([(0,r.f)()],eV.prototype,"isSiwxEnabled",void 0),eF([(0,r.f)()],eV.prototype,"remoteFeatures",void 0),eF([(0,d.f)({type:Boolean})],eV.prototype,"displayBranding",void 0),eF([(0,d.f)({type:Boolean})],eV.prototype,"basic",void 0),eV=eF([(0,l.f)("w3m-connecting-wc-view")],eV);var eK=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let eq=class extends t.f{constructor(){super(),this.unsubscribe=[],this.isMobile=n.f.isMobile(),this.remoteFeatures=a.f.state.remoteFeatures,this.unsubscribe.push(a.f.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=o.f.state,{customWallets:r}=a.f.state,n=s.f.getRecentWallets(),l=e.length||t.length||r?.length||n.length;return i.c`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${l?i.c`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return i.c`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?i.c` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};eK([(0,r.f)()],eq.prototype,"isMobile",void 0),eK([(0,r.f)()],eq.prototype,"remoteFeatures",void 0),eq=eK([(0,l.f)("w3m-connecting-wc-basic-view")],eq),e.s(["W3mConnectingWcBasicView",0,eq],328505);var eH=t,eY=t,eJ=t;let{I:eG}=i.e;var eQ=e.i(999478);let eX=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),eX(e,t);return!0},eZ=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},e0=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),e2(t)}};function e1(e){void 0!==this._$AN?(eZ(this),this._$AM=e,e0(this)):this._$AM=e}function e3(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)eX(r[e],!1),eZ(r[e]);else null!=r&&(eX(r,!1),eZ(r));else eX(this,e)}let e2=e=>{e.type==eQ.x.CHILD&&(e._$AP??=e3,e._$AQ??=e1)};class e5 extends eQ.C{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),e0(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(eX(this,e),eZ(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}let e4=()=>new e6;class e6{}let e8=new WeakMap,e9=(0,eQ.l)(class extends e5{render(e){return i.i}update(e,[t]){let r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i.i}rt(e){if(void 0!==this.G)if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,i=e8.get(t);void 0===i&&(i=new WeakMap,e8.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?e8.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),e7=k.m`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var te=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tt=class extends eJ.f{constructor(){super(...arguments),this.inputElementRef=e4(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return i.c`
      <label data-size=${this.size}>
        <input
          ${e9(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};tt.styles=[z.e,z.j,e7],te([(0,d.f)({type:Boolean})],tt.prototype,"checked",void 0),te([(0,d.f)({type:Boolean})],tt.prototype,"disabled",void 0),te([(0,d.f)()],tt.prototype,"size",void 0),tt=te([(0,l.f)("wui-toggle")],tt);let ti=k.m`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]} ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var tr=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let to=class extends eY.f{constructor(){super(...arguments),this.checked=!1}render(){return i.c`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};to.styles=[z.e,z.j,ti],tr([(0,d.f)({type:Boolean})],to.prototype,"checked",void 0),to=tr([(0,l.f)("wui-certified-switch")],to);var tn=t,ta=t;let ts=k.m`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var tl=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tc=class extends ta.f{constructor(){super(...arguments),this.inputElementRef=e4(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return i.c` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${e9(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,u.f)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?i.c`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?i.c`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?i.c`<wui-icon name="spinner" size="md"></wui-icon>`:i.c`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?i.c`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?i.c`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tc.styles=[z.e,z.j,ts],tl([(0,d.f)()],tc.prototype,"icon",void 0),tl([(0,d.f)({type:Boolean})],tc.prototype,"disabled",void 0),tl([(0,d.f)({type:Boolean})],tc.prototype,"loading",void 0),tl([(0,d.f)()],tc.prototype,"placeholder",void 0),tl([(0,d.f)()],tc.prototype,"type",void 0),tl([(0,d.f)()],tc.prototype,"value",void 0),tl([(0,d.f)()],tc.prototype,"errorText",void 0),tl([(0,d.f)()],tc.prototype,"warningText",void 0),tl([(0,d.f)()],tc.prototype,"onSubmit",void 0),tl([(0,d.f)()],tc.prototype,"size",void 0),tl([(0,d.f)({attribute:!1})],tc.prototype,"onKeyDown",void 0),tc=tl([(0,l.f)("wui-input-text")],tc);let td=k.m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var tu=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let th=class extends tn.f{constructor(){super(...arguments),this.inputComponentRef=e4(),this.inputValue=""}render(){return i.c`
      <wui-input-text
        ${e9(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?i.c`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};th.styles=[z.e,td],tu([(0,d.f)()],th.prototype,"inputValue",void 0),th=tu([(0,l.f)("wui-search-bar")],th);var tp=t,tf=t;let tg=i.V`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,tm=k.m`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var tw=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tb=class extends tf.f{constructor(){super(...arguments),this.type="wallet"}render(){return i.c`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?i.c` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${tg}`:i.c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};tb.styles=[z.e,z.j,tm],tw([(0,d.f)()],tb.prototype,"type",void 0),tb=tw([(0,l.f)("wui-card-select-loader")],tb);var ty=t,tv=e.i(437239);let tx=tv.m`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var t$=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tC=class extends ty.f{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&el.f.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&el.f.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&el.f.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&el.f.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&el.f.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&el.f.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&el.f.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&el.f.getSpacingStyles(this.margin,3)};
    `,i.c`<slot></slot>`}};tC.styles=[z.e,tx],t$([(0,d.f)()],tC.prototype,"gridTemplateRows",void 0),t$([(0,d.f)()],tC.prototype,"gridTemplateColumns",void 0),t$([(0,d.f)()],tC.prototype,"justifyItems",void 0),t$([(0,d.f)()],tC.prototype,"alignItems",void 0),t$([(0,d.f)()],tC.prototype,"justifyContent",void 0),t$([(0,d.f)()],tC.prototype,"alignContent",void 0),t$([(0,d.f)()],tC.prototype,"columnGap",void 0),t$([(0,d.f)()],tC.prototype,"rowGap",void 0),t$([(0,d.f)()],tC.prototype,"gap",void 0),t$([(0,d.f)()],tC.prototype,"padding",void 0),t$([(0,d.f)()],tC.prototype,"margin",void 0),tC=t$([(0,l.f)("wui-grid")],tC);var tk=e.i(55944),tE=t;let tR=k.m`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["0"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e["4"]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var tT=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tI=class extends tE.f{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type==="certified";return i.c`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,u.f)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?i.c`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return(this.visible||this.imageSrc)&&!this.imageLoading?i.c`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,u.f)(this.imageSrc)}
        name=${(0,u.f)(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `:this.shimmerTemplate()}shimmerTemplate(){return i.c`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){!this.wallet||(this.imageSrc=x.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await x.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,g.f.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:m.f.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};tI.styles=tR,tT([(0,r.f)()],tI.prototype,"visible",void 0),tT([(0,r.f)()],tI.prototype,"imageSrc",void 0),tT([(0,r.f)()],tI.prototype,"imageLoading",void 0),tT([(0,r.f)()],tI.prototype,"isImpressed",void 0),tT([(0,d.f)()],tI.prototype,"explorerId",void 0),tT([(0,d.f)()],tI.prototype,"walletQuery",void 0),tT([(0,d.f)()],tI.prototype,"certified",void 0),tT([(0,d.f)()],tI.prototype,"displayIndex",void 0),tT([(0,d.f)({type:Object})],tI.prototype,"wallet",void 0),tI=tT([(0,l.f)("w3m-all-wallets-list-item")],tI);let tP=k.m`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e["4"]};
    padding-bottom: ${({spacing:e})=>e["4"]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var tS=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tA="local-paginator",tL=class extends tp.f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!o.f.state.wallets.length,this.wallets=o.f.state.wallets,this.recommended=o.f.state.recommended,this.featured=o.f.state.featured,this.filteredWallets=o.f.state.filteredWallets,this.mobileFullScreen=a.f.state.enableMobileFullScreen,this.unsubscribe.push(o.f.subscribeKey("wallets",e=>this.wallets=e),o.f.subscribeKey("recommended",e=>this.recommended=e),o.f.subscribeKey("featured",e=>this.featured=e),o.f.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),i.c`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector("wui-grid");e&&(await o.f.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>i.c`
        <wui-card-select-loader type="wallet" id=${(0,u.f)(t)}></wui-card-select-loader>
      `)}getWallets(){let e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);let t=n.f.uniqueBy(e,"id"),i=tk.f.markWalletsAsInstalled(t);return tk.f.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map((e,t)=>i.c`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:i,count:r,mobileFilteredOutWalletsLength:n}=o.f.state,a=window.innerWidth<352?3:4,s=e.length+t.length,l=Math.ceil(s/a)*a-s+a;return(l-=e.length?i.length%a:0,0===r&&i.length>0)?null:0===r||[...i,...e,...t].length<r-(n??0)?this.shimmerTemplate(l,tA):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${tA}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:i}=o.f.state;i.length<t&&o.f.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){f.f.selectWalletConnector(e)}};tL.styles=tP,tS([(0,r.f)()],tL.prototype,"loading",void 0),tS([(0,r.f)()],tL.prototype,"wallets",void 0),tS([(0,r.f)()],tL.prototype,"recommended",void 0),tS([(0,r.f)()],tL.prototype,"featured",void 0),tS([(0,r.f)()],tL.prototype,"filteredWallets",void 0),tS([(0,r.f)()],tL.prototype,"badge",void 0),tS([(0,r.f)()],tL.prototype,"mobileFullScreen",void 0),tL=tS([(0,l.f)("w3m-all-wallets-list")],tL);var tB=t;let tO=tv.m`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var tj=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tW=class extends tB.f{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=a.f.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?i.c`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await o.f.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=o.f.state,t=tk.f.markWalletsAsInstalled(e);return e.length?i.c`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map((e,t)=>i.c`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:i.c`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){f.f.selectWalletConnector(e)}};tW.styles=tO,tj([(0,r.f)()],tW.prototype,"loading",void 0),tj([(0,r.f)()],tW.prototype,"mobileFullScreen",void 0),tj([(0,d.f)()],tW.prototype,"query",void 0),tj([(0,d.f)()],tW.prototype,"badge",void 0),tW=tj([(0,l.f)("w3m-all-wallets-search")],tW);var tz=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tN=class extends eH.f{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=n.f.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return i.c`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?i.c`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:i.c`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",B.f.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.f.isMobile()?i.c`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){m.f.push("ConnectingWalletConnect")}};tz([(0,r.f)()],tN.prototype,"search",void 0),tz([(0,r.f)()],tN.prototype,"badge",void 0),tN=tz([(0,l.f)("w3m-all-wallets-view")],tN),e.s(["W3mAllWalletsView",0,tN],213475);var tM=t,tD=t;let t_=k.m`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var tU=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let tF=class extends tD.f{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",i.c`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,u.f)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?i.c`<wui-image
        icon=${this.icon}
        iconColor=${(0,u.f)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:i.c`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?i.c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:i.c`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};tF.styles=[z.e,z.j,t_],tU([(0,d.f)()],tF.prototype,"imageSrc",void 0),tU([(0,d.f)()],tF.prototype,"icon",void 0),tU([(0,d.f)()],tF.prototype,"iconColor",void 0),tU([(0,d.f)({type:Boolean})],tF.prototype,"loading",void 0),tU([(0,d.f)()],tF.prototype,"tabIdx",void 0),tU([(0,d.f)({type:Boolean})],tF.prototype,"disabled",void 0),tU([(0,d.f)({type:Boolean})],tF.prototype,"rightIcon",void 0),tU([(0,d.f)({type:Boolean})],tF.prototype,"rounded",void 0),tU([(0,d.f)({type:Boolean})],tF.prototype,"fullSize",void 0),tF=tU([(0,l.f)("wui-list-item")],tF);let tV=class extends tM.f{constructor(){super(...arguments),this.wallet=m.f.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return i.c`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?i.c`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?i.c`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?i.c`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?i.c`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(g.f.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),n.f.openHref(e.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};tV=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}([(0,l.f)("w3m-downloads-view")],tV),e.s(["W3mDownloadsView",0,tV],871300),e.i(328505),e.i(213475),e.i(871300),e.s(["W3mAllWalletsView",0,tN,"W3mConnectingWcBasicView",0,eq,"W3mDownloadsView",0,tV],913551)},833199,(e,t,i)=>{"use strict";t.exports=function(e){for(var t=[],i=e.length,r=0;r<i;r++){var o=e.charCodeAt(r);if(o>=55296&&o<=56319&&i>r+1){var n=e.charCodeAt(r+1);n>=56320&&n<=57343&&(o=(o-55296)*1024+n-56320+65536,r+=1)}if(o<128){t.push(o);continue}if(o<2048){t.push(o>>6|192),t.push(63&o|128);continue}if(o<55296||o>=57344&&o<65536){t.push(o>>12|224),t.push(o>>6&63|128),t.push(63&o|128);continue}if(o>=65536&&o<=1114111){t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(63&o|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},564930,(e,t,i)=>{let r=e.r(234797),o=e.r(514843),n=e.r(798622),a=e.r(685378);function s(e,t,i,n,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!r())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=i,i=t,t=n=void 0):3===l&&(t.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=i,i=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(i=t,t=n=void 0):2!==l||t.getContext||(n=i,i=t,t=void 0),new Promise(function(r,a){try{let a=o.create(i,n);r(e(a,t,n))}catch(e){a(e)}})}try{let r=o.create(i,n);a(null,e(r,t,n))}catch(e){a(e)}}i.create=o.create,i.toCanvas=s.bind(null,n.render),i.toDataURL=s.bind(null,n.renderToDataURL),i.toString=s.bind(null,function(e,t,i){return a.render(e,i)})},234797,(e,t,i)=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},118793,(e,t,i)=>{let r=e.r(566597).getSymbolSize;i.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,i=r(e),o=145===i?26:2*Math.ceil((i-13)/(2*t-2)),n=[i-7];for(let e=1;e<t-1;e++)n[e]=n[e-1]-o;return n.push(6),n.reverse()},i.getPositions=function(e){let t=[],r=i.getRowColCoords(e),o=r.length;for(let e=0;e<o;e++)for(let i=0;i<o;i++)(0!==e||0!==i)&&(0!==e||i!==o-1)&&(e!==o-1||0!==i)&&t.push([r[e],r[i]]);return t}},950464,(e,t,i)=>{let r=e.r(154546),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(e){this.mode=r.ALPHANUMERIC,this.data=e}n.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=45*o.indexOf(this.data[t]);i+=o.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(o.indexOf(this.data[t]),6)},t.exports=n},626982,(e,t,i)=>{function r(){this.buffer=[],this.length=0}r.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=r},661600,(e,t,i)=>{function r(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}r.prototype.set=function(e,t,i,r){let o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=r},649811,(e,t,i)=>{let r=e.r(833199),o=e.r(154546);function n(e){this.mode=o.BYTE,"string"==typeof e&&(e=r(e)),this.data=new Uint8Array(e)}n.getBitsLength=function(e){return 8*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)},t.exports=n},69984,(e,t,i)=>{let r=e.r(599527),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];i.getBlocksCount=function(e,t){switch(t){case r.L:return o[(e-1)*4+0];case r.M:return o[(e-1)*4+1];case r.Q:return o[(e-1)*4+2];case r.H:return o[(e-1)*4+3];default:return}},i.getTotalCodewordsCount=function(e,t){switch(t){case r.L:return n[(e-1)*4+0];case r.M:return n[(e-1)*4+1];case r.Q:return n[(e-1)*4+2];case r.H:return n[(e-1)*4+3];default:return}}},599527,(e,t,i)=>{i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2},i.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},i.from=function(e,t){if(i.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw Error("Unknown EC Level: "+e)}}catch(e){return t}}},354609,(e,t,i)=>{let r=e.r(566597).getSymbolSize;i.getPositions=function(e){let t=r(e);return[[0,0],[t-7,0],[0,t-7]]}},478452,(e,t,i)=>{let r=e.r(566597),o=r.getBCHDigit(1335);i.getEncodedBits=function(e,t){let i=e.bit<<3|t,n=i<<10;for(;r.getBCHDigit(n)-o>=0;)n^=1335<<r.getBCHDigit(n)-o;return(i<<10|n)^21522}},781320,(e,t,i)=>{let r=new Uint8Array(512),o=new Uint8Array(256),n=1;for(let e=0;e<255;e++)r[e]=n,o[n]=e,256&(n<<=1)&&(n^=285);for(let e=255;e<512;e++)r[e]=r[e-255];i.log=function(e){if(e<1)throw Error("log("+e+")");return o[e]},i.exp=function(e){return r[e]},i.mul=function(e,t){return 0===e||0===t?0:r[o[e]+o[t]]}},181537,(e,t,i)=>{let r=e.r(154546),o=e.r(566597);function n(e){this.mode=r.KANJI,this.data=e}n.getBitsLength=function(e){return 13*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=o.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i=(i>>>8&255)*192+(255&i),e.put(i,13)}},t.exports=n},483438,(e,t,i)=>{i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};i.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},i.from=function(e){return i.isValid(e)?parseInt(e,10):void 0},i.getPenaltyN1=function(e){let t=e.size,i=0,r=0,o=0,n=null,a=null;for(let s=0;s<t;s++){r=o=0,n=a=null;for(let l=0;l<t;l++){let t=e.get(s,l);t===n?r++:(r>=5&&(i+=3+(r-5)),n=t,r=1),(t=e.get(l,s))===a?o++:(o>=5&&(i+=3+(o-5)),a=t,o=1)}r>=5&&(i+=3+(r-5)),o>=5&&(i+=3+(o-5))}return i},i.getPenaltyN2=function(e){let t=e.size,i=0;for(let r=0;r<t-1;r++)for(let o=0;o<t-1;o++){let t=e.get(r,o)+e.get(r,o+1)+e.get(r+1,o)+e.get(r+1,o+1);(4===t||0===t)&&i++}return 3*i},i.getPenaltyN3=function(e){let t=e.size,i=0,r=0,o=0;for(let n=0;n<t;n++){r=o=0;for(let a=0;a<t;a++)r=r<<1&2047|e.get(n,a),a>=10&&(1488===r||93===r)&&i++,o=o<<1&2047|e.get(a,n),a>=10&&(1488===o||93===o)&&i++}return 40*i},i.getPenaltyN4=function(e){let t=0,i=e.data.length;for(let r=0;r<i;r++)t+=e.data[r];return 10*Math.abs(Math.ceil(100*t/i/5)-10)},i.applyMask=function(e,t){let r=t.size;for(let o=0;o<r;o++)for(let n=0;n<r;n++)t.isReserved(n,o)||t.xor(n,o,function(e,t,r){switch(e){case i.Patterns.PATTERN000:return(t+r)%2==0;case i.Patterns.PATTERN001:return t%2==0;case i.Patterns.PATTERN010:return r%3==0;case i.Patterns.PATTERN011:return(t+r)%3==0;case i.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case i.Patterns.PATTERN101:return t*r%2+t*r%3==0;case i.Patterns.PATTERN110:return(t*r%2+t*r%3)%2==0;case i.Patterns.PATTERN111:return(t*r%3+(t+r)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,n,o))},i.getBestMask=function(e,t){let r=Object.keys(i.Patterns).length,o=0,n=1/0;for(let a=0;a<r;a++){t(a),i.applyMask(a,e);let r=i.getPenaltyN1(e)+i.getPenaltyN2(e)+i.getPenaltyN3(e)+i.getPenaltyN4(e);i.applyMask(a,e),r<n&&(n=r,o=a)}return o}},154546,(e,t,i)=>{let r=e.r(964058),o=e.r(229267);i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!r.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},i.getBestModeForData=function(e){return o.testNumeric(e)?i.NUMERIC:o.testAlphanumeric(e)?i.ALPHANUMERIC:o.testKanji(e)?i.KANJI:i.BYTE},i.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},i.isValid=function(e){return e&&e.bit&&e.ccBits},i.from=function(e,t){if(i.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw Error("Unknown mode: "+e)}}catch(e){return t}}},927635,(e,t,i)=>{let r=e.r(154546);function o(e){this.mode=r.NUMERIC,this.data=e.toString()}o.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(e){let t,i;for(t=0;t+3<=this.data.length;t+=3)i=parseInt(this.data.substr(t,3),10),e.put(i,10);let r=this.data.length-t;r>0&&(i=parseInt(this.data.substr(t),10),e.put(i,3*r+1))},t.exports=o},692762,(e,t,i)=>{let r=e.r(781320);i.mul=function(e,t){let i=new Uint8Array(e.length+t.length-1);for(let o=0;o<e.length;o++)for(let n=0;n<t.length;n++)i[o+n]^=r.mul(e[o],t[n]);return i},i.mod=function(e,t){let i=new Uint8Array(e);for(;i.length-t.length>=0;){let e=i[0];for(let o=0;o<t.length;o++)i[o]^=r.mul(t[o],e);let o=0;for(;o<i.length&&0===i[o];)o++;i=i.slice(o)}return i},i.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let o=0;o<e;o++)t=i.mul(t,new Uint8Array([1,r.exp(o)]));return t}},514843,(e,t,i)=>{let r=e.r(566597),o=e.r(599527),n=e.r(626982),a=e.r(661600),s=e.r(118793),l=e.r(354609),c=e.r(483438),d=e.r(69984),u=e.r(900575),h=e.r(646980),p=e.r(478452),f=e.r(154546),g=e.r(444856);function m(e,t,i){let r,o,n=e.size,a=p.getEncodedBits(t,i);for(r=0;r<15;r++)o=(a>>r&1)==1,r<6?e.set(r,8,o,!0):r<8?e.set(r+1,8,o,!0):e.set(n-15+r,8,o,!0),r<8?e.set(8,n-r-1,o,!0):r<9?e.set(8,15-r-1+1,o,!0):e.set(8,15-r-1,o,!0);e.set(n-8,8,1,!0)}i.create=function(e,t){let i,p;if(void 0===e||""===e)throw Error("No input text");let w=o.M;return void 0!==t&&(w=o.from(t.errorCorrectionLevel,o.M),i=h.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&r.setToSJISFunction(t.toSJISFunc)),function(e,t,i,o){let p;if(Array.isArray(e))p=g.fromArray(e);else if("string"==typeof e){let r=t;if(!r){let t=g.rawSplit(e);r=h.getBestVersionForData(t,i)}p=g.fromString(e,r||40)}else throw Error("Invalid data");let w=h.getBestVersionForData(p,i);if(!w)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<w)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else t=w;let b=function(e,t,i){let o=new n;i.forEach(function(t){o.put(t.mode.bit,4),o.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(o)});let a=(r.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t))*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);let s=(a-o.getLengthInBits())/8;for(let e=0;e<s;e++)o.put(e%2?17:236,8);return function(e,t,i){let o,n,a=r.getSymbolTotalCodewords(t),s=a-d.getTotalCodewordsCount(t,i),l=d.getBlocksCount(t,i),c=a%l,h=l-c,p=Math.floor(a/l),f=Math.floor(s/l),g=f+1,m=p-f,w=new u(m),b=0,y=Array(l),v=Array(l),x=0,$=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<h?f:g;y[e]=$.slice(b,b+t),v[e]=w.encode(y[e]),b+=t,x=Math.max(x,t)}let C=new Uint8Array(a),k=0;for(o=0;o<x;o++)for(n=0;n<l;n++)o<y[n].length&&(C[k++]=y[n][o]);for(o=0;o<m;o++)for(n=0;n<l;n++)C[k++]=v[n][o];return C}(o,e,t)}(t,i,p),y=new a(r.getSymbolSize(t));!function(e,t){let i=e.size,r=l.getPositions(t);for(let t=0;t<r.length;t++){let o=r[t][0],n=r[t][1];for(let t=-1;t<=7;t++)if(!(o+t<=-1)&&!(i<=o+t))for(let r=-1;r<=7;r++)n+r<=-1||i<=n+r||(t>=0&&t<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===t||6===t)||t>=2&&t<=4&&r>=2&&r<=4?e.set(o+t,n+r,!0,!0):e.set(o+t,n+r,!1,!0))}}(y,t);let v=y.size;for(let e=8;e<v-8;e++){let t=e%2==0;y.set(e,6,t,!0),y.set(6,e,t,!0)}return!function(e,t){let i=s.getPositions(t);for(let t=0;t<i.length;t++){let r=i[t][0],o=i[t][1];for(let t=-2;t<=2;t++)for(let i=-2;i<=2;i++)-2===t||2===t||-2===i||2===i||0===t&&0===i?e.set(r+t,o+i,!0,!0):e.set(r+t,o+i,!1,!0)}}(y,t),m(y,i,0),t>=7&&function(e,t){let i,r,o,n=e.size,a=h.getEncodedBits(t);for(let t=0;t<18;t++)i=Math.floor(t/3),r=t%3+n-8-3,o=(a>>t&1)==1,e.set(i,r,o,!0),e.set(r,i,o,!0)}(y,t),!function(e,t){let i=e.size,r=-1,o=i-1,n=7,a=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!e.isReserved(o,s-i)){let r=!1;a<t.length&&(r=(t[a]>>>n&1)==1),e.set(o,s-i,r),-1==--n&&(a++,n=7)}if((o+=r)<0||i<=o){o-=r,r=-r;break}}}(y,b),isNaN(o)&&(o=c.getBestMask(y,m.bind(null,y,i))),c.applyMask(o,y),m(y,i,o),{modules:y,version:t,errorCorrectionLevel:i,maskPattern:o,segments:p}}(e,i,w,p)}},900575,(e,t,i)=>{let r=e.r(692762);function o(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(e){this.degree=e,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let i=r.mod(t,this.genPoly),o=this.degree-i.length;if(o>0){let e=new Uint8Array(this.degree);return e.set(i,o),e}return i},t.exports=o},229267,(e,t,i)=>{let r="[0-9]+",o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(o=o.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";i.KANJI=RegExp(o,"g"),i.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),i.BYTE=RegExp(n,"g"),i.NUMERIC=RegExp(r,"g"),i.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+o+"$"),s=RegExp("^"+r+"$"),l=RegExp("^[A-Z0-9 $%*+\\-./:]+$");i.testKanji=function(e){return a.test(e)},i.testNumeric=function(e){return s.test(e)},i.testAlphanumeric=function(e){return l.test(e)}},444856,(e,t,i)=>{let r=e.r(154546),o=e.r(927635),n=e.r(950464),a=e.r(649811),s=e.r(181537),l=e.r(229267),c=e.r(566597),d=e.r(334554);function u(e){return unescape(encodeURIComponent(e)).length}function h(e,t,i){let r,o=[];for(;null!==(r=e.exec(i));)o.push({data:r[0],index:r.index,mode:t,length:r[0].length});return o}function p(e){let t,i,o=h(l.NUMERIC,r.NUMERIC,e),n=h(l.ALPHANUMERIC,r.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=h(l.BYTE,r.BYTE,e),i=h(l.KANJI,r.KANJI,e)):(t=h(l.BYTE_KANJI,r.BYTE,e),i=[]),o.concat(n,t,i).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case r.NUMERIC:return o.getBitsLength(e);case r.ALPHANUMERIC:return n.getBitsLength(e);case r.KANJI:return s.getBitsLength(e);case r.BYTE:return a.getBitsLength(e)}}function g(e,t){let i,l=r.getBestModeForData(e);if((i=r.from(t,l))!==r.BYTE&&i.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+r.toString(i)+".\n Suggested mode is: "+r.toString(l));switch(i===r.KANJI&&!c.isKanjiModeEnabled()&&(i=r.BYTE),i){case r.NUMERIC:return new o(e);case r.ALPHANUMERIC:return new n(e);case r.KANJI:return new s(e);case r.BYTE:return new a(e)}}i.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(g(t,null)):t.data&&e.push(g(t.data,t.mode)),e},[])},i.fromString=function(e,t){let o=function(e,t){let i={},o={start:{}},n=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],d=""+a+e;l.push(d),i[d]={node:c,lastCount:0},o[d]={};for(let e=0;e<n.length;e++){let a=n[e];i[a]&&i[a].node.mode===c.mode?(o[a][d]=f(i[a].lastCount+c.length,c.mode)-f(i[a].lastCount,c.mode),i[a].lastCount+=c.length):(i[a]&&(i[a].lastCount=c.length),o[a][d]=f(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,t))}}n=l}for(let e=0;e<n.length;e++)o[n[e]].end=0;return{map:o,table:i}}(function(e){let t=[];for(let i=0;i<e.length;i++){let o=e[i];switch(o.mode){case r.NUMERIC:t.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:t.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:t.push([o,{data:o.data,mode:r.BYTE,length:u(o.data)}]);break;case r.BYTE:t.push([{data:o.data,mode:r.BYTE,length:u(o.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),t),n=d.find_path(o.map,"start","end"),a=[];for(let e=1;e<n.length-1;e++)a.push(o.table[n[e]].node);return i.fromArray(a.reduce(function(e,t){let i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},i.rawSplit=function(e){return i.fromArray(p(e,c.isKanjiModeEnabled()))}},566597,(e,t,i)=>{let r,o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];i.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},i.getSymbolTotalCodewords=function(e){return o[e]},i.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},i.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},i.isKanjiModeEnabled=function(){return void 0!==r},i.toSJIS=function(e){return r(e)}},964058,(e,t,i)=>{i.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},646980,(e,t,i)=>{let r=e.r(566597),o=e.r(69984),n=e.r(599527),a=e.r(154546),s=e.r(964058),l=r.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}i.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},i.getCapacity=function(e,t,i){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===i&&(i=a.BYTE);let n=(r.getSymbolTotalCodewords(e)-o.getTotalCodewordsCount(e,t))*8;if(i===a.MIXED)return n;let l=n-c(i,e);switch(i){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},i.getBestVersionForData=function(e,t){let r,o=n.from(t,n.M);if(Array.isArray(e)){if(e.length>1){for(let t=1;t<=40;t++)if(function(e,t){let i=0;return e.forEach(function(e){let r=c(e.mode,t);i+=r+e.getBitsLength()}),i}(e,t)<=i.getCapacity(t,o,a.MIXED))return t;return}if(0===e.length)return 1;r=e[0]}else r=e;return function(e,t,r){for(let o=1;o<=40;o++)if(t<=i.getCapacity(o,r,e))return o}(r.mode,r.getLength(),o)},i.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;r.getBCHDigit(t)-l>=0;)t^=7973<<r.getBCHDigit(t)-l;return e<<12|t}},798622,(e,t,i)=>{let r=e.r(25031);i.render=function(e,t,i){var o;let n=i,a=t;void 0!==n||t&&t.getContext||(n=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),n=r.getOptions(n);let s=r.getImageWidth(e.modules.size,n),l=a.getContext("2d"),c=l.createImageData(s,s);return r.qrToImageData(c.data,e,n),o=a,l.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px",l.putImageData(c,0,0),a},i.renderToDataURL=function(e,t,r){let o=r;void 0!==o||t&&t.getContext||(o=t,t=void 0),o||(o={});let n=i.render(e,t,o),a=o.type||"image/png",s=o.rendererOpts||{};return n.toDataURL(a,s.quality)}},685378,(e,t,i)=>{let r=e.r(25031);function o(e,t){let i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function n(e,t,i){let r=e+t;return void 0!==i&&(r+=" "+i),r}i.render=function(e,t,i){let a=r.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,d=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+o(a.color.dark,"stroke")+' d="'+function(e,t,i){let r="",o=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),d=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(r+=a?n("M",c+i,.5+d+i):n("m",o,0),o=0,a=!1),c+1<t&&e[l+1]||(r+=n("h",s),s=0)):o++}return r}(l,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c+" ")+c+'" shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"==typeof i&&i(null,h),h}},25031,(e,t,i)=>{function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let i=parseInt(t.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+t.slice(0,6).join("")}}i.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,o=e.scale||4;return{width:i,scale:i?4:o,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},i.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},i.getImageWidth=function(e,t){let r=i.getScale(e,t);return Math.floor((e+2*t.margin)*r)},i.qrToImageData=function(e,t,r){let o=t.modules.size,n=t.modules.data,a=i.getScale(o,r),s=Math.floor((o+2*r.margin)*a),l=r.margin*a,c=[r.color.light,r.color.dark];for(let t=0;t<s;t++)for(let i=0;i<s;i++){let d=(t*s+i)*4,u=r.color.light;t>=l&&i>=l&&t<s-l&&i<s-l&&(u=c[+!!n[Math.floor((t-l)/a)*o+Math.floor((i-l)/a)]]),e[d++]=u.r,e[d++]=u.g,e[d++]=u.b,e[d]=u.a}}}]);