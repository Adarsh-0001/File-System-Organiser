const fileSys = require('fs');
const filePath = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docs', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'ppt', 'pptx', 'csv'],
    app: ['exe', 'dmg' , 'pkg', 'deb'],
    image: ['jpg', 'jpeg', 'png', 'gif', 'webp']
}

function organiseFunc(dirPath){
// console.log("its a path", dirPath);
let destPath;
if (dirPath == undefined){
    destPath = process.cwd();
    return;
}
else {
    let doesExist = fileSys.existsSync(dirPath);
    if (doesExist){
        destPath = filePath.join(dirPath, "Organized_Files"); //it will create organized_Files then add to directory/folder
        if(fileSys.existsSync(destPath) == false){
            fileSys.mkdirSync(destPath);
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
    // console.log(childName);
    for (let i=0; i<childName.length; i++) {
        let childAddress = filePath.join(src, childName[i]);
        let isFile = fileSys.lstatSync(childAddress).isFile();
        if (isFile){
            // console.log(childName[i]);
            let category = getCategory(childName[i]);
            console.log(childName[i], "belongs to --> ", category);
            sendFiles(childAddress, dest,  category);
        } 
    }
}

function sendFiles(srcFilePath, dest, category){
    let categoryPath = filePath.join(dest, category);
    if (fileSys.existsSync(categoryPath) == false){
        fileSys.mkdirSync(categoryPath);
    }
    let fileName = filePath.basename(srcFilePath);
    let destFilePath = filePath.join(categoryPath, fileName);
    fileSys.copyFileSync(srcFilePath, destFilePath);
    fileSys.unlinkSync(srcFilePath);
    console.log(fileName, "copied to -->", category);
}

function getCategory(name){
    let extention = filePath.extname(name);
    extention = extention.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for (let i = 0; i<cTypeArray.length; i++){
            if (extention == cTypeArray[i]){
                return type;
            }
        }
    }
    return "Not Found! There is some other type of file";
}
module.exports={
    organiseKey: organiseFunc
}

