const con = require("../connection")
const messages = require("../messages")

async function getStatus(req, res) {
    const query = "select * from status;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getStatus", results))
    })
}

async function addStatus(req, res) {
    const { status } = req.body
    const query = `insert into status (status) values ("${status}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addStatus", results))
    })
}

async function deleteStatus(req, res) {
    const { id } = req.params
    const query = `delete from status where id_status = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteStatus", results))
    })
}

async function editStatus(req, res) {
    const { id } = req.params
    const { status } = req.body
    let set = []
    if (status) {
        set.push(`status = "${status}"`) 
    }
    const query = `update status set ${set.join()} where id_status = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editStatus", results))
    })
}


module.exports = { getStatus, addStatus, deleteStatus, editStatus}