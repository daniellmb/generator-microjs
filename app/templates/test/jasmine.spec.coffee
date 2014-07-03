###
@file

## Responsibilities
- unit test <%= projName %>

Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>

@author <%= realname %> <<%= email %>>
###

describe '<%= projName %>', ->
  beforeEach ->
    # add spies

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(true).not.toBe false