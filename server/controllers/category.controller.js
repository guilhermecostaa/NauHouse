const con = require("../connection")
const messages = require("../messages")

async function getCategories(req, res) {
    const query = "select * from category;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getCategories", results))
    })
}

async function addCategory(req, res) {
    const { name } = req.body
    const query = `insert into category (name) values ("${name}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addCategory", results))
    })
}

async function deleteCategory(req, res) {
    const { id } = req.params
    const query = `delete from category where id_category = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteCategory", results))
    })
}

async function editCategory(req, res) {
    const { id } = req.params
    const { name } = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`) 
    }
    const query = `update category set ${set.join()} where id_category = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editCategory", results))
    })
}


module.exports = { getCategories, addCategory, deleteCategory, editCategory}