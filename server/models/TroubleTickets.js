var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//database model
var TroubleTicketSchema = new Schema({
    ticket_person_reporting: String,
    ticket_problem__description: String,
    ticket_date: String,
});

//Export model
module.exports = mongoose.model('tickets', TroubleTicketSchema);