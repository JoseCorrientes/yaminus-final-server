const sqlText = [
  `
    UPDATE
    products
    SET 
    descripcion=$2,
    listaDePrecios=$3,
    imagen=$4,
    productoParaLaVenta=$5,
    porcentajeIva=$6
    WHERE codigo=$1

    `,
];

module.exports = sqlText;
