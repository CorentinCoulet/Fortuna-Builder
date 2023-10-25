const sourceElementEau = document.querySelector(".resEau");
const targetElementEau = document.querySelector(".resEauPercent");


function updateResEauPercent() {
    const newValue = parseInt(sourceElementEau.textContent);
    const result = 1 - (0.8 ** (newValue / 100));
    targetElementEau.textContent = Math.trunc(result);
}

const observer = new MutationObserver(() => {
    updateResEauPercent();
});

const observerConfig = { childList: true, subtree: true };
observer.observe(sourceElementEau, observerConfig);

updateResEauPercent();