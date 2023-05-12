const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartoes', {
    FORMAPGTO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    VALOR: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    TERMINAL: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: ""
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NCUPOM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NSU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AUTORIZADOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMEPOS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MODALIDADE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LOJA: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'cartoes',
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
    ]
  });
};
