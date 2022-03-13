import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMsg from '../index'

it('renders error message when there is a valid error prop', () => {
  const tree = renderer
    .create(<ErrorMsg error={'error'} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('does not renders error message when there is not a valid error prop', () => {
  const tree = renderer
    .create(<ErrorMsg error={''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

