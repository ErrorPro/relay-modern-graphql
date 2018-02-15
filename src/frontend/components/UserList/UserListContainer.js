import {
  graphql,
} from 'react-relay';
import { queryRenderer } from 'relay-compose';

import UserList from './UserList';

export default queryRenderer(graphql`
  query UserListContainerQuery {
    users(first: 100) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`)(UserList);