const con = require("../connection")
const messages = require("../messages")

async function getImages(req, res) {
    const query = "select * from images;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getImages", results))
    })
}

async function addImage(req, res) {
    const { image } = req.body
    const query = `insert into images (image) values ("${image}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addImage", results))
    })
}

async function deleteImage(req, res) {
    const { id } = req.params
    const query = `delete from images where id_images = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteImage", results))
    })
}

async function editImage(req, res) {
    const { id } = req.params
    const { image } = req.body
    let set = []
    if (image) {
        set.push(`image = "${image}"`) 
    }
    const query = `update images set ${set.join()} where id_images = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editImage", results))
    })
}


module.exports = { getImages, addImage, deleteImage, editImage}