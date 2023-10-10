function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    const tab = document.getElementById(tabId);
    tab.classList.add('active-tab');
}
