const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

async function start() {
  try {
     await mongoose.connect('mongodb+srv://musilimovb:bake_Js1984@cluster1.ulim0rl.mongodb.net/todos', {
      useNewUrlParser: true,
      useUnifiedTopology: true
     });
     app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (e) {
    console.log(e);
  }
}

start();
