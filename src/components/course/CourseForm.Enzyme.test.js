import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup (saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

it('renders form and h1', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Manage Course');
});

it('save button is labeled "Save" when not saing', () => {
  const wrapper = setup(false);
  expect(wrapper.find('input').props().value).toBe('Save');
});

it('save button is labeled "Saving..." when not saing', () => {
  const wrapper = setup(true);
  expect(wrapper.find('input').props().value).toBe('Saving...');
});
