webpackJsonp([15],{"6dbh":function(t,e){},GBJd:function(t,e,i){"use strict";(function(t){e.a={name:"yselect",data:function(){return{starttime:"",endtime:"",startshow:!1,timety:0,alertboo:!1,uploadtarget:"",navboo:!1,navtext:"分类",mydata:[],cuserCode:"",pageNum:0,pageSize:10,list:[],size:0}},components:{THead:function(t){return i.e(57).then(function(){var e=[i("Kd8A")];t.apply(null,e)}.bind(this)).catch(i.oe)},TFoot:function(t){return i.e(1).then(function(){var e=[i("Fvpd")];t.apply(null,e)}.bind(this)).catch(i.oe)},BootomNav:function(t){return i.e(51).then(function(){var e=[i("cBse")];t.apply(null,e)}.bind(this)).catch(i.oe)}},mounted:function(){this.$store.state.tfoot=2,this.myajax(0)},computed:{service:function(){return this.$store.state.service},uuid:function(){return this.$store.state.uuid}},methods:{opennew:function(t,e){this.$store.state.windexid=e,this.$router.push({name:t})},myajax:function(e){this.pageNum++;var i=this;function a(){plus.nativeUI.showWaiting("数据加载中...");var a={cuserCode:i.uuid,cfileResult:e,createTime1:i.starttime,handingTime1:i.endtime,pageNum:i.pageNum,pageSize:i.pageSize};""==i.starttime&&delete a.createTime1,""==i.endtime&&delete a.handingTime1,t.ajax({type:"post",url:i.service+"/queryByCfilePojo",dataType:"json",data:a,success:function(t){console.log(t),i.size=t.data.pages;for(var e=0;e<t.data.list.length;e++)i.list.push(t.data.list[e]);function a(){plus.nativeUI.closeWaiting()}console.log(i.list),window.plus?a():document.addEventListener("plusready",a,!1)},error:function(t){console.log(t)}})}window.plus?a():document.addEventListener("plusready",a,!1)},navshow:function(t){this.navboo=!this.navboo,this.navtext=t},toswiper:function(t){this.swiperindex=t,this.swiper.slideTo(t,1e3,!1),0==t?this.myajax(2):this.myajax(0)},timeshow:function(t){var e=this;plus.nativeUI.pickDate(function(i){var a=i.date;0==t?e.starttime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate():e.endtime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},function(t){console.log("未选择日期："+t.message)})},alerttab:function(){this.alertboo=!this.alertboo}}}}).call(e,i("7t+N"))},J5d2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("GBJd"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tselect",attrs:{id:"wrapper"}},[a("transition",{attrs:{name:"alert"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertboo,expression:"alertboo"}],staticClass:"alert",on:{click:t.alerttab}},[a("div",{staticClass:"alert-inner"},[a("div",{staticClass:"alert-text"},[t._v("\n\t\t\t\t\t至少输入开始时间\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"alert-setting"},[a("div",{staticClass:"setting-group"},[t._v("\n\t\t\t\t\t\t确定\n\t\t\t\t\t")])])])])]),t._v(" "),a("t-head"),t._v(" "),a("div",{attrs:{id:"main"}},[a("div",{staticClass:"time-box"},[a("div",{staticClass:"box",on:{click:function(e){t.timeshow(0)}}},[t._v("\n\t\t\t\t"+t._s(""==t.starttime?"开始时间":t.starttime)+"\n\t\t\t\t"),a("img",{attrs:{src:i("9YEA")}})]),t._v(" "),a("span",{staticClass:"hr"}),t._v(" "),a("div",{staticClass:"box",on:{click:function(e){t.timeshow(1)}}},[t._v("\n\t\t\t\t"+t._s(""==t.endtime?"结束时间":t.endtime)+"\n\t\t\t\t"),a("img",{attrs:{src:i("9YEA")}})]),t._v(" "),a("div",{staticClass:"box-go",on:{click:function(e){t.myajax(0)}}},[a("img",{attrs:{src:i("i0iQ")}}),t._v(" 搜索\n\t\t\t")])]),t._v(" "),t._l(t.list,function(e){return a("div",{staticClass:"select-group",on:{click:function(i){t.opennew("changedetail",e.cfileId)}}},[a("div",{staticClass:"group-inner"},[a("div",{staticClass:"group-title"},[t._v("\n\t\t\t\t\t"+t._s(e.createTime1)+" "+t._s(e.cmultipleCommunitiesName)+"  "+t._s(e.cgridName)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"img-box"},[a("div",{staticClass:"img-group",staticStyle:{width:"100%"}},[a("div",{staticClass:"myimg-box"},[a("img",{attrs:{src:t._f("myimg")(e.cfileDealPrevImg1)}})])])])])])}),t._v(" "),t.pageNum<t.size?a("div",{staticClass:"more",on:{click:function(e){t.myajax()}}},[t._v("点击加载更多~")]):t._e()],2),t._v(" "),a("transition",{attrs:{name:"nav"}},[a("bootom-nav",{directives:[{name:"show",rawName:"v-show",value:t.navboo,expression:"navboo"}],on:{navshow:t.navshow}})],1),t._v(" "),a("t-foot")],1)},staticRenderFns:[]};var n=function(t){i("6dbh")},o=i("VU/8")(a.a,s,!1,n,null,null);e.default=o.exports}});
//# sourceMappingURL=15.f96db24410dbf07b9f3b.js.map