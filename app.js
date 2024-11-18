const express = require("express");
const path = require("path")

const checklistRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
const methodOverrride = require("method-override")

const app = express();
require("./config/database")
app.use(express.urlencoded({extended: true}))
app.use(methodOverrride('_method', { methods: ['POST', 'GET']}))

app.set("views", path.join(__dirname, 'src/views'))
app.set("view engine", "ejs")

app.use(express.json());
app.use(express(path.join(__dirname, 'public')))

app.use("/", rootRouter)
app.use("/checklists", checklistRouter);

app.listen(3000, () => {
    console.log("Servidor iniciado");
})