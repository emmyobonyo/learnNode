// SToring and editinf data

var fs = require('fs');
const { builtinModules } = require('module');
var path = require('path')

// Container 
var lib = {};

lib.baseDir = path.join(__dirname, '/../data/')

lib.create = function(dir, file, data, callback){
    // open file
    fs.open(lob.baseDir+dir+"/"+file+".json", "wx", function(err, fileDescriptor){
        if(!err && fileDescriptor){
            var stringData = JSON.stringify(data)
            fs.writeFile(fileDescriptor, stringData, function(err){
                if(!err){
                    fs.close(fileDescriptor, function(err){
                        if(!err){
                            callback(false)
                        } else {
                            callback('Error')
                        }
                    })
                }else {
                    callback('Error')
                }
            })
        } else {
            callback('Could not create new file, it may already exist')
        }
    })
} 

module.exports = lib;