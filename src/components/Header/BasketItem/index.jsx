import './index.css';

export const BasketItem = ({ name, currPrice, src, delFromBasket }) => {
  return(
    <div>
      <img className="basketImage" src={src} alt="img"/>
      <span className="basketName">{name}</span>
      <span className="basketPrice">{currPrice}$</span>
      <button className="basketDel btn btn-outline-danger"onClick={delFromBasket}>Del</button>
    </div>
  );
}