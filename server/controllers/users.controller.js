const con = require("../connection")
const messages = require("../messages")
const bcrypt = require("bcryptjs")
const multer = require('multer')

const upload = multer({
    dest: './upload/'
})

async function getUsers(req, res) {
    const query = "select * from users;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getUsers", results))
    })
}

async function getUserById(req, res) {
    const { id } = req.params
    const query = `select * from users where id_user = ${id};`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getUserById", results))
    })
}

async function addUser(req, res) {
    let { name, email, number, password, userType, nacionality, avatar, birthday, placeOfBirth, maritalStatus, civilId,
        validity, address, postalCode, fiscalId, niss, academicQualification, academicArea, personalContact, emergencyContact,
        employmentSituation, personalEmail, regime, schedule, nif, experience, time, agency, ownCar, actingZone, team, elements,
        acquisition, transaction, faturationVolume, anotation, days, availabilitySchedule, availability,
        generalMeeting, accomplishMeeting, scale, workType, mensalInvoice, mensalAcquisition,
        averageTransaction, positioningZone, mensalPublicity, flyers, publicityZone, firstZone, secondZone,
        thirdZone, active, passive } = req.body

    let salt = 10
    let hash = await bcrypt.hash(password, salt)
    password = hash

    let idAvailability = 0
    let idWorkType = 0
    let idObjectivesUsers = 0
    let idZone = 0
    let idBalance = 0

    const queryAvailability = `insert into availability (days, availability_schedule, availability, general_meeting, accomplish_meeting, scale)
                                values("${days}", "${availabilitySchedule}", "${availability}", "${generalMeeting}", "${accomplishMeeting}", 
                                "${scale}")`

    const queryWorkType = `insert into work_type (work_type)
                            values("${workType}")`

    const queryObjective = `insert into objective_user (mensal_invoice, mensal_acquisition, average_transaction,
                            positioning_zone, mensal_publicity, flyers, publicity_zone) values("${mensalInvoice}", 
                            "${mensalAcquisition}", "${averageTransaction}", "${positioningZone}", "${mensalPublicity}", 
                            "${flyers}", "${publicityZone}")`

    const queryZone = `insert into zone (first_zone, second_zone, third_zone) values("${firstZone}", 
                        "${secondZone}", "${thirdZone}")`

    const queryBalance = `insert into balance (active, passive) values("${active}", "${passive}")`


    con.query(queryAvailability, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        idAvailability = results.insertId
        con.query(queryWorkType, (err, results1, fields) => {
            if (err) {
                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
            }
            idWorkType = results1.insertId
            con.query(queryObjective, (err, results2, fields) => {
                if (err) {
                    return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                }
                idObjectivesUsers = results2.insertId
                con.query(queryZone, (err, results3, fields) => {
                    if (err) {
                        return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                    }
                    idZone = results3.insertId
                    con.query(queryBalance, (err, results4, fields) => {
                        if (err) {
                            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                        }
                        idBalance = results4.insertId
                        console.log(results4)
                        const queryUser = `insert into users (user_type_id, name, email, number, password, nacionality, avatar, birthday,
                            place_of_birth, marital_status, civil_id, validity, address, postal_code, fiscal_id, niss,
                            academic_qualification, academic_area, personal_contact, emergency_contact, employment_situation,
                            personal_email, regime, schedule, nif, experience, time, agency, own_car, acting_zone, team,
                            elements, acquisition, transaction, faturation_volume, anotation, id_availability, id_work_type,
                            id_objectives_users, id_zone, id_balance) values ("${userType}", "${name}", "${email}", "${number}", "${password}", 
                            "${nacionality}", "${avatar}", "${birthday}", "${placeOfBirth}", "${maritalStatus}", "${civilId}", 
                            "${validity}", "${address}", "${postalCode}", "${fiscalId}", "${niss}", "${academicQualification}", "${academicArea}",
                            "${personalContact}", "${emergencyContact}", "${employmentSituation}", "${personalEmail}", "${regime}",
                            "${schedule}", "${nif}", "${experience}", "${time}", "${agency}", "${ownCar}", "${actingZone}", "${team}", 
                            "${elements}", "${acquisition}", "${transaction}", "${faturationVolume}", "${anotation}", "${idAvailability}",
                            "${idWorkType}", "${idObjectivesUsers}", "${idZone}", "${idBalance}")`
                        con.query(queryUser, (err, results5, fields) => {
                            console.log(queryUser)
                            if (err) {
                                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                            }
                            res.send(messages.getSuccess("addUser", results5))
                        })
                    })
                })
            })
        })
    })
}

