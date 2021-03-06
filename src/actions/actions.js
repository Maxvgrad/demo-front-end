
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY = 'SET_VISIBILITY';

export const visibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index
  };
}

export function setFilter(filter) {
  return {
    type: SET_VISIBILITY,
    filter: filter
  };
}

