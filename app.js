const express = require("express");
const checklistRouter = require('./src/routes/checklist')
const app = express();
require("./config/database")

app.use(express.json());

app.use("/checklists", checklistRouter);

app.listen(3000, () => {
    console.log("Servidor iniciado");
})