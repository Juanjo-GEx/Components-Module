<template>
	<private-view title="Componentes">
		<div :style="styleMain">
			<div :style="styleHeader">
				<v-icon name="box" left :style="styleIcon" />
				<h2 :style="styleH2">{{subtitulo}}</h2>
			</div>
			<v-list :style="styleGrid">
				<v-list-item v-for="item in items" :key="item.id" :style="styleItem">
					<div :style="styleCard">
						<v-image :src="'http://localhost:8055/assets/' + item.id" :alt="item.title" :style="styleImage" />
					</div>
					<div :style="styleDetails">
						<p :style="styleText">{{item.title}}</p>
						<p :style="styleTextLight">Disponible</p>					
					</div>
				</v-list-item>				
			</v-list>
		</div>
	</private-view>
</template>

<script>
export default {
	data () {
		return {
			styleMain: {
				margin: '0 42px'
			},
			styleHeader: {
				display: 'flex',
				padding: '12px 0',
				borderTop: '1px solid #e5e7eb',
				borderBottom: '1px solid #e5e7eb'
			},
			styleIcon: {
				color: '#a2b5cd',
				fontSize: '16px'
			},
			styleH2: {
				color: '#a2b5cd',
				fontSize: '16px'
			},
			styleGrid: {
				display: 'grid',
				gap: '1.5rem',    
				gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))',
				margin: '32px 0'
			},
			styleImage: {
				maxWidth: '100%',
				height: 'auto'
			},
			styleItem: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			},
			styleCard: {
				backgroundColor: '#f0f4f9',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',      
				height: '12rem',
				width: '12rem',
				display: 'flex',
				borderRadius: '10px',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			},
			styleDetails: {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				justifySelf: 'flex-start',
				width: '100%'
			},
			styleText: {
				paddingTop: '10px'
			},
			styleTextLight: {
				color: '#a2b5cd'
			},
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
		const response = await this.api.get("/files?filter[folder][_eq]=bb6877e4-25ea-4b6f-8c8b-0e963c01570e&fields[]=id&fields[]=title");
		this.items = response.data.data;
	}
};
</script>
