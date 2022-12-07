<template>
	<div>
		<div>
			<h1>Todos Task</h1>
			<div class="todos">
				<div class="item" v-for="todo in allTodos" :key="todo.key">
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
		...mapActions(['fetchTodos', 'deleteTodo']),
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
</style>
