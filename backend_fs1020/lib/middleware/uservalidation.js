const userFieldValidation = (req, res, next) => {
    const errors = {
      message : "validaltion error",
      invalid : []
    }
   
    if (req.body.name == null) {
        errors.invalid.push("name")
    }
    if ( req.body.password == null ){
        errors.invalid.push("password")
    }
    if ( req.body.email == null ){
        errors.invalid.push("email")
    }
   
    if (errors.invalid.length > 0) {
      return res.status(400).json(errors)
    }
    next()
  }

export default userFieldValidation