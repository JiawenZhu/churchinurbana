const express = require('express');
const app = express();
var cons = require('consolidate');
const path = require('path');

app.use('/', express.static('public'));

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/ch-additional-clinks.html' ,(req, res)=>{
  res.render("ch-additional-clinks.html");
})

app.get('/ch-campus-ministry.html' ,(req, res)=>{
  res.render("ch-campus-ministry.html");
})

app.get('/' ,(req, res)=>{
  res.render("ch-churchinurbana.html");
})

app.get('/ch-churchinurbana.html' ,(req, res)=>{
  res.render("ch-churchinurbana.html");
})

app.get('/ch-college-training.html' ,(req, res)=>{
  res.render("ch-college-training.html");
})

app.get('/ch-conferences-and-trainings.html' ,(req, res)=>{
  res.render("ch-conferences-and-trainings.html");
})

app.get('/ch-our-meeting.html' ,(req, res)=>{
  res.render("ch-our-meeting.html");
})

app.get('/ch-statement-of-faith.html' ,(req, res)=>{
  res.render("ch-statement-of-faith.html");
})

app.listen(process.env.PORT || 3003, function () {
	console.log("listen to port 3003");
});