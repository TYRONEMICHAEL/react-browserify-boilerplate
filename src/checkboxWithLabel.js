/** @jsx React.DOM */
var React = require('react/addons');

var CheckboxWithLabel = React.createClass({

  getInitialState: function() {
    return { isChecked: false };
  },

  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },

  render: function() {
    return (
      <label className="checkbox-with-label" checkBoxWithLabel>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
          checkBoxWithLabel-input="color-red"
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
