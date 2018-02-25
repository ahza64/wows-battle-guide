var db = require('./models');

var ships_list = [
  {
    name: "Zao",
    class: "CL",
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
    class: "CL",
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
    },
    armor: {
      bow: 27,
      belt: 152,
      citadel: 0,
      upperHull: 27,
      deck: 30,
      structure: 16
    }
  },
  {
    name: "Moskva",
    class: "CL",
    tier: "X",
    quip: "Come schedule your beating",
    img: "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PRSC110.png",
    mainGuns: {
      cal: 220,
      HE: {
        fireChance: 17,
        dmg: 3100
      },
      AP: {
        dmg: 5800,
        penValues: {
          km5: 487,
          km10: 388,
          km15: 310,
          kmMax: 256
        }
      }
    },
    armor: {
      bow: 25,
      belt: 155,
      citadel: 25,
      upperHull: 50,
      deck: 50,
      structure: 16
    }
  },
  {
    "name": "Hindenburg",
    "class": "CL",
    "tier": "X",
    "quip": "Bringing a gun to your knife fight",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PGSC110.png",
    "mainGuns": {
      "cal": 203,
      "HE": {
        "fireChance": 13,
        "dmg": 2500
      },
      "AP": {
        "dmg": 5900,
        "penValues": {
          "km5": 329,
          "km10": 236,
          "km15": 169,
          "kmMax": 143
        }
      }
    },
    "armor": {
      "bow": 27,
      "belt": 110,
      "citadel": 45,
      "upperHull": 30,
      "deck": 30,
      "structure": 16
    }
  },
  {
    "name": "Minotaur",
    "class": "CL",
    "tier": "X",
    "quip": "Ah hoy hoy",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PBSC110.png",
    "mainGuns": {
      "cal": 152,
      "HE": {
        "fireChance": 0,
        "dmg": 0
      },
      "AP": {
        "dmg": 3200,
        "penValues": {
          "km5": 212,
          "km10": 132,
          "km15": 85,
          "kmMax": 80
        }
      }
    },
    "armor": {
      "bow": 16,
      "belt": 100,
      "citadel": 25,
      "upperHull": 16,
      "deck": 16,
      "structure": 13,
      "layered": false
    }
  },
  {
    "name": "Henri IV",
    "class": "CL",
    "tier": "X",
    "quip": "Ferrari Baguette",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PFSC110.png",
    "mainGuns": {
      "cal": 240,
      "HE": {
        "fireChance": 22,
        "dmg": 3400
      },
      "AP": {
        "dmg": 6200,
        "penValues": {
          "km5": 481,
          "km10": 377,
          "km15": 296,
          "kmMax": 247
        }
      }
    },
    "armor": {
      "bow": 25,
      "belt": 159,
      "citadel": 45,
      "upperHull": 30,
      "deck": 30,
      "structure": 16
    }
  },
  {
    "name": "Yamato",
    "class": "BB",
    "tier": "X",
    "quip": "I've got the biggest one",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PJSB018.png",
    "mainGuns": {
      "cal": 460,
      "HE": {
        "fireChance": 35,
        "dmg": 7300
      },
      "AP": {
        "dmg": 14800,
        "penValues": {
          "km5": 796,
          "km10": 681,
          "km15": 583,
          "kmMax": 503
        }
      }
    },
    "armor": {
      "bow": 32,
      "belt": 410,
      "citadel": 50,
      "upperHull": 32,
      "deck": 57,
      "structure": 19
    }
  },
  {
    "name": "Montana",
    "class": "BB",
    "tier": "X",
    "quip": "yeee'haw",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PASB017.png",
    "mainGuns": {
      "cal": 406,
      "HE": {
        "fireChance": 36,
        "dmg": 5700
      },
      "AP": {
        "dmg": 13500,
        "penValues": {
          "km5": 736,
          "km10": 619,
          "km15": 521,
          "kmMax": 444
        }
      }
    },
    "armor": {
      "bow": 32,
      "belt": 406,
      "citadel": 50,
      "upperHull": 38,
      "deck": 38,
      "structure": 19
    }
  },
  {
    "name": "Grosser Kurfurst",
    "class": "BB",
    "tier": "X",
    "quip": "The Iron Boot",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PGSB110.png",
    "mainGuns": {
      "cal": 406,
      "HE": {
        "fireChance": 36,
        "dmg": 5700
      },
      "AP": {
        "dmg": 13500,
        "penValues": {
          "km5": 736,
          "km10": 619,
          "km15": 521,
          "kmMax": 444
        }
      }
    },
    "armor": {
      "bow": 32,
      "belt": 406,
      "citadel": 50,
      "upperHull": 38,
      "deck": 38,
      "structure": 19
    }
  },
  {
    "name": "Conqueror",
    "class": "BB",
    "tier": "X",
    "quip": "need to update data armor",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PBSB110.png",
    "mainGuns": {
      "cal": 457,
      "HE": {
        "fireChance": 63,
        "dmg": 8200
      },
      "AP": {
        "dmg": 14900,
        "penValues": {
          "km5": 719,
          "km10": 631,
          "km15": 554,
          "kmMax": 490
        }
      }
    },
    "armor": {
      "bow": 32,
      "belt": 406,
      "citadel": 50,
      "upperHull": 38,
      "deck": 38,
      "structure": 19
    }
  },
  {
    "name": "France",
    "class": "BB",
    "tier": "X",
    "quip": "need to update data armor",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PFSB110.png",
    "mainGuns": {
      "cal": 431,
      "HE": {
        "fireChance": 48,
        "dmg": 6300
      },
      "AP": {
        "dmg": 14500,
        "penValues": {
          "km5": 828,
          "km10": 694,
          "km15": 582,
          "kmMax": 493
        }
      }
    },
    "armor": {
      "bow": 32,
      "belt": 406,
      "citadel": 50,
      "upperHull": 38,
      "deck": 38,
      "structure": 19
    }
  },
  {
    "name": "Shimakaze",
    "class": "DD",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PJSD012.png",
    "mainGuns": {
      "cal": 127,
      "HE": {
        "fireChance": 7,
        "dmg": 1800
      },
      "AP": {
        "dmg": 2200,
        "penValues": {
          "km5": 107,
          "km10": 46,
          "km15": 37,
          "kmMax": 37
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 19,
      "citadel": 19,
      "upperHull": 19,
      "deck": 18,
      "structure": 13
    }
  },
  {
    "name": "Gearing",
    "class": "DD",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PASD013.png",
    "mainGuns": {
      "cal": 127,
      "HE": {
        "fireChance": 5,
        "dmg": 1800
      },
      "AP": {
        "dmg": 2100,
        "penValues": {
          "km5": 111,
          "km10": 49,
          "km15": 41,
          "kmMax": 41
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 21,
      "citadel": 19,
      "upperHull": 21,
      "deck": 19,
      "structure": 13
    }
  },
  {
    "name": "Khabarovsk",
    "class": "DD",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PRSD110.png",
    "mainGuns": {
      "cal": 130,
      "HE": {
        "fireChance": 8,
        "dmg": 1900
      },
      "AP": {
        "dmg": 2600,
        "penValues": {
          "km5": 138,
          "km10": 90,
          "km15": 81,
          "kmMax": 81
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 50,
      "citadel": 50,
      "upperHull": 50,
      "deck": 25,
      "structure": 13
    }
  },
  {
    "name": "Grozovoi",
    "class": "DD",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PRSD210.png",
    "mainGuns": {
      "cal": 130,
      "HE": {
        "fireChance": 8,
        "dmg": 1800
      },
      "AP": {
        "dmg": 2600,
        "penValues": {
          "km5": 151,
          "km10": 93,
          "km15": 84,
          "kmMax": 84
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 19,
      "citadel": 19,
      "upperHull": 19,
      "deck": 19,
      "structure": 13
    }
  },
  {
    "name": "Z-52",
    "class": "DD",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PGSD110.png",
    "mainGuns": {
      "cal": 128,
      "HE": {
        "fireChance": 7,
        "dmg": 1500
      },
      "AP": {
        "dmg": 3000,
        "penValues": {
          "km5": 98,
          "km10": 57,
          "km15": 45,
          "kmMax": 45
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 19,
      "citadel": 19,
      "upperHull": 19,
      "deck": 19,
      "structure": 13
    }
  },
  {
    "name": "Yueyang",
    "class": "DD",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PZSD110.png",
    "mainGuns": {
      "cal": 127,
      "HE": {
        "fireChance": 5,
        "dmg": 1800
      },
      "AP": {
        "dmg": 2100,
        "penValues": {
          "km5": 111,
          "km10": 47,
          "km15": 37,
          "kmMax": 37
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 19,
      "citadel": 19,
      "upperHull": 19,
      "deck": 19,
      "structure": 13
    }
  },
  {
    "name": "Hakuryu",
    "class": "CV",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA017.png",
    "mainGuns": {
      "cal": 127,
      "HE": {
        "fireChance": 5,
        "dmg": 1800
      },
      "AP": {
        "dmg": 2100,
        "penValues": {
          "km5": 111,
          "km10": 47,
          "km15": 37,
          "kmMax": 37
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 19,
      "citadel": 19,
      "upperHull": 19,
      "deck": 19,
      "structure": 13
    }
  },
  {
    "name": "Midway",
    "class": "CV",
    "tier": "X",
    "quip": "a",
    "img": "https://glossary-eu-static.gcdn.co/icons/wows/current/vehicle/medium/PASA015.png",
    "mainGuns": {
      "cal": 127,
      "HE": {
        "fireChance": 5,
        "dmg": 1800
      },
      "AP": {
        "dmg": 2100,
        "penValues": {
          "km5": 111,
          "km10": 47,
          "km15": 37,
          "kmMax": 37
        }
      }
    },
    "armor": {
      "bow": 19,
      "belt": 19,
      "citadel": 19,
      "upperHull": 19,
      "deck": 19,
      "structure": 13
    }
  },
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
