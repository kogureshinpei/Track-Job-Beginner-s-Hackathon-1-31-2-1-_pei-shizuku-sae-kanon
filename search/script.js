function switchTab(index) {
  // Remove active class from all tabs and contents
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  // Add active class to selected tab and content
  document.querySelectorAll(".tab")[index].classList.add("active");
  document.getElementById(`tab-${index}`).classList.add("active");
}

// Course card selection
document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (!e.target.classList.contains("bookmark-btn")) {
      document
        .querySelectorAll(".course-card")
        .forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");
    }
  });
});

document.querySelectorAll(".bookmark-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });
});
document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
  });
});
