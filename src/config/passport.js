const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { tokenTypes } = require('./tokens');
const { User } = require('../models');
const config = require('./config');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret,
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(opts, jwtVerify);

module.exports = {
  jwtStrategy,
};
