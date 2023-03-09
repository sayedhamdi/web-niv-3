import { Router }from 'express'
import {login,signUp,verifyAccount} from '../controllers/auth.js'
const router = Router()


router.post("/login",login)
router.post("/signup",signUp)
router.post("/verifyAccount",verifyAccount)


export default router;