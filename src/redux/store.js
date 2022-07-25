import { createStore, combineReducers } from 'redux';
import cardsReducer from './cardsRedux';
import columnsReducer from './columnsRedux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import searchStringReducer from './searchStringRedux';

/* const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
}; */

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;