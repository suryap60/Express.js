import express from 'express'
import signUp from '../components/routes.js'
import {login} from '../components/routes.js'

const route = express.Router()

route.get('/:id',signUp) 
route.get('/',login) 

export default route
