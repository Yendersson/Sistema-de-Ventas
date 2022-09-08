import express from 'express';

import selects from '../controllers/selects.js';

const router = express.Router();

// SELECT PRODUCTOS

router.get('/', selects.selectAll);

router.get('/categoria', selects.selectCategory);

// Insertar Productos
router.post('/', selects.insertProducto);

router.put('/', selects.updateProducto);

// BORRAR PRODUCTO
router.delete('/', selects.deleteProducto);



export default router