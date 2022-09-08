import express from 'express';

import Db from './mysql/connectionDB.js';


// routes
import router from './routes/selects.js';
import routerProveedor from './routes/proveedor.js';
import routerProvee from './routes/provee.js';
import routerPrecios from './routes/precios.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get('/', (req,res) => {
//     res.send('SERVIDOR EXPRESS FUNCIONANDO BIEN');
// }) 

app.use('/productos', router);
app.use('/proveedores', routerProveedor);
app.use('/provee', routerProvee);
app.use('/precios', routerPrecios);

// connect to database
Db.conexion();



const PORT = 8080;

const server = app.listen(PORT, ()=>console.log('servidor express listening on PORT', PORT));
server.on('error', (error)=> console.log('ERROR ON SERVIDOR EXPRESS', error.message));