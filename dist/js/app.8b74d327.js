(function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],g=0,m=[];g<c.length;g++)i=c[g],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("center",[a("div",{staticClass:"box",attrs:{id:"app"}},[e.startmenu?a("div",{staticClass:"wborder"},[a("h1",{staticClass:"caloriecounter"},[e._v("Personalize:")]),a("div",{class:"r "+e.crate},[a("p",{staticClass:"caloriecounter smalldecision",staticStyle:{"margin-top":"4%"}},[e._v("Sex:")]),"male"===e.userSex?a("button",{staticClass:"crate reduced",staticStyle:{"background-color":"rgb(73, 197, 255)"},attrs:{value:"male"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.userSex="male")}}},[e._v("Male")]):a("button",{staticClass:"crate reduced",staticStyle:{"background-color":"rgb(255,255,255)"},attrs:{value:"male"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.userSex="male")}}},[e._v("Male")]),"female"===e.userSex?a("button",{staticClass:"crate reduced",staticStyle:{"background-color":"rgb(253, 63, 158)"},attrs:{value:"female"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.userSex="female")}}},[e._v("Female")]):a("button",{staticClass:"crate reduced",staticStyle:{"background-color":"rgb(255,255,255)"},attrs:{value:"female"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.userSex="female")}}},[e._v("Female")]),a("p",{staticClass:"caloriecounter smalldecision"},[e._v("Age:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userAge,expression:"userAge"}],staticClass:"searchbar smalldecision",attrs:{type:"number",placeholder:"Enter Age"},domProps:{value:e.userAge},on:{input:function(t){t.target.composing||(e.userAge=t.target.value)}}}),a("p",{staticClass:"caloriecounter smalldecision",staticStyle:{width:"200px"}},[e._v("Weight (In Pounds):")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userWeight,expression:"userWeight"}],staticClass:"searchbar smalldecision",staticStyle:{"margin-bottom":"4%",display:"inline"},attrs:{type:"number",placeholder:"Enter Weight"},domProps:{value:e.userWeight},on:{input:function(t){t.target.composing||(e.userWeight=t.target.value)}}})]),"crate"===e.crate?a("button",{class:"total r "+e.crate,staticStyle:{"margin-top":"0%"},on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.error=!0)}}},[e._v("Submit")]):a("button",{class:"total w "+e.crate,on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.calibrate()}}},[e._v("Submit")]),a("button",{staticClass:"total crate",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:void(e.startmenu=!1)}}},[e._v("Skip")]),e.error&&"crate"===e.crate?a("p",{staticClass:"caloriecounter",staticStyle:{color:"red","margin-top":"4%","margin-bottom":"0%"}},[e._v("Incomplete Info")]):e._e()]):e._e(),!1===e.toggle&&!1===e.startmenu?a("div",[a("header",{staticClass:"box xborder"},[a("button",{staticClass:"searchbar searchtab",staticStyle:{"margin-top":"3%"},on:{click:function(t){e.toggle=!e.toggle}}},[e._v("Add More Items")]),a("button",{staticClass:"searchbar searchtab",staticStyle:{"margin-top":"3%"},on:{click:function(t){e.startmenu=!0}}},[e._v("Personalize...")])]),a("h1",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1.5%"}},[e._v("Calories:")]),a("div",{staticClass:"decision"},[a("h1",{staticClass:"caloriecounter",style:{color:e.rgbCals}},[e._v(" "+e._s(e.calories)+" ")])]),a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"}},[e._v("Total Fat(g):")]),a("div",{staticClass:"decision smalldecision"},[a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"},style:{color:e.rgbFat}},[e._v(e._s(e.fat))])]),a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"}},[e._v("Added Sugar(g):")]),a("div",{staticClass:"decision smalldecision"},[a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"},style:{color:e.rgbSugar}},[e._v(e._s(e.sugar))])]),a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"}},[e._v("Sodium(mg):")]),a("div",{staticClass:"decision smalldecision"},[a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"},style:{color:e.rgbSodium}},[e._v(e._s(e.sodium))])]),a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"}},[e._v("Carbohydrates(g):")]),a("div",{staticClass:"decision smalldecision"},[a("p",{staticClass:"caloriecounter",staticStyle:{"margin-bottom":"1%","margin-top":"1%"},style:{color:e.rgbCarbs}},[e._v(e._s(e.carbs))])]),a("h1",{staticClass:"caloriecounter"},[e._v("Remove Items:")]),e._l(e.total,(function(t){return a("div",{key:t.total,staticClass:"forcontainer containermod"},[a("button",{staticClass:"menuitems removeitem",on:{click:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"left",37,a.key,["Left","ArrowLeft"])||"button"in a&&0!==a.button?null:e.removeTotal(t)}}},[e._v(e._s(t.name))])])})),0===e.total.length?a("p",{staticClass:"caloriecounter"},[e._v("Selected Items Show Up Here!")]):e._e()],2):e._e(),e.toggle&&!1===e.startmenu?a("div",[a("header",{staticClass:"box xborder"},[a("button",{staticClass:"searchbar",on:{click:function(t){e.toggle=!e.toggle}}},[e._v("Total")]),a("Search",{attrs:{menu:e.menu},on:{update_temp_menu:function(t){return e.display(t)}}}),a("button",{staticClass:"searchbar lr",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.reset()}}},[e._v("CE")]),a("p",{staticClass:"caloriecounter"},[e._v("Calories:")]),a("div",{staticClass:"decision"},[a("h1",{staticClass:"caloriecounter",style:{color:e.rgbCals}},[e._v(" "+e._s(e.calories)+" ")])])],1),a("div",{staticStyle:{"margin-bottom":"16px"}}),e._l(e.temp_menu,(function(t){return a("div",{key:t.item,staticClass:"forcontainer"},[a("button",{staticClass:"menuitems",on:{click:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"left",37,a.key,["Left","ArrowLeft"])||"button"in a&&0!==a.button?null:e.appendTotal(t)}}},[e._v(e._s(t.name))])])})),0===e.temp_menu.length?a("p",{staticClass:"caloriecounter"},[e._v("No Items Found")]):e._e()],2):e._e()])])},s=[],i=a("1da1"),c=(a("d3b7"),a("a434"),a("c740"),a("99af"),a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("input",{directives:[{name:"model",rawName:"v-model",value:e.raw_query,expression:"raw_query"}],staticClass:"searchbar",attrs:{type:"search",id:"search",placeholder:"Search Menu Items"},domProps:{value:e.raw_query},on:{input:function(t){t.target.composing||(e.raw_query=t.target.value)}}})}),o=[],l=a("2909"),u=(a("159b"),a("ac1f"),a("5319"),a("caad"),a("2532"),a("1276"),a("fb6a"),a("b0c0"),a("6062"),a("3ca3"),a("ddb0"),{name:"Search",props:["menu"],data:function(){return{raw_query:""}},watch:{raw_query:function(){this.update()}},methods:{getOccurrence:function(e,t){var a=0;return e.forEach((function(e){return e===t&&a++})),a},all:function(e){for(var t=0;t<e.length;t++)if(!1===e[t])return!1;return!0},query:function(e){var t=e.replace(/\s/g,"");return t=t.toLowerCase(),t=t.includes("&")?t.split("&"):[t],t},update:function(){var e=this.query(this.raw_query),t=[],a=[],r=[];this.temp_menu=[];for(var n=0;n<e.length;n++){for(var s=!1,i=0;i<this.menu.length;i++)switch(!0){case this.menu[i].item.includes(e[n]):s=!0,r.push(this.menu[i]);break;case this.menu[i].category.includes(e[n]):s=!0,r.push(this.menu[i]);break;case this.menu[i].cals.includes(e[n]):s=!0,r.push(this.menu[i]);break;case"<"===e[n][0]:parseInt(this.menu[i].cals)<parseInt(e[n].slice(1))&&(s=!0,r.push(this.menu[i]));break;case">"===e[n][0]:parseInt(this.menu[i].cals)>parseInt(e[n].slice(1))&&(s=!0,r.push(this.menu[i]));break;case e[n].includes("-"):t=e[n].split("-"),parseInt(this.menu[i].cals)>=t[0]&&parseInt(this.menu[i].cals)<=t[1]&&(s=!0,r.push(this.menu[i]));break}s?a.push(!0):a.push(!1)}if(console.log("Query '".concat(this.raw_query,"' Returns: ")),this.all(a)){for(var c=[],o=0;o<r.length;o++)this.getOccurrence(r,r[o])===e.length&&(console.log(r[o].name),c.push(r[o]));var u=Object(l["a"])(new Set(c));this.temp_menu=Object(l["a"])(u)}this.$emit("update_temp_menu",this.temp_menu)}}}),g=u,m=a("2877"),b=Object(m["a"])(g,c,o,!1,null,null,null),f=b.exports,d={name:"App",components:{Search:f},data:function(){return{crate:"crate",userSex:"",userAge:"",userWeight:"",error:!1,startmenu:!0,total:[],calories:0,calrange:[0,2e3,3e3],carbs:0,carbrange:[0,275,412.5],sodium:0,sodrange:[0,2300,3450],fat:0,fatrange:[0,78,117],sugar:0,sugrange:[0,50,75],fiber:0,fibrange:[0,28,42],rgb:[0,255,0],rgbCals:"rgb(0, 0, 0)",rgbCarbs:"rgb(0, 0, 0)",rgbSodium:"rgb(0, 0, 0)",rgbSugar:"rgb(0, 0, 0)",rgbFat:"rgb(0, 0, 0)",toggle:!0,menu:[{item:"cesaersalad",cals:"470",info:[470,1070,12,4,40],category:"lunch/saladbar/gf/vegan",name:"Cesaer Salad"},{item:"cheesecake",cals:"400",info:[400,548,32,27,28],category:"dessert/justdesserts/vegetarian",name:"Cheese Cake"},{item:"veggieburrito",cals:"450",info:[450,985,71,0,12],category:"lunch/dinner/mexican/vegetarian/vegan",name:"Veggie Burrito"},{item:"cheesepizza",cals:"240",info:[240,540,34,1,7],category:"lunch/dinner/italian/vegetarian",name:"Cheese Pizza"},{item:"bagelwithcreamcheese",cals:"380",info:[380,534,57,9,11],category:"breakfast/jewish/vegetarian",name:"Bagel w/ CC."},{item:"chocolatecake",cals:"350",info:[350,300,50,44,15],category:"dessert/justdesserts/vegetarian",name:"Chocolate Cake"},{item:"homestylechickenbowl",cals:"670",info:[670,940,66,0,35],category:"dinner/millcitygrill/gf",name:"Chicken Bowl"},{item:"pastapennewithsauce",cals:"300",info:[300,710,60,6,4],category:"dinner/italian",name:"Penne w/ Sauce"}],temp_menu:[{item:"cesaersalad",cals:"470",info:[470,1070,12,4,40],category:"lunch/saladbar/gf/vegan",name:"Cesaer Salad"},{item:"cheesecake",cals:"400",info:[400,548,32,27,28],category:"dessert/justdesserts/vegetarian",name:"Cheese Cake"},{item:"veggieburrito",cals:"450",info:[450,985,71,0,12],category:"lunch/dinner/mexican/vegetarian/vegan",name:"Veggie Burrito"},{item:"cheesepizza",cals:"240",info:[240,540,34,1,7],category:"lunch/dinner/italian/vegetarian",name:"Cheese Pizza"},{item:"bagelwithcreamcheese",cals:"380",info:[380,534,57,9,11],category:"breakfast/jewish/vegetarian",name:"Bagel w/ CC."},{item:"chocolatecake",cals:"350",info:[350,300,50,44,15],category:"dessert/justdesserts/vegetarian",name:"Chocolate Cake"},{item:"homestylechickenbowl",cals:"670",info:[670,940,66,0,35],category:"dinner/millcitygrill/gf",name:"Chicken Bowl"},{item:"pastapennewithsauce",cals:"300",info:[300,710,60,6,4],category:"dinner/italian",name:"Penne w/ Sauce"}]}},watch:{userAge:function(){this.userAge<=0&&(this.userAge=""),""!=this.userSex&&""!=this.userWeight&&""!=this.userAge?this.crate="crate g":this.crate="crate"},userWeight:function(){this.userWeight<=0&&(this.userWeight=""),""!=this.userSex&&""!=this.userWeight&&""!=this.userAge?this.crate="crate g":this.crate="crate"},userSex:function(){""!=this.userSex&&""!=this.userWeight&&""!=this.userAge?this.crate="crate g":this.crate="crate"},error:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sleep(5e3);case 2:e.error=!1;case 3:case"end":return t.stop()}}),t)})))()}},methods:{display:function(e){this.temp_menu=e},sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},increase:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=0;case 1:if(!(n<t)){r.next=25;break}return r.next=4,a.sleep(1);case 4:r.t0=e,r.next="calories"===r.t0?7:"carbs"===r.t0?10:"sodium"===r.t0?13:"sugar"===r.t0?16:"fat"===r.t0?19:22;break;case 7:return a.calories++,a.colorCalc(e,a.calrange,a.calories),r.abrupt("break",22);case 10:return a.carbs++,a.colorCalc(e,a.carbrange,a.carbs),r.abrupt("break",22);case 13:return a.sodium++,a.colorCalc(e,a.sodrange,a.sodium),r.abrupt("break",22);case 16:return a.sugar++,a.colorCalc(e,a.sugrange,a.sugar),r.abrupt("break",22);case 19:return a.fat++,a.colorCalc(e,a.fatrange,a.fat),r.abrupt("break",22);case 22:n++,r.next=1;break;case 25:case"end":return r.stop()}}),r)})))()},decrease:function(e,t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=0;case 1:if(!(n<t)){r.next=25;break}return r.next=4,a.sleep(1);case 4:r.t0=e,r.next="calories"===r.t0?7:"carbs"===r.t0?10:"sodium"===r.t0?13:"sugar"===r.t0?16:"fat"===r.t0?19:22;break;case 7:return a.calories--,a.colorCalc(e,a.calrange,a.calories),r.abrupt("break",22);case 10:return a.carbs--,a.colorCalc(e,a.carbrange,a.carbs),r.abrupt("break",22);case 13:return a.sodium--,a.colorCalc(e,a.sodrange,a.sodium),r.abrupt("break",22);case 16:return a.sugar--,a.colorCalc(e,a.sugrange,a.sugar),r.abrupt("break",22);case 19:return a.fat--,a.colorCalc(e,a.fatrange,a.fat),r.abrupt("break",22);case 22:n++,r.next=1;break;case 25:case"end":return r.stop()}}),r)})))()},reset:function(){location.reload()},print:function(e){console.log(e)},calibrate:function(){this.startmenu=!1},appendTotal:function(e){for(var t=["calories","sodium","carbs","sugar","fat"],a=0;a<t.length;a++)this.increase(t[a],e.info[a]);this.total.push(e)},removeTotal:function(e){for(var t=["calories","sodium","carbs","sugar","fat"],a=0;a<t.length;a++)this.decrease(t[a],e.info[a]);this.total.splice(this.findIndex(this.total,e),1)},findIndex:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return a},colorCalc:function(e,t,a){this.rgb=[0,255,0];var r=(t[2]-a)/(t[2]-t[1])*255,n=a/t[1]*255;switch(this.rgb[0]=n,a>t[1]&&(this.rgb[1]=r),e){case"calories":this.rgbCals="rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", 0)");break;case"sodium":this.rgbSodium="rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", 0)");break;case"carbs":this.rgbCarbs="rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", 0)");break;case"sugar":this.rgbSugar="rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", 0)");break;case"fat":this.rgbFat="rgb(".concat(this.rgb[0],", ").concat(this.rgb[1],", 0)");break}}}},h=d,p=(a("034f"),Object(m["a"])(h,n,s,!1,null,null,null)),v=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.8b74d327.js.map