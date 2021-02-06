import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Search } from "../Search";
import { GameItem } from "./GameItem";
import { filterAction, filterStealth, filterRpg, filterAll, addToBasket, objectsFetchData } from '../../actions/actions';

import './index.css';
import { useEffect } from 'react';

const GameList = ({ fetchData, objects=[], all, action, stealth, rpg, addToBasket, onItemSelected }) => {
  useEffect(()=>{
    fetchData()
  }, []);
  
  const gameElements = objects.map(({ name, img_url, category, price }, id) => {
    debugger
   return(
      <li key={id}>
        <GameItem
          id={id} 
          name={name}
          category={category}
          price={price}
          img_url={img_url}
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

const mapStateToProps = ({objects}) => {
  debugger
  return { objects }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchData: objectsFetchData,
    all: filterAll,
    action: filterAction,
    stealth: filterStealth,
    rpg: filterRpg,
    addToBasket: addToBasket
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)