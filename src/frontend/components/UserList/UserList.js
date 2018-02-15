import React, { Component } from 'react';

export default class UsersList extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.edges.map(({ node }) => (
          <div key={node.id}>
            {node.name}
          </div>
        ))}
      </div>
    )
  }
}