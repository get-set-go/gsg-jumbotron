import '../node_modules/gsg-common-style/less/jumbotron/index.less';

import React, { PropTypes } from 'react';

export default class GSGJumbotron extends React.Component {
  render() {
    return(
      <div className="jumbotron">{this.props.children}</div>
    );
  }
};
