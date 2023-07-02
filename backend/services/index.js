const authService = require('./auth.service');
const userService = require('./users.service');
const tokenService = require('./token.service')
const blogService = require('./discussion.service')
module.exports = {
  authService,
  userService,
  tokenService,
  blogService
}