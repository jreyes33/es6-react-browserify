import ListItem from './ListItem.jsx';
import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <ul>
        <ListItem text="React" />
        <ListItem text="ES6 (via Babel)" />
        <ListItem text="Browserify" />
      </ul>
    );
  }
});
