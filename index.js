var fs = require ("fs");

//leer archivo de datos
fs.readFile("dataset.json", {encoding: "utf-8"}, function(err, data) {
	if (err){
		return console.error(err);
	} else {
		console.log("Archivo 'dataset.json' -->" + data);
		
		console.log("Archivo 'dataset.json' en formato JSON -->")
		console.log(JSON.parse(data));
		
	}
});
