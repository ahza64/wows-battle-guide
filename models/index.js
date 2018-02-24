var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL ||
                  'mongodb://localhost/wows-battle-guide' );


module.exports = {
  Ship: require('./ship')
};
