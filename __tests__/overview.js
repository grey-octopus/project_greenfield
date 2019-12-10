import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import updateAverageRating from '../src/overview/actions/updateAverageRating.js'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  it ('creates action with average rating', () => {
    const store = mockStore({ prodId: 1 })
    const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', payload: 4 }]
    return store.dispatch(updateAverageRating(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
