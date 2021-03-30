(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ios-c4928dd81832e2a64bc0affd82270796.png"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ios1-b3a865250cc314aa6d210246382248b2.png"},142:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ios2-955fed28bccb95b1d5156f323929bc20.png"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(94)),o={id:"ios",title:"iOS Installation Instructions"},l={unversionedId:"mobile_app/ios",id:"mobile_app/ios",isDocsHomePage:!1,title:"iOS Installation Instructions",description:"Overview",source:"@site/docs/mobile_app/ios.md",slug:"/mobile_app/ios",permalink:"/installation_instructions_pollination/mobile_app/ios",version:"current",sidebar:"docs",previous:{title:"Android installation instructions",permalink:"/installation_instructions_pollination/mobile_app/android"},next:{title:"NGINX installation instructions",permalink:"/installation_instructions_pollination/web/nginx"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Command Line Setup",id:"command-line-setup",children:[]},{value:"Xcode Setup",id:"xcode-setup",children:[]},{value:"Running the Project on an iOS Device.",id:"running-the-project-on-an-ios-device",children:[]},{value:"Running the Project on an iOS Simulator",id:"running-the-project-on-an-ios-simulator",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={toc:c};function b(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"In this tutorial you will:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"clone the Pollination mobile app GitHub repository"),Object(r.b)("li",{parentName:"ul"},"install required dependencies and packages"),Object(r.b)("li",{parentName:"ul"},"setup Xcode to build the project"),Object(r.b)("li",{parentName:"ul"},"install the Pollination iOS app onto your device or simulator")),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"To successfully complete this tutorial you need:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a macOS machine with Xcode installed"),Object(r.b)("li",{parentName:"ul"},"an Apple ID or Apple developer account"),Object(r.b)("li",{parentName:"ul"},"an iOS device"),Object(r.b)("li",{parentName:"ul"},"NodeJS and npm installed ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Info: ",Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"https://nodejs.org/en/download/package-manager/"))))),Object(r.b)("h2",{id:"command-line-setup"},"Command Line Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Clone the GitHub repository from:"),Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/bcit-pollination/mobile_pollination"},"https://github.com/bcit-pollination/mobile_pollination"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the root of the project."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd mobile_pollination\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install the required NodeJS dependencies."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install the React Native CLI."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g react-native-cli\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the ios folder of the project."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd ios\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install the required dependencies."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"pod install && pod update\n")))),Object(r.b)("h2",{id:"xcode-setup"},"Xcode Setup"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Launch Xcode.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Go to Preferences > Accounts and click the "+" at the bottom to add your Apple ID/Developer account.'),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"ios.png",src:n(140).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Create a Personal Team and click "Manage Certificates" > "+" > "Apple Development" to create a development certificate.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Locate the "expopollination.xcworkspace" located in the project\'s "ios" folder and open it in Xcode.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Click on the "expopollination" project on the left sidebar.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Click on the "General" tab.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Change the "Bundle Identifier" name to any name you like (e.g. "expopollination").'),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"ios1.png",src:n(141).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Click on the "Signing & Capabilities" tab.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Choose your Personal Team from the "Team" dropdown.'),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"ios2.png",src:n(142).default})))),Object(r.b)("h2",{id:"running-the-project-on-an-ios-device"},"Running the Project on an iOS Device."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the root folder of the project.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Plug in your iOS device into your macOS device via USB.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install the required ios-deploy library."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g ios-deploy\n")),Object(r.b)("p",{parentName:"li"},"or"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"brew install ios-deploy\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Launch the project on your iOS device."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'react-native run-ios --device="Device Name"\n')))),Object(r.b)("h2",{id:"running-the-project-on-an-ios-simulator"},"Running the Project on an iOS Simulator"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"  Bluetooth functions are not available on a simulator."))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the root folder of the project.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Launch the project on the simulator."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},"react-native run-ios\n")),Object(r.b)("p",{parentName:"li"},"or"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell"},'react-native run-ios --simulator="Simulator Name"\n')))),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h4",{id:"untrusted-developer-error-when-launching-app-on-ios-device"},'"Untrusted Developer" Error When Launching App on iOS Device'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On your device, go to Settings > General > Profiles/Device Management.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Choose your Apple Development account under "Developer App".')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Click "Trust".'))),Object(r.b)("h4",{id:"finding-your-ios-devices-name"},"Finding Your iOS Device's Name"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On your device, go to Settings > General > About > Name.")))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return n?i.a.createElement(d,l(l({ref:t},p),{},{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);