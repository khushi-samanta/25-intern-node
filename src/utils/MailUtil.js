const mailer = require('nodemailer');


const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"eadvertisement9@gmail.com",
            pass:"fhqi irvo omfv rrhv"
        }
    })

    const mailOptions = {
        from: 'eadvertisement9@gmail.com',
        to: to,
        subject: subject,
        // text: text
        html:text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports ={
    sendingMail
}
// sendingMail("pennapesiya-7614@yopmail.com","Test Mail","this is test mail");
