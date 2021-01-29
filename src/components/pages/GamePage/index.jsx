import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../../Header";

import { addToBasket } from '../../../actions/actions';

import './index.css'

const GamePage = ({games, basket, id, addToBasket, inPurchase, setInPurchase, showBasketGame, setShowBasketGame}) => {
  
  let history = useHistory();
  
  if (showBasketGame) {
    const goBack = () => {
      history.goBack()
      setShowBasketGame(false)
    }
    
    const game = basket[id];
    
    return(
      <div> 
        <Header inPurchase={inPurchase} setInPurchase={setInPurchase} setShowBasketGame={setShowBasketGame}/>
          <div className="d-flex">
            <div className="gameImg">
              <img src={game.src} alt=""/>
            </div>
            <div>
              <div>name: {game.name}</div>
              <div>categories: {game.categories}</div>
              <span>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Fuga, perferendis dolore earum eaque quasi numquam iusto veniam
                dignissimos laborum nulla culpa aspernatur autem placeat
                 sequi? Ratione facilis quasi quos cupiditate!
              </span>
              <div>price: {game.price}</div>
              <button onClick={goBack}className="btn btn-primary">Back</button>
            </div>
          </div>
      </div>
    );
  }
  
  const game = games[id]
  
  return(
    <div> 
      <Header inPurchase={inPurchase} setInPurchase={setInPurchase}/>
        <div className="d-flex">
          <div className="gameImg">
            <img src={game.src} alt=""/>
          </div>
          <div>
            <div>name: {game.name}</div>
            <div>categories: {game.categories}</div>
            <span>Lorem ipsum dolor sit amet consectetur,
               adipisicing elit. Fuga, perferendis dolore earum eaque quasi numquam iusto veniam
              dignissimos laborum nulla culpa aspernatur autem placeat
               sequi? Ratione facilis quasi quos cupiditate!
            </span>
            <div>price: {game.price}</div>
            <button onClick={() => history.goBack()}className="btn btn-primary">Back</button>
            <button onClick={() => addToBasket(id)}type="button" className="btn btn-outline-success">
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            </button>
          </div>
        </div>
    </div>    
  );
}

const mapStateToProps = ({ games, basket }) => {
  return { games, basket }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addToBasket: addToBasket
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)