if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const morgan = require('morgan')
const express = require('express')
const app = express()
const path = require('path')
const handlebars = require('express-handlebars')
const port = 4000
const sass = require('node-sass')
const { query } = require('express')
const res = require('express/lib/response')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { error } = require('console')
const db = mongoose.connection

const user = []

app.use(express.static(path.join(__dirname, 'public')))

//HTTP Logger:
app.use(morgan('combined'))


//Template engine:
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));

// Hello mate

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
// app.use(express.urlencoded({ extended: false}));


// console.log('PATH: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('Login')
})

app.get('/Login', (req, res) => {
  res.render('Login')
})

// app.post('/Login',(req,res)=> {
  
// })
app.get('/Content', (req, res) => {
  res.render('Content');
})

app.get('/Home', (req, res) => {
  res.render('Home');
})

app.get('/Register', (req, res) => {
  res.render('Register');
})

app.get('/BlogList', (req, res) => {
  res.render('BlogList');
})

app.get('/Profile', (req, res) => {
  res.render('Profile');
})

app.get('/Manager', (req, res) => {
  res.render('Manager');
})

app.get('/Viewblog', (req, res) => {
  res.render('Viewblog');
})



// app.post('/Register', async (req,res)=> {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     user.push({
//       id: Date.now().toString(),
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//       phone: req.body.phone 
//     })
//     res.redirect('/Login')
//   } catch {
//     res.redirect('/Register')
//   }
//   console.log(user)

//   req.body.email
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
