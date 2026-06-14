const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".flowers-list-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.textContent.trim().toLowerCase();

        cards.forEach(card => {
            const type = card.dataset.type;

            const showItem =
                filter === "усі квіти" ||
                (filter === "корзини" && type === "basket") ||
                (filter === "коробки" && type === "box") ||
                (filter === "букети" && type === "bunch");

            card.style.display = showItem ? "flex" : "none";
        });
    });
});