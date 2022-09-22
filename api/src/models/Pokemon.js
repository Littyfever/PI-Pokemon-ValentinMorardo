const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    ataque: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    defensa: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    velocidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    altura: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createdInDb:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  });
};
