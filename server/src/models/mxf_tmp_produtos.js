const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mxf_tmp_produtos', {
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    atualizacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    codigo_produto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ean: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    ncm: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ""
    },
    icms_cst_e: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ""
    },
    icms_cst_s: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ""
    },
    icms_alqt_e: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    icms_alqt_s: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    icms_rbc_e: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    icms_rbc_s: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    tipo_iva: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: " "
    },
    iva: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    pis_e: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    pis_s: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    pis_alqt_e: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    pis_alqt_s: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    pis_cst_e: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    pis_cst_s: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    cofins_e: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    cofins_s: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    cofins_alqt_e: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    cofins_alqt_s: {
      type: DataTypes.DECIMAL(7,3),
      allowNull: true,
      defaultValue: 0.000
    },
    cofins_cst_e: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    cofins_cst_s: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: " "
    },
    fundamento_legal: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: " "
    },
    ncm_ex: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    cod_natureza_receita: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mxf_tmp_produtos',
    timestamps: false,
    indexes: [
      {
        name: "id",
        using: "BTREE",
        fields: [
          { name: "codigo_produto" },
        ]
      },
    ]
  });
};
