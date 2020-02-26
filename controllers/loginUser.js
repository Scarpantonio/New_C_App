// comment at the very end of this code. 
const bcrypt = require ('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
 const { email, password } = req.body;
    User.findOne({email:email},(error, user) => {
      if(user) { 
        bcrypt.compare(password, user.password, (error, same) => {
          if(same){
            req.session.userId = user._id  // esta es almacenada cuando el usuario hace login. la misma que usamos luego en reportes para asignar al usuario que ha creado ese reporte en especifico. 
            res.redirect('/') 
          }
            else {  
              res.redirect('/login')      
          }
      })
    }
      else {
        const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)            
        req.session.validationErrors = validationErrors
        console.log(req.session.validationErrors) 
        res.redirect('/login')
        }  
     })
}

// ****** COMENTED CODE EXPLICACION DEL CDIGO QUE ESTA ARRIBA. 


// Expliacion pag 103
// if passwords match => people go to reports home, de su urbarnizacion. 
// ver explicacion de andrew para entender esto a mas profundidad. 
// Esto es autenticacion a travez de los cookies. 
/** 
 Explicaicon: 
 - Cuando la forma en login.ejs action=users/login es ejecutada. tod esa info de la forma es enviada a este middleware.  que ya ha sido exportado como login_user_controller
 - Luego aqui dentro del Middleware tenemosel codigo que recibe y decide que hacer ocn esa informacion. 
 - Si todo marcha de manera adecuada el usuario es direccionado al home page "/"
*/


// module.exports = (req, res) => {
//  const { email, password } = req.body; // we extract the user name and password.  abstraction applyied.

//     User.findOne({email:email},(error, user) => { // here we look for the user name to check if user exist     
//       if(user) { // if user exist compare passwords
//         // Comparre email: es lo que nos faltaria aqui if user same compare email.
//         bcrypt.compare(password, user.password, (error, same) => { // aqui le pedimos a bcrypt que compare las claves del user we just found
//           if(same){ // passwrod match
//             req.session.userId = user._id  // store user session/ create user session that will share with browser (aqui estamos implementando sessiones en nuestra app. we ssign the user id to the session / the session data saves this data on the user browser so each time the user makes a request this cookie will be send back to the server with the authentiacion id. this is how we know if a user id log in
//             res.redirect('/') // en vez de home llevamos a la gente a la pagina de los reportes de esa URB en especifico.  
//           }
//             else {
//               console.log(error)
              
//                 res.redirect('/login')  // si no los llevamos otra vez al login. 
//           }
//       })
//     }
//       else {
//         console.log(error)
//         // console.log(error)
//         // const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)            
//         // req.session.validationErrors = validationErrors
//         res.redirect('/login')
//       }
//     })
// }

  
