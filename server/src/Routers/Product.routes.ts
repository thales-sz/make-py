import express from 'express'
import { ProductController } from '../Controllers'

const router = express.Router()

router.get('/', async (req, res, next) => await new ProductController(req, res, next).getAll())
router.get('/:id', async (req, res, next) => await new ProductController(req, res, next).getById())

export default router
