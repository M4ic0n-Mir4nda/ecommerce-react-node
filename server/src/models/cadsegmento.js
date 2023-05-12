const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cadsegmento', {
    CODSEGMENT0: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DSCSEGMENTO: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    NUMSEGMENTO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cadsegmento',
    timestamps: false
  });
};
