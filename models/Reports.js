const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

const ReportSchema = new Schema ({
    title: {
        type: String, 
        required:[true,'* Completa el titulo del suceso'],
        lowercase:true  
    }, 
    body:{
        type: String, 
        required:[true,'* Completa la descriptcion del suceso'],
        lowercase:true  
    },
    location :{
        type: String, 
        required:[true,'* Completa la ubicacion del suceso'],
        lowercase:true  
    },
    urb:{
        type: String, 
        required:[true,'* Completa la descriptcion del suceso'],
        lowercase:true  
    },
    crimen:{
        type: String, 
        // required:[true,'* Completa la descriptcion del crimen'],
        lowercase:true  
    }, 
    sospechoso:{
        type: String, 
        // required:[true,'* Completa la descriptcion del acto sospechoso'],
        lowercase:true
    },
    userid:{
    // With this user id: ref: user "accedemos a todas las propiedades del 'User model' por lo cual podriamos acceder a username, las name en nuestro ejs template.  
        type: mongoose.Schema.Types.ObjectId, // pag 126this is how we link the reports with the user collections
        ref:'User', // aqui se supone que deberia estar haciendo referencia to the user module.  
        // required: true // is required because, you mus be a owner to create a report "you have to be sign in"
    },
    datePosted:{
        type: Date,
        default:new Date()
    }, 
})

ReportSchema.plugin(uniqueValidator)

const Reports = mongoose.model('Reports',ReportSchema);
module.exports = Reports;

// el valor tiene que ser un "valid mongo object id" because mongoose provides an specific id to each element created in the DB. 