const express = require('express');
const app = express();

app.set('case sensitive routing', true);

app.get('/', (req, res) => {
	let ans = '';
	if(req.query.nombre === undefined) {
		ans = 'Desconocido';
	} else {
		ans = req.query.nombre;
	}
	res.send('<h1>Hola ' + ans + '!</h1>');
})

app.listen(3000, () => console.log('Listening on port 3000!'));