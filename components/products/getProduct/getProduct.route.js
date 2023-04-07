const  { Router} = require("express");
const router=Router();
const getProductController= require('./getProduct.controller');

router.get("/", async (req, res)=>{
    try {
        const result= await getProductController()
        res.status(200).json(result);

    } catch (e) {
        return res.send('Error en /getProduct');
    }    
})

module.exports = router;

