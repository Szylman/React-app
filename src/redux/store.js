import { createStore } from 'redux';
import { strContains } from '../utils/strContains';
import initialState from './initialState';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns 
.filter(column => column.listId === listId);

export const getAllList = state => state.lists;

export const searchStringValue = state => state.searchString;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload });

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const addList = payload => ({ type: 'ADD_LIST', payload});

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.payload]};

    case 'ADD_CARD':
      return {...state, cards: [...state.cards, action.payload]};

    case 'UPDATE_SEARCHSTRING':
      return {...state, searchString: action.payload};  

    case 'ADD_LIST':
      return {...state, lists: [...state.lists, action.payload]};
    
      default:
        return state;
  };
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;