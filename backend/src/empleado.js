import express from "express";
import connection from "./conexion.js";

const empleado = express.Router();

empleado.get("/listarEmpleadosDireccionOrdenada", async (req, res) => {
    try {
        const consulta = "SELECT * FROM empleado ORDER BY direccion DESC";
        const [resultado] = await connection.query(consulta);
        res.status(200).send({
            estado: "ok",
            data: resultado
        })
    }
    catch (err) {
        res.status(500).send({
            estado: "error",
            data: err
        })
    }
})

empleado.get("/buscarEmpleadoPorNombre/:nombre", async (req, res) => {
    try {
        const nombre = req.params.nombre;
        const consulta = "SELECT * FROM empleado WHERE nombre_completo = ?";
        const [resultado] = await connection.query(consulta, [nombre]);
        res.status(200).send({
            estado: "ok",
            data: resultado
        })
    }
    catch (err) {
        res.status(500).send({
            estado: "error",
            data: err
        })
    }
})

empleado.post("/agregarEmpleado", async (req, res) => {
    try {
        const empleado = {
            nombre_completo: req.body.nombre_completo,
            direccion: req.body.direccion,
            email: req.body.email,
            telefono: req.body.telefono,
            fecha_nacimiento: req.body.fecha_nacimiento,
            estado: req.body.estado
        }

        const consulta = "INSERT INTO empleado SET ?";
        const [resultado] = await connection.query(consulta, [empleado]);

        res.status(200).send({
            estado: "ok",
            data: resultado
        })
    }
    catch (err) {
        res.status(500).send({
            estado: "error",
            data: err
        })
    }
})

empleado.put("/editarEmpleado/:codigo", async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const empleado = {
            nombre_completo: req.body.nombre_completo,
            direccion: req.body.direccion,
            email: req.body.email,
            telefono: req.body.telefono,
            fecha_nacimiento: req.body.fecha_nacimiento,
            estado: req.body.estado
        }

        const consulta = "UPDATE empleado SET ? WHERE codigo = ?";
        const [resultado] = await connection.query(consulta, [empleado, codigo]);

        res.status(200).send({
            estado: "ok",
            data: resultado
        })
    }
    catch (err) {
        res.status(500).send({
            estado: "error",
            data: err
        })
    }
})

empleado.delete("/eliminarEmpleado/:codigo", async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const consulta = "DELETE FROM empleado WHERE codigo = ?";
        const [resultado] = await connection.query(consulta, [codigo]);
        
        res.status(200).send({
            estado: "ok",
            data: resultado
        })
    }
    catch (err) {
        res.status(500).send({
            estado: "error",
            data: err
        })
    }
})

export default empleado;