import axios from 'axios'
// const api = axios.create({
//   baseURL: `http://167.172.186.154/api/products`
// })

// const fetchDataRequest = () => {
//   return {
//     type: "FETCH_USERS_REQUEST"
//   }
// }

const objectsFetchDataSuccess = (objects) => {
  return {
    type: "GET_API_OBJECTS",
    objects: objects
  }
}


// получить объекты
const objectsFetchData = () => {
  debugger
  return async (dispatch) => {
    await axios.get('http://167.172.186.154/api/products')
      .then(res =>{
        const products = res.data
        dispatch(objectsFetchDataSuccess(products))
      })
  }
}
// const objectsFetchData = (url) => {
//   debugger
//   return (dispatch) => {
//     fetch(url)
//       .then(res => {
//         if(!res.ok) {
//           throw new Error(res.statusText)
//         }
//         return res;
//       })
//       .then(res => res.json())
//       .then(objects => dispatch(objectsFetchDataSuccess(objects))) 
//   }
// }





const filterAction = () => {
  return {
    type: 'FILTER_ACTION'
  }
}

const filterStealth = () => {
  return {
    type: 'FILTER_STEALTH'
  }
}

const filterRpg = () => {
  return {
    type: 'FILTER_RPG'
  }
}
const filterAll = () => {
  return {
    type: 'FILTER_ALL'
  }
}

////    BASKET    ////
const addToBasket = (id) => {
  return {
    type: 'ADD_TO_BASKET',
    id: id
  }
}

const delFromBasket = (id) => {
  return {
    type: 'DEL_FROM_BASKET',
    id: id
  }
}

const delAllBasket = () => {
  return {
    type: 'DEL_ALL_BASKET'
  }
}

// BasketPage ///
const minusFromBasket = (id) => {
  return {
    type: 'MIN_FROM_PAGEBASKET',
    id: id
  }
}

const plusFromBasket = (id) => {
  return {
    type: 'PLUS_FROM_PAGEBASKET',
    id: id
  }
}

export {
  filterAction,
  filterStealth,
  filterRpg,
  filterAll,
  addToBasket,
  delFromBasket,
  delAllBasket,
  minusFromBasket,
  plusFromBasket,
  objectsFetchData
}