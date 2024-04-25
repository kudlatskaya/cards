import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{R as l}from"./index-Dl6G-zuu.js";var q={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=l.createContext&&l.createContext(q),$=["attr","size","title"];function R(e,r){if(e==null)return{};var t=A(e,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function A(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?O(Object(t),!0).forEach(function(n){K(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function K(e,r,t){return r=G(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function G(e){var r=H(e,"string");return typeof r=="symbol"?r:String(r)}function H(e,r){if(typeof e!="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function z(e){return e&&e.map((r,t)=>l.createElement(r.tag,b({key:t},r.attr),z(r.child)))}function M(e){return r=>l.createElement(V,g({attr:b({},e.attr)},r),z(e.child))}function V(e){var r=t=>{var{attr:n,size:a,title:i}=e,h=R(e,$),d=a||t.size||"1em",s;return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),l.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,h,{className:s,style:b(b({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return v!==void 0?l.createElement(v.Consumer,null,t=>r(t)):r(q)}function D(e){return M({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(e)}const J="_button_1492f_1",Q="_icon_1492f_19",U="_primary_1492f_25",X="_disabled_1492f_37",Y="_secondary_1492f_45",Z="_fullWidth_1492f_61",c={button:J,icon:Q,primary:U,disabled:X,secondary:Y,fullWidth:Z},F=e=>{const{as:r="button",children:t,className:n,disabled:a,fullWidth:i,icon:h,variant:d="primary",...s}=e;return o.jsxs(r,{className:`${c.button} ${c[d]} ${i?c.fullWidth:""} ${a?c.disabled:""} ${n}`,...s,children:[o.jsx("span",{className:c.icon,children:h}),t]})};F.__docgenInfo={description:"",methods:[],displayName:"Button",props:{as:{required:!1,tsType:{name:"T"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""}}};const te={argTypes:{title:{control:{type:"text"}},variant:{control:{type:"radio"},options:["primary","secondary","link"]}},component:F,tags:["autodocs"],title:"Components/Button"},u={args:{children:"Primary Button",disabled:!1,variant:"primary"}},m={args:{children:o.jsxs(o.Fragment,{children:[o.jsx(D,{className:c.icon})," Primary Button"]}),disabled:!1,variant:"primary"}},p={args:{children:o.jsxs(o.Fragment,{children:[o.jsx(D,{className:c.icon})," Button"]}),disabled:!1,variant:"secondary"}},f={args:{children:"Secondary Button",disabled:!1,variant:"secondary"}},y={args:{as:"a",children:"Link that looks like a button",variant:"primary"}};var j,_,P;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary'
  }
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var x,w,S;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <FiLogOut className={s.icon} /> Primary Button\r
            </>,
    disabled: false,
    variant: 'primary'
  }
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var N,k,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <FiLogOut className={s.icon} /> Button\r
            </>,
    disabled: false,
    variant: 'secondary'
  }
}`,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var B,E,C;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary'
  }
}`,...(C=(E=f.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var L,I,T;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary'
  }
}`,...(T=(I=y.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const ne=["Primary","PrimaryWithIcon","SecondaryWithIcon","Secondary","AsLink"];export{y as AsLink,u as Primary,m as PrimaryWithIcon,f as Secondary,p as SecondaryWithIcon,ne as __namedExportsOrder,te as default};
