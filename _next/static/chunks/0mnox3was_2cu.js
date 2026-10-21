(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,770331,e=>{var r=e.i(6674);let i=r.forwardRef(function({title:e,titleId:i,...a},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},a),e?r.createElement("title",{id:i},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});e.s(["f",0,i])},166266,e=>{var r=e.i(6674);let i=r.forwardRef(function({title:e,titleId:i,...a},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},a),e?r.createElement("title",{id:i},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"}))});e.s(["f",0,i])},536024,e=>{var r=e.i(6674);let i=r.forwardRef(function({title:e,titleId:i,...a},t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},a),e?r.createElement("title",{id:i},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}))});e.s(["f",0,i])},761731,e=>{var r=e.i(704688),i=e.i(60058),a=e.i(83985);let t=i.z.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let r,a;"green"===e.$color&&(r="var(--privy-color-success-dark)",a="var(--privy-color-success-light)"),"red"===e.$color&&(r="var(--privy-color-error)",a="var(--privy-color-error-light)"),"gray"===e.$color&&(r="var(--privy-color-foreground-2)",a="var(--privy-color-background-2)");let t=i.q`
      from, to {
        background-color: ${a};
      }

      50% {
        background-color: rgba(${a}, 0.8);
      }
    `;return i.m`
      color: ${r};
      background-color: ${a};
      ${e.$isPulsing&&i.m`
        animation: ${t} 3s linear infinite;
      `};
    `}}

  ${a.L}
`;e.s(["C",0,({children:e,color:i,isLoading:a,isPulsing:o,...n})=>(0,r.jsx)(t,{$color:i,$isLoading:a,$isPulsing:o,...n,children:e})])},41068,e=>{var r=e.i(704688),i=e.i(924178),a=e.i(6674),t=e.i(60058),o=e.i(800307),n=e.i(393918),l=e.i(705390),s=e.i(180126),c=e.i(142785),d=e.i(152621),p=e.i(772949),u=e.i(761731),h=e.i(103576),g=e.i(487804);let v=(0,a.forwardRef)((e,t)=>{let[h,v]=(0,a.useState)(e.defaultValue||""),[w,y]=(0,a.useState)(""),[b,C]=(0,a.useState)(!1),{authenticated:k}=(0,o.u)(),{initLoginWithEmail:j}=(0,l.u)(),{navigate:A,setModalData:V,currentScreen:S,data:D}=(0,s.u)(),{enabled:z,token:T}=(0,n.a)(),[M,F]=(0,a.useState)(!1),{accountType:L}=(0,c.h)(),E=(0,o.a)(),P=(0,d.v)(h)&&(E.disablePlusEmails&&h.includes("+")?(w||y("Please enter a valid email address without a '+'."),!1):(w&&y(""),!0)),B=b||!P,W=()=>{B||(V({login:D?.login,inlineError:void 0}),!z||T||k?(C(!0),j({email:h,captchaToken:T,disableSignup:D?.login?.disableSignup,withPrivyUi:!0}).then(()=>{A("AwaitingPasswordlessCodeScreen")}).catch(e=>{V({errorModalData:{error:e,previousScreen:S||"LandingScreen"}}),A("ErrorScreen")}).finally(()=>{C(!1)})):(V({captchaModalData:{callback:e=>j({email:h,captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),A("CaptchaScreen")))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(f,{children:[w&&(0,r.jsx)(g.E,{style:{display:"block",marginTop:"0.25rem",textAlign:"left"},children:w}),(0,r.jsxs)(m,{stacked:e.stacked,$error:!!w,children:[(0,r.jsx)(x,{children:(0,r.jsx)(i.f,{})}),(0,r.jsx)("input",{ref:t,id:"email-input",className:"login-method-button",type:"email",placeholder:"your@email.com",onFocus:()=>F(!0),onChange:e=>v(e.target.value),onKeyUp:e=>{"Enter"===e.key&&W()},value:h,autoComplete:"email"}),"email"!==L||M?e.stacked?(0,r.jsx)("span",{}):(0,r.jsx)(p.E,{isSubmitting:b,onClick:W,disabled:B,children:"Submit"}):(0,r.jsx)(u.C,{color:"gray",children:"Recent"})]})]}),e.stacked?(0,r.jsx)(p.P,{loadingText:null,loading:b,disabled:B,onClick:W,style:{width:"100%"},children:"Submit"}):null]})}),f=h.I,m=h.a,x=(0,t.z)(c.m)`
  display: inline-flex;
`;e.s(["C",0,v])},7917,e=>{var r=e.i(704688),i=e.i(6674),a=e.i(60058),t=e.i(162609),o=e.i(348128),n=e.i(800307),l=e.i(142785),s=e.i(772949),c=e.i(761731);let d=({value:e,onChange:i})=>(0,r.jsx)("select",{value:e,onChange:i,children:t.h.map(e=>(0,r.jsxs)("option",{value:e.code,children:[e.code," +",e.callCode]},e.code))}),p=(0,i.forwardRef)((e,a)=>{let p=(0,n.a)(),[g,v]=(0,i.useState)(!1),{accountType:f}=(0,l.h)(),[m,x]=(0,i.useState)(""),[w,y]=(0,i.useState)(e.defaultCountry??p?.intl.defaultCountry??"US"),b=(0,t.r)(m,w),C=(0,t.M)(w),k=(0,t.j)(w),j=(0,o.f)(w),A=!b,[V,S]=(0,i.useState)(!1),D=j.length,z=r=>{let i=r.target.value;y(i),x(""),e.onChange&&e.onChange({rawPhoneNumber:m,qualifiedPhoneNumber:(0,t.A)(m,i),countryCode:i,isValid:(0,t.r)(m,w)})},T=(r,i)=>{try{let a=r.replace(/\D/g,"")===m.replace(/\D/g,"")?r:C.input(r);x(a),e.onChange&&e.onChange({rawPhoneNumber:a,qualifiedPhoneNumber:(0,t.A)(r,i),countryCode:i,isValid:(0,t.r)(r,i)})}catch(e){console.error("Error processing phone number:",e)}},M=()=>{S(!0);let r=(0,t.A)(m,w);e.onSubmit({rawPhoneNumber:m,qualifiedPhoneNumber:r,countryCode:w,isValid:(0,t.r)(m,w)}).finally(()=>S(!1))};return(0,i.useEffect)(()=>{if(e.defaultValue){let r=(0,t.N)(e.defaultValue);C.reset(),z({target:{value:r.countryCode}}),T(r.phone,r.countryCode)}},[e.defaultValue]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{children:(0,r.jsxs)(h,{$callingCodeLength:D,$stacked:e.stacked,children:[(0,r.jsx)(d,{value:w,onChange:z}),(0,r.jsx)("input",{ref:a,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:k,onFocus:()=>v(!0),onChange:e=>{T(e.target.value,w)},onKeyUp:e=>{"Enter"===e.key&&M()},value:m,autoComplete:"tel"}),"phone"!==f||g||e.hideRecent?e.stacked||e.noIncludeSubmitButton?(0,r.jsx)("span",{}):(0,r.jsx)(s.E,{isSubmitting:V,onClick:M,disabled:A,children:"Submit"}):(0,r.jsx)(c.C,{color:"gray",children:"Recent"})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,r.jsx)(s.P,{loading:V,loadingText:null,onClick:M,disabled:A,children:"Submit"}):null]})}),u=a.z.div`
  width: 100%;
`,h=a.z.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${e=>e.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${e=>e.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${e=>e.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${e=>e.$stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;e.s(["C",0,p])},785006,e=>{var r=e.i(704688),i=e.i(548503),a=e.i(42789),t=e.i(6674),o=e.i(60058);let n=o.z.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  && {
    color: var(--privy-color-foreground);
    font-weight: 500;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`,l=o.z.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,s=(0,o.z)(i.f)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,c=(0,o.z)(a.f)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;e.s(["C",0,function({children:e,iconOnly:i,value:a,hideCopyIcon:o,onCopy:d,iconSize:p=14,...u}){let[h,g]=(0,t.useState)(!1);return(0,r.jsxs)(n,{...u,onClick:()=>{navigator.clipboard.writeText(a||("string"==typeof e?e:"")).then(()=>d?.()).catch(console.error),g(!0),setTimeout(()=>g(!1),1500)},children:[e," ",h?(0,r.jsxs)(l,{children:[(0,r.jsx)(s,{size:p})," ",!i&&"Copied"]}):!o&&(0,r.jsx)(c,{size:p})]})},"a",0,({value:e,includeChildren:i,children:a,...o})=>{let[d,p]=(0,t.useState)(!1),u=()=>{navigator.clipboard.writeText(e).catch(console.error),p(!0),setTimeout(()=>p(!1),1500)};return(0,r.jsxs)(r.Fragment,{children:[i?(0,r.jsx)(n,{...o,onClick:u,children:a}):(0,r.jsx)(r.Fragment,{children:a}),(0,r.jsx)(n,{...o,onClick:u,children:d?(0,r.jsx)(l,{children:(0,r.jsx)(s,{})}):(0,r.jsx)(c,{})})]})}])},71135,e=>{var r=e.i(704688),i=e.i(6674);let a=i.forwardRef(function({title:e,titleId:r,...a},t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},a),e?i.createElement("title",{id:r},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))});var t=e.i(60058),o=e.i(941177),n=e.i(772949),l=e.i(800307),s=e.i(627814),c=e.i(705390),d=e.i(180126),p=e.i(393918),u=e.i(351107),h=e.i(142785),g=e.i(152621),v=e.i(852560),f=e.i(995210),m=e.i(924178),x=e.i(974213);let w=(0,e.i(542786).f)("circle-user",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);var y=e.i(41068),b=e.i(761731),C=e.i(329034),k=e.i(162609),j=e.i(536024),A=e.i(166266),V=e.i(871443),S=e.i(7917),D=e.i(309215),z=e.i(238382),T=e.i(906324),M=e.i(368931),F=e.i(299820);let L=()=>{let e=(0,l.a)(),a=e?.appearance?.logo,t=`${e?.name} logo`,o={maxHeight:"90px",maxWidth:"180px"};return a?"string"==typeof a?(0,r.jsx)("img",{src:a,alt:t,style:o}):"svg"===a.type||"img"===a.type?i.default.cloneElement(a,{alt:t,style:o}):(console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."),null):null},E=t.z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`,P=({name:e,logoUrl:i,size:a="38px"})=>"string"==typeof i?(0,r.jsx)("img",{src:i,alt:`${e??"Provider app"} logo`,style:{width:a,height:a,maxHeight:"90px",maxWidth:"180px",borderRadius:"8px"}}):(0,r.jsx)("span",{}),B=({appId:e})=>{let[a,t]=(0,i.useState)(void 0),{startCrossAppAuthFlow:o}=(0,f.d)(),{authenticated:n}=(0,l.u)(),{data:s}=(0,d.u)(),{client:p}=(0,c.u)();return(0,i.useEffect)(()=>{(async()=>{p&&t(await p.getCrossAppProviderDetails(e))})()},[p]),(0,r.jsx)(h.L,{onClick:()=>o({appId:e,action:n?"link":"login",disableSignup:s?.login?.disableSignup}),disabled:!a,children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.m,{$fullSize:!0,children:(0,r.jsx)(P,{name:a.name,logoUrl:a.icon_url||void 0,size:"32px"})}),a.name]}):(0,r.jsx)(v.B,{})})},W=({isEditable:e,setIsEditable:a,defaultValue:t})=>{let o=(0,i.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.H,{$if:!e,children:(0,r.jsx)(y.C,{ref:o,defaultValue:t})}),(0,r.jsx)(h.H,{$if:e,children:(0,r.jsxs)(h.L,{onClick:()=>{a(),setTimeout(()=>{o.current?.focus()},0)},children:[(0,r.jsx)(h.m,{children:(0,r.jsx)(m.f,{})}),"Continue with Email"]})})]})},H=()=>{let[e,a]=(0,i.useState)(!1),{currentScreen:t,navigate:o,setModalData:n,data:l}=(0,d.u)(),{enabled:s,token:u}=(0,p.a)(),{initLoginWithFarcaster:g}=(0,c.u)(),{accountType:f}=(0,h.h)();return(0,r.jsxs)(h.L,{onClick:async()=>{a(!0);try{s&&!u?(n({captchaModalData:{callback:e=>g(e,l?.login?.disableSignup),userIntentRequired:!0,onSuccessNavigateTo:"FarcasterConnectStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),o("CaptchaScreen")):(await g(u,l?.login?.disableSignup),o("FarcasterConnectStatusScreen"))}catch(e){n({errorModalData:{error:e,previousScreen:t||"LandingScreen"}}),o("ErrorScreen")}finally{a(!1)}},disabled:!1,children:[(0,r.jsx)(C.F,{width:32,height:32})," Farcaster",e&&(0,r.jsx)(v.B,{}),"farcaster"===f&&(0,r.jsx)(U,{color:"gray",children:"Recent"})]})},U=(0,t.z)(b.C)`
  margin-left: auto;
`,I=({...e})=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",...e,children:[(0,r.jsxs)("g",{clipPath:"url(#clip0_2856_1743)",children:[(0,r.jsx)("path",{d:"M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_2856_1743",children:(0,r.jsx)("rect",{x:"0.5",y:"0.5",width:"24",height:"24",rx:"6",fill:"white"})})})]}),N=({chainType:e,withPadding:i})=>{let a="";return a="ethereum-only"===e||"ethereum-and-solana"===e?"Rainbow, Phantom, or Coinbase Wallet":"Phantom or Solflare",(0,r.jsx)(h.E,{$withPadding:i,children:(0,r.jsxs)(h.n,{children:[(0,r.jsx)(j.f,{style:{color:"var(--privy-color-warn)",height:48,width:48}}),(0,r.jsx)("h3",{children:"No wallets available"}),(0,r.jsxs)("p",{children:["Please download an external wallet provider, like ",a,"."]})]})},"empty-wallet-state")},R=()=>{let{enabled:e,token:a}=(0,p.a)(),{navigate:t,setModalData:o,data:n}=(0,d.u)(),s=(0,l.a)(),{initLoginWithPasskey:u}=(0,c.u)(),g=()=>{s.loginConfig.passkeysForSignupEnabled?t("PasskeySelectSignupOrLogin"):(async()=>{e&&!a?(o({passkeyAuthModalData:{passkeySignupFlow:!1},captchaModalData:{callback:e=>u({captchaToken:e,withPrivyUi:!0}),userIntentRequired:!1,onSuccessNavigateTo:"PasskeyStatusScreen",onErrorNavigateTo:"ErrorScreen"}}),t("CaptchaScreen")):(await u({withPrivyUi:!0,captchaToken:a}),o({passkeyAuthModalData:{passkeySignupFlow:!1}}),t("PasskeyStatusScreen"))})()};return 0===(0,i.useMemo)(()=>{let e=n?.login?.loginMethods;return e?e.filter(e=>"passkey"!==e).length:Object.entries(s.loginMethods).filter(([e,r])=>r).filter(([e])=>"passkey"!==e).length},[s.loginMethods,n?.login])?(0,r.jsxs)(h.L,{onClick:g,children:[(0,r.jsx)(A.f,{})," Continue with passkey"]}):(0,r.jsx)(V.L,{as:"button",onClick:g,size:"sm",variant:"navigation",style:{width:"100%",justifyContent:"center"},children:"I have a passkey"})},G=({isEditable:e,setIsEditable:a,defaultValue:t})=>{let o=(0,i.useRef)(null),{authenticated:n}=(0,l.u)(),{navigate:s,setModalData:u,currentScreen:g,data:v}=(0,d.u)(),{initLoginWithSms:f}=(0,c.u)(),{enabled:m,token:w}=(0,p.a)(),{whatsAppEnabled:y}=(0,l.a)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.H,{$if:!e,children:(0,r.jsx)(S.C,{ref:o,onSubmit:async function({qualifiedPhoneNumber:e}){if(!m||w||n)try{await f({phoneNumber:e,captchaToken:w,withPrivyUi:!0,disableSignup:v?.login?.disableSignup}),s("AwaitingPasswordlessCodeScreen")}catch(e){u({errorModalData:{error:e,previousScreen:g||"LandingScreen"}}),s("ErrorScreen")}else u({captchaModalData:{callback:r=>f({phoneNumber:e,captchaToken:r,withPrivyUi:!0,disableSignup:v?.login?.disableSignup}),userIntentRequired:!1,onSuccessNavigateTo:"AwaitingPasswordlessCodeScreen",onErrorNavigateTo:"ErrorScreen"}}),s("CaptchaScreen")},defaultValue:t})}),(0,r.jsx)(h.H,{$if:e,children:(0,r.jsxs)(h.L,{onClick:()=>{a(),setTimeout(()=>{o.current?.focus()},0)},children:[(0,r.jsx)(h.m,{children:(0,r.jsx)(x.f,{})}),"Continue with ",y?"WhatsApp":"SMS"]})})]})},O={apple:{logo:D.A,displayName:"Apple"},discord:{logo:D.D,displayName:"Discord"},github:{logo:D.b,displayName:"GitHub"},google:{logo:D.G,displayName:"Google"},linkedin:{logo:D.L,displayName:"LinkedIn"},spotify:{logo:D.S,displayName:"Spotify"},instagram:{logo:D.I,displayName:"Instagram"},telegram:{logo:T.T,displayName:"Telegram"},twitter:{logo:D.a,displayName:"Twitter"},tiktok:{logo:D.T,displayName:"TikTok"},line:{logo:z.L,displayName:"LINE"},twitch:{logo:z.T,displayName:"Twitch"}},q=({provider:e})=>{let{enabled:a,token:t}=(0,p.a)(),{currentScreen:o,navigate:n,setModalData:s,data:u}=(0,d.u)(),[g,v]=(0,i.useState)(!1),f=(0,l.a)(),{initLoginWithOAuth:m}=(0,c.u)(),{accountType:x}=(0,h.h)(),w=(0,i.useMemo)(()=>x&&"guest"!==x&&"authorization_key"!==x&&"cross_app"!==x?(0,p.t)(x):null,[x]),{displayName:y,logo:b}=(0,i.useMemo)(()=>{if((0,l.i)(e)){let i=f.customOAuthProviders.find(r=>r.provider===e),a=i.provider_icon_url,t=i.provider_display_name;return{displayName:t,logo:({style:e})=>(0,r.jsx)("img",{alt:`${t} logo`,src:a,style:e})}}return O[e]},[e,f.customOAuthProviders]);return(0,r.jsxs)(h.L,{onClick:()=>{v(!0),setTimeout(()=>{v(!1)},2e3),a&&!t?(s({captchaModalData:{callback:r=>m(e,r,u?.login?.disableSignup),userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ErrorScreen"}}),n("CaptchaScreen")):m(e,void 0,u?.login?.disableSignup).catch(e=>{v(!1),s({errorModalData:{error:e,previousScreen:o||"LandingScreen"}}),n("ErrorScreen")})},disabled:g,children:[(0,r.jsx)(h.m,{$fullSize:!0,children:(0,r.jsx)(b,{style:{width:"32px",height:"32px"}})}),y,w?.loginMethod===e&&(0,r.jsx)(Z,{color:"gray",children:"Recent"})]})},Z=(0,t.z)(b.C)`
  margin-left: auto;
`,Q=()=>{let{enabled:e,token:a}=(0,p.a)(),{navigate:t,setModalData:o,data:n}=(0,d.u)(),[l,s]=(0,i.useState)(!1),{initLoginWithTelegram:u}=(0,c.u)(),{accountType:g}=(0,h.h)();async function v(e){try{await u(e,n?.login?.disableSignup),o({telegramAuthModalData:{seamlessAuth:!1}}),t("TelegramAuthScreen")}catch(e){console.error(e),s(!1)}}return(0,r.jsxs)(h.L,{onClick:async function(){(s(!0),e&&!a)?(o({captchaModalData:{callback:v,userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ErrorScreen"}}),t("CaptchaScreen")):await v(a)},disabled:l,children:[(0,r.jsx)(T.T,{width:32,height:32}),"Telegram","telegram"===g&&(0,r.jsx)(X,{color:"gray",children:"Recent"})]})},X=(0,t.z)(b.C)`
  margin-left: auto;
`,K=({onClick:e,text:i,icon:a})=>(0,r.jsxs)(h.L,{onClick:e,children:[(0,r.jsx)(h.m,{children:a}),(0,r.jsx)(h.G,{children:i})]}),$=t.z.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,Y=t.z.div`
  margin-bottom: 24px;
`,J=({mostRecentlyUsedAccountType:e,smsAvailable:r,emailAvailable:i,prefilledType:a})=>i&&("email"===e&&"phone"!==a||"email"===a)||!r||"phone"!==e&&"phone"!==a?"email":"sms",_=(0,t.z)(e=>{let i=(0,l.a)();return i?.appearance.logo?(0,r.jsx)(E,{...e,children:(0,r.jsx)(L,{})}):null})`
  margin-bottom: 16px;
`;e.s(["C",0,({connectOnly:e})=>{let{closePrivyModal:t,connectors:v}=(0,c.u)(),{data:f,setModalData:m,onUserCloseViaDialogOrKeybindRef:x,navigate:w}=(0,d.u)(),y=(0,l.a)(),b=y.appearance.palette.colorScheme,{accountType:C,walletClientType:k}=(0,h.h)(),j=(0,i.useMemo)(()=>C&&"guest"!==C&&"authorization_key"!==C&&"cross_app"!==C?(0,p.t)(C):null,[C]),A=y.loginMethodsAndOrder?.primary??[],V=y.loginMethodsAndOrder?.overflow??[],S=(0,i.useMemo)(()=>[...A,...V],[A,V]),D=y.loginMethods.passkey,z=f?.login,T=[];k&&S.includes(k)?T.push(k):C&&S.includes(j?.loginMethod)&&T.push(j?.loginMethod);let[M,F]=(0,i.useState)("default"),[L,E]=(0,i.useState)(J({mostRecentlyUsedAccountType:C,smsAvailable:S.includes("sms"),emailAvailable:S.includes("email"),prefilledType:z?.prefill?.type}));(0,i.useEffect)(()=>{E(J({mostRecentlyUsedAccountType:C,smsAvailable:S.includes("sms"),emailAvailable:S.includes("email"),prefilledType:z?.prefill?.type}))},[S,C]),(0,i.useEffect)(()=>{"phone"===C&&E("sms");let e=S.indexOf("sms"),r=S.indexOf("email");e>-1&&e<r&&E("sms")},[C,A,V]);let P=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{F("default")},150)};x.current=P;let{listings:U}=(0,s.u)(),I=i=>{if("email"===i)return(0,r.jsx)(W,{isEditable:"email"===L,setIsEditable:()=>{E("email")},defaultValue:"email"===z?.prefill?.type?z.prefill.value:void 0},i);if("sms"===i)return(0,r.jsx)(G,{isEditable:"sms"===L,setIsEditable:()=>{E("sms")},defaultValue:"phone"===z?.prefill?.type?z.prefill.value:void 0},i);if("apple"===i)return(0,r.jsx)(q,{provider:"apple"},i);if("discord"===i)return(0,r.jsx)(q,{provider:"discord"},i);if("farcaster"===i)return(0,r.jsx)(H,{},i);if("github"===i)return(0,r.jsx)(q,{provider:"github"},i);if("google"===i)return(0,r.jsx)(q,{provider:"google"},i);if("linkedin"===i)return(0,r.jsx)(q,{provider:"linkedin"},i);if("spotify"===i)return(0,r.jsx)(q,{provider:"spotify"},i);if("instagram"===i)return(0,r.jsx)(q,{provider:"instagram"},i);if("tiktok"===i)return(0,r.jsx)(q,{provider:"tiktok"},i);if("line"===i)return(0,r.jsx)(q,{provider:"line"},i);if("twitch"===i)return(0,r.jsx)(q,{provider:"twitch"},i);if("twitter"===i)return(0,r.jsx)(q,{provider:"twitter"},i);if("telegram"===i)return y.loginConfig.telegramHasHmacCredentials?(0,r.jsx)(Q,{},i):(0,r.jsx)(q,{provider:"telegram"},i);if(i.startsWith("privy:"))return(0,r.jsx)(B,{appId:i.replace("privy:","")},i);let a=y.appearance.walletChainType,t=new u.W(a,[i]).getWallets(v,U);return t.wallets.map((i,o)=>(0,r.jsx)(u.a,{index:o,data:{wallets:t.wallets,walletChainType:a,handleWalletClick(r){m(e=>({...e,externalConnectWallet:{walletList:S,walletChainType:a,preSelectedWalletId:r.id}})),w(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}},i.id+o))},N=T.flatMap(I),O=A.filter(e=>e!==k&&e!==j?.loginMethod).flatMap(I),Z=V.filter(e=>e!==k&&e!==j?.loginMethod).flatMap(I),[X,$]=(0,g.k)([...N,...O,...Z],(({primary:e,overflow:r})=>e<5?e:5===e&&0===r?5:4)({primary:O.length+N.length,overflow:Z.length}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.M,{title:y.appearance.landingHeader,onClose:P,backFn:"default"===M?void 0:()=>{F("default")}}),"default"===M&&(0,r.jsx)(_,{}),"default"===M&&("string"==typeof y.appearance.loginMessage?(0,r.jsx)(h.S,{children:y.appearance.loginMessage}):y.appearance.loginMessage),(0,r.jsx)(h.A,{style:{overflow:"hidden"},children:(0,r.jsxs)(h.o,{$colorScheme:b,children:["default"===M&&(0,r.jsxs)(r.Fragment,{children:[X,$.length>0&&(0,r.jsx)(K,{text:"More options",icon:(0,r.jsx)(a,{}),onClick:()=>F("overflow")})]}),"overflow"===M&&(0,r.jsx)(r.Fragment,{children:$}),D&&"default"===M&&(0,r.jsx)(R,{})]})}),y&&(0,r.jsx)(o.T,{app:y}),(0,r.jsx)(o.B,{})]})},"L",0,({connectOnly:e})=>{let{closePrivyModal:a}=(0,c.u)(),{data:t,setModalData:n,onUserCloseViaDialogOrKeybindRef:g,navigate:v}=(0,d.u)(),f=(0,l.a)(),y=t?.login,b=f.appearance.walletList,C=y?.walletChainType??f.appearance.walletChainType,{accountType:j,walletClientType:A,chainType:V}=(0,h.h)(),S=(0,i.useMemo)(()=>j&&"guest"!==j&&"authorization_key"!==j&&"cross_app"!==j?(0,p.t)(j):null,[j]),{email:D,sms:z,google:T,twitter:E,discord:P,github:U,spotify:O,instagram:Z,tiktok:X,line:_,twitch:ee,linkedin:er,apple:ei,wallet:ea,farcaster:et,telegram:eo}=(0,i.useMemo)(()=>y?.loginMethods?(0,k.D)(y.loginMethods,!0):null,[y])??f.loginMethods,{wallets:en}=(0,u.u)({enabled:(0,s.s)(ea?b:[]),walletList:b,walletChainType:C}),el=f.customOAuthProviders,es=f.crossAppProviders,{passkey:ec}=f.loginMethods,ed=[D&&"email",z&&"sms",T&&"google",E&&"twitter",P&&"discord",U&&"github",O&&"spotify",Z&&"instagram",X&&"tiktok",_&&"line",ee&&"twitch",er&&"linkedin",ei&&"apple",et&&"farcaster",eo&&"telegram",...el.map(e=>e.provider),...es].filter(e=>!!e),ep=ed.length>0,eu=(0,i.useMemo)(()=>ea&&!ep?"web3-first":ea&&f?.appearance.loginGroupPriority||"web2-first",[ea,ep,f?.appearance.loginGroupPriority]),eh=f?.appearance.hideDirectWeb2Inputs,[eg,ev]=(0,i.useState)("default"),[ef,em]=(0,i.useState)(J({mostRecentlyUsedAccountType:j,smsAvailable:z,emailAvailable:D,prefilledType:y?.prefill?.type}));(0,i.useEffect)(()=>{em(J({mostRecentlyUsedAccountType:j,smsAvailable:z,emailAvailable:D,prefilledType:y?.prefill?.type}))},[D,z,j]);let ex=()=>{a({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{ev("default")},150)};g.current=ex;let ew=[];A&&ea?ew.push(A):S?.loginMethod&&ed.includes(S.loginMethod)&&ew.push(S.loginMethod);let ey=i=>{if("email"===i)return(0,r.jsx)(W,{isEditable:"email"===ef,setIsEditable:()=>{em("email")},defaultValue:"email"===y?.prefill?.type?y.prefill.value:void 0},i);if("sms"===i)return(0,r.jsx)(G,{isEditable:"sms"===ef,setIsEditable:()=>{em("sms")},defaultValue:"phone"===y?.prefill?.type?y.prefill.value:void 0},i);if("apple"===i)return(0,r.jsx)(q,{provider:"apple"},i);if("discord"===i)return(0,r.jsx)(q,{provider:"discord"},i);if("farcaster"===i)return(0,r.jsx)(H,{},i);if("github"===i)return(0,r.jsx)(q,{provider:"github"},i);if("google"===i)return(0,r.jsx)(q,{provider:"google"},i);if("linkedin"===i)return(0,r.jsx)(q,{provider:"linkedin"},i);if("tiktok"===i)return(0,r.jsx)(q,{provider:"tiktok"},i);if("line"===i)return(0,r.jsx)(q,{provider:"line"},i);if("twitch"===i)return(0,r.jsx)(q,{provider:"twitch"},i);if("spotify"===i)return(0,r.jsx)(q,{provider:"spotify"},i);if("instagram"===i)return(0,r.jsx)(q,{provider:"instagram"},i);if("twitter"===i)return(0,r.jsx)(q,{provider:"twitter"},i);if("telegram"===i)return f.loginConfig.telegramHasHmacCredentials?(0,r.jsx)(Q,{},i):(0,r.jsx)(q,{provider:"telegram"},i);if((0,l.i)(i))return(0,r.jsx)(q,{provider:i},i);if(i.startsWith("privy:")){let e=i.split(":")[1];if(!e)throw Error("Invalid cross-app provider format. App ID missing.");return(0,r.jsx)(B,{appId:e},i)}let a=en.findIndex(({id:e})=>e===u.W.normalize(i)),t="solana"===V?"solana-only":"ethereum-only";return(0,r.jsx)(u.a,{recent:!0,index:a,data:{wallets:en,walletChainType:t,handleWalletClick(r){n(e=>({...e,externalConnectWallet:{walletList:b,walletChainType:t,preSelectedWalletId:r.id}})),v(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}})},eb=en.filter(e=>e.id!==u.W.normalize(A||"")),eC=eb.map((i,a)=>(0,r.jsx)(u.a,{index:a,data:{walletChainType:C,wallets:eb,handleWalletClick(r){n(e=>({...e,externalConnectWallet:{walletList:b,walletChainType:C,preSelectedWalletId:r.id}})),v(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}},i.id)),ek=ed.filter(e=>e!==S?.loginMethod).flatMap(ey),ej=ew.flatMap(ey);"web3-first"===eu&&"default"===eg?eC.unshift(...ej):"web2-first"===eu&&ek.unshift(...ej);let eA="web2-overflow"===eg?()=>ev("default"):void 0,eV=ed.filter(e=>"email"!==e&&"sms"!==e),eS=(({priority:e,email:r,sms:i,social:a})=>"web2-first"===e?"Other socials":r&&i&&a.length>0||r&&a.length>0?"Log in with email or socials":i&&a.length>0?"Log in with sms or socials":r&&i?"Continue with email or sms":r?"Continue with email":i?"Continue with sms":"Log in with a social account")({priority:eu,email:D,sms:z,social:eV}),eD=(({priority:e,email:i,sms:a,social:t})=>"web2-first"===e||t.length>0?(0,r.jsx)(w,{}):i&&a?(0,r.jsx)(I,{}):i?(0,r.jsx)(m.f,{}):a?(0,r.jsx)(x.f,{}):null)({priority:eu,email:D,sms:z,social:eV}),ez=(0,r.jsx)(M.W,{text:(({priority:e})=>"web2-first"===e?"Continue with a wallet":"Other wallets")({priority:eu}),onClick:()=>{n({...t,externalConnectWallet:{walletChainType:y?.walletChainType??f.appearance.walletChainType}}),v(e?"ConnectOnlyLandingScreen":"AuthenticateWithWalletScreen")}}),eT=(0,r.jsx)(K,{text:eS,icon:eD,onClick:()=>ev("web2-overflow")}),eM=+!eh,eF=ea&&eC.length>0,eL=0===ek.length&&ea&&0===eC.length,eE=5-!!eF,eP="default"===eg&&f?.appearance.logo,eB="default"===eg&&f.appearance.loginMessage;return(0,r.jsxs)(F.S,{title:f.appearance.landingHeader,icon:eP?(0,r.jsx)(L,{}):void 0,iconVariant:eP?"logo":void 0,onClose:ex,showClose:!0,onBack:eA,showBack:!!eA,helpText:f||ec&&"default"===eg?(0,r.jsxs)(r.Fragment,{children:[ec&&"default"===eg&&!f.globalDisablePasskeys&&(0,r.jsx)(R,{}),f&&(0,r.jsx)(o.T,{app:f})]}):void 0,watermark:!0,children:[eB&&("string"==typeof f.appearance.loginMessage?(0,r.jsx)($,{children:f.appearance.loginMessage}):(0,r.jsx)(Y,{children:f.appearance.loginMessage})),(0,r.jsx)(h.o,{$colorScheme:f.appearance.palette.colorScheme,children:"default"===eg&&"web2-first"===eu?(0,r.jsxs)(r.Fragment,{children:[ek.length>eE?ek.slice(0,eE-1):ek,ek.length>eE&&eT,eF&&ez,eL&&(0,r.jsx)(N,{chainType:f.appearance.walletChainType})]}):"default"===eg&&"web3-first"===eu?(0,r.jsxs)(r.Fragment,{children:[ea&&(0,r.jsxs)(r.Fragment,{children:[eC.length>eE?eC.slice(0,eE-1):eC,eC.length>eE&&ez]}),ek.length>eM&&eT,ek.length===eM&&ek[0],eL&&(0,r.jsx)(N,{chainType:f.appearance.walletChainType})]}):"web2-overflow"===eg?(0,r.jsx)(r.Fragment,{children:"web3-first"===eu?ek:ek.slice(3)}):null})]})}],71135)},103576,e=>{var r=e.i(60058),i=e.i(487804);let a=r.z.label`
  display: block;
  position: relative;
  width: 100%;
  height: 56px;

  && > :first-child {
    position: absolute;
    left: 0.75em;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid
      ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};
    border-radius: var(--privy-border-radius-md);
    width: 100%;
    height: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-accent-light)"};
      box-shadow: ${({$error:e})=>e?"none":"0 0 0 1px var(--privy-color-accent-light)"};
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 16px 17px;
    /* matches the border radius of the input only on the right side where we touch the radius */
    border-radius: 0 var(--privy-border-radius-md) var(--privy-border-radius-md) 0;

    :focus {
      outline: none;
    }
    &:disabled {
      opacity: 0.4; /* Make it visually appear disabled */
      cursor: not-allowed; /* Change cursor to not-allowed */
    }
    &:disabled,
    &:disabled:hover,
    &:disabled > span {
      color: var(--privy-color-foreground-3); /* Change text color to grey */
    }
  }
`,t=(0,r.z)(a)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;
`,o=(0,r.z)(a)`
  && > input {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-right: ${e=>e.$stacked?"16px":"88px"};

    border: 1px solid
      ${({$error:e})=>e?"var(--privy-color-error) !important":"var(--privy-color-foreground-4)"};

    && > input::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0;
    line-height: 24px;
    padding: 16px 17px;

    :focus {
      outline: none;
    }
  }
`,n=r.z.div`
  width: 100%;

  /* Add styling for the ErrorMessage within EmailInput */
  && > ${i.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`;e.s(["E",0,t,"I",0,n,"a",0,o])},487804,e=>{var r=e.i(60058);let i=r.z.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`;e.s(["E",0,i])},871443,e=>{var r=e.i(704688),i=e.i(60058);let a=i.z.a`
  && {
    color: ${({$variant:e})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({$variant:e})=>"underlined"===e?"underline":"var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
    opacity: ${({$disabled:e})=>e?.5:1};

    font-size: ${({$size:e})=>{switch(e){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${({$size:e})=>{switch(e){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({$variant:e,$disabled:r})=>"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:e})=>e?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:e,$disabled:r})=>r?"underlined"===e?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: var(--privy-shadow-focus-ring);
      border-radius: 2px;
    }
  }
`;e.s(["L",0,({size:e="md",variant:i="navigation",disabled:t=!1,as:o,children:n,onClick:l,...s})=>(0,r.jsx)(a,{as:o,$size:e,$variant:i,$disabled:t,onClick:e=>{t?e.preventDefault():l?.(e)},...s,children:n})])},83985,e=>{var r=e.i(60058);let i=r.q`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,a=r.m`
  ${e=>e.$isLoading?r.m`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",0,a])},941177,e=>{var r=e.i(704688),i=e.i(60058),a=e.i(800307);function t(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460 40",...e,children:(0,r.jsx)("g",{fill:e.color||"var(--privy-color-foreground)",children:(0,r.jsx)("path",{d:"M0 15.4v15.38h4.64V19.96h3.58c2.47 0 3.63-.01 3.77-.02 1-.08 1.49-.15 2.18-.3a9.45 9.45 0 0 0 4.6-2.37c1.66-1.57 2.64-3.87 2.81-6.56.02-.3.02-1.19 0-1.49-.1-1.77-.56-3.35-1.36-4.72A8.84 8.84 0 0 0 15.14.57c-.93-.3-1.75-.43-3.09-.54C11.9.02 10.2 0 5.93 0H0ZM10.85 4c1.85.05 3.1.45 4.16 1.3.22.17.54.49.69.68a5.97 5.97 0 0 1 1.19 3.13c.04.35.04 1.36 0 1.71-.08.68-.23 1.3-.44 1.85a4.8 4.8 0 0 1-1.09 1.68A5.63 5.63 0 0 1 12 15.92c-.6.08-.4.08-4.01.09H4.64V3.98h2.9c1.6 0 3.08 0 3.31.02ZM187.65 5.71v5.72h-.27l-.09-.14a15.9 15.9 0 0 0-1.21-1.73c-.43-.5-1-.95-1.7-1.36-.54-.3-1.05-.5-1.73-.63a8.98 8.98 0 0 0-1.7-.17 8.84 8.84 0 0 0-7.8 4.03 12.95 12.95 0 0 0-2.03 6.39c-.07.98-.06 2.15.02 3.13.2 2.47.87 4.53 2.02 6.25a8.98 8.98 0 0 0 10.22 3.65 6.5 6.5 0 0 0 2.8-1.93c.41-.51.84-1.1 1.1-1.55l.1-.17h.37v3.58h4.38V0h-4.48Zm-5.24 5.54c1.3.14 2.3.6 3.17 1.48.9.9 1.5 2.09 1.85 3.64.36 1.6.39 3.72.06 5.43a8.13 8.13 0 0 1-1.54 3.62 5.1 5.1 0 0 1-3.93 1.96 6.13 6.13 0 0 1-2.32-.31 5.87 5.87 0 0 1-3.33-3.5c-.39-1-.62-2.05-.72-3.32-.03-.32-.04-1.35-.02-1.73.08-1.56.4-2.91.96-4.05a6.2 6.2 0 0 1 1.06-1.58 5.08 5.08 0 0 1 3.6-1.66c.25-.02.9 0 1.16.02ZM210.07 15.39l.01 15.38h4.38l.01-3.57h.37l.09.15c.24.44.84 1.26 1.21 1.7a6.79 6.79 0 0 0 2.57 1.75 9.3 9.3 0 0 0 6.86-.49 9.28 9.28 0 0 0 4.05-4.07A13.05 13.05 0 0 0 231 21.6c.21-1.73.18-3.7-.09-5.32a13.03 13.03 0 0 0-1.5-4.3 9.1 9.1 0 0 0-3.75-3.63 9.15 9.15 0 0 0-4.43-.96 7.46 7.46 0 0 0-2.8.5A7.07 7.07 0 0 0 216 9.7c-.4.52-.82 1.12-1.1 1.59l-.07.14h-.27V0h-4.5Zm11.13-4.14c1.07.1 1.94.44 2.7 1.04a6.1 6.1 0 0 1 1.64 1.98c.43.84.78 2 .94 3.11.15 1.16.16 2.4.02 3.54a9.34 9.34 0 0 1-1.39 4.03 5.33 5.33 0 0 1-2.69 2.15c-.9.3-2.04.38-3.06.2a5.14 5.14 0 0 1-3.45-2.37 6.03 6.03 0 0 1-.45-.8c-.5-1.03-.8-2.2-.92-3.58-.04-.49-.06-.89-.05-1.53.01-.76.05-1.23.13-1.85.38-2.53 1.47-4.38 3.15-5.31a5.46 5.46 0 0 1 2.3-.63 10 10 0 0 1 1.13.02ZM69.05 2.17l-.01 2.77V7.7h-3.36v3.6h3.36v6.8l.01 7.15c.06 1.4.4 2.44 1.1 3.37a5.8 5.8 0 0 0 2.97 2.07c.91.3 1.83.42 2.9.38a8.71 8.71 0 0 0 2.66-.48l-.8-3.7-.38.06a4.96 4.96 0 0 1-2.43-.06c-.33-.1-.56-.25-.8-.49-.4-.41-.6-.88-.7-1.67-.02-.2-.02-.62-.03-6.82v-6.6h4.73V7.7h-4.73V2.16h-4.49ZM133.34 2.17V7.7h-3.39v3.6h3.38v6.9l.01 7.17a5.66 5.66 0 0 0 2.36 4.49c.85.6 2.03 1.03 3.26 1.17.85.1 2.03.05 2.81-.1.3-.06.75-.18 1-.26l.2-.06v-.05l-.81-3.67-.37.06a4.99 4.99 0 0 1-1.8.09c-.85-.13-1.32-.4-1.7-.97a2.63 2.63 0 0 1-.39-1.04c-.06-.4-.06 0-.06-7.1V11.3h4.7V7.7h-4.7l-.01-2.77V2.16h-4.49ZM293.41 2.36a14.56 14.56 0 0 0-13.7 16.07 14.59 14.59 0 0 0 21.86 11.08 14.5 14.5 0 0 0 7.11-14.07 14.61 14.61 0 0 0-6.53-10.73 14.49 14.49 0 0 0-8.74-2.35ZM350.8 2.36a10.17 10.17 0 0 0-7.56 4.2c-.16.2-.45.63-.58.83l-.05.1h-.47l-.01-4.36h-7.36v36.4h7.82V27.27h.49l.05.07a11.3 11.3 0 0 0 7.49 4.15 10.52 10.52 0 0 0 9.38-4.1c1.66-2.1 2.73-4.9 3.07-8.06.1-.87.13-1.4.13-2.37 0-.8 0-1.1-.07-1.76a15.95 15.95 0 0 0-3.23-8.72 12.8 12.8 0 0 0-1.85-1.84 10.49 10.49 0 0 0-7.26-2.28Zm-.94 6.05c1.27.15 2.33.65 3.2 1.5.98.96 1.67 2.31 2.03 4 .34 1.57.38 3.68.12 5.39a9.78 9.78 0 0 1-1.04 3.25c-.14.25-.44.69-.6.89a5.35 5.35 0 0 1-4.31 2.07 5.25 5.25 0 0 1-4.41-1.9 7.35 7.35 0 0 1-1.26-2.32 14.09 14.09 0 0 1-.62-4.83c.05-1.98.38-3.53 1.02-4.85a5.63 5.63 0 0 1 2.5-2.65c.66-.34 1.3-.5 2.14-.58.18-.02 1.04 0 1.23.03ZM363.63 3.1l-.01 3.2v3.16h1.43c1.26.01 1.44.02 1.54.04.42.09.66.28.79.62.08.23.08.08.08 2.96a911.57 911.57 0 0 1 .03 10.18v7.54h7.82v-7.4l.01-7.83c.03-.94.11-1.63.27-2.28.46-1.9 1.54-2.93 3.35-3.23.52-.08.2-.08 5-.08h4.4V3.08h-3.1c-3.48 0-3.91.01-4.67.1-1.83.2-3.04.79-3.96 1.88-.5.6-.9 1.32-1.26 2.26l-.06.17h-.46V3.09h-5.6c-4.46 0-5.6 0-5.6.02ZM390.8 16.95V30.8h3.87l3.86-.01V3.09h-7.73ZM400.6 3.1l-.01.4v.38l4.66 13.4 4.69 13.47.02.05h10.3l.03-.05 4.67-13.45 4.67-13.4V3.1h-7.43l-6.7 19.26h-.5l-3.28-9.5-3.31-9.64-.05-.12h-3.88l-3.88.01ZM430.98 3.1c-.01 0-.02.19-.02.4v.39l5.08 14.59c2.8 8.02 5.08 14.6 5.08 14.61.01.02-.22.02-4.8.02h-4.82v6.42h4.95c5.09 0 5.23 0 5.87-.06 3.15-.28 5.29-1.63 6.63-4.15.28-.55.44-.95.87-2.16L459 6.78l1-2.89v-.8h-7.43l-6.69 19.26h-.5l-3.27-9.46-3.31-9.64-.06-.16h-3.88l-3.88.01ZM36.57 7.36c-1.36.1-2.6.6-3.62 1.45a5.65 5.65 0 0 0-1.67 2.42l-.05.13H31V7.7h-4.35v23.08h4.5v-7.3c0-8 0-7.34.08-7.82a4.89 4.89 0 0 1 2.06-3.18c.83-.58 1.74-.89 2.87-.98a11.87 11.87 0 0 1 2.8.25H39v-4.3l-.21-.02c-.61-.07-1.74-.1-2.22-.07ZM51.08 7.41c-2.33.12-4.3.84-5.95 2.16a9.89 9.89 0 0 0-2.03 2.2 12.5 12.5 0 0 0-2 5.78 18.04 18.04 0 0 0 0 3.65 12.13 12.13 0 0 0 2.26 6.05 9.74 9.74 0 0 0 5 3.52c2.11.64 4.7.64 6.8 0a9.78 9.78 0 0 0 4.88-3.37c1.38-1.78 2.19-4 2.4-6.58.13-1.46.06-3.06-.18-4.42a11.24 11.24 0 0 0-3.58-6.6 10 10 0 0 0-5.75-2.35c-.56-.06-1.31-.07-1.85-.04Zm1.42 3.78c.88.1 1.62.34 2.28.75a6.13 6.13 0 0 1 1.99 2.15 10.31 10.31 0 0 1 1.2 5c.02 1.23-.12 2.44-.42 3.51a7.14 7.14 0 0 1-1.81 3.32c-.61.6-1.2.98-1.95 1.24a6 6 0 0 1-2 .3 5.7 5.7 0 0 1-2.72-.6 5 5 0 0 1-1.28-.94A7.1 7.1 0 0 1 46 22.73c-.57-1.99-.6-4.46-.08-6.5a7.24 7.24 0 0 1 2.03-3.67 5.13 5.13 0 0 1 3.35-1.4 11 11 0 0 1 1.2.03ZM92.05 7.4c-.96.06-1.56.15-2.3.33a9.62 9.62 0 0 0-6.09 4.66 13.5 13.5 0 0 0-1.71 7c0 .83 0 1.04.06 1.6.16 1.77.58 3.32 1.29 4.7A9.72 9.72 0 0 0 90.28 31c1.84.37 4.08.32 5.85-.13a9.07 9.07 0 0 0 5.02-3.1A7.64 7.64 0 0 0 102.5 25l-2.11-.39-2.11-.38-.08.13a4.72 4.72 0 0 1-2.35 2.55 6.3 6.3 0 0 1-2.23.58c-.29.03-1.13.03-1.44 0a6.35 6.35 0 0 1-3.02-1.04 5.93 5.93 0 0 1-2.02-2.43 8.44 8.44 0 0 1-.72-3.18v-.26h16.38v-.81c0-1.83-.06-2.76-.25-3.87-.2-1.22-.53-2.24-1.05-3.28a8.9 8.9 0 0 0-2.66-3.26 10.1 10.1 0 0 0-5.34-1.94 18.3 18.3 0 0 0-1.46-.03Zm1.3 3.75c1.2.13 2.19.55 3.05 1.3a5.8 5.8 0 0 1 1.78 2.96c.13.51.21 1.17.21 1.66v.15H86.43v-.12c.08-.97.3-1.78.72-2.61.5-1 1.2-1.8 2.14-2.42a5.32 5.32 0 0 1 2.9-.95c.2-.01.97 0 1.17.03ZM116.79 7.41c-2 .1-3.73.65-5.22 1.65a10.7 10.7 0 0 0-4.25 6.06 16.1 16.1 0 0 0-.5 5.8c.2 2.17.84 4.13 1.88 5.76.58.9 1.32 1.73 2.15 2.4a9.37 9.37 0 0 0 3.6 1.8 12.06 12.06 0 0 0 3.92.34 10.2 10.2 0 0 0 3.84-.95 8.31 8.31 0 0 0 4.76-6.75l.01-.04h-4.37l-.05.16a4.87 4.87 0 0 1-4.24 3.75c-.59.07-1.32.06-1.93-.05a5.47 5.47 0 0 1-3.5-2.27c-.56-.75-1-1.73-1.26-2.79a13.8 13.8 0 0 1-.16-5.24 7.77 7.77 0 0 1 2.1-4.3 5.48 5.48 0 0 1 2.15-1.3 6.4 6.4 0 0 1 3.89.1c.59.21 1.03.5 1.5.96a5.32 5.32 0 0 1 1.46 2.5l.04.15h4.37v-.06a8.22 8.22 0 0 0-5.31-6.94 10.98 10.98 0 0 0-4.88-.74ZM156.2 7.41a9.87 9.87 0 0 0-6 2.29 11.02 11.02 0 0 0-3.41 5.43c-.52 1.78-.68 3.9-.48 5.97.17 1.8.63 3.38 1.37 4.8a9.68 9.68 0 0 0 5.91 4.86c1.65.48 3.63.61 5.53.36 3.72-.49 6.55-2.62 7.56-5.69.12-.39.13-.42.1-.43-.02 0-4.13-.75-4.19-.75-.03 0-.04 0-.1.16-.18.42-.45.9-.72 1.22-.16.2-.49.53-.7.7-.67.54-1.5.9-2.43 1.08-.48.08-.83.11-1.41.11-.64 0-1.07-.04-1.6-.15a5.76 5.76 0 0 1-3.93-2.83 8 8 0 0 1-.99-3.79v-.16h16.38v-1.11l-.02-1.43c-.1-2.25-.53-4-1.35-5.59a9.24 9.24 0 0 0-6.18-4.75c-1.04-.26-2.2-.36-3.33-.3Zm1.45 3.74a5.35 5.35 0 0 1 3.66 1.94 6.1 6.1 0 0 1 1.38 4.01v.12h-11.97v-.06c0-.02 0-.14.02-.25a6.6 6.6 0 0 1 2.15-4.32 5.73 5.73 0 0 1 3.5-1.46c.25-.02 1 0 1.26.02ZM233.58 7.82l8.37 23.22a49.22 49.22 0 0 1-.67 1.9 5.36 5.36 0 0 1-1.14 1.8c-.41.4-.82.58-1.48.69-.27.04-1.03.03-1.35 0a8.05 8.05 0 0 1-1.1-.23l-1.08 3.67c0 .02.32.14.66.22.83.21 1.57.29 2.56.28.56-.01.8-.03 1.24-.1 2.71-.4 4.66-2.09 5.86-5.08l9.64-26.44c0-.02-4.82-.06-4.83-.05l-2.93 8.96-2.91 8.94h-.24l-.22-.65-2.91-8.95-2.7-8.3H233.53ZM293.05 35.8c-1.18.04-1.93.09-2.8.16-2.52.24-4.53.69-5.43 1.23-.7.41-.76.86-.2 1.28.88.66 3.29 1.19 6.36 1.4a48.55 48.55 0 0 0 5.75.05c3.47-.19 6.24-.78 7.11-1.5.22-.19.3-.34.3-.53 0-.1 0-.12-.04-.22-.35-.69-2.32-1.3-5.25-1.63a41.09 41.09 0 0 0-5.8-.24Zm0 0"})})})}let o=i.z.span`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: var(--privy-color-foreground-3);
  display: block;

  && > a {
    color: var(--privy-color-accent);
  }
`,n=i.z.a`
  && {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,l=i.z.div`
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
`;e.s(["B",0,({className:e})=>{let{appearance:i}=(0,a.a)();return(0,r.jsx)(l,{className:e,children:i.footerLogo??(0,r.jsx)(n,{href:"https://privy.io/?utm_source=module&utm_medium=module&utm_campaign=registration_module",target:"_blank",rel:"noopener noreferrer",id:"protected-by-privy",children:(0,r.jsx)(t,{color:"currentColor",height:13,width:150})})})},"M",0,l,"T",0,function({app:{legal:{privacyPolicyUrl:e,termsAndConditionsUrl:i,requireUsersAcceptTerms:a}},alwaysShowImplicitConsent:t}){let n=!(!e||!i);return(!a||t)&&(i||e)?(0,r.jsxs)(o,{children:["By logging in I agree to the"," ",i&&(0,r.jsx)("a",{href:i,target:"_blank",children:n?"Terms":"Terms of Service"}),n&&" & ",e&&(0,r.jsx)("a",{href:e,target:"_blank",children:"Privacy Policy"})]}):(0,r.jsx)(o,{})}])},772949,e=>{var r=e.i(704688),i=e.i(60058),a=e.i(852560),t=e.i(770331),o=e.i(536024),n=e.i(6674);let l=n.forwardRef(function({title:e,titleId:r,...i},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},i),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});var s=e.i(800307),c=e.i(705390);let d=i.z.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: auto;
    cursor: pointer;
    border-radius: ${({$size:e})=>"sm"===e?"6px":"var(--privy-border-radius-sm)"};

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.016px;
  }

  && {
    height: ${({$size:e})=>"sm"===e?"28px":"48px"};
    padding: 0 ${({$size:e})=>"sm"===e?"10px":"16px"};
  }
`,p=({children:e,loading:i,disabled:t,success:o,size:n="lg",loadingText:l="Loading...",as:s,onClick:c,...d})=>{let p="a"===s,u=!(!i&&!t);return(0,r.jsx)(h,{as:s,disabled:p?void 0:u,"aria-disabled":p?u:void 0,$success:o,$size:n,onClick:e=>{p&&u?e.preventDefault():c?.(e)},...d,children:i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.B,{}),l?(0,r.jsx)("span",{style:{marginLeft:"8px"},children:l}):null]}):e})},u=(0,i.z)(d)`
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
`,h=(0,i.z)(d)`
  position: relative;

  && {
    background-color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent-dark)"};
  }

  &:active {
    background-color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent-dark)"};
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
  ${e=>e.disabled&&i.m`
      &&&,
      &&&:hover,
      &&&:active {
        background-color: var(--privy-color-background-2);
        border: 1px solid var(--privy-color-border-default);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,g=({children:e,loading:i,disabled:t,size:o="lg",loadingText:n="Loading...",as:l,onClick:s,...c})=>{let d="a"===l,p=!(!i&&!t);return(0,r.jsx)(f,{as:l,disabled:d?void 0:p,"aria-disabled":d?p:void 0,$size:o,onClick:e=>{d&&p?e.preventDefault():s?.(e)},...c,children:i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.B,{}),n?(0,r.jsx)("span",{style:{marginLeft:"8px"},children:n}):null]}):e})},v=({children:e,loading:i,disabled:t,size:o="lg",loadingText:n="Loading...",as:l,onClick:s,...c})=>{let d="a"===l,p=!(!i&&!t);return(0,r.jsx)(m,{as:l,disabled:d?void 0:p,"aria-disabled":d?p:void 0,$size:o,onClick:e=>{d&&p?e.preventDefault():s?.(e)},...c,children:i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.B,{}),n?(0,r.jsx)("span",{style:{marginLeft:"8px"},children:n}):null]}):e})},f=(0,i.z)(d)`
  && {
    border-width: 1px;
    border-style: solid;
    border-color: ${e=>e.$warn?"var(--privy-color-border-error)":"var(--privy-color-accent)"};
    background-color: var(--privy-color-background);
    color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
    transition:
      border-color 200ms ease,
      color 200ms ease,
      background-color 200ms ease;
  }

  &:hover {
    border-color: ${e=>e.$warn?"var(--privy-color-border-error)":"var(--privy-color-border-interactive-hover)"};
    background-color: ${e=>e.$warn?"var(--privy-color-error-light)":"var(--privy-color-info-bg-hover)"};
    color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
  }

  &:active {
    border-color: ${e=>e.$warn?"var(--privy-color-border-error)":"var(--privy-color-border-interactive)"};
    background-color: ${e=>e.$warn?"var(--privy-color-error-bg-hover)":"var(--privy-color-info-bg)"};
    color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
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
  ${e=>e.disabled&&i.m`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,m=(0,i.z)(d)`
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
  ${e=>e.disabled&&i.m`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,x=i.z.button`
  && {
    padding: 12px 16px;
    font-weight: 500;
    text-align: center;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent);
    border-radius: var(--privy-border-radius-sm);
    min-width: 144px;
    opacity: ${e=>e.invisible?"0":"1"};
    transition:
      opacity 200ms ease,
      background-color 200ms ease,
      color 200ms ease;
    user-select: none;

    ${e=>e.invisible&&i.m`
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
`;i.z.div`
  /* Set to match height of SoftCtaButton to avoid reflow if conditionally rendered */
  height: 44px;
`;let w=i.z.button`
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
      opacity: ${e=>+!e.$isSubmitting};
    }

    && > :last-child {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);

      /** Will map to the opposite of first span */
      opacity: ${e=>+!!e.$isSubmitting};
    }

    :disabled,
    :hover:disabled {
      color: var(--privy-color-foreground-disabled);
      cursor: not-allowed;
    }
  }
