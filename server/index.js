import express from 'express'
import morgan from 'morgan'
import http from 'http'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import routerUsers from './routes/users.js'




//Configuracion mongoose
let url = `mongodb://localhost:27017/UnsplashApp`


//para poder evitar posibles fallos en la coneccion a mongodb
mongoose.Promise = global.Promise


//Express
const app = express()
const PORT = 4000

//SERVER MODULE HTTP

//creamos el server y se lo pasamos a sockect.io
const server = http.createServer(app) 
//configuaramos las cors para poder entrar desde cualquier servidor

app.use(cookieParser())
//middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Esto permite el envío de cookies
}));
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/// enrrutador de usuarios
app.use('/api', routerUsers)

//conneccion a la Db y ecuchamos la aplicacion atravez del puerto 4000
mongoose.connect(url, { useNewUrlParser: true }).then(() =>{  
    console.log('conectado a la base de datos')
    server.listen(PORT, () => {    
        console.log('servidor ejecutandose en http://localhost:',PORT)
    })
});
