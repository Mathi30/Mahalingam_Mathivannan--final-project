import express from "express";
import { v4 as uuidv4 } from "uuid" 
import createHash from '../createHash.js'
// import users from '../../data/users.js'
import {addJosnData, readFileModule, writeFileModule}from '../../src/ReadWriteModule.js'
import path from 'path'
const userFileLocation = process.env.UsersDbLocation
import dotenv from 'dotenv'
dotenv.config()


const userfilePath = path.resolve(userFileLocation)

const createUser = async (req, res) => {
    let password =  req.body.password
    try {
      let newUserHashed = {
        id: uuidv4(),
        name:  req.body.name,
        email: req.body.email
      }
      let usersDataList = await readFileModule(userfilePath) 
      const isEmailExist = usersDataList.find(findEntry => findEntry.email == req.body.email) 
          const errors =[]
        if (!isEmailExist) {
            await createHash(password).then(hash =>{  
            newUserHashed.password =  hash
            addJosnData(userfilePath, newUserHashed)
            // console.log(`bcrypt: ${hash}`)
            // console.log(newUserHashed);
            })
            let  newUser = {
                  id: newUserHashed.id, 
                  name: newUserHashed.name, 
                  email: newUserHashed.email
                }
           return res.status(201).json(newUser);   
          }
          else
          {
            errors.push (`user with email ${req.body.email} exist in the database`)
            return res.status(400).json({message: errors})
          } 
      } catch (err) {
        throw err
        // next(err)
      }
}
  
const getUser = async (req, res) => {
    try {
      return res.send(await readFileModule(userfilePath))
    } catch (err) {
      throw err
      //  next(err)
    }
}
export {createUser, getUser}
