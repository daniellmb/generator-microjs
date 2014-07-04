###
@file

## Responsibilities
- unit test <%= baseFileName %>.coffee

Scaffolded with <%= pkg.name %> v<%= pkg.version %>

@author <%= realname %> <<%= email %>>
###

describe '<%= baseFileName %>.coffee', ->
  beforeEach ->
    # add spies

  it 'should have a working test harness', ->
    # arrange
    # act
    # assert
    expect(true).not.toBe false

  it 'should exist', ->
    # arrange
    # act
    # assert
    expect(typeof <%= exportName %>).toBe 'function'

  it 'should return nothing', ->
    # arrange
    # act
    result = <%= exportName %>()
    # assert
    expect(result).toBeUndefined()