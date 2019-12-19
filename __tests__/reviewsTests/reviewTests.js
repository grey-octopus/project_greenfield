// import React from 'react';
// import { mount, shallow, render } from 'enzyme';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import fetchMock from 'fetch-mock';
// import toJson from 'enzyme-to-json';
// import { Router } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

// // reducers
// import fetchReviewsReducer from '.../src/reviews/review_reducers/fetchReviewsReducer.js';
// import fetchReviewMetadataReducer from '.../src/reviews/review_reducers/fetchReviewMetadataReducer.js';

// // components
// import ReviewBrowser from '.../src/reviews/Review_Browser.jsx';
// import modal from '.../src/reviews/modal.jsx';
// import ReviewBreakdown from '.../src/reviews/ReviewBreakdown.jsx';

// // actions
// import fetchReviewMetadata from '.../src/reviews/reviews_actions/fetchReviewMetadata.js';
// import fetchReviews from '.../src/reviews/reviews_actions/fetchReviews.js';
// import paginateReviews from '.../src/reviews/reviews_actions/paginateReviews.js';

// describe('components', () => {
//     describe("ReviewBrowser", () => {
//       it("renders with required props", () => {
//         const props = {
//           slogan: 'That\'s fair',
//           description: 'Just a cool guy',
//           features: ['test']
//         }
//         const history = createMemoryHistory()
//         const wrapper = shallow(<Router history={history} path='/:prodId'><ProdOverview {...props} /></Router>)
//         expect(wrapper.find('ProdOverview').prop('slogan')).toEqual('That\'s fair')
//         expect(wrapper.find('ProdOverview').prop('description')).toEqual('Just a cool guy')
//         expect(wrapper.find('ProdOverview').prop('features')).toBeTruthy()
//         expect(toJson(wrapper.find('ProdOverview'))).toMatchSnapshot()
//       });
//     });
//     describe('<Description />', () => {
//       it('renders with required props', () => {
//         const props = {
//           slogan: 'That\'s fair',
//           description: 'Just a cool guy'
//         }
//         const wrapper = shallow(<div><Description {...props} /></div>)
//         expect(wrapper.find('Description').prop('slogan')).toEqual('That\'s fair')
//         expect(wrapper.find('Description').prop('description')).toEqual('Just a cool guy')
//         expect(toJson(wrapper.find('Description'))).toMatchSnapshot()
//       })
//     })
//     describe('<Features />', () => {
//       it('renders with required props', () => {
//         const props = {
//           features: [{ value: 'val', feature: 'feature' }]
//         }
//         const wrapper = shallow(<div><Features {...props} /></div>)
//         expect(wrapper.find('Features').prop('features')).toEqual([{ value: 'val', feature: 'feature' }])
//         expect(toJson(wrapper.find('Features'))).toMatchSnapshot()
//       })
//     })
//     describe('<Rating />', () => {
//       it('renders with required props', () => {
//         const props = {
//           prodId: 1
//         }
//         const history = createMemoryHistory()
//         const wrapper = shallow(
//           <Router history={history} path='/:prodId'>
//             <Rating {...props} />
//           </Router>
//         )
//         expect(wrapper.find('Rating').prop('prodId')).toEqual(1)
//         expect(toJson(wrapper.find('Rating'))).toMatchSnapshot()
//       })
//       it('renders with required props', () => {
//         const props = { numOfReviews: 4 }
//         const wrapper = shallow(
//           <div>
//             <ReadReviews {...props} />
//           </div>
//         )
//         expect(wrapper.find('ReadReviews').prop('numOfReviews')).toEqual(4)
//       })
//     })
//     describe('<StarRating />', () => {
//       it ('renders with required pros', () => {
//         const props = {
//           averageRating: '4.00'
//         }
//         const wrapper = shallow(<div><StarRating {...props} /></div>)
//         expect(wrapper.find('StarRating').prop('averageRating')).toEqual('4.00')
//         expect(toJson(wrapper.find('StarRating'))).toMatchSnapshot()
//       })
//     })
//   })

// describe('fetchReviewMetadata', () => {
//   it('creates action with product charecteristics', () => {
//     const store = mockStore({ prodId: 1 });
//     const expectedActions = [
//       { type: 'UPDATE_AVERAGE_RATING', payload: '4.00' }
//     ];
//     return store.dispatch(updateAverageRating(1)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   it('should round payload to nearest quarter', () => {
//     const store = mockStore({ prodId: 2 });
//     const expectedActions = [
//       { type: 'UPDATE_AVERAGE_RATING', payload: '3.50' }
//     ];
//     return store.dispatch(updateAverageRating(2)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });

// describe('fetchReviewMetadata', () => {
//   it('creates action with product charecteristics', () => {
//     const store = mockStore({ prodId: 1 });
//     const expectedActions = [
//       { type: 'UPDATE_AVERAGE_RATING', payload: '4.00' }
//     ];
//     return store.dispatch(updateAverageRating(1)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });

//   it('should round payload to nearest quarter', () => {
//     const store = mockStore({ prodId: 2 });
//     const expectedActions = [
//       { type: 'UPDATE_AVERAGE_RATING', payload: '3.50' }
//     ];
//     return store.dispatch(updateAverageRating(2)).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
