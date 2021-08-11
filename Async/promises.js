const {readFile,writeFile} = require('fs').promises;
// const util = require('util')
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile)

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err,data) => {
            if(err){
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
}

getText('./level1/fsText.txt').then((result) => {
console.log("🚀 ~ file: promises.js ~ line 16 ~ getText ~ result", result)
}).catch((err) => {
    console.log(err)
})

const start = async () => {
    const first = await getText('./level1/first.txt');
    console.log(first)
}