import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import RestaurantList from './RestaurantList';

Enzyme.configure({ adapter: new Adapter() });

describe('RestaurantList', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      restaurants: [
        {
          id: 1,
          name: 'Aaa restaurant',
          categories: ['Aussie', 'Antipodean'],
          price: 1,
          image: 'aaaurl'
        },
        {
          id: 2,
          name: 'Bbb bar',
          categories: ['Beer', 'Bar'],
          price: 2,
          image: 'bbburl'
        },
        {
          id: 3,
          name: 'Ccc cafe',
          categories: ['Coffee', 'Cake'],
          price: 4,
          image: 'cccurl'
        }
      ],
      location: 'Spitalfields'
    };

    wrapper = shallow(<RestaurantList { ...props } />);
  });

  it('should render a restaurant list container', () => {
    expect(wrapper.find('.restaurant-list')).toHaveLength(1);
  });

  it('should render a restaurant list number div', () => {
    expect(wrapper.find('.restaurant-list-number')).toHaveLength(1);
  });

  it('should render the correct restaurant list information', () => {
    expect(wrapper.find('.restaurant-list-number').text()).toEqual('3 restaurants can deliver to Spitalfields');
  });

  it('should render the correct number of restaurants', () => {
    expect(wrapper.find('Restaurant')).toHaveLength(3);
  });
})
