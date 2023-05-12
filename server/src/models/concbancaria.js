const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('concbancaria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    banco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    conta: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    codigo: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    valor: {
      type: DataTypes.DOUBLE(11,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    checknum: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'concbancaria',
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
        name: "chave",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data" },
          { name: "valor" },
          { name: "conta" },
          { name: "checknum" },
        ]
      },
      {
        name: "data",
        using: "BTREE",
        fields: [
          { name: "data" },
        ]
      },
    ]
  });
};
