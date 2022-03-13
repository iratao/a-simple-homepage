import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../index'

it('renders correctly', () => {
  const tree = renderer
    .create(<Input />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('correctly shows custom placeholder', () => {
  const tree = renderer
    .create(<Input placeholder='custom input placeholder'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

it('can be set with value', () => {
  const tree = renderer
    .create(<Input value='custom input value'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})