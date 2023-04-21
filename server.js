const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override')
const animalsController = require('./controllers/animals')
const userController = require('./controllers/users')

const { animals } = require('./models')

app.set('view engine', 'ejs');
app.use(express.static('public')); //DOM e CSS
app.use(express.urlencoded({ extended:false })); //req.body
app.use(methodOverride('_method')) // allowing forms to both put and delete

app.use('/animals', animalsController)
app.use('', userController)

app.get('/', (req, res) => {
    res.render('home.ejs')
})


app.listen(PORT, () => {
    console.log(`🐳🦋 Server is listening to PORT ${PORT} 🐢🦅`)
}) 