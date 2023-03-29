const express = require('express');
const app = express();
const PORT = 4000;
const animalsController = require('./controllers/animals')

app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended:false }));


app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.use('/animals', animalsController)

app.listen(PORT, () => {
    console.log(`🐳🦋 Server is listening to PORT ${PORT} 🐢🦅`)
}) 