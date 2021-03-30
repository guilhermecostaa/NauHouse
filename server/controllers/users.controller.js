const con = require("../connection")
const messages = require("../messages")

async function getUsers(req, res) {
    const query = "select * from users;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getUsers", results))
    })
}

async function addUser(req, res) {
    const { name, email, number, password, userType, nacionality, avatar, birthday, placeOfBirth, maritalStatus, civilId,
        validity, address, postalCode, fiscalId, niss, academicQualification, academicArea, personalContact, emergencyContact,
        employmentSituation, personalEmail, regime, schedule, nif, experience, time, agency, ownCar, actingZone, team, elements,
        acquisition, transaction, faturationVolume, anotation, idAvailability, days, availabilitySchedule, availability,
        generalMeeting, accomplishMeeting, scale, idWorkType, workType, idObjectivesUsers, mensalInvoice, mensalAcquisition,
        averageTransaction, positioningZone, mensalPublicity, flyers, publicityZone, idZone, firstZone, secondZone,
        thirdZone } = req.body

    const queryAvailability = `insert into availability (days, availability_schedule, availability, general_meeting, accomplish_meeting)
                                values("${days}", "${availabilitySchedule}", "${availability}", "${generalMeeting}", "${accomplishMeeting}", 
                                "${scale}")`

    const queryWorkType = `insert into work_type (workType)
                            values("${workType}")`

    const queryObjective = `insert into objective_user (mensal_invoice, mensal_acquisition, average_transaction,
                            positioning_zone, mensal_publicity, flyers, publicity_zone) values("${mensalInvoice}", 
                            "${mensalAcquisition}", "${thirdZone}")`

    const queryZone = `insert into zone (first_zone, second_zone, third_zone) values("${firstZone}", 
                        "${secondZone}", "${averageTransaction}", "${positioningZone}", "${mensalPublicity}", 
                        "${flyers}", "${publicityZone}")`

    const queryUser = `insert into users (name, email, number, password, user_Type, nacionality, avatar, birthday,
                    place_of_birth, marital_status, civil_id, validity, address, postal_code, fiscal_id, niss,
                    academic_qualification, academic_area, personal_contact, emergency_contact, employment_situation,
                    personal_email, regime, schedule, nif, experience, time, agency, own_car, acting_zone, team,
                    elements, acquisition, transaction, faturation_volume, anotation, id_availability, id_work_type,
                    id_objectives_users, id_zone) values ("${name}", "${email}", "${number}", "${password}", "${userType}", 
                    "${nacionality}", "${avatar}", "${birthday}", "${placeOfBirth}", "${maritalStatus}", "${civilId}", "${validity}",
                    "${number}", "${address}", "${postalCode}", "${fiscalId}", "${niss}", "${academicQualification}", "${academicArea}",
                    "${personalContact}", "${emergencyContact}", "${employmentSituation}", "${personalEmail}", "${regime}",
                    "${schedule}", "${nif}", "${experience}", "${time}", "${agency}", "${ownCar}""${actingZone}", "${team}", 
                    "${elements}", "${acquisition}", "${transaction}", "${faturationVolume}", "${anotation}", "${idAvailability}",
                    "${idWorkType}", "${idObjectivesUsers}", "${idZone}")`

    con.query(queryAvailability, queryObjective, queryWorkType, queryZone, queryUser, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addUsers", results))
    })
}

async function deleteUser(req, res) {
    const { id } = req.params
    const query = `delete from users where id_user = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteUser", results))
    })
}

async function editUser(req, res) {
    const { id } = req.params
    const { name, email, password, userType, nacionality, avatar, birthday, placeOfBirth, maritalStatus, civilId,
        validity, address, postalCode, fiscalId, niss, academicQualification, academicArea, personalContact, emergencyContact,
        employmentSituation, personalEmail, regime, schedule, nif, experience, time, agency, ownCar, actingZone, team, elements,
        acquisition, transaction, faturationVolume, anotation, idAvailability, days, availabilitySchedule, availability,
        generalMeeting, accomplishMeeting, scale, idWorkType, workType, idObjectivesUsers, mensalInvoice, mensalAcquisition,
        averageTransaction, positioningZone, mensalPublicity, flyers, publicityZone, idZone, firstZone, secondZone,
        thirdZone } = req.body
    let set = []
    if (name) {
        set.push(`name = "${name}"`)
    }
    if (email) {
        set.push(`email = "${email}"`)
    }
    if (password) {
        set.push(`password = "${password}"`)
    }

    const query = `update users set ${set.join()} where id_user = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editUser", results))
    })
}


module.exports = { getUsers, addUser, deleteUser, editUser }