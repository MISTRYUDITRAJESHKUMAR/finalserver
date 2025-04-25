


const registeruser = async (req, res) => {
    //get data

    //validate  
    //chack if user alredy exist 
    //create user in db
    //create a verification token
    // save a token in db

    //send token as email to user 

    //succsess mesege to user
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }
}



export { registeruser }
