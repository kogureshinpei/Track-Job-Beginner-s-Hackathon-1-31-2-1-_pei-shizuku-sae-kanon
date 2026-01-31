 // ─── トグル切り替え ───
  function setToggle(btn) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // ─── ファイルアップロード プレビュー ───
  document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const area = this.closest('.upload-area');
    area.innerHTML = `
      <div style="font-size:13px;font-weight:600;color:#1e293b;">${file.name}</div>
      <div style="font-size:11.5px;color:#64748b;margin-top:4px;">${(file.size/1024/1024).toFixed(2)} MB</div>
      <div style="margin-top:10px;">
        <button onclick="resetUpload(event)" style="background:none;border:1px solid #cbd5e1;border-radius:6px;padding:5px 14px;font-size:12px;color:#475569;cursor:pointer;font-family:inherit;">削除</button>
      </div>
    `;
  });

  function resetUpload(e) {
    e.stopPropagation();
    location.reload();
  }