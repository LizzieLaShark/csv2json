

//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("./testDataCSVtoJSON.csv",function(err,result){

});
