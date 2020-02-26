// pag 107
// Aqui podemos indicar hacia donde queremos redireccionar a las personas si la validacion a sido exitose. 
// No entiendo muy bien. 
module.exports = (req,res,next) => {    
    if(req.files == null || req.body.title == null || req.body.title == null){        
        return res.redirect('/posts/new')
    }    
    next()
}

// ver porque cuando aplicamos este middleware nos ridericciona al home, nuevamente al link porque no esta siendo enviado de manera exitosa. 
// en alguna 

