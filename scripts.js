
//here goes nothing


 //I tried moving my h1 into the first div, which is why I think it wasn't being manipulated previously
//making it into its own class will let me mess with it here... hopefully
 document.querySelector("#header").classList.add("clk");

  document.querySelector("#header.clk").onclick = function() {
    this.classList.toggle("red");
  }

 //next going to set up toggling
  
  document.querySelector("#procedure #ingredients").onclick = function() {
    this.classList.toggle("sadako");
  }
  document.querySelector("#procedure #equipment").onclick = function() {
    this.classList.toggle("sadako");
  }
  document.querySelector("#procedure #directions").onclick = function() {
    this.classList.toggle("sadako");
  }
//going to define sadako in CSS from here, if you don't recognize it wouldn't recommend looking it up if you don't want to be spooked
//got stuck here because I spelled procedure wrong in my html files oops
  
