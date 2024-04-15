
const userLogs = require("../models/user.model")

exports.register = async (req, res) => {

    try {

        console.log("register")
        // console.log("request: ", req.body)

        let { email, fName, lName, password } = req.body

        let data = await userLogs.create({
            email, fName, lName, password
        })
        // console.log("data: ", data);
        console.log(`User Register successfully`);

        res.status(200).send({
            status: 0,
            message: "success",
            description: `Data save Successfully`,
            _id: data._id
        })
    }
    catch (error) {

        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}


exports.login = async (req, res) => {

    try {

        let { email, password } = req.body

        let User = await userLogs.findOne({ email })
        // console.log("User: ", User);

        if (!User) {
            return res.status(401).send({
                status: 1,
                message: "failed",
                error: 'Invalid login credentials'
            });
        }
        else {
            if (User.password === password) {
                console.log(`User login Succesfully`);
                token = User.generateAuthToken()
                console.log("token: ", token)
            }
            else {
                console.log(`please check your credential`);
            }
        }


        res.status(200).send({
            status: 0,
            message: "success",
            description: `User save Successfully`,
            data: {
                _id: User._id,
                token
            }
        })
    }
    // try {
    //     const { email, password } = req.body;
    //     const user = await User.findOne({ email: req.body.email });
    //     if (!user) {
    //       return res.status(401).send({ error: 'Invalid login credentials' });
    //     }
    //     const token = user.generateAuthToken();
    //     res.send({ token });
    //   }
    catch (error) {

        res.status(400).send({
            status: 1,
            message: "failed",
            description: error.message
        })
    }
}