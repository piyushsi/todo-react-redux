import { ADDTODO, DELTODO, CHECKTODO } from '../types';

export function addTodo(payload) {
	return { type: ADDTODO, payload: payload };
}
export function delTodo(payload) {
	return { type: DELTODO, payload: payload };
}
export function checkTodo(payload) {
	return { type: CHECKTODO, payload: payload };
}
