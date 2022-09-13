import ModuleComponent from './module.vue';

export default {
	id: 'custom',
	name: 'Components',
	icon: 'preview',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
};
