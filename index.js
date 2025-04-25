import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"


//import all routs
import userRoutes from "./route/user.route.js"

dotenv.config()

const app = express()
const port = process.env.PORT ?? 4000

app.use(
    cors({
        origin: process.env.BASE_URL,
        methods: ["POST", "GET", "DELETE", "OPTION"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"]
    })
)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/udit', (req, res) => {
    res.send('Hello World!')
})

//connected db
db()

//user routes
app.use("/api/v1/users/", userRoutes) 

//user routs


app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`)
}) 