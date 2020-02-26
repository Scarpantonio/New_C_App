const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require ('bcrypt')
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema ({
    
    name:{
        _id: mongoose.Schema.Types.ObjectId,
        type: String, 
        required:[true,'* Completa tu nombre'],
    },
    lastname:{
        type:String, 
        required:[true,'* Completa tu apellido'], 
        lowercase: true,
    },
    email:{
        type:String,
        required:[true,'* Completa tu email'],
        lowercase:true,
        unique: true, 
    },
    password:{
        type:String, 
        required: [true,'* Completa tu clave'],
    },
    direccion:{
        type:String,  
        required: [true,'* Completa tu urbarnización'],
        lowercase:true,
    }  
})

// Este codigo aqui hace que se mustre todos los reportes creados por un solo usuario. 114 andrew creating relationship between.
UserSchema.virtual('reports_by_user', {
    ref: 'Reports',
    localField: '_id', // id esta relacion con Reports and user by userid
    foreignField: 'userid', // ese es el objectID que identifica todos los reportes creados por ese usuario, que se usa como referencia para luego fetch todos losreportes creados por ese usuario individual. por eso en "crimeStore" tenemos puesto userid:req.session.userId   asi como en nuestros chema creamos una referencia a ese userid. 
  });

UserSchema.plugin(uniqueValidator)

//Andrew explica todo esto, - video 104 minuto 5:10 bcrypt password protectiojn in databse. 
UserSchema.pre('save', function(next){
    const user = this      
    bcrypt.hash(user.password, 10,  (error, hash) => {        
   
      user.password = hash 
      next() 
    }); 
});


const User = mongoose.model('User',UserSchema);
module.exports = User;
