import express from 'express';

import { createproduct, deleteproduct, getProducts, updateproduct } from '../controller/product.controller.js';

const router = express.Router();

router.use(express.json())

router.get("/", getProducts)

router.post("/", createproduct)

router.put("/:id", updateproduct)

router.delete("/:id", deleteproduct)

export default router;