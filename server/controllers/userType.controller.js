const con = require("../connection")
const messages = require("../messages")

async function getUserType(req, res) {
    const query = "select * from user_type;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getUserType", results))
    })
}

async function addUserType(req, res) {
    const { userType } = req.body
    const query = `insert into user_type (user_type) values ("${userType}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addUserType", results))
    })
}

async function deleteUserType(req, res) {
    const { id } = req.params
    const query = `delete from user_type where id_user_type = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteUserType", results))
    })
}

async function editUserType(req, res) {
    const { id } = req.params
    const { userType } = req.body
    let set = []
    if (userType) {
        set.push(`user_type = "${userType}"`) 
    }
    const query = `update user_type set ${set.join()} where id_user_type = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editUserType", results))
    })
}


module.exports = { getUserType, addUserType, deleteUserType, editUserType}