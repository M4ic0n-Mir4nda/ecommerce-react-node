const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventonfe', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    idNOTA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NOTA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    TIPO: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    seqEVENTO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    CHAVE: {
      type: DataTypes.STRING(48),
      allowNull: true,
      defaultValue: ""
    },
    PROTOCOLO: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    MOTIVO: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    RETORNO: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    DHRECIBO: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'eventonfe',
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
