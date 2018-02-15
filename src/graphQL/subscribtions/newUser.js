import { GraphQLObjectType } from 'graphql';

export default refs => new GraphQLObjectType({
  name: 'NewUserSubscribtion',
  fields: {
    user: { type: refs.user }
  },
});
