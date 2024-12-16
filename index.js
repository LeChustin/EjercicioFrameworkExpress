const express = require('express');
const app = express();
app.use(express.json());

var lista= [
{
id:'1',nombre:'jostin'
},
{
id:'2',nombre:'david'
},
{
id:'3',nombre:'carlos'
},
{
id:'4',nombre:'alexander'
},
{
id:'5',nombre:'jefferson'
}
];
//uso de app web service de tipo web
app.get('/nombre', (req, res) => {
    res.json(lista);

});

app.get('/aldaz', (req, res) => {
    res.send('Jostin Aldaz, 21 años, Estudiante de Desarrollo de Software, adepto a la lectura de manga.');

});

app.get('/david', (req, respuesta) => {
    let n1 = 3;
    let n2 = 7;
    let suma = n1 + n2;
    respuesta.send(suma+'');

});

app.get('/suma/:n1', (req, respuesta) => {
    let nn1 = parseInt(req.params.n1);

    let n2 = 7;
    let suma = nn1 + n2;
    respuesta.send('oye hermano tu resultado es: '+ suma+'');

});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/aldaz`);
});
