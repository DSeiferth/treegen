(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,o,r){var content=r(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("7388ab72",content,!0,{sourceMap:!1})},132:function(t,o,r){var content=r(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("0243b3f5",content,!0,{sourceMap:!1})},223:function(t,o,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-pencil",title:"Draw Trees",to:"/"},{icon:"mdi-information",title:"About",to:"/about"},{icon:"mdi-link",title:"Links",to:"/links"}],miniVariant:!1,right:!1,rightDrawer:!1,title:"DownToProgramme"}}},e=(r(265),r(81)),c=r(111),l=r.n(c),v=r(327),d=r(334),m=r(328),f=r(224),_=r(329),h=r(330),w=r(159),V=r(160),x=r(106),k=r(161),D=r(57),P=r(331),C=r(333),y=r(332),A=r(221),component=Object(e.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:"",other:""},model:{value:t.drawer,callback:function(o){t.drawer=o},expression:"drawer"}},[r("v-list",t._l(t.items,(function(o,i){return r("v-list-item",{key:i,attrs:{to:o.to,router:"",exact:"",color:"orange"}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(o.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(o.title)}}),t._v(" "),r("v-list-item-subtitle",{domProps:{textContent:t._s(t.About)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(o){o.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(o){o.stopPropagation(),t.miniVariant=!t.miniVariant}}},[r("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(o){o.stopPropagation(),t.clipped=!t.clipped}}},[r("v-icon",[t._v("mdi-application")])],1),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(o){o.stopPropagation(),t.fixed=!t.fixed}}},[r("v-icon",[t._v("mdi-minus")])],1),t._v(" "),r("v-toolbar-title",[r("h2",[r("span",{staticClass:"special-color"},[t._v("D")]),t._v("own"),r("span",{staticClass:"special-color"},[t._v("T")]),t._v("o"),r("span",{staticClass:"special-color"},[t._v("P")]),t._v("rogramme")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(o){o.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[r("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(o){t.rightDrawer=o},expression:"rightDrawer"}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(o){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[r("a",{staticClass:"bottomlink",attrs:{href:"https://github.com/Down-To-Programme/treegen"}},[t._v("Find the repository!")]),t._v("     DownToProgramme © "+t._s((new Date).getFullYear())+" ")])])],1)}),[],!1,null,"0bdb273c",null);o.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:_.a,VFooter:h.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:D.a,VListItemSubtitle:D.b,VListItemTitle:D.c,VMain:P.a,VNavigationDrawer:C.a,VSpacer:y.a,VToolbarTitle:A.a})},234:function(t,o,r){r(235),t.exports=r(236)},259:function(t,o,r){"use strict";var n=r(130);r.n(n).a},260:function(t,o,r){(o=r(13)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=o},265:function(t,o,r){"use strict";var n=r(132);r.n(n).a},266:function(t,o,r){(o=r(13)(!1)).push([t.i,".bottomlink[data-v-0bdb273c],h2 .special-color[data-v-0bdb273c]{color:#adff2f}",""]),t.exports=o},71:function(t,o,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},e=(r(259),r(81)),c=r(111),l=r.n(c),v=r(327),component=Object(e.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);o.a=component.exports;l()(component,{VApp:v.a})}},[[234,8,1,9]]]);