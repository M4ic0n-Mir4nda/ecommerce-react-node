const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoqueajustes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    EAN: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    Data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    Tipo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    QtAnt: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    QtMov: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    QtDepois: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    Usuario: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Historico: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valor1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    pmz: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    precovenda4: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    loja: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoqueajustes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "codigo",
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "EAN",
        using: "BTREE",
        fields: [
          { name: "EAN" },
        ]
      },
    ]
  });
};
