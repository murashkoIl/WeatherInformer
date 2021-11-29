(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var n=i.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=document.querySelector("#homeButton"),i=document.querySelector("#favouriteButton"),n=document.querySelector("#settingButton"),a="#a37695",s="#37515e",r=e.p+"images/0e56d05e08c9cf49890107e6c15082f0.png",c=e.p+"images/dabc17b153f2bd421935d6fa8798138a.png",o=e.p+"images/663cc253f315e911a7394fb231b3b207.png",d=e.p+"images/890ef3748a6f3de6995b177cec5204b2.png",l=e.p+"images/bda8907dac772b8e6efe3c01a042c92a.png",u=function(e,t,i){let n={};return"c"===e?(n.tempUnit="Celsius",n.tempRequest=i.temp_c,n.tempSign="°"):(n.tempUnit="Fahrenheit",n.tempRequest=i.temp_f,n.tempSign="f"),"kph"===t?(n.windUnit="kph",n.windSpeedRequest=i.wind_kph):(n.windUnit="mph",n.windSpeedRequest=i.wind_mph),n},p=async function(e){const t=await fetch(e,{mode:"cors"});if(200==t.status)return await t.json();throw 404==t.status&&(window.location.hash="#notFaund"),new Error(t.status)},m=function(e,t){const i=document.createElement(e);return t&&(i.className=t),i};function v(e,t){const{location:i,current:n,forecast:a}=e,{temperatureUnit:s="c",windSpeedUnit:p="kph"}=localStorage,{tempRequest:v,tempSign:h,tempUnit:g,windUnit:f,windSpeedRequest:S}=u(s,p,n),y=function(e,t,i,n){const a=m("div","currentInfo");return a.innerHTML=`\n        <div class="city">${e.name}</div>\n        <div class="currentTemp">${i}${n}<img src="https:${t.condition.icon}"></div>\n        <div class="currentCondition">${t.condition.text}</div>`,a}(i,n,v,h),w=function(e,t,i){const n=m("div","humPresSpeed");return n.innerHTML=`\n    <div class="humidity"><img сlass='imgHumPresSpeed' src="${r}" alt="Hum" height="30px" width="30px">${e.humidity} %</div>\n    <div class="pressure"><img сlass='imgHumPresSpeed' src="${c}" alt="Pres" height="30px" width="30px">${e.pressure_mb} mBar</div>\n    <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${o}" height="30px" width="30px">${i} ${t}</div>`,n}(n,f,S),$=function(e){const t=m("div","sun");return t.innerHTML=`\n    <div class="sunrise"><img class="sunrise" src="${d}" alt="sunrise" height="30px" width="30px">${e.forecastday[0].astro.sunrise}</div>\n    <div class="sunset">${e.forecastday[0].astro.sunset}<img class="sunset" src="${l}" alt="sunset" height="30px" width="30px"></div>`,t}(a),x=function(e,t,i,n){const a=m("div","today"),s=m("div","dayForecast"),r=t.last_updated.slice(-5).split(":")[0],c=e.forecastday[0].hour.slice(r).concat(e.forecastday[1].hour).splice(1,24);return a.innerHTML='<div class="caption">Today</div>',c.forEach((e=>s.append(function(e,t,i){const n=m("div","timeGroup");let a;return a="Celsius"===t?e.temp_c:e.temp_f,n.innerHTML=`\n    <div class="time">${e.time.substr(-5)}</div>\n    <div class="icon"><img src="https:${e.condition.icon}"></div>\n    <div class="time">${a}${i}</div>`,n}(e,i,n)))),a.append(s),a}(a,n,g,h),b=function(e,t,i){const n=m("div","nextDays");return e.forecastday.slice(1).forEach((e=>n.append(function(e,t,i){const n=function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:Error("error getting week day")}}(new Date(e.date).getDay()),a=m("div","nextDay");let s,r;return"Celsius"===i?(s=e.day.maxtemp_c,r=e.day.mintemp_c):(s=e.day.maxtemp_f,r=e.day.mintemp_f),a.innerHTML=`\n    <div class="nameNextDay">${n}</div>\n    <div class="iconNextDay"><img src="https:${e.day.condition.icon}"></div>\n    <div class="maxTempNextDay">${s}${t}</div>\n    <div class="minTempNextDay">${r}${t}</div>`,a}(e,t,i)))),n}(a,h,g);t.append(y),t.append(w),t.append($),t.append(x),t.append(b),document.querySelector(".dayForecast").addEventListener("mousewheel",(e=>{e=window.event||e;var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail));document.querySelector(".dayForecast").scrollLeft-=40*t,e.preventDefault()}),!1)}const h=e.p+"images/94d69086bdb47533fb08532ab762a13f.png";const g=function(e){e.preventDefault();const t=document.querySelector(".search").value;t&&async function(e){const t=await fetch(`https://autocomplete.travelpayouts.com/places2?term=${e}&locale=en&types[]=city&callback=json`,{mode:"cors"});if(200==t.status)return await t.text();throw new Error(t.status)}(t).then((e=>function(e){"searchDiv"!==document.querySelector(".favouritePage").lastChild.className&&document.querySelector(".favouritePage").lastChild.remove();const t=document.querySelector(".favouritePage").lastChild;"searchDiv"!==t.className&&t.remove();let i=JSON.parse(localStorage.getItem("favouriteCitiesArr"));const n=m("div","similarCitiesDiv"),a=m("ul","citiesList");e.slice(0,5).forEach(((e,t)=>{const{name:n,country_name:s}=e;let r=function(e){const t=JSON.parse(localStorage.getItem("favouriteCitiesArr"));return t&&0!==t.length&&t.includes(e)?"gold":"white"}(n);const c=function(e,t,i,n){const a=document.createElement("li");return a.setAttribute("class","similarCityLi"),a.setAttribute("id",e),a.innerHTML=`${t}, ${i} <svg class="addToFavourite" fill=${n} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172">\n           <path d="M86,3.44c-1.41918,0.00123 -2.69197,0.87377 -3.20485,2.19703l-21.21109,54.68391l-58.31875,2.97641c-1.42104,0.07193 -2.65119,1.01123 -3.09488,2.36314c-0.44369,1.35192 -0.00937,2.83748 1.09269,3.73748l45.41203,37.12781l-14.91562,56.33672c-0.36448,1.37274 0.15208,2.82834 1.30034,3.66425c1.14826,0.83591 2.69217,0.88027 3.88654,0.11168l49.0536,-31.48406l49.0536,31.48406c1.19437,0.76859 2.73828,0.72423 3.88654,-0.11168c1.14826,-0.83591 1.66481,-2.29152 1.30034,-3.66425l-14.91562,-56.33672l45.41203,-37.12781c1.10206,-0.9 1.53638,-2.38556 1.09269,-3.73748c-0.44369,-1.35192 -1.67383,-2.29121 -3.09488,-2.36314l-58.31875,-2.97641l-21.21109,-54.68391c-0.51288,-1.32326 -1.78567,-2.1958 -3.20485,-2.19703zM86,16.38703l18.80578,48.49594c0.49155,1.26528 1.68113,2.12325 3.03687,2.19031l51.6336,2.64047l-40.21844,32.88828c-1.04357,0.85326 -1.49268,2.23736 -1.14891,3.54078l13.21578,49.92703l-43.46359,-27.90297c-1.13361,-0.72914 -2.58858,-0.72914 -3.72219,0l-43.46359,27.90297l13.21578,-49.92703c0.34378,-1.30342 -0.10534,-2.68753 -1.14891,-3.54078l-40.21844,-32.88828l51.6336,-2.64047c1.35575,-0.06706 2.54532,-0.92503 3.03687,-2.19031z"></path>\n           </svg>`,a}(t,n,s,r);a.append(c),c.addEventListener("click",(e=>{const t=e.currentTarget.textContent.split(",")[0];if("svg"===e.target.tagName||"path"===e.target.tagName){let n=function(e){return"path"===e.target.tagName?e.target.parentNode:e.target}(e);if("white"===n.getAttribute("fill"))n.setAttribute("fill","gold"),i.includes(t)||i.push(t);else{n.setAttribute("fill","white");const e=i.indexOf(t);e>-1&&i.splice(e,1)}}localStorage.setItem("favouriteCitiesArr",JSON.stringify(i))}))})),n.append(a),document.querySelector(".favouritePage").append(n)}(JSON.parse(e.slice(5).slice(0,-2))))).catch(alert)};function f(){const e=m("div","favouriteCities"),t=JSON.parse(localStorage.getItem("favouriteCitiesArr"));return t.length>0&&t.forEach((t=>{e.append(function(e){const t=m("div","favCityDiv");return e.then((e=>{const{location:i,current:n}=e,{temperatureUnit:a="c",windSpeedUnit:s="kph"}=localStorage,{tempRequest:c,tempSign:d,windUnit:l,windSpeedRequest:p}=u(a,s,n);t.innerHTML=`\n         <div class="favCityTempDiv">${c}${d}<img src="https:${n.condition.icon}"  height="50px" width="50px"></div>\n         <div class="favCityLocDiv">${i.name}</div>\n         <div class="favCountryLocDiv">${i.country}</div>\n         <div class="favCityExtraInfoDiv">\n            <div class="humidity"><img сlass='imgHumPresSpeed' src="${r}" alt="Hum" height="30px" width="30px">${n.humidity}%</div>\n            <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${o}" height="30px" width="30px">${p} ${l}</div>\n         </div>\n         `})).catch(alert),t}(p(`http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=${t}&days=4&aqi=no&alerts=no`)))})),e}function S(){const e=y();document.querySelector(".app").innerHTML="",document.querySelector(".app").append(e)}function y(){const e=m("div","settingPage");return p("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no").then((t=>function(e,t){const{current:i,location:n}=e,{temperatureUnit:a="c",windSpeedUnit:s="kph"}=localStorage,{tempUnit:d,tempRequest:l,tempSign:p,windUnit:m,windSpeedRequest:v}=u(a,s,i);t.innerHTML=`\n    <div class="locationDiv">\n        <div class="locationCaptionDiv">Your Location Now</div>\n        <div class="locationDescriptionDiv">${n.name}, ${n.country}</div>\n    </div>\n    <div class="locationInfoDiv">\n        <div class="locationIconDiv"><img class="sunrise" src="https:${i.condition.icon}" alt="sunrise" height="150px" width="150px"></div>\n        <div class="locationIconDescriptionDiv">${i.condition.text}</div>\n        <div class="localTempDiv">${l}${p}</div>\n    </div>\n    <div class="locationExtraInfoDiv">\n        <div class="windSpeed"><img сlass='imgHumPresSpeed' src="${o}" height="30px" width="30px">${v} ${m}</div>\n        <div class="humidity"><img сlass='imgHumPresSpeed' src="${r}" alt="Hum" height="30px" width="30px">${i.humidity} %</div>\n        <div class="pressure"><img сlass='imgHumPresSpeed' src="${c}" alt="Pres" height="30px" width="30px">${i.pressure_mb} mBar</div>\n    </div>\n    <div class="locationEditDiv">\n        <div class="tempSettingDiv">\n            <div class="tempSettingCaption">Temperature</div>\n            <div class="tempSettingUnit">${d}</div>\n        </div>\n        <div class="speedWindSettingDiv">\n            <div class="windSpeedSettingCaption">Wind Speed</div>\n            <div class="windSpeedSettingUnit">${m}</div>\n        </div>\n        <div class="sourceSettingDiv">\n            <div class="sourceSettingCaption">Source</div>\n            <div class="sourceSettingUnit">weatherapi.com</div>\n        </div>\n    </div>`,t.addEventListener("click",(({target:e})=>{"tempSettingUnit"===e.className&&("Celsius"===document.querySelector(".tempSettingUnit").textContent?(document.querySelector(".tempSettingUnit").textContent="Fahrenheit",localStorage.temperatureUnit="f"):(document.querySelector(".tempSettingUnit").textContent="Celsius",localStorage.temperatureUnit="c"),S()),"windSpeedSettingUnit"===e.className&&("kph"===document.querySelector(".windSpeedSettingUnit").textContent?(document.querySelector(".windSpeedSettingUnit").textContent="mph",localStorage.windSpeedUnit="mph"):(document.querySelector(".windSpeedSettingUnit").textContent="kph",localStorage.windSpeedUnit="kph"),S())}))}(t,e))).catch(alert),e}const w=y,$=document.querySelector(".app"),x={"#home":function(e){const t=m("div","informer");return p(e).then((e=>v(e,t))).catch(alert),t}("http://api.weatherapi.com/v1/forecast.json?key=0ca217e793694cf3b27105654211511&q=auto:ip&days=4&aqi=no&alerts=no"),"#favourite":function(){null===localStorage.getItem("favouriteCitiesArr")&&localStorage.setItem("favouriteCitiesArr",JSON.stringify([]));const e=m("div","favouritePage"),t=function(){const e=m("div","searchDiv");return e.innerHTML=`\n   <form class="searchForm">\n         <input class="search" type="text" placeholder="Search">\n         <input class="submit" type="submit" value="" style="background: url(${h}) no-repeat">\n   </form>`,e}(),i=f();return e.append(t),e.append(i),e.querySelector(".searchForm").addEventListener("input",(e=>g(e))),e.querySelector(".searchForm").addEventListener("submit",(()=>{const t=f();document.querySelector(".favouritePage").lastChild.remove(),document.querySelector(".favouritePage").append(t),e.querySelector(".search").value=""})),e}(),"#setting":w(),"#notFaund":function(){const e=m("div","notFaundDiv");return e.textContent="Page not faund",e}()};window.onload=()=>{window.location.hash="#home"},window.addEventListener("hashchange",($.innerHTML="",$.append(x[window.location.hash]),void function(e){switch(e){case"#home":t.setAttribute("fill",a),i.setAttribute("fill",s),n.setAttribute("fill",s);break;case"#favourite":t.setAttribute("fill",s),i.setAttribute("fill",a),n.setAttribute("fill",s);break;case"#setting":t.setAttribute("fill",s),i.setAttribute("fill",s),n.setAttribute("fill",a)}}(window.location.hash)))})();