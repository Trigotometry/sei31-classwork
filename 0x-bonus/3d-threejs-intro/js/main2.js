let renderer, scene, camera, floor, cube, sphere, light, step = 0,
	controller, stats;

function createRenderer() {
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( '#000000' );
	renderer.setPixelRatio( window.devicePixelRatio || 1 );
	renderer.shadowMap.enabled = true;
	return renderer;
}

function createCamera() {
	const camera = new THREE.PerspectiveCamera(
		45, //FOV
		window.innerWidth / window.innerHeight, //Screen Ratio
		0.1,
		1000,
	);
	camera.position.set( -30, 40, 30 ); // x, y, z
	camera.lookAt( 0, 0, 0 );
	return camera;
}

function createFloor() {
	const floorMaterial = new THREE.MeshLambertMaterial( {
		color: '#cfd8dc',
	} );
	const floorGeometry = new THREE.BoxGeometry( 60, 0.1, 20 );
	const floor = new THREE.Mesh( floorGeometry, floorMaterial );
	// floor.castShadow = true;
	floor.receiveShadow = true;
	floor.position.set( 15, 0, 0, );
	return floor;
}

function createBox( x, y, z, color ) {
	const cubeMaterial = new THREE.MeshLambertMaterial( {
		color,
		wireframe: true,
	} )
	const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
	const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.castShadow = true;
	cube.receiveShadow = true;
	cube.position.set( x, y, z );
	return cube;
}

function createSphere() {
	const sphereMaterial = new THREE.MeshLambertMaterial( {
		color: '#039be5',
		wireframe: true,
	} )
	const sphereGeometry = new THREE.SphereGeometry(
		4, //radius
		30, //width segment
		30, //height segment
	)
	const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
	sphere.castShadow = true;
	sphere.receiveShadow = true;
	sphere.position.set( 20, 4, 0 );
	return sphere;
}

function createLight() {
	const light = new THREE.PointLight( '#ffffff' );
	light.castShadow = true;
	light.position.set( 10, 60, 10 );
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;
	return light;
}

function init() {
	renderer = createRenderer();
	scene = new THREE.Scene();
	camera = createCamera();

	const axes = new THREE.AxesHelper( 100 );
	scene.add( axes );

	floor = createFloor();
	scene.add( floor );

	cube = createBox( -4, 4, 0, '#ff8f00' );
	scene.add( cube );

	sphere = createSphere();
	scene.add( sphere );

	light = createLight();
	scene.add( light );
	const pointLightHelper = new THREE.PointLightHelper( light );
	scene.add( pointLightHelper );

	document.body.appendChild( renderer.domElement );

	renderer.render( scene, camera );
}

window.onload = init;