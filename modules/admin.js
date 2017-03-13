var q = require('q');
var util    = require('util');
var dateFormat = require('dateformat');
var mysqli = require('./mysqli');

exports.selectAllValue1 = function(req,mysql,q)
{
    // $mysqli = {};
    // strQuery = mysqli.mysqli($mysqli, 5);
    // var defered = q.defer();
    // query =  mysql.query(strQuery,defered.makeNodeResolver());
    // console.log(query);
    // query.on('error',function(err){
    //     throw err;
    // })
    // return defered.promise;
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 5);
	var defered = q.defer();
	//escape_data =[req.body.f_name,req.body.l_name,req.body.email_id,req.body.m_no,req.body.dob,req.body.gender1,req.body.d_name,req.body.city,password];
	query =  mysql.query(strQuery,defered.makeNodeResolver());
	query.on('error',function(err){
	throw err;
	});
	
	return defered.promise;
}
exports.testregister = function(mysql,req, res)
{
  //console.log(req);
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli,'testdb');
    var defered = q.defer();
    var md5 = require('MD5');
    var password_salt = '12345'
    var password = md5(md5(req.body.password)+password_salt);
    escape_data =[req.body.name,req.body.emailid,req.body.phone,req.body.username,password];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());

    console.log(query.sql);

    query.on('error',function(err){
        throw err;
    });

    return defered.promise;
}

exports.selectAllValue = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 5);
    var defered = q.defer();
    escape_data =[];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    query.on('error',function(err){
        throw err;
    })
    return defered.promise;
}
