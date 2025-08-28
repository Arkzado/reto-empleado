import Empleado from "../models/empleadoModel.js";

const empleadoController = {
  listar: async (req, res) => {
    try {
      const data = await Empleado.listar();
      res.status(200).json({ estado: "ok", data });
    } catch (err) {
      res.status(500).json({ estado: "error", error: err });
    }
  },

  buscarPorNombre: async (req, res) => {
    try {
      const data = await Empleado.buscarPorNombre(req.params.nombre);
      res.status(200).json({ estado: "ok", data });
    } catch (err) {
      res.status(500).json({ estado: "error", error: err });
    }
  },

  agregar: async (req, res) => {
    try {
      const result = await Empleado.agregar(req.body);
      res.status(200).json({ estado: "ok", data: result });
    } catch (err) {
      res.status(500).json({ estado: "error", error: err });
    }
  },

  editar: async (req, res) => {
    try {
      const result = await Empleado.editar(req.params.codigo, req.body);
      res.status(200).json({ estado: "ok", data: result });
    } catch (err) {
      res.status(500).json({ estado: "error", error: err });
    }
  },

  eliminar: async (req, res) => {
    try {
      const result = await Empleado.eliminar(req.params.codigo);
      res.status(200).json({ estado: "ok", data: result });
    } catch (err) {
      res.status(500).json({ estado: "error", error: err });
    }
  }
};

export default empleadoController;
