const express = require('express');
const app = express();

app.get('/maker/:nombre', (req, res) => {
	let ans = '';
	console.log('lo que hay: ' + req.params.nombre);
	if(req.params.nombre.length !== 0) {
		ans = req.params.nombre;
		ans = ans.charAt(0).toUpperCase() + ans.slice(1);
	}
	res.send(`<h1>Hola ${ans}!</h1>`);
})

app.get('/maker', (req, res) => {
	res.send(`<h1>Hola desconocido!</h1>`);
})

app.listen(3000, () => console.log('Listening on port 3000!'));