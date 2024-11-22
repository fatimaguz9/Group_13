// this is the drop down for the recipes 


  function toggleDescription() {
    var desc = document.getElementById('description');
    if (desc.style.display === 'none') {
      desc.style.display = 'block';
    } else {
      desc.style.display = 'none';
    }
  }
  
  //this is the call function for the randomized pies
  //pie.recipe is what should be returned inthe text box
  //pie.image should be returned above text box
  var myButton = document.getElementById("button");
  myButton.addEventListener("click",function() {
    newText = "<p>" + pie.recipe  + "</p>";


  });