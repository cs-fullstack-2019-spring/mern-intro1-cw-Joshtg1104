var express = require('express');
var router = express.Router();
var tickets = require('../models/TroubleTickets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//endpoint that allows the creation of new data entries to the database
router.get('/tickets/seeddata/:report/:description/:date', (req, res) =>{
  tickets.create({
    ticket_person_reporting: req.params.report,
    ticket_problem__description: req.params.description,
    ticket_date: req.params.date,
  }, (error, results) =>{
    if(error){
      res.send(error)
    }
    else{
      res.send("Report registered")
    }
  });
});

//endpoint that displays all entries in the database
router.get('/tickets', (req, res) =>{
  tickets.find({}, (errors, results)=>{
    if(errors){
      res.send(errors);
    }
    else{
      res.send(results);
    }
  })
});

module.exports = router;
