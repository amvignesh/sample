var q = require('q');
var fs = require('fs');
var express = require('express');
var reload = require('reload');
var sprintf = require('sprintf').sprintf;
var async = require('async');
var app = express.Router();
var dateFormat = require('dateformat');
var mysqli = require('../modules/mysqli');



app.get('/servertime', function (req, res) {
	datenow = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
	res.send(datenow);
	res.end();
	return false;
});

app.post('/userregisteration', function(req, res){
    console.log(req.body);
	var users = require('../modules/admin');
	q.all([users.testregister(config.mysql,req, res)]).then(function(results){
		res.json({"Details":req.body});
	});

});

app.get('/getData',function(req,res)
{
	var admin = require('../modules/admin');
	console.log(config.mysql);
	q.all([admin.selectAllValue(req,config.mysql,q)]).then(function(results){
		res.json(results[0][0]);
	//	$arr['feedback_list_array'] = results[0][0];
	});
});

app.get('/getData1', function (req, res) {
	var admin = require('../modules/admin');
	q.all([admin.selectAllValue(config.mysql,req, res)]).then(function(results){

	});
});

module.exports = app;

