const con = require("../connection")
const messages = require("../messages")

async function getShapes(req, res) {
    const query = "select * from shape;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getShapes", results))
    })
}

async function addShape(req, res) {
    const { shape } = req.body
    const query = `insert into shape (shape) values ("${shape}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addShape", results))
    })
}

async function deleteShape(req, res) {
    const { id } = req.params
    const query = `delete from shape where id_shape = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteShape", results))
    })
}

async function editShape(req, res) {
    const { id } = req.params
    const { shape } = req.body
    let set = []
    if (shape) {
        set.push(`shape = "${shape}"`) 
    }
    const query = `update shape set ${set.join()} where id_shape = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editShape", results))
    })
}


module.exports = { getShapes, addShape, deleteShape, editShape}