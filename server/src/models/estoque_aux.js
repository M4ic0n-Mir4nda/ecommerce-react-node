const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoque_aux', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ID_CAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(13),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoque_aux',
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
