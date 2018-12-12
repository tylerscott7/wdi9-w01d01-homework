// Problem 1:
for (let i=1; i <= 20; i++){
    console.log(i);
};

// Problem 2:
for (let i=2; i <= 200; i+=2){
    console.log(i);
};

// Problem 3:
for (let i=0; i<20; i++){
    if (i % 2 == 0){                                   // Only operates on even numbers
        let rand = Math.ceil(Math.random() * 3);     // Returns random number 1,2, or 3
        switch(rand) {
            case 1:
              console.log("...human...why you taking pictures of me?...");
              break;
            case 2:
              console.log("...the catnip made me do it...");
              break;
            case 3:
              console.log("...why does the red dot always get away...");
              break;
            default:
              //nothing
          }
    }
    console.log("Love me, pet me! HSSSSSS!");
};

// Problem 4:
for (let i=1; i <= 100; i++){
    if (i%15 == 0){
        console.log("FizzBuzz");
    } else if (i%5 == 0){
        console.log("Buzz");
    } else if (i%3 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    };
};

// Problem 5:
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];
// Step 1:
shahzad.splice(0, 1, "Gameboy");
console.log(shahzad);
// Step 2:
daniel[1]+=1;
console.log(daniel);
// Step 3:
ryan[2]="Denver";
console.log(ryan);
// Step 4:
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
// Step 5:
jim.splice(2,1,"Atlanta","Miami","New York");
console.log(jim);
// Step 6:
jim.splice(2,1);
console.log(jim);

// Problem 6:
const ninjaTurtles = ["Donatello","Leonardo","Raphael","Michaelangelo"];
for (let i=0;i<ninjaTurtles.length;i++){
    console.log(ninjaTurtles[i].toUpperCase());
};

// Problem 7:
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];
  
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
];

const kristynsShoe = kristynsCloset[0];
kristynsCloset.shift();   // Removes the first element
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

// Problem 8
// Number 1
for (let i = 0; i < kristynsCloset.length; i++){
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
};
// Number 2
for (let i=0; i<thomsCloset.length; i++){
    console.log(thomsCloset[i]);
};



