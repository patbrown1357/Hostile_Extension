// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener( function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message":"clicked_browser_action"});
    });
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "open_new_tab") {
            chrome.tabs.create({"url":request.url});
        }
    }
);

//alarm just to bug people
var quack = new Audio(chrome.runtime.getURL("quack.mp3"));
chrome.alarms.create("duckAlarm", {delayInMinutes:0.1, periodInMinutes: 1.5});

chrome.alarms.onAlarm.addListener( function() {
    quack.play();
});
