const db = require('../models');
const User = db.users

const signup = async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.status(201).json({ status: "success", data })
    }
    catch (err) {
        res.status(500).json({ status: "fail", message: err })
    }
}

const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        // const phno = req.body.phno;
        // if (email !== undefined || phno !== undefined) {
        const data = await User.findOne({ where: { email: email } });
        console.log(data);
        if (data) {
            if (password === data.password) {
                res.status(200).json({ status: "success", data })
                
            }
            else {
                res.status(200).json({ status: "fail", message: "Incorrect Password" })
            }
        }
        else {
            res.status(500).json({ status: "fail", message: "No user found" })
        }

    }




    // }
    catch (err) {
        res.status(500).json({ status: "fail", message: err })
    }
}
module.exports = { signup, login };