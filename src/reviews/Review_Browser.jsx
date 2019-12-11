import React from 'react';
import axios from 'axios';
import { Component } from 'react';

class ReviewBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: null };
  }

  componentDidMount() {
    console.log('Review Browser did mount');

    axios({
      method: 'get',
      url: 'http://3.134.102.30/reviews/1/list',
      responseType: 'stream'
    })
      .then(function(response) {
        console.log(response);
        this.setState({ reviews: response.data.results });
      })
      .then(() => {
        this.render();
      })
      .catch(() => {
        console.log('review request error');
      });
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
