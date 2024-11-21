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
  
  