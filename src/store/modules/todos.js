import axios from 'axios';
const state = {
	todos: [],
};

const getters = {
	allTodos: (state) => {
		return state.todos;
	},
};

const mutations = {
	setTodos: (state, todos) => {
		state.todos = todos;
	},
	removeTodo(state, id) {
		console.log('id argument:', id);
		return (state.todos = state.todos.filter((todo) => todo.id !== id));
	},
	// sau khi call api thì call hàm này
	updateTodo(state, updatedData) {
		// find index
		let index = state.todos.findIndex((todo) => todo.id === updatedData.id);
		if (index !== -1) {
			state.todos.splice(index, 1, updatedData);
		}
	},
	addTodo(state, newTodo) {
		state.todos.unshift(newTodo);
	},
};

const actions = {
	async fetchTodos({ commit }) {
		let response = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		commit('setTodos', response.data);
	},
	async deleteTodo({ commit }, id) {
		console.log(`id`, id);
		console.log(commit);
		await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
		commit('removeTodo', id);
	},
	async updateTodo({ commit }, updatedTodo) {
		let response = await axios.put(
			`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
			updatedTodo
		);
		// sau khi call API update trạng thái thì call hàm 'updateTodo' qua commit và có argument là response.data
		commit('updateTodo', response.data);
	},
	async addTodo({ commit }, title) {
		let response = await axios.post(
			`https://jsonplaceholder.typicode.com/todos`,
			{ title: title, completed: false }
		);
		commit('addTodo', response.data);
		console.log(response.data);
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
