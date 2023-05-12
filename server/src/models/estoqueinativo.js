const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoqueinativo', {
    codigo: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'estoqueinativo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
