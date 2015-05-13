chrome.webNavigation.onCompleted.addListener(function (data) {
	if (data.url.indexOf('direct.yandex') > -1 && data.url.match(/\/registered\/main/)) {
	chrome.tabs.executeScript({file: "script.js"});
	chrome.pageAction.show(data.tabId);
	};
});
