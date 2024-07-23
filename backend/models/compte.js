const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Compte = sequelize.define('Compte', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Compte.beforeCreate(async (compte) => {
    const hashedPassword = await bcrypt.hash(compte.password, 10);
    compte.password = hashedPassword;
  });

  return Compte;
};
