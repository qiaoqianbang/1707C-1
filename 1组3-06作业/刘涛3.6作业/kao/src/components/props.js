import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class componentName extends Component {
  // console.log(this.props)
  render() {
    return (
      <div>
        prop
      </div>
    )
  }
}

componentName.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  boo: PropTypes.bool,
  obj: PropTypes.object,
  customProp: function (arr) {
    console.log(arr)
    if (!arr.name) {
      return new Error(
        "123"
      );
    }
  }
}
