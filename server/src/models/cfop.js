const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cfop', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CFO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OBS: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cfop',
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
