const { createReadStream } = require("fs");

//takes in options object;
// {
//     highWatermark:90000,  CONTROL SIZE
//     encoding: utf8,       type of encoding
// }
// last buffer last remaining chunk of a steam
const stream = createReadStream("./level1/big.txt");

//chunks of 64kB by default
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
