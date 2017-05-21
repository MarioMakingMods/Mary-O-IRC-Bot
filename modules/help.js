"use strict";
var os = require("os");
var fs = require('fs');
var settings = require("../config.js").settings;

exports.module = function() {
	this.onCommand_help = function(nick, command) {
		var chan = this.channel;
		fs.readFile('./package.json', 'utf-8', function(err, data) {
			if (!err) {
				chan.say("For a list of available commands for MaryO, check http://v.gd/TheBotCommands");
			} else {
				console.err("Error opening ./package.js... Did you delete it?")
			}
		});
	};
};
