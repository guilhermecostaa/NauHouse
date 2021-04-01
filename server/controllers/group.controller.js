const con = require("../connection")
const messages = require("../messages")

async function getGroups(req, res) {
    const query = "select * from groups;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getGroups", results))
    })
}

async function addGroup(req, res) {
    const { group } = req.body
    const query = `insert into group (group) values ("${group}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addGroup", results))
    })
}

async function deleteGroup(req, res) {
    const { id } = req.params
    const query = `delete from group where id_group = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteGroup", results))
    })
}

async function editGroup(req, res) {
    const { id } = req.params
    const { group } = req.body
    let set = []
    if (group) {
        set.push(`group = "${group}"`) 
    }
    const query = `update group set ${set.join()} where id_group = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editGroup", results))
    })
}


module.exports = { getGroups, addGroup, deleteGroup, editGroup}