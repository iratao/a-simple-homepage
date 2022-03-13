import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../index'

it('renders correctly', () => {
  const tree = renderer
    .create(<Modal>the content</Modal>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});