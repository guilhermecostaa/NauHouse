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
    const { Title, Desc, Image } = req.body
    const query = `insert into news(title, description, image) values ("${Title}", "${Desc}", "${Image}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addNew", results))
    })
}

async function deleteNew(req, res) {
    const { id } = req.params
    const query = `delete from news where id_news = ${id}`
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
        set.push(`description = "${desc}"`) 
    }
    if (image) {
        set.push(`image = "${image}"`) 
    }
    const query = `update news set ${set.join()} where id_news = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editNew", results))
    })
}


module.exports = { getNews, addNew, deleteNew, editNew}