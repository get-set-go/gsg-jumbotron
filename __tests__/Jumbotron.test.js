import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Jumbotron from '../src';

describe('<Jumbotron /> component', function() {

  it('should jumbotron exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Jumbotron />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
