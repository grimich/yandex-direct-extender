chrome.tabs.onUpdated.addListener(function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf('direct.yandex') > -1 && tab.url.match(/\/registered\/main/)) {
	chrome.pageAction.show(tabId);
	};
});

chrome.webNavigation.onCompleted.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "script.js"});
});