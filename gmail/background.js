// @ts-nocheck
'use strict';

browser.browserAction.onClicked.addListener(tabInfo => {
	browser.tabs.create({ url: 'https://mail.google.com' });
});
