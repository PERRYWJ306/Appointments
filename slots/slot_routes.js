var _ = require('lodash');

var slots = require('./slot_model.js');

module.exports = function(app) {
    app.get('/slots', function (req, res) {
        slots.find(function (err, slots) {
            if(err) {
                res.json({info: 'error during find slots', error: err});
            }
            res.json({info: 'slots found successfully', data: slots});
        });
    });  

    app.get('/slot/:id', function(req, res) {
        slots.findById(req.params.id, function(err, slot) {
            if(err) {
                res.json({info: 'error during find slots', error: err});
            };
            if(slot) {
                res.json({info: 'slot found successfully', data: slot});
            } else {
                res.json({info: 'slot not found'});
            }
        });
    }); 

    app.put('/slot/:id', function(req, res) {
        slots.findById(req.params.id, function(err, slot) {
            if(err) {
                res.json({info: 'error during find slot', error: err});
            };
            if(slot) {
                _.merge(slot, req.body);
                slot.save(function(err) {
                    if(err) {
                        res.json({info: 'error during slot update', error: err});
                    }
                    res.json({info: 'slot updated successfully'});
                });
            } else {
                res.json({info: 'slot not found'});
            }
        });
    });
    
    app.delete('/slot/:id', function(req, res) {
        slots.findById(req.params.id, function(err, slot) {
            if(err) {
                res.json({info: 'error during find slot', error: err});
            };
            if(slot) {
                _.merge(slot, req.body);
                slot.save(function(err) {
                    if(err) {
                        res.json({info: 'error during slot update', error: err});
                    }
                    res.json({info: 'slot updated successfully'});
                });
            } else {
                res.json({info: 'slot not found'});
            }
        });
    });
};