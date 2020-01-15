const express = require('express');
const app = express();

app.get('/makers/:nombre', (req, res) => {
	let ans = '';
	if(req.params.nombre.length !== 0) {
		ans = req.params.nombre;
		ans = ans.charAt(0).toUpperCase() + ans.slice(1);
	} else {
		res.sendStatus(200);
	}
	res.send(`<h1>Hola ${ans}!</h1>`);
})

app.listen(3000, () => console.log('Listening on port 3000!'));