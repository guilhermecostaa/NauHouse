const con = require("../connection")
const messages = require("../messages")

async function getPurposes(req, res) {
    const query = "select * from purpose;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getPurposes", results))
    })
}

async function addPurpose(req, res) {
    const { name } = req.body
    const query = `insert into purpose (name) values ("${name}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addPurpose", results))
    })
}

async function deletePurpose(req, res) {
    const { id } = req.params
    const query = `delete from purpose where id_purpose = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deletePurpose", results))
    })
}

async function editPurpose(req, res) {
    const { id } = req.params
    const { name } = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`) 
    }
    const query = `update purpose set ${set.join()} where id_purpose = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editPurpose", results))
    })
}


module.exports = { getPurposes, addPurpose, deletePurpose, editPurpose}