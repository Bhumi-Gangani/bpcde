require("../db/conn")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const signup = async (req, res) => {
    let { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ status: 400, "message": "Please fill all the data!" })
    }

    try {
        let userFound = await User.findOne({ email: email });
        if (userFound) {
            return res.status(422).send({ status: 400, "message": "User already exists!" })
        }

        let newUser = new User({
            email,
            password: await bcrypt.hash(password, 10)
        })

        let userRegistered = await newUser.save()
        if (userRegistered) {
            res.status(201).send({ status: 201, "message": "User registered successfully!", "data": userRegistered })
        }

    }
    catch (error) {
        res.status(500).send({ status: 500, "message": "Error while finding user existance!", "error": error })
    }
}

module.exports = { signup }