const con = require("../connection")
const jwt = require("jsonwebtoken")
const config = require("../config")
const messages = require("../messages")
const bcrypt = require("bcrypt")

function generateToken(userId) {
    return jwt.sign({
        id: userId,
    }, config.secret, {
        expiresIn: 3600 * 24 * 7
    })
}

async function signIn(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send({ error: "Missing arguments." })
    }

    const query = `select * from users where email = "${email}"`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        if (!results.length) {
            return res.status(messages.error().status).send(messages.error("error", "User not Found"))
        }
        const user = results[0];
        //const compare = async (password) => {
        bcrypt.compare(password, user.password).then(
            function (result) {
                if (result) {
                    return res.send(messages.getSuccess("signIn", {
                        jwt: generateToken(user.id_user),
                        user
                    }))
                } else {
                    console.log(password)
                    return res.status(messages.error().status).send(messages.error("error", "Inválid password"))
                }
            }
        )
    })
}


module.exports = { signIn }