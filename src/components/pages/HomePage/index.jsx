import { withRouter } from "react-router-dom";

import GameList from "../../GameList";
import Header from "../../Header";

import './index.css';

const HomePage = ({ history, inPurchase, setInPurchase }) => {
  return(
    <>
      <Header inPurchase={inPurchase} setInPurchase={setInPurchase}/>
      <hr />
      <GameList onItemSelected={(id) => history.push(`/api/products/${id}`)}/>
    </>
  );
}

export default withRouter(HomePage)