const con = require("../connection")
const messages = require("../messages")

async function getCharacteristics(req, res) {
    const query = "select * from characteristics;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getCharacteristics", results))
    })
}

async function addCharacteristic(req, res) {
    const { characteristic, idGroup} = req.body
    const query = `insert into characteristics (characteristic, id_group) values ("${characteristic}", "${idGroup}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addCharacteristic", results))
    })
}

async function deleteCharacteristic(req, res) {
    const { id } = req.params
    const query = `delete from characteristics where id_characteristics = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteCharacteristic", results))
    })
}

async function editCharacteristic(req, res) {
    const { id } = req.params
    const { characteristic, idGroup } = req.body
    let set = []
    if (characteristic) {
        set.push(`characteristic = "${characteristic}"`) 
    }
    if (idGroup) {
        set.push(`id_group = "${idGroup}"`) 
    }
    const query = `update characteristics set ${set.join()} where id_characteristics = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editCharacteristic", results))
    })
}


module.exports = { getCharacteristics, addCharacteristic, deleteCharacteristic, editCharacteristic}