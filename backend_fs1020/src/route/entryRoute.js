import express from "express";
const router = express.Router();
const app = express()
import validEmail from '../../lib/middleware/validEmail.js'
import validPassword from '../../lib/middleware/validPassword.js'
import  validateToken from "../../lib/middleware/jwtVerify.js"
import  userFieldValidation from "../../lib/middleware/uservalidation.js"
import formFieldValidation from '../../lib/middleware/formvalidation.js'
import { getEntry } from '../controllers/entryRouteController.js'
import { getEntryById } from '../controllers/entryRouteController.js'
import { createEntry } from '../controllers/entryRouteController.js'


router.post('/', formFieldValidation, validEmail, createEntry);
router.get('/', validateToken, getEntry); 
router.get('/:id', validateToken, getEntryById);

export default router;
