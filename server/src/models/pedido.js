const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedido', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODIGOCLI: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NOME: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CPF: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    RG: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CEP: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    UF: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    FONE: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    PEDIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    NOTA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRPRO: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRNOTA: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    VRICMS: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    DATA: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    DINHEIRO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CHEQUE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CARTAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DESCONTO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DATAPAG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VEICULO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PLACA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    COR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FORMAPGTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VENDEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pedido',
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
