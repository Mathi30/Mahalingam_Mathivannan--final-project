import dotenv from 'dotenv'
dotenv.config()
import express from "express";
// import users from '../../data/users.js'
import createHash from '../createHash.js'
import compareHash from '../compareHash.js'
import jwtCreate from '../../lib/middleware/jwtCreate.js'
import { readFileModule }  from '../../src/ReadWriteModule.js'
import path from 'path'

const userFileLocation = process.env.UsersDbLocation
let ishashValid = false
let isEmailExist = false
const userfilePath = path.resolve(userFileLocation)

const authUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    let usersDataList = await readFileModule(userfilePath) 
    const itemIndex = usersDataList.findIndex(findEntry => findEntry.email == email)
    // if users exist in database
    if (itemIndex !== -1) {
        isEmailExist =true
        const hashOld = usersDataList[itemIndex].password
        await compareHash(password, hashOld).then(valid => {
              ishashValid = valid
          })
    }
    try { 
      //  if email and password are correct
      if (isEmailExist && ishashValid) {
          const token =jwtCreate(email)
          isEmailExist =false
          ishashValid =false
          return res.status(201).json({token});
      }
        //  if email and password are not correct
      else { 
          return res.status(401).json({message: "incorrect  credentials provided"})
      }
    } catch (err) {
      // throw err
      next (err)
    } 
}
  export default authUser