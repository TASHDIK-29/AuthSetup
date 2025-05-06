
const bcrypt = require('bcryptjs');
const client = require('../connect')
const usersCollection = client.db("UAP-Hackathon").collection("users");

// Post a new book
const userRegister = async (req, res) => {
    const user = req.body;

    console.log(user);

    const query = { email: user.email };
    const existingUser = await usersCollection.findOne(query);
    if (existingUser) {
        return res.send({ message: 'user already exist!', insertedId: null })
    }

    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)

    const userInfo = {
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
    }
    const result = await usersCollection.insertOne(userInfo);

    res.send(result);
};


module.exports = {
    userRegister
}