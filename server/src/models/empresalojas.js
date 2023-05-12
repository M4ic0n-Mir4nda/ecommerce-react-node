const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresalojas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    loja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: ""
    },
    porta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30000
    },
    db: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'empresalojas',
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
