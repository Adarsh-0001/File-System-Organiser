let inputArray = process.argv.slice(2);

if (inputArray.length < 2) {
    console.error('Insufficient arguments. Usage: node app.js <command> <path>');
    process.exit(1);
}

let command = inputArray[0];
let targetPath = inputArray[1];

let fileSys = require("fs");
let filePath = require("path");
let helpObj = require("./help");
let treeObj = require("./tree");
let orgObj = require("./organise");

switch (command){
    case "tree":
        treeObj.treeKey(targetPath);
        break;
    case "organise":
        orgObj.organiseKey(targetPath);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.error("Invalid command. Please use 'tree', 'organise', or 'help'");
        process.exit(1);
}

// console.log(inputArray);
// console.log(helpObj);