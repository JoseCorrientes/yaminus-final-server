const { Router } = require("express");
const router = Router();
const encryptController = require("./encrypt.controller");

router.post("/", (req, res) => {
  try {
    const { step, word } = req.body;
    let stepN = parseInt(step);
    const result = encryptController(stepN, word);
    return res.status(200).json({ result });
  } catch (e) {
    return res.send(`Error en /encrypt`);
  }
});

module.exports = router;
