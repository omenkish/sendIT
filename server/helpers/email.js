import nodemailer from 'nodemailer';
import crypt from './encryptEmailPassword';

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'sendit.courierservice@gmail.com',
        pass: crypt.decrypt(),
    },
});
 export default function sendEmail(to, subject, message) {
    const mailOptions = {
        from: '"SendIt Courier Service 👻" <sendit.courierservice@gmail.com>',
        to,
        subject,
        html: message,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
        else{
          console.log(`Message sent: ${info.response}`);
        }
        
    });
}

