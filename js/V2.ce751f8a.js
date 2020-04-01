(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["V2"],{"0f8f":function(e,t,n){"use strict";var a=n("23ac"),r=n.n(a);r.a},"23ac":function(e,t,n){},"33b7":function(e,t,n){"use strict";var a=n("8e4b"),r=n.n(a);r.a},3801:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("section-viewer",{staticClass:"viewer",attrs:{state:e.state}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",[e._v("Mobility traces and the spread of COVID-19")]),n("p",[n("a",{attrs:{href:"https://dx.doi.org/10.14279/depositonce-9835"}},[e._v("https://dx.doi.org/10.14279/depositonce-9835")]),n("br"),n("a",{attrs:{href:"mailto:mueller@vsp.tu-berlin.de"}},[e._v("Sebastian Alexander Müller, ")]),n("a",{attrs:{href:"mailto:michael.balmer@senozon.com"}},[e._v("Michael Balmer, ")]),n("a",{attrs:{href:"mailto:andreas.neumann@senozon.com"}},[e._v("Andreas Neumann, ")]),n("a",{attrs:{href:"mailto:nagel@vsp.tu-berlin.de"}},[e._v("Kai Nagel")]),n("br"),n("a",{attrs:{href:"https://vsp.tu-berlin.de/"}},[e._v("VSP Technische Universität Berlin")]),e._v(" | "),n("a",{attrs:{href:"https://senozon.com/"}},[e._v("Senozon AG")])]),n("p",[e._v("We use human mobility models, for which we are experts, and attach virus infection dynamics taken from the literature, including recent publications. This results in a virus spreading dynamics model. The results should be verified but because of the current time pressure, we publish them in their current state. Recommendations for improvement are welcome.")]),n("h4",[e._v("Examining noncompliance rates for stay-at-home orders")]),n("p",[e._v("The interventions below depict disease spread following various levels of adherence or compliance with stay-at-home policies."),n("ul",[n("li",[e._v("The simulations begin on Day 0, with 40 infected individuals in the population.")]),n("li",[e._v("Intervention measures go into effect on day 30.")])])])])}],i=(n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("c975"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),s=n("d4ec"),o=n("bee2"),u=n("99de"),c=n("7e84"),l=n("262e"),d=n("9ab4"),h=n("369b"),p=n.n(h),v=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-section"}},[n("div",{staticClass:"pieces"},[n("div",{staticClass:"sliders"},[n("h5",[e._v("Intervention Options")]),n("p",{staticClass:"subhead"},[e._v("Percent Noncompliance:")]),e._l(Object.keys(e.state.measures),(function(t){return n("div",{key:t,staticClass:"myslider"},[n("my-slider",{attrs:{measure:t,state:e.state},on:{changed:e.sliderChanged}})],1)}))],2),n("vue-plotly",{staticClass:"plot1",attrs:{data:e.data,layout:e.layout,options:e.options}}),n("vue-plotly",{staticClass:"plot2",attrs:{data:e.data,layout:e.loglayout,options:e.options}})],1)])},b=[],m=(n("d81d"),n("fb6a"),n("43e0")),g=n.n(m),y=n("3bba"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"slider-thing"}},[n("vue-slide-bar",{staticClass:"my-slider",attrs:{speed:0,data:e.stops},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("p",[e._v(e._s(e.measureTitle))])],1)},x=[],w=n("b68d"),O=n.n(w),S=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.value=0,e.stops=[0,1e3],e.interventions={remainingFractionWork:"Still going to work",remainingFractionShopping:"Still shopping",remainingFractionLeisure:"Still doing leisure activities",remainingFractionOther:"Still doing other activities",ReopenAfter:"Lift Shutdown After X Days"},e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var r,i=this.state.measures[this.measure][Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value;e.push(1e3===s?"Never":s)}}catch(o){n=!0,a=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}this.stops=e.map((function(e){return e<=1?100*e:e})),this.value="Never"}},{key:"valueChanged",value:function(){var e=this.value;"Never"===e?e=1e3:21!==e&&(e*=.01),this.$emit("changed",this.measure,e)}},{key:"measureTitle",get:function(){return this.interventions[this.measure]}}]),t}(v["c"]);d["a"]([Object(v["b"])()],S.prototype,"state",void 0),d["a"]([Object(v["b"])()],S.prototype,"measure",void 0),d["a"]([Object(v["d"])("value")],S.prototype,"valueChanged",null),S=d["a"]([Object(v["a"])({components:{VueSlideBar:O.a}})],S);var j=S,R=j,C=(n("0f8f"),n("2877")),_=Object(C["a"])(R,k,x,!1,null,"6c59a1da",null),I=_.exports,z=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.currentRun={},e.data=[],e.layout={title:{text:"Status of simulated residents vs. days"},legend:{orientation:"h"},autosize:!0,height:500,font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},yaxis:{autorange:!0},xaxis:{}},e.loglayout={title:"Log scale:",autosize:!0,legend:{orientation:"h"},height:500,font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},yaxis:{type:"log",autorange:!0},xaxis:{}},e.options={displayModeBar:!1},e.currentSituation={},e.loadedSeriesData={},e.labels={nSusceptible:"Susceptible",nInfectedButNotContagious:"Infected, not contagious",nContagious:"Contagious",nSeriouslySick:"Seriously Sick",nCritical:"Critical",nTotalInfected:"Total Infected",nInfectedCumulative:"Infected Cumulative",nRecovered:"Recovered",nInQuarantine:"In Quarantine"},e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){this.loadZipData()}},{key:"loadZipData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.zipLoader=new y["a"]("/covid-sim/v2-data.zip"),e.next=3,this.zipLoader.load();case 3:console.log("zip loaded!"),this.runChanged();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"runChanged",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log({run:this.currentRun}),!this.loadedSeriesData[this.currentRun.RunId]){e.next=4;break}return this.data=this.loadedSeriesData[this.currentRun.RunId],e.abrupt("return");case 4:return e.next=6,this.loadCSV(this.currentRun);case 6:t=e.sent,n=this.generateSeriesFromCSVData(t),this.loadedSeriesData[this.currentRun.RunId]=n,this.data=n;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sliderChanged",value:function(e,t){this.currentSituation[e]=t,this.showPlotForCurrentSituation()}},{key:"showPlotForCurrentSituation",value:function(){for(var e="",t=0,n=Object.keys(this.state.measures);t<n.length;t++){var a=n[t];e+=this.currentSituation[a]+"-"}this.currentRun=this.state.runLookup[e],this.currentRun&&this.runChanged()}},{key:"unpack",value:function(e,t){var n=e.map((function(e){return e[t]}));return n=n.slice(0,150),n.length<150&&n.push("day"===t?150:n[n.length-1]),n}},{key:"loadCSV",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.RunId){e.next=2;break}return e.abrupt("return",[]);case 2:return n=t.RunId+".infections.txt",console.log("Extracting",n),a=this.zipLoader.extractAsText(n),r=p.a.parse(a,{header:!0,dynamicTyping:!0,skipEmptyLines:!0}),e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"generateSeriesFromCSVData",value:function(e){for(var t=[],n=this.unpack(e,"day"),a=0,r=Object.keys(this.labels);a<r.length;a++){var i=r[a],s=this.labels[i],o=this.unpack(e,i);t.push({x:n,y:o,name:s})}return t}}]),t}(v["c"]);d["a"]([Object(v["b"])()],z.prototype,"state",void 0),z=d["a"]([Object(v["a"])({components:{MySlider:I,VuePlotly:g.a}})],z);var D=z,T=D,L=(n("33b7"),Object(C["a"])(T,f,b,!1,null,"059741db",null)),V=L.exports,A=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(u["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.state={measures:{},runLookup:{}},e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"mounted",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadIndexData();case 2:return t=e.sent,e.next=5,this.generateScenarioMatrix(t);case 5:e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadIndexData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("fetching data"),e.next=3,fetch("/v2-info.txt");case 3:return t=e.sent,e.next=6,t.text();case 6:return n=e.sent,a=p.a.parse(n,{header:!0,dynamicTyping:!0}),console.log({parsed:a.data}),e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"generateScenarioMatrix",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,i,s,o,u,c,l,d,h,p,v,f,b,m,g,y,k,x,w,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("generating lookups"),n={},a={},r=["Config","Output","RunId","RunScript"],i=0,s=Object.keys(t[0]);case 5:if(!(i<s.length)){e.next=13;break}if(o=s[i],!(r.indexOf(o)>-1)){e.next=9;break}return e.abrupt("continue",10);case 9:n[o]=new Set;case 10:i++,e.next=5;break;case 13:u=!0,c=!1,l=void 0,e.prev=16,d=t[Symbol.iterator]();case 18:if(u=(h=d.next()).done){e.next=29;break}if(p=h.value,p.RunId){e.next=22;break}return e.abrupt("continue",26);case 22:for(v=0,f=Object.keys(n);v<f.length;v++)b=f[v],(0===p[b]||p[b])&&n[b].add(p[b]);for(m="",g=0,y=Object.keys(n);g<y.length;g++)k=y[g],m+=p[k]+"-";a[m]=p;case 26:u=!0,e.next=18;break;case 29:e.next=35;break;case 31:e.prev=31,e.t0=e["catch"](16),c=!0,l=e.t0;case 35:e.prev=35,e.prev=36,u||null==d.return||d.return();case 38:if(e.prev=38,!c){e.next=41;break}throw l;case 41:return e.finish(38);case 42:return e.finish(35);case 43:for(x=0,w=Object.keys(n);x<w.length;x++)O=w[x],n[O]=Array.from(n[O].keys()).sort((function(e,t){return e-t}));console.log({measures:n,runLookup:a}),this.state.measures=n,this.state.runLookup=a;case 47:case"end":return e.stop()}}),e,this,[[16,31,35,43],[36,,38,42]])})));function t(t){return e.apply(this,arguments)}return t}()}]),t}(v["c"]);A=d["a"]([Object(v["a"])({components:{SectionViewer:V}})],A);var F=A,E=F,M=(n("5b4d"),Object(C["a"])(E,a,r,!1,null,"6528efc0",null));t["default"]=M.exports},"4cff":function(e,t,n){},"5b4d":function(e,t,n){"use strict";var a=n("4cff"),r=n.n(a);r.a},"8e4b":function(e,t,n){}}]);