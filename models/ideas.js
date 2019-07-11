const Ideas = sequelize.define('ideas', {
  // attributes
  idea_id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  author_id: {
    type: INTEGER,
  }
}, {
  // options
});

module.exports = Ideas;