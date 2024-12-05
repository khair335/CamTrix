function cc_aff_getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return null;
}

function cc_aff_setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function cc_hour_setCookie(cname, cvalue, exh) {
	const d = new Date();
	d.setTime(d.getTime() + exh * 60 * 60 * 1000);
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function addAffParamToCtaLinks() {
	if (!window.affiliate) return;

	jQuery('a').each(function () {
		let url = jQuery(this).attr('href').trim();

		if (url.indexOf(location.hostname) >= 0 && url.indexOf('legal') == -1 && url.indexOf('wp-admin') == -1) {
			let separator = url.indexOf('?') !== -1 ? '&' : '?';
			url += `${separator}aff=` + window.btoa(window.affiliate) + '&entryUrl=' + window.btoa(window.entry_url);
			jQuery(this).attr('href', url);
		}
	});
}
document.addEventListener('DOMContentLoaded', () => {
	
	const currentAffCookie = cc_aff_getCookie('affiliate_tag');
	const info = window.info || {}; // Ensure 'info' is defined
	const { direct, productPack } = info;

	const entry_url = cc_aff_getCookie('entrypoint_url');

	const queryString = location.search;
	const params = new URLSearchParams(queryString);

	let entryUrlParam = params.get('entryUrl');

	if (entryUrlParam) {
		entryUrlParam = window.atob(entryUrlParam);
	}

	window.entry_url = entry_url || entryUrlParam || location.pathname;

	if (!entry_url) {
		cc_hour_setCookie('entrypoint_url', window.entry_url, 25 / 60);
	}

	console.log('Entry URL: ', window.entry_url);

	let aff = params.get('aff');

	if (aff) {
		aff = window.atob(aff);
	}

	window.affiliate = productPack || currentAffCookie || aff || direct;

	cc_aff_setCookie('affiliate_tag', window.affiliate, 30);

	addAffParamToCtaLinks();

	console.log('Affiliate: ', window.affiliate);
});
