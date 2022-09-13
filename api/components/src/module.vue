<template>
	<private-view title="Componentes">
		<div :style="{ color: 'red', fontSize: '30px' }">{{subtitulo}}</div>
		<v-list>
			<v-list-item v-for="item in items" :key="item.id">
				<v-image :src="'http://localhost:8055/assets/' + item.id" :alt="item.title" />
				{{item.title}}
			</v-list-item>
		</v-list>
	</private-view>
</template>

<script>
export default {
	data () {
		return {
			subtitulo: "Componentes disponibles",
			items: []
		}
	},
	methods: {
		filterItem: function () {
			return this.item.filter(img => img.status === 'published')
		},
	},
	inject: ["api"],
	async mounted () {		
		const response = await this.api.get("/files?fields[]=id&fields[]=title");
		this.items = response.data.data;
	}
};
</script>
