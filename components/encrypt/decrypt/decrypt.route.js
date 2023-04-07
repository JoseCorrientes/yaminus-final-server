const { Router } = require("express");
const router = Router();
const decryptController = require("./decrypt.controller");

router.post("/", (req, res) => {
  try {
    const { step, word } = req.body;
    let stepN = parseInt(step);
    const result = decryptController(stepN, word);
    return res.status(200).json({ result });
  } catch (e) {
    return res.send(`Error en \decrypt`);
  }
});

module.exports = router;
