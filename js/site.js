// this is the drop down for the recipes 
var pies= ["Pie","Snickers"];


var number= Math.floor(Math.random() * pies.length); 

function generateNew(){
  number= Math.floor(Math.random() * pies.length); 
}

  function toggleDescription() {
    var desc = document.getElementById(pies[number]);
    if (desc.style.display === 'none') {
      desc.style.display = 'block';
    } else {
      desc.style.display = 'none';
      generateNew()
    }
  }
  
  //timer JS
  function countdown(n) {
    const intervalId = setInterval(() => {
      if (n <= 0) {
        clearInterval(intervalId);
        console.log("YIPPIE");
        // Navigate to a new screen when the countdown finishes
        window.location.href = "./3bluescreen.html"; 
      } else {
        console.log(n);
        n--;
      }
    }, 1000); //this equals 1 second
  }
  countdown(10);
  