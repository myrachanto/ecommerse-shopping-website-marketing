(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{259:function(t,e,r){t.exports=r.p+"img/chantosweb_developers.f85d6cc.jpg"},268:function(t,e,r){var n=r(4);e.f=n},272:function(t,e,r){"use strict";var n=r(2),o=r(3),c=r(31),d=r(26),l=r(10),f=r(114),v=r(177),m=r(5),w=r(9),h=r(80),x=r(11),y=r(6),k=r(24),S=r(29),_=r(56),j=r(44),C=r(57),O=r(58),P=r(76),N=r(273),$=r(113),E=r(36),X=r(20),Y=r(77),M=r(23),F=r(15),J=r(111),A=r(78),D=r(79),I=r(112),V=r(4),z=r(268),T=r(274),Q=r(46),W=r(30),B=r(45).forEach,G=A("hidden"),H=V("toPrimitive"),K=W.set,L=W.getterFor("Symbol"),R=Object.prototype,U=o.Symbol,Z=c("JSON","stringify"),tt=E.f,et=X.f,at=N.f,nt=Y.f,ot=J("symbols"),it=J("op-symbols"),st=J("string-to-symbol-registry"),ct=J("symbol-to-string-registry"),lt=J("wks"),ft=o.QObject,ut=!ft||!ft.prototype||!ft.prototype.findChild,pt=l&&m((function(){return 7!=C(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(R,e);n&&delete R[e],et(t,e,r),n&&t!==R&&et(R,e,n)}:et,vt=function(t,e){var symbol=ot[t]=C(U.prototype);return K(symbol,{type:"Symbol",tag:t,description:e}),l||(symbol.description=e),symbol},mt=v?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},bt=function(t,e,r){t===R&&bt(it,e,r),y(t);var n=_(e,!0);return y(r),w(ot,n)?(r.enumerable?(w(t,G)&&t[G][n]&&(t[G][n]=!1),r=C(r,{enumerable:j(0,!1)})):(w(t,G)||et(t,G,j(1,{})),t[G][n]=!0),pt(t,n,r)):et(t,n,r)},wt=function(t,e){y(t);var r=S(e),n=O(r).concat(yt(r));return B(n,(function(e){l&&!gt.call(r,e)||bt(t,e,r[e])})),t},gt=function(t){var e=_(t,!0),r=nt.call(this,e);return!(this===R&&w(ot,e)&&!w(it,e))&&(!(r||!w(this,e)||!w(ot,e)||w(this,G)&&this[G][e])||r)},ht=function(t,e){var r=S(t),n=_(e,!0);if(r!==R||!w(ot,n)||w(it,n)){var o=tt(r,n);return!o||!w(ot,n)||w(r,G)&&r[G][n]||(o.enumerable=!0),o}},xt=function(t){var e=at(S(t)),r=[];return B(e,(function(t){w(ot,t)||w(D,t)||r.push(t)})),r},yt=function(t){var e=t===R,r=at(e?it:S(t)),n=[];return B(r,(function(t){!w(ot,t)||e&&!w(R,t)||n.push(ot[t])})),n};(f||(F((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),r=function(t){this===R&&r.call(it,t),w(this,G)&&w(this[G],e)&&(this[G][e]=!1),pt(this,e,j(1,t))};return l&&ut&&pt(R,e,{configurable:!0,set:r}),vt(e,t)}).prototype,"toString",(function(){return L(this).tag})),F(U,"withoutSetter",(function(t){return vt(I(t),t)})),Y.f=gt,X.f=bt,E.f=ht,P.f=N.f=xt,$.f=yt,z.f=function(t){return vt(V(t),t)},l&&(et(U.prototype,"description",{configurable:!0,get:function(){return L(this).description}}),d||F(R,"propertyIsEnumerable",gt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:U}),B(O(lt),(function(t){T(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(w(st,e))return st[e];var symbol=U(e);return st[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!mt(t))throw TypeError(t+" is not a symbol");if(w(ct,t))return ct[t]},useSetter:function(){ut=!0},useSimple:function(){ut=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!l},{create:function(t,e){return void 0===e?C(t):wt(C(t),e)},defineProperty:bt,defineProperties:wt,getOwnPropertyDescriptor:ht}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:xt,getOwnPropertySymbols:yt}),n({target:"Object",stat:!0,forced:m((function(){$.f(1)}))},{getOwnPropertySymbols:function(t){return $.f(k(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!f||m((function(){var symbol=U();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(n=e,(x(e)||void 0!==t)&&!mt(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!mt(e))return e}),o[1]=e,Z.apply(null,o)}});U.prototype[H]||M(U.prototype,H,U.prototype.valueOf),Q(U,"Symbol"),D[G]=!0},273:function(t,e,r){var n=r(29),o=r(76).f,c={}.toString,d="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return d&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return d.slice()}}(t):o(n(t))}},274:function(t,e,r){var path=r(176),n=r(9),o=r(268),c=r(20).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:o.f(t)})}},275:function(t,e,r){"use strict";var n=r(2),o=r(10),c=r(3),d=r(9),l=r(11),f=r(20).f,v=r(175),m=c.Symbol;if(o&&"function"==typeof m&&(!("description"in m.prototype)||void 0!==m().description)){var w={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new m(t):void 0===t?m():m(t);return""===t&&(w[e]=!0),e};v(h,m);var x=h.prototype=m.prototype;x.constructor=h;var y=x.toString,k="Symbol(test)"==String(m("test")),S=/^Symbol\((.*)\)[^)]+$/;f(x,"description",{configurable:!0,get:function(){var symbol=l(this)?this.valueOf():this,t=y.call(symbol);if(d(w,symbol))return"";var desc=k?t.slice(7,-1):t.replace(S,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:h})}},285:function(t,e,r){var content=r(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("47318aa4",content,!0,{sourceMap:!1})},286:function(t,e,r){var content=r(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("0d8bc705",content,!0,{sourceMap:!1})},302:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative"},[e("div",{staticClass:"absolute bottom-0 right-0 text-sm text-gray-700"},[e("a",{attrs:{href:"#"}},[this._v("AllInsok0")])]),this._v(" "),e("img",{staticClass:"w-full h-full object-cover",attrs:{src:r(259),alt:"school management web application"}})])}],o=(r(272),r(275),r(59),r(34)),c={props:{add:Function},components:{ValidationProvider:o.a},data:function(){return{form:{name:"",description:""}}},methods:{create:function(){var t=new FormData;t.append("name",this.form.name),t.append("description",this.form.description),this.add(t)}}},d=(r(324),r(8)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-main h-full bg-gray-300 rounded-lg overflow-hidden"},[r("div",{staticClass:"flexing"},[r("div",{staticClass:"griding"},[r("div",{staticClass:"px-5 lg:px-20 order-last"},[r("h1",{staticClass:"text-gary-700 text-3xl text-center my-5"},[t._v("Create ")]),t._v(" "),r("form",{staticClass:"text-gray-600",on:{submit:function(e){return e.preventDefault(),t.create(e)}}},[r("div",{staticClass:"flex flex-col max my-3"},[r("ValidationProvider",{attrs:{name:"Major category name",rules:"required|min:3"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner",attrs:{type:"text",placeholder:"Major category name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length>0"}],staticClass:"is-invalid"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"flex flex-col max my-3"},[r("ValidationProvider",{attrs:{name:"description",rules:"required|min:3"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"placeholder-black border rounded w-full py-2 px-4 outline-none focus:shadow-inner",attrs:{placeholder:"descitpion"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}}),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:n.length>0,expression:"errors.length>0"}],staticClass:"is-invalid"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"my-3 flex justify-between items-center"},[r("button",{staticClass:"btn1",on:{click:t.create}},[t._v("Create ")])]),t._v(" "),r("div",{staticClass:"my-3 text-center text-sm"},[t._v("\n            ©2021 AllInsok0. All rights reserved\n          ")])])]),t._v(" "),t._m(0)])])])}),n,!1,null,"be5194b4",null);e.default=component.exports},324:function(t,e,r){"use strict";r(285)},325:function(t,e,r){(e=r(18)(!1)).push([t.i,".btn1[data-v-be5194b4]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:9999px;font-weight:700;margin:1.5rem auto}.btn1[data-v-be5194b4]:focus{outline:2px solid transparent;outline-offset:2px}.btn1[data-v-be5194b4]{padding:1rem 2rem}.btn1[data-v-be5194b4],.btn1[data-v-be5194b4]:focus{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.btn1[data-v-be5194b4]{color:rgba(255,255,255,var(--tw-text-opacity));--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.btn1[data-v-be5194b4]:hover{text-decoration:underline}.btn1[data-v-be5194b4]{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.btn1[data-v-be5194b4]:hover{--tw-scale-x:1.05;--tw-scale-y:1.05}.btn1[data-v-be5194b4]{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}@media (min-width:1024px){.btn1[data-v-be5194b4]{margin-left:0;margin-right:0}}.flexing[data-v-be5194b4]{display:flex;align-items:center;justify-content:center}.griding[data-v-be5194b4]{width:100%}@media (min-width:640px){.griding[data-v-be5194b4]{max-width:640px}}@media (min-width:768px){.griding[data-v-be5194b4]{max-width:768px}}@media (min-width:1024px){.griding[data-v-be5194b4]{max-width:1024px}}@media (min-width:1280px){.griding[data-v-be5194b4]{max-width:1280px}}@media (min-width:1536px){.griding[data-v-be5194b4]{max-width:1536px}}.griding[data-v-be5194b4]{display:grid}@media (min-width:1024px){.griding[data-v-be5194b4]{grid-template-columns:repeat(2,minmax(0,1fr))}}.is-invalid[data-v-be5194b4]{border-radius:.5rem;--tw-text-opacity:1;color:rgba(185,28,28,var(--tw-text-opacity))}",""]),t.exports=e},326:function(t,e,r){"use strict";r(286)},327:function(t,e,r){(e=r(18)(!1)).push([t.i,".container[data-v-250cff63]{display:flex;align-items:center;justify-content:center;height:100%;margin-left:auto;margin-right:auto;text-align:center}.warp[data-v-250cff63]{width:100%}@media (min-width:640px){.warp[data-v-250cff63]{max-width:640px}}@media (min-width:768px){.warp[data-v-250cff63]{max-width:768px}}@media (min-width:1024px){.warp[data-v-250cff63]{max-width:1024px}}@media (min-width:1280px){.warp[data-v-250cff63]{max-width:1280px}}@media (min-width:1536px){.warp[data-v-250cff63]{max-width:1536px}}.warp[data-v-250cff63]{border-radius:.5rem;margin-top:2.5rem;overflow:hidden;padding:2.5rem;display:flex;align-items:center;justify-content:center;height:100%;margin-left:auto;margin-right:auto;text-align:center}.btn1[data-v-250cff63]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:9999px;font-weight:700;margin:1.5rem auto}.btn1[data-v-250cff63]:focus{outline:2px solid transparent;outline-offset:2px}.btn1[data-v-250cff63]{padding:1rem 2rem}.btn1[data-v-250cff63],.btn1[data-v-250cff63]:focus{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.btn1[data-v-250cff63]{color:rgba(255,255,255,var(--tw-text-opacity));--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.btn1[data-v-250cff63]:hover{text-decoration:underline}.btn1[data-v-250cff63]{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.btn1[data-v-250cff63]:hover{--tw-scale-x:1.05;--tw-scale-y:1.05}.btn1[data-v-250cff63]{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}@media (min-width:1024px){.btn1[data-v-250cff63]{margin-left:0;margin-right:0}}",""]),t.exports=e},372:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",components:{majorcategory:r(302).default},data:function(){return{}},methods:{add:function(t){var e=this;this.$axios.post("/majorcategory",t).then((function(t){console.log(t),e.$router.push("/")})).catch((function(t){console.log(t)}))}}},o=(r(326),r(8)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warp"},[e("majorcategory",{attrs:{add:this.add}})],1)}),[],!1,null,"250cff63",null);e.default=component.exports;installComponents(component,{Majorcategory:r(302).default})}}]);