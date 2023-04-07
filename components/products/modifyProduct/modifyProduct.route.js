const { Router } = require("express");
const router = Router();

const modifyProductController = require("./modifyProduct.controller");

router.put("/", async (req, res) => {
  try {
    const {
      codigo,
      descripcion,
      listaDePrecios,
      imagen,
      productoParaLaVenta,
      porcentajeIva,
    } = req.body;
    const result = await modifyProductController(
      codigo,
      descripcion,
      listaDePrecios,
      imagen,
      productoParaLaVenta,
      porcentajeIva
    );
    if (result === 200) {
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (e) {
    return `Error \modifyProduct`;
  }
});

module.exports = router;
