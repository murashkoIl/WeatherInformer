(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var n=i.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/0e56d05e08c9cf49890107e6c15082f0.png",i=e.p+"images/dabc17b153f2bd421935d6fa8798138a.png",n=e.p+"images/663cc253f315e911a7394fb231b3b207.png",a=e.p+"images/890ef3748a6f3de6995b177cec5204b2.png",s=e.p+"images/bda8907dac772b8e6efe3c01a042c92a.png",c=function(e,t,i){let n={};return"c"===e?(n.tempUnit="Celsius",n.tempRequest=i.temp_c,n.tempSign="°"):(n.tempUnit="Fahrenheit",n.tempRequest=i.temp_f,n.tempSign="f"),"kph"===t?(n.windUnit="kph",n.windSpeedRequest=i.wind_kph):(n.windUnit="mph",n.windSpeedRequest=i.wind_mph),n},r=document.querySelector("#homeButton"),o=document.querySelector("#favouriteButton"),d=document.querySelector("#settingButton"),l=function(e,t,i){o.setAttribute("fill",e),r.setAttribute("fill",t),d.setAttribute("fill",i)},u=async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw new Error(t.status)},p=function(e,t){const i=document.createElement(e);return t&&(i.className=t),i};function m(e){const{location:r,current:o,forecast:d}=e,{temperatureUnit:l="c",windSpeedUnit:u="kph"}=localStorage,{tempRequest:m,tempSign:v,tempUnit:h,windUnit:g,windSpeedRequest:f}=c(l,u,o),S=p("div","informer"),y=function(e,t,i,n){const a=p("div","currentInfo");return a.innerHTML=`\n        <div class="city">${e.name}</div>\n        <div class="currentTemp">${i}${n}<img src="https:${t.condition.icon}"></div>\n        <div class="currentCondition">${t.condition.text}</div>`,a}(r,o,m,v),w=function(e,a,s){const c=p("div","humPresSpeed");return c.innerHTML=`\n    <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${e.humidity} %</div>\n    <div class="pressure"><img сlass='imgHumPresSpeed' src="${i}" alt="Pres" height="30px" width="30px">${e.pressure_mb} mBar</div>\n    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${n}" height="30px" width="30px">${s} ${a}</div>`,c}(o,g,f),$=function(e){const t=p("div","sun");return t.innerHTML=`\n    <div class="sunrise"><img class="sunrise" src="${a}" alt="sunrise" height="30px" width="30px">${e.forecastday[0].astro.sunrise}</div>\n    <div class="sunset">${e.forecastday[0].astro.sunset}<img class="sunset" src="${s}" alt="sunset" height="30px" width="30px"></div>`,t}(d),x=function(e,t,i,n){const a=p("div","today"),s=p("div","dayForecast"),c=t.last_updated.slice(-5).split(":")[0],r=e.forecastday[0].hour.slice(c).concat(e.forecastday[1].hour).splice(1,24);return a.innerHTML='<div class="caption">Today</div>',r.forEach((e=>s.append(function(e,t,i){const n=p("div","timeGroup");let a;return a="Celsius"===t?e.temp_c:e.temp_f,n.innerHTML=`\n    <div class="time">${e.time.substr(-5)}</div>\n    <div class="icon"><img src="https:${e.condition.icon}"></div>\n    <div class="time">${a}${i}</div>`,n}(e,i,n)))),a.append(s),a}(d,o,h,v),q=function(e,t,i){const n=p("div","nextDays");return e.forecastday.slice(1).forEach((e=>n.append(function(e,t,i){const n=function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:Error("error getting week day")}}(new Date(e.date).getDay()),a=p("div","nextDay");let s,c;return"Celsius"===i?(s=e.day.maxtemp_c,c=e.day.mintemp_c):(s=e.day.maxtemp_f,c=e.day.mintemp_f),a.innerHTML=`\n    <div class="nameNextDay">${n}</div>\n    <div class="iconNextDay"><img src="https:${e.day.condition.icon}"></div>\n    <div class="maxTempNextDay">${s}${t}</div>\n    <div class="minTempNextDay">${c}${t}</div>`,a}(e,t,i)))),n}(d,v,h);S.append(y),S.append(w),S.append($),S.append(x),S.append(q),document.querySelector(".app").prepend(S),document.querySelector(".dayForecast").addEventListener("mousewheel",(e=>{e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.querySelector(".dayForecast").scrollLeft-=40*t,e.preventDefault()}),!1)}const v=function(e){l("#37515e","#a37695","#37515e"),u(e).then((e=>m(e))).catch(alert)},h=e.p+"images/94d69086bdb47533fb08532ab762a13f.png";const g=function(e){e.preventDefault();const t=document.querySelector(".search").value;t&&async function(e){const t=await fetch(`https://autocomplete.travelpayouts.com/places2?term=${e}&locale=en&types[]=city&callback=json`,{mode:"cors"});if(200==t.status)return await t.text();throw new Error(t.status)}(t).then((e=>function(e){window.location.hash="#List","searchDiv"!==document.querySelector(".favouritePage").lastChild.className&&document.querySelector(".favouritePage").lastChild.remove();let t=JSON.parse(localStorage.getItem("favouriteCitiesArr"));const i=p("div","similarCitiesDiv"),n=p("ul","citiesList");e.slice(0,5).forEach(((e,i)=>{const{name:a,country_name:s}=e;let c=function(e){const t=JSON.parse(localStorage.getItem("favouriteCitiesArr"));return t&&0!==t.length&&t.includes(e)?"gold":"white"}(a);const r=document.createElement("li");r.setAttribute("class","similarCityLi"),r.setAttribute("id",i),r.innerHTML=`${a}, ${s} <svg class="addToFavourite" fill=${c} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172">\n           <path d="M86,3.44c-1.41918,0.00123 -2.69197,0.87377 -3.20485,2.19703l-21.21109,54.68391l-58.31875,2.97641c-1.42104,0.07193 -2.65119,1.01123 -3.09488,2.36314c-0.44369,1.35192 -0.00937,2.83748 1.09269,3.73748l45.41203,37.12781l-14.91562,56.33672c-0.36448,1.37274 0.15208,2.82834 1.30034,3.66425c1.14826,0.83591 2.69217,0.88027 3.88654,0.11168l49.0536,-31.48406l49.0536,31.48406c1.19437,0.76859 2.73828,0.72423 3.88654,-0.11168c1.14826,-0.83591 1.66481,-2.29152 1.30034,-3.66425l-14.91562,-56.33672l45.41203,-37.12781c1.10206,-0.9 1.53638,-2.38556 1.09269,-3.73748c-0.44369,-1.35192 -1.67383,-2.29121 -3.09488,-2.36314l-58.31875,-2.97641l-21.21109,-54.68391c-0.51288,-1.32326 -1.78567,-2.1958 -3.20485,-2.19703zM86,16.38703l18.80578,48.49594c0.49155,1.26528 1.68113,2.12325 3.03687,2.19031l51.6336,2.64047l-40.21844,32.88828c-1.04357,0.85326 -1.49268,2.23736 -1.14891,3.54078l13.21578,49.92703l-43.46359,-27.90297c-1.13361,-0.72914 -2.58858,-0.72914 -3.72219,0l-43.46359,27.90297l13.21578,-49.92703c0.34378,-1.30342 -0.10534,-2.68753 -1.14891,-3.54078l-40.21844,-32.88828l51.6336,-2.64047c1.35575,-0.06706 2.54532,-0.92503 3.03687,-2.19031z"></path>\n           </svg>`,n.append(r),r.addEventListener("click",(e=>{if("svg"===e.target.tagName||"path"===e.target.tagName){let i;if(i="path"===e.target.tagName?e.target.parentNode:e.target,"white"===i.getAttribute("fill"))i.setAttribute("fill","gold"),t.includes(e.currentTarget.textContent.split(",")[0])||t.push(e.currentTarget.textContent.split(",")[0]);else{i.setAttribute("fill","white");const n=t.indexOf(e.currentTarget.textContent.split(",")[0]);n>-1&&t.splice(n,1)}}else{const t=e.currentTarget.textContent.split(",")[0];localStorage.cityUrl=`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${t}&days=4&aqi=no&alerts=no`,window.location.hash="#city"}localStorage.setItem("favouriteCitiesArr",JSON.stringify(t))}))})),i.append(n),document.querySelector(".favouritePage").append(i)}(JSON.parse(e.slice(5).slice(0,-2))))).catch(alert)};const f=function(){null===localStorage.getItem("favouriteCitiesArr")&&localStorage.setItem("favouriteCitiesArr",JSON.stringify([])),l("#a37695","#37515e","#37515e");const e=p("div","favouritePage"),i=function(){const e=p("div","searchDiv");return e.innerHTML=`\n   <form class="searchForm">\n         <input class="search" type="text" placeholder="Search">\n         <input class="submit" type="submit" value="" style="background: url(${h}) no-repeat">\n   </form>\n   `,e}(),a=function(){const e=p("div","favouriteCities"),i=JSON.parse(localStorage.getItem("favouriteCitiesArr"));return i.length>0&&i.forEach((i=>{e.append(function(e){const i=p("div","favCityDiv");return e.then((e=>{const{location:a,current:s}=e,{temperatureUnit:r="c",windSpeedUnit:o="kph"}=localStorage,{tempRequest:d,tempSign:l,windUnit:u,windSpeedRequest:p}=c(r,o,s);i.innerHTML=`\n         <div class="favCityTempDiv">${d}${l}<img src="https:${s.condition.icon}"  height="50px" width="50px"></div>\n         <div class="favCityLocDiv">${a.name}</div>\n         <div class="favCountryLocDiv">${a.country}</div>\n         <div class="favCityExtraInfoDiv">\n            <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${s.humidity}%</div>\n            <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${n}" height="30px" width="30px">${p} ${u}</div>\n         </div>\n         `})).catch(alert),i.addEventListener("click",(e=>{const t=e.currentTarget.childNodes[3].innerText;localStorage.cityUrl=`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${t}&days=4&aqi=no&alerts=no`,window.location.hash="#city"})),i}(u(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${i}&days=4&aqi=no&alerts=no`)))})),e}();e.append(i),e.append(a),document.querySelector(".app").prepend(e),document.querySelector(".searchForm").addEventListener("input",(e=>g(e)))};function S(){"Celsius"===document.querySelector(".tempSettingUnit").textContent?(document.querySelector(".tempSettingUnit").textContent="Fahrenheit",localStorage.temperatureUnit="f"):(document.querySelector(".tempSettingUnit").textContent="Celsius",localStorage.temperatureUnit="c")}function y(){"kph"===document.querySelector(".windSpeedSettingUnit").textContent?(document.querySelector(".windSpeedSettingUnit").textContent="mph",localStorage.windSpeedUnit="mph"):(document.querySelector(".windSpeedSettingUnit").textContent="kph",localStorage.windSpeedUnit="kph")}const w="http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no",$=document.querySelector(".app");"#home"===window.location.hash?v(w):window.location.hash="#home",window.addEventListener("hashchange",(function(){switch(window.location.hash){case"#home":$.firstChild.remove(),v(w);break;case"#city":$.firstChild.remove(),v(localStorage.cityUrl);break;case"#favourite":$.firstChild.remove(),f();break;case"#setting":case"#kph":case"#mph":case"#Celsius":case"#Fahrenheit":$.firstChild.remove(),function(){l("#37515e","#37515e","#a37695");const e=p("div","settingPage");document.querySelector(".app").prepend(e),u("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no").then((e=>function(e){const{current:a,location:s}=e,{temperatureUnit:r="c",windSpeedUnit:o="kph"}=localStorage,{tempUnit:d,tempRequest:l,tempSign:u,windUnit:p,windSpeedRequest:m}=c(r,o,a);document.querySelector(".settingPage").innerHTML=`\n    <div class="locationDiv">\n        <div class="locationCaptionDiv">Your Location Now</div>\n        <div class="locationDescriptionDiv">${s.name}, ${s.country}</div>\n    </div>\n    <div class="locationInfoDiv">\n        <div class="locationIconDiv"><img class="sunrise" src="https:${a.condition.icon}" alt="sunrise" height="150px" width="150px"></div>\n        <div class="locationIconDescriptionDiv">${a.condition.text}</div>\n        <div class="localTempDiv">${l}${u}</div>\n    </div>\n    <div class="locationExtraInfoDiv">\n        <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${n}" height="30px" width="30px">${m} ${p}</div>\n        <div class="humidity"><img сlass='imgHumPresSpeed' src="${t}" alt="Hum" height="30px" width="30px">${a.humidity} %</div>\n        <div class="pressure"><img сlass='imgHumPresSpeed' src="${i}" alt="Pres" height="30px" width="30px">${a.pressure_mb} mBar</div>\n    </div>\n    <div class="locationEditDiv">\n        <div class="tempSettingDiv">\n            <div class="tempSettingCaption">Temperature</div>\n            <div class="tempSettingUnit"><a href="#${d}">${d}</a></div>\n        </div>\n        <div class="speedWindSettingDiv">\n            <div class="windSpeedSettingCaption">Wind Speed</div>\n            <div class="windSpeedSettingUnit"><a href="#${p}">${p}</a></div>\n        </div>\n        <div class="sourceSettingDiv">\n            <div class="sourceSettingCaption">Source</div>\n            <div class="sourceSettingUnit">weatherapi.com</div>\n        </div>\n    </div>`,document.querySelector(".tempSettingUnit").addEventListener("click",S),document.querySelector(".windSpeedSettingUnit").addEventListener("click",y)}(e))).catch(alert)}();break;case"#List":"searchDiv"!==document.querySelector(".favouritePage").lastChild.className&&document.querySelector(".favouritePage").lastChild.remove()}}))})();