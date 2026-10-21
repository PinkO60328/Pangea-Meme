(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,770331,e=>{var r=e.i(6674);let o=r.forwardRef(function({title:e,titleId:o,...a},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":o},a),e?r.createElement("title",{id:o},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});e.s(["f",0,o])},536024,e=>{var r=e.i(6674);let o=r.forwardRef(function({title:e,titleId:o,...a},i){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":o},a),e?r.createElement("title",{id:o},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}))});e.s(["f",0,o])},785006,e=>{var r=e.i(704688),o=e.i(548503),a=e.i(42789),i=e.i(6674),t=e.i(60058);let n=t.z.button`
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
`,l=t.z.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--privy-color-foreground-2);
`,c=(0,t.z)(o.f)`
  color: var(--privy-color-icon-success);
  flex-shrink: 0;
`,s=(0,t.z)(a.f)`
  color: var(--privy-color-icon-muted);
  flex-shrink: 0;
`;e.s(["C",0,function({children:e,iconOnly:o,value:a,hideCopyIcon:t,onCopy:d,iconSize:p=14,...u}){let[v,g]=(0,i.useState)(!1);return(0,r.jsxs)(n,{...u,onClick:()=>{navigator.clipboard.writeText(a||("string"==typeof e?e:"")).then(()=>d?.()).catch(console.error),g(!0),setTimeout(()=>g(!1),1500)},children:[e," ",v?(0,r.jsxs)(l,{children:[(0,r.jsx)(c,{size:p})," ",!o&&"Copied"]}):!t&&(0,r.jsx)(s,{size:p})]})},"a",0,({value:e,includeChildren:o,children:a,...t})=>{let[d,p]=(0,i.useState)(!1),u=()=>{navigator.clipboard.writeText(e).catch(console.error),p(!0),setTimeout(()=>p(!1),1500)};return(0,r.jsxs)(r.Fragment,{children:[o?(0,r.jsx)(n,{...t,onClick:u,children:a}):(0,r.jsx)(r.Fragment,{children:a}),(0,r.jsx)(n,{...t,onClick:u,children:d?(0,r.jsx)(l,{children:(0,r.jsx)(c,{})}):(0,r.jsx)(s,{})})]})}])},103576,e=>{var r=e.i(60058),o=e.i(487804);let a=r.z.label`
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
`,i=(0,r.z)(a)`
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;
`,t=(0,r.z)(a)`
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
  && > ${o.E} {
    display: block;
    text-align: left;
    padding-left: var(--privy-border-radius-md);
    padding-bottom: 5px;
  }
