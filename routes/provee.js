import express from 'express';
import provee from '../controllers/provee.js';

const routerProvee = express.Router();

routerProvee.get('/', provee.selectProvee);

export default routerProvee;
