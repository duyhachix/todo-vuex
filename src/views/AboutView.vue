<template>
	<div class="todos">
		<side-bar>
					<template slot="links">
						<sidebar-item
							:link="{
								name: 'Dashboards',
								icon: 'ni ni-shop text-primary',
							}"
						>
							<sidebar-item
								:link="{ name: 'Dashboard', path: '/dashboard' }"
							></sidebar-item>
							<sidebar-item
								:link="{ name: 'Alternative', path: '/alternative' }"
							></sidebar-item>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Examples',
								icon: 'ni ni-ungroup text-orange',
							}"
						>
							<sidebar-item
								:link="{ name: 'Pricing', path: '/pricing' }"
							/>
							<sidebar-item :link="{ name: 'Login', path: '/login' }" />
							<sidebar-item
								:link="{ name: 'Register', path: '/register' }"
							/>
							<sidebar-item :link="{ name: 'Lock', path: '/lock' }" />
							<sidebar-item
								:link="{ name: 'Timeline', path: '/pages/timeline' }"
							/>
							<sidebar-item
								:link="{ name: 'Profile', path: '/pages/user' }"
							/>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Components',
								icon: 'ni ni-ui-04 text-info',
							}"
						>
							<sidebar-item
								:link="{ name: 'Buttons', path: '/components/buttons' }"
							/>
							<sidebar-item
								:link="{ name: 'Cards', path: '/components/cards' }"
							/>
							<sidebar-item
								:link="{
									name: 'Grid',
									path: '/components/grid-system',
								}"
							/>
							<sidebar-item
								:link="{
									name: 'Notifications',
									path: '/components/notifications',
								}"
							/>
							<sidebar-item
								:link="{ name: 'Icons', path: '/components/icons' }"
							/>
							<sidebar-item
								:link="{
									name: 'Typography',
									path: '/components/typography',
								}"
							/>

							<sidebar-item :link="{ name: 'Multi Level' }">
								<sidebar-item
									:link="{ name: 'Third level menu', path: '#!' }"
								/>
								<sidebar-item
									:link="{ name: 'Just another link', path: '#a' }"
								/>
								<sidebar-item
									:link="{ name: 'One last link', path: '#b' }"
								/>
							</sidebar-item>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Forms',
								icon: 'ni ni-single-copy-04 text-pink',
							}"
						>
							<sidebar-item
								:link="{ name: 'Elements', path: '/forms/elements' }"
							/>
							<sidebar-item
								:link="{
									name: 'Components',
									path: '/forms/components',
								}"
							/>
							<sidebar-item
								:link="{
									name: 'Validation',
									path: '/forms/validation',
								}"
							/>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Tables',
								icon: 'ni ni-align-left-2 text-default',
							}"
						>
							<sidebar-item
								:link="{ name: 'Tables', path: '/tables/regular' }"
							/>
							<sidebar-item
								:link="{ name: 'Sortable', path: '/tables/sortable' }"
							/>
							<sidebar-item
								:link="{
									name: 'Paginated Tables',
									path: '/tables/paginated',
								}"
							/>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Maps',
								icon: 'ni ni-map-big text-primary',
							}"
						>
							<sidebar-item
								:link="{ name: 'Google', path: '/maps/google' }"
							/>
							<sidebar-item
								:link="{ name: 'Vector', path: '/maps/vector' }"
							/>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Widgets',
								icon: 'ni ni-archive-2 text-green',
								path: '/widgets',
							}"
						>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Charts',
								icon: 'ni ni-chart-pie-35 text-info',
								path: '/charts',
							}"
						>
						</sidebar-item>

						<sidebar-item
							:link="{
								name: 'Calendar',
								icon: 'ni ni-calendar-grid-58 text-red',
								path: '/calendar',
							}"
						>
						</sidebar-item>
					</template>

					<template slot="links-after">
						<hr class="my-3" />
						<h6 class="navbar-heading p-0 text-muted">Documentation</h6>

						<b-nav class="navbar-nav mb-md-3">
							<b-nav-item
								href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
							>
								<i class="ni ni-spaceship"></i>
								<b-nav-text class="p-0">Getting started</b-nav-text>
							</b-nav-item>
							<b-nav-item
								href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard"
							>
								<i class="ni ni-palette"></i>
								<b-nav-text class="p-0">Foundation</b-nav-text>
							</b-nav-item>
							<b-nav-item
								href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard"
							>
								<i class="ni ni-ui-04"></i>
								<b-nav-text class="p-0">Components</b-nav-text>
							</b-nav-item>
							<b-nav-item
								href="https://www.creative-tim.com/learning-lab/bootstrap-vue/charts/argon-dashboard"
							>
								<i class="ni ni-chart-pie-35"></i>
								<b-nav-text class="p-0">Plugins</b-nav-text>
							</b-nav-item>
						</b-nav>
					</template>
				</side-bar>
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
