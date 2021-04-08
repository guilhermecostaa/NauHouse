const con = require("../connection")
const messages = require("../messages")

async function getSales(req, res) {
    const query = "select * from sales;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getSales", results))
    })
}

async function addSale(req, res) {
    const { idProperty, propertyValue, consultantGains, companyGains } = req.body
    const query = `insert into sales (id_property, property_value, consultant_gains, company_gains) values ("${idProperty}",
                    "${propertyValue}", "${consultantGains}", "${companyGains}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addSale", results))
    })
}

async function deleteSale(req, res) {
    const { id } = req.params
    const query = `delete from sales where id_property = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteSale", results))
    })
}

async function editSale(req, res) {
    const { id } = req.params
    const { propertyValue, consultantGains, companyGains} = req.body
    let set = []
    if (propertyValue) {
        set.push(`property_value = "${propertyValue}"`) 
    }
    if (consultantGains) {
        set.push(`consultant_gains = "${consultantGains}"`) 
    }
    if (companyGains) {
        set.push(`company_gains = "${companyGains}"`) 
    }
    const query = `update sales set ${set.join()} where id_property = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editSale", results))
    })
}


module.exports = { getSales, addSale, deleteSale, editSale}