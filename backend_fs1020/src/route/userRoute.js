import express from "express";
const router = express.Router();
const app = express()
import { v4 as uuidv4 } from "uuid" 
import jwtCreate from '../../lib/middleware/jwtCreate.js'
import validEmail from '../../lib/middleware/validEmail.js'
import validPassword from '../../lib/middleware/validPassword.js'
import  userFieldValidation from "../../lib/middleware/uservalidation.js"
import { createUser, getUser}  from "../controllers/usersRouteController.js";

router.post("/", userFieldValidation, validEmail, validPassword,createUser);

// delete after only for testing
// router.get("/", getUser);

export default router;