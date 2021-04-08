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
    const { idContact, idUser } = req.body
    const query = `insert into contact_user (id_contact, id_user) values ("${idContact}", "${idUser}")`
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
    const { idContact, idUser } = req.body
    let set = []
    if (idContact) {
        set.push(`id_contact = "${idContact}"`) 
    }
    if (idUser) {
        set.push(`id_user = "${idUser}"`) 
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