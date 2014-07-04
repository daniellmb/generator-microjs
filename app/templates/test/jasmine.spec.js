/**
 * @file
 *
 * ### Responsibilities
 * - unit test <%= baseFileName %>.js
 *
 * Scaffolded with <%= pkg.name %> v<%= pkg.version %>
 *
 * @author <%= realname %> <<%= email %>>
 */
'use strict';

/*global <%= exportName %>*/
describe('<%= baseFileName %>.js', function () {
  beforeEach(function () {
    // add spies
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).not.toBe(false);
  });

  it('should exist', function () {
    // arrange
    // act
    // assert
    expect(typeof <%= exportName %>).toBe('function');
  });

  it('should return nothing', function () {
    // arrange
    // act
    var result = <%= exportName %>();
    // assert
    expect(result).toBeUndefined();
  });

});