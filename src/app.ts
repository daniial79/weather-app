//third-party packages and libs
import express from 'express'

//initializing app
const app = express()

//setting up the middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//importing routers
import appRouter from './routes/city.routes';

//applying routers
app.use(appRouter)

//stting up the server listener
app.listen(process.env.PORT, () => console.log('server is up and running.'))