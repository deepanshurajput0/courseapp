import { createTransport } from "nodemailer"
import nodemailer from "nodemailer"
export const sendEmail =async(to,subject,text)=>{
    const transporter =nodemailer.createTransport({
        // name:"coursebundler",
            host:process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io" ,
            port:process.env.SMTP_PORT || 2525, 
            auth: {
              user: process.env.SMTP_USER ||"947d637df6f69d" ,
              pass: process.env.SMTP_PASS || "3f50c4e382e2d8",
            },
          }); 
    // const transport = nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "947d637df6f69d",
    //       pass: "********e2d8"
    //     }
    //   });
      
// let scrapeEmailMessage = ({
//     to, subject, text
// })

// let mailTransporter = nodemailer.createTransport(transport);
    await transporter.sendMail({
        to,subject,text,
    })
//     mailTransporter.sendMail(scrapeEmailMessage, function(err, data) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Email sent successfully');
//         }
//     });
//    
}



