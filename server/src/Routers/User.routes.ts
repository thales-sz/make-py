import express from 'express'
import { UserController } from '../Controllers'
import ValidationMiddleware from '../Middleware/validation.middleware'

const router = express.Router()

const validationMiddleware = new ValidationMiddleware()

router.get('/', async (req, res, next) => await new UserController(req, res, next).get())
router.get('/:id', async (req, res, next) => await new UserController(req, res, next).getById())
router.post('/signin', validationMiddleware.userSignIn, async (req, res, next) => await new UserController(req, res, next).signin())
router.post('/signup', validationMiddleware.userSignUp, async (req, res, next) => await new UserController(req, res, next).signup())

export default router
