import { connectionArgs, connectionFromArray } from 'graphql-relay';

export default refs => ({
  type: refs.userConnection,
  args: connectionArgs,
  resolve: ({ db }, args) => {
    return connectionFromArray(db.users, args);
  }
});