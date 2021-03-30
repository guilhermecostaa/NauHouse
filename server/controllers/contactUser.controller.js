const con = require("../connection")
const messages = require("../messages")

async function getContactUser(req, res) {
    const query = "select * from contact_user;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getContactUser", results))
    })
}

async function addContactUser(req, res) {
    const { id_event, id_user } = req.body
    const query = `insert into contact_user (id_contact, id_user) values ("${id_contact}", "${id_user}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addContactUser", results))
    })
}
async function deleteContactUser(req, res) {
    const { id } = req.params
    const query = `delete from contact_user where id_contact = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteContactUser", results))
    })
}

async function editContactUser(req, res) {
    const { id } = req.params
    const { id_contact, id_user } = req.body
    let set = []
    if (id_contact) {
        set.push(`id_contact = "${id_contact}"`) 
    }
    if (id_user) {
        set.push(`id_user = "${id_user}"`) 
    }
    const query = `update contact_user set ${set.join()} where id_contact = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editContactUser", results))
    })
}


module.exports = { getContactUser, addContactUser, deleteContactUser, editContactUser}