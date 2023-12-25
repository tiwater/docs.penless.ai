"use strict";(self.webpackChunkpenless_docs=self.webpackChunkpenless_docs||[]).push([[104],{9613:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,d=m["".concat(o,".").concat(s)]||m[s]||c[s]||r;return n?l.createElement(d,i(i({ref:t},k),{},{components:n})):l.createElement(d,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(6920),a=(n(9496),n(9613));const r={},i="AI-Workflow \u67b6\u6784\u8bbe\u8ba1",p={unversionedId:"zh/design/flow",id:"zh/design/flow",title:"AI-Workflow \u67b6\u6784\u8bbe\u8ba1",description:"AI \u5de5\u4f5c\u6d41",source:"@site/docs/zh/design/flow.md",sourceDirName:"zh/design",slug:"/zh/design/flow",permalink:"/zh/design/flow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"designZhSidebar",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/design/arch"}},o={},u=[{value:"AI \u5de5\u4f5c\u6d41",id:"ai-\u5de5\u4f5c\u6d41",level:2},{value:"\u8bbe\u8ba1\u76ee\u6807",id:"\u8bbe\u8ba1\u76ee\u6807",level:3},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:2},{value:"\u6570\u636e\u6d41\u8f6c",id:"\u6570\u636e\u6d41\u8f6c",level:3},{value:"\u903b\u8f91\u63a7\u5236",id:"\u903b\u8f91\u63a7\u5236",level:3},{value:"\u8282\u70b9\uff08Node\uff09",id:"\u8282\u70b9node",level:3},{value:"\u8fde\u7ebf\uff08Edge\uff09",id:"\u8fde\u7ebfedge",level:3},{value:"\u5de5\u4f5c\u6d41",id:"\u5de5\u4f5c\u6d41",level:3},{value:"\u6267\u884c\u5b9e\u4f8b",id:"\u6267\u884c\u5b9e\u4f8b",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],k={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-workflow-\u67b6\u6784\u8bbe\u8ba1"},"AI-Workflow \u67b6\u6784\u8bbe\u8ba1"),(0,a.kt)("h2",{id:"ai-\u5de5\u4f5c\u6d41"},"AI \u5de5\u4f5c\u6d41"),(0,a.kt)("p",null,"AI \u5de5\u4f5c\u6d41\uff08AI Workflow\uff09\u662f\u4e00\u79cd AI \u65f6\u4ee3\u7684\u65b0\u5f00\u53d1\u8303\u5f0f\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u62d6\u653e\u8282\u70b9\u5e76\u7528\u8fb9\u8fde\u63a5\u5b83\u4eec\u6765\u521b\u5efa\u590d\u5408 AI \u80fd\u529b\u3002"),(0,a.kt)("h3",{id:"\u8bbe\u8ba1\u76ee\u6807"},"\u8bbe\u8ba1\u76ee\u6807"),(0,a.kt)("p",null,"\u6838\u5fc3\u8bbe\u8ba1\u76ee\u6807\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u4ee3\u7801\u548c\u53ef\u89c6\u5316\uff1a\u5de5\u4f5c\u6d41\u5f15\u64ce\u5e94\u8be5\u662f\u53ef\u89c6\u5316\u65e0\u4ee3\u7801\u7684\u3002\u666e\u901a\u7528\u6237\u53ea\u9700\u8981\u901a\u8fc7\u62d6\u653e\u8282\u70b9\u5e76\u7528\u8fb9\u8fde\u63a5\u5b83\u4eec\u6765\u521b\u5efa\u590d\u5408 AI \u80fd\u529b\u3002AI \u5de5\u4f5c\u6d41\u5f15\u64ce\u5e94\u8be5\u662f\u53ef\u8c03\u8bd5\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u67e5\u770b\u8282\u70b9\u7684\u8f93\u5165\u548c\u8f93\u51fa\uff0c\u4ece\u800c\u6709\u673a\u4f1a\u8c03\u6574\u5408\u9002\u7684 AI \u6a21\u578b\u548c\u65b9\u6cd5\u4ee5\u8fbe\u5230\u6700\u4f73\u6548\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u6027\uff1aAI \u5de5\u4f5c\u6d41\u5f15\u64ce\u5e94\u8be5\u662f\u53ef\u6269\u5c55\u7684\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u6dfb\u52a0\u65b0\u7684\u8282\u70b9\u548c\u8fb9\u3002AI \u5de5\u4f5c\u6d41\u5f15\u64ce\u5e94\u8be5\u662f\u901a\u7528\u7684\uff0c\u53ef\u4ee5\u7528\u4e8e\u4efb\u4f55 AI \u573a\u666f\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6587\u672c\u3001\u56fe\u50cf\u3001\u89c6\u9891\u3001\u8bed\u97f3\u3001\u81ea\u7136\u8bed\u8a00\u5904\u7406\u3001\u673a\u5668\u5b66\u4e60\u3001\u6df1\u5ea6\u5b66\u4e60\u3001\u5f3a\u5316\u5b66\u4e60\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5ba2\u89c2\u4e2d\u7acb\uff1a\u867d\u7136\u5e73\u53f0\u4f1a\u4ece\u4fbf\u5229\u4f7f\u7528\u7684\u89d2\u5ea6\u63a8\u8350\u7f3a\u7701\u7684\u5404\u7c7b\u4f9b\u5e94\u5546\uff0c\u4f46\u539f\u5219\u4e0a\u4f7f\u7528\u8005\u53ef\u4ee5\u5b8c\u5168\u81ea\u7531\u7684\u9009\u62e9\u5176\u4ed6\u4f9b\u5e94\u5546\u3002\u5982\u679c\u7279\u5b9a\u7684\u80fd\u529b\u63d0\u4f9b\u8005\u5c1a\u672a\u88ab\u63a5\u5165\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u5f00\u53d1\u8282\u70b9\u5e76\u5c06\u5176\u63a5\u5165\u5230\u5e73\u53f0\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u805a\u5408\u6027\uff1a\u5e94\u7528\u5f00\u53d1\u8005\u53ef\u4ee5\u5c06 AI \u5de5\u4f5c\u6d41\u5f53\u505a\u4e00\u4e2a\u5e72\u51c0\u7684 API \u8fdb\u884c\u8c03\u7528\uff0c\u4ece\u800c\u8ba9\u81ea\u5df1\u7684\u5e94\u7528\u8fc5\u901f\u5177\u5907 AI \u80fd\u529b\u3002")),(0,a.kt)("h2",{id:"\u6570\u636e\u7ed3\u6784"},"\u6570\u636e\u7ed3\u6784"),(0,a.kt)("h3",{id:"\u6570\u636e\u6d41\u8f6c"},"\u6570\u636e\u6d41\u8f6c"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9\u6d41\u5f15\u64ce\u5c3d\u53ef\u80fd\u901a\u7528\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u6d41\u4e2d\u6d41\u52a8\u7684\u6570\u636e\u7ed3\u6784\u3002 \u6570\u636e\u7ed3\u6784\u5e94\u8be5\u80fd\u591f\u8868\u793a\u4efb\u4f55\u7c7b\u578b\u7684\u6570\u636e\uff0c\u4f8b\u5982\u6587\u672c\u3001JSON \u5bf9\u8c61\u3001\u4e8c\u8fdb\u5236\u6587\u4ef6\u7b49\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u5173\u952e\u573a\u666f\u662f\u9762\u5411AIGC\uff08\u4eba\u5de5\u667a\u80fd\u751f\u6210\u5185\u5bb9\uff09\uff0c\u5e76\u4e14\u6bcf\u4e2a\u5185\u5bb9\u90fd\u53ef\u4ee5\u7b80\u5355\u5730\u6620\u5c04\u5230\u4e00\u4e2a\u6587\u4ef6\uff08\u6216\u8005\u662f\u4e00\u4e2a JSON\uff09\u3002 \u6240\u4ee5\u6211\u4eec\u5c06\u4f7f\u7528\u6587\u4ef6\u4f5c\u4e3a\u6d41\u4e2d\u6d41\u52a8\u7684\u57fa\u672c\u6570\u636e\u7ed3\u6784\u3002 \u4e3a\u4e86\u4fbf\u4e8e\u63cf\u8ff0\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 JSON \u4f5c\u4e3a\u9876\u5c42\u6570\u636e\u683c\u5f0f\uff0c\u4ee5\u4e00\u81f4\u65b9\u5f0f\u8868\u8fbe\u4e8c\u8fdb\u5236\u6587\u4ef6\u3001\u77ed\u6587\u672c\u6216\u957f\u6587\u672c\u6216 JSON \u5bf9\u8c61\u3002 \u57fa\u672c\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "text",\n  "name": "test.txt",\n  "description": "This is a test file",\n  "format": "utf-8",\n  "data": "This is a test file"\n}\n')),(0,a.kt)("p",null,"\u5e76\u975e\u6240\u6709\u5b57\u6bb5\u90fd\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u201c\u7c7b\u578b\u201d\u548c\u201c\u6570\u636e\u201d\u662f\u5fc5\u9700\u7684\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\u7528\u4e8e\u6307\u793a\u6570\u636e\u7684\u7c7b\u578b\uff0c\u53ef\u4ee5\u662f\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"text\uff08\u9ed8\u8ba4\u4e3a utf-8\uff0c\u6216\u7531 ",(0,a.kt)("inlineCode",{parentName:"li"},"format")," \u5b57\u6bb5\u6307\u5b9a\uff09"),(0,a.kt)("li",{parentName:"ul"},"json"),(0,a.kt)("li",{parentName:"ul"},"image\uff08\u8fd8\u9700\u8981\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"li"},"format"),"\u5b57\u6bb5\uff0c\u6bd4\u5982png, jpg, gif\u7b49\uff09")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6bcf\u4e2a\u7aef\u53e3\u90fd\u5e94\u5305\u542b\u76f8\u5e94\u7684\u6570\u636e\u6a21\u5f0f\u3002 \u4f8b\u5982\uff0c\u4e00\u4e2a\u6587\u672c\u5206\u7c7b\u5668\u8282\u70b9\u5f53\u7136\u5e94\u8be5\u53ea\u5c06\u6587\u672c\u4f5c\u4e3a\u8f93\u5165\u548c\u8f93\u51fa\u6587\u672c\u3002 \u8be5\u67b6\u6784\u5c06\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7c7b\u4f3c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "text",\n  "conditions": {\n    "minLength": "30",\n    "maxLength": "4096",\n  }\n}\n')),(0,a.kt)("p",null,"\u6216\u56fe\u50cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "image",\n  "format": "png|jpg|webp",\n  "conditions": {\n    "dataFormat": "base64",\n  }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e9b\u53ea\u662f\u7528\u4e8e\u89e3\u91ca\u76ee\u7684\u7684\u4e00\u4e9b\u793a\u4f8b\uff0c\u800c\u4e0d\u662f\u6700\u7ec8\u89c4\u8303\u3002 \u8fd9\u4e9b\u89c4\u5219\u53ef\u4ee5\u6307\u5bfc\u6211\u4eec\u8fdb\u884c\u8282\u70b9\u64cd\u4f5c\uff0c\u4f8b\u5982\u786e\u5b9a\u6211\u4eec\u662f\u5426\u53ef\u4ee5\u5c06\u4e24\u4e2a\u8282\u70b9\u8fde\u63a5\u5728\u4e00\u8d77\u3002"),(0,a.kt)("h3",{id:"\u903b\u8f91\u63a7\u5236"},"\u903b\u8f91\u63a7\u5236"),(0,a.kt)("p",null,"\u5728\u8fd0\u884c\u6d41\u5f15\u64ce\u65f6\uff0c\u6211\u4eec\u5f53\u7136\u9700\u8981\u652f\u6301\u57fa\u672c\u7684\u903b\u8f91\u63a7\u5236\uff0c\u6bd4\u5982if-else\u3001switch-case\u3001for-loop\u7b49\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u5982\u4e0bJSON schema\u6765\u8868\u793a\u903b\u8f91\u63a7\u5236\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "if",\n  "condition": "data.length > 100",\n  "true": {\n    "type": "node",\n    "id": "node-1"\n  },\n  "false": {\n    "type": "node",\n    "id": "node-2"\n  }\n}\n')),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u60f3\u51fa\u89e3\u51b3\u65b9\u6848\uff1a\u662f\u63d0\u4f9b\u4e00\u5957\u5185\u7f6e\u7684\u903b\u8f91\u63a7\u4ef6\uff0c\u8fd8\u662f\u59cb\u7ec8\u5c06\u903b\u8f91\u96c6\u6210\u5728\u4efb\u52a1\u8282\u70b9\u4e2d\uff1f \u4f8b\u5982\uff0c\u5bf9\u4e8e\u6587\u672c\u5206\u7c7b\u5668\u8282\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u51fa\u4e00\u4e2a\u662f\u6216\u5426\u7684\u95ee\u9898\u4f5c\u4e3a\u63d0\u793a\uff0c\u7136\u540e\u6839\u636e\u7b54\u6848\u6765\u786e\u5b9a\u4e0b\u4e00\u6b65\u53bb\u54ea\u4e2a\u8282\u70b9\u3002 \u6216\u8005\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u5185\u7f6e\u7684 if-else \u8282\u70b9\uff0c\u7136\u540e\u6839\u636e\u7ed3\u679c\u6765\u51b3\u5b9a\u4e0b\u4e00\u6b65\u53bb\u54ea\u4e2a\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u524d\u8005\u66f4\u7075\u6d3b\u65b9\u4fbf\uff0c\u540e\u8005\u66f4\u7b80\u6d01\uff0c\u66f4\u7a0b\u5e8f\u5458\u65b9\u5f0f\u3002 \u73b0\u5728\uff0c\u6211\u4eec\u5c06\u9009\u62e9\u524d\u8005\u3002 \u6311\u6218\u5728\u4e8e\u5982\u4f55\u505a\u51fa\u5224\u65ad\u3002 \u6211\u4eec\u53ef\u4ee5\u53c2\u8003Waveline\u7684\u6848\u4f8b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://waveline.ai/_next/static/media/workflow-example.58a6808d.svg",alt:"waveline-logic-control"})),(0,a.kt)("p",null,"\u4ece\u8fd9\u4e2a\u6848\u4f8b\u7814\u7a76\u4e2d\uff0c\u6211\u4eec\u53ef\u80fd\u5e94\u8be5\u63d0\u4f9b\u4e00\u7ec4\u5185\u7f6e\u7684\u903b\u8f91\u63a7\u5236\uff0c\u4f8b\u5982 if-else\u3001switch-case\u3001for-loop \u7b49\u3002\u6211\u4eec\u8fd8\u5e94\u8be5\u63d0\u4f9b\u4e00\u79cd\u5c06\u903b\u8f91\u96c6\u6210\u5230\u4efb\u52a1\u8282\u70b9\u4e2d\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982 \u4f5c\u4e3a\u6587\u672c\u5206\u7c7b\u5668\u8282\u70b9\u3002 \u8fd9\u610f\u5473\u7740\u6211\u4eec\u9700\u8981\u63d0\u4f9b\u5fc5\u8981\u7684\u63d0\u793a\uff0c\u4f7f\u7ed3\u679c\u5177\u6709\u53ef\u89e3\u91ca\u6027\uff0c\u5e76\u7528\u7ed3\u679c\u89e6\u53d1\u4e0d\u540c\u7684\u8f93\u51fa\u7aef\u53e3\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4e0d\u5efa\u8bae\u7528\u5faa\u73af\u6765\u8ba9\u903b\u8f91\u6d41\u7a0b\u53d8\u5f97\u590d\u6742\uff0c\u56e0\u4e3a\u8fd9\u6837\u8bbe\u8ba1\u548c\u5b9e\u73b0\u8d77\u6765\u90fd\u4f1a\u5f88\u56f0\u96be\uff0c\u6240\u4ee5\u6211\u4eec\u4f1a\u91c7\u7528DAG\u65b9\u6cd5\u3002 \u4f46\u662f\uff0c\u5982\u679c\u4eba\u4eec\u771f\u7684\u9700\u8981\u4e00\u79cd\u5faa\u73af\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u4e00\u79cd\u65b9\u6cd5\u6765\u5b9e\u73b0\uff0c\u6bd4\u5982\u63d0\u4f9b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u6765\u5b58\u50a8\u7ed3\u679c\uff0c\u5e76\u4ee5\u4e0a\u6b21\u8fd0\u884c\u7684\u7ed3\u679c\u4f5c\u4e3a\u8f93\u5165\u91cd\u590d\u89e6\u53d1\u6d41\u8bc4\u4f30\u3002"),(0,a.kt)("h3",{id:"\u8282\u70b9node"},"\u8282\u70b9\uff08Node\uff09"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u90fd\u6709\u4ee5\u4e0b\u5173\u952e\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u552f\u4e00\u8eab\u4efd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540d\u79f0\uff0c\u4e0d\u8981\u6c42\u552f\u4e00\uff0c\u4ec5\u4f9b\u5c55\u793a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u63cf\u8ff0\uff0c\u4e0e\u540d\u79f0\u76f8\u540c\uff0c\u4ec5\u4f9b\u5c55\u793a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7c7b\u578b\uff0c\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f00\u59cb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7ed3\u5c3e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u884c\u52a8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5065\u5eb7\uff09\u72b6\u51b5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b50\u6d41"),(0,a.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u7b80\u5316\u601d\u8003\u8fc7\u7a0b\uff0c\u8ba9\u6211\u4eec\u6682\u65f6\u5173\u6ce8 Action \u8282\u70b9\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Template\uff0c\u7528\u4e8e\u6e32\u67d3\u8282\u70b9\u7684\u6a21\u677f\uff0c\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8f93\u5165\u7aef\u53e3\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u6ca1\u6709\u4efb\u4f55\u8f93\u5165\u7aef\u53e3\u7684\u89e6\u53d1\u8282\u70b9\uff0c\u4f8b\u5982\u6587\u4ef6\u4ee3\u7406\uff0c\u8fd9\u662f\u53ef\u9009\u7684\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u7aef\u53e3\uff0c\u5bf9\u4e8e\u90a3\u4e9b\u6ca1\u6709\u4efb\u4f55\u8f93\u51fa\u7aef\u53e3\u7684\u52a8\u4f5c\u8282\u70b9\uff0c\u8fd9\u4e5f\u662f\u53ef\u9009\u7684\uff0c\u4f8b\u5982Slack\u901a\u77e5\u8282\u70b9\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u5b57\u6bb5\uff0c\u6211\u4eec\u5047\u8bbe\u5b83\u662f\u4e00\u4e2a\u952e\u503c\u5bf9\u5217\u8868")))),(0,a.kt)("p",null,"\u4e3a\u4e86\u7528\u6237\u4f53\u9a8c\u7684\u76ee\u7684\uff0c\u6211\u4eec\u9700\u8981\u663e\u793a\u8282\u70b9\u7684\u72b6\u6001\uff0c\u6bd4\u5982\u5b83\u662f\u5426\u6b63\u5728\u8fd0\u884c\uff0c\u6216\u8005\u5b8c\u6210\uff0c\u6216\u8005\u5931\u8d25\u7b49\u3002\u6240\u4ee5\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u72b6\u6001\uff0c\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c31\u7eea"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e2d"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u5931\u8d25"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8282\u70b9\u7684\u6267\u884c\u8fdb\u5ea6\uff0c\u4ece0\u5230100\u3002\u56e0\u4e3a AI \u4efb\u52a1\u901a\u5e38\u6bd4\u8f83\u8d39\u65f6\u95f4\uff0c\u56e0\u6b64\u8fd9\u4e2a\u4fe1\u606f\u4e5f\u6bd4\u8f83\u91cd\u8981\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7ed3\u679c\u9884\u89c8"),(0,a.kt)("p",{parentName:"li"}," \u8fd9\u4e2a\u662f\u53ef\u9009\u7684\uff0c\u53ea\u6709\u5728\u8282\u70b9\u5b8c\u6210\u65f6\u624d\u53ef\u7528\uff08\u6bd4\u5982\u4e00\u4e2a\u6587\u4ef6\u4ee3\u7406\u8282\u70b9\uff0c\u53ef\u4ee5\u9884\u89c8\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u6216\u8005\u56fe\u7247\u751f\u6210\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u5e94\u8be5\u53ef\u4ee5\u901a\u8fc7\u67d0\u79cd\u65b9\u5f0f\u9884\u89c8\u751f\u6210\u7684\u56fe\u7247 )"))),(0,a.kt)("h3",{id:"\u8fde\u7ebfedge"},"\u8fde\u7ebf\uff08Edge\uff09"),(0,a.kt)("p",null,"\u6839\u636e\u5b9a\u4e49\uff0c\u8fb9\u662f\u4e24\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u8fde\u63a5\uff0c\u5177\u6709\u4ee5\u4e0b\u5173\u952e\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u552f\u4e00\u8eab\u4efd"),(0,a.kt)("li",{parentName:"ul"},"\u6e90\u8282\u70b9ID"),(0,a.kt)("li",{parentName:"ul"},"Source handle ID\uff0c\u6e90\u8282\u70b9\u8f93\u51fa\u7aef\u53e3\u7684ID\u3002 \u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u6700\u65b0\u7684"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u8282\u70b9ID"),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7c7b\u578b\uff0c\u4ee5\u4e0b\u4e4b\u4e00\uff1aLine\u3001Bezier\u3001Step"),(0,a.kt)("li",{parentName:"ul"},"Animated\uff0c\u8fb9\u7f18\u662f\u5426\u52a8\u753b\uff0c\u9ed8\u8ba4\u4e3afalse")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u548creact-flow\u4e2d\u7684\u5b9a\u4e49\u57fa\u672c\u4e00\u81f4\u3002 \u5f53\u6211\u4eec\u5bf9\u6b64\u6709\u66f4\u591a\u60f3\u6cd5\u65f6\uff0c\u6211\u4eec\u5c06\u6269\u5c55\u6587\u6863\u3002"),(0,a.kt)("h3",{id:"\u5de5\u4f5c\u6d41"},"\u5de5\u4f5c\u6d41"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u5de5\u4f5c\u6d41\u7531\u82e5\u5e72\u8282\u70b9\u548c\u8fde\u7ebf\u7ec4\u6210\uff0c\u5e76\u5305\u542b\u76f8\u5e94\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u6267\u884c\u5b9e\u4f8b"},"\u6267\u884c\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u5de5\u4f5c\u6d41\u5728\u5f00\u59cb\u6267\u884c\u540e\uff0c\u5c06\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u6d41\u5b9e\u4f8b\u3002 \u5de5\u4f5c\u6d41\u5b9e\u4f8b\u662f\u5de5\u4f5c\u6d41\u7684\u8fd0\u884c\u65f6\u8868\u793a\uff0c\u4f1a\u5305\u542b\u4ee5\u4e0b\u5173\u952e\u6570\u636e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5de5\u4f5c\u6d41\u7ea7\u522b\u7684\u5b9e\u4f8b\u4e0a\u4e0b\u6587\u6570\u636e\uff08Context\uff09\uff0c\u4f8b\u5982\u5de5\u4f5c\u6d41\u5b9e\u4f8b\u7684\u6267\u884c\u65f6\u95f4\uff0c\u5bf9\u5e94\u7684\u5de5\u4f5c\u6d41\u6570\u636e\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u4e2a\u8282\u70b9\u7684\u5f53\u524d\u8fd0\u884c\u72b6\u6001\uff0c\u5982\uff1a\u5c31\u7eea\u3001\u8fd0\u884c\u4e2d\u3001\u5b8c\u6210\u3001\u51fa\u9519\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8282\u70b9\u6267\u884c\u7684\u4e0a\u4e0b\u6587\u6570\u636e\uff0c\u5373\u6bcf\u4e00\u4e2a\u8282\u70b9\u7684\u8f93\u5165\u8f93\u51fa\u4fe1\u606f\uff0c\u5c06\u7f13\u5b58\u5230\u5bf9\u5e94\u7684\u7aef\u53e3\u3002")),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u9879\u76ee\u5efa\u7acb\u5728 react-flow \u4e4b\u4e0a\uff0creact-flow \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u57fa\u4e8e\u8282\u70b9\u7684\u7f16\u8f91\u5668\u548c\u56fe\u8868\u7684 React \u5e93\u3002 \u6240\u4ee5\u6211\u4eec\u4ece\u4e2d\u501f\u9274\u4e86\u5f88\u591a\u57fa\u672c\u6982\u5ff5\u6765\u7b80\u5316\u6211\u4eec\u7684\u7cfb\u7edf\u8bbe\u8ba1\u548c\u5b9e\u73b0\uff0c\u6bd4\u5982\u6d41\u3001\u8282\u70b9\u3001\u8fb9\u7f18\u7b49\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/spaces/Logspace/LangFlow"},"https://huggingface.co/spaces/Logspace/LangFlow")),(0,a.kt)("li",{parentName:"ul"},"llmfarm.com")))}c.isMDXComponent=!0}}]);