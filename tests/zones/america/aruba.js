"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Aruba"] = {
	"1912" : helpers.makeTestYear("America/Aruba", [
		["1912-02-12T04:35:46+00:00", "23:59:59", "LMT", 16547 / 60],
		["1912-02-12T04:35:47+00:00", "00:05:47", "-0430", 270]
	]),

	"1965" : helpers.makeTestYear("America/Aruba", [
		["1965-01-01T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1965-01-01T04:30:00+00:00", "00:30:00", "AST", 240]
	])
};