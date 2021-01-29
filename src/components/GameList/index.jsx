import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Search } from "../Search";
import { GameItem } from "./GameItem";
import { filterAction, filterStealth, filterRpg, filterAll, addToBasket } from '../../actions/actions';

const GameList = ({ games, all, action, stealth, rpg, addToBasket, onItemSelected }) => {
  const gameElements = games.map(({_id, name, categories, price, src}, id) => {
   return(
      <li key={id}>
        <GameItem
          id={id} 
          name={name}
          categories={categories}
          price={price}
          src={src}
          addToBasket={() => addToBasket(id)}
          onItemSelected={onItemSelected}/>
      </li>
   );
  })
  
  return(
    <div className='game-list'>
      <Search
        all={all}
        action={action}
        stealth={stealth}
        rpg={rpg}/>
        <ul>
          {gameElements}
        </ul>
      </div>
  );
}

const mapStateToProps = ({games}) => {
  return {games}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    all: filterAll,
    action: filterAction,
    stealth: filterStealth,
    rpg: filterRpg,
    addToBasket: addToBasket
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)