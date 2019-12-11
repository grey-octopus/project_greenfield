import React from 'react'
import { mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import updateAverageRating from '../src/overview/actions/updateAverageRating.js'
import averageRatingReducer from '../src/overview/reducers/averageRatingReducer.js'
import fetchMock from 'fetch-mock'
import StarRatingContainer from '../src/overview/containers/StarRatingContainer.jsx'
import ProdOverviewContainer from '../src/overview/containers/ProdOverviewContainer.jsx'
import fetchProductInfo from '../src/overview/actions/fetchProductInfo.js'
import fetchProductInfoReducer from '../src/overview/reducers/fetchProductInfoReducer.js'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  // it ('creates action with average rating', () => {
  //   const store = mockStore({ prodId: 1 })
  //   const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', numOfRatings: 7, payload: 4.00, numOfRatings: 7 }]
  //   return store.dispatch(updateAverageRating(1)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions)
  //   })
  // })

  // it ('should round payload to nearest quarter', () => {
  //   const store = mockStore({ prodId: 2})
  //   const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', numOfRatings: 5, payload: 3.50}]
  //   return store.dispatch(updateAverageRating(2)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions)
  //   })
  // })

  it ('should fetch product info', () => {
    const store = mockStore({ prodId: 1 })
    const expectedActions = [{
      type: 'FETCH_PROD_INFO',
      title: 'Camo Onesie',
      category: 'Jackets',
      description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      slogan: 'Blend in to your crowd',
      features: [
        {
            feature: 'Buttons',
            value: 'Brass'
        }
      ]
    }]
    return store.dispatch(fetchProductInfo(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

// describe('averageRatingReducer', () => {
//   it ('should handle updateAverageRating', () => {
//     expect(averageRatingReducer([], { type: 'UPDATE_AVERAGE_RATING', payload: 4, numOfRatings: 5 })).toEqual({ numOfRatings: 5, averageRating: 4.00 })
//   })
// })

describe('fetchProductInfoReducer', () => {
  it ('should handle fetchProductInfo action', () => {
    expect(fetchProductInfoReducer([], { 
      type: 'FETCH_PROD_INFO',
      title: 'Fancy Jeans',
      category: 'Jeans',
      description: 'These jeans are fancy',
      slogan: 'no',
      features: [] 
    })).toEqual({
      title: 'Fancy Jeans',
      category: 'Jeans',
      description: 'These jeans are fancy',
      slogan: 'no',
      features: [] 
    })
  })
})

describe('<ProdOverviewContainer />', () => {
  it ('should have props', () => {
    const store = mockStore({ prodId: 1, title: 'Some product', category: 'Coats'})
    const root = shallow(<ProdOverviewContainer store={store} />)
    expect(root.find('ProdOverview').prop('title')).toEqual('Some product')
    expect(root.find('ProdOverview').prop('category')).toEqual('Coats')
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