import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Landing from './Landing';



configure({adapter: new Adapter()});

describe('<landing />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Landing />);
    })
    it('Renderiza un <Link>', () => {
      expect(wrapper.find('Link')).toHaveLength(1)
    })

    it('Renderiza un <p>', () => {
      expect(wrapper.find('p')).toHaveLength(1)
    })

})
});