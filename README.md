# Components Module ![Directus](https://img.shields.io/badge/directus-%2364f.svg?style=for-the-badge&logo=directus&logoColor=white) ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

El objetivo del proyecto será que el gestor de contenidos pueda previsualizar todos los componentes a través de la interfaz de Directus, antes de añadirlos a la aplicación. De esta manera se evitarán errores en la inserción de la información y se dinamizará el proceso de agregado del contenido.

## Primeros pasos

### Instalación de Directus

Instalar con npm:

```console
npm init directus-project <nombre del directorio de la api>
```

Durante el proceso de instalación seleccionar la base de datos deseada y las credenciales de administración.

Lanzar la aplicación:

```console
cd <ruta del directorio de la api>
npx directus start
```

Servidor lanzado en: http://localhost:8055

#### Instalación de extensiones

Instalar con npm:

```console
npm init <nombre de la extensión>
```

Se solicitará el tipo de extensión que desearemos crear. Para nuestro proyecto usaremos una extensión de tipo module.

```console
? Choose the extensión type module
? Choose a name for the extensión preview-components
? Choose the language to use javascript
```

Una vez finalizada la instalación se nos habrá creado una carpeta con el nombre indicado. Para empezar a implementar nuestra extensión:

```console
cd <nombre de la extensión>
npm run dev
```

Para llevar nuestra extensión a producción y observar los cambios
```console
npm run watch
```

## Casos de uso

1. [**CU-01**] Inserción de las imágenes de los componentes del proyecto.
2. [**CU-02**] Creación de un nuevo módulo en Directus que permita la previsualización de los ficheros añadidos.
3. [**CU-03**] Estilización el nuevo módulo creado en Vue.js.

### [CU-01] - Inserción del contenido

El proceso para la inserción de las imágenes será el siguiente:
-  Recopilación de las imágenes a insertar.
-  Desde la interfaz de Directus se creará una nueva carpeta para alojarlas:

```console
File Library > Create Folder
```

-  Posteriormente en dicha carpeta se irán agregando cada una de las imágenes:

```console
File Library > Create Item
```

-  Una vez añadidas, a cada una de ellas se le dará un título representativo del componente al que representa.


### [CU-02] - Custom Module 

Una vez creada la extensión, se tendrá que desarrollar el custom module en base a los requisitos descritos anteriormente. 

-  Realizar una llamada a la API de Directus para obtener las imágenes insertadas en la carpeta de componentes.

```javascript
const response = await this.api.get("/files?filter[folder][_eq]=…&fields[]=id&fields[]=title");
this.items = response.datsa.data;
```

-  Pintar esas imágenes para que el gestor de contenidos pueda previsualizarlas a través de dicho módulo.

```javascript
<v-list-item v-for="item in items" :key="item.id">
    <v-image :src"'http://localhost:8055/assets/' + item.id" :alt="item.title" />
</v-list-item>
```

### [CU-03] - Estilización del módulo 

Para que el módulo se integre correctamente y no rompa con el diseño de la interfaz de Directus, se añaden algunos estilos a la extensión.

```javascript
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
```

## Construido con...

* [Directus](https://docs.directus.io/) - Usado como gestor de bases de datos.
* [Vue](https://vuejs.org/) - Usado para mostrar y estilizar el módulo.
* [JavaScript](https://devdocs.io/javascript/) - Usado para la creación del custom module.

## Documentación

La documentación del proyecto se puede consultar en la carpeta correspondiente.

