(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["V4"],{"0c52":function(e,t,i){},"28bf":function(e,t,i){},"3f09":function(e,t,i){"use strict";var n=i("b71c"),a=i.n(n);a.a},"4de4":function(e,t,i){"use strict";var n=i("23e7"),a=i("b727").filter,r=i("1dde"),s=i("ae40"),o=r("filter"),u=s("filter");n({target:"Array",proto:!0,forced:!o||!u},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var n=i("1d80"),a=i("5899"),r="["+a+"]",s=RegExp("^"+r+r+"*"),o=RegExp(r+r+"*$"),u=function(e){return function(t){var i=String(n(t));return 1&e&&(i=i.replace(s,"")),2&e&&(i=i.replace(o,"")),i}};e.exports={start:u(1),end:u(2),trim:u(3)}},9093:function(e,t){var i="<h2 id=v4-school-reopening-scenarios-1>v4: School Reopening Scenarios (1)</h2> <p>V4 attempts to replay the development so far, and explores results of various school attendance scenarios and two levels of restrictions on non-school activity:</p> <ul> <li>The simulations refer to the <strong>Berlin</strong> region (Berlin city plus some surroundings).</li> <li>On <strong>day 26</strong>, 10% of leisure acts are banned (corresponding to the closure of theaters, etc.) Also, schools / kindergarten / universities are closed. 10 percent of kita and primary-aged children still go to kita / primary schools (Notbetrieb)</li> <li>On <strong>day 35</strong>, work, shopping, errands and business are restricted, corresponding to the currently valid &quot;Kontaktsperre&quot;:<ul> <li>Type A: Work and shopping 60% reduced; leisure, business and errands 80% reduced</li> <li>Type B: Work and shopping 80% reduced; leisure, business and errands 90% reduced</li> </ul> </li> <li>Educational facilities can be reopened on <strong>day 63</strong> (estimated to be the 20th of April).</li> </ul> <p>The <strong>base doubling time is approx. 3 days</strong>. It corresponds to the German growth rate 2nd &amp; 3rd week of Mar, i.e. with slight cultural adaptations but not policy interventions.</p> <p>The <strong>doubling time of &quot;Type A&quot; is approx. 13 days</strong>, which is <em>more optimistic</em> than what we currently measure (approx. 9 days).</p> <p>&quot;Type B&quot; is even more optimistic.</p> <p>What has changed compring to v2?</p> <ul> <li>Inclusion of school population</li> </ul> ";e.exports=i},"9aaf":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"readme",domProps:{innerHTML:e._s(e.readme)}})]),i("section-viewer",{staticClass:"viewer",attrs:{state:e.state}})],1)},a=[],r=(i("a630"),i("c975"),i("b64b"),i("d3b7"),i("6062"),i("3ca3"),i("ddb0"),i("b85c")),s=(i("96cf"),i("1da1")),o=i("d4ec"),u=i("bee2"),l=i("262e"),c=i("2caf"),d=i("9ab4"),h=i("369b"),p=i.n(h),f=i("60a3"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"main-section"}},[i("div",{staticClass:"pieces"},[i("div",{staticClass:"sliders"},[i("h5",[e._v("School Attendance")]),i("p",{staticClass:"subhead"},[e._v("Percent Still Attending:")]),e._l(Object.keys(e.state.measures),(function(t){return i("div",{key:t,staticClass:"myslider"},[i("my-slider",{attrs:{measure:t,state:e.state},on:{changed:e.sliderChanged}})],1)})),e._m(0),i("p",{staticClass:"infected"},[e._v(e._s(e.prettyInfected))])],2),i("div",{staticClass:"linear-plot"},[i("h5",[e._v("Simulated Population Health Outcomes Over Time")]),i("p",[e._v("Linear scale")]),i("vue-plotly",{staticClass:"plotsize",attrs:{data:e.data,layout:e.layout,options:e.options}})],1),i("div",{staticClass:"log-plot"},[i("h5",[e._v("Simulated Population Health Outcomes Over Time")]),i("p",[e._v("Log scale")]),i("vue-plotly",{staticClass:"plotsize",attrs:{data:e.data,layout:e.loglayout,options:e.options}})],1)])])},v=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h5",{staticClass:"cumulative"},[e._v("Cumulative Infected"),i("br"),e._v("by Day 150")])}],b=(i("4de4"),i("d81d"),i("fb6a"),i("b0c0"),i("a9e3"),i("43e0")),g=i.n(b),y=i("3bba"),x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"slider-thing"}},[e.showSlider?i("vue-slide-bar",{staticClass:"my-slider",attrs:{speed:0,data:e.stops},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e._e(),e.showButtons?i("div",{staticClass:"button-choices"},e._l(e.stops,(function(t){return i("button",{key:t,staticClass:"button is-small",class:{"is-link":t===e.value},on:{click:function(i){return e.choseButton(t)}}},[e._v(e._s(t))])})),0):e._e(),i("p",[e._v(e._s(e.measureTitle))])],1)},w=[],k=i("b68d"),S=i.n(k),C=function(e){Object(l["a"])(i,e);var t=Object(c["a"])(i);function i(){var e;return Object(o["a"])(this,i),e=t.apply(this,arguments),e.value=0,e.stops=[0,1e3],e.showButtons=!1,e.showSlider=!0,e.interventions={remainingFractionKiga:"Going to kindergarten",remainingFractionPrimary:"Going to primary school",remainingFractionSecondary:"Going to secondary school",remainingFractionHigher:"Going to univ./higher ed.",ShutdownType:"Shutdown type"},e}return Object(u["a"])(i,[{key:"choseButton",value:function(e){console.log(e),this.value=e}},{key:"mounted",value:function(){var e,t=[],i=Object(r["a"])(this.state.measures[this.measure]);try{for(i.s();!(e=i.n()).done;){var n=e.value,a=n;"weak"===n&&(a="Type A"),"strong"===n&&(a="Type B"),isNaN(a)&&(this.showButtons||(this.value=a),this.showButtons=!0,this.showSlider=!1),t.push(a)}}catch(s){i.e(s)}finally{i.f()}this.stops=t.map((function(e){return e<=1?100*e:e})),this.showSlider&&(this.value="Never")}},{key:"valueChanged",value:function(){var e=this.value;"Never"===e?e=1e3:"Type A"===e?e="weak":"Type B"===e?e="strong":isNaN(e)||(e*=.01),this.$emit("changed",this.measure,e)}},{key:"measureTitle",get:function(){return this.interventions[this.measure]}}]),i}(f["c"]);Object(d["a"])([Object(f["b"])()],C.prototype,"state",void 0),Object(d["a"])([Object(f["b"])()],C.prototype,"measure",void 0),Object(d["a"])([Object(f["d"])("value")],C.prototype,"valueChanged",null),C=Object(d["a"])([Object(f["a"])({components:{VueSlideBar:S.a}})],C);var O=C,_=O,T=(i("3f09"),i("2877")),E=Object(T["a"])(_,x,w,!1,null,"02c33eb0",null),j=E.exports,I=function(e){Object(l["a"])(i,e);var t=Object(c["a"])(i);function i(){var e;return Object(o["a"])(this,i),e=t.apply(this,arguments),e.currentRun={},e.data=[],e.layout={autosize:!0,legend:{orientation:"h"},font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},margin:{l:50,t:10,r:10,b:0},yaxis:{autorange:!0},xaxis:{}},e.loglayout={autosize:!0,legend:{orientation:"h"},font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},margin:{l:50,t:10,r:10,b:0},yaxis:{type:"log",autorange:!0}},e.options={displayModeBar:!1,responsive:!0},e.currentSituation={},e.loadedSeriesData={},e.labels={nSusceptible:"Susceptible",nInfectedButNotContagious:"Infected, not contagious",nContagious:"Contagious",nSeriouslySick:"Seriously Sick",nCritical:"Critical",nTotalInfected:"Total Infected",nInfectedCumulative:"Infected Cumulative",nRecovered:"Recovered",nInQuarantine:"In Quarantine"},e}return Object(u["a"])(i,[{key:"mounted",value:function(){this.loadZipData()}},{key:"loadZipData",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.zipLoader=new y["a"](this.state.publicPath+"v4-data.zip"),e.next=3,this.zipLoader.load();case 3:console.log("zip loaded!"),this.runChanged();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"runChanged",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log({run:this.currentRun}),!this.loadedSeriesData[this.currentRun.RunId]){e.next=5;break}return this.data=this.loadedSeriesData[this.currentRun.RunId],this.updateTotalInfected(),e.abrupt("return");case 5:return e.next=7,this.loadCSV(this.currentRun);case 7:t=e.sent,i=this.generateSeriesFromCSVData(t),this.loadedSeriesData[this.currentRun.RunId]=i,this.data=i,this.updateTotalInfected();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateTotalInfected",value:function(){var e=this.data.filter((function(e){return"Infected Cumulative"===e.name}))[0];this.state.cumulativeInfected=e.y[149]}},{key:"sliderChanged",value:function(e,t){console.log(e,t),this.currentSituation[e]=t,this.showPlotForCurrentSituation()}},{key:"showPlotForCurrentSituation",value:function(){for(var e="",t=0,i=Object.keys(this.state.measures);t<i.length;t++){var n=i[t];e+=this.currentSituation[n]+"-"}console.log(e),this.currentRun=this.state.runLookup[e],this.currentRun&&this.runChanged()}},{key:"unpack",value:function(e,t){var i=e.map((function(e){return e[t]}));return i=i.slice(0,150),i.length<150&&i.push("day"===t?150:i[i.length-1]),i}},{key:"loadCSV",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.RunId){e.next=2;break}return e.abrupt("return",[]);case 2:return i=t.RunId+".infections.txt",console.log("Extracting",i),n=this.zipLoader.extractAsText(i),a=p.a.parse(n,{header:!0,dynamicTyping:!0,skipEmptyLines:!0}),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"generateSeriesFromCSVData",value:function(e){for(var t=[],i=this.unpack(e,"day"),n=0,a=Object.keys(this.labels);n<a.length;n++){var r=a[n],s=this.labels[r],o=this.unpack(e,r);t.push({x:i,y:o,name:s})}return t}},{key:"prettyInfected",get:function(){if(!this.state.cumulativeInfected)return"";var e=100*Math.round(.01*this.state.cumulativeInfected);return Number(e).toLocaleString()}}]),i}(f["c"]);Object(d["a"])([Object(f["b"])()],I.prototype,"state",void 0),I=Object(d["a"])([Object(f["a"])({components:{MySlider:j,VuePlotly:g.a}})],I);var V=I,R=V,N=(i("c051"),Object(T["a"])(R,m,v,!1,null,"33a63223",null)),L=N.exports,A=function(e){Object(l["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.state={measures:{},runLookup:{},cumulativeInfected:0,publicPath:"/covid-sim/"},e.readme=i("9093"),e}return Object(u["a"])(n,[{key:"mounted",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadIndexData();case 2:return t=e.sent,e.next=5,this.generateScenarioMatrix(t);case 5:e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadIndexData",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("fetching data"),e.next=3,fetch(this.state.publicPath+"v4-info.txt");case 3:return t=e.sent,e.next=6,t.text();case 6:return i=e.sent,n=p.a.parse(i,{header:!0,dynamicTyping:!0}),console.log({parsed:n.data}),e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"generateScenarioMatrix",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var i,n,a,s,o,u,l,c,d,h,p,f,m,v,b,g,y,x,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("generating lookups"),i={},n={},a=["Config","Output","RunId","RunScript"],s=0,o=Object.keys(t[0]);case 5:if(!(s<o.length)){e.next=13;break}if(u=o[s],!(a.indexOf(u)>-1)){e.next=9;break}return e.abrupt("continue",10);case 9:i[u]=new Set;case 10:s++,e.next=5;break;case 13:l=Object(r["a"])(t),e.prev=14,l.s();case 16:if((c=l.n()).done){e.next=26;break}if(d=c.value,d.RunId){e.next=20;break}return e.abrupt("continue",24);case 20:for(h=0,p=Object.keys(i);h<p.length;h++)f=p[h],(0===d[f]||d[f])&&i[f].add(d[f]);for(m="",v=0,b=Object.keys(i);v<b.length;v++)g=b[v],m+=d[g]+"-";n[m]=d;case 24:e.next=16;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e["catch"](14),l.e(e.t0);case 31:return e.prev=31,l.f(),e.finish(31);case 34:for(y=0,x=Object.keys(i);y<x.length;y++)w=x[y],i[w]=Array.from(i[w].keys()).sort((function(e,t){return e-t}));console.log({measures:i,runLookup:n}),this.state.measures=i,this.state.runLookup=n;case 38:case"end":return e.stop()}}),e,this,[[14,28,31,34]])})));function t(t){return e.apply(this,arguments)}return t}()}]),n}(f["c"]);A=Object(d["a"])([Object(f["a"])({components:{SectionViewer:L}})],A);var z=A,P=z,$=(i("e43b"),Object(T["a"])(P,n,a,!1,null,"6a4976bc",null));t["default"]=$.exports},a9e3:function(e,t,i){"use strict";var n=i("83ab"),a=i("da84"),r=i("94ca"),s=i("6eeb"),o=i("5135"),u=i("c6b6"),l=i("7156"),c=i("c04e"),d=i("d039"),h=i("7c73"),p=i("241c").f,f=i("06cf").f,m=i("9bf2").f,v=i("58a8").trim,b="Number",g=a[b],y=g.prototype,x=u(h(y))==b,w=function(e){var t,i,n,a,r,s,o,u,l=c(e,!1);if("string"==typeof l&&l.length>2)if(l=v(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(r=l.slice(2),s=r.length,o=0;o<s;o++)if(u=r.charCodeAt(o),u<48||u>a)return NaN;return parseInt(r,n)}return+l};if(r(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,S=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof S&&(x?d((function(){y.valueOf.call(i)})):u(i)!=b)?l(new g(w(t)),i,S):w(t)},C=n?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;C.length>O;O++)o(g,k=C[O])&&!o(S,k)&&m(S,k,f(g,k));S.prototype=y,y.constructor=S,s(a,b,S)}},b68d:function(e,t,i){
/*!
 * vue-slide-bar v1.2.0
 * (c) 2018-present biig_pongsatorn <biig_pongsatorn@hotmail.com>
 * Released under the MIT License.
 */
!function(t,i){e.exports=i()}(0,(function(){"use strict";function e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function t(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(i){e(t,i,n[i])}))}return t}var i={name:"vue-slide-bar",data:function(){return{flag:!1,size:0,currentValue:0,currentSlider:0,isComponentExists:!0,interval:1,lazy:!1,realTime:!1,dataLabelStyles:t({color:"#4a4a4a","font-family":"Arial, sans-serif","font-size":"12px"},this.$props.labelStyles)}},props:{data:{type:Array,default:null},id:{type:String,default:"wrap"},range:{type:Array,default:null},speed:{type:Number,default:.5},lineHeight:{type:Number,default:5},iconWidth:{type:Number,default:20},value:{type:[String,Number],default:0},min:{type:Number,default:0},max:{type:Number,default:100},showTooltip:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},paddingless:{type:Boolean,default:!1},tooltipStyles:Object,labelStyles:Object,processStyle:Object},computed:{slider:function(){return this.$refs.tooltip},val:{get:function(){return this.data?this.data[this.currentValue]:this.currentValue},set:function(e){if(this.data){var t=this.data.indexOf(e);t>-1&&(this.currentValue=t)}else this.currentValue=e}},currentIndex:function(){return(this.currentValue-this.minimum)/this.spacing},indexRange:function(){return[0,this.currentIndex]},minimum:function(){return this.data?0:this.min},maximum:function(){return this.data?this.data.length-1:this.max},multiple:function(){var e="".concat(this.interval).split(".")[1];return e?Math.pow(10,e.length):1},spacing:function(){return this.data?1:this.interval},total:function(){return this.data?this.data.length-1:(Math.floor((this.maximum-this.minimum)*this.multiple)%(this.interval*this.multiple)!=0&&this.printError("[VueSlideBar error]: Prop[interval] is illegal, Please make sure that the interval can be divisible"),(this.maximum-this.minimum)/this.interval)},gap:function(){return this.size/this.total},position:function(){return(this.currentValue-this.minimum)/this.spacing*this.gap},limit:function(){return[0,this.size]},valueLimit:function(){return[this.minimum,this.maximum]},calculateHeight:function(){return this.paddingless?{}:{"padding-top":"40px","min-height":this.range?"100px":null}}},watch:{value:function(e){this.flag?this.setValue(e):this.setValue(e,this.speed)},max:function(e){if(e<this.min)return this.printError("[VueSlideBar error]: The maximum value can not be less than the minimum value.");var t=this.limitValue(this.val);this.setValue(t),this.refresh()},min:function(e){if(e>this.max)return this.printError("[VueSlideBar error]: The minimum value can not be greater than the maximum value.");var t=this.limitValue(this.val);this.setValue(t),this.refresh()}},methods:{bindEvents:function(){document.addEventListener("touchmove",this.moving,{passive:!1}),document.addEventListener("touchend",this.moveEnd,{passive:!1}),document.addEventListener("mousemove",this.moving),document.addEventListener("mouseup",this.moveEnd),document.addEventListener("mouseleave",this.moveEnd),window.addEventListener("resize",this.refresh)},unbindEvents:function(){window.removeEventListener("resize",this.refresh),document.removeEventListener("touchmove",this.moving),document.removeEventListener("touchend",this.moveEnd),document.removeEventListener("mousemove",this.moving),document.removeEventListener("mouseup",this.moveEnd),document.removeEventListener("mouseleave",this.moveEnd)},getPos:function(e){return this.realTime&&this.getStaticData(),e.clientX-this.offset},wrapClick:function(e){if(this.isDisabled||!this.draggable&&e.target.id===this.id)return!1;var t=this.getPos(e);this.setValueOnPos(t)},moveStart:function(e,t){if(!this.draggable)return!1;this.flag=!0,this.$emit("dragStart",this)},moving:function(e){if(!this.flag||!this.draggable)return!1;e.preventDefault(),e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),this.setValueOnPos(this.getPos(e),!0)},moveEnd:function(e){if(!this.flag||!this.draggable)return!1;this.$emit("dragEnd",this),this.lazy&&this.isDiff(this.val,this.value)&&this.syncValue(),this.flag=!1,this.setPosition()},setValueOnPos:function(e,t){var i=this.limit,n=this.valueLimit;if(e>=i[0]&&e<=i[1]){this.setTransform(e);var a=(Math.round(e/this.gap)*(this.spacing*this.multiple)+this.minimum*this.multiple)/this.multiple;this.setCurrentValue(a,t)}else e<i[0]?(this.setTransform(i[0]),this.setCurrentValue(n[0]),1===this.currentSlider&&(this.currentSlider=0)):(this.setTransform(i[1]),this.setCurrentValue(n[1]),0===this.currentSlider&&(this.currentSlider=1))},isDiff:function(e,t){return Object.prototype.toString.call(e)!==Object.prototype.toString.call(t)||(Array.isArray(e)&&e.length===t.length?e.some((function(e,i){return e!==t[i]})):e!==t)},setCurrentValue:function(e,t){if(e<this.minimum||e>this.maximum)return!1;this.isDiff(this.currentValue,e)&&(this.currentValue=e,this.lazy&&this.flag||this.syncValue()),t||this.setPosition()},setIndex:function(e){e=this.spacing*e+this.minimum,this.setCurrentValue(e)},setValue:function(e,t){var i=this;if(this.isDiff(this.val,e)){var n=this.limitValue(e);this.val=n,this.syncValue()}this.$nextTick((function(){return i.setPosition(t)}))},setPosition:function(e){this.flag?this.setTransitionTime(0):this.setTransitionTime(void 0===e?this.speed:e),this.setTransform(this.position)},setTransform:function(e){var t=e-(this.$refs.tooltip.scrollWidth-2)/2,i="translateX(".concat(t,"px)");this.slider.style.transform=i,this.slider.style.WebkitTransform=i,this.slider.style.msTransform=i,this.$refs.process.style.width="".concat(e,"px"),this.$refs.process.style.left=0},setTransitionTime:function(e){this.slider.style.transitionDuration="".concat(e,"s"),this.slider.style.WebkitTransitionDuration="".concat(e,"s"),this.$refs.process.style.transitionDuration="".concat(e,"s"),this.$refs.process.style.WebkitTransitionDuration="".concat(e,"s")},limitValue:function(e){var t,i=this;return this.data?e:(t=e)<i.min?(i.printError("[VueSlideBar warn]: The value of the slider is ".concat(e,", the minimum value is ").concat(i.min,", the value of this slider can not be less than the minimum value")),i.min):t>i.max?(i.printError("[VueSlideBar warn]: The value of the slider is ".concat(e,", the maximum value is ").concat(i.max,", the value of this slider can not be greater than the maximum value")),i.max):t},syncValue:function(){var e=this.val;this.range&&this.$emit("callbackRange",this.range[this.currentIndex]),this.$emit("input",e)},getValue:function(){return this.val},getIndex:function(){return this.currentIndex},getStaticData:function(){this.$refs.elem&&(this.size=this.$refs.elem.offsetWidth,this.offset=this.$refs.elem.getBoundingClientRect().left)},refresh:function(){this.$refs.elem&&(this.getStaticData(),this.setPosition())},printError:function(e){console.error(e)}},mounted:function(){var e=this;if(this.isComponentExists=!0,"undefined"==typeof window||"undefined"==typeof document)return this.printError("[VueSlideBar error]: window or document is undefined, can not be initialization.");this.$nextTick((function(){e.isComponentExists&&(e.getStaticData(),e.setValue(e.limitValue(e.value),0),e.bindEvents())}))},beforeDestroy:function(){this.isComponentExists=!1,this.unbindEvents()}};const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),a=document.head||document.getElementsByTagName("head")[0],r={},s=i;return i.__file="index.vue",function(e,t,i,n,a,r,s,o,u,l){"function"==typeof s&&(u=o,o=s,s=!1);const c="function"==typeof i?i.options:i;let d;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),n&&(c._scopeId=n),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=d):t&&(d=s?function(){t.call(this,l(this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),d)if(c.functional){const e=c.render;c.render=function(t,i){return d.call(i),e(t,i)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,d):[d]}return i}({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"wrap",staticClass:"vue-slide-bar-component vue-slide-bar-horizontal",style:e.calculateHeight,attrs:{id:e.id},on:{click:e.wrapClick}},[i("div",{ref:"elem",staticClass:"vue-slide-bar",style:{height:e.lineHeight+"px"}},[[i("div",{ref:"tooltip",staticClass:"vue-slide-bar-always vue-slide-bar-tooltip-container",style:{width:e.iconWidth+"px"},on:{mousedown:e.moveStart,touchstart:e.moveStart}},[e.showTooltip?i("span",{staticClass:"vue-slide-bar-tooltip-top vue-slide-bar-tooltip-wrap"},[e._t("tooltip",[i("span",{staticClass:"vue-slide-bar-tooltip",style:e.tooltipStyles},[e._v("\n              "+e._s(e.val)+"\n            ")])])],2):e._e()])],e._v(" "),i("div",{ref:"process",staticClass:"vue-slide-bar-process",style:e.processStyle})],2),e._v(" "),e.range?i("div",{staticClass:"vue-slide-bar-range"},e._l(e.range,(function(t,n){return i("div",{key:n,staticClass:"vue-slide-bar-separate",style:e.dataLabelStyles},[t.isHide?e._e():i("span",{staticClass:"vue-slide-bar-separate-text"},[e._v("\n        "+e._s(t.label)+"\n      ")])])})),0):e._e()])},staticRenderFns:[]},(function(e){e&&e("data-v-d3e7b39a_0",{source:".vue-slide-bar-component[data-v-d3e7b39a]{position:relative;box-sizing:border-box;user-select:none}.vue-slide-bar[data-v-d3e7b39a]{position:relative;display:block;border-radius:15px;background-color:#d8d8d8;cursor:pointer}.vue-slide-bar[data-v-d3e7b39a]::after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;z-index:2}.vue-slide-bar-process[data-v-d3e7b39a]{position:absolute;border-radius:15px;background-color:#1066fd;transition:all 0s;z-index:1;width:0;height:100%;top:0;left:0;will-change:width}.vue-slide-bar-tooltip-container[data-v-d3e7b39a]{position:absolute;transition:all 0s;will-change:transform;cursor:pointer;z-index:3;left:0;top:-16px}.vue-slide-bar-tooltip-wrap[data-v-d3e7b39a]{position:absolute;z-index:9;width:100%;height:100%;display:block!important}.vue-slide-bar-tooltip-top[data-v-d3e7b39a]{top:-12px;left:40%;transform:translate(-50%,-100%)}.vue-slide-bar-tooltip[data-v-d3e7b39a]{position:relative;font-size:14px;white-space:nowrap;padding:2px 5px;min-width:20px;text-align:center;color:#fff;border-radius:5px;border:1px solid #1066fd;background-color:#1066fd}.vue-slide-bar-tooltip[data-v-d3e7b39a]::before{content:'';position:absolute;bottom:-10px;left:50%;width:0;height:0;border:5px solid transparent;border-top-color:inherit;transform:translate(-50%,0)}.vue-slide-bar-range[data-v-d3e7b39a]{display:flex;padding:5px 0;justify-content:space-between}.vue-slide-bar-separate[data-v-d3e7b39a]{position:relative;width:2px;background-color:#9e9e9e;height:5px;cursor:pointer}.vue-slide-bar-separate-text[data-v-d3e7b39a]{text-align:center;position:absolute;white-space:nowrap;transform:translate(-50%,0);top:6px}",map:void 0,media:void 0})}),s,"data-v-d3e7b39a",!1,void 0,(function(e){return(e,t)=>function(e,t){const i=n?t.media||"default":e,s=r[i]||(r[i]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let i=t.source;if(t.map&&(i+="\n/*# sourceURL="+t.map.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",t.media&&s.element.setAttribute("media",t.media),a.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(i),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,t=document.createTextNode(i),n=s.element.childNodes;n[e]&&s.element.removeChild(n[e]),n.length?s.element.insertBefore(t,n[e]):s.element.appendChild(t)}}}(e,t)}),void 0)}))},b71c:function(e,t,i){},c051:function(e,t,i){"use strict";var n=i("0c52"),a=i.n(n);a.a},e43b:function(e,t,i){"use strict";var n=i("28bf"),a=i.n(n);a.a}}]);