var count=[]
// Array of pie recipes
const pies = [
  {
      name: "Snickers Pie",
      image: "./img/chocolate.PNG",
      ingredients: [
          "Six 1.56-ounce Snickers candy bars, roughly chopped",
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
      image: "./img/apple.PNG",
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
      directions: `Preheat oven to 425 degrees F. In a bowl, mix apples, sugar, flour, cinnamon, nutmeg, and lemon juice. 
      Place one crust in a pie pan and add the apple mixture. Top with the second crust, seal edges, and cut slits on the top. 
      Bake for 45 minutes or until crust is golden.`
  },
  {
    name: "Cherry Pie",
        image: "./img/cherry.PNG", 
        ingredients: [
            "2 cups fresh or frozen cherries (pitted)",
            "3/4 cup sugar",
            "2 tablespoons cornstarch",
            "1/4 teaspoon almond extract",
            "1 tablespoon lemon juice",
            "1 double pie crust",
            "1 tablespoon butter (optional, for dotting the filling)"
        ],
        directions: `Preheat oven to 375 degrees F. In a saucepan, combine cherries, sugar, cornstarch, almond extract, and lemon juice. 
        Cook over medium heat until the mixture thickens and starts to bubble. Remove from heat. 
        Roll out one pie crust and place it in a pie pan. Add the cherry filling. 
        Dot the filling with butter if desired. Cover with the second crust, seal edges, and cut slits on top. 
        Bake for 45 minutes or until the crust is golden brown. Cool before serving.`
    },
    { 
      name: "Shrek's Swamp Pie",
          image: "./img/shrekpie.png", 
          ingredients: [
              "3 cups Loam Soil",
              "1 cup Water",
              "Swamp Filling:",
              "1 cup algae",
              "1 cup mud",
              "1 cup water",
          ],
          directions: `Mix the loam soil with water and form the crust in a pie pan. Then
          mix the mud and water until it forms a goopie texture. Next, top with algae and a homemade sign that says “get out of my swamp” for extra flair. 
          Finally, serve to your enemies. `
      },
      { 
        name: "Blackberry Pie", 
            image: "./img/blackberry.PNG", 
            ingredients: [
                "4 cups fresh blackberries",
                "3/4 cup white sugar or more to taste, divided",
                "1/2 cup all-purpose flour",
                "1 (9 inch) double crust ready to use pie crust",
                "2 tablespoons milk",
                "...",
            ],
            directions: `Line the prepared plate with the bottom crust. 
            Fill the pie and cover with the top crust. Brush the pie with milk and sprinkle it with sugar. Bake the pie until the filling is bubbly and the topping is golden brown.`//pie stuff
        },
        { 
          name: "Surprise Pie", 
              image: "./img/surprisepie.png", 
              directions: `OOH what's this??`
          },
      
      {  
        name: "Sweet Potato Pie", 
          image: "./img/sweetpotato.png", //add pie pic
           ingredients: [ 
              "1 all-butter pie crust",
              "1 1/2 lb. sweet potatoes",
              "2 Tbsp. unsalted butter, softened",
              "1 (5-oz.) can evaporated milk",
              "3 large eggs",
              "2 large egg yolks",
              "2 Tbsp. bourbon (optional)",
              "2 tsp. vanilla extract",
              "1/2 c. dark brown sugar",
              "1/2 c. granulated sugar",
              "1 tsp. ground cinnamon",
              "1/2 tsp. ground ginger",
              "1/4 tsp. ground nutmeg",
              "1/4 tsp. ground allspice",
              "1/4 tsp. kosher salt",
              "For the bourbon whipped cream:",
              "1 c. heavy whipping cream",
              "1/4 c. powdered sugar",
             "1 to 2 Tbsp. bourbon",
              "1/2 tsp. vanilla",
            ],
          directions: `For the pie: Preheat the oven to 400˚F. On a lightly floured surface, roll 1 ball of pie dough into a 13-inch circle. Transfer the crust to a 9-inch pie plate. Tuck the edges of the crust under to be even with the edge of the pie plate and crimp as desired. Place the crust in the refrigerator for 1 hour (or freezer for 30 minutes).
Line the inside of the chilled crust with parchment paper, then fill with baking weights or dried beans. Bake until the edges of the crust are very lightly golden, 18 to 22 minutes. Remove the pie weights and parchment paper. Return the crust to the oven and bake until the whole crust is lightly golden all over, 10 to 12 minutes longer. Let cool to room temperature. Reduce the oven to 350˚F,
Prick the sweet potatoes all over with a fork and place on a microwave-safe paper towel-lined plate. Microwave on high for 5 minutes and flip. Microwave until the potatoes are tender, about 5 minutes more. Allow to cool for 10 minutes and carefully cut in half lengthwise. When potatoes are cool enough to handle, use a spoon to scoop the flesh into the work bowl of a food processor.
Add the butter to the potatoes and pulse the mixture until pureed, scraping down the sides of the bowl. Add the milk, eggs, egg yolks, bourbon, if using, and vanilla. Process until smooth. Add the dark brown sugar, granulated sugar, cinnamon, ginger, nutmeg, allspice, and salt; process until smooth. Pour the filling into the partially baked crust. Bake until the filling is set on the edges but slightly jiggly in the middle, 45 to 55 minutes. Allow to cool completely on a wire rack, 2 hours.
For the bourbon whipped cream: In the bowl of a stand mixer fitted with the whisk attachment, combine the heavy cream, powdered sugar, 1 to 2 tablespoons of bourbon (to taste), and vanilla. Beat on medium-high speed until stiff peaks form, 2 to 4 minutes. Cover and refrigerate until ready to use.
Slice the pie and serve with bourbon whipped cream. Cover and refrigerate any remaining pie.
Tip: Press the sweet potatoes through a fine-mesh sieve for an even smoother texture.`
            },

            {  
              name: "Pumpkin Pie", 
                  image: "./img/pumpkin.PNG", 
                  ingredients: [ 
                    "1 9-inch homemade pie crust or store-bought, deep dish, unbaked",
                    "3/4 cup granulated sugar",
                    "1 teaspoon ground cinnamon",
                    "1/2 teaspoon salt",
                    "1/2 teaspoon ground ginger",
                    "1/4 teaspoon ground cloves",
                    "2 large eggs",
                    "15 ounce can canned pumpkin or fresh pumpkin puree",
                    "12 ounce can evaporated milk",
                  ],
                  directions: `Preheat oven to 425 degrees F.
In a large bowl, beat the eggs and pumpkin together.  In a separate bowl, combine the sugar, cinnamon, salt, ginger and cloves, and add to pumpkin mixture.
Gradually stir in the evaporated milk. Carefully pour mixture into unbaked pie shell. 
Bake at 425 degrees F for 15 minutes. Reduce temperature to 350 degrees F; bake for 40 to 50 minutes longer, or until the pie is set. Check for doneness by giving the pie a gentle wiggle. The center may jiggle just a tiny bit. It will continue to set up as it cools. Or, it is done when a sharp knife inserted in the center comes out clean.
Cool completely on a wire cooling rack. Serve immediately with whipped cream and caramel pecan topping, if desired` 
              },

              {  
                name: "Chocolate Pie (From The Pioneer Woman)", 
                    image: "./img/chocolate.PNG", //add pie pic
                    ingredients: [ 
                      "1 1/2 cup sugar",
                      "1/4 cup cornstarch",
                      "1/4 tsp. salt",
                      "3 cups whole milk",
                      "4 egg yolks",
                      "6 1/2 oz. bittersweet chocolate, finely chopped",
                      "2 tsp. vanilla extract",
                      "2 Tbsp. butter",
                      "1 pie crust, baked and cooled (or can use Oreo or graham cracker crust)",
                      "Whipped cream, to serve",
                    ],
                    directions: `In a medium saucepan, stir or whisk together the sugar, cornstarch, and salt. Pour in the milk and egg yolks, whisking to combine. Stir over medium heat until the mixture just barely comes to a boil and becomes thick, about 6 to 8 minutes (maybe less, maybe more; just watch it). The second it starts to bubble and thicken (it should be thick like pudding), remove it from the heat. Add the chocolate, vanilla, and butter, and stir until everything is beautifully combined.
Pour the pudding into the pie crust (if there is extra, spoon it into small dishes) and place in the fridge, uncovered, to chill for 4 hours.
Cut it into slices and serve with whipped cream!`
                },


                {  
                  name: "Pizza Pie (From The Gracious Pantry)", 
                      image: "./img/pizzapie.png", 
                      ingredients: [ 
                        "1 standard pie crust",
                        "1 cup grated zucchini",
                        "1 cup sliced mushrooms",
                        "1/2 cup yellow onion (finely chopped)",
                        "1 tbsp. Italian Seasoning",
                        "2 tsp. garlic powder",
                        "1 tsp. onion powder",
                        "1 cup grated cheddar cheese (hand-grated, pre-shredded is not clean)",
                        "1 cup marinara sauce",
                      ],
                      directions: `Preheat oven to 350℉.
Grate the zucchini and wring it out in a cheesecloth to remove as much water as possible.
In your pie crust, combine the zucchini, mushrooms, onions, spices, and cheese. Mix it up a little for even distribution.
Pour the marinara (or pizza sauce) over everything, and add a tiny bit more cheese just as a topping.
Bake for 20-30 minutes or until the vegetables are cooked through. Cool, slice, and serve. (See note below)`
                  },

                  { 
                    name: "Gamzee's Sopor Slime Pie Recipe from Homestuck", 
                        image: "./img/sopor_slime.png", //add pie pic
                        ingredients: [ 
                            "1 1/4 cups flour",
                            "1/2 tsp salt",
                            "1/2 cup shortening",
                            "3 Tbsp water",
                            "1 package lime jello (6 oz.)",
                            "1 package lime jello (2.75 oz.)",
                            "1 package lemon pudding (3.4 oz.)",
                            "2 cups water",
                            "2 cups Moon Mist Faygo (or Sprite, 7-Up, Sierra Mist)",
                            "4 Tbsp cornstarch",
                            "1/4 cup powdered sugar",
                            "1/4 cup whipped cream (or Cool Whip)",
                            "Food colouring as desired",
                        ],
                        directions: `Preheat oven to 450 degrees Fahrenheit. Mix flour with salt in a small bowl. Use a pastry blender to cut in shortening. Mix in the water 
                        until it holds as a dough, then roll it out on a lightly floured surface to a circle with a radius about 3/4" inch longer than the pie tin. Get it into the 
                        pie tin and smooth out any tears or cracks. Flute the edges to made it beautiful (you can do this by placing the index finger and thumb of one hand against the 
                        outside of the shell and gently pulling in while the index finger of your other hand pushes out from the inside of the shell between your other two fingers). 
                        Prick the bottom and sides with a fork and bake 12-15 minutes until lightly browned. Bring the water to a boil in a large saucepan, then turn off the 
                        heat and dump in the big package of lime jello mix and use a whisk to stir it until everything is blended. Stir in the wicked elixir. 
                        Stir in the pudding mix. Stir in the cornstarch, the powdered sugar, the whipped cream, and then the small jello package. Whisk everything around 
                        so it’s blended smoothly and there aren’t any lumps. Add food colouring as desired.** Pour as much slime as you can into the cooled pie shells.
                        Just make sure you can carry them to your thermal hull without spilling. Refrigerate your miracles for a couple hours or so until the slime sets.`
                    },

                    {  
                      name: "Coconut Cream Pie ", 
                          image: "./img/coconutpie.PNG", 
                          ingredients: [ 
                              "1 cup sweetened flaked coconut",
                               "3 cups half-and-half",
                              "3/4 cup white sugar",
                               "1/2 cup all-purpose flour",
                              "2 large eggs, beaten",
                              "1/4 teaspoon salt",
                              "1 teaspoon vanilla extract",
                              "1 (9 inch) pie shell, baked",
                              "1 cup frozen whipped topping, thawed",
                          ],
                          directions: `Gather all ingredients.
                  Preheat the oven to 350 degrees F (175 degrees C). Spread coconut on a baking sheet.
                  Bake in the preheated oven, stirring occasionally, until golden brown, about 5 minutes.
                  Combine half-and-half, sugar, flour, eggs, and salt in a medium pot. Bring to a boil over low heat, stirring constantly, until mixture thickens and coats the back of a wooden spoon, about 15 minutes.
                  Remove the pan from the heat and stir in 3/4 cup toasted coconut and vanilla; reserve remaining toasted coconut for garnishing the pie.
                  Pour custard into the pie shell and chill until firm, about 4 hours.
                  Top with whipped topping and reserved toasted coconut.`
                      },


                   { 
                      name: "Key Lime Pie", 
                          image: "./img/keylime.PNG", 
                          ingredients: [ 
                              "11 (about 160g) full-sheet graham crackers",
                              "1/2 cup (62g) salted macadamia nuts (roasted)",
                              "2 Tablespoons (25g) granulated sugar",
                              "5 Tablespoons (71g) unsalted butter, melted",
                              "28 ounces (two 14-ounce cans/793g) full-fat sweetened condensed milk",
                              "1 cup (240ml) key lime juice",
                              "4 large egg yolks",
                              "1 teaspoon key lime zest"
                          ],
                          directions: `Preheat oven to 350 degrees F
 Make the Crust: Using a food processor, pulse the graham crackers and macadamia nuts together into coarse crumbs. A few larger pieces of nuts is OK. Pour into a medium bowl and stir in the sugar. Add the melted butter and stir until combined. The mixture will be thick, coarse, and sandy. Try to smash/break up any large chunks. Pour the mixture into an ungreased 9-inch pie dish. Use your hand to pat down the crumbs into the bottom and up the sides to make a crust. Use medium pressure — simply pat down until the mixture is no longer crumbly. Tips: You can use a small flat-bottomed measuring cup to help press down the bottom crust and smooth out the surface, but do not pack down too hard. And run a spoon around the bottom corner where the edge and bottom meet to help make a rounded crust. This helps prevent the crust from falling apart when you slice into the pie.  
 Pre-bake the crust for 8 minutes. Remove from the oven and leave the oven on.
Make the Filling: Whisk the sweetened condensed milk, lime juice, and egg yolks together (or use an electric mixer). Whisk in the lime zest. Pour into warm crust.
Bake the pie for 18-20 minutes or until only *slightly* jiggly in the center. You want it mostly set. Remove from the oven and allow to cool completely on a wire rack. Once cool, cover and chill for at least 1 hour (and up to 3 days) before serving
Garnish as desired. Store leftovers in the refrigerator for up to 1 week.`
                      },

                      {  
                        name: "No-Bake Peanut Butter Fluff Pie", 
                            image: "./img/peanut butter pie.png", 
                            ingredients: [ 
                                "1 package (8-ounce) cream cheese, at room temperature",
                                "1 1/4 cups smooth peanut butter",
                                "1 cup heavy cream",
                                "1 cup marshmallow creme (such as Fluff)",
                                "1/4 cup smooth peanut butter",
                                "1 cup marshmallow creme (such as Fluff)"
                            ],
                            directions: `Butter a 9 1/2-inch deep-dish pie dish.
Melt the butter in a large saucepan over medium-low heat. Add 2 cups of the marshmallow creme and whisk continuously until melted and combined with the butter, about 2 minutes. Remove from the heat and stir in the cereal and pretzels until coated. Press the mixture into the bottom and all the way up the sides of the prepared pie dish. 
Meanwhile, beat the cream cheese, 1 cup of the marshmallow creme and 1 cup of the peanut butter in a large bowl with an electric mixer on medium speed until smooth, about 2 minutes. Slowly pour in the heavy cream and continue beating until light, fluffy and stiff peaks form, about 5 minutes. 
Pour the filling into the crust and smooth out the top, taking care not to cover the crust edge. Microwave the remaining 1/4 cup peanut butter in a small microwave-safe bowl in 30-second intervals, stirring after each, until melted and pourable, about 1 minute.
Drizzle half of the peanut butter over the pie. Spoon the remaining 1 cup marshmallow creme onto the center of the pie and smooth it out slightly so that it looks like a soft marshmallow pillow. Drizzle with the remaining peanut butter. Chill until set, 6 hours and up to overnight. `//pie stuff
                        },

                        {  
                          name: "Dino Nuggie Pie", 
                              image: "./img/dinonuggets.png", 
                              ingredients: [
                                "3 cups Dino nuggets",
                                "2 tablespoons Dipping sauce of choice"
                            ],
                              directions: `Heat up Dino nuggets in microwave, Throw Dino begets into pie, Drizzle with sauce of choice.`
                          },

                          { 
                            name: "Dorito Pie", 
                                image: "./img/doritopie.png", 
                                ingredients: [
                                  "1 cup All Purpose Flour",
                                  "1/3 cup Lard",
                                  "1/2 tsp salt",
                                  "5 tbsp ice water",
                                  "2 large sweet onions",
                                  "1 large green bell pepper",
                                  "2 cups Cool Ranch Doritos",
                                  "4 Eggs",
                                  "2 cups sour cream",
                                  "1/8 cup shredded cheddar cheese",
                                  "Salt and pepper to taste"
                              ],
                                directions: `Combine the flour lard, and salt in a food processor. Pulse the food processor until the mixture looks grainy. 
Pour the flour mixture into a mixing bowl, and add the cool water (do not add the actual ice) 2 tablespoons at a time. Toss the flour mixture with the water. By the time you get to five tablespoons of water, you should be approching a dough ball that will clean the sides of the bowl as you stir.
Dump the dough ball on a peice of waxed paper, and place a second peice of waxed paper on top. Squish the dough flat, then begin rolling the dough out with a rolling pin. You will want to spin the wax-papered dough as you go, and roll out from the center. You are looking for an evenly flat, 10" circle (or close approximation thereof) of dough. HINT - touch the dough as little as possible. Your own body heat will cause the lard to melt, at the expense of a flaky crust. 
Peel off the top piece of waxed paper. Place your pie tin on top of the dough, upside down. Then flip the whole works over so that the pastry shell falls into the pie tin. Then peel the remaining peice of paper back, and press the dough into the pie tin. The edges can be crunched up with your fingertips, then squished with the tines of a fork to make them look semi-presentable. Bake the pie shell at 350 degrees for 5 minutes. This prevents a doughy pie shell. Set the now pre-baked shell aside, while you turn to your filling.
Cut Up the Onions and Bell Peppers, and Fry Them Up on medium high heat until they are transluscent.
Crush two cups of Doritos in a small food processor and let it run for about 45 seconds. 
Add the Dorito Crumbs to the Onion and Pepper Mixture, Add and stir. 
Beat the Eggs and Sour Cream Together until smooth
Pour Onion Mix Into Pie Shell, Then Top With Egg Mixture, cheese, salt, and pepper 
Bake the Pie at 350 Degrees for 50 Minutes, and Voila. Dorito Onion Pie!`
                            }, 
                          
                            { 
                              name: "Peach Pie", //Sally's Baking Recipies
                                  image: "./img/peachpie.PNG", 
                                  ingredients: [ //pie ingredients
                                      "2 and 1/2 cups all purpose flour (spooned and leveled)",
                                      "2 teaspoons granulated sugar",
                                      "1 teaspoon salt",
                                      "1 cup (16 Tbsp) unsalted butter, chilled and cubed",
                                      "1/2 cup (120ml) ice water, more if needed",
                                  ],
                                  directions: `Mix the flour, sugar, and salt together in a large bowl. Add the cubed butter on top.
Using a pastry cutter, food processor, or two forks (pastry cutter is ideal, see post above), cut the butter into the dry ingredients until all flour is coated. You’re looking for pea-sized bits of flour coated butter. A few larger bits of butter is OK.
Measure 1/2 cup (120ml) of water in a cup. Add ice. Stir it around. From that, measure 1/2 cup (120ml) of water since the ice has melted a bit. Drizzle the cold water in, 2 Tablespoons (30ml) at a time, and stir after each addition. Stop adding water when the dough comes together easily and begins to form large clumps. The dough will feel moist and a little sticky, but not feel overly wet. Do not add any more water than you need to. I always use about 1/2 cup (120ml) of ice water.

Place pie dough on a lightly floured work surface. Using floured hands, fold the dough into itself until the flour is fully incorporated into the fats. Form it into a ball. Divide dough in half. Using your hands, flatten each half into a 1-inch thick disc.
Wrap each disc tightly in plastic wrap and refrigerate for at least 2 hours and up to 5 days before using in a pie recipe.
When rolling out the chilled pie dough discs, use gentle force with your rolling pin. Start from the center of the disc and work your way out in all directions, turning the dough with your hands between rolls. Smooth out the edges if you notice cracks. (See video above.) Keeping your work surface, rolling pin, and hands lightly floured makes rolling out easier.
Proceed with the pie per your recipe’s instructions.`
                              }, 

                              //Template to add more pies
                      //{   
                       // name: "pie name", //add pie
                           // image: "./img/pie.jpg", //add pie pic
                           // ingredients: [ //pie ingredients
                           //     "...",
                           //     "...",
                           //     "...",
                           //     "...",
                           //     "...",
                           //    "...",
                           // ],
                           // directions: `...`//pie stuff
                       // }, 

];



let currentPieIndex = 0;

// No repeats
function addNumberWithoutRepeat(array, number) {
  if (!array.includes(number)) {
    array.push(number);
  }
  return array;
}

// Function that ensures pie index does not repeat until all pies are selected
function NoDup(num) {
  addNumberWithoutRepeat(count, num);

  // If all pies have been selected, reset the count array
  if (count.length == pies.length) {
    count = [];
  }

  console.log("Selected pie indices: ", count);
}

// Function to generate a new pie index
function generateNew() {
  let number;
  
  // Keep generating a new pie index until we get one that hasn't been selected yet
  do {
    number = Math.floor(Math.random() * pies.length); 
  } while (count.includes(number));  // Check if the pie has already been selected
  
  return number;
}

function nextPie() {
  // Show the pie description if hidden
  const pieDescription = document.getElementById("pie-description");
  if (pieDescription.style.display === "none") {
      pieDescription.style.display = "block";
  }

 

// Select Pie
  currentPieIndex = generateNew();
  NoDup(currentPieIndex);



  // Get the current pie
  const currentPie = pies[currentPieIndex];

//Bomb Pie
if(currentPie.name=="Surprise Pie"){
  makeTimer(3)
  var timerInterval = setInterval(makeTimer, 1000);
  countdown(2)

}
  // Update the page content
  document.getElementById("pie-name").textContent = currentPie.name;
  document.getElementById("pie-image").src = currentPie.image;
  document.getElementById("pie-ingredients").textContent = "";
  
  // Get the ingredients container
  ingredientsContainer = document.getElementById("pie-ingredients");

      // Loop through ingredients and add them as list items
  currentPie.ingredients.forEach(function(ingredient) {
       const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsContainer.appendChild(li);
      });
      
      
  document.getElementById("pie-directions").textContent = currentPie.directions;
}
  
//font changes color 
setInterval(() => {
  const element = document.querySelector('#seconds');
 element.style.color = getRandomColor();
},1000);

//background color changer  
let seconds = 0;

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateTimer() {
  seconds++;
  const timerElement = document.querySelector(".timer");
  if (timerElement) {
    timerElement.innerText = seconds;
  }
    // Change background color only when the timer updates
    document.body.style.backgroundColor = getRandomColor();
}

  //timer JS
  function countdown(n) {
    const intervalId = setInterval(() => {
      if (n <= 0) {
        clearInterval(intervalId);
        console.log("YIPPIE");
        // Navigate to a new screen when the countdown finishes
        window.location.href = "./3bluescreen/index.html"; 
      } else {
        console.log(n);
        n--;
      }
    }, 1000); //this equals 1 second
  }



// Initialize timeLeft outside the function to maintain its state
var timeLeft = 3; // Starting from 3 seconds

function makeTimer() {
  
    // Calculate seconds (only relevant for counting down from 3 seconds)
    var seconds = timeLeft;

    // Pad single-digit seconds with a leading zero
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Update the HTML to display the countdown
    $("#seconds").html(seconds );

    // Decrease timeLeft by 1 each second
    if (timeLeft > 0) {
        timeLeft--; // Decrease the countdown
    } else {
        // Optionally, stop the timer or show a "Time's up" message when the timer reaches 0
        clearInterval(timerInterval);
        $("#seconds").html("00");
        
    }
}