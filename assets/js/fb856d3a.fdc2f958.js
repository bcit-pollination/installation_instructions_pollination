(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),l=(a(0),a(94)),o={id:"mysql_database",title:"MySQL Database installation instructions"},s={unversionedId:"web/mysql_database",id:"web/mysql_database",isDocsHomePage:!1,title:"MySQL Database installation instructions",description:"Overview",source:"@site/docs/web/mysql_database.md",slug:"/web/mysql_database",permalink:"/installation_instructions_pollination/web/mysql_database",version:"current",sidebar:"docs",previous:{title:"Website installation instructions",permalink:"/installation_instructions_pollination/web/website"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Procedures",id:"procedures",children:[{value:"Install MySQL server",id:"install-mysql-server",children:[]},{value:"Generate required MySQL tables and stored procedures",id:"generate-required-mysql-tables-and-stored-procedures",children:[]},{value:"Set up MySQL database user",id:"set-up-mysql-database-user",children:[]}]}],i={toc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"In this tutorial you will:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Install and starting MySQL server 8.0"),Object(l.b)("li",{parentName:"ol"},"Generate required MySQL tables and stored procedures"),Object(l.b)("li",{parentName:"ol"},"Set up MySQL database user")),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ubuntu/Debian based OS"),Object(l.b)("li",{parentName:"ul"},"Installed git"),Object(l.b)("li",{parentName:"ul"},"Port 3306 is open")),Object(l.b)("h2",{id:"procedures"},"Procedures"),Object(l.b)("h3",{id:"install-mysql-server"},"Install MySQL server"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Download and save the MySQL release package from the APT repository ",Object(l.b)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/repo/apt/"},"https://dev.mysql.com/downloads/repo/apt/")),Object(l.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"This package only works for Ubuntu/Debian based operating systems. You will need to look online to see how to install on other operating systems such as MacOS.")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Open your terminal and navigate to the directory where it was downloaded. For example, if it is in your ",Object(l.b)("em",null,"Downloads")," folder"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"cd ~/Downloads\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Install the downloaded package by running the following, replacing ",Object(l.b)("em",null,"mysql-apt-config_w.x.y-z.deb")," with the name of the file")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo dpkg -i mysql-apt-config_w.x.y-z.deb\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"You will see a few configurations.\nAt the time of writing, they are:")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"MySQL Server & Cluster (Currently selected: mysql-8.0)"),Object(l.b)("p",{parentName:"blockquote"},"MySQL Tools & Connectors (Currently selected: Enabled)"),Object(l.b)("p",{parentName:"blockquote"},"MySQL Preview Packages  (Currently selected: Disabled)")),Object(l.b)("p",null,"Leave everything as default and select ",Object(l.b)("em",null,"Ok"),". "),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Update the package information from the APT repository")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\n")),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Install the server")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install mysql-server\n")),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Set a password for the root user")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Choose 'Strong Password Encryption'")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"MySQL server is now running"),Object(l.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"You can start the server by running\n",Object(l.b)("inlineCode",{parentName:"p"},"systemctl start mysql"),"\nand stop the server by running\n",Object(l.b)("inlineCode",{parentName:"p"},"systemctl stop mysql"),"."))))),Object(l.b)("h3",{id:"generate-required-mysql-tables-and-stored-procedures"},"Generate required MySQL tables and stored procedures"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Clone this repo ",Object(l.b)("a",{parentName:"li",href:"https://github.com/bcit-pollination/web_server_pollination.git"},"https://github.com/bcit-pollination/web_server_pollination.git")," if you haven't already")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/bcit-pollination/web_server_pollination.git\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Connect to the MySQL server (type in your root password after)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"mysql -u root -p\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Setup the database tables (replace ",Object(l.b)("em",null,"PATH")," with the location where you cloned the repo)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"source /PATH/web_server_pollination/sql-scripts/SetUpDatabase.sql\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Setup the stored procedures (replace ",Object(l.b)("em",null,"PATH")," with the location where you cloned the repo)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"source /PATH/web_server_pollination/sql-scripts/CreateStoredProcedures.sql\n")),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Disconnect from the MySQL server")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"exit\n")),Object(l.b)("h3",{id:"set-up-mysql-database-user"},"Set up MySQL database user"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Connect to the MySQL server (type in your root password after)")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"mysql -u root -p\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Create a new MySQL account user for the server. Replace ",Object(l.b)("em",null,"password")," with a password of your choice.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"CREATE USER 'server'@'localhost' IDENTIFIED BY 'password';\n")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Grant the appropriate privileges")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GRANT EXECUTE ON voting_system.* TO 'server'@'localhost';\n")),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Disconnect from the MySQL server")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"exit\n")))}b.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),b=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return a?n.a.createElement(m,s(s({ref:t},i),{},{components:a})):n.a.createElement(m,s({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);