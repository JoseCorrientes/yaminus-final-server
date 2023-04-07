const newPool = require("../../../database/database");
const sqlText = require("./modifyProduct.sql");

async function modifyProduct(
  codigo,
  descripcion,
  listaDePrecios,
  imagen,
  productoParaLaVenta,
  porcentajeIva
) {
  try {
    const result = await newPool.query(sqlText[0], [
      codigo,
      descripcion,
      listaDePrecios,
      imagen,
      productoParaLaVenta,
      porcentajeIva,
    ]);
    if (result.rowCount > 0) return 200;
    return 400;
  } catch (e) {
    return `Error ${e}`;
  }
}

module.exports = modifyProduct;
