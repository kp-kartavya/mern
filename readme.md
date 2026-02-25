# npm i -g nodemon -- saves us from having to restart the server every time we make a change to our code
# nodemon index.js -- starts the server and watches for changes in the code, automatically restarting the server when changes are detected

# "type": "commonjs" -- this is the default module system in Node.js, it allows us to use require() and module.exports to import and export modules
# function add(a, b) { return a + b; } 
# module.exports = add; -- default export
# module.exports = { add }; -- named export

# const add = require("./add");
# console.log(add(2, 3)); -- 5

# "type": "module" -- this is the ES6 module system, it allows us to use import and export statements to import and export modules
# export function add(a, b) { return a + b; }
# import { add } from "./add.js";


