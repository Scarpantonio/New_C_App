const flash = require('connect-flash')


module.exports = (req,res) => {
    res.render('crime_report', {
        errors: req.session.validationErrors
        // errors: flash('validationErrors'),
    })
}



// const flash = require('connect-flash')


// module.exports = (req,res) => {
//     var title = ""
//     var body = ""
//     var location = ""
//     var urb = ""
//     var crimen = ""
//     var sospechoso = ""
//     const data = req.flash('data')[0];    
    
//     if(typeof data != "undefined"){        
//         title = data.title
//         body = data.body
//         location = data.location
//         urb = data.urb
//         crimen = data.crimen
//         sospechoso = data.sospechoso
//     }
    
//     res.render('crime_report', {
//         errors: flash('validationErrors'),
//         title: title,
//         body: body,
//         location: location,
//         urb: urb,
//         crimen: crimen,
//         sospechoso: sospechoso
//     })
// }
