webpackJsonp([38],{A0Cs:function(t,e,i){"use strict";(function(t){e.a={name:"allguiji",data:function(){return{navboo:!1,navtext:"人员分类",uname:"",navid:"",mydata:[],starttime:"开始时间",endtime:"结束时间"}},mounted:function(){this.myajax()},methods:{myajax:function(){var e=this,i={cuserId:e.windexid,createTime1:e.starttime,updataTime1:e.endtime};"开始时间"==e.starttime&&delete i.createTime1,"结束时间"==e.endtime&&delete i.updataTime1,t.ajax({type:"get",url:e.service+"/querAllCwork",dataType:"json",data:i,success:function(t){e.mydata=t.data}})},opennew:function(t,e,i){this.$store.state.searchid=e,this.$store.state.mapid=i,this.$router.push({name:t})},navshow:function(t,e){this.navboo=!this.navboo,this.navtext=t,this.navid=e},back:function(){this.$router.back()},timeshow:function(t){var e=this;plus.nativeUI.pickDate(function(i){var a=i.date;0==t?e.starttime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate():e.endtime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},function(t){console.log("未选择日期："+t.message)})}},computed:{tfoot:function(){return this.$store.state.tfoot},service:function(){return this.$store.state.service},windexid:function(){return this.$store.state.windexid}},components:{BootomNav:function(t){return i.e(51).then(function(){var e=[i("cBse")];t.apply(null,e)}.bind(this)).catch(i.oe)}}}}).call(e,i("7t+N"))},W0rB:function(t,e){},h4rc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("A0Cs"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"csearch",attrs:{id:"wrapper"}},[a("div",{attrs:{id:"head"}},[a("span",{on:{click:t.back}},[a("img",{attrs:{src:i("FnU6")}})]),t._v(" "),a("div",[t._v("美丽南钢")]),t._v(" "),a("span")]),t._v(" "),a("div",{staticStyle:{height:"calc(100% - .8rem)"},attrs:{id:"main"}},[a("div",{staticClass:"csearch-top",staticStyle:{"margin-bottom":"0"}},[a("div",{staticClass:"csearch-inner"},[a("div",{staticClass:"csearch-group",staticStyle:{width:"3.5rem"},on:{click:function(e){t.timeshow(0)}}},[a("span",[t._v("\n    \t\t\t\t\t\t"+t._s(t.starttime)+"\n    \t\t\t\t\t")]),t._v(" "),a("img",{attrs:{src:i("x4uO")}})]),t._v(" "),a("div",{staticClass:"csearch-group",staticStyle:{width:"3.5rem",margin:"0"},on:{click:function(e){t.timeshow(1)}}},[a("span",[t._v("\n    \t\t\t\t\t\t"+t._s(t.endtime)+"\n    \t\t\t\t\t")]),t._v(" "),a("img",{attrs:{src:i("x4uO")}})])])]),t._v(" "),a("div",{staticClass:"csearch-top",staticStyle:{"margin-bottom":"0"}},[a("div",{staticClass:"btn",staticStyle:{width:"calc(100% - .6rem)",height:".6rem","border-radius":".15rem",color:"white",background:"#1e81d2",display:"flex","align-items":"center","justify-content":"center","margin-left":".3rem"},on:{click:function(e){t.myajax()}}},[t._v("\n\t\t\t\t\t搜索\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"csearch-main"},[t._l(t.mydata,function(e,s){return null!=e.cworkTrajectory?a("div",{staticClass:"group",staticStyle:{position:"relative","z-index":"88"},on:{click:function(i){t.opennew("cdetail",e.cuserId,s)}}},[a("div",{staticClass:"circle"}),t._v(" "),a("div",{staticClass:"name",staticStyle:{width:"auto","font-weight":"bold","white-space":"nowrap"}},[t._v("\n\t\t\t\t\t\t"+t._s(e.createTime1)+"\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"upnum",staticStyle:{flex:"1"}}),t._v(" "),a("div",{staticClass:"oknum",staticStyle:{width:"4rem","text-align":"right"}}),t._v(" "),a("img",{staticStyle:{margin:"0 .15rem"},attrs:{src:i("Igx7")}})]):t._e()}),t._v(" "),a("p",{staticStyle:{position:"absolute",top:"2.7rem",left:"0",width:"100%"}},[t._v("\n\t\t\t\t\t该用户暂无轨迹\n\t\t\t\t")])],2)])])},staticRenderFns:[]};var n=function(t){i("W0rB")},c=i("VU/8")(a.a,s,!1,n,null,null);e.default=c.exports}});
//# sourceMappingURL=38.804505483647b2709d4b.js.map