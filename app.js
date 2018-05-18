const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth-users');




// ________CONNECT TO DATABASE________
mongoose
  .connect('mongodb://localhost/auth-users')
  .then(() => {
    server.listen(port, (req, res) => {
      console.log(`Server listening on port ${port}`);
      console.log('Connected to MongoDB, ready to go!')
    });
  })
  .catch(err =>
    console.log('Problem connecting to MongoDB.  Time to troubleshoot!', err)
  );
