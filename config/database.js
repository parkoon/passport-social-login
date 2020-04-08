const mongoose = require('mongoose')

module.exports = (uri) => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Mongo DB is connected')
    })
    .catch((err) => console.error(err))
}
