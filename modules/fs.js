const{readFileSync,writeFileSync, readFile, writeFile} = require('fs')

//async reads
const first = readFileSync('./level1/fsText.txt', 'utf8')
const second = readFileSync('./level1/level2/fsText2.txt', 'utf8')

console.log(first,second)

// async writes
writeFileSync('./level1/fs-write.txt', `1st: ${first}, 2nd: ${second}`, {flag:'a'})

//sync read 
readFile('./level1/fsText.txt', 'utf8',(err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first = result;
    readFile('./level1/fsText.txt','utf-8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./level1/level2/fs-write2.txt',
        `1st: ${first} 2nd:${second}`, (err,result) => {
            if(err){
                console.log(err)
                return
            }
        }
        )
    })
})