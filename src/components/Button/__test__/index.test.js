import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

it('renders correctly', () => {
  const tree = renderer
    .create(<Button>Click</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('can set custom className', () => {
  const tree = renderer
    .create(<Button className='myCustomClassName'>Click</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('show loading icon when in loading mode', () => {
  const tree = renderer
    .create(<Button loading={true}>Click</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})