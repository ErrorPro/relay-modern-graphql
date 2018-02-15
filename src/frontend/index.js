import React from 'react';
import { render } from 'react-dom';
import { setEnviroment } from 'relay-compose';

import relayEnv from './relayEnv';

import { UserListContainer } from './components/UserList';

setEnviroment(relayEnv);

render(<UserListContainer />, document.getElementById('root'));