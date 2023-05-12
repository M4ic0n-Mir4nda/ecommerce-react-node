const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dupextratoocorrencia', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipotrans: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    historico: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    executar: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'dupextratoocorrencia',
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
        name: "tipotrans",
        using: "BTREE",
        fields: [
          { name: "tipotrans" },
        ]
      },
      {
        name: "executar",
        using: "BTREE",
        fields: [
          { name: "executar" },
        ]
      },
    ]
  });
};
