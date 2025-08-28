import express from "express";
import empleadoController from "../controllers/empleadoController.js";

const router = express.Router();

router.get("/listarEmpleadosDireccionOrdenada", empleadoController.listar);
router.get("/buscarEmpleadoPorNombre/:nombre", empleadoController.buscarPorNombre);
router.post("/agregarEmpleado", empleadoController.agregar);
router.put("/editarEmpleado/:codigo", empleadoController.editar);
router.delete("/eliminarEmpleado/:codigo", empleadoController.eliminar);

export default router;
