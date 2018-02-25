var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var shipSchema = new Schema({
  name: String,
  class: String,
  tier: String,
  quip: String,
  img: String,
  mainGuns: {
    cal: Number,
    HE: {
      fireChance: Number,
      dmg: Number
    },
    AP: {
      dmg: Number,
      penValues: {
        km5: Number,
        km10: Number,
        km15: Number,
        kmMax: Number
      }
    }
  },
  armor: {
    bow: Number,
    belt: Number,
    citadel: Number,
    upperHull: Number,
    deck: Number,
    structure: Number,
    layered: Boolean,
    protected: Boolean
  }
});

var Ship = mongoose.model('Ship', shipSchema);
module.exports = Ship;
