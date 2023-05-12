const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agenda', {
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
    FONE1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FONE2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CELULAR: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    SITE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FAX: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'agenda',
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
