const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acessocloud', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    datacad: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Senha: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancelaCupom: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cancelaItem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caixa: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    suprimento: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sangria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estorno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vendas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechacaixa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contraVale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    servidor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCPERMITIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gaveta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diversos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIMESTAMPUPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acessocloud',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "REMOTE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
