const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 3000

app.use(express.json());

app.use('/api/auth',require('./routers/auth'));
app.use('/api/notes',require('./routers/notes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})