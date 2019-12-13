import React from "react";
import { mount, shallow, render } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import updateAverageRating from "../src/overview/actions/updateAverageRating.js";
import averageRatingReducer from "../src/overview/reducers/averageRatingReducer.js";
import fetchMock from "fetch-mock";
import ProdOverview from '../src/overview/components/ProdOverview.jsx'
import fetchProductInfo from "../src/overview/actions/fetchProductInfo.js";
import fetchProductInfoReducer from "../src/overview/reducers/fetchProductInfoReducer.js";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import toJson from 'enzyme-to-json'
import fetchProductOverview from '../src/overview/actions/fetchProductOverview.js'
import Description from '../src/overview/components/Description.jsx'
import Features from '../src/overview/components/Features.jsx'

// containers
import DescriptionContainer from '../src/overview/containers/DescriptionContainer.jsx'
import FeaturesContainer from '../src/overview/containers/FeaturesContainer.jsx'
import OverviewContainer from '../src/overview/containers/OverviewContainer.jsx'
import ProdInfoContainer from '../src/overview/containers/ProdInfoContainer.jsx'
import ProdOverviewContainer from '../src/overview/containers/ProdOverviewContainer.jsx'
import StarRatingContainer from "../src/overview/containers/StarRatingContainer.jsx";

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

describe('components', () => {
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
  describe('<Description />', () => {
    it('renders with required props', () => {
      const props = {
        slogan: 'That\'s fair',
        description: 'Just a cool guy'
      }
      const wrapper = shallow(<div><Description {...props} /></div>)
      expect(toJson(wrapper)).toMatchSnapshot()
      expect(wrapper.find('Description').prop('slogan')).toEqual('That\'s fair')
      expect(wrapper.find('Description').prop('description')).toEqual('Just a cool guy')
    })
  })
  describe('<Features />', () => {
    it('renders with required props', () => {
      const props = {
        features: [{ value: 'val', feature: 'feature' }]
      }
      const wrapper = shallow(<div><Features {...props} /></div>)
      expect(toJson(wrapper)).toMatchSnapshot()
      expect(wrapper.find('Features').prop('features')).toEqual([{ value: 'val', feature: 'feature' }])
    })
  })
})

describe('containers', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  const store = mockStore({
    fetchProductInfoReducer: { 
      title: 'testTitle',
      features: 'testFeature' ,
      slogan: 'testSlogan',
      description: 'testDescription',
      category: 'testCategory'
    },
    averageRatingReducer: {
      averageRating: '4.00',
      numOfRatings: 3
    }
  })
  describe('<DescriptionContainer />', () => {
    const wrapper = shallow(<DescriptionContainer store={store} />)
    expect(wrapper.find('Description').prop('slogan')).toEqual('testSlogan')
    expect(wrapper.find('Description').prop('description')).toEqual('testDescription')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  describe('<FeaturesContainer />', () => {
    const wrapper = shallow(<FeaturesContainer store={store} />)
    expect(wrapper.find('Features').prop('features')).toEqual('testFeature')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  describe('<OverviewContainer', () => {
    const wrapper = shallow(<OverviewContainer store={store} />)
    expect(wrapper.find('Overview').prop('title')).toEqual('testTitle')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  describe('<ProdInfoContainer />', () => {
    const wrapper = shallow(<ProdInfoContainer store={store} />)
    expect(wrapper.find('ProdInfo').prop('title')).toEqual('testTitle')
    expect(wrapper.find('ProdInfo').prop('category')).toEqual('testCategory')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  describe('<ProdOverviewContainer />', () => {
    const wrapper = shallow(<ProdOverviewContainer store={store} />)
    expect(wrapper.find('ProdOverview').prop('slogan')).toEqual('testSlogan')
    expect(wrapper.find('ProdOverview').prop('description')).toEqual('testDescription')
    expect(wrapper.find('ProdOverview').prop('features')).toEqual('testFeature')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  describe('<StarRatingContainer />', () => {
    const wrapper = shallow(<StarRatingContainer store={store} />)
    expect(wrapper.find('StarRating').prop('averageRating')).toEqual('4.00')
    expect(wrapper.find('StarRating').prop('numOfRatings')).toEqual(3)
    expect(toJson(wrapper)).toMatchSnapshot()
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
