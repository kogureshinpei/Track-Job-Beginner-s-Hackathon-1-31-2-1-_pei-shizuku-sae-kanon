// ▼ タブ切り替え関数を更新
// 引数 index: 0=評価詳細, 1=口コミ
function switchTab(index) {
  // 現在アクティブ（表示中）なパネルを取得
  const activePanel = document.querySelector(".detail-panel.active");
  
  if (!activePanel) return;

  // そのパネル内のタブとコンテンツだけを操作する
  const tabs = activePanel.querySelectorAll(".tab");
  const contents = activePanel.querySelectorAll(".tab-content");

  // 全て非アクティブ化
  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  // 指定されたインデックスだけアクティブ化
  if(tabs[index]) tabs[index].classList.add("active");
  if(contents[index]) contents[index].classList.add("active");
}

// ▼ コースカード選択時の処理を更新
document.querySelectorAll(".course-card").forEach((card, index) => {
  card.addEventListener("click", function (e) {
    // ブックマークボタン押下時は発火させない
    if (e.target.classList.contains("bookmark-btn")) return;

    // 1. 全てのカードからselectedを外して、クリックされたものに付与
    document.querySelectorAll(".course-card").forEach((c) => c.classList.remove("selected"));
    this.classList.add("selected");

    // 2. パネルの切り替え処理
    const panels = document.querySelectorAll(".detail-panel");
    
    // 全パネルを非表示（activeを削除）
    panels.forEach(p => p.classList.remove("active"));

    // クリックされたカードと同じ順番(index)のパネルを表示
    if (panels[index]) {
      panels[index].classList.add("active");
    }
  });
});

// ブックマークボタン（既存のまま）
document.querySelectorAll(".bookmark-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });
});

// フィルターチップ（既存のまま）
document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("active");
  });
});

document.querySelectorAll(".add-to-schedule-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("コースがスケジュールに追加されました！(未実装)");
  });
});