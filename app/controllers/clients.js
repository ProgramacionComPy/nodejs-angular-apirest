// Dependencies
var mongoose        = require('mongoose');
var Client            = require('../models/client.js');

//GET - Return all registers
exports.findAll = function(req, res) {
	Client.find(function(err, clients) {
    	if(err) return res.status(500).send(err.message);
		res.status(200).json(clients);
	});
};

//GET - Return a register with specified ID
exports.findById = function(req, res) {
	Client.findById(req.params.id, function(err, client) {
    	if(err) return res.status(500).send(err.message);
		res.status(200).json(client);
	});
};

//POST - Insert a new register
exports.add = function(req, res) {
	var client = new Client({
	    name: req.body.name
	});
	client.save(function(err, client) {
		if(err) return res.status(500).send(err.message);
    	res.status(200).json(client);
	});
};

//PUT - Update a register already exists
exports.update = function(req, res) {
	Client.findById(req.params.id, function(err, client) {
		var client = new Client({
	    	name: req.body.name
		});
		client.save(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).json(client);
		});
	});
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
	Client.findById(req.params.id, function(err, client) {
		client.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      		res.status(200).send();
		});
	});
};