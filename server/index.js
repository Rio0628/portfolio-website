const express = require('express');
const cors = require('cors');
const db = require('./db');
const projectRouter = require('./routes/project-router');
const app = express();
const apiPort = 3000;

app.use( express.urlencoded({ extended: true }) );
app.use( cors() );
app.use( express.json() );

app.get( '/', (req, res) => { res.send('Hello World!') });
db.on( 'error', console.error.bind(console, 'MongoDB connection error: ') )

app.use('/api', projectRouter);

app.listen( apiPort, () => console.log(`Server running on port ${apiPort}`) )