const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Star rating functionality
const stars = document.querySelectorAll('.star');
const ratingText = document.querySelector('.rating-text');
const ratingTexts = ['とても簡単', 'やや簡単', 'ふつう', 'やや難しい', 'とても難しい'];

stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
        
        ratingText.textContent = ratingTexts[rating - 1];
    });

    star.addEventListener('mouseenter', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        stars.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#2563eb';
            } else {
                s.style.color = '#d1d5db';
            }
        });
    });
});

document.querySelector('.rating').addEventListener('mouseleave', function() {
    stars.forEach(star => {
        if (star.classList.contains('active')) {
            star.style.color = '#2563eb';
        } else {
            star.style.color = '#d1d5db';
        }
    });
});

// Evaluation method checkboxes and percentage input
const evalCheckboxes = document.querySelectorAll('.eval-checkbox');
const percentageSection = document.getElementById('percentage-section');
const percentageInputs = document.querySelectorAll('.percentage-input');
const totalPercentageSpan = document.getElementById('total-percentage');

evalCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updatePercentageSection();
    });
});

function updatePercentageSection() {
    const checkedBoxes = Array.from(evalCheckboxes).filter(cb => cb.checked);
    
    if (checkedBoxes.length >= 2) {
        // 2つ以上チェックされている場合、パーセンテージセクションを表示
        percentageSection.style.display = 'block';
        
        // チェックされた項目のパーセンテージ入力欄を表示
        checkedBoxes.forEach(cb => {
            const method = cb.getAttribute('data-method');
            const percentageItem = document.getElementById(`${method}-percentage`);
            if (percentageItem) {
                percentageItem.style.display = 'flex';
            }
        });
        
        // チェックされていない項目のパーセンテージ入力欄を非表示
        evalCheckboxes.forEach(cb => {
            if (!cb.checked) {
                const method = cb.getAttribute('data-method');
                const percentageItem = document.getElementById(`${method}-percentage`);
                if (percentageItem) {
                    percentageItem.style.display = 'none';
                    // 入力値もリセット
                    const input = percentageItem.querySelector('.percentage-input');
                    if (input) input.value = '';
                }
            }
        });
    } else {
        // 1つ以下の場合、パーセンテージセクションを非表示
        percentageSection.style.display = 'none';
        // すべての入力値をリセット
        percentageInputs.forEach(input => input.value = '');
    }
    
    calculateTotal();
}

// パーセンテージの合計を計算
percentageInputs.forEach(input => {
    input.addEventListener('input', calculateTotal);
});

function calculateTotal() {
    let total = 0;
    const visibleInputs = Array.from(percentageInputs).filter(input => {
        return input.closest('.percentage-item').style.display !== 'none';
    });
    
    visibleInputs.forEach(input => {
        const value = parseInt(input.value) || 0;
        total += value;
    });
    
    totalPercentageSpan.textContent = total;
    
    // 合計が100%でない場合は色を変える
    if (total === 100) {
        totalPercentageSpan.style.color = '#10b981'; // 緑
    } else if (total > 100) {
        totalPercentageSpan.style.color = '#ef4444'; // 赤
    } else {
        totalPercentageSpan.style.color = '#2563eb'; // 青
    }
}

// Tab switching
const tabs = document.querySelectorAll('.tab');
const reviewContent = document.getElementById('review-content');
const timetableContent = document.getElementById('timetable-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show/hide content based on which tab was clicked
        if (index === 0) {
            // 授業レビューを投稿
            reviewContent.style.display = 'block';
            timetableContent.style.display = 'none';
        } else {
            // 時間割表を投稿
            reviewContent.style.display = 'none';
            timetableContent.style.display = 'block';
        }
    });
});

// File upload
const uploadArea = document.querySelector('.upload-area');
const fileInput = document.getElementById('fileInput');

uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#2563eb';
    uploadArea.style.backgroundColor = '#eff6ff';
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '#d1d5db';
    uploadArea.style.backgroundColor = '#f9fafb';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#d1d5db';
    uploadArea.style.backgroundColor = '#f9fafb';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
    }
});

function handleFile(file) {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
        alert('PNG, JPG, PDFファイルのみアップロード可能です。');
        return;
    }

    if (file.size > maxSize) {
        alert('ファイルサイズは5MB以下にしてください。');
        return;
    }

    document.querySelector('.upload-text').textContent = `選択されたファイル: ${file.name}`;
    document.querySelector('.upload-icon').textContent = '✓';
}

// Logout functionality
const logoutBtn = document.querySelector('.logout-btn');
logoutBtn.addEventListener('click', function() {
    if (confirm('ログアウトしますか？')) {
        alert('ログアウトしました');
        // Here you can add actual logout logic like redirecting to login page
        // window.location.href = '/login';
    }
});
