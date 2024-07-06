function copyJobDescription() {
    const jobDetailsElement = document.getElementById('job-details');
    if (jobDetailsElement) {
      const jobDescription = jobDetailsElement.innerText;
      navigator.clipboard.writeText(jobDescription).then(function() {
        console.log('Job description copied to clipboard');
      }).catch(function(err) {
        console.error('Failed to copy text: ', err);
      });
    } else {
      console.error('Job details element not found');
    }
}
  
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "copyJobDescription") {
        copyJobDescription();
    }
});
  