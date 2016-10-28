var Converter = require("csvtojson").Converter;

//record_parsed will be emitted each csv row being processed
converter.on("record_parsed", function (jsonObj) {
   console.log(jsonObj); // <== our result json object
});

require("request").get
("https://docs.google.com/spreadsheets/d/1yKWj5_TQkWSVlYvCbvxDxkpMYrHD-TuTUWbl9YcNorg/edit?usp=sharing")
.pipe(converter);

converter();


/////***papaParse***////

Papa.parse(csvString[, config])
