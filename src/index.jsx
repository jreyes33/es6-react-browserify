import List from './List.jsx';
import Header from './Header.jsx';
import React from 'react';

React.render(
  <div id="container">
    <Header />
    <List />
  </div>,
  document.getElementById('content')
);
