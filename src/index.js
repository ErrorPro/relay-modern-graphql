const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./graphQL').default;

const db = {
  users: new Array(100).fill().map((e, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
  })),
}

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: {
    db,
  }
}))

app.listen(3000, () => console.log('Listening to 3000'));