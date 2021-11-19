(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/0e56d05e08c9cf49890107e6c15082f0.png",n=e.p+"images/dabc17b153f2bd421935d6fa8798138a.png",c=e.p+"images/663cc253f315e911a7394fb231b3b207.png",a=e.p+"images/890ef3748a6f3de6995b177cec5204b2.png",s=e.p+"images/bda8907dac772b8e6efe3c01a042c92a.png";function i(e){const{location:i,current:r,forecast:o}=e,d=document.createElement("div");d.className="informer";const u=function(e,t){const n=document.createElement("div");return n.className="currentInfo",n.innerHTML=`\n        <div class="city">${e.name}</div>\n        <div class="currentTemp">${t.temp_c}°<img src="https:${t.condition.icon}"></div>\n        <div class="currentCondition">${t.condition.text}</div>`,n}(i,r),m=function(e){const a=document.createElement("div");return a.className="humPresSpeed",a.innerHTML=`\n    <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${e.humidity} %</div>\n    <div class="pressure"><img сlass='imgHumPresSpeed' src="${n}" alt="Pres" height="30px" width="30px">${e.pressure_mb} mBar</div>\n    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${c}" height="30px" width="30px">${e.wind_kph} km/h</div>`,a}(r),l=function(e){const t=document.createElement("div");return t.className="sun",t.innerHTML=`\n    <div class="sunrise"><img class="sunrise" src="${a}" alt="sunrise" height="30px" width="30px">${e.forecastday[0].astro.sunrise}</div>\n    <div class="sunset">${e.forecastday[0].astro.sunset}<img class="sunset" src="${s}" alt="sunset" height="30px" width="30px"></div>`,t}(o),p=function(e,t){const n=document.createElement("div"),c=document.createElement("div"),a=t.last_updated.slice(-5).split(":")[0],s=e.forecastday[0].hour.slice(a).concat(e.forecastday[1].hour).splice(1,24);return c.className="dayForecast",n.className="today",n.innerHTML='<div class="caption">Today</div>',s.forEach((e=>c.append(function(e){const t=document.createElement("div");return t.className="timeGroup",t.innerHTML=`\n    <div class="time">${e.time.substr(-5)}</div>\n    <div class="icon"><img src="https:${e.condition.icon}"></div>\n    <div class="time">${e.temp_c}°</div>`,t}(e)))),n.append(c),n}(o,r),v=function(e){const t=document.createElement("div");return t.className="nextDays",e.forecastday.slice(1).forEach((e=>t.append(function(e){const t=function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:Error("error getting week day")}}(new Date(e.date).getDay()),n=document.createElement("div");return n.className="nextDay",n.innerHTML=`\n    <div class="nameNextDay">${t}</div>\n    <div class="iconNextDay"><img src="https:${e.day.condition.icon}"></div>\n    <div class="maxTempNextDay">${e.day.maxtemp_c}°</div>\n    <div class="minTempNextDay">${e.day.mintemp_c}°</div>`,n}(e)))),t}(o);d.append(u),d.append(m),d.append(l),d.append(p),d.append(v),document.querySelector(".app").prepend(d),document.querySelector(".dayForecast").addEventListener("mousewheel",(e=>{e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.querySelector(".dayForecast").scrollLeft-=40*t,e.preventDefault()}),!1)}const r=e.p+"images/94d69086bdb47533fb08532ab762a13f.png";const o=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("div"),t=function(){const e=document.createElement("form"),t=function(){const e=document.createElement("input");return e.className="search",e.type="text",e.placeholder="Search",e}(),n=function(){const e=document.createElement("input");return e.className="submit",e.type="submit",e.value="",e.style.background=`url(${r}) no-repeat`,e}();return e.className="searchForm",e.append(t),e.append(n),e}();return e.className="searchDiv",e.append(t),e}(),n=function(){const e=document.createElement("div");return e.className="favouriteCities",e}();e.className="favouritePage",e.append(t),e.append(n),document.querySelector(".app").prepend(e),document.querySelector(".searchForm").addEventListener("submit",(e=>{e.preventDefault();(async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)})(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${document.querySelector(".search").value}&days=4&aqi=no&alerts=no`).then((e=>console.log(e))).catch(alert),document.querySelector(".search").value=""}))};const d=function(){const e=document.createElement("div");e.className="settingPage",document.querySelector(".app").prepend(e),async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no",{mode:"cors"});if(200==e.status)return await e.json();throw new Error(e.status)}().then((e=>function(e){const{current:a,location:s}=e,i=function(e){const t=document.createElement("div");return t.innerHTML=`\n    <div class="locationCaptionDiv">Your Location Now</div>\n    <div class="locationDescriptionDiv">${e.name}, ${e.country}</div>`,t.className="locationDiv",t}(s),r=function(e){const t=document.createElement("div");return t.innerHTML=`\n    <div class="locationIconDiv"><img class="sunrise" src="https:${e.condition.icon}" alt="sunrise" height="150px" width="150px"></div>\n    <div class="locationIconDescriptionDiv">${e.condition.text}</div>\n    <div class="localTempDiv">${e.temp_c}°</div>\n    `,t.className="locationInfoDiv",t}(a),o=function(e){const a=document.createElement("div");return a.innerHTML=`\n    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${c}" height="30px" width="30px">${e.wind_kph} km/h</div>\n    <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${e.humidity} %</div>\n    <div class="pressure"><img сlass='imgHumPresSpeed' src="${n}" alt="Pres" height="30px" width="30px">${e.pressure_mb} mBar</div>`,a.className="locationExtraInfoDiv",a}(a);console.log(a),console.log(s),document.querySelector(".settingPage").append(i),document.querySelector(".settingPage").append(r),document.querySelector(".settingPage").append(o)}(e))).catch(alert)},u=document.querySelector(".controlMenu"),m=document.querySelector("#homeButton"),l=document.querySelector("#favouriteButton"),p=document.querySelector("#settingButton");function v(e,t,n){l.setAttribute("fill",e),m.setAttribute("fill",t),p.setAttribute("fill",n)}u.addEventListener("click",(({target:e})=>{const t=function(e){return"path"===e.tagName?e.parentNode:e}(e);switch(t.id){case"favouriteButton":document.querySelector(".app").firstChild.remove(),o(),v("#a37695","#37515e","#37515e");break;case"homeButton":document.querySelector(".app").firstChild.remove(),async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)}("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no").then((e=>i(e))).catch(alert),v("#37515e","#a37695","#37515e");break;case"settingButton":document.querySelector(".app").firstChild.remove(),d(),v("#37515e","#37515e","#a37695")}})),d()})();