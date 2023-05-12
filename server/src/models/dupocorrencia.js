const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupocorrencia', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    executar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    extrato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    extratotarifa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'dupocorrencia',
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
