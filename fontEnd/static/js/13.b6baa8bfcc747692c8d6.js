webpackJsonp([13],{lhuj:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),s=r("mvHQ"),o=r.n(s),c=r("exGp"),u=r.n(c),i=r("Dd8w"),p=r.n(i),l=r("Pfph"),h=(r("mtWM"),r("NYxO")),d={data:function(){return{}},mounted:function(){var e=this.GetRequest().code;this.getToken(e)},methods:p()({},Object(h.b)(["githubLogin"]),{GetRequest:function(){var e=location.search,t=new Object;if(-1!=e.indexOf("?"))for(var r=e.substr(1).split("&"),n=0;n<r.length;n++)t[r[n].split("=")[0]]=unescape(r[n].split("=")[1]);return t},getToken:function(e){var t=this;return u()(a.a.mark(function r(){var n,s,c;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l.a.getToken(e);case 3:n=r.sent,s=JSON.parse(o()(n.data)),c=JSON.parse(s).access_token,t.getUser(c),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}},r,t,[[0,9]])}))()},getUser:function(e){var t=this;return u()(a.a.mark(function r(){var n,s,c;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l.a.getUser(e);case 3:n=r.sent,s=JSON.parse(o()(n.data)),c=JSON.parse(s),t.githubLogin({name:c.login,password:c.node_id,headImg:c.avatar_url}).then(function(e){console.log(e),e?(console.log(t.$route),t.$route.query.redirect?t.$router.replace({path:t.$route.query.redirect}):t.$router.push({path:"/"})):t.$message.error({message:e.errorMsg})}),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}},r,t,[[0,9]])}))()}})},f={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{height:"100%","text-align":"center","margin-top":"20%","font-size":"23px"}},[this._v("\n    跳转中...请耐心等待\n")])},staticRenderFns:[]},g=r("VU/8")(d,f,!1,null,null,null);t.default=g.exports}});
//# sourceMappingURL=13.b6baa8bfcc747692c8d6.js.map