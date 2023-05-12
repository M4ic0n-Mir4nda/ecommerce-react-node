const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contribuinte', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CNPJ: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    IE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RAZAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UF: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CODMUNICIP: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MUNICIP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SUFRAMA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NATJURIDICA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    INCID_TRIB_PER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MET_APROP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_CONTRIB_PER: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    INDIC_APUR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPOATIVIDADE: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contribuinte',
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
