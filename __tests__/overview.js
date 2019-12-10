import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import updateAverageRating from '../src/overview/actions/updateAverageRating.js'
import fetchMock from 'fetch-mock'
import StarRatingContainer from '../src/overview/containers/StarRatingContainer.jsx'

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

describe('<StarRatingContainer />', () => {
  it ('should have a prodId property', () => {
    const store = mockStore({  prodId: 1})
    const root = shallow(<StarRatingContainer store={store} />)
    expect(root.find('StarRating').prop('prodId')).toEqual(1)
  })
})
