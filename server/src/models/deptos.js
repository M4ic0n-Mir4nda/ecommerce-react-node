const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Deptos', {
    depto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grupo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subgr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    margem1: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Deptos',
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
