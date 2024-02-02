import axios from "axios"

export const getItems = () => {
    return axios
    .get('https://nc-marketplace-sem-2.onrender.com/api/items')
    .then((response) => {
      // handle success
      return response.data.items
  
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }

  export const getCategories = () =>{
    return axios
     .get('https://nc-marketplace-sem-2.onrender.com/api/categories')
     .then((response) => {
       // handle success
       return response.data.categories
     })
     .catch((error) => {
       // handle error
       console.log(error);
     })
  }

  export const postItemToSell = (item) => {
    return axios
    .post('https://nc-marketplace-sem-2.onrender.com/api/items', item)
    .then((response) => {
      // handle success
      console.log(response)
      return response
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }