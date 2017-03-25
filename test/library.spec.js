/* global describe, it, before */
// TODO: Add Tests

import chai from 'chai';
import UnsplashSourceES6 from '../lib/unsplash-source-es6.min.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of unsplash-source-es6', () => {

  beforeEach(() => {
    lib = new UnsplashSourceES6();
  });

  describe('when called getURL() only', () => {
    it('should return the random URL', () => {
      expect(lib.getURL()).to.be.equal('https://source.unsplash.com/random');
    });
  });

  describe('when called size(1980, 1080).getURL()', () => {
    it('should return the random URL with added resolution', () => {
      expect(lib.size(1980, 1080).getURL()).to.be.equal('https://source.unsplash.com/random/1980x1080');
    });
  });

  describe('when called id("some-id").getURL()', () => {
    it('should return the URL for the same photo id', () => {
      expect(lib.id('some-id').getURL()).to.be.equal('https://source.unsplash.com/some-id');
    });
  });

  describe('when called id("some-id").size(1980, 1080).getURL()', () => {
    it('should return the URL for the same photo id with added resolution', () => {
      expect(lib.id('some-id').size(1980, 1080).getURL()).to.be.equal('https://source.unsplash.com/some-id/1980x1080');
    });
  });

  describe('when called id("some-id").size(1980).getURL()', () => {
    it('should return the URL for the same photo id with added resolution and same height as width', () => {
      expect(lib.id('some-id').size(1980).getURL()).to.be.equal('https://source.unsplash.com/some-id/1980x1980');
    });
  });
});
