import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { connectionDefinitions } from 'graphql-relay';
import * as queries from './queries';
import * as types from './types';

const all = {
  ...queries,
  ...types,
}

const refs = Object.keys(types).reduce((acc, key) => {
  acc[key] = all[key](acc);

  const { connectionType, edgeType } = connectionDefinitions({ nodeType: acc[key] });

  acc[`${key}Connection`] = connectionType;
  acc[`${key}Edge`] = edgeType;

  return acc;
}, {});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'viewer',
    fields: Object.keys(queries).reduce((acc, key) => {
      acc[key] = queries[key](refs);

      return acc;
    }, {}),
  }),
});
