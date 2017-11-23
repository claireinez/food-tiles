import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      location: 'Spitalfields'
    };

    wrapper = shallow(<Header { ...props } />);
  });

  it('should render a header div', () => {
    expect(wrapper.find('.app-header')).toHaveLength(1);
  });

  it('should render a header surtitle', () => {
    expect(wrapper.find('.header-surtitle')).toHaveLength(1);
  });

  it('should render a header title', () => {
    expect(wrapper.find('.header-title')).toHaveLength(1);
  });

  it('should render the location on the page', () => {
    expect(wrapper.find('.header-title').text()).toEqual('Spitalfields');
  });

  it('should render a location button', () => {
    expect(wrapper.find('.header-location-button')).toHaveLength(1);
  });
})
