webpackJsonp([40],{"7hN9":function(t,a,n){"use strict";(function(t){a.a={name:"allgongzuo",data:function(){return{navboo:!1,navtext:"人员分类",uname:"",navid:"",bottomone:[{text:"社区网格员",id:4},{text:"环卫工作者",id:5},{text:"综合执法队",id:6},{text:"城管中心",id:7},{text:"街办管理员",id:8}],mydata:[]}},mounted:function(){this.myajax()},methods:{myajax:function(){var a=this,n={cuserName:a.uname,cuserRole:a.navid};""==a.uname&&delete n.cuserName,""==a.navid&&delete n.cuserRole,t.ajax({type:"get",url:a.service+"/queryAllNamesWorkerHW",dataType:"json",data:n,success:function(t){console.log(t),a.mydata=t.data}})},opennew:function(t,a){this.$store.state.windexid=a,this.$router.push({name:t})},navshow:function(t,a){this.navboo=!this.navboo,this.navtext=t,this.navid=a},back:function(){this.$router.back()}},computed:{tfoot:function(){return this.$store.state.tfoot},service:function(){return this.$store.state.service},windexid:function(){return this.$store.state.windexid}},components:{BootomNav:function(t){return n.e(51).then(function(){var a=[n("cBse")];t.apply(null,a)}.bind(this)).catch(n.oe)}}}}).call(a,n("7t+N"))},Ai0z:function(t,a){},g0Nm:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7hN9"),s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"csearch",attrs:{id:"wrapper"}},[e("div",{attrs:{id:"head"}},[e("span",{on:{click:t.back}},[e("img",{attrs:{src:n("FnU6")}})]),t._v(" "),e("div",[t._v("美丽南钢")]),t._v(" "),e("span")]),t._v(" "),e("div",{staticStyle:{height:"calc(100% - .8rem)"},attrs:{id:"main"}},[e("div",{staticClass:"csearch-top"},[e("div",{staticClass:"csearch-inner"},[e("div",{staticClass:"csearch-group",on:{click:t.navshow}},[e("span",[t._v("\n    \t\t\t\t\t\t"+t._s(t.navtext)+"\n    \t\t\t\t\t")]),t._v(" "),e("img",{attrs:{src:n("x4uO")}})]),t._v(" "),e("div",{staticClass:"csearch-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.uname,expression:"uname"}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:t.uname},on:{input:function(a){a.target.composing||(t.uname=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"go-search flexc",on:{click:t.myajax}},[t._v("\n\t\t\t\t\t\t查询\n\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"csearch-main"},[t._l(t.mydata,function(a){return e("div",{staticClass:"group",on:{click:function(n){t.opennew("gongzuolist",a.cuserId)}}},[e("div",{staticClass:"circle"}),t._v(" "),e("div",{staticClass:"name"},[t._v("\n\t\t\t\t\t\t"+t._s(a.cuserName)+"\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"upnum"}),t._v(" "),e("div",{staticClass:"oknum"}),t._v(" "),e("img",{staticStyle:{"margin-right":".15rem"},attrs:{src:n("Igx7")}})])}),t._v(" "),0==t.mydata.length?e("p",[t._v("\n\t\t\t\t\t暂无数据\n\t\t\t\t")]):t._e()],2)]),t._v(" "),e("transition",{attrs:{name:"nav"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.navboo,expression:"navboo"}],staticClass:"bottom-nav"},[e("div",{staticClass:"nav-group"},[t._l(t.bottomone,function(a,n){return e("div",{staticClass:"sub-nav"},[e("span",{on:{click:function(n){t.navshow(a.text,a.id)}}},[t._v(t._s(a.text))])])}),t._v(" "),e("div",{staticClass:"sub-nav clear",on:{click:function(a){t.navshow("分类")}}},[t._v("\n\t\t\t\t\t\t取消\n\t\t\t\t\t")])],2)])])],1)},staticRenderFns:[]};var i=function(t){n("Ai0z")},c=n("VU/8")(e.a,s,!1,i,null,null);a.default=c.exports}});
//# sourceMappingURL=40.10a7ebe204607c7ca127.js.map