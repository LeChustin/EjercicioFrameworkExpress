const express = require('express');
const app = express();
app.use(express.json());

var lista= [
{
id:'1',nombre:'jostin'
},
{
id:'2',nombre:'david'
}
];
//uso de app web service de tipo web
app.get('/aldaz', (req, res) => {
    res.json(lista);

});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/aldaz`);
});
