(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["speaking"],{"860c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[n("v-row",{staticClass:"main"},[n("v-col",[n("video",{ref:"video",staticClass:"main__image"},[n("source",{ref:"src",attrs:{src:"./assets/video/"+this.step+".mp4",type:"video/mp4"}})]),n("v-btn",{attrs:{tile:"",block:""},on:{click:function(t){return e.video()}}},[e._v("Начать разговор")])],1),n("v-col",{ref:"chat",staticClass:"indigo lighten-4"},[e._v("Чат"),n("div",{ref:"answer",staticClass:"amber darken-4"}),n("p",{ref:"speech"})])],1)],1)},o=[],i=n("5530"),s=n("2f62"),r={name:"Speaking",components:{},props:[],data:function(){return{step:0,status:"",isAnswer:["Yes, actually I am lost! How did you know?","1","2","3"],videoIsEnded:!1,count_error:0,recognition:""}},computed:Object(i["a"])({},Object(s["c"])({words:"getWords",urlFiles:"getUrlFiles",getShortStatistics:"showShortStatistics"})),watch:{},created:function(){},mounted:function(){this.appHtml([{one:"main",key:"drawer",value:!1},{one:"main",key:"breadcrumbs",value:!1},{one:"main",key:"background",value:"indigo lighten-5"},{one:"app",key:"background",value:"indigo darken-4"},{one:"app",key:"colorWhite",value:!0}])},beforeDestroy:function(){this.appHtml([{one:"main",key:"drawer",value:!0},{one:"main",key:"breadcrumbs",value:!0},{one:"main",key:"background",value:""},{one:"app",key:"background",value:"grey lighten-5"},{one:"app",key:"colorWhite",value:!1}])},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["d"])({appHtml:"EDIT_HTML",offStatistics:"SHOW_SHORT_STATISTICS"})),Object(s["b"])({getWords:"APP_GET_USER_WORDS_AGGREGATED",alert:"ALERT"})),{},{speak:function(){var e=this,t=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new t,this.recognition.lang="en-US",this.recognition.continuos=!1,this.recognition.interimResults=!1,this.recognition.maxAlternatives=1,this.recognition.onerror=function(t){console.log("It's error! ".concat(t.error)),e.count_error+=1,e.count_error>100&&(e.recognition.onend=function(){return e.recognition.stop()})},this.count_error=0,this.recognition.addEventListener("result",(function(t){var n=t.results.length-1,a=t.results[n][0].transcript.toLowerCase(),o=document.createElement("p");o.className="black white--text",o.ref="speech".concat(e.step),o.textContent=a,e.$refs.chat.append(o),e.recognition.onend=function(){return e.recognition.stop()}})),this.recognition.start()},video:function(){var e=this;this.step>=4||(this.$refs.video.play(),this.$refs.video.onended=function(){e.speak(),e.answer(),e.step+=1,console.log(e.step),e.$refs.src.setAttribute("src","./assets/video/".concat(e.step,".mp4")),e.$refs.video.load()})},answer:function(){var e=document.createElement("div");e.className="amber darken-4",e.ref="answer".concat(this.step),e.textContent=this.isAnswer[this.step],this.$refs.chat.append(e)}})},c=r,d=(n("e9b6"),n("2877")),l=n("6544"),u=n.n(l),p=n("8336"),g=n("62ad"),h=n("0fd9"),m=Object(d["a"])(c,a,o,!1,null,"a7010512",null);t["default"]=m.exports;u()(m,{VBtn:p["a"],VCol:g["a"],VRow:h["a"]})},c02a:function(e,t,n){var a=n("f0aa");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("3eb48662",a,!0,{sourceMap:!1,shadowMode:!1})},e9b6:function(e,t,n){"use strict";var a=n("c02a"),o=n.n(a);o.a},f0aa:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".game[data-v-a7010512]{height:100%;padding:0 15%;box-sizing:border-box}.game p[data-v-a7010512]{margin:0}.game .main[data-v-a7010512]{height:80%}.game .main__image[data-v-a7010512]{padding:2% 0;max-width:300px;display:block;margin:0 auto;align-items:center}.game .answer[data-v-a7010512]{display:block}",""]),e.exports=t}}]);