`,y=({backFn:e,disabled:i=!1,"aria-label":a})=>(0,r.jsx)("div",{children:(0,r.jsx)(k,{type:"button","aria-label":a,disabled:i,onClick:i?void 0:e,children:(0,r.jsx)(t.f,{height:"16px",width:"16px",strokeWidth:2})})}),b=({infoFn:e})=>(0,r.jsx)("div",{children:(0,r.jsx)(j,{"aria-label":"info",onClick:e,children:(0,r.jsx)(o.f,{height:"22px",width:"22px",strokeWidth:2})})}),C=e=>(0,r.jsx)("div",{children:(0,r.jsx)(k,{type:"button","aria-label":e["aria-label"]??"close modal",onClick:e.onClose,children:(0,r.jsx)(l,{height:"16px",width:"16px",strokeWidth:2})})}),k=i.z.button`
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
`,j=(0,i.z)(k)`
  && {
    background-color: transparent;
  }
`,A=i.z.div`
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
`,V=i.z.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`,S=i.z.div`
  display: flex;
  justify-content: flex-end;
`,D=i.z.div`
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
`,z=i.z.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground);
`;e.s(["B",0,({variant:e="primary",size:i="lg",children:a,success:t,...o})=>{switch(e){case"secondary":return(0,r.jsx)(g,{size:i,...o,children:a});case"error":return(0,r.jsx)(g,{$warn:!0,size:i,...o,children:a});case"muted":return(0,r.jsx)(v,{size:i,...o,children:a});default:return(0,r.jsx)(p,{size:i,success:t,...o,children:a})}},"E",0,({children:e,onClick:i,disabled:t,isSubmitting:o,...n})=>(0,r.jsxs)(w,{$isSubmitting:o,onClick:i,disabled:t,...n,children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{children:(0,r.jsx)(a.B,{})})]}),"M",0,({backFn:e,infoFn:i,onClose:a,title:t,eyebrow:o,closeable:n=!0,className:l})=>{let{closePrivyModal:d}=(0,c.u)(),p=(0,s.a)();return(0,r.jsxs)(A,{className:l,children:[(0,r.jsxs)(V,{children:[e&&(0,r.jsx)(y,{backFn:e}),o&&(0,r.jsx)(z,{children:o}),!o&&t&&(0,r.jsx)(D,{id:"privy-dialog-title",children:t}),(0,r.jsx)("div",{style:{height:24}}),i&&(0,r.jsx)(b,{infoFn:i})]}),(0,r.jsx)(S,{children:!p.render.standalone&&n&&(0,r.jsx)(C,{onClose:a||(()=>d())})})]})},"P",0,p,"S",0,g,"b",0,({children:e,loading:i,disabled:t,...o})=>(0,r.jsx)(u,{disabled:t,...o,children:i?(0,r.jsx)(a.B,{color:"var(--privy-color-foreground-accent)"}):e}),"c",0,x,"d",0,v],772949)},827637,e=>{var r=e.i(704688),i=e.i(6674),a=e.i(60058),t=e.i(852560),o=e.i(941177),n=e.i(772949),l=e.i(731651);let s=a.z.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,c=a.z.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) * 1.5);
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 var(--screen-space-lg) var(--screen-space);
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,d=a.z.div`
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,a.z)(n.M)`
  margin: 0 -8px;
`,u=a.z.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  /* Enable scrolling */
  overflow-y: auto;

  /* Hide scrollbar but keep functionality when scrollable */
  /* Add padding for focus outline space, offset with negative margin */
  padding: 3px;
  margin: -3px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Gradient effect for scroll indication */
  ${({$colorScheme:e})=>"light"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`,h=a.z.div`
  display: flex;
  flex-direction: column;
  gap: var(--screen-space-lg);
  margin-top: 1.5rem;
`,g=a.z.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--screen-space);
`,v=a.z.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f=a.z.h3`
  && {
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: var(--privy-color-foreground);
    margin: 0;
  }
`,m=a.z.p`
  && {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: var(--privy-color-foreground);
  }
`,x=a.z.div`
  background: ${({$variant:e})=>{switch(e){case"success":return"var(--privy-color-success-bg)";case"warning":return"var(--privy-color-warn)";case"error":return"var(--privy-color-error-bg)";case"loading":case"logo":return"transparent";default:return"var(--privy-color-background-2)"}}};

  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=a.z.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    max-height: 90px;
    max-width: 180px;
  }
`,y=a.z.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > :first-child {
    position: relative;
  }

  > div > :last-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,b=({children:e,...i})=>(0,r.jsx)(s,{children:(0,r.jsx)(c,{...i,children:e})}),C=a.z.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,k=(0,a.z)(o.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,j=a.z.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,A=({step:e})=>e?(0,r.jsx)(C,{children:(0,r.jsx)(j,{pct:Math.min(100,e.current/e.total*100)})}):null;b.Header=({title:e,subtitle:i,icon:a,iconVariant:t,iconLoadingStatus:o,showBack:n,onBack:l,showInfo:s,onInfo:c,showClose:u,onClose:h,step:x,headerTitle:w,eyebrow:y,...C})=>(0,r.jsxs)(d,{...C,children:[(0,r.jsx)(p,{backFn:n?l:void 0,infoFn:s?c:void 0,onClose:u?h:void 0,title:w,eyebrow:y,closeable:u}),(a||t||e||i)&&(0,r.jsxs)(g,{children:[a||t?(0,r.jsx)(b.Icon,{icon:a,variant:t,loadingStatus:o}):null,!(!e&&!i)&&(0,r.jsxs)(v,{children:[e&&(0,r.jsx)(f,{children:e}),i&&(0,r.jsx)(m,{children:i})]})]}),x&&(0,r.jsx)(A,{step:x})]}),(b.Body=i.default.forwardRef(({children:e,...i},a)=>(0,r.jsx)(u,{ref:a,...i,children:e}))).displayName="Screen.Body",b.Footer=({children:e,...i})=>(0,r.jsx)(h,{id:"privy-content-footer-container",...i,children:e}),b.Actions=({children:e,...i})=>(0,r.jsx)(V,{...i,children:e}),b.HelpText=({children:e,...i})=>(0,r.jsx)(S,{...i,children:e}),b.FooterText=({children:e,...i})=>(0,r.jsx)(D,{...i,children:e}),b.Watermark=()=>(0,r.jsx)(k,{}),b.Icon=({icon:e,variant:a="subtle",loadingStatus:o})=>"logo"===a&&e?(0,r.jsx)(w,"string"==typeof e?{children:(0,r.jsx)("img",{src:e,alt:""})}:i.default.isValidElement(e)?{children:e}:{children:i.default.createElement(e)}):"loading"===a?e?(0,r.jsx)(y,{children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(t.C,{success:o?.success,fail:o?.fail}),"string"==typeof e?(0,r.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):i.default.isValidElement(e)?i.default.cloneElement(e,{style:{width:"38px",height:"38px"}}):i.default.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,r.jsx)(x,{$variant:a,children:(0,r.jsx)(l.N,{size:"64px"})}):(0,r.jsx)(x,{$variant:a,children:e&&("string"==typeof e?(0,r.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):i.default.isValidElement(e)?e:i.default.createElement(e,{width:32,height:32,stroke:(()=>{switch(a){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let V=a.z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,S=a.z.div`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 13px;
    line-height: 20px;

    & a {
      text-decoration: underline;
    }
  }
`,D=a.z.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; /* 11px */
    line-height: 1rem; /* 16px */
  }
`;e.s(["S",0,b])},299820,e=>{var r=e.i(704688),i=e.i(772949),a=e.i(827637);e.s(["S",0,({primaryCta:e,secondaryCta:t,helpText:o,footerText:n,watermark:l=!0,children:s,...c})=>{let d=e||t?(0,r.jsxs)(r.Fragment,{children:[e&&(()=>{let{label:a,...t}=e,o=t.variant||"primary";return(0,r.jsx)(i.B,{...t,variant:o,style:{width:"100%",...t.style},children:a})})(),t&&(()=>{let{label:e,...a}=t,o=a.variant||"secondary";return(0,r.jsx)(i.B,{...a,variant:o,style:{width:"100%",...a.style},children:e})})()]}):null;return(0,r.jsxs)(a.S,{id:c.id,className:c.className,children:[(0,r.jsx)(a.S.Header,{...c}),s?(0,r.jsx)(a.S.Body,{children:s}):null,o||d||l?(0,r.jsxs)(a.S.Footer,{children:[o?(0,r.jsx)(a.S.HelpText,{children:o}):null,d?(0,r.jsx)(a.S.Actions,{children:d}):null,l?(0,r.jsx)(a.S.Watermark,{}):null]}):null,n?(0,r.jsx)(a.S.FooterText,{children:n}):null]})}])},927533,e=>{var r=e.i(704688);e.s(["W",0,({...e})=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,r.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,r.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]})])},368931,e=>{var r=e.i(704688),i=e.i(639753),a=e.i(142785);e.s(["W",0,({onClick:e,text:t})=>(0,r.jsxs)(a.L,{onClick:e,children:[(0,r.jsx)(a.m,{children:(0,r.jsx)(i.f,{})}),(0,r.jsx)(a.G,{children:t})]})])},329034,e=>{var r=e.i(704688);e.s(["F",0,e=>(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#855DCD"}),(0,r.jsxs)("g",{"clip-path":"url(#clip0_1715_1960)",children:[(0,r.jsx)("path",{d:"M4.5 4H28.5V28H4.5V4Z",fill:"#855DCD"}),(0,r.jsx)("path",{d:"M11.1072 8.42105H21.6983V23.5789H20.1437V16.6357H20.1284C19.9566 14.7167 18.3542 13.2129 16.4028 13.2129C14.4514 13.2129 12.849 14.7167 12.6771 16.6357H12.6619V23.5789H11.1072V8.42105Z",fill:"white"}),(0,r.jsx)("path",{d:"M8.28943 10.5725L8.92101 12.7239H9.45542V21.4275C9.1871 21.4275 8.96959 21.6464 8.96959 21.9165V22.5032H8.87242C8.60411 22.5032 8.38659 22.7221 8.38659 22.9922V23.5789H13.8279V22.9922C13.8279 22.7221 13.6104 22.5032 13.3421 22.5032H13.2449V21.9165C13.2449 21.6464 13.0274 21.4275 12.7591 21.4275H12.1761V10.5725H8.28943Z",fill:"white"}),(0,r.jsx)("path",{d:"M20.2408 21.4275C19.9725 21.4275 19.755 21.6464 19.755 21.9165V22.5032H19.6579C19.3895 22.5032 19.172 22.7221 19.172 22.9922V23.5789H24.6133V22.9922C24.6133 22.7221 24.3958 22.5032 24.1275 22.5032H24.0303V21.9165C24.0303 21.6464 23.8128 21.4275 23.5445 21.4275V12.7239H24.0789L24.7105 10.5725H20.8238V21.4275H20.2408Z",fill:"white"})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_1715_1960",children:(0,r.jsx)("rect",{width:"24",height:"24",fill:"white",transform:"translate(4.5 4)"})})})]})])},731651,e=>{var r=e.i(704688),i=e.i(60058);let a=i.z.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,t=i.z.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,o=i.z.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    width: calc(var(--spinner-size) * 0.4);
    height: calc(var(--spinner-size) * 0.4);
    border-radius: var(--privy-border-radius-full);
  }
`,n=i.z.div`
  position: absolute;
  inset: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,l=i.z.div`
  position: absolute;
  inset: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-icon-subtle) transparent transparent transparent;
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;e.s(["N",0,({size:e,centerIcon:i})=>(0,r.jsx)(a,{$size:e,children:(0,r.jsxs)(t,{children:[(0,r.jsx)(n,{}),(0,r.jsx)(l,{}),i?(0,r.jsx)(o,{children:i}):null]})})])},857442,e=>{var r=e.i(60058);r.z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,r.z.button`
  padding: 0.25rem;
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background: var(--privy-color-background-2);
`;let i=r.z.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &::after {
    content: ' ';
    border-radius: var(--privy-border-radius-full);
    height: 6px;
    width: 6px;
    background-color: var(--privy-color-icon-success);
    position: absolute;
    right: -3px;
    top: -3px;
  }
`,a=r.z.img`
  width: 32px;
  height: 32px;
  border-radius: 0.25rem;
  object-fit: contain;
`,t=r.z.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */
  border-radius: var(--privy-border-radius-sm);
  background-color: var(--privy-color-background-2);

  svg {
    width: 100%;
    max-width: 1rem;
    max-height: 1rem;
    stroke-width: 2;
  }
`,o=r.z.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 24rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-gutter: stable both-edges;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ${e=>"light"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
`;e.s(["C",0,t,"S",0,o,"W",0,a,"b",0,i])},906324,e=>{var r=e.i(704688);e.s(["T",0,function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e,children:[(0,r.jsx)("rect",{width:"512",height:"512",rx:"15%",fill:"#37aee2"}),(0,r.jsx)("path",{fill:"#c8daea",d:"M199 404c-11 0-10-4-13-14l-32-105 245-144"}),(0,r.jsx)("path",{fill:"#a9c9dd",d:"M199 404c7 0 11-4 16-8l45-43-56-34"}),(0,r.jsx)("path",{fill:"#f6fbfe",d:"M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"})]})}])},309215,238382,e=>{var r=e.i(704688);e.s(["A",0,({style:e,...i})=>(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",...e},...i,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#040507"}),(0,r.jsx)("path",{d:"M17.2949 6.37537C18.0156 5.44684 19.4671 4.57877 20.4927 4.46512C20.8178 4.42885 20.8581 4.43127 20.9312 4.50139L20.9967 4.56426L20.9816 4.99225C20.9564 5.65963 20.8682 6.12873 20.6716 6.6341C20.4751 7.13705 20.1198 7.71738 19.8426 7.97852C19.7594 8.06074 19.6007 8.22516 19.4948 8.34848C19.0563 8.84901 18.439 9.20205 17.5973 9.4366C17.2823 9.52606 17.2596 9.52848 16.8917 9.52606C16.4482 9.52365 16.3852 9.51156 16.3524 9.43176C16.3398 9.39791 16.3272 9.18996 16.3222 8.9675L16.3171 8.56127L16.423 8.17922C16.6347 7.41512 16.8791 6.90733 17.2949 6.37537Z",fill:"white"}),(0,r.jsx)("path",{d:"M17.4512 10.2081C18.4163 9.84541 19.7595 9.48754 20.2584 9.46336C20.6616 9.4416 21.2966 9.49238 21.7225 9.57943C22.1383 9.66164 22.4357 9.76078 22.8666 9.96148C23.5571 10.2831 24.1442 10.7135 24.6104 11.2382C24.9582 11.6299 24.9783 11.6807 24.8397 11.8113C24.7944 11.8548 24.6885 11.9249 24.6054 11.9709C24.4542 12.0507 23.8368 12.5464 23.8368 12.5875C23.8368 12.5971 23.736 12.7108 23.6125 12.8341C23.2068 13.25 23.0279 13.5861 22.7683 14.4252C22.7078 14.6186 22.6448 14.8725 22.6272 14.9934C22.5566 15.4577 22.5919 16.125 22.7154 16.7344C22.7885 17.1044 23.0808 17.7306 23.3706 18.1489C23.7763 18.7317 24.3786 19.2491 24.9909 19.5514C25.316 19.7086 25.5 19.8464 25.5 19.9334C25.5 19.96 25.4773 20.0205 25.4521 20.064C25.4244 20.1075 25.3866 20.2164 25.3639 20.3034C25.311 20.521 25.001 21.244 24.807 21.5971C24.0862 22.9052 23.3731 23.8748 22.6095 24.5833C21.8611 25.2725 21.1606 25.582 20.4348 25.5385C19.9359 25.5094 19.4596 25.3934 18.7842 25.1322C18.2248 24.917 18.0081 24.8493 17.7939 24.8203C17.688 24.8058 17.4915 24.7768 17.3604 24.7574C16.9774 24.697 16.7254 24.6921 16.4533 24.7478C15.5461 24.9267 15.5133 24.9364 15.0144 25.1371C14.2231 25.4562 13.8073 25.5578 13.2907 25.5578C12.8875 25.5602 12.696 25.5143 12.2575 25.3087C11.8694 25.125 11.5948 24.9315 11.2546 24.5978C10.9295 24.2811 10.7052 24.0151 10.2642 23.4323C9.18818 22.0081 9.02187 21.7276 8.49519 20.4582C8.28612 19.9546 8.19971 19.7502 8.13026 19.5402C8.07498 19.373 8.03043 19.2023 7.94332 18.8744C7.73164 18.074 7.70896 17.9869 7.70896 17.8709C7.70896 17.8153 7.68628 17.675 7.66108 17.5565C7.44184 16.5917 7.44688 15.0007 7.67116 14.1713C7.82236 13.6127 8.02648 13.088 8.30367 12.5512C8.92863 11.3325 9.71738 10.5539 10.874 10.0123C11.2571 9.8309 11.5444 9.74627 12.0534 9.65922C12.2903 9.62054 12.5523 9.56976 12.6355 9.54799C12.8421 9.49238 13.3184 9.49963 13.6057 9.56008C14.2911 9.71 14.7548 9.84058 15.2059 10.0123C16.0551 10.3411 16.549 10.4789 16.7506 10.4475C16.7692 10.4444 16.7848 10.4418 16.8002 10.4387C16.8815 10.4225 16.9601 10.3929 17.4512 10.2081Z",fill:"white"})]}),"D",0,({style:e,...i})=>(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",...e},...i,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#5462EB"}),(0,r.jsx)("path",{d:"M23.5433 8.87438C22.2479 8.26174 20.8587 7.81038 19.4063 7.55187C19.3799 7.54688 19.3534 7.55934 19.3398 7.58428C19.1612 7.91179 18.9633 8.33905 18.8247 8.67487C17.2625 8.43382 15.7084 8.43382 14.1782 8.67487C14.0396 8.33158 13.8345 7.91179 13.6551 7.58428C13.6414 7.56018 13.615 7.54771 13.5886 7.55187C12.1369 7.80955 10.7478 8.26092 9.45159 8.87438C9.44037 8.87937 9.43075 8.88769 9.42437 8.89849C6.78947 12.9558 6.06766 16.9134 6.42176 20.8219C6.42336 20.841 6.43378 20.8593 6.4482 20.871C8.18663 22.1868 9.87059 22.9857 11.5233 23.5152C11.5497 23.5235 11.5778 23.5135 11.5946 23.491C11.9855 22.9408 12.334 22.3606 12.6328 21.7504C12.6505 21.7147 12.6336 21.6723 12.5976 21.6581C12.0448 21.442 11.5185 21.1785 11.0122 20.8793C10.9721 20.8552 10.9689 20.7961 11.0058 20.7679C11.1123 20.6856 11.2189 20.6 11.3206 20.5135C11.339 20.4977 11.3647 20.4944 11.3863 20.5044C14.7125 22.0696 18.3136 22.0696 21.6006 20.5044C21.6222 20.4936 21.6479 20.4969 21.6671 20.5127C21.7688 20.5991 21.8754 20.6856 21.9827 20.7679C22.0196 20.7961 22.0172 20.8552 21.9771 20.8793C21.4708 21.1843 20.9445 21.442 20.3909 21.6573C20.3548 21.6715 20.3388 21.7147 20.3564 21.7504C20.6617 22.3597 21.0101 22.9399 21.3939 23.4902C21.4099 23.5135 21.4387 23.5235 21.4652 23.5152C23.1259 22.9857 24.8099 22.1868 26.5483 20.871C26.5635 20.8593 26.5731 20.8419 26.5747 20.8228C26.9985 16.3041 25.8649 12.3789 23.5697 8.89931C23.5641 8.88769 23.5545 8.87937 23.5433 8.87438ZM13.1295 18.442C12.1281 18.442 11.303 17.4944 11.303 16.3307C11.303 15.1669 12.1121 14.2193 13.1295 14.2193C14.155 14.2193 14.9721 15.1752 14.9561 16.3307C14.9561 17.4944 14.1469 18.442 13.1295 18.442ZM19.883 18.442C18.8816 18.442 18.0564 17.4944 18.0564 16.3307C18.0564 15.1669 18.8655 14.2193 19.883 14.2193C20.9084 14.2193 21.7255 15.1752 21.7095 16.3307C21.7095 17.4944 20.9084 18.442 19.883 18.442Z",fill:"#F7F7F7"})]}),"G",0,e=>(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#F1F2F9"}),(0,r.jsx)("path",{d:"M26.1001 16.2273C26.1001 15.5182 26.0365 14.8364 25.9183 14.1818H16.5001V18.05H21.8819C21.6501 19.3 20.9456 20.3591 19.8865 21.0682V23.5773H23.1183C25.0092 21.8364 26.1001 19.2727 26.1001 16.2273Z",fill:"#4285F4"}),(0,r.jsx)("path",{d:"M16.5001 26C19.2001 26 21.4637 25.1046 23.1182 23.5773L19.8864 21.0682C18.991 21.6682 17.8455 22.0227 16.5001 22.0227C13.8955 22.0227 11.691 20.2637 10.9046 17.9H7.56372V20.4909C9.20917 23.7591 12.591 26 16.5001 26Z",fill:"#34A853"}),(0,r.jsx)("path",{d:"M10.9047 17.8999C10.7047 17.2999 10.591 16.659 10.591 15.9999C10.591 15.3408 10.7047 14.6999 10.9047 14.0999V11.509H7.56376C6.86376 12.9025 6.49951 14.4405 6.50012 15.9999C6.50012 17.6136 6.88649 19.1408 7.56376 20.4908L10.9047 17.8999Z",fill:"#FBBC05"}),(0,r.jsx)("path",{d:"M16.5001 9.97726C17.9682 9.97726 19.2864 10.4818 20.3228 11.4727L23.191 8.60454C21.4591 6.99091 19.1955 6 16.5001 6C12.591 6 9.20917 8.2409 7.56372 11.5091L10.9046 14.1C11.691 11.7364 13.8955 9.97726 16.5001 9.97726Z",fill:"#EA4335"})]}),"I",0,function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:26,height:26,viewBox:"0 0 140 140",x:"0px",y:"0px",fill:"none",...e,children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"b",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#3771c8"}),(0,r.jsx)("stop",{stopColor:"#3771c8",offset:".128"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#60f",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"a",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#fd5"}),(0,r.jsx)("stop",{offset:".1",stopColor:"#fd5"}),(0,r.jsx)("stop",{offset:".5",stopColor:"#ff543e"}),(0,r.jsx)("stop",{offset:"1",stopColor:"#c837ab"})]}),(0,r.jsx)("radialGradient",{id:"c",cx:"158.429",cy:"578.088",r:"65",xlinkHref:"#a",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(0 -1.98198 1.8439 0 -1031.402 454.004)",fx:"158.429",fy:"578.088"}),(0,r.jsx)("radialGradient",{id:"d",cx:"147.694",cy:"473.455",r:"65",xlinkHref:"#b",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)",fx:"147.694",fy:"473.455"})]}),(0,r.jsx)("path",{fill:"url(#c)",d:"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z",transform:"translate(1.004 1)"}),(0,r.jsx)("path",{fill:"url(#d)",d:"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z",transform:"translate(1.004 1)"}),(0,r.jsx)("path",{fill:"#fff",d:"M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"})]})},"L",0,function(e){return(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsxs)("g",{"clip-path":"url(#clip0_1715_1956)",children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#0977B6"}),(0,r.jsx)("path",{d:"M9.46878 6.82104C10.6699 6.82104 11.6461 7.79742 11.6461 8.999C11.6461 10.2017 10.6699 11.1782 9.46878 11.1782C8.26447 11.1782 7.28967 10.2017 7.28967 8.999C7.28967 7.79742 8.26447 6.82104 9.46878 6.82104ZM7.58908 12.8309H11.3467V24.9207H7.58908V12.8309Z",fill:"white"}),(0,r.jsx)("path",{d:"M13.7032 12.8309H17.3076V14.4827H17.3576C17.8589 13.5322 19.0846 12.53 20.9127 12.53C24.7175 12.53 25.42 15.0341 25.42 18.2891V24.9207H21.6651V19.0415C21.6651 17.6388 21.6394 15.8355 19.7126 15.8355C17.7573 15.8355 17.4579 17.363 17.4579 18.9399V24.9207H13.7032L13.7032 12.8309Z",fill:"white"})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_1715_1956",children:(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"white"})})})]})},"S",0,function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:[(0,r.jsx)("path",{fill:"#1ed760",d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"}),(0,r.jsx)("path",{d:"M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"})]})},"T",0,function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","shape-rendering":"geometricPrecision","text-rendering":"geometricPrecision","image-rendering":"optimizeQuality","fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 1000 1000",...e,children:(0,r.jsx)("path",{fill:"currentColor",d:"M906.25 0H93.75C42.19 0 0 42.19 0 93.75v812.49c0 51.57 42.19 93.75 93.75 93.75l812.5.01c51.56 0 93.75-42.19 93.75-93.75V93.75C1000 42.19 957.81 0 906.25 0zM684.02 319.72c-32.42-21.13-55.81-54.96-63.11-94.38-1.57-8.51-2.45-17.28-2.45-26.25H515l-.17 414.65c-1.74 46.43-39.96 83.7-86.8 83.7-14.57 0-28.27-3.63-40.35-9.99-27.68-14.57-46.63-43.58-46.63-76.97 0-47.96 39.02-86.98 86.97-86.98 8.95 0 17.54 1.48 25.66 4.01V421.89c-8.41-1.15-16.95-1.86-25.66-1.86-105.01 0-190.43 85.43-190.43 190.45 0 64.42 32.18 121.44 81.3 155.92 30.93 21.72 68.57 34.51 109.14 34.51 105.01 0 190.43-85.43 190.43-190.43V400.21c40.58 29.12 90.3 46.28 143.95 46.28V343.03c-28.89 0-55.8-8.59-78.39-23.31z"})})},"a",0,e=>(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"black"}),(0,r.jsx)("path",{d:"M8.53901 8L14.7164 16.2153L8.5 22.8947H9.89907L15.3415 17.0468L19.7389 22.8947H24.5L17.975 14.2173L23.7612 8H22.3621L17.3499 13.3858L13.3001 8H8.53901ZM10.5964 9.02501H12.7837L22.4422 21.8695H20.255L10.5964 9.02501Z",fill:"#F7F7F7"})]}),"b",0,({style:e,...i})=>(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",...e},...i,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"black"}),(0,r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.5083 5.62451C10.8896 5.62451 6.34741 10.2078 6.34741 15.878C6.34741 20.4104 9.25774 24.2471 13.2951 25.605C13.7999 25.7071 13.9848 25.3844 13.9848 25.1129C13.9848 24.8752 13.9682 24.0604 13.9682 23.2115C11.1417 23.8227 10.5531 21.9892 10.5531 21.9892C10.0988 20.8009 9.42579 20.4954 9.42579 20.4954C8.50068 19.8673 9.49318 19.8673 9.49318 19.8673C10.5194 19.9352 11.0578 20.9198 11.0578 20.9198C11.9661 22.4815 13.4297 22.0402 14.0185 21.7686C14.1025 21.1065 14.3719 20.6482 14.6579 20.3936C12.4035 20.1559 10.0317 19.2732 10.0317 15.3347C10.0317 14.2142 10.4351 13.2976 11.0745 12.5847C10.9736 12.3301 10.6202 11.2774 11.1756 9.86844C11.1756 9.86844 12.0335 9.59678 13.968 10.9209C14.7962 10.6965 15.6503 10.5823 16.5083 10.5814C17.3662 10.5814 18.2408 10.7003 19.0484 10.9209C20.9831 9.59678 21.841 9.86844 21.841 9.86844C22.3963 11.2774 22.0428 12.3301 21.9419 12.5847C22.5981 13.2976 22.9849 14.2142 22.9849 15.3347C22.9849 19.2732 20.6131 20.1388 18.3419 20.3936C18.7121 20.7161 19.0316 21.3271 19.0316 22.2948C19.0316 23.6698 19.0149 24.7733 19.0149 25.1127C19.0149 25.3844 19.2 25.7071 19.7046 25.6052C23.742 24.2469 26.6523 20.4104 26.6523 15.878C26.669 10.2078 22.1102 5.62451 16.5083 5.62451Z",fill:"white"})]})],309215),e.s(["L",0,function(e){return(0,r.jsxs)("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e,children:[(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"black"}),(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"#06C755"}),(0,r.jsx)("rect",{x:"0.5",width:"32",height:"32",rx:"4",fill:"url(#pattern0_1769_69)"}),(0,r.jsxs)("defs",{children:[(0,r.jsx)("pattern",{id:"pattern0_1769_69",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,r.jsx)("use",{xlinkHref:"#image0_1769_69",transform:"scale(0.003125)"})}),(0,r.jsx)("image",{id:"image0_1769_69",width:"320",height:"320",preserveAspectRatio:"none",xlinkHref:"data:image/png;base64,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"})]})]})},"T",0,function(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 2400 2800",...e,children:(0,r.jsxs)("g",{children:[(0,r.jsx)("polygon",{fill:"#FFFFFF",points:"2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200"}),(0,r.jsx)("g",{children:(0,r.jsxs)("g",{id:"Layer_1-2",children:[(0,r.jsx)("path",{fill:"#9146FF",d:"M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600V1300z"}),(0,r.jsx)("rect",{x:"1700",y:"550",width:"200",height:"600",fill:"#9146FF"}),(0,r.jsx)("rect",{x:"1150",y:"550",width:"200",height:"600",fill:"#9146FF"})]})})]})})}],238382)},871541,e=>{var r=e.i(800307);let i={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","coinbaseWallet.connectingSubtitle":"This connects Coinbase Wallet, not your Coinbase.com account.","coinbaseWallet.connectingSubtitleReset":"This connects Coinbase Wallet, not your Coinbase.com account. Not the right wallet? Reset your connection below.","coinbaseWallet.successSubtitle":"This Coinbase Wallet address is not your Coinbase.com deposit address.","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}","cardTransactionList.scrollRegionLabel":"Card transactions","cardTransactionList.noTransactionsFound":"No transactions found","cardTransactionList.tryAgain":"Try again","cardTransactionList.badgeCredit":"Credit","cardTransactionList.badgePending":"Pending","cardTransactionList.badgeDeclined":"Declined","cardTransactionList.badgeExpired":"Expired","cardTransactionList.badgeReversed":"Reversed","cardDetailsView.cardholderLabel":"Cardholder","cardDetailsView.validThruLabel":"Valid thru","cardDetailsView.showDetails":"Details","cardDetailsView.hideDetails":"Hide details","cardDetailsView.pin":"PIN","cardDetailsView.replace":"Replace","cardDetailsView.cancel":"Cancel","cardDetailsView.freezeTitle":"Freeze Card","cardDetailsView.freezeSubtitle":"Temporarily disable your card","cardDetailsView.addToWalletTitle":"Add to wallet","cardDetailsView.addToWalletSubtitle":"Add your card to {walletName}","cardDetailsView.freezeConfirmTitle":"Freeze this card?","cardDetailsView.freezeConfirmDescription":"This will instantly freeze the current card.","cardDetailsView.freezeConfirmCta":"Freeze card","cardDetailsView.unfreezeConfirmTitle":"Unfreeze this card?","cardDetailsView.unfreezeConfirmDescription":"This will instantly unfreeze the current card.","cardDetailsView.unfreezeConfirmCta":"Unfreeze card","cardDetailsView.cancelConfirmTitle":"Cancel this card?","cardDetailsView.cancelConfirmDescription":"This will instantly cancel the current card.","cardDetailsView.cancelConfirmCta":"Cancel card","cardDetailsView.replaceReasonTitle":"Why are you replacing your card?","cardDetailsView.replaceReasonCta":"Continue","cardDetailsView.replaceReasonLost":"Lost","cardDetailsView.replaceReasonStolen":"Stolen","cardDetailsView.replaceReasonExpired":"Expired","cardDetailsView.replaceWarnTitle":"Replace this card?","cardDetailsView.replaceWarnDescription":"This will instantly close the current card and issue a new one.","cardDetailsView.replaceWarnCta":"Replace","cardDetailsView.dialogDismiss":"Never mind","cardDetailsView.dialogBack":"Back","cardPinDialog.title":"PIN number","cardPinDialog.description":"Your PIN is used for in-person transactions and ATM withdrawals.","cardPinDialog.changePin":"Change PIN","cardPinDialog.close":"Close","cardPinDialog.cancel":"Cancel","cardPinDialog.save":"Save and close","cardPinDialog.placeholder":"••••","cardPinDialog.emptyError":"Add a new PIN or cancel to continue.","cardPinDialog.saveError":"Could not update this PIN. Please try again.","cardPinDialog.loadError":"Could not load this PIN. Please try again.","cardPinDialog.pinLabel":"PIN","cardDetailsReveal.cardNumberLabel":"Card number","cardDetailsReveal.expirationLabel":"Expiration","cardDetailsReveal.cvcLabel":"CVC","cardDetailsReveal.copyValue":"Copy {label}","cardDetailsReveal.error":"Card details could not be loaded. Please try again.","transactionDetailsView.summarySubheader":"Card payment to {merchantName}","transactionDetailsView.summarySubheaderFallback":"Card payment","transactionDetailsView.detailsHeader":"Details","transactionDetailsView.disputeCta":"Dispute transaction","transactionDetailsView.cardEndingIn":"Card ending in {last4}","transactionDetailsView.amountLabel":"Amount","transactionDetailsView.atmFeeLabel":"ATM Fee","transactionDetailsView.cashbackLabel":"Cashback","transactionDetailsView.statusLabel":"Status","transactionDetailsView.disputeLabel":"Dispute","transactionDetailsView.merchantLabel":"Merchant","transactionDetailsView.currencyLabel":"Currency","transactionDetailsView.fromLabel":"From","transactionDetailsView.dateLabel":"Date created","transactionDetailsView.statusPending":"Pending","transactionDetailsView.statusPosted":"Posted","transactionDetailsView.statusDeclined":"Declined","transactionDetailsView.statusExpired":"Expired","transactionDetailsView.statusReversed":"Reversed","transactionDetailsView.disputeNone":"None","transactionDetailsView.disputeExpired":"Dispute expired","transactionDetailsView.disputeLost":"Dispute lost","transactionDetailsView.disputeSubmitted":"Dispute submitted","transactionDetailsView.disputeUnsubmitted":"Dispute unsubmitted","transactionDetailsView.disputeWon":"Dispute won","transactionDetailsView.disputeDialogTitle":"Dispute this transaction","transactionDetailsView.disputeDialogBody":"To dispute this transaction, call the number below and our support team will help you.","transactionDetailsView.disputeDoneCta":"Done","cardSummaryView.walletHeading":"Wallet","cardSummaryView.cardHeading":"Your Card","cardSummaryView.transactionsHeading":"Transactions","cardSummaryView.unknownMerchant":"Unknown merchant","cardSummaryView.balanceUnavailable":"—","cardSummaryView.currentBalance":"Spending balance","cardSummaryView.cardTitle":"{brand} debit card","cardSummaryView.cardTitleFallback":"Debit card","cardSummaryView.cardLoadError":"Could not load this card.","cardSummaryView.transactionsLoadError":"Could not load transactions.","cardSummaryView.freezeError":"Could not update this card. Please try again.","cardSummaryView.cancelError":"Could not cancel this card. Please try again.","cardSummaryView.replaceError":"Could not replace this card. Please try again.","cardSummaryView.walletProvisioningError":"Could not load wallet options.","cardSummaryView.walletProvisioningSuccess":"Card added to wallet","cardSummaryView.cardCanceledBanner":"This card has been cancelled","cardSummaryView.cardFrozenBanner":"This card is frozen","cardSummaryView.sandboxBanner":"In sandbox mode using test funds","cardSummaryView.back":"Back","cardSummaryView.close":"Close","cardStatementDownload.buttonLabel":"Download statement","cardStatementDownload.tooltip":"Download a monthly PDF statement","cardStatementDownload.confirmTitle":"Download statement","cardStatementDownload.confirmDescription":"Are you sure you want to download your statement from {period}?","cardStatementDownload.confirmCta":"Download","cardStatementDownload.cancelCta":"Cancel","cardStatementDownload.error":"Could not download your statement. Please try again.","cardStatementDownload.notAvailable":"No statement is available for that period.","cardStatementDownload.empty":"Statements are available once the month ends.","signUpForCardView.sandboxBanner":"In sandbox mode using test funds","signUpForCardView.title":"Create {appName} card","signUpForCardView.titleFallback":"Create card","signUpForCardView.subtitle":"Complete a few quick steps to set up your {appName} card.","signUpForCardView.subtitleFallback":"Complete a few quick steps to set up your card.","signUpForCardView.checklistAgreements":"Review required agreements","signUpForCardView.checklistInformation":"Provide your information","signUpForCardView.checklistIdentity":"Verify your identity","signUpForCardView.getStartedCta":"Get started","signUpForCardView.workingCta":"Please wait…","signUpForCardView.termsPromptTitle":"Review card agreements","signUpForCardView.disclosurePromptTitle":"Accept electronic disclosures","signUpForCardView.disclosurePromptSubtitle":"Review and accept the {disclosureStatement} to receive and sign card documents electronically.","signUpForCardView.disclosureStatementLabel":"Electronic Disclosure Statement","signUpForCardView.acceptingDisclosureTitle":"Accepting disclosures","signUpForCardView.acceptingDisclosureSubtitle":"This will only take a moment.","signUpForCardView.bankTermsPromptProviders":"{appName} uses a wallet provided by Privy. {bank} issues the card, and Bridge manages the card program.","signUpForCardView.bankTermsPromptProvidersFallback":"This app uses a wallet provided by Privy. {bank} issues the card, and Bridge manages the card program.","signUpForCardView.bankTermsPromptAgreements":"By clicking Accept and continue, you agree to the {agreements}.","signUpForCardView.bankTermsAnd":"and","signUpForCardView.acceptingBankTermsTitle":"Accepting agreements","signUpForCardView.acceptingBankTermsSubtitle":"This will only take a moment.","signUpForCardView.providerTermsPromptTitle":"Review card program terms","signUpForCardView.providerTermsPromptSubtitle":"Open the card program terms to review and accept them.","signUpForCardView.acceptingProviderTermsTitle":"Review card program terms","signUpForCardView.acceptingProviderTermsSubtitle":"Finish reviewing the card program terms in the pop-up window to continue.","signUpForCardView.acceptAndContinueCta":"Accept and continue","signUpForCardView.kycPromptTitle":"Verify your identity","signUpForCardView.kycPromptSubtitle":"Open the verification flow to confirm your identity.","signUpForCardView.verifyIdentityCta":"Verify identity","signUpForCardView.verifyingIdentityTitle":"Verify your identity","signUpForCardView.verifyingIdentitySubtitle":"Finish verifying your identity in the pop-up window to continue.","signUpForCardView.pendingTitle":"Finishing up","signUpForCardView.pendingSubtitle":"We're getting your account ready. This can take a moment.","signUpForCardView.underReviewTitle":"Identity under review","signUpForCardView.underReviewSubtitle":"Your identity information is being reviewed. You can close this sign up and check back later to finish.","signUpForCardView.creatingCardTitle":"Creating your card","signUpForCardView.creatingCardSubtitle":"Hang tight while we finish creating your card.","signUpForCardView.approvePromptTitle":"Approve card spending","signUpForCardView.approvePromptSubtitle":"Sign a one-time approval to let your card spend from your selected {symbol} balance.","signUpForCardView.approvePromptVaultTitle":"Spend from your Earn balance","signUpForCardView.approvePromptVaultSubtitle":"Keep funds in Earn until they're needed for a card purchase.","signUpForCardView.approvePromptVaultOnlySubtitle":"Card purchases spend your Earn balance.","signUpForCardView.approvePromptVaultItemWithdraw":"Automatically withdraws only what's needed for purchases","signUpForCardView.approvePromptVaultItemRemaining":"Your remaining assets stay in Earn","signUpForCardView.approvePromptVaultItemTurnOff":"Turn this off anytime in Settings","signUpForCardView.approvePromptVaultDisclaimer":"Earn is separate from your card and involves risk. Earn is provided by {provider} through your noncustodial wallet. Assets in Earn can lose value and aren't held, insured, or guaranteed by Lead Bank or Bridge. Card protections don't cover losses from Earn. Your prepaid debit card is issued by Lead Bank.","signUpForCardView.approvePromptWhat":"What this does:","signUpForCardView.approvePromptItemConnect":"Connects your card to your {symbol} balance","signUpForCardView.approvePromptItemPurchases":"Lets your card make purchases","signUpForCardView.approvePromptItemLimits":"Spending limits are managed separately","signUpForCardView.approveAndContinueCta":"Approve and continue","signUpForCardView.approveErrorTitle":"Spend approval failed","signUpForCardView.approveErrorSubtitle":"We couldn't approve card spending. Click below to try again.","signUpForCardView.readyTitle":"Your card is ready","signUpForCardView.readySubtitle":"Your card has been created and is ready to use.","signUpForCardView.continueCta":"Continue","signUpForCardView.doneCta":"Done","signUpForCardView.rejectedTitle":"We couldn't verify your identity","signUpForCardView.rejectedSubtitle":"Your card application could not be approved.","signUpForCardView.errorTitle":"Something went wrong","signUpForCardView.errorSubtitle":"We couldn't set up your card. Please try again.","signUpForCardView.tryAgainCta":"Try again"};e.s(["u",0,function(){let e=(0,r.a)();return{t:(r,a)=>{var t;let o;return t=e.intl.textLocalization,o=t?.[r]??i[r],a&&0!==Object.keys(a).length?o.replace(/\{(\w+)\}/g,(e,r)=>a[r]??e):o}}}])},334554,(e,r,i)=>{var a={single_source_shortest_paths:function(e,r,i){var t,o,n,l,s,c,d,p={},u={};u[r]=0;var h=a.PriorityQueue.make();for(h.push(r,0);!h.empty();)for(n in o=(t=h.pop()).value,l=t.cost,s=e[o]||{})s.hasOwnProperty(n)&&(c=l+s[n],d=u[n],(void 0===u[n]||d>c)&&(u[n]=c,h.push(n,c),p[n]=o));if(void 0!==i&&void 0===u[i])throw Error(["Could not find a path from ",r," to ",i,"."].join(""));return p},extract_shortest_path_from_predecessor_list:function(e,r){for(var i=[],a=r;a;)i.push(a),e[a],a=e[a];return i.reverse(),i},find_path:function(e,r,i){var t=a.single_source_shortest_paths(e,r,i);return a.extract_shortest_path_from_predecessor_list(t,i)},PriorityQueue:{make:function(e){var r,i=a.PriorityQueue,t={};for(r in e=e||{},i)i.hasOwnProperty(r)&&(t[r]=i[r]);return t.queue=[],t.sorter=e.sorter||i.default_sorter,t},default_sorter:function(e,r){return e.cost-r.cost},push:function(e,r){this.queue.push({value:e,cost:r}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};r.exports=a},542786,e=>{var r=e.i(6674);let i=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,i)=>i?i.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=(...e)=>e.filter((e,r,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===r).join(" ").trim();var t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,r.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:n,className:l="",children:s,iconNode:c,...d},p)=>(0,r.createElement)("svg",{ref:p,...t,width:i,height:i,stroke:e,strokeWidth:n?24*Number(o)/Number(i):o,className:a("lucide",l),...!s&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,i])=>(0,r.createElement)(e,i)),...Array.isArray(s)?s:[s]]));e.s(["f",0,(e,t)=>{let n=(0,r.forwardRef)(({className:n,...l},s)=>(0,r.createElement)(o,{ref:s,iconNode:t,className:a(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...l}));return n.displayName=i(e),n}],542786)},548503,e=>{let r=(0,e.i(542786).f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["f",0,r],548503)},42789,e=>{let r=(0,e.i(542786).f)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["f",0,r],42789)},924178,e=>{let r=(0,e.i(542786).f)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["f",0,r],924178)},974213,e=>{let r=(0,e.i(542786).f)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["f",0,r],974213)},639753,e=>{let r=(0,e.i(542786).f)("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);e.s(["f",0,r],639753)}])})();