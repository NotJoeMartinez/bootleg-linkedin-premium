function createContextMenu() {
    browser.contextMenus.create({
      id: "copy-job-description",
      title: "Copy Job Description",
      contexts: ["page"],
      documentUrlPatterns: ["*://*.linkedin.com/jobs/*"]
    }, () => {
      if (browser.runtime.lastError) {
        console.error(`Error: ${browser.runtime.lastError}`);
      } else {
        console.log("Context menu item created successfully");
      }
    });
  }
  
  browser.runtime.onInstalled.addListener(() => {
    createContextMenu();
  });
  
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "copy-job-description") {
      browser.tabs.sendMessage(tab.id, {action: "copyJobDescription"});
    }
  });
  
  browser.runtime.onStartup.addListener(() => {
    browser.contextMenus.removeAll().then(() => {
      createContextMenu();
    });
  });