import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Nav from './Nav';

configure({adapter: new Adapter()});

describe('<Nav />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Nav />);
    })
    it('Renderiza un <h1>', () => {
      expect(wrapper.find('h1')).toHaveLength(1)
    })
})
});