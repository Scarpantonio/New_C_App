// ANDREW VIDEO 114 - 17:47

const Reports = require('../models/Reports')
const User = require('../models/User')

//codigo curs brendon
    // const reports_id = await User.findone({_id, userid:req.user._Id})
    // await user.populate('reports_by_user').execPopulate() 
    // console.log(reports_id.reports_by_user)

    // const user_session_id = req.session.id
    //     const user = await User.findOne(user_session_id.userid) 

    // #1 Tenemos que buscar es user id, no el id del usuario. userid es que el que se mantiene fijo en cada publicacion que el cliente efectua. 
    // #2 Cambiamos a userid, y estamos buscando ahora dentro de reportes.

module.exports = (async (req,res) => {  
    
    // we can filter by id and we can also filter by the owner value. ({_id,userid})
//   var id = req.user.id;

// const user = await User.findOne(req.session.id.userid) 
        // const user = await Reports.findOne({_id, userid: req.user._id})
        // const user = await User.findById({_id:id})
    try {
        
        // const user = await User.findOne({email:req.body.email})
          
        const user = await User.findById('5e55419fa0d960159d5dc54b')

        // const user = await User.findOne(req.user)
        await user.populate('reports_by_user').execPopulate() 
        const reports_id = user.reports_by_user  
        
        if(!reports_id) {
            res.status(404).send()   
        }
        console.log(user._id)
        console.log(req.session.id)
        res.render('myReports', {
            reports_id   
        });
    } catch(e){
        console.log(e)
        res.status(500).send()
    }
})









// **codigo con comentarios viernes febrero 21

// // ANDREW VIDEO 114 - 17:47

// const Reports = require('../models/Reports')
// const User = require('../models/User')

// // how do i show only de ids created by that specific

// //PLAYGROUND TO UNDERTAND POPULATE ANDREW VIDEO 12:38-114
// // module.exports = (async (req,res) => {

//     //#2 Pero enrealidad queremos crear esa relacion con usuarios. 
//     // Queremos que se muestren las tareas creadas por ese usuario en particular y eso lo hacemos ocn Virtual property  
    
//     // const reports_id = await User.findone({_id, userid:req.user._Id})
//     // await user.populate('reports_by_user').execPopulate() 
//     // console.log(reports_id.reports_by_user)
    
//     // const user = await User.findById('5e41deb548e2aa53f31007c4')
//     // await user.populate('reports_by_user').execPopulate() 
//     // aqui deberiamos colocar const reports_id => console.log(user.reports_by_user) y luego esa variable la deveriamos mostrar en la pagina del ejs para que sea accesible al momento de renderizarla. 
        
//     // })

//     // userid si no me equivoco contiene ese numero. que haria funcionar sin que lo introduzcamos manuealmente. 
//     // talvez tenemos que hacer algo en el schema para que ese id sea agarrable. 
//     // queremos encontrar el id del usuario que hiso sigin.


// // ESTE ES EL CODIGO QUE ESTABA FUNCIONANDO PARA RENDER
// module.exports = (async (req,res) => {    
//     // const _id = req.session.userId
//     try {
//         // console.log('your id is ' + _id) // no encuentra el id. 
//         // const user = await User.findById(_id)    // aqui ahora tenemos que hacer que la app detecte automaticamente el id de lo que estamos realizando. 

//         // ESTE ES EL CODIGO QUE FUNCIONA. => porque introduciomos en id del usuario directamente. 
//         //this uses the id of the autenticated user req.user._id I guess the id when the session was granted by browser. 
//         console.log(req.session)
//         const user = await User.findById('5e4ff8257963599d79d6a9b6') // aqui ahora tenemos que hacer que la app detecte automaticamente el id de lo que estamos realizando. 
        

//         await user.populate('reports_by_user').execPopulate() // agarra los reportes del usuario que te indique arriba 

//         const reports_id = user.reports_by_user  // cuando indicamos user decimos , hey este es el usuario con ese especifico id del cual quiero obtener la informacion toda la info que ese usuario a escrito gracias a populate. 
//         if(!reports_id) {
//             res.status(404).send()
            
//         }
//         res.render('myReports', {
//             reports_id   
//         });
//     } catch(e){
//         console.log(e)
//         res.status(500).send()
//     }
// })
















// codigo de esta manana febrero 18
// module.exports = (async (req,res) => {
//     const _id = req.params._id
//     try{
//         const reports_id = await Reports.findOne({_id, userid:req.userid})
//         console.log(reports_id)// no encutra nada.
//         // await reports_id.populate('reports_by_user').execPopulate() 
//         // console.log(reports_id.reports_by_user)
//         if(!reports_id){
//             res.status(404).send()
//         }
//         res.render('myReports', {
//             reports_id   
//         });
//     } catch(e){
//         console.log(e)
//         res.status(500).send()
//     }
// })



    // ESTE ES EL CODIGO QUE ESTABA FUNCIONANDO PARA RENDER
    // module.exports = (async (req,res) => {
    //     const reports_id = await Reports.find({})
    //     .populate('userid','email -_id') // este hace una referencia a nuestro User model, userid es la llave que creamos como referencia para entrar a todas las propiedades creadas en User, como name, email, etc. ahora tenemos que hacer que se muestre la info solo con ese user id. explicaicon populate. pag 127
    //     .exec()
    //     // console.log(req.session)
    //             res.render('myReports', {
    //             reports_id   
    //         });
    //     })


// module.exports = (req,res) =>{
//     res.render('myReports')
// } 