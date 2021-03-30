const con = require("../connection")
const messages = require("../messages")

async function getUserEvents(req, res) {
    const query = "select * from user_events;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("getUserEvents", results))
    })
}

async function addUserEvent(req, res) {
    const { id_event, id_user } = req.body
    const query = `insert into user_events (id_event, id_user) values ("${id_event}", "${id_user}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("addUserEvents", results))
    })
}
async function deleteUserEvent(req, res) {
    const { id } = req.params
    const query = `delete from user_events where id_event = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("deleteUserEvent", results))
    })
}

async function editUserEvent(req, res) {
    const { id } = req.params
    const { id_event, id_user } = req.body
    let set = []
    if (id_event) {
        set.push(`id_event = "${id_event}"`) 
    }
    if (id_user) {
        set.push(`id_user = "${id_user}"`) 
    }
    const query = `update user_events set ${set.join()} where id_event = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.status(messages.error().status).send(messages.error("error", err.sqlMessage))
        }
        res.send(messages.getSuccess("editUserEvent", results))
    })
}


module.exports = { getUserEvents, addUserEvent, deleteUserEvent, editUserEvent}