const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('correlacaocfopcst', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tribut: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cfop: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    cstcsosn: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    piscofins: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'correlacaocfopcst',
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
        name: "tribut",
        using: "BTREE",
        fields: [
          { name: "tribut" },
        ]
      },
    ]
  });
};
