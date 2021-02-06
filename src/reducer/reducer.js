import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

let initialState = {
  games: [
    {name: 'Prince Persia', categories: 'Action', price: 45, currPrice: 45, count: 1, src: 'https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwd01ab4a1/images/large/5efc463f0d253c1d3430ff98.jpg?sw=341&sh=450&sm=fit'},
    {name: 'Metro Exodus', categories: 'Action', price: 125, currPrice: 125, count: 1, src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/412020/capsule_616x353.jpg?t=1600359844'},
    {name: 'Hitman 3', categories: 'Stealth', price: 160, currPrice: 160, count: 1, src: 'https://upload.wikimedia.org/wikipedia/ru/4/4b/Hitman_3_Packart.jpg'},
    {name: 'Stronghold', categories: 'Strategy', price: 13, currPrice: 13, count: 1, src: 'https://upload.wikimedia.org/wikipedia/ru/6/62/Strongholdcover.jpg'},
    {name: 'Oblivion', categories: 'RPG', price: 20, currPrice: 20, count: 1, src: 'https://i.playground.ru/e/pxmWb6GiPJCuvjtcJGvz1g.jpeg?600xauto'},
    {name: 'Skyrim', categories: 'RPG', price: 35, currPrice: 35, count: 1, src: 'https://cdn.dlcompare.com/game_tetiere/img/elderscrolls5skyrim_img4.jpg'},
    {name: 'Казаки 3', categories: 'Strategy', price: 16, currPrice: 16, count: 1, src: 'https://upload.wikimedia.org/wikipedia/ru/0/08/%D0%9A%D0%B0%D0%B7%D0%B0%D0%BA%D0%B8_3.jpg'},
    {name: 'Blacklist', categories: 'Stealth', price: 25, currPrice: 25, count: 1, src: 'https://upload.wikimedia.org/wikipedia/ru/4/4e/Splinter_Cell_Blacklist_PC.jpeg'}
  ],
  basket: [],
  totalPrice: 0
}

const filterGames = (filter) => {
  let newArr = initialState.games.filter(game => game.categories === filter)
  return newArr
}

const currentGameAdd = (state, id) => {
  let currentGame = state.games[id];
  currentGame.count = 1;
  currentGame.currPrice = currentGame.price;
  return currentGame
}

const currentGameDel = (state, id) => {
  let currentGame = state.basket[id];
  currentGame.count = 1;
  return currentGame
}

const currentGameMinus = (state, id) => {
  let currentGame = state.basket[id];
  currentGame.count = currentGame.count - 1
  currentGame.currPrice = currentGame.currPrice - currentGame.price
  return currentGame
}

const currentGamePlus = (state, id) => {
  let currentGame = state.basket[id];
  currentGame.count = currentGame.count + 1
  currentGame.currPrice = currentGame.currPrice + currentGame.price
  return currentGame
}

const updateItem = (newCurrentGame, basket, id) => {
  if (newCurrentGame.count === 0) {
    return [
      ...basket.slice(0, id),
      ...basket.slice(id + 1)
    ]
  }

  if (id === -1) {
    return [
      ...basket,
      newCurrentGame
    ]
  }

  return [
    ...basket.slice(0, id),
    newCurrentGame,
    ...basket.slice(id + 1)
  ]
}

const reducer = (state = [], action) => {
  debugger
  switch (action.type) {
    case "GET_API_OBJECTS" :
     let newArray = action.objects.map(obj => {
       return {
         ...obj,
         count: 0,
         currPrice: obj.price
       }
     })
     
      return {
        ...state,
        objects: newArray
      }


    case 'FILTER_ALL':
      return {...initialState, basket: state.basket, totalPrice: state.totalPrice}

    case 'FILTER_ACTION':
      if (state.games.length < initialState.games.length) {
        return {...state, games: filterGames('Action')}
      }
      return {...state, games: filterGames('Action')}

    case 'FILTER_STEALTH':
      if (state.games.length < initialState.games.length) {
        return {...state, games: filterGames('Stealth')}
      }
      return {...state, games: filterGames('Stealth')}

    case 'FILTER_RPG':
      if (state.games.length < initialState.games.length) {
        return {...state, games: filterGames('RPG')}
      }
      return {...state, games: filterGames('RPG')}
//////////////BASKET///////////////////////
    case 'ADD_TO_BASKET':
      if ( !!state.basket.find(game => game.name === currentGameAdd(state, action.id).name) ) {
      toast.configure({})
      toast.error('Already in the basket', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        return state
      }

      let newArr = [...state.basket, currentGameAdd(state, action.id)]
    return {...state, basket: newArr, totalPrice: state.totalPrice + currentGameAdd(state, action.id).price }
    
    case 'DEL_FROM_BASKET':
      return {...state, basket: [
        ...state.basket.slice(0, action.id),
        ...state.basket.slice(action.id + 1)
      ], totalPrice: state.totalPrice - currentGameDel(state, action.id).currPrice}

    case 'DEL_ALL_BASKET':
      return {
        ...state,
        basket: [],
        totalPrice: state.totalPrice = 0
      }

    case 'MIN_FROM_PAGEBASKET':
      let newCurrentGameMin = currentGameMinus(state, action.id)
      return {
        ...state,
        basket: updateItem(newCurrentGameMin, state.basket, action.id),
        totalPrice: state.totalPrice  - newCurrentGameMin.price
      }

    case 'PLUS_FROM_PAGEBASKET':
      let newCurrentGamePlus = currentGamePlus(state, action.id)
      return {
        ...state,
        basket: updateItem(newCurrentGamePlus, state.basket, action.id),
        totalPrice: state.totalPrice  + newCurrentGamePlus.price
      }
      
    default:
      return state;
  }
};

export default reducer;