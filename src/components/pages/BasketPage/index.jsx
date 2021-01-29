import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../../Header";
import { PageBasketItem } from "../../PageBasketItem";

import { minusFromBasket, plusFromBasket, delFromBasket, delAllBasket } from '../../../actions/actions';

import './index.css';

const BasketPage = ({ basket, minusFromBasket, plusFromBasket, delFromBasket, delAllBasket, totalPrice, inPurchase, setInPurchase, setShowBasketGame }) => {
  
  let history = useHistory();
  
  const trueReturn = () => {
    setInPurchase(false)
    history.goBack()
  }
  
  const basketElements = basket.map( ({name, currPrice, count, src}, id) => {
    return(
      <li key={id} className="list-group-item">
      <PageBasketItem
        name={name}
        currPrice={currPrice}
        src={src}
        count={count}
        delFromBasket={() => delFromBasket(id)}
        minusFromBasket={() => minusFromBasket(id)}
        plusFromBasket={() => plusFromBasket(id)}
        onItemSelected={() => history.push(`/api/products/${id}`)}
        setShowBasketGame={setShowBasketGame}
        />
    </li>
    );
  })
  
  return(
    <div>
      <Header inPurchase={inPurchase} setInPurchase={setInPurchase} setShowBasketGame={setShowBasketGame}/>
      <div className="basketPageUl">
        <ul className="list-group">
          {basketElements}
        </ul>
        {basket.length === 0 && <img className="emptyBasket" src="https://thebigray.ru/images/empty-cart.png" alt="img"/>}
        {basket.length !== 0 && <div><div>{totalPrice}$</div> <button className="btn btn-success">Purchase</button></div>}
        {basket.length !== 0 && <button onClick={() => delAllBasket()} className="btn btn-danger">ClearBasket</button>}
        <button onClick={trueReturn}className="btn btn-primary">Back</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ basket, totalPrice }) => {
  return { basket, totalPrice }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    delFromBasket: delFromBasket,
    minusFromBasket: minusFromBasket,
    plusFromBasket: plusFromBasket,
    delAllBasket: delAllBasket
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BasketPage)