import './index.css';

export const PageBasketItem = ({ name, currPrice, src, minusFromBasket, count, plusFromBasket, delFromBasket, onItemSelected, setShowBasketGame }) => {
  const reviewGame = () => {
    onItemSelected()
    setShowBasketGame(true)
  }
  return(
    <div className="d-flex justify-content-between align-items-center">
      <div><img className="PagebasketImage" src={src} alt="img"/></div>
      <div><span className="PagebasketName">{name}</span></div>
      <div><span className="PagebasketPrice">{currPrice}$</span></div>
      <div><button className="btn btn-outline-warning btn-sm PagebasketMinus"onClick={minusFromBasket}><i className="fa fa-minus-circle"/></button></div>
      <div><span className="">{count}</span></div>
      <div><button className="btn btn-outline-success btn-sm PagebasketPlus"onClick={plusFromBasket}><i className="fa fa-plus-circle"/></button></div>
      <div><button className="btn btn-outline-danger btn-sm PagebasketDel"onClick={delFromBasket}><i className="fa fa-trash-o"/></button></div>
      <div><button className="btn btn-outline-info btn-sm PagebasketReview"onClick={reviewGame}>Details</button></div>
    </div>
  );
}