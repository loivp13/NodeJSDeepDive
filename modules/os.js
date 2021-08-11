const os = require('os')

//get system's user info
const user = os.userInfo()
console.log(user)

//get system's uptime
const uptime = os.uptime();
console.log(`The System Uptime is ${uptime/60/60/24} day(s)`)