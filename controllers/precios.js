import connectionDB from "../mysql/connectionDB.js";

// HISTORIAL DE PRECIOS
const selectPrecios = (req,res) => {

    const consultQuery = `SELECT HISTORIAL_COSTOS.COD_PRODUCTO, PRODUCTO.NOMBRE, PRODUCTO.MARCA, PRODUCTO.CATEGORIA, PRECIOS.PRECIO, HISTORIAL_COSTOS.FECHA
    FROM HISTORIAL_COSTOS
    INNER JOIN PRODUCTO ON PRODUCTO.COD_PRODUCTO = HISTORIAL_COSTOS.COD_PRODUCTO
    INNER JOIN PRECIOS ON PRECIOS.ID_PRECIO = HISTORIAL_COSTOS.ID_PRECIO;` 

    connectionDB.con.query(consultQuery, (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    })
}

const updatePrecios = (id, costo_Nuevo) => {
        
        const updateQuery = `INSERT INTO PRECIOS(PRECIO) VALUES(?)`;
        connectionDB.con.query(updateQuery, [costo_Nuevo], (error, results, fields) => {
            if(error) throw error;
            console.log(results)
        })
        
    
}


export default {
    selectPrecios,
    updatePrecios

}