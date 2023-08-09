const express = require("express")
const path = require("path")

const checklistRouter = require('./routes/checklist')
const rootRouter = require('./routes/index')
const app = express()
require('./config/database')

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.use('/', rootRouter)
app.use('/checklists', checklistRouter)
app.listen(3000, () => {
    console.log('Servidor iniciado')
})