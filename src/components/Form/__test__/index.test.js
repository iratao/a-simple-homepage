import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../index';
import FormItem from '../FormItem'

it('renders one form item correctly', () => {
  const tree = renderer
    .create(<Form>
      <FormItem>
        <input />
      </FormItem>
    </Form>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders form item with name property correctly', () => {
  const tree = renderer
    .create(<Form>
      <FormItem name="input">
        <input />
      </FormItem>
    </Form>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders form item of submit type correctly', () => {
  const tree = renderer
    .create(<Form >
      <FormItem type="submit">
        <button>click</button>
      </FormItem>
    </Form>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});