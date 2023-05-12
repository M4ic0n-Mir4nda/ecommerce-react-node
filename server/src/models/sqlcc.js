const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sqlcc', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "nome_UNIQUE"
    },
    texto1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    texto2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    texto3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    valor1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    valor2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    valor3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    agrupavalor1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    agrupavalor2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cvalor1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cvalor2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soma1nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    soma1campo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    soma2nome: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    soma2campo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    usuarios: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    imprimir: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'sqlcc',
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
        name: "nome_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nome" },
        ]
      },
    ]
  });
};
