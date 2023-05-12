const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acesso', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATACAD: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    bloqueio: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    Nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    caixa: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
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
    servidor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCPERMITIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GAVETA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DIVERSOS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lojas: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    TIMESTAMPUPDATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'acesso',
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
