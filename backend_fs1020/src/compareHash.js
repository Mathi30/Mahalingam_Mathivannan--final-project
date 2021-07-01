import bcrypt from "bcrypt"

let compareHash = async (password, hash) => {
    try {
      const match = await bcrypt.compare(password, hash);
      return match;
    } catch (err) {
      // console.error(err)
    }
  }
export default compareHash

