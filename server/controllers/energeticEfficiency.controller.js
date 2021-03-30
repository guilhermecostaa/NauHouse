const con = require("../connection")
const messages = require("../messages")

async function getEnergeticEfficiency(req, res) {
    const query = "select * from energetic_efficiency;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getEnergeticEfficiency", results))
    })
}

async function addEnergeticEfficiency(req, res) {
    const { value } = req.body
    const query = `insert into energetic_efficiency (value) values ("${value}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addEnergeticEfficiency", results))
    })
}

async function deleteEnergeticEfficiency(req, res) {
    const { id } = req.params
    const query = `delete from energetic_efficiency where id_energetic_efficiency = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteEnergeticEfficiency", results))
    })
}

async function editEnergeticEfficiency(req, res) {
    const { id } = req.params
    const { value } = req.body
    let set = []
    if (value) {
        set.push(`value = "${value}"`) 
    }
    const query = `update energetic_efficiency set ${set.join()} where id_energetic_efficiency = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editEnergeticEfficiency", results))
    })
}


module.exports = { getEnergeticEfficiency, addEnergeticEfficiency, deleteEnergeticEfficiency, editEnergeticEfficiency}