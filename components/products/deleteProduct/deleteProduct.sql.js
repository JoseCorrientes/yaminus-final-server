const sqlText = [
  `
    delete
    FROM 
    products
    WHERE codigo=$1
    `,
];

module.exports = sqlText;
