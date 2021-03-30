const con = require("../connection")
const messages = require("../messages")

async function getNews(req, res) {
    const query = "select * from news;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getNews", results))
    })
}

async function addNew(req, res) {
    const { title, desc, image } = req.body
    const query = `insert into news (title, desc, image) values ("${title}", "${desc}", "${image}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addNew", results))
    })
}

async function deleteNew(req, res) {
    const { id } = req.params
    const query = `delete from news where id_new = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteNew", results))
    })
}

async function editNew(req, res) {
    const { id } = req.params
    const { title, desc, image } = req.body
    let set = []
    if (title) {
        set.push(`title = "${title}"`) 
    }
    if (desc) {
        set.push(`desc = "${desc}"`) 
    }
    if (image) {
        set.push(`image = "${image}"`) 
    }
    const query = `update news set ${set.join()} where id_new = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editNew", results))
    })
}


module.exports = { getNews, addNew, deleteNew, editNew}