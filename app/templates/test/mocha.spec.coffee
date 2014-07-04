###
@file

## Responsibilities
- unit test <%= baseFileName %>.coffee

Scaffolded with <%= pkg.name %> v<%= pkg.version %>

@author <%= realname %> <<%= email %>>
###

describe '<%= baseFileName %>.coffee', ->
  sandbox = undefined
  beforeEach ->
    # create a sandbox
    sandbox = sinon.sandbox.create()

  # stub some methods
  afterEach ->
    # restore the environment as it was before
    sandbox.restore()

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(yes).to.not.equal no

  it 'should exist', ->
    # arrange
    # act
    # assert
    expect(typeof <%= exportName %>).to.equal 'function'

  it 'should return nothing', ->
    # arrange
    # act
    result = <%= exportName %>();
    # assert
    expect(result).to.equal undefined