`;e.s(["E",0,i,"I",0,n,"a",0,t])},487804,e=>{var r=e.i(60058);let o=r.z.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`;e.s(["E",0,o])},871443,e=>{var r=e.i(704688),o=e.i(60058);let a=o.z.a`
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
`;e.s(["L",0,({size:e="md",variant:o="navigation",disabled:i=!1,as:t,children:n,onClick:l,...c})=>(0,r.jsx)(a,{as:t,$size:e,$variant:o,$disabled:i,onClick:e=>{i?e.preventDefault():l?.(e)},...c,children:n})])},941177,e=>{var r=e.i(704688),o=e.i(60058),a=e.i(800307);function i(e){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460 40",...e,children:(0,r.jsx)("g",{fill:e.color||"var(--privy-color-foreground)",children:(0,r.jsx)("path",{d:"M0 15.4v15.38h4.64V19.96h3.58c2.47 0 3.63-.01 3.77-.02 1-.08 1.49-.15 2.18-.3a9.45 9.45 0 0 0 4.6-2.37c1.66-1.57 2.64-3.87 2.81-6.56.02-.3.02-1.19 0-1.49-.1-1.77-.56-3.35-1.36-4.72A8.84 8.84 0 0 0 15.14.57c-.93-.3-1.75-.43-3.09-.54C11.9.02 10.2 0 5.93 0H0ZM10.85 4c1.85.05 3.1.45 4.16 1.3.22.17.54.49.69.68a5.97 5.97 0 0 1 1.19 3.13c.04.35.04 1.36 0 1.71-.08.68-.23 1.3-.44 1.85a4.8 4.8 0 0 1-1.09 1.68A5.63 5.63 0 0 1 12 15.92c-.6.08-.4.08-4.01.09H4.64V3.98h2.9c1.6 0 3.08 0 3.31.02ZM187.65 5.71v5.72h-.27l-.09-.14a15.9 15.9 0 0 0-1.21-1.73c-.43-.5-1-.95-1.7-1.36-.54-.3-1.05-.5-1.73-.63a8.98 8.98 0 0 0-1.7-.17 8.84 8.84 0 0 0-7.8 4.03 12.95 12.95 0 0 0-2.03 6.39c-.07.98-.06 2.15.02 3.13.2 2.47.87 4.53 2.02 6.25a8.98 8.98 0 0 0 10.22 3.65 6.5 6.5 0 0 0 2.8-1.93c.41-.51.84-1.1 1.1-1.55l.1-.17h.37v3.58h4.38V0h-4.48Zm-5.24 5.54c1.3.14 2.3.6 3.17 1.48.9.9 1.5 2.09 1.85 3.64.36 1.6.39 3.72.06 5.43a8.13 8.13 0 0 1-1.54 3.62 5.1 5.1 0 0 1-3.93 1.96 6.13 6.13 0 0 1-2.32-.31 5.87 5.87 0 0 1-3.33-3.5c-.39-1-.62-2.05-.72-3.32-.03-.32-.04-1.35-.02-1.73.08-1.56.4-2.91.96-4.05a6.2 6.2 0 0 1 1.06-1.58 5.08 5.08 0 0 1 3.6-1.66c.25-.02.9 0 1.16.02ZM210.07 15.39l.01 15.38h4.38l.01-3.57h.37l.09.15c.24.44.84 1.26 1.21 1.7a6.79 6.79 0 0 0 2.57 1.75 9.3 9.3 0 0 0 6.86-.49 9.28 9.28 0 0 0 4.05-4.07A13.05 13.05 0 0 0 231 21.6c.21-1.73.18-3.7-.09-5.32a13.03 13.03 0 0 0-1.5-4.3 9.1 9.1 0 0 0-3.75-3.63 9.15 9.15 0 0 0-4.43-.96 7.46 7.46 0 0 0-2.8.5A7.07 7.07 0 0 0 216 9.7c-.4.52-.82 1.12-1.1 1.59l-.07.14h-.27V0h-4.5Zm11.13-4.14c1.07.1 1.94.44 2.7 1.04a6.1 6.1 0 0 1 1.64 1.98c.43.84.78 2 .94 3.11.15 1.16.16 2.4.02 3.54a9.34 9.34 0 0 1-1.39 4.03 5.33 5.33 0 0 1-2.69 2.15c-.9.3-2.04.38-3.06.2a5.14 5.14 0 0 1-3.45-2.37 6.03 6.03 0 0 1-.45-.8c-.5-1.03-.8-2.2-.92-3.58-.04-.49-.06-.89-.05-1.53.01-.76.05-1.23.13-1.85.38-2.53 1.47-4.38 3.15-5.31a5.46 5.46 0 0 1 2.3-.63 10 10 0 0 1 1.13.02ZM69.05 2.17l-.01 2.77V7.7h-3.36v3.6h3.36v6.8l.01 7.15c.06 1.4.4 2.44 1.1 3.37a5.8 5.8 0 0 0 2.97 2.07c.91.3 1.83.42 2.9.38a8.71 8.71 0 0 0 2.66-.48l-.8-3.7-.38.06a4.96 4.96 0 0 1-2.43-.06c-.33-.1-.56-.25-.8-.49-.4-.41-.6-.88-.7-1.67-.02-.2-.02-.62-.03-6.82v-6.6h4.73V7.7h-4.73V2.16h-4.49ZM133.34 2.17V7.7h-3.39v3.6h3.38v6.9l.01 7.17a5.66 5.66 0 0 0 2.36 4.49c.85.6 2.03 1.03 3.26 1.17.85.1 2.03.05 2.81-.1.3-.06.75-.18 1-.26l.2-.06v-.05l-.81-3.67-.37.06a4.99 4.99 0 0 1-1.8.09c-.85-.13-1.32-.4-1.7-.97a2.63 2.63 0 0 1-.39-1.04c-.06-.4-.06 0-.06-7.1V11.3h4.7V7.7h-4.7l-.01-2.77V2.16h-4.49ZM293.41 2.36a14.56 14.56 0 0 0-13.7 16.07 14.59 14.59 0 0 0 21.86 11.08 14.5 14.5 0 0 0 7.11-14.07 14.61 14.61 0 0 0-6.53-10.73 14.49 14.49 0 0 0-8.74-2.35ZM350.8 2.36a10.17 10.17 0 0 0-7.56 4.2c-.16.2-.45.63-.58.83l-.05.1h-.47l-.01-4.36h-7.36v36.4h7.82V27.27h.49l.05.07a11.3 11.3 0 0 0 7.49 4.15 10.52 10.52 0 0 0 9.38-4.1c1.66-2.1 2.73-4.9 3.07-8.06.1-.87.13-1.4.13-2.37 0-.8 0-1.1-.07-1.76a15.95 15.95 0 0 0-3.23-8.72 12.8 12.8 0 0 0-1.85-1.84 10.49 10.49 0 0 0-7.26-2.28Zm-.94 6.05c1.27.15 2.33.65 3.2 1.5.98.96 1.67 2.31 2.03 4 .34 1.57.38 3.68.12 5.39a9.78 9.78 0 0 1-1.04 3.25c-.14.25-.44.69-.6.89a5.35 5.35 0 0 1-4.31 2.07 5.25 5.25 0 0 1-4.41-1.9 7.35 7.35 0 0 1-1.26-2.32 14.09 14.09 0 0 1-.62-4.83c.05-1.98.38-3.53 1.02-4.85a5.63 5.63 0 0 1 2.5-2.65c.66-.34 1.3-.5 2.14-.58.18-.02 1.04 0 1.23.03ZM363.63 3.1l-.01 3.2v3.16h1.43c1.26.01 1.44.02 1.54.04.42.09.66.28.79.62.08.23.08.08.08 2.96a911.57 911.57 0 0 1 .03 10.18v7.54h7.82v-7.4l.01-7.83c.03-.94.11-1.63.27-2.28.46-1.9 1.54-2.93 3.35-3.23.52-.08.2-.08 5-.08h4.4V3.08h-3.1c-3.48 0-3.91.01-4.67.1-1.83.2-3.04.79-3.96 1.88-.5.6-.9 1.32-1.26 2.26l-.06.17h-.46V3.09h-5.6c-4.46 0-5.6 0-5.6.02ZM390.8 16.95V30.8h3.87l3.86-.01V3.09h-7.73ZM400.6 3.1l-.01.4v.38l4.66 13.4 4.69 13.47.02.05h10.3l.03-.05 4.67-13.45 4.67-13.4V3.1h-7.43l-6.7 19.26h-.5l-3.28-9.5-3.31-9.64-.05-.12h-3.88l-3.88.01ZM430.98 3.1c-.01 0-.02.19-.02.4v.39l5.08 14.59c2.8 8.02 5.08 14.6 5.08 14.61.01.02-.22.02-4.8.02h-4.82v6.42h4.95c5.09 0 5.23 0 5.87-.06 3.15-.28 5.29-1.63 6.63-4.15.28-.55.44-.95.87-2.16L459 6.78l1-2.89v-.8h-7.43l-6.69 19.26h-.5l-3.27-9.46-3.31-9.64-.06-.16h-3.88l-3.88.01ZM36.57 7.36c-1.36.1-2.6.6-3.62 1.45a5.65 5.65 0 0 0-1.67 2.42l-.05.13H31V7.7h-4.35v23.08h4.5v-7.3c0-8 0-7.34.08-7.82a4.89 4.89 0 0 1 2.06-3.18c.83-.58 1.74-.89 2.87-.98a11.87 11.87 0 0 1 2.8.25H39v-4.3l-.21-.02c-.61-.07-1.74-.1-2.22-.07ZM51.08 7.41c-2.33.12-4.3.84-5.95 2.16a9.89 9.89 0 0 0-2.03 2.2 12.5 12.5 0 0 0-2 5.78 18.04 18.04 0 0 0 0 3.65 12.13 12.13 0 0 0 2.26 6.05 9.74 9.74 0 0 0 5 3.52c2.11.64 4.7.64 6.8 0a9.78 9.78 0 0 0 4.88-3.37c1.38-1.78 2.19-4 2.4-6.58.13-1.46.06-3.06-.18-4.42a11.24 11.24 0 0 0-3.58-6.6 10 10 0 0 0-5.75-2.35c-.56-.06-1.31-.07-1.85-.04Zm1.42 3.78c.88.1 1.62.34 2.28.75a6.13 6.13 0 0 1 1.99 2.15 10.31 10.31 0 0 1 1.2 5c.02 1.23-.12 2.44-.42 3.51a7.14 7.14 0 0 1-1.81 3.32c-.61.6-1.2.98-1.95 1.24a6 6 0 0 1-2 .3 5.7 5.7 0 0 1-2.72-.6 5 5 0 0 1-1.28-.94A7.1 7.1 0 0 1 46 22.73c-.57-1.99-.6-4.46-.08-6.5a7.24 7.24 0 0 1 2.03-3.67 5.13 5.13 0 0 1 3.35-1.4 11 11 0 0 1 1.2.03ZM92.05 7.4c-.96.06-1.56.15-2.3.33a9.62 9.62 0 0 0-6.09 4.66 13.5 13.5 0 0 0-1.71 7c0 .83 0 1.04.06 1.6.16 1.77.58 3.32 1.29 4.7A9.72 9.72 0 0 0 90.28 31c1.84.37 4.08.32 5.85-.13a9.07 9.07 0 0 0 5.02-3.1A7.64 7.64 0 0 0 102.5 25l-2.11-.39-2.11-.38-.08.13a4.72 4.72 0 0 1-2.35 2.55 6.3 6.3 0 0 1-2.23.58c-.29.03-1.13.03-1.44 0a6.35 6.35 0 0 1-3.02-1.04 5.93 5.93 0 0 1-2.02-2.43 8.44 8.44 0 0 1-.72-3.18v-.26h16.38v-.81c0-1.83-.06-2.76-.25-3.87-.2-1.22-.53-2.24-1.05-3.28a8.9 8.9 0 0 0-2.66-3.26 10.1 10.1 0 0 0-5.34-1.94 18.3 18.3 0 0 0-1.46-.03Zm1.3 3.75c1.2.13 2.19.55 3.05 1.3a5.8 5.8 0 0 1 1.78 2.96c.13.51.21 1.17.21 1.66v.15H86.43v-.12c.08-.97.3-1.78.72-2.61.5-1 1.2-1.8 2.14-2.42a5.32 5.32 0 0 1 2.9-.95c.2-.01.97 0 1.17.03ZM116.79 7.41c-2 .1-3.73.65-5.22 1.65a10.7 10.7 0 0 0-4.25 6.06 16.1 16.1 0 0 0-.5 5.8c.2 2.17.84 4.13 1.88 5.76.58.9 1.32 1.73 2.15 2.4a9.37 9.37 0 0 0 3.6 1.8 12.06 12.06 0 0 0 3.92.34 10.2 10.2 0 0 0 3.84-.95 8.31 8.31 0 0 0 4.76-6.75l.01-.04h-4.37l-.05.16a4.87 4.87 0 0 1-4.24 3.75c-.59.07-1.32.06-1.93-.05a5.47 5.47 0 0 1-3.5-2.27c-.56-.75-1-1.73-1.26-2.79a13.8 13.8 0 0 1-.16-5.24 7.77 7.77 0 0 1 2.1-4.3 5.48 5.48 0 0 1 2.15-1.3 6.4 6.4 0 0 1 3.89.1c.59.21 1.03.5 1.5.96a5.32 5.32 0 0 1 1.46 2.5l.04.15h4.37v-.06a8.22 8.22 0 0 0-5.31-6.94 10.98 10.98 0 0 0-4.88-.74ZM156.2 7.41a9.87 9.87 0 0 0-6 2.29 11.02 11.02 0 0 0-3.41 5.43c-.52 1.78-.68 3.9-.48 5.97.17 1.8.63 3.38 1.37 4.8a9.68 9.68 0 0 0 5.91 4.86c1.65.48 3.63.61 5.53.36 3.72-.49 6.55-2.62 7.56-5.69.12-.39.13-.42.1-.43-.02 0-4.13-.75-4.19-.75-.03 0-.04 0-.1.16-.18.42-.45.9-.72 1.22-.16.2-.49.53-.7.7-.67.54-1.5.9-2.43 1.08-.48.08-.83.11-1.41.11-.64 0-1.07-.04-1.6-.15a5.76 5.76 0 0 1-3.93-2.83 8 8 0 0 1-.99-3.79v-.16h16.38v-1.11l-.02-1.43c-.1-2.25-.53-4-1.35-5.59a9.24 9.24 0 0 0-6.18-4.75c-1.04-.26-2.2-.36-3.33-.3Zm1.45 3.74a5.35 5.35 0 0 1 3.66 1.94 6.1 6.1 0 0 1 1.38 4.01v.12h-11.97v-.06c0-.02 0-.14.02-.25a6.6 6.6 0 0 1 2.15-4.32 5.73 5.73 0 0 1 3.5-1.46c.25-.02 1 0 1.26.02ZM233.58 7.82l8.37 23.22a49.22 49.22 0 0 1-.67 1.9 5.36 5.36 0 0 1-1.14 1.8c-.41.4-.82.58-1.48.69-.27.04-1.03.03-1.35 0a8.05 8.05 0 0 1-1.1-.23l-1.08 3.67c0 .02.32.14.66.22.83.21 1.57.29 2.56.28.56-.01.8-.03 1.24-.1 2.71-.4 4.66-2.09 5.86-5.08l9.64-26.44c0-.02-4.82-.06-4.83-.05l-2.93 8.96-2.91 8.94h-.24l-.22-.65-2.91-8.95-2.7-8.3H233.53ZM293.05 35.8c-1.18.04-1.93.09-2.8.16-2.52.24-4.53.69-5.43 1.23-.7.41-.76.86-.2 1.28.88.66 3.29 1.19 6.36 1.4a48.55 48.55 0 0 0 5.75.05c3.47-.19 6.24-.78 7.11-1.5.22-.19.3-.34.3-.53 0-.1 0-.12-.04-.22-.35-.69-2.32-1.3-5.25-1.63a41.09 41.09 0 0 0-5.8-.24Zm0 0"})})})}let t=o.z.span`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: var(--privy-color-foreground-3);
  display: block;

  && > a {
    color: var(--privy-color-accent);
  }
`,n=o.z.a`
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
`;e.s(["B",0,({className:e})=>{let{appearance:o}=(0,a.a)();return(0,r.jsx)(l,{className:e,children:o.footerLogo??(0,r.jsx)(n,{href:"https://privy.io/?utm_source=module&utm_medium=module&utm_campaign=registration_module",target:"_blank",rel:"noopener noreferrer",id:"protected-by-privy",children:(0,r.jsx)(i,{color:"currentColor",height:13,width:150})})})},"M",0,l,"T",0,function({app:{legal:{privacyPolicyUrl:e,termsAndConditionsUrl:o,requireUsersAcceptTerms:a}},alwaysShowImplicitConsent:i}){let n=!(!e||!o);return(!a||i)&&(o||e)?(0,r.jsxs)(t,{children:["By logging in I agree to the"," ",o&&(0,r.jsx)("a",{href:o,target:"_blank",children:n?"Terms":"Terms of Service"}),n&&" & ",e&&(0,r.jsx)("a",{href:e,target:"_blank",children:"Privacy Policy"})]}):(0,r.jsx)(t,{})}])},772949,e=>{var r=e.i(704688),o=e.i(60058),a=e.i(852560),i=e.i(770331),t=e.i(536024),n=e.i(6674);let l=n.forwardRef(function({title:e,titleId:r,...o},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":r},o),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});var c=e.i(800307),s=e.i(705390);let d=o.z.button`
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
`,p=({children:e,loading:o,disabled:i,success:t,size:n="lg",loadingText:l="Loading...",as:c,onClick:s,...d})=>{let p="a"===c,u=!(!o&&!i);return(0,r.jsx)(v,{as:c,disabled:p?void 0:u,"aria-disabled":p?u:void 0,$success:t,$size:n,onClick:e=>{p&&u?e.preventDefault():s?.(e)},...d,children:o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.B,{}),l?(0,r.jsx)("span",{style:{marginLeft:"8px"},children:l}):null]}):e})},u=(0,o.z)(d)`
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
`,v=(0,o.z)(d)`
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
  ${e=>e.disabled&&o.m`
      &&&,
      &&&:hover,
      &&&:active {
        background-color: var(--privy-color-background-2);
        border: 1px solid var(--privy-color-border-default);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,g=({children:e,loading:o,disabled:i,size:t="lg",loadingText:n="Loading...",as:l,onClick:c,...s})=>{let d="a"===l,p=!(!o&&!i);return(0,r.jsx)(b,{as:l,disabled:d?void 0:p,"aria-disabled":d?p:void 0,$size:t,onClick:e=>{d&&p?e.preventDefault():c?.(e)},...s,children:o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.B,{}),n?(0,r.jsx)("span",{style:{marginLeft:"8px"},children:n}):null]}):e})},h=({children:e,loading:o,disabled:i,size:t="lg",loadingText:n="Loading...",as:l,onClick:c,...s})=>{let d="a"===l,p=!(!o&&!i);return(0,r.jsx)(m,{as:l,disabled:d?void 0:p,"aria-disabled":d?p:void 0,$size:t,onClick:e=>{d&&p?e.preventDefault():c?.(e)},...s,children:o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.B,{}),n?(0,r.jsx)("span",{style:{marginLeft:"8px"},children:n}):null]}):e})},b=(0,o.z)(d)`
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
  ${e=>e.disabled&&o.m`
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
  ${e=>e.disabled&&o.m`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,y=o.z.button`
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

    ${e=>e.invisible&&o.m`
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
`;let w=o.z.button`
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
`,f=({backFn:e,disabled:o=!1,"aria-label":a})=>(0,r.jsx)("div",{children:(0,r.jsx)(C,{type:"button","aria-label":a,disabled:o,onClick:o?void 0:e,children:(0,r.jsx)(i.f,{height:"16px",width:"16px",strokeWidth:2})})}),x=({infoFn:e})=>(0,r.jsx)("div",{children:(0,r.jsx)(V,{"aria-label":"info",onClick:e,children:(0,r.jsx)(t.f,{height:"22px",width:"22px",strokeWidth:2})})}),k=e=>(0,r.jsx)("div",{children:(0,r.jsx)(C,{type:"button","aria-label":e["aria-label"]??"close modal",onClick:e.onClose,children:(0,r.jsx)(l,{height:"16px",width:"16px",strokeWidth:2})})}),C=o.z.button`
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
`,V=(0,o.z)(C)`
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
`,j=o.z.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`,D=o.z.div`
  display: flex;
  justify-content: flex-end;
`,S=o.z.div`
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
`;e.s(["B",0,({variant:e="primary",size:o="lg",children:a,success:i,...t})=>{switch(e){case"secondary":return(0,r.jsx)(g,{size:o,...t,children:a});case"error":return(0,r.jsx)(g,{$warn:!0,size:o,...t,children:a});case"muted":return(0,r.jsx)(h,{size:o,...t,children:a});default:return(0,r.jsx)(p,{size:o,success:i,...t,children:a})}},"E",0,({children:e,onClick:o,disabled:i,isSubmitting:t,...n})=>(0,r.jsxs)(w,{$isSubmitting:t,onClick:o,disabled:i,...n,children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{children:(0,r.jsx)(a.B,{})})]}),"M",0,({backFn:e,infoFn:o,onClose:a,title:i,eyebrow:t,closeable:n=!0,className:l})=>{let{closePrivyModal:d}=(0,s.u)(),p=(0,c.a)();return(0,r.jsxs)(z,{className:l,children:[(0,r.jsxs)(j,{children:[e&&(0,r.jsx)(f,{backFn:e}),t&&(0,r.jsx)(T,{children:t}),!t&&i&&(0,r.jsx)(S,{id:"privy-dialog-title",children:i}),(0,r.jsx)("div",{style:{height:24}}),o&&(0,r.jsx)(x,{infoFn:o})]}),(0,r.jsx)(D,{children:!p.render.standalone&&n&&(0,r.jsx)(k,{onClose:a||(()=>d())})})]})},"P",0,p,"S",0,g,"b",0,({children:e,loading:o,disabled:i,...t})=>(0,r.jsx)(u,{disabled:i,...t,children:o?(0,r.jsx)(a.B,{color:"var(--privy-color-foreground-accent)"}):e}),"c",0,y,"d",0,h],772949)},827637,e=>{var r=e.i(704688),o=e.i(6674),a=e.i(60058),i=e.i(852560),t=e.i(941177),n=e.i(772949),l=e.i(731651);let c=a.z.div`
  /* spacing tokens */
  --screen-space: 16px; /* base 1x = 16 */
  --screen-space-lg: calc(var(--screen-space) * 1.5); /* 24px */

  position: relative;
  overflow: hidden;
  margin: 0 calc(-1 * var(--screen-space)); /* extends over modal padding */
  height: 100%;
  border-radius: var(--privy-border-radius-lg);
`,s=a.z.div`
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
`,v=a.z.div`
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
`,h=a.z.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,b=a.z.h3`
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
`,y=a.z.div`
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
`,f=a.z.div`
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
`,x=({children:e,...o})=>(0,r.jsx)(c,{children:(0,r.jsx)(s,{...o,children:e})}),k=a.z.div`
  position: absolute;
  top: 0;
  left: calc(-1 * var(--screen-space-lg));
  width: calc(100% + calc(var(--screen-space-lg) * 2));
  height: 4px;
  background: var(--privy-color-background-2);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
`,C=(0,a.z)(t.B)`
  padding: 0;
  && a {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,V=a.z.div`
  height: 100%;
  width: ${({pct:e})=>e}%;
  background: var(--privy-color-foreground-3);
  border-radius: 2px;
  transition: width 300ms ease-in-out;
`,z=({step:e})=>e?(0,r.jsx)(k,{children:(0,r.jsx)(V,{pct:Math.min(100,e.current/e.total*100)})}):null;x.Header=({title:e,subtitle:o,icon:a,iconVariant:i,iconLoadingStatus:t,showBack:n,onBack:l,showInfo:c,onInfo:s,showClose:u,onClose:v,step:y,headerTitle:w,eyebrow:f,...k})=>(0,r.jsxs)(d,{...k,children:[(0,r.jsx)(p,{backFn:n?l:void 0,infoFn:c?s:void 0,onClose:u?v:void 0,title:w,eyebrow:f,closeable:u}),(a||i||e||o)&&(0,r.jsxs)(g,{children:[a||i?(0,r.jsx)(x.Icon,{icon:a,variant:i,loadingStatus:t}):null,!(!e&&!o)&&(0,r.jsxs)(h,{children:[e&&(0,r.jsx)(b,{children:e}),o&&(0,r.jsx)(m,{children:o})]})]}),y&&(0,r.jsx)(z,{step:y})]}),(x.Body=o.default.forwardRef(({children:e,...o},a)=>(0,r.jsx)(u,{ref:a,...o,children:e}))).displayName="Screen.Body",x.Footer=({children:e,...o})=>(0,r.jsx)(v,{id:"privy-content-footer-container",...o,children:e}),x.Actions=({children:e,...o})=>(0,r.jsx)(j,{...o,children:e}),x.HelpText=({children:e,...o})=>(0,r.jsx)(D,{...o,children:e}),x.FooterText=({children:e,...o})=>(0,r.jsx)(S,{...o,children:e}),x.Watermark=()=>(0,r.jsx)(C,{}),x.Icon=({icon:e,variant:a="subtle",loadingStatus:t})=>"logo"===a&&e?(0,r.jsx)(w,"string"==typeof e?{children:(0,r.jsx)("img",{src:e,alt:""})}:o.default.isValidElement(e)?{children:e}:{children:o.default.createElement(e)}):"loading"===a?e?(0,r.jsx)(f,{children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,r.jsx)(i.C,{success:t?.success,fail:t?.fail}),"string"==typeof e?(0,r.jsx)("span",{style:{background:`url('${e}') 0 0 / contain`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"contain"}}):o.default.isValidElement(e)?o.default.cloneElement(e,{style:{width:"38px",height:"38px"}}):o.default.createElement(e,{style:{width:"38px",height:"38px"}})]})}):(0,r.jsx)(y,{$variant:a,children:(0,r.jsx)(l.N,{size:"64px"})}):(0,r.jsx)(y,{$variant:a,children:e&&("string"==typeof e?(0,r.jsx)("img",{src:e,alt:"",style:{width:"32px",height:"32px",borderRadius:"6px"}}):o.default.isValidElement(e)?e:o.default.createElement(e,{width:32,height:32,stroke:(()=>{switch(a){case"success":return"var(--privy-color-icon-success)";case"warning":return"var(--privy-color-icon-warning)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}})(),strokeWidth:2}))});let j=a.z.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(var(--screen-space) / 2);
`,D=a.z.div`
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
`,S=a.z.div`
  && {
    margin-top: -1rem;
    width: 100%;
    text-align: center;
    color: var(--privy-color-foreground-2);
    font-size: 0.6875rem; /* 11px */
    line-height: 1rem; /* 16px */
  }
`;e.s(["S",0,x])},927533,e=>{var r=e.i(704688);e.s(["W",0,({...e})=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,r.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,r.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,r.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]})])},731651,e=>{var r=e.i(704688),o=e.i(60058);let a=o.z.div`
  --spinner-size: ${e=>e.$size?e.$size:"96px"};

  display: inline-flex;
  justify-content: center;
  align-items: center;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,i=o.z.div`
  position: relative;
  height: var(--spinner-size);
  width: var(--spinner-size);

  opacity: 1;
  animation: fadein 200ms ease;
`,t=o.z.div`
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
`,n=o.z.div`
  position: absolute;
  inset: 0;
  width: var(--spinner-size);
  height: var(--spinner-size);

  && {
    border: 4px solid var(--privy-color-border-default);
    border-radius: 50%;
  }
`,l=o.z.div`
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
`;e.s(["N",0,({size:e,centerIcon:o})=>(0,r.jsx)(a,{$size:e,children:(0,r.jsxs)(i,{children:[(0,r.jsx)(n,{}),(0,r.jsx)(l,{}),o?(0,r.jsx)(t,{children:o}):null]})})])},857442,e=>{var r=e.i(60058);r.z.div`
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
`;let o=r.z.div`
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
`,i=r.z.span`
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
`,t=r.z.div`
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
`;e.s(["C",0,i,"S",0,t,"W",0,a,"b",0,o])},871541,e=>{var r=e.i(800307);let o={"connectionStatus.successfullyConnected":"Successfully connected with {walletName}","connectionStatus.errorTitle":"{errorMessage}","connectionStatus.connecting":"Connecting","connectionStatus.connectOneWallet":"For the best experience, connect only one wallet at a time.","connectionStatus.checkOtherWindows":"Don't see your wallet? Check your other browser windows.","connectionStatus.stillHere":"Still here?","connectionStatus.tryConnectingAgain":"Try connecting again","connectionStatus.or":"or","connectionStatus.useDifferentLink":"use this different link","coinbaseWallet.connectingSubtitle":"This connects Coinbase Wallet, not your Coinbase.com account.","coinbaseWallet.connectingSubtitleReset":"This connects Coinbase Wallet, not your Coinbase.com account. Not the right wallet? Reset your connection below.","coinbaseWallet.successSubtitle":"This Coinbase Wallet address is not your Coinbase.com deposit address.","connectWallet.connectYourWallet":"Connect a wallet","connectWallet.waitingForWallet":"Waiting for {walletName}","connectWallet.connectToAccount":"Connect a wallet to your {appName} account","connectWallet.installAndConnect":"To connect to {walletName}, install and open the app. Then confirm the connection when prompted.","connectWallet.tryConnectingAgain":"Please try connecting again.","connectWallet.openInApp":"Open in app","connectWallet.copyLink":"Copy link","connectWallet.retry":"Retry","connectWallet.searchPlaceholder":"Search through {count} wallets","connectWallet.noWalletsFound":"No wallets found. Try another search.","connectWallet.lastUsed":"Last used","connectWallet.selectYourWallet":"Select your wallet","connectWallet.selectNetwork":"Select network","connectWallet.goToWallet":"Go to {walletName} to continue","connectWallet.scanToConnect":"Scan code to connect to {walletName}","connectWallet.openOrInstall":"Open or install {walletName}","cardTransactionList.scrollRegionLabel":"Card transactions","cardTransactionList.noTransactionsFound":"No transactions found","cardTransactionList.tryAgain":"Try again","cardTransactionList.badgeCredit":"Credit","cardTransactionList.badgePending":"Pending","cardTransactionList.badgeDeclined":"Declined","cardTransactionList.badgeExpired":"Expired","cardTransactionList.badgeReversed":"Reversed","cardDetailsView.cardholderLabel":"Cardholder","cardDetailsView.validThruLabel":"Valid thru","cardDetailsView.showDetails":"Details","cardDetailsView.hideDetails":"Hide details","cardDetailsView.pin":"PIN","cardDetailsView.replace":"Replace","cardDetailsView.cancel":"Cancel","cardDetailsView.freezeTitle":"Freeze Card","cardDetailsView.freezeSubtitle":"Temporarily disable your card","cardDetailsView.addToWalletTitle":"Add to wallet","cardDetailsView.addToWalletSubtitle":"Add your card to {walletName}","cardDetailsView.freezeConfirmTitle":"Freeze this card?","cardDetailsView.freezeConfirmDescription":"This will instantly freeze the current card.","cardDetailsView.freezeConfirmCta":"Freeze card","cardDetailsView.unfreezeConfirmTitle":"Unfreeze this card?","cardDetailsView.unfreezeConfirmDescription":"This will instantly unfreeze the current card.","cardDetailsView.unfreezeConfirmCta":"Unfreeze card","cardDetailsView.cancelConfirmTitle":"Cancel this card?","cardDetailsView.cancelConfirmDescription":"This will instantly cancel the current card.","cardDetailsView.cancelConfirmCta":"Cancel card","cardDetailsView.replaceReasonTitle":"Why are you replacing your card?","cardDetailsView.replaceReasonCta":"Continue","cardDetailsView.replaceReasonLost":"Lost","cardDetailsView.replaceReasonStolen":"Stolen","cardDetailsView.replaceReasonExpired":"Expired","cardDetailsView.replaceWarnTitle":"Replace this card?","cardDetailsView.replaceWarnDescription":"This will instantly close the current card and issue a new one.","cardDetailsView.replaceWarnCta":"Replace","cardDetailsView.dialogDismiss":"Never mind","cardDetailsView.dialogBack":"Back","cardPinDialog.title":"PIN number","cardPinDialog.description":"Your PIN is used for in-person transactions and ATM withdrawals.","cardPinDialog.changePin":"Change PIN","cardPinDialog.close":"Close","cardPinDialog.cancel":"Cancel","cardPinDialog.save":"Save and close","cardPinDialog.placeholder":"••••","cardPinDialog.emptyError":"Add a new PIN or cancel to continue.","cardPinDialog.saveError":"Could not update this PIN. Please try again.","cardPinDialog.loadError":"Could not load this PIN. Please try again.","cardPinDialog.pinLabel":"PIN","cardDetailsReveal.cardNumberLabel":"Card number","cardDetailsReveal.expirationLabel":"Expiration","cardDetailsReveal.cvcLabel":"CVC","cardDetailsReveal.copyValue":"Copy {label}","cardDetailsReveal.error":"Card details could not be loaded. Please try again.","transactionDetailsView.summarySubheader":"Card payment to {merchantName}","transactionDetailsView.summarySubheaderFallback":"Card payment","transactionDetailsView.detailsHeader":"Details","transactionDetailsView.disputeCta":"Dispute transaction","transactionDetailsView.cardEndingIn":"Card ending in {last4}","transactionDetailsView.amountLabel":"Amount","transactionDetailsView.atmFeeLabel":"ATM Fee","transactionDetailsView.cashbackLabel":"Cashback","transactionDetailsView.statusLabel":"Status","transactionDetailsView.disputeLabel":"Dispute","transactionDetailsView.merchantLabel":"Merchant","transactionDetailsView.currencyLabel":"Currency","transactionDetailsView.fromLabel":"From","transactionDetailsView.dateLabel":"Date created","transactionDetailsView.statusPending":"Pending","transactionDetailsView.statusPosted":"Posted","transactionDetailsView.statusDeclined":"Declined","transactionDetailsView.statusExpired":"Expired","transactionDetailsView.statusReversed":"Reversed","transactionDetailsView.disputeNone":"None","transactionDetailsView.disputeExpired":"Dispute expired","transactionDetailsView.disputeLost":"Dispute lost","transactionDetailsView.disputeSubmitted":"Dispute submitted","transactionDetailsView.disputeUnsubmitted":"Dispute unsubmitted","transactionDetailsView.disputeWon":"Dispute won","transactionDetailsView.disputeDialogTitle":"Dispute this transaction","transactionDetailsView.disputeDialogBody":"To dispute this transaction, call the number below and our support team will help you.","transactionDetailsView.disputeDoneCta":"Done","cardSummaryView.walletHeading":"Wallet","cardSummaryView.cardHeading":"Your Card","cardSummaryView.transactionsHeading":"Transactions","cardSummaryView.unknownMerchant":"Unknown merchant","cardSummaryView.balanceUnavailable":"—","cardSummaryView.currentBalance":"Spending balance","cardSummaryView.cardTitle":"{brand} debit card","cardSummaryView.cardTitleFallback":"Debit card","cardSummaryView.cardLoadError":"Could not load this card.","cardSummaryView.transactionsLoadError":"Could not load transactions.","cardSummaryView.freezeError":"Could not update this card. Please try again.","cardSummaryView.cancelError":"Could not cancel this card. Please try again.","cardSummaryView.replaceError":"Could not replace this card. Please try again.","cardSummaryView.walletProvisioningError":"Could not load wallet options.","cardSummaryView.walletProvisioningSuccess":"Card added to wallet","cardSummaryView.cardCanceledBanner":"This card has been cancelled","cardSummaryView.cardFrozenBanner":"This card is frozen","cardSummaryView.sandboxBanner":"In sandbox mode using test funds","cardSummaryView.back":"Back","cardSummaryView.close":"Close","cardStatementDownload.buttonLabel":"Download statement","cardStatementDownload.tooltip":"Download a monthly PDF statement","cardStatementDownload.confirmTitle":"Download statement","cardStatementDownload.confirmDescription":"Are you sure you want to download your statement from {period}?","cardStatementDownload.confirmCta":"Download","cardStatementDownload.cancelCta":"Cancel","cardStatementDownload.error":"Could not download your statement. Please try again.","cardStatementDownload.notAvailable":"No statement is available for that period.","cardStatementDownload.empty":"Statements are available once the month ends.","signUpForCardView.sandboxBanner":"In sandbox mode using test funds","signUpForCardView.title":"Create {appName} card","signUpForCardView.titleFallback":"Create card","signUpForCardView.subtitle":"Complete a few quick steps to set up your {appName} card.","signUpForCardView.subtitleFallback":"Complete a few quick steps to set up your card.","signUpForCardView.checklistAgreements":"Review required agreements","signUpForCardView.checklistInformation":"Provide your information","signUpForCardView.checklistIdentity":"Verify your identity","signUpForCardView.getStartedCta":"Get started","signUpForCardView.workingCta":"Please wait…","signUpForCardView.termsPromptTitle":"Review card agreements","signUpForCardView.disclosurePromptTitle":"Accept electronic disclosures","signUpForCardView.disclosurePromptSubtitle":"Review and accept the {disclosureStatement} to receive and sign card documents electronically.","signUpForCardView.disclosureStatementLabel":"Electronic Disclosure Statement","signUpForCardView.acceptingDisclosureTitle":"Accepting disclosures","signUpForCardView.acceptingDisclosureSubtitle":"This will only take a moment.","signUpForCardView.bankTermsPromptProviders":"{appName} uses a wallet provided by Privy. {bank} issues the card, and Bridge manages the card program.","signUpForCardView.bankTermsPromptProvidersFallback":"This app uses a wallet provided by Privy. {bank} issues the card, and Bridge manages the card program.","signUpForCardView.bankTermsPromptAgreements":"By clicking Accept and continue, you agree to the {agreements}.","signUpForCardView.bankTermsAnd":"and","signUpForCardView.acceptingBankTermsTitle":"Accepting agreements","signUpForCardView.acceptingBankTermsSubtitle":"This will only take a moment.","signUpForCardView.providerTermsPromptTitle":"Review card program terms","signUpForCardView.providerTermsPromptSubtitle":"Open the card program terms to review and accept them.","signUpForCardView.acceptingProviderTermsTitle":"Review card program terms","signUpForCardView.acceptingProviderTermsSubtitle":"Finish reviewing the card program terms in the pop-up window to continue.","signUpForCardView.acceptAndContinueCta":"Accept and continue","signUpForCardView.kycPromptTitle":"Verify your identity","signUpForCardView.kycPromptSubtitle":"Open the verification flow to confirm your identity.","signUpForCardView.verifyIdentityCta":"Verify identity","signUpForCardView.verifyingIdentityTitle":"Verify your identity","signUpForCardView.verifyingIdentitySubtitle":"Finish verifying your identity in the pop-up window to continue.","signUpForCardView.pendingTitle":"Finishing up","signUpForCardView.pendingSubtitle":"We're getting your account ready. This can take a moment.","signUpForCardView.underReviewTitle":"Identity under review","signUpForCardView.underReviewSubtitle":"Your identity information is being reviewed. You can close this sign up and check back later to finish.","signUpForCardView.creatingCardTitle":"Creating your card","signUpForCardView.creatingCardSubtitle":"Hang tight while we finish creating your card.","signUpForCardView.approvePromptTitle":"Approve card spending","signUpForCardView.approvePromptSubtitle":"Sign a one-time approval to let your card spend from your selected {symbol} balance.","signUpForCardView.approvePromptVaultTitle":"Spend from your Earn balance","signUpForCardView.approvePromptVaultSubtitle":"Keep funds in Earn until they're needed for a card purchase.","signUpForCardView.approvePromptVaultOnlySubtitle":"Card purchases spend your Earn balance.","signUpForCardView.approvePromptVaultItemWithdraw":"Automatically withdraws only what's needed for purchases","signUpForCardView.approvePromptVaultItemRemaining":"Your remaining assets stay in Earn","signUpForCardView.approvePromptVaultItemTurnOff":"Turn this off anytime in Settings","signUpForCardView.approvePromptVaultDisclaimer":"Earn is separate from your card and involves risk. Earn is provided by {provider} through your noncustodial wallet. Assets in Earn can lose value and aren't held, insured, or guaranteed by Lead Bank or Bridge. Card protections don't cover losses from Earn. Your prepaid debit card is issued by Lead Bank.","signUpForCardView.approvePromptWhat":"What this does:","signUpForCardView.approvePromptItemConnect":"Connects your card to your {symbol} balance","signUpForCardView.approvePromptItemPurchases":"Lets your card make purchases","signUpForCardView.approvePromptItemLimits":"Spending limits are managed separately","signUpForCardView.approveAndContinueCta":"Approve and continue","signUpForCardView.approveErrorTitle":"Spend approval failed","signUpForCardView.approveErrorSubtitle":"We couldn't approve card spending. Click below to try again.","signUpForCardView.readyTitle":"Your card is ready","signUpForCardView.readySubtitle":"Your card has been created and is ready to use.","signUpForCardView.continueCta":"Continue","signUpForCardView.doneCta":"Done","signUpForCardView.rejectedTitle":"We couldn't verify your identity","signUpForCardView.rejectedSubtitle":"Your card application could not be approved.","signUpForCardView.errorTitle":"Something went wrong","signUpForCardView.errorSubtitle":"We couldn't set up your card. Please try again.","signUpForCardView.tryAgainCta":"Try again"};e.s(["u",0,function(){let e=(0,r.a)();return{t:(r,a)=>{var i;let t;return i=e.intl.textLocalization,t=i?.[r]??o[r],a&&0!==Object.keys(a).length?t.replace(/\{(\w+)\}/g,(e,r)=>a[r]??e):t}}}])},334554,(e,r,o)=>{var a={single_source_shortest_paths:function(e,r,o){var i,t,n,l,c,s,d,p={},u={};u[r]=0;var v=a.PriorityQueue.make();for(v.push(r,0);!v.empty();)for(n in t=(i=v.pop()).value,l=i.cost,c=e[t]||{})c.hasOwnProperty(n)&&(s=l+c[n],d=u[n],(void 0===u[n]||d>s)&&(u[n]=s,v.push(n,s),p[n]=t));if(void 0!==o&&void 0===u[o])throw Error(["Could not find a path from ",r," to ",o,"."].join(""));return p},extract_shortest_path_from_predecessor_list:function(e,r){for(var o=[],a=r;a;)o.push(a),e[a],a=e[a];return o.reverse(),o},find_path:function(e,r,o){var i=a.single_source_shortest_paths(e,r,o);return a.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(e){var r,o=a.PriorityQueue,i={};for(r in e=e||{},o)o.hasOwnProperty(r)&&(i[r]=o[r]);return i.queue=[],i.sorter=e.sorter||o.default_sorter,i},default_sorter:function(e,r){return e.cost-r.cost},push:function(e,r){this.queue.push({value:e,cost:r}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};r.exports=a},542786,e=>{var r=e.i(6674);let o=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)},a=(...e)=>e.filter((e,r,o)=>!!e&&""!==e.trim()&&o.indexOf(e)===r).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let t=(0,r.forwardRef)(({color:e="currentColor",size:o=24,strokeWidth:t=2,absoluteStrokeWidth:n,className:l="",children:c,iconNode:s,...d},p)=>(0,r.createElement)("svg",{ref:p,...i,width:o,height:o,stroke:e,strokeWidth:n?24*Number(t)/Number(o):t,className:a("lucide",l),...!c&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0})(d)&&{"aria-hidden":"true"},...d},[...s.map(([e,o])=>(0,r.createElement)(e,o)),...Array.isArray(c)?c:[c]]));e.s(["f",0,(e,i)=>{let n=(0,r.forwardRef)(({className:n,...l},c)=>(0,r.createElement)(t,{ref:c,iconNode:i,className:a(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...l}));return n.displayName=o(e),n}],542786)},548503,e=>{let r=(0,e.i(542786).f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["f",0,r],548503)},42789,e=>{let r=(0,e.i(542786).f)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["f",0,r],42789)}])})();