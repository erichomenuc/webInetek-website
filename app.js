const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()


const developmentsModule = require('./utils/developments');  //custom module

const viewsURL = path.join(__dirname, 'views')

app.set('views', viewsURL)
app.set('view engine', 'ejs')

const publicURL = path.join(__dirname, 'public')

app.use(express.static(publicURL))

app.get('', (req, res) => {
    developmentsModule.getAllDevelopments((err, developments) => {
        if (err) return res.status(500).send('Some error ocurred');
        if(developments.length === 0) return res.status(500).send('Some Error Ocurred');
        return res.render('pages/index', {developments:developments});
    });
});

app.get('/development/:id', (req, res) => {
    const {id} = req.params;
    // console.log(id);
    developmentsModule.getSingleDevelopments(id, (err, development) => {
        if (err) return res.status(404).send('Some error ocurred');
        return  res.send(development);
    });
});

app.get('/administrar', (req, res) => {
    res.render('pages/administrar')
})

app.get('/eliminar', (req, res) => {
    
    developmentsModule.getAllDevelopments((err, developments) => {
        if (err) return res.status(500).send('Some error ocurred');
        if(developments.length === 0) return res.status(500).send('Some Error Ocurred');
        return res.render('pages/eliminar', {developments:developments});
    });
    
})


app.listen(port, ()=>{
    console.log(`Escuchando el puerto ${port}`)
})

