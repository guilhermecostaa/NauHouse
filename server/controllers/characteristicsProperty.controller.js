const con = require("../connection")
const messages = require("../messages")

async function getAllCharacteristicsProperty(req, res) {
    const query = `select * from characteristics_property;`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getCharacteristicsProperty", results))
    })
}


async function getCharacteristicsProperty(req, res) {
    const { id } = req.params
    const query = `select * from characteristics_property where id_property = ${id};`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getCharacteristicsProperty", results))
    })
}

async function addCharacteristicProperty(req, res) {
    const { idCharacteristics, idProperty } = req.body
    const query = `insert into characteristics_property (id_characteristics, id_property) values ("${idCharacteristics}", "${idProperty}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addCharacteristicProperty", results))
    })
}

async function deleteCharacteristicProperty(req, res) {
    const { id } = req.params
    const query = `delete from characteristics_property where id_characteristics = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteCharacteristicProperty", results))
    })
}

async function editCharacteristicProperty(req, res) {
    const { id } = req.params
    const { idCharacteristic, idProperty } = req.body
    let set = []
    if (idCharacteristic) {
        set.push(`id_characteristics = "${idCharacteristic}"`) 
    }
    if (idProperty) {
        set.push(`id_property = "${idProperty}"`) 
    }
    const query = `update characteristics_property set ${set.join()} where id_characteristics = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editCharacteristicProperty", results))
    })
}


module.exports = { getAllCharacteristicsProperty, getCharacteristicsProperty, addCharacteristicProperty, deleteCharacteristicProperty, editCharacteristicProperty}