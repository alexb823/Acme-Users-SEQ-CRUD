const server = require('./app');
const { initDb } = require('./db');

const port = process.env.PORT || 3000;

initDb()
  .then(() =>
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}!`)
    )
  )
  .catch(error => console.error(error));
