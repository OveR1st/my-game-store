import './index.css'

export const Search = ({ all, action, stealth, rpg }) => {
  return(
    <div className='search-filter'>
      <button onClick={all} type="button" className="btn btn-outline-secondary">All</button>
      <button onClick={action} type="button" className="btn btn-outline-secondary">Action</button>
      <button onClick={stealth} type="button" className="btn btn-outline-secondary">Stealth</button>
      <button onClick={rpg} type="button" className="btn btn-outline-secondary">RPG</button>
    </div>
  );
}