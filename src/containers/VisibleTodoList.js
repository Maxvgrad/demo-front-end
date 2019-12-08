import {toggleTodo} from "../actions/actions";
import { connect } from 'react-redux';
import { TodoList } from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id) => dispatch(toggleTodo(id))
  }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps())(TodoList)

export default VisibleTodoList