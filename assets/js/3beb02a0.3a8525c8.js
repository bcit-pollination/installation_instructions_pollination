(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(94)),r={id:"android",title:"Android installation instructions"},l={unversionedId:"mobile_app/android",id:"mobile_app/android",isDocsHomePage:!1,title:"Android installation instructions",description:"This document details the mobile application installation instructions for Android usage.",source:"@site/docs/mobile_app/android.md",slug:"/mobile_app/android",permalink:"/installation_instructions_pollination/mobile_app/android",version:"current",sidebar:"docs",previous:{title:"UI installation instructions",permalink:"/installation_instructions_pollination/rpi/ui"},next:{title:"iOS Installation Instructions",permalink:"/installation_instructions_pollination/mobile_app/ios"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Procedures",id:"procedures",children:[{value:"Clone the mobile repository",id:"clone-the-mobile-repository",children:[]},{value:"Connect your Android phone to your computer using an Android-based Lightning-to-USB cable",id:"connect-your-android-phone-to-your-computer-using-an-android-based-lightning-to-usb-cable",children:[]},{value:"Enable USB-debugging on your Android phone",id:"enable-usb-debugging-on-your-android-phone",children:[]},{value:"Install the app on your Android phone",id:"install-the-app-on-your-android-phone",children:[]},{value:"Run the app",id:"run-the-app",children:[]}]}],d={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document details the mobile application installation instructions for Android usage."),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"In this tutorial you will:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Clone the mobile repository"),Object(i.b)("li",{parentName:"ol"},"Connect your Android phone to your computer using an Android-based Lightning-to-USB cable"),Object(i.b)("li",{parentName:"ol"},"Enable USB-debugging on your Android phone"),Object(i.b)("li",{parentName:"ol"},"Install the app on your Android phone"),Object(i.b)("li",{parentName:"ol"},"Run the app")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Git installed"),Object(i.b)("li",{parentName:"ul"},"Basic knowledge of GitHub and Git"),Object(i.b)("li",{parentName:"ul"},"Android Studio installed"),Object(i.b)("li",{parentName:"ul"},"Access to the Internet")),Object(i.b)("h2",{id:"procedures"},"Procedures"),Object(i.b)("h3",{id:"clone-the-mobile-repository"},"Clone the mobile repository"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Fork this repository: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/bcit-pollination/mobile_pollination.git"},"https://github.com/bcit-pollination/mobile_pollination.git"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ensure you are at the desired parent directory of the repository to be installed")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone your fork"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"git clone <your fork clone link here>\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Navigate to the directory of the recently cloned mobile repository")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd mobile_pollination\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you haven't installed the latest LTS version of Node.js on your computer, you can do so here: ",Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")))),Object(i.b)("p",null,"Alternatively, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"nvm")," (Node Version Manager) to update your node version"),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Install node modules")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),Object(i.b)("h3",{id:"connect-your-android-phone-to-your-computer-using-an-android-based-lightning-to-usb-cable"},"Connect your Android phone to your computer using an Android-based Lightning-to-USB cable"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connect your Android phone to your computer using an Android-based Lightning-to-USB cable"),Object(i.b)("p",{parentName:"li"},"A Lightning-to-USB cable is the cable that connects your phone to your charger's power adapter"))),Object(i.b)("h3",{id:"enable-usb-debugging-on-your-android-phone"},"Enable USB-debugging on your Android phone"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unlock your Android phone"),Object(i.b)("p",{parentName:"li"},"This allows your computer to access your mobile phone")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to your Settings"))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You must have ",Object(i.b)("inlineCode",{parentName:"p"},"Developer Mode")," enabled in your Android phone in order to use the USB-debugging feature"))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Developer Mode")," screen in ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," is available by default on Android 4.1 and lower and can easily be toggled on by navigating there"),Object(i.b)("p",null,"If your phone utilizes Android 4.2 or higher, you can enable Developer Mode by navigating to ",Object(i.b)("inlineCode",{parentName:"p"},"About Phone")," in ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," and then tap ",Object(i.b)("inlineCode",{parentName:"p"},"Build Number")," seven times"),Object(i.b)("p",null,"Android 8.0.0 and 8.1.0 requires an additional step in the navigation order:\nSettings > ",Object(i.b)("inlineCode",{parentName:"p"},"System")," > About Phone > Build Number"),Object(i.b)("p",null,"More details can be found here: ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"https://developer.android.com/studio/debug/dev-options")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Search for USB-debugging using the search bar and select the most relevant search result"),Object(i.b)("p",{parentName:"li"},"Alternatively, you can navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"Developer Options")," in ",Object(i.b)("inlineCode",{parentName:"p"},"Settings")," (usually located at the very bottom) and look for the ",Object(i.b)("inlineCode",{parentName:"p"},"USB-debugging")," option from there"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Disable USB-debugging if it is already enabled in order receive the RSA authentication pop-up once again"))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Enable USB-debugging and press OK when prompted by the RSA authentication pop-up")),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The adb (Android Debug Bridge) command from Android Studio must be run in the respective directory:  ",Object(i.b)("inlineCode",{parentName:"p"},"android_sdk/platform-tools/")))),Object(i.b)("p",null,"If you are on Windows, you can add the directory to the system environment PATH: ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Users\\<user>\\AppData\\Local\\Android\\Sdk\\platform-tools")),Object(i.b)("p",null,"Doing so will allow you to run the adb command-line tool globally"),Object(i.b)("p",null,"If you are on Ubuntu Linux, please follow the second step within the ",Object(i.b)("inlineCode",{parentName:"p"},"Set up a device for development")," section from this tutorial: ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device#setting-up"},"https://developer.android.com/studio/run/device#setting-up")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You may receive errors after attempting to run the adb command-line tool if the terminal is not given administrator privileges"))),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Check that your device is detected and authorized using the adb command-line tool")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"adb devices\n")),Object(i.b)("p",null,"At this point, the terminal should give a similar output:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"List of devices attached\n<device_serial> authorized\n")),Object(i.b)("p",null,"If instead it lists your device as unauthorized, then something went wrong."),Object(i.b)("p",null,"More details can be found here: ",Object(i.b)("a",{parentName:"p",href:"https://developer.android.com/studio/run/device"},"https://developer.android.com/studio/run/device")),Object(i.b)("h3",{id:"install-the-app-on-your-android-phone"},"Install the app on your Android phone"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open a terminal with administrator privileges")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to the root directory of the mobile repository")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the app onto your phone via react-native"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"react-native run-android\n")),Object(i.b)("p",null,"Installation may take several minutes"),Object(i.b)("p",null,"If you are getting an error regarding ",Object(i.b)("inlineCode",{parentName:"p"},"gradle"),", you will need to open Android Studio and let it build the gradle before attempting to retry the installation process"),Object(i.b)("p",null,"After compilation and installation, the app should automatically open on your Android phone"),Object(i.b)("h3",{id:"run-the-app"},"Run the app"))}b.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||s[u]||i;return n?o.a.createElement(m,l(l({ref:t},d),{},{components:n})):o.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);