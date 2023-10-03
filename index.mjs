function randomValue(names)
{
    return names[Math.floor(Math.random() * names.length)];
}
// let randomValue = names[Math.floor(Math.random() * names.length)];
const names = ["Paul", "Benoît", "Christopher", "Sandrine", "Cédric", "Suzy", "Alhassane", "Didier", "Xavier"];
// const chalk = require("chalk");
import chalk from 'chalk';

console.log(
    chalk.red(`Hello ${(randomValue(names))}`)
);
console.log(
    chalk.yellow(`Hello ${(randomValue(names))}`)
);
console.log(
    chalk.green(`Hello ${(randomValue(names))}`)
);
console.log(
    chalk.blue(`Hello ${(randomValue(names))}`)
);