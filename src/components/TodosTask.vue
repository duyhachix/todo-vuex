<template>
	<div class="todo-container">
		<div>
			<hr />
			<div class="legend">
				<span>Double click to mark as complelte</span>
				<span> <span class="incomplete-box"></span> = Incomplete </span>
				<span> <span class="completed-box"></span> = Completed </span>
			</div>
			<div class="todo-items">
				<div class="todo-item-container">
					<div
						body-classes="px-lg-1"
						class="item"
						v-for="todo in allTodos"
						:key="todo.id"
						@dblclick="onDbClick(todo)"
						:class="{ isCompleted: todo.completed }"
					>
						<div>{{ todo.title }}</div>
						<b-icon @click="deleteTodo(todo.id)" icon="trash"> </b-icon>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className) {
	return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
	if (hasElement(className)) {
		new PerfectScrollbar(`.${className}`);
	} else {
		// try to init it later in case this component is loaded async
		setTimeout(() => {
			initScrollbar(className);
		}, 100);
	}
}
import { mapActions, mapGetters } from 'vuex';
import DashboardNavbar from '../views/Layout/DashboardNavbar.vue';
import ContentFooter from '../views/Layout/ContentFooter.vue';
import { FadeTransition } from 'vue2-transitions';
import Dashboard from '../views/Dashboard/Dashboard.vue';
export default {
	name: 'TodosTask',
	components: {
		DashboardNavbar,
		ContentFooter,
		Dashboard,
		FadeTransition,
	},
	methods: {
		// actions concept
		...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),

		// mutations concept
		onDbClick(todo) {
			console.log(123123123);
			let updateTodo = {
				id: todo.id,
				title: todo.title,
				completed: !todo.completed,
			};
			this.updateTodo(updateTodo);
		},

		initScrollbar() {
			let isWindows = navigator.platform.startsWith('Win');
			if (isWindows) {
				initScrollbar('sidenav');
			}
		},
	},
	computed: {
		...mapGetters(['allTodos']),
	},
	mounted() {
		this.initScrollbar();
	},
	created() {
		this.fetchTodos();
	},
};
</script>
<style scoped>
.todo-items {
	display: flex;
	justify-content: center;
}
.todo-item-container {
	display: grid;
	grid-template-columns: 24% 24% 24% 24%;
	gap: 10px;
	padding-left: 25px;
}
.item {
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	padding: 5px;
	border-radius: 10px;
	background-color: rgb(126, 215, 126);
	text-align: left;
	text-overflow: ellipsis;
}
.item:hover {
	cursor: pointer;
}

.b-icon:hover {
	transform: scale(0.7);
	cursor: pointer;
}
.isCompleted {
	background-color: rgb(143, 143, 143);
	text-decoration: line-through;
}
</style>
