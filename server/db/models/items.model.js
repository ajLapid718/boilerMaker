const Sequelize = require('sequelize');
const db = require('../database.js');

const Item = db.define('item', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },

  weight: {
    type: Sequelize.INTEGER
  }

})

// Virtuals and Hooks could also be included;

module.exports = Item;
