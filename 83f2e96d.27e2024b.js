(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),r=(n(0),n(169)),c={id:"add-page",title:"How to create a new Page?",sidebar_label:"Create Page"},s={id:"version-3.0/commands/add-page",title:"How to create a new Page?",description:"The `page` is like a `component`, but we prefer to think that components don't need to know the application state directly, because the change of state should be responsability of the pages.",source:"@site/versioned_docs/version-3.0/commands/add-page.md",permalink:"/docs/commands/add-page",version:"3.0",sidebar_label:"Create Page",sidebar:"version-3.0/docs",previous:{title:"How to create a new Duck?",permalink:"/docs/commands/add-duck"},next:{title:"How to create a new Saga?",permalink:"/docs/commands/add-saga"}},i=[{value:"Usage command example",id:"usage-command-example",children:[]},{value:"Connecting the Page with Store",id:"connecting-the-page-with-store",children:[]}],p={rightToc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"page")," is like a ",Object(r.b)("inlineCode",{parentName:"p"},"component"),", but we prefer to think that components don't need to know the application state directly, because the change of state should be responsability of the pages."),Object(r.b)("p",null,"To create a new page, you need to stay at the root of the project and enter this command in your terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"neutron add:page <pageName>\n")),Object(r.b)("p",null,"You don't need to inform the ",Object(r.b)("inlineCode",{parentName:"p"},"technology")," because the CLI reads your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," to identify the project type. This is awesome, isn't it?"),Object(r.b)("h2",{id:"usage-command-example"},"Usage command example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"neutron add:page Tools\n")),Object(r.b)("p",null,"After the execution, this command will create a new folder in ",Object(r.b)("inlineCode",{parentName:"p"},"src/pages")," with two new files: ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," and ",Object(r.b)("inlineCode",{parentName:"p"},"styles.js"),"."),Object(r.b)("h4",{id:"example"},"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* #FILE: ./src/pages/Tools/index.js */\nimport React, { useState, useEffect } from 'react';\nimport { StyledContainer } from './styles';\n\nfunction Tools() {\n  const [message, setMessage] = useState('');\n\n  useEffect(() => {\n    setMessage('Tools page!');\n  }, []);\n\n  return (\n    <StyledContainer>\n      <h1>{message}</h1>\n    </StyledContainer>\n  );\n}\n\nexport default Tools;\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* #FILE: ./src/pages/Tools/styles.js */\nimport styled from 'styled-components';\n\nimport colors from '@/styles/colors';\n\nexport const StyledContainer = styled.div`\n  background-color: ${colors.background};\n  color: ${colors.primary};\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n`;\n")),Object(r.b)("h2",{id:"connecting-the-page-with-store"},"Connecting the Page with Store"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Consider using the ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector")," and ",Object(r.b)("inlineCode",{parentName:"p"},"useDispatch")," hooks.\nTo learn more, check ",Object(r.b)("a",{href:"https://react-redux.js.org/api/hooks",target:"_blank"},"React Redux - Hooks")," and skip next steps.")),Object(r.b)("p",null,"To connect the page with store, you should import these references on the ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\nimport ToolsActions from '@/store/ducks/tools'; // example\n")),Object(r.b)("p",null,"The next step is map the ",Object(r.b)("inlineCode",{parentName:"p"},"state")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dispatchs")," to properties of the page and replace ",Object(r.b)("inlineCode",{parentName:"p"},"export default Tools"),", just like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mapStateToProps = state => ({\n  tools: state.tools, // example\n});\n\nconst mapDispatchToProps = dispatch =>\n  bindActionCreators(ToolsActions, dispatch); // example\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps,\n)(Tools);\n")),Object(r.b)("p",null,"Now, you can use all properties mapped in your page:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Tools({ tools, getToolsRequest }) { // example\n  // ...\n}\n")))}l.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||r;return n?o.a.createElement(m,s({ref:t},p,{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);