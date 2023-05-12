const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizador', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOME: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    ASSUNTO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    HORA: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "00:00:00"
    },
    DATAAVISO: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    STATUS: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    SITUACAO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CADASTRADO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    ALTERADO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    OBS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'organizador',
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
