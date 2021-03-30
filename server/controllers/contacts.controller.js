const con = require("../connection")
const messages = require("../messages")

async function getContacts(req, res) {
    const query = "select * from contacts;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getContacts", results))
    })
}

async function addContact(req, res) {
    const { name, number, desc, status } = req.body
    const query = `insert into contacts (name, number, desc, status) values ("${name}", "${number}", "${desc}", "${status}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addContact", results))
    })
}

async function deleteContact(req, res) {
    const { id } = req.params
    const query = `delete from contacts where id_contact = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteContact", results))
    })
}

async function editContact(req, res) {
    const { id } = req.params
    const { name, number, desc, status } = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`) 
    }
    if (number) {
        set.push(`number = "${number}"`) 
    }
    if (desc) {
        set.push(`desc = "${desc}"`) 
    }
    if (status) {
        set.push(`status = "${status}"`) 
    }
    const query = `update contacts set ${set.join()} where id_contact = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editContact", results))
    })
}


module.exports = { getContacts, addContact, deleteContact, editContact}