let fileSys = require("fs");
let filePath = require("path");

function treeFunc(dirPath) {
    // let destPath;
    if (dirPath == undefined) {

        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesExist = fileSys.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirPath, indent) {
    // is file or folder
    let isFile = fileSys.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = filePath.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = filePath.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fileSys.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = filePath.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }


}
module.exports = {
    treeKey: treeFunc
}