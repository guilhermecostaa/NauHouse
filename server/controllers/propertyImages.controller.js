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
    const { idProperty,  idImage} = req.body
    const query = `insert into property_images (id_property, id_images) values ("${idProperty}", "${idImage}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addPropertyImage", results))
    })
}

async function deletePropertyImage(req, res) {
    const { id } = req.params
    const query = `delete from property_images where id_images = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deletePropertyImage", results))
    })
}

async function editPropertyImage(req, res) {
    const { id } = req.params
    const { idProperty, idImage } = req.body
    let set = []
    if (idProperty) {
        set.push(`id_property = "${idProperty}"`) 
    }
    if (idImage) {
        set.push(`id_images = "${idImage}"`) 
    }
    const query = `update property_images set ${set.join()} where id_images = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editPropertyImage", results))
    })
}


module.exports = { getPropertyImages, addPropertyImage, deletePropertyImage, editPropertyImage}