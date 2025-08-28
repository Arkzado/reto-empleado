import express from "express";
import cors from "cors";
import empleadoRoutes from "./routes/empleadoRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/empleado", empleadoRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

export default app;
