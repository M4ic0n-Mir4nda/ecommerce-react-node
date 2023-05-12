const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientesad', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IDB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IDCLIENTE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TEMPRES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LOCALNASC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SEXO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CIVIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UFNASC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    RESANTERIOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TEMPRESAN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FIRMAATUAL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FIRMAA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TEMPOFIRMAA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECO1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRRO1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FONE1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ADMISSAO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SALBASE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CHAPA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CARGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMEC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NASCIMENTOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RGC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CPFC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FIRMAC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECOC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRROC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SALBASEC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CARGOC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FONEC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMEP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GRAUPP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECOP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRROP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FONEP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMECB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    OBSCB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECOCB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRROCB: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FONECB: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientesad',
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
