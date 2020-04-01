(function(e){function t(t){for(var a,i,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/covid-sim/v4/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},1:function(e,t){},2:function(e,t){},"20a1":function(e,t,n){},"2b14":function(e,t,n){"use strict";var a=n("70be"),r=n.n(a);r.a},"32d8":function(e,t,n){"use strict";var a=n("20a1"),r=n.n(a);r.a},"70be":function(e,t,n){},"85ec":function(e,t,n){},ab17:function(e,t,n){"use strict";var a=n("bc97"),r=n.n(a);r.a},b65e:function(e,t,n){e.exports=n.p+"img/matsim-logo-white.8efbea0b.png"},bc97:function(e,t,n){},c85a:function(e,t,n){e.exports=n.p+"img/logo-small.92c17cdd.png"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("section-viewer",{staticClass:"viewer",attrs:{state:e.state}}),e._m(1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h2",[e._v("Mobility traces and the spread of COVID-19")]),n("p",[n("a",{attrs:{href:"https://dx.doi.org/10.14279/depositonce-9835"}},[e._v("https://dx.doi.org/10.14279/depositonce-9835")]),n("br"),n("a",{attrs:{href:"mailto:mueller@vsp.tu-berlin.de"}},[e._v("Sebastian Alexander Müller, ")]),n("a",{attrs:{href:"mailto:michael.balmer@senozon.com"}},[e._v("Michael Balmer, ")]),n("a",{attrs:{href:"mailto:andreas.neumann@senozon.com"}},[e._v("Andreas Neumann, ")]),n("a",{attrs:{href:"mailto:nagel@vsp.tu-berlin.de"}},[e._v("Kai Nagel")]),n("br"),n("a",{attrs:{href:"https://vsp.tu-berlin.de/"}},[e._v("VSP Technische Universität Berlin")]),e._v(" | "),n("a",{attrs:{href:"https://senozon.com/"}},[e._v("Senozon AG")])]),n("h4",[e._v("School Attendance Scenarios")]),n("p",[e._v("The interventions below depict disease spread following various levels of attendance at schools."),n("ul",[n("li",[e._v("The simulations begin on"),n("b",[e._v(" Day 0")]),e._v(", with 40 infected individuals in the population.")]),n("li",[e._v("On"),n("b",[e._v(" day 26")]),e._v(", 10% of leisure acts are banned")]),n("li",[e._v("On"),n("b",[e._v(" day 26")]),e._v(", schools / kiga / universities are closed. 10 pct of kiga and primary children still go to kiga / primary schools (Notbetrieb)")]),n("li",[e._v("On"),n("b",[e._v(" day 35")]),e._v(", work, shopping, errands and business are restricted")]),n("li",[e._v("Educational facilities can be reopened on"),n("b",[e._v(" day 63")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("img",{attrs:{alt:"TU-Berlin logo",src:n("cf05"),width:"225"}}),a("img",{attrs:{alt:"MATSim logo",src:n("b65e"),width:"250"}}),a("p",[e._v("COVID-19 Scenario Viewer, © 2020 VSP TU-Berlin")]),a("p",[e._v("For more info, see"),a("a",{attrs:{href:"https://www.vsp.tu-berlin.de"}},[e._v(" https://vsp.tu-berlin.de")])])])}],i=(n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("c975"),n("b64b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),o=n("d4ec"),u=n("bee2"),c=n("99de"),l=n("7e84"),d=n("262e"),p=n("9ab4"),h=n("369b"),v=n.n(h),f=n("60a3"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"main-section"}},[n("div",{staticClass:"pieces"},[n("div",{staticClass:"sliders"},[n("h5",[e._v("School Attendance")]),n("p",{staticClass:"subhead"},[e._v("Percent Still Attending:")]),e._l(Object.keys(e.state.measures),(function(t){return n("div",{key:t,staticClass:"myslider"},[n("my-slider",{attrs:{measure:t,state:e.state},on:{changed:e.sliderChanged}})],1)}))],2),n("vue-plotly",{staticClass:"plot1",attrs:{data:e.data,layout:e.layout,options:e.options}}),n("vue-plotly",{staticClass:"plot2",attrs:{data:e.data,layout:e.loglayout,options:e.options}})],1)])},g=[],m=(n("d81d"),n("fb6a"),n("43e0")),y=n.n(m),w=n("3bba"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"slider-thing"}},[e.showSlider?n("vue-slide-bar",{staticClass:"my-slider",attrs:{speed:0,data:e.stops},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):e._e(),e.showButtons?n("div",{staticClass:"button-choices"},e._l(e.stops,(function(t){return n("button",{key:t,staticClass:"button is-small",class:{"is-link":t===e.value},on:{click:function(n){return e.choseButton(t)}}},[e._v(e._s(t))])})),0):e._e(),n("p",[e._v(e._s(e.measureTitle))])],1)},_=[],O=n("b68d"),x=n.n(O),j=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.value=0,e.stops=[0,1e3],e.showButtons=!1,e.showSlider=!0,e.interventions={remainingFractionKiga:"Going to kindergarten",remainingFractionPrimary:"Going to primary school",remainingFractionSecondary:"Going to secondary school",remainingFractionHigher:"Going to univ./higher ed.",ShutdownType:"Shutdown type"},e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"choseButton",value:function(e){console.log(e),this.value=e}},{key:"mounted",value:function(){var e=[],t=!0,n=!1,a=void 0;try{for(var r,s=this.state.measures[this.measure][Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var i=r.value,o=i;"weak"===i&&(o="Type A"),"strong"===i&&(o="Type B"),isNaN(o)&&(this.showButtons||(this.value=o),this.showButtons=!0,this.showSlider=!1),e.push(o)}}catch(u){n=!0,a=u}finally{try{t||null==s.return||s.return()}finally{if(n)throw a}}this.stops=e.map((function(e){return e<=1?100*e:e})),this.showSlider&&(this.value="Never")}},{key:"valueChanged",value:function(){var e=this.value;"Never"===e?e=1e3:"Type A"===e?e="weak":"Type B"===e?e="strong":isNaN(e)||(e*=.01),this.$emit("changed",this.measure,e)}},{key:"measureTitle",get:function(){return this.interventions[this.measure]}}]),t}(f["c"]);p["a"]([Object(f["b"])()],j.prototype,"state",void 0),p["a"]([Object(f["b"])()],j.prototype,"measure",void 0),p["a"]([Object(f["d"])("value")],j.prototype,"valueChanged",null),j=p["a"]([Object(f["a"])({components:{VueSlideBar:x.a}})],j);var S=j,C=S,R=(n("2b14"),n("2877")),D=Object(R["a"])(C,k,_,!1,null,"ec633ad4",null),T=D.exports,I=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.currentRun={},e.data=[],e.layout={title:{text:"Status of simulated residents vs. days"},legend:{orientation:"h"},autosize:!0,height:500,font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},yaxis:{autorange:!0},xaxis:{}},e.loglayout={title:"Log scale:",autosize:!0,legend:{orientation:"h"},height:500,font:{family:"Roboto,Arial,Helvetica,sans-serif",size:12,color:"#000"},yaxis:{type:"log",autorange:!0},xaxis:{}},e.options={displayModeBar:!1},e.currentSituation={},e.loadedSeriesData={},e.labels={nSusceptible:"Susceptible",nInfectedButNotContagious:"Infected, not contagious",nContagious:"Contagious",nSeriouslySick:"Seriously Sick",nCritical:"Critical",nTotalInfected:"Total Infected",nInfectedCumulative:"Infected Cumulative",nRecovered:"Recovered",nInQuarantine:"In Quarantine"},e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){this.loadZipData()}},{key:"loadZipData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.zipLoader=new w["a"]("./data.zip"),e.next=3,this.zipLoader.load();case 3:console.log("zip loaded!"),this.runChanged();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"runChanged",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log({run:this.currentRun}),!this.loadedSeriesData[this.currentRun.RunId]){e.next=4;break}return this.data=this.loadedSeriesData[this.currentRun.RunId],e.abrupt("return");case 4:return e.next=6,this.loadCSV(this.currentRun);case 6:t=e.sent,n=this.generateSeriesFromCSVData(t),this.loadedSeriesData[this.currentRun.RunId]=n,this.data=n;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"sliderChanged",value:function(e,t){console.log(e,t),this.currentSituation[e]=t,this.showPlotForCurrentSituation()}},{key:"showPlotForCurrentSituation",value:function(){for(var e="",t=0,n=Object.keys(this.state.measures);t<n.length;t++){var a=n[t];e+=this.currentSituation[a]+"-"}console.log(e),this.currentRun=this.state.runLookup[e],this.currentRun&&this.runChanged()}},{key:"unpack",value:function(e,t){var n=e.map((function(e){return e[t]}));return n=n.slice(0,150),n.length<150&&n.push("day"===t?150:n[n.length-1]),n}},{key:"loadCSV",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.RunId){e.next=2;break}return e.abrupt("return",[]);case 2:return n=t.RunId+".infections.txt",console.log("Extracting",n),a=this.zipLoader.extractAsText(n),r=v.a.parse(a,{header:!0,dynamicTyping:!0,skipEmptyLines:!0}),e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"generateSeriesFromCSVData",value:function(e){for(var t=[],n=this.unpack(e,"day"),a=0,r=Object.keys(this.labels);a<r.length;a++){var s=r[a],i=this.labels[s],o=this.unpack(e,s);t.push({x:n,y:o,name:i})}return t}}]),t}(f["c"]);p["a"]([Object(f["b"])()],I.prototype,"state",void 0),I=p["a"]([Object(f["a"])({components:{MySlider:T,VuePlotly:y.a}})],I);var B=I,P=B,z=(n("32d8"),Object(R["a"])(P,b,g,!1,null,"98871b4c",null)),A=z.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"my-nav-bar"}},[n("div",{staticClass:"dropdown",class:{"is-active":e.showDropdownRun}},[n("div",{staticClass:"dropdown-trigger"},[n("button",{staticClass:"button is-link",staticStyle:{"background-color":"#667883"},attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"},on:{blur:e.closeDropdown,click:e.toggleRunButton}},[n("span",[e._v(e._s(e.selectedRun))]),e._m(0)])]),n("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[n("div",{staticClass:"dropdown-content"},e._l(e.myRuns,(function(t){return n("a",{key:t,staticClass:"dropdown-item",on:{click:function(n){return e.clickedRun(t)}}},[n("div",[n("b",[e._v(e._s(e.runLookup[t].description))]),n("br"),n("span",[e._v(e._s(e.runLookup[t].case))])])])})),0)])]),e._m(1)])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small"},[n("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"right-side",attrs:{href:"https://www.urbandatalab.net/"}},[a("img",{staticClass:"udl-logo",attrs:{src:n("cf05")}}),a("img",{staticClass:"udl-logo-small",attrs:{src:n("c85a")}})])}],V=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.showDropdownRun=!1,e.myRuns=[],e.selectedRun="Choose run:",e.runLookup={},e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"stateChanged",value:function(){this.myRuns=Object.keys(this.state),this.runLookup=this.state}},{key:"toggleRunButton",value:function(){this.showDropdownRun=!this.showDropdownRun}},{key:"clickedRun",value:function(e){console.log("Selected",e),this.showDropdownRun=!this.showDropdownRun,this.selectedRun=e,this.$emit("selected",e)}},{key:"closeDropdown",value:function(){var e=this;setTimeout((function(){e.showDropdownRun=!1}),250)}}]),t}(f["c"]);p["a"]([Object(f["b"])()],V.prototype,"state",void 0),p["a"]([Object(f["d"])("state")],V.prototype,"stateChanged",null),V=p["a"]([f["a"]],V);var E=V,N=E,$=(n("ab17"),Object(R["a"])(N,L,M,!1,null,"4978fa9c",null)),F=$.exports,G=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.state={measures:{},runLookup:{}},e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadIndexData();case 2:return t=e.sent,e.next=5,this.generateScenarioMatrix(t);case 5:e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadIndexData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("fetching data"),e.next=3,fetch("./info.txt");case 3:return t=e.sent,e.next=6,t.text();case 6:return n=e.sent,a=v.a.parse(n,{header:!0,dynamicTyping:!0}),console.log({parsed:a.data}),e.abrupt("return",a.data);case 10:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"generateScenarioMatrix",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,s,i,o,u,c,l,d,p,h,v,f,b,g,m,y,w,k,_,O;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("generating lookups"),n={},a={},r=["Config","Output","RunId","RunScript"],s=0,i=Object.keys(t[0]);case 5:if(!(s<i.length)){e.next=13;break}if(o=i[s],!(r.indexOf(o)>-1)){e.next=9;break}return e.abrupt("continue",10);case 9:n[o]=new Set;case 10:s++,e.next=5;break;case 13:u=!0,c=!1,l=void 0,e.prev=16,d=t[Symbol.iterator]();case 18:if(u=(p=d.next()).done){e.next=29;break}if(h=p.value,h.RunId){e.next=22;break}return e.abrupt("continue",26);case 22:for(v=0,f=Object.keys(n);v<f.length;v++)b=f[v],(0===h[b]||h[b])&&n[b].add(h[b]);for(g="",m=0,y=Object.keys(n);m<y.length;m++)w=y[m],g+=h[w]+"-";a[g]=h;case 26:u=!0,e.next=18;break;case 29:e.next=35;break;case 31:e.prev=31,e.t0=e["catch"](16),c=!0,l=e.t0;case 35:e.prev=35,e.prev=36,u||null==d.return||d.return();case 38:if(e.prev=38,!c){e.next=41;break}throw l;case 41:return e.finish(38);case 42:return e.finish(35);case 43:for(k=0,_=Object.keys(n);k<_.length;k++)O=_[k],n[O]=Array.from(n[O].keys()).sort((function(e,t){return e-t}));console.log({measures:n,runLookup:a}),this.state.measures=n,this.state.runLookup=a;case 47:case"end":return e.stop()}}),e,this,[[16,31,35,43],[36,,38,42]])})));function t(t){return e.apply(this,arguments)}return t}()}]),t}(f["c"]);G=p["a"]([Object(f["a"])({components:{SectionViewer:A,MyNavBar:F}})],G);var H=G,U=H,J=(n("034f"),Object(R["a"])(U,r,s,!1,null,null,null)),K=J.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(K)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.92c17cdd.png"}});