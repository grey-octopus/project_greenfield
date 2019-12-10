import React from 'react';
import { Component } from 'react';

class ReviewBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Review Browser did mount');
  }

  render() {
    return (
      <div>
        <h3>right column, list of reviews</h3>
      </div>
    );
  }
}

export default ReviewBrowser;
