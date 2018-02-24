var db = require('./models');

var ships_list = [
  {
    name: "Zao",
    tier: "X",
    quip: "Is it hot in here?",
    img: "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC034.png",
    mainGuns: {
      cal: 203,
      HE: {
        fireChance: 19,
        dmg: 3400
      },
      AP: {
        dmg: 5400,
        penValues: {
          km5: 396,
          km10: 295,
          km15: 220,
          kmMax: 206
        }
      }
    },
    armor: {
      bow: 25,
      belt: 125,
      citadel: 25,
      upperHull: 30,
      deck: 30,
      structure: 16
    }
  },
  {
    name: "Des Moines",
    tier: "X",
    quip: "Close range death",
    img: "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PASC020.png",
    mainGuns: {
      cal: 203,
      HE: {
        fireChance: 14,
        dmg: 2800
      },
      AP: {
        dmg: 5000,
        penValues: {
          km5: 364,
          km10: 261,
          km15: 189,
          kmMax: 180
        }
      }
    }
  }
];

db.Ship.remove({}, function(err, ships){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all ships');

    db.Ship.create(ships_list, function(err, ships){
      if (err) { return console.log('err', err); }
      console.log("created", ships.length, "ships");
      process.exit();
    });
  }
});
