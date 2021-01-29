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
  plusFromBasket
}