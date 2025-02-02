

exports.auth = (req, res, next) => {

    try {
        console.log("request: ", req)

        const token = req.header('Authorization').replace(`Bearer `, '')
        console.log("token: ", token)
        next()

    }
    catch (error) {

        console.error(error);
        res.status(401).send({ error: 'Not authorized to access this resource' });
    }

}


// const jwt = require('jsonwebtoken');
// const { User } = require('./models/blog.model');

// const auth = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '');
//     const data = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({
//       _id: data._id,
//       'tokens.token': token
//     });
//     if (!user) {
//       throw new Error();
//     }
//     req.user = user;
//     req.token = token;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).send({ error: 'Not authorized to access this resource' });
//   }
// };

// module.exports = auth
