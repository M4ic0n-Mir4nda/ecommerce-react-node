const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codmunicip', {
    CODIGO: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: ""
    },
    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    UF: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'codmunicip',
    timestamps: false
  });
};
