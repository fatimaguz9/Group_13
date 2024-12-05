
// Array of pie recipes
const pies = [
  {
      name: "Snickers Pie",
      image: "./img/pie.jpg",
      ingredients: [
          "Six 1.56-ounce Snickers® candy bars, roughly chopped",
          "6 tablespoons unsalted butter, cubed",
          "One 9-ounce package chocolate wafer cookies",
          "1/2 cup dulce de leche",
          "1/2 cup hot fudge sauce, warmed",
          "1 cup crunchy peanut butter",
          "One 8-ounce package cream cheese, at room temperature",
          "1 cup confectioners' sugar",
          "1 cup heavy cream",
          "1/2 cup salted roasted peanuts, chopped"
      ],
      directions: `Preheat the oven to 350 degrees F. Melt 1 cup of candy bars with butter. 
      Pulse cookies into crumbs and mix with the melted candy. Press into a pie dish and bake for 10-12 minutes. 
      Spread dulce de leche and drizzle fudge. Prepare the filling by combining peanut butter, cream cheese, and sugar, 
      then fold in whipped cream and remaining candy bars. Pour into the crust and decorate with peanuts and fudge. Chill overnight.`
  },
  {
      name: "Apple Pie",
      image: "./img/pie.jpg",
      ingredients: [
          "6 cups thinly sliced apples",
          "3/4 cup sugar",
          "2 tablespoons all-purpose flour",
          "3/4 teaspoon ground cinnamon",
          "1/4 teaspoon salt",
          "1/8 teaspoon ground nutmeg",
          "1 tablespoon lemon juice",
          "1 double pie crust"
      ],
      directions: `Preheat oven to 425°F. In a bowl, mix apples, sugar, flour, cinnamon, nutmeg, and lemon juice. 
      Place one crust in a pie pan and add the apple mixture. Top with the second crust, seal edges, and cut slits on the top. 
      Bake for 45 minutes or until crust is golden.`
  },
  {
    name: "Cherry Pie",
        image: "./img/pie.jpg", 
        ingredients: [
            "2 cups fresh or frozen cherries (pitted)",
            "3/4 cup sugar",
            "2 tablespoons cornstarch",
            "1/4 teaspoon almond extract",
            "1 tablespoon lemon juice",
            "1 double pie crust",
            "1 tablespoon butter (optional, for dotting the filling)"
        ],
        directions: `Preheat oven to 375°F. In a saucepan, combine cherries, sugar, cornstarch, almond extract, and lemon juice. 
        Cook over medium heat until the mixture thickens and starts to bubble. Remove from heat. 
        Roll out one pie crust and place it in a pie pan. Add the cherry filling. 
        Dot the filling with butter if desired. Cover with the second crust, seal edges, and cut slits on top. 
        Bake for 45 minutes or until the crust is golden brown. Cool before serving.`
    },
    { 
      name: "Shrek's Swamp Pie",
          image: "./img/pie.jpg", //add pie pic
          ingredients: [
              "3 cups Loam Soil",
              "1 cup Water",
              "Swamp Filling:",
              "1 cup algae",
              "1 cup mud",
              "1 cup water",
          ],
          directions: `Mix the loam soil with water and form the crust in a pie pan. Then
          mix the mud and water until it forms a goopie texture. Next, top with algae and a homemade sign that says “get out of my swamp” for extra flair 
          Finally, serve to your enemies. `//pie stuff
      },
      { 
        name: "Blackberry Pie", 
            image: "./img/pie.jpg", //add pie pic
            ingredients: [
                "4 cups fresh blackberries",
                "3/4 cup white sugar or more to taste, divided",
                "1/2 cup all-purpose flour",
                "1 (9 inch) double crust ready to use pie crust",
                "2 tablespoons milk",
                "...",
            ],
            directions: `...`//pie stuff
        },

  

  { //another pie sample format 
    name: "pie name", //add pie
        image: "./img/pie.jpg", //add pie pic
        ingredients: [ //pie ingredients
            "...",
            "...",
            "...",
            "...",
            "...",
            "...",
        ],
        directions: `...`//pie stuff
    },

];


// Counter to keep track of the current pie
let currentPieIndex = 0;

function nextPie() {
  // Show the pie description if hidden
  const pieDescription = document.getElementById("pie-description");
  if (pieDescription.style.display === "none") {
      pieDescription.style.display = "block";
  }

  // Increment the pie index, loop back if necessary
  currentPieIndex = (currentPieIndex + 1) % pies.length;


  // Get the current pie
  const currentPie = pies[currentPieIndex];

  // Update the page content
  document.getElementById("pie-name").textContent = currentPie.name;
  document.getElementById("pie-image").src = currentPie.image;
  document.getElementById("pie-ingredients").innerHTML = currentPie.ingredients
      .map(ingredient => `<li>${ingredient}</li>`)
      .join('');
  document.getElementById("pie-directions").textContent = currentPie.directions;
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
  
  