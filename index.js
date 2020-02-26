// I think I can only create one user because the session is active id for that user. and I need to erase it in order to end session?

const express = require('express')
const app =  new express()
app.set('view engine','ejs')
const ejs = require('ejs')
const mongoose = require('mongoose')
const User = require('./models/User')
const Reports = require('./models/Reports')
const bodyParser = require('body-parser')
const expressSession = require ('express-session')
const flash = require('connect-flash')


// middleware
const validation_middleware = require ('./middleware/validationMiddleware')
//verifica si el usuario esta login o no =>
const authentication_middleware = require('./middleware/authMiddleWare')
const if_User_Login = require ('./middleware/ifUserLoginRegister')

// MVC poniendo controllers
const user_store_controller = require ('./controllers/userStore')
const report_store_controller = require ('./controllers/crimeStore')
const home_controller =  require('./controllers/home')
const crime_report_controller = require ('./controllers/crimeReport')
const create_user_controller = require ('./controllers/CreateUserView')
const user_sucess_controller = require ('./controllers/userSucess')
const login_controller = require('./controllers/login')
const login_user_controller = require('./controllers/loginUser')
const log_out_controller = require('./controllers/logout')
const p_recovery_controller =  require ('./controllers/Precovery')
const mi_cuenta = require ('./controllers/micuenta')
const my_reports = require ('./controllers/myReports')

const bye_user_page_controller =  require ('./controllers/byeUserController')
const remove_user_controller = require ('./controllers/removeuser')

// registering middlewares
app.use(flash());
app.set('view engine','ejs')
app.use(express.static('public'))

// middleware para que req user sea accesible en todos los routes, thank to locals.
// app.use(function(req, res, next){
//     res.locals.user = req.user;
//     next();
//   });

// local 
mongoose.connect('mongodb://localhost:27017/heroku_test', {useNewUrlParser: true});

// atlas
// mongoose.connect('mongodb+srv://C_S:1234@cluster0-bhlmy.mongodb.net/C_app', {useNewUrlParser: true});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// local recordar transformar este a la solucionde andrew, para que pueda ser hibirdo con lcoahost. 
app.listen(2000,()=>{
    console.log('listening to port 2000')
})

// Posible solucion a nuestros problemas con validation middleware. 
// app.use('/posts/store',validateMiddleware) 

app.use(expressSession({
    secret: 'keyboard cat' 
})) 

// pag 109 ()para repasar leer desde auqi 109- Para esconder los links. cuando nuestro usuario ya esta registrado. el codifo a continuacion

global.loggedIn = null; // empezamos una variable globar con valor null. ver que juega next alli. para al siguiente middleware.  

app.use("*",(req,res,next) => { // "*" indicates that in all request this middleware should be executed (recordar que la primera '/'siempre es la que determina el route donde se lelvara a cabo la accion, al poner la estrella * se ejecuta en todas)
    loggedIn = req.session.userId;    
    next()
});


// ** controllers 
app.post('/user/store',if_User_Login, user_store_controller)
app.post('/reports/store', authentication_middleware, report_store_controller)
app.post('/removeuser', remove_user_controller)

app.get('/crime_report',authentication_middleware, crime_report_controller)
app.get('/posts/new', if_User_Login, create_user_controller )
app.get('/sucess',user_sucess_controller)
app.get('/', home_controller)
app.get('/login',if_User_Login,login_controller)
app.get('/myReports', my_reports)
app.post('/userlogin',if_User_Login,login_user_controller) // solo teniamos que cambiar los links. 
app.get('/Precovery',p_recovery_controller)
app.get('/micuenta',mi_cuenta)
// para sacar a la gente de la session.
app.get('/logout', log_out_controller)
app.get('/byeUser', bye_user_page_controller)


// par apaginas status 404
// app.get((req,res) => res.render('notfound')); // pag 113

// 404 page no funciono libro explaination pag 111 (siempre debe ser de last route. )
app.get('*', (req, res) => {
    res.render('notfound');
  });

// PROBLEMAS 
// validation_middleware eliminamos el validation middleware de ambos /store no funcionaba. 
// to log error to the consol, when validation hasnt been executed property PAG 100
// Estudiar mas a profundiad como funciona liginUser (ver video de andrew mead)

// Index
// Validation middlewre explicacion => pag 84 

// heroku port
// let port = process.env.PORT;
// if(port == null && port == ""){
//     port = 4000;
// }

// app.listen(port, ()=>{
//     console.log('App listening 4000...')    
// })