import express from "express"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use((err, req, res, next) => {
    if (err) {
        return res.send(err.message)
    }
    return res.send("not found")
})

export default app
