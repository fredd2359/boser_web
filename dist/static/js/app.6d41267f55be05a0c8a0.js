webpackJsonp([1],{"+9BC":function(t,e){},"+VxF":function(t,e){},"7zck":function(t,e){},"9Cu7":function(t,e){},"9NlI":function(t,e){},DSAI:function(t,e){},INhu:function(t,e){},LqoO:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("7+uW"),n={methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Login"})},home:function(){window.location.href="http://192.168.1.66:8080/"}},data:function(){return{servidor:"https://salseofutbolero-server.herokuapp.com",items:["web","shopping","videos","images","news"]}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-img",{staticClass:"responsive",attrs:{src:t.servidor+"/imagenes/pportada.jpg"}}),t._v(" "),a("v-toolbar",{attrs:{dark:"","accent-4":"",dense:""}},[a("v-toolbar-title",[a("img",{staticClass:"img1 pointer",attrs:{src:t.servidor+"/imagenes/logoblanco.png",alt:""},on:{click:t.home}})]),t._v(" "),a("v-spacer"),t._v(" "),t.$store.state.isUserLoggedIn?a("v-btn",{on:{click:t.logout}},[t._v("\n          Cerrar Sesion\n        ")]):t._e()],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,s,!1,function(t){a("ciFX")},null,null).exports,i={name:"App",metaInfo:function(){return{title:"BoserSalseoFutbolero - PaginaWebOficial",meta:[]}},components:{PageHeader:o}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-app",[e("v-main",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(i,c,!1,function(t){a("p3Lc")},null,null).exports,u=a("/ocq"),d=a("Xxa5"),m=a.n(d),p=a("exGp"),f=a.n(p),v=a("mtWM"),h=a.n(v),g=function(){return h.a.create({baseUrl:"http://localhost:5000",headers:{"Content-Type":"application/json;charset=UTF-8"}})},b=a("o/zv"),w=function(){return g().get(b.join("https://salseofutbolero-server.herokuapp.com/api/imagenes")).then(function(t){return{success:!0,data:t.data}}).catch(function(t){return{err:t,success:!1,data:null}})},k=function(){return g().get(b.join("https://salseofutbolero-server.herokuapp.com","/api/links")).then(function(t){return console.log(t),{success:!0,message:"todobin",data:t.data}}).catch(function(t){return console.log(t),{err:t,success:!1,data:null}})},_=a("5/be"),x={name:"foot",methods:{redireccion:function(t){window.open(t,"_blank")}},data:function(){return{icons:[{key:1,tipoIcono:"mdi-facebook",color:"success",url:"https://www.facebook.com/BoserSalseoFutboleroOficial/"},{key:2,tipoIcono:"mdi-facebook",color:"white",url:"https://www.facebook.com/groups/sectaboseriana/"},{key:3,tipoIcono:"mdi-facebook",color:"red",url:"https://www.facebook.com/bosergeekof"},{key:4,tipoIcono:"mdi-twitter",color:"",url:"https://twitter.com/bosersalseo"},{key:5,tipoIcono:"mdi-instagram",color:"",url:"https://www.instagram.com/boser_salseo/"},{key:6,tipoIcono:"mdi-youtube",color:"success",url:"https://www.youtube.com/channel/UC5zYksN6pv3jiCBdL0ykrYg"},{key:7,tipoIcono:"mdi-youtube",color:"",url:"https://www.youtube.com/channel/UCnU1O9i-kTo1q4z8MK3W1Hw"},{key:8,tipoIcono:"mdi-youtube",color:"red",url:"https://www.youtube.com/channel/UCLci1atxHgW2RJwy735rbFg"}]}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"blue-grey darken-4 white--text text-center",staticStyle:{width:"100%"},attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,function(e){return a("v-btn",{key:e.key,class:"mx-4 "+e.color+"--text",attrs:{icon:""},on:{click:function(a){return t.redireccion(e.url)}}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.tipoIcono))])],1)}),1),t._v(" "),a("v-card-text",{staticClass:"white--text pt-0"},[t._v("\n          Cada que rueda el balón va dejando historia, yo te la puedo contar. Síguenos en todas Nuestras Redes Sociales\n      ")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticClass:"white--text"},[t._v("\n          El Universo de Boser es Powered By Izk Producciones, Boser Salseo Futbolero (En proceso de Registro ante IMPI 2020)\n      ")])],1)],1)],1)},staticRenderFns:[]};var C=a("VU/8")(x,y,!1,function(t){a("+9BC")},null,null).exports,S=a("gZiA"),I={name:"RedesSociales",components:{InstagramEmbed:a.n(S).a},methods:{},computed:{"tamaños":{get:function(){var t={facebook:{height:0,width:0},instagram:0,twitter:{height:0}};switch(this.$vuetify.breakpoint.name){case"xs":t.facebook.width=300,t.facebook.height=500,t.instagram=300,t.twitter.width=300;break;case"sm":t.facebook.height=350,t.facebook.height=500,t.instagram=400,t.twitter.width=350;break;case"md":t.facebook.width=350,t.facebook.height=500,t.instagram=350,t.twitter.width=350;break;case"lg":t.facebook.width=340,t.facebook.height=500,t.instagram=400,t.twitter.width=450;break;case"xl":t.facebook.width=450,t.facebook.height=500,t.instagram=450,t.twitter.width=450}return t}}},data:function(){return{icons:[]}}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{elevation:6,align:"center"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{col:12}},[a("div",{staticClass:"fb-page left",attrs:{"data-href":"https://www.facebook.com/BoserSalseoFutboleroOficial/","data-tabs":"timeline","data-width":t.tamaños.facebook.width,"data-height":t.tamaños.facebook.height,"data-small-header":"true","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:"https://www.facebook.com/BoserSalseoFutboleroOficial/"}},[a("a",{attrs:{href:"https://www.facebook.com/BoserSalseoFutboleroOficial/"}},[t._v("\n            Boser  Salseo Futbolero\n          ")])])])])],1),t._v(" "),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{col:12}},[a("instagram-embed",{attrs:{url:"https://www.instagram.com/p/B5_VkYmp1EK/?utm_source=ig_embed&utm_campaign=loading","max-width":t.tamaños.instagram}})],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{col:12}},[a("a",{staticClass:"twitter-timeline",attrs:{href:"https://twitter.com/bosersalseo?ref_src=twsrc%5Etfw","data-width":t.tamaños.twitter.width,"data-tweet-limit":"3"}},[t._v("Tweets by bosersalseo")])])],1)],1)},staticRenderFns:[]};var j=a("VU/8")(I,F,!1,function(t){a("+VxF")},null,null).exports,U=a("o/zv"),$=function(t){var e="object/"+t+"?read_key=htMBbdNc0fPQ9naFGU53BPfvEWM9VufFVDGJQJMvyLeqw69Y91&props=slug,title,content,metadata";return g().get(U.join("https://api.cosmicjs.com/v1/boser-web/"+e)).then(function(t){return{success:!0,data:t.data}}).catch(function(t){return{err:t,success:!1,data:null}})},P=function(){return g().get(U.join("https://api.cosmicjs.com/v1/boser-web/","/objects?hide_metafields=false&type=articulos&read_key=htMBbdNc0fPQ9naFGU53BPfvEWM9VufFVDGJQJMvyLeqw69Y91&limit=7&props=slug,title,content,metadata,_id")).then(function(t){return{success:!0,data:t.data}}).catch(function(t){return{err:t,success:!1,data:null}})},A=function(){console.log("hola");return g().get(U.join("https://api.cosmicjs.com/v1/boser-web/","/objects?hide_metafields=false&type=articulos&read_key=htMBbdNc0fPQ9naFGU53BPfvEWM9VufFVDGJQJMvyLeqw69Y91&limit=15&props=slug,title,content,metadata,_id")).then(function(t){return{success:!0,data:t.data}}).catch(function(t){return{err:t,success:!1,data:null}})},V={name:"articulos",methods:{redireccion:function(t){window.open(t,"_blank")},getArticulo:function(t){window.location.href="http://192.168.1.66:8080/articulo/"+t}},components:{},mounted:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t.articulos=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()},data:function(){return{articulos:[]}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-card",[a("v-row",{attrs:{justify:"center"}},t._l(t.articulos.objects,function(e){return a("v-col",{key:e._id,attrs:{justify:"center",cols:e.metadata.flex}},[a("v-card",{attrs:{"min-width":"290"}},[a("v-img",{staticClass:"white--text align-end left pointer",attrs:{src:e.metadata.portada.url,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"},on:{click:function(a){return t.getArticulo(e.slug)}}},[a("v-chip",{staticClass:"ma-2",attrs:{color:"deep-orange darken-3","text-color":"white"},on:{click:function(a){return t.getArticulo(e.slug)}}},[t._v("\n                "+t._s(e.metadata.hashtag)+"\n              ")])],1),t._v(" "),a("v-card-text",{staticClass:"left pb-0 pointer",domProps:{textContent:t._s(e.metadata.fecha_de_subida)},on:{click:function(a){return t.getArticulo(e.slug)}}}),t._v(" "),a("v-card-title",{staticClass:"pt-0 pointer",domProps:{textContent:t._s(e.metadata.titulo)},on:{click:function(a){return t.getArticulo(e.slug)}}})],1)],1)}),1)],1)],1)},staticRenderFns:[]};var E=a("VU/8")(V,L,!1,function(t){a("9Cu7")},null,null).exports,R={name:"Principal",components:{PageHeader:o,VueYouTubeEmbed:_.a,PageFoot:C,PageRedesSociales:j,PageArticulos:E},methods:{},computed:{source:{get:function(){return this.$youtube.getIdFromURL(window.location.protocol+"//www.youtube.com/watch?v="+this.urlchido)}},"tamaños":{get:function(){var t={carousel:0,parallax:0,youtube:{height:0,width:0}};switch(this.$vuetify.breakpoint.name){case"xs":t.carousel=200,t.parallax=690,t.youtube.height=290,t.youtube.width=300;break;case"sm":t.carousel=300,t.parallax=720,t.youtube.height=360,t.youtube.width=400;break;case"md":t.carousel=350,t.parallax=500,t.youtube.height=350,t.youtube.width=480;break;case"lg":t.carousel=400,t.parallax=500,t.youtube.height=400,t.youtube.width=650;break;case"xl":t.carousel=500,t.parallax=500,t.youtube.height=450,t.youtube.width=810}return t}}},mounted:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:return t.links=e.sent.data,e.next=5,w();case 5:t.imagenes=e.sent.data,t.urlchido=t.links.links[0].ruta;case 7:case"end":return e.stop()}},e,t)}))()},data:function(){return{imagenes:[{imagenes:{rutaweb:"222"}}],links:null,urlchido:"",servidor:"https://salseofutbolero-server.herokuapp.com"}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{staticClass:"pa-0"},[a("page-header")],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"pr-0",attrs:{sm:12,md:8,lg:9}},[a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{cols:10}},[a("v-carousel",{attrs:{cycle:"",height:t.tamaños.carousel,"hide-delimiter-background":"",interval:"8000"}},t._l(t.imagenes.files,function(t,e){return a("v-carousel-item",{key:e,attrs:{"reverse-transition":"fade-transition",transition:"fade-transition",height:"100%"}},[a("img",{staticStyle:{height:"100%"},attrs:{src:t.metadata.url}})])}),1)],1)],1),t._v(" "),a("v-parallax",{attrs:{src:t.servidor+"/imagenes/Fondovideo.jpeg",height:t.tamaños.parallax}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{contain:"",sm:12}},[a("youtube",{attrs:{"video-id":t.source,"player-width":t.tamaños.youtube.width,"player-height":t.tamaños.youtube.height}})],1)],1)],1),t._v(" "),a("v-row",{staticClass:"pt-3"},[a("v-col",{staticClass:"pb-0"},[a("page-articulos")],1)],1)],1),t._v(" "),a("v-col",{staticClass:"pa-0",attrs:{sm:12,md:4,lg:3}},[a("page-redes-sociales",{staticClass:"width: 100%"})],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"pr-0 pl-0 pb-0"},[a("page-foot",{staticClass:"width: 100%"})],1)],1)],1)},staticRenderFns:[]};var N=a("VU/8")(R,B,!1,function(t){a("9NlI")},"data-v-fa6927b2",null).exports,T=function(t){return g().post("https://salseofutbolero-server.herokuapp.com/user/login",t).then(function(t){return{status:201,data:t.data}}).catch(function(t){return{status:401,data:t}})},q={name:"HelloWorld",data:function(){return{show:!0,valid:!0,mensaje:"",mostrarAlert:!1,user:"",servidor:"https://salseofutbolero-server.herokuapp.com",password:"",userRules:[function(t){return!!t||"Usuario es requerido"}],passRules:[function(t){return!!t||"Contraseña es requerida"}]}},methods:{login:function(){var t=this;return f()(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({user:t.user,password:t.password});case 2:201===(a=e.sent).status?(t.mensaje=a.mensaje,t.mostrarAlert=!1,t.$store.dispatch("setToken",a.data.token),t.$store.dispatch("setUser",t.user),t.$router.push("admin")):(t.mostrarAlert=!0,t.mensaje=a.data.message);case 4:case"end":return e.stop()}},e,t)}))()},validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}},mounted:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.state.isUserLoggedIn&&t.$router.push({name:"admin"});case 1:case"end":return e.stop()}},e,t)}))()}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{column:""}},[a("v-flex",{staticClass:"container ",staticStyle:{"margin-top":"10%"}},[a("div",{staticClass:"white elevation-2"},[a("v-toolbar",{attrs:{flat:"",dense:"",dark:"",src:t.servidor+"/imagenes/estadio.jpg"}},[a("v-toolbar-title",[t._v("Log In")])],1),t._v(" "),a("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[a("v-form",{ref:"form",attrs:{"lazy-validation":"",sumbit:"login"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.userRules,label:"Usuario",sm:12,md:6,lg:6,required:""},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),a("v-text-field",{attrs:{rules:t.passRules,type:"password",label:"Contraseña",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("v-alert",{attrs:{dense:"",outlined:"",type:"error",value:t.mostrarAlert}},[t._v("\n            "+t._s(t.mensaje)+"\n          ")]),t._v(" "),a("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.login}},[t._v("\n            Iniciar Sesión\n          ")])],1)],1)],1)])],1)},staticRenderFns:[]};var M=a("VU/8")(q,z,!1,function(t){a("rbv4")},"data-v-7a6eab1a",null).exports,H=a("mvHQ"),W=a.n(H),O=function(t){var e=W()(t);return g().post("https://salseofutbolero-server.herokuapp.com/api/links/editar",e).then(function(t){return t}).catch(function(t){return t})},Q=function(t,e){var a=new FormData;return a.append("memeImagen",t),g().post("https://salseofutbolero-server.herokuapp.com/api/imagenes",a,{headers:{Authorization:e,"Content-Type":"multipart/form-data"}}).then(function(t){return{success:!0,data:t.data}}).catch(function(t){return{err:t,success:!1,data:null}})},J=function(t,e){return g().delete("https://salseofutbolero-server.herokuapp.com/api/imagenes/"+t,{headers:{Authorization:e}}).then(function(t){return t}).catch(function(t){return console.log(t),t})},D={name:"admin",components:{PageHeader:o},data:function(){return{activos:[0],imagenSel:"",_idImagenSel:0,imagenSubir:[],urlImg:"http://localhost:5000/imagenes/estadio.jpg",imagenes:[{_id:"asd",rutaWeb:"http://localhost:5000/imagenes/estadio.jpg"}],links:[{_id:"123",ruta:22}]}},methods:{borrarImagen:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t._idImagenSel&&0!==t._idImagenSel){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,J(t._idImagenSel,t.$store.state.token);case 4:if(201!==e.sent.status){e.next=8;break}return t.imagenes.files.length>=1&&(t.imagenes.files.splice(t.imagenes.files.findIndex(function(e){return e._id===t._idImagenSel}),1),t.imagenes.files.length>0&&(t._idImagenSel=t.imagenes.files[0]._id,t.imagenSel=t.imagenes.files[0].metadata.url)),e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,t)}))()},editarLink:function(t,e){var a=this;return f()(m.a.mark(function r(){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O({_id:t,newruta:e});case 2:if(!a.sent.sucess){a.next=5;break}return a.abrupt("return",!0);case 5:return a.abrupt("return",!1);case 6:case"end":return a.stop()}},r,a)}))()},cambiarImagen:function(t){var e=this;return f()(m.a.mark(function a(){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.imagenSel=t.metadata.url.toString(),e._idImagenSel=t._id.toString();case 2:case"end":return a.stop()}},a,e)}))()},subirImagen:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t.imagenSubir,t.$store.state.token);case 2:if(!e.sent.success){e.next=9;break}return t.imagenes=[],e.next=7,w();case 7:return t.imagenes=e.sent.data,e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}},e,t)}))()}},mounted:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.state.isUserLoggedIn||t.$router.push({name:"Login"}),e.next=3,w();case 3:return t.imagenes=e.sent.data,e.next=6,k();case 6:t.links=e.sent.data,t.imagenes.files.length,t.imagenes.files.length>0&&(t._idImagenSel=t.imagenes.files[0]._id,t.imagenSel=t.imagenes.files[0].metadata.url);case 9:case"end":return e.stop()}},e,t)}))()}},G={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-header",{staticClass:"width: 100%"}),t._v(" "),a("v-container",{attrs:{column:""}},[a("v-row",{staticStyle:{"margin-top":"5%"}},[a("v-expansion-panels",{attrs:{accordion:!0,multiple:!0,focusable:!0,hover:!0,value:t.activos}},[a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Imágenes")]),t._v(" "),a("v-expansion-panel-content",[a("v-row",{staticClass:"d-flex justify-center"},[a("v-col",{attrs:{cols:6}},[a("v-card",[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.imagenSel,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"100%"}},[a("v-card-title",{staticClass:"justify-end"},[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"pink"},on:{click:function(e){return t.borrarImagen()}}},[a("i",{staticClass:"far fa-trash-alt"})])],1)],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{block:""}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left col-nombre"},[t._v("Imagen")]),t._v(" "),a("th",{staticClass:"text-left col-fecha"},[t._v("Fecha de Subida")])])]),t._v(" "),a("tbody",t._l(t.imagenes.files,function(e){return a("tr",{key:e._id,staticStyle:{cursor:"pointer"},on:{click:function(a){return t.cambiarImagen(e,e._id)}}},[a("td",{staticClass:"text-left"},[t._v(t._s(e.filename))]),t._v(" "),a("td",{staticClass:"text-left"},[t._v(t._s(e.uploadDate))])])}),0)]},proxy:!0}])})],1)],1),t._v(" "),a("v-row",{},[a("v-col",{staticClass:"col-12"},[a("form",{attrs:{enctype:"multipart/form-data"}},[a("v-file-input",{attrs:{accept:"image/*",type:"file",label:"Subir una Imagen"},model:{value:t.imagenSubir,callback:function(e){t.imagenSubir=e},expression:"imagenSubir"}}),t._v(" "),a("v-btn",{attrs:{color:"success",dark:""},on:{click:t.subirImagen}},[t._v("\n                    Subir +\n                  ")])],1)])],1)],1)],1),t._v(" "),a("v-expansion-panel",[a("v-expansion-panel-header",[t._v("Links")]),t._v(" "),a("v-expansion-panel-content",[a("v-row",t._l(t.links.links,function(e){return a("v-col",{key:e.ruta,staticClass:"col-12"},[a("form",[a("v-row",{staticClass:"justify-center",model:{value:e._id,callback:function(a){t.$set(e,"_id",a)},expression:"link._id"}},[a("v-text-field",{attrs:{label:"Teclear Link"},model:{value:e.ruta,callback:function(a){t.$set(e,"ruta",a)},expression:"link.ruta"}}),t._v(" "),a("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(a){return t.editarLink(e._id)}}},[a("i",{staticClass:"far fa-edit"})])],1)],1)])}),1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var Y=a("VU/8")(D,G,!1,function(t){a("DSAI")},"data-v-3f6d16f6",null).exports,X={name:"cintillo",methods:{redireccion:function(t){window.open(t,"_blank")},getArticulo:function(t){window.location.href="http://192.168.1.66:8080/articulo/"+t}},components:{},mounted:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t.articulos=e.sent.data.objects;case 3:case"end":return e.stop()}},e,t)}))()},data:function(){return{articulos:[],model:null}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"800"}},[a("v-slide-group",{staticClass:"pa-4",attrs:{"show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.articulos,function(e){return a("v-slide-item",{key:e._id,scopedSlots:t._u([{key:"default",fn:function(r){var n=r.active,s=r.toggle;return[a("v-card",{staticClass:"ma-4",attrs:{color:n?void 0:"grey lighten-1",height:"200",width:"220"},on:{click:s}},[a("v-img",{staticClass:"white--text align-end left",attrs:{src:e.metadata.portada.url,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[a("v-chip",{staticClass:"ma-0",attrs:{color:"deep-orange darken-3","text-color":"white"},on:{click:function(a){return t.getArticulo(e.slug)}}},[t._v("\n            "+t._s(e.metadata.hashtag)+"\n          ")]),t._v(" "),a("v-card-title",{staticClass:"slide-text pl-1 pr-0 pb-0 pt-0 d-inline-block text-truncate",staticStyle:{"max-width":"220px"},domProps:{textContent:t._s(void 0===e.metadata.titulo?"":e.metadata.titulo)}})],1)],1)]}}],null,!0)})}),1)],1)},staticRenderFns:[]};var Z={name:"Articulo",components:{PageHeader:o,PageFoot:C,PageRedesSociales:j,Cintillo:a("VU/8")(X,K,!1,function(t){a("LqoO")},null,null).exports},methods:{},computed:{articulos:{get:function(){return this.articulo}}},mounted:function(){var t=this;return f()(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t.$route.params.articuloId);case 2:t.articulo=e.sent.data.object,t.exists=!0,t.urlActual=location.toString();case 5:case"end":return e.stop()}},e,t)}))()},data:function(){return{articulo:[],exists:!1,urlActual:""}},metaInfo:function(){return{title:this.articulo.metadata.titulo,meta:[{name:"description",content:"Esto es la descripcion del articulo"},{property:"og:title",content:this.articulo.metadata.titulo},{property:"og:site_name",content:"BoserSalseo"},{property:"og:type",content:"website"},{property:"og:url",content:this.urlActual}]}}},tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{staticClass:"pa-0"},[a("page-header")],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"pr-0",attrs:{sm:12,md:8,lg:9}},[a("v-row",{attrs:{justify:"center"}},[t.exists?a("v-col",{attrs:{cols:10}},[a("div",{staticClass:"text-h3 pb-4 titulo",domProps:{textContent:t._s(void 0===t.articulo.metadata.titulo?"":t.articulo.metadata.titulo)}}),t._v(" "),a("v-row",{staticClass:"pb-2"},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-img",{staticClass:"grey darken-4",attrs:{contain:"",src:t.articulo.metadata.portada.url,height:"400"}})],1)],1)],1),t._v(" "),a("share-network",{attrs:{network:"facebook",title:t.articulo.metadata.titulo,url:t.urlActual,quote:t.articulo.metadata.titulo,hashtags:t.articulo.metadata.hashtag}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-facebook")])],1),t._v(" "),a("share-network",{attrs:{network:"reddit",url:t.urlActual,title:t.articulo.metadata.titulo}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-reddit")])],1),t._v(" "),a("share-network",{attrs:{network:"twitter",url:t.urlActual,title:t.articulo.metadata.titulo,hashtags:t.articulo.metadata.hashtag}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-twitter")])],1),t._v(" "),a("share-network",{attrs:{network:"whatsapp",url:t.urlActual,title:t.articulo.metadata.titulo}},[a("v-icon",{attrs:{size:"50"}},[t._v("mdi-whatsapp")])],1),t._v(" "),a("div",{staticClass:"pt-3",domProps:{innerHTML:t._s(t.articulo.content)}})],1):t._e()],1),t._v(" "),a("v-row",{staticClass:"pt-3"},[a("v-col",{staticClass:"pb-0"},[a("cintillo")],1)],1)],1),t._v(" "),a("v-col",{staticClass:"pa-0",attrs:{sm:12,md:4,lg:3}},[a("page-redes-sociales",{staticClass:"width: 100%"})],1)],1),t._v(" "),a("v-row",[a("v-col",{staticClass:"pr-0 pl-0 pb-0"},[a("page-foot",{staticClass:"width: 100%"})],1)],1)],1)},staticRenderFns:[]};var et=a("VU/8")(Z,tt,!1,function(t){a("PNga")},"data-v-51e92b35",null).exports,at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("center",[e("h1",[this._v("Not Found!")]),this._v(" "),e("p",[e("a",{attrs:{href:"/"}},[this._v("Go home?")])])])},staticRenderFns:[]};var rt=a("VU/8")({name:"NotFound"},at,!1,function(t){a("INhu")},"data-v-72161321",null).exports;r.default.use(u.a);var nt=new u.a({mode:"history",routes:[{path:"/",name:"index",component:N},{path:"/login",name:"Login",component:M},{path:"/admin",name:"admin",component:Y},{path:"/articulo/:articuloId",name:"articulo",component:et},{path:"*",name:"Not Found",component:rt}]}),st=a("3EgV"),ot=a.n(st);a("7zck");r.default.use(ot.a);var it=new ot.a({}),ct=a("9JMe"),lt=a("NYxO");r.default.use(lt.a);var ut=new lt.a.Store({strict:!0,state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),dt=a("DhCh"),mt=a("j9CP"),pt=a.n(mt),ft=a("f3bp");r.default.config.productionTip=!1,r.default.use(pt.a),r.default.use(_.a),r.default.use(dt.a,0xa093d8877a7db),r.default.use(ft.a),Object(ct.sync)(ut,nt),new r.default({vuetify:it,el:"#app",router:nt,store:ut,components:{App:l},template:"<App/>"}).$mount("#app")},PNga:function(t,e){},QTgS:function(t,e,a){"use strict";var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"fb-root"}}),t._v(" "),a("div",{attrs:{id:"facebook-clicker"},on:{click:t.showFb}}),t._v(" "),a("div",{staticStyle:{display:"none"},attrs:{id:"hidden-fb"}},[a("div",{staticClass:"fb-page",attrs:{"data-href":t.dataHref,"data-tabs":"timeline","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"}},[a("blockquote",{staticClass:"fb-xfbml-parse-ignore",attrs:{cite:t.dataHref}},[a("a",{attrs:{href:t.dataHref}},[t._v(t._s(t.linkText))])])])])])},staticRenderFns:[]};var n=a("VU/8")({props:["data-href","link-text"],name:"VueFacebookPage"},r,!1,function(t){a("WBbQ")},"data-v-4f487a7d",null);e.a=n.exports},WBbQ:function(t,e){},ciFX:function(t,e){},p3Lc:function(t,e){},rbv4:function(t,e){}},["NHnr"]);