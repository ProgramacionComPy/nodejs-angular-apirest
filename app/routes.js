// Dependencies
var ClientCtrl = require('./controllers/clients.js');

// Opens App Routes
module.exports = function(express,app) {

// HOME
app.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

//API
var api = express.Router();
	//Clients
	api.route('/clients')  
	  .get(ClientCtrl.findAll)
	  .post(ClientCtrl.add);
	api.route('/clients/:id')  
	  .get(ClientCtrl.findById)
	  .put(ClientCtrl.update)
	  .delete(ClientCtrl.delete);
app.use('/api/v1/', api);  

};  