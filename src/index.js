import { addTodo, setFilter, toggleTodo, visibilityFilters } from './actions/actions';
import { store } from "./store/createStore";


console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Cut the nails'));
store.dispatch(addTodo('Investments'));
store.dispatch(toggleTodo(0));
store.dispatch(setFilter(visibilityFilters.SHOW_ALL));

unsubscribe();