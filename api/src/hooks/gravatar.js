// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// We need this to create the MD5 hash
const crypto = require('crypto')
// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar'
// The size query. Our chat needs 60px images
const query = 's=200'

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    // The user email
    const { email } = context.data
    // Gravatar uses MD5 hashes from an email address to get the image
    const hash = crypto.createHash('md5').update(email).digest('hex')
    context.data.avatar = `${gravatarUrl}/${hash}?${query}`
    // Hooks can either return nothing or a promise
    // that resolves with the `context` object for asynchronous operations
    return context;
  };
};
