const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventario', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCRICAO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DATAINI: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    DATAFIM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OBS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DEPTO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    USUARIO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COD_ITEM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UNID: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    QTD: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VL_UNIT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    IND_PROP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_PART: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    COD_CTA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cst: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    aliqicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sbc: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    bcicms: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventario',
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
