import{_ as p,u as d,i,w as m,e as f,d as l,o as j}from"./entry-79d26098.mjs";import x from"./Products-aab8d821.mjs";import"./useGetMedia-98ad263f.mjs";const y={async setup(c,{expose:a}){a();let e,t;const r=d(),o=i(),{data:s,error:_}=([e,t]=m(()=>l("categories",()=>fetch(`${r.STORE_URL}/categories/${o.params.id}`).then(u=>u.json()))),e=await e,t(),e),n={config:r,route:o,data:s,error:_};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function g(c,a,e,t,r,o){const s=x;return j(),f(s,{products:t.data.products,error:t.error},null,8,["products","error"])}var b=p(y,[["render",g]]);export{b as default};
