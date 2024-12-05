const html = document.getElementsByTagName('html');

function createFontLoader() {
	const loaderScreen = document.createElement('div');
	loaderScreen.classList.add('font-loader');
	const spinner = document.createElement('div');
	spinner.classList.add('font-loader-spinner');
	loaderScreen.appendChild(spinner);
	document.documentElement.appendChild(loaderScreen);
}

createFontLoader();

WebFont.load({
	custom: {
		families: ['Roboto', 'Poppins', 'Inter'],
	},
	timeout: 10000,
});
