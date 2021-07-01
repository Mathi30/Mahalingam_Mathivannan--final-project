 
  const emailExist = ( email) => { 
    const isEmailExist = users.find(findEntry => findEntry.email == email) 
    return isEmailExist
  }