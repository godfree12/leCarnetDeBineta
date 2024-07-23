const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { sequelize, Visiteur, TempUser } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post('/api/visiteurs/register', async (req, res) => {
  const { nom, prenom, email, password } = req.body;

  try {
    console.log('Requête reçue pour inscription:', req.body);

    const existingUser = await Visiteur.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = generateVerificationCode();
    const expiration = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

    await TempUser.create({ nom, prenom, email, password: hashedPassword, verificationCode, expiration });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lecarnetdebineta0@gmail.com',
        pass: 'ok t j h l t w l j b n l y l u'  // Assurez-vous de remplacer par le mot de passe réel
      }
    });

    const mailOptions = {
      from: 'lecarnetdebineta0@gmail.com',
      to: email,
      subject: 'Code de vérification',
      text: `Votre code de vérification est : ${verificationCode}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Code de vérification envoyé');
    });

  } catch (error) {
    console.error('Erreur lors du traitement de la requête de registre:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/visiteurs/verify', async (req, res) => {
  const { email, code_Confirmation } = req.body;

  try {
    console.log('Requête reçue pour vérification:', req.body);

    const tempUser = await TempUser.findOne({ where: { email, verificationCode: code_Confirmation } });

    if (!tempUser) {
      return res.status(400).json({ error: 'Invalid verification code' });
    }

    if (new Date() > tempUser.expiration) {
      await TempUser.destroy({ where: { email } });
      return res.status(400).json({ error: 'Verification code expired' });
    }

    const { nom, prenom, password } = tempUser;

    const newUser = await Visiteur.create({ nom, prenom, email, password });
    await TempUser.destroy({ where: { email } });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erreur lors de la vérification du code:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


