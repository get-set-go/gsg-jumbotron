import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Jumbotron from '../dist/index.min';

class Page extends React.Component {
  render() {
    const content = (
      <div>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </div>
    );

    return (
      <div className="jumbotron-eg-container">
        <h1>Get-Set-Go Jumbotron Component</h1>

        <p className="jumbotron-eg-group">
          <h4>Jumbotron Styles</h4>

          <Jumbotron>{content}</Jumbotron>
        </p>
      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
