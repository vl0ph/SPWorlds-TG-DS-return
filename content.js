function fixButtons() {
    const buttons = document.querySelectorAll("button.hidden");

    buttons.forEach(button => {
        const text = button.textContent.trim();

        if (text === "Discord" || text === "Telegram") {
            button.classList.remove("hidden");
        }
    });
}

// первый запуск
fixButtons();

// ловим динамические изменения страницы
const observer = new MutationObserver(() => {
    fixButtons();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});