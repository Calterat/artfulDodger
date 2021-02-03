const router = require('express').Router();
const { Dodger } = require('../../models');

// POST /api/dodgers  THIS IS THE REGISTER FORM SUBMIT
router.post('/', (req, res) => {
  Dodger.create({
    dodgername: req.body.dodgername,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbDodgerData => {
      req.session.save(() => {
        req.session.dodger_id = dbDodgerData.id;
        req.session.dodgername = dbDodgerData.username;
        req.session.loggedIn = true;
        res.json(dbDodgerData);
      })
    })
    .catch(err => res.status(500).json(err));
})

router.post('/login', (req, res) => {
  Dodger.findOne({
    where: { email: req.body.email }
  })
    .then(dbDodgerData => {
      if (!dbDodgerData) {
        res.status(400).json({ message: "The ball whiffed. No dodger with that email address! " });
        return;
      }

      const validPW = dbDodgerData.checkPassword(req.body.password);

      if (!validPW) {
        res.status(400).json({ message: "A ball blasts you in the face. Wrong Password! " });
        return;
      }

      req.session.save(() => {
        req.session.dodger_id = dbDodgerData.id;
        req.session.dodgername = dbDodgerData.username;
        req.session.loggedIn = true;
        res.json({ dodger: dbDodgerData, message: 'a ball magically appears in your hands. GAME ON!' });
      });
    })
    .catch(err => res.status(500).json(err));
})

module.exports = router;