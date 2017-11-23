import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Price from './Price';

Enzyme.configure({ adapter: new Adapter() });

describe('Price', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      price: 4,
      country: 'UK'
    };

    wrapper = shallow(<Price { ...props } />);
  });

  it('should render a price element', () => {
    expect(wrapper.find('.price')).toHaveLength(1);
  });

  it('should render ££££ for 4 price in UK', () => {
    expect(wrapper.find('.price').text()).toEqual('££££');
  });

  it('should render $$ for 2 price in USA', () => {
    props = {
      country: 'USA',
      price: 2
    };
    wrapper = shallow(<Price { ...props } />);

    expect(wrapper.find('.price').text()).toEqual('$$');
  });

  it('should render $ for 1 price in Australia', () => {
    props = {
      country: 'Australia',
      price: 1
    };
    wrapper = shallow(<Price { ...props } />);

    expect(wrapper.find('.price').text()).toEqual('$');
  });

  it('should use £ as default currency', () => {
    props = {
      country: 'nonexistant country',
      price: 2
    };
    wrapper = shallow(<Price { ...props } />);

    expect(wrapper.find('.price').text()).toEqual('££');
  });
})
