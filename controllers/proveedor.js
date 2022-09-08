import connectionDB from "../mysql/connectionDB.js";

// VER TODOS LOS PROVEEDORES

const selectProveedores = (req, res) => {
    let {nombre} = req.query;

    if(nombre){

        connectionDB.con.query(`SELECT * FROM PROVEEDOR WHERE NOMBRE like '%${nombre}%'`, (error, results, fields) => {
            if(error) throw error;
            res.json(results);
        })

    }else{
        connectionDB.con.query('SELECT * FROM PROVEEDOR', (error, results, fields) => {
            if(error) throw error;
            res.json(results);
        })
    }
}



export default{
    selectProveedores
}