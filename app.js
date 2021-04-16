const express = require('express')
const hbs = require ('hbs') ;


const app = express()




//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');
 
//Servir Contenido estaticos
app.use( express.static('public') );

app.get('/', (req, res) => { 
    //res.sendFile( __dirname +'/public/index.html')
    res.render('home', {
        titulo: 'Curso de Node',
        nombre: 'franco'
    });
})
  
app.get('/elements', (req, res) => { 
    //res.sendFile( __dirname +'/public/index.html')
    res.render('elements');
})

app.get('/generic', (req, res) => { 
    //res.sendFile( __dirname +'/public/index.html')
    res.render('generic');
})
// app.get('/generic', (req, res) => { 
//     res.sendFile( __dirname +'/public/generic.html')
// })

// app.get('/elements', (req, res) => { 
//     res.sendFile( __dirname +'/public/elements.html')
// })

app.get('*', (req, res) => {
    res.send('404 not found')
})
 
app.listen(8080)