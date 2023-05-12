const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_produtos', {
    cod: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    preco: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_produtos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod" },
        ]
      },
    ]
  });
};
