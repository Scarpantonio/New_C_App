//Este es el middleWare que prohibe que uno persona sin estar login, tenga acceso a cierta info de la pagina web. 
// habiamos puesto este middleware, en un route que no hacia falta. 
/*
porque poner (error)
User.findById(req.session.userId,(error, user)
error => va a dispararse si no encuentra a un usuario, si no aplica (user)
Sino me equivoco todo relacionado con la logica de los callbacks. 
Seria bueno reeconstruir app con async, await, try and catch. 

aqui talvez tenemos que colocar que guarde en req.locals  el id de ese usuario asi como se le otorga al usuaio un req.session.userid
find the user by the id and injected to res.locals.
*/

const User = require('../models/User')

module.exports = (req,res,next) => {
    User.findById(req.session.userId,(error, user) => {
        if(error||!user)
        return res.redirect('/')
        next()
    })
}