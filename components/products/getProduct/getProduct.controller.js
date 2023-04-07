const newPool = require("../../../database/database");
const sqlText = require("./getProduct.sql");

async function getProductController() {
  try {
    const result = await newPool.query(sqlText[0], []);
    return result.rows;
  } catch (e) {
    return `Error ${e}`;
  }
}

module.exports = getProductController;
