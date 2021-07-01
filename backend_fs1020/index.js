
import express from 'express'
import cors from 'cors'
import router from "./src/route/router.js"
const app = express()
import dotenv from 'dotenv'
import errorHandler from "./lib/middleware/errorHandler.js"
import  entryRoute  from "./src/route/entryRoute.js"
import  authRoute  from "./src/route/authRoute.js"
import  userRoute  from "./src/route/userRoute.js"


const PORT = process.env.PORT || 3000
// allows  to parse json 
app.use(express.json())
app.use(cors())
app.use('/contact_form/entries', entryRoute)
app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use(router);
app.use(errorHandler)
// parse form data
// app.use(express.urlencoded({ extended: false }))

app.listen(`${PORT}`, () =>
  console.log(`API server running on http://localhost:${PORT}`)
);


export default app