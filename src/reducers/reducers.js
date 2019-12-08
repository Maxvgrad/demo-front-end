import { visibilityFilters, SET_VISIBILITY, TOGGLE_TODO, ADD_TODO } from '../actions/actions';

const { SHOW_ALL } = visibilityFilters

export function visibilityFilter(state = SHOW_ALL, action) {
  return action.type === SET_VISIBILITY ? action.filter : state
}

export function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, completed: false}];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {completed: !todo.completed});
        }
        return todo;
      });
    default:
      return state;
  }
}