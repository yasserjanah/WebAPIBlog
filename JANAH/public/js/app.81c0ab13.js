(function(t){function e(e){for(var n,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"39dd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],s={name:"App",components:{},data:function(){return{}}},r=s,c=a("2877"),l=Object(c["a"])(r,o,i,!1,null,null,null),d=l.exports,u=a("f309");n["a"].use(u["a"]);var p=new u["a"]({}),v=a("5886"),m=a("f5af"),h=a.n(m),f=(a("e829"),a("2f62"));n["a"].use(f["a"]);var g=function(){return localStorage.getItem("token")},b=function(t){localStorage.setItem("token",t)},_=new f["a"].Store({state:{token:void 0!=g()?g():""},getters:{},mutations:{changeToken:function(t,e){t.token=e,b(e)}},actions:{}}),k=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Home")},x=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{staticStyle:{background:"radial-gradient(circle, rgba(222, 13, 13, 1) 8%, rgba(205, 20, 20, 1) 54%, rgba(50, 50, 50, 1) 100%)"},attrs:{app:"",dark:""}},[n("div",{staticClass:"d-flex"},[n("v-img",{staticClass:"shrink mt-8",attrs:{alt:"YJ Logo",contain:"",src:a("cf05"),transition:"fab-transition",width:"78"}})],1),n("v-toolbar-title",{staticClass:"mt-3",staticStyle:{"font-size":"22px"}},[n("span",{staticClass:"font-weight-black",staticStyle:{"font-family":"Logo"}},[t._v("YJ | ")]),n("span",{staticClass:"font-weight-thin",staticStyle:{"font-family":"Logo"}},[t._v(" Blog")])]),t.loggedIn&&""!=t.username?n("div",{staticClass:"ml-10"},[t._v("\n            Welcome "),n("span",{staticClass:"font-weight-black"},[t._v(t._s(t.username))])]):t._e(),n("v-spacer"),t.loggedIn?[n("v-btn",{attrs:{color:"transparent"},on:{click:function(e){t.new_art=!0}}},[t._v("\n                New Article\n                "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-plus-thick\n                ")])],1),n("a",{staticClass:"ml-3 v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default transparent",attrs:{href:"/users_dashboard",target:"_blank"}},[t._v("\n                Users Dashboard\n                "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-open-in-new\n                ")])],1),n("v-btn",{staticClass:"ml-3",attrs:{color:"transparent"},on:{click:t.logout}},[t._v("\n                Logout\n                "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                    mdi-logout\n                ")])],1)]:n("v-btn",{attrs:{color:"transparent"},on:{click:function(e){t.dialog=!0}}},[t._v("\n            Login\n            "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n                mdi-login\n            ")])],1),n("v-row",{staticStyle:{display:"none"},attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"350px","data-aos":"zoom-in-up"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-center justify-center"},[t._v("Login")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-form",{ref:"form",staticClass:"mt-5"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:[t.rules.email],"prepend-inner-icon":"mdi-email",label:"Email",color:"#b40000",filled:"",dense:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:[t.rules.required],"prepend-inner-icon":"mdi-lock","append-icon":t.show1?"mdi-eye":"mdi-eye-off",label:"Password",type:t.show1?"text":"password",color:"#b40000",filled:"",dense:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                            Close\n                        ")]),n("v-btn",{attrs:{color:"#b40000",text:""},on:{click:t.login}},[t._v("\n                            Login\n                        ")])],1)],1)],1)],1),n("v-row",{staticStyle:{display:"none"},attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px","data-aos":"zoom-in-up"},model:{value:t.new_art,callback:function(e){t.new_art=e},expression:"new_art"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-center justify-center"},[t._v("Add Article")])]),n("v-card-text",[n("v-container",[n("v-form",{ref:"form1",staticClass:"mt-5"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:[t.rules.required],"prepend-inner-icon":"mdi-rename-box",label:"Title",color:"#b40000",filled:"",dense:"",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Content",rules:[t.rules.required],dense:"","auto-grow":"","prepend-inner-icon":"mdi-table-of-contents"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-checkbox",{attrs:{label:"Published",color:"#b40000",value:"true","hide-details":""},model:{value:t.published,callback:function(e){t.published=e},expression:"published"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.new_art=!1}}},[t._v("\n                            Close\n                        ")]),n("v-btn",{attrs:{color:"#b40000",text:""},on:{click:function(e){return t.createArticle()}}},[t._v("\n                            Create\n                        ")])],1)],1)],1)],1)],2),n("v-main",[n("v-container",[n("v-row",{attrs:{dense:"",align:"stretch"}},[t._l(t.articles,(function(e,a){return[n("v-col",{key:e.id,attrs:{xl:"3",lg:"4",md:"6",sm:"12",xs:"12"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(o){var i=o.hover;return[n("v-card",{staticClass:"mx-auto",attrs:{color:"#b40000",dark:"","max-width":"400","data-aos":"fade-up","data-aos-easing":"linear","data-aos-duration":"1000"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://picsum.photos/500/300?image="+(5*a+10)}},[n("v-card-title",{staticClass:"text-h6"},[t._v(t._s(e.title))])],1),n("v-card-text",{staticClass:"text-h7 font-weight-bold"},[t._v('\n                                    "'+t._s(e.content.slice(0,80))+'..."\n                                ')]),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-black"},[t._v(t._s(e.User.username)+"\n                                            ")])],1),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-expand-transition",[i?n("div",{staticClass:"transition-fast-in-fast-out darken-2 v-card--reveal white--text"},[n("v-btn",{attrs:{color:"#323232"},on:{click:function(a){return t.goTo(e.id)}}},[t._v("\n                                                        Read more\n                                                    ")])],1):n("div",[n("v-icon",{staticClass:"mr-1",attrs:{small:""}},[t._v("\n                                                        mdi-clock-time-three\n                                                    ")]),n("span",{staticClass:"subheading mr-2",staticStyle:{"font-size":"14px"}},[t._v(t._s(e.createdAt.split("T")[0]))]),t._v("at\n                                                    "),n("span",{staticClass:"subheading mr-2",staticStyle:{"font-size":"14px"}},[t._v(t._s(e.createdAt.split("T")[1].split(".")[0]))])],1)])],1)],1)],1)],1)]}}],null,!0)})],1)]}))],2),n("div",{staticClass:"text-center mt-12 mb-12"},[n("v-pagination",{attrs:{length:t.length,"total-visible":7,color:"#b40000","prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),n("message",{attrs:{dialog:t.creating}})],1)],1)],1)},y=[],T=(a("ac1f"),a("1276"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"#b40000",dark:""}},[a("v-card-text",[t._v("\n                Creating new article\n                "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)}),A=[],V={props:["dialog"],data:function(){return{}},watch:{dialog:function(t){var e=this;t&&setTimeout((function(){return e.dialog=!1}),4e3)}}},j=V,I=a("6544"),L=a.n(I),S=a("b0af"),B=a("99d9"),U=a("169a"),O=a("8e36"),z=Object(c["a"])(j,T,A,!1,null,null,null),R=z.exports;L()(z,{VCard:S["a"],VCardText:B["b"],VDialog:U["a"],VProgressLinear:O["a"]});var $=a("bc3a"),P=a.n($),q={name:"Home",components:{message:R},data:function(){return{BaseURL:"",token:"",articles:[],loggedIn:!1,username:"",dialog:!1,email:"",password:"",page:1,old_page:1,length:16,start:0,end:6,rules:{required:function(t){return!!t||"Required."},counter:function(t){return t.length<=20||"Max 20 characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}},show1:!1,new_art:!1,title:"",content:"",published:!1,creating:!1}},methods:{createArticle:function(){var t=this;if(!this.$refs.form1.validate())return console.log("Please Validate the form");this.creating=!0,this.new_art=!1,setTimeout((function(){t.creating=!1}),1500),this.creating=!0,P.a.post("".concat(this.BaseURL,"/api/articles/"),{title:this.title,content:this.content,published:this.published},{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])}}).then((function(e){e.data.id&&e.data.title==t.title&&(console.log("Article Created !!"),t.title="",t.content="",t.articles=[],t.getAllArticles())})).catch((function(t){return console.log(t)}))},getAllArticles:function(){var t=this;P.a.get("".concat(this.BaseURL,"/api/articles/?offset=").concat(this.start,"&limit=").concat(this.end),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.articles=e.data.rows,t.length=parseInt(parseInt(e.data.count)/t.end)})).catch((function(t){return console.log(t)}))},setToken:function(t){this.token=t,this.$store.commit("changeToken",t)},login:function(){var t=this;this.$refs.form.validate()&&P.a.post("".concat(this.BaseURL,"/api/auth/login"),{email:this.email,password:this.password},{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){var a=e.data;if(a.error)return console.log(a.error),t.loggedIn=!1,console.log(a.error);a.token&&t.setToken(a.token),t.username=a.username,console.log("Logged In Successfully"),t.loggedIn=!0,t.dialog=!1})).catch((function(t){return console.log(t)}))},logout:function(){this.setToken(null),localStorage.removeItem("token"),this.loggedIn=!1,window.location="".concat(this.BaseURL,"/api/auth/logout")},goTo:function(t){var e="/article/detail/"+t;this.$router.push(e)},check_token:function(t){var e=this;"undefined"!=t&&""!=t?P.a.get("".concat(this.BaseURL,"/api/auth/check_token"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}}).then((function(t){t.data.error&&(console.log("token is not valid"),e.setToken(""),e.loggedIn=!1),t.data.message&&(console.log(t.data.message),e.setToken(t.data.token),e.loggedIn=!0)})).catch((function(t){return console.log(t)})):this.setToken("")},getToken:function(){var t=localStorage.getItem("token");void 0==t&&"undefined"==t&&""==t||this.setToken(t);var e=document.cookie.split("=")[0];"token"==e&&this.setToken(document.cookie.split("=")[1])}},created:function(){this.getAllArticles(),this.getToken(),this.check_token(this.token)},watch:{page:function(){var t=this.page-this.old_page;this.old_page<this.page?this.start=this.old_page*(6*t):this.start=this.page*(6*t),1==this.page&&(this.start=0),this.old_page=this.page,this.getAllArticles()}}},D=q,H=(a("8b71"),a("7496")),M=a("40dc"),E=a("8336"),J=a("ac7c"),F=a("62ad"),W=a("a523"),Y=a("0789"),Z=a("4bd4"),N=a("ce87"),G=a("132d"),K=a("adda"),Q=a("da13"),X=a("8270"),tt=a("5d23"),et=a("f6c4"),at=a("891e"),nt=a("0fd9"),ot=a("2fa4"),it=a("8654"),st=a("a844"),rt=a("2a7f"),ct=Object(c["a"])(D,w,y,!1,null,null,null),lt=ct.exports;L()(ct,{VApp:H["a"],VAppBar:M["a"],VBtn:E["a"],VCard:S["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCheckbox:J["a"],VCol:F["a"],VContainer:W["a"],VDialog:U["a"],VExpandTransition:Y["a"],VForm:Z["a"],VHover:N["a"],VIcon:G["a"],VImg:K["a"],VListItem:Q["a"],VListItemAvatar:X["a"],VListItemContent:tt["a"],VListItemTitle:tt["c"],VMain:et["a"],VPagination:at["a"],VRow:nt["a"],VSpacer:ot["a"],VTextField:it["a"],VTextarea:st["a"],VToolbarTitle:rt["a"]});var dt={name:"home",components:{Home:lt}},ut=dt,pt=Object(c["a"])(ut,C,x,!1,null,null,null),vt=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{staticStyle:{background:"radial-gradient(circle, rgba(222, 13, 13, 1) 8%, rgba(205, 20, 20, 1) 54%, rgba(50, 50, 50, 1) 100%)"},attrs:{app:"",dark:""}},[n("div",{staticClass:"d-flex",on:{click:function(e){return t.$router.push("/")}}},[n("v-img",{staticClass:"shrink mt-8",attrs:{alt:"YJ Logo",contain:"",src:a("cf05"),transition:"fab-transition",width:"78"}})],1),n("v-toolbar-title",{staticClass:"mt-3",staticStyle:{"font-size":"22px"},on:{click:function(e){return t.$router.push("/")}}},[n("span",{staticClass:"font-weight-black",staticStyle:{"font-family":"Logo"}},[t._v("YJ | ")]),n("span",{staticClass:"font-weight-thin",staticStyle:{"font-family":"Logo"}},[t._v(" Blog")])]),t.loggedIn&&""!=t.username?n("div",{staticClass:"ml-10"},[t._v("\n              Welcome "),n("span",{staticClass:"font-weight-black"},[t._v(t._s(t.username))])]):t._e(),n("v-spacer"),n("a",{staticClass:"ml-3 v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default transparent",attrs:{href:"/users_dashboard",target:"_blank"}},[t._v("\n      Users Dashboard\n      "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n        mdi-open-in-new\n      ")])],1),t.loggedIn?[n("v-btn",{staticClass:"ml-3",attrs:{color:"transparent"},on:{click:t.logout}},[t._v("\n        Logout\n        "),n("v-icon",{attrs:{right:"",dark:""}},[t._v("\n          mdi-logout\n        ")])],1)]:t._e()],2),n("v-main",[n("v-container",{staticClass:"mt-5"},[n("v-row",{attrs:{dense:"",align:"stretch"}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto",attrs:{color:"#b40000",dark:"","max-width":"100%","data-aos":"fade-up","data-aos-easing":"linear","data-aos-duration":"1000"}},[n("v-row",{staticStyle:{position:"absolute","z-index":"10"},attrs:{justify:"start"}},[n("v-btn",{staticClass:"mt-3 ml-3",attrs:{color:"#b40000",text:"",icon:""},on:{click:function(e){return t.$router.push("/")}}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-keyboard-backspace")])],1)],1),n("v-img",{staticClass:"white--text align-end",attrs:{height:"400px",src:"https://picsum.photos/1024/1024?image="+(5*t.article_id+10)}},[n("v-card-title",{staticClass:"text-h6"},[t._v("\n                "+t._s(t.article.title)+"\n                "),t.isOwner?n("v-row",{attrs:{justify:"end"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.OpenModal}},[t._v("\n                    Update\n                  ")]),n("v-btn",{staticClass:"ml-2",attrs:{color:"#b40000"},on:{click:t.deleteArticle}},[t._v("\n                    Delete\n                  ")])],1):t._e()],1)],1),n("v-card-text",{staticClass:"text-h7"},[t._v("\n              "+t._s(t.article.content)+"\n            ")]),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[n("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),n("v-list-item-content",[t.article.User?n("v-list-item-title",{staticClass:"font-weight-black"},[t._v(t._s(t.article.User.username)+"\n                    ("+t._s(t.article.User.email)+")\n                  ")]):t._e()],1),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-expand-transition",[n("div",[n("v-icon",{staticClass:"mr-1"},[t._v("\n                        mdi-clock-time-three\n                      ")]),t.article.createdAt?n("span",{staticClass:"subheading mr-2"},[t._v(t._s(t.article.createdAt.split("T")[0]))]):t._e(),t.article.createdAt?n("span",{staticClass:"subheading mr-2"},[t._v(t._s(t.article.createdAt.split("T")[1].split(".")[0]))]):t._e()],1)])],1)],1)],1),n("v-row",{attrs:{align:"center",justify:"start"}},[n("v-expand-transition",[n("v-chip",{staticClass:"ml-8 mt-1 mb-3",attrs:{color:"#b40000",label:"","text-color":"white"}},[n("v-icon",{attrs:{left:"",color:"white"}},[t._v("\n                    mdi-label\n                  ")]),t._v("\n                  Tags :\n                  "),n("v-chip",{staticClass:"ma-2",attrs:{color:"white","text-color":"#b40000",small:""}},[t._v("\n                    sed\n                  ")]),n("v-chip",{staticClass:"ma-2",attrs:{color:"white","text-color":"#b40000",small:""}},[t._v("\n                    quo\n                  ")]),n("v-chip",{staticClass:"ma-2",attrs:{color:"white","text-color":"#b40000",small:""}},[t._v("\n                    sit\n                  ")]),n("v-chip",{staticClass:"ma-2",attrs:{color:"white","text-color":"#b40000",small:""}},[t._v("\n                    aut\n                  ")])],1)],1)],1)],1)],1)],1),n("v-card",{staticClass:"mx-auto mt-4 mb-10",attrs:{shaped:"","max-width":"100%"}},[n("v-list",{attrs:{"two-line":"",dense:""}},[n("v-subheader",{staticClass:"font-weight-black text-center"},[n("h1",[t._v("Comments ("+t._s(t.numberOfComments)+")")])]),t._l(t.comments,(function(e,a){return n("v-list-item",{key:a},[n("v-list-item-icon",{staticClass:"pt-4"},[n("v-list-item-avatar",{attrs:{color:"#b40000"}},[n("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/"}})],1)],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.content))]),n("v-list-item-subtitle",[n("v-icon",{attrs:{small:""}},[t._v("mdi-clock")]),t._v("\n                "+t._s(e.createdAt.split("T")[0])+" at "+t._s(e.createdAt.split("T")[1].split(".")[0])+"\n              ")],1)],1)],1)})),n("v-divider",{staticClass:"mt-4"}),n("v-list-item",{staticClass:"mt-3"},[n("v-text-field",{attrs:{"append-outer-icon":"mdi-send","prepend-icon":"mdi-comment-text",filled:"","clear-icon":"mdi-close-circle",clearable:"",label:"Comment",type:"text",color:"#b40000"},on:{"click:clear":function(e){t.user_comment=""},"click:append-outer":t.createComment},model:{value:t.user_comment,callback:function(e){t.user_comment=e},expression:"user_comment"}})],1)],2)],1),n("v-row",{staticStyle:{display:"none"},attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px","data-aos":"zoom-in-up"},model:{value:t.new_art,callback:function(e){t.new_art=e},expression:"new_art"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-center justify-center"},[t._v("Update Article")])]),n("v-card-text",[n("v-container",[n("v-form",{ref:"form1",staticClass:"mt-5"},[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{rules:[t.rules.required],"prepend-inner-icon":"mdi-rename-box",label:"Title",color:"#b40000",filled:"",dense:"",required:""},model:{value:t.user_title,callback:function(e){t.user_title=e},expression:"user_title"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Content",rules:[t.rules.required],dense:"","auto-grow":"","prepend-inner-icon":"mdi-table-of-contents"},model:{value:t.user_content,callback:function(e){t.user_content=e},expression:"user_content"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.new_art=!1}}},[t._v("\n                Close\n              ")]),n("v-btn",{attrs:{color:"#b40000",text:""},on:{click:function(e){return t.updateArticle()}}},[t._v("\n                Update\n              ")])],1)],1)],1)],1)],1)],1)],1)},ht=[],ft={name:"Article",components:{},data:function(){return{BaseURL:"",article_id:this.$route.params.id,article:{},user_title:"",user_content:"",user_published:"",comments:[],numberOfComments:0,loggedIn:!1,token:"",username:"",user_id:0,user_comment:"",new_art:!1,rules:{required:function(t){return!!t||"Required."},counter:function(t){return t.length<=20||"Max 20 characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}},computed:{isOwner:function(){return!!this.article.User&&this.user_id==this.article.User.id}},methods:{OpenModal:function(){this.user_title=this.article.title,this.user_content=this.article.content,this.new_art=!0},updateArticle:function(){var t=this;P.a.put("".concat(this.BaseURL,"/api/articles/"),{id:this.article_id,title:this.user_title,content:this.user_content,published:!0},{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])}}).then((function(e){e.data.updatedAt&&(console.log("Article Updated"),t.getArticle())})).catch((function(t){return console.log(t)})),this.new_art=!1},deleteArticle:function(){var t=this;P.a.delete("".concat(this.BaseURL,"/api/articles/").concat(this.article_id),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])}}).then((function(e){e.data.message&&t.$router.push("/")})).catch((function(t){return console.log(t)}))},createComment:function(){var t=this;P.a.post("".concat(this.BaseURL,"/api/comments/"),{content:this.user_comment,ArticleId:this.article_id},{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(document.cookie.split("=")[1])}}).then((function(e){e.data.id&&e.data.content&&(console.log("Comment Created !!"),t.comments=[],t.getComments())})).catch((function(t){return console.log(t)}))},setToken:function(t){this.token=t,this.$store.commit("changeToken",t)},logout:function(){this.setToken(null),localStorage.removeItem("token"),this.loggedIn=!1,window.location="".concat(this.BaseURL,"/api/auth/logout")},check_token:function(t){var e=this;console.log("checking token ",t),"undefined"!=t&&""!=t?P.a.get("".concat(this.BaseURL,"/api/auth/check_token"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(this.token)}}).then((function(t){t.data.error&&(console.log("error token is not valid"),e.setToken(""),e.loggedIn=!1),t.data.message&&(e.setToken(t.data.token),e.username=t.data.username,e.user_id=t.data.id,e.loggedIn=!0)})).catch((function(t){return console.log(t)})):this.setToken("")},getToken:function(){var t=localStorage.getItem("token");void 0==t&&"undefined"==t&&""==t||this.setToken(t);var e=document.cookie.split("=")[0];"token"==e&&this.setToken(document.cookie.split("=")[1])},getArticle:function(){var t=this;P.a.get("".concat(this.BaseURL,"/api/articles/").concat(this.article_id),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.article=e.data})).catch((function(t){return console.log(t)}))},getComments:function(){var t=this;P.a.get("".concat(this.BaseURL,"/api/articles/").concat(this.article_id,"/comments"),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){t.comments=e.data.rows,t.numberOfComments=e.data.count})).catch((function(t){return console.log(t)}))}},created:function(){this.getArticle(),this.getComments(),this.getToken(),this.check_token(this.token)}},gt=ft,bt=a("cc20"),_t=a("ce7e"),kt=a("8860"),Ct=a("34c3"),xt=a("e0c7"),wt=Object(c["a"])(gt,mt,ht,!1,null,null,null),yt=wt.exports;L()(wt,{VApp:H["a"],VAppBar:M["a"],VBtn:E["a"],VCard:S["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VChip:bt["a"],VCol:F["a"],VContainer:W["a"],VDialog:U["a"],VDivider:_t["a"],VExpandTransition:Y["a"],VForm:Z["a"],VIcon:G["a"],VImg:K["a"],VList:kt["a"],VListItem:Q["a"],VListItemAvatar:X["a"],VListItemContent:tt["a"],VListItemIcon:Ct["a"],VListItemSubtitle:tt["b"],VListItemTitle:tt["c"],VMain:et["a"],VRow:nt["a"],VSpacer:ot["a"],VSubheader:xt["a"],VTextField:it["a"],VTextarea:st["a"],VToolbarTitle:rt["a"]}),n["a"].use(k["a"]);var Tt=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:vt},{path:"/article/detail/:id/:token?",name:"article",component:yt}]});n["a"].use(v["a"]),n["a"].config.productionTip=!1,new n["a"]({created:function(){h.a.init()},vuetify:p,store:_,router:Tt,render:function(t){return t(d)}}).$mount("#app")},"8b71":function(t,e,a){"use strict";a("39dd")},cf05:function(t,e,a){t.exports=a.p+"img/logo.1f25eb64.png"}});
//# sourceMappingURL=app.81c0ab13.js.map