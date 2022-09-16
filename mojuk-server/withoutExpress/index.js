var server = require("./server");
var router = require("./router");
var requestHandler = require("./requesthandler");

server.start(router.route, requestHandler.handle);
