



    // Googleボタン
    const googleButton = document.getElementById('googleLogin');
    if (googleButton) {
        googleButton.addEventListener('click', function() {
            alert('Googleログインボタンがクリックされました。');
        });
    }
  
    // LINEボタン
    const lineButton = document.getElementById('lineLogin');
    if (lineButton) {
        lineButton.addEventListener('click', function() {
            alert('LINEログインボタンがクリックされました。');
            console.log('LINEログイン処理をここに実装します。');
        });
    }
    
; 

const form = document.querySelector('form');
    // メールアドレスとパスワードの入力欄を取得
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    

    // フォームが送信（submit）されようとした時の処理
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log(emailInput, passwordInput);
        
        let errorMessage = "";

        // メールアドレスが未入力（空）かチェック
        // trim()は空白スペースのみ入力された場合も空とみなすために使います
        if (emailInput.value.trim() === "") {
            errorMessage += "メールアドレスを入力してください。\n";
        }

        // パスワードが未入力（空）かチェック
        if (passwordInput.value.trim() === "") {
            errorMessage += "パスワードを入力してください。\n";
        }

        // エラーメッセージがある場合（どちらかが未入力の場合）
        if (errorMessage !== "") {
            // 1. アラートを出す
            alert(errorMessage);

            // 2. 送信をキャンセルする（＝もとのページにとどまる）
            event.preventDefault();
        }
        // エラーがない場合は、そのままフォームが送信されます
    });
 
 
 // ─── トグル切り替え ───
  function setToggle(btn) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // ─── ファイルアップロード プレビュー ───
  const fileInput = document.getElementById('fileInput');
    if (fileInput) {
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


    // 2. ログイン機能（ご希望のコードを適用）

}