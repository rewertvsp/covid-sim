(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["V7"],{"0331":function(t,e,n){},1276:function(t,e,n){"use strict";var a=n("d784"),i=n("44e7"),s=n("825a"),r=n("1d80"),o=n("4840"),l=n("8aa5"),c=n("50c4"),u=n("14c3"),d=n("9263"),h=n("d039"),p=[].push,g=Math.min,f=4294967295,v=!h((function(){return!RegExp(f,"y")}));a("split",2,(function(t,e,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(r(this)),s=void 0===n?f:n>>>0;if(0===s)return[];if(void 0===t)return[a];if(!i(t))return e.call(a,t,s);var o,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,v=new RegExp(t.source,h+"g");while(o=d.call(v,a)){if(l=v.lastIndex,l>g&&(u.push(a.slice(g,o.index)),o.length>1&&o.index<a.length&&p.apply(u,o.slice(1)),c=o[0].length,g=l,u.length>=s))break;v.lastIndex===o.index&&v.lastIndex++}return g===a.length?!c&&v.test("")||u.push(""):u.push(a.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,n):a.call(String(i),e,n)},function(t,i){var r=n(a,t,this,i,a!==e);if(r.done)return r.value;var d=s(t),h=String(this),p=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),y=new p(v?d:"^(?:"+d.source+")",b),k=void 0===i?f:i>>>0;if(0===k)return[];if(0===h.length)return null===u(y,h)?[h]:[];var C=0,S=0,O=[];while(S<h.length){y.lastIndex=v?S:0;var w,_=u(y,v?h:h.slice(S));if(null===_||(w=g(c(y.lastIndex+(v?0:S)),h.length))===C)S=l(h,S,m);else{if(O.push(h.slice(C,S)),O.length===k)return O;for(var j=1;j<=_.length-1;j++)if(O.push(_[j]),O.length===k)return O;S=C=w}}return O.push(h.slice(C)),O}]}),!v)},"134e":function(t,e,n){"use strict";var a=n("ce43"),i=n.n(a);i.a},"1a87":function(t,e,n){"use strict";n.r(e),e["default"]="Datum,Gemeldete Fälle,Stationäre Behandlung,Intensivmedizin,gestorben\r\n01.03.2020,1,1,0,0\r\n02.03.2020,3,1,0,0\r\n03.03.2020,5,4,0,0\r\n04.03.2020,8,4,0,0\r\n05.03.2020,20,4,0,0\r\n06.03.2020,25,4,0,0\r\n07.03.2020,26,4,0,0\r\n08.03.2020,37,4,0,0\r\n09.03.2020,59,4,0,0\r\n10.03.2020,93,4,0,0\r\n11.03.2020,136,5,0,0\r\n12.03.2020,183,5,0,0\r\n13.03.2020,244,8,0,0\r\n14.03.2020,273,15,0,0\r\n15.03.2020,298,16,0,0\r\n16.03.2020,361,20,3,0\r\n17.03.2020,456,21,4,0\r\n18.03.2020,601,28,9,0\r\n19.03.2020,779,43,15,0\r\n20.03.2020,947,44,18,1\r\n21.03.2020,1074,39,14,1\r\n22.03.2020,1144,41,20,1\r\n23.03.2020,1302,47,22,2\r\n24.03.2020,1501,112,26,3\r\n25.03.2020,1749,208,38,4\r\n26.03.2020,2033,235,46,8\r\n27.03.2020,2238,261,53,8\r\n28.03.2020,2434,300,64,9\r\n29.03.2020,2521,312,70,11\r\n30.03.2020,2684,381,84,13\r\n31.03.2020,2897,380,92,15\r\n01.04.2020,3084,479,104,17\r\n02.04.2020,3309,458,116,20\r\n03.04.2020,3547,473,124,22\r\n04.04.2020,3655,502,127,24\r\n05.04.2020,3729,507,126,26\r\n06.04.2020,3874,527,133,28\r\n07.04.2020,4069,505,118,32\r\n08.04.2020,4238,546,126,37\r\n09.04.2020,4357,559,136,42\r\n10.04.2020,4446,615,143,46\r\n11.04.2020,4553,601,139,50\r\n12.04.2020,4583,566,133,51\r\n13.04.2020,4667,568,141,56\r\n14.04.2020,4736,582,137,62\r\n15.04.2020,4870,599,128,74\r\n16.04.2020,4971,602,142,84\r\n17.04.2020,5091,585,146,91\r\n18.04.2020,5187,592,153,92\r\n19.04.2020,5225,567,156,94\r\n20.04.2020,5265,567,156,97\r\n21.04.2020,5341,596,164,105\r\n22.04.2020,5355,596,164,105\r\n23.04.2020,5476,565,152,112\r\n24.04.2020,5532,523,154,113\r\n25.04.2020,5607,524,156,123\r\n26.04.2020,5644,546,160,125\r\n27.04.2020,5677,542,152,127\r\n28.04.2020,5738,540,158,137\r\n29.04.2020,5821,604,157,147\r\n30.04.2020,5881,566,162,149\r\n01.05.2020,5936,527,160,152\r\n02.05.2020,5970,541,159,154\r\n03.05.2020,6004,511,152,154\r\n04.05.2020,6036,484,145,154\r\n05.05.2020,6086,476,144,159\r\n06.05.2020,6143,495,141,162\r\n07.05.2020,6203,508,152,163\r\n08.05.2020,6236,467,150,164\r\n09.05.2020,6256,469,142,165\r\n10.05.2020,6267,486,151,165\r\n11.05.2020,6269,447,135,165\r\n12.05.2020,6294,412,131,170\r\n13.05.2020,6338,352,123,173\r\n14.05.2020,6393,282,103,177\r\n15.05.2020,6424,259,93,181\r\n16.05.2020,6443,231,92,181\r\n17.05.2020,6454,229,87,180\r\n18.05.2020,6474,211,71,182\r\n19.05.2020,6503,194,67,186\r\n20.05.2020,6552,185,66,186\r\n21.05.2020,6582,172,62,190\r\n22.05.2020,6611,167,59,190\r\n23.05.2020,6636,166,58,191\r\n24.05.2020,6641,177,60,191\r\n25.05.2020,6651,177,60,191\r\n26.05.2020,6672,164,58,193"},"44e7":function(t,e,n){var a=n("861d"),i=n("c6b6"),s=n("b622"),r=s("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},"462c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"city-picker"},t._l(t.cities,(function(e){return n("router-link",{key:e,staticClass:"which-city",class:{selected:e.toLowerCase()===t.city.toLowerCase()},attrs:{to:"/v7/"+e.toLowerCase()}},[n("h1",[t._v(t._s(e))])])})),1),n("div",{staticClass:"content"},[n("div",{staticClass:"readme",domProps:{innerHTML:t._s(t.topNotes)}})]),n("div",{staticClass:"view-section"},[t.city?n("section-viewer",{staticClass:"viewer",attrs:{state:t.state,city:t.city}}):t._e()],1),n("div",{staticClass:"content"},[t.bottomNotes?n("div",{staticClass:"bottom"},[n("h3",[t._v("Further Notes")]),n("div",{staticClass:"readme",domProps:{innerHTML:t._s(t.bottomNotes)}})]):t._e()])])},i=[],s=(n("a630"),n("c975"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("b85c")),r=(n("96cf"),n("1da1")),o=n("d4ec"),l=n("bee2"),c=n("262e"),u=n("2caf"),d=n("9ab4"),h=n("369b"),p=n.n(h),g=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"charts"}},[t._m(0),n("div",{attrs:{id:"main-section"}},[n("div",{staticClass:"pieces"},[n("div",{staticClass:"sliders"},[n("div",{staticClass:"button-choices buttons has-addons"},[n("button",{key:"do-something",staticClass:"button is-small",class:{"is-link":!t.isBase,"is-selected":!t.isBase},on:{click:function(e){return t.setBase(!1)}}},[t._v("Alternatives")]),n("button",{key:"base",staticClass:"button is-small",class:{"is-link":t.isBase,"is-selected":t.isBase},on:{click:function(e){return t.setBase(!0)}}},[t._v("What would have happened w/o restrictions")])]),n("div",{staticClass:"selection-widgets",class:{"totally-disabled":t.isBase}},["heinsberg"===t.city?n("div",{staticClass:"heinsberg"},[n("div",{staticClass:"g1"},[t._m(1),n("p",{staticClass:"subhead"},[t._v("Percent still occurring (%)")]),t._l(["remainingFractionWork","remainingFractionLeisure1","remainingFractionShoppingBusinessErrands"],(function(e){return Object.keys(t.state.measures).length?n("div",{key:"h"+e,staticClass:"myslider"},[n("my-slider",{attrs:{measure:e,state:t.state},on:{changed:t.sliderChanged}})],1):t._e()}))],2),n("div",{staticClass:"g1"},[t._m(2),n("p",{staticClass:"subhead"},[t._v("Students returning (%):")]),t._l(["remainingFractionKiga","remainingFractionPrima","remainingFractionSecon"],(function(e){return Object.keys(t.state.measures).length?n("div",{key:"h"+e,staticClass:"myslider"},[n("my-slider",{attrs:{measure:e,state:t.state},on:{changed:t.sliderChanged}})],1):t._e()}))],2)]):n("div",{staticClass:"berlin-munich"},[n("div",{staticClass:"g1"},[t._m(3),n("p",{staticClass:"subhead"},[t._v("Percent still occurring (%)")]),t._l(["remainingFractionLeisure1"],(function(e){return Object.keys(t.state.measures).length?n("div",{key:e,staticClass:"myslider"},[n("my-slider",{attrs:{measure:e,state:t.state},on:{changed:t.sliderChanged}})],1):t._e()}))],2),n("div",{staticClass:"g1"},[t._m(4),n("p",{staticClass:"subhead"},[t._v("By type and percent (%)")]),t._l(["remainingFractionWork","remainingFractionLeisure2","remainingFractionShoppingBusinessErrands"],(function(e){return Object.keys(t.state.measures).length?n("div",{key:e,staticClass:"myslider"},[n("my-slider",{attrs:{measure:e,state:t.state},on:{changed:t.sliderChanged}})],1):t._e()}))],2),n("div",{staticClass:"g1"},[t._m(5),n("p",{staticClass:"subhead"},[t._v("Students returning (%):")]),t._l(["remainingFractionKiga","remainingFractionPrima","remainingFractionSecon"],(function(e){return Object.keys(t.state.measures).length?n("div",{key:e,staticClass:"myslider"},[n("my-slider",{attrs:{measure:e,state:t.state},on:{changed:t.sliderChanged}})],1):t._e()}))],2)])]),n("h5",{staticClass:"cumulative"},[t._v("Cumulative Infected by September 2020")]),n("p",{staticClass:"infected"},[t._v(t._s(t.prettyInfected))])]),n("div",{staticClass:"all-plots"},[n("div",{staticClass:"plot-options"},[n("div",{staticClass:"scale-options"},[n("b",[t._v("Scale")]),n("div",{staticClass:"variation-choices buttons has-addons"},[n("button",{staticClass:"button is-small",class:{"is-link":!t.logScale,"is-selected":!t.logScale},on:{click:function(e){t.logScale=!t.logScale}}},[t._v("Linear")]),n("button",{staticClass:"button is-small",class:{"is-link":t.logScale,"is-selected":t.logScale},on:{click:function(e){t.logScale=!t.logScale}}},[t._v("Log")])])]),n("div",{staticClass:"variation"},[n("b",[t._v("Shift Start Date")]),n("div",{staticClass:"variation-choices buttons has-addons"},["munich"!==t.city?n("button",{staticClass:"button is-small",class:{"is-link":"6"===t.plusminus,"is-selected":"6"===t.plusminus},on:{click:function(e){return t.setPlusMinus("6")}}},[t._v("-6")]):t._e(),"munich"!==t.city?n("button",{staticClass:"button is-small",class:{"is-link":"3"===t.plusminus,"is-selected":"3"===t.plusminus},on:{click:function(e){return t.setPlusMinus("3")}}},[t._v("-3")]):t._e(),n("button",{staticClass:"button is-small",class:{"is-link":"0"===t.plusminus,"is-selected":"0"===t.plusminus},on:{click:function(e){return t.setPlusMinus("0")}}},[t._v("+0")]),n("button",{staticClass:"button is-small",class:{"is-link":"-3"===t.plusminus,"is-selected":"-3"===t.plusminus},on:{click:function(e){return t.setPlusMinus("-3")}}},[t._v("+3")]),n("button",{staticClass:"button is-small",class:{"is-link":"-6"===t.plusminus,"is-selected":"-6"===t.plusminus},on:{click:function(e){return t.setPlusMinus("-6")}}},[t._v("+6")])])])]),n("div",{staticClass:"linear-plot"},[n("h5",[t._v(t._s(t.cityCap)+" Simulated Health Outcomes Over Time")]),n("p",[t._v(t._s(this.logScale?"Log scale":"Linear scale"))]),n("vue-plotly",{staticClass:"plotsize",attrs:{data:t.data,layout:t.layout,options:t.options}})],1),"berlin"===t.city?n("div",{staticClass:"linear-plot"},[n("h5",[t._v(t._s(t.cityCap)+" Hospitalization Rate Comparison")]),n("p",[t._v(t._s(this.logScale?"Log scale":"Linear scale"))]),n("hospitalization-plot",{staticClass:"plotsize compact",attrs:{data:t.data,logScale:t.logScale,city:t.city}})],1):t._e(),n("div",{staticClass:"linear-plot"},[n("h5",[t._v(t._s(t.cityCap)+" Estimated R-Values")]),n("p",[t._v("Based on four-day new infections")]),n("r-value-plot",{staticClass:"plotsize compact",attrs:{data:t.data,logScale:!1}})],1)])])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preamble"},[n("h3",{staticClass:"select-scenario"},[t._v("Select Scenario:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"title"},[t._v("February 26:"),n("br"),t._v("Activities limited")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"title"},[t._v("April 20:"),n("br"),t._v("Reopening of educational facilities")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"title"},[t._v("March 14:"),n("br"),t._v("Leisure activities limited")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"title"},[t._v("March 23:"),n("br"),t._v("Out-of-home activities limited")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"title"},[t._v("April 20:"),n("br"),t._v("Reopening of educational facilities")])}],m=(n("4de4"),n("d81d"),n("fb6a"),n("b0c0"),n("a9e3"),n("ac1f"),n("5319"),n("2909")),b=n("43e0"),y=n.n(b),k=n("3bba"),C=n("c1df"),S=n.n(C),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slider-thing"}},[t.showButtons?n("div",{staticClass:"button-choices"},t._l(t.stops,(function(e){return n("button",{key:e,staticClass:"button is-small",class:{"is-link":e===t.value},on:{click:function(n){return t.choseButton(e)}}},[t._v(t._s(e))])})),0):t._e(),n("p",[t._v(t._s(t.measureTitle))])])},w=[],_=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.value=0,t.stops=[0,1e3],t.showButtons=!1,t.interventions={remainingFractionLeisure1:"Leisure activities",remainingFractionWork:"Work activities",remainingFractionLeisure2:"Leisure activities",remainingFractionShoppingBusinessErrands:"All other activities",remainingFractionKiga:"Going to kindergarten",remainingFractionPrima:"Going to primary school",remainingFractionSecon:"Going to secondary/univ."},t}return Object(l["a"])(n,[{key:"choseButton",value:function(t){console.log(t),this.value=t}},{key:"mounted",value:function(){this.updateOptions()}},{key:"updateOptions",value:function(){var t,e=[],n=Object(s["a"])(this.state.measures[this.measure]);try{for(n.s();!(t=n.n()).done;){var a=t.value,i=100*a+"%";this.value=i,this.showButtons=!0,e.push(i)}}catch(r){n.e(r)}finally{n.f()}this.stops=e}},{key:"valueChanged",value:function(){var t=this.value.substring(0,this.value.length-1);t=parseFloat(t)/100,this.$emit("changed",this.measure,t)}},{key:"measureTitle",get:function(){return this.interventions[this.measure]}}]),n}(g["c"]);Object(d["a"])([Object(g["b"])({required:!0})],_.prototype,"state",void 0),Object(d["a"])([Object(g["b"])({required:!0})],_.prototype,"measure",void 0),Object(d["a"])([Object(g["d"])("value")],_.prototype,"valueChanged",null),_=Object(d["a"])([Object(g["a"])({components:{}})],_);var j=_,x=j,R=(n("d4c8"),n("2877")),D=Object(R["a"])(x,O,w,!1,null,"034f3950",null),I=D.exports,M=n("8aca"),B=n("7c19"),L=function(t){Object(c["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.dayZero={berlin:"2020-02-20",munich:"2020-02-20",heinsberg:"2020-02-15"},t.MAX_DAYS=200,t.plusminus="0",t.logScale=!0,t.isBase=!1,t.currentRun={},t.data=[],t.layout={autosize:!0,showlegend:!0,legend:{orientation:"h"},font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},margin:{t:5,r:10,b:0,l:60},xaxis:{range:["2020-02-09","2020-08-31"],type:"date"},yaxis:{type:t.logScale?"log":"linear",autorange:!0,title:"Population ("+(t.logScale?"log scale)":"Linear scale)")},plot_bgcolor:"#f8f8f8",paper_bgcolor:"#f8f8f8"},t.options={displaylogo:!1,responsive:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"svg",filename:"custom_image",width:800,height:600,scale:1}},t.currentSituation={},t.loadedSeriesData={},t.labels={nSusceptible:"Susceptible",nInfectedButNotContagious:"Infected, not contagious",nContagious:"Contagious",nShowingSymptoms:"Showing Symptoms",nSeriouslySick:"Seriously Sick",nCritical:"Critical",nTotalInfected:"Total Infected",nInfectedCumulative:"Infected Cumulative",nRecovered:"Recovered",nInQuarantine:"In Quarantine"},t.zipCache={},t.fillcolors={Susceptible:"#0000ff","Seriously Sick":"#cc2211","Showing Symptoms":"#00ffff","Infected Cumulative":"#f791cf","Infected, not contagious":"#ee8800",Critical:"#882299",Recovered:"#eedd44",Contagious:"#00aa00","Total Infected":"#a65628"},t}return Object(l["a"])(n,[{key:"switchCity",value:function(){"berlin"!==this.city&&parseInt(this.plusminus)>0&&(this.plusminus="0"),this.loadedSeriesData={},this.loadZipData()}},{key:"switchPlusMinus",value:function(){this.showPlotForCurrentSituation()}},{key:"updateScale",value:function(){this.layout.yaxis.type=this.logScale?"log":"linear"}},{key:"setBase",value:function(t){this.isBase=t,this.showPlotForCurrentSituation()}},{key:"setPlusMinus",value:function(t){this.plusminus=t}},{key:"mounted",value:function(){this.loadZipData()}},{key:"loadZipData",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("loadZipData:",this.city),!this.zipCache[this.city]){t.next=6;break}console.log("using cached zip for!",this.city),this.zipLoader=this.zipCache[this.city],t.next=12;break;case 6:return e=this.state.publicPath+"v7-data-"+this.city+".zip",console.log("---loading",e),this.zipLoader=new k["a"](e),t.next=11,this.zipLoader.load();case 11:console.log("zip loaded!");case 12:this.zipCache[this.city]=this.zipLoader,this.runChanged(),console.log({measure:this.state.measures});case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"runChanged",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.loadedSeriesData[this.currentRun.RunId]){t.next=4;break}return this.data=this.loadedSeriesData[this.currentRun.RunId],this.updateTotalInfected(),t.abrupt("return");case 4:return t.next=6,this.loadCSV(this.currentRun);case 6:e=t.sent,n=this.generateSeriesFromCSVData(e),this.loadedSeriesData[this.currentRun.RunId]=n,this.data=n,this.updateTotalInfected();case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"updateTotalInfected",value:function(){var t=this.data.filter((function(t){return"Infected Cumulative"===t.name}))[0];this.state.cumulativeInfected=Math.max.apply(Math,Object(m["a"])(t.y))}},{key:"sliderChanged",value:function(t,e){console.log(t,e),this.currentSituation[t]=e,this.showPlotForCurrentSituation()}},{key:"showPlotForCurrentSituation",value:function(){if(this.isBase)return this.currentRun={RunId:"sz0"},void this.runChanged();for(var t="",e=0,n=Object.keys(this.state.measures);e<n.length;e++){var a=n[e];t+=this.currentSituation[a]+"-"}var i=this.plusminus,s=t.replace("undefined",i);console.log(s),this.currentRun=this.state.runLookup[s],this.currentRun&&this.runChanged()}},{key:"unpack",value:function(t,e){var n=t.map((function(t){return t[e]}));return n=n.slice(0,this.MAX_DAYS),n.length<this.MAX_DAYS&&n.push("day"===e?this.MAX_DAYS:n[n.length-1]),n}},{key:"loadCSV",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.RunId){t.next=2;break}return t.abrupt("return",[]);case 2:return n=e.RunId+".infections.csv",console.log("Extracting",n),a=this.zipLoader.extractAsText(n),i=p.a.parse(a,{header:!0,dynamicTyping:!0,skipEmptyLines:!0}),t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"calculateDatefromSimulationDay",value:function(t){var e=parseInt(this.plusminus),n=S()(this.dayZero[this.city]).subtract(e,"days").add(t,"days").format("YYYY-MM-DD");return n}},{key:"generateSeriesFromCSVData",value:function(t){for(var e=this,n=[],a=this.unpack(t,"day"),i=a.map((function(t){return e.calculateDatefromSimulationDay(t)})),s=0,r=Object.keys(this.labels);s<r.length;s++){var o=r[s],l=this.labels[o];if("In Quarantine"!==l){var c=this.unpack(t,o);n.push({x:i,y:c,name:l})}}return n.push(this.state.berlinCases),n}},{key:"cityCap",get:function(){return this.city.slice(0,1).toUpperCase()+this.city.slice(1)}},{key:"prettyInfected",get:function(){if(!this.state.cumulativeInfected)return"";var t=100*Math.round(.01*this.state.cumulativeInfected);return Number(t).toLocaleString()}}]),n}(g["c"]);Object(d["a"])([Object(g["b"])({required:!0})],L.prototype,"state",void 0),Object(d["a"])([Object(g["b"])({required:!0})],L.prototype,"city",void 0),Object(d["a"])([Object(g["d"])("city")],L.prototype,"switchCity",null),Object(d["a"])([Object(g["d"])("plusminus")],L.prototype,"switchPlusMinus",null),Object(d["a"])([Object(g["d"])("logScale")],L.prototype,"updateScale",null),L=Object(d["a"])([Object(g["a"])({components:{HospitalizationPlot:M["a"],MySlider:I,RValuePlot:B["a"],VuePlotly:y.a}})],L);var z=L,F=z,P=(n("dca8"),Object(R["a"])(F,f,v,!1,null,"2825a9ed",null)),T=P.exports,V=function(t){Object(c["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.state={measures:{},runLookup:{},cumulativeInfected:0,berlinCases:[],publicPath:"/covid-sim/"},t.city="",t.plusminus="0",t.readme={berlin:n("55ef"),munich:n("55ef"),heinsberg:n("c3c3")},t.plotTag="{{PLOTS}}",t.capitalizeCity={berlin:"Berlin",munich:"Munich",heinsberg:"Heinsberg"},t.RKI_URL="https://svn.vsp.tu-berlin.de/repos/public-svn/matsim/scenarios/countries/de/episim/original-data/Fallzahlen/RKI/",t.cityCSV={berlin:t.RKI_URL+"berlin-cases.csv",munich:t.RKI_URL+"munich-cases.csv",heinsberg:t.RKI_URL+"heinsberg-cases.csv"},t}return Object(l["a"])(a,[{key:"routeChanged",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),a=e.params.city,t.next=4,this.loadDataInBackground(a);case 4:this.city=a;case 5:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log({route:this.$route}),this.city=this.$route.params.city,t.next=4,this.loadDataInBackground(this.city);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loadDataInBackground",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.prepareBerlinData(e);case 2:return this.state.berlinCases=t.sent,n=this.state.publicPath+"v7-info-"+e+".txt",t.next=6,this.loadCSVData(n);case 6:return a=t.sent,t.next=9,this.generateScenarioMatrix(a);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"prepareBerlinData",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i,r,o,l,c,u,d,h,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.cityCSV[e]);case 2:return n=t.sent,t.next=5,n.text();case 5:a=t.sent,i=p.a.parse(a,{header:!0,dynamicTyping:!0,skipEmptyLines:!0}).data,console.log({data:i}),r=[],o=[],l=0,console.log("fetched city data:",i.length),c=Object(s["a"])(i);try{for(c.s();!(u=c.n()).done;)d=u.value,h=d.year+"-"+d.month+"-"+d.day,r.push(h),l+=d.cases,o.push(l)}catch(f){c.e(f)}finally{c.f()}return g={name:this.capitalizeCity[e]+" Infections (RKI)",x:r,y:o,line:{dash:"dot",width:3,color:"rgb(0,200,150)"}},console.log({berlinSeries:g}),t.abrupt("return",g);case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"loadCSVData",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("fetching data"),t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.text();case 6:return a=t.sent,i=p.a.parse(a,{header:!0,dynamicTyping:!0}),console.log({parsed:i.data}),t.abrupt("return",i.data);case 10:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"generateScenarioMatrix",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,a,i,r,o,l,c,u,d,h,p,g,f,v,m,b,y,k,C;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("generating lookups"),n={},a={},i=["Config","Output","RunId","RunScript"],r=0,o=Object.keys(e[0]);case 5:if(!(r<o.length)){t.next=13;break}if(l=o[r],!(i.indexOf(l)>-1)){t.next=9;break}return t.abrupt("continue",10);case 9:n[l]=new Set;case 10:r++,t.next=5;break;case 13:c=Object(s["a"])(e),t.prev=14,c.s();case 16:if((u=c.n()).done){t.next=26;break}if(d=u.value,d.RunId){t.next=20;break}return t.abrupt("continue",24);case 20:for(h=0,p=Object.keys(n);h<p.length;h++)g=p[h],(0===d[g]||d[g])&&n[g].add(d[g]);for(f="",v=0,m=Object.keys(n);v<m.length;v++)b=m[v],f+=d[b]+"-";a[f]=d;case 24:t.next=16;break;case 26:t.next=31;break;case 28:t.prev=28,t.t0=t["catch"](14),c.e(t.t0);case 31:return t.prev=31,c.f(),t.finish(31);case 34:for(y=0,k=Object.keys(n);y<k.length;y++)C=k[y],n[C]=Array.from(n[C].keys()).sort((function(t,e){return t-e}));console.log({measures:n,runLookup:a}),this.state.measures=n,this.state.runLookup=a;case 38:case"end":return t.stop()}}),t,this,[[14,28,31,34]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"cities",get:function(){return["Berlin","Munich","Heinsberg"]}},{key:"topNotes",get:function(){if(!this.city)return"";var t=this.readme[this.city];if(!t)return"";var e=t.indexOf(this.plotTag);return e<0?t:t.substring(0,e)}},{key:"bottomNotes",get:function(){if(!this.city)return"";var t=this.readme[this.city];if(!t)return"";var e=t.indexOf(this.plotTag);return e<0?"":t.substring(e+this.plotTag.length)}}]),a}(g["c"]);Object(d["a"])([Object(g["d"])("$route")],V.prototype,"routeChanged",null),V=Object(d["a"])([Object(g["a"])({components:{SectionViewer:T}})],V);var E=V,A=E,H=(n("134e"),Object(R["a"])(A,a,i,!1,null,"3d4ce596",null));e["default"]=H.exports},4632:function(t,e,n){},"54bd":function(t,e,n){"use strict";n.r(e),e["default"]="Tag,Verstorben,Stationär,Genesen,Gesamt\r\n07-03-20,0,0,0,44\r\n08-03-20,0,0,0,50\r\n09-03-20,0,0,0,50\r\n10-03-20,0,0,0,58\r\n11-03-20,0,0,0,88\r\n12-03-20,0,0,0,110\r\n13-03-20,0,0,0,149\r\n14-03-20,0,0,0,201\r\n15-03-20,0,0,0,242\r\n16-03-20,0,0,0,260\r\n17-03-20,0,0,0,359\r\n18-03-20,0,0,0,509\r\n19-03-20,0,0,0,676\r\n20-03-20,0,0,0,878\r\n21-03-20,0,0,0,1042\r\n22-03-20,2,0,0,1316\r\n23-03-20,2,0,0,1316\r\n24-03-20,2,0,0,1381\r\n25-03-20,2,0,0,1576\r\n26-03-20,3,0,0,1687\r\n27-03-20,3,0,0,1845\r\n28-03-20,3,0,0,2080\r\n29-03-20,3,0,250,2256\r\n30-03-20,5,0,250,2501\r\n31-03-20,5,145,283,2699\r\n01-04-20,9,173,487,2926\r\n02-04-20,9,192,645,3099\r\n03-04-20,12,214,805,3304\r\n04-04-20,12,260,929,3449\r\n05-04-20,14,274,1103,3642\r\n06-04-20,16,297,1240,3794\r\n07-04-20,18,325,1384,3884\r\n08-04-20,24,371,1577,4003\r\n09-04-20,32,395,1739,4123\r\n10-04-20,42,418,1920,4233\r\n11-04-20,44,438,2043,4352\r\n12-04-20,51,475,2110,4459\r\n13-04-20,52,515,2240,4615\r\n14-04-20,63,555,2363,4717\r\n15-04-20,67,590,2640,4820\r\n16-04-20,78,630,2655,4927\r\n17-04-20,87,666,2801,5014\r\n18-04-20,94,685,2969,5101\r\n19-04-20,99,699,3044,5159\r\n20-04-20,105,717,3236,5211\r\n21-04-20,108,744,3430,5263\r\n22-04-20,116,766,3650,5332\r\n23-04-20,130,779,3858,5411\r\n24-04-20,137,794,3858,5492\r\n25-04-20,138,814,3858,5549\r\n26-04-20,142,818,3858,5581\r\n\r\n"},"55ef":function(t,e){var n="<h2 id=v7-re-opening-scenarios>v7: Re-opening Scenarios</h2> <p><em>Published 22 April 2020</em></p> <p>Here we depict the effects of reopening society at various levels for work, school, leisure and other activities.</p> <ul> <li>Simulations are for <strong>Berlin</strong>, <strong>Munich</strong>, and <strong>Heinsberg</strong> regions (each city plus some surroundings).</li> <li>Real-world infections are from <a href=https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0>Robert Koch Institute (RKI)</a>. For many cases, a delay between infection and reporting may occur.</li> <li>For Berlin and Munich, the following activity restrictions are included:<ul> <li>After <strong>March 13</strong>, 10% of leisure acts are banned (corresponding to the closure of theaters, etc.). Also, schools / kindergarten / universities are closed. 10 percent of kita and primary-aged children still go to kita / primary schools (Notbetrieb).</li> <li>On <strong>March 23</strong>, work, shopping, errands and business are reduced, corresponding to the currently valid &quot;Kontaktsperre&quot;; the percentage of work, leisure, shopping, errands and business activities still occuring after <strong>March 23</strong> can be set.</li> <li>Educational facilities can be reopened on <strong>April 20</strong>.</li> </ul> </li> </ul> <p>{{PLOTS}}</p> <p><a href=https://google.com/covid19/mobility>Google COVID-19 Mobility report</a> shows for Berlin after March 23:</p> <ul> <li>retail &amp; recreation down by about 70% (i.e. at about <strong>30%</strong>)</li> <li>grocery &amp; pharmacy down by about 20% (i.e. at about <strong>80%</strong>)</li> <li>parks down by about 20% (i.e. at about <strong>80%</strong>)</li> <li>workplace down by about 40% (i.e. at about <strong>60%</strong>) Other than google, we do not take the last day, but take visual averages over about a week.</li> </ul> <p>The best approximation to this with our options below would be:</p> <ul> <li><strong>leisure</strong> at <strong>20%</strong> (with the assumption that parks do not contribute that much to infections)</li> <li><strong>work</strong> at <strong>60%</strong></li> <li><strong>shopping</strong> at <strong>40%</strong></li> <li><strong>errands &amp; business</strong> at <strong>40%</strong></li> </ul> <p>If one assumes that the capacity of the Berlin system for critical COVID cases is about 1000, then one finds that there is scant little room to relax restrictions.</p> <p>Or alternatively: The currently &quot;blunt&quot; restrictions would need to be replaced by something smarter.</p> <p>What has changed comparing to v6/v5?</p> <ul> <li>Age-dependent disease progression model</li> <li>we now only display results for people living in the corresponding city. Before, results included people travelling to/from the corresponding city.</li> </ul> ";t.exports=n},"7c19":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vue-component"}},[n("vue-plotly",{attrs:{data:t.dataLines,layout:t.layout,options:t.options}})],1)},i=[],s=(n("4de4"),n("fb6a"),n("b0c0"),n("ac1f"),n("1276"),n("d4ec")),r=n("bee2"),o=n("262e"),l=n("2caf"),c=n("9ab4"),u=n("60a3"),d=n("43e0"),h=n.n(d),p=function(t){Object(o["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.color="#04f",t.lagDays=4,t.dataLines=[],t.layout={height:225,autosize:!0,showlegend:!0,legend:{orientation:"h"},font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},margin:{t:5,r:10,b:0,l:60},xaxis:{range:["2020-02-09","2020-12-31"],type:"date"},yaxis:{type:t.logScale?"log":"linear",autorange:!0,title:"R-value"},plot_bgcolor:"#f8f8f8",paper_bgcolor:"#f8f8f8"},t.options={displaylogo:!1,responsive:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"svg",filename:"custom_image",width:800,height:600,scale:1}},t}return Object(r["a"])(n,[{key:"mounted",value:function(){this.calculateRvalues()}},{key:"updateModelData",value:function(){this.calculateRvalues()}},{key:"updateScale",value:function(){this.layout.yaxis.type=this.logScale?"log":"linear"}},{key:"calculateRvalues",value:function(){if(0!==this.data.length){this.layout.xaxis.range=["2020-02-09",this.endDate];for(var t=this.data.filter((function(t){return"Susceptible"===t.name}))[0],e=[],n=[],a=this.lagDays;a<t.y.length;a++){var i=t.y[a-this.lagDays]-t.y[a];if(e.push(i),a>=2*this.lagDays){var s=e.length-1,r=e[s]/e[s-this.lagDays];r&&n.push(r)}}this.dataLines=[{name:"Estimated R Value",x:t.x.slice(2*this.lagDays),y:n,line:{width:2,color:this.color,shape:"linear"}}]}}},{key:"reformatDate",value:function(t){var e=t.split("."),n=e[2]+"-"+e[1]+"-"+e[0];return n}}]),n}(u["c"]);Object(c["a"])([Object(u["b"])({required:!0})],p.prototype,"data",void 0),Object(c["a"])([Object(u["b"])({required:!0})],p.prototype,"logScale",void 0),Object(c["a"])([Object(u["b"])({required:!0})],p.prototype,"endDate",void 0),Object(c["a"])([Object(u["d"])("data")],p.prototype,"updateModelData",null),Object(c["a"])([Object(u["d"])("logScale")],p.prototype,"updateScale",null),p=Object(c["a"])([Object(u["a"])({components:{VuePlotly:h.a},props:{}})],p);var g=p,f=g,v=(n("b56f"),n("2877")),m=Object(v["a"])(f,a,i,!1,null,"4fcad82e",null);e["a"]=m.exports},"8aca":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vue-component"}},[n("vue-plotly",{attrs:{data:t.dataLines,layout:t.layout,options:t.options}})],1)},i=[],s=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("2909")),r=n("d4ec"),o=n("bee2"),l=n("262e"),c=n("2caf"),u=n("9ab4"),d=n("60a3"),h=n("369b"),p=n.n(h),g=n("43e0"),f=n.n(g),v=function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=e.apply(this,arguments),t.csvData={berlin:n("1a87").default,munich:n("54bd").default},t.dataDetails={berlin:{fromModel:["Seriously Sick","Critical"],fromCSV:["Stationäre Behandlung","Intensivmedizin"],csvLineNames:["Reported: Berlin Hospitalized (Senate)","Reported: Berlin Intensive Care (Senate)"],dateFormatter:t.reformatDateBerlin,dateColumn:"Datum"},munich:{fromModel:["Cumulative Hospitalized"],fromCSV:["Stationär"],csvLineNames:["Reported: Munich Hospitalized"],dateFormatter:t.reformatDateMunich,dateColumn:"Tag"}},t.colors={"Seriously Sick":"#44f","Cumulative Hospitalized":"#707",Critical:"#707"},t.dataLines=[],t.hospitalSeries=[],t.cityDetails=t.dataDetails.berlin,t.layout={autosize:!0,height:225,showlegend:!0,legend:{orientation:"h"},font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},margin:{t:5,r:10,b:0,l:60},xaxis:{range:["2020-02-09","2020-12-31"],type:"date"},yaxis:{type:t.logScale?"log":"linear",autorange:!0,title:"Number of Hospitalizations"},plot_bgcolor:"#f8f8f8",paper_bgcolor:"#f8f8f8"},t.options={displaylogo:!1,responsive:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"svg",filename:"custom_image",width:800,height:600,scale:1}},t}return Object(o["a"])(a,[{key:"mounted",value:function(){this.buildPlot()}},{key:"buildPlot",value:function(){this.cityDetails=this.dataDetails[this.city],this.prepareHospitalData(),this.updateModelData()}},{key:"switchCity",value:function(){this.buildPlot()}},{key:"updateScale",value:function(){this.layout.yaxis.type=this.logScale?"log":"linear"}},{key:"updateModelData",value:function(){var t,e=this,n=this.data.filter((function(t){return e.cityDetails.fromModel.indexOf(t.name)>-1}));if(this.layout.xaxis.range=["2020-02-09",this.endDate],"berlin"===this.city)for(var a=0;a<n[0].y.length;a++)n[0].y[a]+=n[1].y[a];n=n.map((function(t){var n=e.colors[t.name];t.line={dash:"solid",width:2,color:n};var a={name:"Model: "+t.name,x:t.x,y:t.y,line:t.line};return a})),"berlin"===this.city&&(n[0].name="Model: Should be Hospitalized"),this.dataLines=n,(t=this.dataLines).push.apply(t,Object(s["a"])(this.hospitalSeries))}},{key:"prepareHospitalData",value:function(){var t=this,e=p.a.parse(this.csvData[this.city],{header:!0,dynamicTyping:!0,skipEmptyLines:!0}).data;this.hospitalSeries=[];for(var n=function(n){var a=t.cityDetails.fromCSV[n];t.hospitalSeries.push({name:t.cityDetails.csvLineNames[n],x:e.map((function(e){return t.cityDetails.dateFormatter(e[t.cityDetails.dateColumn])})),y:e.map((function(t){return t[a]})),line:{dash:"dot",width:2,color:t.colors[t.cityDetails.fromModel[n]]}})},a=0;a<this.cityDetails.fromModel.length;a++)n(a)}},{key:"reformatDateBerlin",value:function(t){var e=t.split("."),n=e[2]+"-"+e[1]+"-"+e[0];return n}},{key:"reformatDateMunich",value:function(t){var e=t.split("-"),n="20"+e[2]+"-"+e[1]+"-"+e[0];return n}}]),a}(d["c"]);Object(u["a"])([Object(d["b"])({required:!0})],v.prototype,"data",void 0),Object(u["a"])([Object(d["b"])({required:!0})],v.prototype,"logScale",void 0),Object(u["a"])([Object(d["b"])({required:!0})],v.prototype,"city",void 0),Object(u["a"])([Object(d["b"])({required:!0})],v.prototype,"endDate",void 0),Object(u["a"])([Object(d["d"])("city")],v.prototype,"switchCity",null),Object(u["a"])([Object(d["d"])("logScale")],v.prototype,"updateScale",null),Object(u["a"])([Object(d["d"])("data")],v.prototype,"updateModelData",null),v=Object(u["a"])([Object(d["a"])({components:{VuePlotly:f.a},props:{}})],v);var m=v,b=m,y=(n("e923"),n("2877")),k=Object(y["a"])(b,a,i,!1,null,"644c72b1",null);e["a"]=k.exports},"9f58":function(t,e,n){},b56f:function(t,e,n){"use strict";var a=n("4632"),i=n.n(a);i.a},c3c3:function(t,e){var n="<h2 id=v7-re-opening-scenarios>v7: Re-opening Scenarios</h2> <p><em>Published 22 April 2020</em></p> <p>Here we depict the effects of reopening society at various levels for work, school, leisure and other activities.</p> <ul> <li>Simulations are for <strong>Berlin</strong>, <strong>Munich</strong>, and <strong>Heinsberg</strong> regions (each city plus some surroundings).</li> <li>Real-world infections are from <a href=https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0>Robert Koch Institute (RKI)</a>. For many cases, a delay between infection and reporting may occur.</li> <li>For Heinsberg, the following activity restrictions are included:<ul> <li>On <strong>February 26</strong>, schools are closed and other activities restricted.</li> <li>Educational facilities can be reopened on <strong>April 20</strong>.</li> </ul> </li> </ul> <p>{{PLOTS}}</p> <p><a href=https://google.com/covid19/mobility>Google COVID-19 Mobility report</a> shows for Berlin after March 23:</p> <ul> <li>retail &amp; recreation down by about 70% (i.e. at about <strong>30%</strong>)</li> <li>grocery &amp; pharmacy down by about 20% (i.e. at about <strong>80%</strong>)</li> <li>parks down by about 20% (i.e. at about <strong>80%</strong>)</li> <li>workplace down by about 40% (i.e. at about <strong>60%</strong>) Other than google, we do not take the last day, but take visual averages over about a week.</li> </ul> <p>The best approximation to this with our options below would be:</p> <ul> <li><strong>leisure</strong> at <strong>20%</strong> (with the assumption that parks do not contribute that much to infections)</li> <li><strong>work</strong> at <strong>60%</strong></li> <li><strong>shopping</strong> at <strong>40%</strong></li> <li><strong>errands &amp; business</strong> at <strong>40%</strong></li> </ul> <p>If one assumes that the capacity of the Berlin system for critical COVID cases is about 1000, then one finds that there is scant little room to relax restrictions.</p> <p>Or alternatively: The currently &quot;blunt&quot; restrictions would need to be replaced by something smarter.</p> ";t.exports=n},c84a:function(t,e,n){},ce43:function(t,e,n){},d4c8:function(t,e,n){"use strict";var a=n("c84a"),i=n.n(a);i.a},dca8:function(t,e,n){"use strict";var a=n("9f58"),i=n.n(a);i.a},e923:function(t,e,n){"use strict";var a=n("0331"),i=n.n(a);i.a}}]);