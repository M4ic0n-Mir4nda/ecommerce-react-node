const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agendador', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dataAlteracao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cliente: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    contato: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    fone: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    problema: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ""
    },
    obs: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ""
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emissao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'agendador',
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
