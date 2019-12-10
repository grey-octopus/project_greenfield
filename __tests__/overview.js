import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import updateAverageRating from '../src/overview/actions/updateAverageRating.js'
import averageRatingReducer from '../src/overview/reducers/averageRatingReducer.js'
import fetchMock from 'fetch-mock'
import StarRatingContainer from '../src/overview/containers/StarRatingContainer.jsx'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  it ('creates action with average rating', () => {
    const store = mockStore({ prodId: 1 })
    const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', payload: 4.00 }]
    return store.dispatch(updateAverageRating(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it ('should round payload to nearest quarter', () => {
    const store = mockStore({ prodId: 1})
    const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', paload: 3.50}]
    return store.dispatch(updateAverageRating(2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

describe('averageRatingReducer', () => {
  it ('should handle updateAverageRating', () => {
    expect(averageRatingReducer([], { type: 'UPDATE_AVERAGE_RATING', payload: 4 })).toEqual({ averageRating: 4 })
  })
})

// describe('<StarRatingContainer />', () => {
//   it ('should set averageRating property', () => {
//     const store = mockStore({ prodId: 1 })
//     const root = shallow(<StarRatingContainer store={store} />)
//     return store.dispatch(updateAverageRating(1)).then(() => {
//       expect(root.find('StarRating').prop)
//     })
//   })
// })
