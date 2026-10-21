(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,469723,e=>{var n=e.i(6674);let o=n.forwardRef(function({title:e,titleId:o,...r},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},r),e?n.createElement("title",{id:o},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});e.s(["f",0,o])},761731,e=>{var n=e.i(704688),o=e.i(60058),r=e.i(83985);let t=o.z.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let n,r;"green"===e.$color&&(n="var(--privy-color-success-dark)",r="var(--privy-color-success-light)"),"red"===e.$color&&(n="var(--privy-color-error)",r="var(--privy-color-error-light)"),"gray"===e.$color&&(n="var(--privy-color-foreground-2)",r="var(--privy-color-background-2)");let t=o.q`
      from, to {
        background-color: ${r};
      }

      50% {
        background-color: rgba(${r}, 0.8);
      }
    `;return o.m`
      color: ${n};
      background-color: ${r};
      ${e.$isPulsing&&o.m`
        animation: ${t} 3s linear infinite;
      `};
    `}}

  ${r.L}
`;e.s(["C",0,({children:e,color:o,isLoading:r,isPulsing:i,...a})=>(0,n.jsx)(t,{$color:o,$isLoading:r,$isPulsing:i,...a,children:e})])},7917,e=>{var n=e.i(704688),o=e.i(6674),r=e.i(60058),t=e.i(162609),i=e.i(348128),a=e.i(800307),l=e.i(142785),s=e.i(772949),c=e.i(761731);let d=({value:e,onChange:o})=>(0,n.jsx)("select",{value:e,onChange:o,children:t.h.map(e=>(0,n.jsxs)("option",{value:e.code,children:[e.code," +",e.callCode]},e.code))}),u=(0,o.forwardRef)((e,r)=>{let u=(0,a.a)(),[p,f]=(0,o.useState)(!1),{accountType:x}=(0,l.h)(),[g,y]=(0,o.useState)(""),[v,j]=(0,o.useState)(e.defaultCountry??u?.intl.defaultCountry??"US"),w=(0,t.r)(g,v),b=(0,t.M)(v),C=(0,t.j)(v),k=(0,i.f)(v),M=!w,[S,E]=(0,o.useState)(!1),$=k.length,P=n=>{let o=n.target.value;j(o),y(""),e.onChange&&e.onChange({rawPhoneNumber:g,qualifiedPhoneNumber:(0,t.A)(g,o),countryCode:o,isValid:(0,t.r)(g,v)})},F=(n,o)=>{try{let r=n.replace(/\D/g,"")===g.replace(/\D/g,"")?n:b.input(n);y(r),e.onChange&&e.onChange({rawPhoneNumber:r,qualifiedPhoneNumber:(0,t.A)(n,o),countryCode:o,isValid:(0,t.r)(n,o)})}catch(e){console.error("Error processing phone number:",e)}},R=()=>{E(!0);let n=(0,t.A)(g,v);e.onSubmit({rawPhoneNumber:g,qualifiedPhoneNumber:n,countryCode:v,isValid:(0,t.r)(g,v)}).finally(()=>E(!1))};return(0,o.useEffect)(()=>{if(e.defaultValue){let n=(0,t.N)(e.defaultValue);b.reset(),P({target:{value:n.countryCode}}),F(n.phone,n.countryCode)}},[e.defaultValue]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{children:(0,n.jsxs)(m,{$callingCodeLength:$,$stacked:e.stacked,children:[(0,n.jsx)(d,{value:v,onChange:P}),(0,n.jsx)("input",{ref:r,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:C,onFocus:()=>f(!0),onChange:e=>{F(e.target.value,v)},onKeyUp:e=>{"Enter"===e.key&&R()},value:g,autoComplete:"tel"}),"phone"!==x||p||e.hideRecent?e.stacked||e.noIncludeSubmitButton?(0,n.jsx)("span",{}):(0,n.jsx)(s.E,{isSubmitting:S,onClick:R,disabled:M,children:"Submit"}):(0,n.jsx)(c.C,{color:"gray",children:"Recent"})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,n.jsx)(s.P,{loading:S,loadingText:null,onClick:R,disabled:M,children:"Submit"}):null]})}),h=r.z.div`
  width: 100%;
