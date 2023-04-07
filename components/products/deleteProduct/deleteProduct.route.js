const { Router } = require("express");
const router = Router();
const deleteProductController = require("./deleteProduct.controller");

router.delete("/", async (req, res) => {
  try {
    const { codigo } = req.query;
    const result = await deleteProductController(codigo);
    if (result === 200) {
      return res.status(200).json({ status: true });
    } else {
      return res.status(200).json({ status: false });
    }
  } catch (e) {
    return res.send("Error en /deleteProduct");
  }
});

module.exports = router;
