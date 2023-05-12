const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_pet_prontuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    queixa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avaliacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    suspeita: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    retorno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    abertura: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes_pet_prontuario',
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
        name: "idcliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "idpet",
        using: "BTREE",
        fields: [
          { name: "id_pet" },
        ]
      },
    ]
  });
};
