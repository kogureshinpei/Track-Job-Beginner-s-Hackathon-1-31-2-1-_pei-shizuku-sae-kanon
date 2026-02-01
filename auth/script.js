document.addEventListener('DOMContentLoaded', function () {
    
    // ─── 要素の取得 ───
    const btnNew = document.getElementById('btn-new');
    const btnCurrent = document.getElementById('btn-current');
    const uploadArea = document.getElementById('upload-area');
    const uploadNote = document.getElementById('upload-note');
    
    const form = document.querySelector('form');
    
    // バリデーション対象の取得
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameInput = document.getElementById('name');       // ★氏名
    const fileInput = document.getElementById('fileInput');  // ★画像

    // 現在「新入生」か「在学生」かを管理（初期値は新入生=false）
    let isCurrentStudent = false;

    // ─── トグル切り替え（新入生・在学生） ───
    if(btnNew && btnCurrent) {
        // 新入生ボタン
        btnNew.addEventListener('click', function() {
            isCurrentStudent = false;
            // 画像エリアを隠す
            if(uploadArea) uploadArea.style.display = 'none';
            if(uploadNote) uploadNote.style.display = 'none';
        });

        // 在学生ボタン
        btnCurrent.addEventListener('click', function() {
            isCurrentStudent = true;
            // 画像エリアを表示する
            if(uploadArea) uploadArea.style.display = 'flex'; 
            if(uploadNote) uploadNote.style.display = 'block';
        });
    }

    // ─── 送信時のバリデーション（アラート表示） ───
    if (form) {
        form.addEventListener('submit', function(event) {
            
            let errorMessage = ""; // ここにエラー文を溜めていく

            // 1. メールアドレス
            if (emailInput && emailInput.value.trim() === "") {
                errorMessage += "・メールアドレスを入力してください。\n";
            }

            // 2. パスワード
            if (passwordInput && passwordInput.value.trim() === "") {
                errorMessage += "・パスワードを入力してください。\n";
            }

            // 3. 氏名（★ここに追加しました）
            if (nameInput && nameInput.value.trim() === "") {
                errorMessage += "・氏名を入力してください。\n";
            }

            // 4. 画像（★在学生のみ追加）
            if (isCurrentStudent) {
                // ファイルが選択されていない(filesの長さが0)場合
                if (!fileInput || fileInput.files.length === 0) {
                    errorMessage += "・在学生の方は、画像のアップロードが必須です。\n";
                }
            }

            // ─── 結果の判定 ───
            if (errorMessage !== "") {
                // エラーがある場合：アラートを出して送信ストップ
                alert(errorMessage);
                event.preventDefault(); 
            } else {
                // エラーがない場合：画面遷移
                event.preventDefault(); // 本来の送信をキャンセル（PHPがないため）
                window.location.href = '../template/index.html';
            }
        });
    }

    // ─── Google/LINEボタン (既存機能) ───
    const googleButton = document.getElementById('googleLogin');
    if (googleButton) {
        googleButton.addEventListener('click', function() {
            alert('Googleログインボタンがクリックされました。');
        });
    }
    const lineButton = document.getElementById('lineLogin');
    if (lineButton) {
        lineButton.addEventListener('click', function() {
            alert('LINEログインボタンがクリックされました。');
        });
    }
});


// ─── デザイン用: ボタンの見た目切り替え ───
function setToggle(btn) {
    btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}


// ─── 画像アップロード時のプレビュー機能 ───
const fileInputHandler = document.getElementById('fileInput');
if (fileInputHandler) {
    fileInputHandler.addEventListener('change', function(e) {
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
        area.style.borderColor = '#4CAF50';
    });
}

function resetUpload(e) {
    e.stopPropagation();
    location.reload(); 
}