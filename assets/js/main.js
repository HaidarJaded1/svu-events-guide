// السنة تتحدث تلقائياً في تذييل جميع الصفحات.
var year = document.getElementById("current-year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// فلترة الفعاليات حسب التصنيف.
var categoryButtons = document.querySelectorAll(".category-button");
var eventCards = document.querySelectorAll("[data-event-category]");
var filterMessage = document.getElementById("filter-message");

categoryButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var category = button.dataset.category;
    var count = 0;

    categoryButtons.forEach(function (item) {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    eventCards.forEach(function (card) {
      var showCard = category === "all" || card.dataset.eventCategory === category;
      card.hidden = !showCard;
      if (showCard) {
        count++;
      }
    });

    if (filterMessage) {
      filterMessage.textContent = "عدد الفعاليات المعروضة: " + count;
    }
  });
});
