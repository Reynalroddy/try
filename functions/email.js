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


  let HEADERS = {
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
    'Content-Type': 'application/json', //optional
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Max-Age': '8640'
  }
  
  //This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."
  HEADERS['Access-Control-Allow-Origin'] = '*'
  HEADERS['Vary'] = 'Origin'

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

try {
    
    await transporter.sendMail({...data})
    return {
        HEADERS,
            statusCode:200,
            body:JSON.stringify(`${message}`)
        }
console.log(res)

} catch (error) {
    
    return {
        HEADERS,
            statusCode:400,
            body:'error'
        }
} 




    }
