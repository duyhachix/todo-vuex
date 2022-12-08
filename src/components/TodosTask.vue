<template>
	<div>
		<div>
			<h1>Todos Task</h1>
			<div class="legend">
				<span>Double click to mark as complelte</span>
				<span> <span class="incomplete-box"></span> = Incomplete </span>
				<span> <span class="completed-box"></span> = Completed </span>
			</div>
			<div class="todos">
				<div
					class="item"
					v-for="todo in allTodos"
					:key="todo.id"
					@dblclick="onDbClick(todo)"
					:class="{ isCompleted: todo.completed }"
				>
					{{ todo.title }}
					<b-icon
						@click="deleteTodo(todo.id)"
						scale="2"
						icon="x"
						aria-hidden="true"
					></b-icon>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'TodosTask',
	methods: {
		// actions concept
		...mapActions(['fetchTodos', 'deleteTodo','updateTodo']),

		// mutations concept
		onDbClick(todo) {
			let updateTodo = {
				id: todo.id,
				title: todo.title,
				completed: !todo.completed,
			};
			this.updateTodo(updateTodo);
		},
	},
	computed: {
		...mapGetters(['allTodos']),
	},
	created() {
		this.fetchTodos();
	},
};
</script>
<style scoped>
.item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 500px;
	font-size: 20px;
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 10px;
	background-color: rgb(126, 215, 126);
	text-align: left;
}
.item:hover {
	cursor: pointer;
}
.b-icon:hover {
	transform: scale(0.7);
}
.isCompleted {
	background-color: rgb(143, 143, 143);
}
</style>
