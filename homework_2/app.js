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
