const fileSys = require('fs');
const filePath = require("path");

function organiseFunc(dirPath){
console.log("its a path", dirPath);
let destPath;
if (dirPath == undefined){
    destPath = process.cwd();
    return;
}
else {
    let doesExist = fileSys.existsSync(dirPath);
    if (doesExist){
        let destPath = filePath.join(dirPath, "Organized_Files"); //it will create organized_Files then add to directory/folder
        if(fileSys.existsSync(dirPath) == false){
            fileSys.mkdir(destPath);
        }
    } else {
        console.log('Kindly enter the correct path');
        return;
    }
}
organiseHelper(dirPath, destPath);
}

function organiseHelper(src, dest){
    let childName = fileSys.readdirSync(src);
    // console.log(childNames);
    for (let i=0; i<childName.length; i++) {
        let childAddress = filePath.join(src, childName[i]);
        let isFile = fileSys.lstatSync(childAddress).isFile();
        if (isFile){
            console.log(childName[i]);
        }
    }
}
module.exports={
    organiseKey: organiseFunc
}

