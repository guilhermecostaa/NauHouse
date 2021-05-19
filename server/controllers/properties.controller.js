const con = require("../connection")
const messages = require("../messages")
let properties = []

async function getProperties(req, res) {
    const query = "select * from property;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getProperties", results))
    })
}

async function getPropertiesById(req, res) {
    const { id } = req.params
    const query = `select * from property where id_property = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getPropertiesById", results))
    })
}

async function getPropertiesByUser(req, res) {
    const { id } = req.params
    const query = `select * from property where consultant_id = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        properties = results
        for (let i = 0; i < properties.length; i++) {
            const id = properties[i].id_property
            const query2 = `select * from area where id_property = ${id}`
            con.query(query2, (err, results2, fields) => {
                if (err) {
                    return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                }
                res.send(messages.getSuccess("getPropertiesByUser", results2))
            })   
        }
    })
}

async function addProperty(req, res) {
    const { idProperty, title, subtitle, desc, district, county, address, postalCode, idCategory, idPurpose, price, idShape,
        habitation, bathrooms, suites, room, closedGarage, parking, consultantId, idEnergeticEfficiency, idStatus,
        video, usableArea, landArea, constructionGrossArea, implementationArea } = req.body
    const query = `insert into property (id_property, title, subtitle, description, district, county, address, postal_code, id_category,
                    id_purpose, price, id_shape, habitation, bathrooms, suites, room, closed_garage, parking, consultant_id,
                    id_energetic_efficiency, id_status, video) values ("${idProperty}", "${title}", "${subtitle}", "${desc}", "${district}",
                    "${county}", "${address}", "${postalCode}", "${idCategory}", "${idPurpose}", "${price}","${idShape}", 
                    "${habitation}", "${bathrooms}", "${suites}", "${room}", "${closedGarage}", "${parking}", "${consultantId}",
                    "${idEnergeticEfficiency}","${idStatus}", "${video}")`
    const queryArea = `insert into area (id_property, usable_area, land_area, construction_gross_area, implementation_area) values
                    ("${idProperty}", "${usableArea}", "${landArea}", "${constructionGrossArea}", "${implementationArea}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        con.query(queryArea, (err, results, fields) => {
            if (err) {
                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
            }
            res.send(messages.getSuccess("addProperty", results))
        }
        )
    })
}

async function deleteProperty(req, res) {
    const { id } = req.params
    const query = `delete from property where id_property = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteProperty", results))
    })
}

async function editProperty(req, res) {
    const { id } = req.params
    const { id_property, title, subtitle, desc, district, county, address, postalCode, idCategory, idPurpose, price, idShape,
        habitation, bathrooms, suites, room, closedGarage, parking, consultantId, idEnergeticEfficiency, idStatus,
        video, usableArea, landArea, constructionGrossArea, implementationArea } = req.body
    let set = []
    let setArea = []
    if (id_property) {
        set.push(`id_property = "${id_property}"`)
    }
    if (title) {
        set.push(`title = "${title}"`)
    }
    if (subtitle) {
        set.push(`subtitle = "${subtitle}"`)
    }
    if (desc) {
        set.push(`description = "${desc}"`)
    }
    if (district) {
        set.push(`district = "${district}"`)
    }
    if (county) {
        set.push(`county = "${county}"`)
    }
    if (address) {
        set.push(`address = "${address}"`)
    }
    if (postalCode) {
        set.push(`postal_code = "${postalCode}"`)
    }
    if (idCategory) {
        set.push(`id_category = "${idCategory}"`)
    }
    if (idPurpose) {
        set.push(`id_purpose = "${idPurpose}"`)
    }
    if (price) {
        set.push(`price = "${price}"`)
    }
    if (idShape) {
        set.push(`id_shape = "${idShape}"`)
    }
    if (habitation) {
        set.push(`habitation = "${habitation}"`)
    }
    if (bathrooms) {
        set.push(`bathrooms = "${bathrooms}"`)
    }
    if (suites) {
        set.push(`suites = "${suites}"`)
    }
    if (room) {
        set.push(`room = "${room}"`)
    }
    if (closedGarage) {
        set.push(`closed_garage = "${closedGarage}"`)
    }
    if (parking) {
        set.push(`parking = "${parking}"`)
    }
    if (consultantId) {
        set.push(`consultant_id = "${consultantId}"`)
    }
    if (idEnergeticEfficiency) {
        set.push(`id_energetic_efficiency = "${idEnergeticEfficiency}"`)
    }
    if (idStatus) {
        set.push(`id_status = "${idStatus}"`)
    }
    if (video) {
        set.push(`video = "${video}"`)
    }
    //Area
    if (usableArea) {
        setArea.push(`usable_area = "${usableArea}"`)
    }
    if (landArea) {
        setArea.push(`land_area = "${landArea}"`)
    }
    if (constructionGrossArea) {
        setArea.push(`construction_gross_area = "${constructionGrossArea}"`)
    }
    if (implementationArea) {
        setArea.push(`implementation_area = "${implementationArea}"`)
    }
    const query = `update property set ${set.join()} where id_property = ${id}`
    const queryArea = `update area set ${setArea.join()} where id_property = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        con.query(queryArea, (err, results, fields) => {
            if (err) {
                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
            }
            res.send(messages.getSuccess("editProperty", results))
        })
    })
}


module.exports = { getProperties, getPropertiesById, getPropertiesByUser, addProperty, deleteProperty, editProperty }