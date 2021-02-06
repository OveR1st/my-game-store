import './index.css';

export const GameItem = ({ id, name, img_url, category, price, addToBasket, onItemSelected }) => {
  return(
    <div className='gameItemContainer'>
      <img onClick={() => onItemSelected(id)} src={img_url} alt="img"/>
      <div onClick={() => onItemSelected(id)}>{name}</div>
      <div>Categories: {category}</div>
      <div className="d-flex justify-content-around">
        <span className="itemPrice">Price: {price}$</span>
        <button onClick={addToBasket} type="button" className="itemBtn btn btn-outline-success">
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}