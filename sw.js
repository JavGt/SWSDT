// const url = "./package.json";

// async function NmVersion() {
// 	try {
// 		const resultado = await fetch(url);
// 		const package = await resultado.json();
// 		const { name, version } = package;
// 		const versionCache = `${name}-${version}`;
// 		// console.log(versionCache);
// 		// return versionCache;
// 	} catch (error) {
// 		return error;
// 	}
// }

const nombreCache = "SWSDT-1.0.0";
console.log(nombreCache);
const archivos = ["./index.html", "./build/css/app.min.css"];

// Cuando se instala el service worker
self.addEventListener("install", (e) => {
	console.log("Instalado el serviceWorker");

	// e.waitUntil(
	// 	caches.open(nombreCache).then((cache) => {
	// 		console.log("Cacheando");
	// 		cache.addAll(archivos);
	// 	})
	// );
});

// Activa el service Worker
self.addEventListener("activate", (e) => {
	console.log("ServiceWorker activado");

	// e.waitUntil(
	// 	caches.keys().then((keys) => {
	// 		console.log(keys);

	// 		return Promise.all(
	// 			keys
	// 				.filter((key) => key !== nombreCache)
	// 				.map((key) => caches.delete(key)) //Borra las versiones anteriores
	// 		);
	// 	})
	// );
});

// Evento fecth para descargar archivos estaticos
self.addEventListener("fetch", (e) => {
	// console.log("Fetch", e);

	// e.respondWith(
	// 	caches
	// 		.match(e.request)
	// 		.then((cacheResponse) => (cacheResponse ? cacheResponse : ""))
	// );
});
