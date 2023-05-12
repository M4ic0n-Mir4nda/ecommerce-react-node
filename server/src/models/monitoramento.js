const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monitoramento', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TERMINAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CAMPO1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAMPO2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAMPO3: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAMPO4: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAMPO5: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAMPO6: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CAMPO7: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monitoramento',
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
