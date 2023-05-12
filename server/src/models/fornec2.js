const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fornec2', {
    codforn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fornecedor: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    endereco: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    fone: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    contato: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fornec2',
    timestamps: false
  });
};
