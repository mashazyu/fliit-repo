import React from 'react';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { TaskList } from './tasks';
import NotFound from './NotFound';
import authClient from './authClient';

const App = () => (
    <Admin
      title="Fliit Task Dashboard"
      catchAll={NotFound}
      authClient={authClient}
      restClient={jsonServerRestClient('https://my-json-server.typicode.com/mkz2405/fliit-repo')}>
      <Resource
        list={TaskList}
        name="tasks"
      />
    </Admin>
);

export default App;
