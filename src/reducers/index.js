import { ADDTODO, DELTODO, CHECKTODO } from '../types';

const INITIAL_STATE = {
	todos: [],
};
export function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADDTODO:
			return {
				...state,
				todos: state.todos.concat(action.payload),
			};
		case DELTODO:
			return {
				...state,
				todos: state.todos.filter((todo) => {
					if (todo.id == action.payload.id) {
					} else {
						return todo;
					}
				}),
			};
		case CHECKTODO:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id == action.payload.id) {
						todo.isCompleted = action.payload.isCompleted;
						return todo;
					} else {
						return todo;
					}
				}),
			};

		default:
			return state;
	}
}
