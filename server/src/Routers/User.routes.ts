import express from 'express'
import { UserController } from '../Controllers'

const router = express.Router()

router.get('/', async (req, res, next) => await new UserController(req, res, next).get())
router.post('/', async (req, res, next) => await new UserController(req, res, next).create())
router.get('/:id', async (req, res, next) => await new UserController(req, res, next).getById())
router.post('/signin', async (req, res, next) => await new UserController(req, res, next).signin())
router.post('/signup', async (req, res, next) => await new UserController(req, res, next).signup())

export default router
