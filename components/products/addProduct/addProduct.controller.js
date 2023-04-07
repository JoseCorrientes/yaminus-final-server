const newPool = require("../../../database/database");
const sqlText = require("./addProduct.sql");

async function addProductController(
  codigo,
  descripcion,
  listaDePrecios,
  urlImagen,
  productoParaLaVenta,
  porcentajeIva
) {
  try {
    const result = await newPool.query(sqlText[0], [
      codigo,
      descripcion,
      listaDePrecios,
      urlImagen,
      productoParaLaVenta,
      porcentajeIva,
    ]);
    if (result.rowCount === 1) return 200;
    else return 400;
  } catch (e) {
    return `Error ${e}`;
  }
}

module.exports = addProductController;
