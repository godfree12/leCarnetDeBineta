module.exports = (sequelize, DataTypes) => {
    const TempUser = sequelize.define('TempUser', {
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
      },
      verificationCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  
    return TempUser;
  };
  