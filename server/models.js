const mongoose = require('mongoose');
const schema = require('./schema');
const { friendSchema } = schema;

const Friend = mongoose.model('Friend', friendSchema);

module.exports = { Friend }