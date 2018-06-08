const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config/keys');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

class Authentication {
  validate (req, res, next)  {
    req.checkBody('email', 'Enter an email').notEmpty();
    req.checkBody('email', 'Must be an email').isEmail();
    req.checkBody('password', 'Enter a password').notEmpty();
  
    let errors = req.validationErrors();
    if (errors) {
      let response = { errors: [] };
      errors.forEach((err) => {
        response.errors.push(err.msg);
      });
      res.status(400);
        return res.json(response);
    }
    return next();
  }

  signin (req, res, next)  {
    res.send({ token: tokenForUser(req.user) });
  }

  async signup (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    
    try {
      let existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(401).send({ error: 'Email is in use' });
        }
    } catch(err) {
        next(err);
    }
    try {
      const user = new User({ email, password });
      await user.save();
      res.json({ token: tokenForUser(user) });
    } catch(err) {
        next(err);
    }
  }

}

module.exports = new Authentication;