import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BasketItem } from './BasketItem';
import { delFromBasket, delAllBasket } from '../../actions/actions';

import './index.css'

const Header = ({basket, totalPrice, delFromBasket, delAllBasket, inPurchase, setInPurchase, setShowBasketGame}) => {
  const [isVisible, setVisible] = useState(false)
  
  const VisibleBasket = () => {
    if (isVisible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    return isVisible
  }
  
  const setInPurchaseFunc = () => {
    setInPurchase(false)
    setShowBasketGame(false)
  }
  
  const basketElements = basket.map(({name, currPrice, src}, id) => {
    return(
      <li key={id} className="list-group-item">
        <BasketItem
          name={name}
          currPrice={currPrice}
          src={src} 
          delFromBasket={() => delFromBasket(id)}/>            
      </li>
    );
  })
  
  if (inPurchase) {
    return(
      <header className="d-flex justify-content-between">
        <NavLink onClick={setInPurchaseFunc} to="/api/products"><h3>GAME-STORE</h3></NavLink> 
      </header>
    );
  }
   
  return(
    <header className="d-flex justify-content-between pt-2">
        <h3>GAME-STORE</h3>
        <div className="basketContainer">
          <button type="button" className="btnBasket btn btn-outline-success" onClick={VisibleBasket}>
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <span className="badge badge-primary badge-pill">{basket.length}</span>
          </button>
         {isVisible && <div className="basket">
            <ul className="list-group">
              {basketElements}
            </ul>
            {basket.length !== 0 && <div className="text-center">
              Total: {totalPrice}$
            </div>}
            <div className="d-flex justify-content-center mb-3">
              {basket.length !== 0 && <NavLink to="/api/purchase"><button className="btn btn-success me-3" onClick={() => setInPurchase(true)}>Buy</button></NavLink>}
              {basket.length !== 0 && <button className="btn btn-danger" onClick={() => delAllBasket()}>ClearBasket</button>}
            </div>
            {basket.length === 0 && <span>You'r cart empty</span>}
          </div> }
        </div>
      </header>
  );
}

const mapStateToProps = ({basket, totalPrice}) => {
  return {basket, totalPrice}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    delFromBasket: delFromBasket,
    delAllBasket: delAllBasket
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)