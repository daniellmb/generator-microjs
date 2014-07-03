###
@file

## Responsibilities
- unit test <%= projName %>

Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>

@author <%= realname %> <<%= email %>>
###

describe '<%= projName %>.coffee', ->
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