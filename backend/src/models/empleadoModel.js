import connection from "../config/conexion.js";

const Empleado = {
  listar: async () => {
    const [rows] = await connection.query("SELECT * FROM empleado ORDER BY direccion DESC");
    return rows;
  },

  buscarPorNombre: async (nombre) => {
    const [rows] = await connection.query("SELECT * FROM empleado WHERE nombre_completo = ?", [nombre]);
    return rows;
  },

  agregar: async (empleado) => {
    const [result] = await connection.query("INSERT INTO empleado SET ?", [empleado]);
    return result;
  },

  editar: async (codigo, empleado) => {
    const [result] = await connection.query("UPDATE empleado SET ? WHERE codigo = ?", [empleado, codigo]);
    return result;
  },

  eliminar: async (codigo) => {
    const [result] = await connection.query("DELETE FROM empleado WHERE codigo = ?", [codigo]);
    return result;
  }
};

export default Empleado;
