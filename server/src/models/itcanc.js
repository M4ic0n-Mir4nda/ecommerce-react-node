const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itcanc', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UNITARIO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    SUBTOTAL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PDV: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OPERADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itcanc',
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
