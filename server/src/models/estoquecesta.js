const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquecesta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigocesta: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    codigoproduto: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    qtde: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 1
    },
    precovenda: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'estoquecesta',
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
