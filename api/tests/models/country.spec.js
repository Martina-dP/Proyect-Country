const { Country, Activity, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
      describe('Validators', () => {
        beforeEach(() => Country.sync({ force: true }));
        describe('name', () => {
          it('should throw an error if name is null', (done) => {
            Country.create({})
              .then(() => done(new Error('It requires a valid name')))
              .catch(() => done());
          });
          it('should work when its a valid name', () => {
            Country.create({ name: 'Argentina' });
          });
          
        });
      });
      describe('Validators', () => {
        beforeEach(() => Country.sync({ force: true }));
        describe('id', () => {
          it('should throw an error if id is null', (done) => {
            Country.create({})
              .then(() => done(new Error('It requires a valid id')))
              .catch(() => done());
          });
          it('should work when its a valid id', () => {
            Country.create({ id: 'ARG' });
          });
        });
      });
      describe('Validators', () => {
        beforeEach(() => Country.sync({ force: true }));
        describe('flagsImg', () => {
          it('should throw an error if flagsImg is null', (done) => {
            Country.create({})
              .then(() => done(new Error('It requires a valid flagsImg')))
              .catch(() => done());
          });
          it('should work when its a valid flagsImg', () => {
            Country.create({ flagsImg: 'https://restcountries.eu/data/arg.svg' });
          });
          
        });
      });
      describe('Validators', () => {
        beforeEach(() => Country.sync({ force: true }));
        describe('continent', () => {
          it('should throw an error if continent is null', (done) => {
            Country.create({})
              .then(() => done(new Error('It requires a valid continent')))
              .catch(() => done());
          });
          it('should work when its a valid continent', () => {
            Country.create({ continent: 'americas' });
          });
          
        });
      });
      describe('Validators', () => {
        beforeEach(() => Country.sync({ force: true }));
        describe('capital', () => {
          it('should throw an error if capital is null', (done) => {
            Country.create({})
              .then(() => done(new Error('It requires a valid capital')))
              .catch(() => done());
          });
          it('should work when its a valid capital', () => {
            Country.create({ capital: "Buenos Aires" });
          });
          
        });
      });
})

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
      describe('Validators', () => {
        beforeEach(() => Activity.sync({ force: true }));
        describe('name', () => {
          it('should throw an error if name is null', (done) => {
            Activity.create({})
              .then(() => done(new Error('It requires a valid name')))
              .catch(() => done());
          });
          it('should work when its a valid name', () => {
            Activity.create({ name: 'swimming' });
          });
          
        });
      });
      describe('Validators', () => {
        beforeEach(() => Activity.sync({ force: true }));
        describe('season', () => {
          it('should throw an error if season is null', (done) => {
            Activity.create({})
              .then(() => done(new Error('It requires a valid season')))
              .catch(() => done());
          });
          it('should work when its a valid season', () => {
            Activity.create({ season: 'summer' });
          });
        });
      });
})