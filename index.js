var os = function (){
	var ua = navigator.userAgent,
	isWindowsPhone = /(?:Windows Phone)/.test(ua),
	isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
	isAndroid = /(?:Android)/.test(ua),
	isFireFox = /(?:Firefox)/.test(ua),
	isChrome = /(?:Chrome|CriOS)/.test(ua),
	isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
	isPhone = /(?:iPhone)/.test(ua) && !isTablet,
	isPc = !isPhone && !isAndroid && !isSymbian;
	return {
		isTablet: isTablet,
		isPhone: isPhone,
		isAndroid: isAndroid,
		isPc: isPc
	};
}();
if (os.isAndroid || os.isPhone) {
window.location.href="equipment/mobile/moindex.html";
//alert("手机" );
} else if (os.isTablet) {
window.location.href="01/index.html";
//alert("平板" );
} else if (os.isPc) {
window.location.href="";
//alert("电脑" )
}
