<template>
	<div class="todos">
		<AddTodos />
		<TodosTask />
		<FilterTodos />
	</div>
</template>
<script>
import AddTodos from '../components/AddTodos.vue';
import TodosTask from '../components/TodosTask.vue';
import FilterTodos from '../components/FilterTodos.vue';

export default {
	name: 'About-TodoApp',
	components: { AddTodos, FilterTodos, TodosTask },
};
</script>
