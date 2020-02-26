// Rotuer para crear al usuario. recepcion del req.body. 
// Este es el router que se conecta con la forma y se activa cuando la forma en form action= post/store este es el router que se activa.
// explicacion de los ".." en User: estamos dentro de dos archivos ahora. 
// update: error handeling => pag 115

/**
  Es sencillo como atrapamos al error:     const validationerrors = Object.keys(error.errors).map(key=>error.errors[key].message) // hacemos array sobre object. 
  Object.keys(error.errors).map(key=>error.errors[key].message) aqui agarramos el array que contiene el listado de erroes, por field, namme, passwrod, se peude ver console.log, yo creo que esos errores son creados por mongoose cuando creamos los schemas.    
  luego lo almacenamos en una variable const validationerrors, para que pueda ser accesible en la view donde esta la forma para registro de usuarios ('create user view. ')
 */

const User = require('../models/User.js')
const {sendWelcomeEmail} = require('../emails/account')

module.exports = (req,res) => { 
    User.create(req.body, (error, user) => {        
        if(error) {                      
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors',validationErrors) 
            req.flash('data',req.body)   // explicaicon pagina 123 "data conserva los datos ingresados en la "        
            return res.redirect('/posts/new')        
        }        
        sendWelcomeEmail(user.email, user.name) // si es exitoso enviar email. 
        res.redirect('/sucess')        
      })               
}

// const User = require('../models/User')

// module.exports =  (req,res)=>{
//     User.create(req.body, (error, user)=> {
//         if(error) {
//             console.log(error)
//             const validationErrors = Object.keys(error.errors).map(key =>
//                 error.errors[key].message)            
//                 req.session.validationErrors = validationErrors
//             return res.redirect('/posts/new')
//         } 
//         console.log(user)
//         res.redirect('/sucess')
//     }) 
// }

// module.exports = (async (req,res) => {
//     await User.create(req.body) 
//     res.redirect('/sucess')
//     console.log(req.body)
// })


// antes de agregar el codigo donde sacamos los errores para publicarlo en la pagina. 
// module.exports =  (req,res)=>{
//     User.create(req.body, (error, user)=> {
//         if(error) {
//             console.log(error)
//             return res.redirect('/posts/new')
//         } 
//         console.log(user)
//         res.redirect('/sucess')
//     }) 
// }