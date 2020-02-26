// pag 117 - errors:req.session.validationerrors 
// Pasamos ese error como pasamos la info de los usuarios  nuestro home page. de la misma manera lo hacemos con el error. 
// Para mas detalles ver explicacion en "userStore"

module.exports = (req, res) =>{ 
    var username = "" 
    var password = ""
    const data = req.flash('data')[0];    

    if(typeof data != "undefined"){        
        username = data.username
        password = data.password
    }
     
    res.render('create',{        
        errors: req.flash('validationErrors'),
        username: username,
        password: password
    })
}


// module.exports = (req,res) => {
//     res.render('create', {
//         // retrieve errors from key and make them available to this view
//         errors: req.session.validationErrors
//     })
// }


// module.exports = (req,res) => {
//     res.render('create')
// }