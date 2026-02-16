// inject
const drawerHTML = `
  <div id="hover-trigger-zone"></div>
  <div id="hover-slide-container">
    <div class="drawer-header">Will Change this Later (Notes rn)</div>
    <textarea id="notes-area" placeholder="Type here idk"></textarea>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', drawerHTML);

const trigger = document.getElementById('hover-trigger-zone');
const container = document.getElementById('hover-slide-container');
const notesArea = document.getElementById('notes-area');

// hover then slide
trigger.addEventListener('mouseenter', () => {
    container.classList.add('active');
});

// slide back up when mouse leaves
container.addEventListener('mouseleave', () => {
    container.classList.remove('active');
});

// save 
chrome.storage.local.get(['myNotes'], (result) => {
    if (result.myNotes) {
        notesArea.value = result.myNotes;
    }
});

// autosave
notesArea.addEventListener('input', () => {
    chrome.storage.local.set({ myNotes: notesArea.value });
});