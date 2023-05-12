const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grade', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CODIGO2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    TAM: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    COR: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    OBS: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    QTDE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'grade',
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
