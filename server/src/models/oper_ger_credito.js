const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oper_ger_credito', {
    cst_pis_cofins: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    cfop_original: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    cfop_dir: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'oper_ger_credito',
    timestamps: false
  });
};
