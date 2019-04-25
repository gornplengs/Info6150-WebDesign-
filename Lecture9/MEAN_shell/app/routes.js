 // app/routes.js

// grab the nerd model we just created
var Sample = require('./models/sample');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/show', function(req, res) {
            
            Sample.find(function(err, samples) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                console.log('samples', samples);
                res.json(samples); 
            });
        });

        app.get('/api/insert', function(req, res) {
            var mes = req.query.mes
            var rec = new Sample({message:mes});
            rec.save(function(err,n){
                if (err)
                    console.log('saving failed');
                console.log('saved '+ n.message);
            });
        });

        

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('/', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };