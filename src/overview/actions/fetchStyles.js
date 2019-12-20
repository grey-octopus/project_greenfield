import axios from 'axios'

const fetchStyles = prodId => {
  return dispatch => {
    return axios.get(`http://3.134.102.30/products/${prodId}/styles`).then(({ data }) => {
      return dispatch({ 
        type: 'FETCH_STYLES', 
        styles: data.results
      })
    }).catch(err => console.log('ERROR: ', err))
  }
}

export default fetchStyles