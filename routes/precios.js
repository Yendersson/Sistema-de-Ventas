import express from "express";
import precios from "../controllers/precios.js";

const routerPrecios = express.Router();

routerPrecios.get('/', precios.selectPrecios);

export default routerPrecios;