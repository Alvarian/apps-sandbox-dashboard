{/* LOAD INTO HTML 
  <h3 class="phase">Current Moon Phase is <%= Math.floor(varDisplayMoon*360)+'% Full' %></h3>
<div class="book">
  <div id="left"></div>
  <div id="right"></div>
  <div id="black"></div>
  <div id="white"></div>
</div>
<div class="chosen">placeholder icon</div>
<!-- <h1><%= varDisplayMoon %></h1> -->
<h2 id="time"></h2>
<div class="form">
  <form action="/savePhase" method="POST">
    <p>time input:</p>
    <input name="title" placeholder="title" type="text" required ><br>
    <input name="time" placeholder="time" type="text" required ><br>
    <input name="description" placeholder="description" type="text" required ><br>
    <input name="your_phase" placeholder="your_phase" type="text" required ><br>
    <input name="reminder" placeholder="reminder" type="text" required ><br>

    <input type="submit">
  </form>
</div>
<div class="describe"><%= %></div>

<script>
  let time = document.querySelector('#time').innerHTML = Date();
  let white = document.querySelector('#white');
  let black = document.querySelector('#black');

  white.style.transform = "rotateY(<%= Math.floor(varDisplayMoon*360) %>deg)";
  black.style.transform = "rotateY(<%= Math.floor(varDisplayMoon*360) %>deg)";
  if(<%= Math.floor(varDisplayMoon*360) %> < 181){
    left.style.backgroundColor = 'white';
    right.style.backgroundColor = 'black';
    // alert(right.style.transform+" " +left.style.transform);
  }
  else {
    left.style.backgroundColor = 'black';
    right.style.backgroundColor = 'white';
  }

  let phase = document.querySelector('.phase');
  if(<%= Math.floor(varDisplayMoon*100) %> >= 51){
    phase.innerHTML = `Current Moon Phase is <%= Math.floor(varDisplayMoon*3/4)+'% Full' %>`;
  }
  else if(<%= Math.floor(varDisplayMoon*100) %> <= 49){
    phase.innerHTML = `Current Moon Phase is <%= Math.floor(Math.abs(varDisplayMoon*200-100))+'% Full' %>`;
  }

  else if(<%= Math.floor(varDisplayMoon*100) %> == 100 || <%= Math.floor(varDisplayMoon*100) %> == 0){
    phase.innerHTML = 'Full Moon!';
  }
  else if(<%= Math.floor(varDisplayMoon*100) %> == 50){
    phase.innerHTML = 'New Moon!';
  };
</script> */}

function myclick(info){
  // alert(info);
  // location.reload();
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${info},us?units=imperial&appid=f4c6128ee2a67e688c5cd949ac8acb41`,
    method: 'GET',
    success: function(data){
      // alert(data.);
      putData(data);

    }
  })
}
