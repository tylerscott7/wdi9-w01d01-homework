// 1. What is the difference between interpolation and concatenation? Example of each.
// A. Interpolation is injecting variables into strings, whereas concatenation combines two strings.
//    e.g. Interpolation looks like:  return `${someone} was looking for ${something} in the general vicinity of ${somewhere}`;
//         Concatenation looks like:  return 'someone was looking' + 'for something in the general vicinity of somewhere';
//
// 2. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// A. DRY stands for Do Not Repeat Yourself. It is important because it reduces clutter in programs and makes code much more maintainable
//    and efficient. ESLint is a code linter that helps identify bad practices in your program.
//
// 3. What is the difference between declaring a variable and assigning a value to a variable? What do we mean when we say "define" a variable?
// A. Declaring a variable is when you initialize the variable in memory for the first time in a program. Assigning a value gives the variable meaning as to what it is.
//    Defining a variable explains what type of value the variable will hold, e.g. String, Integer, Boolean, etc.
//
// 4. When should we use const and when should we use let?
// A. We should use const when when plan on not altering the variable. We should use let when we plan on changing the value.
//
// 5. Unix question: What is a "parent" directory?
// A. A parent directory is the directory that holds the 'children' directories and folders. The parent is the highest in the hierarchy.
//
// 6. Unix, again: If you're not sure about how to use a Unix command, how can you get more info without being connected to the internet?
// A. Using a unix shell you can type 'man' before typing a command and the terminal will display documentation to teach you what the command does.
//
// 7. More Unix: What is "tab completion" and why is it aweseome?
// A. Tab completion aids you in finding particular files and folders so you don't have to type full file names and possibly make manual typing errors.
//

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// 1.
console.log(a<b);
// 2.
console.log(c>d);
// 3.
console.log('Name' == 'Name');
// 4.
console.log(a + b == c);
// 5.
console.log(a * a == d);
// 6.
console.log(e == 'Kevin');
// 7.
console.log(48 == '48');

// Part 3: Question 1. It is an infinite loop.
// Part 3: Question 2. It is not an infinite loop.
// Part 3: Question 3. Output should be "AAAAAAAAAAAAAAAAAAAAA". 21 A's.

//We are setting up our variables here. Using 'let' because we want to modify them later.
let letters = "A";
let count = 0;

//We are iteratively adding an 'A' to our set string, until our counter gets to 20. Then we stop.
while (count < 20) {
	letters += "A";
	count++;
}

//We are pushing our string to our console after modifying it 20 times.
console.log(letters);

// Part 4: Question 1. Both for loops and while loops repeat code. But what are the differences? What are the similarities?
// A. We use For Loops when we want to iterate a certain number of times. While loops are used for when we are not sure.
// Part 4: Question 2. Write a for loop that will console.log() the numbers 0 to 999.
/* A. */ for (let j=0; j < 1000; j++) {
            console.log(j);
        }

// Part 4: Question 3. 
// The first part of the control statement is: initialization of the counter variable
// The second part of the control statement is: describing the limit of iteration
// The third part of the control statement is: determining how we want to increment to the limit

// Part 4: Question 4. 
for (let j=999; j >= 0; j--) {
    console.log(j);
}

// Part 4: Question 5.
for (let i = 1; i < 11; i++){
    console.log(`The value of i is: ${i}`);
}

