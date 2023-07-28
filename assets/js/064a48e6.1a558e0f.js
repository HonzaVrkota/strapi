"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5721],{5329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(3117),n=(r(7294),r(3905));const i={title:"Strapi File Structure",tags:["providers","data-transfer","experimental"]},o="Strapi File Structure",s={unversionedId:"docs/core/data-transfer/providers/strapi-file/file-structure",id:"docs/core/data-transfer/providers/strapi-file/file-structure",title:"Strapi File Structure",description:"The Strapi file providers expect a .tar file (optionally compressed with gzip and/or encrypted with 'aes-128-ecb') that internally uses POSIX style file paths with the following structure:",source:"@site/docs/docs/01-core/data-transfer/02-providers/03-strapi-file/01-file-structure.md",sourceDirName:"docs/01-core/data-transfer/02-providers/03-strapi-file",slug:"/docs/core/data-transfer/providers/strapi-file/file-structure",permalink:"/docs/core/data-transfer/providers/strapi-file/file-structure",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/data-transfer/02-providers/03-strapi-file/01-file-structure.md",tags:[{label:"providers",permalink:"/tags/providers"},{label:"data-transfer",permalink:"/tags/data-transfer"},{label:"experimental",permalink:"/tags/experimental"}],version:"current",sidebarPosition:1,frontMatter:{title:"Strapi File Structure",tags:["providers","data-transfer","experimental"]},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/core/data-transfer/providers/strapi-file/overview"},next:{title:"Source",permalink:"/docs/core/data-transfer/providers/strapi-file/source"}},l={},c=[{value:"metadata.json",id:"metadatajson",level:2},{value:"A directory for each stage of data",id:"a-directory-for-each-stage-of-data",level:2},{value:"JSONL files",id:"jsonl-files",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"strapi-file-structure"},"Strapi File Structure"),(0,n.kt)("p",null,"The Strapi file providers expect a .tar file (optionally compressed with gzip and/or encrypted with 'aes-128-ecb') that internally uses POSIX style file paths with the following structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./\nconfiguration\nentities\nlinks\nmetadata.json\nschemas\n\n./configuration:\nconfiguration_00001.jsonl\n\n./entities:\nentities_00001.jsonl\n\n./links:\nlinks_00001.jsonl\n\n./schemas:\nschemas_00001.jsonl\n")),(0,n.kt)("h2",{id:"metadatajson"},"metadata.json"),(0,n.kt)("p",null,"This file provides metadata about the original source of the data. At minimum, it should include a createdAt timestamp and the version of Strapi that the file was created with (for compatibility checks)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "createdAt": "2023-06-26T07:31:20.062Z",\n  "strapi": {\n    "version": "4.11.2"\n  }\n}\n')),(0,n.kt)("h2",{id:"a-directory-for-each-stage-of-data"},"A directory for each stage of data"),(0,n.kt)("p",null,"There should also be a directory for each stage of data that includes sequentially numbered JSON Lines (.jsonl) files"),(0,n.kt)("p",null,"The files are named in the format: ",(0,n.kt)("inlineCode",{parentName:"p"},"{stage}\\{stage}_{5-digit sequence number}.jsonl")),(0,n.kt)("p",null,"Any number of files may be provided for each stage, as long as the sequence numbers are in order. That is, after first reading 00001, the file source provider will attempt to read file 00002 and if it is not found, it will consider the stage complete."),(0,n.kt)("h3",{id:"jsonl-files"},"JSONL files"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://jsonlines.org/"},"JSON Lines")," files are essentially JSON files, except that newline characters are used to delimit the JSON objects. This allows the provider to read in a single line at a time, rather than loading the entire file into memory, minimizing RAM usage during a transfer and allowing files containing any amount of data."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),u=n,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);