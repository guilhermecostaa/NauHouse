const con = require("../connection")
const messages = require("../messages")

async function getPropertyImages(req, res) {
    const query = "select * from property_images;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getPropertyImages", results))
    })
}

async function addPropertyImage(req, res) {
    const { id_property,  id_image} = req.body
    const query = `insert into property_images (id_property, id_image) values ("${id_property}", "${id_image}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addPropertyImage", results))
    })
}

async function deletePropertyImage(req, res) {
    const { id } = req.params
    const query = `delete from property_images where id_image = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deletePropertyImage", results))
    })
}

async function editPropertyImage(req, res) {
    const { id } = req.params
    const { id_property, id_image } = req.body
    let set = []
    if (id_property) {
        set.push(`id_property = "${id_property}"`) 
    }
    if (id_image) {
        set.push(`id_image = "${id_image}"`) 
    }
    const query = `update property_images set ${set.join()} where id_image = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editPropertyImage", results))
    })
}


module.exports = { getPropertyImages, addPropertyImage, deletePropertyImage, editPropertyImage}