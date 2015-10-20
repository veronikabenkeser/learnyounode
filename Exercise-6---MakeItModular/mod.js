var fs=require('fs');
var path = require("path");

module.exports = function(dirName,ext,callback){
    fs.readdir(dirName, function(error,data){
        if (error){
            return callback(error);
        }
       data= data.filter(function(item){
           return path.extname(item) === "."+ext;
        });
        callback(error,data);
    });
};
