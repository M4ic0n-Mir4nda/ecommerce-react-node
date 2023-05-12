const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ecf', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ECF: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    MODELO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    NCAIXA: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ecf',
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
