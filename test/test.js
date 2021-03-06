var path = require('path');
var fs = require('fs');
var svg = require('../');
var assert = require('assert');
var expected = require('./expected.json');

describe('svg-font-parser', function () {
	it('can parse .svg fonts', function (done) {
		fs.readFile(path.join(__dirname, 'pathFont.svg'), function (err, contents) {
			if (err) throw err;
			svg(contents).then(function (results) {
				assert.deepEqual(results, expected);
				done();
			}, function () {
				assert.fail("Parsing font failed");
			});
		});
	});
});
