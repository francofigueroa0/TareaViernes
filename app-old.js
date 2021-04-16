const http = require('http');

http.createServer( (req, res) => {

    res.write('holamundo');
    res.end();
})
.listen( 8080 );

console.log('usando el puerto 8080');