const validEmail = (req, res, next) => {
    const errors = {
      message : "validaltion error",
      invalid : []
    }
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  
    const isEmail = validateEmail(req.body.email)
    if (isEmail) {
      next ()
    } else {
      errors.invalid.push("email, must be a vlaid email address")
      return res.status(400).json(errors)
    }
  }
  export default validEmail