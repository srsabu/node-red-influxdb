module.exports = function(RED) {
	"use strict";
	// var influx = require('influx');
	
    function InfluxNode(config) {
        RED.nodes.createNode(this,config);
        this.hostname = config.hostname;
        this.port = config.port;
        this.db = config.db;
        this.protocol = config.protocol;
        this.name = config.name;
        this.username = config.username;
        this.password = config.password;
    }

    RED.nodes.registerType("influxdb",InfluxNode);

	function InfluxQueryNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.on('input', function(msg) {
			var client = influx(config.influxdb);
			
		})
	}

	RED.nodes.registerType("influxdb query", InfluxQueryNode);

	function InfluxWritePointNode(config) {
		RED.nodes.createNode(this,config);
		var node = this;
		this.on('input', function(msg) {
			
		})
	}

	RED.nodes.registerType("influxdb writepoint", InfluxWritePointNode);

}
