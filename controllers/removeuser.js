// Este sirve para que eliminemos al usuario. 

/** 
 Por recordar: con solo la forma podemos actiar la funcion. 
    - Ya el boton esta configurado para que cuando se haga click se ejecute esta funcion. solo que ahora solo encuentra la usuario. 
*/

const User = require('../models/User')
const {sendCancelationEmail} = require('../emails/account')

module.exports = async(req, res) => {
const user = await User.findOneAndDelete({email:req.body.email}, (err) => {  // req.body.email esta agarrando el dato de email desde el front-end
if(err) {
  console.log(err)
  res.redirect('/byeUser')
        }
  })
  // cuandoes exitosa la eliminacion se manda email y sendcancelation.
    res.redirect('/')
    sendCancelationEmail(user.email, user.name) // lo comente para que no se enviara el correo cada vez. q se ejcute la info. 
 }