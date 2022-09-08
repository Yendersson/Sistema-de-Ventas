import connectionDB from "../mysql/connectionDB.js";
import precios from "./precios.js";

// ALL PRODUCTS
const selectAll = (req,res)=>{

    let {nombre} = req.query;

    if(nombre){
        connectionDB.con.query(`SELECT * FROM PRODUCTO WHERE NOMBRE like '%${nombre}%'`, (error, results, fields) => {
            if(error) throw error;
            res.json(results);
        })    
    }else{

        connectionDB.con.query("SELECT * FROM PRODUCTO", (error, results, fields) => {
            if(error) throw error;
            res.json(results);
        })
    }
}

// PRODUCTS FOR CATEGORY

const selectCategory = (req, res) => {
    // let {categoria} = req.query; /*select con el nombre de la categotia*/ 
    let {categoria, marca, nombre} = req.query;
         
        if(categoria && marca && nombre){
            const mysqlQuery = `SELECT * FROM PRODUCTO WHERE CATEGORIA = ? AND MARCA = ? AND NOMBRE like '%${nombre}%'` ;
            connectionDB.con.query(mysqlQuery, [categoria,marca], (error, results, fields)=>{
                if(error) throw error;
                res.json(results);
            })  
        }else if(categoria && marca){
            const mysqlQuery = "SELECT * FROM PRODUCTO WHERE CATEGORIA = ? AND MARCA = ?";
            connectionDB.con.query(mysqlQuery, [categoria,marca], (error, results, fields)=>{
                if(error) throw error;
                res.json(results);
            })
        }else if(categoria){
            const mysqlQuery = "SELECT * FROM PRODUCTO WHERE CATEGORIA = ?";
            connectionDB.con.query(mysqlQuery, [categoria], (error, results, fields)=>{
                if(error) throw error;
                res.json(results);
            })
        }else{
            const mysqlQuery = "SELECT DISTINCT CATEGORIA FROM PRODUCTO";
            connectionDB.con.query(mysqlQuery, (error, results, fields)=>{
                if(error) throw error;
                res.json(results);
            })
        }
}

const insertProducto = (req,res) => {
    let {NOMBRE, MARCA, COSTO_ACT, CATEGORIA, STOCK} = req.body;

    const insertQuery = `INSERT INTO PRODUCTO(NOMBRE, MARCA, COSTO_ACT, CATEGORIA, STOCK) VALUES (?, ?, ?, ?, ?)`;
    connectionDB.con.query(insertQuery, [NOMBRE, MARCA, COSTO_ACT, CATEGORIA, STOCK], (error, results, fields) => {
        if(error) throw error;
        res.json(results);
    })
}

const updateProducto = (req, res) => {
    let {id} = req.query
    let {COSTO_ACT} = req.body;

    const updateQuery = `UPDATE PRODUCTO SET COSTO_ACT = ? WHERE COD_PRODUCTO = ?`;
    connectionDB.con.query(updateQuery, [COSTO_ACT, id], (error, results, fields) => {
        if(error) throw error;
        res.json(results);

        precios.updatePrecios(id, COSTO_ACT);
    })
};

const deleteProducto = (req, res) => {
    let {id} = req.query;

    const deleteQuery = `DELETE FROM PRODUCTO WHERE COD_PRODUCTO = ?`
    connectionDB.con.query(deleteQuery, [id], (error, results, fields)=>{
        if(error) throw error;
        res.json(results);
    })
}



export default {
    selectAll,
    selectCategory,
    insertProducto,
    updateProducto,
    deleteProducto
}