const { Compte } = require('../models');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const { nom, prenom, email, password } = req.body;

  try {
    const existingUser = await Compte.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCompte = await Compte.create({ nom, prenom, email, password: hashedPassword });

    res.status(201).json(newCompte);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const compte = await Compte.findOne({ where: { email } });
    if (!compte) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, compte.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
