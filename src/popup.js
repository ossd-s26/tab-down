document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const saveBtn = document.getElementById('saveBtn');

    // load url 
    chrome.storage.local.get(['targetUrl'], (result) => {
        if (result.targetUrl) {
            urlInput.value = result.targetUrl;
        }
    });

    // save url when clicked
    saveBtn.addEventListener('click', () => {
        let url = urlInput.value.trim();

        // additional check
        if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        if (url) {
            chrome.storage.local.set({ targetUrl: url }, () => {
                saveBtn.innerText = "Saved!";
                saveBtn.style.backgroundColor = "#f7f3cf";
                
                setTimeout(() => {
                    saveBtn.innerText = "Save & Update";
                    saveBtn.style.backgroundColor = "#fffcd9";
                }, 2000);
            });
        }
    });
});