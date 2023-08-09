const mongoose = require("mongoose")
mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/todolist2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('conectado ao servidor'))
.catch(err => console.error(err))