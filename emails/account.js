const sgMail = require ('@sendgrid/mail')

const sendGridKey = "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";

// we have to let know the send grid API we want to work with the key we have store in this variable. 

//here when we send an email sendgrid will now is an email asociate with our account. 
sgMail.setApiKey(sendGridKey)

// this allow us to send emails and all the info that email contains. video 131 minuto 9:00
//#1 para repasar ver - video 135 min 1:54

const sendWelcomeEmail = (email, name) => {
        sgMail.send({
            to: email, // going to the user that created the account, 
            from: 'scarpantonioc@gmail.com',
            subject: 'Gracias por ser un heroe en tu comunidad',
            text: `${name} tus aportes a la comunidad son importantes, con tus aportes puedes cambiar el rumbo de tu comunidad haciendola un lugar mas seguro para ti y tu familia.`,
            // html: '<a><href'/crime_report'</a>'
            // Aqui podriamos insertar html, para decir, crear primer reporte. 
     })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'scarpantonioc@gmail.com',
        subject: 'Lamentamos verte ir..',
        text: `${name}  la comunidad de vecniso te extrañara, Esperoamos verte vovler pronto. Tu cuenta ha sido eliminada con exito.  `,
    })
}

//#2 min 5:43 Luego exportamos la funcion para que sea accesible en otras partes de nuestra aplicacion

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
