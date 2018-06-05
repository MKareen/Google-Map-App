const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const router = require('./routes/router');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/googleUsers');
require('./services/googlePassport');

mongoose.connect('mongodb://localhost/auth');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/googleRouter')(app);

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());
router(app);

const PORT = process.env.PORT || 3090;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
