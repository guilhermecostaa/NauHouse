const con = require("../connection")
const messages = require("../messages")

async function getEvents(req, res) {
    const query = "select * from events;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getEvents", results))
    })
}

async function addEvent(req, res) {
    const { title, startDate, endDate } = req.body
    const query = `insert into events (title, start_date, end_date) values ("${title}", "${startDate}", "${endDate}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addEvent", results))
    })
}

async function deleteEvent(req, res) {
    const { id } = req.params
    const query = `delete from events where id_event = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteEvent", results))
    })
}

async function editEvent(req, res) {
    const { id } = req.params
    const { title, startDate, endDate } = req.body
    let set = []
    if (title) {
        set.push(`title = "${title}"`) 
    }
    if (startDate) {
        set.push(`start_date = "${startDate}"`) 
    }
    if (endDate) {
        set.push(`end_date = "${endDate}"`) 
    }
    const query = `update events set ${set.join()} where id_event = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editEvent", results))
    })
}


module.exports = { getEvents, addEvent, deleteEvent, editEvent}