`,m=r.z.label`
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
`;e.s(["C",0,u])},83985,e=>{var n=e.i(60058);let o=n.q`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,r=n.m`
  ${e=>e.$isLoading?n.m`
          width: 35%;
          animation: ${o} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",0,r])},958817,e=>{var n=e.i(704688),o=e.i(536024),r=e.i(2045),t=e.i(6674);let i=t.forwardRef(function({title:e,titleId:n,...o},r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),e?t.createElement("title",{id:n},e):null,t.createElement("path",{fillRule:"evenodd",d:"M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}),a=t.forwardRef(function({title:e,titleId:n,...o},r){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},o),e?t.createElement("title",{id:n},e):null,t.createElement("path",{fillRule:"evenodd",d:"M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z",clipRule:"evenodd"}))});var l=e.i(772949),s=e.i(852560),c=e.i(941177),d=e.i(800307),u=e.i(705390),h=e.i(180126),m=e.i(393918),p=e.i(247026),f=e.i(469723),x=e.i(307264),g=e.i(162609),y=e.i(7917),v=e.i(360049),j=e.i(356439);let w=({appName:e,onComplete:o,onReset:r,onClose:i})=>{let[a,s]=(0,t.useState)(""),[u,p]=(0,t.useState)(!1),[w,b]=(0,t.useState)(null),[C,k]=(0,t.useState)("enroll"),{initEnrollmentWithSms:M,submitEnrollmentWithSms:S}=(0,m.h)(),{promptMfa:E}=(0,m.u)(),{data:$}=(0,h.u)(),P=(0,d.a)();function F(){$?.mfaEnrollmentFlow?.onSuccess(),o()}return w?(0,n.jsx)(j.ErrorScreenView,{allowlistConfig:P.allowlistConfig,error:w,onBack:()=>b(null),onRetry:()=>b(null)}):(0,n.jsxs)(n.Fragment,"enroll"===C?{children:[(0,n.jsx)(l.M,{backFn:r,onClose:i},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(x.f,{})}),(0,n.jsx)(v.T,{children:"Set up SMS verification"}),(0,n.jsxs)(v.S,{children:["We'll text a verification code to this mobile device whenever you use your ",e," ","wallet."]}),(0,n.jsxs)(v.C,{children:[(0,n.jsx)(y.C,{onSubmit:async function({qualifiedPhoneNumber:e}){try{await E(),await M({phoneNumber:e}),s(e),k("verify")}catch(e){if((0,m.i)(e))return;b(e)}},hideRecent:!0}),(0,n.jsxs)(v.c,{children:["By providing your mobile number, you agree to receive text messages from ",P?.name,". Some carrier charges may apply"]})]}),(0,n.jsx)(c.M,{})]}:u?{children:[(0,n.jsx)(l.M,{onClose:F},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(f.f,{})}),(0,n.jsx)(v.T,{children:"SMS verification added"}),(0,n.jsxs)(v.S,{children:["From now on, you'll enter the verification code sent to your mobile device whenever you use your ",e," wallet."]}),(0,n.jsx)(v.B,{children:(0,n.jsx)(l.P,{onClick:F,children:"Done"})}),(0,n.jsx)(c.M,{})]}:{children:[(0,n.jsx)(l.M,{backFn:function(){"verify"===C?k("enroll"):r()},onClose:i},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(x.f,{})}),(0,n.jsx)(v.T,{children:"Enter enrollment code"}),(0,n.jsxs)(v.C,{children:[(0,n.jsx)(v.N,{onChange:async function(e){try{if(!e)return;await S({phoneNumber:a,mfaCode:e}),p(!0)}catch(e){if((0,m.j)(e))throw Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.");if((0,m.d)(e))throw Error("The code you entered is not valid");if((0,m.f)(e))throw Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.");throw(0,m.i)(e)?Error("Verification canceled"):Error("Unknown error")}}}),(0,n.jsxs)(v.S,{children:["To continue, enter the 6-digit code sent to ",(0,n.jsx)("strong",{children:(0,g.q)(a)})]})]}),(0,n.jsx)(c.M,{})]})},b={component:()=>{let{user:e,enrollInMfa:f,ready:x}=(0,d.u)(),[g,y]=(0,t.useState)(null),{unenrollWithSms:j,unenrollWithTotp:b,unenrollWithPasskey:C,submitEnrollmentWithTotp:k,initEnrollmentWithPasskey:M,submitEnrollmentWithPasskey:S,initEnrollmentWithTotp:E}=(0,m.h)(),{data:$,onUserCloseViaDialogOrKeybindRef:P}=(0,h.u)(),F=(0,d.a)(),{closePrivyModal:R}=(0,u.u)(),{promptMfa:T}=(0,m.u)(),[B,L]=(0,t.useState)(!1),[A,N]=(0,t.useState)(null),[I,U]=(0,t.useState)(null),W=()=>{R({shouldCallAuthOnSuccess:!0}),f(!1),setTimeout(()=>{y(null),N(null)},500)},[O,V]=(0,t.useState)(!1),[z,Z]=(0,t.useState)();P.current=W;let q=e?.mfaMethods.includes("sms"),D=!!e?.phone,H=e?.mfaMethods.includes("totp"),K=e?.mfaMethods.includes("passkey"),Y=q||H||K,G=e?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];function J(){y(null),N(null)}async function Q(){try{return await T(),!0}catch(e){return Z(e),!1}}async function X(e=G){V(!0);try{return!!await Q()&&(await M(),await S({credentialIds:e},{removeForLogin:$?.mfaEnrollmentFlow?.shouldUnlinkOnUnenrollMfa}),$?.mfaEnrollmentFlow?.onSuccess(),W(),!0)}catch(e){return Z(e),!1}finally{V(!1)}}if((0,t.useEffect)(()=>{Y&&L(!0)},[Y]),!x||!e||!F)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{onClose:W},"header"),(0,n.jsx)(v.A,{children:(0,n.jsx)(p.M,{})}),(0,n.jsx)(v.C,{children:(0,n.jsx)(s.L,{})}),(0,n.jsx)(c.M,{})]});if("sms"===g)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{backFn:J,onClose:W},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(o.f,{})}),(0,n.jsx)(v.T,{children:"Remove SMS verification?"}),(0,n.jsxs)(v.S,{children:["MFA adds an extra layer of security to your ",F?.name," account. Make sure you have other methods to secure your account."]}),(0,n.jsx)(v.B,{children:(0,n.jsx)(l.P,{$warn:!0,onClick:async function(){if(y(null),await Q())try{await j()}catch(e){y(null)}},children:"Remove"})}),(0,n.jsx)(c.M,{})]});if("totp"===g)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{backFn:J,onClose:W},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(o.f,{})}),(0,n.jsx)(v.T,{children:"Remove authenticator app verification?"}),(0,n.jsxs)(v.S,{children:["MFA adds an extra layer of security to your ",F?.name," account. Make sure you have other methods to secure your account."]}),(0,n.jsx)(v.B,{children:(0,n.jsx)(l.P,{$warn:!0,onClick:async function(){if(y(null),await Q())try{await b()}catch(e){y(null)}},children:"Remove"})}),(0,n.jsx)(c.M,{})]});if("passkey"===g){let e=$?.mfaEnrollmentFlow?.shouldUnlinkOnUnenrollMfa??!0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{backFn:J,onClose:W},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(o.f,{})}),(0,n.jsx)(v.T,{children:"Are you sure you want to remove this passkey?"}),(0,n.jsx)(v.S,{children:e?"Removing your passkey will remove as both a verification method and a login method.":"Removing your passkey will remove as a verification method."}),(0,n.jsx)(v.B,{children:(0,n.jsx)(l.P,{$warn:!0,onClick:async function(){if(y(null),await Q())try{await C({removeForLogin:$?.mfaEnrollmentFlow?.shouldUnlinkOnUnenrollMfa})}catch(e){y(null)}},children:"Remove"})}),(0,n.jsx)(c.M,{})]})}if(0===$.mfaEnrollmentFlow.mfaMethods.length&&!Y)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{onClose:W},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(r.f,{})}),(0,n.jsx)(v.T,{children:"Add more security"}),(0,n.jsxs)(v.S,{children:[F?.name," does not have any verification methods enabled."]}),(0,n.jsx)(v.B,{children:(0,n.jsx)(l.P,{onClick:W,children:"Close"})}),(0,n.jsx)(c.M,{})]});let _=!Y&&!B;return _?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.M,{onClose:W},"header"),(0,n.jsx)(v.I,{style:{marginBottom:"1.5rem"},children:(0,n.jsx)(r.f,{})}),(0,n.jsx)(v.T,{children:"Transaction Protection"}),(0,n.jsx)(v.S,{children:"Set up transaction protection to add an extra layer of security to your account"}),(0,n.jsxs)(v.L,{children:[(0,n.jsxs)(v.a,{children:[(0,n.jsx)(v.b,{children:(0,n.jsx)(i,{})}),"Enable 2-Step verification for your ",F?.name," wallet."]}),(0,n.jsxs)(v.a,{children:[(0,n.jsx)(v.b,{children:(0,n.jsx)(a,{})}),"You'll be prompted to authenticate to complete transactions."]})]}),(0,n.jsxs)(v.B,{children:[(0,n.jsx)(l.P,{onClick:()=>L(!0),children:"Continue"}),(0,n.jsx)(l.S,{onClick:W,children:"Not now"})]}),(0,n.jsx)(c.M,{})]}):"sms"===A?(0,n.jsx)(w,{appName:F?.name||"Privy",onComplete:W,onReset:J,onClose:W}):"totp"===A&&I?(0,n.jsx)(p.E,{onClose:W,onReset:J,submitEnrollmentWithTotp:({mfaCode:e})=>(async function(e){try{return Z(void 0),await k({mfaCode:e}),$?.mfaEnrollmentFlow?.onSuccess(),W()}catch(e){Z(e)}finally{y(null)}})(e),totpInfo:{...I,appName:F?.name||"Privy"}}):"passkey"===A?(0,n.jsx)(p.a,{onReset:J,onClose:W,submitEnrollmentWithPasskey:X}):(0,n.jsx)(p.b,{showIntro:_,userMfaMethods:e.mfaMethods,appMfaMethods:F.mfa.methods,userHasAuthSms:D,backFn:function(){L(!1)},handleSelectMethod:async function(e){if("totp"!==e||await Q()){if("totp"===e)return N(e),U(null),void E().then(e=>{U(e)}).catch(()=>{U(null),J()});if("passkey"===e&&1===G.length)return await X();N(e)}},isTotpLoading:"totp"===A&&!I,isPasskeyLoading:O,error:z,onClose:W,setRemovingMfaMethod:y})}};e.s(["MfaEnrollmentFlowScreen",0,b,"default",0,b],958817)}])})();