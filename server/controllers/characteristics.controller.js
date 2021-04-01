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
    const { characteristic } = req.body
    const query = `insert into characteristics (characteristic) values ("${characteristic}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addCharacteristic", results))
    })
}

async function deleteCharacteristic(req, res) {
    const { id } = req.params
    const query = `delete from characteristics where id_characteristic = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteCharacteristic", results))
    })
}

async function editCharacteristic(req, res) {
    const { id } = req.params
    const { characteristic } = req.body
    let set = []
    if (characteristic) {
        set.push(`characteristic = "${characteristic}"`) 
    }
    const query = `update characteristics set ${set.join()} where id_characteristic = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editCharacteristic", results))
    })
}


module.exports = { getCharacteristics, addCharacteristic, deleteCharacteristic, editCharacteristic}