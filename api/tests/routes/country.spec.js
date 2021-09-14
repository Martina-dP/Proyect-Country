/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: "ARG",
  name: 'Argentina',
  flagsImg : "https://restcountries.eu/data/arg.svg",
  continent : "Americas",
  capital : "Buenos Aires",
  subregión : "South America",
  area : "2780400",
  population : "43590400",
}

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
    beforeEach(() => Country.sync({ force: true })
      .then(() => Country.create(country)));


    describe('GET /countries', () => {
      it('should return all countries', () => {
        agent.get('/countries')
        .expect(200)
        .expect('Content-Type', /json/) 
        .expect(function(res) {
        expect(res.body).to.be.equal([])
      })
    });
  });
  describe('GET /countries/:id', function() {
    it('should return the correct counrty',  ()=>{
      agent.get('/countries/ARG')
      .expect(function(res){
        expect(res.body).to.be.deep.equal( //expects to get the corret dog to route /dogs/1
          {
            name: 'Argentina',
            flagsImg : "https://restcountries.eu/data/arg.svg",
            continent : "Americas",
            capital : "Buenos Aires",
            subregión : "South America",
            area : "2780400",
            population : "43590400",
            activities: []
          }
        );
      })
    });
  })
  describe('GET /countries?name=name', function() {
    it('should return the correct counrty by query',  ()=>{
      agent.get('/countries?name=Argentina')
      .expect(function(res){
        expect(res.body).to.be.deep.equal( //expects to get the corret dog to route /dogs/1
          {
            name: 'Argentina',
            flagsImg : "https://restcountries.eu/data/arg.svg",
            continent : "Americas",
            capital : "Buenos Aires",
            subregión : "South America",
            area : "2780400",
            population : "43590400",
            activities: []
          }
        );
      })
    });
  })
})
