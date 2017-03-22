/* global describe, it, before */
// TODO: Add Tests

import chai from 'chai';
import UnsplashSourceES6 from '../lib/unsplash-source-es.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library', () => {
  before(() => {
    lib = new UnsplashSourceES6();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('UnsplashSourceES6');
    });
  });
});
