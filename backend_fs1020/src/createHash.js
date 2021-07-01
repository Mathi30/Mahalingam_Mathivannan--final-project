import dotenv from 'dotenv'
dotenv.config()
import bcrypt from "bcrypt"
const saltRounds = parseInt(process.env.saltRounds)

  let createHash = async (password) => {
    try {
      const hash = await bcrypt.hash(password, saltRounds)
      return hash
    } catch (err) {
      console.log('my error');
      console.error(err)
    }
  }

  export default createHash
