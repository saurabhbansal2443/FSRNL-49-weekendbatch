// import { sum , sub , multiply , div} from "./utility/Math.js";

// import perimeterOfCircle from "./utility/Math.js"


// console.log(sum(2,3))
// console.log(perimeterOfCircle(1))

// import chalk from 'chalk';

// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

import  figlet  from "figlet";

figlet("Saurabh Bansal", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
