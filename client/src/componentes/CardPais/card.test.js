import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import CardPais from './CardPais';

configure({adapter: new Adapter()});

describe('<CardPais  />',() => {

  describe('Estructura', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CardPais />);
    })
    it('Renderiza un <Link>', () => {
      expect(wrapper.find('Link')).toHaveLength(1)
    })

    it('Renderiza una imagen', () => {
      expect(wrapper.find('img')).toHaveLength(1)
    })

    it('Renderiza un h2', () => {
      expect(wrapper.find('h2')).toHaveLength(1);
    })

    it('Renderiza una h3', () => {
      expect(wrapper.find('h3')).toHaveLength(1)
    })
  
})
});