import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

export default refs => new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField(),
    name: { type: GraphQLString },
  },
})