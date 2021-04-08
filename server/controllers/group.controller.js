const con = require("../connection")
const messages = require("../messages")

async function getGroups(req, res) {
    const query = "select * from mydb.groups;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getGroups", results))
    })
}

async function addGroup(req, res) {
    const { name } = req.body
    const query = `insert into mydb.groups (name) values ("${name}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addGroup", results))
    })
}

async function deleteGroup(req, res) {
    const { id } = req.params
    const query = `delete from mydb.groups where id_group = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteGroup", results))
    })
}

async function editGroup(req, res) {
    const { id } = req.params
    const { name } = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`) 
    }
    const query = `update mydb.groups set ${set.join()} where id_group = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editGroup", results))
    })
}


module.exports = { getGroups, addGroup, deleteGroup, editGroup}