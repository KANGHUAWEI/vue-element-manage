(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{622:function(t,e,n){},623:function(t,e,n){},624:function(t,e,n){},625:function(t,e,n){},626:function(t,e,n){},627:function(t,e,n){},628:function(t,e,n){},629:function(t,e,n){},630:function(t,e,n){},631:function(t,e,n){},632:function(t,e,n){},750:function(t,e,n){"use strict";var i=n(622);n.n(i).a},751:function(t,e,n){"use strict";var i=n(623);n.n(i).a},752:function(t,e,n){"use strict";var i=n(624);n.n(i).a},753:function(t,e,n){"use strict";var i=n(625);n.n(i).a},754:function(t,e,n){"use strict";var i=n(626);n.n(i).a},755:function(t,e,n){"use strict";var i=n(627);n.n(i).a},756:function(t,e,n){"use strict";var i=n(628);n.n(i).a},757:function(t,e,n){"use strict";var i=n(629);n.n(i).a},758:function(t,e,n){"use strict";var i=n(630);n.n(i).a},759:function(t,e,n){"use strict";var i=n(631);n.n(i).a},760:function(t,e,n){"use strict";var i=n(632);n.n(i).a},852:function(t,e,n){"use strict";n.r(e);var i=n(42),a=n.n(i),s={data:function(){return{isFullScreen:!1}},methods:{handleFullScreen:function(){if(this.isFullScreen){var t=document,e=t.exitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;e&&e.call(t)}else{var n=document.documentElement,i=n.requestFullscreen||n.webkitRequestFullScreen||n.mozRequestFullScreen||n.msRequestFullscreen;i?i.call(n):this.$message({type:"warning",message:"您的浏览器不支持全屏浏览，请升级或更换浏览器！"})}this.isFullScreen=!this.isFullScreen}}},l=(n(750),n(51)),r=Object(l.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("el-tooltip",{attrs:{effect:"dark",content:this.isFullScreen?"取消全屏":"全屏浏览",placement:"bottom"}},[e("i",{staticClass:"el-icon-rank",on:{click:this.handleFullScreen}})])},[],!1,null,"84ee2826",null).exports,o=n(253),c=n(74),u=n(251),h={components:{FullScreen:r,ThemeSetting:o.a},data:function(){return{avatar:""}},computed:{sideCollapse:function(){return this.$store.getters.sideCollapse}},created:function(){this.getAvatar()},methods:{handleCollapse:function(){this.$store.commit("SET_SIDE_COLLAPSE",!this.sideCollapse)},handleCommand:function(t){var e=this;"logout"===t&&this.$store.dispatch("logout").then(function(){Object(u.b)(),sessionStorage.clear(),e.$router.replace("/account/login")})},getAvatar:function(){var t=this;c.a.account.getUserInfo({username:sessionStorage.getItem("userId")}).then(function(e){t.avatar=e.data.userInfo.avatar})}}},f=(n(751),Object(l.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-bar"},[n("i",{staticClass:"header-bar__collapse",class:t.sideCollapse?"el-icon-s-fold":"el-icon-s-unfold",on:{click:t.handleCollapse}}),t._v(" "),n("div",{staticClass:"header-bar__menu"},[n("full-screen"),t._v(" "),n("theme-setting"),t._v(" "),n("el-dropdown",{on:{command:t.handleCommand}},[n("img",{staticClass:"avatar",attrs:{src:t.avatar,alt:""}}),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/mine"}},[n("el-dropdown-item",[t._v("个人中心")])],1),t._v(" "),n("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1)],1)])},[],!1,null,"0fa1057e",null).exports),d={computed:{sideCollapse:function(){return this.$store.getters.sideCollapse}}},m=(n(752),Object(l.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"side-bar-logo",class:{collapse:this.sideCollapse}},[e("router-link",{staticClass:"link",attrs:{to:"/"}},[e("svg-icon",{attrs:{"icon-name":"logo"}}),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!this.sideCollapse,expression:"!sideCollapse"}]},[this._v("后台管理系统")])],1)],1)},[],!1,null,"b4d59ba2",null).exports),p={name:"MenuItem",props:{config:{required:!0,default:{}}}},v=(n(753),n(754),{components:{Logo:m,MenuItem:Object(l.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-item"},[t.config.children?n("el-submenu",{attrs:{index:t.config.path}},[n("template",{slot:"title"},[t.config.icon?n("svg-icon",{attrs:{"icon-name":t.config.icon,"icon-class":"menu-icon"}}):t._e(),t._v(" "),n("span",[t._v(t._s(t.config.title))])],1),t._v(" "),t._l(t.config.children,function(t){return n("menu-item",{key:t.path,attrs:{config:t}})})],2):n("el-menu-item",{attrs:{index:t.config.path}},[t.config.icon?n("svg-icon",{attrs:{"icon-name":t.config.icon,"icon-class":"menu-icon"}}):t._e(),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.config.title))])],1)],1)},[],!1,null,"982f9dba",null).exports},data:function(){return{menuRouteMap:[],menuList:[]}},computed:{sideCollapse:function(){return this.$store.getters.sideCollapse},routeMap:function(){return this.$store.getters.routeMap},activePath:function(){var t=this.$route,e=t.meta,n=t.path;return e.activePath?e.activePath:n}},created:function(){this.menuRouteMap=this.getMenuRouteMap(this.routeMap),this.menuList=this.getMenu(this.menuRouteMap)},methods:{getMenuRouteMap:function(t){var e=this;return t.filter(function(t){return!t.meta.hiddenInMenu&&(!t.children||(t.children=e.getMenuRouteMap(t.children),0!==t.children.length))})},getMenuItem:function(t){var e=this;return t.children&&1!==t.children.length?{title:t.meta.title,icon:t.meta.icon,path:t.path,children:t.children.map(function(t){return e.getMenuItem(t)})}:{title:t.meta.title,icon:t.meta.icon,path:t.path}},getMenu:function(t){var e=this;return this.menuRouteMap.map(function(t){return e.getMenuItem(t)})}}}),g=(n(755),n(756),Object(l.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("logo"),this._v(" "),e("div",{staticClass:"nav-menu"},[e("el-scrollbar",[e("el-menu",{attrs:{"default-active":this.activePath,collapse:this.sideCollapse,"unique-opened":"",router:"","background-color":"#545c64","text-color":"#fff"}},this._l(this.menuList,function(t){return e("menu-item",{key:t.path,attrs:{config:t}})}),1)],1)],1)],1)},[],!1,null,"1564d1c5",null).exports),_={name:"ScrollBar",data:function(){return{left:0}},computed:{scrollWrapper:function(){return this.$refs.scrollContainer.$refs.wrap}},methods:{handleScroll:function(t){var e=t.wheelDelta||40*-t.deltaY,n=this.scrollWrapper;n.scrollLeft=n.scrollLeft+e/4},moveToTarget:function(t){var e=this.$refs.scrollContainer.$el.offsetWidth,n=this.scrollWrapper,i=this.$parent.$refs.tag,a=null,s=null;if(i.length>0&&(a=i[0],s=i[i.length-1]),a===t)n.scrollLeft=0;else if(s===t)n.scrollLeft=n.scrollWidth-e;else{var l=i.findIndex(function(e){return e===t}),r=i[l-1],o=i[l+1],c=o.$el.offsetLeft+o.$el.offsetWidth+4,u=r.$el.offsetLeft-4;c>n.scrollLeft+e?n.scrollLeft=c-e:u<n.scrollLeft&&(n.scrollLeft=u)}}}},b=(n(757),Object(l.a)(_,function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-scrollbar",{ref:"scrollContainer",staticClass:"scroll-container",attrs:{vertical:!1},nativeOn:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[t._t("default")],2)},[],!1,null,"6c8345a0",null).exports),C=n(709),$={components:{ScrollBar:b},data:function(){return{tagList:[]}},watch:{$route:function(t){this.addTag(t)},tagList:function(){var t=this.tagList.filter(function(t){return!t.noCache}).map(function(t){return t.name});this.$store.commit("SET_CACHE_PAGES",t)}},created:function(){var t=this;this.addTag(this.$route),C.a.$on("closeTag",function(e){var n=t.tagList.findIndex(function(t){return t.path===e});t.tagList.splice(n,1)})},methods:{isTagActive:function(t){return this.$route.path===t},addTag:function(t){!this.tagList.some(function(e){return e.path===t.path})&&t.name&&this.tagList.push({title:t.meta.title,path:t.path,name:t.name,noCache:t.meta.noCache})},handleClose:function(t){if(1===this.tagList.length&&"/dashboard"===this.tagList[0].path)return!1;var e=this.tagList.splice(t,1)[0],n=this.tagList[t]?this.tagList[t]:this.tagList[t-1];n?e.path==this.$route.path&&this.$router.push(n.path):this.$router.push("/dashboard")}}},S=(n(758),Object(l.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-bar",[n("div",{staticClass:"nav-tag"},t._l(t.tagList,function(e,i){return n("div",{key:e.path,staticClass:"nav-tag__item",class:{active:t.isTagActive(e.path)},on:{dblclick:function(e){return t.handleClose(i)}}},[n("router-link",{staticClass:"link",attrs:{to:e.path}},[t._v(t._s(e.title))]),t._v(" "),n("i",{staticClass:"el-icon-circle-close close",on:{click:function(e){return t.handleClose(i)}}})],1)}),0)])},[],!1,null,"17692880",null).exports),w=n(717),L={data:function(){return{size:this.$store.getters.size,sizeSelectKey:0}},watch:{size:function(t){this.$ELEMENT.size=t,this.sizeSelectKey++,this.$store.commit("SET_SIZE",t),this.$store.commit("SET_CACHE_PAGES",[]),this.$router.replace("/reload")}}},E=Object(l.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",{key:t.sizeSelectKey,model:{value:t.size,callback:function(e){t.size=e},expression:"size"}},[n("el-option",{attrs:{label:"big",value:"default"}}),t._v(" "),n("el-option",{attrs:{label:"medium",value:"medium"}}),t._v(" "),n("el-option",{attrs:{label:"small",value:"small"}}),t._v(" "),n("el-option",{attrs:{label:"mini",value:"mini"}})],1)},[],!1,null,null,null).exports,k={components:{StyleSetting:w.a,SizeSetting:E},data:function(){return{drawer:!0,tagVisible:this.$store.getters.tagVisible}},mounted:function(){this.drawer=!1},watch:{tagVisible:function(t){this.$store.commit("SET_TAG_VISIBLE",t)}}},x=(n(759),Object(l.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting"},[n("i",{staticClass:"el-icon-setting setting__icon",on:{click:function(e){t.drawer=!0}}}),t._v(" "),n("el-drawer",{attrs:{title:"系统界面设置",visible:t.drawer,size:"300px"},on:{"update:visible":function(e){t.drawer=e}}},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"导航标签："}},[n("el-switch",{model:{value:t.tagVisible,callback:function(e){t.tagVisible=e},expression:"tagVisible"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"系统风格："}},[n("style-setting")],1),t._v(" "),n("el-form-item",{attrs:{label:"元素大小："}},[n("size-setting")],1)],1)],1)],1)},[],!1,null,"3fa1e9eb",null).exports),M=n(180),T={components:{HeaderBar:f,SideBar:g,NavTag:S,Setting:x},computed:a()({},Object(M.b)(["tagVisible","cachePages"]),{key:function(){return this.$route.path}})},y=(n(760),Object(l.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-layout"},[n("side-bar"),t._v(" "),n("div",{staticClass:"inner-layout__main"},[n("header-bar"),t._v(" "),n("nav-tag",{directives:[{name:"show",rawName:"v-show",value:t.tagVisible,expression:"tagVisible"}]}),t._v(" "),n("div",{staticClass:"inner-layout__page",class:{"with-navtag":t.tagVisible}},[n("transition",{attrs:{name:"page",mode:"out-in"}},[n("keep-alive",{attrs:{include:t.cachePages}},[n("router-view",{key:t.key})],1)],1)],1)],1),t._v(" "),n("setting")],1)},[],!1,null,"47dc2640",null).exports);n.d(e,"default",function(){return y})}}]);