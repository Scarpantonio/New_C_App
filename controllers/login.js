// login tambien deberia cargar los errores, poniendo como hey: usuario no encontrado. 

module.exports = (req,res) => {
res.render('login', {
    errors: req.session.validationErrors
    })
}
