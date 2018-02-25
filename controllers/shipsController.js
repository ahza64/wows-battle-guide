var db = require('../models'),
    Ship = db.Ship;

function index(req, res) {
  Ship
    .find({})
    .populate('user')
    .exec(function(err, ship){
      if (err || !ship || !ship.length) {
        return res.status(404).send({message: 'Ships not found.'});
      }
      res.send(ship);
    });
}

module.exports = {
  index: index
};
