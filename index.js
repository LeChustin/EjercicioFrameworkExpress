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
    let respuestasss = 'Jostin Aldaz, 21 años, Estudiante de Desarrollo de Software, adepto a la lectura de manga.';
    res.json(respuestasss);

});

app.get('/suma/:n1', (req, res) => {
    let nn1 = parseInt(req.params.n1);

    let n2 = 7;
    let suma = nn1 + n2;
    let respuestass = 'oye hermano tu resultado es: ' + suma;
    res.json(respuestass);

});

app.get('/calculos/:lado1/:lado2', (req, res) => {
    const lado1 = parseFloat(req.params.lado1);
    const lado2 = parseFloat(req.params.lado2);

    if (isNaN(lado1) || isNaN(lado2)) {
        return res.status(400).send('Por favor ingrese números válidos.');
    }

    const cuadrado = {
        figura: 'Cuadrado',
        area: lado1 * lado1,
        perimetro: lado1 * 4,
    };

    const triangulo = {
        figura: 'Triángulo equilátero',
        area: (Math.sqrt(3) / 4) * lado1 * lado1,
        perimetro: lado1 * 3,
    };

    const pentagono = {
        figura: 'Pentágono regular',
        area: (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * lado1 * lado1,
        perimetro: lado1 * 5,
    };

    res.json([cuadrado, triangulo, pentagono]);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/aldaz`);
});
