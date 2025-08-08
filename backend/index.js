import empleado from "./src/empleado.js";
import cors from "cors";
import express from "express";

const app = express();
const puerto = "3000";

app.use(express.json());
app.use(cors());
app.use("/empleado", empleado);

app.get("/", (req, res) =>{
    res.send("todo bien");
})


app.listen(puerto, () => {
 console.log(`http://localhost:${puerto}: funciona`)
})

