module.exports = require('mongoose').connect('mongodb://localhost/discussion_db', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})
