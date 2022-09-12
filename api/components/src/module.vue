<template>
	<private-view title="Componentes">
		{{subtitulo}}
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
			subtitulo: "Listado de componentes",
			items: []
		}
	},
	methods: {
		logToConsole: function () {
			console.log(this.items);
		},
	},
	inject: ["api"],
	async mounted () {		
		const response = await this.api.get("files?filter[folder][_eq]=1667150c-116d-440f-a671-42219e044a46&fields[]=id&fields[]=title");
		this.items = response.data.data;
	}
};
</script>
