import reducer from './index';

describe('reducer', () => {

  it('Deberia retornar el estado inicial', () => {
    const initialState = {
        countries : [],
        allCountries : [],
        activities : [],
        allActivities : [],
        detail :{},
      };
    expect(reducer(undefined, [])).toEqual(initialState)
  })
});