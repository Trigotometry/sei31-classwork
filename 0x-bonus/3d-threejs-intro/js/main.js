let renderer, scene, camera, floor, cube, sphere, light, step = 0,
	controller, status;

function createRenderer() {
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor( '#553c8b' );
	renderer.setPixelRatio( window.devicePixelRatio || 1 );
	renderer.shadowMap.enabled = true;
	return renderer;
};

function createCamera() {
	const camera = new THREE.PerspectiveCamera(
		45, //FOV
		window.innerWidth / window.innerHeight, // Screen ratio
		0.1,
		1000
	);
	camera.position.set( -30, 40, 30 ); // x, y, z
	camera.lookAt( 0, 0, 0 );
	return camera;
};

function createFloor() {
	const floorMaterial = new THREE.MeshLambertMaterial( {
		color: '9ea9f0'
	} );
	const floorGeometry = new THREE.BoxGeometry( 60, 0.1, 20 );
	const floor = new THREE.Mesh( floorGeometry, floorMaterial );
	// floor.castShadow = true;
	floor.receiveShadow = true;
	floor.position.set( 15, 0, 0 );
	return floor;
};

function createBox( x, y, z, color ) {
	const cubeMaterial = new THREE.MeshLambertMaterial( {
		color,
		// wireframe: false
	} );
	const cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
	const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.castShadow = true;
	cube.receiveShadow = true;
	cube.position.set( x, y, x );
	return cube;
};

function createSphere() {
	const sphereMaterial = new THREE.MeshLambertMaterial( {
		color: '#ccc1ff',
		// wireframe: false
	} );
	const sphereGeometry = new THREE.SphereGeometry(
		4, // radius
		30, // width segment
		30 // height segment
	)
	const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
	sphere.castShadow = true;
	sphere.receiveShadow = true;
	sphere.position.set( 20, 50, 0 )
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

function resize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	renderer.setSize( window.innerWidth, window.innerHeight );
	camera.updateProjectionMatrix();
	console.log(' the window size has changed');
}

function Controller() {
	this.bouncingSpeed = 0.25;
	this.rotationSpeed = 0.05;
}

function addStats() {
	const stats = new Stats();
	stats.setMode( 0 );
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	return stats;
}

function addGui() {
	const gui = new dat.GUI();
	gui.add( controller, 'rotationSpeed', 0, 0.3 );
	gui.add( controller, 'bouncingSpeed', 0, 0.5 );
}

function animate() {
	stats.update();

	step += controller.bouncingSpeed;
	sphere.position.x = 20 + 10 * Math.cos( step );
	sphere.position.y = Math.abs( Math.sin( step ) * 10 ) + 4;

	cube.rotation.x += controller.rotationSpeed;

	renderer.render( scene, camera );
	requestAnimationFrame( animate );
}

function init() {
	renderer = createRenderer();
	scene = new THREE.Scene();
	camera = createCamera();

	const axes = new THREE.AxesHelper( 100 );
	scene.add( axes );

	floor = createFloor();
	scene.add( floor );

	cube = createBox( -4, 4, 0, '#ffeafe' );
	scene.add( cube );

	sphere = createSphere();
	scene.add( sphere );

	light = createLight();
	scene.add( light );
	const pointLightHelper = new THREE.PointLightHelper( light );
	scene.add( pointLightHelper );

	controller = new Controller();
	const gui = addGui( controller );

	const controls = new THREE.OrbitControls(
		camera,
		renderer.domElement
	);

	stats = addStats();
	document.getElementById('stats').appendChild( stats.domElement );

	document.body.appendChild( renderer.domElement );

	renderer.render( scene, camera );
	animate();
}

window.onload = init;
window.addEventListener( "resize", resize );