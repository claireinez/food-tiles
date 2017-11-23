import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import NavBar from './NavBar';

Enzyme.configure({ adapter: new Adapter() });

describe('NavBar', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      user: {
        firstName: 'Alex',
        lastName: 'Smith'
      }
    };

    wrapper = shallow(<NavBar { ...props } />);
  });

  it('should render a nav bar', () => {
    expect(wrapper.find('.nav-bar')).toHaveLength(1);
  });

  it('should render a nav bar logo', () => {
    expect(wrapper.find('.nav-bar-logo')).toHaveLength(1);
  });

  it('should render a user avatar', () => {
    expect(wrapper.find('.user-avatar')).toHaveLength(1);
  });

  it('should render a default avatar if the user has none', () => {
    expect(wrapper.find('.user-avatar').props().src).toEqual('avatar.svg');
  });

  it('should render the user\'s avatar if they have one', () => {
    props = {
      user: {
        firstName: 'Alex',
        lastName: 'Smith',
        image: 'alexImage.png'
      }
    };
    wrapper = shallow(<NavBar { ...props } />);

    expect(wrapper.find('.user-avatar').props().src).toEqual('alexImage.png');
  });

  it('should render a user name element', () => {
    expect(wrapper.find('.user-name')).toHaveLength(1);
  });

  it('should render the full user name on the page', () => {
    expect(wrapper.find('.user-name').text()).toEqual('Alex Smith');
  });
})
