const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fornec', {
    CODIGO: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CLIENTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FANTASIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ENDERECO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    BAIRRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CIDADE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CEP: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CNPJ: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    INSC: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TELEFONE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TELEFONE2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TELEFONE3: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CONTATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONTATO2: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CONTATO3: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    RAMAL: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    RAMAL2: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    RAMAL3: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FAX: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    OBS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SALDODEVED: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DTULTFAT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATULTDUPL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATACRIAC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SALDOANT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ULTPEDIDO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DTULTPEDID: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ICM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DATADESAT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DTULTFOR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DTULTVEN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSDESAT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CODMUNICIP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    REGIME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPOCONTRIBUINTE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TIPOPESSOA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    VENDEDOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMISSAO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PRAZO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    analise: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    analisemotivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emailxml: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    senhaweb: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    metavenda: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    limitecredito: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    compl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    obscotacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sexo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mobilidade: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    DATACAD: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00"
    },
    BANCO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PROPRIETARIO: {
      type: DataTypes.STRING(18),
      allowNull: true
    },
    VENDEDORCOD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    formapgto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIMESTAMPUPDATE: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'fornec',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CODIGO" },
        ]
      },
    ]
  });
};
