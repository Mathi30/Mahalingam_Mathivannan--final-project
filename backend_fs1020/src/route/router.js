import dotenv from 'dotenv'
dotenv.config()

import express from "express";
const router = express.Router();
const app = express()
  

// Catach all route for routes doesn't exist
router.get("*", (req, res, next) => {
  console.log( 'get all route')
    let err = new Error('typed wrong URL');
    next(err)
})
export default router;