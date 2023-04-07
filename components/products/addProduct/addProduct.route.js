const { Router } = require("express");
const router = Router();
const addProductController = require("./addProduct.controller");

router.post("/", async (req, res) => {
  try {
    const {
      codigo,
      descripcion,
      listaDePrecios,
      urlImagen,
      productoParaLaVenta,
      porcentajeIva,
    } = req.body;
    let booleanProductoParaLaVenta;

    if (productoParaLaVenta === "s" || productoParaLaVenta === "S")
      booleanProductoParaLaVenta = true;
    else booleanProductoParaLaVenta = false;

    let ivanuevo = parseFloat(porcentajeIva);
    const result = await addProductController(
      codigo,
      descripcion,
      listaDePrecios,
      urlImagen,
      booleanProductoParaLaVenta,
      ivanuevo
    );
    if (result === 200) return res.status(200).json({ status: true });
    else return res.status(200).json({ status: false });
  } catch (e) {
    return res.send(`Error \addProduct`);
  }
});

module.exports = router;
