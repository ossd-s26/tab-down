// inject
const drawerHTML = `
  <div id="hover-trigger-zone"></div>
  <div id="hover-slide-container">
    <div class="drawer-header" style="background: #1e1f22; color: #dbdee1; display: flex; justify-content: space-between; padding: 10px;">
        <span id="drawer-title">TabDown</span>
        <span style="font-size: 10px; opacity: 0.5;">Move mouse away to hide</span>
    </div>
    <iframe 
        id="drawer-iframe" 
        src="about:blank"
        allow="microphone; camera; display-capture; autoplay; clipboard-write;"
        ></iframe>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', drawerHTML);

const trigger = document.getElementById('hover-trigger-zone');
const container = document.getElementById('hover-slide-container');
const iframe = document.getElementById('drawer-iframe');
const title = document.getElementById('drawer-title');

// add url by user 
function updateIframe() {
  chrome.storage.local.get(['targetUrl'], (result) => {
    // default url
    const url = result.targetUrl || "https://www.google.com";
    if (iframe.src !== url) {
      iframe.src = url;
      title.innerText = new URL(url).hostname;
    }
  });
}

trigger.addEventListener('mouseenter', () => {
    container.classList.add('active');
    updateIframe(); 
});

container.addEventListener('mouseleave', () => {
    container.classList.remove('active');
});