async function deleteUser(req, res) {
    const { id } = req.params
    const query = `delete from users where id_user = "${id}"`
    console.log(query)

    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteUser", results))
    })
}

async function editUser(req, res) {
    const { id } = req.params
    let { name, email, password, userType, nacionality, avatar, birthday, placeOfBirth, maritalStatus, civilId,
        validity, address, postalCode, fiscalId, niss, academicQualification, academicArea, personalContact, emergencyContact,
        employmentSituation, personalEmail, regime, schedule, nif, experience, time, agency, ownCar, actingZone, team, elements,
        acquisition, transaction, faturationVolume, anotation, idAvailability, days, availabilitySchedule, availability,
        generalMeeting, accomplishMeeting, scale, idWorkType, workType, idObjectivesUsers, mensalInvoice, mensalAcquisition,
        averageTransaction, positioningZone, mensalPublicity, flyers, publicityZone, idZone, firstZone, secondZone,
        thirdZone, idBalance, active, passive } = req.body

    let salt = 10
    let hash = await bcrypt.hash(password, salt)
    password = hash

    let set = []
    let setAvailability = []
    let setWorkType = []
    let setObjectives = []
    let setZone = []
    let setBalance = []


    //User
    if (name) {
        set.push(`name = "${name}"`)
    }
    if (email) {
        set.push(`email = "${email}"`)
    }
    if (password) {
        set.push(`password = "${password}"`)
    }
    if (userType) {
        set.push(`user_type_id = "${userType}"`)
    }
    if (nacionality) {
        set.push(`nacionality = "${nacionality}"`)
    }
    if (avatar) {
        set.push(`avatar = "${avatar}"`)
    }
    if (birthday) {
        set.push(`birthday = "${birthday}"`)
    }
    if (placeOfBirth) {
        set.push(`place_of_birth = "${placeOfBirth}"`)
    }
    if (maritalStatus) {
        set.push(`marital_status = "${maritalStatus}"`)
    }
    if (civilId) {
        set.push(`civil_id = "${civilId}"`)
    }
    if (validity) {
        set.push(`validity = "${validity}"`)
    }
    if (address) {
        set.push(`address = "${address}"`)
    }
    if (postalCode) {
        set.push(`postal_code = "${postalCode}"`)
    }
    if (fiscalId) {
        set.push(`fiscal_id = "${fiscalId}"`)
    }
    if (academicQualification) {
        set.push(`academic_qualification = "${academicQualification}"`)
    }
    if (niss) {
        set.push(`niss = "${niss}"`)
    }
    if (academicArea) {
        set.push(`academic_area = "${academicArea}"`)
    }
    if (personalContact) {
        set.push(`personal_contact = "${personalContact}"`)
    }
    if (emergencyContact) {
        set.push(`emergency_contact = "${emergencyContact}"`)
    }
    if (employmentSituation) {
        set.push(`employment_situation = "${employmentSituation}"`)
    }
    if (personalEmail) {
        set.push(`personal_email = "${personalEmail}"`)
    }
    if (regime) {
        set.push(`regime = "${regime}"`)
    }
    if (schedule) {
        set.push(`schedule = "${schedule}"`)
    }
    if (nif) {
        set.push(`nif = "${nif}"`)
    }
    if (experience) {
        set.push(`experience = "${experience}"`)
    }
    if (time) {
        set.push(`time = "${time}"`)
    }
    if (agency) {
        set.push(`agency = "${agency}"`)
    }
    if (ownCar) {
        set.push(`own_car = "${ownCar}"`)
    }
    if (actingZone) {
        set.push(`acting_zone = "${actingZone}"`)
    }
    if (team) {
        set.push(`team = "${team}"`)
    }
    if (elements) {
        set.push(`elements = "${elements}"`)
    }
    if (acquisition) {
        set.push(`acquisition = "${acquisition}"`)
    }
    if (transaction) {
        set.push(`transaction = "${transaction}"`)
    }
    if (faturationVolume) {
        set.push(`faturation_volume = "${faturationVolume}"`)
    }
    if (anotation) {
        set.push(`anotation = "${anotation}"`)
    }
    //Availability
    if (days) {
        setAvailability.push(`days = "${days}"`)
    }
    if (availabilitySchedule) {
        setAvailability.push(`availability_schedule = "${availabilitySchedule}"`)
    }
    if (availability) {
        setAvailability.push(`availability = "${availability}"`)
    }
    if (generalMeeting) {
        setAvailability.push(`general_meeting = "${generalMeeting}"`)
    }
    if (accomplishMeeting) {
        setAvailability.push(`accomplish_meeting = "${accomplishMeeting}"`)
    }
    if (scale) {
        setAvailability.push(`scale = "${scale}"`)
    }
    //WorkType
    if (workType) {
        setWorkType.push(`work_type = "${workType}"`)
    }
    //Objectives
    if (mensalInvoice) {
        setObjectives.push(`mensal_invoice = "${mensalInvoice}"`)
    }
    if (mensalAcquisition) {
        setObjectives.push(`mensal_acquisition = "${mensalAcquisition}"`)
    }
    if (averageTransaction) {
        setObjectives.push(`average_transaction = "${averageTransaction}"`)
    }
    if (positioningZone) {
        setObjectives.push(`positioning_zone = "${positioningZone}"`)
    }
    if (mensalPublicity) {
        setObjectives.push(`mensal_publicity = "${mensalPublicity}"`)
    }
    if (flyers) {
        setObjectives.push(`flyers = "${flyers}"`)
    }
    if (publicityZone) {
        setObjectives.push(`publicity_zone = "${publicityZone}"`)
    }
    //Zones
    if (firstZone) {
        setZone.push(`first_zone = "${firstZone}"`)
    }
    if (secondZone) {
        setZone.push(`second_zone = "${secondZone}"`)
    }
    if (thirdZone) {
        setZone.push(`third_zone = "${thirdZone}"`)
    }
    //Balance 
    if (active) {
        setBalance.push(`active = "${active}"`)
    }
    if (passive) {
        setBalance.push(`passive = "${passive}"`)
    }
    const queryUser = `update users set ${set.join()} where id_user = ${id}`
    const queryAvailability = `update availability set ${setAvailability.join()} where id_availability = ${idAvailability}`
    const queryWorkType = `update work_type set ${setWorkType.join()} where id_work_type = ${idWorkType}`
    const queryObjective = `update objective_user set ${setObjectives.join()} where id_objectives_users = ${idObjectivesUsers}`
    const queryZone = `update zone set ${setZone.join()} where id_zone = ${idZone}`
    const queryBalance = `update balance set ${setBalance.join()} where id_balance = ${idBalance}`

    con.query(queryAvailability, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        con.query(queryWorkType, (err, results, fields) => {
            if (err) {
                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
            }
            con.query(queryObjective, (err, results, fields) => {
                if (err) {
                    return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                }
                con.query(queryZone, (err, results, fields) => {
                    if (err) {
                        return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                    }
                    con.query(queryBalance, (err, results, fields) => {
                        if (err) {
                            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                        }
                        con.query(queryUser, (err, results, fields) => {
                            if (err) {
                                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                            }
                            res.send(messages.getSuccess("EditUser", results))
                        })
                    })
                })
            })
        })
    })
}

module.exports = { getUsers, getUserById, addUser, deleteUser, editUser }