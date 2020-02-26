// Rotuer para crear y guardar reporte de crimen. en DB.
// aqui tendriamos que hacer userid available. 
const Reports = require('../models/Reports')
// creando el crreo electronico que no funciono
const {reportConfirmation} = require('../emails/account')

module.exports =  (req,res) => {
    console.log(req.session.userId)
    const userid = req.session.userId // not sure if i need this.
    Reports.create({
        ...req.body, // pag-125 no estaba funcionando porque no habia agregado los ... Alli con JS spread "..." decimos que queremos todo el contenido proveniente dereq.body "mas" el contrenido the userID creado al momento de crear autenticacion para el usuario.
        // owner : req.user._id, // este funciona es con passwrod. 

        userid: req.session.userId // aqui a userid le asignamos el logged user id loginuser when user login
    }, (error, reports) => {
        if(error) {
            console.log(error)
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.session.validationErrors = validationErrors
            return res.redirect('/crime_report')
        } 
        console.log(reports)
        console.log(userid)
        // reportConfirmation(user.email, user.name) // si es exitoso enviar email. 
        res.redirect('/sucess')
    }) 
}


 // aqui accedemos al usuario. este usuario se comunica con objetId => que cremoas en el modelo de reportes. 
// Esto aqui es para darle a populate. 
// userid: req.session.userid 



















            // req.flash('validationErrors', validationErrors) 
            // req.flash('data',req.body)            

// original antes de tratar de testear los errores
// module.exports = (async (req,res) => {
//     await Reports.create(req.body,) 
//     res.redirect('/sucess') // (cambiar este landing, a tu crimen ha sido creado con exito.) o simplemente poder insertar dentro de la misma princpal que diga(reporte creado con exito y luego una pequena x par apoder salirnos cuando el repore haya sido creado.)
//     console.log(req.body)
// })

// //each report stores a reference to the user id who created that report. 
// userid: req.session.userid // this one will be populated with the login user id
