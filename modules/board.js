"use strict";
// Gives the user a link to the forum

exports.module = function() {
	this.onCommand_board = function(nick, command) {
		this.channel.say("Here is a link to the board: http://mariomods.net/board/.");
	};
};
