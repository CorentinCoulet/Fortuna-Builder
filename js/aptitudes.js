document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".accordion .item");
    items[0].classList.add("open");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("open")) {
                    otherItem.classList.remove("open");
                }
            });
            item.classList.toggle("open");
        });
    });
});
