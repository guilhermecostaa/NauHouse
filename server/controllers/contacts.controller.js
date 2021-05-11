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

async function getContactsByUserID(req, res) {
    const { id } = req.params
    const query = `select * from contacts where user_id = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getContacts", results))
    })
}

async function addContact(req, res) {
    const { name, number, desc, email, status, id} = req.body
    const query = `insert into contacts (name, number, description, status, email, user_id) values ("${name}", "${number}", "${desc}", "${status}",  "${email}", "${id}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addContact", results))
    })
}

async function deleteContact(req, res) {
    const { id } = req.params
    const query = `delete from contacts where id_contacts = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteContact", results))
    })
}

async function editContact(req, res) {
    const { id } = req.params
    const { name, email, number, desc, status } = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`) 
    }
    if (number) {
        set.push(`number = "${number}"`) 
    }
    if (email) {
        set.push(`email = "${email}"`) 
    }
    if (desc) {
        set.push(`description = "${desc}"`) 
    }
    if (status) {
        set.push(`status = "${status}"`) 
    }
    const query = `update contacts set ${set.join()} where id_contacts = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editContact", results))
    })
}


module.exports = { getContacts, getContactsByUserID, addContact, deleteContact, editContact}