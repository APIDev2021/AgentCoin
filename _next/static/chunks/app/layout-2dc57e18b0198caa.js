!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd6d354a-20d0-4a25-97d4-2babb63de5b7",e._sentryDebugIdIdentifier="sentry-dbid-bd6d354a-20d0-4a25-97d4-2babb63de5b7")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{35883:function(){},36563:function(){},46601:function(){},89214:function(){},29120:function(){},46586:function(){},93536:function(e,t,n){Promise.resolve().then(n.t.bind(n,16945,23)),Promise.resolve().then(n.t.bind(n,54817,23)),Promise.resolve().then(n.bind(n,61505)),Promise.resolve().then(n.bind(n,49833)),Promise.resolve().then(n.t.bind(n,15204,23))},78833:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=n(57437),o=n(2265);t.default=function(e){let{html:t,height:n=null,width:a=null,children:i,dataNtpc:l=""}=e;return(0,o.useEffect)(()=>{l&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(l)}})},[l]),(0,r.jsxs)(r.Fragment,{children:[i,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=a?"".concat(a,"px"):"auto"},"data-ntpc":l,dangerouslySetInnerHTML:{__html:t}}):null]})}},64404:function(e,t,n){"use strict";var r;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=n(57437),i=n(2265),l=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:n="dataLayer"}=e;return void 0===o&&(o=n),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(n,"'] = window['").concat(n,"'] || [];\n          function gtag(){window['").concat(n,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,a.jsx)(l.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===o){console.warn("@next/third-parties: GA has not been initialized");return}window[o]?window[o].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(o," does not exist"))}},9077:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=n(57437),a=n(21772),i=r(n(78833));t.default=function(e){let{apiKey:t,...n}=e,r={...n,key:t},{html:l}=(0,a.GoogleMapsEmbed)(r);return(0,o.jsx)(i.default,{height:r.height||null,width:r.width||null,html:l,dataNtpc:"GoogleMapsEmbed"})}},27640:function(e,t,n){"use strict";var r;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=n(57437),i=n(2265),l=(r=n(31877))&&r.__esModule?r:{default:r};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:n="dataLayer",auth:r,preview:s,dataLayer:u}=e;void 0===o&&(o=n);let c="dataLayer"!==n?"&l=".concat(n):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(n,"');")}}),(0,a.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(r?"&gtm_auth=".concat(r):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===o){console.warn("@next/third-parties: GTM has not been initialized");return}window[o]?window[o].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(o," does not exist"))}},9881:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var o=n(9077);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return r(o).default}});var a=n(85031);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return r(a).default}});var i=n(27640);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return i.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return i.sendGTMEvent}});var l=n(64404);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return l.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return l.sendGAEvent}})},85031:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let o=n(57437),a=r(n(31877)),i=n(21772),l=r(n(78833)),s={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:n,stylesheets:r}=(0,i.YouTubeEmbed)(e);return(0,o.jsx)(l.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==n?void 0:n.map(e=>(0,o.jsx)(a.default,{src:e.url,strategy:s[e.strategy],stylesheets:r},e.url))})}},31877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o.a}});var r=n(84080),o=n.n(r),a={};for(var i in r)"default"!==i&&(a[i]=(function(e){return r[e]}).bind(0,i));n.d(t,a)},7449:function(e,t){"use strict";function n(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},21772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var r=n(55081);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}});var o=n(44062);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return o.GoogleMapsEmbed}});var a=n(21432);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return a.YouTubeEmbed}})},55081:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let a=o(n(46893)),i=n(15783);t.GoogleAnalytics=e=>{var t=r(e,[]);return(0,i.formatData)(a.default,t)}},44062:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let a=o(n(46362)),i=n(15783);t.GoogleMapsEmbed=e=>{var t=r(e,[]);return(0,i.formatData)(a.default,t)}},21432:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let a=o(n(95825)),i=n(15783);t.YouTubeEmbed=e=>{var t=r(e,[]);return(0,i.formatData)(a.default,t)}},15783:function(e,t){"use strict";function n(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}):{}}function r(e,t,n,r){let o=r&&Object.keys(r).length>0?new URL(Object.values(r)[0],e):new URL(e);return t&&n&&t.forEach(e=>{n[e]&&o.searchParams.set(e,n[e])}),o.toString()}function o(e,t,n,o,a){var i;if(!t)return`<${e}></${e}>`;let l=(null===(i=t.src)||void 0===i?void 0:i.url)?Object.assign(Object.assign({},t),{src:r(t.src.url,t.src.params,o,a)}):t,s=Object.keys(Object.assign(Object.assign({},l),n)).reduce((e,t)=>{let r=null==n?void 0:n[t],o=l[t],a=null!=r?r:o,i=!0===a?t:`${t}="${a}"`;return a?e+` ${i}`:e},"");return`<${e}${s}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=r,t.createHtml=o,t.formatData=function(e,t){var a,i,l,s,u;let c=n(t,null===(a=e.scripts)||void 0===a?void 0:a.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=n(t,null===(l=null===(i=e.html)||void 0===i?void 0:i.attributes.src)||void 0===l?void 0:l.params),f=n(t,[null===(u=null===(s=e.html)||void 0===s?void 0:s.attributes.src)||void 0===u?void 0:u.slugParam]),b=n(t,[...Object.keys(c),...Object.keys(d),...Object.keys(f)],!0);return Object.assign(Object.assign({},e),{html:e.html?o(e.html.element,e.html.attributes,b,d,f):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:r(e.url,e.params,c)})):null})}},61505:function(e,t,n){"use strict";n.d(t,{ClientBody:function(){return u},ClientHead:function(){return s}});var r=n(57437),o=n(16463),a=n(7449),i=n.n(a),l=n(9881);function s(){let e=(0,o.usePathname)();return(0,r.jsx)(i(),{children:(0,r.jsx)("link",{rel:"canonical",href:"https://agentcoin.tv".concat(e)})})}function u(){return(0,r.jsx)(l.GoogleAnalytics,{gaId:"G-PMHQWMQ50D"})}},49833:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var r=n(57437),o=n(16463),a=n(76437),i=n(12196),l=n(8983),s=n(72312),u=n(53742);function c(e){let{children:t}=e,n=i.O.yellow[300],c=(0,o.useRouter)();return(0,r.jsx)(a.rr,{appId:l.lG,config:{appearance:{theme:"#1B1C1E",accentColor:n,landingHeader:"JOIN THE WAITLIST",loginMessage:"Gain priority access to Agents of Tomorrow",logo:(0,r.jsxs)("svg",{width:90,className:"aspect-square",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 40.1344H16.8657L17.4774 37.4396C19.4634 38.5201 21.74 39.134 24.16 39.134C26.58 39.134 28.8567 38.5201 30.8427 37.4396L31.4544 40.1344H45.3201L33.9515 8H27.1758H24.1601H20.9717H14.3686L3 40.1344ZM24.16 36.9229C21.8981 36.9229 19.7849 36.2861 17.9899 35.1819C14.6168 33.1068 12.3677 29.3814 12.3677 25.1306C12.3677 19.0319 16.9974 14.0144 22.934 13.4012C23.337 13.3596 23.746 13.3383 24.16 13.3383C24.574 13.3383 24.9831 13.3596 25.3861 13.4012C31.3227 14.0145 35.9523 19.0319 35.9523 25.1306C35.9523 29.3813 33.7033 33.1067 30.3302 35.1818C28.5353 36.286 26.422 36.9229 24.16 36.9229Z",fill:n}),(0,r.jsx)("path",{d:"M31.637 28.1345C29.6022 29.8046 26.9985 30.8071 24.1606 30.8071C21.3227 30.8071 18.7189 29.8046 16.6841 28.1345",stroke:n,strokeWidth:"2"}),(0,r.jsx)("path",{d:"M20.9717 21.132V25.0649",stroke:n,strokeWidth:"2"}),(0,r.jsx)("path",{d:"M27.5308 21.132V25.0649",stroke:n,strokeWidth:"2"})]})},embeddedWallets:{createOnLogin:"off"},loginMethods:["email","telegram"],legal:{termsAndConditionsUrl:"https://www.agentcoin.org/legal/terms-of-service",privacyPolicyUrl:"https://www.agentcoin.org/legal/privacy-policy"}},onSuccess:c.refresh,children:(0,r.jsx)(u.zt,{children:(0,r.jsx)(s.P.Provider,{value:{weight:"duotone",size:32,color:"currentColor",mirrored:!1},children:t})})})}},12196:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});let r={blue:{50:"#e1e0e9",100:"#deeaff",200:"#c4d8ff",300:"#a0beff",400:"#7a98ff",500:"#4354ff",600:"#3245f9",700:"#2f38d3",800:"#2932aa",900:"#293286",950:"#181b4e"},yellow:{50:"#fdfee8",100:"#fffb8a",200:"#fff713",300:"#fef536",400:"#fbe714",500:"#ebce07",600:"#cba103",700:"#a27406",800:"#865b0d",900:"#724a11",950:"#422706"},slate:{600:"#5f7386"}}},8983:function(e,t,n){"use strict";n.d(t,{F3:function(){return a},Sp:function(){return l},lG:function(){return r},mF:function(){return o},qg:function(){return i},y5:function(){return s}});let r="cm0ypr412017y8dsowube7tyf",o="https://maoetposdyrkvxsjfswa.supabase.co",a="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hb2V0cG9zZHlya3Z4c2pmc3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMDc2NzQsImV4cCI6MjA0MjY4MzY3NH0.6lkL0aEMCPymtuB4Ro5KLt_TBoIMV1G1VAVigNUc2Pc",i="1838966427522314548",l="6LfqIWMqAAAAAKPdrkgw-Ln6XHu4kbUWvzes3FU3",s="6LflcmMqAAAAAKvNPHvSRq8hLZpJTxwnyNc1UgW1";if(!r)throw Error("Privy App ID has not been set as Environment Variable");if(!o)throw Error("Supabase URL not set as Environment Variable");if(!a)throw Error("Supabase Anon Key not set as Environment Variable");if(!i)throw Error("X Promo Tweet ID not set as Environment Variable");if(!l)throw Error("Google Site Key V3 is not set as Environment Variable");if(!s)throw Error("Google Site Key V2 is not set as Environment Variable")},15204:function(){},54817:function(e){e.exports={style:{fontFamily:"'__IBM_Plex_Mono_9fc900', '__IBM_Plex_Mono_Fallback_9fc900'",fontStyle:"normal"},className:"__className_9fc900",variable:"__variable_9fc900"}},16945:function(e){e.exports={style:{fontFamily:"'__IBM_Plex_Sans_6fb3ec', '__IBM_Plex_Sans_Fallback_6fb3ec'",fontStyle:"normal"},className:"__className_6fb3ec",variable:"__variable_6fb3ec"}},46893:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},46362:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},95825:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){e.O(0,[163,269,764,771,732,742,991,971,733,744],function(){return e(e.s=93536)}),_N_E=e.O()}]);