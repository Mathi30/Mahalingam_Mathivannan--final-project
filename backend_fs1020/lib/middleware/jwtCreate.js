import jsonwebtoken from "jsonwebtoken"
 let jwt = jsonwebtoken

// let privateKey = "shhhhh";
  
const jwtCreate = (obj) => {
  let  token = jwt.sign({obj}, process.env.privateKey, {expiresIn: '5m'});
  return token
  console.log(`the tokek is ${token}`);
}
export default jwtCreate