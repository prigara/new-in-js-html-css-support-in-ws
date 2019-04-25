/*
* Shows features added to the JavaScript and TypeScript support in 2018 and 2019
* */

import {Animal} from "./animal";

export const colors = ["red", "green", "blue"];

// Press Alt-Enter to replace with the array destructuring `const [red, green, blue] = colors;`
const red = colors[0];
const green = colors[1];
const blue = colors[2];

// Press Alt-Enter on `function` to convert it to arrow function
colors.map(function (color) {
    return color.length;
});

// Press Alt-Enter to convert the function with async/await syntax
export function getPrecessedData(url) {
    return downloadData(url)
        .then(v => {
            return processDataInWorker(v)
        })
        .catch(e => {})
}

// Press Alt-Enter on `Animal` to add a missing import; import will be added automatically
// when you select `Animal` from completion suggestions
let dog = new Animal();
