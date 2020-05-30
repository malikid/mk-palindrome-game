import express from 'express';
import bodyParser from 'body-parser';

var app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.render('index.html');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

require('./server/config/init')(app);

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
