const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nfeunidades', {
    unidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    origem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'nfeunidades',
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
