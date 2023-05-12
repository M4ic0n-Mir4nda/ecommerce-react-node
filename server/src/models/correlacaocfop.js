const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('correlacaocfop', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    de: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    },
    para: {
      type: DataTypes.STRING(4),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'correlacaocfop',
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
        name: "para",
        using: "BTREE",
        fields: [
          { name: "para" },
        ]
      },
      {
        name: "de",
        using: "BTREE",
        fields: [
          { name: "de" },
        ]
      },
    ]
  });
};
