<template>
	<div>
		<h3>AddTodos</h3>
		<div class="add">
			<form @submit="onSubmit">
				<input type="text" v-model="title" placeholder="add todo" required />
				<input type="submit" value="Submit" />
			</form>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
	name: 'AddTodos',
	data() {
		return {
			title: '',
		};
	},
	methods: {
		//   actions concept:
		...mapActions(['addTodo']),
		
		// mutations concept:
		onSubmit(event) {
			event.preventDefault();
			this.addTodo(this.title);
			this.title = '';
		},
	},
};
</script>
<style lang=""></style>
