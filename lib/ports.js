var http = require('http');
var xml-stream = require('xml-stream');
var helpwith = require('helpwith');

function Ports () {
  var packages = {};

  packages.xml = 'http://ports.funtoo.org/packages.xml';
};

Ports.prototype.getPackages = function() {

    var request = http.get(options).on('response', function(response) {

    var parser = xml.parse response;

  });
});

module.exports = Ports;
