const con = require("../connection")
const messages = require("../messages")
const bcrypt = require("bcryptjs")


async function getUsers(req, res) {
    const query = "select * from mydb.users, mydb.availability, mydb.balance, mydb.objective_user, mydb.zone where mydb.users.id_availability= mydb.availability.id_availability and mydb.balance.id_balance = mydb.users.id_balance and mydb.objective_user.id_objectives_users = mydb.users.id_objectives_users and mydb.zone.id_zone = mydb.users.id_zone;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getUsers", results))
    })
}

async function getUserById(req, res) {
    const { id } = req.params
    const query = `select * from mydb.users, mydb.availability, mydb.balance, mydb.objective_user, mydb.zone where mydb.users.id_availability = mydb.availability.id_availability and 
    mydb.balance.id_balance = mydb.users.id_balance and mydb.objective_user.id_objectives_users = mydb.users.id_objectives_users and mydb.zone.id_zone = mydb.users.id_zone and mydb.users.id_user = ${id};`
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
    let { name, email, userType, nacionality, avatar, birthday, placeOfBirth, maritalStatus, civilId,
        validity, address, postalCode, fiscalId, niss, academicQualification, academicArea, personalContact, emergencyContact,
        employmentSituation, personalEmail, regime, schedule, nif, experience, time, agency, ownCar, actingZone, team, elements,
        acquisition, transaction, faturationVolume, anotation, idAvailability, days, availabilitySchedule, availability,
        generalMeeting, accomplishMeeting, scale, idWorkType, workType, idObjectivesUsers, mensalInvoice, mensalAcquisition,
        averageTransaction, positioningZone, mensalPublicity, flyers, publicityZone, idZone, firstZone, secondZone,
        thirdZone } = req.body

    let set = []
    let setAvailability = []
    let setWorkType = []
    let setObjectives = []
    let setZone = []

    //User
    if (name) {
        set.push(`name = "${name}"`)
    }
    if (email) {
        set.push(`email = "${email}"`)
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
    const queryUser = `select * from mydb.users, mydb.availability, mydb.balance, mydb.objective_user, mydb.zone where mydb.users.id_availability = mydb.availability.id_availability and 
    mydb.balance.id_balance = mydb.users.id_balance and mydb.objective_user.id_objectives_users = mydb.users.id_objectives_users and mydb.zone.id_zone = mydb.users.id_zone and mydb.users.id_user = ${id};`
    con.query(queryUser, (err, results, fields) => {
        if (err) {
            console.log(err)
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        console.log(results)
        idWorkType = results[0].id_work_type
        const queryWorkType = `update work_type set ${setWorkType.join()} where id_work_type = ${idWorkType}`
        con.query(queryWorkType, (err, results2, fields) => {
            console.log(queryWorkType)
            if (err) {
                console.log(idWorkType)
                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
            }
            idObjectivesUsers = results[0].id_objectives_users
            const queryObjective = `update objective_user set ${setObjectives.join()} where id_objectives_users = ${idObjectivesUsers}`
            console.log("objective")
            con.query(queryObjective, (err, results3, fields) => {
                if (err) {
                    return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                }
                idZone = results[0].id_zone
                const queryZone = `update zone set ${setZone.join()} where id_zone = ${idZone}`
                con.query(queryZone, (err, results4, fields) => {
                    if (err) {
                        console.log("zone")
                        return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                    }
                    idAvailability = results[0].id_availability
                    const queryAvailability = `update availability set ${setAvailability.join()} where id_availability = ${idAvailability}`
                    con.query(queryAvailability, (err, results6, fields) => {
                        if (err) {
                            console.log(queryAvailability)
                            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                        }
                        const queryUpdateUser = `update users set ${set.join()} where id_user = ${id}`
                        con.query(queryUpdateUser, (err, results7, fields) => {
                            if (err) {
                                console.log(err)
                                return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
                            }
                            res.send(messages.getSuccess("EditUser", results7))
                        })
                    })
                })
            })
        })
    })
}

module.exports = { getUsers, getUserById, addUser, deleteUser, editUser }