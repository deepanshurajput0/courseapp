import express from "express"
import {config} from "dotenv"
import ErrorMiddleware from "./middlewares/Error.js"
import cookieParser from "cookie-parser"
import course from "./routes/courseRoutes.js"
import user from "./routes/userRoutes.js"
import payment from "./routes/paymentRoutes.js"
import other from "./routes/otherRoutes.js"
import cors from "cors"
config({
    path:"./config/config.env" ,
})
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true, 
}))

app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000" ,
    credentials: true, 
    methods: ["GET","POST","PUT","DELETE"]
}))

app.get("/",(req,res)=> res.send(`<h1> Site is Working. click <a href=${process.env.FRONTEND_URL} > here</a> here to visit frontend`))

app.use("/api/v1", course )
app.use("/api/v1", user )
app.use("/api/v1",payment) 
app.use("/api/v1",other)
export default app 

app.use(ErrorMiddleware)
