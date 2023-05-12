const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tributos', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    INDICE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ALQICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ALICMSST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    REDBC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tributos',
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
    ]
  });
};
