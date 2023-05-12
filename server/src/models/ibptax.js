const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ibptax', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ncm: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    ex: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    tabela: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    aliqNac: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    aliqImp: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ibptax',
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
        name: "ncm",
        using: "BTREE",
        fields: [
          { name: "ncm" },
        ]
      },
    ]
  });
};
