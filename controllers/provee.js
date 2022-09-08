import connectionDB from '../mysql/connectionDB.js';

// Mostrar la entrada de los productos
const selectProvee = (req, res) => {
    let { proveedor } = req.query;

    if (proveedor) {

        const consultaQuery = `SELECT PRODUCTO.COD_PRODUCTO, PRODUCTO.NOMBRE AS NOMBRE_PRODUCTO, PROVEEDOR.NOMBRE, PROVEE.FECHA, PROVEE.STOCK, PROVEE.COSTO_ORI AS COSTO_UNI, PROVEE.CAJAS
        FROM PROVEE
        INNER JOIN PRODUCTO ON PRODUCTO.COD_PRODUCTO = PROVEE.COD_PRODUCTO
        INNER JOIN PROVEEDOR ON PROVEEDOR.ID_PROVEEDOR = PROVEE.ID_PROVEEDOR
        WHERE PROVEEDOR.NOMBRE like '%${proveedor}%'`

        connectionDB.con.query(consultaQuery, (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        })
    } else {

        const consultaQuery = `SELECT PRODUCTO.COD_PRODUCTO, PRODUCTO.NOMBRE AS NOMBRE_PRODUCTO, PROVEEDOR.NOMBRE, PROVEE.FECHA, PROVEE.STOCK, PROVEE.COSTO_ORI AS COSTO_UNI, PROVEE.CAJAS
        FROM PROVEE
        INNER JOIN PRODUCTO ON PRODUCTO.COD_PRODUCTO = PROVEE.COD_PRODUCTO
        INNER JOIN PROVEEDOR ON PROVEEDOR.ID_PROVEEDOR = PROVEE.ID_PROVEEDOR;`
        connectionDB.con.query(consultaQuery, (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        })
    }

}


export default {
    selectProvee
};