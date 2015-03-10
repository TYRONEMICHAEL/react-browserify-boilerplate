/** @jsx React.DOM */
var React = require('react');
var CheckboxWithLabel = require('../src/checkboxWithLabel');

React.renderComponent(
  <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  document.getElementById('example')
);