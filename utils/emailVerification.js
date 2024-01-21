const changeStatus = require("./changeStatus");
const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"ahsanaz7510@gmail.com",
        pass:"fvgv gnta ufqt lrnd",
    },
})
module.exports = async(email) =>{  
        
        try {
            const info = await transporter.sendMail({
                from: "ahsanaz7510@gmail.com",
                to: email,
                subject: "Account verification",
                text: "Welcome",
                html: `

                <div style="width: 100%; padding: 5%; overflow: hidden;">
              
                  <div style="padding: 30px; background-color: #f4f4f4; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              
                    <h1 style="color: #e8491d; margin-bottom: 20px;">Email Verification</h1>
              
                    <p style="font-size: 18px; line-height: 1.6em; color: #333;">
                      Thank you for registering with us. To complete the registration process,
                      please click the button below to verify your email address.
                    </p>
              
                    <a href="http://localhost:5173/verify-user?email=${email}" style="display: inline-block; padding: 20px; background-color: #e8491d; color: #fff; text-decoration: none; border-radius: 5px; font-size: 18px;">Verify Email</a>
              
                  </div>
              
                </div>`
            });
            console.log("Mail sent successfully");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    }
   