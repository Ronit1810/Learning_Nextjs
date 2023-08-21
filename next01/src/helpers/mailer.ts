import nodemailer from "nodemailer"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"

export const SendEmail = async ({email, emailType, userId} : any) => {
    try {
        //created hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VARIFY") {
            await User.findByIdAndUpdate(userId, {verifyToken : hashedToken , verifyTokenExpiry : Date.now() + 3600000})
            
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {forgotPasswordToken : hashedToken , forgotPasswordTokenExpiry : Date.now() + 3600000})
            
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "7be039c42c8b6e",
              pass: "c3553f2667eb7e"
            }
        });

        const mailOptions = {
            from : "ronitpatel.udemy@gmail.com",
            to : email,
            subject : emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html : `<p>Click<a href= "${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "Reset your password"}</p>`

        }

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse

        

    } catch (error : any) {
        throw new Error(error.message);
    }
}