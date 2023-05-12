const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tribut', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TRIBUT: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IMPOSTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tribut',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "tribut",
        using: "BTREE",
        fields: [
          { name: "TRIBUT" },
        ]
      },
    ]
  });
};
