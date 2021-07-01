const formFieldValidation = (req, res, next) => {
    const errors = {
      message : "validaltion error",
      invalid : []
    }
  
    if (req.body.name == null) {
        errors.invalid.push("name")
    }
    if ( req.body.email == null ){
      errors.invalid.push("email")
    }
    if ( req.body.phoneNumber == null ){
      errors.invalid.push("phoneNumber")
    }
    if ( (errors.invalid).length > 0) {
      console.log(errors);
      return res.status(400).json(errors)
    }
    next()
  }
export default formFieldValidation
