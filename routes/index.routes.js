const express = require("express");

const getProduct = require("../components/products/getProduct/getProduct.route");
const deleteProduct = require("../components/products/deleteProduct/deleteProduct.route");
const addProduct = require("../components/products/addProduct/addProduct.route");
const modifyProduct = require("../components/products/modifyProduct/modifyProduct.route");

const encrypt = require("../components/encrypt/encrypt/encrypt.route.js");
const decrypt = require("../components/encrypt/decrypt/decrypt.route");

const routes = (app) => {
  app.use("/getProduct", getProduct);
  app.use("/deleteProduct", deleteProduct);
  app.use("/addProduct", addProduct);
  app.use("/modifyProduct", modifyProduct);

  app.use("/encrypt", encrypt);
  app.use("/decrypt", decrypt);
};

module.exports = routes;
