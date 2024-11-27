!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="30966f4e-df3e-44a2-9d49-13a45858e428",e._sentryDebugIdIdentifier="sentry-dbid-30966f4e-df3e-44a2-9d49-13a45858e428")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{76437:function(e,t,r){r.d(t,{Tn:function(){return pc},Vn:function(){return ph},j6:function(){return pd},rr:function(){return ps},sv:function(){return iz}});var i=r(89005),n=r(68893),a=r(53989),o=r(2265),s=r(63858),l=r(99434),c=r(40739),d=r(18482),h=r(57437),p=r(20920),u=r(9784),m=r(36393),f=r(86080),g=r(13421),y=r(67512),w=r(13130),x=r(56935),v=r(44785),C=r(9648),b=r(59956),_=r(10506),j=r(20402),k=r(66514),E=r(84573),A=r(82238),S=r(79314),T=r(39422),P=r(92009),R=r(47899),N=r(14340),O=r(61652),I=r(15986),M=r(31367),L=r(20129),W=r(11853),F=r(64728),U=r(52985),D=r(47193),Z=r(69992),z=r(94023),H=r.n(z),$=r(4811),B=r(92861),V=r(76218),q=r(87335),G=r(57470),K=r(89651),Y=r(75514),Q=r(19783),J=r(33009),X=r(64954),ee=r(75752),et=r(24609),er=r(75006),ei=r(24967),en=r(51834),ea=r(78299),eo=r(26930),es=r(59808),el=r(12560),ec=r(90196),ed=r(54621),eh=r(27762),ep=r(29765),eu=r(24167),em=r(5620),ef=r(74634),eg=r(70882),ey=r(22091),ew=r(2825),ex=r(22594),ev=r(58789),eC=r(68906),eb=r(37637),e_=r(22554),ej=r(2149),ek=r(84351),eE=r(63722),eA=r(62957),eS=r(99442),eT=r(49601),eP=r(28257),eR=r(55369),eN=r(76569),eO=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},eI=(e,t,r)=>(eO(e,t,"read from private field"),r?r.call(e):t.get(e)),eM=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},eL=(e,t,r,i)=>(eO(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),eW=(e,t,r)=>(eO(e,t,"access private method"),r),eF=class extends Error{constructor(e,t,r){super(e),t instanceof Error&&(this.cause=t),this.privyErrorCode=r}toString(){return`${this.type}${this.privyErrorCode?`-${this.privyErrorCode}`:""}: ${this.message}${this.cause?` [cause: ${this.cause}]`:""}`}},eU=class extends eF{constructor(e,t,r,i,n){super(r,i,n),this.type=e,this.status=t}},eD=class extends eF{constructor(e,t,r){super(e,t,r),this.type="client_error"}},eZ=class extends eD{constructor(){super("Request timed out",void 0,"client_request_timeout")}},ez=class extends eF{constructor(e,t,r){super(e,t,r),this.type="connector_error"}},eH=e=>{if(e instanceof eF)return e;if(!(e instanceof l.F))return e$(e);if(!e.response)return new eU("api_error",null,e.message,e);let{type:t,message:r,error:i,code:n}=e.data;return new eU(t||"ApiError",e.response.status,r||i,e,n)},e$=e=>e instanceof eF?e:e instanceof Error?new eD(e.message,e):new eD(`Internal error: ${e}`),eB=class extends eD{constructor(){super("Method called before `ready`. Ensure you wait until `ready` is true before calling.")}},eV=class extends eD{constructor(e="Embedded wallet error",t){super(e,t,"unknown_embedded_wallet_error")}},eq=class extends eD{constructor(e="User must be authenticated"){super(e,void 0,"must_be_authenticated")}},eG=class extends eD{constructor(e){super("This application is in development mode and must be upgraded to production to log in new users.",e,"max_accounts_reached")}},eK="/api/v1/sessions",eY="/api/v1/sessions/logout",eQ="/api/v1/sessions/fork/recover",eJ="/api/v1/oauth/init",eX="/api/v1/oauth/link",e0="/api/v1/analytics_events",e1=class{constructor(e){this.meta={token:e}}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");try{let e=await this.api.post("/api/v1/custom_jwt_account/authenticate",{token:this.meta.token});return{user:e.user,token:e.token,refresh_token:e.refresh_token,is_new_user:e.is_new_user}}catch(e){throw eH(e)}}async link(){throw Error("Unimplemented")}},e2=class{constructor(e,t){this.meta={email:e,captchaToken:t}}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.email||!this.meta.emailCode)throw new eD("Email and email code must be set prior to calling authenticate.");try{let e=await this.api.post("/api/v1/passwordless/authenticate",{email:this.meta.email,code:this.meta.emailCode});return{user:e.user,token:e.token,refresh_token:e.refresh_token,is_new_user:e.is_new_user}}catch(e){throw eH(e)}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.email||!this.meta.emailCode)throw new eD("Email and email code must be set prior to calling authenticate.");try{return await this.api.post("/api/v1/passwordless/link",{email:this.meta.email,code:this.meta.emailCode})}catch(e){throw eH(e)}}async sendCodeEmail(e,t){if(!this.api)throw new eD("Auth flow has no API instance");if(e&&(this.meta.email=e),t&&(this.meta.captchaToken=t),!this.meta.email)throw new eD("Email must be set when initialzing authentication.");try{return await this.api.post("/api/v1/passwordless/init",{email:this.meta.email,token:this.meta.captchaToken})}catch(e){throw eH(e)}}},e3=class extends e2{constructor(e,t,r){super(t,r),this.meta={email:t,captchaToken:r,oldAddress:e}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.email||!this.meta.emailCode||!this.meta.oldAddress)throw new eD("Email, email code, and an old email address must be set prior to calling update.");try{return await this.api.post("/api/v1/passwordless/update",{oldAddress:this.meta.oldAddress,newAddress:this.meta.email,code:this.meta.emailCode})}catch(e){throw eH(e)}}},e4=class{constructor(){this._cache={}}get(e){return this._cache[e]}put(e,t){void 0!==t?this._cache[e]=t:this.del(e)}del(e){delete this._cache[e]}getKeys(){return Object.keys(this._cache)}},e5=class{get(e){let t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}put(e,t){void 0!==t?localStorage.setItem(e,JSON.stringify(t)):this.del(e)}del(e){localStorage.removeItem(e)}getKeys(){return Object.entries(localStorage).map(([e])=>e)}};function e6(){try{let e="privy:__session_storage__test",t=new e5;return t.put(e,"blobby"),t.del(e),!0}catch{return!1}}var e7="u">typeof window&&window.localStorage?new e5:new e4,e8=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isClover?"Clover":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally||e.isTaho?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0,e9=(e,t)=>{if(!e.isMetaMask)return!1;if(e.isMetaMask&&!t)return!0;if(e.isBraveWallet&&!e._events&&!e._state||"MetaMask"!==e8(e))return!1;if(e.providers){for(let t of e.providers)if(!e9(t))return!1}return!0},te=()=>!!("phantom"in window&&window?.phantom?.ethereum?.isPhantom),tt=()=>{let e=window;if(!e.ethereum)return!1;if(e.ethereum.isCoinbaseWallet)return!0;if(e.ethereum.providers){for(let t of e.ethereum.providers)if(t&&t.isCoinbaseWallet)return!0}return!1},tr=(e,t)=>{let r=[],i=[];for(let[n,a]of e.entries())n<t?r.push(a):i.push(a);return[r,i]},ti=e=>!!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),tn=(e,t)=>{let r=e.slice(0),i=[];for(;r.length;)i.push(r.splice(0,t));return i},ta=(e,t=3,r=4)=>{if(!e)return"";if(t+r+2+3>=e.length)return e;let i=e.slice(0,2+t),n=e.slice(e.length-r,e.length);return`${i}...${n}`},to=e=>new Promise(t=>setTimeout(t,e)),ts=(e,t={})=>{let r=t.delayMs||150,i=t.maxAttempts||270;return new Promise(async(n,a)=>{let o=!1,s=0;for(;!o&&s<i;){if(t.abortSignal?.aborted)return;e().then(e=>{o=!0,n(e)},(...e)=>{o=!0,a(...e)}),s+=1,await to(r)}o||a(Error("Exceeded max attempts before resolving function"))})},tl=(e,t,r={},i={})=>{let n=new URL(t,e);for(let[e,t]of Object.entries(r))void 0!==t&&n.searchParams.set(e,t);let a=Object.entries(i);if(a.length>0){let e=new URLSearchParams;for(let[t,r]of a)e.append(t,r);n.hash=e.toString()}return n.href},tc=e=>e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),td=e=>"string"==typeof e?e:"0x"+e.toString(16);async function th(e,t,r,i=3e3){let n=!1,a=window;return new Promise(o=>{a.ethereum?s():(window.addEventListener("ethereum#initialized",s,{once:!0}),setTimeout(()=>{s()},i));function s(){if(n)return;n=!0,window.removeEventListener("ethereum#initialized",s);let i=e.getProviders(),a=[];for(let e of i)t.includes("coinbase_wallet")&&"com.coinbase.wallet"===e.info.rdns||a.push({type:e.info.name.toLowerCase().replace(/\s/g,"_"),eip6963InjectedProvider:e});for(let e of function(){let e=window,t=e.ethereum;if(!t)return[];let r=[];if(t.providers?.length)for(let e of t.providers)e&&r.push(e);return r.push(e.ethereum),r}()){let t=e8(e);if(!i.some(e=>e.info.name===t)){if(e9(e,!0)&&!a.find(e=>"metamask"===e.type)){a.push({type:"metamask",legacyInjectedProvider:e});continue}if("Phantom"===t&&!a.find(e=>"phantom"===e.type)){a.push({type:"phantom",legacyInjectedProvider:e});continue}if("Coinbase Wallet"===t&&!a.find(e=>"coinbase_wallet"===e.type&&r?.coinbaseWallet?.connectionOptions!=="smartWalletOnly")){a.push({type:"coinbase_wallet",legacyInjectedProvider:e});continue}a.find(e=>"unknown_browser_extension"===e.type)||a.push({type:"unknown_browser_extension",legacyInjectedProvider:e})}}o(a)}})}function tp(e){return`eip155:${String(Number(e))}`}var tu=(e,t,r,i)=>{let n,a=Number(e),o=t.find(e=>e.id===a);if(!o)throw new ez(`Unsupported chainId ${e}`,4901);if(o.rpcUrls.privyWalletOverride&&o.rpcUrls.privyWalletOverride.http[0])n=o.rpcUrls.privyWalletOverride.http[0];else if(r.rpcUrls&&r.rpcUrls[a])n=r.rpcUrls[a];else if(o.rpcUrls.privy?.http[0]){let e=new URL(o.rpcUrls.privy.http[0]);e.searchParams.append("privyAppId",i),n=e.toString()}else n=o.rpcUrls.public?.http[0]?o.rpcUrls.public.http[0]:o.rpcUrls.default?.http[0];if(!n)throw new ez(`No RPC url found for ${e}`);return n},tm=(e,t)=>{let r=Number(e),i=t.find(e=>e.id===r);if(!i)throw new ez(`Unsupported chainId ${e}`,4901);return i.blockExplorers?.default.url},tf=(e,t,r,i)=>{let n=Number(e),a=t.find(e=>e.id===n);if(!a)throw new ez(`Unsupported chainId ${e}`,4901);return new c.c(a.rpcUrls.privyWalletOverride&&a.rpcUrls.privyWalletOverride.http[0]?a.rpcUrls.privyWalletOverride.http[0]:r.rpcUrls&&r.rpcUrls[n]?r.rpcUrls[n]:a.rpcUrls.privy?.http[0]?{url:a.rpcUrls.privy.http[0],headers:{"privy-app-id":i.appId}}:a.rpcUrls.public?.http[0]?a.rpcUrls.public.http[0]:a.rpcUrls.default?.http[0])},tg=e=>{let t={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},r=e.types.EIP712Domain??Object.entries(e.domain).map(([e,r])=>{if(null!=r&&"string"==typeof e&&e in t)return{name:e,type:t[e]}}).filter(e=>void 0!==e);return{...e,types:{...e.types,EIP712Domain:r}}},ty=e=>{let t;try{t=new URL(e).hostname}catch{return}for(let[e,r]of Object.entries(tw))if(t.includes(r.hostname))return{walletClientType:e,entry:r}},tw={metamask:{id:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",displayName:"MetaMask",hostname:"metamask.io",mobile:{native:"metamask://",universal:"https://metamask.app.link"}},trust:{id:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",displayName:"Trust",hostname:"trustwallet.com",mobile:{universal:"https://link.trustwallet.com"}},safe:{id:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",displayName:"Safe",hostname:"safe.global",mobile:{universal:"https://app.safe.global/"}},rainbow:{id:"1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",displayName:"Rainbow",hostname:"rainbow.me",mobile:{native:"rainbow://",universal:"https://rnbwapp.com"}},uniswap:{id:"c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",displayName:"Uniswap",hostname:"uniswap.org",mobile:{universal:"https://uniswap.org/app",native:"uniswap://"}},zerion:{id:"ecc4036f814562b41a5268adc86270fba1365471402006302e70169465b7ac18",displayName:"Zerion",hostname:"zerion.io",mobile:{native:"zerion://",universal:"https://wallet.zerion.io"}},argent:{id:"bc949c5d968ae81310268bf9193f9c9fb7bb4e1283e1284af8f2bd4992535fd6",displayName:"Argent",hostname:"www.argent.xyz",mobile:{universal:"https://www.argent.xyz/app"}},spot:{id:"74f8092562bd79675e276d8b2062a83601a4106d30202f2d509195e30e19673d",displayName:"Spot",hostname:"www.spot-wallet.com",mobile:{universal:"https://spot.so"}},omni:{id:"afbd95522f4041c71dd4f1a065f971fd32372865b416f95a0b1db759ae33f2a7",displayName:"Omni",hostname:"omni.app",mobile:{universal:"https://links.omni.app"}},cryptocom:{id:"f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",displayName:"Crypto.com",hostname:"crypto.com",mobile:{universal:"https://wallet.crypto.com",native:"dfw://"}},blockchain:{id:"84b43e8ddfcd18e5fcb5d21e7277733f9cccef76f7d92c836d0e481db0c70c04",displayName:"Blockchain",hostname:"www.blockchain.com",mobile:{universal:"https://www.blockchain.com"}},safepal:{id:"0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150",displayName:"SafePal",hostname:"safepal.com",mobile:{universal:"https://link.safepal.io"}},bitkeep:{id:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",displayName:"BitKeep",hostname:"bitkeep.com",mobile:{universal:"https://bkapp.vip"}},zengo:{id:"9414d5a85c8f4eabc1b5b15ebe0cd399e1a2a9d35643ab0ad22a6e4a32f596f0",displayName:"ZenGo",hostname:"zengo.com",mobile:{universal:"https://get.zengo.com/"}},"1inch":{id:"c286eebc742a537cd1d6818363e9dc53b21759a1e8e5d9b263d0c03ec7703576",displayName:"1inch",hostname:"wallet.1inch.io",mobile:{universal:"https://wallet.1inch.io/wc/"}},binance:{id:"8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",displayName:"Binance",hostname:"www.binance.com",mobile:{universal:"https://app.binance.com/cedefi"}},exodus:{id:"e9ff15be73584489ca4a66f64d32c4537711797e30b6660dbcb71ea72a42b1f4",displayName:"Exodus",hostname:"exodus.com",mobile:{universal:"https://exodus.com/m"}},mew_wallet:{id:"f5b4eeb6015d66be3f5940a895cbaa49ef3439e518cd771270e6b553b48f31d2",displayName:"MEW wallet",hostname:"mewwallet.com",mobile:{universal:"https://mewwallet.com"}},alphawallet:{id:"138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98",displayName:"AlphaWallet",hostname:"alphawallet.com",mobile:{universal:"https://aw.app"}},keyring_pro:{id:"47bb07617af518642f3413a201ec5859faa63acb1dd175ca95085d35d38afb83",displayName:"KEYRING PRO",hostname:"keyring.app",mobile:{universal:"https://keyring.app/"}},mathwallet:{id:"7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26",displayName:"MathWallet",hostname:"mathwallet.org",mobile:{universal:"https://www.mathwallet.org"}},unstoppable:{id:"8308656f4548bb81b3508afe355cfbb7f0cb6253d1cc7f998080601f838ecee3",displayName:"Unstoppable",hostname:"unstoppabledomains.com",mobile:{universal:"https://unstoppabledomains.com/mobile"}},obvious:{id:"031f0187049b7f96c6f039d1c9c8138ff7a17fd75d38b34350c7182232cc29aa",displayName:"Obvious",hostname:"obvious.technology",mobile:{universal:"https://wallet.obvious.technology"}},ambire:{id:"2c81da3add65899baeac53758a07e652eea46dbb5195b8074772c62a77bbf568",displayName:"Ambire",hostname:"www.ambire.com",mobile:{universal:"https://mobile.ambire.com"}},internet_money_wallet:{id:"dd43441a6368ec9046540c46c5fdc58f79926d17ce61a176444568ca7c970dcd",displayName:"Internet Money Wallet",hostname:"internetmoney.io",mobile:{universal:"https://internetmoney.io"}},coin98:{id:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",displayName:"Coin98",hostname:"coin98.com",mobile:{universal:"https://coin98.services"}},abc_wallet:{id:"b956da9052132e3dabdcd78feb596d5194c99b7345d8c4bd7a47cabdcb69a25f",displayName:"ABC Wallet",hostname:"myabcwallet.io",mobile:{universal:"https://abcwalletconnect.page.link"}},arculus_wallet:{id:"0e4915107da5b3408b38e248f7a710f4529d54cd30e9d12ff0eb886d45c18e92",displayName:"Arculus Wallet",hostname:"www.getarculus.com",mobile:{universal:"https://gw.arculus.co/app"}},haha:{id:"719bd888109f5e8dd23419b20e749900ce4d2fc6858cf588395f19c82fd036b3",displayName:"HaHa",hostname:"www.haha.me",mobile:{universal:"https://haha.me"}},cling_wallet:{id:"942d0e22a7e6b520b0a03abcafc4dbe156a1fc151876e3c4a842f914277278ef",displayName:"Cling Wallet",hostname:"clingon.io",mobile:{universal:"https://cling.carrieverse.com/apple-app-site-association"}},broearn:{id:"8ff6eccefefa7506339201bc33346f92a43118d6ff7d6e71d499d8187a1c56a2",displayName:"Broearn",hostname:"www.broearn.com",mobile:{universal:"https://www.broearn.com/link/wallet/"}},copiosa:{id:"07f99a5d9849bb049d74830012b286f8b238e72b0337933ef22b84947409db80",displayName:"Copiosa",hostname:"copiosa.io",mobile:{universal:"https://copiosa.io/action/"}},burrito_wallet:{id:"8821748c25de9dbc4f72a691b25a6ddad9d7df12fa23333fd9c8b5fdc14cc819",displayName:"Burrito Wallet",hostname:"burritowallet.com",mobile:{universal:"https://burritowallet.com/wc?uri="}},enjin_wallet:{id:"bdc9433ffdaee55d31737d83b931caa1f17e30666f5b8e03eea794bac960eb4a",displayName:"Enjin Wallet",hostname:"enjin.io",mobile:{universal:"https://deeplink.wallet.enjin.io/"}},plasma_wallet:{id:"cbe13eb482c76f1fa401ff4c84d9acd0b8bc9af311ca0620a0b192fb28359b4e",displayName:"Plasma Wallet",hostname:"plasma-wallet.com",mobile:{universal:"https://plasma-wallet.com"}},avacus:{id:"94f785c0c8fb8c4f38cd9cd704416430bcaa2137f27e1468782d624bcd155a43",displayName:"Avacus",hostname:"avacus.cc",mobile:{universal:"https://avacus.app.link"}},bee:{id:"2cca8c1b0bea04ba37dee4017991d348cdb7b826804ab2bd31073254f345b715",displayName:"Bee",hostname:"www.beewallet.app",mobile:{universal:"https://beewallet.app/wc"}},pitaka:{id:"14e5d957c6eb62d3ee8fc6239703ac2d537d7e3552154836ca0beef775f630bc",displayName:"Pitaka",hostname:"pitaka.io",mobile:{universal:"https://app.pitaka.io"}},pltwallet:{id:"576c90ceaea34f29ff0104837cf2b2e23d201be43be1433feeb18d375430e1fd",displayName:"PLTwallet",hostname:"pltwallet.io",mobile:{universal:"https://pltwallet.io/"}},minerva:{id:"49bb9d698dbdf2c3d4627d66f99dd9fe90bba1eec84b143f56c64a51473c60bd",displayName:"Minerva",hostname:"minerva.digital",mobile:{universal:"https://minerva.digital"}},kryptogo:{id:"19418ecfd44963883e4d6abca1adeb2036f3b5ffb9bee0ec61f267a9641f878b",displayName:"KryptoGO",hostname:"kryptogo.com",mobile:{universal:"https://kryptogo.page.link"}},prema:{id:"5b8e33346dfb2a532748c247876db8d596734da8977905a27b947ba1e2cf465b",displayName:"PREMA",hostname:"premanft.com",mobile:{universal:"https://premanft.com"}},slingshot:{id:"d23de318f0f56038c5edb730a083216ff0cce00c1514e619ab32231cc9ec484b",displayName:"Slingshot",hostname:"slingshot.finance",mobile:{universal:"https://app.slingshot.finance"}},kriptonio:{id:"50df7da345f84e5a79aaf617df5167335a4b6751626df2e8a38f07029b3dde7b",displayName:"Kriptonio",hostname:"kriptonio.com",mobile:{universal:"https://app.kriptonio.com/mobile"}},timeless:{id:"9751385960bca290c13b443155288f892f62ee920337eda8c5a8874135daaea8",displayName:"Timeless",hostname:"timelesswallet.xyz",mobile:{universal:"https://timelesswallet.xyz"}},secux:{id:"6464873279d46030c0b6b005b33da6be5ed57a752be3ef1f857dc10eaf8028aa",displayName:"SecuX",hostname:"secuxtech.com",mobile:{universal:"https://wsweb.secuxtech.com"}},bitizen:{id:"41f20106359ff63cf732adf1f7dc1a157176c9b02fd266b50da6dcc1e9b86071",displayName:"Bitizen",hostname:"bitizen.org",mobile:{universal:"https://bitizen.org/wallet"}},blocto:{id:"14e7176536cb3706e221daaa3cfd7b88b7da8c7dfb64d1d241044164802c6bdd",displayName:"Blocto",hostname:"blocto.io",mobile:{universal:"https://blocto.app"}},safemoon:{id:"a0e04f1086aac204d4ebdd5f985c12ed226cd0006323fd8143715f9324da58d1",displayName:"SafeMoon",hostname:"safemoon.com",mobile:{universal:"https://safemoon.com/wc"}},okx_wallet:{id:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",displayName:"OKX Wallet",hostname:"okx.com",mobile:{native:"okex://main"}},rabby_wallet:{id:"18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1",displayName:"Rabby Wallet",hostname:"rabby.io",mobile:{}}},tx="WALLETCONNECT_DEEPLINK_CHOICE";function tv(e){return e.startsWith("http://")||e.startsWith("https://")}function tC(e,t){if(tv(e))return tb(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}}function tb(e,t){if(!tv(e))return tC(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let i=encodeURIComponent(t);return{redirect:`${r}wc?uri=${i}`,href:r}}function t_(e,t){window.open(e,t,"noreferrer noopener")}var tj=class{constructor(e){this.promise=null,this.fn=e}execute(e){return null===this.promise&&(this.promise=(async()=>{try{return await this.fn(e)}finally{this.promise=null}})()),this.promise}},tk=class{constructor(e){this._meta={},this.captchaToken=e,this.startChannelOnce=new tj(this._startChannelOnce.bind(this)),this.pollForReady=new tj(this._pollForReady.bind(this))}get meta(){return this._meta}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.channelToken)throw new eD("Auth flow must be initialized first");try{let e=await this.api.post("/api/v1/farcaster/authenticate",{channel_token:this.meta.channelToken,message:this.message,signature:this.signature,fid:this.fid});if(!e)throw new eD("No response from authentication");return{user:e.user,token:e.token,refresh_token:e.refresh_token,is_new_user:e.is_new_user}}catch(e){throw eH(e)}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");try{return await this.api.post("/api/v1/farcaster/link",{channel_token:this.meta.channelToken,message:this.message,signature:this.signature,fid:this.fid})}catch(e){throw eH(e)}}async _startChannelOnce(){if(!this.api)throw new eD("Auth flow has no API instance");let e=await this.api.post("/api/v1/farcaster/init",{token:this.captchaToken});s.tq&&!s.gn&&e.connect_uri&&t_(e.connect_uri,"_blank"),this._meta={connectUri:e.connect_uri,channelToken:e.channel_token}}async initializeFarcasterConnect(){if(!this.api)throw new eD("Auth flow has no API instance");await this.startChannelOnce.execute()}async _pollForReady(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.channelToken)throw new eD("Auth flow must be initialized first");let e=await this.api.get("/api/v1/farcaster/status",{headers:{"farcaster-channel-token":this.meta.channelToken}});return"completed"===e.state&&(this.message=e.message,this.signature=e.signature,this.fid=e.fid,!0)}},tE="https://auth.privy.io",tA="privy:token",tS="privy-token",tT="privy:refresh_token",tP="privy-session",tR="privy:session_transfer_token",tN="privy:caid",tO=e=>`privy:cross-app:${e}`,tI="privy:state_code",tM="privy:code_verifier",tL="privy:headless_oauth",tW=e=>`privy:wallet:${e}`,tF="privy:connectors",tU="privy:connections",tD=1,tZ=["function getL1Fee(bytes memory _data) external view returns (uint256)"];async function tz(e){let t=new TextEncoder().encode(e);return new Uint8Array(await crypto.subtle.digest("SHA-256",t))}function tH(){return d.c(crypto.getRandomValues(new Uint8Array(36)))}async function t$(e,t="S256"){if("S256"!=t)return e;{let t=await tz(e);return d.c(t)}}function tB(){return!!e7.get(tL)}var tV=class{constructor(e){let t="boolean"==typeof e.headless?e.headless:tB();this.meta={...e,headless:t}}addCaptchaToken(e){this.meta.captchaToken=e}isActive(){return!!(this.meta.authorizationCode&&this.meta.stateCode&&this.meta.provider)}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.authorizationCode||!this.meta.stateCode)throw new eD("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenticate.");if("undefined"===this.meta.authorizationCode)throw new eD("User denied confirmation during OAuth flow");let e=function(){let e=e7.get(tM);if(!e)throw new eD("Authentication error.");return e}();try{let t=await this.api.post("/api/v1/oauth/authenticate",{authorization_code:this.meta.authorizationCode,state_code:this.meta.stateCode,code_verifier:e});return e7.del(tM),this.meta.headless&&e7.del(tL),{user:t.user,token:t.token,refresh_token:t.refresh_token,is_new_user:t.is_new_user,oauth_provider_tokens:t.oauth_provider_tokens}}catch(t){let e=eH(t);throw e.privyErrorCode?new eD(e.message||"Invalid code during OAuth flow.",void 0,e.privyErrorCode):"User denied confirmation during OAuth flow"===e.message?new eD("Invalid code during oauth flow.",void 0,"oauth_user_denied"):new eD("Invalid code during OAuth flow.",void 0,"unknown_auth_error")}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.authorizationCode||!this.meta.stateCode)throw new eD("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling link.");if("undefined"===this.meta.authorizationCode)throw new eD("User denied confirmation during OAuth flow");let e=e7.get(tM);if(!e)throw new eD("Authentication error.");try{let t=await this.api.post(eX,{authorization_code:this.meta.authorizationCode,state_code:this.meta.stateCode,code_verifier:e});return e7.del(tM),t}catch(e){throw eH(e)}}async getAuthorizationUrl(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.provider)throw new eD("Provider must be set when initializing OAuth authentication.");let e=tH();e7.put(tM,e);let t=tH();e7.put(tI,t);let r=await t$(e);this.meta.headless&&e7.put(tL,!0);try{return await this.api.post(eJ,{provider:this.meta.provider,redirect_to:window.location.href,token:this.meta.captchaToken,code_challenge:r,state_code:t})}catch(e){throw eH(e)}}},tq=({style:e,...t})=>(0,h.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",style:{height:"24px",...e},...t,children:[(0,h.jsx)("path",{d:"M17.0722 11.6888C17.0471 8.90571 19.3263 7.56847 19.429 7.50274C18.1466 5.60938 16.153 5.35154 15.4417 5.3212C13.7461 5.14678 12.1306 6.32982 11.269 6.32982C10.4074 6.32982 9.08004 5.34648 7.67246 5.37429C5.82158 5.40209 4.11595 6.45874 3.16171 8.13218C1.24068 11.4942 2.6708 16.4817 4.54423 19.2143C5.46091 20.549 6.55041 22.0531 7.98554 21.9975C9.36803 21.9419 9.88905 21.095 11.5571 21.095C13.2251 21.095 13.696 21.9975 15.1537 21.9697C16.6389 21.9393 17.5806 20.6046 18.4897 19.2648C19.5392 17.7153 19.9725 16.2137 19.9975 16.1354C19.965 16.1228 17.1022 15.0155 17.0722 11.6888Z",fill:"currentColor"}),(0,h.jsx)("path",{d:"M14.3295 3.51373C15.0909 2.58347 15.6043 1.28921 15.4641 0C14.3671 0.0455014 13.0396 0.738135 12.2532 1.66838C11.5494 2.48994 10.9307 3.80695 11.0986 5.07089C12.3183 5.16694 13.5681 4.44145 14.3295 3.51373Z",fill:"currentColor"})]}),tG=({style:e,...t})=>(0,h.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 71 55",style:{height:"24px",...e},...t,children:[(0,h.jsx)("g",{clipPath:"url(#clip0)",children:(0,h.jsx)("path",{d:"M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z",fill:"#5865F2"})}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0",children:(0,h.jsx)("rect",{width:"71",height:"55",fill:"white"})})})]}),tK=({style:e,...t})=>(0,h.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"24",y:"24",viewBox:"0 0 98 96",style:{height:"24px",...e},...t,children:(0,h.jsx)("path",{d:"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",fill:"currentColor"})}),tY=({style:e,...t})=>(0,h.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"26px",width:"26px",...e},...t,children:[(0,h.jsx)("path",{d:"M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z",fill:"#4285F4"}),(0,h.jsx)("path",{d:"M12 23C14.97 23 17.46 22.015 19.28 20.335L15.725 17.575C14.74 18.235 13.48 18.625 12 18.625C9.13504 18.625 6.71004 16.69 5.84504 14.09H2.17004V16.94C3.98004 20.535 7.70004 23 12 23Z",fill:"#34A853"}),(0,h.jsx)("path",{d:"M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.59286 0.999321 10.2846 1 12C1 13.775 1.425 15.455 2.17 16.94L5.845 14.09Z",fill:"#FBBC05"}),(0,h.jsx)("path",{d:"M12 5.375C13.615 5.375 15.065 5.93 16.205 7.02L19.36 3.865C17.455 2.09 14.965 1 12 1C7.70004 1 3.98004 3.465 2.17004 7.06L5.84504 9.91C6.71004 7.31 9.13504 5.375 12 5.375Z",fill:"#EA4335"})]});function tQ(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:26,height:26,viewBox:"0 0 140 140",x:"0px",y:"0px",fill:"none",...e,children:[(0,h.jsxs)("defs",{children:[(0,h.jsxs)("linearGradient",{id:"b",children:[(0,h.jsx)("stop",{offset:"0",stopColor:"#3771c8"}),(0,h.jsx)("stop",{stopColor:"#3771c8",offset:".128"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#60f",stopOpacity:"0"})]}),(0,h.jsxs)("linearGradient",{id:"a",children:[(0,h.jsx)("stop",{offset:"0",stopColor:"#fd5"}),(0,h.jsx)("stop",{offset:".1",stopColor:"#fd5"}),(0,h.jsx)("stop",{offset:".5",stopColor:"#ff543e"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#c837ab"})]}),(0,h.jsx)("radialGradient",{id:"c",cx:"158.429",cy:"578.088",r:"65",xlinkHref:"#a",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(0 -1.98198 1.8439 0 -1031.402 454.004)",fx:"158.429",fy:"578.088"}),(0,h.jsx)("radialGradient",{id:"d",cx:"147.694",cy:"473.455",r:"65",xlinkHref:"#b",gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)",fx:"147.694",fy:"473.455"})]}),(0,h.jsx)("path",{fill:"url(#c)",d:"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z",transform:"translate(1.004 1)"}),(0,h.jsx)("path",{fill:"url(#d)",d:"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z",transform:"translate(1.004 1)"}),(0,h.jsx)("path",{fill:"#fff",d:"M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"})]})}function tJ({style:e,...t}){return(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0,0,256,256",style:{height:"26px",width:"26px",...e},...t,children:(0,h.jsx)("g",{fill:"#0077b5",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",style:{mixBlendMode:"normal"},children:(0,h.jsx)("g",{transform:"scale(5.12,5.12)",children:(0,h.jsx)("path",{d:"M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"})})})})}function tX(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:[(0,h.jsx)("path",{fill:"#1ed760",d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"}),(0,h.jsx)("path",{d:"M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z"})]})}function t0(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:"0 0 293768 333327",width:24,height:24,...e,children:[(0,h.jsx)("path",{fill:"#26f4ee",d:"M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z"}),(0,h.jsx)("path",{fill:"#fb2c53",d:"M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z"}),(0,h.jsx)("path",{d:"M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z",fill:"#000000"})]})}var t1=({style:e,...t})=>(0,h.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",width:"24px",...e},...t,children:(0,h.jsx)("path",{d:"M 14.285156 10.171875 L 23.222656 0 L 21.105469 0 L 13.34375 8.832031 L 7.148438 0 L 0 0 L 9.371094 13.355469 L 0 24.019531 L 2.117188 24.019531 L 10.308594 14.691406 L 16.851562 24.019531 L 24 24.019531 M 2.878906 1.5625 L 6.132812 1.5625 L 21.101562 22.535156 L 17.851562 22.535156",fill:"currentColor"})}),t2={google:{name:"Google",component:tY},discord:{name:"Discord",component:tG},github:{name:"Github",component:tK},linkedin:{name:"LinkedIn",component:tJ},twitter:{name:"Twitter",component:t1},spotify:{name:"Spotify",component:tX},instagram:{name:"Instagram",component:tQ},tiktok:{name:"Tiktok",component:t0},apple:{name:"Apple",component:tq}},t3=e=>t2[e];function t4(){let e=new URL(window.location.href);e.searchParams.delete("privy_oauth_code"),e.searchParams.delete("privy_oauth_provider"),e.searchParams.delete("privy_oauth_state"),e7.del(tI),window.history.replaceState({},"",e)}var t5=class{constructor(e){this.initAuthenticateOnce=new tj(this._initAuthenticateOnce.bind(this)),this.initLinkOnce=new tj(this._initLinkOnce.bind(this)),this.meta={captchaToken:e}}async initAuthenticationFlow(){if(!this.api)throw new eD("Auth flow has no API instance");this.meta.initAuthenticateResponse=await this.initAuthenticateOnce.execute()}async initLinkFlow(){if(!this.api)throw new eD("Auth flow has no API instance");this.meta.initLinkResponse=await this.initLinkOnce.execute()}async authenticate(){let e=await r.e(550).then(r.bind(r,74550));if(!this.api)throw new eD("Auth flow has no API instance");if(!e.browserSupportsWebAuthn())throw new eD("WebAuthn is not supported in this browser");this.meta.initAuthenticateResponse||(this.meta.initAuthenticateResponse=await this.initAuthenticateOnce.execute());try{let t=await e.startAuthentication(this._transformInitAuthenticateOptionsToCamelCase(this.meta.initAuthenticateResponse.options)),r=await this.api.post("/api/v1/passkeys/authenticate",{relying_party:this.meta.initAuthenticateResponse.relying_party,challenge:this.meta.initAuthenticateResponse.options.challenge,authenticator_response:this._transformAuthenticationResponseToSnakeCase(t)});return{user:r.user,token:r.token,refresh_token:r.refresh_token,is_new_user:r.is_new_user}}catch(e){throw"NotAllowedError"===e.name?new eD("Passkey request timed out or rejected by user.",void 0,"passkey_not_allowed"):eH(e)}}async link(){let e=await r.e(550).then(r.bind(r,74550));if(!this.api)throw new eD("Auth flow has no API instance");if(!e.browserSupportsWebAuthn())throw new eD("WebAuthn is not supported in this browser");this.meta.initLinkResponse||(this.meta.initLinkResponse=await this.initLinkOnce.execute());try{let t=this.meta.initLinkResponse.options,r=await e.startRegistration(this._transformInitLinkOptionsToCamelCase(t));return await this.api.post("/api/v1/passkeys/link",{relying_party:this.meta.initLinkResponse.relying_party,authenticator_response:this._transformRegistrationResponseToSnakeCase(r)})}catch(e){throw"NotAllowedError"===e.name?new eD("Passkey request timed out or rejected by user.",void 0,"passkey_not_allowed"):eH(e)}}async _initAuthenticateOnce(){if(!this.api)throw new eD("Auth flow has no API instance");return await this.api.post("/api/v1/passkeys/authenticate/init",{token:this.meta.captchaToken})}async _initLinkOnce(){if(!this.api)throw new eD("Auth flow has no API instance");return await this.api.post("/api/v1/passkeys/link/init",{})}_transformInitLinkOptionsToCamelCase(e){return{rp:e.rp,user:{id:e.user.id,name:e.user.name,displayName:e.user.display_name},challenge:e.challenge,pubKeyCredParams:e.pub_key_cred_params.map(e=>({type:e.type,alg:e.alg})),timeout:e.timeout,excludeCredentials:e.exclude_credentials?.map(e=>({id:e.id,type:e.type,transports:e.transports})),authenticatorSelection:{authenticatorAttachment:e.authenticator_selection?.authenticator_attachment,requireResidentKey:e.authenticator_selection?.require_resident_key,residentKey:e.authenticator_selection?.resident_key,userVerification:e.authenticator_selection?.user_verification},attestation:e.attestation,extensions:{appid:e.extensions?.app_id,credProps:e.extensions?.cred_props?.rk,hmacCreateSecret:e.extensions?.hmac_create_secret}}}_transformRegistrationResponseToSnakeCase(e){return{id:e.id,raw_id:e.rawId,response:{client_data_json:e.response.clientDataJSON,attestation_object:e.response.attestationObject,authenticator_data:e.response.authenticatorData},authenticator_attachment:e.authenticatorAttachment,client_extension_results:{app_id:e.clientExtensionResults.appid,cred_props:e.clientExtensionResults.credProps,hmac_create_secret:e.clientExtensionResults.hmacCreateSecret},type:e.type}}_transformInitAuthenticateOptionsToCamelCase(e){return{challenge:e.challenge,allowCredentials:e.allow_credentials?.map(e=>({id:e.id,type:e.type,transports:e.transports}))||[],timeout:e.timeout,extensions:{appid:e.extensions?.app_id,credProps:e.extensions?.cred_props,hmacCreateSecret:e.extensions?.hmac_create_secret},userVerification:e.user_verification}}_transformAuthenticationResponseToSnakeCase(e){return{id:e.id,raw_id:e.rawId,response:{client_data_json:e.response.clientDataJSON,authenticator_data:e.response.authenticatorData,signature:e.response.signature,user_handle:e.response.userHandle},authenticator_attachment:e.authenticatorAttachment,client_extension_results:{app_id:e.clientExtensionResults.appid,cred_props:e.clientExtensionResults.credProps,hmac_create_secret:e.clientExtensionResults.hmacCreateSecret},type:e.type}}},t6=class{constructor(e,t){this.createSiweMessage=(e,t,r,i,n,a,o)=>`${r} wants you to sign in with your Ethereum account:
${t}

${o}

URI: ${i}
Version: 1
Chain ID: ${e}
Nonce: ${a}
Issued At: ${n}
Resources:
- https://privy.io`,this.getNonceOnce=new tj(this._getNonceOnce.bind(this)),this.wallet=e,this.captchaToken=t}get meta(){return{connectorType:this.wallet.connectorType,walletClientType:this.wallet.walletClientType}}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");try{let{message:e,signature:t}=await this.sign(),r=await this.api.post("/api/v1/siwe/authenticate",{message:e,signature:t,chainId:this.wallet.chainId,walletClientType:this.wallet.walletClientType,connectorType:this.wallet.connectorType});return{user:r.user,token:r.token,refresh_token:r.refresh_token,is_new_user:r.is_new_user}}catch(e){throw eH(e)}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");try{let{message:e,signature:t}=await this.sign();return await this.api.post("/api/v1/siwe/link",{message:e,signature:t,chainId:this.wallet.chainId,walletClientType:this.wallet.walletClientType,connectorType:this.wallet.connectorType})}catch(e){throw eH(e)}}async sign(){if(!this.api)throw new eD("Auth flow has no API instance");if(await this.buildSiweMessage(),!this.preparedMessage)throw new eD("Could not prepare SIWE message");let e=await this.wallet.sign(this.preparedMessage);return{message:this.preparedMessage,signature:e}}async _getNonceOnce(){if(!this.api)throw new eD("Auth flow has no API instance");let e=this.wallet.address;return(await this.api.post("/api/v1/siwe/init",{address:e,token:this.captchaToken})).nonce}async buildSiweMessage(){if(!this.api)throw new eD("Auth flow has no API instance");let e=this.wallet.address,t=this.wallet.chainId.replace("eip155:","");return this.nonce||(this.nonce=await this.getNonceOnce.execute()),this.preparedMessage=this.prepareMessage(t,e,this.nonce),this.preparedMessage}prepareMessage(e,t,r){let i=window.location.host,n=window.location.origin,a=new Date().toISOString();return this.createSiweMessage(e,t,i,n,a,r,"By signing, you are proving you own this wallet and logging in. This does not initiate a transaction or cost any fees.")}},t7=class{constructor(e,t){this.meta={phoneNumber:e,captchaToken:t}}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.phoneNumber||!this.meta.smsCode)throw new eD("phone number and sms code must be set prior to calling authenticate.");try{let e=await this.api.post("/api/v1/passwordless_sms/authenticate",{phoneNumber:this.meta.phoneNumber,code:this.meta.smsCode});return{user:e.user,token:e.token,refresh_token:e.refresh_token,is_new_user:e.is_new_user}}catch(e){throw eH(e)}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");if(!this.meta.phoneNumber||!this.meta.smsCode)throw new eD("phone number and sms code must be set prior to calling authenticate.");try{return await this.api.post("/api/v1/passwordless_sms/link",{phoneNumber:this.meta.phoneNumber,code:this.meta.smsCode})}catch(e){throw eH(e)}}async sendSmsCode(e,t){if(!this.api)throw new eD("Auth flow has no API instance");if(e&&(this.meta.phoneNumber=e),t&&(this.meta.captchaToken=t),!this.meta.phoneNumber)throw new eD("phone nNumber must be set when initialzing authentication.");try{return await this.api.post("/api/v1/passwordless_sms/init",{phoneNumber:this.meta.phoneNumber,token:this.meta.captchaToken})}catch(e){throw eH(e)}}},t8=class{constructor(e){this.meta={captchaToken:e}}async authenticate(){if(!this.api)throw new eD("Auth flow has no API instance");try{let e=await this.api.post("/api/v1/telegram/authenticate",{captcha_token:this.meta.captchaToken,telegram_auth_result:this.meta.telegramAuthResult,telegram_web_app_data:this.meta.telegramWebAppData});return{user:e.user,token:e.token,refresh_token:e.refresh_token,is_new_user:e.is_new_user}}catch(e){throw eH(e)}}async link(){if(!this.api)throw new eD("Auth flow has no API instance");try{return await this.api.post("/api/v1/telegram/link",{telegram_auth_result:this.meta.telegramAuthResult,telegram_web_app_data:this.meta.telegramWebAppData})}catch(e){throw eH(e)}}};function t9(e){let t={detail:"",retryable:!1};return e?.privyErrorCode==="linked_to_another_user"&&(t.detail="This account has already been linked to another user."),e?.privyErrorCode==="disallowed_login_method"&&(t.detail="Login with Telegram not allowed."),e?.privyErrorCode==="invalid_data"&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode==="cannot_link_more_of_type"&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode==="invalid_credentials"&&(t.retryable=!0,t.detail="Something went wrong. Try again."),e?.privyErrorCode==="too_many_requests"&&(t.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode==="too_many_requests"&&e.message.includes("rate limit")&&(t.detail="Request limit reached for Telegram. Please wait a moment and try again."),t}function re(){let e=new URL(window.location.href);e.searchParams.delete("id"),e.searchParams.delete("hash"),e.searchParams.delete("auth_date"),e.searchParams.delete("first_name"),e.searchParams.delete("last_name"),e.searchParams.delete("username"),e.searchParams.delete("photo_url"),window.history.replaceState({},"",e)}function rt(e){return e?new Date(1e3*e):null}function rr(e,t){return e.slice().sort((e,t)=>(t.firstVerifiedAt??t.verifiedAt).getTime()-(e.firstVerifiedAt??e.verifiedAt).getTime()).find(e=>e.type===t)}var ri=e=>e?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&!e.imported&&"ethereum"===e.chainType)||null,rn=e=>e?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&!e.imported&&"solana"===e.chainType)||null,ra=e=>e?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&e.imported&&"ethereum"===e.chainType)||null,ro=e=>e.linkedAccounts.filter(e=>"wallet"===e.type),rs=(e,t)=>!(ri(e)||rn(e))&&("all-users"===t||"users-without-wallets"===t&&!ro(e)?.length);function rl(e){if(!e)return null;let t=function(e){let t=[];for(let r of e){let e=r.type;switch(r.type){case"wallet":let i={address:r.address,type:r.type,imported:r.imported,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at),chainType:r.chain_type,chainId:r.chain_id,walletClient:"privy"===r.wallet_client_type?"privy":"unknown",walletClientType:r.wallet_client_type,connectorType:r.connector_type,recoveryMethod:r.recovery_method};t.push(i);break;case"cross_app":let n={type:r.type,embeddedWallets:r.embedded_wallets,providerApp:{id:r.provider_app_id},verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(n);break;case"email":let a={address:r.address,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(a);break;case"phone":let o={number:r.phoneNumber,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(o);break;case"google_oauth":let s={subject:r.subject,email:r.email,name:r.name,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(s);break;case"spotify_oauth":let l={subject:r.subject,email:r.email,name:r.name,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(l);break;case"instagram_oauth":let c={subject:r.subject,username:r.username,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(c);break;case"twitter_oauth":let d={subject:r.subject,username:r.username,name:r.name,type:r.type,profilePictureUrl:r.profile_picture_url,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(d);break;case"discord_oauth":let h={subject:r.subject,username:r.username,email:r.email,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(h);break;case"github_oauth":let p={subject:r.subject,username:r.username,name:r.name,email:r.email,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(p);break;case"tiktok_oauth":let u={subject:r.subject,username:r.username,name:r.name,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(u);break;case"linkedin_oauth":let m={subject:r.subject,name:r.name,email:r.email,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(m);break;case"apple_oauth":let f={subject:r.subject,email:r.email,type:r.type,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(f);break;case"custom_auth":t.push({type:r.type,customUserId:r.custom_user_id,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)});break;case"farcaster":let g={type:r.type,fid:r.fid,ownerAddress:r.owner_address,displayName:r.display_name,username:r.username,bio:r.bio,pfp:r.profile_picture_url,url:r.homepage_url,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at),signerPublicKey:r.signer_public_key};t.push(g);break;case"passkey":let y={type:r.type,enrolledInMfa:r.enrolled_in_mfa,credentialId:r.credential_id,authenticatorName:r.authenticator_name,createdWithDevice:r.created_with_device,createdWithOs:r.created_with_os,createdWithBrowser:r.created_with_browser,verifiedAt:rt(r.verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(y);break;case"telegram":let w={type:r.type,telegramUserId:r.telegram_user_id,firstName:r.first_name,lastName:r.last_name,username:r.username,photoUrl:r.photo_url,verifiedAt:rt(r.first_verified_at),firstVerifiedAt:rt(r.first_verified_at),latestVerifiedAt:rt(r.latest_verified_at)};t.push(w);break;default:console.warn(`Unrecognized account type: ${e}. Please consider upgrading the Privy SDK.`)}}return t}(e.linked_accounts),r=rr(t,"wallet"),i=rr(t,"email"),n=rr(t,"phone"),a=rr(t,"google_oauth"),o=rr(t,"twitter_oauth"),s=rr(t,"discord_oauth"),l=rr(t,"github_oauth"),c=rr(t,"spotify_oauth"),d=rr(t,"instagram_oauth"),h=rr(t,"tiktok_oauth"),p=rr(t,"linkedin_oauth"),u=rr(t,"apple_oauth"),m=rr(t,"farcaster"),f=rr(t,"telegram"),g=e.mfa_methods.map(({type:e,verified_at:t})=>({type:e,verifiedAt:rt(t)}));return{id:e.id,createdAt:rt(e.created_at),linkedAccounts:t,email:i&&{address:i?.address},phone:n&&{number:n?.number},wallet:r&&{address:r.address,chainType:r.chainType,chainId:r.chainId,walletClient:r.walletClient,walletClientType:r.walletClientType,connectorType:r.connectorType,recoveryMethod:r.recoveryMethod,imported:r.imported},google:a&&{subject:a.subject,email:a.email,name:a.name},twitter:o&&{subject:o.subject,username:o.username,name:o.name,profilePictureUrl:o.profilePictureUrl},discord:s&&{subject:s.subject,username:s.username,email:s.email},github:l&&{subject:l.subject,username:l.username,name:l.name,email:l.email},spotify:c&&{subject:c.subject,email:c.email,name:c.name},instagram:d&&{subject:d.subject,username:d.username},tiktok:h&&{subject:h.subject,username:h.username,name:h.name},linkedin:p&&{subject:p.subject,name:p.name,email:p.email},apple:u&&{subject:u.subject,email:u.email},farcaster:m&&{fid:m.fid,ownerAddress:m.ownerAddress,displayName:m.displayName,username:m.username,bio:m.bio,pfp:m.pfp,url:m.url,signerPublicKey:m.signerPublicKey},telegram:f&&{telegramUserId:f.telegramUserId,firstName:f.firstName,lastName:f.lastName,username:f.username,photoUrl:f.photoUrl},mfaMethods:g.map(e=>e.type),hasAcceptedTerms:e.has_accepted_terms??!1}}var rc,rd,rh=({style:e,...t})=>(0,h.jsxs)("svg",{width:"1024",height:"1024",viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px",...e},...t,children:[(0,h.jsx)("rect",{width:"1024",height:"1024",fill:"#0052FF",rx:100,ry:100}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z",fill:"white"})]}),rp=["eth_sign","eth_populateTransactionRequest","eth_signTransaction","personal_sign","eth_signTypedData_v4"],ru=e=>rp.includes(e),rm=class extends ez{constructor(){super("Wallet timeout"),this.type="wallet_error"}},rf=class extends ez{constructor(){super("User rejected connection"),this.type="wallet_error"}},rg=e=>{if(e instanceof ez)return e;if(e?.code&&e?.reason){let t=new rw(e);return e.code===g.jK.ACTION_REJECTED&&(t.details=rx.E4001_USER_REJECTED_REQUEST),t}return e?.code?new rw(e):new ez("Unknown connector error",e)},ry=class extends eF{constructor(e,t,r){super(e),this.type="provider_error",this.code=t,this.data=r}},rw=class extends ry{constructor(e){super(e.message,e.code,e.data);let t=Object.values(rx).find(t=>t.eipCode===e.code);this.details=t||rx.UNKNOWN_ERROR,-32002===e.code&&(e.message?.includes("already pending for origin")?e.message?.includes("wallet_requestPermissions")?this.details=rx.E32002_CONNECTION_ALREADY_PENDING:this.details=rx.E32002_REQUEST_ALREADY_PENDING:e.message?.includes("Already processing")&&e.message.includes("eth_requestAccounts")&&(this.details=rx.E32002_WALLET_LOCKED))}},rx={UNKNOWN_ERROR:{eipCode:0,message:"Unknown error",detail:"Unknown error",retryable:!0},E4001_DEFAULT_USER_REJECTED_REQUEST:{eipCode:4001,message:"User Rejected Request",detail:"The user rejected the request.",default:!0,retryable:!0},E4100_DEFAULT_UNAUTHORIZED:{eipCode:4100,message:"Unauthorized",detail:"The requested method and/or account has not been authorized by the user.",default:!0,retryable:!1},E4200_DEFAULT_UNSUPPORTED_METHOD:{eipCode:4200,message:"Unsupported Method",detail:"The Provider does not support the requested method.",default:!0,retryable:!1},E4900_DEFAULT_DISCONNECTED:{eipCode:4900,message:"Disconnected",detail:"The Provider is disconnected from all chains.",default:!0,retryable:!0},E4901_DEFAULT_CHAIN_DISCONNECTED:{eipCode:4901,message:"Chain Disconnected",detail:"The Provider is not connected to the requested chain.",default:!0,retryable:!0},E32700_DEFAULT_PARSE_ERROR:{eipCode:-32700,message:"Parse error",detail:"Invalid JSON",default:!0,retryable:!1},E32600_DEFAULT_INVALID_REQUEST:{eipCode:-32600,message:"Invalid request",detail:"JSON is not a valid request object",default:!0,retryable:!1},E32601_DEFAULT_METHOD_NOT_FOUND:{eipCode:-32601,message:"Method not found",detail:"Method does not exist",default:!0,retryable:!1},E32602_DEFAULT_INVALID_PARAMS:{eipCode:-32602,message:"Invalid params",detail:"Invalid method parameters",default:!0,retryable:!1},E32603_DEFAULT_INTERNAL_ERROR:{eipCode:-32603,message:"Internal error",detail:"Internal JSON-RPC error",default:!0,retryable:!0},E32000_DEFAULT_INVALID_INPUT:{eipCode:-32e3,message:"Invalid input",detail:"Missing or invalid parameters",default:!0,retryable:!1},E32001_DEFAULT_RESOURCE_NOT_FOUND:{eipCode:-32001,message:"Resource not found",detail:"Requested resource not found",default:!0,retryable:!1},E32002_DEFAULT_RESOURCE_UNAVAILABLE:{eipCode:-32002,message:"Resource unavailable",detail:"Requested resource not available",default:!0,retryable:!0},E32003_DEFAULT_TRANSACTION_REJECTED:{eipCode:-32003,message:"Transaction rejected",detail:"Transaction creation failed",default:!0,retryable:!0},E32004_DEFAULT_METHOD_NOT_SUPPORTED:{eipCode:-32004,message:"Method not supported",detail:"Method is not implemented",default:!0,retryable:!1},E32005_DEFAULT_LIMIT_EXCEEDED:{eipCode:-32005,message:"Limit exceeded",detail:"Request exceeds defined limit",default:!0,retryable:!1},E32006_DEFAULT_JSON_RPC_VERSION_NOT_SUPPORTED:{eipCode:-32006,message:"JSON-RPC version not supported",detail:"Version of JSON-RPC protocol is not supported",default:!0,retryable:!1},E32002_CONNECTION_ALREADY_PENDING:{eipCode:-32002,message:"Connection request already pending",detail:"Don’t see your wallet? Check your other browser windows.",retryable:!1},E32002_REQUEST_ALREADY_PENDING:{eipCode:-32002,message:"Resource request already pending",detail:"Don’t see your wallet? Check your other browser windows.",retryable:!1},E32002_WALLET_LOCKED:{eipCode:-32002,message:"Wallet might be locked",detail:"Don’t see your wallet? Check your other browser windows.",retryable:!1},E4001_USER_REJECTED_REQUEST:{eipCode:4001,message:"Signature rejected",detail:"Please try signing again.",retryable:!0}},rv={ERROR_USER_EXISTS:{message:"User already exists for this address",detail:"Try another address!",retryable:!1},ERROR_TIMED_OUT:{message:"Wallet request timed out",detail:"Please try connecting again.",retryable:!0},ERROR_WALLET_CONNECTION:{message:"Could not log in with wallet",detail:"Please try connecting again.",retryable:!0},ERROR_USER_REJECTED_CONNECTION:{message:"You rejected the request",detail:"Please try connecting again.",retryable:!0},...rx},rC=class{constructor(e,t){this.removeListener=(e,t)=>{if(this.walletProvider)try{return this.walletProvider.removeListener(e,t)}catch{console.warn("Unable to remove wallet provider listener")}},this.walletTimeout=(e=new rm,t=this.rpcTimeoutDuration)=>new Promise((r,i)=>setTimeout(()=>{i(e)},t)),this.setWalletProvider=e=>{this.walletProvider&&this._subscriptions.forEach(e=>{this.removeListener(e.eventName,e.listener)}),this.walletProvider=e,this._subscriptions.forEach(e=>{this.walletProvider?.on(e.eventName,e.listener)})},this.walletProvider=e,this.rpcTimeoutDuration=t||12e4,this._subscriptions=[]}on(e,t){if(this.walletProvider)return this.walletProvider.on(e,t);this._subscriptions.push({eventName:e,listener:t})}async request(e){if(!this.walletProvider)throw new ez(`A wallet request of type ${e.method} was made before setting a wallet provider.`);return Promise.race([this.walletProvider.request(e),this.walletTimeout()]).catch(e=>{throw rg(e)})}},rb=class extends Error{constructor(e,t,r){super(e),this.code=t,this.data=r}},r_=class extends m.Z{constructor(e,t,r,i,n,a=1){super(),this.walletProxy=e,this.address=t,this.chainId=a,this.rpcConfig=r,this.chains=i,this.provider=tf(a,this.chains,r,{appId:n}),this.rpcTimeoutDuration=iv(r,"privy"),this.appId=n}async handleSendTransaction(e){if(!e.params||!Array.isArray(e.params))throw new rb(`Invalid params for ${e.method}`,4200);let t=e.params[0];if(!await h3()||!this.address)throw new rb("Disconnected",4900);return(await pi(t)).hash}handleSwitchEthereumChain(e){let t;if(!e.params||!Array.isArray(e.params))throw new rb(`Invalid params for ${e.method}`,4200);if("string"==typeof e.params[0])t=e.params[0];else if("chainId"in e.params[0]&&"string"==typeof e.params[0].chainId)t=e.params[0].chainId;else throw new rb(`Invalid params for ${e.method}`,4200);this.chainId=Number(t),this.provider=tf(this.chainId,this.chains,this.rpcConfig,{appId:this.appId}),this.emit("chainChanged",t)}async handlePersonalSign(e){if(!e.params||!Array.isArray(e.params))throw Error("Invalid params for personal_sign");let t=e.params[0],r=e.params[1];return await pt(t,void 0,r)}async handleSignedTypedData(e){if(!e.params||!Array.isArray(e.params))throw Error("Invalid params for eth_signTypedData_v4");let t="string"==typeof e.params[1]?JSON.parse(e.params[1]):e.params[1];return await pr(tg(t))}async handleEstimateGas(e){if(!e.params||!Array.isArray(e.params))throw Error("Invalid params for eth_estimateGas");delete e.params[0].gasPrice,delete e.params[0].maxFeePerGas,delete e.params[0].maxPriorityFeePerGas;let t={...e.params[0],chainId:td(this.chainId)};try{return await this.provider.send("eth_estimateGas",[t])}catch(e){console.warn(`Gas estimation failed with error: ${e}. Retrying gas estimation by omitting the 'from' address`);try{return delete t.from,await this.provider.send("eth_estimateGas",[t])}catch(t){throw console.warn(`Gas estimation failed with error: ${t} when omitting the 'from' address`),e}}}async request(e){switch(console.debug("Embedded1193Provider.request() called with args",e),e.method){case"eth_accounts":case"eth_requestAccounts":return this.address?[this.address]:[];case"eth_chainId":return td(this.chainId);case"eth_estimateGas":return this.handleEstimateGas(e);case"eth_sendTransaction":return this.handleSendTransaction(e);case"wallet_switchEthereumChain":return this.handleSwitchEthereumChain(e);case"personal_sign":return this.handlePersonalSign(e);case"eth_signTypedData_v4":return this.handleSignedTypedData(e)}if(!ru(e.method))return this.provider.send(e.method,e.params);{let t=await h3();if(await pn(),!t||!this.address)throw new rb("Disconnected",4900);try{return(await this.walletProxy.rpc({address:this.address,accessToken:t,request:{method:e.method,params:e.params}})).response.data}catch(e){throw console.error(e),new rb("Disconnected",4900)}}}async connect(){let e=await h3();if(!e||!this.address)return null;try{return(await this.walletProxy.connect({address:this.address,accessToken:e})).address}catch(e){return console.error(e),null}}},rj=class extends rC{constructor(e){super(e,e.rpcTimeoutDuration)}},rk=class extends rC{constructor(e){super(e,e.rpcTimeoutDuration)}sendAsync(e,t){throw Error("sendAsync is no longer supported by EIP-1193. Use the request method instead.")}},rE=(e,t)=>"coinbase_wallet"===t?e.message.includes("addEthereumChain"):4902===e.code||e.message?.includes("4902"),rA=class extends m.Z{constructor(e,t,r,i){super(),this.onAccountsChanged=e=>{0===e.length?this.onDisconnect():this.syncAccounts(e)},this.onChainChanged=e=>{this.wallets.forEach(t=>{t.chainId=tp(e),"privy"===this.walletClientType&&e7.put(tW(t.address),e)}),this.emit("walletsUpdated")},this.onDisconnect=()=>{this.connected=!1,this.wallets=[],this.emit("walletsUpdated")},this.onConnect=()=>{this.connected=!0,this.syncAccounts()},this.wallets=[],this.walletClientType=e,this.chains=t,this.defaultChain=r,this.rpcConfig=i,this.rpcTimeoutDuration=iv(i,e),this.connected=!1,this.initialized=!1}buildConnectedWallet(e,t,r,a){let o=async()=>!!this.wallets.find(t=>(0,i.Kn)(t.address)===(0,i.Kn)(e));return{address:(0,i.Kn)(e),chainId:t,meta:r,imported:a,switchChain:async r=>{let n,a;if(!o)throw new ez("Wallet is not currently connected.");let s=this.wallets.find(t=>i.Kn(t.address)===i.Kn(e))?.chainId;if(!s)throw new ez("Unable to determine current chainId.");if("number"==typeof r?(n=`0x${r.toString(16)}`,a=r):(n=r,a=Number(r)),s===tp(n))return;let l=this.chains.find(e=>e.id===a);if(!l)throw new ez(`Unsupported chainId: ${r}`);let c=async()=>{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]})};try{return await c()}catch(e){if(rE(e,this.walletClientType))return await this.proxyProvider.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:l.name,nativeCurrency:l.nativeCurrency,rpcUrls:[l.rpcUrls.default?.http[0]??""],blockExplorerUrls:[l.blockExplorers?.default.url??""]}]}),c();throw"rainbow"===this.walletClientType&&e.message?.includes("wallet_switchEthereumChain")?new ez(`Rainbow does not support the chainId ${t}`):e}},connectedAt:Date.now(),walletClientType:this.walletClientType,connectorType:this.connectorType,isConnected:o,getEthereumProvider:async()=>{if(!await o())throw new ez("Wallet is not currently connected.");return this.proxyProvider},getEthersProvider:async()=>{if(!await o())throw new ez("Wallet is not currently connected.");return new n.Q(new rj(this.proxyProvider))},getWeb3jsProvider:async()=>{if(!await o())throw new ez("Wallet is not currently connected.");return new rk(this.proxyProvider)},sign:async e=>{if(!await o())throw new ez("Wallet is not currently connected.");return await this.sign(e)},disconnect:()=>{this.disconnect()}}}async syncAccounts(e){let t=e;try{if(void 0===t){let e=await ts(()=>this.proxyProvider.request({method:"eth_accounts"}),{maxAttempts:10,delayMs:500});Array.isArray(e)&&(t=e)}}catch(e){console.warn("Wallet did not respond to eth_accounts. Defaulting to prefetched accounts.",e)}if(!t||!Array.isArray(t)||t.length<=0||!t[0])return;let r=t[0],n=(0,i.Kn)(r),a=[],o;if("privy"===this.walletClientType){let e=e7.get(tW(n));this.chains.find(t=>t.id===Number(e))||(e7.del(tW(n)),e=null),o=e||`0x${this.defaultChain.id.toString(16)}`;try{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]})}catch{console.warn(`Unable to switch embedded wallet to chain ID ${o} on initialization`)}}else try{let e=await ts(()=>this.proxyProvider.request({method:"eth_chainId"}),{maxAttempts:10,delayMs:500});if("string"==typeof e)o=e;else if("number"==typeof e)o=`0x${e.toString(16)}`;else throw Error("Invalid chainId returned from provider")}catch(e){console.warn("Failed to get chainId from provider, defaulting to 0x1",e),o="0x1"}let s=tp(o);if(!a.find(e=>(0,i.Kn)(e.address)===n)){let e={name:this.walletBranding.name,icon:"string"==typeof this.walletBranding.icon?this.walletBranding.icon:void 0,id:this.walletBranding.id};a.push(this.buildConnectedWallet((0,i.Kn)(r),s,e,"embedded_imported"===this.connectorType))}ib(a,this.wallets)||(this.wallets=a,this.emit("walletsUpdated"))}async getConnectedWallet(){let e=await this.proxyProvider.request({method:"eth_accounts"});return this.wallets.sort((e,t)=>t.connectedAt-e.connectedAt).find(t=>e.find(e=>(0,i.Kn)(e)===(0,i.Kn)(t.address)))||null}async isConnected(){let e=await this.proxyProvider.request({method:"eth_accounts"});return Array.isArray(e)&&e.length>0}async sign(e){return await this.connect({showPrompt:!1}),new n.Q(new rj(this.proxyProvider)).getSigner().signMessage(e)}subscribeListeners(){this.proxyProvider.on("accountsChanged",this.onAccountsChanged),this.proxyProvider.on("chainChanged",this.onChainChanged),this.proxyProvider.on("disconnect",this.onDisconnect),this.proxyProvider.on("connect",this.onConnect)}unsubscribeListeners(){this.proxyProvider.removeListener("accountsChanged",this.onAccountsChanged),this.proxyProvider.removeListener("chainChanged",this.onChainChanged),this.proxyProvider.removeListener("disconnect",this.onDisconnect),this.proxyProvider.removeListener("connect",this.onConnect)}},rS=[1,11155111,137,10,8453,84532,42161,7777777,43114,56],rT=(e,t)=>e.makeWeb3Provider({options:t}),rP=class extends rA{constructor(e,t,r,i,n,a){if(super("coinbase_wallet",e,t,r),this.connectorType="coinbase_wallet",this.displayName="Coinbase Wallet",this.proxyProvider=new rC(void 0,this.rpcTimeoutDuration),this.subscribeListeners(),this.connectionOptions=i.coinbaseWallet.connectionOptions??"eoaOnly",this.walletClientType="smartWalletOnly"===this.connectionOptions?"coinbase_smart_wallet":"coinbase_wallet","coinbase_smart_wallet"===this.walletClientType&&(this.displayName="Coinbase Smart Wallet"),!rc){let r=[t.id].concat(e.map(e=>e.id)),i="eoaOnly"!==this.connectionOptions?r.filter(e=>!rS.includes(e)):[];i.length>0&&console.warn(`The following configured chains are not supported by the Coinbase Smart Wallet: ${i.join(", ")}`),rc=new f.ZP({appName:n,appLogoUrl:a,appChainIds:r})}this.proxyProvider.setWalletProvider(rT(rc,this.connectionOptions))}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return e.showPrompt&&await this.promptConnection(),await this.isConnected()?this.getConnectedWallet():null}disconnect(){this.proxyProvider.walletProvider.disconnect(),this.onDisconnect()}get walletBranding(){return{name:this.displayName,icon:rh,id:"com.coinbase.wallet"}}async promptConnection(){try{let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new ez("Unable to retrieve accounts");this.connected=!0,await this.syncAccounts([e[0]])}catch(e){throw rg(e)}}},rR=({...e})=>(0,h.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.37126 11.0323C2.37126 12.696 3.90598 13.4421 5.40654 13.4468C8.91753 13.4468 12.8021 11.2897 12.7819 7.67984C12.7673 5.07728 10.3748 2.86167 7.54357 2.88296C4.8495 2.88296 2.21821 4.6411 2.21803 7.03628C2.21803 7.67951 2.58722 8.30178 3.55231 8.37184C2.74763 9.16826 2.37126 10.1225 2.37126 11.0323ZM7.55283 8.68012C8.11562 8.68012 8.57186 8.13217 8.57186 7.45624C8.57186 6.78032 8.11562 6.23237 7.55283 6.23237C6.99003 6.23237 6.53379 6.78032 6.53379 7.45624C6.53379 8.13217 6.99003 8.68012 7.55283 8.68012ZM10.4747 8.68012C11.0375 8.68012 11.4937 8.13217 11.4937 7.45625C11.4937 6.78032 11.0375 6.23237 10.4747 6.23237C9.91186 6.23237 9.45562 6.78032 9.45562 7.45625C9.45562 8.13217 9.91186 8.68012 10.4747 8.68012Z",fill:e.color||"var(--privy-color-foreground-3)"})}),rN=class extends rA{constructor(e,t,r,i,n=!1){super("privy",t,r,i),this.connectorType="embedded",this.proxyProvider=e,n&&(this.connectorType="embedded_imported"),this.subscribeListeners()}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return await this.isConnected()?(await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[td(e?.chainId||"0x1")]}),this.getConnectedWallet()):null}get walletBranding(){return{name:"Privy Wallet",icon:rR,id:"io.privy.wallet"}}disconnect(){this.connected=!1}async promptConnection(){}},rO=({style:e,...t})=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 24 24",style:{...e},...t,children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"})}),rI=({style:e,...t})=>(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",x:0,y:0,viewBox:"0 0 318.6 318.6",width:"28",height:"28",style:{height:"28px",width:"28px",...e},...t,children:[(0,h.jsx)("style",{children:".s1{stroke-linecap:round;stroke-linejoin:round}.s2{fill:#e4761b;stroke:#e4761b}.s3{fill:#f6851b;stroke:#f6851b}"}),(0,h.jsx)("path",{fill:"#e2761b",stroke:"#e2761b",className:"s1",d:"m274.1 35.5-99.5 73.9L193 65.8z"}),(0,h.jsx)("path",{d:"m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z",className:"s1 s2"}),(0,h.jsx)("path",{d:"m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z",className:"s1 s2"}),(0,h.jsx)("path",{fill:"#d7c1b3",stroke:"#d7c1b3",className:"s1",d:"m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"}),(0,h.jsx)("path",{fill:"#233447",stroke:"#233447",className:"s1",d:"m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"}),(0,h.jsx)("path",{fill:"#cd6116",stroke:"#cd6116",className:"s1",d:"m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"}),(0,h.jsx)("path",{fill:"#e4751f",stroke:"#e4751f",className:"s1",d:"m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"}),(0,h.jsx)("path",{d:"m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z",className:"s3"}),(0,h.jsx)("path",{fill:"#c0ad9e",stroke:"#c0ad9e",className:"s1",d:"m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"}),(0,h.jsx)("path",{fill:"#161616",stroke:"#161616",className:"s1",d:"m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"}),(0,h.jsx)("path",{fill:"#763d16",stroke:"#763d16",className:"s1",d:"m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"}),(0,h.jsx)("path",{d:"m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z",className:"s3"})]}),rM=({style:e,...t})=>(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"108",height:"108",viewBox:"0 0 108 108",fill:"none",style:{height:"28px",width:"28px",...e},...t,children:[(0,h.jsx)("rect",{width:"108",height:"108",rx:"23",fill:"#AB9FF2"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M46.5267 69.9229C42.0054 76.8509 34.4292 85.6182 24.348 85.6182C19.5824 85.6182 15 83.6563 15 75.1342C15 53.4305 44.6326 19.8327 72.1268 19.8327C87.768 19.8327 94 30.6846 94 43.0079C94 58.8258 83.7355 76.9122 73.5321 76.9122C70.2939 76.9122 68.7053 75.1342 68.7053 72.314C68.7053 71.5783 68.8275 70.7812 69.0719 69.9229C65.5893 75.8699 58.8685 81.3878 52.5754 81.3878C47.993 81.3878 45.6713 78.5063 45.6713 74.4598C45.6713 72.9884 45.9768 71.4556 46.5267 69.9229ZM83.6761 42.5794C83.6761 46.1704 81.5575 47.9658 79.1875 47.9658C76.7816 47.9658 74.6989 46.1704 74.6989 42.5794C74.6989 38.9885 76.7816 37.1931 79.1875 37.1931C81.5575 37.1931 83.6761 38.9885 83.6761 42.5794ZM70.2103 42.5795C70.2103 46.1704 68.0916 47.9658 65.7216 47.9658C63.3157 47.9658 61.233 46.1704 61.233 42.5795C61.233 38.9885 63.3157 37.1931 65.7216 37.1931C68.0916 37.1931 70.2103 38.9885 70.2103 42.5795Z",fill:"#FFFDF8"})]}),rL=class extends rA{constructor(e,t,r,i,n){super(n||"unknown",e,t,r),this.connectorType="injected",this.proxyProvider=new rC(void 0,this.rpcTimeoutDuration),this.subscribeListeners(),this.providerDetail=i;let a=i.provider;this.proxyProvider.setWalletProvider(a)}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return e.showPrompt&&await this.promptConnection(),await this.isConnected()?this.getConnectedWallet():null}get walletBranding(){return{name:this.providerDetail.info.name,icon:this.providerDetail.info.icon,id:this.providerDetail.info.rdns}}disconnect(){console.warn(`Programmatic disconnect with ${this.providerDetail.info.name} is not yet supported.`)}async promptConnection(){try{let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new ez("Unable to retrieve accounts");await this.syncAccounts([e[0]])}catch(e){throw rg(e)}}},rW=class extends rA{constructor(e,t,r,i,n){super(n??"unknown",e,t,r),this.connectorType="injected",eM(this,rd,void 0),this.proxyProvider=new rC(void 0,this.rpcTimeoutDuration),this.subscribeListeners(),this.proxyProvider.setWalletProvider(i),"metamask"===n?eL(this,rd,{name:"MetaMask",icon:rI,id:"io.metamask"}):"phantom"===n&&eL(this,rd,{name:"Phantom",icon:rM,id:"phantom"})}async initialize(){await this.syncAccounts(),this.initialized=!0,this.emit("initialized")}async connect(e){return e.showPrompt&&await this.promptConnection(),await this.isConnected()?this.getConnectedWallet():null}get walletBranding(){return eI(this,rd)??{name:"Browser Extension",icon:rO,id:"extension"}}disconnect(){console.warn("Programmatic disconnect with browser wallets is not yet supported.")}async promptConnection(){try{let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new ez("Unable to retrieve accounts");await this.syncAccounts([e[0]])}catch(e){throw rg(e)}}};rd=new WeakMap;var rF=class extends rL{disconnect(){console.warn("MetaMask does not support programmatic disconnect.")}async promptConnection(){try{s.tq||await this.proxyProvider.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});let e=await this.proxyProvider.request({method:"eth_requestAccounts"});if(!e||0===e.length||!e[0])throw new ez("Unable to retrieve accounts");await this.syncAccounts([e[0]])}catch(e){throw rg(e)}}},rU=class extends rA{constructor(e,t){super(e,[],t,{}),this.connectorType="null",this.proxyProvider=new rC(void 0,12e4),this.connectorType=e}get walletBranding(){return{name:"Wallet",id:""}}async initialize(){this.initialized=!0,this.emit("initialized")}async connect(){throw Error("connect called for an uninstalled wallet via the NullConnector")}disconnect(){throw Error("disconnect called for an uninstalled wallet via the NullConnector")}promptConnection(e){throw Error(`promptConnection called for an uninstalled wallet via the NullConnector for ${e}`)}},rD=class extends rU{constructor(e){super("phantom",e)}get walletBranding(){return{name:"Phantom",icon:rM,id:"phantom"}}};function rZ({src:e,...t}){return(0,h.jsx)("img",{src:e,...t,style:{display:"none"}})}var rz={appearance:{landingHeader:"Log in or sign up",theme:"light",accentColor:"#676FFF",walletList:["detected_wallets","metamask","coinbase_wallet","rainbow","wallet_connect"]},walletConnectCloudProjectId:"34357d3c125c2bcf2ce2bc3309d98715",rpcConfig:{rpcUrls:{},rpcTimeouts:{}},externalWallets:{coinbaseWallet:{connectionOptions:"eoaOnly"}},captchaEnabled:!1,_render:{standalone:!1},fiatOnRamp:{useSandbox:!1}},rH=({input:e})=>{if(!e||!e.primary[0])return;let t=[e.primary[0]],r=[];for(let r of(e.primary.length>4&&console.warn("You should not specify greater than 4 login methods in `loginMethodsAndOrder.primary`"),e.primary.slice(1)))t.includes(r)?console.warn(`Duplicated login method: ${r}`):t.push(r);for(let i of e.overflow??[])t.includes(i)||r.includes(i)?console.warn(`Duplicated login method: ${i}`):r.push(i);return{primary:t,overflow:r}},r$=new Set(["coinbase_wallet","cryptocom","metamask","okx_wallet","phantom","rainbow","uniswap","zerion","wallet_connect","detected_wallets","rabby_wallet"]),rB=e=>r$.has(e),rV=(e,t,r)=>r.indexOf(e)===t,rq=({input:e,overrides:t})=>t?t.primary.concat(t.overflow??[]).filter(rB).filter(rV):e?e.filter(rB).filter(rV):rz.appearance.walletList,rG={id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://arbitrum-mainnet.rpc.privy.systems"]},alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}}},rK={id:421613,name:"Arbitrum Goerli",network:"arbitrum-goerli",nativeCurrency:{name:"Goerli Ether",symbol:"AGOR",decimals:18},rpcUrls:{default:{http:["https://goerli-rollup.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://goerli.arbiscan.io/"}},testnet:!0},rY={id:421614,name:"Arbitrum Sepolia",network:"arbitrum-sepolia",nativeCurrency:{name:"Arbitrum Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://arbitrum-sepolia.rpc.privy.systems"]},default:{http:["https://sepolia-rollup.arbitrum.io/rpc"]},public:{http:["https://sepolia-rollup.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Blockscout",url:"https://sepolia-explorer.arbitrum.io"}},testnet:!0},rQ={id:8453,network:"base",name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://base-mainnet.rpc.privy.systems"]},blast:{http:["https://base-mainnet.blastapi.io"],webSocket:["wss://base-mainnet.blastapi.io"]},default:{http:["https://mainnet.base.org"]},public:{http:["https://mainnet.base.org"]}},blockExplorers:{etherscan:{name:"Basescan",url:"https://basescan.org"},default:{name:"Basescan",url:"https://basescan.org"}},testnet:!0},rJ={id:84531,network:"base-goerli",name:"Base Goerli Testnet",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://goerli.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://goerli.basescan.org"}},testnet:!0},rX={id:84532,network:"base-sepolia",name:"Base Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://base-sepolia.rpc.privy.systems"]},default:{http:["https://sepolia.base.org"]},public:{http:["https://sepolia.base.org"]}},blockExplorers:{default:{name:"Blockscout",url:"https://base-sepolia.blockscout.com"}},testnet:!0},r0={id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://mainnet.rpc.privy.systems"]},alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}}},r1={id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://optimism-mainnet.rpc.privy.systems"]},alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}}},r2={id:420,name:"Optimism Goerli Testnet",network:"optimism-goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://goerli.optimism.io"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli-optimism.etherscan.io"}},testnet:!0},r3={id:11155420,name:"Optimism Sepolia",network:"optimism-sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{privy:{http:["https://optimism-sepolia.rpc.privy.systems"]},default:{http:["https://sepolia.optimism.io"]},public:{http:["https://sepolia.optimism.io"]},infura:{http:["https://optimism-sepolia.infura.io/v3"]}},blockExplorers:{default:{name:"Blockscout",url:"https://optimism-sepolia.blockscout.com"}},testnet:!0},r4={id:137,name:"Polygon Mainnet",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{privy:{http:["https://polygon-mainnet.rpc.privy.systems"]},alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}}},r5={id:80001,name:"Mumbai",network:"maticmum",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{default:{http:["https://matic-mumbai.chainstacklabs.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://mumbai.polygonscan.com"}},testnet:!0},r6={id:7777777,name:"Zora",network:"zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]},public:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.zora.energy"}}},r7={id:999999999,name:"Zora Sepolia",network:"zora-sepolia",nativeCurrency:{decimals:18,name:"Zora Sepolia",symbol:"ETH"},rpcUrls:{default:{http:["https://sepolia.rpc.zora.energy"],webSocket:["wss://sepolia.rpc.zora.energy"]},public:{http:["https://sepolia.rpc.zora.energy"],webSocket:["wss://sepolia.rpc.zora.energy"]}},blockExplorers:{default:{name:"Zora Sepolia Explorer",url:"https://sepolia.explorer.zora.energy/"}},testnet:!0},r8={id:999,name:"Zora Goerli Testnet",network:"zora-testnet",nativeCurrency:{decimals:18,name:"Zora Goerli",symbol:"ETH"},rpcUrls:{default:{http:["https://testnet.rpc.zora.energy"],webSocket:["wss://testnet.rpc.zora.energy"]},public:{http:["https://testnet.rpc.zora.energy"],webSocket:["wss://testnet.rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://testnet.explorer.zora.energy"}},testnet:!0},r9=[rG,rK,rY,{id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},testnet:!0},{id:11155111,network:"sepolia",name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{privy:{http:["https://sepolia.rpc.privy.systems"]},alchemy:{http:["https://eth-sepolia.g.alchemy.com/v2"],webSocket:["wss://eth-sepolia.g.alchemy.com/v2"]},infura:{http:["https://sepolia.infura.io/v3"],webSocket:["wss://sepolia.infura.io/ws/v3"]},default:{http:["https://rpc.sepolia.org"]},public:{http:["https://rpc.sepolia.org"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://sepolia.etherscan.io"},default:{name:"Etherscan",url:"https://sepolia.etherscan.io"}},testnet:!0},r0,r1,r2,r3,r4,r5,{id:42220,name:"Celo Mainnet",network:"celo",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://forno.celo.org"]},infura:{http:["https://celo-mainnet.infura.io/v3"]},public:{http:["https://forno.celo.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/mainnet"},etherscan:{name:"CeloScan",url:"https://celoscan.io"}},testnet:!1},{id:44787,name:"Celo Alfajores Testnet",network:"celo-alfajores",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://alfajores-forno.celo-testnet.org"]},infura:{http:["https://celo-alfajores.infura.io/v3"]},public:{http:["https://alfajores-forno.celo-testnet.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/alfajores"},etherscan:{name:"CeloScan",url:"https://alfajores.celoscan.io/"}},testnet:!0},{id:314,name:"Filecoin - Mainnet",network:"filecoin-mainnet",nativeCurrency:{decimals:18,name:"filecoin",symbol:"FIL"},rpcUrls:{default:{http:["https://api.node.glif.io/rpc/v1"]},public:{http:["https://api.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filfox",url:"https://filfox.info/en"},filscan:{name:"Filscan",url:"https://filscan.io"},filscout:{name:"Filscout",url:"https://filscout.io/en"},glif:{name:"Glif",url:"https://explorer.glif.io"}}},{id:314159,name:"Filecoin - Calibration testnet",network:"filecoin-calibration",nativeCurrency:{decimals:18,name:"testnet filecoin",symbol:"tFIL"},rpcUrls:{default:{http:["https://api.calibration.node.glif.io/rpc/v1"]},public:{http:["https://api.calibration.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filscan",url:"https://calibration.filscan.io"}}},rQ,rJ,rX,{id:80085,network:"berachain-artio",name:"Berachain Artio",nativeCurrency:{name:"BERA",symbol:"BERA",decimals:18},rpcUrls:{default:{http:["https://berachain-artio.rpc.privy.systems"]},public:{http:["https://berachain-artio.rpc.privy.systems"]}},blockExplorers:{default:{name:"Beratrail",url:"https://artio.beratrail.io"}},testnet:!0},{id:59144,network:"linea-mainnet",name:"Linea Mainnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]},public:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://lineascan.build"},etherscan:{name:"Etherscan",url:"https://lineascan.build"}},testnet:!1},{id:59140,network:"linea-testnet",name:"Linea Goerli Testnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{infura:{http:["https://linea-goerli.infura.io/v3"],webSocket:["wss://linea-goerli.infura.io/ws/v3"]},default:{http:["https://rpc.goerli.linea.build"],webSocket:["wss://rpc.goerli.linea.build"]},public:{http:["https://rpc.goerli.linea.build"],webSocket:["wss://rpc.goerli.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli.lineascan.build"},etherscan:{name:"Etherscan",url:"https://goerli.lineascan.build"}},testnet:!0},{id:43114,name:"Avalanche",network:"avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]},public:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://snowtrace.io"},default:{name:"SnowTrace",url:"https://snowtrace.io"}}},{id:43113,name:"Avalanche Fuji",network:"avalanche-fuji",nativeCurrency:{decimals:18,name:"Avalanche Fuji",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax-test.network/ext/bc/C/rpc"]},public:{http:["https://api.avax-test.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://testnet.snowtrace.io"},default:{name:"SnowTrace",url:"https://testnet.snowtrace.io"}},testnet:!0},r6,r8,r7,{id:17e3,name:"Holesky",network:"holesky",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://ethereum-holesky.publicnode.com"]},public:{http:["https://ethereum-holesky.publicnode.com"]}},blockExplorers:{etherscan:{name:"EtherScan",url:"https://holesky.etherscan.io"},default:{name:"EtherScan",url:"https://holesky.etherscan.io"}}},{id:690,name:"Redstone",network:"redstone",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.redstonechain.com"]},public:{http:["https://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz/"}}},{id:17069,name:"Garnet Holesky",network:"garnet-holesky",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"]},public:{http:["https://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}}},{id:17001,name:"Redstone Holesky",network:"redstone-holesky",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.holesky.redstone.xyz"]},public:{http:["https://rpc.holesky.redstone.xyz"]}},blockExplorers:{etherscan:{name:"EtherScan",url:"https://explorer.holesky.redstone.xyz"},default:{name:"EtherScan",url:"https://explorer.holesky.redstone.xyz"}}}];r9.map(e=>e.id);var ie="#FFFFFF";function it(e,t){let r=Math.max(0,Math.min(1,e.toHsl().l+t));return(0,w.Z)({...e.toHsl(),l:r})}function ir(e,t,r){let i=r?console.warn:()=>{},n,a,o,s,l,c,d,h,p,u,m,f,g,y,x;t?.loginMethods?(n=t.loginMethods.includes("email"),a=t.loginMethods.includes("sms"),s=t.loginMethods.includes("wallet"),l=t.loginMethods.includes("google"),c=t.loginMethods.includes("twitter"),d=t.loginMethods.includes("discord"),p=t.loginMethods.includes("spotify"),u=t.loginMethods.includes("instagram"),h=t.loginMethods.includes("tiktok"),f=t.loginMethods.includes("github"),m=t.loginMethods.includes("linkedin"),g=t.loginMethods.includes("apple"),y=t.loginMethods.includes("farcaster"),x=t.loginMethods.includes("telegram")):(n=e.emailAuth,a=e.smsAuth,s=e.walletAuth,l=e.googleOAuth,c=e.twitterOAuth,d=e.discordOAuth,f=e.githubOAuth,p=e.spotifyOAuth,u=e.instagramOAuth,h=e.tiktokOAuth,m=e.linkedinOAuth,g=e.appleOAuth,y=e.farcasterAuth,x=e.telegramAuth),"u">typeof window&&"function"!=typeof window.PublicKeyCredential?o=!1:e.passkeyAuth&&(o=!0);let v=[n,a].filter(Boolean),C=[l,c,d,f,p,u,h,m,g,y,x].filter(Boolean),b=[s].filter(Boolean);if(v.length+C.length+b.length===0)throw Error("You must enable at least one login method");let _=t?.appearance?.showWalletLoginFirst!==void 0?t?.appearance?.showWalletLoginFirst:e.showWalletLoginFirst;_&&0===b.length?(i("You should only enable `showWalletLoginFirst` when `wallet` logins are also enabled. `showWalletLoginFirst` has been set to false"),_=!1):_||C.length+v.length!==0||(i("You should only disable `showWalletLoginFirst` when `email`, `sms`, or social logins are also enabled. `showWalletLoginFirst` has been set to true"),_=!0),t?.loginMethods&&t.loginMethodsAndOrder&&i("You should only configure one of `loginMethods` or `loginMethodsAndOrder`");let j=rq({input:t?.appearance?.walletList,overrides:t?.loginMethodsAndOrder}),k=rH({input:t?.loginMethodsAndOrder}),E=t?.intl?.defaultCountry??"US",{chains:A,defaultChain:S}=function({additionalChains:e,supportedChains:t,defaultChainFromConfig:r,hasRpcConfigDefined:i}){let n;if(e&&t&&console.warn("You should only specify one of `additionalChains` or `supportedChains`. Using `supportedChains`."),t){if(0===t.length)throw Error("`supportedChains` must contain at least one chain");t.filter(e=>e.rpcUrls.privyWalletOverride).length>0&&i&&console.warn("You have specified at least one `supportedChain` with `privyWalletOverride` but also have `rpcConfig` defined. The `rpcConfig` will be ignored. `rpcConfig` is deprecated and you should use `privyWalletOverride` in a `supportedChain`."),n=t.map(e=>e.rpcUrls.privyWalletOverride?e:r9.find(t=>t.id===e.id)??e)}else n=r9.concat(e??[]);let a=t?n[0]:r0,o=r??a;if(!n.find(e=>e.id===o.id))throw Error("`defaultChain` must be included in `supportedChains`");return{chains:n,defaultChain:o}}({additionalChains:t?.additionalChains,supportedChains:t?.supportedChains,defaultChainFromConfig:t?.defaultChain,hasRpcConfigDefined:Object.keys(t?.rpcConfig?.rpcUrls??{}).length>0}),T=!!t?.defaultChain,P=t?.customAuth?.getCustomAccessToken&&t?.customAuth?.enabled!==!1,R,N=!(e.enforceWalletUis??!0);if(R=e.legacyWalletUiConfig??!0?P?t?.embeddedWallets?.noPromptOnSignature??!0:t?.embeddedWallets?.noPromptOnSignature??N:N,t?.embeddedWallets?.waitForTransactionConfirmation===!1&&!0!==R)throw Error("Overriding `config.embeddedWallets.waitForTransactionConfirmation` requires that you disable wallet UIs in the dashboard.");let{requireUserPasswordOnCreate:O,...I}=t?.embeddedWallets??{};return{id:e.id,name:e.name,allowlistConfig:e.allowlistConfig,legacyWalletUiConfig:e.legacyWalletUiConfig,appearance:{logo:t?.appearance?.logo??e.logoUrl,landingHeader:t?.appearance?.landingHeader??rz.appearance.landingHeader,loginMessage:"string"==typeof t?.appearance?.loginMessage?t?.appearance?.loginMessage.slice(0,100):t?.appearance?.loginMessage,palette:function({backgroundTheme:e,accentHex:t,successHex:r="#51BA81",warnHex:i="#FFB74D",errorHex:n="#EC6351",whiteHex:a=ie,blackHex:o="#000000"}){var s;let l;switch(e){case"light":l=ie;break;case"dark":l="#1E1E1D";break;default:l=e}let c=(0,w.Z)(l),d=(0,w.Z)(t),h=(0,w.Z)(r),p=(0,w.Z)(i),u=(0,w.Z)(n),m=((s=c.getLuminance())<.8&&s>.2&&console.warn("Background color is not light or dark enough, which could lead to accessibility issues."),s>.5?"light":"dark"),f=it(c,"light"===m?-.04:.11),g=it(c,"light"===m?-.88:.87),y=it(c,"light"===m?-.77:.75),x=it(c,"light"===m?-.43:.45).desaturate("light"===m?60:20),v=it(c,"light"===m?-.08:.25).desaturate("light"===m?60:20),C=it(d,.15),b=it(d,-.06),_=it(u,.3),j=it(p,.3),k=(0,w.Z)(d.getLuminance()>.5?o:a),E=it(h,-.16);return{colorScheme:m,background:c.toHslString(),background2:f.toHslString(),foreground:g.toHslString(),foreground2:y.toHslString(),foreground3:x.toHslString(),foreground4:v.toHslString(),accent:d.toHslString(),accentLight:C.toHslString(),accentDark:b.toHslString(),foregroundAccent:k.toHslString(),success:h.toHslString(),successDark:E.toHslString(),error:u.toHslString(),errorLight:_.toHslString(),warn:p.toHslString(),warnLight:j.toHslString()}}({backgroundTheme:t?.appearance?.theme??rz.appearance.theme,accentHex:t?.appearance?.accentColor??e.accentColor??rz.appearance.accentColor}),loginGroupPriority:_?"web3-first":"web2-first",hideDirectWeb2Inputs:!!t?.appearance?.hideDirectWeb2Inputs,walletList:j},loginMethods:{wallet:s,email:n,sms:a,passkey:o,google:l,twitter:c,discord:d,github:f,spotify:p,instagram:u,tiktok:h,linkedin:m,apple:g,farcaster:y,telegram:x},loginMethodsAndOrder:k,legal:{termsAndConditionsUrl:t?.legal?.termsAndConditionsUrl??e.termsAndConditionsUrl,privacyPolicyUrl:t?.legal?.privacyPolicyUrl??e.privacyPolicyUrl,requireUsersAcceptTerms:e.requireUsersAcceptTerms??!1},walletConnectCloudProjectId:t?.walletConnectCloudProjectId??e.walletConnectCloudProjectId??rz.walletConnectCloudProjectId,rpcConfig:{rpcUrls:t?.rpcConfig?.rpcUrls??rz.rpcConfig.rpcUrls,rpcTimeouts:t?.rpcConfig?.rpcTimeouts??rz.rpcConfig.rpcTimeouts},chains:A,defaultChain:S,intl:{defaultCountry:E},shouldEnforceDefaultChainOnConnect:T,captchaEnabled:e.captchaEnabled??rz.captchaEnabled,captchaSiteKey:e.captchaSiteKey,externalWallets:{coinbaseWallet:{connectionOptions:t?.externalWallets?.coinbaseWallet?.connectionOptions??rz.externalWallets.coinbaseWallet.connectionOptions}},embeddedWallets:{...e.embeddedWalletConfig,..."boolean"==typeof O?{requireUserOwnedRecoveryOnCreate:O}:{},...P?{createOnLogin:"all-users",requireUserOwnedRecoveryOnCreate:!1,userOwnedRecoveryOptions:["user-passcode"]}:{},waitForTransactionConfirmation:!0,priceDisplay:{primary:"fiat-currency",secondary:"native-token"},...I,noPromptOnSignature:R},mfa:{methods:e.mfaMethods??[],noPromptOnMfaRequired:t?.mfa?.noPromptOnMfaRequired??!1},customAuth:P?{enabled:!0,...t.customAuth}:void 0,fiatOnRamp:{enabled:e.fiatOnRampEnabled,useSandbox:t?.fiatOnRamp?.useSandbox??rz.fiatOnRamp.useSandbox},loginConfig:{twitterOAuthOnMobileEnabled:e.twitterOAuthOnMobileEnabled??!1,telegramAuthConfiguration:e.telegramAuthConfiguration},headless:!!t?.headless,render:{standalone:t?._render?.standalone??rz._render.standalone}}}var ii=function(e,t=0){let r=3735928559^t,i=1103547991^t;for(let t=0,n;t<e.length;t++)r=Math.imul(r^(n=e.charCodeAt(t)),2654435761),i=Math.imul(i^n,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),4294967296*(2097151&(i=Math.imul(i^i>>>16,2246822507)^Math.imul(r^r>>>13,3266489909)))+(r>>>0)},ia={showWalletLoginFirst:!0,allowlistConfig:{errorTitle:null,errorDetail:null,errorCtaText:null,errorCtaLink:null},walletAuth:!0,emailAuth:!0,smsAuth:!1,googleOAuth:!1,twitterOAuth:!1,discordOAuth:!1,githubOAuth:!1,linkedinOAuth:!1,appleOAuth:!1,termsAndConditionsUrl:null,privacyPolicyUrl:null,embeddedWalletConfig:{createOnLogin:"off",requireUserOwnedRecoveryOnCreate:!1,userOwnedRecoveryOptions:["user-passcode"]},fiatOnRampEnabled:!1,captchaEnabled:!1,captchaSiteKey:""},io=ir(ia,void 0,!1),is=(0,o.createContext)({appConfig:io,isServerConfigLoaded:!1}),il=({children:e,legacyCreateEmbeddedWalletFlag:t,client:r,clientConfig:i})=>{let[n,a]=(0,o.useState)(null),s=(0,o.useMemo)(()=>ir(n??ia,i,!!n),[n,i]);return(0,o.useEffect)(()=>{if(!n)return;let e=function(e,t){if(!e)return{legacyCreateEmbeddedWalletFlag:t};let{appearance:r,additionalChains:i,supportedChains:n,defaultChain:a,...o}=e;return{...o,...i?{additionalChains:i.map(e=>e.id)}:void 0,...n?{supportedChains:n.map(e=>e.id)}:void 0,...a?{defaultChain:a.id}:void 0,legacyCreateEmbeddedWalletFlag:t}}(i,t),a=ii(JSON.stringify(e)).toString(),o=`privy:sent:${n.id}:${a}`;localStorage.getItem(o)||(r.createAnalyticsEvent({eventName:"sdk_initialize",payload:e}),localStorage.setItem(o,"t"))},[i,t,n]),(0,o.useEffect)(()=>{n||(async()=>{try{let e=await r.getServerConfig();e.customApiUrl&&r.updateApiUrl(e.customApiUrl),a(e)}catch(e){console.warn("Error generating app config: ",e)}})()},[]),(0,h.jsx)(is.Provider,{value:{appConfig:s,isServerConfigLoaded:!!n},children:e})},ic=()=>{let{appConfig:e}=(0,o.useContext)(is);return e},id=()=>{let{isServerConfigLoaded:e}=(0,o.useContext)(is);return e},ih=()=>{throw Error("You need to wrap your application with the <PrivyProvider> initialized with your app id.")},ip=(0,o.createContext)({ready:!1,app:io,currentScreen:null,lastScreen:null,navigate:ih,navigateBack:ih,resetNavigation:ih,setModalData:ih,onUserCloseViaDialogOrKeybindRef:void 0}),iu=["LANDING","CONNECT_ONLY_LANDING_SCREEN",null],im=e=>{let t=ic(),r=e.authenticated,[i,n]=(0,o.useState)(e.initialScreen);(0,o.useEffect)(()=>{r||iu.includes(e.initialScreen)||e.setInitialScreen(null)},[r]);let a=(0,o.useRef)(null);(0,o.useEffect)(()=>{e.open||(a.current=null)},[e.open]),(0,o.useEffect)(()=>{a.current=null},[e.initialScreen]);let s={ready:!!t.id,app:t,data:e.data,setModalData:e.setModalData,currentScreen:e.initialScreen,lastScreen:i,navigate:(t,r=!0)=>{e.setInitialScreen(t),r&&n(e.initialScreen)},navigateBack:()=>{e.setInitialScreen(i)},resetNavigation:()=>{e.setInitialScreen(null),n(null)},onUserCloseViaDialogOrKeybindRef:a};return(0,h.jsxs)(ip.Provider,{value:s,children:[("string"==typeof t.appearance.logo||t.appearance.logo?.type==="img")&&(0,h.jsx)(rZ,{src:"string"==typeof t.appearance.logo?t.appearance.logo:t.appearance.logo.props.src}),e.children]})},ig=()=>(0,o.useContext)(ip),iy=({style:e,...t})=>{let{app:r}=ig();return(0,h.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px",...e},...t,children:[(0,h.jsx)("rect",{width:"28",height:"28",rx:"3",fill:r?.appearance.palette.colorScheme==="dark"?"#3396ff":"#141414"}),(0,h.jsx)("g",{clipPath:"url(#clip0_1765_9946)",children:(0,h.jsx)("path",{d:"M8.09448 10.3941C11.3558 7.20196 16.6442 7.20196 19.9055 10.3941L20.2982 10.7782C20.3369 10.8157 20.3677 10.8606 20.3887 10.9102C20.4097 10.9599 20.4206 11.0132 20.4206 11.0671C20.4206 11.121 20.4097 11.1744 20.3887 11.224C20.3677 11.2737 20.3369 11.3186 20.2982 11.3561L18.9554 12.6702C18.9158 12.7086 18.8628 12.7301 18.8077 12.7301C18.7526 12.7301 18.6996 12.7086 18.66 12.6702L18.1198 12.1415C15.8448 9.91503 12.1557 9.91503 9.88015 12.1415L9.30167 12.7075C9.26207 12.7459 9.20909 12.7673 9.15395 12.7673C9.0988 12.7673 9.04582 12.7459 9.00622 12.7075L7.66346 11.3934C7.62475 11.3559 7.59397 11.3109 7.57295 11.2613C7.55193 11.2117 7.5411 11.1583 7.5411 11.1044C7.5411 11.0505 7.55193 10.9971 7.57295 10.9475C7.59397 10.8979 7.62475 10.8529 7.66346 10.8154L8.09448 10.3941ZM22.6829 13.1115L23.8776 14.2814C23.9163 14.319 23.9471 14.3639 23.9681 14.4135C23.9892 14.4632 24 14.5165 24 14.5704C24 14.6243 23.9892 14.6777 23.9681 14.7273C23.9471 14.777 23.9163 14.8219 23.8776 14.8594L18.4893 20.1332C18.4102 20.2101 18.3042 20.2531 18.1938 20.2531C18.0835 20.2531 17.9775 20.2101 17.8984 20.1332L14.0743 16.3901C14.0545 16.3708 14.0279 16.36 14.0003 16.36C13.9726 16.36 13.9461 16.3708 13.9263 16.3901L10.1021 20.1332C10.023 20.2101 9.91703 20.2531 9.8067 20.2531C9.69636 20.2531 9.59038 20.2101 9.51124 20.1332L4.12236 14.8594C4.08365 14.8219 4.05287 14.777 4.03185 14.7273C4.01083 14.6777 4 14.6243 4 14.5704C4 14.5165 4.01083 14.4632 4.03185 14.4135C4.05287 14.3639 4.08365 14.319 4.12236 14.2814L5.31767 13.1115C5.39678 13.0348 5.50265 12.9919 5.61285 12.9919C5.72305 12.9919 5.82892 13.0348 5.90803 13.1115L9.73216 16.8546C9.75194 16.874 9.7785 16.8848 9.80616 16.8848C9.83381 16.8848 9.86037 16.874 9.88015 16.8546L13.7043 13.1115C13.7834 13.0346 13.8894 12.9916 13.9997 12.9916C14.1101 12.9916 14.216 13.0346 14.2952 13.1115L18.1198 16.8546C18.1396 16.874 18.1662 16.8848 18.1938 16.8848C18.2215 16.8848 18.2481 16.874 18.2678 16.8546L22.092 13.1115C22.1711 13.0346 22.2771 12.9916 22.3874 12.9916C22.4977 12.9916 22.6037 13.0346 22.6829 13.1115Z",fill:"white"})}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_1765_9946",children:(0,h.jsx)("rect",{width:"20",height:"12.2531",fill:"white",transform:"translate(4 8)"})})})]})},iw=class extends rA{constructor(e,t,r,i,n,a,o,s){super(s||"unknown",r,i,t),this.connectorType="wallet_connect_v2",this.privyAppId=a,this.privyAppName=o,this.walletConnectCloudProjectId=e,this.rpcConfig=t,this.shouldEnforceDefaultChainOnConnect=n,this.proxyProvider=new rC(void 0,this.rpcTimeoutDuration),s&&(this.walletEntry=tw[s],this.walletClientType=s)}async initialize(){let e=await this.createProvider();if(this.provider=e,this.proxyProvider.setWalletProvider(e),this.subscribeListeners(),e.session){if(this.walletProvider?.session?.peer.metadata.url){let e=ty(this.walletProvider?.session?.peer.metadata.url);this.walletEntry=e?.entry,this.walletClientType=e?.walletClientType||"unknown"}this.connected=!0,await this.syncAccounts()}this.initialized=!0,this.emit("initialized");let{WalletConnectModal:t}=await r.e(318).then(r.bind(r,55318));this.modal=new t({projectId:this.walletConnectCloudProjectId,themeVariables:{"--wcm-z-index":"1000000"}}),this.modal.subscribeModal(e=>{e.open||this.walletProvider?.session||!this.onQrModalClosed||this.onQrModalClosed()})}async connect(e){return e.showPrompt&&await this.promptConnection(),this.getConnectedWallet()}async isConnected(){return!!this.walletProvider?.connected}get walletBranding(){return"metamask"===this.walletClientType?{name:"MetaMask",icon:rI,id:"io.metamask"}:{name:tc(this.walletProvider?.session?.peer.metadata.name||"")||"WalletConnect",icon:this.walletProvider?.session?.peer.metadata.icons?.[0]||iy,id:this.walletProvider?.session?.peer.metadata.name.toLowerCase()||"wallet_connect_v2"}}async resetConnection(e){this.walletProvider&&this.walletProvider.connected&&(await this.walletProvider.disconnect(),this.walletProvider.signer.session=void 0,this.walletEntry=tw[e],this.walletClientType=e,this.redirectUri=void 0,function(){try{localStorage.removeItem(tx)}catch{}}(),this.onDisconnect())}async promptConnection(){if(this.provider)return new Promise((e,t)=>{this.onQrModalClosed=()=>{t(new rf)},(async()=>{let t="",r=await Promise.race([this.walletProvider?.enable(),this.proxyProvider.walletTimeout()]);if(r?.length&&(t=r[0]),!t||""===t)throw new ez("Unable to retrieve address");if(this.walletProvider?.session?.peer.metadata.url){let e=ty(this.walletProvider?.session?.peer.metadata.url);this.walletEntry=e?.entry,this.walletClientType=e?.walletClientType||"unknown",this.proxyProvider.rpcTimeoutDuration=iv(this.rpcConfig,this.walletClientType)}this.connected=!0,await this.syncAccounts(r),e()})().catch(e=>{if(e){t(rg(e));return}t(new ez("Unknown error during connection"))}).finally(()=>this.modal?.closeModal())})}disconnect(){this.walletProvider?.disconnect().then(()=>this.onDisconnect()).catch(()=>console.warn("Unable to disconnect Wallet Connect provider"))}get walletProvider(){return this.proxyProvider.walletProvider}setWalletProvider(e){this.proxyProvider.setWalletProvider(e)}async createProvider(){let e={};for(let t of this.chains){let r=tu(t.id,this.chains,this.rpcConfig,this.privyAppId);r&&(e[t.id]=r)}let t=this.shouldEnforceDefaultChainOnConnect?[this.defaultChain.id]:[],r=this.chains.map(e=>e.id),i=await y.Gn.init({projectId:this.walletConnectCloudProjectId,chains:t,optionalChains:r,optionalEvents:y.gy,optionalMethods:y.lI,rpcMap:e,showQrModal:!1,metadata:{description:this.privyAppName,name:this.privyAppName,url:window.location.toString(),icons:[]}});return i.on("display_uri",e=>{if(i.signer.abortPairingAttempt(),s.tq&&this.walletEntry){let{redirect:t,href:r}=function(e,t){let r={name:t.displayName||"",universalLink:t.mobile.universal,deepLink:t.mobile.native};if(r.deepLink)return tC(r.deepLink,e);if(r.universalLink)return tb(r.universalLink,e);throw new eD(`Unsupported wallet ${t.id}`)}(e,this.walletEntry);(function({href:e,name:t}){try{localStorage.setItem(tx,JSON.stringify({href:e,name:t}))}catch{}})({href:r,name:this.walletEntry.displayName}),this.redirectUri=t,t_(t,"_self")}else this.modal?.openModal({uri:e,chains:[this.defaultChain.id]})}),i.on("connect",()=>{if(this.modal?.closeModal(),i.session?.peer.metadata.url){let e=ty(i.session?.peer.metadata.url);this.walletEntry=e?.entry,this.walletClientType=e?.walletClientType||"unknown"}}),i}async enableProvider(){return this.walletProvider?.connected?Promise.resolve(this.walletProvider.accounts):await this.walletProvider?.enable()}},ix=e=>{let t=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses")?.split(" ").filter(e=>u.A7(e)).map(e=>i.Kn(e));return!!t?.length&&!!e?.linkedAccounts.filter(e=>"wallet"==e.type&&t.includes(e.address)).length},iv=(e,t)=>e.rpcTimeouts&&e.rpcTimeouts[t]||12e4,iC=class extends m.Z{constructor(e,t,r,i,n,a,o,s,l,c,d){super(),this.getEthereumProvider=()=>{let e=this.wallets[0],t=this.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return e&&t?t.proxyProvider:new rC},this.privyAppId=e,this.walletConnectCloudProjectId=t,this.rpcConfig=r,this.chains=i,this.defaultChain=n,this.walletConnectors=[],this.initialized=!1,this.store=a,this.walletList=o,this.shouldEnforceDefaultChainOnConnect=s,this.externalWalletConfig=l,this.privyAppName=c,this.privyAppLogo=d,this.storedConnections=iA()}get wallets(){let e=new Set,t=this.walletConnectors.flatMap(e=>e.wallets).sort((e,t)=>e.connectedAt&&t.connectedAt?t.connectedAt-e.connectedAt:0).filter(t=>{let r=`${t.address}${t.walletClientType}${t.connectorType}`;return!e.has(r)&&(e.add(r),!0)}),r=t.findIndex(e=>e.address===(this.activeWallet?this.activeWallet:"unknown"));return r>=0&&t.unshift(t.splice(r,1)[0]),t}async initialize(){if(this.initialized)return;e7.get(tF)&&(e7.getKeys().forEach(e=>{e.startsWith("walletconnect")&&e7.del(e)}),e7.del(tF));let e=th(this.store,this.walletList,this.externalWalletConfig).then(e=>{e.forEach(({type:e,eip6963InjectedProvider:t,legacyInjectedProvider:r})=>{this.createWalletConnector("injected",e,{eip6963InjectedProvider:t,legacyInjectedProvider:r})})});this.walletList.includes("coinbase_wallet")&&this.createWalletConnector("coinbase_wallet","coinbase_wallet"),!te()&&this.walletList.includes("phantom")&&this.createWalletConnector("phantom","phantom"),this.createWalletConnector("wallet_connect_v2","unknown"),await e,this.initialized=!0}findWalletConnector(e,t){return"wallet_connect_v2"===e?this.walletConnectors.find(t=>t.connectorType===e)??null:this.walletConnectors.find(r=>r.connectorType===e&&r.walletClientType===t)??null}onInitialized(e){e.wallets.forEach(e=>{let t=this.storedConnections.find(t=>t.address===e.address&&t.connectorType===e.connectorType&&t.walletClientType===e.walletClientType);t&&(e.connectedAt=t.connectedAt)}),this.saveConnectionHistory(),this.emit("walletsUpdated"),this.emit("connectorInitialized")}onWalletsUpdated(e){e.initialized&&(this.saveConnectionHistory(),this.emit("walletsUpdated"))}addEmbeddedWalletConnector(e,t,r,i){let n=this.findWalletConnector("embedded","privy");if(n)n.proxyProvider.walletProxy=e;else{let n=new rN(new r_(e,t,this.rpcConfig,this.chains,i,r.id),this.chains,r,this.rpcConfig);this.addWalletConnector(n)}}addImportedWalletConnector(e,t,r,i){let n=this.findWalletConnector("embedded_imported","privy");if(n)n.proxyProvider.walletProxy=e;else{let n=new rN(new r_(e,t,this.rpcConfig,this.chains,i,r.id),this.chains,r,this.rpcConfig,!0);this.addWalletConnector(n)}}removeEmbeddedWalletConnector(){let e=this.findWalletConnector("embedded","privy");if(e){let t=this.walletConnectors.indexOf(e);this.walletConnectors.splice(t,1),this.saveConnectionHistory(),this.storedConnections=iA(),this.emit("walletsUpdated")}}removeImportedWalletConnector(){let e=this.findWalletConnector("embedded_imported","privy");if(e){let t=this.walletConnectors.indexOf(e);this.walletConnectors.splice(t,1),this.saveConnectionHistory(),this.storedConnections=iA(),this.emit("walletsUpdated")}}async createWalletConnector(e,t,r){let i=this.findWalletConnector(e,t);if(i)return i instanceof iw&&i.resetConnection(t),i;let n="injected"!==e?"coinbase_wallet"===e?new rP(this.chains,this.defaultChain,this.rpcConfig,this.externalWalletConfig,this.privyAppName,this.privyAppLogo):"phantom"===e?new rD(this.defaultChain):new iw(this.walletConnectCloudProjectId,this.rpcConfig,this.chains,this.defaultChain,this.shouldEnforceDefaultChainOnConnect,this.privyAppId,this.privyAppName,t):"metamask"===t&&r?.eip6963InjectedProvider?new rF(this.chains,this.defaultChain,this.rpcConfig,r?.eip6963InjectedProvider,"metamask"):"metamask"===t&&r?.legacyInjectedProvider?new rW(this.chains,this.defaultChain,this.rpcConfig,r?.legacyInjectedProvider,"metamask"):"phantom"===t&&r?.legacyInjectedProvider?new rW(this.chains,this.defaultChain,this.rpcConfig,r?.legacyInjectedProvider,"phantom"):r?.legacyInjectedProvider&&"unknown_browser_extension"===t?new rW(this.chains,this.defaultChain,this.rpcConfig,r?.legacyInjectedProvider):r?.eip6963InjectedProvider?new rL(this.chains,this.defaultChain,this.rpcConfig,r?.eip6963InjectedProvider,t):void 0;return n&&this.addWalletConnector(n),n||null}addWalletConnector(e){this.walletConnectors.push(e),e.on("initialized",()=>this.onInitialized(e)),e.on("walletsUpdated",()=>this.onWalletsUpdated(e)),e.initialize().catch(e=>{console.debug("Failed to initialize connector",e)})}saveConnectionHistory(){let e=this.wallets.map(e=>({address:e.address,connectorType:e.connectorType,walletClientType:e.walletClientType,connectedAt:e.connectedAt}));e7.put(tU,e)}async activeWalletSign(e){let t=this.wallets,r=t.length>0?t[0]:null;return r?r.sign(e):null}setActiveWallet(e){this.activeWallet=(0,i.Kn)(e),this.emit("walletsUpdated")}};function ib(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],n=t[r];if(i?.address!==n?.address||i?.chainId!==n?.chainId||i?.connectorType!==n?.connectorType||i?.connectedAt!==n?.connectedAt||i?.walletClientType!==n?.walletClientType||i?.isConnected!==n?.isConnected||i?.linked!==n?.linked)return!1}return!0}var i_,ij,ik,iE=e=>e&&"string"==typeof e.address&&"string"==typeof e.connectorType&&"string"==typeof e.walletClientType&&"number"==typeof e.connectedAt,iA=()=>{let e=e7.get(tU);return e&&Array.isArray(e)&&e.map(e=>iE(e)).every(Boolean)?e:[]},iS=[eK,eQ,eY,e0],iT=class{constructor({appId:e,appClientId:t,client:r,defaults:i}){this.appId=e,this.appClientId=t,this.clientAnalyticsId=r.clientAnalyticsId,this.sdkVersion="1.71.0",this.client=r,this.defaults=i,this.fallbackApiUrl=r.fallbackApiUrl,this.baseFetch=x.Wg.create({baseURL:this.defaults.baseURL,timeout:this.defaults.timeout,retry:3,retryDelay:500,retryStatusCodes:[408,409,425,500,502,503,504],credentials:"include",onRequest:async({request:e,options:t})=>{let r=new Headers(t.headers);r.set("privy-app-id",this.appId),this.appClientId&&r.set("privy-client-id",this.appClientId),r.set("privy-ca-id",this.clientAnalyticsId||""),r.set("privy-client",`react-auth:${this.sdkVersion}`);let i=iS.includes(e.toString());if(!r.has("authorization")){let e=await this.client.getAccessToken({disableAutoRefresh:i});null!==e&&r.set("authorization",`Bearer ${e}`)}t.headers=r,t.retryDelay&&(t.retryDelay=3*t.retryDelay)},onRequestError:({error:e})=>{if(e instanceof DOMException&&"AbortError"===e.name)throw new eZ}})}async get(e,t){try{return await this.baseFetch(e,t)}catch(e){throw eH(e)}}async post(e,t,r){try{return await this.baseFetch(e,{method:"POST",...t?{body:t}:{},...r})}catch(e){throw eH(e)}}async delete(e,t){try{return await this.baseFetch(e,{method:"DELETE",...t})}catch(e){throw eH(e)}}},iP=e=>({challenge:e.challenge,allowCredentials:e.allow_credentials?.map(e=>({id:e.id,type:e.type,transports:e.transports}))||[],timeout:e.timeout,extensions:{appid:e.extensions?.app_id,credProps:e.extensions?.cred_props,hmacCreateSecret:e.extensions?.hmac_create_secret},userVerification:e.user_verification}),iR=class{static parse(e){try{return new iR(e)}catch{return null}}constructor(e){this.value=e,this._decoded=C.t(e)}get subject(){return this._decoded.sub}get expiration(){return this._decoded.exp}get issuer(){return this._decoded.iss}get audience(){return this._decoded.aud}isExpired(e=0){return Date.now()>=(this.expiration-e)*1e3}},iN=class{constructor(){this.authenticateOnce=new tj(async e=>this._authenticate(e)),this.linkOnce=new tj(async e=>this._link(e)),this.refreshOnce=new tj(this._refresh.bind(this)),this.destroyOnce=new tj(this._destroy.bind(this)),this.forkSessionOnce=new tj(this._forkSession.bind(this))}get token(){try{let e=e7.get(tA);return"string"==typeof e?new iR(e).value:null}catch(e){return console.error(e),this.destroyLocalState(),null}}get refreshToken(){try{let e=e7.get(tT);return"string"==typeof e?e:null}catch(e){return console.error(e),this.destroyLocalState(),null}}get forkedToken(){try{let e=e7.get(tR);return"string"==typeof e?e:null}catch(e){return console.error(e),this.destroyLocalState(),null}}getProviderAccessToken(e){try{let t=e7.get(tO(e));if("string"!=typeof t)return null;{let r=new iR(t);return r.isExpired()?(e7.del(tO(e)),null):r.value}}catch(e){return console.error(e),null}}get mightHaveServerCookies(){try{let e=v.Z.get(tP);return void 0!==e&&e.length>0}catch(e){console.error(e)}return!1}hasRefreshCredentials(){return this.mightHaveServerCookies||"string"==typeof this.token&&"string"==typeof this.refreshToken&&"deprecated"!==this.refreshToken}hasRecoveryCredentials(){return"string"==typeof this.forkedToken}hasActiveToken(){let e=iR.parse(this.token);return null!==e&&!e.isExpired(30)}authenticate(e){return this.authenticateOnce.execute(e)}link(e){return this.linkOnce.execute(e)}refresh(){return this.refreshOnce.execute()}forkSession(){return this.forkSessionOnce.execute()}destroy(){return this.destroyOnce.execute()}storeProviderAccessToken(e,t){"string"==typeof t?e7.put(tO(e),t):e7.del(tO(e))}async _authenticate(e){try{let t=await e.authenticate(),{user:r,is_new_user:i,oauth_provider_tokens:n}=t;this.handleTokenResponse(t);let a=n?{provider:n.provider,accessToken:n.access_token,accessTokenExpiresInSeconds:n.access_token_expires_in_seconds,refreshToken:n.refresh_token,scopes:n.scopes}:void 0,o=e instanceof e2?"email":e instanceof t7?"sms":e instanceof t6?"siwe":e instanceof e1?"custom_auth":e instanceof tV?e.meta.provider:null;return o&&this.client&&this.client.createAnalyticsEvent({eventName:"sdk_authenticate",payload:{method:o,isNewUser:i}}),"siwe"===o&&this.client&&this.client.createAnalyticsEvent({eventName:"sdk_authenticate_siwe",payload:{connectorType:e.meta.connectorType,walletClientType:e.meta.walletClientType}}),{user:rl(r),isNewUser:i,oAuthProviderTokens:a}}catch(e){throw console.warn("Error authenticating session"),e$(e)}}async _link(e){try{let t=await e.link(),r=t.oauth_provider_tokens,i=r?{provider:r.provider,accessToken:r.access_token,accessTokenExpiresInSeconds:r.access_token_expires_in_seconds,refreshToken:r.refresh_token,scopes:r.scopes}:void 0;return{user:rl(t),oAuthProviderTokens:i}}catch(e){throw console.warn("Error linking account"),e$(e)}}async _refresh(){if(!this.api)throw new eD("Session has no API instance");if(!this.client)throw new eD("Session has no PrivyClient instance");await this.client.getAccessToken({disableAutoRefresh:!0});let e=this.token,t=this.refreshToken,r=this.forkedToken;try{let i;if(e&&t||this.mightHaveServerCookies){let n={};e&&(n.authorization=`Bearer ${e}`),i=await this.api.post(eK,t?{refresh_token:t}:{},{headers:n}),r&&this.clearForkedToken()}else{if(!r)return null;i=await this.api.post(eQ,{refresh_token:r}),this.clearForkedToken()}return this.handleTokenResponse(i),rl(i.user)}catch(e){if(e instanceof eU&&"missing_or_invalid_token"===e.privyErrorCode)return console.warn("Unable to refresh tokens - token is missing or no longer valid"),this.destroyLocalState(),null;throw e$(e)}}handleTokenResponse(e){e.session_update_action?"set"===e.session_update_action?(this.storeRefreshToken(e.refresh_token),this.storeToken(e.token)):"clear"===e.session_update_action?this.destroyLocalState():"ignore"===e.session_update_action&&e.token&&this.storeToken(e.token):(this.storeRefreshToken(e.refresh_token),this.storeToken(e.token))}async _destroy(){try{await this.api?.post(eY,{refresh_token:this.refreshToken})}catch{console.warn("Error destroying session")}this.destroyLocalState()}async _forkSession(){if(!this.api)throw new eD("Session has no API instance");let e=this.refreshToken;try{let t=await this.api.post("/api/v1/sessions/fork",{refresh_token:e});return this.storeRefreshToken(t.refresh_token),this.storeToken(t.token),t.new_session_refresh_token}catch(e){throw e$(e)}}destroyLocalState(){this.storeRefreshToken(null),this.storeToken(null),this.clearForkedToken()}storeToken(e){if("string"==typeof e){let t=e7.get(tA);if(e7.put(tA,e),!this.client?.useServerCookies){let t=iR.parse(e)?.expiration;v.Z.set(tS,e,{sameSite:"Strict",secure:!0,expires:t?new Date(1e3*t):void 0})}t!==e&&this.client?.onStoreToken?.(e)}else e7.del(tA),v.Z.remove(tS),this.client?.onDeleteToken?.()}storeRefreshToken(e){"string"==typeof e?(e7.put(tT,e),this.client?.useServerCookies||v.Z.set(tP,"t",{sameSite:"Strict",secure:!0,expires:30})):(e7.del(tT),v.Z.remove("privy-refresh-token"),v.Z.remove(tP))}clearForkedToken(){e7.del(tR)}},iO=class{constructor(e){eM(this,ij),this.apiUrl=e.apiUrl||tE,this.fallbackApiUrl=this.apiUrl,this.useServerCookies=!1,this.timeout=e.timeout||2e4,this.appId=e.appId,this.appClientId=e.appClientId,this.clientAnalyticsId=eW(this,ij,ik).call(this),i_||(i_=new iN),this.session=i_,this.api=this.generateApi(),this.session.client=this}initializeConnectorManager({walletConnectCloudProjectId:e,rpcConfig:t,chains:r,defaultChain:i,store:n,walletList:a,shouldEnforceDefaultChainOnConnect:o,externalWalletConfig:s,appName:l}){this.connectors||(this.connectors=new iC(this.appId,e,t,r,i,n,a,o,s,l))}sessionHasActiveToken(){return this.session.hasActiveToken()}generateApi(){let e=new iT({appId:this.appId,appClientId:this.appClientId,client:this,defaults:{baseURL:this.apiUrl,timeout:this.timeout}});return this.session.api=e,e}updateApiUrl(e){this.apiUrl=e||this.fallbackApiUrl,this.api=this.generateApi(),e&&(this.useServerCookies=!0)}authenticate(){if(!this.authFlow)throw new eD("No auth flow in progress.");return this.session.authenticate(this.authFlow)}link(){if(!this.authFlow)throw new eD("No auth flow in progress.");return this.session.link(this.authFlow)}storeProviderAccessToken(e,t){this.session.storeProviderAccessToken(e,t)}getProviderAccessToken(e){return this.session.getProviderAccessToken(e)}async logout(){await this.session.destroy(),this.authFlow=void 0}clearProviderAcccessTokens(e){e.linkedAccounts.filter(e=>"cross_app"===e.type).forEach(e=>{this.storeProviderAccessToken(e.providerApp.id,null)})}startAuthFlow(e){return e.api=this.api,this.authFlow=e,this.authFlow}async initMfaSmsVerification(){try{await this.api.post("/api/v1/mfa/passwordless_sms/init",{action:"verify"})}catch(e){throw eH(e)}}async initMfaPasskeyVerification(){try{let e=await this.api.post("/api/v1/mfa/passkeys/init",{});return iP(e.options)}catch(e){throw eH(e)}}async unlinkEmail(e){try{let t=await this.api.post("/api/v1/passwordless/unlink",{address:e});return rl(t)}catch(e){throw e$(e)}}async acceptTerms(){try{let e=await this.api.post("/api/v1/users/me/accept_terms",{});return rl(e)}catch(e){throw e$(e)}}async unlinkPhone(e){try{let t=await this.api.post("/api/v1/passwordless_sms/unlink",{phoneNumber:e});return rl(t)}catch(e){throw e$(e)}}async unlinkWallet(e){try{let t=await this.api.post("/api/v1/siwe/unlink",{address:e});return rl(t)}catch(e){throw e$(e)}}async unlinkOAuth(e,t){try{let r=await this.api.post("/api/v1/oauth/unlink",{provider:e,subject:t});return rl(r)}catch(e){throw e$(e)}}async unlinkFarcaster(e){try{let t=await this.api.post("/api/v1/farcaster/unlink",{fid:e});return rl(t)}catch(e){throw e$(e)}}async unlinkTelegram(e){try{let t=await this.api.post("/api/v1/telegram/unlink",{telegram_user_id:e});return rl(t)}catch(e){throw e$(e)}}async unlinkPasskey(e){try{let t=await this.api.post("/api/v1/passkeys/unlink",{credential_id:e});return rl(t)}catch(e){throw e$(e)}}async createAnalyticsEvent({eventName:e,payload:t,timestamp:r,options:i}){if(!(typeof window>"u"))try{this.clientAnalyticsId||console.warn("No client analytics id set, refusing to send analytics event"),await this.api.post(e0,{event_name:e,client_id:this.clientAnalyticsId,payload:{...t||{},clientTimestamp:r?r.toISOString():new Date().toISOString()}},{retry:-1,keepalive:i?.keepAlive??!1})}catch{}}async signMoonpayOnRampUrl(e){try{return this.api.post("/api/v1/plugins/moonpay_on_ramp/sign",e)}catch(e){throw e$(e)}}async getAuthenticatedUser(){return this.session.hasRefreshCredentials()||this.session.hasRecoveryCredentials()?this.session.refresh():null}async getAccessToken(e){return this.session.hasActiveToken()?iR.parse(this.session.token)?.audience!==this.appId?(await this.logout(),null):this.session.token:!e?.disableAutoRefresh&&this.session.hasRefreshCredentials()?(await this.session.refresh(),this.session.token):null}async getServerConfig(){try{let e={},t=this.session.token;t&&(e.authorization=`Bearer ${t}`);let r=await this.api.get(`/api/v1/apps/${this.appId}`,{baseURL:this.fallbackApiUrl,headers:e}),i=r.telegram_auth_config?{botId:r.telegram_auth_config.bot_id,botName:r.telegram_auth_config.bot_name,linkEnabled:r.telegram_auth_config.link_enabled,seamlessAuthEnabled:r.telegram_auth_config.seamless_auth_enabled}:void 0;return{id:r.id,name:r.name,verificationKey:r.verification_key,logoUrl:r.logo_url||void 0,accentColor:r.accent_color||void 0,showWalletLoginFirst:r.show_wallet_login_first,allowlistConfig:{errorTitle:r.allowlist_config.error_title,errorDetail:r.allowlist_config.error_detail,errorCtaText:r.allowlist_config.cta_text,errorCtaLink:r.allowlist_config.cta_link},walletAuth:r.wallet_auth,emailAuth:r.email_auth,smsAuth:r.sms_auth,googleOAuth:r.google_oauth,twitterOAuth:r.twitter_oauth,discordOAuth:r.discord_oauth,githubOAuth:r.github_oauth,spotifyOAuth:r.spotify_oauth,instagramOAuth:r.instagram_oauth,tiktokOAuth:r.tiktok_oauth,linkedinOAuth:r.linkedin_oauth,appleOAuth:r.apple_oauth,farcasterAuth:r.farcaster_auth,passkeyAuth:r.passkey_auth,telegramAuth:r.telegram_auth,termsAndConditionsUrl:r.terms_and_conditions_url,embeddedWalletConfig:{createOnLogin:r.embedded_wallet_config?.create_on_login,userOwnedRecoveryOptions:r.embedded_wallet_config.user_owned_recovery_options,requireUserOwnedRecoveryOnCreate:r.embedded_wallet_config.require_user_owned_recovery_on_create},privacyPolicyUrl:r.privacy_policy_url,requireUsersAcceptTerms:r.require_users_accept_terms,customApiUrl:r.custom_api_url,walletConnectCloudProjectId:r.wallet_connect_cloud_project_id,fiatOnRampEnabled:r.fiat_on_ramp_enabled,captchaEnabled:r.captcha_enabled,captchaSiteKey:r.captcha_site_key,twitterOAuthOnMobileEnabled:r.twitter_oauth_on_mobile_enabled,createdAt:new Date(1e3*r.created_at),updatedAt:new Date(1e3*r.updated_at),mfaMethods:r.mfa_methods,enforceWalletUis:r.enforce_wallet_uis,legacyWalletUiConfig:r.legacy_wallet_ui_config,telegramAuthConfiguration:i}}catch(e){throw e$(e)}}async getUsdTokenPrice(e){try{return(await this.api.get(`/api/v1/token_price?chainId=${e.id}&tokenSymbol=${e.nativeCurrency.symbol}`)).usd}catch{console.error(`Unable to fetch token price for chain with id ${e.id}`);return}}async requestFarcasterSignerStatus(e){try{return await this.api.post("/api/v1/farcaster/signer/status",{ed25519_public_key:e})}catch(e){throw console.error("Unable to fetch Farcaster signer status"),e}}async forkSession(){return await this.session.forkSession()}};ij=new WeakSet,ik=function(){if(typeof window>"u")return null;try{let e=e7.get(tN);if("string"==typeof e&&e.length>0)return e}catch{}let e=(0,p.Z)();try{return e7.put(tN,e),e}catch{return e}};var iI=(0,o.createContext)({siteKey:"",enabled:!1,appId:void 0,token:void 0,error:void 0,status:"disabled",setToken:ih,setError:ih,setExecuting:ih,waitForResult:()=>Promise.resolve(""),ref:{current:null},remove:ih,reset:ih,execute:ih}),iM=class extends eF{constructor(e,t,r){super(e||"Captcha failed"),this.type="Captcha",t instanceof Error&&(this.cause=t),this.privyErrorCode=r}},iL=({children:e,id:t,captchaSiteKey:r,captchaEnabled:i})=>{let n=(0,o.useRef)(null),[a,s]=(0,o.useState)(),[l,c]=(0,o.useState)(),[d,p]=(0,o.useState)(!1),u=(0,o.useMemo)(()=>i?d||a||l?!d||a||l?a&&!l?{status:"success",token:a}:l?{status:"error",error:l}:{status:"ready"}:{status:"loading"}:{status:"ready"}:{status:"disabled"},[i,a,l,d]);return(0,h.jsx)(iI.Provider,{value:{...u,ref:n,enabled:i,siteKey:r,appId:t,setToken:s,setError:c,setExecuting:p,remove(){i&&(n.current?.remove(),p(!1),c(void 0),s(void 0))},reset(){i&&(n.current?.reset(),p(!1),c(void 0),s(void 0))},execute(){i&&(p(!0),n.current?.execute())},async waitForResult(){if(!i)return"";try{return await function(e,{interval:t=100,timeout:r=5e3}={}){return new Promise((i,n)=>{let a=0,o,s=()=>{if(a>=r){n("Max attempts reached without result");return}if(o=e(),a+=t,null!=o){i(o);return}setTimeout(s,t)};s()})}(()=>n.current?.getResponse(),{interval:200,timeout:2e4})}catch{throw new iM("Captcha failed",null,"captcha_timeout")}}},children:e})},iW=()=>(0,o.useContext)(iI),iF=e=>{let{enabled:t,siteKey:r,appId:i,setError:n,setToken:a,setExecuting:s,ref:l}=iW(),[,c]=(0,o.useMemo)(()=>r?.split("t:")||[],[r]);if((0,o.useEffect)(()=>l.current?.remove,[]),!t)return null;if(!c)throw Error("Unsupported captcha site key");return(0,h.jsx)("div",{className:"hidden h-0 w-0",children:(0,h.jsx)(b.Nc,{...e,ref:l,siteKey:c,options:{action:i,size:"invisible",...e.delayedExecution?{appearance:"execute",execution:"execute"}:{appearance:"always",execution:"render"}},onUnsupported:()=>{e.onUnsupported?.(),console.warn("Browser does not support Turnstile.")},onError:()=>{e.onError?.(),n("Captcha failed"),s(!1)},onSuccess:t=>{e.onSuccess?.(t),a(t),s(!1)},onExpire:()=>{e.onExpire?.();try{l.current?.reset(),n(void 0),a(void 0)}catch{n("expired_and_failed_reset")}}})})},iU=(0,o.createContext)({isNewUserThisSession:!1,linkingHint:null,walletConnectionStatus:null,mipdStore:null,connectors:[],rpcConfig:{rpcUrls:{}},showFiatPrices:!0,chains:[],clientAnalyticsId:null,pendingTransaction:null,appId:"notAdded",nativeTokenSymbolForChainId:ih,initializeWalletProxy:ih,getAuthMeta:ih,getAuthFlow:ih,closePrivyModal:ih,openPrivyModal:ih,connectWallet:ih,initLoginWithWallet:ih,loginWithWallet:ih,initLoginWithFarcaster:ih,loginWithFarcaster:ih,loginWithCode:ih,initLoginWithEmail:ih,initLoginWithSms:ih,initUpdateEmail:ih,resendEmailCode:ih,resendSmsCode:ih,initLoginWithHeadlessOAuth:ih,loginWithHeadlessOAuth:ih,crossAppAuthFlow:ih,initLoginWithOAuth:ih,recoveryOAuthFlow:ih,loginWithOAuth:ih,initLoginWithPasskey:ih,loginWithPasskey:ih,initLinkWithPasskey:ih,linkWithPasskey:ih,refreshUser:ih,walletProxy:null,createAnalyticsEvent:ih,acceptTerms:ih,getUsdTokenPrice:ih,recoverEmbeddedEthereumWallet:ih,getFiatOnRampConfig:ih,updateWallets:ih,fundWallet:ih,setReadyToTrue:ih,requestFarcasterSignerStatus:ih,initLoginWithTelegram:ih,loginWithTelegram:ih,embeddedSolanaWallet:null,createEmbeddedSolanaWallet:ih,recoverEmbeddedSolanaWallet:ih}),iD=()=>(0,o.useContext)(iU),iZ=(0,o.createContext)({ready:!1,authenticated:!1,user:null,walletConnectors:null,connectWallet:ih,login:ih,connectOrCreateWallet:ih,linkEmail:ih,linkPhone:ih,linkFarcaster:ih,linkWallet:ih,linkCrossAppAccount:ih,linkGoogle:ih,linkTwitter:ih,linkDiscord:ih,linkGithub:ih,linkSpotify:ih,linkInstagram:ih,linkTelegram:ih,linkTiktok:ih,linkLinkedIn:ih,linkApple:ih,linkPasskey:ih,updateEmail:ih,logout:ih,getAccessToken:ih,getEthereumProvider:ih,getEthersProvider:ih,getWeb3jsProvider:ih,unlinkEmail:ih,unlinkPhone:ih,unlinkWallet:ih,unlinkGoogle:ih,unlinkTwitter:ih,unlinkDiscord:ih,unlinkGithub:ih,unlinkSpotify:ih,unlinkInstagram:ih,unlinkTiktok:ih,unlinkLinkedIn:ih,unlinkApple:ih,unlinkFarcaster:ih,unlinkTelegram:ih,unlinkPasskey:ih,setActiveWallet:ih,forkSession:ih,createWallet:ih,importWallet:ih,signMessage:ih,signTypedData:ih,enrollInMfa:ih,initEnrollmentWithSms:ih,initEnrollmentWithTotp:ih,initEnrollmentWithPasskey:ih,promptMfa:ih,init:ih,submitEnrollmentWithSms:ih,submitEnrollmentWithTotp:ih,submitEnrollmentWithPasskey:ih,unenroll:ih,submit:ih,cancel:ih,sendTransaction:ih,exportWallet:ih,setWalletPassword:ih,setWalletRecovery:ih,requestFarcasterSignerFromWarpcast:ih,getFarcasterSignerPublicKey:ih,signFarcasterMessage:ih,initLoginWithEmail:ih,initLoginWithSms:ih,otpState:{status:"initial"},loginWithCode:ih,fundWallet:ih,initLoginWithHeadlessOAuth:ih,loginWithHeadlessOAuth:ih,signMessageWithCrossAppWallet:ih,signTypedDataWithCrossAppWallet:ih,sendTransactionWithCrossAppWallet:ih,isHeadlessOAuthLoading:!1,isModalOpen:!1,mfaMethods:[]}),iz=()=>(0,o.useContext)(iZ),iH=e=>{let[t,r]=(0,o.useState)("auto");return(0,o.useEffect)(()=>{let t=new ResizeObserver(e=>{r(e[0]?.contentRect.height??"auto")});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}},[e.current]),t},i$={login:{onComplete:[],onError:[],onOAuthLoginComplete:[]},logout:{onSuccess:[]},connectWallet:{onSuccess:[],onError:[]},createWallet:{onSuccess:[],onError:[]},linkAccount:{onSuccess:[],onError:[]},configureMfa:{onMfaRequired:[]},setWalletPassword:{onSuccess:[],onError:[]},setWalletRecovery:{onSuccess:[],onError:[]},signMessage:{onSuccess:[],onError:[]},signTypedData:{onSuccess:[],onError:[]},sendTransaction:{onSuccess:[],onError:[]},accessToken:{onAccessTokenGranted:[],onAccessTokenRemoved:[]}},iB=(0,o.createContext)(void 0),iV=()=>(0,o.useContext)(iB);function iq(e,t){if(!t)return;let r=iV().current[e];return(0,o.useEffect)(()=>{for(let[i,n]of Object.entries(t))r.hasOwnProperty(i)||console.warn(`Invalid event type "${i}" for action "${e}"`),r[i]?.push(n);return()=>{for(let[i,n]of Object.entries(t))r.hasOwnProperty(i)||console.warn(`Invalid event type "${i}" for action "${e}"`),r[i]=r[i]?.filter(e=>e!==n)}},[t])}function iG(e,t,r,...i){for(let n of e.current[t][r])n(...i)}function iK(){let e=iV();return(t,r,...i)=>iG(e,t,r,...i)}var iY=({success:e,fail:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(iQ,{className:e?"success":t?"fail":""}),(0,h.jsx)(iJ,{className:e?"success":t?"fail":""})]}),iQ=_.ZP.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &&&.success {
    border-color: var(--privy-color-success);
    border-bottom-color: var(--privy-color-success);
  }

  &&&.fail {
    border-color: var(--privy-color-error);
    border-bottom-color: var(--privy-color-error);
  }
`,iJ=(0,_.ZP)(iQ)`
  && {
    border-bottom-color: ${e=>e.color??"var(--privy-color-accent)"};
    animation: none;
    opacity: 0.5;
  }
`,iX=e=>(0,h.jsx)(i0,{color:e.color||"var(--privy-color-foreground-3)"}),i0=(0,_.ZP)(iQ)`
  && {
    height: 1rem;
    width: 1rem;
    margin: 2px 0;
    border-width: 1.5px;

    /* Override default Loader to match button transitions */
    transition: border-color 200ms ease;
  }
`,i1=_.ZP.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: 100%;
    cursor: pointer;
    border-radius: var(--privy-border-radius-md);

    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.016px;
  }

  && {
    padding: 12px 16px;
  }
`,i2=({children:e,loading:t,disabled:r,loadingText:i="Loading...",...n})=>(0,h.jsx)(i6,{disabled:t||r,...n,children:t?(0,h.jsxs)("span",{children:[(0,h.jsx)(iX,{}),i?(0,h.jsx)("span",{children:i}):null]}):e}),i3=({children:e,loading:t,disabled:r,...i})=>(0,h.jsx)(i4,{disabled:r,...i,children:t?(0,h.jsx)(iX,{color:"var(--privy-color-foreground-accent)"}):e}),i4=(0,_.ZP)(i1)`
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
    pointer-events: none;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent-dark);
  }
`,i5=({children:e,loading:t,disabled:r,loadingText:i="Loading...",...n})=>(0,h.jsx)(i6,{as:"a",disabled:t||r,...n,children:t?(0,h.jsxs)("span",{children:[(0,h.jsx)(iX,{}),i?(0,h.jsx)("span",{children:i}):null]}):e}),i6=(0,_.ZP)(i1)`
  position: relative;

  && {
    background-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-accent)"};
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-accent-dark)"};
  }

  &:active {
    background-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-accent-dark)"};
  }

  &:hover:disabled,
  &:active:disabled {
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }

  /* If an anchor tag, :disabled isn't a thing, so manually set state */
  ${e=>e.disabled?(0,_.iv)`
          &&&,
          &&&:hover,
          &&&:active {
            background-color: var(--privy-color-background-2);
            color: var(--privy-color-foreground-3);
            cursor: not-allowed;
            pointer-events: none;
          }
        `:""}

  > span {
    display: flex;
    align-items: center;
    gap: 8px;

    opacity: 1;
    animation: fadein 200ms ease;
  }
`,i7=({children:e,loading:t,disabled:r,loadingText:i="Loading...",...n})=>(0,h.jsx)(i8,{disabled:t||r,...n,children:t?(0,h.jsxs)("span",{children:[(0,h.jsx)(iX,{}),i?(0,h.jsx)("span",{children:i}):null]}):e}),i8=(0,_.ZP)(i1)`
  && {
    border-width: 1px;
    border-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-foreground-4)"};
    color: var(--privy-color-foreground);

    transition: border-color 200ms ease;
  }

  &:hover,
  &:active {
    border-color: ${e=>e.warn?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  }

  &:hover:disabled,
  &:active:disabled {
    border-color: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-3);
    cursor: not-allowed;
  }

  > span {
    display: flex;
    align-items: center;
    gap: 8px;

    opacity: 1;
    animation: fadein 200ms ease;
  }
`,i9=_.ZP.button`
  && {
    padding: 12px 16px;
    font-weight: 500;
    text-align: center;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent);
    border-radius: var(--privy-border-radius-sm);
    min-width: 144px;
    opacity: ${e=>e.invisible?"0":"1"};
    transition: opacity 200ms ease, background-color 200ms ease, color 200ms ease;
    user-select: none;

    ${e=>e.invisible&&(0,_.iv)`
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
      color: var(--privy-color-foreground-3);
      cursor: not-allowed;
    }
  }
`,ne=(_.ZP.div`
  /* Set to match height of SoftCtaButton to avoid reflow if conditionally rendered */
  height: 44px;
`,({children:e,onClick:t,disabled:r,isSubmitting:i,...n})=>(0,h.jsxs)(nt,{isSubmitting:i,onClick:t,disabled:r,...n,children:[(0,h.jsx)("span",{children:e}),(0,h.jsx)("span",{children:(0,h.jsx)(iX,{})})]})),nt=_.ZP.button`
  && {
    color: var(--privy-color-accent);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    border-radius: 0px var(--privy-border-radius-mdlg) var(--privy-border-radius-mdlg) 0px;
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
      opacity: ${e=>e.isSubmitting?0:1};
    }

    && > :last-child {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);

      /** Will map to the opposite of first span */
      opacity: ${e=>e.isSubmitting?1:0};
    }

    :disabled,
    :hover:disabled {
      color: var(--privy-color-foreground-3);
      cursor: not-allowed;
    }
  }
`,nr=_.ZP.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    background-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
`,ni=({backFn:e})=>(0,h.jsx)("div",{children:(0,h.jsx)(ns,{onClick:e,children:(0,h.jsx)(k.Z,{height:"16px",width:"16px",strokeWidth:2})})}),nn=({infoFn:e})=>(0,h.jsx)("div",{children:(0,h.jsx)(nl,{"aria-label":"info",onClick:e,children:(0,h.jsx)(j.Z,{height:"22px",width:"22px",strokeWidth:2})})}),na=e=>(0,h.jsx)("div",{children:(0,h.jsx)(ns,{"aria-label":"close modal",onClick:e.onClose,children:(0,h.jsx)(E.Z,{height:"16px",width:"16px",strokeWidth:2})})}),no=({backFn:e,infoFn:t,onClose:r,title:i,closeable:n=!0})=>{let{closePrivyModal:a}=iD(),o=ic();return(0,h.jsxs)(nc,{children:[(0,h.jsxs)(nd,{children:[e&&(0,h.jsx)(ni,{backFn:e}),t&&(0,h.jsx)(nn,{infoFn:t})]}),i&&(0,h.jsx)(np,{id:"privy-dialog-title",children:i}),(0,h.jsx)(nh,{children:!o.render.standalone&&n&&(0,h.jsx)(na,{onClose:r||(()=>a())})})]})},ns=_.ZP.button`
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
  }
`,nl=(0,_.ZP)(ns)`
  && {
    background-color: transparent;
  }
`,nc=_.ZP.div`
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
`,nd=_.ZP.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`,nh=_.ZP.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,np=_.ZP.div`
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,nu=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`,nm=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
`,nf=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ng=_.ZP.div`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: var(--privy-color-foreground-3);

  && > a {
    color: var(--privy-color-accent);
  }
`;function ny(e){let{legal:{privacyPolicyUrl:t,termsAndConditionsUrl:r,requireUsersAcceptTerms:i}}=e.app;if(i&&!e.alwaysShowImplicitConsent||!r&&!t)return(0,h.jsx)(ng,{});let n=!!(t&&r);return(0,h.jsxs)(ng,{children:["By logging in I agree to the"," ",r&&(0,h.jsx)("a",{href:r,target:"_blank",children:n?"Terms":"Terms of Service"}),n&&" & ",t&&(0,h.jsx)("a",{href:t,target:"_blank",children:"Privacy Policy"})]})}var nw=({protectedByPrivy:e})=>(0,h.jsx)(nx,{children:e?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(rR,{}),(0,h.jsx)("a",{href:"https://www.privy.io/",target:"_blank",children:"Protected by Privy"})]}):null}),nx=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 12px;
  gap: 2px;

  font-size: 13px;

  && svg {
    height: 14px;
    width: 14px;
    margin-bottom: 2px;
    opacity: 0.5;
  }

  && a {
    color: var(--privy-color-foreground-3);
    &:hover {
      text-decoration: underline;
    }
  }

  @media all and (display-mode: standalone) {
    padding-bottom: 30px;
  }
`,nv=_.ZP.div`
  text-align: left;
  flex-grow: 1;
`,nC=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,nb=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,n_=(0,_.ZP)(nb)`
  ${e=>"light"===e.colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e.colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size: 100% 32px, 100% 16px;
  background-attachment: local, scroll;
`,nj=(0,_.iv)`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;

    padding: 12px 16px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-mdlg);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }

    svg {
      height: 24px;
      max-height: 24px;
      max-width: 24px;
    }
  }
`,nk=_.ZP.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,nE=_.ZP.button`
  ${nj}
`,nA=_.ZP.a`
  ${nj}
`,nS=_.ZP.div`
  width: 100%;
  ${e=>e.if?"display: none;":""}
`,nT=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 30px;
  @media (max-width: 440px) {
    padding: 10px 10px 20px;
  }
`,nP=_.ZP.div`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`,nR=_.ZP.div`
  font-size: 0.875rem;

  text-align: center;
`,nN=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  padding: 20px 0;
  @media (max-width: 440px) {
    padding: 10px 10px 20px;
  }
`,nO=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  padding: 1rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,nI=_.ZP.div`
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    z-index: 2;
    height: 25px !important;
    width: 25px !important;
    color: var(--privy-color-accent);
  }
`,nM=_.ZP.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
`,nL=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`,nW=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,nF=_.ZP.div`
  display: flex;
  gap: 5px;
  width: 100%;
`,nU=_.ZP.button`
  && {
    background-color: transparent;
    color: var(--privy-color-foreground-3);
    padding: 0 10px;
    display: flex;
    align-items: center;

    > svg {
      z-index: 2;
      height: 20px !important;
      width: 20px !important;
    }
  }

  &&:hover {
    color: var(--privy-color-error);
  }
`,nD=_.ZP.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    z-index: 2;
    height: 20px !important;
    width: 20px !important;
  }
`,nZ=_.ZP.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 400 !important;
  color: ${e=>e.isAccent?"var(--privy-color-accent)":"var(--privy-color-foreground-3)"};

  > svg {
    z-index: 2;
    height: 18px !important;
    width: 18px !important;
    display: flex !important;
    align-items: flex-end;
  }
`,nz=_.ZP.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,nH=_.ZP.p`
  text-align: left;
  width: 100%;
  color: var(--privy-color-foreground-3) !important;
`,n$=_.ZP.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: 100%;
    cursor: pointer;
    border-radius: var(--privy-border-radius-md);

    font-size: 0.875rem;
    line-height: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.016px;
  }

  && {
    color: ${e=>"dark"===e.theme?"var(--privy-color-foreground-2)":"var(--privy-color-accent)"};
    background-color: transparent;

    padding: 0.5rem 0px;
  }

  &:hover {
    text-decoration: underline;
  }
`,nB=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${({status:e})=>"success"===e?"var(--privy-color-success)":"var(--privy-color-accent)"};

  > svg {
    z-index: 2;
    height: 50px !important;
    width: auto !important;
    color: white;
  }
`,nV=_.ZP.div`
  color: var(--privy-color-error);
`,nq=({termsAndConditionsUrl:e,privacyPolicyUrl:t,onAccept:r,onDecline:i})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{closeable:!1}),(0,h.jsx)(S.Z,{width:56,height:56,fill:"var(--privy-color-accent)",style:{margin:"auto"}}),(0,h.jsx)(nP,{style:{marginTop:24},children:"One last step"}),(0,h.jsx)(nR,{children:"By signing up, you agree to our terms and privacy policy."}),(0,h.jsxs)(nb,{style:{marginTop:24},children:[e&&(0,h.jsxs)(nA,{target:"_blank",href:e,children:["View Terms ",(0,h.jsx)(A.Z,{style:{marginLeft:"auto"}})]}),t&&(0,h.jsxs)(nA,{target:"_blank",href:t,children:["View Privacy Policy ",(0,h.jsx)(A.Z,{style:{marginLeft:"auto"}})]})]}),(0,h.jsxs)(nG,{style:{marginTop:24},children:[(0,h.jsx)(i7,{onClick:i,children:"No thanks"}),(0,h.jsx)(i2,{onClick:r,children:"Accept"})]}),(0,h.jsx)(nw,{protectedByPrivy:!0})]}),nG=_.ZP.div`
  display: flex;
  gap: 10px;
`,nK=_.ZP.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
    border-bottom-color: ${e=>e.color??"var(--privy-color-accent)"};
  }
`,nY=({style:e,...t})=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",style:{height:"1.5rem",width:"1.5rem",...e},...t,children:(0,h.jsx)("path",{fillRule:"evenodd",d:"M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",clipRule:"evenodd"})}),nQ=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
`,nJ=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,nX=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,n0=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,n1=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,n2=(0,_.ZP)(n0)`
  padding: 20px 0;
`,n3=(0,_.ZP)(n0)`
  gap: 16px;
`,n4=_.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,n5=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,n6=(_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,_.ZP.div`
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
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`),n7=_.ZP.div`
  height: 16px;
`,n8=_.ZP.div`
  height: 12px;
`,n9=_.ZP.div`
  position: relative;
`,ae=_.ZP.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`,at=({title:e,description:t,children:r,...i})=>(0,h.jsx)(an,{...i,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:e}),"string"==typeof t?(0,h.jsx)("p",{children:t}):t,r]})}),ar=(0,_.ZP)(at)`
  margin-bottom: 24px;
`,ai=({title:e,description:t,icon:r,children:i,...n})=>(0,h.jsxs)(aa,{...n,children:[r||null,(0,h.jsx)("h3",{children:e}),t&&"string"==typeof t?(0,h.jsx)("p",{children:t}):t,i]}),an=_.ZP.div`
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
`,aa=(0,_.ZP)(an)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`,ao=Array(6).fill(""),as=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  gap: 16px;
  flex-grow: 1;
`,al=_.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  > div:last-child {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-md);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-md);
      padding: 8px 10px;
      height: 58px;
      width: 46px;
      text-align: center;
      font-size: 18px;
    }

    > input:focus {
      border: 1px solid var(--privy-color-accent);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-success);
    }

    > input.fail {
      border: 1px solid var(--privy-color-error);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,ac=_.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: ${e=>e.success?"var(--privy-color-success)":e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,ad=_.ZP.div`
  font-size: 13px;
  color: var(--privy-color-foreground);
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  // Equal opposing size buffer to account for auto margining when the
  // success/fail text does not show up
  padding-bottom: 32px;
`,ah=_.ZP.div`
  color: var(--privy-color-accent);
  padding: 2px 0;
  > button {
    text-decoration: underline;
  }
`,ap=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-sm);
  padding: 2px 8px;
  gap: 4px;
  background: var(--privy-color-background-2);
  color: var(--privy-color-foreground-2);
`,au=_.ZP.span`
  font-weight: 500;
  word-break: break-all;
`,am=({icon:e})=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(af,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{}),"string"==typeof e?(0,h.jsx)("span",{style:{background:`url('${e}')`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"cover"}}):e?(0,h.jsx)(e,{style:{width:"38px",height:"38px"}}):(0,h.jsx)("span",{})]})})}),af=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`,ag=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,ay={coinbase_wallet:{logo:rh,displayName:"Coinbase Wallet",rdns:"com.coinbase.wallet"},coinbase_smart_wallet:{logo:rh,displayName:"Coinbase Smart Wallet",rdns:"com.coinbase.wallet"},metamask:{logo:rI,displayName:"MetaMask",rdns:"io.metamask"},phantom:{logo:rM,displayName:"Phantom"},rainbow:{logo:({style:e,...t})=>(0,h.jsxs)("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,h.jsx)("g",{clipPath:"url(#clip0_5_32)",children:(0,h.jsxs)("g",{clipPath:"url(#clip1_5_32)",children:[(0,h.jsx)("mask",{id:"mask0_5_32",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"120",height:"120",children:(0,h.jsx)("path",{d:"M78.163 0H41.837C29.79 0 23.767 0 17.283 2.04999C10.203 4.62701 4.627 10.203 2.05 17.283C0 23.767 0 29.791 0 41.837V78.163C0 90.21 0 96.232 2.05 102.717C4.627 109.797 10.203 115.373 17.283 117.949C23.767 120 29.79 120 41.837 120H78.163C90.21 120 96.232 120 102.717 117.949C109.797 115.373 115.373 109.797 117.95 102.717C120 96.232 120 90.21 120 78.163V41.837C120 29.791 120 23.767 117.95 17.283C115.373 10.203 109.797 4.62701 102.717 2.04999C96.232 0 90.21 0 78.163 0Z",fill:"black"})}),(0,h.jsx)("g",{mask:"url(#mask0_5_32)",children:(0,h.jsx)("rect",{width:"120",height:"120",fill:"url(#paint0_linear_5_32)"})}),(0,h.jsx)("path",{d:"M20 38H26C56.9279 38 82 63.0721 82 94V100H94C97.3137 100 100 97.3137 100 94C100 53.1309 66.8691 20 26 20C22.6863 20 20 22.6863 20 26V38Z",fill:"url(#paint1_radial_5_32)"}),(0,h.jsx)("path",{d:"M84 94H100C100 97.3137 97.3137 100 94 100H84V94Z",fill:"url(#paint2_linear_5_32)"}),(0,h.jsx)("path",{d:"M26 20L26 36H20L20 26C20 22.6863 22.6863 20 26 20Z",fill:"url(#paint3_linear_5_32)"}),(0,h.jsx)("path",{d:"M20 36H26C58.0325 36 84 61.9675 84 94V100H66V94C66 71.9086 48.0914 54 26 54H20V36Z",fill:"url(#paint4_radial_5_32)"}),(0,h.jsx)("path",{d:"M68 94H84V100H68V94Z",fill:"url(#paint5_linear_5_32)"}),(0,h.jsx)("path",{d:"M20 52L20 36L26 36L26 52H20Z",fill:"url(#paint6_linear_5_32)"}),(0,h.jsx)("path",{d:"M20 62C20 65.3137 22.6863 68 26 68C40.3594 68 52 79.6406 52 94C52 97.3137 54.6863 100 58 100H68V94C68 70.804 49.196 52 26 52H20V62Z",fill:"url(#paint7_radial_5_32)"}),(0,h.jsx)("path",{d:"M52 94H68V100H58C54.6863 100 52 97.3137 52 94Z",fill:"url(#paint8_radial_5_32)"}),(0,h.jsx)("path",{d:"M26 68C22.6863 68 20 65.3137 20 62L20 52L26 52L26 68Z",fill:"url(#paint9_radial_5_32)"})]})}),(0,h.jsxs)("defs",{children:[(0,h.jsxs)("linearGradient",{id:"paint0_linear_5_32",x1:"60",y1:"0",x2:"60",y2:"120",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#174299"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#001E59"})]}),(0,h.jsxs)("radialGradient",{id:"paint1_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26 94) rotate(-90) scale(74)",children:[(0,h.jsx)("stop",{offset:"0.770277",stopColor:"#FF4000"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#8754C9"})]}),(0,h.jsxs)("linearGradient",{id:"paint2_linear_5_32",x1:"83",y1:"97",x2:"100",y2:"97",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#FF4000"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#8754C9"})]}),(0,h.jsxs)("linearGradient",{id:"paint3_linear_5_32",x1:"23",y1:"20",x2:"23",y2:"37",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#8754C9"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#FF4000"})]}),(0,h.jsxs)("radialGradient",{id:"paint4_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26 94) rotate(-90) scale(58)",children:[(0,h.jsx)("stop",{offset:"0.723929",stopColor:"#FFF700"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#FF9901"})]}),(0,h.jsxs)("linearGradient",{id:"paint5_linear_5_32",x1:"68",y1:"97",x2:"84",y2:"97",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#FFF700"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#FF9901"})]}),(0,h.jsxs)("linearGradient",{id:"paint6_linear_5_32",x1:"23",y1:"52",x2:"23",y2:"36",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#FFF700"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#FF9901"})]}),(0,h.jsxs)("radialGradient",{id:"paint7_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(26 94) rotate(-90) scale(42)",children:[(0,h.jsx)("stop",{offset:"0.59513",stopColor:"#00AAFF"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#01DA40"})]}),(0,h.jsxs)("radialGradient",{id:"paint8_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(51 97) scale(17 45.3333)",children:[(0,h.jsx)("stop",{stopColor:"#00AAFF"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#01DA40"})]}),(0,h.jsxs)("radialGradient",{id:"paint9_radial_5_32",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(23 69) rotate(-90) scale(17 322.37)",children:[(0,h.jsx)("stop",{stopColor:"#00AAFF"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#01DA40"})]}),(0,h.jsx)("clipPath",{id:"clip0_5_32",children:(0,h.jsx)("rect",{width:"120",height:"120",fill:"white"})}),(0,h.jsx)("clipPath",{id:"clip1_5_32",children:(0,h.jsx)("rect",{width:"120",height:"120",fill:"white"})})]})]}),displayName:"Rainbow",rdns:"me.rainbow"},wallet_connect:{logo:iy,displayName:"WalletConnect"},zerion:{logo:({style:e,...t})=>(0,h.jsxs)("svg",{width:"176",height:"176",viewBox:"0 0 176 176",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_1704_1423)",children:[(0,h.jsx)("path",{d:"M126.233 176H49.7672C22.287 176 0 153.723 0 126.233V49.7673C0 22.287 22.2769 0 49.7672 0H126.233C153.713 0 176 22.277 176 49.7673V126.233C176 153.723 153.713 176 126.233 176Z",fill:"#2461ED"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M100.667 85.6591C83.4133 76.3353 62.4196 64.2443 46.6192 54.3891C41.9573 51.0306 44.3234 43.9023 49.9578 43.9023H128.138C132.499 43.9023 135.416 48.7648 133.231 52.4442C127.977 61.5174 120.308 73.0368 113.901 82.1702C110.462 87.0727 104.858 87.9149 100.667 85.6591ZM75.5031 88.6867C92.1858 97.5795 115.566 111.104 132.178 121.33C137.311 124.498 135.266 132.098 129.271 132.098C119.46 132.098 103.518 132.1 87.6592 132.103C71.9639 132.105 56.3497 132.108 46.8398 132.108C42.0476 132.108 39.5913 127.135 41.6265 123.666C48.5041 111.946 56.2338 100.116 62.6603 91.2834C65.5176 87.3433 71.3325 86.461 75.5031 88.6867Z",fill:"white"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_1704_1423",children:(0,h.jsx)("rect",{width:"176",height:"176",fill:"white"})})})]}),displayName:"Zerion",rdns:"io.zerion.wallet"},brave_wallet:{logo:({...e})=>(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 436.49 511.97",height:"24",width:"24",...e,children:[(0,h.jsx)("defs",{children:(0,h.jsxs)("linearGradient",{id:"brave-linear-gradient",x1:"-18.79",y1:"359.73",x2:"194.32",y2:"359.73",gradientTransform:"matrix(2.05, 0, 0, -2.05, 38.49, 992.77)",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{offset:"0",stopColor:"#f1562b"}),(0,h.jsx)("stop",{offset:"0.3",stopColor:"#f1542b"}),(0,h.jsx)("stop",{offset:"0.41",stopColor:"#f04d2a"}),(0,h.jsx)("stop",{offset:"0.49",stopColor:"#ef4229"}),(0,h.jsx)("stop",{offset:"0.5",stopColor:"#ef4029"}),(0,h.jsx)("stop",{offset:"0.56",stopColor:"#e83e28"}),(0,h.jsx)("stop",{offset:"0.67",stopColor:"#e13c26"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#df3c26"})]})}),(0,h.jsx)("path",{style:{fill:"url(#brave-linear-gradient)"},d:"M436.49,165.63,420.7,122.75l11-24.6A8.47,8.47,0,0,0,430,88.78L400.11,58.6a48.16,48.16,0,0,0-50.23-11.66l-8.19,2.89L296.09.43,218.25,0,140.4.61,94.85,50.41l-8.11-2.87A48.33,48.33,0,0,0,36.19,59.3L5.62,90.05a6.73,6.73,0,0,0-1.36,7.47l11.47,25.56L0,165.92,56.47,380.64a89.7,89.7,0,0,0,34.7,50.23l111.68,75.69a24.73,24.73,0,0,0,30.89,0l111.62-75.8A88.86,88.86,0,0,0,380,380.53l46.07-176.14Z"}),(0,h.jsx)("path",{style:{fill:"#fff"},d:"M231,317.33a65.61,65.61,0,0,0-9.11-3.3h-5.49a66.08,66.08,0,0,0-9.11,3.3l-13.81,5.74-15.6,7.18-25.4,13.24a4.84,4.84,0,0,0-.62,9l22.06,15.49q7,5,13.55,10.76l6.21,5.35,13,11.37,5.89,5.2a10.15,10.15,0,0,0,12.95,0l25.39-22.18,13.6-10.77,22.06-15.79a4.8,4.8,0,0,0-.68-8.93l-25.36-12.8L244.84,323ZM387.4,175.2l.8-2.3a61.26,61.26,0,0,0-.57-9.18,73.51,73.51,0,0,0-8.19-15.44l-14.35-21.06-10.22-13.88-19.23-24a69.65,69.65,0,0,0-5.7-6.67h-.4L321,84.25l-42.27,8.14a33.49,33.49,0,0,1-12.59-1.84l-23.21-7.5-16.61-4.59a70.52,70.52,0,0,0-14.67,0L195,83.1l-23.21,7.54a33.89,33.89,0,0,1-12.59,1.84l-42.22-8-8.54-1.58h-.4a65.79,65.79,0,0,0-5.7,6.67l-19.2,24Q77.81,120.32,73,127.45L58.61,148.51l-6.78,11.31a51,51,0,0,0-1.94,13.35l.8,2.3A34.51,34.51,0,0,0,52,179.81l11.33,13,50.23,53.39a14.31,14.31,0,0,1,2.55,14.34L107.68,280a25.23,25.23,0,0,0-.39,16l1.64,4.52a43.58,43.58,0,0,0,13.39,18.76l7.89,6.43a15,15,0,0,0,14.35,1.72L172.62,314A70.38,70.38,0,0,0,187,304.52l22.46-20.27a9,9,0,0,0,3-6.36,9.08,9.08,0,0,0-2.5-6.56L159.2,237.18a9.83,9.83,0,0,1-3.09-12.45l19.66-36.95a19.21,19.21,0,0,0,1-14.67A22.37,22.37,0,0,0,165.58,163L103.94,139.8c-4.44-1.6-4.2-3.6.51-3.88l36.2-3.59a55.9,55.9,0,0,1,16.9,1.5l31.5,8.8a9.64,9.64,0,0,1,6.74,10.76L183.42,221a34.72,34.72,0,0,0-.61,11.41c.5,1.61,4.73,3.6,9.36,4.73l19.19,4a46.38,46.38,0,0,0,16.86,0l17.26-4c4.64-1,8.82-3.23,9.35-4.85a34.94,34.94,0,0,0-.63-11.4l-12.45-67.59a9.66,9.66,0,0,1,6.74-10.76l31.5-8.83a55.87,55.87,0,0,1,16.9-1.5l36.2,3.37c4.74.44,5,2.2.54,3.88L272,162.79a22.08,22.08,0,0,0-11.16,10.12,19.3,19.3,0,0,0,1,14.67l19.69,36.95A9.84,9.84,0,0,1,278.45,237l-50.66,34.23a9,9,0,0,0,.32,12.78l.15.14,22.49,20.27a71.46,71.46,0,0,0,14.35,9.47l28.06,13.35a14.89,14.89,0,0,0,14.34-1.76l7.9-6.45a43.53,43.53,0,0,0,13.38-18.8l1.65-4.52a25.27,25.27,0,0,0-.39-16l-8.26-19.49a14.4,14.4,0,0,1,2.55-14.35l50.23-53.45,11.3-13a35.8,35.8,0,0,0,1.54-4.24Z"})]}),displayName:"Brave Wallet",rdns:"com.brave.wallet"},cryptocom:{logo:({style:e,...t})=>(0,h.jsxs)("svg",{width:"400",height:"400",viewBox:"0 0 400 400",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M260.543 0C300.7 0 320.773 0 342.39 6.83333C365.99 15.4233 384.577 34.01 393.167 57.61C400 79.2233 400 99.3033 400 139.457V260.543C400 300.7 400 320.773 393.167 342.39C384.577 365.99 365.99 384.577 342.39 393.163C320.773 400 300.7 400 260.543 400H139.457C99.3 400 79.2233 400 57.61 393.163C34.01 384.577 15.4233 365.99 6.83333 342.39C0 320.773 0 300.7 0 260.543V139.457C0 99.3033 0 79.2233 6.83333 57.61C15.4233 34.01 34.01 15.4233 57.61 6.83333C79.2233 0 99.3 0 139.457 0H260.543Z",fill:"white"}),(0,h.jsx)("mask",{id:"mask0_16909_31415",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"400",height:"400",children:(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M260.543 0C300.7 0 320.773 0 342.39 6.83333C365.99 15.4233 384.577 34.01 393.167 57.61C400 79.2233 400 99.3033 400 139.457V260.543C400 300.7 400 320.773 393.167 342.39C384.577 365.99 365.99 384.577 342.39 393.163C320.773 400 300.7 400 260.543 400H139.457C99.3 400 79.2233 400 57.61 393.163C34.01 384.577 15.4233 365.99 6.83333 342.39C0 320.773 0 300.7 0 260.543V139.457C0 99.3033 0 79.2233 6.83333 57.61C15.4233 34.01 34.01 15.4233 57.61 6.83333C79.2233 0 99.3 0 139.457 0H260.543Z",fill:"white"})}),(0,h.jsxs)("g",{mask:"url(#mask0_16909_31415)",children:[(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M199.804 39.8501L59.3756 119.957V280.18L199.804 360.297L340.23 280.18V119.957L199.804 39.8501Z",fill:"#FEFEFE"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M199.804 39.8501L59.3756 119.957V280.18L199.804 360.297L340.23 280.18V119.957L199.804 39.8501ZM144.359 109.116H254.873L268.197 164.788H131.538L144.359 109.116ZM176.201 204.291L164.148 173.197H235.711L223.913 204.291L227.339 239.028L199.804 239.154H172.522L176.201 204.291ZM211.354 275.892V264.862L236.093 241.414V204.417L268.451 183.607L305.376 211.066L255.119 297.589H235.203L211.354 275.892ZM94.2395 211.066L131.282 183.857L164.021 204.417V241.414L188.76 264.862V275.892L164.913 297.84H144.734L94.2395 211.066Z",fill:"#002D72"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M255.12 297.589H235.202L211.355 275.892V264.862L236.094 241.414V204.417L268.45 183.607L305.377 211.066L255.12 297.589ZM199.803 39.8498V109.117H254.872L268.198 164.789H199.803V173.199H235.712L223.914 204.291L227.338 239.028L199.803 239.153V360.296L340.231 280.181V119.957L199.803 39.8498Z",fill:"url(#paint0_linear_16909_31415)",style:{mixBlendMode:"multiply"}}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M188.761 275.892L164.912 297.84H144.734L94.2389 211.066L131.283 183.858L164.022 204.417V241.414L188.761 264.862V275.892ZM172.522 239.153L176.2 204.291L164.149 173.199H199.803V164.789H131.537L144.36 109.117H199.803V39.8498L59.375 119.957V280.181L199.803 360.296V239.153H172.522Z",fill:"url(#paint1_linear_16909_31415)",style:{mixBlendMode:"multiply"}})]}),(0,h.jsxs)("defs",{children:[(0,h.jsxs)("linearGradient",{id:"paint0_linear_16909_31415",x1:"325.255",y1:"325.727",x2:"325.255",y2:"73.6291",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#002D72"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#002D72",stopOpacity:"0.01"})]}),(0,h.jsxs)("linearGradient",{id:"paint1_linear_16909_31415",x1:"184.827",y1:"325.727",x2:"184.827",y2:"73.6291",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#002D72",stopOpacity:"0.01"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#002D72"})]})]})]}),displayName:"Crypto.com DeFi Wallet"},uniswap:{logo:({style:e,...t})=>(0,h.jsxs)("svg",{width:"96",height:"96",viewBox:"0 0 96 96",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:24,width:24,...e},...t,children:[(0,h.jsx)("rect",{width:"96",height:"96",rx:"18",fill:"#FEF4FF"}),(0,h.jsxs)("g",{filter:"url(#filter0_d_12393_20043)",children:[(0,h.jsx)("path",{d:"M71.9367 18.39C72.0482 16.4526 72.3145 15.1746 72.8497 14.0075C73.0616 13.5456 73.2601 13.1675 73.2907 13.1675C73.3214 13.1675 73.2293 13.5085 73.086 13.9252C72.6969 15.0578 72.633 16.607 72.901 18.4094C73.2413 20.6963 73.4348 21.0263 75.8841 23.4967C77.0329 24.6554 78.3692 26.1168 78.8536 26.7443L79.7343 27.8851L78.8536 27.0698C77.7764 26.0728 75.2992 24.1283 74.7521 23.8503C74.3852 23.6639 74.3306 23.6671 74.1043 23.8894C73.8958 24.0943 73.8519 24.4021 73.8229 25.8572C73.7778 28.125 73.4646 29.5807 72.7087 31.0362C72.2998 31.8234 72.2354 31.6554 72.6053 30.7668C72.8816 30.1034 72.9096 29.8117 72.9076 27.6163C72.9033 23.2052 72.3727 22.1447 69.2607 20.3281C68.4724 19.8678 67.1734 19.2041 66.3742 18.8531C65.575 18.502 64.9401 18.1962 64.9633 18.1734C65.0514 18.0868 68.0863 18.961 69.3077 19.4247C71.1247 20.1145 71.4247 20.2039 71.6454 20.1207C71.7933 20.0649 71.8648 19.6398 71.9367 18.39Z",fill:"#F50DB4"}),(0,h.jsx)("path",{d:"M33.5466 11.9727C32.4688 11.808 32.4233 11.7887 32.9306 11.7119C33.9026 11.5647 36.1979 11.7653 37.7796 12.1358C41.4722 13.0004 44.8322 15.2153 48.4188 19.1488L49.3717 20.1938L50.7348 19.978C56.4773 19.0689 62.3192 19.7914 67.2054 22.0148C68.5495 22.6265 70.6689 23.8441 70.9337 24.157C71.018 24.2568 71.173 24.8987 71.2779 25.5837C71.6408 27.9534 71.4591 29.7699 70.7234 31.1265C70.3229 31.8648 70.3006 32.0988 70.5698 32.7306C70.7847 33.2348 71.3838 33.608 71.9771 33.6072C73.1913 33.6056 74.4983 31.6721 75.1038 28.9818L75.3443 27.9131L75.8209 28.4448C78.4346 31.3619 80.4876 35.34 80.8403 38.1716L80.9321 38.9099L80.4928 38.2387C79.7366 37.0838 78.9769 36.2976 78.0041 35.6635C76.2504 34.5205 74.3961 34.1315 69.4853 33.8766C65.0501 33.6464 62.5399 33.2732 60.0509 32.4737C55.816 31.1137 53.6812 29.3023 48.6508 22.8012C46.4164 19.9135 45.0354 18.3159 43.6616 17.0293C40.5401 14.1058 37.4729 12.5726 33.5466 11.9727Z",fill:"#F50DB4"}),(0,h.jsx)("path",{d:"M35.6404 25.9564C33.4522 22.9889 32.0983 18.4391 32.3914 15.0379L32.482 13.9854L32.9801 14.0749C33.9155 14.243 35.5283 14.8343 36.2835 15.2861C38.3559 16.5259 39.253 18.1582 40.1658 22.3496C40.4332 23.5773 40.7839 24.9666 40.9454 25.437C41.2052 26.194 42.1871 27.9624 42.9854 29.1109C43.5605 29.938 43.1785 30.33 41.9074 30.217C39.9662 30.0444 37.3367 28.2568 35.6404 25.9564Z",fill:"#F50DB4"}),(0,h.jsx)("path",{d:"M69.2799 48.0419C59.0538 43.9862 55.4521 40.4658 55.4521 34.5259C55.4521 33.6517 55.4827 32.9365 55.5199 32.9365C55.5572 32.9365 55.9528 33.225 56.3991 33.5776C58.4728 35.216 60.7949 35.9157 67.2233 36.8395C71.0061 37.3831 73.1349 37.8222 75.0986 38.4637C81.3402 40.5027 85.2018 44.6406 86.1227 50.2766C86.3903 51.9143 86.2334 54.9854 85.7995 56.6039C85.457 57.8824 84.4118 60.1868 84.1346 60.2751C84.0578 60.2996 83.9824 60.0094 83.9626 59.6147C83.8575 57.4983 82.7718 55.438 80.9485 53.8946C78.8754 52.1399 76.0901 50.7428 69.2799 48.0419Z",fill:"#F50DB4"}),(0,h.jsx)("path",{d:"M62.1008 49.7268C61.9727 48.9758 61.7505 48.0167 61.607 47.5954L61.3461 46.8296L61.8307 47.3655C62.5014 48.107 63.0314 49.0559 63.4806 50.3197C63.8234 51.2843 63.862 51.5711 63.8594 53.1386C63.8568 54.6774 63.814 55 63.4974 55.8682C62.9983 57.2373 62.3788 58.208 61.3392 59.2501C59.4712 61.1228 57.0696 62.1596 53.6039 62.5896C53.0015 62.6643 51.2456 62.7902 49.7019 62.8693C45.8118 63.0686 43.2515 63.4803 40.9508 64.276C40.6201 64.3905 40.3247 64.4601 40.2948 64.4305C40.2017 64.3393 41.768 63.4195 43.0618 62.8056C44.8862 61.94 46.7021 61.4676 50.7709 60.8002C52.7809 60.4704 54.8566 60.0704 55.3837 59.9112C60.3612 58.4079 62.9197 54.5286 62.1008 49.7268Z",fill:"#F50DB4"}),(0,h.jsx)("path",{d:"M66.7886 57.9275C65.4299 55.0505 65.1179 52.2726 65.8623 49.6821C65.942 49.4053 66.07 49.1787 66.1471 49.1787C66.224 49.1787 66.5447 49.3495 66.8594 49.5581C67.4855 49.9732 68.7412 50.6725 72.0866 52.4692C76.2612 54.7111 78.6414 56.4472 80.2599 58.4306C81.6775 60.1677 82.5547 62.1459 82.9769 64.5583C83.2159 65.9248 83.0759 69.2128 82.7199 70.5889C81.5975 74.9275 78.9889 78.3356 75.2682 80.3242C74.7231 80.6155 74.2337 80.8547 74.1807 80.8558C74.1278 80.8569 74.3264 80.3594 74.6222 79.7503C75.8738 77.173 76.0163 74.6661 75.07 71.8756C74.4906 70.1671 73.3092 68.0823 70.924 64.5588C68.1507 60.4623 67.4708 59.3721 66.7886 57.9275Z",fill:"#F50DB4"}),(0,h.jsx)("path",{d:"M28.3782 73.4506C32.173 70.2943 36.8948 68.0521 41.1958 67.3639C43.0494 67.0672 46.1372 67.185 47.8537 67.6178C50.605 68.3113 53.0662 69.8648 54.3462 71.7156C55.5971 73.5245 56.1338 75.1008 56.6925 78.6081C56.913 79.9916 57.1527 81.3809 57.2252 81.6954C57.6449 83.5131 58.4614 84.966 59.4733 85.6957C61.0805 86.8544 63.8479 86.9265 66.5704 85.8804C67.0325 85.7028 67.4336 85.5801 67.4618 85.6078C67.5605 85.7044 66.1896 86.6083 65.2225 87.0842C63.9212 87.7245 62.8864 87.972 61.5115 87.972C59.0181 87.972 56.948 86.7226 55.2206 84.175C54.8807 83.6736 54.1167 82.1718 53.5228 80.8378C51.699 76.7403 50.7984 75.4921 48.6809 74.126C46.8381 72.9374 44.4615 72.7245 42.6736 73.588C40.325 74.7223 39.6698 77.6786 41.3518 79.5521C42.0204 80.2967 43.2671 80.939 44.2865 81.0638C46.1936 81.2975 47.8326 79.8684 47.8326 77.9717C47.8326 76.7402 47.352 76.0374 46.1423 75.4996C44.4901 74.7652 42.7141 75.6237 42.7226 77.1526C42.7263 77.8045 43.0145 78.214 43.6779 78.5097C44.1036 78.6994 44.1134 78.7144 43.7664 78.6434C42.2504 78.3337 41.8952 76.5335 43.1141 75.3383C44.5776 73.9036 47.6037 74.5367 48.6428 76.4951C49.0794 77.3177 49.1301 78.956 48.7495 79.9452C47.8976 82.1593 45.4138 83.3237 42.8941 82.6901C41.1787 82.2587 40.4801 81.7915 38.4119 79.6931C34.8179 76.0462 33.4226 75.3396 28.2413 74.5428L27.2484 74.3902L28.3782 73.4506Z",fill:"#F50DB4"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.5147 8.18128C23.517 22.5305 31.7835 28.4507 32.7022 29.7015C33.4607 30.7343 33.1752 31.6628 31.8758 32.3905C31.1532 32.7951 29.6676 33.205 28.9238 33.205C28.0825 33.205 27.7936 32.8853 27.7936 32.8853C27.3058 32.4296 27.0311 32.5093 24.5261 28.1293C21.0483 22.8137 18.1379 18.4041 18.0585 18.3303C17.8749 18.1596 17.878 18.1653 24.1715 29.2574C25.1883 31.5693 24.3737 32.4179 24.3737 32.7471C24.3737 33.417 24.1882 33.7691 23.3494 34.6907C21.951 36.2274 21.3259 37.954 20.8746 41.5274C20.3687 45.5332 18.9462 48.3629 15.0041 53.2057C12.6965 56.0406 12.3189 56.5602 11.7366 57.7028C11.0032 59.1416 10.8015 59.9475 10.7198 61.7645C10.6334 63.6855 10.8016 64.9265 11.3975 66.7632C11.9191 68.3712 12.4636 69.433 13.8555 71.5567C15.0568 73.3894 15.7484 74.7513 15.7484 75.2841C15.7484 75.708 15.8306 75.7085 17.692 75.2945C22.1466 74.3036 25.7638 72.5609 27.7981 70.4252C29.0571 69.1033 29.3527 68.3733 29.3623 66.5619C29.3686 65.377 29.3263 65.1289 29.0011 64.4473C28.4718 63.3379 27.5083 62.4154 25.3845 60.9853C22.6019 59.1115 21.4133 57.603 21.085 55.5285C20.8157 53.8263 21.1282 52.6253 22.6676 49.4472C24.2609 46.1575 24.6558 44.7557 24.9229 41.4399C25.0954 39.2977 25.3343 38.4528 25.9591 37.7747C26.6108 37.0676 27.1975 36.8281 28.8103 36.611C31.4396 36.2572 33.1139 35.5871 34.4901 34.3379C35.6839 33.2543 36.1835 32.2101 36.2602 30.6382L36.3184 29.4468L35.6512 28.6806C33.2352 25.9057 9.89667 6 9.74799 6C9.71623 6 10.5113 6.98164 11.5147 8.18128ZM17.1047 63.9381C17.6509 62.9852 17.3607 61.7601 16.447 61.1617C15.5836 60.5962 14.2424 60.8625 14.2424 61.5994C14.2424 61.8243 14.3687 61.9879 14.6532 62.1322C15.1322 62.375 15.167 62.648 14.7901 63.2061C14.4084 63.7712 14.4392 64.2681 14.877 64.6057C15.5826 65.15 16.5815 64.8507 17.1047 63.9381Z",fill:"#F50DB4"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.9777 37.236C36.7433 37.6095 35.5435 38.8981 35.172 40.2493C34.9454 41.0736 35.074 42.5196 35.4134 42.9662C35.9617 43.6874 36.492 43.8774 37.9277 43.8675C40.7388 43.8482 43.1825 42.6606 43.4666 41.176C43.6994 39.9591 42.6262 38.2726 41.1478 37.5321C40.385 37.1502 38.7626 36.9987 37.9777 37.236ZM41.2638 39.7671C41.6973 39.1604 41.5076 38.5047 40.7704 38.0611C39.3664 37.2167 37.2432 37.9155 37.2432 39.222C37.2432 39.8724 38.3504 40.5819 39.3653 40.5819C40.0408 40.5819 40.9652 40.1851 41.2638 39.7671Z",fill:"#F50DB4"})]})]}),displayName:"Uniswap Wallet",rdns:"org.uniswap.app"},okx_wallet:{displayName:"OKX Wallet",rdns:"com.okex.wallet",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgB7Zq9jtpAEMfHlhEgQLiioXEkoAGECwoKxMcTRHmC5E3IoyRPkPAEkI7unJYmTgEFTYwA8a3NTKScLnCHN6c9r1e3P2llWQy7M/s1Gv1twCP0ej37dDq9x+Zut1t3t9vZjDEHIiSRSPg4ZpDL5fxkMvn1cDh8m0wmfugfO53OoFQq/crn8wxfY9EymQyrVCqMfHvScZx1p9ls3pFxXBy/bKlUipGPrVbLuQqAfsCliq3zl0H84zwtjQrOw4Mt1W63P5LvBm2d+Xz+YzqdgkqUy+WgWCy+Mc/nc282m4FqLBYL+3g8fjDxenq72WxANZbLJeA13zDX67UDioL5ybXwafMYu64Ltn3bdDweQ5R97fd7GyhBQMipx4POeEDHIu2LfDdBIGGz+hJ9CQ1ABjoA2egAZPM6AgiCAEQhsi/C4jHyPA/6/f5NG3Ks2+3CYDC4aTccDrn6ojG54MnEvG00GoVmWLIRNZ7wTCwDHYBsdACy0QHIhiuRETxlICWpMMhGZHmqS8qH6JLyGegAZKMDkI0uKf8X4SWlaZo+Pp1bRrwlJU8ZKLIvUjKh0WiQ3sRUbNVq9c5Ebew7KEo2m/1p4jJ4qAmDaqDQBzj5XyiAT4VCQezJigAU+IDU+z8vJFnGWeC+bKQV/5VZ71FV6L7PA3gg3tXrdQ+DgLhC+75Wq3no69P3MC0NFQpx2lL04Ql9gHK1bRDjsSBIvScBnDTk1WrlGIZBorIDEYJj+rhdgnQ67VmWRe0zlplXl81vcyEt0rSoYDUAAAAASUVORK5CYII="},rabby_wallet:{logo:e=>(0,h.jsxs)("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,h.jsx)("rect",{width:"52",height:"52",rx:"26",fill:"#7084FF"}),(0,h.jsx)("path",{d:"M43.6781 28.2954C45.1053 25.0988 38.0498 16.168 31.3094 12.4472C27.0608 9.56481 22.6337 9.96081 21.737 11.2264C19.7693 14.0039 28.2527 16.3574 33.9263 19.1037C32.7067 19.6348 31.5574 20.5879 30.8816 21.8067C28.7664 19.4915 24.1239 17.4977 18.6765 19.1037C15.0056 20.186 11.9547 22.7374 10.7756 26.5911C10.4891 26.4635 10.1719 26.3925 9.83814 26.3925C8.56192 26.3925 7.52734 27.4298 7.52734 28.7094C7.52734 29.989 8.56192 31.0263 9.83814 31.0263C10.0747 31.0263 10.8143 30.8672 10.8143 30.8672L22.6337 30.953C17.9068 38.4713 14.1713 39.5704 14.1713 40.8729C14.1713 42.1754 17.7455 41.8224 19.0876 41.3369C25.5121 39.0127 32.4123 31.7692 33.5964 29.6841C38.5688 30.3061 42.7476 30.3796 43.6781 28.2954Z",fill:"url(#paint0_linear_81034_11443)"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.8741 19.076C33.8926 19.084 33.911 19.092 33.9294 19.1001C34.1923 18.9962 34.1498 18.6068 34.0776 18.301C33.9116 17.5981 31.0479 14.7629 28.3588 13.493C24.6934 11.762 21.9946 11.8518 21.5972 12.65C22.3407 14.1849 25.8031 15.6258 29.4193 17.1308C30.9407 17.7639 32.4893 18.4084 33.8741 19.076Z",fill:"url(#paint1_linear_81034_11443)"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M29.272 34.5374C28.5323 34.2543 27.697 33.9945 26.7477 33.7587C27.7625 31.9382 27.9754 29.2432 27.0171 27.5392C25.6721 25.1478 23.9838 23.875 20.0605 23.875C17.9027 23.875 12.093 24.6037 11.9899 29.4663C11.9791 29.9743 11.9895 30.44 12.026 30.8685L22.6335 30.9456C21.2017 33.2229 19.8609 34.9113 18.6873 36.1947C20.0979 36.5571 21.2615 36.8612 22.3297 37.1404C23.3394 37.4043 24.2638 37.646 25.2309 37.8934C26.6941 36.8249 28.0698 35.6597 29.272 34.5374Z",fill:"url(#paint2_linear_81034_11443)"}),(0,h.jsx)("path",{d:"M10.6324 30.3712C11.0658 34.065 13.1596 35.5127 17.4381 35.9411C21.7166 36.3695 24.1708 36.0821 27.4381 36.3801C30.167 36.6291 32.6036 38.0233 33.5075 37.5415C34.321 37.1079 33.8659 35.5412 32.7774 34.5361C31.3663 33.2333 29.4135 32.3274 25.9773 32.006C26.6621 30.1261 26.4702 27.4903 25.4067 26.0562C23.8689 23.9827 21.0305 23.0453 17.4381 23.4549C13.6848 23.8828 10.0885 25.7354 10.6324 30.3712Z",fill:"url(#paint3_linear_81034_11443)"}),(0,h.jsxs)("defs",{children:[(0,h.jsxs)("linearGradient",{id:"paint0_linear_81034_11443",x1:"18.249",y1:"25.4646",x2:"43.3806",y2:"32.5728",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"white"}),(0,h.jsx)("stop",{offset:"1",stopColor:"white"})]}),(0,h.jsxs)("linearGradient",{id:"paint1_linear_81034_11443",x1:"39.1432",y1:"24.9813",x2:"20.9691",y2:"6.81008",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#8697FF"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#8697FF",stopOpacity:"0"})]}),(0,h.jsxs)("linearGradient",{id:"paint2_linear_81034_11443",x1:"29.7761",y1:"35.1727",x2:"12.345",y2:"25.1792",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#8697FF"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#8697FF",stopOpacity:"0"})]}),(0,h.jsxs)("linearGradient",{id:"paint3_linear_81034_11443",x1:"19.7472",y1:"25.2716",x2:"31.5549",y2:"40.2352",gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"white"}),(0,h.jsx)("stop",{offset:"0.983895",stopColor:"#D1D8FF"})]})]})]}),displayName:"Rabby Wallet",rdns:"io.rabby.wallet"}},aw=({provider:e,displayName:t,logo:r,connectOnly:i,connector:n})=>{let{navigate:a}=ig(),{connectWallet:o}=iD(),l="wallet_connect_v2"===n.connectorType?e:n.walletClientType,c;return c="phantom"===n.connectorType?()=>{te()?(o(n,l),a(i?"AWAITING_CONNECT_ONLY_CONNECTION":"AWAITING_CONNECTION")):a(s.tq?"PHANTOM_INTERSTITIAL_SCREEN":"INSTALL_PHANTOM_SCREEN")}:"coinbase_wallet"===n.connectorType&&"eoaOnly"===n.connectionOptions&&s.tq&&!tt()?()=>{window.location.href=`https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`}:()=>{o(n,l),a(i?"AWAITING_CONNECT_ONLY_CONNECTION":"AWAITING_CONNECTION")},(0,h.jsxs)(ab,{onClick:c,children:[(0,h.jsx)(aC,{icon:av(e,n.connectorType,n.walletClientType)??r,name:n.walletClientType}),(0,h.jsx)("span",{children:ax(e,n.connectorType,n.walletClientType)||t||n.walletClientType}),(0,h.jsx)("span",{id:"connect-text",children:"Connect"})]})},ax=(e,t,r)=>ay[e]?.displayName?"coinbase_wallet"===e?ay[r].displayName:ay[e].displayName:"wallet_connect_v2"===t&&"wallet_connect"===e?"Wallet Connect":void 0,av=(e,t,r)=>ay[e]?.logo?"coinbase_wallet"===e?ay[r].logo:ay[e].logo:"wallet_connect_v2"===t&&"wallet_connect"===e?iy:void 0,aC=({icon:e,name:t})=>"string"==typeof e?(0,h.jsx)("img",{alt:`${t||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):e?(0,h.jsx)(e,{}):null,ab=(0,_.ZP)(nE)`
  /* Show "Connect" on hover */
  > #connect-text {
    font-weight: 500;
    text-align: right;
    flex: none;
    order: 2;
    flex-grow: 1;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #connect-text {
      display: none;
    }
  }
`,a_=["coinbase_wallet"],aj=["metamask","okx_wallet","rainbow","uniswap","zerion","rabby_wallet"],ak=["cryptocom"],aE=["phantom"],aA=({connectOnly:e})=>{let{connectors:t}=iD(),{app:r}=ig(),i=aS(r.appearance.walletList,t,e,r.appearance.walletList);return(0,h.jsxs)(h.Fragment,{children:[...i]})},aS=(e,t,r,i)=>{let n=[],a=[],o=[],s=t.find(e=>"wallet_connect_v2"===e.connectorType);for(let l of e)if("detected_wallets"===l)for(let e of t.filter(({connectorType:e,walletClientType:t})=>"uniswap_wallet_extension"===t?!i.includes("uniswap"):"injected"===e&&!i.includes(t))){let{walletClientType:t,walletBranding:i}=e;("unknown"===t?a:n).push((0,h.jsx)(aw,{connectOnly:r,provider:t,logo:i.icon,displayName:i.name,connector:e},`${l}-${t}`))}else if(aE.includes(l)){let e=t.find(e=>"injected"===e.connectorType&&e.walletClientType===l||e.connectorType===l);e&&n.push((0,h.jsx)(aw,{connectOnly:r,provider:l,connector:e},l))}else if(aj.includes(l)){let e=t.find(e=>"uniswap"===l?"uniswap_wallet_extension"===e.walletClientType:"injected"===e.connectorType&&e.walletClientType===l)??s;e&&n.push((0,h.jsx)(aw,{connectOnly:r,provider:l,connector:e},l))}else if(a_.includes(l)){let e=t.find(({connectorType:e})=>e===l);e&&n.push((0,h.jsx)(aw,{connectOnly:r,provider:l,connector:e},l))}else ak.includes(l)?s&&o.push((0,h.jsx)(aw,{connectOnly:r,provider:l,connector:s},l)):"wallet_connect"===l&&s&&o.push((0,h.jsx)(aw,{connectOnly:r,provider:l,connector:s},l));return[...a,...n,...o]},aT=()=>{let{app:e}=ig(),t=e?.appearance?.logo,r=`${e?.name} logo`,i={maxHeight:"90px",maxWidth:"180px"};return t?"string"==typeof t?(0,h.jsx)("img",{src:t,alt:r,style:i}):"svg"===t.type||"img"===t.type?o.cloneElement(t,{alt:r,style:i}):(console.warn("`config.appearance.logo` must be a string, or an SVG / IMG element. Nothing will be rendered."),null):null},aP=e=>{let{app:t}=ig();return t?.appearance.logo?(0,h.jsx)(aR,{...e,children:(0,h.jsx)(aT,{})}):null},aR=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  flex-grow: 1;
  justify-content: center;
`,aN=(0,_.ZP)(aP)`
  margin-bottom: 16px;
`,aO=(e,t)=>{let r=(0,o.useRef)(()=>{});(0,o.useEffect)(()=>{r.current=e}),(0,o.useEffect)(()=>{if(null!==t){let e=setInterval(()=>r.current(),t||0);return()=>clearInterval(e)}},[t])},aI=e=>e?.privyErrorCode==="linked_to_another_user"?rv.ERROR_USER_EXISTS:e instanceof rw&&!e.details.default?e.details:e instanceof rm?rv.ERROR_TIMED_OUT:e instanceof rf?rv.ERROR_USER_REJECTED_CONNECTION:rv.ERROR_WALLET_CONNECTION,aM=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,aL=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`,aW=e=>{let t=e.walletLogo;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(aL,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:e.success,fail:e.fail}),"string"==typeof t?(0,h.jsx)("span",{style:{background:`url('${t}')`,height:"38px",width:"38px",borderRadius:"6px",margin:"auto",backgroundSize:"cover"}}):(0,h.jsx)(t,{style:{width:"38px",height:"38px"}})]})})})},aF=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,aU=({name:e,logoUrl:t})=>{let r=`${e??"Provider app"} logo`;return"string"==typeof t?(0,h.jsx)("img",{src:t,alt:r,style:{width:"38px",height:"38px",maxHeight:"90px",maxWidth:"180px"}}):(0,h.jsx)("span",{})},aD=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,aZ=()=>(0,h.jsx)(az,{children:(0,h.jsxs)(aH,{children:[(0,h.jsx)(a$,{}),(0,h.jsx)(aB,{})]})}),az=_.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  margin: 12px;
  padding: 16px;

  @media all and (display-mode: standalone) {
    margin-bottom: 30px;
  }
`,aH=_.ZP.div`
  position: relative;
  height: 140px;
  width: 140px;

  opacity: 1;
  animation: fadein 200ms ease;
`,a$=_.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 140px;
  height: 140px;

  && {
    border: 4px solid var(--privy-color-accent-light);
    border-radius: 50%;
  }
`,aB=_.ZP.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 140px;
  height: 140px;
  animation: spin 1200ms linear infinite;

  && {
    border: 4px solid;
    border-color: var(--privy-color-accent) transparent transparent transparent;
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
`,aV=["error","invalid_request_arguments","wallet_not_on_device","invalid_recovery_pin","insufficient_funds","missing_or_invalid_mfa","mfa_verification_max_attempts_reached","mfa_timeout","twilio_verification_failed"],aq=class extends Error{constructor(e,t){super(t),this.type=e}};function aG(e){let t=e.type;return"string"==typeof t&&aV.includes(t)}function aK(e){return aG(e)&&"wallet_not_on_device"===e.type}function aY(e){return!!(aG(e)&&"mfa_timeout"===e.type)}function aQ(e){return!!(aG(e)&&"missing_or_invalid_mfa"===e.type)}function aJ(e){return!!(aG(e)&&e.message.includes("code 429"))}function aX(e){let t;return!!("string"==typeof(t=e.type)&&"client_error"===t&&"MFA canceled"===e.message)}function a0({isCreatingWallet:e,skipSplashScreen:t}){return e?"EMBEDDED_WALLET_PASSWORD_CREATE_SCREEN":t?"EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN":"EMBEDDED_WALLET_PASSWORD_UPDATE_SPLASH_SCREEN"}function a1({walletAction:e,availableRecoveryMethods:t,legacySetWalletPasswordFlow:r=!1,isResettingPassword:i=!1}){return r||1===t.length?a0({isCreatingWallet:"create"===e,skipSplashScreen:i}):"EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN"}function a2(e){switch(e){case"user-passcode":return"EMBEDDED_WALLET_PASSWORD_RECOVERY_SCREEN";case"google-drive":case"icloud":return"EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN";default:throw Error("Recovery method not supported")}}async function a3({api:e,provider:t}){let r=tH(),i=tH(),n=await t$(r);try{return"icloud"===t?{url:(await e.post("/api/v1/recovery/oauth/init_icloud",{client_type:"web"})).url}:{url:(await e.post("/api/v1/recovery/oauth/init",{redirect_to:window.location.href,code_challenge:n,state_code:i})).url,codeVerifier:r,stateCode:i,provider:t}}catch(e){throw eH(e)}}async function a4({api:e,provider:t,stateCode:r,codeVerifier:i,authorizationCode:n}){if(!n||!r)throw new eD("[OAuth AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");if("undefined"===n)throw new eD("User denied confirmation during OAuth flow");try{return(await e.post("/api/v1/recovery/oauth/authenticate",{authorization_code:n,state_code:r,code_verifier:i,provider:t})).access_token}catch(t){let e=eH(t);throw e.privyErrorCode?new eD(e.message||"Invalid code during OAuth flow.",void 0,e.privyErrorCode):"User denied confirmation during OAuth flow"===e.message?new eD("Invalid code during oauth flow.",void 0,"oauth_user_denied"):new eD("Invalid code during OAuth flow.",void 0,"unknown_auth_error")}}var a5=_.ZP.div`
  height: 44px;
`;function a6(e){let[t,r]=(0,o.useState)(e.dimensions.width),[i,n]=(0,o.useState)(void 0),a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(a.current&&void 0===t){let{width:e}=a.current.getBoundingClientRect();r(e)}let e=getComputedStyle(document.documentElement);n({background2:e.getPropertyValue("--privy-color-background-2"),foreground3:e.getPropertyValue("--privy-color-foreground-3"),foregroundAccent:e.getPropertyValue("--privy-color-foreground-accent"),accent:e.getPropertyValue("--privy-color-accent"),accentDark:e.getPropertyValue("--privy-color-accent-dark"),success:e.getPropertyValue("--privy-color-success")})},[]),(0,h.jsx)("div",{ref:a,children:t&&(0,h.jsxs)(or,{children:[(0,h.jsx)("iframe",{style:{position:"absolute",zIndex:1},width:t,height:e.dimensions.height,allow:"clipboard-write self *",src:tl(e.origin,`/apps/${e.appId}/embedded-wallets/export`,{client_id:e.appClientId,address:e.address,width:`${t}px`,caid:e.clientAnalyticsId,...i},{token:e.accessToken})}),(0,h.jsx)(oi,{children:"Loading..."})]})})}function a7(e){return(0,h.jsx)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e.style,children:(0,h.jsx)("path",{d:"M14 8.81335C14 7.98493 13.3284 7.31335 12.5 7.31335H10C10 8.41792 9.10457 9.31335 8 9.31335C6.89543 9.31335 6 8.41792 6 7.31335H3.5C2.67157 7.31335 2 7.98493 2 8.81335M14 8.81335V12.8134C14 13.6418 13.3284 14.3134 12.5 14.3134H3.5C2.67157 14.3134 2 13.6418 2 12.8134V8.81335M14 8.81335V6.81335M2 8.81335V6.81335M14 6.81335C14 5.98493 13.3284 5.31335 12.5 5.31335H3.5C2.67157 5.31335 2 5.98493 2 6.81335M14 6.81335V4.81335C14 3.98493 13.3284 3.31335 12.5 3.31335H3.5C2.67157 3.31335 2 3.98493 2 4.81335V6.81335",stroke:"var(--privy-color-foreground-3)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}var a8=_.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`,a9=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 16px;
  margin-left: 11px;
  border-left: 1px solid var(--privy-color-foreground-4) !important;
`,oe=_.ZP.div`
  display: flex;
  align-items: top;
  gap: 8px;

  && a {
    color: var(--privy-color-accent);
    text-decoration: underline;
  }
`,ot=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -12px;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border: 1px solid var(--privy-color-foreground-4) !important;
  font-size: 12px;
  font-weight: 900;
  border-radius: 100%;
  background: var(--privy-color-background);
  color: var(--privy-color-accent);
`,or=_.ZP.div`
  overflow: visible;
  position: relative;
  height: 44px;
`,oi=_.ZP.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
`,on=_.ZP.div`
  display: flex;
  align-items: center;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 8px;
  padding-right: 8px;
  background-color: var(--privy-color-background-2);
  color: var(--privy-color-foreground-3);
  border-radius: var(--privy-border-radius-md);
  font-size: 12px;
  font-weight: 500;
  margin: auto;
`,oa=_.ZP.div`
  border: 1px solid var(--privy-color-background-2) !important;
  border-radius: var(--privy-border-radius-md);
  padding: 16px;
  padding-top: 24px;
  margin-top: -12px;

  && > div {
    display: inline-flex;
    align-items: center;
    gap: 2px;

    > svg {
      color: var(--privy-color-error);
      width: 14px;
      height: 14px;
    }

    > h4 {
      color: var(--privy-color-error);
    }
  }
`;function oo(){let{refreshUser:e,createAnalyticsEvent:t,initializeWalletProxy:r}=iD(),i=(0,o.useRef)(!1);return{createWallet:(0,o.useCallback)(async n=>{let a=await h3();if(!a)throw t({eventName:"embedded_wallet_creation_failed",payload:{error:"Missing access token for user."}}),Error("An error has occured, please login again.");try{t({eventName:"embedded_wallet_creation_started"});let o=await r(3e4);if(!o)throw Error("walletProxy does not exist.");let s=new Promise((e,t)=>{setTimeout(()=>{t(Error("walletProxy.create timed out."))},1e4)});if(!await Promise.race([o.create({accessToken:a,recoveryPassword:n}),s]))throw Error("walletProxy.create did not send a response.");let l=await e();if(!l)throw Error("Failed to refresh user.");let c=ri(l);if(!c)throw Error("Updated user is missing embedded wallet.");return t({eventName:"embedded_wallet_creation_completed",payload:{walletAddress:c.address}}),i.current=!0,c}catch(e){if(i.current)return;throw t({eventName:"embedded_wallet_creation_failed",payload:{error:e.toString()}}),console.warn(e),e}},[])}}var os=_.ZP.div`
  height: 44px;
`,ol=(0,_.iv)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;
  text-align: left;
  transition: color 0.1s ease-in;
`,oc=_.ZP.span`
  ${ol}
  transition: color 0.1s ease-in;
  color: ${({error:e})=>e?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  text-transform: ${({error:e})=>e?"":"capitalize"};

  &[aria-hidden='true'] {
    visibility: hidden;
  }
`,od=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`,oh=(0,_.ZP)(i2)`
  ${e=>e.hideAnimations&&(0,_.iv)`
      && {
        transition: none;
      }
    `}
`,op=(0,_.iv)`
  && {
    width: 100%;
    border-width: 1px;
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    background: var(--privy-color-background);
    color: var(--privy-color-foreground);

    padding: 12px;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px; /* 137.5% */
  }
`,ou=_.ZP.input`
  ${op}

  &::placeholder {
    color: var(--privy-color-foreground-3);
    font-style: italic;
    font-size: 14px;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,om=_.ZP.div`
  ${op}
`,of=_.ZP.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({centered:e})=>e?"center":"space-between"};
`,og=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  gap: 4px;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,oy=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 1rem;
`,ow=_.ZP.div`
  display: flex;
  text-align: left;
  align-items: center;

  gap: 8px;
  max-width: 300px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.008px;

  margin: 0 8px;
  color: var(--privy-color-foreground-2);

  > :first-child {
    min-width: 24px;
  }
`,ox=(_.ZP.div`
  height: var(--privy-height-modal-full);

  @media (max-width: 440px) {
    height: var(--privy-height-modal-compact);
  }
`,(0,_.ZP)(i1)`
  display: flex;
  flex: 1;
  gap: 4px;
  justify-content: center;

  && {
    background: var(--privy-color-background);
    border-radius: var(--privy-border-radius-md);
    border-color: var(--privy-color-foreground-3);
    border-width: 1px;
  }
`),ov=_.ZP.div`
  position: absolute;
  right: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`,oC=(0,_.ZP)(F.Z)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,ob=(0,_.ZP)(D.Z)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,o_=(0,_.ZP)(U.Z)`
  height: 1.25rem;
  width: 1.25rem;
  stroke: var(--privy-color-accent);
  cursor: pointer;

  :active {
    stroke: var(--privy-color-accent-light);
  }
`,oj=_.ZP.progress`
  height: 4px;
  width: 100%;
  margin: 8px 0;

  /* border-radius: 9999px; */
  ::-webkit-progress-bar {
    border-radius: 8px;
    background: var(--privy-color-foreground-4);
  }

  ::-webkit-progress-value {
    border-radius: 8px;
    transition: all 0.1s ease-out;
    background: ${({label:e})=>"Strong"===e&&"#78dca6"||"Medium"===e&&"var(--privy-color-warn)"||"var(--privy-color-error)"};
  }
`,ok=({buttonHideAnimations:e,buttonLoading:t,password:r,onSubmit:i,onBack:n})=>{let[a,s]=(0,o.useState)(!0),[l,c]=(0,o.useState)(!1),[d,p]=(0,o.useState)(""),u=r===d;return(0,o.useEffect)(()=>{d&&!l&&c(!0)},[d]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{closeable:!1,backFn:n}),(0,h.jsx)(n7,{}),(0,h.jsxs)(od,{children:[(0,h.jsxs)(og,{children:[(0,h.jsx)(W.Z,{height:48,width:48,stroke:"var(--privy-color-background)",fill:"var(--privy-color-accent)"}),(0,h.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Confirm your password"}),(0,h.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Please re-enter your password below to continue."})]}),(0,h.jsxs)(of,{children:[(0,h.jsx)(ou,{value:d,onChange:e=>p(e.target.value),onBlur:()=>c(!0),placeholder:"confirm your password",type:a?"password":"text",style:{paddingRight:"2.3rem"}}),(0,h.jsx)(ov,{style:{right:"0.75rem"},children:a?(0,h.jsx)(ob,{onClick:()=>s(!1)}):(0,h.jsx)(o_,{onClick:()=>s(!0)})})]}),(0,h.jsx)(oc,{"aria-hidden":!l||u,error:!0,children:"Passwords do not match"})]}),(0,h.jsx)(oh,{onClick:i,loading:t,disabled:!u,hideAnimations:e,children:"Continue"}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},oE=({className:e,checked:t,color:r="var(--privy-color-accent)",...i})=>(0,h.jsx)("label",{children:(0,h.jsxs)(oA,{className:e,children:[(0,h.jsx)(oT,{checked:t,...i}),(0,h.jsx)(oP,{color:r,checked:t,children:(0,h.jsx)(oS,{viewBox:"0 0 24 24",children:(0,h.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})});_.ZP.label`
  && {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`;var oA=_.ZP.div`
  display: inline-block;
  vertical-align: middle;
`,oS=_.ZP.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,oT=_.ZP.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,oP=_.ZP.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  cursor: pointer;
  border-color: ${e=>e.color};
  border-radius: 3px;
  background: ${e=>e.checked?e.color:"var(--privy-color-background)"};

  && {
    /* This is necessary to override css reset for border width */
    border-width: 1px;
  }

  ${oT}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${oS} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`,oR=({buttonHideAnimations:e,buttonLoading:t,onSubmit:r,onBack:i,config:n})=>{let[a,s]=(0,o.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{closeable:!1,backFn:i}),(0,h.jsx)(n7,{}),(0,h.jsxs)(od,{children:[(0,h.jsxs)(og,{children:[(0,h.jsx)(W.Z,{height:48,width:48,stroke:"var(--privy-color-background)",fill:"var(--privy-color-error)"}),(0,h.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Confirm you have saved"}),(0,h.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Losing access to your password means you will lose access to your account."})]}),(0,h.jsx)(oy,{children:(0,h.jsxs)(ow,{style:{color:"var(--privy-color-error)",cursor:"pointer"},onClick:e=>{e.preventDefault(),s(e=>!e)},children:[(0,h.jsx)(oE,{color:"var(--privy-color-error)",readOnly:!0,checked:a}),(0,h.jsx)(h.Fragment,{children:"I understand that if I lose my password and device, I will lose access to my account and my assets."})]})})]}),(0,h.jsxs)(oN,{children:["user"===n.initiatedBy&&(0,h.jsx)(i7,{onClick:n.onCancel,disabled:t,children:"Cancel"}),(0,h.jsx)(oh,{onClick:r,loading:t,hideAnimations:e,disabled:!a,children:"Set Password"})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},oN=_.ZP.div`
  display: flex;
  gap: 10px;
`,oO=/[a-z]/,oI=/[A-Z]/,oM=/[0-9]/,oL="!@#$%^&*()\\-_+.",oW=`a-zA-Z0-9${oL}`,oF=RegExp(`[${oL}]`),oU=RegExp(`[${oW}]`),oD=RegExp(`^[${oW}]{6,}$`),oZ=(e="")=>[...new Set(e.split("").filter(e=>!oU.test(e)).map(e=>e.replace(" ","SPACE")))],oz=()=>$.OW(4,B.k),oH=({buttonHideAnimations:e,buttonLoading:t,password:r="",config:i,isResettingPassword:n,onSubmit:a,onClose:s,onBack:l,onPasswordChange:c,onPasswordGenerate:d})=>{let[p,u]=(0,o.useState)(!1),[m,f]=(0,o.useState)(!1);(0,o.useEffect)(()=>{r&&!m&&f(!0)},[r]);let g=(0,o.useMemo)(()=>m?6>(r?.length||0)?"Password must be at least 6 characters":oD.test(r||"")?null:`Invalid characters used ( ${oZ(r).join(" ")} )`:null,[r,m]),y=(0,o.useMemo)(()=>g?{value:0,label:"Weak"}:function(e=""){let t=function(e=""){return(.3*function(e){if(e.length<8)return 0;let t=0;return oO.test(e)&&(t+=1),oI.test(e)&&(t+=1),oM.test(e)&&(t+=1),oF.test(e)&&(t+=1),Math.max(0,Math.min(1,t/3))}(e)+H()(e)/95)/2}(e);return{value:t,label:t>.9?"Strong":t>.5?"Medium":"Weak"}}(r),[r,g]),w=(0,o.useMemo)(()=>!!(!r?.length||g),[g,r]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:s,closeable:"user"===i.initiatedBy,backFn:l}),(0,h.jsx)(n7,{}),(0,h.jsxs)(od,{children:[(0,h.jsxs)(og,{children:[(0,h.jsx)(Z.Z,{height:48,width:48,stroke:"var(--privy-color-accent)"}),(0,h.jsxs)("h3",{style:{color:"var(--privy-color-foreground)"},children:[n?"Reset":"Set"," your password"]}),(0,h.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Select a strong, memorable password to secure your account."})]}),(0,h.jsxs)(of,{children:[(0,h.jsx)(ou,{value:r,onChange:e=>c(e.target.value),placeholder:"enter or generate a strong password",type:p?"password":"text",style:{paddingRight:"3.8rem"}}),(0,h.jsxs)(ov,{style:{width:"3.5rem"},children:[p?(0,h.jsx)(ob,{onClick:()=>u(!1)}):(0,h.jsx)(o_,{onClick:()=>u(!0)}),(0,h.jsx)(oC,{onClick:d})]})]}),(0,h.jsx)(oj,{value:0===y.value?.01:y.value,label:y.label}),(0,h.jsx)(oc,{error:!!g,children:g||`Password Strength: ${m?y.label:"--"}`}),(0,h.jsxs)(oB,{children:[(0,h.jsx)(o$,{children:(0,h.jsxs)(oy,{children:[(0,h.jsxs)(ow,{children:[(0,h.jsx)(N.Z,{width:24,height:24,fill:"var(--privy-color-accent)"}),"This password is used to secure your account."]}),(0,h.jsxs)(ow,{children:[(0,h.jsx)(N.Z,{width:24,height:24,fill:"var(--privy-color-accent)"}),"Use it to log in on a new environment, like another browser or device."]})]})}),(0,h.jsx)(oh,{onClick:a,loading:t,disabled:w,hideAnimations:e,children:"Continue"})]})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},o$=(0,_.ZP)(oy)`
  flex: 1;
  padding-top: 1rem;
`,oB=_.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,oV=({buttonHideAnimations:e,buttonLoading:t,appName:r,password:i,onSubmit:n,onBack:a})=>{let[s,l]=(0,o.useState)(!1),c=(0,o.useCallback)(()=>{l(!0),i&&navigator.clipboard.writeText(i)},[i]),d=(0,o.useCallback)(()=>{let e=document.createElement("a"),t=r.toLowerCase().replace(/[^a-z\s]/g,"").replace(/\s/g,"-"),n=new Blob([oq(r,i)],{type:"text/plain"}),a=URL.createObjectURL(n);e.href=a,e.target="_blank",e.download=`${t}-privy-wallet-recovery.txt`,document.body.appendChild(e),e.click(),setTimeout(()=>{e.remove(),URL.revokeObjectURL(a)},5e3)},[i]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:a,closeable:!1}),(0,h.jsx)(n7,{}),(0,h.jsxs)(od,{children:[(0,h.jsxs)(og,{children:[(0,h.jsx)(W.Z,{height:48,width:48,stroke:"var(--privy-color-background)",fill:"var(--privy-color-accent)"}),(0,h.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Save your password"}),(0,h.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"For your security, this password cannot be reset, so keep it somewhere safe."})]}),(0,h.jsx)(of,{centered:!0,children:(0,h.jsx)(om,{children:i})}),(0,h.jsxs)("div",{style:{display:"flex",margin:"12px 0",gap:"12px"},children:[(0,h.jsx)(ox,{onClick:c,children:s?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(q.Z,{style:{width:24,height:24},stroke:"var(--privy-color-accent)"}),"Copied"]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(G.Z,{style:{width:24,height:24},stroke:"var(--privy-color-accent)"}),"Copy"]})}),(0,h.jsxs)(ox,{onClick:d,children:[(0,h.jsx)(V.Z,{style:{width:24,height:24},stroke:"var(--privy-color-accent)"}),"Download"]})]})]}),(0,h.jsx)(oh,{onClick:n,loading:t,hideAnimations:e,children:"Continue"}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},oq=(e,t)=>`Your wallet recovery password for ${e} is

${t}

You will need this password to access your ${e} wallet on a new device. Please keep it somewhere safe.`,oG=({error:e,onClose:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{closeable:!1}),(0,h.jsx)(n7,{}),e?(0,h.jsxs)(n3,{children:[(0,h.jsx)(O.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}),(0,h.jsx)(ai,{title:"Something went wrong",description:e})]}):(0,h.jsxs)(n3,{children:[(0,h.jsx)(N.Z,{fill:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,h.jsx)(ai,{title:"Success"})]}),(0,h.jsx)(i2,{onClick:t,children:"Close"}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]}),oK=(e,t)=>{switch(e){case"creating":return"back"===t?e:"saving";case"saving":return"back"===t?"creating":"confirming";case"confirming":return"back"===t?"saving":"finalizing";case"finalizing":return"back"===t?"confirming":"done";default:return e}},oY=()=>{let[e,t]=(0,o.useReducer)(oK,"creating");return{send:t,state:e}},oQ=({onSubmit:e,...t})=>{let{lastScreen:r,navigate:i}=ig(),{send:n,state:a}=oY(),s=(0,o.useCallback)(async()=>{"finalizing"===a&&await e(),n("next")},[a,n,e]);(0,o.useEffect)(()=>{let e;return"done"===a&&"automatic"===t.config.initiatedBy&&(e=setTimeout(()=>t.onClose?.(),1400)),()=>{e&&clearTimeout(e)}},[a,t.config.initiatedBy,t.onClose]);let l=(0,o.useCallback)(()=>{n("back")},[n]),c=(0,o.useCallback)(()=>{i("EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN")},[r,i]);return"creating"===a?(0,h.jsx)(oH,{...t,onSubmit:s,onBack:"EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN"===r?c:void 0}):"saving"===a?(0,h.jsx)(oV,{...t,onSubmit:s,onBack:l}):"confirming"===a?(0,h.jsx)(ok,{...t,onSubmit:s,onBack:l}):"finalizing"===a?(0,h.jsx)(oR,{...t,onSubmit:s,onBack:l}):"done"===a?(0,h.jsx)(oG,{...t,onSubmit:s}):null},oJ=e=>{let t=(0,h.jsx)(W.Z,{height:38,width:38,stroke:"var(--privy-color-error)"});if(e instanceof eD)return"client_request_timeout"===e.privyErrorCode?{title:"Timed out",detail:e.message,ctaText:"Try again",icon:t}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t};if(e instanceof aq&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:(0,h.jsx)(R.Z,{height:38,width:38,stroke:"var(--privy-color-error)"})};if(!(e instanceof eF))return e instanceof eU&&422===e.status?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:t}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t};switch(e.privyErrorCode){case"invalid_captcha":return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:t};case"disallowed_login_method":return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:t};case"allowlist_rejected":return{title:"You don't have access to this app",detail:"Have you been invited?",ctaText:"Try another account",icon:(0,h.jsx)(nY,{style:{width:"38px",height:"38px",strokeWidth:"1",stroke:"var(--privy-color-accent)",fill:"var(--privy-color-accent)"}})};case"captcha_failure":return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:(0,h.jsx)("span",{})};case"captcha_timeout":return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:(0,h.jsx)("span",{})};case"linked_to_another_user":return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:t};case"not_supported":return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:t};case"too_many_requests":return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:t};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:t}}},oX=({error:e,backFn:t,onClick:r})=>{let{reset:i}=iW(),n=oJ(e);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:t}),(0,h.jsxs)(o0,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(nK,{color:"var(--privy-color-error)"}),n.icon]})}),(0,h.jsxs)(o1,{children:[(0,h.jsx)("h3",{children:n.title}),(0,h.jsx)("p",{children:n.detail})]}),(0,h.jsx)(i2,{color:"var(--privy-color-error)",onClick:()=>{e instanceof eF&&"invalid_captcha"===e.privyErrorCode&&i(),r?.()},children:n.ctaText})]})]})},o0=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-bottom: 16px;
`,o1=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,o2=({style:e,color:t,...r})=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:t||"currentColor",style:{height:"1.5rem",width:"1.5rem",...e},...r,children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})}),o3=({color:e,...t})=>(0,h.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 115.77 122.88",xmlSpace:"preserve",...t,children:(0,h.jsx)("g",{children:(0,h.jsx)("path",{fill:e||"currentColor",className:"st0",d:"M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"})})}),o4=e=>{let[t,r]=(0,o.useState)(!1);return(0,h.jsxs)(o5,{color:e.color,onClick:()=>{r(!0),navigator.clipboard.writeText(e.text),setTimeout(()=>r(!1),1500)},justCopied:t,children:[t?(0,h.jsx)(o2,{style:{height:"14px",width:"14px"},strokeWidth:"2"}):(0,h.jsx)(o3,{style:{height:"14px",width:"14px"}}),t?"Copied":"Copy"," ",e.itemName?e.itemName:"to Clipboard"]})},o5=_.ZP.button`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${e=>e.justCopied?"var(--privy-color-foreground)":e.color||"var(--privy-color-foreground-3)"};
    font-weight: ${e=>e.justCopied?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justCopied?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,o6=e=>{let[t,r]=(0,o.useState)(!1);return(0,h.jsx)(o7,{color:e.color,href:e.url,target:"_blank",rel:"noreferrer noopener",onClick:()=>{r(!0),setTimeout(()=>r(!1),1500)},justOpened:t,children:e.text})},o7=_.ZP.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${e=>e.justOpened?"var(--privy-color-foreground)":e.color||"var(--privy-color-foreground-3)"};
    font-weight: ${e=>e.justOpened?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${e=>e.justOpened?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`,o8=()=>(0,h.jsx)("svg",{width:"200",height:"200",viewBox:"-77 -77 200 200",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"28px",width:"28px"},children:(0,h.jsx)("rect",{width:"50",height:"50",fill:"black",rx:10,ry:10})}),o9=(e,t,r,i,n)=>{for(let a=t;a<t+i;a++)for(let t=r;t<r+n;t++){let r=e?.[t];r&&r[a]&&(r[a]=0)}return e},se=e=>{let t=Q.create(e,{errorCorrectionLevel:"high"}).modules,r=tn(Array.from(t.data),t.size);return r=o9(r,0,0,7,7),r=o9(r,r.length-7,0,7,7),r=o9(r,0,r.length-7,7,7)},st=({x:e,y:t,cellSize:r,bgColor:i,fgColor:n})=>(0,h.jsx)(h.Fragment,{children:[0,1,2].map(a=>(0,h.jsx)("circle",{r:r*(7-2*a)/2,cx:e+7*r/2,cy:t+7*r/2,fill:a%2!=0?i:n},`finder-${e}-${t}-${a}`))}),sr=({cellSize:e,matrixSize:t,bgColor:r,fgColor:i})=>{let n=[[0,0],[(t-7)*e,0],[0,(t-7)*e]];return(0,h.jsx)(h.Fragment,{children:n.map(([t,n])=>(0,h.jsx)(st,{x:t,y:n,cellSize:e,bgColor:r,fgColor:i},`finder-${t}-${n}`))})},si=({matrix:e,cellSize:t,color:r})=>(0,h.jsx)(h.Fragment,{children:e.map((e,i)=>e.map((e,n)=>e?(0,h.jsx)("rect",{height:t-.4,width:t-.4,x:i*t+.1*t,y:n*t+.1*t,rx:.5*t,ry:.5*t,fill:r},`cell-${i}-${n}`):(0,h.jsx)(o.Fragment,{},`circle-${i}-${n}`)))}),sn=({cellSize:e,matrixSize:t,element:r,sizePercentage:i,bgColor:n})=>{if(!r)return(0,h.jsx)(h.Fragment,{});let a=t*(i||.15),o=Math.floor(t/2-a/2),s=Math.floor(t/2+a/2);(s-o)%2!=t%2&&(s+=1);let l=(s-o)*e,c=l-.2*l,d=o*e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("rect",{x:o*e,y:o*e,width:l,height:l,fill:n}),(0,h.jsx)(r,{x:d+.1*l,y:d+.1*l,height:c,width:c})]})},sa=e=>{let t=e.outputSize,r=se(e.url),i=t/r.length;return(0,h.jsxs)("svg",{height:e.outputSize,width:e.outputSize,viewBox:`0 0 ${e.outputSize} ${e.outputSize}`,style:{height:"100%",width:"100%"},children:[(0,h.jsx)(si,{matrix:r,cellSize:i,color:e.fgColor}),(0,h.jsx)(sr,{cellSize:i,matrixSize:r.length,fgColor:e.fgColor,bgColor:e.bgColor}),(0,h.jsx)(sn,{cellSize:i,element:e.logo?.element,bgColor:e.bgColor,matrixSize:r.length})]})},so=_.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>`${e.size}px`};
  width: ${e=>`${e.size}px`};
  padding: 5px;
  margin: auto;
  background-color: ${e=>e.bgColor};

  && {
    border-width: 2px;
    border-color: ${e=>e.borderColor};
    border-radius: var(--privy-border-radius-md);
  }
`,ss=e=>{let{appearance:t}=ic(),r=e.bgColor||"#FFFFFF",i=e.fgColor||"#000000",n=e.size||160,a="dark"===t.palette.colorScheme?r:i;return(0,h.jsx)(so,{size:n,bgColor:r,fgColor:i,borderColor:a,children:(0,h.jsx)(sa,{url:e.url,logo:{element:e.squareLogoElement??o8},outputSize:n,bgColor:r,fgColor:i})})},sl=({style:e,...t})=>(0,h.jsxs)("svg",{width:"1000",height:"1000",viewBox:"0 0 1000 1000",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"24px",...e},...t,children:[(0,h.jsx)("rect",{width:"1000",height:"1000",rx:"200",fill:"#855DCD"}),(0,h.jsx)("path",{d:"M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z",fill:"white"}),(0,h.jsx)("path",{d:"M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.444H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z",fill:"white"}),(0,h.jsx)("path",{d:"M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.444H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z",fill:"white"})]}),sc="#8a63d2",sd=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,sh=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,sp="#8a63d2",su=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,sm=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`,sf=({size:e=61,...t})=>(0,h.jsx)("svg",{width:e,height:e,viewBox:"0 0 61 61",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,h.jsxs)("g",{id:"moonpay_symbol_wht 2",children:[(0,h.jsx)("rect",{x:"1.3374",y:"1",width:"59",height:"59",rx:"11.5",fill:"#7715F5"}),(0,h.jsx)("path",{id:"Vector",d:"M43.8884 23.3258C45.0203 23.3258 46.1268 22.9901 47.068 22.3613C48.0091 21.7324 48.7427 20.8386 49.1759 19.7928C49.6091 18.747 49.7224 17.5962 49.5016 16.4861C49.2807 15.3759 48.7357 14.3561 47.9353 13.5557C47.1349 12.7553 46.1151 12.2102 45.0049 11.9893C43.8947 11.7685 42.7439 11.8819 41.6982 12.3151C40.6524 12.7482 39.7585 13.4818 39.1297 14.423C38.5008 15.3641 38.1651 16.4707 38.1651 17.6026C38.165 18.3542 38.3131 19.0985 38.6007 19.7929C38.8883 20.4873 39.3098 21.1182 39.8413 21.6496C40.3728 22.1811 41.0037 22.6027 41.6981 22.8903C42.3925 23.1778 43.1367 23.3259 43.8884 23.3258ZM26.3395 49.1017C23.5804 49.1017 20.8832 48.2836 18.5891 46.7507C16.295 45.2178 14.5069 43.039 13.4511 40.49C12.3952 37.9409 12.1189 35.1359 12.6572 32.4298C13.1955 29.7237 14.5241 27.238 16.4751 25.287C18.4262 23.336 20.9118 22.0074 23.6179 21.4691C26.324 20.9308 29.129 21.2071 31.6781 22.2629C34.2272 23.3189 36.406 25.1069 37.9389 27.401C39.4717 29.6952 40.2899 32.3923 40.2899 35.1514C40.2899 36.9835 39.9291 38.7975 39.2281 40.49C38.527 42.1826 37.4994 43.7205 36.204 45.0159C34.9086 46.3113 33.3707 47.3389 31.6781 48.04C29.9856 48.741 28.1715 49.1018 26.3395 49.1017Z",fill:"white"})]})}),sg=({title:e,desc:t,icon:r})=>(0,h.jsxs)(s_,{children:[(0,h.jsx)(sk,{children:r}),(0,h.jsxs)(sj,{children:[(0,h.jsx)(sC,{children:e}),(0,h.jsx)(sb,{children:t})]})]}),sy=({app:e,signedUrl:t,onContinue:r})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(sx,{children:[(0,h.jsx)(sf,{size:"3.75rem"}),(0,h.jsxs)(sv,{children:[e?.name," uses ",(0,h.jsx)("span",{style:{fontWeight:"bold"},children:"Moonpay"})," to fund your account"]}),(0,h.jsxs)(sE,{children:[(0,h.jsx)(sg,{icon:(0,h.jsx)(X.Z,{width:"1rem"}),title:"Purchase assets to fund your account",desc:(0,h.jsxs)(h.Fragment,{children:["Connect a payment method (",(0,h.jsx)("strong",{children:"debit card recommended"}),") to purchase digital assets."]})}),(0,h.jsx)(sg,{icon:(0,h.jsx)(J.Z,{width:"1rem"}),title:"Compliance takes time",desc:"Funding a new account may take a few hours. You'll be good to go thereafter."}),(0,h.jsx)(sg,{icon:(0,h.jsx)(D.Z,{width:"1rem"}),title:"Your data belongs to you",desc:"MoonPay does not sell your data and will only use it with your permission."})]}),(0,h.jsx)(sA,{className:"mobile-only"})]}),(0,h.jsx)(sw,{children:"By clicking continue, you will be taken to MoonPay in a new tab."}),(0,h.jsx)(i5,{href:t,target:"_blank",rel:"noopener noreferrer",onClick:r,children:"Continue to Moonpay"})]}),sw=_.ZP.span`
  display: inline-block;
  color: var(--privy-color-foreground-3);
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 0.875rem */
  margin-bottom: 0.25rem;
`,sx=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
`,sv=_.ZP.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  margin: 1.5rem 0;
  text-align: center;
  max-width: 19.5rem;
`,sC=_.ZP.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.225rem;
  width: 100%;
`,sb=_.ZP.span`
  color: var(--privy-color-foreground-2);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.225rem;
`,s_=_.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`,sj=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
  text-align: left;
  flex: 1 0 0;
`,sk=_.ZP.div`
  padding-top: 2px;
`,sE=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 0.5rem;
`,sA=_.ZP.div`
  margin: 30px 0;
`,sS="moonpay",sT="sdk_fiat_on_ramp_completed_with_status";async function sP(e,t,r,i,n=!1){let a=r.currencyCode?{}:{defaultCurrencyCode:"ETH_ETHEREUM"},o=r.uiConfig||{accentColor:i.accent,theme:i.colorScheme};return e.signMoonpayOnRampUrl({address:t,useSandbox:n,config:{...r,...a,...o}})}async function sR(e,t){return(0,x.Wg)(`https://api.moonpay.com/v1/transactions/ext/${e}`,{query:{apiKey:t?"pk_test_fqWjXZMSFwloh7orvJsRfjiUHXJqFzI":"pk_live_hirbpu0cVcLHrjktC9l7fbc9ctjv0SL"}})}var sN=e=>{switch(e){case"completed":return{title:"You've funded your account!",body:"It may take a few minutes for the assets to appear.",cta:"Continue"};case"failed":return{title:"Something went wrong!",body:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("p",{children:["It looks like there was an issue with your payment. Please contact"," ",(0,h.jsx)("a",{href:"https://support.moonpay.com/hc/en-gb",target:"_blank",rel:"noreferrer noopener",style:{textDecoration:"underline"},children:"Moonpay support"})," ","for assistance."]}),(0,h.jsx)("p",{style:{fontStyle:"italic"},children:"Note that debit cards typically work better than credit cards here."})]}),cta:"Done"};case"serviceFailure":return{title:"Something went wrong!",body:"MoonPay ran into an error when processing your transaction. Try again?",cta:"Done"};case"waitingAuthorization":return{title:"Processing payment",body:"This may take up to a few hours. You will receive an email when the purchase is complete.",cta:"Continue"};default:return{title:"In Progress",body:"Go back to MoonPay to finish funding your account.",cta:""}}},sO=({status:e,onClickCta:t})=>{let{title:r,body:i,cta:n}=(0,o.useMemo)(()=>sN(e),[e]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(sF,{children:[(0,h.jsx)(sL,{status:e}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:r}),(0,h.jsx)(sW,{children:i})]})]}),n&&(0,h.jsx)(i2,{onClick:t,children:n})]})},sI=e=>e?({completed:"var(--privy-color-success)",failed:"var(--privy-color-error)",serviceFailure:"var(--privy-color-error)",waitingAuthorization:"var(--privy-color-accent)",pending:"var(--privy-color-foreground-4)"})[e]:"var(--privy-color-foreground-4)",sM=e=>{switch(e){case"serviceFailure":case"failed":return O.Z;case"completed":return N.Z;case"waitingAuthorization":return()=>(0,h.jsx)(ee.Z,{width:"3rem",height:"3rem",style:{backgroundColor:"var(--privy-color-foreground-4)",color:"var(--privy-color-background)",borderRadius:"100%",padding:"0.5rem",margin:"0.5rem"}});default:return}},sL=({status:e})=>{if(!e||"pending"===e){let e="var(--privy-color-foreground-4)";return(0,h.jsxs)("div",{style:{position:"relative"},children:[(0,h.jsx)(iQ,{color:e,style:{position:"absolute"}}),(0,h.jsx)(iJ,{color:e}),(0,h.jsx)(sf,{size:"3rem",style:{position:"absolute",top:"1rem",left:"1rem"}})]})}let t=sM(e),r=sI(e);return(0,h.jsx)("div",{style:{borderColor:r,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%",borderWidth:2,padding:"0.5rem",marginBottom:"0.5rem"},children:t&&(0,h.jsx)(t,{width:"4rem",height:"4rem",color:r})})},sW=_.ZP.p`
  font-size: 1rem;
  color: var(--privy-color-foreground-3);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,sF=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  padding: 2rem 0;
`,sU=_.ZP.div`
  border-radius: 50%;
  height: 68px;
  width: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--privy-color-accent);
  color: white;
  margin: 0 auto 24px auto;
`,sD=({style:e,...t})=>(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"17",height:"17",viewBox:"0 0 17 17",style:{height:"1.25rem",width:"1.25rem",...e},...t,children:(0,h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",fillRule:"evenodd",clipRule:"evenodd",d:"M16.5 8.67993C16.5 9.82986 15.853 10.8287 14.9032 11.3322C15.2188 12.3599 14.97 13.5237 14.1569 14.3368C13.3437 15.1499 12.18 15.3987 11.1523 15.0831C10.6488 16.0329 9.64993 16.6799 8.5 16.6799C7.35007 16.6799 6.35126 16.0329 5.84771 15.0831C4.82003 15.3987 3.65627 15.1499 2.84314 14.3368C2.03001 13.5237 1.78124 12.3599 2.09681 11.3322C1.14699 10.8287 0.5 9.82986 0.5 8.67993C0.5 7.53 1.14699 6.53119 2.0968 6.02764C1.78125 4.99996 2.03003 3.83621 2.84315 3.02309C3.65627 2.20997 4.82002 1.96119 5.8477 2.27675C6.35125 1.32692 7.35007 0.679932 8.5 0.679932C9.64992 0.679932 10.6487 1.32691 11.1523 2.27672C12.18 1.96115 13.3437 2.20993 14.1569 3.02305C14.97 3.83618 15.2188 4.99996 14.9032 6.02764C15.853 6.53119 16.5 7.53 16.5 8.67993ZM12.2659 6.68856C12.5654 6.40238 12.5761 5.92763 12.29 5.62818C12.0038 5.32873 11.529 5.31797 11.2296 5.60416C9.73022 7.03711 8.40877 8.65489 7.3018 10.4211L5.78033 8.89963C5.48744 8.60673 5.01256 8.60673 4.71967 8.89963C4.42678 9.19252 4.42678 9.66739 4.71967 9.96029L6.92031 12.1609C7.08544 12.3261 7.31807 12.4048 7.54957 12.374C7.78106 12.3432 7.98499 12.2064 8.1012 12.0038C9.23027 10.0356 10.6362 8.24613 12.2659 6.68856Z",fill:"var(--privy-color-accent)"})}),sZ=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`,sz=_.ZP.div`
  &&& {
    margin-left: 7px; /* TODO: This is a total hack */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 12px;
  }
`,sH=({children:e})=>(0,h.jsxs)(s$,{children:[(0,h.jsx)(sD,{style:{width:"16px",height:"16px"}}),e]}),s$=_.ZP.div`
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  text-align: left;
  gap: 8px;

  && {
    a {
      text-decoration: underline;
      color: var(--privy-color-accent);
    }

    svg {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`,sB=()=>(0,h.jsxs)(sV,{children:[(0,h.jsx)(at,{title:"Create a Phantom wallet",description:"Follow the instructions below to get started."}),(0,h.jsx)(n0,{children:(0,h.jsx)(rM,{style:{width:"152px",height:"152px"}})}),(0,h.jsxs)(sZ,{children:[(0,h.jsx)(sH,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"Install the "}),(0,h.jsx)("a",{href:s.vU?"https://addons.mozilla.org/en-US/firefox/addon/phantom-app/":"https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en",target:"_blank",children:"Phantom browser extension"})]})}),(0,h.jsx)(sz,{}),(0,h.jsx)(sH,{children:"Set up your first wallet"}),(0,h.jsx)(sz,{}),(0,h.jsx)(sH,{children:"Store your recovery phrase in a safe place!"})]}),(0,h.jsx)(i9,{onClick:()=>window.location.reload(),children:"Reload the page to use your wallet"})]}),sV=(0,_.ZP)(n0)`
  gap: 30px;

  > :first-child > svg {
    margin-top: 20px;
  }
`,sq=(0,o.forwardRef)((e,t)=>{let[r,i]=(0,o.useState)(""),[n,a]=(0,o.useState)(!1),{authenticated:s}=iz(),{initLoginWithEmail:l}=iD(),{navigate:c,setModalData:d,currentScreen:p}=ig(),{enabled:u,token:m}=iW(),f=ti(r),g=n||!f,y=e=>{a(!0),l(r,e).then(()=>{c("AWAITING_PASSWORDLESS_CODE")}).catch(e=>{d({errorModalData:{error:e,previousScreen:p||"LANDING"}}),c("ERROR_SCREEN")}).finally(()=>{a(!1)})},w=()=>{!u||m||s?y(m):(d({captchaModalData:{callback:e=>l(r,e),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSWORDLESS_CODE",onErrorNavigateTo:"ERROR_SCREEN"}}),c("CAPTCHA_SCREEN"))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(sG,{children:(0,h.jsxs)(sK,{stacked:e.stacked,children:[(0,h.jsx)(P.Z,{}),(0,h.jsx)("input",{ref:t,id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>i(e.target.value),onKeyUp:e=>{"Enter"===e.key&&w()},value:r,autoComplete:"email"}),e.stacked?null:(0,h.jsx)(ne,{isSubmitting:n,onClick:w,disabled:g,children:"Submit"})]})}),e.stacked?(0,h.jsx)(i2,{loadingText:null,loading:n,disabled:g,onClick:w,children:"Submit"}):null]})}),sG=_.ZP.div`
  width: 100%;
`,sK=_.ZP.label`
  display: block;
  position: relative;
  width: 100%;

  > svg {
    position: absolute;
    margin: 13px 17px;
    height: 24px;
    width: 24px;
    color: var(--privy-color-foreground-3);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 12px 88px 12px 52px;
    padding-right: ${e=>e.stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-mdlg);
    width: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }
  }

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`,sY=({isEditable:e,setIsEditable:t})=>{let r=(0,o.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(nS,{if:!e,children:(0,h.jsx)(sq,{ref:r})}),(0,h.jsx)(nS,{if:e,children:(0,h.jsxs)(nE,{onClick:()=>{t(),setTimeout(()=>{r.current?.focus()},0)},children:[(0,h.jsx)(P.Z,{})," Continue with Email"]})})]})},sQ=()=>{let[e,t]=(0,o.useState)(!1),{currentScreen:r,navigate:i,setModalData:n}=ig(),{enabled:a,token:s}=iW(),{initLoginWithFarcaster:l}=iD();return(0,h.jsxs)(nE,{onClick:async()=>{t(!0);try{a&&!s?(n({captchaModalData:{callback:e=>l(e),userIntentRequired:!0,onSuccessNavigateTo:"AWAITING_FARCASTER_CONNECTION",onErrorNavigateTo:"ERROR_SCREEN"}}),i("CAPTCHA_SCREEN")):(await l(s),i("AWAITING_FARCASTER_CONNECTION"))}catch(e){n({errorModalData:{error:e,previousScreen:r||"LANDING"}}),i("ERROR_SCREEN")}finally{t(!1)}},disabled:!1,children:[(0,h.jsx)(sl,{})," Farcaster",e&&(0,h.jsx)("span",{children:(0,h.jsx)(iX,{})})]})},sJ=()=>{let{enabled:e,token:t}=iW(),{navigate:r,setModalData:i}=ig(),{initLoginWithPasskey:n}=iD();return(0,h.jsx)(s0,{onClick:async()=>{e&&!t?(i({captchaModalData:{callback:e=>n(e),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSKEY_SYSTEM_DIALOGUE",onErrorNavigateTo:"ERROR_SCREEN"}}),r("CAPTCHA_SCREEN")):(await n(),r("AWAITING_PASSKEY_SYSTEM_DIALOGUE"))},children:"I have a passkey"})},sX=(0,_.iv)`
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
`,s0=_.ZP.button`
  ${sX}
`,s1=(e,t)=>(0,er.t)(String(e),t),s2=(e,t)=>`+${(0,ei.G)(t)} ${e}`,s3=e=>`*${e.replaceAll("-","").slice(-4)}`,s4=e=>new en.R(e),s5=(0,ea.o)().map(e=>({code:e,callCode:(0,ei.G)(e)})),s6=e=>{let t=eo.L(e,et.Z)?.formatInternational();return t?.substring(t.indexOf(" ")+1)},s7=({value:e,onChange:t})=>(0,h.jsx)("select",{value:e,onChange:t,children:s5.map(e=>(0,h.jsxs)("option",{value:e.code,children:[e.code," +",e.callCode]},e.code))}),s8=(0,o.forwardRef)((e,t)=>{let{app:r}=ig(),[i,n]=(0,o.useState)(""),[a,s]=(0,o.useState)(r?.intl.defaultCountry??"US"),l=s1(i,a),c=s4(a),d=s6(a),p=(0,ei.G)(a),u=!l,[m,f]=(0,o.useState)(!1),g=p.length,y=t=>{try{let r=t.replace(/\D/g,""),o=i.replace(/\D/g,""),s=r===o?t:c.input(t);n(s),e.onChange&&e.onChange({rawPhoneNumber:s,qualifiedPhoneNumber:s2(t,a),countryCode:a,isValid:s1(t,a)})}catch(e){console.error("Error processing phone number:",e)}},w=()=>{f(!0);let t=s2(i,a);e.onSubmit({rawPhoneNumber:i,qualifiedPhoneNumber:t,countryCode:a,isValid:s1(i,a)}).finally(()=>f(!1))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s9,{children:(0,h.jsxs)(le,{callingCodeLength:g,stacked:e.stacked,children:[(0,h.jsx)(s7,{value:a,onChange:t=>{let r=t.target.value;s(r),n(""),e.onChange&&e.onChange({rawPhoneNumber:i,qualifiedPhoneNumber:s2(i,r),countryCode:r,isValid:s1(i,a)})}}),(0,h.jsx)("input",{ref:t,id:"phone-number-input",type:"tel",placeholder:d,onChange:e=>{y(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&w()},value:i,autoComplete:"tel"}),e.stacked||e.noIncludeSubmitButton?null:(0,h.jsx)(ne,{isSubmitting:m,onClick:w,disabled:u,children:"Submit"})]})}),e.stacked&&!e.noIncludeSubmitButton?(0,h.jsx)(i2,{loading:m,loadingText:null,onClick:w,disabled:u,children:"Submit"}):null]})}),s9=_.ZP.div`
  width: 100%;
`,le=_.ZP.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${e=>e.callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${e=>e.callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${e=>e.callingCodeLength}px));
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

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: calc(100% - var(--country-code-dropdown-width));

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${e=>e.stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-mdlg);
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

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`,lt=({isEditable:e,setIsEditable:t})=>{let r=(0,o.useRef)(null),{authenticated:i}=iz(),{navigate:n,setModalData:a,currentScreen:s}=ig(),{initLoginWithSms:l}=iD(),{enabled:c,token:d}=iW();async function p({qualifiedPhoneNumber:e}){if(!c||d||i)try{await l(e,d),n("AWAITING_PASSWORDLESS_CODE")}catch(e){a({errorModalData:{error:e,previousScreen:s||"LANDING"}}),n("ERROR_SCREEN")}else a({captchaModalData:{callback:t=>l(e,t),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSWORDLESS_CODE",onErrorNavigateTo:"ERROR_SCREEN"}}),n("CAPTCHA_SCREEN")}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(nS,{if:!e,children:(0,h.jsx)(s8,{ref:r,onSubmit:p})}),(0,h.jsx)(nS,{if:e,children:(0,h.jsxs)(nE,{onClick:()=>{t(),setTimeout(()=>{r.current?.focus()},0)},children:[(0,h.jsx)(R.Z,{})," Continue with SMS"]})})]})},lr={apple:{logo:(0,h.jsx)(tq,{}),displayName:"Apple"},discord:{logo:(0,h.jsx)(tG,{}),displayName:"Discord"},github:{logo:(0,h.jsx)(tK,{}),displayName:"GitHub"},google:{logo:(0,h.jsx)(tY,{}),displayName:"Google"},linkedin:{logo:(0,h.jsx)(tJ,{}),displayName:"LinkedIn"},spotify:{logo:(0,h.jsx)(tX,{}),displayName:"Spotify"},instagram:{logo:(0,h.jsx)(tQ,{}),displayName:"Instagram"},twitter:{logo:(0,h.jsx)(t1,{}),displayName:"Twitter"},tiktok:{logo:(0,h.jsx)(t0,{}),displayName:"TikTok"}},li=({provider:e})=>{let{enabled:t,token:r}=iW(),{navigate:i,setModalData:n}=ig(),[a,s]=(0,o.useState)(!1),{initLoginWithOAuth:l}=iD(),{displayName:c,logo:d}=lr[e];return(0,h.jsxs)(nE,{onClick:()=>{s(!0),t&&!r?(n({captchaModalData:{callback:t=>l(e,t),userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ERROR_SCREEN"}}),i("CAPTCHA_SCREEN")):l(e)},disabled:a,children:[d," ",c]})};function ln(e){return(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 240 240",...e,children:[(0,h.jsx)("defs",{children:(0,h.jsxs)("linearGradient",{x1:"120",y1:"240",x2:"120",gradientUnits:"userSpaceOnUse",id:"telegram-linear-gradient",children:[(0,h.jsx)("stop",{offset:"0",stopColor:"#1d93d2"}),(0,h.jsx)("stop",{offset:"1",stopColor:"#38b0e3"})]})}),(0,h.jsx)("title",{children:"Telegram_logo"}),(0,h.jsx)("circle",{cx:"120",cy:"120",r:"120",fill:"url(#telegram-linear-gradient)"}),(0,h.jsx)("path",{d:"M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z",fill:"#c8daea"}),(0,h.jsx)("path",{d:"M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763",fill:"#a9c6d8"}),(0,h.jsx)("path",{d:"M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z",fill:"#fff"})]})}var la=()=>{let{enabled:e,token:t}=iW(),{navigate:r,setModalData:i}=ig(),[n,a]=(0,o.useState)(!1),{initLoginWithTelegram:s}=iD();async function l(e){try{await s(e),r("TELEGRAM_AUTH_SCREEN")}catch(e){console.error(e),a(!1)}}async function c(){if(a(!0),e&&!t){i({captchaModalData:{callback:l,userIntentRequired:!0,onSuccessNavigateTo:null,onErrorNavigateTo:"ERROR_SCREEN"}}),r("CAPTCHA_SCREEN");return}await l()}return(0,h.jsxs)(nE,{onClick:c,disabled:n,children:[(0,h.jsx)(ln,{})," Telegram"]})},lo=({onClick:e,text:t,icon:r})=>(0,h.jsxs)(nE,{onClick:e,children:[r,(0,h.jsx)(nv,{children:t}),(0,h.jsx)(es.Z,{})]}),ls=({connectOnly:e})=>{let{closePrivyModal:t,connectors:r}=iD(),{app:i,onUserCloseViaDialogOrKeybindRef:n}=ig(),{appearance:{palette:{colorScheme:a}}}=ic(),l=i.loginMethodsAndOrder?.primary??[],c=i.loginMethodsAndOrder?.overflow??[],d=[...l,...c],p=i.loginMethods.passkey,[u,m]=(0,o.useState)("default"),[f,g]=(0,o.useState)("email");(0,o.useEffect)(()=>{let e=d.indexOf("sms"),t=d.indexOf("email");e>-1&&e<t&&g("sms")},[l,c]);let y=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{m("default")},150)};n.current=y;let w=t=>"email"===t?(0,h.jsx)(sY,{isEditable:"email"===f,setIsEditable:()=>{g("email")}},t):"sms"===t?(0,h.jsx)(lt,{isEditable:"sms"===f,setIsEditable:()=>{g("sms")}},t):"apple"===t?(0,h.jsx)(li,{provider:"apple"},t):"discord"===t?(0,h.jsx)(li,{provider:"discord"},t):"farcaster"===t?(0,h.jsx)(sQ,{},t):"github"===t?(0,h.jsx)(li,{provider:"github"},t):"google"===t?(0,h.jsx)(li,{provider:"google"},t):"linkedin"===t?(0,h.jsx)(li,{provider:"linkedin"},t):"tiktok"===t?(0,h.jsx)(li,{provider:"tiktok"},t):"twitter"===t&&(!s.tq||i?.loginConfig.twitterOAuthOnMobileEnabled)?(0,h.jsx)(li,{provider:"twitter"},t):"telegram"===t?(0,h.jsx)(la,{},t):aS([t],r,e,d),x=l.map(w).flat(),v=c.map(w).flat(),[C,b]=tr([...x,...v],ll({primary:x.length,overflow:v.length}));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{title:i.appearance.landingHeader,onClose:y,backFn:"default"===u?void 0:()=>{m("default")}}),"default"===u&&(0,h.jsx)(lc,{}),"default"===u&&("string"==typeof i.appearance.loginMessage?(0,h.jsx)(nk,{children:i.appearance.loginMessage}):i.appearance.loginMessage),(0,h.jsx)(nC,{style:{overflow:"hidden"},children:(0,h.jsxs)(n_,{colorScheme:a,style:{maxHeight:400,overflowY:"scroll",padding:2},children:["default"===u&&(0,h.jsxs)(h.Fragment,{children:[...C,b.length>0&&(0,h.jsx)(lo,{text:"More options",icon:(0,h.jsx)(K.Z,{}),onClick:()=>m("overflow")})]}),"overflow"===u&&(0,h.jsxs)(h.Fragment,{children:[...b]}),p&&"default"===u&&(0,h.jsx)(sJ,{})]})}),i&&(0,h.jsx)(ny,{app:i}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},ll=({primary:e,overflow:t})=>e<5?e:5===e&&0===t?5:4,lc=(0,_.ZP)(aP)`
  margin-bottom: 16px;
`,ld=({...e})=>(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",...e,children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_2856_1743)",children:[(0,h.jsx)("path",{d:"M22.1673 8.24075V16.3642C22.1673 17.3256 21.3421 18.105 20.3241 18.105H17.0028M22.1673 8.24075C22.1673 7.27936 21.3421 6.5 20.3241 6.5H11.5302M22.1673 8.24075V8.42852C22.1673 9.03302 21.8352 9.59423 21.2901 9.91105L15.1463 13.4818C14.5539 13.8261 13.8067 13.8261 13.2143 13.4818L10.1621 11.5401",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M3.12913 6.64816C0.508085 12.9507 3.49251 20.1847 9.79504 22.8057L11.5068 23.5176C12.4522 23.9108 13.7783 23.2222 14.1714 22.2768L14.6054 21.2333C14.7687 20.8406 14.6438 20.3871 14.3024 20.1334L11.2872 17.8927C10.9878 17.6702 10.5843 17.6488 10.2632 17.8384L9.11575 18.5156C8.78274 18.7121 8.3597 18.6844 8.07552 18.4221C5.94293 16.4542 4.77629 13.6264 4.90096 10.7273C4.91757 10.3409 5.19796 10.023 5.57269 9.92753L6.86381 9.59869C7.22522 9.50664 7.49627 9.20696 7.55169 8.83815L8.10986 5.12321C8.17306 4.70259 7.94188 4.29293 7.54915 4.1296L6.50564 3.69564C5.56026 3.30248 4.23416 3.99103 3.84101 4.9364L3.12913 6.64816Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_2856_1743",children:(0,h.jsx)("rect",{x:"0.5",y:"0.5",width:"24",height:"24",rx:"6",fill:"white"})})})]}),lh=({onClick:e,text:t})=>(0,h.jsxs)(nE,{onClick:e,children:[(0,h.jsx)(I.Z,{}),(0,h.jsx)(nv,{children:t}),(0,h.jsx)(es.Z,{})]}),lp=({connectOnly:e})=>{let{closePrivyModal:t,connectors:r}=iD(),{app:i,onUserCloseViaDialogOrKeybindRef:n}=ig(),{email:a,sms:l,google:c,twitter:d,discord:p,github:u,spotify:m,instagram:f,tiktok:g,linkedin:y,apple:w,wallet:x,farcaster:v,passkey:C,telegram:b}=i?.loginMethods??{},_=i?.appearance.loginGroupPriority||"web2-first",j=i?.appearance.hideDirectWeb2Inputs,[k,E]=(0,o.useState)("default"),[A,S]=(0,o.useState)(a?"email":"sms");(0,o.useEffect)(()=>{S(a?"email":"sms")},[a]);let T=()=>{t({shouldCallAuthOnSuccess:!0}),setTimeout(()=>{E("default")},150)};n.current=T;let P=[a&&(0,h.jsx)(sY,{isEditable:"email"===A,setIsEditable:()=>{S("email")}}),l&&(0,h.jsx)(lt,{isEditable:"sms"===A,setIsEditable:()=>{S("sms")}})].filter(Boolean),R=[c&&(0,h.jsx)(li,{provider:"google"}),d&&(!s.tq||i?.loginConfig.twitterOAuthOnMobileEnabled)&&(0,h.jsx)(li,{provider:"twitter"}),p&&(0,h.jsx)(li,{provider:"discord"}),u&&(0,h.jsx)(li,{provider:"github"}),m&&(0,h.jsx)(li,{provider:"spotify"}),f&&(0,h.jsx)(li,{provider:"instagram"}),g&&(0,h.jsx)(li,{provider:"tiktok"}),y&&(0,h.jsx)(li,{provider:"linkedin"}),w&&(0,h.jsx)(li,{provider:"apple"}),v&&(0,h.jsx)(sQ,{}),b&&(0,h.jsx)(la,{})].filter(Boolean),N=aS(i.appearance.walletList,r,e,i.appearance.walletList),O=lm({priority:_,email:a,sms:l,social:R}),I=lf({priority:_,email:a,sms:l,social:R}),M=lg({priority:_,email:a,sms:l,social:R}),L=(0,h.jsx)(lh,{text:M,onClick:()=>E("web3-overflow")}),W=(0,h.jsx)(lo,{text:O,icon:I,onClick:()=>E("web2-overflow")}),F=j?0:1;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{title:i.appearance.landingHeader,onClose:T,backFn:"default"===k?void 0:()=>{E("default")}}),"default"===k&&(0,h.jsx)(lu,{}),"default"===k&&("string"==typeof i.appearance.loginMessage?(0,h.jsx)(nk,{children:i.appearance.loginMessage}):i.appearance.loginMessage),(0,h.jsx)(nC,{style:{overflow:"hidden",padding:2},children:(0,h.jsxs)(nb,{children:["default"===k&&"web2-first"===_&&(0,h.jsxs)(h.Fragment,{children:[...P,...R.length+P.length>4?R.slice(0,3-P.length):R,P.length+R.length>4&&W,x&&L]}),"default"===k&&"web3-first"===_&&(0,h.jsxs)(h.Fragment,{children:[x&&(0,h.jsxs)(h.Fragment,{children:[...N.length>4?N.slice(0,3):N,N.length>4&&L]}),P.length+R.length>F&&W,P.length+R.length===F&&P.length?P[0]:null,P.length+R.length===F&&R.length?R[0]:null]}),"web2-overflow"===k&&(0,h.jsxs)(h.Fragment,{children:[..."web3-first"===_?P:[],...R]}),..."web3-overflow"===k?N:[],C&&"default"===k&&(0,h.jsx)(sJ,{})]})}),i&&(0,h.jsx)(ny,{app:i}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},lu=(0,_.ZP)(aP)`
  margin-bottom: 16px;
`,lm=({priority:e,email:t,sms:r,social:i})=>"web2-first"===e?"Other socials":t&&r&&i.length>0||t&&i.length>0?"Log in with email or socials":r&&i.length>0?"Log in with sms or socials":t&&r?"Continue with email or sms":t?"Continue with email":r?"Continue with sms":"Log in with a social account",lf=({priority:e,email:t,sms:r,social:i})=>"web2-first"===e||i.length>0?(0,h.jsx)(K.Z,{}):t&&r?(0,h.jsx)(ld,{}):t?(0,h.jsx)(P.Z,{}):r?(0,h.jsx)(R.Z,{}):null,lg=({priority:e})=>"web2-first"===e?"Continue with a wallet":"Other wallets",ly=({style:e,...t})=>(0,h.jsx)("svg",{x:0,y:0,width:"65",height:"64",viewBox:"0 0 65 64",style:{height:"64px",width:"65px",...e},fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.71369 17.5625V10.375C3.71369 6.44625 6.85845 3.25 10.7238 3.25H17.7953C18.6783 3.25 19.3941 2.52244 19.3941 1.625C19.3941 0.727562 18.6783 0 17.7953 0H10.7238C5.09529 0 0.516113 4.65419 0.516113 10.375V17.5625C0.516113 18.4599 1.23194 19.1875 2.1149 19.1875C2.99787 19.1875 3.71369 18.4599 3.71369 17.5625ZM17.7953 60.7501C18.6783 60.7501 19.3941 61.4777 19.3941 62.3751C19.3941 63.2726 18.6783 64.0001 17.7953 64.0001H10.7238C5.09529 64.0001 0.516113 59.3459 0.516113 53.6251V46.4376C0.516113 45.5402 1.23194 44.8126 2.1149 44.8126C2.99787 44.8126 3.71369 45.5402 3.71369 46.4376V53.6251C3.71369 57.5538 6.85845 60.7501 10.7238 60.7501H17.7953ZM63.4839 46.4376V53.6251C63.4839 59.3459 58.9048 64.0001 53.2763 64.0001H46.2047C45.3217 64.0001 44.6059 63.2726 44.6059 62.3751C44.6059 61.4777 45.3217 60.7501 46.2047 60.7501H53.2763C57.1416 60.7501 60.2864 57.5538 60.2864 53.6251V46.4376C60.2864 45.5402 61.0022 44.8126 61.8851 44.8126C62.7681 44.8126 63.4839 45.5402 63.4839 46.4376ZM63.4839 10.375V17.5625C63.4839 18.4599 62.7681 19.1875 61.8851 19.1875C61.0022 19.1875 60.2864 18.4599 60.2864 17.5625V10.375C60.2864 6.44625 57.1416 3.25 53.2763 3.25H46.2047C45.3217 3.25 44.6059 2.52244 44.6059 1.625C44.6059 0.727562 45.3217 0 46.2047 0H53.2763C58.9048 0 63.4839 4.65419 63.4839 10.375ZM43.0331 47.3022C43.7067 46.6698 43.7483 45.6022 43.1262 44.9176C42.5039 44.233 41.4536 44.1906 40.78 44.823C38.3832 47.0732 35.265 48.3125 31.9997 48.3125C28.7344 48.3125 25.6162 47.0732 23.2194 44.823C22.5457 44.1906 21.4955 44.233 20.8732 44.9176C20.251 45.6022 20.2927 46.6698 20.9663 47.3022C23.9784 50.1301 27.8968 51.6875 31.9997 51.6875C36.1026 51.6875 40.021 50.1301 43.0331 47.3022ZM35.3207 24.1249V36.1249C35.3207 38.5029 33.4173 40.4374 31.0777 40.4374H29.7249C28.8079 40.4374 28.0646 39.6819 28.0646 38.7499C28.0646 37.8179 28.8079 37.0624 29.7249 37.0624H31.0777C31.5863 37.0624 32.0001 36.6419 32.0001 36.1249V24.1249C32.0001 23.1929 32.7434 22.4374 33.6604 22.4374C34.5774 22.4374 35.3207 23.1929 35.3207 24.1249ZM46.7581 28.8437V24.0312C46.7581 23.151 46.056 22.4374 45.19 22.4374C44.324 22.4374 43.622 23.151 43.622 24.0312V28.8437C43.622 29.7239 44.324 30.4374 45.19 30.4374C46.056 30.4374 46.7581 29.7239 46.7581 28.8437ZM17.6109 28.8437C17.6109 29.7239 18.313 30.4374 19.1789 30.4374C20.0449 30.4374 20.747 29.7239 20.747 28.8437V24.0312C20.747 23.151 20.0449 22.4374 19.1789 22.4374C18.313 22.4374 17.6109 23.151 17.6109 24.0312V28.8437Z"})}),lw=({style:e,...t})=>(0,h.jsxs)("svg",{x:0,y:0,width:"65",height:"64",viewBox:"0 0 65 64",style:{height:"64px",width:"65px",...e},xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_113_33841)",children:[(0,h.jsx)("path",{d:"M39.1193 0.943398C34.636 -0.174912 29.9185 -0.334713 25.328 0.656273C24.9732 0.732859 24.7477 1.08253 24.8243 1.43729C24.9009 1.79205 25.2506 2.01756 25.6053 1.94097C30.0015 0.991934 34.53 1.14842 38.8375 2.22802C49.1385 4.80983 57.7129 12.5548 60.9786 22.6718C62.2416 26.5843 62.7781 30.7505 62.8855 35.1167C62.8945 35.4795 63.1958 35.7664 63.5586 35.7575C63.9215 35.7485 64.2083 35.4472 64.1994 35.0843C64.0905 30.6582 63.5477 26.3849 62.2536 22.3432C58.8621 11.7515 49.9005 3.63265 39.1193 0.943398Z"}),(0,h.jsx)("path",{d:"M21.9931 2.93163C22.343 2.83511 22.5484 2.47325 22.4518 2.12339C22.3553 1.77352 21.9935 1.56815 21.6436 1.66466C16.8429 2.98903 10.0898 7.56519 5.91628 13.6786C5.91465 13.681 5.91304 13.6834 5.91145 13.6858C2.24684 19.2083 -0.0503572 26.1484 0.591012 32.8828C0.591623 32.8892 0.592328 32.8956 0.593127 32.902C0.746837 34.1317 1.00488 35.3591 1.26323 36.5879C1.80735 39.1761 2.35282 41.7706 1.92765 44.4064C1.86986 44.7647 2.11347 45.102 2.47177 45.1598C2.83007 45.2176 3.16738 44.974 3.22518 44.6157C3.66961 41.8605 3.11776 39.173 2.56581 36.4851C2.31054 35.2419 2.05525 33.9987 1.89847 32.7486C1.29525 26.3851 3.46802 19.7466 7.00418 14.416C11.0189 8.5373 17.5201 4.16562 21.9931 2.93163Z"}),(0,h.jsx)("path",{d:"M30.6166 4.39985C38.8671 3.89603 47.1159 7.26314 52.6556 13.7139C52.8921 13.9893 52.8605 14.4042 52.5852 14.6406C52.3099 14.8771 51.895 14.8455 51.6585 14.5702C46.3904 8.43576 38.541 5.23144 30.6927 5.71195C30.6899 5.71212 30.6871 5.71227 30.6843 5.71241C20.7592 6.19265 11.4643 12.9257 8.04547 22.3603C7.92183 22.7016 7.54498 22.8779 7.20375 22.7543C6.86253 22.6306 6.68616 22.2538 6.80981 21.9126C10.4114 11.9735 20.1717 4.90702 30.6166 4.39985Z"}),(0,h.jsx)("path",{d:"M54.6576 16.5848C54.4553 16.2836 54.047 16.2033 53.7457 16.4057C53.4444 16.608 53.3642 17.0163 53.5665 17.3176C56.6376 21.8904 57.9074 26.8665 58.4094 32.7717C58.4401 33.1333 58.7582 33.4016 59.1199 33.3708C59.4815 33.3401 59.7497 33.022 59.719 32.6604C59.206 26.6261 57.8965 21.4076 54.6576 16.5848Z"}),(0,h.jsx)("path",{d:"M59.2796 35.4504C59.6419 35.4277 59.9539 35.703 59.9765 36.0653C60.2242 40.0279 60.2265 44.5112 59.7881 47.8243C59.7405 48.1841 59.4102 48.4372 59.0504 48.3896C58.6906 48.342 58.4376 48.0117 58.4852 47.6519C58.9077 44.4586 58.91 40.0704 58.6648 36.1473C58.6421 35.785 58.9174 35.473 59.2796 35.4504Z"}),(0,h.jsx)("path",{d:"M7.05311 25.5432C7.13829 25.1904 6.92135 24.8354 6.56855 24.7502C6.21576 24.665 5.86071 24.882 5.77553 25.2348C5.2932 27.2325 5.0428 29.2847 5.03288 31.3388C5.02266 33.4559 5.41742 35.5225 5.81234 37.5899C6.1354 39.2811 6.45855 40.9728 6.5602 42.6932C6.69373 44.9531 6.21839 47.2163 5.39698 49.3703C5.26766 49.7094 5.43774 50.0891 5.77685 50.2184C6.11596 50.3477 6.4957 50.1777 6.62502 49.8386C7.49325 47.5617 8.01954 45.1092 7.87221 42.6157C7.77126 40.9071 7.44813 39.2252 7.12512 37.5439C6.73099 35.4925 6.33704 33.442 6.34716 31.3451C6.35659 29.3933 6.59455 27.4425 7.05311 25.5432Z"}),(0,h.jsx)("path",{d:"M24.2964 10.94C24.4317 11.2768 24.2683 11.6595 23.9315 11.7947C17.1187 14.5307 12.0027 20.7047 10.959 27.9852C10.523 31.0269 10.9941 34.0398 11.465 37.052C11.7303 38.7483 11.9954 40.4443 12.0985 42.1451C12.3221 45.833 11.902 49.8839 9.50192 53.5696C9.30387 53.8737 8.89677 53.9597 8.59264 53.7617C8.28851 53.5636 8.20251 53.1565 8.40056 52.8524C10.5873 49.4944 11.0012 45.7644 10.7867 42.2246C10.6821 40.499 10.4185 38.7833 10.1552 37.0686C9.68265 33.9923 9.21067 30.9195 9.65804 27.7987C10.7724 20.025 16.221 13.4748 23.4417 10.5751C23.7785 10.4399 24.1612 10.6032 24.2964 10.94Z"}),(0,h.jsx)("path",{d:"M47.3662 14.6814C41.9915 9.64741 34.2017 7.89046 27.122 9.4433C26.7675 9.52105 26.5432 9.87147 26.6209 10.226C26.6987 10.5805 27.0491 10.8048 27.4036 10.7271C34.1075 9.25665 41.4426 10.934 46.4677 15.6406C50.7033 19.6077 53.1628 25.38 53.8066 31.6779C53.8435 32.0389 54.1661 32.3017 54.5272 32.2648C54.8883 32.2279 55.151 31.9053 55.1141 31.5442C54.4456 25.0047 51.8822 18.9111 47.3662 14.6814Z"}),(0,h.jsx)("path",{d:"M54.9766 34.6738C55.3376 34.6368 55.6604 34.8994 55.6975 35.2604C56.3216 41.337 56.0526 47.9003 55.1104 54.2496C55.0571 54.6086 54.7229 54.8565 54.3639 54.8032C54.0049 54.7499 53.7571 54.4157 53.8103 54.0567C54.7394 47.7957 55.001 41.3439 54.39 35.3947C54.353 35.0336 54.6156 34.7109 54.9766 34.6738Z"}),(0,h.jsx)("path",{d:"M32.0659 13.3553C21.9959 13.3553 13.814 21.3892 13.814 31.3219C13.814 32.3829 13.9081 33.4225 14.0876 34.4334C14.1511 34.7907 14.4922 35.029 14.8495 34.9655C15.2069 34.9021 15.4451 34.561 15.3817 34.2036C15.2155 33.2677 15.1283 32.305 15.1283 31.3219C15.1283 22.1352 22.7014 14.6696 32.0659 14.6696C36.2978 14.6696 40.1642 16.1949 43.1319 18.7152C43.4086 18.9501 43.8233 18.9163 44.0582 18.6396C44.2931 18.363 44.2593 17.9483 43.9827 17.7134C40.7847 14.9975 36.6188 13.3553 32.0659 13.3553Z"}),(0,h.jsx)("path",{d:"M45.455 20.1635C45.717 19.9123 46.133 19.921 46.3842 20.183C49.2843 23.2072 50.2126 27.9605 50.8269 31.9494C51.5188 36.4426 51.6244 40.826 51.6244 42.8585C51.6244 43.2214 51.3302 43.5156 50.9673 43.5156C50.6044 43.5156 50.3101 43.2214 50.3101 42.8585C50.3101 40.8589 50.2055 36.5497 49.5279 32.1494C48.9577 28.4462 48.1356 23.9082 45.4356 21.0927C45.1844 20.8307 45.1931 20.4147 45.455 20.1635Z"}),(0,h.jsx)("path",{d:"M51.4576 46.6219C51.4864 46.2601 51.2165 45.9435 50.8547 45.9146C50.493 45.8858 50.1763 46.1557 50.1474 46.5175C49.8247 50.5654 49.403 54.6088 48.5474 58.3439C48.4663 58.6977 48.6874 59.0502 49.0412 59.1312C49.3949 59.2123 49.7474 58.9912 49.8285 58.6374C50.7067 54.8039 51.134 50.6806 51.4576 46.6219Z"}),(0,h.jsx)("path",{d:"M15.1454 36.852C15.5015 36.7819 15.847 37.0137 15.9171 37.3698C17.3066 44.4257 16.3467 50.8355 12.6672 56.4502C12.4682 56.7537 12.0609 56.8385 11.7573 56.6396C11.4538 56.4407 11.369 56.0333 11.5679 55.7298C15.0299 50.4469 15.9617 44.3985 14.6276 37.6238C14.5575 37.2677 14.7893 36.9221 15.1454 36.852Z"}),(0,h.jsx)("path",{d:"M32.0659 17.631C25.5291 17.631 19.1165 22.691 18.462 29.0504C18.1754 31.8345 18.578 34.5769 18.9807 37.3204C19.3323 39.7159 19.684 42.1124 19.5772 44.5381C19.3328 50.0898 17.7039 54.6726 14.905 58.4471C14.6888 58.7386 14.7499 59.1502 15.0414 59.3663C15.333 59.5825 15.7445 59.5214 15.9607 59.2299C18.9293 55.2266 20.6354 50.386 20.8903 44.5959C20.9966 42.1811 20.6438 39.7923 20.2912 37.4051C19.888 34.6752 19.4851 31.9473 19.7694 29.1849C20.3444 23.5983 26.0946 18.9453 32.0659 18.9453C34.851 18.9453 42.057 20.4534 44.3492 27.9205C45.7856 32.5998 46.1774 38.9326 45.8295 45.0849C45.4816 51.2364 44.3994 57.12 42.9442 60.8928C42.8136 61.2314 42.9822 61.6118 43.3208 61.7424C43.6594 61.873 44.0398 61.7044 44.1704 61.3658C45.6929 57.4186 46.7895 51.386 47.1417 45.1591C47.4938 38.9329 47.1068 32.4249 45.6056 27.5348C43.0612 19.2461 35.0851 17.631 32.0659 17.631Z"}),(0,h.jsx)("path",{d:"M21.9529 56.4512C22.2569 56.6494 22.3426 57.0566 22.1444 57.3606C21.7369 57.9854 21.3784 58.6391 21.0199 59.2928C20.6614 59.9465 20.3028 60.6004 19.8953 61.2253C19.697 61.5293 19.2898 61.615 18.9858 61.4167C18.6819 61.2184 18.5962 60.8113 18.7944 60.5073C19.2019 59.8825 19.5604 59.2288 19.9189 58.5751C20.2774 57.9213 20.636 57.2675 21.0435 56.6426C21.2418 56.3386 21.649 56.2529 21.9529 56.4512Z"}),(0,h.jsx)("path",{d:"M27.5799 24.4525C27.8816 24.2508 27.9625 23.8426 27.7608 23.541C27.559 23.2393 27.1509 23.1583 26.8492 23.3601C24.247 25.1006 22.6505 27.494 22.6505 31.0002C22.6505 33.088 23.0203 34.7946 23.3997 36.5449C23.9674 39.1641 24.3524 41.7777 24.2832 44.468C24.1992 47.7349 23.56 50.7201 22.3313 53.564C22.1873 53.8971 22.3407 54.2839 22.6739 54.4278C23.0071 54.5718 23.3938 54.4184 23.5378 54.0852C24.8369 51.0784 25.509 47.9266 25.5971 44.5018C25.6689 41.7062 25.2732 38.9892 24.6845 36.267C24.3042 34.509 23.9648 32.9394 23.9648 31.0002C23.9648 27.9961 25.2863 25.9866 27.5799 24.4525Z"}),(0,h.jsx)("path",{d:"M30.1447 22.1436C32.8717 21.5877 35.8061 22.2746 37.966 24.0228C41.8241 27.1455 42.3372 32.8403 42.753 37.4549L42.7742 37.69C43.3115 43.6385 42.6964 49.4163 41.4575 55.2186C41.3817 55.5736 41.0326 55.7999 40.6776 55.7241C40.3227 55.6483 40.0964 55.2991 40.1722 54.9442C41.3926 49.2288 41.9873 43.5885 41.4652 37.8082C41.4479 37.6169 41.4307 37.4228 41.4133 37.2264L41.4131 37.2235C41.0438 33.0534 40.5812 27.8304 37.1392 25.0444C35.2926 23.5498 32.7599 22.9518 30.4073 23.4314C30.0517 23.5039 29.7046 23.2744 29.6321 22.9188C29.5596 22.5632 29.7891 22.2161 30.1447 22.1436Z"}),(0,h.jsx)("path",{d:"M40.5287 58.4885C40.6183 58.1368 40.4057 57.7791 40.054 57.6896C39.7023 57.6 39.3446 57.8126 39.2551 58.1643C38.8578 59.7247 38.2456 61.1333 37.4695 62.4301C37.2831 62.7415 37.3844 63.145 37.6958 63.3314C38.0072 63.5178 38.4108 63.4165 38.5972 63.1051C39.4336 61.7075 40.0977 60.1816 40.5287 58.4885Z"}),(0,h.jsx)("path",{d:"M37.3152 48.9521C37.6756 48.9948 37.9332 49.3215 37.8906 49.682C37.2699 54.9267 35.8688 59.6042 33.6205 63.6613C33.4446 63.9787 33.0446 64.0934 32.7272 63.9175C32.4097 63.7416 32.295 63.3417 32.4709 63.0242C34.6226 59.1416 35.9811 54.6339 36.5854 49.5275C36.6281 49.1671 36.9548 48.9095 37.3152 48.9521Z"}),(0,h.jsx)("path",{d:"M37.1798 30.6556C36.7242 28.2212 34.6349 26.3591 32.0985 26.3591C28.6638 26.3591 26.254 29.8212 27.1032 33.0422C28.54 38.7279 28.7759 44.2077 27.8032 49.4855L27.8025 49.4893C26.9584 54.228 25.3374 58.4908 23.1263 62.1031C22.9368 62.4127 23.0342 62.8172 23.3437 63.0067C23.6533 63.1962 24.0578 63.0988 24.2473 62.7893C26.5488 59.0292 28.2249 54.6109 29.0961 49.7218C30.106 44.2403 29.8558 38.5684 28.3765 32.7168L28.3748 32.7099C27.7378 30.3005 29.5133 27.6734 32.0985 27.6734C33.9641 27.6734 35.5393 29.0459 35.8871 30.8929C36.8436 36.4411 37.3418 41.5862 36.9871 46.016C36.9581 46.3778 37.2279 46.6945 37.5897 46.7235C37.9515 46.7525 38.2682 46.4827 38.2972 46.1209C38.6649 41.5294 38.1459 36.2576 37.1815 30.6648C37.1809 30.6617 37.1804 30.6586 37.1798 30.6556Z"}),(0,h.jsx)("path",{d:"M30.1376 59.1171C30.4604 59.283 30.5876 59.6792 30.4217 60.002L28.6804 63.3906C28.5145 63.7134 28.1184 63.8406 27.7956 63.6747C27.4728 63.5088 27.3456 63.1127 27.5114 62.7899L29.2527 59.4013C29.4186 59.0785 29.8147 58.9513 30.1376 59.1171Z"}),(0,h.jsx)("path",{d:"M32.5872 31.2892C32.5042 30.9359 32.1505 30.7168 31.7972 30.7998C31.4439 30.8828 31.2247 31.2365 31.3077 31.5898C33.5238 41.0232 33.2194 49.3066 30.5201 56.363C30.3905 56.702 30.5602 57.0819 30.8991 57.2115C31.2381 57.3412 31.618 57.1715 31.7477 56.8326C34.5622 49.475 34.8483 40.9141 32.5872 31.2892Z"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_113_33841",children:(0,h.jsx)("rect",{width:"64",height:"64",fill:"white",transform:"translate(0.483887)"})})})]}),lx=({passkeys:e,expanded:t,onUnlink:r,onExpand:i})=>{let[n,a]=(0,o.useState)([]),s=t?e.length:2,l=e=>e.authenticatorName?e.createdWithBrowser?`${e.authenticatorName} on ${e.createdWithBrowser}`:e.authenticatorName:e.createdWithBrowser?e.createdWithOs?`${e.createdWithBrowser} on ${e.createdWithOs}`:`${e.createdWithBrowser}`:"Unknown device",c=async e=>{a(t=>t.concat([e])),await r(e),a(t=>t.filter(t=>t!==e))};return(0,h.jsxs)("div",{children:[(0,h.jsx)(lT,{children:"Your passkeys"}),(0,h.jsxs)(lk,{children:[e.slice(0,s).map(e=>(0,h.jsxs)(lN,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(lP,{children:l(e)}),(0,h.jsxs)(lR,{children:["Last used: ",(e.latestVerifiedAt??e.verifiedAt).toLocaleString()]})]}),(0,h.jsx)(lI,{disabled:n.includes(e.credentialId),onClick:()=>c(e.credentialId),children:n.includes(e.credentialId)?(0,h.jsx)(iX,{}):(0,h.jsx)(el.Z,{height:"1.6em"})})]},e.credentialId)),e.length>2&&!t&&(0,h.jsx)(lj,{onClick:i,children:"View all"})]})]})},lv=()=>(0,h.jsxs)(lk,{children:[(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(ec.Z,{})}),"Log in with Touch ID, Face ID, or a security key."]}),(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(Y.Z,{})}),"More secure than a password."]}),(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(J.Z,{})}),"Takes seconds to set up and use."]})]}),lC=_.ZP.div`
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
`,lb=_.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: ${e=>e.success?"var(--privy-color-success)":e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  display: flex;
  justify-content: flex-beginngin;
  width: 100%;
`,l_=(0,_.iv)`
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
`,lj=_.ZP.button`
  ${l_}
`,lk=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,lE=_.ZP.div`
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  font-weight: 600;
`,lA=_.ZP.div`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 10px;
`,lS=_.ZP.div`
  height: 32px;
`,lT=_.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`,lP=_.ZP.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,lR=_.ZP.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`,lN=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`,lO=(0,_.iv)`
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
`,lI=_.ZP.button`
  ${lO}
`,lM=({style:e,...t})=>(0,h.jsxs)("svg",{width:"164",height:"164",viewBox:"0 0 164 164",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"26px",width:"26px",...e},...t,children:[(0,h.jsx)("circle",{cx:"82",cy:"82",r:"80",stroke:"#EC6351","stroke-width":"4","stroke-linecap":"round"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81.9999 100.788C93.3288 100.788 102.513 91.6043 102.513 80.2754C102.513 68.9465 93.3288 59.7626 81.9999 59.7626C70.671 59.7626 61.4871 68.9465 61.4871 80.2754C61.4871 91.6043 70.671 100.788 81.9999 100.788ZM88.3236 71.8304C88.9093 71.2446 89.8591 71.2446 90.4449 71.8304C91.0307 72.4161 91.0307 73.3659 90.4449 73.9517L84.121 80.2756L90.445 86.5996C91.0308 87.1854 91.0308 88.1351 90.445 88.7209C89.8592 89.3067 88.9095 89.3067 88.3237 88.7209L81.9997 82.3969L75.6756 88.7209C75.0899 89.3067 74.1401 89.3067 73.5543 88.7209C72.9685 88.1351 72.9685 87.1854 73.5543 86.5996L79.8783 80.2756L73.5544 73.9517C72.9686 73.3659 72.9686 72.4161 73.5544 71.8304C74.1402 71.2446 75.09 71.2446 75.6758 71.8304L81.9997 78.1543L88.3236 71.8304Z",fill:"#EC6351"})]});function lL(){let{promptMfa:e,init:t,submit:r,cancel:i,mfaMethods:n}=(0,o.useContext)(iZ);return{promptMfa:e,init:t,submit:r,cancel:i,mfaMethods:n}}function lW(){let{initEnrollmentWithSms:e,initEnrollmentWithTotp:t,initEnrollmentWithPasskey:r,submitEnrollmentWithSms:i,submitEnrollmentWithTotp:n,submitEnrollmentWithPasskey:a,unenroll:s,enrollInMfa:l}=(0,o.useContext)(iZ);return{initEnrollmentWithSms:e,initEnrollmentWithTotp:t,initEnrollmentWithPasskey:r,submitEnrollmentWithSms:i,submitEnrollmentWithTotp:n,submitEnrollmentWithPasskey:a,unenrollWithSms:()=>s("sms"),unenrollWithTotp:()=>s("totp"),unenrollWithPasskey:()=>s("passkey"),showMfaEnrollmentModal:()=>l(!0),closeMfaEnrollmentModal:()=>l(!1)}}var lF=e=>(0,h.jsxs)(lU,{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"88",height:"89",viewBox:"0 0 88 89",...e,children:[(0,h.jsx)("rect",{y:"0.666016",width:"88",height:"88",rx:"44"}),(0,h.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M45.2463 20.9106C44.5473 20.2486 43.4527 20.2486 42.7537 20.9106C37.8798 25.5263 31.3034 28.3546 24.0625 28.3546C23.9473 28.3546 23.8323 28.3539 23.7174 28.3525C22.9263 28.3427 22.2202 28.8471 21.9731 29.5987C20.9761 32.6311 20.4375 35.8693 20.4375 39.2297C20.4375 53.5896 30.259 65.651 43.5482 69.0714C43.8446 69.1477 44.1554 69.1477 44.4518 69.0714C57.741 65.651 67.5625 53.5896 67.5625 39.2297C67.5625 35.8693 67.0239 32.6311 66.0269 29.5987C65.7798 28.8471 65.0737 28.3427 64.2826 28.3525C64.1677 28.3539 64.0527 28.3546 63.9375 28.3546C56.6966 28.3546 50.1202 25.5263 45.2463 20.9106ZM52.7249 40.2829C53.3067 39.4683 53.1181 38.3363 52.3035 37.7545C51.4889 37.1726 50.3569 37.3613 49.7751 38.1759L41.9562 49.1223L38.0316 45.1977C37.3238 44.4899 36.1762 44.4899 35.4684 45.1977C34.7605 45.9056 34.7605 47.0532 35.4684 47.761L40.9059 53.1985C41.2826 53.5752 41.806 53.7671 42.337 53.7232C42.868 53.6792 43.3527 53.4039 43.6624 52.9704L52.7249 40.2829Z"})]}),lU=_.ZP.svg`
  height: 90px;
  width: 90px;

  > rect {
    ${e=>"success"===e.color?"fill: var(--privy-color-success);":"fill: var(--privy-color-accent);"}
  }

  > path {
    fill: white;
  }
`,lD=({showIntro:e,userMfaMethods:t,appMfaMethods:r,userHasAuthSms:i,isTotpLoading:n,isPasskeyLoading:a,error:o,onClose:s,onBackToIntro:l,handleSelectMethod:c,setRemovingMfaMethod:d})=>{let p=t.reduce((e,t)=>({...e,[t]:!0}),{}),u=r.reduce((e,t)=>({...e,[t]:!0}),{});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e?l:void 0,onClose:s},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(em.Z,{})})}),(0,h.jsx)(nP,{children:"Choose a verification method"}),t.length>0?(0,h.jsx)(nR,{children:"To add or delete verification methods, verification is required."}):(0,h.jsx)(nR,{children:"How would you like to verify your identity? You can change this later."}),o&&(0,h.jsx)(nV,{style:{marginTop:"1.25rem"},children:o.message}),(0,h.jsxs)(nW,{children:[(u.totp||p.totp)&&(0,h.jsxs)(nF,{children:[(0,h.jsx)(nE,{style:{justifyContent:"center"},disabled:p.totp||n,onClick:()=>c("totp"),children:n?(0,h.jsx)(iQ,{style:{height:24,width:24,borderWidth:2},color:"var(--privy-color-foreground-3)"}):(0,h.jsxs)(nz,{children:[(0,h.jsxs)(nD,{children:[(0,h.jsx)(ef.Z,{}),"Authenticator App"]}),p.totp?(0,h.jsxs)(nZ,{children:[(0,h.jsx)(T.Z,{}),"Added"]}):(0,h.jsx)(nZ,{children:"Recommended"})]})}),p.totp&&(0,h.jsx)(nU,{onClick:()=>d("totp"),children:(0,h.jsx)(el.Z,{})})]},"totp"),(u.sms||p.sms)&&(0,h.jsxs)(nF,{children:[(0,h.jsx)(nE,{disabled:p.sms||i,onClick:()=>c("sms"),children:(0,h.jsxs)(nz,{children:[(0,h.jsxs)(nD,{children:[(0,h.jsx)(R.Z,{}),"SMS"]}),p.sms&&(0,h.jsxs)(nZ,{children:[(0,h.jsx)(T.Z,{}),"Added"]}),i&&(0,h.jsx)(nZ,{children:"Disabled"})]})}),p.sms&&(0,h.jsx)(nU,{onClick:()=>d("sms"),children:(0,h.jsx)(el.Z,{})})]},"sms"),(u.passkey||p.passkey)&&(0,h.jsxs)(nF,{children:[(0,h.jsx)(nE,{style:{justifyContent:"center"},onClick:()=>c("passkey"),disabled:p.passkey||a,children:a?(0,h.jsx)(iQ,{style:{height:24,width:24,borderWidth:2},color:"var(--privy-color-foreground-3)"}):(0,h.jsxs)(nz,{children:[(0,h.jsxs)(nD,{children:[(0,h.jsx)(eg.Z,{}),"Passkey"]}),p.passkey?(0,h.jsxs)(nZ,{children:[(0,h.jsx)(T.Z,{}),"Added"]}):(0,h.jsx)(nZ,{isAccent:!0,children:(0,h.jsx)(es.Z,{})})]})}),p.passkey&&(0,h.jsx)(nU,{onClick:()=>d("passkey"),children:(0,h.jsx)(el.Z,{})})]},"passkey")]}),(0,h.jsx)(nx,{})]})},lZ=({onComplete:e,onClose:t,onReset:r})=>{let{user:i}=iz(),{data:n}=ig(),{initLinkWithPasskey:a,linkWithPasskey:s}=iD(),{initEnrollmentWithPasskey:l,submitEnrollmentWithPasskey:c}=lW(),[d,p]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1),[f,g]=(0,o.useState)(!1),[y,w]=(0,o.useState)(null),x=(0,o.useMemo)(()=>i?.linkedAccounts.filter(e=>"passkey"===e.type)??[],[i]),v=()=>{n?.mfaEnrollmentFlow?.onSuccess(),e()},C=async e=>{p(!0);try{await l(),await c({credentialIds:e}),g(!0)}catch(e){w(e)}finally{p(!1)}},b=async()=>{m(!0),w(null);try{await a();let e=(await s())?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];await C(e)}catch(e){w(e)}finally{m(!1)}};return 0===x.length||u?(0,h.jsx)(lz,{onReset:r,onClose:t,onClick:b,isCreating:u}):f?(0,h.jsx)(l$,{onClick:v,onClose:v}):y?(0,h.jsx)(oX,{error:y,backFn:()=>w(null),onClick:()=>w(null)}):(0,h.jsx)(lH,{passkeys:x,isSubmitting:d,isCreating:u,onReset:r,onClose:t,onSubmitEnrollment:()=>C(x.map(e=>e.credentialId)),onAddPasskey:b})},lz=({onReset:e,onClose:t,onClick:r,isCreating:i})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e,onClose:t},"header"),(0,h.jsx)(nT,{children:(0,h.jsxs)(lC,{children:[(0,h.jsx)(ly,{}),(0,h.jsx)(lw,{})]})}),(0,h.jsx)(nP,{children:"Set up passkey verification"}),(0,h.jsxs)(nO,{children:[(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(ew.Z,{})}),"Verify with Touch ID, Face ID, PIN, or hardware key"]}),(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(J.Z,{})}),"Takes seconds to set up and use"]}),(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(ey.Z,{})}),"Use your passkey to verify transactions and login to your account"]})]}),(0,h.jsx)(i2,{style:{marginTop:"2.25rem"},onClick:r,loading:i,children:"Add a new passkey"}),(0,h.jsx)(nx,{})]}),lH=({onReset:e,onClose:t,onAddPasskey:r,onSubmitEnrollment:i,passkeys:n,isSubmitting:a,isCreating:s})=>{let[l,c]=(0,o.useState)(!1),d=l?n.length:n.length>3?2:3;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:l?()=>c(!1):e,onClose:t},"header"),!l&&(0,h.jsx)(nT,{children:(0,h.jsxs)(lC,{children:[(0,h.jsx)(ly,{}),(0,h.jsx)(lw,{})]})}),(0,h.jsx)(nP,{children:"Enable your passkeys for verification"}),(0,h.jsxs)(nO,{children:[n.slice(0,d).map(e=>(0,h.jsxs)(lB,{children:[(0,h.jsx)(lV,{children:lG(e)}),(0,h.jsxs)(lq,{children:["Last used: ",e.latestVerifiedAt?.toLocaleString()]})]},e.credentialId)),!l&&n.length>3&&(0,h.jsx)(lK,{onClick:()=>c(!0),children:"View All"})]}),(0,h.jsx)(i2,{style:{marginTop:"1.5rem"},onClick:i,loading:a,children:"Enable passkeys"}),n.length<5&&(0,h.jsx)(lK,{style:{marginTop:"0.5rem"},onClick:r,disabled:s,children:s?(0,h.jsx)(iQ,{style:{height:"1rem",width:"1rem",borderWidth:2}}):"Add new passkey"}),(0,h.jsx)(nx,{})]})},l$=({onClick:e,onClose:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:t},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{status:"success",children:(0,h.jsx)(N.Z,{})})}),(0,h.jsx)(nP,{children:"Passkey verification added"}),(0,h.jsx)(nR,{children:"From now on, you'll use the passkey whenever you use your Privy wallet."}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{onClick:e,children:"Done"})}),(0,h.jsx)(nx,{})]}),lB=_.ZP.div`
  && {
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`,lV=_.ZP.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;

  color: var(--privy-color-foreground-1);
`,lq=_.ZP.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;

  color: var(--privy-color-foreground-2);
`,lG=e=>e.authenticatorName?e.createdWithBrowser?`${e.authenticatorName} on ${e.createdWithBrowser}`:e.authenticatorName:e.createdWithBrowser?e.createdWithOs?`${e.createdWithBrowser} on ${e.createdWithOs}`:`${e.createdWithBrowser}`:"Unknown device",lK=_.ZP.button`
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

    padding: 0.75rem 1rem;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent);

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,lY=Array(6).fill("");function lQ(e){return/^[0-9]{1}$/.test(e)}function lJ(e){return 6===e.length&&e.every(lQ)}var lX=({onChange:e,disabled:t,errorReasonOverride:r,success:i})=>{let[n,a]=(0,o.useState)(lY),[l,c]=(0,o.useState)(null),[d,p]=(0,o.useState)(null),u=async t=>{t.preventDefault();let r=t.currentTarget.value.replace(/\s+/g,"");if(""===r)return;let i=n.reduce((e,t)=>e+Number(lQ(t)),0),o=r.split(""),s=!o.every(lQ),l=o.length+i>6;if(s){c("Passcode can only be numbers"),p(1);return}if(l){c("Passcode must be exactly 6 numbers"),p(1);return}c(null),p(null);let d=Number(t.currentTarget.name?.charAt(4)),h=[...r||[""]].slice(0,6-d),u=[...n.slice(0,d),...h,...n.slice(d+h.length)];a(u);let m=Math.min(Math.max(d+h.length,0),5);if(document.querySelector(`input[name=pin-${m}]`)?.focus(),lJ(u))try{await e(u.join("")),document.querySelector(`input[name=pin-${m}]`)?.blur()}catch(e){p(1),c(e.message)}else try{await e(null)}catch(e){p(1),c(e.message)}},m=t=>{1===d&&(c(null),p(null));let r=[...n.slice(0,t),"",...n.slice(t+1)];a(r),t>0&&document.querySelector(`input[name=pin-${t-1}]`)?.focus(),lJ(r)?e(r.join("")):e(null)},f=i?"success":r||l?"fail":"";return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(l0,{children:[(0,h.jsx)("div",{children:n.map((e,r)=>(0,h.jsx)("input",{name:`pin-${r}`,type:"text",value:n[r],onChange:u,onKeyUp:e=>{"Backspace"===e.key&&m(r)},inputMode:"numeric",autoFocus:0===r,pattern:"[0-9]",className:f,autoComplete:s.tq?"one-time-code":"off",disabled:t},r))}),(0,h.jsx)("div",{children:(0,h.jsx)(l1,{fail:!!r||!!l,children:r||l})})]})})},l0=_.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;

  @media (max-width: 440px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  > div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    border-radius: var(--privy-border-radius-md);

    > input {
      border: 1px solid var(--privy-color-foreground-4);
      background: var(--privy-color-background);
      border-radius: var(--privy-border-radius-md);
      padding: 8px 10px;
      height: 58px;
      width: 46px;
      text-align: center;
      font-size: 18px;
    }

    > input:disabled {
      /* Use light-theme-bg-2 instead of disabled-bg for consistency with
      the callout bubble */
      background: var(--privy-color-background-2);
    }

    > input:focus {
      border: 1px solid var(--privy-color-accent);
    }

    > input:invalid {
      border: 1px solid var(--privy-color-error);
    }

    > input.success {
      border: 1px solid var(--privy-color-success);
    }

    > input.fail {
      border: 1px solid var(--privy-color-error);
      animation: shake 180ms;
      animation-iteration-count: 2;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 0px);
    }
    33% {
      transform: translate(-1px, 0px);
    }
    67% {
      transform: translate(-1px, 0px);
    }
    100% {
      transform: translate(1px, 0px);
    }
  }
`,l1=_.ZP.div`
  line-height: 20px;
  font-size: 13px;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  color: ${e=>e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
`,l2=({onComplete:e,onReset:t,onClose:r})=>{let[i,n]=(0,o.useState)(""),[a,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(null),[d,p]=(0,o.useState)("enroll"),{initEnrollmentWithSms:u,submitEnrollmentWithSms:m}=lW(),{app:f,data:g}=ig();function y(){g?.mfaEnrollmentFlow?.onSuccess(),e()}async function w({qualifiedPhoneNumber:e}){try{await u({phoneNumber:e}),n(e),p("verify")}catch(e){c(e)}}async function x(e){try{if(!e)return;await m({phoneNumber:i,mfaCode:e}),s(!0)}catch(e){throw aJ(e)?Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds."):aQ(e)?Error("The code you entered is not valid"):aY(e)?Error("You have exceeded the time limit for code entry. Please try again in 30 seconds."):aX(e)?Error("Verification canceled"):Error("Unknown error")}}return l?(0,h.jsx)(oX,{error:l,backFn:()=>c(null),onClick:()=>c(null)}):"enroll"===d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:t,onClose:r},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ep.Z,{})})}),(0,h.jsx)(nP,{children:"Set up SMS verification"}),(0,h.jsx)(nR,{children:"We'll text a verification code to this mobile device whenever you use your Privy wallet."}),(0,h.jsxs)(nN,{children:[(0,h.jsx)(s8,{onSubmit:w}),(0,h.jsxs)(nH,{children:["By providing your mobile number, you agree to receive text messages from ",f?.name,". Some carrier charges may apply"]})]}),(0,h.jsx)(nx,{})]}):a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:y},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{status:"success",children:(0,h.jsx)(N.Z,{})})}),(0,h.jsx)(nP,{children:"SMS verification added"}),(0,h.jsx)(nR,{children:"From now on, you'll enter the verification code sent to your mobile device whenever you use your Privy wallet."}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{onClick:y,children:"Done"})}),(0,h.jsx)(nx,{})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:function(){"verify"===d?p("enroll"):t()},onClose:r},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ep.Z,{})})}),(0,h.jsx)(nP,{children:"Enter enrollment code"}),(0,h.jsxs)(nN,{children:[(0,h.jsx)(lX,{onChange:x}),(0,h.jsxs)(nR,{children:["To continue, enter the 6-digit code sent to ",(0,h.jsx)("strong",{children:s3(i)})]})]}),(0,h.jsx)(nx,{})]})},l3=({size:e,authUrl:t})=>(0,h.jsx)(ss,{url:t,squareLogoElement:em.Z,size:e,fgColor:"#1F1F1F"}),l4=({onComplete:e,onClose:t,onReset:r,totpInfo:i})=>{let[n,a]=(0,o.useState)("enroll"),[s,l]=(0,o.useState)(!1),{submitEnrollmentWithTotp:c}=lW(),{data:d}=ig();function p(){d?.mfaEnrollmentFlow?.onSuccess(),e()}async function u(e){try{if(!e)return;await c({mfaCode:e}),l(!0)}catch(e){throw aJ(e)?Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds."):aQ(e)?Error("The code you entered is not valid"):aY(e)?Error("You have exceeded the time limit for code entry. Please try again in 30 seconds."):aX(e)?Error("Verification canceled"):Error("Unknown error")}}return"enroll"===n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:r,onClose:t},"header"),(0,h.jsx)(nP,{children:"Scan QR code"}),(0,h.jsx)(nR,{children:"Open your authenticator app and scan the QR code to continue."}),(0,h.jsx)(n2,{children:(0,h.jsx)(l3,{authUrl:i.authUrl,size:200})}),(0,h.jsxs)(nL,{children:[(0,h.jsx)(n0,{children:(0,h.jsx)(o4,{itemName:"secret",text:i.secret})}),(0,h.jsx)(i2,{onClick:function(){a("verify")},children:"Continue"})]}),(0,h.jsx)(nx,{})]}):s?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:p},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{status:"success",children:(0,h.jsx)(N.Z,{})})}),(0,h.jsx)(nP,{children:"Authenticator app verification added"}),(0,h.jsx)(nR,{children:"From now on, you'll enter the verification code generated by your authenticator app whenever you use your Privy wallet."}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{onClick:p,children:"Done"})}),(0,h.jsx)(nx,{})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:function(){"verify"===n?a("enroll"):r()},onClose:t},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ed.Z,{})})}),(0,h.jsx)(nP,{children:"Enter enrollment code"}),(0,h.jsx)(nN,{children:(0,h.jsx)(lX,{onChange:u})}),(0,h.jsxs)(nR,{children:["To continue, enter the 6-digit code generated from your ",(0,h.jsx)("strong",{children:"authenticator app"})]}),(0,h.jsx)(nx,{})]})},l5=({label:e,children:t,valueStyles:r})=>(0,h.jsxs)(l6,{children:[(0,h.jsx)("div",{children:e}),(0,h.jsx)(l7,{style:{...r},children:t})]}),l6=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,l7=_.ZP.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`,l8=(e,t)=>{let r=(t*parseFloat((0,ev.dF)(e))).toFixed(2);return"0.00"!==r?`$${r}`:"<$0.01"},l9=(e,t,r=6,i=!1)=>{let n=parseFloat((0,ev.dF)(e)).toFixed(r).replace(/0+$/,"").replace(/\.$/,"");return i?`${n} ${t}`:`${"0"===n?"<0.001":n} ${t}`},ce=e=>e.map(cr).reduce((e,t)=>e.add(t),ex.O$.from(0)).toHexString(),ct=(e,t)=>{let{chains:r}=iD(),i=`https://etherscan.io/address/${t}`,n=`${tm(e,r)}/address/${t}`;if(!n)return i;try{new URL(n)}catch{return i}return n},cr=e=>ex.O$.from(e),ci=({weiQuantities:e,tokenPrice:t,tokenSymbol:r})=>{let i=ce(e),n=t?l8(i,t):void 0,a=l9(i,r);return(0,h.jsx)(ca,{children:n||a})},cn=({weiQuantities:e,tokenPrice:t,tokenSymbol:r})=>{let i=ce(e),n=t?l8(i,t):void 0,a=l9(i,r);return(0,h.jsx)(ca,{children:n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(co,{children:"USD"}),"<$0.01"===n?(0,h.jsxs)(cl,{children:[(0,h.jsx)(cs,{children:"<"}),"$0.01"]}):n]}):a})},ca=_.ZP.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,co=_.ZP.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,cs=_.ZP.span`
  font-size: 10px;
`,cl=_.ZP.span`
  display: flex;
  align-items: center;
`,cc=({gas:e,tokenPrice:t,tokenSymbol:r})=>(0,h.jsxs)(n4,{style:{paddingBottom:"12px"},children:[(0,h.jsxs)(ch,{children:[(0,h.jsx)(cu,{children:"Est. Fees"}),(0,h.jsx)("div",{children:(0,h.jsx)(cn,{weiQuantities:[e],tokenPrice:t,tokenSymbol:r})})]}),t&&(0,h.jsx)(cp,{children:`${l9(e,r)}`})]}),cd=({transactionData:e,gas:t,tokenPrice:r,tokenSymbol:i})=>{let n=cr(e.value||0).add(cr(t)).toHexString();return(0,h.jsxs)(n4,{children:[(0,h.jsxs)(ch,{children:[(0,h.jsx)(cu,{children:"Total (including fees)"}),(0,h.jsx)("div",{children:(0,h.jsx)(cn,{weiQuantities:[e.value||0,t],tokenPrice:r,tokenSymbol:i})})]}),r&&(0,h.jsx)(cp,{children:l9(n,i)})]})},ch=_.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,cp=_.ZP.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,cu=_.ZP.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`,cm=(0,o.createContext)(void 0),cf=(0,o.createContext)(void 0),cg=({defaultValue:e,children:t})=>{let[r,i]=(0,o.useState)(e||null);return(0,h.jsx)(cm.Provider,{value:{activePanel:r,togglePanel:e=>{i(r===e?null:e)}},children:(0,h.jsx)(cC,{children:t})})},cy=({value:e,children:t})=>{let{activePanel:r,togglePanel:i}=(0,o.useContext)(cm),n=r===e;return(0,h.jsx)(cf.Provider,{value:{onToggle:()=>i(e),value:e},children:(0,h.jsx)(ck,{isActive:n,"data-open":n,children:t})})},cw=({children:e})=>{let{activePanel:t}=(0,o.useContext)(cm),{onToggle:r,value:i}=(0,o.useContext)(cf),n=t===i;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(cb,{onClick:r,"data-open":n,children:[(0,h.jsx)(cj,{children:e}),(0,h.jsx)(cS,{isactive:n,children:(0,h.jsx)(eC.Z,{height:"16px",width:"16px",strokeWidth:"2"})})]}),(0,h.jsx)(c_,{})]})},cx=({children:e})=>{let{activePanel:t}=(0,o.useContext)(cm),{value:r}=(0,o.useContext)(cf);return(0,h.jsx)(cE,{"data-open":t===r,children:(0,h.jsx)(cA,{children:e})})},cv=({children:e})=>{let{activePanel:t}=(0,o.useContext)(cm),{value:r}=(0,o.useContext)(cf);return(0,h.jsx)(cA,{children:"function"==typeof e?e({isActive:t===r}):e})},cC=_.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,cb=_.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,c_=_.ZP.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,cj=_.ZP.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,ck=_.ZP.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,cE=_.ZP.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,cA=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,cS=_.ZP.div`
  transform: ${e=>e.isactive?"rotate(180deg)":"rotate(0deg)"};
`,cT=({walletAddress:e,chainId:t=tD})=>(0,h.jsx)(cP,{href:ct(t,e),target:"_blank",children:ta(e)}),cP=_.ZP.a`
  &:hover {
    text-decoration: underline;
  }
`,cR=({from:e,to:t,txn:r,transactionInfo:i,tokenPrice:n,gas:a,tokenSymbol:o})=>{let s=r?.value||0,l=ic();return(0,h.jsx)(cg,{...l.render.standalone?{defaultValue:"details"}:{},children:(0,h.jsxs)(cy,{value:"details",children:[(0,h.jsx)(cw,{children:(0,h.jsxs)(cN,{children:[(0,h.jsx)("div",{children:i?.title||i?.actionDescription||"Details"}),(0,h.jsx)(cO,{children:(0,h.jsx)(ci,{weiQuantities:[s],tokenPrice:n,tokenSymbol:o})})]})}),(0,h.jsxs)(cx,{children:[(0,h.jsx)(l5,{label:"From",children:(0,h.jsx)(cT,{walletAddress:e,chainId:r.chainId||tD})}),(0,h.jsx)(l5,{label:"To",children:(0,h.jsx)(cT,{walletAddress:t,chainId:r.chainId||tD})}),i&&i.action&&(0,h.jsx)(l5,{label:"Action",children:i.action}),a&&(0,h.jsx)(cc,{transactionData:r,gas:a,tokenPrice:n,tokenSymbol:o})]}),(0,h.jsx)(cv,{children:({isActive:e})=>(0,h.jsx)(cd,{transactionData:r,displayFee:e,gas:a||"0x0",tokenPrice:n,tokenSymbol:o})})]})})},cN=_.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,cO=_.ZP.div`
  flex-shrink: 0;
  padding-left: 8px;
`,cI=({description:e,contractInfo:t})=>(0,h.jsxs)(cM,{children:[t.imgUrl&&(0,h.jsx)(cL,{size:t.imgSize||"sm",src:t.imgUrl,alt:t.imgAltText||`${t.name} image`}),t.url&&(0,h.jsx)(cW,{children:(0,h.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:t.url.replace(/^(https?:\/\/)(www\.)?/,"")})}),t.name&&(0,h.jsx)(cF,{children:t.name}),(0,h.jsx)(cU,{children:e||t.actionText})]}),cM=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`,cL=_.ZP.img`
  && {
    height: ${e=>"sm"===e.size?"65px":"140px"};
    width: ${e=>"sm"===e.size?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`,cW=_.ZP.div`
  font-size: 12px;
  line-height: 12px;
  padding: 7px;

  && a {
    font-weight: 400;
    color: var(--privy-color-foreground-3);

    &:hover {
      text-decoration: underline;
    }
  }
`,cF=_.ZP.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  max-width: 275px;
  text-overflow: ellipsis;
`,cU=_.ZP.div`
  font-size: 16px;
  line-height: 140%;
  font-weight: 400;
  color: var(--privy-color-foreground-1);
  overflow: hidden;
  max-width: 275px;
  text-overflow: ellipsis;
`,cD=({address:e,txn:t,balance:r,hasFunds:i})=>{let{nativeTokenSymbolForChainId:n}=iD(),a=n(t.chainId)||"ETH";return(0,h.jsxs)(cZ,{children:[(0,h.jsxs)(cz,{children:[(0,h.jsx)(I.Z,{strokeWidth:"2",width:"16px",height:"16px"}),(0,h.jsx)("div",{children:ta(e)})]}),(0,h.jsxs)(cH,{displayBalanceColor:!!r,hasFunds:i,children:[r?l9(r,a,6,!0):0," available"]})]})},cZ=_.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 9px 12px;
  height: 40px;
  color: var(--privy-color-foreground-3);

  && {
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,cz=_.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,cH=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 100%;
  border-radius: 16px;
  background-color: var(--privy-color-background-2);
  padding: 5px 8px;
  color: ${e=>e.displayBalanceColor?e.hasFunds?"var(--privy-color-success-dark)":"var(--privy-color-error)":"inherit"};
`,c$=({description:e,txn:t,tokenSymbol:r,tokenPrice:i})=>{let n=t.value||0,a=i?l8(n,i):void 0,o=l9(n,r);return(0,h.jsxs)(cB,{children:[a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(cV,{children:a}),(0,h.jsx)(cq,{children:o})]}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(cV,{children:o})}),(0,h.jsx)(cG,{children:e})]})},cB=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`,cV=_.ZP.h2`
  && {
    font-size: 48px;
    line-height: 48px;
    margin: 8px auto;
  }
`,cq=_.ZP.p`
  margin-bottom: 12px;
  && {
    font-size: 17px;
    line-height: 17px;
    color: var(--privy-color-foreground-3);
  }
`,cG=_.ZP.div`
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 400;
  overflow: hidden;
  max-width: 275px;
  text-overflow: ellipsis;
`,cK=e=>[rQ.id,rJ.id,rX.id,r1.id,r2.id,r3.id,r6.id,r8.id,r7.id,81457,168587773].includes(e),cY=async(e,t)=>{if(!cK(e.chainId))throw Error("Invalid chain ID for OP Stack gas estimation.");if(void 0===e.type&&(e.type=2),e.maxPriorityFeePerGas&&e.maxFeePerGas||e.gasPrice)return e;try{if(!e.maxPriorityFeePerGas){let r=await t.send("eth_maxPriorityFeePerGas",[]);e.maxPriorityFeePerGas=r}if(e.maxFeePerGas&&(console.warn("maxFeePerGas is specified without maxPriorityFeePerGas - this can result in hung transactions."),e.maxPriorityFeePerGas>=e.maxFeePerGas))throw Error("Overridden maxFeePerGas is less than or equal to the calculated maxPriorityFeePerGas. Please set both values or maxPriorityFeePerGas alone for correct gas estimation.");if(!e.maxFeePerGas){let{lastBaseFeePerGas:r}=await t.getFeeData();if(!r)throw Error("Unable to fetch baseFee for last block.");let i=ex.O$.from(r).mul(ex.O$.from(126)).div(ex.O$.from(100)).add(ex.O$.from(e.maxPriorityFeePerGas));e.maxFeePerGas=dt(i)}}catch(e){throw Error(`Failed to set gas price for OP stack transaction: ${e}.`)}return e};async function cQ(e,t){if(!e.chainId||e.chainId&&!cK(e.chainId))return ex.O$.from(0);let r=ex.O$.from(0);try{let i;let n=new e_.CH("0x420000000000000000000000000000000000000F",tZ,t),a=(i={},void 0!==e.to&&(i.to=e.to),void 0!==e.data&&(i.data=e.data),void 0!==e.chainId&&(i.chainId=e.chainId),void 0!==e.type&&(i.type=e.type),void 0!==e.accessList&&(i.accessList=e.accessList),void 0!==e.nonce&&(i.nonce=cr(e.nonce).toNumber()),void 0!==e.gasLimit&&(i.gasLimit=cr(e.gasLimit)),void 0!==e.gasPrice&&(i.gasPrice=cr(e.gasPrice)),void 0!==e.value&&(i.value=cr(e.value)),void 0!==e.maxFeePerGas&&(i.maxFeePerGas=cr(e.maxFeePerGas)),void 0!==e.maxPriorityFeePerGas&&(i.maxPriorityFeePerGas=cr(e.maxPriorityFeePerGas)),i),o=(0,ej.qC)(a);r=await n.getL1Fee(o)}catch{}return r}async function cJ(e,t){try{return(await t.estimateGas(e)).toHexString()}catch(r){console.warn(`Gas estimation failed with error: ${r}. Retrying gas estimation by omitting the 'from' address`);try{let r={...e,from:void 0};return(await t.estimateGas(r)).toHexString()}catch(e){throw console.warn(`Gas estimation failed with error: ${e} when omitting the 'from' address`),r}}}var cX=async(e,t)=>{if(void 0===e.type&&(e.type=2),2===e.type){if(!e.maxFeePerGas||!e.maxPriorityFeePerGas){let r=await t.getFeeData();e.maxFeePerGas||(e.maxFeePerGas=r.maxFeePerGas?.toHexString()),e.maxPriorityFeePerGas||(e.maxPriorityFeePerGas=r.maxPriorityFeePerGas?.toHexString())}}else if(!e.gasPrice){let r=await t.getFeeData();e.gasPrice=r.gasPrice?.toHexString()}return e};async function c0(e,t){if(!e.gasLimit)throw new rw("gasLimit was not successfully set for transaction.");let r=cr(e.gasLimit),i=ex.O$.from(0);if(2==e.type){if(e.maxFeePerGas)i=cr(e.maxFeePerGas);else throw new rw("maxFeePerGas was not successfully set for transaction of type 2.")}else if(e.gasPrice)i=cr(e.gasPrice);else throw new rw("gasPrice was not successfully set for transaction of type 0 or 1.");let n=r.mul(i),a=ex.O$.from(0);if(e.chainId&&cK(e.chainId))try{a=await cQ(e,t),n=n.add(a)}catch{}return{totalGasEstimate:n,l1ExecutionFeeEstimate:a}}var c1=e=>[rG.id,rK.id,rY.id].includes(e),c2=async(e,t)=>{if(!c1(e.chainId))throw Error("Invalid chain ID for Arbitrum gas estimation.");if(void 0===e.type&&(e.type=2),e.maxFeePerGas)return e;try{let{lastBaseFeePerGas:r}=await t.getFeeData();if(r){let t=r.mul(ex.O$.from(120)).div(ex.O$.from(100));e.maxFeePerGas=dt(t),e.maxPriorityFeePerGas=dt(ex.O$.from(0))}}catch(e){throw Error(`Failed to set gas price for Arbitrum transaction: ${e}.`)}return e},c3=e=>[56,97].includes(e),c4=async(e,t)=>{if(!c3(e.chainId))throw Error("Invalid chain ID for BSC gas estimation.");if(void 0===e.type?e.type=0:(1==e.type||2==e.type)&&console.warn("Transaction request type specified is incompatible for chain and will result in undefined behavior.  Please use transaction type 0."),!e.gasPrice){let r=await t.getFeeData();e.gasPrice=r.gasPrice?.toHexString()}return e},c5={id:80002},c6=e=>[r4.id,r5.id,c5.id].includes(e),c7=e=>({maxPriorityFee:(0,ev.vz)(e.maxPriorityFee.toFixed(9),"gwei").toHexString(),maxFee:(0,ev.vz)(e.maxFee.toFixed(9),"gwei").toHexString()}),c8=e=>({safeLow:c7(e.safeLow),standard:c7(e.standard),fast:c7(e.fast)}),c9=async e=>{let t="";switch(e){case r4.id:t="https://gasstation.polygon.technology/v2";break;case r5.id:t="https://gasstation-testnet.polygon.technology/v2";break;case c5.id:t="https://gasstation-testnet.polygon.technology/amoy";break;default:throw Error(`chainId ${e} does not support polygon gas stations`)}return c8(await (0,x.Wg)(t))};async function de(e){if(!c6(e.chainId))throw Error("Invalid chain ID for Polygon gas estimation.");if(void 0===e.type&&(e.type=2),e.maxPriorityFeePerGas&&e.maxFeePerGas)return e;try{let{standard:t}=await c9(e.chainId);e.maxPriorityFeePerGas||(e.maxPriorityFeePerGas=t.maxPriorityFee),e.maxFeePerGas||(e.maxFeePerGas=t.maxFee)}catch(e){throw Error(`Failed to set gas prices from Polygon gas station with error: ${e}.`)}return e}function dt(e){if("number"==typeof e||"bigint"==typeof e||"string"==typeof e)return e;if("function"==typeof e.toHexString)return e.toHexString();throw Error(`Expected numeric value but received ${e}`)}async function dr(e,t,r){if(t.chainId=Number(t.chainId),da(t),t.from||(t.from=e),!t.nonce){let i=new eb.b(e,r);t.nonce=await i.getTransactionCount("pending")}return t.gasLimit||(t.gas?(t.gasLimit=t.gas,delete t.gas):t.gasLimit=await cJ(t,r)),"string"==typeof t.type&&ds(t.type)&&(t.type=Number(t.type)),[23294,23295].includes(t.chainId)&&(t.type=0),0===(t=c6(t.chainId)?await de(t):c1(t.chainId)?await c2(t,r):cK(t.chainId)?await cY(t,r):c3(t.chainId)?await c4(t,r):await cX(t,r)).type&&delete t.accessList,2!==t.type&&(delete t.maxPriorityFeePerGas,delete t.maxFeePerGas),t}async function di(e,t,r,i,n){da(i=Object.assign({chainId:tD},i));let a=(await r.rpc({address:t,accessToken:e,request:{method:"eth_signTransaction",params:[i]}})).response.data;return await n.sendTransaction(a)}async function dn(e,t,r,i){let n=await i.getBalance(e),a=t.value||0,o=!n.sub(cr(a)).sub(r).isNegative();return{balance:n,hasSufficientFunds:o}}function da(e){for(let t of["gasLimit","gasPrice","value","maxPriorityFeePerGas","maxFeePerGas"]){let r=e[t];if(!(typeof r>"u")&&!function(e){let t="number"==typeof e,r="bigint"==typeof e,i="string"==typeof e&&ds(e);return t||r||i}(r))throw Error(`Transaction request property '${t}' must be a valid number, bigint, or hex string representing a quantity`)}if("number"!=typeof e.chainId)throw Error("Transaction request property 'chainId' must be a number")}function ds(e){return/^-?0x[a-f0-9]+$/i.test(e)}function dl(e){return{to:e.to,from:e.from,contractAddress:e.contractAddress,transactionIndex:e.transactionIndex,root:e.root,logsBloom:e.logsBloom,blockHash:e.blockHash,transactionHash:e.transactionHash,logs:e.logs,blockNumber:e.blockNumber,confirmations:e.confirmations,byzantium:e.byzantium,type:e.type,status:e.status,gasUsed:e.gasUsed.toHexString(),cumulativeGasUsed:e.cumulativeGasUsed.toHexString(),effectiveGasPrice:e.effectiveGasPrice?e.effectiveGasPrice.toHexString():void 0}}var dc=e=>{let{showFiatPrices:t,getUsdTokenPrice:r,chains:i}=iD(),[n,a]=(0,o.useState)(!0),[s,l]=(0,o.useState)(void 0),[c,d]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{let n=e.chainId||tD,o=i.find(e=>e.id===Number(n));if(!o)throw new ez(`Unsupported chain: ${n}`);(async()=>{if(!t){a(!1);return}try{a(!0);let e=await r(o);e?d(e):l(Error(`Unable to fetch token price on chain id ${o.id}`))}catch(e){l(e)}finally{a(!1)}})()},[e.chainId]),{tokenPrice:c,isTokenPriceLoading:n,tokenPriceError:s}},dd=(0,o.createContext)(null);function dh(){let e=(0,o.useContext)(dd);if(null===e)throw Error("`useWallets` was called outside the PrivyProvider component");return e}var dp=({pendingTransaction:e})=>{let{getAccessToken:t}=iz(),{wallets:r}=dh(),{walletProxy:i,rpcConfig:n,chains:a,appId:s,nativeTokenSymbolForChainId:l}=iD(),[c,d]=(0,o.useState)(null),[p,u]=(0,o.useState)(e),{tokenPrice:m}=dc(p),f=l(e.chainId)||"ETH",g=(0,o.useMemo)(()=>r.find(e=>"privy"===e.walletClientType),[r]);return(0,o.useEffect)(()=>{(async function(){if(!await t()||!i||!g)return p;let e=tf(p.chainId,a,n,{appId:s}),r=await dr(g.address,p,e),{totalGasEstimate:o}=await c0(r,e);return d(o.toHexString()),r})().then(u).catch(console.error)},[i]),g?(0,h.jsx)(du,{children:(0,h.jsx)(cR,{from:g.address,to:p.to,txn:p,gas:c??void 0,tokenPrice:m,tokenSymbol:f})}):null},du=_.ZP.div`
  width: 100%;
  padding: 1rem 0;
`,dm=({hasBlockingError:e,error:t,onClose:r,onBack:i,handleSubmit:n,account:a,submitSuccess:o})=>{let{pendingTransaction:s}=iD();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:r},"header"),(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:o,fail:!!t}),t?(0,h.jsx)(W.Z,{style:{width:"38px",height:"38px"}}):(0,h.jsx)(ly,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsx)(nP,{style:{marginTop:"1rem"},children:"Verifying with passkey"}),(0,h.jsxs)(nO,{children:[(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(ew.Z,{})}),"Approve this action using your touch, face, PIN, or hardware key."]}),(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(ek.Z,{})}),"You last added a passkey on"," ",a?.firstVerifiedAt?.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"}),"."]})]}),s&&(0,h.jsx)(nN,{children:(0,h.jsx)(dp,{pendingTransaction:s})}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(nV,{style:{marginTop:"1.25rem"},children:t.message}),(0,h.jsx)(i2,{disabled:e,onClick:n,style:{marginTop:"1.25rem"},children:"Try again"})]}),i&&(0,h.jsx)(n$,{style:{marginTop:"1rem"},onClick:i,children:"Choose another method"}),(0,h.jsx)(nx,{})]})},df=({open:e,onClose:t})=>{let{user:r}=iz(),[i,n]=(0,o.useState)(null),{init:a,cancel:s,submit:l}=lL(),[c,d]=(0,o.useState)(!1),[p,u]=(0,o.useState)(!1),[m,f]=(0,o.useState)(null),[g,y]=(0,o.useState)(null);(0,o.useEffect)(()=>{e&&r?.mfaMethods&&r.mfaMethods.length>0?v(r.mfaMethods[0]):n(null)},[r?.mfaMethods,e]);let w=e=>aG(e)&&"mfa_verification_max_attempts_reached"===e.type?(d(!0),Error("You have exceeded the maximum number of attempts. Please close this window and try again in 10 seconds.")):aQ(e)?(d(!1),Error("The code you entered is not valid")):aY(e)?(d(!0),Error("You have exceeded the time limit for code entry. Please try again in 30 seconds.")):(console.error(e),d(!1),Error("Something went wrong."));async function x(e){y(null);try{if(!e||!i)return;await l(i,e),u(!0),d(!1),t()}catch(e){throw w(e)}}async function v(e){if("passkey"===e){try{n(e);let r=await a(e);if(!r)throw Error("something went wrong");f(r),await l(e,r),u(!0),d(!1),t()}catch(e){y(w(e))}return}try{n(e),await a(e)}catch(e){console.error(e)}}let C=()=>{n(null),y(null),s(),t()};if(!e||!r)return null;if("passkey"===i){let e=r.linkedAccounts.filter(e=>"passkey"===e.type&&e.enrolledInMfa).sort((e,t)=>t.firstVerifiedAt.valueOf()-e.firstVerifiedAt.valueOf())[0];return(0,h.jsx)(dm,{account:e,selectedMethod:i,submitSuccess:p,hasBlockingError:c,error:g,onClose:C,onBack:()=>{n(null),y(null)},handleSubmit:()=>x(m).catch(y)})}return i?(0,h.jsx)(dg,{submitSuccess:p,hasBlockingError:c,handleSubmitCode:x,selectedMethod:i,onClose:C,onBack:r.mfaMethods.length>1?()=>n(null):void 0}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:C},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ew.Z,{})})}),(0,h.jsx)(nP,{children:"Verify your identity"}),(0,h.jsx)(nR,{children:"Choose a verification method"}),(0,h.jsxs)(nW,{children:[r.mfaMethods.includes("totp")&&(0,h.jsxs)(nE,{onClick:()=>v("totp"),children:[(0,h.jsx)(ef.Z,{}),"Authenticator App"]},"totp"),r.mfaMethods.includes("sms")&&(0,h.jsxs)(nE,{onClick:()=>v("sms"),children:[(0,h.jsx)(R.Z,{}),"SMS"]},"sms"),r.mfaMethods.includes("passkey")&&(0,h.jsxs)(nE,{onClick:()=>v("passkey"),children:[(0,h.jsx)(eg.Z,{}),"Passkey"]},"passkey")]}),(0,h.jsx)(nx,{})]})},dg=({selectedMethod:e,submitSuccess:t,hasBlockingError:r,onClose:i,onBack:n,handleSubmitCode:a})=>{let{app:o}=ig(),{pendingTransaction:s}=iD();switch(e){case"sms":return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:i},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ep.Z,{})})}),(0,h.jsx)(nP,{children:"Enter verification code"}),(0,h.jsxs)(nN,{children:[(0,h.jsx)(lX,{success:t,disabled:r,onChange:a}),(0,h.jsxs)(nR,{children:["To continue, please enter the 6-digit code sent to your ",(0,h.jsx)("strong",{children:"mobile device"})]}),s&&(0,h.jsx)(dp,{pendingTransaction:s})]}),n&&(0,h.jsx)(n$,{theme:o?.appearance.palette.colorScheme,onClick:n,children:"Choose another method"}),(0,h.jsx)(i7,{onClick:i,children:"Not now"}),(0,h.jsx)(nx,{})]});case"totp":return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:i},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ed.Z,{})})}),(0,h.jsx)(nP,{children:"Enter verification code"}),(0,h.jsxs)(nN,{children:[(0,h.jsx)(lX,{success:t,disabled:r,onChange:a}),(0,h.jsxs)(nR,{children:["To continue, please enter the 6-digit code generated from your"," ",(0,h.jsx)("strong",{children:"authenticator app"})]}),s&&(0,h.jsx)(dp,{pendingTransaction:s})]}),n&&(0,h.jsx)(n$,{theme:o?.appearance.palette.colorScheme,onClick:n,children:"Choose another method"}),(0,h.jsx)(i7,{onClick:i,children:"Not now"}),(0,h.jsx)(nx,{})]});default:return null}},dy=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,dw=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
`;_.ZP.div`
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
`;var dx=(e,t)=>{let r=encodeURIComponent(new URL(window.location.href).href.replace(/\/$/g,"")+`?privy_token=${e}&privy_connector=injected&privy_wallet_client=phantom`);if(!te()&&s.tq)return`${t?"phantom://":"https://phantom.app/ul/"}browse/${r}?ref=${r}`},dv=(0,_.ZP)(n0)`
  margin: 16px auto;
`,dC=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  gap: 4px;

  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,db=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,d_=_.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,dj=(0,_.ZP)(i2)`
  ${e=>e.hideAnimations&&(0,_.iv)`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`,dk=e=>(0,h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 20",...e,children:[(0,h.jsx)("path",{fill:"url(#icloud-gradient)",d:"M12.34 7.315a4.26 4.26 0 0 0-3.707 2.18 2.336 2.336 0 0 0-1.02-.236 2.336 2.336 0 0 0-2.3 1.963 3.217 3.217 0 0 0 1.244 6.181c.135-.001.27-.01.404-.029h8.943c.047.004.094.006.141.007.045-.001.09-.004.135-.007h.214v-.016a2.99 2.99 0 0 0 1.887-.988c.487-.55.757-1.261.757-1.998v-.006a3.017 3.017 0 0 0-.69-1.915 2.992 2.992 0 0 0-1.748-1.034 4.26 4.26 0 0 0-4.26-4.102Z"}),(0,h.jsx)("defs",{children:(0,h.jsxs)("linearGradient",{id:"icloud-gradient",x1:19.086,x2:3.333,y1:14.38,y2:14.163,gradientUnits:"userSpaceOnUse",children:[(0,h.jsx)("stop",{stopColor:"#3E82F4"}),(0,h.jsx)("stop",{offset:1,stopColor:"#93DCF7"})]})})]}),dE=({style:e,...t})=>(0,h.jsxs)("svg",{width:"16",height:"14",style:e,viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,h.jsxs)("g",{clipPath:"url(#clip0_2115_829)",children:[(0,h.jsx)("path",{d:"M2.34709 12.9404L2.3471 12.9404L2.34565 12.938L1.64031 11.7448L1.64004 11.7444L0.651257 10.0677C0.640723 10.0496 0.630746 10.0314 0.621325 10.0129H4.16461L2.39424 13.0139C2.3775 12.9901 2.36178 12.9656 2.34709 12.9404Z",fill:"#0066DA",stroke:"#6366F1"}),(0,h.jsx)("path",{d:"M8 4.48713L5.47995 0.215332C5.23253 0.358922 5.02176 0.556358 4.87514 0.80764L0.219931 8.70508C0.076007 8.95094 0.000191627 9.22937 0 9.51277H5.04009L8 4.48713Z",fill:"#00AC47"}),(0,h.jsx)("path",{d:"M13.48 13.7847C13.7274 13.6411 13.9382 13.4437 14.0848 13.1924L14.3781 12.6988L15.7801 10.3206C15.9267 10.0693 16.0001 9.79114 16.0001 9.51294H10.9596L12.0321 11.577L13.48 13.7847Z",fill:"#EA4335"}),(0,h.jsx)("path",{d:"M8.00003 4.48718L10.5201 0.215385C10.2726 0.0717949 9.98857 0 9.69533 0H6.30472C6.01148 0 5.7274 0.0807692 5.47998 0.215385L8.00003 4.48718Z",fill:"#00832D"}),(0,h.jsx)("path",{d:"M10.9599 9.51294H5.04007L2.52002 13.7847C2.76744 13.9283 3.05152 14.0001 3.34476 14.0001H12.6552C12.9484 14.0001 13.2325 13.9194 13.4799 13.7847L10.9599 9.51294Z",fill:"#2684FC"}),(0,h.jsx)("path",{d:"M13.4525 4.75636L11.1249 0.80764C10.9782 0.556358 10.7675 0.358922 10.52 0.215332L8 4.48713L10.9599 9.51277H15.9908C15.9908 9.23456 15.9175 8.95636 15.7709 8.70508L13.4525 4.75636Z",fill:"#FFBA00"})]}),(0,h.jsx)("defs",{children:(0,h.jsx)("clipPath",{id:"clip0_2115_829",children:(0,h.jsx)("rect",{width:"16",height:"14",fill:"white"})})})]}),dA=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,dS=_.ZP.div`
  padding-bottom: 24px;
`,dT={"google-drive":{name:"Google Drive",component:dE},icloud:{name:"iCloud",component:dk}},dP=_.ZP.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`,dR={"google-drive":"Google Drive",icloud:"iCloud","user-passcode":"password",privy:"Privy"},dN=({onClose:e})=>(0,h.jsxs)(dS,{children:[(0,h.jsx)(ai,{title:"Why do I need to secure my account?",icon:(0,h.jsx)(j.Z,{width:48}),description:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:"Your app uses cryptography to secure your account. App secrets are split and encrypted so only you can access them."}),(0,h.jsx)("p",{children:"To use this app on new devices, secure account secrets using a password, your Google or your Apple account. It’s important you don’t lose access to the method you choose."})]})}),(0,h.jsx)(i2,{onClick:e,children:"Select backup method"})]}),dO=new Set([g.jK.CALL_EXCEPTION,g.jK.NONCE_EXPIRED,g.jK.REPLACEMENT_UNDERPRICED,g.jK.TRANSACTION_REPLACED]),dI=e=>{let t;return e.code&&-32e3!==e.code&&dO.has(e.code)&&(t=e.transactionHash),t},dM=e=>"SERVER_ERROR"===e.code?e.error?.message??e.reason??e.message??"unknown error":e.error?.code==="SERVER_ERROR"?e.error?.error?.message??e.reason??e.message??"unknown error":e.reason??e.message??"unknown error",dL=e=>({errorCode:e.code?e.code?.toString().charAt(0)+e.code?.toString().slice(1).replace("_"," ").toLowerCase():"Something went wrong.",transactionHash:dI(e),errorMessage:dM(e)}),dW=()=>(0,h.jsxs)(dz,{children:[(0,h.jsx)(d$,{}),(0,h.jsx)(dH,{})]}),dF=({transactionError:e,chainId:t,onClose:r,onRetry:i})=>{let{chains:n}=iD(),[a,s]=(0,o.useState)(!1),{errorCode:l,transactionHash:c,errorMessage:d}=dL(e),p=n.find(e=>e.id===t)?.blockExplorers?.default.url??"https://etherscan.io";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:r}),(0,h.jsxs)(dU,{children:[(0,h.jsx)(dW,{}),(0,h.jsx)(dD,{children:l}),(0,h.jsx)(dZ,{children:"Please try again."}),(0,h.jsxs)(dq,{children:[(0,h.jsx)(dV,{children:"Error message"}),(0,h.jsx)(dK,{clickable:!1,children:d})]}),c&&(0,h.jsxs)(dq,{children:[(0,h.jsx)(dV,{children:"Transaction hash"}),(0,h.jsxs)(dG,{children:["Copy this hash to view details about the transaction on a"," ",(0,h.jsx)("u",{children:(0,h.jsx)("a",{href:p,children:"block explorer"})}),"."]}),(0,h.jsxs)(dK,{clickable:!0,onClick:async()=>{await navigator.clipboard.writeText(c),s(!0)},children:[c,(0,h.jsx)(dJ,{clicked:a})]})]}),(0,h.jsx)(dB,{onClick:()=>i({resetNonce:!!c}),children:"Retry transaction"})]}),(0,h.jsx)(nx,{})]})},dU=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,dD=_.ZP.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
  margin: 10px;
`,dZ=_.ZP.span`
  margin-top: 4px;
  margin-bottom: 10px;
  color: var(--privy-color-foreground-3);
  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,dz=_.ZP.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,dH=(0,_.ZP)(eS.Z)`
  position: absolute;
  width: 35px;
  height: 35px;
  color: var(--privy-color-error);
`,d$=_.ZP.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--privy-color-error);
  opacity: 0.1;
`,dB=(0,_.ZP)(i2)`
  && {
    margin-top: 24px;
  }
  transition: color 350ms ease, background-color 350ms ease;
`,dV=_.ZP.span`
  width: 100%;
  text-align: left;
  font-size: 0.825rem;
  color: var(--privy-color-foreground);
  padding: 4px;
`,dq=_.ZP.div`
  width: 100%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,dG=_.ZP.text`
  position: relative;
  width: 100%;
  padding: 5px;
  font-size: 0.8rem;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
`,dK=_.ZP.span`
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background-2);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
  color: var(--privy-color-foreground-3);
  text-align: left;
  word-wrap: break-word;
  ${e=>e.clickable&&`cursor: pointer;
  transition: background-color 0.3s;
  padding-right: 45px;

  &:hover {
    background-color: var(--privy-color-foreground-4);
  }`}
`,dY=(0,_.ZP)(eT.Z)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,dQ=(0,_.ZP)(q.Z)`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 24px;
  height: 24px;
`,dJ=({clicked:e})=>e?(0,h.jsx)(dQ,{}):(0,h.jsx)(dY,{}),dX=(e,t)=>{if(e.gasUsed&&e.effectiveGasPrice)try{let r=ex.O$.from(e.gasUsed),i=ex.O$.from(e.effectiveGasPrice),n=r.mul(i);if(t){let e=ex.O$.from(t);n=n.add(e)}return n.toString()}catch{return}},d0=({txn:e,receipt:t,transactionInfo:r,onClose:i,tokenPrice:n,tokenSymbol:a,l1GasEstimate:o,receiptHeader:s,receiptDescription:l})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:i}),(0,h.jsx)(at,{title:s??"Transaction complete!",description:l??"You're all set."}),(0,h.jsx)(cR,{tokenPrice:n,from:t.from,to:t.to,gas:dX(t,o),txn:e,transactionInfo:r,tokenSymbol:a}),(0,h.jsx)(d1,{loading:!1,onClick:i,children:"All Done"}),(0,h.jsx)(nx,{})]}),d1=(0,_.ZP)(i2)`
  && {
    margin-top: 24px;
  }
  transition: color 350ms ease, background-color 350ms ease;
`,d2=({txn:e,txnFamily:t,uiOptions:r,tokenSymbol:i,tokenPrice:n})=>{if("CONTRACT_CALL"===t){if(r.transactionInfo?.contractInfo)return(0,h.jsx)(cI,{contractInfo:r.transactionInfo.contractInfo,description:r.description});if(r.senderInfo)return(0,h.jsx)(cI,{contractInfo:r.senderInfo,description:r.description||r.senderInfo.actionText})}return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(c$,{description:r.description||r.transactionInfo?.description||"",txn:e,tokenSymbol:i,tokenPrice:n})})},d3=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-bottom: 16px;
`,d4=_.ZP.div`
  font-size: 13px;
  color: var(--privy-color-error);
  width: 100%;
  margin-top: 16px;
`,d5=_.ZP.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`,d6=(0,_.ZP)(i2)`
  transition: color 350ms ease, background-color 350ms ease;
`,d7=_.ZP.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
`,d8=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d9=e=>{if(!(0,u.A7)(e))return e;try{return(0,eP.ZN)(e)}catch{return e}},he=e=>JSON.stringify(e,null,2),ht=({data:e})=>{let t=e=>"object"==typeof e&&null!==e?(0,h.jsx)(hs,{children:Object.entries(e).map(([e,r])=>(0,h.jsxs)("li",{children:[(0,h.jsxs)("strong",{children:[e,":"]})," ",t(r)]},e))}):(0,h.jsx)("span",{children:String(e)});return(0,h.jsx)("div",{children:t(e)})},hr=e=>{let{types:t,primaryType:r,...i}=e.typedData;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ho,{children:(0,h.jsx)(ht,{data:i})}),(0,h.jsx)(o4,{text:he(e.typedData),itemName:"full payload to clipboard"})," "]})},hi=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,hn=_.ZP.span`
  color: var(--privy-color-foreground);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.25rem; /* 111.111% */
  text-align: center;
`,ha=_.ZP.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.825rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.008px;
`,ho=_.ZP.div`
  margin-top: 1.5rem;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  padding: 12px;
  text-align: left;
  max-height: 310px;
  overflow: scroll;
  white-space: pre-wrap;
  width: 100%;

  // hide the scrollbars
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}
`,hs=_.ZP.ul`
  margin-left: 12px !important;
  white-space: nowrap;

  &:first-child {
    margin-left: 0 !important;
  }
  
  strong {
    font-weight: 500 !important;
  }
}
`,hl=_.ZP.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: ${e=>e.fail?"var(--privy-color-error)":"var(--privy-color-foreground-3)"};
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 4px;
`,hc=_.ZP.span`
  display: flex;
  align-items: center;
  gap: 8px;
`,hd=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;
`,hh=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 27px;
  margin-right: 27px;
  gap: 24px;
`,hp=(0,o.forwardRef)((e,t)=>{let[r,i]=(0,o.useState)(""),[n,a]=(0,o.useState)(!1),{authenticated:s,user:l}=iz(),{initUpdateEmail:c}=iD(),{navigate:d,setModalData:p,currentScreen:u}=ig(),{enabled:m,token:f}=iW(),g=ti(r),y=n||!g,w=async e=>{if(!l?.email)throw Error("User is required to have an email address to update it.");a(!0);try{await c(l.email.address,r,e),d("AWAITING_PASSWORDLESS_CODE")}catch(e){p({errorModalData:{error:e,previousScreen:u||"LANDING"}})}a(!1)},x=()=>{!m||f||s?w(f):(p({captchaModalData:{callback:e=>{if(!l?.email)throw Error("User is required to have an email address to update it.");return c(l.email.address,r,e)},userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_PASSWORDLESS_CODE",onErrorNavigateTo:"ERROR_SCREEN"}}),d("CAPTCHA_SCREEN"))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(hu,{children:(0,h.jsxs)(hm,{children:[(0,h.jsx)(P.Z,{}),(0,h.jsx)("input",{ref:t,id:"email-input",type:"email",placeholder:"your@email.com",onChange:e=>i(e.target.value),onKeyUp:e=>{"Enter"===e.key&&x()},value:r,autoComplete:"email"}),e.stacked?null:(0,h.jsx)(ne,{isSubmitting:n,onClick:x,disabled:y,children:"Submit"})]})}),e.stacked?(0,h.jsx)(i2,{loadingText:null,loading:n,disabled:y,onClick:x,children:"Submit"}):null]})}),hu=_.ZP.div`
  width: 100%;
`,hm=_.ZP.label`
  display: block;
  position: relative;
  width: 100%;
  background-color: var(--privy-color-background);
  transition: background-color 200ms ease;

  > svg {
    position: absolute;
    margin: 13px 17px;
    height: 24px;
    width: 24px;
    color: var(--privy-color-foreground-3);
  }

  && > input {
    font-size: 16px;
    line-height: 24px;

    padding: 12px 88px 12px 52px;
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-mdlg);
    width: 100%;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }
  }

  && > button {
    right: 0;
    line-height: 24px;
    position: absolute;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`,hf=({style:e,...t})=>(0,h.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{height:"38px",width:"38px",...e},...t,children:(0,h.jsx)("path",{d:"M20 13.6V20M20 26.4H20.016M36 20C36 28.8365 28.8366 36 20 36C11.1635 36 4.00001 28.8365 4.00001 20C4.00001 11.1634 11.1635 3.99999 20 3.99999C28.8366 3.99999 36 11.1634 36 20Z",stroke:"currentColor",strokeWidth:"3.2",strokeLinecap:"round",strokeLinejoin:"round"})}),hg=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 32px;
`,hy=_.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  aspect-ratio: 1;
  color: var(--privy-color-error);
  background-color: var(--privy-color-error-light);
  border-radius: 50%;
`,hw=_.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,hx=`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
  }

  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-feature-settings: normal;

  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
    display: inline;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  legend {
    padding: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1;
    color: #9ca3af;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }
`,hv=(0,_.vJ)`
  :root {
     // Borders 
     --privy-border-radius-sm: 6px;
     --privy-border-radius-md: 12px;
     --privy-border-radius-mdlg: 16px;
     --privy-border-radius-lg: 24px;
     --privy-border-radius-full: 9999px;

     // Colors
     --privy-color-background: ${e=>e.theme.background};
     --privy-color-background-2: ${e=>e.theme.background2};

     --privy-color-foreground: ${e=>e.theme.foreground};
     --privy-color-foreground-2: ${e=>e.theme.foreground2};
     --privy-color-foreground-3: ${e=>e.theme.foreground3};
     --privy-color-foreground-4: ${e=>e.theme.foreground4};
     --privy-color-foreground-accent: ${e=>e.theme.foregroundAccent};

     --privy-color-accent: ${e=>e.theme.accent};
     --privy-color-accent-light: ${e=>e.theme.accentLight};
     --privy-color-accent-dark: ${e=>e.theme.accentDark};

     --privy-color-success: ${e=>e.theme.success};
     --privy-color-success-dark: ${e=>e.theme.successDark};
     --privy-color-error: ${e=>e.theme.error};
     --privy-color-error-light: ${e=>e.theme.errorLight};
     --privy-color-warn: ${e=>e.theme.warn};
     --privy-color-warn-light: ${e=>e.theme.warnLight};

     // Space
     --privy-height-modal-full: 620px;
     --privy-height-modal-compact: 480px;
  };
`,hC=_.ZP.div`
  // css normalize only the privy application to avoid conflicts
  // with consuming application
  ${hx}

  // Privy styles
  color: var(--privy-color-foreground-2);

  h3 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--privy-color-foreground-2);
  }

  h4 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--privy-color-foreground);
  }

  p {
    font-size: 13px;
    line-height: 20px;
    color: var(--privy-color-foreground-2);
  }

  button:focus,
  input:focus,
  optgroup:focus,
  select:focus,
  textarea:focus {
    outline: none;
    border-color: var(--privy-color-accent-light);
    box-shadow: 0 0 0 1px var(--privy-color-accent-light);
  }

  .mobile-only {
    @media (min-width: 441px) {
      display: none;
    }
  }

  /* Animations */

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,hb=({children:e,open:t,onClick:r,...i})=>(0,h.jsx)(eR.u,{show:t,as:o.Fragment,children:(0,h.jsxs)(eN.V,{onClose:r,...i,as:hj,children:[(0,h.jsx)(eR.u.Child,{as:o.Fragment,enterFrom:"entering",leaveTo:"leaving",children:(0,h.jsx)(h_,{id:"privy-dialog-backdrop","aria-hidden":"true"})}),(0,h.jsx)(hk,{children:(0,h.jsx)(eR.u.Child,{as:o.Fragment,enterFrom:"entering",leaveTo:"leaving",children:(0,h.jsx)(eN.V.Panel,{as:hE,children:e})})})]})}),h_=_.ZP.div`
  position: fixed;
  inset: 0;

  transition: backdrop-filter 100ms ease;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  &.entering,
  &.leaving {
    backdrop-filter: unset;
    -webkit-backdrop-filter: unset;
  }
`,hj=_.ZP.div`
  position: relative;
  z-index: 999999;
`,hk=_.ZP.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
`,hE=_.ZP.div`
  // reset some default dialog styles
  padding: 0;
  background: transparent;
  border: none;
  width: 100%;
  pointer-events: auto;

  outline: none;
  display: block;

  /*
   * Normally it is bad to mix media queries like this We are doing
   * this here specifically for animations to avoid weird jank.
   */
  /* Mobile animation is a bottom drawer */
  @media (max-width: 440px) {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 200ms ease-in;
    position: fixed;
    bottom: 0;

    &.entering,
    &.leaving {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      transition: transform 150ms ease-in 0ms, opacity 0ms ease 150ms;
    }
  }

  /* Tablet/Desktop animation is a fade in */
  @media (min-width: 441px) {
    opacity: 1;
    transition: opacity 100ms ease-in;

    &.entering,
    &.leaving {
      opacity: 0;
      transition-delay: 5ms;
    }

    margin: auto;
    width: 360px;
    box-shadow: 0px 8px 36px rgba(55, 65, 81, 0.15);
    border-radius: var(--privy-border-radius-lg);
  }
`,hA=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`,hS={LANDING:()=>{let{app:e}=ig();return e.loginMethodsAndOrder&&e.loginMethodsAndOrder.primary.length>0?(0,h.jsx)(ls,{connectOnly:!1}):(0,h.jsx)(lp,{connectOnly:!1})},CONNECT_OR_CREATE:()=>{let{app:e}=ig();return e.loginMethodsAndOrder&&e.loginMethodsAndOrder.primary.length>0?(0,h.jsx)(ls,{connectOnly:!0}):(0,h.jsx)(lp,{connectOnly:!0})},AWAITING_PASSWORDLESS_CODE:()=>{let{app:e,navigate:t,navigateBack:r,setModalData:i,onUserCloseViaDialogOrKeybindRef:n}=ig(),{closePrivyModal:a,resendEmailCode:l,resendSmsCode:c,getAuthMeta:d,loginWithCode:p,updateWallets:u,createAnalyticsEvent:m}=iD(),{authenticated:f,logout:g,user:y}=iz(),[w,x]=(0,o.useState)(ao),[v,C]=(0,o.useState)(!1),[b,_]=(0,o.useState)(null),[j,k]=(0,o.useState)(null),[E,A]=(0,o.useState)(0);n.current=()=>null;let S=d()?.email?0:1;(0,o.useEffect)(()=>{if(E){let e=setTimeout(()=>{A(E-1)},1e3);return()=>clearTimeout(e)}},[E]),(0,o.useEffect)(()=>{if(f&&v&&y){if(e?.legal.requireUsersAcceptTerms&&!y.hasAcceptedTerms){let e=setTimeout(()=>{t("AFFIRMATIVE_CONSENT_SCREEN")},900);return()=>clearTimeout(e)}if(rs(y,e?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{i({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),m({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AwaitingPasswordlessCodeScreen"}}),g()},callAuthOnSuccessOnClose:!0}}),t("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},900);return()=>clearTimeout(e)}{u();let e=setTimeout(()=>a({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return()=>clearTimeout(e)}}},[f,v,y]),(0,o.useEffect)(()=>{if(b&&0===j){let e=setTimeout(()=>{x(ao),_(null),document.querySelector("input[name=code-0]")?.focus()},1400);return()=>clearTimeout(e)}},[b]);let N=e=>{e.preventDefault();let r=e.currentTarget.value.replace(" ","");if(""===r)return;if(isNaN(Number(r))){_("Code should be numeric"),k(1);return}_(null),k(null);let i=Number(e.currentTarget.name?.charAt(5)),n=[...r||[""]].slice(0,6-i),a=[...w.slice(0,i),...n,...w.slice(i+n.length)];x(a);let o=Math.min(Math.max(i+n.length,0),5);isNaN(Number(e.currentTarget.value))||document.querySelector(`input[name=code-${o}]`)?.focus(),a.every(e=>e&&!isNaN(+e))&&(document.querySelector(`input[name=code-${o}]`)?.blur(),p(a.join("")).then(()=>C(!0)).catch(e=>{if(e?.status===422)_("Invalid or expired verification code");else if(e instanceof eU&&"cannot_link_more_of_type"===e.privyErrorCode)_(e.message);else if(e instanceof eU&&"max_accounts_reached"===e.privyErrorCode){console.error(new eG(e).toString()),t("USER_LIMIT_REACHED_SCREEN");return}else if(e instanceof eU&&"user_does_not_exist"===e.privyErrorCode){t("ACCOUNT_NOT_FOUND_SCREEN");return}else _("Issue verifying code");k(0)}))},O=e=>{1===j&&(_(null),k(null)),x([...w.slice(0,e),"",...w.slice(e+1)]),e>0&&document.querySelector(`input[name=code-${e-1}]`)?.focus()},I=0==S?(0,h.jsx)(P.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"}):(0,h.jsx)(R.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"40px",width:"40px"}),M=0==S?(0,h.jsxs)("p",{children:["Please check ",(0,h.jsx)(au,{children:d()?.email})," for an email from privy.io and enter your code below."]}):(0,h.jsxs)("p",{children:["Please check ",(0,h.jsx)(au,{children:d()?.phoneNumber})," for a message from ",e?.name||"Privy"," and enter your code below."]});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:()=>r()},"header"),(0,h.jsxs)(as,{children:[(0,h.jsx)(ai,{title:"Enter confirmation code",description:M,icon:I}),(0,h.jsxs)(n1,{children:[(0,h.jsxs)(al,{children:[(0,h.jsx)(ac,{fail:!!b,success:v,children:(0,h.jsx)("span",{children:b||(v?"Success!":"")})}),(0,h.jsx)("div",{children:w.map((e,t)=>(0,h.jsx)("input",{name:`code-${t}`,type:"text",value:w[t],onChange:N,onKeyUp:e=>{"Backspace"===e.key&&O(t)},inputMode:"numeric",autoFocus:0===t,pattern:"[0-9]",className:`${v?"success":""} ${b?"fail":""}`,autoComplete:s.tq?"one-time-code":"off"},t))})]}),(0,h.jsxs)(ad,{children:[(0,h.jsxs)("span",{children:["Didn't get ",0==S?"an email":"a message","?"]}),E?(0,h.jsxs)(ap,{children:[(0,h.jsx)(T.Z,{color:"var(--privy-color-foreground)",strokeWidth:1.33,height:"12px",width:"12px"}),(0,h.jsx)("span",{children:"Code sent"})]}):(0,h.jsx)(ah,{children:(0,h.jsx)("button",{onClick:async()=>{A(30),0==S?await l():await c()},children:"Resend code"})})]})]})]}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},AWAITING_CONNECTION:()=>{let[e,t]=(0,o.useState)(!1),[r,i]=(0,o.useState)(!1),[n,a]=(0,o.useState)(void 0),{authenticated:l,logout:c}=iz(),{app:d,navigate:p,navigateBack:u,lastScreen:m,currentScreen:f,setModalData:g}=ig(),{getAuthFlow:y,walletConnectionStatus:w,closePrivyModal:x,initLoginWithWallet:v,loginWithWallet:C,updateWallets:b,createAnalyticsEvent:_}=iD(),{walletConnectors:j}=iz(),[k,E]=(0,o.useState)(0),{user:A}=iz(),[S]=(0,o.useState)(A?.linkedAccounts.length||0),[T,P]=(0,o.useState)(""),[R,N]=(0,o.useState)(!1),{hasTabbedAway:O}=function(){let[e,t]=(0,o.useState)(!1),r=(0,o.useCallback)(()=>{document.hidden&&t(!0)},[]);return(0,o.useEffect)(()=>(document.addEventListener("visibilitychange",r),()=>document.removeEventListener("visibilitychange",r)),[r]),{hasTabbedAway:e,reset:()=>t(!1)}}(),{enabled:I,token:M}=iW(),L=s.tq&&w?.connector?.connectorType==="wallet_connect_v2"||s.tq&&w?.connector?.connectorType==="coinbase_wallet"||s.tq&&w?.connector?.connectorType==="injected"&&w?.connector?.walletClientType==="phantom",W=w?.status==="connected",F=w?.status==="switching_to_supported_chain";(0,o.useEffect)(()=>{let e=y();if(W&&!e&&(!I||M||l?v(w.connectedWallet,M).then(()=>{N(!0)}):(g({captchaModalData:{callback:e=>v(w.connectedWallet,e).then(()=>{N(!0)}),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_CONNECTION",onErrorNavigateTo:"ERROR_SCREEN"}}),p("CAPTCHA_SCREEN",!1))),e&&L&&W&&!e.preparedMessage){e.buildSiweMessage();return}!e||L||!W||r||(async()=>{i(!0),a(void 0);try{w?.connector?.connectorType==="wallet_connect_v2"&&w?.connector?.walletClientType==="metamask"&&await to(2500),await D()}catch(e){console.warn("Auto-prompted signature failed",e)}finally{i(!1)}})()},[k,W,R]),(0,o.useEffect)(()=>{if(A&&e){if(d?.legal.requireUsersAcceptTerms&&!A.hasAcceptedTerms){let e=setTimeout(()=>{p("AFFIRMATIVE_CONSENT_SCREEN")},900);return()=>clearTimeout(e)}if(rs(A,d?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{g({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),_({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"ConnectionStatusScreen"}}),c()},callAuthOnSuccessOnClose:!0}}),p("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},900);return()=>clearTimeout(e)}b();let e=setTimeout(()=>x({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return()=>clearTimeout(e)}},[A,e]);let U=e=>{if(e?.privyErrorCode==="allowlist_rejected"){p("ALLOWLIST_REJECTION_SCREEN");return}if(e?.privyErrorCode==="max_accounts_reached"){console.error(new eG(e).toString()),p("USER_LIMIT_REACHED_SCREEN");return}if(e?.privyErrorCode==="user_does_not_exist"){p("ACCOUNT_NOT_FOUND_SCREEN");return}a(aI(e))};async function D(){try{await C(),t(!0)}catch(e){U(e)}finally{i(!1)}}(0,o.useEffect)(()=>{w?.connectError&&U(w?.connectError)},[w]),aO(()=>{let e="wallet_connect_v2"===Z&&w?.connector instanceof iw?w.connector.redirectUri:void 0;e&&P(e)},w?.connector instanceof iw&&!T?500:null);let Z=w?.connector?.connectorType||"injected",z=w?.connector?.walletClientType||"unknown",H=ay[z]?.displayName||w?.connector?.walletBranding.name||"Browser Extension",$=ay[z]?.logo||w?.connector?.walletBranding.icon||(e=>(0,h.jsx)(rO,{...e})),B="Browser Extension"===H?H.toLowerCase():H,V;V=e?`Successfully connected with ${B}`:n?n.message:F?"Switching networks":W?r&&L?"Signing":"Sign to verify":`Waiting for ${B}`;let q="Don’t see your wallet? Check your other browser windows.";e?q=S===(A?.linkedAccounts.length||0)?"Wallet was already linked.":"You’re good to go!":k>=2&&n?q="Unable to connect wallet":n?q=n.detail:F?q="Switch your wallet to the requested network.":W&&L?q="Sign the message in your wallet to verify it belongs to you.":"metamask"===z&&s.tq?q="Click continue to open and connect MetaMask.":"metamask"===z?q="For the best experience, connect only one wallet at a time.":"wallet_connect"===Z?q="Open your mobile wallet app to continue":"coinbase_wallet"===Z&&(tt()||(q=ix(A)?"Continue with the Coinbase app. Not the right wallet? Reset your connection below.":"Open the Coinbase app on your phone to continue."));let G=j?.walletConnectors?.find(e=>"coinbase_wallet"===e.walletClientType),K="coinbase_wallet"===z&&(ix(A)||n===rv.ERROR_USER_EXISTS);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:m&&f!==m?u:void 0}),(0,h.jsxs)(aM,{children:[(0,h.jsx)(aW,{walletLogo:$,success:e,fail:!!n}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:V}),(0,h.jsx)("p",{children:q}),W||!T||O?null:(0,h.jsxs)("p",{children:["Still here?"," ",(0,h.jsx)("a",{href:T,target:"_blank",style:{textDecoration:"underline"},children:"Try again"})]})]}),K?(0,h.jsx)(i2,{onClick:()=>G&&G?.disconnect(),disabled:e,children:"Use a different wallet"}):n==rv.ERROR_USER_EXISTS&&f!==m?(0,h.jsx)(i2,{onClick:u,children:"Use a different wallet"}):W&&!e&&L?(0,h.jsx)(i2,{onClick:()=>{i(!0),D()},disabled:r,children:r?"Signing":"Sign with your wallet"}):!e&&n?.retryable&&k<2?(0,h.jsx)(i2,{onClick:()=>{E(k+1),a(void 0),W?(i(!0),D()):w?.connectRetry()},disabled:!e&&(!n?.retryable||k>=2),children:"Retry"}):e||n?null:(0,h.jsx)(i2,{onClick:()=>{},disabled:!0,children:"Connecting"})]}),(0,h.jsx)(nx,{})]})},AWAITING_CONNECT_ONLY_CONNECTION:()=>{let{navigateBack:e,lastScreen:t,currentScreen:r}=ig(),{walletConnectionStatus:i,closePrivyModal:n}=iD(),[a,l]=(0,o.useState)(void 0),[c,d]=(0,o.useState)(0),p=i?.status==="connected",u=i?.status==="switching_to_supported_chain";(0,o.useEffect)(()=>{if(p){let e=setTimeout(n,1400);return()=>clearTimeout(e)}},[p]);let m=e=>{l(aI(e))};(0,o.useEffect)(()=>{i?.connectError&&m(i?.connectError)},[i]);let f=i?.connector?.connectorType||"injected",g=i?.connector?.walletClientType||"unknown",y=ay[g]?.displayName||i?.connector?.walletBranding.name||"Browser Extension",w=ay[g]?.logo||i?.connector?.walletBranding.icon||(e=>(0,h.jsx)(rO,{...e})),x="Browser Extension"===y?y.toLowerCase():y,v;v=p?`Successfully connected with ${x}`:a?a.message:u?"Switching networks":`Waiting for ${x}`;let C="Don’t see your wallet? Check your other browser windows.";return p?C="You’re good to go!":c>=2&&a?C="Unable to connect wallet":a?C=a.detail:u?C="Switch your wallet to the requested network.":"metamask"===g&&s.tq?C="Click to continue to open and connect MetaMask.":"metamask"===g?C="For the best experience, connect only one wallet at a time.":"wallet_connect_v2"===f?C="Open your mobile wallet app to continue":"coinbase_wallet"===f&&(C="Open the Coinbase app on your phone to continue."),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:r===t?void 0:e}),(0,h.jsxs)(aF,{children:[(0,h.jsx)(aW,{walletLogo:w,success:p,fail:!!a}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:v}),(0,h.jsx)("p",{children:C})]}),a==rv.ERROR_USER_EXISTS?(0,h.jsx)(i2,{onClick:e,children:"Use a different wallet"}):!p&&a?.retryable&&c<2?(0,h.jsx)(i2,{onClick:()=>{d(c+1),l(void 0),i?.connectRetry()},disabled:!p&&(!a?.retryable||c>=2),children:"Retry"}):!p&&a&&c>=2?(0,h.jsx)(i2,{onClick:e,children:"Use a different wallet"}):null]}),(0,h.jsx)(nx,{})]})},AWAITING_FARCASTER_CONNECTION:()=>{let{authenticated:e,logout:t,ready:r,user:i}=iz(),{lastScreen:n,navigate:a,navigateBack:l,setModalData:c,app:d}=ig(),{getAuthFlow:p,loginWithFarcaster:u,closePrivyModal:m,createAnalyticsEvent:f}=iD(),[g,y]=(0,o.useState)(void 0),[w,x]=(0,o.useState)(!1),[v,C]=(0,o.useState)(!1),b=(0,o.useRef)([]),_=p(),j=_?.meta.connectUri;return(0,o.useEffect)(()=>{let e=Date.now(),t=setInterval(async()=>{let r=await _.pollForReady.execute(),i=Date.now()-e;if(r){clearInterval(t),x(!0);try{await u(),C(!0)}catch(t){let e={retryable:!1,message:"Authentication failed"};if(t?.privyErrorCode==="allowlist_rejected"){a("ALLOWLIST_REJECTION_SCREEN");return}if(t?.privyErrorCode==="max_accounts_reached"){console.error(new eG(t).toString()),a("USER_LIMIT_REACHED_SCREEN");return}if(t?.privyErrorCode==="user_does_not_exist"){a("ACCOUNT_NOT_FOUND_SCREEN");return}t?.privyErrorCode==="linked_to_another_user"?e.detail="This account has already been linked to another user.":t?.privyErrorCode==="invalid_credentials"?(e.retryable=!0,e.detail="Something went wrong. Try again."):t?.privyErrorCode==="too_many_requests"&&(e.detail="Too many requests. Please wait before trying again.");y(e)}}else i>12e4&&(clearInterval(t),y({retryable:!0,message:"Authentication failed",detail:"The request timed out. Try again."}))},2e3);return()=>{clearInterval(t),b.current.forEach(e=>clearTimeout(e))}},[]),(0,o.useEffect)(()=>{if(r&&e&&v&&i){if(d?.legal.requireUsersAcceptTerms&&!i.hasAcceptedTerms){let e=setTimeout(()=>{a("AFFIRMATIVE_CONSENT_SCREEN")},1400);return()=>clearTimeout(e)}v&&(rs(i,d?.embeddedWallets.createOnLogin)?b.current.push(setTimeout(()=>{c({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),f({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"FarcasterConnectStatusScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),a("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},1400)):b.current.push(setTimeout(()=>m({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400)))}},[v,r,e,i]),s.tq||w?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:n?l:void 0,onClose:m},"header"),(0,h.jsx)(n7,{}),s.gn?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(sh,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:v,fail:!!g}),(0,h.jsx)(sl,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)(nP,{children:g?g.message:"Sign in with Farcaster"}),(0,h.jsx)(nR,{children:g?g.detail:"To sign in with Farcaster, please open the Warpcast app."})]}),j&&(0,h.jsx)(i2,{onClick:e=>{e.preventDefault(),window.location.href=j},children:"Open Warpcast app"})]})}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(sd,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:v,fail:!!g}),(0,h.jsx)(sl,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)(nP,{children:g?g.message:"Signing in with Farcaster"}),(0,h.jsx)(nR,{children:g?g.detail:"This should only take a moment"}),(0,h.jsx)(n0,{children:j&&s.tq&&(0,h.jsx)(o6,{text:"Take me to Warpcast",url:j,color:sc})})]})]})}),(0,h.jsx)(nx,{})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:n?l:void 0,onClose:m},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(sd,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(nP,{children:"Sign in with Farcaster"}),(0,h.jsx)(nR,{children:"Scan with your phone's camera to continue."}),(0,h.jsx)(n2,{children:j?(0,h.jsx)(ss,{url:j,size:275,squareLogoElement:sl}):(0,h.jsx)(iQ,{})}),(0,h.jsxs)(n0,{children:[(0,h.jsx)(nR,{children:"Or copy this link and paste it into a phone browser to open the Warpcast app."}),j&&(0,h.jsx)(o4,{text:j,itemName:"link",color:sc})]})]})}),(0,h.jsx)(nx,{})]})},AWAITING_FARCASTER_SIGNER:()=>{let{lastScreen:e,navigateBack:t,data:r,app:i}=ig(),{requestFarcasterSignerStatus:n,closePrivyModal:a}=iD(),[l,c]=(0,o.useState)(void 0),[d,p]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1),f=(0,o.useRef)([]),g=r?.farcasterSigner;(0,o.useEffect)(()=>{let e=Date.now(),t=setInterval(async()=>{if(!g?.public_key){clearInterval(t),c({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});return}"approved"===g.status&&(clearInterval(t),p(!1),m(!0),f.current.push(setTimeout(()=>a({shouldCallAuthOnSuccess:!1,isSuccess:!0}),1400)));let r=await n(g?.public_key),i=Date.now()-e;"approved"===r.status?(clearInterval(t),p(!1),m(!0),f.current.push(setTimeout(()=>a({shouldCallAuthOnSuccess:!1,isSuccess:!0}),1400))):i>3e5?(clearInterval(t),c({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):"revoked"===r.status&&(clearInterval(t),c({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))},2e3);return()=>{clearInterval(t),f.current.forEach(e=>clearTimeout(e))}},[]);let y=g?.status==="pending_approval"?g.signer_approval_url:void 0;return s.tq||d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e?t:void 0,onClose:a},"header"),(0,h.jsx)(n7,{}),s.gn?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(sm,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:u,fail:!!l}),(0,h.jsx)(sl,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)(nP,{children:l?l.message:"Add a signer to Farcaster"}),(0,h.jsx)(nR,{children:l?l.detail:"This will allow "+i.name+" to add casts, likes, follows, and more on your behalf."})]}),y&&(0,h.jsx)(i2,{onClick:e=>{e.preventDefault(),window.location.href=y},children:"Open Warpcast app"})]})}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(su,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:u,fail:!!l}),(0,h.jsx)(sl,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)(nP,{children:l?l.message:"Requesting signer from Farcaster"}),(0,h.jsx)(nR,{children:l?l.detail:"This should only take a moment"}),(0,h.jsx)(n0,{children:y&&s.tq&&(0,h.jsx)(o6,{text:"Take me to Warpcast",url:y,color:sp})})]})]})}),(0,h.jsx)(nx,{})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e?t:void 0,onClose:a},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(su,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(nP,{children:"Add a signer to Farcaster"}),(0,h.jsxs)(nR,{children:["This will allow ",i.name," to add casts, likes, follows, and more on your behalf."]}),(0,h.jsx)(n2,{children:g?.status==="pending_approval"?(0,h.jsx)(ss,{url:g.signer_approval_url,size:275,squareLogoElement:sl}):(0,h.jsx)(iQ,{})}),(0,h.jsxs)(n0,{children:[(0,h.jsx)(nR,{children:"Or copy this link and paste it into a phone browser to open the Warpcast app."}),g?.status==="pending_approval"&&(0,h.jsx)(o4,{text:g.signer_approval_url,itemName:"link",color:sp})]})]})}),(0,h.jsx)(nx,{})]})},AWAITING_PASSKEY_SYSTEM_DIALOGUE:()=>{let{lastScreen:e,currentScreen:t,navigateBack:r}=ig(),{loginWithPasskey:i,closePrivyModal:n}=iD(),[a,s]=(0,o.useState)("loading"),[l,c]=(0,o.useState)(null),d=(0,o.useRef)([]),p=e=>{d.current=[e,...d.current]};(0,o.useEffect)(()=>()=>{d.current.forEach(e=>clearTimeout(e)),d.current=[]},[]);let u=async()=>{s("loading");try{await i(),s("success")}catch(e){c(e),s("error")}};return(0,o.useEffect)(()=>{"success"===a&&p(setTimeout(()=>{n({shouldCallAuthOnSuccess:!0,isSuccess:!0})},1400))},[a]),(0,o.useEffect)(()=>{u()},[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e&&t!==e?r:void 0}),(0,h.jsxs)(dw,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:"success"===a,fail:"error"===a}),(0,h.jsx)(lw,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:(()=>{switch(a){case"loading":return"Waiting for passkey";case"success":return"Success";case"error":return"Something went wrong"}})()}),(0,h.jsx)("p",{style:{whiteSpace:"pre-wrap"},children:(()=>{switch(a){case"loading":return`Please follow prompts to verify your passkey.
You will have to sign up with another method first to register a passkey for your account.`;case"success":return"You've successfully logged in with your passkey.";case"error":if(l instanceof eF){if("cannot_link_more_of_type"===l.privyErrorCode)return"Cannot link more passkeys to account.";if("passkey_not_allowed"===l.privyErrorCode)return`Passkey request timed out or rejected by user.
You will have to sign up with another method first to register a passkey for your account.`}return`An unknown error occurred.
You will have to sign up with another method first to register a passkey for your account.`}})()})]}),(()=>{switch(a){case"loading":case"success":return(0,h.jsx)(i2,{onClick:()=>{},disabled:!0,children:"Continue"});case"error":return(0,h.jsx)(i2,{onClick:u,disabled:!1,children:"Retry"})}})()]}),(0,h.jsx)(nx,{})]})},PHANTOM_INTERSTITIAL_SCREEN:()=>{let{forkSession:e,ready:t,authenticated:r}=iz(),[i,n]=(0,o.useState)(""),[a,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{t&&r&&e().then(n)},[t,r]);let l=dx(i,!a),c={title:"Redirecting to Phantom Mobile Wallet",description:"We'll take you to the Phantom Mobile Wallet app to continue your login experience.",footnote:""};return t&&(c.description="For the best experience, we'll automatically log you into the Phantom Mobile Wallet in-app browser.",c.footnote="Once you're done, you can always return here and refresh to view your updated account."),a&&(c.title="Still here?",c.description="You may need to install the Phantom mobile app.",c.footnote="Once you're done, you can return here or connect via Phantom's in-app browser."),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(ar,{title:c.title,description:c.description}),(0,h.jsxs)(nX,{children:[(0,h.jsx)(dv,{children:(0,h.jsx)(rM,{style:{width:"72px",height:"72px"}})}),(0,h.jsx)(i5,{href:l,onClick:()=>{setTimeout(()=>s(!0),1e3)},loading:t&&!l,children:a?"Go to App Store":"Continue"}),c.footnote?(0,h.jsx)("p",{children:c.footnote}):null]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},LOGIN_FAILED_SCREEN:()=>{let{closePrivyModal:e}=iD(),{navigate:t}=ig();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(lM,{style:{width:"160px",height:"160px",margin:"0 auto 20px"}}),(0,h.jsx)(ar,{title:"Could not connect with wallet",description:"Please check that Phantom multichain is enabled and try again.",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}),(0,h.jsxs)(nX,{children:[(0,h.jsx)(i2,{onClick:()=>t("LANDING"),children:"Try again"}),(0,h.jsx)(i7,{onClick:()=>e(),children:"Cancel"})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},AWAITING_OAUTH_SCREEN:()=>{let{authenticated:e,logout:t,ready:r,user:i}=iz(),{app:n,setModalData:a,navigate:s,resetNavigation:l}=ig(),{getAuthMeta:c,initLoginWithOAuth:d,loginWithOAuth:p,updateWallets:u,setReadyToTrue:m,closePrivyModal:f,createAnalyticsEvent:g}=iD(),[y,w]=(0,o.useState)(!1),[x,v]=(0,o.useState)(void 0),C=c()?.provider||"google",{name:b,component:_}=t3(C),j=iK();(0,o.useEffect)(()=>{p(C).then(e=>{w(!0),m(!0),e&&j("login","onOAuthLoginComplete",e)}).catch(e=>{if(m(!1),e?.privyErrorCode==="allowlist_rejected"){v(void 0),l(),s("ALLOWLIST_REJECTION_SCREEN");return}if(e?.privyErrorCode==="max_accounts_reached"){console.error(new eG(e).toString()),v(void 0),l(),s("USER_LIMIT_REACHED_SCREEN");return}if(e?.privyErrorCode==="user_does_not_exist"){v(void 0),l(),s("ACCOUNT_NOT_FOUND_SCREEN");return}let{retryable:t,detail:r}=function(e,t){let r={detail:"",retryable:!1},i=t.charAt(0).toUpperCase()+t.slice(1);if(e?.privyErrorCode==="linked_to_another_user"&&(r.detail="This account has already been linked to another user."),e?.privyErrorCode==="invalid_credentials"&&(r.retryable=!0,r.detail="Something went wrong. Try again."),"oauth_user_denied"===e.privyErrorCode&&(r.detail=`Retry and check ${i} to finish connecting your account.`,r.retryable=!0),e?.privyErrorCode==="too_many_requests"&&(r.detail="Too many requests. Please wait before trying again."),e?.privyErrorCode==="too_many_requests"&&e.message.includes("provider rate limit")){let e=t3(t).name;r.detail=`Request limit reached for ${e}. Please wait a moment and try again.`}if(e?.privyErrorCode==="oauth_account_suspended"){let e=t3(t).name;r.detail=`Your ${e} account is suspended. Please try another login method.`}return r}(e,C);v({retryable:t,detail:r,message:"Authentication failed"})}).finally(()=>{t4()})},[b,C]),(0,o.useEffect)(()=>{if(r&&e&&y&&i){if(n?.legal.requireUsersAcceptTerms&&!i.hasAcceptedTerms){let e=setTimeout(()=>{s("AFFIRMATIVE_CONSENT_SCREEN")},1400);return()=>clearTimeout(e)}if(rs(i,n?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{a({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),g({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:C,screen:"OAuthStatusScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),s("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},1400);return()=>clearTimeout(e)}{let e=setTimeout(()=>f({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return u(),()=>clearTimeout(e)}}},[r,e,y,i]);let k=y?`Successfully connected with ${b}`:x?x.message:`Verifying connection to ${b}`,E="";return E=y?"You’re good to go!":x?x.detail:"Just a few moments more",(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),(0,h.jsx)(n7,{}),(0,h.jsxs)(dy,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:y,fail:!!x}),(0,h.jsx)(_,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:k}),(0,h.jsx)("p",{children:E})]}),x&&x?.retryable?(0,h.jsx)(i9,{onClick:()=>{t4(),d(C),v(void 0)},disabled:!y&&!x?.retryable,children:"Retry"}):null]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nx,{})]})},CROSS_APP_AUTH_SCREEN:()=>{let{data:e,onUserCloseViaDialogOrKeybindRef:t}=ig(),{crossAppAuthFlow:r,updateWallets:i,closePrivyModal:n}=iD(),[a,s]=(0,o.useState)({}),l={id:e?.crossAppAuth?.appId??"",name:e?.crossAppAuth?.name??"app",logoUrl:e?.crossAppAuth?.logoUrl},c=new eD(`There was an issue connecting your ${l.name} account. Please try again.`),d=new tj(async t=>{if(!e?.crossAppAuth?.popup){s({error:c});return}try{let i=await r({appId:t,popup:e.crossAppAuth.popup});s({data:i})}catch(e){e instanceof eD?s({error:e}):s({error:c})}}),p=()=>{a.data&&(i(),e?.crossAppAuth?.onSuccess(a.data),n({shouldCallAuthOnSuccess:!0,isSuccess:!0})),e?.crossAppAuth?.onError(a.error??new eD("User canceled flow")),n({shouldCallAuthOnSuccess:!1,isSuccess:!1})};t.current=p,(0,o.useEffect)(()=>{l.id.length&&d.execute(l.id)},[l.id]),(0,o.useEffect)(()=>{if(!a.data)return;let e=setTimeout(p,1400);return()=>clearTimeout(e)},[a.data]);let{title:u,subtitle:m}=(0,o.useMemo)(()=>a.data?{title:`Successfully connected with ${l.name}`,subtitle:"You're good to go!"}:a.error?{title:"Authentication failed",subtitle:a.error.message}:{title:`Connecting to ${l.name}`,subtitle:`Please check the pop-up from ${l.name} to continue`},[a,l.name]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:p}),(0,h.jsx)(n7,{}),(0,h.jsxs)(aD,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:!!a.data,fail:!!a.error}),(0,h.jsx)(aU,{name:l.name,logoUrl:l.logoUrl})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:u}),(0,h.jsx)("p",{children:m})]})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nx,{})]})},ALLOWLIST_REJECTION_SCREEN:()=>{let{navigate:e,app:t}=ig(),r=t?.allowlistConfig.errorTitle||"You don't have access to this app",i=t?.allowlistConfig.errorDetail||"Have you been invited?",n=t?.allowlistConfig.errorCtaText||"Try another account";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),(0,h.jsxs)(nQ,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(nK,{}),(0,h.jsx)(nY,{style:{width:"38px",height:"38px",strokeWidth:"1",stroke:"var(--privy-color-accent)",fill:"var(--privy-color-accent)"}})]})}),(0,h.jsxs)(nJ,{children:["string"==typeof r?(0,h.jsx)("h3",{children:r}):(0,h.jsx)(h.Fragment,{children:r}),"string"==typeof i?(0,h.jsx)("p",{children:i}):(0,h.jsx)(h.Fragment,{children:i})]}),t?.allowlistConfig.errorCtaLink?(0,h.jsx)(i2,{as:"a",href:t.allowlistConfig.errorCtaLink,children:n}):(0,h.jsx)(i2,{onClick:()=>{e("LANDING")},children:n})]})]})},ACCOUNT_NOT_FOUND_SCREEN:()=>{let{navigate:e,app:t}=ig();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),(0,h.jsxs)(nm,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(nr,{color:"var(--privy-color-warn-light)"}),(0,h.jsx)(j.Z,{height:38,width:38,strokeWidth:2,stroke:"var(--privy-color-warn)"})]})}),(0,h.jsxs)(nf,{children:[(0,h.jsx)("h3",{children:"Account not found"}),(0,h.jsxs)("p",{children:["Please try logging in again or go to ",t.name," to create an account."]})]}),(0,h.jsx)(i2,{onClick:()=>e("LANDING"),children:"Try logging in again"})]})]})},USER_LIMIT_REACHED_SCREEN:()=>{let{navigate:e}=ig();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),(0,h.jsxs)(hg,{children:[(0,h.jsx)(hy,{children:(0,h.jsx)(hf,{})}),(0,h.jsxs)(hw,{children:[(0,h.jsx)("h3",{children:"Unable to sign in"}),(0,h.jsx)("p",{children:"This application has reached its user limit and cannot sign in new users."})]}),(0,h.jsx)(i2,{onClick:()=>{e("LANDING")},children:"Go back"})]}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},INSTALL_PHANTOM_SCREEN:()=>{let{navigateBack:e}=ig();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(sB,{}),(0,h.jsx)(n8,{}),(0,h.jsxs)(nx,{children:[(0,h.jsx)("span",{children:"Still not sure? "}),(0,h.jsx)("a",{target:"_blank",href:"https://ethereum.org/en/wallets/",children:"Learn more"})]})]})},LINK_EMAIL_SCREEN:()=>{let{app:e}=ig();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(ai,{title:"Connect your email",description:`Add your email to your ${e?.name} account`,icon:(0,h.jsx)(P.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"})}),(0,h.jsx)(nX,{children:(0,h.jsx)(sq,{stacked:!0})}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},LINK_PHONE_SCREEN:()=>{let{app:e,currentScreen:t,data:r,navigate:i,setModalData:n}=ig(),{initLoginWithSms:a}=iD();async function o({qualifiedPhoneNumber:e}){try{await a(e),i("AWAITING_PASSWORDLESS_CODE")}catch(e){n({errorModalData:{error:e,previousScreen:r?.errorModalData?.previousScreen||t||"LINK_PHONE_SCREEN"}}),i("ERROR_SCREEN")}}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(ai,{title:"Connect your phone",description:`Add your number to your ${e?.name} account`,icon:(0,h.jsx)(R.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"40px",width:"40px"})}),(0,h.jsx)(nX,{children:(0,h.jsx)(s8,{stacked:!0,onSubmit:o})}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},LINK_WALLET_SCREEN:()=>{let{linkingHint:e}=iD(),{app:t}=ig(),r=e?`Select the wallet with ${ta(e)} and follow the instructions to reconnect your wallet${t?.name?` to ${t.name}.`:"."}`:`Link a wallet to your ${t?.name} account`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(ar,{title:`${e?"Reconnect":"Connect"} your wallet`,description:r}),(0,h.jsx)(nb,{children:(0,h.jsx)(aA,{connectOnly:!1})}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},LINK_PASSKEY_SCREEN:()=>{let{user:e,unlinkPasskey:t}=iz(),{linkWithPasskey:r,closePrivyModal:i}=iD(),n=e?.linkedAccounts.filter(e=>"passkey"===e.type),[a,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(""),[d,p]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1);(0,o.useEffect)(()=>{0===n.length&&m(!1)},[n.length]);let f=async e=>(s(!0),await t(e).then(()=>p(!0)).catch(e=>{if(e instanceof eF&&"missing_or_invalid_mfa"===e.privyErrorCode){c("Cannot unlink a passkey enrolled in MFA");return}c("Unknown error occurred.")}).finally(()=>{s(!1)}));return d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:()=>i()},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{status:"success",children:(0,h.jsx)(N.Z,{})})}),(0,h.jsx)(lE,{children:"Passkey added"}),(0,h.jsx)(lA,{children:"From now on, you can use your passkey to log in."}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{onClick:()=>i(),children:"Done"})}),(0,h.jsx)(nx,{})]}):u?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:()=>m(!1),onClose:()=>i()},"header"),(0,h.jsx)(lx,{passkeys:n,expanded:u,onUnlink:f,onExpand:()=>m(!0)}),(0,h.jsx)(nx,{})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:()=>i()},"header"),(0,h.jsx)(nT,{children:(0,h.jsxs)(lC,{children:[(0,h.jsx)(ly,{}),(0,h.jsx)(lw,{})]})}),(0,h.jsx)(lE,{children:"Secure your account with a passkey"}),(0,h.jsx)(lS,{}),0===n.length?(0,h.jsx)(lv,{}):(0,h.jsx)(lx,{passkeys:n,expanded:u,onUnlink:f,onExpand:()=>m(!0)}),(0,h.jsxs)(nL,{style:{marginTop:"12px"},children:[l&&(0,h.jsx)(lb,{fail:!0,children:l}),(0,h.jsx)(i2,{onClick:()=>{s(!0),r().then(()=>p(!0)).catch(e=>{if(e instanceof eF){if("cannot_link_more_of_type"===e.privyErrorCode){c("Cannot link more passkeys to account.");return}if("passkey_not_allowed"===e.privyErrorCode){c("Passkey request timed out or rejected by user.");return}}c("Unknown error occurred.")}).finally(()=>{s(!1)})},loading:a,children:"Add new passkey"})]}),(0,h.jsx)(nx,{})]})},UPDATE_EMAIL_SCREEN:()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(n7,{}),(0,h.jsx)(ai,{title:"Update your email",description:"Add the email address you'd like to use going forward. We'll send you a confirmation code",icon:(0,h.jsx)(P.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"48px",width:"48px"})}),(0,h.jsx)(nX,{children:(0,h.jsx)(hp,{stacked:!0})}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]}),CONNECT_ONLY_LANDING_SCREEN:()=>{let{app:e}=ig();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(aN,{}),(0,h.jsx)(nb,{children:(0,h.jsx)(aA,{connectOnly:!0})}),e&&(0,h.jsx)(ny,{app:e,alwaysShowImplicitConsent:!0}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},CONNECT_ONLY_AUTHENTICATED_SCREEN:()=>{let{app:e}=ig(),t=`Connect a wallet to ${e?.name}`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(ar,{title:"Connect your wallet",description:t}),(0,h.jsx)(nb,{children:(0,h.jsx)(aA,{connectOnly:!0})}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN:()=>{let{app:e,setModalData:t,navigate:r,data:i,onUserCloseViaDialogOrKeybindRef:n}=ig(),[a,s]=(0,o.useState)(""),{embeddedWallets:l}=ic(),{authenticated:c}=iz(),{closePrivyModal:d}=iD(),{onSuccess:p,onFailure:u,callAuthOnSuccessOnClose:m}=i.createWallet,f=e?.embeddedWallets.requireUserOwnedRecoveryOnCreate===!0,{createWallet:g}=oo(),[y,w]=(0,o.useState)(null),x=new tj(async()=>{try{let e=await g();if(!e)return;w(e),r("EMBEDDED_WALLET_CREATED_SCREEN")}catch(e){s(e.message)}});return(0,o.useEffect)(()=>{if(!c){r("LANDING"),u(Error("User must be authenticated before creating a Privy wallet"));return}if(f)return t({...i,recoverySelection:{...i?.recoverySelection,isInAccountCreateFlow:!0}}),r(a1({walletAction:"create",availableRecoveryMethods:l.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:!1,isResettingPassword:!1}));x.execute()},[f,c]),n.current=()=>null,a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{closeable:!1}),(0,h.jsxs)(n3,{children:[(0,h.jsx)(O.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}),(0,h.jsx)(ai,{title:"Something went wrong",description:a})]}),(0,h.jsx)(i2,{onClick:()=>{y?(p(y),d({shouldCallAuthOnSuccess:m})):(u(new eV("User wallet creation failed")),d({shouldCallAuthOnSuccess:!1}))},children:"Close"}),(0,h.jsx)(os,{})]}):(0,h.jsx)(aZ,{})},EMBEDDED_WALLET_CREATED_SCREEN:()=>{let{user:e}=iz(),{closePrivyModal:t,isNewUserThisSession:r,updateWallets:i}=iD(),{app:n,data:a,onUserCloseViaDialogOrKeybindRef:s}=ig(),{onSuccess:l,onFailure:c,callAuthOnSuccessOnClose:d}=a.createWallet,p=()=>{let r=ri(e);r?(i(),l(r)):c(Error("Failed to create wallet")),t({shouldCallAuthOnSuccess:d})};return(0,o.useEffect)(()=>{let e=setTimeout(p,2500);return()=>clearTimeout(e)},[]),s.current=p,(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:p}),(0,h.jsx)(n7,{}),(0,h.jsxs)(n3,{children:[(0,h.jsx)(N.Z,{fill:"var(--privy-color-accent)",width:"64px",height:"64px"}),(0,h.jsx)(ai,{title:r?`Welcome${n?.name?` to ${n?.name}`:""}`:"All set!",description:r?"You’ve successfully created an account.":"Your account is secured."})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_CONNECTING_SCREEN:()=>{let{authenticated:e,user:t,getAccessToken:r}=iz(),{closePrivyModal:i,createAnalyticsEvent:n,walletProxy:a}=iD(),{navigate:s,data:l,setModalData:c,onUserCloseViaDialogOrKeybindRef:d}=ig(),p=(0,o.useMemo)(()=>Date.now(),[]),[u,m]=(0,o.useState)(!1),{onCompleteNavigateTo:f,onFailure:g,shouldForceMFA:y,address:w}=l?.connectWallet,x=e=>{u||(m(!0),g("string"==typeof e?Error(e):e))};(0,o.useEffect)(()=>{let o=w?t?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&e.address===w):ri(t),d;return e&&o?a?((async()=>{let e=await r();if(!e)return x("User must be authenticated and have a Privy wallet before it can be connected");try{await a.connect({accessToken:e,address:o.address}),y&&await a.verifyMfa({accessToken:e});let t=(Date.now()-p)/1e3;"EMBEDDED_WALLET_KEY_EXPORT_SCREEN"===f&&t<1?d=setTimeout(()=>{s(f)},(1-t)*1e3):s(f)}catch(e){if(aK(e)&&"privy"===o.recoveryMethod){let e=await r();if(!e)return x("User must be authenticated and have a Privy wallet before it can be recovered");try{n({eventName:"embedded_wallet_pinless_recovery_started",payload:{walletAddress:o.address}}),(await a?.recover({address:o.address,accessToken:e,recoveryMethod:o.recoveryMethod}))?.address||x(Error("Unable to recover wallet")),f?s(f):i({shouldCallAuthOnSuccess:!1}),n({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:o.address}}),s(f)}catch{x("An error has occurred, please try again.")}}else aK(e)&&"privy"!==o.recoveryMethod?(c({...l,recoverWallet:{privyWallet:o,onCompleteNavigateTo:f,onFailure:g},recoveryOAuthStatus:{provider:o.recoveryMethod,action:"recover",isInAccountCreateFlow:!1}}),s(a2(o.recoveryMethod))):x(e)}})(),()=>clearTimeout(d)):void 0:x("User must be authenticated and have a Privy wallet before it can be connected")},[e,t,a]);let v=()=>{x("User exited before wallet could be connected"),i({shouldCallAuthOnSuccess:!1})};return d.current=v,(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:v}),u?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n3,{children:[(0,h.jsx)(O.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}),(0,h.jsx)(ai,{title:"Something went wrong",description:"We’re on it. Please try again later."})]}),(0,h.jsx)(i2,{onClick:()=>i({shouldCallAuthOnSuccess:!1}),children:"Close"})]}):(0,h.jsx)(aZ,{}),(0,h.jsx)(a5,{})]})},EMBEDDED_WALLET_PASSWORD_RECOVERY_SCREEN:()=>{let[e,t]=(0,o.useState)(!0),{authenticated:r,getAccessToken:i}=iz(),{walletProxy:n,closePrivyModal:a,createAnalyticsEvent:s}=iD(),{navigate:l,data:c,onUserCloseViaDialogOrKeybindRef:d}=ig(),[p,u]=(0,o.useState)(void 0),[m,f]=(0,o.useState)(""),[g,y]=(0,o.useState)(!1),{privyWallet:w,onCompleteNavigateTo:x,onSuccess:v,onFailure:C}=c.recoverWallet,b=(e="User exited before their wallet could be recovered")=>{a({shouldCallAuthOnSuccess:!1}),C("string"==typeof e?new eV(e):e)};d.current=b,(0,o.useEffect)(()=>{if(!r||!w)return b("User must be authenticated and have a Privy wallet before it can be recovered")},[r]);let _=e=>{e&&u(e)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:b}),(0,h.jsx)(n7,{}),(0,h.jsxs)(db,{children:[(0,h.jsxs)(dC,{children:[(0,h.jsx)(ew.Z,{height:48,width:48,stroke:"var(--privy-color-accent)"}),(0,h.jsx)("h3",{style:{color:"var(--privy-color-foreground)"},children:"Enter your password"}),(0,h.jsx)("p",{style:{color:"var(--privy-color-foreground-2)"},children:"Please provision your account on this new device. To continue, enter your recovery password."})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)(of,{children:[(0,h.jsx)(ou,{type:e?"password":"text",onChange:e=>_(e.target.value),disabled:g,style:{paddingRight:"2.3rem"}}),(0,h.jsx)(ov,{style:{right:"0.75rem"},children:e?(0,h.jsx)(ob,{onClick:()=>t(!1)}):(0,h.jsx)(o_,{onClick:()=>t(!0)})})]}),!!m&&(0,h.jsx)(d_,{children:m})]}),(0,h.jsxs)("div",{children:[(0,h.jsxs)(n6,{children:[(0,h.jsx)("h4",{children:"Why is this necessary?"}),(0,h.jsx)("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]}),(0,h.jsx)(dj,{loading:g||!n,disabled:!p,onClick:async()=>{y(!0);let e=await i();if(!e||!w||null===p)return b("User must be authenticated and have a Privy wallet before it can be recovered");try{s({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:w.address}}),await n?.recover({address:w.address,accessToken:e,recoveryPin:p,recoveryMethod:w.recoveryMethod}),f(""),x?l(x):a({shouldCallAuthOnSuccess:!1}),v?.(w),s({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:w.address}})}catch(e){aG(e)&&("invalid_recovery_pin"===e.type||"invalid_request_arguments"===e.type)?f("Invalid recovery password, please try again."):f("An error has occurred, please try again.")}finally{y(!1)}},warn:!1,hideAnimations:!w&&g,children:"Recover your account"})]})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_RECOVERY_SELECTION_SCREEN:()=>{let[e,t]=(0,o.useState)(!1),{navigate:r,setModalData:i,data:n}=ig(),{user:a}=iz(),{embeddedWallets:s}=ic(),l=ri(a),c=null===l,{isInAccountCreateFlow:d,isResettingPassword:p}=n.recoverySelection,u=l?.recoveryMethod!=="privy",m=u?(0,h.jsxs)("span",{children:["Your account is currently secured using"," ",(0,h.jsx)("strong",{children:dR[l?.recoveryMethod||"user-passcode"]}),"."]}):"Select a method for logging in on new devices and recovering your account.";function f(e){i({recoveryOAuthStatus:{provider:e,action:c?"create-wallet":"set-recovery",isInAccountCreateFlow:d}}),r("EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN")}return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e?()=>t(!1):void 0,infoFn:e?void 0:()=>t(!0)},"header"),e?(0,h.jsx)(dN,{onClose:()=>t(!1)}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ai,{title:u?"Update backup method":"Secure your account",icon:(0,h.jsx)(eE.Z,{width:48}),description:m}),(0,h.jsx)(dA,{children:s.userOwnedRecoveryOptions.filter(e=>!["icloud","google-drive"].includes(l?.recoveryMethod||"")||e!==l?.recoveryMethod).sort().map(e=>{switch(e){case"google-drive":return(0,h.jsxs)(nE,{onClick:()=>f("google-drive"),children:[(0,h.jsx)(dP,{children:(0,h.jsx)(dE,{style:{width:18}})}),"Back up to Google Drive"]},e);case"icloud":return(0,h.jsxs)(nE,{onClick:()=>f("icloud"),children:[(0,h.jsx)(dP,{children:(0,h.jsx)(dk,{style:{width:24}})}),"Back up to Apple iCloud"]},e);case"user-passcode":return(0,h.jsxs)(nE,{onClick:()=>{r(a0({isCreatingWallet:c,skipSplashScreen:!0}))},children:[(0,h.jsx)(dP,{children:(0,h.jsx)(eA.Z,{style:{width:18}})}),p?"Reset your":"Set a"," password"]},e);default:return null}})})]}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_RECOVERY_OAUTH_SCREEN:()=>{let{logout:e}=iz(),{navigate:t,setModalData:r,data:i}=ig(),{recoveryOAuthFlow:n,closePrivyModal:a,createAnalyticsEvent:s}=iD(),[l,c]=(0,o.useState)(!1),{provider:d,action:p,isInAccountCreateFlow:u}=i?.recoveryOAuthStatus,[m,f]=(0,o.useState)(void 0),[g,y]=(0,o.useState)("create-wallet"===p);if("user-passcode"===d)throw Error("RecoveryOAuthScreen should never be called with a wallet that specifies recoveryMethod: `user-passcode`");let w=dT[d].name,x=dT[d].component,v=i?.recoverWallet?.onCompleteNavigateTo,C=new tj(async(e="create-wallet")=>(y(!0),new Promise((t,r)=>{setTimeout(async()=>{try{let r=window.open();await n(d,e,r),c(!0),t()}catch{f({message:`${"recover"===e?"Recovery":"Back up"} with ${w} unsuccessful`,detail:"recover"===p?`Please verify that you are selecting the ${w} account associated with your backup.`:"",retryable:!0}),r()}},0)})));(0,o.useEffect)(()=>{"recover"!==p&&C.execute(u?"create-wallet":"set-recovery")},[]),(0,o.useEffect)(()=>{if(!l)return;let i=setTimeout(()=>{u?(r({createWallet:{onSuccess:()=>{},onFailure:t=>{s({eventName:"embedded_wallet_creation_failure_logout",payload:{error:t,screen:"RecoveryOAuthScreen"}}),e()},callAuthOnSuccessOnClose:!0}}),t("EMBEDDED_WALLET_CREATED_SCREEN")):a({shouldCallAuthOnSuccess:!1})},1400);return()=>clearTimeout(i)},[l]);let b=(0,o.useCallback)(async()=>{await C.execute("recover"),v?t(v):c(!0)},[]),_="google-drive"===d?"Google Drive":"Apple iCloud",j=l&&`Successfully ${"recover"===p?"recovered":"backed up"} with ${_}.`||m&&m.message||`${"recover"===p?"Recovering":"Backing up"} with ${_}...`,k=m?m.detail:"";return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),g?(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(dA,{children:[(0,h.jsx)(ai,{title:j,icon:(0,h.jsx)(x,{style:{width:"38px",height:"38px"}}),description:k}),m&&m?.retryable?(0,h.jsx)(i2,{onClick:()=>{t4(),f(void 0),"create-wallet"===p?C.execute("create-wallet"):b()},disabled:!l&&!m?.retryable,children:"Try again"}):null]})}):(0,h.jsxs)(dA,{children:[(0,h.jsx)(ai,{title:"Confirm it's really you",icon:(0,h.jsx)(x,{style:{height:42,width:48}}),description:`To confirm your identity, please log in to ${_} where your account is backed up.`}),(0,h.jsxs)(i2,{onClick:b,children:["Confirm with ",_]})]}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_KEY_EXPORT_SCREEN:()=>{let[e,t]=(0,o.useState)(null),{authenticated:r,user:i,getAccessToken:n}=iz(),{closePrivyModal:a,createAnalyticsEvent:s,clientAnalyticsId:l}=iD(),{data:c,onUserCloseViaDialogOrKeybindRef:d}=ig(),p=ri(i)?.address,{onFailure:u,onSuccess:m,origin:f,appId:g,appClientId:y}=c.keyExport,w=e=>{a({shouldCallAuthOnSuccess:!1}),u("string"==typeof e?Error(e):e)},x=()=>{a({shouldCallAuthOnSuccess:!1}),m(),s({eventName:"embedded_wallet_key_export_completed",payload:{walletAddress:p}})};return(0,o.useEffect)(()=>{let e=ri(i);if(!r||!e)return w("User must be authenticated before exporting their wallet");n().then(t,w)},[r,i]),d.current=x,(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:x}),(0,h.jsxs)(a8,{children:[(0,h.jsxs)(ai,{icon:(0,h.jsx)(L.Z,{color:"var(--privy-color-accent)",strokeWidth:2,height:"40px",width:"40px"}),title:"Transfer Wallet",children:[(0,h.jsxs)(on,{children:[(0,h.jsx)(a7,{style:{marginRight:6}}),ta(p)]}),(0,h.jsx)("p",{children:"You can bring your account with you to another site using an external wallet."})]}),(0,h.jsxs)(a9,{children:[(0,h.jsxs)(oe,{children:[(0,h.jsx)(ot,{children:"1"}),(0,h.jsxs)("span",{children:[(0,h.jsx)("a",{href:"https://privy-io.notion.site/Transferring-your-account-9dab9e16c6034a7ab1ff7fa479b02828",target:"blank",rel:"noopener noreferrer",children:"Follow the guide"})," ","to transfer your account to your wallet of choice."]})]}),(0,h.jsxs)(oe,{children:[(0,h.jsx)(ot,{children:"2"}),(0,h.jsx)("span",{children:"Copy this key into your other wallet"})]})]}),(0,h.jsx)("div",{style:{width:"100%"},children:e&&(0,h.jsx)(a6,{origin:f,appId:g,appClientId:y,accessToken:e,clientAnalyticsId:l,address:p,dimensions:{height:"44px"}})}),(0,h.jsxs)(oa,{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(M.Z,{viewBox:"0 0 20 18"}),(0,h.jsx)("h4",{children:"Warning"})]}),(0,h.jsx)("p",{children:"Never share your private key with anyone! It controls your account."})]})]}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_SIGN_REQUEST_SCREEN:()=>{let{authenticated:e}=iz(),{initializeWalletProxy:t,closePrivyModal:r}=iD(),{navigate:i,data:n,onUserCloseViaDialogOrKeybindRef:a}=ig(),[s,l]=(0,o.useState)(!0),[c,d]=(0,o.useState)(""),[p,u]=(0,o.useState)(),[m,f]=(0,o.useState)(null),[g,y]=(0,o.useState)(!1),w=null!==m;(0,o.useEffect)(()=>{e||i("LANDING")},[e]),(0,o.useEffect)(()=>{t(3e4).then(e=>{l(!1),e||(d("An error has occurred, please try again."),u(new rw(new ry(c,rx.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))})},[]);let{method:x,data:v,confirmAndSign:C,onSuccess:b,onFailure:_,uiOptions:j}=n.signMessage,k={title:j.title||"Sign message",description:j.description||"Signing this message will not cost you any fees.",buttonText:j.buttonText||"Sign and continue"},E=e=>{e?b(e):_(p||new rw(new ry("The user rejected the request.",rx.E4001_USER_REJECTED_REQUEST.eipCode))),r({shouldCallAuthOnSuccess:!1}),setTimeout(()=>{f(null),d(""),u(void 0)},200)};return a.current=()=>{E(m)},(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:()=>E(m)}),(0,h.jsx)(n7,{}),(0,h.jsxs)(hi,{children:[j.iconUrl&&"string"==typeof j.iconUrl?(0,h.jsx)(hd,{children:(0,h.jsx)("img",{src:j.iconUrl,alt:"icon",style:{width:"38px",height:"38px"}})}):null,(0,h.jsx)(hn,{children:k.title}),(0,h.jsx)(ha,{children:k.description}),"personal_sign"===x&&(0,h.jsx)(ho,{children:d9(v)}),"eth_signTypedData_v4"===x&&(0,h.jsx)(hr,{typedData:v}),(0,h.jsx)(hl,{fail:!0,children:c}),(0,h.jsx)(i3,{disabled:g||w||s,loading:g,onClick:async()=>{y(!0),d("");try{let e=await C();f(e),y(!1),setTimeout(()=>{E(e)},1400)}catch(e){console.error(e),d("An error has occurred, please try again."),u(new rw(new ry(c,rx.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),y(!1)}},children:g?"Signing...":w?(0,h.jsxs)(hc,{children:[(0,h.jsx)(o2,{style:{height:"0.9rem",width:"0.9rem"},strokeWidth:2})," ",(0,h.jsx)("span",{children:"Success"})]}):k.buttonText})]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN:()=>{let{authenticated:e,getAccessToken:t}=iz(),{wallets:r}=dh(),{walletProxy:i,closePrivyModal:n,getFiatOnRampConfig:a,rpcConfig:s,chains:l,nativeTokenSymbolForChainId:c,appId:d}=iD(),{app:p,navigate:u,data:m,onUserCloseViaDialogOrKeybindRef:f,setModalData:g}=ig(),{transactionRequest:y,onSuccess:w,onFailure:x,uiOptions:v,fundWalletConfig:C}=m.sendTransaction,[b,_]=(0,o.useState)(null),[j,k]=(0,o.useState)(null),[E,A]=(0,o.useState)(""),[S,T]=(0,o.useState)(),[P,R]=(0,o.useState)(),[N,O]=(0,o.useState)(!1),I=()=>{A(""),T(void 0),R(void 0)},M=(e,t,r)=>{A(e),T(new rw(new ry(t??e,r??rx.E32603_DEFAULT_INTERNAL_ERROR.eipCode)))},[L,W]=(0,o.useState)(!1),[F,U]=(0,o.useState)(!0),[D,Z]=(0,o.useState)(null),[z,H]=(0,o.useState)(y),{tokenPrice:$,isTokenPriceLoading:B}=dc(z),V=c(y.chainId)||"ETH",[q,G]=(0,o.useState)(null),[K,Y]=(0,o.useState)(null),[Q,J]=(0,o.useState)(!0);(0,o.useEffect)(()=>{e||(u("LANDING"),x(Error("User must be authenticated before transacting with a Privy wallet")))},[e]);let X=y.from?r.find(e=>e.address===y.from):r.find(e=>"privy"===e.walletClientType&&!e.imported),ee=async()=>{if(!X)return console.warn("No privy wallet found, cannot fund wallet.");let{signedUrl:e,externalTransactionId:t}=await a(X.address,{config:C?.config||{}});g({fiatOnRampPrompt:{signedUrl:e},fiatOnRampStatus:{externalTransactionId:t}}),u("FIAT_ON_RAMP_PROMPT_SCREEN")},et=(0,o.useMemo)(()=>tf(z.chainId,l,s,{appId:d}),[z.chainId,s]);async function er(e){let r=e;if(!await t()||!i||!X)return;try{r=await dr(X.address,e,et),H(r)}catch(e){console.error(e),M("There was an error preparing your transaction. Your transaction request will likely fail.",e.reason)}let n=ex.O$.from(0),a=ex.O$.from(0);try{({totalGasEstimate:n,l1ExecutionFeeEstimate:a}=await c0(r,et)),G(n.toHexString()),Y(a.toHexString())}catch{G(null)}try{let{balance:e,hasSufficientFunds:t}=await dn(X.address,r,n,et);Z(e.toHexString()),t||(U(!1),M("Wallet has insufficient funds on this network for this transaction."),p?.fiatOnRamp.enabled&&O(!0))}catch(e){console.warn(`Failed to fetch wallet balance with error: ${e}`)}J(!1)}(0,o.useEffect)(()=>{er(z)},[i]);let ei=z.to&&z.data?"CONTRACT_CALL":z.to&&z.value?"SEND":"UNKNOWN",en="SEND"===ei?`Send ${V}`:"Review transaction",ea={modalTitle:v.header||v.modalTitle||en,buttonText:v.buttonText||"Submit"},eo=()=>{L||(j?w(j):x(S||new rw(new ry("The user rejected the request",rx.E4001_USER_REJECTED_REQUEST.eipCode))),n({shouldCallAuthOnSuccess:!1}))};return f.current=eo,void 0===$&&B||Q?(0,h.jsxs)(h.Fragment,{children:[v.transactionInfo?.contractInfo?.imgUrl&&(0,h.jsx)(rZ,{src:v.transactionInfo?.contractInfo?.imgUrl}),(0,h.jsx)(no,{title:ea.modalTitle,onClose:eo}),(0,h.jsx)(d3,{children:(0,h.jsx)(aZ,{})})]}):null!==b?(0,h.jsx)(d0,{txn:z,onClose:eo,receipt:b,transactionInfo:v.transactionInfo,tokenPrice:$,tokenSymbol:V,l1GasEstimate:K,receiptHeader:v.successHeader,receiptDescription:v.successDescription}):P?(0,h.jsx)(dF,{transactionError:P,chainId:z.chainId,onClose:eo,onRetry:({resetNonce:e})=>{I();let t=z;e&&(t={...z,nonce:void 0}),er(t)}}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{title:ea.modalTitle,onClose:eo}),(0,h.jsxs)(d3,{children:[(0,h.jsxs)(d7,{children:[(0,h.jsx)(d2,{txn:z,txnFamily:ei,uiOptions:v,tokenSymbol:V,tokenPrice:$}),X?(0,h.jsx)(cR,{from:X.address,to:z.to,txn:z,transactionInfo:v.transactionInfo,gas:q||void 0,tokenPrice:$,tokenSymbol:V}):null]}),(0,h.jsxs)(d8,{children:[(0,h.jsx)(d4,{children:E}),(0,h.jsx)(cD,{txn:z,address:X?.address??"",hasFunds:F,balance:D}),(0,h.jsxs)(d5,{children:[N&&(0,h.jsx)(i2,{onClick:ee,children:"Add Funds"}),(0,h.jsx)(d6,{disabled:L||!F,loading:!i||L,loadingText:L?"Submitting (may take a few moments)...":"Loading...",onClick:async()=>{W(!0);let e=await t();if(e&&!L&&X)try{let t=await di(e,X.address,i,z,et);k(t);let r=await t.wait();_(dl(r)),I()}catch(e){console.warn({transaction:z,error:e}),R(e),T(new rw(new ry(e.reason??"Error processing transaction",rx.E32603_DEFAULT_INTERNAL_ERROR.eipCode)))}finally{W(!1)}},children:ea.buttonText})]})]})]})]})},FIAT_ON_RAMP_PROMPT_SCREEN:()=>{let{app:e,data:t,navigate:r}=ig(),{createAnalyticsEvent:i}=iD(),{signedUrl:n}=t.fiatOnRampPrompt;return e&&n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{title:"Fund account"},"header"),(0,h.jsx)(sy,{app:e,signedUrl:n,onContinue:()=>{i({eventName:"sdk_fiat_on_ramp_started",payload:{provider:sS}}),r("FIAT_ON_RAMP_STATUS_SCREEN")}}),(0,h.jsx)(nw,{protectedByPrivy:!0})]}):null},FIAT_ON_RAMP_STATUS_SCREEN:()=>{let{app:e,data:t}=ig(),{closePrivyModal:r}=iD(),{externalTransactionId:i}=t?.fiatOnRampStatus,n=function(e,t=!1){let[r,i]=(0,o.useState)(null),{createAnalyticsEvent:n}=iD(),a=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let r=setInterval(async()=>{if(e)try{let[a]=await sR(e,t),o="waitingAuthorization"===a.status&&"credit_debit_card"===a.paymentMethod?"pending":a.status;i(o),["failed","completed","awaitingAuthorization"].includes(o)&&(n({eventName:sT,payload:{status:o,provider:sS,paymentMethod:a.paymentMethod,cardPaymentType:a.cardPaymentType,currency:a.currency?.code,baseCurrencyAmount:a.baseCurrencyAmount,quoteCurrencyAmount:a.quoteCurrencyAmount,feeAmount:a.feeAmount,extraFeeAmount:a.extraFeeAmount,networkFeeAmount:a.networkFeeAmount}}),clearInterval(r))}catch(e){e.response?.status!==404&&(a.current+=1),a.current>=3&&(i("serviceFailure"),n({eventName:sT,payload:{status:"serviceFailure",provider:sS}}),clearInterval(r))}},3e3);return()=>clearInterval(r)},[e,a]),r}(i||null,e.fiatOnRamp.useSandbox);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{title:"Fund account"},"header"),(0,h.jsx)(sO,{status:n,onClickCta:r}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_PASSWORD_UPDATE_SPLASH_SCREEN:()=>{let{closePrivyModal:e}=iD(),{data:t,setModalData:r,navigate:i,onUserCloseViaDialogOrKeybindRef:n}=ig(),{onSuccess:a,onFailure:o}=t.setWalletPassword,s=()=>{o(new eV("Exited before password was added to wallet")),e({shouldCallAuthOnSuccess:!1})};return n.current=s,(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:s}),(0,h.jsx)(n7,{}),(0,h.jsxs)(n3,{children:[(0,h.jsxs)(n9,{children:[(0,h.jsx)(K.Z,{stroke:"var(--privy-color-accent)",width:"64px",height:"64px"}),(0,h.jsx)(ae,{style:{width:24,height:24,position:"absolute",bottom:0,right:0},children:(0,h.jsx)(Y.Z,{width:"12px",height:"12px",fill:"white"})})]}),(0,h.jsxs)(ai,{title:"Secure Your Account",children:["Please set a password to secure your account.",(0,h.jsx)("p",{children:"Losing access to this password and this device will make your account inaccessible."})]})]}),(0,h.jsx)(i2,{onClick:()=>{r({createWallet:{onFailure:o,onSuccess:a,callAuthOnSuccessOnClose:!1,addPasswordToExistingWallet:!0}}),i("EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN")},children:"Add password"}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},EMBEDDED_WALLET_PASSWORD_UPDATE_SCREEN:()=>{let[e,t]=(0,o.useState)(null),[r,i]=(0,o.useState)(!1),[n,a]=(0,o.useState)(null),[s,l]=(0,o.useState)(""),{authenticated:c,getAccessToken:d,user:p}=iz(),{walletProxy:u,refreshUser:m,closePrivyModal:f,createAnalyticsEvent:g}=iD(),{app:y,navigate:w,data:x,onUserCloseViaDialogOrKeybindRef:v}=ig(),{onSuccess:C,onFailure:b}=x.createWallet,_=ri(p),j=e?.recoveryMethod==="user-passcode",k=_?.recoveryMethod==="user-passcode";(0,o.useEffect)(()=>{c||(w("LANDING"),b(new eq("User must be authenticated before setting a password on a Privy wallet")))},[c]);let E=()=>{if(n){b(n),f({shouldCallAuthOnSuccess:!1});return}if(!j){b(new eV("Exited before password was added to wallet")),f({shouldCallAuthOnSuccess:!1});return}C(e),f({shouldCallAuthOnSuccess:!1})};v.current=E;let A=async()=>{let e=await d();if(e&&_?.address&&s&&u)try{if(g({eventName:"embedded_wallet_set_recovery_started",payload:{walletAddress:_.address,recoveryMethod:"user-passcode",isResettingPassword:k}}),!(await u.setRecovery({accessToken:e,address:_.address,recoveryPassword:s,recoveryMethod:"user-passcode"})).address){a(new eV("Error setting password on privy wallet")),g({eventName:"embedded_wallet_set_recovery_failed",payload:{walletAddress:_.address,recoveryMethod:"user-passcode",isResettingPassword:k,reason:"error setting password"}});return}let r=await m(),i=ri(r);if(!i){a(new eV("Error setting password on privy wallet")),g({eventName:"embedded_wallet_set_recovery_failed",payload:{walletAddress:_.address,recoveryMethod:"user-passcode",isResettingPassword:k,reason:"wallet disconnected"}});return}t(i),g({eventName:"embedded_wallet_set_recovery_completed",payload:{walletAddress:_.address,recoveryMethod:"user-passcode",isResettingPassword:k}})}catch(e){console.warn(e),a(e instanceof Error?e:Error("Error setting password on privy wallet")),g({eventName:"embedded_wallet_set_password_failed",payload:{walletAddress:_.address,reason:e}})}},S=async()=>{j?(C(e),f({shouldCallAuthOnSuccess:!1})):(i(!0),a(null),await A(),i(!1))};return(0,h.jsx)(oQ,{appName:y?.name||"privy",config:{initiatedBy:"user",onCancel:E},error:n?"An error has occurred, please try again.":void 0,buttonLoading:r,buttonHideAnimations:!1,password:s,isResettingPassword:k,onPasswordGenerate:()=>l(oz()),onPasswordChange:l,onSubmit:S,onClose:E})},EMBEDDED_WALLET_PASSWORD_CREATE_SCREEN:()=>{let{app:e,navigate:t,data:r,onUserCloseViaDialogOrKeybindRef:i}=ig(),[n,a]=(0,o.useState)(""),[s,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(),[p,u]=(0,o.useState)(null),{authenticated:m}=iz(),{closePrivyModal:f,isNewUserThisSession:g,initializeWalletProxy:y}=iD(),{onSuccess:w,onFailure:x,callAuthOnSuccessOnClose:v}=r.createWallet,{createWallet:C}=oo(),[b,_]=(0,o.useState)(null),j=new tj(async()=>{try{let e=await C(c);if(!e)return;_(e),g?t("EMBEDDED_WALLET_CREATED_SCREEN"):(w(e),f({shouldCallAuthOnSuccess:v}))}catch(e){a(e.message)}});(0,o.useEffect)(()=>{p||y(3e4).then(e=>u(e))},[p]),(0,o.useEffect)(()=>{if(!m){t("LANDING"),x(Error("User must be authenticated before creating a Privy wallet"));return}},[m]),i.current=()=>null;let k=async()=>(l(!0),j.execute().then(()=>new Promise(e=>setTimeout(e,250))).finally(()=>l(!1)));return(0,h.jsx)(oQ,{config:{initiatedBy:"automatic"},appName:e?.name||"privy",loading:!p,buttonLoading:s,buttonHideAnimations:!b&&s,isResettingPassword:!1,error:n,password:c||"",onClose:()=>{b&&b?.recoveryMethod!=="user-passcode"?(x(new eV("User created a wallet but failed to set a password for it")),f({shouldCallAuthOnSuccess:!1})):b?(w(b),f({shouldCallAuthOnSuccess:v})):(x(new eV("User wallet creation failed")),f({shouldCallAuthOnSuccess:!1}))},onPasswordChange:d,onPasswordGenerate:()=>d(oz()),onSubmit:k})},MFA_ENROLLMENT_FLOW_SCREEN:()=>{let{user:e,enrollInMfa:t}=iz(),[r,i]=(0,o.useState)(null),{unenrollWithSms:n,unenrollWithTotp:a,unenrollWithPasskey:s}=lW(),{app:l,ready:c,data:d,onUserCloseViaDialogOrKeybindRef:p}=ig(),{closePrivyModal:u}=iD(),{promptMfa:m}=lL(),{initEnrollmentWithTotp:f}=lW(),[g,y]=(0,o.useState)(!1),[w,x]=(0,o.useState)(null),[v,C]=(0,o.useState)(null),b=()=>{u({shouldCallAuthOnSuccess:!0}),t(!1),setTimeout(()=>{i(null),x(null)},500)},{initEnrollmentWithPasskey:_,submitEnrollmentWithPasskey:j}=lW(),[k,E]=(0,o.useState)(!1),[A,S]=(0,o.useState)(null);p.current=b;let T=e?.mfaMethods.includes("sms"),P=!!e?.phone,R=e?.mfaMethods.includes("totp"),N=e?.mfaMethods.includes("passkey"),O=T||R||N,I=e?.linkedAccounts.filter(e=>"passkey"===e.type).map(e=>e.credentialId)??[];function M(){i(null),x(null)}async function L(){E(!0);try{await _(),await j({credentialIds:I})}catch(e){S(e)}finally{E(!1)}}async function W(e){if(await m().catch(S),"totp"===e){x(e),C(null),f().then(e=>{C(e)}).catch(()=>{C(null),M()});return}if("passkey"===e&&1===I.length)return await L();x(e)}if((0,o.useEffect)(()=>{O&&y(!0)},[O]),!c||!e||!l)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:b},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(lF,{})}),(0,h.jsx)(nN,{children:(0,h.jsx)(iQ,{})}),(0,h.jsx)(nx,{})]});async function F(){i(null);try{await n()}catch{i(null)}}async function U(){i(null);try{await a()}catch{i(null)}}async function D(){i(null);try{await m(),await s()}catch{i(null)}}if("sms"===r)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:M,onClose:b},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ep.Z,{})})}),(0,h.jsx)(nP,{children:"Remove SMS verification?"}),(0,h.jsxs)(nR,{children:["MFA adds an extra layer of security to your ",l?.name," account. Make sure you have other methods to secure your account."]}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{warn:!0,onClick:F,children:"Remove SMS for MFA"})}),(0,h.jsx)(nx,{})]});if("totp"===r)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:M,onClose:b},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(ed.Z,{})})}),(0,h.jsx)(nP,{children:"Remove Authenticator App verification?"}),(0,h.jsxs)(nR,{children:["MFA adds an extra layer of security to your ",l?.name," account. Make sure you have other methods to secure your account."]}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{warn:!0,onClick:U,children:"Remove Authenticator App for MFA"})}),(0,h.jsx)(nx,{})]});if("passkey"===r)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:M,onClose:b},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(eu.Z,{})})}),(0,h.jsx)(nP,{children:"Are you sure you want to remove passkey verification?"}),(0,h.jsx)(nR,{children:"This will disable any passkeys you have set up for verification. You’ll still be able to login with your passkeys if you’ve set up passkey login."}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{warn:!0,onClick:D,children:"Yes, remove"})}),(0,h.jsx)(nx,{})]});if(0===d.mfaEnrollmentFlow.mfaMethods.length&&!O)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:b},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(em.Z,{})})}),(0,h.jsx)(nP,{children:"Add more security"}),(0,h.jsxs)(nR,{children:[l?.name," does not have any verification methods enabled."]}),(0,h.jsx)(nL,{children:(0,h.jsx)(i2,{onClick:b,children:"Close"})}),(0,h.jsx)(nx,{})]});let Z=!O&&!g;return Z?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{onClose:b},"header"),(0,h.jsx)(nT,{children:(0,h.jsx)(nB,{children:(0,h.jsx)(em.Z,{})})}),(0,h.jsx)(nP,{children:"Transaction Protection"}),(0,h.jsx)(nR,{children:"Set up transaction protection to add an extra layer of security to your account"}),(0,h.jsxs)(nO,{children:[(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(ec.Z,{})}),"Enable 2-Step verification for your ",l?.name," wallet."]}),(0,h.jsxs)(nM,{children:[(0,h.jsx)(nI,{children:(0,h.jsx)(eh.Z,{})}),"You'll be prompted to authenticate to complete transactions."]})]}),(0,h.jsxs)(nL,{children:[(0,h.jsx)(i2,{onClick:()=>y(!0),children:"Continue"}),(0,h.jsx)(i7,{onClick:b,children:"Not now"})]}),(0,h.jsx)(nx,{})]}):"sms"===w?(0,h.jsx)(l2,{onComplete:b,onReset:M,onClose:b}):"totp"===w&&v?(0,h.jsx)(l4,{onComplete:b,onClose:b,onReset:M,totpInfo:v}):"passkey"===w?(0,h.jsx)(lZ,{onComplete:b,onReset:M,onClose:b}):(0,h.jsx)(lD,{showIntro:Z,userMfaMethods:e.mfaMethods,appMfaMethods:l.mfa.methods,userHasAuthSms:P,onBackToIntro:function(){y(!1)},handleSelectMethod:W,isTotpLoading:"totp"===w&&!v,isPasskeyLoading:k,error:A,onClose:b,setRemovingMfaMethod:i})},CAPTCHA_SCREEN:()=>{let{lastScreen:e,currentScreen:t,data:r,navigateBack:i,navigate:n,setModalData:a}=ig(),{status:s,token:l,waitForResult:c,reset:d,execute:p}=iW(),u=(0,o.useRef)([]),m=e=>{u.current=[e,...u.current]},[f,g]=(0,o.useState)(!0);(0,o.useEffect)(()=>(m(setTimeout(g,1e3,!1)),()=>{u.current.forEach(e=>clearTimeout(e)),u.current=[]}),[]);let[y,w]=(0,o.useState)(""),[x,v]=(0,o.useState)("Checking that you are a human..."),[C,b]=(0,o.useState)((0,h.jsx)(i2,{onClick:()=>{},disabled:!0,children:"Continue"})),[_,j]=(0,o.useState)(!1),[k,E]=(0,o.useState)(3),A=r?.captchaModalData,S=async t=>{try{await A?.callback(t),A?.onSuccessNavigateTo&&n(A?.onSuccessNavigateTo,!1)}catch(t){if(t instanceof iM)return;a({errorModalData:{error:t,previousScreen:e||"LANDING"}}),n(A?.onErrorNavigateTo||"ERROR_SCREEN",!1)}};(0,o.useEffect)(()=>{"success"===s?m(setTimeout(async()=>{let e=await c();!e||A?.userIntentRequired||S(e)},1e3)):"ready"===s&&m(setTimeout(()=>{"ready"===s&&p()},500))},[s]),(0,o.useEffect)(()=>{if(!f)switch(s){case"success":w("Success!"),v("CAPTCHA passed successfully."),b((0,h.jsx)(i2,{onClick:()=>{j(!0),S(l)},disabled:!A?.userIntentRequired,loading:_,children:A?.userIntentRequired?"Continue":"Continuing..."}));break;case"loading":w(""),v("Checking that you are a human..."),b((0,h.jsx)(i2,{onClick:()=>{},disabled:!0,children:"Continue"}));break;case"error":w("Something went wrong"),k<=0?(v("If you use an adblocker or VPN, try disabling and re-attempting."),b(null)):(v("You did not pass CAPTCHA. Please try again."),b((0,h.jsx)(i2,{onClick:T,children:"Retry"})))}},[s,f,_]);let T=async()=>{if(k<=0)return;E(e=>e-1),d(),p();let e=await c();!e||A?.userIntentRequired||S(e)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{backFn:e&&t!==e?i:void 0}),(0,h.jsxs)(ag,{children:["success"===s?(0,h.jsx)(N.Z,{fill:"var(--privy-color-success)",width:"64px",height:"64px"}):"error"===s?(0,h.jsx)(O.Z,{fill:"var(--privy-color-error)",width:"64px",height:"64px"}):(0,h.jsx)(am,{}),(0,h.jsxs)(n5,{children:[y?(0,h.jsx)("h3",{children:y}):null,(0,h.jsx)("p",{children:x})]}),C]}),(0,h.jsx)(nx,{})]})},ERROR_SCREEN:()=>{let{navigate:e,navigateBack:t,data:r,lastScreen:i,currentScreen:n}=ig();return(0,h.jsx)(oX,{error:r?.errorModalData?.error||Error(),backFn:i&&n!==i?t:void 0,onClick:()=>e(i||"LANDING",!1)})},IN_APP_BROWSER_LOGIN_NOT_POSSIBLE:()=>{let{closePrivyModal:e}=iD();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{},"header"),(0,h.jsx)(sU,{children:(0,h.jsx)(A.Z,{style:{width:32,height:32}})}),(0,h.jsx)(ar,{title:"Could not log in with provider",description:"It looks like you're using an in-app browser.  To log in, please try again using an external browser.",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}),(0,h.jsx)(nX,{children:(0,h.jsx)(i2,{onClick:()=>e(),children:"Close"})}),(0,h.jsx)(n8,{}),(0,h.jsx)(nw,{protectedByPrivy:!0})]})},AFFIRMATIVE_CONSENT_SCREEN:()=>{let{user:e,logout:t}=iz(),{app:r,onUserCloseViaDialogOrKeybindRef:i,setModalData:n,navigate:a}=ig(),{acceptTerms:o,closePrivyModal:s,createAnalyticsEvent:l}=iD(),c=e=>{e?.preventDefault(),s({shouldCallAuthOnSuccess:!1}),t()};i.current=c;let d=async i=>{i.preventDefault(),await o(),e&&rs(e,r?.embeddedWallets?.createOnLogin)?(n({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),l({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,screen:"AffirmativeConsentScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),a("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")):s()};return(0,h.jsx)(nq,{termsAndConditionsUrl:r?.legal.termsAndConditionsUrl,privacyPolicyUrl:r?.legal.privacyPolicyUrl,onAccept:d,onDecline:c})},TELEGRAM_AUTH_SCREEN:()=>{let{authenticated:e,logout:t,ready:r,user:i}=iz(),{app:n,setModalData:a,navigate:s,resetNavigation:l}=ig(),{initLoginWithTelegram:c,loginWithTelegram:d,updateWallets:p,setReadyToTrue:u,closePrivyModal:m,createAnalyticsEvent:f}=iD(),[g,y]=(0,o.useState)(!1),[w,x]=(0,o.useState)(void 0);async function v(){try{await d(),y(!0),u(!0)}catch(r){if(r?.privyErrorCode==="allowlist_rejected"){x(void 0),l(),s("ALLOWLIST_REJECTION_SCREEN");return}if(r?.privyErrorCode==="max_accounts_reached"){console.error(new eG(r).toString()),x(void 0),l(),s("USER_LIMIT_REACHED_SCREEN");return}if(r?.privyErrorCode==="user_does_not_exist"){x(void 0),l(),s("ACCOUNT_NOT_FOUND_SCREEN");return}let{retryable:e,detail:t}=t9(r);x({retryable:e,detail:t,message:"Authentication failed"})}}(0,o.useEffect)(()=>{v()},[]),(0,o.useEffect)(()=>{if(!(r&&e&&g&&i))return;if(n?.legal.requireUsersAcceptTerms&&!i.hasAcceptedTerms){let e=setTimeout(()=>{s("AFFIRMATIVE_CONSENT_SCREEN")},1400);return()=>clearTimeout(e)}if(rs(i,n?.embeddedWallets?.createOnLogin)){let e=setTimeout(()=>{a({createWallet:{onSuccess:()=>{},onFailure:e=>{console.error(e),f({eventName:"embedded_wallet_creation_failure_logout",payload:{error:e,provider:"telegram",screen:"TelegramAuthScreen"}}),t()},callAuthOnSuccessOnClose:!0}}),s("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")},1400);return()=>clearTimeout(e)}p();let o=setTimeout(()=>m({shouldCallAuthOnSuccess:!0,isSuccess:!0}),1400);return()=>clearTimeout(o)},[r,e,g,i]);let C=g?"Successfully connected with Telegram":w?w.message:"Verifying connection to Telegram",b="";return b=g?"You’re good to go!":w?w.detail:"Just a few moments more",(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),(0,h.jsx)(n7,{}),(0,h.jsxs)(hh,{children:[(0,h.jsx)(nu,{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(iY,{success:g,fail:!!w}),(0,h.jsx)(ln,{style:{width:"38px",height:"38px"}})]})}),(0,h.jsxs)(n5,{children:[(0,h.jsx)("h3",{children:C}),(0,h.jsx)("p",{children:b})]}),w&&w?.retryable?(0,h.jsx)(i9,{onClick:()=>{c().then(async()=>v()).catch(e=>{let{retryable:t,detail:r}=t9(e);x({retryable:t,detail:r,message:"Authentication failed"})}),x(void 0)},disabled:!g&&!w?.retryable,children:"Retry"}):null]}),(0,h.jsx)(n8,{}),(0,h.jsx)(nx,{})]})}},hT=["LANDING","AWAITING_CONNECTION"],hP=({isMfaVerifying:e,onMfaVerificationComplete:t})=>{let{ready:r,isModalOpen:i}=iz(),{headless:n}=ic(),{ready:a,currentScreen:s}=ig(),{status:l,execute:c,reset:d,enabled:p}=iW(),u=i&&s&&hT.includes(s)&&!n&&"ready"===l;if((0,o.useEffect)(()=>{u&&c()},[u]),(0,o.useEffect)(()=>{!i&&p&&d()},[i,p]),(!r||!a)&&"AWAITING_OAUTH_SCREEN"!==s&&"CROSS_APP_AUTH_SCREEN"!==s&&"TELEGRAM_AUTH_SCREEN"!==s)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(no,{}),(0,h.jsx)(n7,{}),(0,h.jsx)(hA,{children:(0,h.jsx)(iQ,{})}),(0,h.jsx)(n8,{}),(0,h.jsx)(nx,{})]});if(!s&&e)return(0,h.jsx)(df,{open:e,onClose:t});if(!s)return null;let m=hS[s];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(nS,{if:!!e,children:(0,h.jsx)(m,{})}),(0,h.jsx)(nS,{if:!e,children:(0,h.jsx)(df,{open:e,onClose:t})})]})},hR=({isMfaVerifying:e,onMfaVerificationComplete:t})=>{let r=(0,o.useRef)(null),i=iH(r);return(0,h.jsx)(hM,{style:{height:i},id:"privy-modal-content",children:(0,h.jsx)("div",{ref:r,children:(0,h.jsx)(hP,{isMfaVerifying:e,onMfaVerificationComplete:t})})})},hN=()=>{let{closePrivyModal:e}=iD(),{onUserCloseViaDialogOrKeybindRef:t}=ig();return{gracefulClosePrivyModal:(0,o.useCallback)(()=>{if(!t?.current)return e({shouldCallAuthOnSuccess:!1});t.current()},[e])}},hO=({open:e})=>{let{app:t}=ig(),{gracefulClosePrivyModal:r}=hN(),[i,n]=(0,o.useState)(!1);iq("configureMfa",{onMfaRequired:()=>{t?.mfa.noPromptOnMfaRequired||n(!0)}});let a=e||i;return t.render.standalone?(0,h.jsx)(hC,{children:(0,h.jsx)(hI,{children:(0,h.jsx)(hP,{isMfaVerifying:i,onMfaVerificationComplete:()=>n(!1)})})}):(0,h.jsx)(hb,{open:a,id:"privy-dialog","aria-label":"log in or sign up","aria-labelledby":"privy-dialog-title",onClick:()=>r(),children:(0,h.jsx)(hC,{children:(0,h.jsx)(hR,{isMfaVerifying:i,onMfaVerificationComplete:()=>n(!1)})})})},hI=_.ZP.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  background: var(--privy-color-background);
  padding: 0 16px;
`,hM=(0,_.ZP)(hI)`
  transition: height 150ms ease-out;
  overflow: hidden;

  // Ensure the modal gets pinned to the top if it ever gets too tall
  max-height: calc(100svh - 48px);

  border-radius: var(--privy-border-radius-lg) var(--privy-border-radius-lg) 0 0;
  box-shadow: 0px 0px 36px rgba(55, 65, 81, 0.15);

  @media (min-width: 441px) {
    box-shadow: 0px 8px 36px rgba(55, 65, 81, 0.15);
    border-radius: var(--privy-border-radius-lg);
  }
`;function hL(e){let t=(0,o.useRef)(null),r=(0,o.useRef)();return(0,o.useEffect)(()=>{r.current?.remove(),r.current=function({botUsername:e,scriptHost:t}){let r=document.createElement("script"),{origin:i}=new URL(t);return r.async=!0,r.src=`${i}/js/telegram-login.js`,r.setAttribute("data-telegram-login",e),r.setAttribute("data-request-access","write"),r.setAttribute("data-lang","en"),r}(e),t.current?.after(r.current)},[e]),(0,h.jsx)("div",{ref:t,hidden:!0})}async function hW(e,t,r,i,n,a=!1){let o=a,s=async s=>{if(o&&t&&t.length>0){s===(a?0:1)?n("configureMfa","onMfaRequired",t):i.current?.reject(new aq("missing_or_invalid_mfa","MFA verification failed, retry."));let o=await new Promise((e,t)=>{r.current={resolve:e,reject:t},setTimeout(()=>{let e=new aq("mfa_timeout","Timed out waiting for MFA code");i.current?.reject(e),t(e)},3e5)});return await e(o)}return await e()},l=null;for(let e=0;e<4;e++)try{l=await s(e),i.current?.resolve(void 0);break}catch(e){if("missing_or_invalid_mfa"===e.type)o=!0;else throw i.current?.resolve(void 0),e}if(null===l){let e=new aq("mfa_verification_max_attempts_reached","Max MFA verification attempts reached");throw i.current?.reject(e),e}return l}var hF=(h4=0,()=>`id-${h4++}`);function hU(e){return void 0!==e.error}var hD=new class{constructor(){this.callbacks={}}enqueue(e,t){this.callbacks[e]=t}dequeue(e,t){let r=this.callbacks[t];if(!r)throw Error(`cannot dequeue ${e} event: no event found for id ${t}`);switch(delete this.callbacks[t],e){case"privy:iframe:ready":case"privy:wallet:create":case"privy:wallet:import":case"privy:wallet:connect":case"privy:wallet:recover":case"privy:wallet:rpc":case"privy:wallet:set-recovery":case"privy:mfa:verify":case"privy:mfa:init-enrollment":case"privy:mfa:submit-enrollment":case"privy:mfa:unenroll":case"privy:mfa:clear":case"privy:farcaster:init-signer":case"privy:farcaster:sign":case"privy:solana-wallet:create":case"privy:solana-wallet:connect":case"privy:solana-wallet:recover":case"privy:solana-wallet:rpc":return r;default:throw Error(`invalid wallet event type ${e}`)}}},hZ=new Map,hz=(e,t)=>"bigint"==typeof t?t.toString():t,hH=(e,t)=>`${e}${JSON.stringify(t,hz)}`;function h$(e,t,r,i){let n=r.contentWindow;if(!n)throw Error("iframe not initialized");let a=hH(e,t);if("privy:wallet:create"===e){let e=hZ.get(a);if(e)return e}let o=new Promise((r,a)=>{let o=hF();hD.enqueue(o,{resolve:r,reject:a}),n.postMessage({id:o,event:e,data:t},i)}).finally(()=>{hZ.delete(a)});return hZ.set(a,o),o}function hB(e){let t=(0,o.useRef)(null),r=(0,o.useRef)(e.mfaMethods),i=iK(),[n,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{r.current=e.mfaMethods},[e.mfaMethods]),(0,o.useEffect)(()=>{if(!n)return;let a=t.current;if(!a)return;function o(t){var r;t&&t.origin===e.origin&&"string"==typeof(r=t.data).event&&/^privy:.+/.test(r.event)&&function(e){switch(e.event){case"privy:iframe:ready":let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data);case"privy:wallet:create":let r=hD.dequeue(e.event,e.id);return hU(e)?r.reject(new aq(e.error.type,e.error.message)):r.resolve(e.data);case"privy:wallet:import":let i=hD.dequeue(e.event,e.id);return hU(e)?i.reject(new aq(e.error.type,e.error.message)):i.resolve(e.data);case"privy:wallet:connect":let n=hD.dequeue(e.event,e.id);return hU(e)?n.reject(new aq(e.error.type,e.error.message)):n.resolve(e.data);case"privy:wallet:recover":let a=hD.dequeue(e.event,e.id);return hU(e)?a.reject(new aq(e.error.type,e.error.message)):a.resolve(e.data);case"privy:wallet:rpc":let o=hD.dequeue(e.event,e.id);return hU(e)?o.reject(new aq(e.error.type,e.error.message)):o.resolve(e.data);case"privy:wallet:set-recovery":let s=hD.dequeue(e.event,e.id);return hU(e)?s.reject(new aq(e.error.type,e.error.message)):s.resolve(e.data);case"privy:mfa:verify":let l=hD.dequeue(e.event,e.id);return hU(e)?l.reject(new aq(e.error.type,e.error.message)):l.resolve(e.data);case"privy:mfa:init-enrollment":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:mfa:submit-enrollment":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:mfa:unenroll":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:mfa:clear":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:farcaster:init-signer":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:farcaster:sign":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}case"privy:solana-wallet:create":let c=hD.dequeue(e.event,e.id);return hU(e)?c.reject(new aq(e.error.type,e.error.message)):c.resolve(e.data);case"privy:solana-wallet:connect":let d=hD.dequeue(e.event,e.id);return hU(e)?d.reject(new aq(e.error.type,e.error.message)):d.resolve(e.data);case"privy:solana-wallet:recover":let h=hD.dequeue(e.event,e.id);return hU(e)?h.reject(new aq(e.error.type,e.error.message)):h.resolve(e.data);case"privy:solana-wallet:rpc":{let t=hD.dequeue(e.event,e.id);return hU(e)?t.reject(new aq(e.error.type,e.error.message)):t.resolve(e.data)}default:console.warn("Unsupported wallet proxy method:",e)}}(t.data)}let s={create:t=>h$("privy:wallet:create",t,a,e.origin),import:t=>h$("privy:wallet:import",t,a,e.origin),connect:t=>h$("privy:wallet:connect",t,a,e.origin),recover:t=>hW(r=>h$("privy:wallet:recover",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i,!t.recoveryMethod||"privy"===t.recoveryMethod),rpc:t=>hW(r=>h$("privy:wallet:rpc",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i),createSolana:t=>h$("privy:solana-wallet:create",t,a,e.origin),connectSolana:t=>h$("privy:solana-wallet:connect",t,a,e.origin),recoverSolana:t=>h$("privy:solana-wallet:recover",t,a,e.origin),rpcSolana:t=>h$("privy:solana-wallet:rpc",t,a,e.origin),setRecovery:t=>hW(r=>h$("privy:wallet:set-recovery",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i),verifyMfa:t=>hW(r=>h$("privy:mfa:verify",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i,!0),initEnrollMfa:t=>hW(r=>h$("privy:mfa:init-enrollment",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i),submitEnrollMfa:t=>hW(r=>h$("privy:mfa:submit-enrollment",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i),unenrollMfa:t=>hW(r=>h$("privy:mfa:unenroll",{...t,...r},a,e.origin),r.current,e.mfaPromise,e.mfaSubmitPromise,i,!0),clearMfa:t=>h$("privy:mfa:clear",t,a,e.origin),initFarcasterSigner:t=>h$("privy:farcaster:init-signer",t,a,e.origin),signFarcasterMessage:t=>h$("privy:farcaster:sign",t,a,e.origin)};window.addEventListener("message",o);let l=new AbortController;return ts(()=>h$("privy:iframe:ready",{},a,e.origin),{abortSignal:l.signal}).then(()=>e.onLoad(s),(...t)=>{console.warn("Privy iframe failed to load: ",...t),e.onLoadFailed()}),()=>{window.removeEventListener("message",o),l.abort()}},[n]),(0,h.jsx)("iframe",{ref:t,width:"0",height:"0",style:{display:"none",height:"0px",width:"0px"},onLoad:()=>a(!0),src:tl(e.origin,`/apps/${e.appId}/embedded-wallets`,{caid:e.clientAnalyticsId,client_id:e.appClientId})})}var hV=class{constructor(e,t){this.walletProxy=e,this.address=t}async handleSignMessage(e,t){if(!e.params||"string"!=typeof e.params.message)throw Error("Message must be provided as a string for Solana signMessage RPC");return(await this.walletProxy.rpcSolana({accessToken:t,publicKey:this.address,request:e})).response.data}async request(e){console.debug("EmbeddedSolanaProvider.request() called with args",e);let t=await h3();if(!t)throw Error("User must be authenticated to use embedded Solana wallet");if(!await pa())throw new eD("Unable to connect to Solana embedded wallet");if("signMessage"===e.method)return await this.handleSignMessage(e,t);throw Error("Embedded Solana provider does not yet support this RPC method.")}};async function hq({api:e,requesterAppId:t,providerAppId:r}){let i=(await e.get(`/api/v1/apps/${t}/cross-app/connections`)).connections.find(e=>e.provider_app_id===r);if(!i)throw new eD("Invalid connected app");return{name:i.provider_app_name,logoUrl:i.provider_app_icon_url,apiUrl:i.provider_app_custom_api_url}}async function hG({api:e,appId:t}){let r=tH(),i=tH(),n=await t$(r);try{let{url:a}=await e.post(eJ,{provider:`privy:${t}`,redirect_to:window.location.href,code_challenge:n,state_code:i});return{url:a,stateCode:i,codeVerifier:r}}catch(e){throw eH(e)}}async function hK({api:e,appId:t,stateCode:r,codeVerifier:i,authorizationCode:n}){if(!n||!r)throw new eD("[Cross-App AuthFlow] Authorization and state codes code must be set prior to calling authenicate.");if("undefined"===n)throw new eD("User denied confirmation during cross-app auth flow");try{return(await e.post(eX,{authorization_code:n,state_code:r,code_verifier:i,provider:`privy:${t}`})).oauth_provider_tokens.access_token}catch(t){let e=eH(t);throw e.privyErrorCode?new eD(e.message||"Invalid code during cross-app auth flow.",void 0,e.privyErrorCode):"User denied confirmation during cross-app auth flow"===e.message?new eD("Invalid code during cross-app auth flow.",void 0,"oauth_user_denied"):new eD("Invalid code during cross-app auth flow.",void 0,"unknown_auth_error")}}async function hY({url:e,popup:t}){return t.location=e,new Promise((e,r)=>{let i=setTimeout(()=>{r(new eD("Authorization request timed out after 2 minutes.")),n()},12e4);function n(){t?.close(),window.removeEventListener("message",o)}let a=setInterval(()=>{t?.closed&&(n(),clearInterval(a),clearTimeout(i),r(new eD("User rejected request")))},300);function o(t){t.data&&("PRIVY_OAUTH_RESPONSE"===t.data.type&&t.data.stateCode&&t.data.authorizationCode&&(clearTimeout(i),e(t.data),n()),"PRIVY_OAUTH_ERROR"===t.data.type&&(clearTimeout(i),r(new eD(t.data.error)),n()))}window.addEventListener("message",o)})}var hQ=async({user:e,address:t,client:r,request:i,requesterAppId:n,reconnect:a})=>{let o=e?.linkedAccounts.find(e=>!!("cross_app"===e.type&&e.embeddedWallets.find(e=>e.address===t)));if(!e||!o)throw new eD("Cannot request a signature with for this wallet address");let s=r.getProviderAccessToken(o.providerApp.id);if(s||await a({appId:o.providerApp.id})&&(s=r.getProviderAccessToken(o.providerApp.id)),!s)throw new eD("Transactions require a valid token");let l=window.open(void 0,void 0,hX({w:400,h:680}));if(!l)throw new eD("Failed to initialize signature request");return hq({api:r.api,requesterAppId:n,providerAppId:o.providerApp.id}).then(({apiUrl:e})=>{let t=new URL(`${e}/oauth/transact`);t.searchParams.set("token",s||""),t.searchParams.set("request",hJ(i)),l.location=t.href}),new Promise((e,t)=>{let r=()=>{l.close(),window.removeEventListener("message",a)},i=setTimeout(()=>{r(),t(new eD("Request timeout"))},12e4),n=setInterval(()=>{l.closed&&(r(),clearInterval(n),clearTimeout(i),t(new eD("User rejected request")))},300),a=n=>{n.data&&("PRIVY_CROSS_APP_ACTION_RESPONSE"===n.data.type&&n.data.result&&(r(),clearTimeout(i),e(n.data.result)),"PRIVY_CROSS_APP_ACTION_ERROR"===n.data.type&&n.data.error&&(r(),clearTimeout(i),t(n.data.error)))};window.addEventListener("message",a)})},hJ=e=>JSON.stringify({content:{request:{request:e}},timestamp:Date.now(),callbackUrl:window.origin}),hX=({w:e,h:t})=>{let r=void 0!==window.screenLeft?window.screenLeft:window.screenX,i=void 0!==window.screenTop?window.screenTop:window.screenY,n=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,o=n/window.screen.availWidth,s=a/window.screen.availHeight;return`toolbar=0,location=0,menubar=0,height=${t},width=${e},popup=1,left=${(n-e)/2/o+r},top=${(a-t)/2/s+i}`};function h0(e){let t=e.toLowerCase();return!!window?.webkit?.messageHandlers?.ReactNativeWebView||!!window?.ReactNativeWebView||["fbav","fban","instagram","snapchat","linkedinapp"].some(e=>t.includes(e))}async function h1({url:e,popup:t,provider:r}){return t.location=e,new Promise((e,r)=>{function i(){t?.close(),window.removeEventListener("message",n)}function n(t){t.data&&("PRIVY_OAUTH_RESPONSE"===t.data.type&&t.data.stateCode&&t.data.authorizationCode&&(e(t.data),i()),"https://cdn.apple-cloudkit.com"===t.origin&&t.data.ckSession&&(e({type:"PRIVY_OAUTH_RESPONSE",ckWebAuthToken:t.data.ckSession}),i()),"PRIVY_OAUTH_ERROR"===t.data.type&&(r(t.data.error),i()))}window.addEventListener("message",n)})}var h2=e=>({id:e.id,raw_id:e.rawId,response:{client_data_json:e.response.clientDataJSON,authenticator_data:e.response.authenticatorData,signature:e.response.signature,user_handle:e.response.userHandle},authenticator_attachment:e.authenticatorAttachment,client_extension_results:{app_id:e.clientExtensionResults.appid,cred_props:e.clientExtensionResults.credProps,hmac_create_secret:e.clientExtensionResults.hmacCreateSecret},type:e.type});function h3(){return h5?h5.getAccessToken():Promise.resolve(e7.get(tA)||null)}var h4,h5,h6,h7,h8,h9,pe,pt=(e,t,r)=>h6(e,t,r),pr=(e,t)=>h7(e,t),pi=(e,t)=>h8(e,t),pn=()=>h9(),pa=()=>pe(),po=()=>{let e=new URLSearchParams(window.location.search).get("privy_token");if(!e)return;e7.put(tR,e);let t=new URL(window.location.href);t.searchParams.delete("privy_token"),window.history.pushState({},"",t)},ps=({config:e,...t})=>{var r;if(!("string"==typeof(r=t.appId)&&25===r.length))throw new eD("Cannot initialize the Privy provider with an invalid Privy app ID");h5||(h5=new iO({appId:t.appId,appClientId:t.clientId,apiUrl:t.apiUrl||tE}));let i=Object.assign({},e);return void 0!==t.createPrivyWalletOnLogin&&i.embeddedWallets?.createOnLogin===void 0&&(i.embeddedWallets||(i.embeddedWallets={}),i.embeddedWallets.createOnLogin=t.createPrivyWalletOnLogin?"users-without-wallets":"off"),void 0!==t.createPrivyWalletOnLogin&&e?.embeddedWallets?.createOnLogin&&console.warn("Both `createPrivyWalletOnLogin` and `config.embeddedWallets.createOnLogin` are set. `createPrivyWalletOnLogin` is deprecated and should be removed."),(0,h.jsx)(il,{client:h5,clientConfig:i,legacyCreateEmbeddedWalletFlag:t.createPrivyWalletOnLogin,children:(0,h.jsx)(pl,{...t,client:h5})})},pl=e=>{let t=e.client,[l,c]=(0,o.useState)(!1),[d,p]=(0,o.useState)(!1),[u,m]=(0,o.useState)(!1),[f,g]=(0,o.useState)(null),[y,w]=(0,o.useState)([]),[x,v]=(0,o.useState)(null),C=(0,o.useRef)(y),[b,_]=(0,o.useState)(!1),[j,k]=(0,o.useState)(null),[E,A]=(0,o.useState)(!1),[S,T]=(0,o.useState)({status:"disconnected",connectedWallet:null,connectError:null,connector:null,connectRetry:ih}),[P,R]=(0,o.useState)({status:"initial"}),[N,O]=(0,o.useState)(null),[I,M]=(0,o.useState)(null),[L,W]=(0,o.useState)(null),F=ic(),U=id(),[D,Z]=(0,o.useState)(!0),[z,H]=(0,o.useState)({}),[$,B]=(0,o.useState)(null),[V,q]=(0,o.useState)(null),[G,K]=(0,o.useState)(!1),[Y,Q]=(0,o.useState)(!1),J=(0,o.useRef)(null),X=(0,o.useRef)(null),ee=(0,o.useRef)(i$),[et,er]=(0,o.useState)(!1);t.onStoreToken=e=>{e&&iG(ee,"accessToken","onAccessTokenGranted",e)},t.onDeleteToken=()=>{g(null),m(!1),iG(ee,"accessToken","onAccessTokenRemoved")};let ei=(0,o.useRef)(null),en=(0,o.useRef)(null),ea=e=>{k(e),setTimeout(()=>{c(!0)},15),t.createAnalyticsEvent({eventName:"modal_open",payload:{initialScreen:e}})},eo=e=>{"off"!==F.embeddedWallets.createOnLogin&&Z(!0),ea(e)};(0,o.useEffect)(()=>{let e=rn(f);e&&L&&v({address:e.address,connectedAt:Date.now(),walletClientType:"privy",connectorType:"embedded",meta:{name:"Privy Wallet",icon:rR,id:"io.privy.solana.wallet"},getProvider:async()=>new hV(L,e.address)})},[L,f]),(0,o.useEffect)(()=>{if(!f){t.connectors?.removeEmbeddedWalletConnector();return}let r=ri(f),i=ra(f);if(r||t.connectors?.removeEmbeddedWalletConnector(),i||t.connectors?.removeImportedWalletConnector(),!t.connectors){console.debug("Failed to add embedded wallet connector: Client connectors not initialized");return}if(!L){console.debug("Failed to add embedded wallet connector: Wallet proxy not initialized");return}r&&t.connectors.addEmbeddedWalletConnector(L,r.address,F.defaultChain,e.appId),i&&t.connectors.addImportedWalletConnector(L,i.address,F.defaultChain,e.appId)},[L,f]),(0,o.useEffect)(()=>{L&&V?.(L)},[L]),(0,o.useEffect)(()=>{(async()=>{if(!F.customAuth?.enabled)return;Z(!0);let{getCustomAccessToken:e,isLoading:r}=F.customAuth;if(!(!d||r))try{let r=await e();if(!r&&u){await eA.logout();return}if(!r||u)return;t.startAuthFlow(new e1(r));let{user:i,isNewUser:n}=await t.authenticate();if(!i){await eA.logout();return}g(i||null),_(n||!1),m(!0),Q(!0)}catch(e){console.warn(e),u&&await eA.logout()}})()},[F.customAuth?.enabled,F.customAuth?.getCustomAccessToken,F.customAuth?.isLoading,d,u]),(0,o.useEffect)(()=>{Y&&L&&f&&rs(f,F.embeddedWallets.createOnLogin)&&(Q(!1),ex(f,3e4).catch(console.error))},[Y&&L&&f]),(0,o.useEffect)(()=>{async function e(){let e,r=es(),i=el();po();let n=(0,a.M)();O(n),t.initializeConnectorManager({walletConnectCloudProjectId:F.walletConnectCloudProjectId,rpcConfig:F.rpcConfig,chains:F.chains,defaultChain:F.defaultChain,store:n,walletList:F.appearance.walletList,shouldEnforceDefaultChainOnConnect:F.shouldEnforceDefaultChainOnConnect,externalWalletConfig:F.externalWallets,appName:F.name??"Privy"}),t.connectors?.on("connectorInitialized",()=>{e&&clearTimeout(e);let r=t.connectors.walletConnectors.length,i=t.connectors.walletConnectors.reduce((e,t)=>e+(t.initialized?1:0),0);i===r?er(!0):e=setTimeout(()=>{console.debug({message:"Unable to initialize all expected connectors before timeout",initialized:i,expected:r}),er(!0)},1500)}),t.connectors?.initialize().then(()=>{ep()});let o=await t.getAuthenticatedUser(),s=!!o;if(F.customAuth?.enabled||(m(!!o),o&&iG(ee,"login","onComplete",o,!1,!0,null,null),g(o)),r){en.current=s?"link":"login";return}if(i&&!s){en.current="login",eo("TELEGRAM_AUTH_SCREEN");return}eS.setReadyToTrue(!!o)}!d&&U&&e()},[t,$,d,U]),(0,o.useEffect)(()=>{if(d){if(!f||!f.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType)){K(!0);return}K(!!y.find(e=>"privy"===e.walletClientType))}},[d,f,y]);let es=()=>{let e=function(){let e=new URLSearchParams(window.location.search),t=e.get("privy_oauth_code"),r=e.get("privy_oauth_state"),i=e.get("privy_oauth_provider");if(!t||!r||!i)return{inProgress:!1};let n=!1;try{n=!!window.opener.location.origin}catch{}return{inProgress:!0,authorizationCode:t,stateCode:r,provider:i,headless:tB(),popupFlow:null!==window.opener&&n}}();if(e.inProgress&&e.popupFlow){if(window.opener.location.origin!==window.location.origin){window.opener.postMessage({type:"PRIVY_OAUTH_ERROR",error:"Origins between parent and child windows do not match."});return}if("error"===e.authorizationCode){window.opener.postMessage({type:"PRIVY_OAUTH_ERROR",error:"There was an issue completing the OAuth flow"});return}window.opener.postMessage({type:"PRIVY_OAUTH_RESPONSE",stateCode:e.stateCode,authorizationCode:e.authorizationCode});return}return!!e.inProgress&&!e.headless&&(t.startAuthFlow(new tV(e)),eo("AWAITING_OAUTH_SCREEN"),!0)},el=()=>{let e;let r=(e=function(){let e=new URLSearchParams(window.location.search),t=Number(e.get("id")||""),r=e.get("hash"),i=Number(e.get("auth_date")||""),n=e.get("first_name"),a=e.get("last_name")||void 0,o=e.get("username")||void 0,s=e.get("photo_url")||void 0;if(!(!t||!n||!i||!r))return{id:t,first_name:n,last_name:a,username:o,photo_url:s,auth_date:i,hash:r}}())?(re(),{...e,flowType:"login-url"}):(e=function(){let e=window.location.hash;if(!e||!e.startsWith("#tgWebAppData"))return;let t=new URLSearchParams(decodeURIComponent(e.replace("#tgWebAppData=",""))),r=t.get("query_id"),i=t.get("user"),n=Number(t.get("auth_date")||""),a=t.get("hash");if(!(!r||!i||!n||!a))return{query_id:r,user:i,auth_date:n,hash:a}}())?(re(),{...e,flowType:"web-app"}):void re();if(!r||!F.loginMethods.telegram||!F.loginConfig.telegramAuthConfiguration?.seamlessAuthEnabled)return;let i=new t8;return t.startAuthFlow(i),"login-url"===r.flowType&&(i.meta.telegramWebAppData=void 0,i.meta.telegramAuthResult={id:r.id,first_name:r.first_name,last_name:r.last_name,auth_date:r.auth_date,username:r.username,photo_url:r.photo_url,hash:r.hash}),"web-app"===r.flowType&&(i.meta.telegramAuthResult=void 0,i.meta.telegramWebAppData={query_id:r.query_id,user:r.user,auth_date:r.auth_date,hash:r.hash}),!0},ec=async(e,r,i,n)=>{ed(await t.connectors?.createWalletConnector(e,r)||null,r,i,n)};async function ed(e,t,r,i){if(!e)return T({status:"disconnected",connectedWallet:null,connectError:new ez("Unable to connect to wallet."),connector:null,connectRetry:ih}),i?.(null,r);T({status:"disconnected",connectedWallet:null,connectError:null,connector:e,connectRetry:ih}),e instanceof iw&&t&&await e.resetConnection(t),T({connector:e,status:"connecting",connectedWallet:null,connectError:null,connectRetry:()=>ed(e,t,r,i)});try{let t=await e.connect({showPrompt:!0});if(F.shouldEnforceDefaultChainOnConnect&&!F.chains.find(e=>e.id===Number(t?.chainId))&&!(t?.connectorType==="wallet_connect_v2"&&t?.walletClientType==="metamask")&&!(t?.connectorType==="coinbase_wallet"&&"eoaOnly"!==F.externalWallets.coinbaseWallet.connectionOptions)){T(t=>({...t,connector:e,status:"switching_to_supported_chain",connectedWallet:null,connectError:null,connectRetry:ih}));try{await t?.switchChain(F.defaultChain.id),t&&(t.chainId=tp(td(F.defaultChain.id)))}catch{console.warn(`Unable to switch to default chain: ${F.defaultChain.id}`)}}return T(e=>({...e,status:"connected",connectedWallet:t,connectError:null,connectRetry:ih})),t&&iG(ee,"connectWallet","onSuccess",t),i?.(t,r)}catch(e){return e instanceof eF?(console.warn(e.cause?e.cause:e.message),iG(ee,"connectWallet","onError",e.privyErrorCode||"generic_connect_wallet_error")):(console.warn(e),iG(ee,"connectWallet","onError","unknown_connect_wallet_error")),T(t=>({...t,status:"disconnected",connectedWallet:null,connectError:e})),i?.(null,r)}}let eh=async(e,r)=>{if(null===e)return;let i=new t6(e,r);t.startAuthFlow(i)},ep=()=>{let e=new URLSearchParams(window.location.search),r=e.get("privy_connector"),i=e.get("privy_wallet_client");if(!r||!i)return;if("phantom"!==i||te()||eo("LOGIN_FAILED_SCREEN"),!t.connectors)throw new eD("Connector not initialized");ea("AWAITING_CONNECTION");let n=new URL(window.location.href);n.searchParams.delete("privy_connector"),n.searchParams.delete("privy_wallet_client"),window.history.pushState({},"",n),ec(r,i,void 0,eh)};(0,o.useEffect)(()=>{d&&u&&null===f&&t.getAuthenticatedUser().then(g)},[d,u,f,t]);let eu=()=>{if(!u)throw iG(ee,"linkAccount","onError","must_be_authenticated"),new eD("User must be authenticated before linking an account.")},em=()=>{eu(),ei.current="siwe",en.current="link",ea("LINK_WALLET_SCREEN")},ef=e=>{if(!u||!f)return!1;if("privy"===e.walletClientType)return!0;for(let t of f.linkedAccounts)if("wallet"===t.type&&t.address===e.address&&"privy"!==t.walletClientType)return!0;return!1},eg=async e=>{if(!t.connectors)throw new eD("Connector not initialized");let r=t.connectors.findWalletConnector(e.connectorType,e.walletClientType)||null;(T(t=>({...t,connector:r,status:"connected",connectedWallet:e,connectError:null,connectRetry:ih})),F.captchaEnabled&&!u)?(H({captchaModalData:{callback:t=>eh(e,t),userIntentRequired:!1,onSuccessNavigateTo:"AWAITING_CONNECTION",onErrorNavigateTo:"ERROR_SCREEN"}}),eo("CAPTCHA_SCREEN")):(await eh(e),eo("AWAITING_CONNECTION"))},ey=async(e,r)=>{if(!F.fiatOnRamp.enabled)throw new eD("Fiat on-ramp is not enabled");if(r&&r.provider&&"moonpay"!==r.provider)throw new eD("Unsupported fund provider. Currently supported option is `moonpay`.");{let{signedUrl:i,externalTransactionId:n}=await sP(t,e,r?.config??{},F.appearance.palette,F.fiatOnRamp.useSandbox);return{signedUrl:i,externalTransactionId:n}}},ew=()=>{w(e=>{let r=t.connectors?.wallets.map(e=>({...e,linked:ef(e),loginOrLink:async()=>{if(!await e.isConnected())throw new eD("Wallet is not connected");if("embedded"===e.connectorType&&"privy"===e.walletClientType)throw new eD("Cannot link or login with embedded wallet");eg(e)},fund:async t=>{let{signedUrl:r,externalTransactionId:i}=await ey(e.address,t);H({fiatOnRampPrompt:{signedUrl:r},fiatOnRampStatus:{externalTransactionId:i}}),ea("FIAT_ON_RAMP_PROMPT_SCREEN")},unlink:async()=>{if(!u)throw new eD("User is not authenticated.");if("embedded"===e.connectorType&&"privy"===e.walletClientType)throw new eD("Cannot unlink an embedded wallet");g(await t.unlinkWallet(e.address))}}))||[];return ib(e,r)?e:r})};(0,o.useEffect)(()=>{ew()},[f?.linkedAccounts,u,d]),(0,o.useEffect)(()=>{if(d){if(!t.connectors)throw new eD("Connector not initialized");ew(),t.connectors.on("walletsUpdated",ew)}},[d]),(0,o.useEffect)(()=>{if(!y[0])return;let e=y[0],t=C.current.find(t=>t.address===e.address),r;if(r="privy"===e.walletClientType?f?.linkedAccounts.find(t=>"wallet"===t.type&&t.address===e.address&&"privy"===t.walletClientType):f?.linkedAccounts.find(t=>"wallet"===t.type&&t.address===e.address&&"privy"!==t.walletClientType),!t&&r){let e=Object.assign({},f);e.wallet=r&&{address:r.address,chainType:r.chainType,chainId:r.chainId,walletClient:r.walletClient,walletClientType:r.walletClientType,connectorType:r.connectorType,imported:r.imported},g(e)}C.current=y},[y]);let ex=async(e,t)=>{if(ri(e))throw iG(ee,"createWallet","onError","embedded_wallet_already_exists"),Error("Only one Privy wallet per user is currently allowed");let[r,i]=await Promise.all([eS.initializeWalletProxy(t),h3()]);if(!r&&F.customAuth?.enabled)throw iG(ee,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to connect to wallet proxy");if(!r||!i||F.embeddedWallets?.requireUserOwnedRecoveryOnCreate)return new Promise((e,t)=>{Z(!0),H({createWallet:{onSuccess:t=>{iG(ee,"createWallet","onSuccess",t),e(t)},onFailure:e=>{iG(ee,"createWallet","onError","unknown_embedded_wallet_error"),t(e)},callAuthOnSuccessOnClose:!1}}),ea("EMBEDDED_WALLET_ON_ACCOUNT_CREATE_SCREEN")});{await r.create({accessToken:i});let e=ri(await eS.refreshUser());if(!e)throw iG(ee,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to create wallet");return iG(ee,"createWallet","onSuccess",e),e}},ev=e=>{if(!F.chains.map(e=>e.id).includes(e))throw new ez(`Chain ID ${e} is not supported. It must be added to the config.supportedChains property of the PrivyProvider.`,"unsupported_chain_id")},eC=(r,i,n)=>new Promise(async(a,o)=>{if(!u||!f){iG(ee,"sendTransaction","onError","must_be_authenticated"),o(Error("User must be authenticated before signing with a Privy wallet"));return}let s=r.from,l=s?f?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&e.address===s):ri(f);if(!l){iG(ee,"sendTransaction","onError","embedded_wallet_not_found"),o(Error("Must have a Privy wallet before signing"));return}Z(!0);let c=t.connectors?.findWalletConnector("embedded","privy")?.proxyProvider,d=r.chainId?Number(r.chainId):c.chainId;ev(d);let h=Object.assign({},r,{chainId:d}),p=async()=>{let t=await h3();if(!t||!L){iG(ee,"sendTransaction","onError","embedded_wallet_not_found"),o(Error("Must have valid access token and Privy wallet to send transaction"));return}try{if(!await eS.recoverEmbeddedEthereumWallet()){iG(ee,"sendTransaction","onError","unknown_connect_wallet_error"),o(Error("Unable to connect to wallet"));return}let r=tf(h.chainId,F.chains,F.rpcConfig,{appId:e.appId}),i=await dr(l.address,h,r);if(F.embeddedWallets.noPromptOnSignature){let{totalGasEstimate:e}=await c0(i,r),{hasSufficientFunds:t}=await dn(l.address,i,e,r);if(!t)throw new rw(new ry("Wallet has insufficient funds for this transaction.",rx.E32603_DEFAULT_INTERNAL_ERROR.eipCode))}let n=await di(t,l.address,L,i,r);iG(ee,"sendTransaction","onSuccess",n),a(n)}catch(e){iG(ee,"sendTransaction","onError","transaction_failure"),o(e)}};F.embeddedWallets.noPromptOnSignature?(i&&console.warn("uiOptions defined with `noPromptOnSignature` set to true in app config"),p()):(H({connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_SEND_TRANSACTION_SCREEN",onFailure:e=>{iG(ee,"sendTransaction","onError","unknown_connect_wallet_error"),o(e)}},sendTransaction:{transactionRequest:h,onSuccess:e=>{iG(ee,"sendTransaction","onSuccess",e),a(e)},onFailure:e=>{iG(ee,"sendTransaction","onError","transaction_failure"),o(e)},uiOptions:i||{},fundWalletConfig:n}}),ea("EMBEDDED_WALLET_CONNECTING_SCREEN"))});function eb(){return new Promise(async(e,t)=>{let r=await h3();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");try{await L.verifyMfa({accessToken:r}),e()}catch(e){t(e)}})}let e_=e=>{if("passkey"===e){if(f&&f.linkedAccounts.filter(e=>"passkey"===e.type).length>=5)throw iG(ee,"linkAccount","onError","cannot_link_more_of_type"),new eD(`User already has an account of type ${e} linked.`)}else if(f?.[e])throw iG(ee,"linkAccount","onError","cannot_link_more_of_type"),new eD(`User already has an account of type ${e} linked.`)},ej=()=>{if(!F.loginConfig.telegramAuthConfiguration?.linkEnabled)throw iG(ee,"linkAccount","onError","cannot_link_more_of_type"),new eD("User can't link an account because Telegram linking is disabled.")};async function ek({legacySetWalletPasswordFlow:e=!1}){k(null);let t=e?"setWalletPassword":"setWalletRecovery";if(!u||!f)throw iG(ee,t,"onError","must_be_authenticated"),Error("User must be authenticated before adding recovery method to Privy wallet");let r=ri(f);if(!r||!L)throw iG(ee,t,"onError","embedded_wallet_not_found"),Error("Must have a Privy wallet to add a recovery method");try{await eb()}catch(e){throw iG(ee,t,"onError","missing_or_invalid_mfa"),e}return new Promise((i,n)=>{Z(!0);let a={onSuccess:e=>{iG(ee,t,"onSuccess","user-passcode",e),i(e)},onFailure:e=>{iG(ee,t,"onError","user_exited_set_password_flow"),n(e)},callAuthOnSuccessOnClose:!1},o="user-passcode"===r.recoveryMethod;H({setWalletPassword:a,createWallet:a,connectWallet:{onCompleteNavigateTo:a1({walletAction:"update",availableRecoveryMethods:F.embeddedWallets.userOwnedRecoveryOptions,legacySetWalletPasswordFlow:e,isResettingPassword:o}),shouldForceMFA:!1,onFailure:e=>{iG(ee,t,"onError","unknown_connect_wallet_error"),n(e)}},recoverySelection:{isInAccountCreateFlow:!1,isResettingPassword:o}}),ea("EMBEDDED_WALLET_CONNECTING_SCREEN")})}async function eE({appId:e}){eu(),ei.current=`privy:${e}`,en.current="link";let r=window.open(void 0,void 0,hX({w:440,h:680}));return new Promise(async(i,n)=>{let{name:a,logoUrl:o}=await hq({api:t.api,providerAppId:e,requesterAppId:F.id});H({crossAppAuth:{appId:e,name:a,logoUrl:o,popup:r,onSuccess:i,onError:n}}),eo("CROSS_APP_AUTH_SCREEN")})}let eA={ready:d,authenticated:u,user:f,walletConnectors:t.connectors||null,connectWallet:()=>{ea(u?"CONNECT_ONLY_AUTHENTICATED_SCREEN":"CONNECT_ONLY_LANDING_SCREEN")},importWallet:async({privateKey:e})=>{eu();let[t,r]=await Promise.all([eS.initializeWalletProxy(15e3),h3()]);if(t&&r){await t.import({privateKey:e,accessToken:r});let i=ra(await eS.refreshUser());if(!i)throw iG(ee,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to import wallet");return iG(ee,"createWallet","onSuccess",i),i}throw new eD("User is not authenticated")},linkWallet:em,linkCrossAppAccount:eE,linkEmail:()=>{eu(),e_("email"),ei.current="email",en.current="link",ea("LINK_EMAIL_SCREEN")},linkPhone:()=>{eu(),e_("phone"),ei.current="sms",en.current="link",ea("LINK_PHONE_SCREEN")},linkGoogle:async()=>{eu(),e_("google"),en.current="link",await eS.initLoginWithOAuth("google")},linkTwitter:async()=>{eu(),e_("twitter"),en.current="link",await eS.initLoginWithOAuth("twitter")},linkDiscord:async()=>{eu(),e_("discord"),en.current="link",await eS.initLoginWithOAuth("discord")},linkGithub:async()=>{eu(),e_("github"),en.current="link",await eS.initLoginWithOAuth("github")},linkSpotify:async()=>{eu(),e_("spotify"),en.current="link",await eS.initLoginWithOAuth("spotify")},linkInstagram:async()=>{eu(),e_("instagram"),en.current="link",await eS.initLoginWithOAuth("instagram")},linkTiktok:async()=>{eu(),e_("tiktok"),en.current="link",await eS.initLoginWithOAuth("tiktok")},linkLinkedIn:async()=>{eu(),e_("linkedin"),en.current="link",await eS.initLoginWithOAuth("linkedin")},linkApple:async()=>{eu(),e_("apple"),en.current="link",await eS.initLoginWithOAuth("apple")},linkPasskey:async()=>{eu(),e_("passkey"),await eS.initLinkWithPasskey(),ea("LINK_PASSKEY_SCREEN")},linkTelegram:async()=>{eu(),e_("telegram"),ej(),en.current="link",ei.current="telegram",await eS.initLoginWithTelegram(),ea("TELEGRAM_AUTH_SCREEN")},linkFarcaster:async()=>{eu(),e_("farcaster"),await eS.initLoginWithFarcaster(),en.current="link",ei.current="farcaster",ea("AWAITING_FARCASTER_CONNECTION")},updateEmail:()=>{if(eu(),!f?.email)throw new eD("User does not have an email linked to their account.");en.current="link",ei.current="email",ea("UPDATE_EMAIL_SCREEN")},login:async()=>{let e="Attempted to log in, but user is already logged in. Use a `link` helper instead.";if(!d){let t=await new Promise(e=>{B(t=>e.bind(t))});if(B(null),t){console.warn(e);return}}if(u){console.warn(e);return}en.current="login",eo("LANDING")},connectOrCreateWallet:async()=>{if(d||(await new Promise(e=>{B(()=>e)}),B(null)),u){console.warn("User must be unauthenticated to `connectOrCreateWallet`");return}if(y[0]){console.warn("User must have no connected wallets to `connectOrCreateWallet`");return}eo("CONNECT_OR_CREATE")},logout:async()=>{if(f&&t.clearProviderAcccessTokens(f),await t.logout(),f&&L)try{await L.clearMfa({userId:f.id})}catch{}g(null),m(!1),k(null),iG(ee,"logout","onSuccess"),en.current=null,ei.current=null,c(!1),e7.del(tN)},getAccessToken:()=>t.getAccessToken(),getEthereumProvider:()=>{if(!f||!f.wallet)return new rC;let e=y.find(e=>f.wallet&&e.address===f.wallet.address),r=t.connectors?.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return e&&r?r.proxyProvider:new rC},getEthersProvider:()=>{if(!f||!f.wallet)return new n.Q(new rj(new rC));let e=y.find(e=>f.wallet&&e.address===f.wallet.address),r=t.connectors?.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return new n.Q(new rj(e&&r?r.proxyProvider:new rC))},getWeb3jsProvider:()=>{if(!f||!f.wallet)return new rk(new rC);let e=y.find(e=>f.wallet&&e.address===f.wallet.address),r=t.connectors?.walletConnectors.find(t=>t.wallets.find(t=>t.address===e?.address));return new rk(e&&r?r.proxyProvider:new rC)},unlinkWallet:async e=>{let r=await t.unlinkWallet(e);return g(r),r},unlinkEmail:async e=>{let r=await t.unlinkEmail(e);return g(r),r},unlinkPhone:async e=>{let r=await t.unlinkPhone(e);return g(r),r},unlinkGoogle:async e=>{let r=await t.unlinkOAuth("google",e);return g(r),r},unlinkTwitter:async e=>{let r=await t.unlinkOAuth("twitter",e);return g(r),r},unlinkDiscord:async e=>{let r=await t.unlinkOAuth("discord",e);return g(r),r},unlinkGithub:async e=>{let r=await t.unlinkOAuth("github",e);return g(r),r},unlinkSpotify:async e=>{let r=await t.unlinkOAuth("spotify",e);return g(r),r},unlinkInstagram:async e=>{let r=await t.unlinkOAuth("instagram",e);return g(r),r},unlinkTiktok:async e=>{let r=await t.unlinkOAuth("tiktok",e);return g(r),r},unlinkLinkedIn:async e=>{let r=await t.unlinkOAuth("linkedin",e);return g(r),r},unlinkApple:async e=>{let r=await t.unlinkOAuth("apple",e);return g(r),r},unlinkFarcaster:async e=>{let r=await t.unlinkFarcaster(e);return g(r),r},unlinkTelegram:async e=>{let r=await t.unlinkTelegram(e);return g(r),r},unlinkPasskey:async e=>{let r=await t.unlinkPasskey(e);return g(r),r},setActiveWallet:async e=>{let t=y.find(t=>(0,i.Kn)(t.address)===(0,i.Kn)(e)),r=f?.linkedAccounts.find(t=>"wallet"===t.type&&i.Kn(t.address)===i.Kn(e));if(t&&await t.isConnected()){if(t.linked){let e=Object.assign({},f);e.wallet=r&&{address:r.address,chainType:r.chainType,chainId:r.chainId,walletClient:r.walletClient,walletClientType:r.walletClientType,connectorType:r.connectorType,imported:r.imported},g(e)}else t.loginOrLink()}else M(e),em()},forkSession:()=>t.forkSession(),createWallet:async()=>{if(!u||!f)throw iG(ee,"createWallet","onError","must_be_authenticated"),Error("User must be authenticated before creating a Privy wallet");return ex(f,15e3)},setWalletRecovery:async()=>ek({legacySetWalletPasswordFlow:!1}),setWalletPassword:async()=>ek({legacySetWalletPasswordFlow:!0}),signMessage:(e,r,n)=>new Promise(async(a,o)=>{if(!u||!f){iG(ee,"signMessage","onError","must_be_authenticated"),o(Error("User must be authenticated before signing with a Privy wallet"));return}let s=n?f?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType&&i.Kn(e.address)===i.Kn(n)):ri(f);if(!s){iG(ee,"signMessage","onError","embedded_wallet_not_found"),o(Error("Must have a Privy wallet before signing"));return}if("string"!=typeof e||e.length<1){iG(ee,"signMessage","onError","invalid_message"),o(Error("Message must be a non-empty string"));return}Z(!0);let l=async()=>{if(!u)throw Error("User must be authenticated before signing with a Privy wallet");let r=await h3();if(!L||!r||!await eS.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_sign_message_started",payload:{walletAddress:s.address}});let{response:i}=await L.rpc({accessToken:r,address:s.address,request:{method:"personal_sign",params:[e,s.address]}}),n=i.data;return t.createAnalyticsEvent({eventName:"embedded_wallet_sign_message_completed",payload:{walletAddress:s.address}}),n};if(F.embeddedWallets.noPromptOnSignature){r&&console.warn("uiOptions defined with `noPromptOnSignature` set to true in app config");try{let e=await l();iG(ee,"signMessage","onSuccess",e),a(e)}catch(e){iG(ee,"signMessage","onError","unable_to_sign"),o(e??new rw("Unable to sign message"))}}else H({signMessage:{method:"personal_sign",data:e,confirmAndSign:l,onSuccess:e=>{iG(ee,"signMessage","onSuccess",e),a(e)},onFailure:e=>{iG(ee,"signMessage","onError","unable_to_sign"),o(e)},uiOptions:r||{}},connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_SIGN_REQUEST_SCREEN",onFailure:e=>{iG(ee,"signMessage","onError","unknown_connect_wallet_error"),o(e)},address:s.address}}),ea("EMBEDDED_WALLET_CONNECTING_SCREEN")}),signTypedData:(e,r)=>new Promise(async(i,n)=>{if(!u||!f){iG(ee,"signTypedData","onError","must_be_authenticated"),n(Error("User must be authenticated before signing with a Privy wallet"));return}let a=ri(f);if(!a){iG(ee,"signTypedData","onError","embedded_wallet_not_found"),n(Error("Must have a Privy wallet before signing"));return}Z(!0);let o=tg(e),s=async()=>{if(!u)throw Error("User must be authenticated before signing with a Privy wallet");let e=await h3();if(!L||!e||!await eS.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_sign_typed_data_started",payload:{walletAddress:a.address}});let{response:r}=await L.rpc({accessToken:e,address:a.address,request:{method:"eth_signTypedData_v4",params:[a.address,o]}}),i=r.data;return t.createAnalyticsEvent({eventName:"embedded_wallet_sign_typed_data_completed",payload:{walletAddress:a.address}}),i};if(F.embeddedWallets.noPromptOnSignature||F.legacyWalletUiConfig){r&&console.warn("uiOptions defined with `noPromptOnSignature` set to true in app config");try{let e=await s();iG(ee,"signTypedData","onSuccess",e),i(e)}catch(e){iG(ee,"signTypedData","onError","unable_to_sign"),n(e??new rw("Unable to sign message"))}}else H({signMessage:{method:"eth_signTypedData_v4",data:o,confirmAndSign:s,onSuccess:e=>{iG(ee,"signTypedData","onSuccess",e),i(e)},onFailure:e=>{iG(ee,"signTypedData","onError","unable_to_sign"),n(e)},uiOptions:r||{}},connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_SIGN_REQUEST_SCREEN",onFailure:e=>{iG(ee,"signMessage","onError","unknown_connect_wallet_error"),n(e)}}}),ea("EMBEDDED_WALLET_CONNECTING_SCREEN")}),sendTransaction:async(e,t,r)=>dl(await (await eC(e,t,r)).wait()),exportWallet:()=>new Promise(async(r,i)=>{if(!u||!f){i(Error("User must be authenticated before exporting their Privy wallet"));return}if(!ri(f)){i(Error("Must have a Privy wallet before exporting"));return}if(Z(!0),H(z),!await h3()||!L){i(Error("Must have valid access token to enroll in MFA"));return}if(!L){i(Error("Must have a Privy wallet before exporting"));return}H({keyExport:{appId:e.appId,appClientId:e.clientId,origin:t.apiUrl,onSuccess:r,onFailure:i},connectWallet:{onCompleteNavigateTo:"EMBEDDED_WALLET_KEY_EXPORT_SCREEN",onFailure:i,shouldForceMFA:!0}}),ea("EMBEDDED_WALLET_CONNECTING_SCREEN")}),promptMfa:eb,async init(e){switch(e){case"sms":await t.initMfaSmsVerification();return;case"passkey":return await t.initMfaPasskeyVerification();case"totp":return;default:throw Error(`Unsupported MFA method: ${e}`)}},async submit(e,t){switch(e){case"totp":case"sms":if("string"!=typeof t)throw new eD("Invalid MFA code");J.current?.resolve({mfaMethod:e,mfaCode:t,relyingParty:window.origin}),await new Promise((e,t)=>{X.current={resolve:e,reject:t}});break;case"passkey":if("string"==typeof t)throw new eD("Invalid authenticator response");let i=h2(await (await r.e(550).then(r.bind(r,74550))).startAuthentication(t));J.current?.resolve({mfaMethod:e,mfaCode:i,relyingParty:window.origin}),await new Promise((e,t)=>{X.current={resolve:e,reject:t}});break;default:throw J.current?.reject(new eD("Unsupported MFA method")),new eD(`Unsupported MFA method: ${e}`)}},cancel(){J.current?.reject(new eD("MFA canceled"))},async initEnrollmentWithSms(e){let t=await h3();if(!t||!L)throw Error("Must have valid access token to enroll in MFA");await L.initEnrollMfa({method:"sms",accessToken:t,phoneNumber:e.phoneNumber})},enrollInMfa:e=>new Promise((t,r)=>{if(!e){eS.closePrivyModal(),t();return}F.mfa.noPromptOnMfaRequired&&console.warn("[Privy Warning] Triggering the 'showMfaEnrollmentModal' function when 'noPromptOnMfaRequired' is set to true is unexpected. If this is intentional, ensure that you are building custom UIs for MFA verification."),H({mfaEnrollmentFlow:{mfaMethods:F.mfa.methods,onSuccess:t,onFailure:r}}),ea("MFA_ENROLLMENT_FLOW_SCREEN")}),async initEnrollmentWithTotp(){let e=await h3();if(!e||!L)throw Error("Must have valid access token to enroll in MFA");let t=await L.initEnrollMfa({method:"totp",accessToken:e});return{secret:t.secret,authUrl:t.authUrl}},async submitEnrollmentWithSms(e){let r=await h3();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");await L.submitEnrollMfa({method:"sms",accessToken:r,phoneNumber:e.phoneNumber,code:e.mfaCode}),g(await t.getAuthenticatedUser())},async submitEnrollmentWithTotp(e){let r=await h3();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");await L.submitEnrollMfa({method:"totp",accessToken:r,code:e.mfaCode}),g(await t.getAuthenticatedUser())},async initEnrollmentWithPasskey(){},async submitEnrollmentWithPasskey({credentialIds:e}){let r=await h3();if(!r||!L)throw Error("Must have valid access token to enroll in MFA");await L.submitEnrollMfa({method:"passkey",accessToken:r,credentialIds:e}),g(await t.getAuthenticatedUser())},async unenroll(e){let r=await h3();if(!r||!L)throw Error("Must have valid access token to remove MFA");"passkey"===e?await L.submitEnrollMfa({method:"passkey",accessToken:r,credentialIds:[]}):await L.unenrollMfa({method:e,accessToken:r}),g(await t.getAuthenticatedUser())},requestFarcasterSignerFromWarpcast:async()=>{let e=await h3(),r=f?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!e)throw Error("Must have valid access token to connect with Farcaster");if(!L||!r)throw Error("Must have an embedded wallet to use Farcaster signers");if(!f?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");if(!await eS.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");let i=await L.initFarcasterSigner({address:r.address,hdWalletIndex:null,accessToken:e,mfaCode:null,mfaMethod:null,relyingParty:window.origin});"approved"===i.status&&g(await t.getAuthenticatedUser()||f||null),H({farcasterSigner:i}),ea("AWAITING_FARCASTER_SIGNER")},getFarcasterSignerPublicKey:async()=>{let e,t=await h3(),r=f?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!t)throw Error("Must have valid access token to connect with Farcaster");if(!L||!r)throw Error("Must have an embedded wallet to use Farcaster signers");if(!f?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");if(!await eS.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");if(!f.farcaster?.signerPublicKey)throw Error("Must have a Farcaster signer public key to sign");return e=f.farcaster.signerPublicKey.slice(2),Uint8Array.from(e.match(/.{1,2}/g).map(e=>parseInt(e,16)))},signFarcasterMessage:async e=>{let t=await h3(),i=f?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!t)throw Error("Must have valid access token to connect with Farcaster");if(!L||!i)throw Error("Must have an embedded wallet to use Farcaster signers");if(!f?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");if(!await eS.recoverEmbeddedEthereumWallet())throw Error("Unable to connect to wallet");if(!f.farcaster?.signerPublicKey)throw Error("Must have a Farcaster signer public key to sign");let n=await r.e(550).then(r.bind(r,74550)),a=await L.signFarcasterMessage({address:i.address,hdWalletIndex:null,accessToken:t,mfaCode:null,mfaMethod:null,payload:{hash:n.bufferToBase64URLString(e)},fid:BigInt(f.farcaster.fid),relyingParty:window.origin});return new Uint8Array(n.base64URLStringToBuffer(a.signature))},isHeadlessOAuthLoading:E,loginWithCode:e=>eS.loginWithCode(e),initLoginWithEmail:e=>eS.initLoginWithEmail(e),initLoginWithSms:e=>eS.initLoginWithSms(e),otpState:P,fundWallet:(e,t)=>eS.fundWallet(e,t),initLoginWithHeadlessOAuth:(e,t)=>eS.initLoginWithHeadlessOAuth(e,t),loginWithHeadlessOAuth:e=>eS.loginWithHeadlessOAuth(e),signMessageWithCrossAppWallet:(e,{address:r})=>hQ({user:f,client:t,address:r,requesterAppId:F.id,request:{method:"personal_sign",params:[e,r]},reconnect:eE}),signTypedDataWithCrossAppWallet(e,{address:r}){let i=tg(e);return hQ({user:f,client:t,address:r,requesterAppId:F.id,request:{method:"eth_signTypedData_v4",params:[r,i]},reconnect:eE})},sendTransactionWithCrossAppWallet:(e,{address:r})=>hQ({user:f,client:t,address:r,requesterAppId:F.id,request:{method:"eth_sendTransaction",params:[e]},reconnect:eE}),isModalOpen:l,mfaMethods:F.mfa.methods};h6=eA.signMessage,h7=eA.signTypedData,h8=async(...e)=>{let t=await eC(...e);return F.embeddedWallets.waitForTransactionConfirmation&&await t.wait(),t};let eS={isNewUserThisSession:b,linkingHint:I,pendingTransaction:null,walletConnectionStatus:S,mipdStore:N,connectors:t.connectors?.walletConnectors??[],rpcConfig:F.rpcConfig,chains:F.chains,appId:e.appId,showFiatPrices:"native-token"!==F.embeddedWallets.priceDisplay.primary,clientAnalyticsId:t.clientAnalyticsId,nativeTokenSymbolForChainId:e=>F.chains.find(t=>t.id===Number(e))?.nativeCurrency.symbol,initializeWalletProxy:async e=>{if(L)return L;let t=new Promise(e=>{q(()=>t=>e(t))}),r=new Promise(t=>setTimeout(()=>t(null),e)),i=await Promise.race([t,r]);return q(null),i},getAuthFlow:()=>t.authFlow,getAuthMeta:()=>t.authFlow?.meta,closePrivyModal:(r={shouldCallAuthOnSuccess:!0,isSuccess:!1})=>{let i=d&&u&&f,n;i&&ei.current&&(n=f?.linkedAccounts.filter(e=>null!==e.latestVerifiedAt&&!("wallet"===e.type&&"privy"===e.walletClientType)).sort((e,t)=>t.latestVerifiedAt.getTime()-e.latestVerifiedAt.getTime())[0]),"login"===en.current?r.shouldCallAuthOnSuccess&&i&&ei.current?(iG(ee,"login","onComplete",f,b,!1,ei.current,n??null),e.onSuccess?.(f,b)):iG(ee,"login","onError","exited_auth_flow"):"link"===en.current&&n&&(r.isSuccess&&i&&ei.current?iG(ee,"linkAccount","onSuccess",f,ei.current,n):iG(ee,"linkAccount","onError","exited_link_flow")),M(null),en.current=null,ei.current=null,_(!1),c(!1),setTimeout(()=>{t.authFlow=void 0},200),t.createAnalyticsEvent({eventName:"modal_closed"})},openPrivyModal:ea,connectWallet:ed,initLoginWithWallet:async(e,t)=>{ei.current="siwe",eh(e,t)},loginWithWallet:async()=>{let e,r;if(!d)throw new eB;if(!(t.authFlow instanceof t6))throw new eD("Must initialize SIWE flow first.");if(u)try{({user:e}=await t.link()),ei.current="siwe"}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}else try{({user:e,isNewUser:r}=await t.authenticate()),ei.current="siwe"}catch(e){throw iG(ee,"login","onError",e.privyErrorCode||"generic_connect_wallet_error"),e}g(e||f||null),_(r||!1),m(!0)},initLoginWithFarcaster:async e=>{let r=new tk(e);t.startAuthFlow(r);try{ei.current="farcaster",await r.initializeFarcasterConnect()}catch(e){throw"login"===en.current?iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===en.current&&iG(ee,"linkAccount","onError",e.privyErrorCode||"unknown_auth_error"),e}},loginWithFarcaster:async()=>{let e,r;if(!d)throw new eB;if(!(t.authFlow instanceof tk))throw new eD("Must initialize Farcaster flow first.");if(u)try{({user:e}=await t.link()),ei.current="farcaster"}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}else try{({user:e,isNewUser:r}=await t.authenticate()),ei.current="farcaster"}catch(e){throw iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}g(e||null),_(r||!1),m(!0)},async crossAppAuthFlow({appId:e,popup:r}){let i=`privy:${e}`;ei.current=i;let{url:n,stateCode:a,codeVerifier:o}=await hG({api:t.api,appId:e});if(!n)throw t.createAnalyticsEvent({eventName:"cross_app_auth_error",payload:{error:"Unable to open cross-app auth popup",appId:e}}),new eD("No authorization URL returned for cross-app auth.");try{let s=await hY({url:n,popup:r,provider:i}),l=s.stateCode,c=s.authorizationCode;if(l!==a)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:i,storedStateCode:a??"",returnedStateCode:l??""}}),new eD("Unexpected auth flow. This may be a phishing attempt.");let d=await hK({api:h5.api,appId:e,codeVerifier:o,stateCode:l,authorizationCode:c});t.storeProviderAccessToken(e,d);let h=await eS.refreshUser();if(!h)throw new eD("Unable to update user");return h}catch(e){throw t.createAnalyticsEvent({eventName:"cross_app_auth_error",payload:{error:e.toString(),provider:i}}),e}},async initLoginWithOAuth(e,r){if(ei.current=e,e6()){if("google"===e&&h0(window.navigator.userAgent)){eo("IN_APP_BROWSER_LOGIN_NOT_POSSIBLE");return}}else{eo("IN_APP_BROWSER_LOGIN_NOT_POSSIBLE");return}e7.del(tL);let i=new tV({provider:e});r&&i.addCaptchaToken(r),t.startAuthFlow(i);let n=await t.authFlow.getAuthorizationUrl();n&&n.url&&("twitter"===e&&s.Dt&&(n.url=n.url.replace("x.com","twitter.com")),window.location.assign(n.url))},async initLoginWithTelegram(e){if(!d)throw new eB;ei.current="telegram";let r=new t8(e);t.startAuthFlow(r),r.meta.telegramWebAppData=void 0,r.meta.telegramAuthResult=await new Promise((e,t)=>F.loginConfig.telegramAuthConfiguration?window.Telegram?void window.Telegram.Login.auth({bot_id:F.loginConfig.telegramAuthConfiguration.botId,request_access:!0},r=>r?e(r):t(new eD("Telegram auth failed or was canceled by the client"))):t(new eD("Telegram was not initialized")):t(new eD("Telegram Auth configuration is not loaded")))},async loginWithTelegram(){let e,r;if(!(t.authFlow instanceof t8))throw new eD("Must initialize Telegram flow before calling loginWithTelegram");if(u)try{({user:e}=await t.link()),ei.current="telegram"}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}else try{let i=await t.authenticate();e=i.user,r=i.isNewUser,ei.current="telegram"}catch(e){throw"login"===en.current?iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===en.current&&iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}g(e),_(r||!1),m(!0)},async recoveryOAuthFlow(e,r,i){let n,a;function o(r){if(!r)throw t.createAnalyticsEvent({eventName:"recovery_oauth_error",payload:{error:"Unable to open recovery OAuth popup",provider:e}}),new eD("Recovery OAuth failed")}switch(e){case"google-drive":{let r,s,{url:l,codeVerifier:c,stateCode:d}=await a3({api:h5.api,provider:e});o(l);try{let n=await h1({url:l,popup:i,provider:e});if(r=n.stateCode,s=n.authorizationCode,r!==d)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:e,storedStateCode:d??"",returnedStateCode:r??""}}),new eD("Unexpected auth flow. This may be a phishing attempt.")}catch(r){throw t.createAnalyticsEvent({eventName:"recovery_oauth_error",payload:{error:r.toString(),provider:e}}),new eD("Recovery OAuth failed")}[n,a]=await Promise.all([h3(),a4({api:h5.api,provider:e,codeVerifier:c,stateCode:r,authorizationCode:s})]);break}case"icloud":{let{url:t}=await a3({api:h5.api,provider:e});o(t);let{ckWebAuthToken:r}=await h1({url:t,popup:i,provider:e});a=r,n=await h3()}}if(!L)throw new eD("Cannot connect to wallet proxy");if(!n)throw new eD("Unable to authorize user");switch(r){case"recover":let s=z.recoverWallet?.privyWallet?.address;if(!s)throw new eD("Recovery OAuth failed");t.createAnalyticsEvent({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:s,recoveryMethod:e}}),await L.recover({address:s,accessToken:n,recoveryAccessToken:a,recoveryMethod:e}),t.createAnalyticsEvent({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:s,recoveryMethod:e}});break;case"create-wallet":t.createAnalyticsEvent({eventName:"embedded_wallet_creation_started"}),await L.create({accessToken:n,recoveryAccessToken:a,recoveryMethod:e});let l=ri(await eS.refreshUser());if(!l)throw iG(ee,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to create wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_creation_completed",payload:{walletAddress:l.address}}),iG(ee,"createWallet","onSuccess",l);break;case"set-recovery":let c=ri(f);if(!c)throw iG(ee,"setWalletRecovery","onError","embedded_wallet_not_found"),Error("Embedded wallet not found");t.createAnalyticsEvent({eventName:"embedded_wallet_set_recovery_started",payload:{recoveryMethod:e}}),await L.setRecovery({address:c.address,accessToken:n,recoveryAccessToken:a,recoveryMethod:e});let d=ri(await eS.refreshUser());if(!d)throw iG(ee,"createWallet","onError","unknown_embedded_wallet_error"),Error("Failed to set recovery on wallet");t.createAnalyticsEvent({eventName:"embedded_wallet_set_recovery_completed",payload:{walletAddress:c.address,recoveryMethod:e}}),iG(ee,"setWalletRecovery","onSuccess",e,d);break;default:throw new eD("Unsupported recovery action")}},async loginWithOAuth(e){let r,i,n;if(!(t.authFlow instanceof tV))throw new eD("Must initialize OAuth flow before calling loginWithOAuth");let a=e7.get(tI),o=t.authFlow.meta.stateCode;if(a!==o)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:e,storedStateCode:a??"",returnedStateCode:o??""}}),new eD("Unexpected auth flow. This may be a phishing attempt.");if(u)try{let i=await t.link();r=i.user,n=i.oAuthProviderTokens,ei.current=e}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}else try{let a=await t.authenticate();r=a.user,i=a.isNewUser,n=a.oAuthProviderTokens,ei.current=e}catch(e){throw"login"===en.current?iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===en.current&&iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}return g(r),_(i||!1),m(!0),n},async initLoginWithPasskey(e){let r=new t5(e);t.startAuthFlow(r),en.current="login";try{ei.current="passkey",await r.initAuthenticationFlow()}catch(e){throw iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}},async loginWithPasskey(){let e,r;if(!d)throw new eB;if(!(t.authFlow instanceof t5))throw new eD("Must initialize Passkey flow first.");if("passkey"!==ei.current)throw new eD("Must init login with Passkey flow first.");try{ei.current="passkey",{user:e,isNewUser:r}=await t.authenticate()}catch(e){throw iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}g(e),_(r||!1),m(!0)},async initLinkWithPasskey(e){let r=new t5(e);t.startAuthFlow(r),en.current="link",ei.current="passkey";try{await r.initLinkFlow()}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"unknown_auth_error"),e}},async linkWithPasskey(){let e;if(!d)throw new eB;if(!(t.authFlow instanceof t5))throw new eD("Must initialize Passkey flow first.");if("passkey"!==ei.current)throw new eD("Must init login with Passkey flow first.");try{ei.current="passkey",{user:e}=await t.link()}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}return g(e||f||null),e},async initLoginWithHeadlessOAuth(e,r){if(e6()){if("google"===e&&h0(window.navigator.userAgent))throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.")}else throw Error("It looks like you're using an in-app browser.  To log in, please try again using an external browser.");let i=new tV({provider:e,headless:!0});r&&i.addCaptchaToken(r);let n=await t.startAuthFlow(i).getAuthorizationUrl();n?.url&&window.location.assign(n.url)},async loginWithHeadlessOAuth(e){let r,i;A(!0),t.startAuthFlow(new tV(e));let n=e7.get(tI),a=e.stateCode;if(n!==a)throw t.createAnalyticsEvent({eventName:"possible_phishing_attempt",payload:{provider:e.provider,storedStateCode:n??"",returnedStateCode:a??""}}),A(!1),new eD("Unexpected auth flow. This may be a phishing attempt.");if(u)try{({user:r}=await t.link()),ei.current=e.provider}catch(e){throw iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}else try{({user:r,isNewUser:i}=await t.authenticate()),ei.current=e.provider}catch(e){throw"login"===en.current?iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===en.current&&iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}return g(r),_(i||!1),m(!0),A(!1),r??void 0},initLoginWithEmail:async(e,r)=>{let i=new e2(e,r);t.startAuthFlow(i);try{ei.current="email",await i.sendCodeEmail()}catch(e){throw"login"===en.current?iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===en.current&&iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}},initUpdateEmail:async(e,r,i)=>{let n=new e3(e,r,i);t.startAuthFlow(n),await n.sendCodeEmail()},initLoginWithSms:async(e,r)=>{R({status:"sending-code"});let i=new t7(e,r);t.startAuthFlow(i);try{ei.current="sms",await i.sendSmsCode(),R({status:"awaiting-code-input"})}catch(e){throw R({status:"error",error:e}),"login"===en.current?iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"):"link"===en.current&&iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}},resendEmailCode:async()=>{await t.authFlow?.sendCodeEmail()},resendSmsCode:async()=>{await t.authFlow?.sendSmsCode()},loginWithCode:async e=>{let r,i;if(R({status:"submitting-code"}),!d){let e=new eB;throw R({status:"error",error:e}),e}if(t.authFlow instanceof e2)t.authFlow.meta.emailCode=e.trim();else if(t.authFlow instanceof t7)t.authFlow.meta.smsCode=e.trim();else{let e=new eD("Must initialize a passwordless code flow first");throw R({status:"error",error:e}),e}if(await h3()&&t.sessionHasActiveToken())try{({user:r}=await t.link())}catch(e){throw R({status:"error",error:e}),iG(ee,"linkAccount","onError",e.privyErrorCode||"failed_to_link_account"),e}else try{({user:r,isNewUser:i}=await t.authenticate())}catch(e){throw R({status:"error",error:e}),iG(ee,"login","onError",e.privyErrorCode||"unknown_auth_error"),e}g(r||f||null),_(i||!1),m(!0),R({status:"done"})},refreshUser:async()=>{let e=await t.getAuthenticatedUser();return g(e),e},walletProxy:L,createAnalyticsEvent:({eventName:e,payload:r,timestamp:i})=>t.createAnalyticsEvent({eventName:e,payload:r,timestamp:i}),acceptTerms:async()=>{let e=await t.acceptTerms();return g(e),e},getUsdTokenPrice:e=>t.getUsdTokenPrice(e),recoverEmbeddedEthereumWallet:async()=>new Promise(async(e,r)=>{let i=ri(f)||ra(f),n=await h3();if(!n||!L||!i){r(Error("Must have valid access token and Privy wallet to recover wallet"));return}Z(!0);try{await L.connect({accessToken:n,address:i.address}),e(!0)}catch(a){aK(a)&&"privy"===i.recoveryMethod?(t.createAnalyticsEvent({eventName:"embedded_wallet_pinless_recovery_started",payload:{walletAddress:i.address}}),(await L.recover({address:i.address,accessToken:n,recoveryMethod:i.recoveryMethod})).address||r(Error("Unable to recover wallet")),t.createAnalyticsEvent({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:i.address}}),e(!0)):aK(a)&&"privy"!==i.recoveryMethod?(H({recoverWallet:{privyWallet:i,onFailure:r,onSuccess:()=>e(!0)},recoveryOAuthStatus:{provider:i.recoveryMethod,action:"recover"}}),ea(a2(i.recoveryMethod))):r(a)}}),embeddedSolanaWallet:x,createEmbeddedSolanaWallet:async()=>{Z(!0);let e=await h3(),r=rn(f),i=ri(f);if(!f||!e)throw new eD("User must be logged in to create a Solana wallet");if(r)throw new eD("User already has an embedded Solana wallet.");if(i)throw new eD("Cannot create an embedded Solana wallet for a user with an existing Ethereum wallet.");let n=await eS.initializeWalletProxy(15e3);if(!n)throw new eD("Unable to initialize wallet proxy");t.createAnalyticsEvent({eventName:"embedded_solana_wallet_creation_started"});try{await n.createSolana({accessToken:e});let r=await eS.refreshUser(),i=rn(r);if(!i)throw new eD("Could not get Solana wallet for user");return t.createAnalyticsEvent({eventName:"embedded_solana_wallet_creation_completed",payload:{walletAddress:i.address}}),i}catch(e){throw t.createAnalyticsEvent({eventName:"embedded_solana_wallet_creation_failed"}),new eD("Failed to create Solana embedded wallet with error ",e)}},recoverEmbeddedSolanaWallet:async()=>new Promise(async(e,r)=>{let i=rn(f),n=await h3();if(!n||!L||!i){r(Error("Must have valid access token and Privy wallet to recover wallet"));return}Z(!0);try{await L.connectSolana({accessToken:n,publicKey:i.address}),e(!0)}catch(a){aK(a)&&"privy"===i.recoveryMethod?(t.createAnalyticsEvent({eventName:"embedded_solana_wallet_pinless_recovery_started",payload:{walletAddress:i.address}}),(await L.recoverSolana({publicKey:i.address,accessToken:n})).publicKey||r(Error("Unable to recover wallet")),t.createAnalyticsEvent({eventName:"embedded_solana_wallet_recovery_completed",payload:{walletAddress:i.address}}),e(!0)):r(a)}}),getFiatOnRampConfig:ey,setReadyToTrue:e=>{p(!0),$?.(e)},updateWallets:()=>ew(),fundWallet:async(e,t)=>{let{signedUrl:r,externalTransactionId:i}=await ey(e,t);H({fiatOnRampPrompt:{signedUrl:r},fiatOnRampStatus:{externalTransactionId:i}}),ea("FIAT_ON_RAMP_PROMPT_SCREEN")},requestFarcasterSignerStatus:async e=>{let r=await h3(),i=f?.linkedAccounts.find(e=>"wallet"===e.type&&"privy"===e.walletClientType);if(!r)throw Error("Must have valid access token to connect with Farcaster");if(!L||!i)throw Error("Must have an embedded wallet to use Farcaster signers");if(!f?.farcaster?.fid)throw Error("Must have Farcaster account to use Farcaster signers");let n=await t.requestFarcasterSignerStatus(e);return"approved"===n.status&&g(await t.getAuthenticatedUser()||f||null),n}};h9=eS.recoverEmbeddedEthereumWallet,pe=eS.recoverEmbeddedSolanaWallet;let eT=(0,o.useMemo)(()=>({wallets:y,ready:G&&et}),[y,G,et]);return(0,h.jsx)(iZ.Provider,{value:eA,children:(0,h.jsx)(iB.Provider,{value:ee,children:(0,h.jsx)(dd.Provider,{value:eT,children:(0,h.jsx)(iL,{...F,children:(0,h.jsxs)(iU.Provider,{value:eS,children:[(0,h.jsxs)(im,{data:z,setModalData:H,setInitialScreen:k,initialScreen:j,authenticated:u,open:l,children:[e.children,!F.headless&&F.captchaEnabled&&d&&!u&&(0,h.jsx)(iF,{delayedExecution:!1}),(0,h.jsx)(hv,{theme:{...F.appearance.palette||{}}}),!F.render.standalone&&(0,h.jsx)(hO,{open:l})]}),D&&U?(0,h.jsx)(hB,{appId:e.appId,appClientId:e.clientId,clientAnalyticsId:t.clientAnalyticsId,origin:t.apiUrl,mfaMethods:f?.mfaMethods,mfaPromise:J,mfaSubmitPromise:X,onLoad:W,onLoadFailed:()=>null}):null,F.loginMethods.telegram&&F.loginConfig.telegramAuthConfiguration&&(0,h.jsx)(nS,{if:!0,children:(0,h.jsx)(hL,{scriptHost:e.apiUrl||tE,botUsername:F.loginConfig.telegramAuthConfiguration.botName})})]})})})})})},pc=()=>{let e=iW(),{initLoginWithEmail:t,loginWithCode:r}=iz();return{sendCode:(0,o.useCallback)(async({email:e})=>{if(!e)throw Error("Email required to send OTP code");return t(e)},[t]),loginWithCode:(0,o.useCallback)(async({code:t})=>{if(e.enabled&&"error"===e.status)throw new iM(e.error,null,"captcha_failure");return r(t)},[r,e.status])}};function pd(e){let{linkEmail:t,linkPhone:r,linkWallet:i,linkGoogle:n,linkApple:a,linkTwitter:s,linkDiscord:l,linkGithub:c,linkLinkedIn:d,linkTiktok:h,linkSpotify:p,linkInstagram:u,linkTelegram:m,linkFarcaster:f}=(0,o.useContext)(iZ);return iq("linkAccount",e),{linkEmail:t,linkPhone:r,linkWallet:i,linkGoogle:n,linkApple:a,linkTwitter:s,linkDiscord:l,linkGithub:c,linkLinkedIn:d,linkTiktok:h,linkSpotify:p,linkInstagram:u,linkFarcaster:f,linkTelegram:m}}function ph(e){let{createWallet:t}=(0,o.useContext)(iZ);return iq("createWallet",e),{createWallet:t}}}}]);