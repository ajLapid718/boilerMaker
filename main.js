const app = require('./server');
const { db } = require('./server/db/models/index.js');
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

db.sync({force: true})
  .then(() => {
    console.log("The database is synced, all tables created!");
    app.listen(port, function () {
    console.log("Knock, knock");
    console.log("Who's there?");
    console.log(`Your server, listening on port ${port}`);
  }));
  .catch(err => console.log(err));
