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
	removeTodo: (state, id) => {
		state.todos = state.todos.filter((todo) => {
			todo.id !== id;
		});
		console.log(6666);
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
		await axios.delete(
			`https://jsonplaceholder.typicode.com/todos/${id}`
		);
		commit('removeTodo', id);
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
};
