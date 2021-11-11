'use strict';

if(confirm(`Krunker Lext has shortly been discontinued in favor of Tampermonkey. Do you want to re-install the Krunker Cheat Loader?`)){
	chrome.tabs.create({ url: 'https://forum.sys32.dev/d/1-krunker-cheat-loader' }, () => {
		alert('Lext will now uninstall. Follow the Installation steps');
		chrome.management.uninstallSelf();
	});
}else{
	alert('Go to forum.sys32.dev and find the Krunker Cheat Loader.');
	chrome.management.uninstallSelf();
}