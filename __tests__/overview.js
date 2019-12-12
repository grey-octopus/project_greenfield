import React from "react";
import { mount, shallow, render } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import updateAverageRating from "../src/overview/actions/updateAverageRating.js";
import averageRatingReducer from "../src/overview/reducers/averageRatingReducer.js";
import fetchMock from "fetch-mock";
import StarRatingContainer from "../src/overview/containers/StarRatingContainer.jsx";
import ProdOverviewContainer from "../src/overview/containers/ProdOverviewContainer.jsx";
import ProdOverview from '../src/overview/components/ProdOverview.jsx'
import fetchProductInfo from "../src/overview/actions/fetchProductInfo.js";
import fetchProductInfoReducer from "../src/overview/reducers/fetchProductInfoReducer.js";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import toJson from 'enzyme-to-json'
import fetchProductOverview from '../src/overview/actions/fetchProductOverview.js'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  describe('updateAverageRating', () => {
    it ('creates action with average rating', () => {
      const store = mockStore({ prodId: 1 })
      const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', numOfRatings: 7, payload: '4.00' }]
      return store.dispatch(updateAverageRating(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  
    it ('should round payload to nearest quarter', () => {
      const store = mockStore({ prodId: 2})
      const expectedActions = [{ type: 'UPDATE_AVERAGE_RATING', numOfRatings: 5, payload: '3.50'}]
      return store.dispatch(updateAverageRating(2)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  it('fetchProductInfo', () => {
    const store = mockStore({ prodId: 1 });
    const expectedActions = [
      {
        type: "FETCH_PROD_INFO",
        title: "Camo Onesie",
        category: "Jackets"
      }
    ];
    return store.dispatch(fetchProductInfo(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('fetchProductOverview', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: 'FETCH_PROD_OVERVIEW',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        features: [
          {
              "feature": "Buttons",
              "value": "Brass"
          }
        ]
      }
    ]
    return store.dispatch(fetchProductOverview(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
});

describe('reducers', () => {
  describe('averageRatingReducer', () => {
    it ('should handle updateAverageRating', () => {
      expect(averageRatingReducer([], { type: 'UPDATE_AVERAGE_RATING', payload: '4.00', numOfRatings: 5 })).toEqual({ numOfRatings: 5, averageRating: '4.00' })
    })
  })
  
  describe("fetchProductInfoReducer", () => {
    it("FETCH_PROD_INFO", () => {
      expect(
        fetchProductInfoReducer([], {
          type: "FETCH_PROD_INFO",
          title: "Fancy Jeans",
          category: "Jeans"
        })
      ).toEqual({
        title: "Fancy Jeans",
        category: "Jeans"
      });
    });
  
    it('FETCH_PROD_OVERVIEW', () => {
      expect(fetchProductInfoReducer([], {
        type: 'FETCH_PROD_OVERVIEW',
        category: "Jeans",
        description: "These jeans are fancy",
        slogan: "no",
        features: []
      })).toEqual({
        description: "These jeans are fancy",
        slogan: "no",
        features: []
      })
    })
  });
})



describe("<ProdOverview />", () => {
  it("renders with required props", () => {
    const props = {
      slogan: 'That\'s fair',
      description: 'Just a cool guy',
      features: ['test']
    }
    const history = createMemoryHistory()
    const wrapper = shallow(<Router history={history} path='/:prodId'><ProdOverview {...props} /></Router>)
    expect(toJson(wrapper.find('ProdOverview'))).toMatchSnapshot()
    expect(wrapper.find('ProdOverview').prop('slogan')).toEqual('That\'s fair')
    expect(wrapper.find('ProdOverview').prop('description')).toEqual('Just a cool guy')
    expect(wrapper.find('ProdOverview').prop('features')).toBeTruthy()
  });
});

// describe('<StarRatingContainer />', () => {
//   it ('should set averageRating property', () => {
//     const store = mockStore({ prodId: 1 })
//     const root = shallow(<StarRatingContainer store={store} />)
//     return store.dispatch(updateAverageRating(1)).then(() => {
//       expect(root.find('StarRating').prop)
//     })
//   })
// })
