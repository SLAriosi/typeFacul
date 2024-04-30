import { Router } from 'express'

import usuariosRouter from './usuarios'

const routes = Router()

routes.use('/usuarios', usuariosRouter)

export default routes
