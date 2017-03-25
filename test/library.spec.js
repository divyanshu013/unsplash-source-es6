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

  describe('when called fetch() only', () => {
    it('should return the random URL', () => {
      expect(lib.fetch()).to.be.equal('https://source.unsplash.com/random');
    });
  });

  describe('when called size(1980, 1080).fetch()', () => {
    it('should return the random URL with added resolution', () => {
      expect(lib.size(1980, 1080).fetch()).to.be.equal('https://source.unsplash.com/random/1980x1080');
    });
  });

  describe('when called id("some-id").fetch()', () => {
    it('should return the URL for the same photo id', () => {
      expect(lib.id('some-id').fetch()).to.be.equal('https://source.unsplash.com/some-id');
    });
  });

  describe('when called id("some-id").size(1980, 1080).fetch()', () => {
    it('should return the URL for the same photo id with added resolution', () => {
      expect(lib.id('some-id').size(1980, 1080).fetch()).to.be.equal('https://source.unsplash.com/some-id/1980x1080');
    });
  });

  describe('when called id("some-id").size(1980).fetch()', () => {
    it('should return the URL for the same photo id with added resolution and same height as width', () => {
      expect(lib.id('some-id').size(1980).fetch()).to.be.equal('https://source.unsplash.com/some-id/1980x1980');
    });
  });

  describe('when called category("technology").fetch()', () => {
    it('should return the URL for the category', () => {
      expect(lib.category('technology').fetch()).to.be.equal('https://source.unsplash.com/category/technology');
    });
  });

  describe('when called category("technology").size(1980, 1080).fetch()', () => {
    it('should return the URL for the category with added dimensions', () => {
      expect(lib.category('technology').size(1980, 1080).fetch())
        .to.be.equal('https://source.unsplash.com/category/technology/1980x1080');
    });
  });

  describe('when called user("divyanshu013").fetch()', () => {
    it('should return the URL for the username', () => {
      expect(lib.user('divyanshu013').fetch()).to.be.equal('https://source.unsplash.com/user/divyanshu013');
    });
  });

  describe('when called user("divyanshu013").size(1980, 1080).fetch()', () => {
    it('should return the URL for the username with added dimensions', () => {
      expect(lib.user('divyanshu013').size(1980, 1080).fetch())
        .to.be.equal('https://source.unsplash.com/user/divyanshu013/1980x1080');
    });
  });
});
