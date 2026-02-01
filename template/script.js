console.log("template/script.js loaded");

// 学年ボタン：toggle active
document.querySelectorAll(".year-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// 新規作成カード：uploadへ遷移
const createContent = document.querySelector(".create-content");
if (createContent) {
  createContent.addEventListener("click", () => {
    window.location.href = "../upload/index.html";
  });
}

// 時間割プレビュークリック：直下の画像を別タブで開く
// 仕様：.timetable-preview を押すと、その中にある img.timetable-image の src を新規タブ表示
document.querySelectorAll(".timetable-preview").forEach((preview) => {
  preview.addEventListener("click", (e) => {
    // 念のためクリック対象が画像でも同じ挙動にする
    const img = preview.querySelector("img.timetable-image");
    if (!img) return;

    const src = img.getAttribute("src");
    if (!src) return;

    // 相対パスでもそのまま開ける（同一オリジン想定）
    window.open(src, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll(".save-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("保存しました！(未実装)");
  });
});