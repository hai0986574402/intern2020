var http = require('http');
http.createServer(function(req, res) {
    res.write('Minh ten la Nguyen Thanh Hai');
    res.end();
}).listen(8080);