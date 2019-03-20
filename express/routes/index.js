var express = require('express');
var router = express.Router();
var Mongo = require('Mongodb-curd');
var db = "test";
var coll = "user";
/* GET home page. */
router.get('/api/data', function(req, res, next) {
    Mongo.find(db, coll, function(result) {
        if (result.length === 0) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                data: result
            })
        }
    })
});
router.post('/api/dataDel', function(req, res, next) {
    Mongo.remove(db, coll, { _id: req.body.id }, function(result) {
        if (result.length === 0) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                data: result
            })
        }
    })
});
router.post('/api/dataUser', function(req, res, next) {
    Mongo.find(db, coll, { _id: req.body.id }, function(result) {
        if (result.length === 0) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                data: result
            })
        }
    })
});
router.post('/api/addUser', function(req, res, next) {
    Mongo.insert(db, coll, req.body, function(result) {
        if (result.length === 0) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                data: result
            })
        }
    })
});
router.post('/api/dataUpdate', function(req, res, next) {
    var id = req.body.id;
    var obj = req.body;
    delete obj.id;
    console.log(obj)
    Mongo.update(db, coll, [{ _id: id }, obj], function(result) {
        if (result.length === 0) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                data: result
            })
        }
    })
});
router.post('/api/search', function(req, res, next) {
    var name = new RegExp(req.body.name)
    Mongo.find(db, coll, { name: name }, function(result) {
        if (result.length === 0) {
            res.json({
                code: 0,
                mes: "error"
            })
        } else {
            res.json({
                data: result
            })
        }
    })
});
module.exports = router;