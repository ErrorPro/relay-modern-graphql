const { introspectionQuery, graphql } = require('graphql');
const path = require('path');
const fs = require('fs');
const Schema = require('./graphQL').default;

graphql(Schema, introspectionQuery).then(res => {
  fs.writeFileSync(
    path.join(__dirname, 'schema.json'),
    JSON.stringify(res, null, 2)
  );
})