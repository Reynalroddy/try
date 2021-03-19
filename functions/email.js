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

    const {name,email,message,subject} = JSON.parse(event.body)

    if(!name || !email||!message|| !subject){

        return {
            headers:{'Access-Control-Allow-Origin':'*'},
                statusCode:400,
                body:'provide all values'
            }
    }
    


const data = {

from: `darcoders77@gmail.com`,

to:"dolapoajayi28@gmail.com",

subject: "pass",

html:`<p>${message}</p>`

}

try {
    
    await transporter.sendMail({...data})
    return {
        headers:{'Access-Control-Allow-Origin':'*'},
            statusCode:200,
            body:'success'
        }


} catch (error) {
    
    return {
        headers:{'Access-Control-Allow-Origin':'*'},
            statusCode:400,
            body:'error'
        }
}





    }
