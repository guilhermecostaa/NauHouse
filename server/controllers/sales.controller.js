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

async function getUserSalesById(req, res) {
    const { id } = req.params
    const query = `select * from sales where id_user = ${id};`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getSales", results))
    })
}

async function addSale(req, res) {
    const { idProperty, propertyValue, consultantGains, companyGains, idUser, fundraiserGains } = req.body
    const query = `insert into sales (id_property, property_value, consultant_gains, company_gains, id_user ,fundraiser_gains) values ("${idProperty}",
                    "${propertyValue}", "${consultantGains}", "${companyGains}", "${idUser}", "${fundraiserGains}")`

    const queryProperty = `update property set id_status = 10 where id_property = ${idProperty}`

    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        con.query(queryProperty, (err, results2, fields) => {
            if (err) {
                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
            }
            const queryIdBalance = `select id_balance from users where id_user = ${idUser}`
            console.log(idUser)
            con.query(queryIdBalance, (err, results3, fields) => {
                if (err) {
                    return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                }
                const queryBalance = `update balance set passive += ${consultantGains} where id_balance = ${results3[0].id_balance}`
                console.log(results3[0].id_balance)
                con.query(queryBalance, (err, results4, fields) => {
                    if (err) {
                        return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                    }
                    const queryFundraiser = `select consultant_id from property where id_property = ${idProperty}`
                    con.query(queryFundraiser, (err, results5, fields) => {
                        if (err) {
                            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                        }
                        const queryIdBalanceFundraiser = `select id_balance from users where id_user = ${results5[0].consultant_id}`
                        console.log(results5[0].consultant_id)
                        con.query(queryIdBalanceFundraiser, (err, results6, fields) => {
                            if (err) {
                                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                            }
                            const queryBalanceFundraiser = `update balance set passive += ${fundraiserGains} where id_balance = ${results6[0].id_balance}`
                            con.query(queryBalanceFundraiser, (err, results7, fields) => {
                                if (err) {
                                    return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                                }
                                res.send(messages.getSuccess("addSale", results))
                            })
                        })
                    })
                })
            })
        })
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
    const { propertyValue, consultantGains, companyGains } = req.body
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


module.exports = { getSales, getUserSalesById, addSale, deleteSale, editSale }