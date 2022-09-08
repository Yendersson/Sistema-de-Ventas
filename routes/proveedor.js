import express from 'express';
import proveedor from '../controllers/proveedor.js';

const routerProveedor = express.Router();

routerProveedor.get('/', proveedor.selectProveedores);

export default routerProveedor;