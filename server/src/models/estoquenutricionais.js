const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estoquenutricionais', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    obs: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    porcao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    porcaoun: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    porcaoqtde: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    porcaoqtdedecimal: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    porcaodesc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    calorias: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gorduras: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    colesterol: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ferro: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    carboidrato: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gordurasaturada: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fibraalimentar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sodio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    proteinas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gorduratrans: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    calcio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    atualizacao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estoquenutricionais',
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
