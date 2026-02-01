console.log('profile.js loaded');
  document.querySelector('.btn-edit').addEventListener('click', function() {
    alert('編集画面に移動します！(未実装)');
    console.log('Edit profile button clicked');
  });

  // function selectStatus(card) {
  //   document.querySelectorAll('.status-card').forEach(c => c.classList.remove('selected'));
  //   card.classList.add('selected');
  // }

  // // ─── File Upload with Drag & Drop ───
  // const uploadArea = document.getElementById('uploadArea');
  // const fileInput = document.getElementById('fileInput');

  // ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  //   uploadArea.addEventListener(eventName, preventDefaults, false);
  // });

  // function preventDefaults(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }

  // ['dragenter', 'dragover'].forEach(eventName => {
  //   uploadArea.addEventListener(eventName, () => uploadArea.classList.add('dragover'), false);
  // });

  // ['dragleave', 'drop'].forEach(eventName => {
  //   uploadArea.addEventListener(eventName, () => uploadArea.classList.remove('dragover'), false);
  // });

  // uploadArea.addEventListener('drop', handleDrop, false);

  // function handleDrop(e) {
  //   const dt = e.dataTransfer;
  //   const files = dt.files;
  //   handleFiles(files);
  // }

  // fileInput.addEventListener('change', function() {
  //   handleFiles(this.files);
  // });

  // function handleFiles(files) {
  //   if (files.length === 0) return;
  //   const file = files[0];
    
  //   uploadArea.innerHTML = `
  //     <div style="display:flex;align-items:center;justify-content:space-between;padding:0 16px;">
  //       <div style="display:flex;align-items:center;gap:12px;">
  //         <div style="width:40px;height:40px;background:#E8F2FF;border-radius:8px;display:flex;align-items:center;justify-content:center;">
  //           <svg width="20" height="20" viewBox="0 0 24 24" fill="#0D7AFF"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>
  //         </div>
  //         <div style="text-align:left;">
  //           <div style="font-size:13px;font-weight:600;color:#1A1D29;">${file.name}</div>
  //           <div style="font-size:11px;color:#6B7280;margin-top:2px;">${(file.size/1024/1024).toFixed(2)} MB</div>
  //         </div>
  //       </div>
  //       <button onclick="resetUpload(event)" style="background:none;border:1.5px solid #E5E7EB;border-radius:6px;padding:6px 16px;font-size:12px;color:#6B7280;cursor:pointer;font-family:inherit;font-weight:500;">削除</button>
  //     </div>
  //   `;
  // }

  // function resetUpload(e) {
  //   e.stopPropagation();
  //   location.reload();
  // }
