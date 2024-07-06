browser.contextMenus.create({
    id: "copy-job-description",
    title: "Copy Job Description",
    contexts: ["page"],
    documentUrlPatterns: ["*://*.linkedin.com/jobs/*"]
});
  
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "copy-job-description") {
        browser.tabs.sendMessage(tab.id, {action: "copyJobDescription"});
    }
});