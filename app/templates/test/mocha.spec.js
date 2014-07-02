/**
 * @file
 *
 * ### Responsibilities
 * - unit test <%= projName %>
 *
 * Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>
 *
 * @author <%= realname %> <<%= email %>>
 */
'use strict';

describe('<%= projName %>', function () {
  var sandbox;

  beforeEach(function () {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some methods
  });

  afterEach(function () {
    // restore the environment as it was before
    sandbox.restore();
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).to.not.equal(false);
  });
});