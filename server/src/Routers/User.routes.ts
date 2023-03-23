import express from 'express'
import UserController from '../Controllers/User.controller'

const router = express.Router()

router.get('/', async (req, res, next) => await new UserController(req, res, next).get())

export default router
