export const GameItem = ({ id, src, name, price, categories, addToBasket, onItemSelected }) => {
  return(
    <div className=''>
      <img onClick={() => onItemSelected(id)} src={src} alt="img"/>
      <div>{name}</div>
      <div>Categories: {categories}</div>
      <div className="d-flex justify-content-around">
        <span>{price}грн</span>
        <button onClick={addToBasket} type="button" className="btn btn-outline-success">
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}