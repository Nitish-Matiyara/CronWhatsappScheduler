var cron = require("node-cron")

//--Birthday Schedule
cron.schedule('* 1 0 2 Feb *', ()=>{
    console.log("Task scheduled at night 00 hour 1 minute on 02 February"),
    alert("Happy Birthday")
},{
   timezone: "Asia/Kolkata"
})

//-Step Values (As an Alarm)
cron.schedule(' 55 8 */1 * *', ()=>{
    console.log("Task scheduled everyday at 8:55 morning.")
    alert("Good Morning")
},{
    timezone: "Asia/Kolkata"
})

//--Scheduler for whatsapp notifications using Twilio
const accountSid = 'ACc218a135021c86bbf488c392684bb0c8'; 
const authToken = '1f7912251f0dc154cb04572faf0e5493'; 
const client = require('twilio')(accountSid, authToken); 

//--Crons Start/Stop Method
let todTask = cron.schedule(' 55 9 */1 * *', ()=>{

 console.log("Task scheduled at 9:55am everyday")
    client.messages 
          .create({ 
             body: 'Enter your TOD update', 
             from: 'whatsapp:+14155238886',       
             to: 'whatsapp:+918817553485' 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
},{
    scheduled: false
})
todTask.start()


let preLunchTask = cron.schedule(' 55 13 */1 * *', ()=>{
    console.log("Task scheduled at 13:55pm everyday")
    client.messages 
          .create({ 
             body: 'Enter your PreLunch update', 
             from: 'whatsapp:+14155238886',       
             to: 'whatsapp:+918817553485' 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
})

let eodTask = cron.schedule(' 55 18 */1 * *', ()=>{
console.log("Task scheduled at 18:55pm everyday")
    client.messages 
          .create({ 
             body: 'Enter your EOD update', 
             from: 'whatsapp:+14155238886',       
             to: 'whatsapp:+918817553485' 
           }) 
          .then(message => console.log(message.sid)) 
          .done();
})
