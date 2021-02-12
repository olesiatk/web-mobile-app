import React from 'react';

export const Main = () => (
  <section className="App__page-main">
    <h1 className="App__header">
      Hello,
      {localStorage.getItem('name')}
      !
    </h1>
  </section>
);
