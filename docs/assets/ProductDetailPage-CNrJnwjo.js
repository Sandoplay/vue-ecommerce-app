import{e as S,a7 as h,c as n,l as x,a8 as B,B as m,R as F,S as a,u as s,D as k,y as o,a6 as d,a1 as c,U as p,aa as y}from"./vue-CsJlAH0e.js";import{u as N}from"./products-BKFawb0D.js";import{u as R}from"./cart-CJEGNyfA.js";import{u as w}from"./favorites-D7N2Ia4P.js";import{q as D,V as f,a as T,m as I,e as v,f as $,g as A,_ as q}from"./index-BsPRUUIS.js";import"./vuetify-BpRWpd-r.js";const E={key:0},M={class:"text-h4 mb-4"},U={class:"text-h5 mb-4"},j={class:"mb-4"},z=S({__name:"ProductDetailPage",setup(G){const _=B(),i=N(),g=R(),l=w(),{currentProduct:t}=h(i),C=n(()=>{var e;return[{title:"Products",to:"/products"},{title:((e=t.value)==null?void 0:e.title)||"",disabled:!0}]}),u=n(()=>t.value?l.isFavorite(t.value.id):!1);x(async()=>{const e=Number(_.params.id);await i.fetchProduct(e)});const V=e=>{g.addToCart(e)},b=e=>{l.toggleFavorite(e)};return(e,r)=>(m(),F(A,null,{default:a(()=>[s(t)?(m(),k("div",E,[o(D,{items:C.value},null,8,["items"]),o($,null,{default:a(()=>[o(f,{cols:"12",md:"6"},{default:a(()=>[o(T,{class:"product-detail-image-container"},{default:a(()=>[o(I,{src:s(t).image,height:"400",cover:!1,contain:!0,class:"bg-white"},null,8,["src"])]),_:1})]),_:1}),o(f,{cols:"12",md:"6"},{default:a(()=>[d("h1",M,c(s(t).title),1),d("div",U,"$"+c(s(t).price),1),d("p",j,c(s(t).description),1),o(v,{color:"primary",class:"mr-2",onClick:r[0]||(r[0]=P=>V(s(t)))},{default:a(()=>r[2]||(r[2]=[p(" Add to Cart ")])),_:1}),o(v,{color:u.value?"red":void 0,variant:"outlined",onClick:r[1]||(r[1]=P=>b(s(t)))},{default:a(()=>[p(c(u.value?"Remove from Favorites":"Add to Favorites"),1)]),_:1},8,["color"])]),_:1})]),_:1})])):y("",!0)]),_:1}))}}),W=q(z,[["__scopeId","data-v-b5f9d32e"]]);export{W as default};
//# sourceMappingURL=ProductDetailPage-CNrJnwjo.js.map