const validPassword = (req, res, next) => {
    const errors = {
      message : "validaltion error",
      invalid : []
    }
    if ((req.body.password).length > 7)
    next ()
    else {
        errors.invalid.push("password, password must be  minimum 8 characters")
      return res.status(400).json(errors)
    }
}
export default  validPassword