console.log("uni_filter.js loaded");
// ユニバーサルフィルターのスクリプト
document.querySelectorAll(".year-btn").forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
  });
});
document.querySelector(".create-content").addEventListener("click", () => {
  window.location.href = "../upload/index.html";
});