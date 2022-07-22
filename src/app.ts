//third-party packages and libs
import express from 'express'

//initializing app
const app = express()

//stting up the server listener
app.listen(process.env.PORT, () => console.log('server is up and running.'))