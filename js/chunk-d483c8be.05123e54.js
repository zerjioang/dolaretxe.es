(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d483c8be"],{"74a1":function(t,a){},"83c3":function(t,a,n){},c74c:function(t,a,n){"use strict";var e=n("83c3");n.n(e).a},cab0:function(t,a,n){"use strict";n.r(a);var e={name:"component-matricula-cta",data:function(){return{layout:{matriculaFin:"2020-04-06"}}},computed:{fechaFin:function(){if(""==this.layout.matriculaFin)return"contacte para consultar plazo";try{return new Date(this.layout.matriculaFin).toDateString()}catch(t){return"contacte para consultar plazo"}}},methods:{onSubmitContact:function(t){t&&t.preventDefault();this.$router.push({name:"contact"})}},mixins:[n("74cf").a],created:function(){},mounted:function(){this.jQueryInit()}},c=(n("c74c"),n("2877")),i=n("74a1"),r=n.n(i),o=Object(c.a)(e,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("form",{ref:"formElement",staticClass:"request-form ftco-animate",attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.onSubmitContact(a)}}},[t._e(),n("h2",[t._v("Matrícula abierta")]),n("p",[t._v("Estas de enhorabuena!")]),n("p",{staticClass:"justified"},[t._v("El plazo de matriculación para este curso todavia esta abierto! Date prisa y contáctanos y te informaremos de las posibilidades y cómo reservar tu plaza.")]),n("p",{staticClass:"justified"},[t._v("\n    Finalización del plazo: "),n("strong",[t._v(t._s(t.fechaFin))])]),t._m(0)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn dolar-gradient-orangred py-3 px-4 btn-matricula",attrs:{type:"submit",value:"Contactar"}})])}],!1,null,"61864ab4",null);"function"==typeof r.a&&r()(o);a.default=o.exports}}]);