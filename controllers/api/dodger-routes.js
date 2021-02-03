const router = require('express').Router();
const { Dodger } = require('../../models');

// POST /api/dodgers  THIS IS THE REGISTER FORM SUBMIT
router.post('/', (req, res) => {
  console.log('BEFORE CREATION');
  Dodger.create({
    dodgername: req.body.dodgername,
    email: req.body.email,
    password: req.body.password,
    games_won: req.body.games_won,
    games_loss: req.body.games_loss,
  })
    .then(dbDodgerData => {
      const { dodgername, games_won, games_loss } = dbDodgerData.dataValues;
      res.json({ dodgername, games_won, games_loss, loggedIn: true });
    })
    .catch(err => res.status(500).json(err));
})

router.post('/login', (req, res) => {
  Dodger.findOne({
    where: { email: req.body.email }
  })
    .then(dbDodgerData => {
      if (!dbDodgerData) {
        res.status(400).json({ message: "A ball whiffs. No dodger with that email address!" });
        return;
      }

      const validPW = dbDodgerData.checkPassword(req.body.password);

      if (!validPW) {
        res.status(400).json({ message: "A ball comes from nowhere and blasts you in the face. Wrong Password!" });
        return;
      }
      const { dodgername, games_won, games_loss } = dbDodgerData.dataValues;
      res.json({ dodgername, games_won, games_loss, loggedIn: true, message: 'A ball magically appears in your hands! GAME ON!' });
    })
    .catch(err => res.status(500).json(err));
})

module.exports = router;