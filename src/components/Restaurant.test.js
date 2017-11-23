import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Restaurant from './Restaurant';

Enzyme.configure({ adapter: new Adapter() });

describe('Restaurant', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      restaurant: {
        id: 1,
        name: 'Aaa restaurant',
        categories: ['Aussie', 'Antipodean'],
        price: 1,
        image: 'aaaurl'
      },
      country: 'UK'
    };

    wrapper = shallow(<Restaurant { ...props } />);
  });

  it('should render a restaurant thumbnail', () => {
    expect(wrapper.find('.restaurant-thumbnail')).toHaveLength(1);
  });

  it('should render a restaurant image', () => {
    expect(wrapper.find('.restaurant-image')).toHaveLength(1);
  });

  it('should render a restaurant title element', () => {
    expect(wrapper.find('.restaurant-title')).toHaveLength(1);
  });

  it('should render the correct restaurant title', () => {
    expect(wrapper.find('.restaurant-title').text()).toEqual('Aaa restaurant');
  });

  it('should render a restaurant subtitle element', () => {
    expect(wrapper.find('.restaurant-subtitle')).toHaveLength(1);
  });

  it('should render the correct restaurant subtitle', () => {
    expect(wrapper.find('.restaurant-subtitle').text()).toEqual('Aussie・Antipodean・');
  });

  it('should render a price element', () => {
    expect(wrapper.find('Price')).toHaveLength(1);
  });
})
