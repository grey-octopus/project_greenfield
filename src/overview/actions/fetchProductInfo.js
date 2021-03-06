import axios from "axios"

const fetchProductInfo = prodId => {
  return dispatch => {
    return axios.get(`http://3.134.102.30/products/${prodId}`).then(data => {
      return dispatch({ 
        type: 'FETCH_PROD_INFO', 
        title: data.data.name,
        category: data.data.category
      })
    })
  }
}

export default fetchProductInfo