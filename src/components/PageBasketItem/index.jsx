import './index.css';
export const PageBasketItem = ({ name, currPrice, src, minusFromBasket, count, plusFromBasket, delFromBasket, onItemSelected, setShowBasketGame }) => {
  const reviewGame = () => {
    onItemSelected()
    setShowBasketGame(true)
  }
  return(
    <div>
      <img className="PagebasketImage" src={src} alt="img"/>
      <span className="PagebasketName">{name}</span>
      <span className="PagebasketPrice">{currPrice}</span>
      <button className="PagebasketMinus"onClick={minusFromBasket}>-</button>
      <span>{count}</span>
      <button className="PagebasketPlus"onClick={plusFromBasket}>+</button>
      <button className="PagebasketDel"onClick={delFromBasket}>Del</button>
      <button className="PagebasketReview"onClick={reviewGame}>Details</button>
    </div>
  );
}