{/* LOAD TO HTML
  <body onload="startTime()">
<div id="clock"></div>
<div id="alarm">
  <select id="hours" name="hours">
    <option value="hour(s)">hour(s)</option>
  </select>
  <select id="minutes" name="minutes">
    <option value="minute(s)">minute(s)</option>
  </select>
  <select name="type">
    <option value="pm/am">pm/am</option>
    <option value="pm">pm</option>
    <option value="am">am</option>
  </select>
  <input type="submit" value="set">
</div> */}

var hours = document.querySelector("#hours");
for(i=1; i<=12; i++){
  hours.innerHTML += `<option value=${i}>${i}</option>`
}
var minutes = document.querySelector("#minutes");
for(i=1; i<=59; i++){
  minutes.innerHTML += `<option value=${i}>${i}</option>`
}
var uHour=0,uMinute=0,h,m,s,set=false;

function startTime() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    let hour = zeroMinor(h);
    let minute = zeroMinor(m);
    document.querySelector('#clock').innerHTML = h+":"+m+":"+s;
      if(minute == uMinute && hour == uHour){
          console.log("beepbeep");
          clearInterval(t);
      }
    var t = setTimeout(startTime, 500);
}
function zeroMinor(i) {
    if (i < 10){
      i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}

function getUserInput(del){
    
}