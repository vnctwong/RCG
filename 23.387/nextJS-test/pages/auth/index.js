import React from 'react';

import User from '../../components/User';

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page</h1>
    <User name="bob" age={28} />
  </div>
);

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'App Auth' });
    }, 1000);
  });
  return promise
};

export default authIndexPage;
