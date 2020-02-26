
/** 
 Video 114 -  creating a relashionship between tasks/users.
 
 Cuando creamos type:
 creamos una relacion entr el usuario y ese id. 

if you're creating a report, you have to provide an owner (id) for that task that has been created. 

*/
// the data stroe in owner is going to be an objectid


// making the DB info avaiable in home page so ejs views, can access acces it. 
const Reports = require('../models/Reports')
const userid = require('../models/User')

module.exports = (async (req,res) => {
    const reports = await Reports.find({}).populate('userid') // explicaicon populate. pag 127
    // console.log(req.session)
            res.render('index', {
            reports   
        });
    })