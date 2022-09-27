/*
    When working with node, first of all you want a working server
*/

// We need an http object that will be used to fetch APIs

const http = require('http')
const https = require('https')
const url = require('url')
const StringDecoder = require('string_decoder').StringDecoder
var config = require('./config')
var fs = require('fs')

// We need to start a server

const httpServer = http.createServer(function(req, res){
    unifiedServer(req, res)
       
})

// That server will run on a specific port.
httpServer.listen(config.httpPort, function(){
    console.log(`The server is currently running on port ${config.httpPort}`)
})

var httpsServerOptions = {
    'key': fs.readFileSync('./https/key.pem'),
    'cert': fs.readFileSync('./https/cert.pem')

}

const httpsServer = https.createServer(httpsServerOptions, function(req, res){
    unifiedServer(req, res)
       
})

httpsServer.listen(config.httpsPort, function(){
    console.log(`The server is currently running on port ${config.httpsPort}`)
})


var unifiedServer = function(req, res) {
    // We get the URL that the user has passed in
    const parsedUrl = url.parse(req.url, true);
    
    //Get the path name
    const path = parsedUrl.pathname

    // Trim the path
    const trimmedPath = path.replace(/^\/+|\/+$/g,'')

    // The the HTTP method that the user is parsing in
    const method = req.method.toLowerCase();

    // Get some query parameters
    const queryObject = parsedUrl.query
    const headers = req.headers

    const decoder = new StringDecoder('utf-8')
    let buffer = ''
    req.on('data', function(data){
        buffer += decoder.write(data)
    });
    req.on('end', function(){
        buffer += decoder.end();
        var chooseHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound

        let data = {
            'trimmedPath': trimmedPath,
            'payload': buffer,
            "queryObject": queryObject,
            "headers": headers,
            'method': method
        }

        chooseHandler(data, function(statusCode, payload){
            statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
            payload = typeof(payload) == 'object' ? payload : {};

            let payloadString = JSON.stringify(payload);
            res.setHeader('Content-Type', 'application/json')
            res.writeHead(statusCode)
            res.end(payloadString)
        })

    })
}

let handlers = {}

handlers.notFound = function(data, callback){
    callback(404)
}

handlers.ping = function(data, callback){
    callback(200,{'name': 'Emmanuel'})
}

let router = {
    'ping': handlers.ping,
    // 'notFound': handlers.notFound
}