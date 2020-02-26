/** 
 Si el usuario ya ha hecho log in, no deberia ser 
 capas de volver a hacer log in, o crear otro usuario,
 asi con este middleware prohibimos que hagan eso. 
 */

module.exports = (req,res,next) => {
    if(req.session.userId) {
        return res.redirect('/') // if user login, redirect to home page
    }
    next() // para ejecutar el siguiente middleware. podemos practicar con middlewares haciendo matematicas como , if(var=2) multiply for 4 y asi que vaya una serie de diferentes middlewares. 
}