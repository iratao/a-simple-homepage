import React from 'react';
import renderer from 'react-test-renderer';
import FormItem from '../index'

it('renders correctly', () => {
  const tree = renderer
    .create(<FormItem><input /> </FormItem>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('register fields to it\'s child correctly', () => {
  const tree = renderer
    .create(<FormItem name="name"><input /> </FormItem>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

