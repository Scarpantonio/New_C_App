
// Este es el view que utiliamos para terminar la session. nota como utilizamos req.session.destroy

module.exports = (req,res) =>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
}