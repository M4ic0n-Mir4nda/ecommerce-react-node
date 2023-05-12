const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reducaoz', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    GT: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VENDABRUTA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    CRO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    COO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CRZ: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SNECF: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: ""
    },
    MODELOECF: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: ""
    },
    NCAIXA: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: ""
    },
    ORIGEM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    arquivado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reducaoz',
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
