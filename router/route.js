import express from 'express'
import routes from '../components/routes.js'

const route = express.Router()

route.use('/user',routes) 

export default route
