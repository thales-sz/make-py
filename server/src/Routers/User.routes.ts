import express from 'express'
import { UserController } from '../Controllers'

const router = express.Router()

router.get('/', async (req, res, next) => await new UserController(req, res, next).get())
router.post('/', async (req, res, next) => await new UserController(req, res, next).create())

export default router
