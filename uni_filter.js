// university-select.js

// 早慶・MARCHの大学データ
const universityData = {
  "早稲田大学": {
    "政治経済学部": ["政治学科", "経済学科", "国際政治経済学科"],
    "法学部": ["法学科"],
    "文化構想学部": ["文化構想学科"],
    "文学部": ["文学科"],
    "教育学部": ["教育学科", "国語国文学科", "英語英文学科", "社会科学科", "理学科", "数学科", "複合文化学科"],
    "商学部": ["商学科"],
    "基幹理工学部": ["数学科", "応用数理学科", "機械科学・航空宇宙学科", "電子物理システム学科", "情報理工学科", "情報通信学科", "表現工学科"],
    "創造理工学部": ["建築学科", "総合機械工学科", "経営システム工学科", "社会環境工学科", "環境資源工学科"],
    "先進理工学部": ["物理学科", "応用物理学科", "化学・生命化学科", "応用化学科", "生命医科学科", "電気・情報生命工学科"],
    "社会科学部": ["社会科学科"],
    "人間科学部": ["人間環境科学科", "健康福祉科学科", "人間情報科学科"],
    "スポーツ科学部": ["スポーツ科学科"],
    "国際教養学部": ["国際教養学科"]
  },
  "慶應義塾大学": {
    "文学部": ["人文社会学科"],
    "経済学部": ["経済学科"],
    "法学部": ["法律学科", "政治学科"],
    "商学部": ["商学科"],
    "医学部": ["医学科"],
    "理工学部": ["機械工学科", "電気情報工学科", "応用化学科", "物理情報工学科", "管理工学科", "数理科学科", "物理学科", "化学科", "システムデザイン工学科", "情報工学科", "生命情報学科"],
    "総合政策学部": ["総合政策学科"],
    "環境情報学部": ["環境情報学科"],
    "看護医療学部": ["看護学科"],
    "薬学部": ["薬学科", "薬科学科"]
  },
  "明治大学": {
    "法学部": ["法律学科"],
    "商学部": ["商学科"],
    "政治経済学部": ["政治学科", "経済学科", "地域行政学科"],
    "文学部": ["文学科", "史学地理学科", "心理社会学科"],
    "理工学部": ["電気電子生命学科", "機械工学科", "機械情報工学科", "建築学科", "応用化学科", "情報科学科", "数学科", "物理学科"],
    "農学部": ["農学科", "農芸化学科", "生命科学科", "食料環境政策学科"],
    "経営学部": ["経営学科", "会計学科", "公共経営学科"],
    "情報コミュニケーション学部": ["情報コミュニケーション学科"],
    "国際日本学部": ["国際日本学科"],
    "総合数理学部": ["現象数理学科", "先端メディアサイエンス学科", "ネットワークデザイン学科"]
  },
  "青山学院大学": {
    "文学部": ["英米文学科", "フランス文学科", "日本文学科", "史学科", "比較芸術学科"],
    "教育人間科学部": ["教育学科", "心理学科"],
    "経済学部": ["経済学科", "現代経済デザイン学科"],
    "法学部": ["法学科", "ヒューマンライツ学科"],
    "経営学部": ["経営学科", "マーケティング学科"],
    "国際政治経済学部": ["国際政治学科", "国際経済学科", "国際コミュニケーション学科"],
    "総合文化政策学部": ["総合文化政策学科"],
    "理工学部": ["物理科学科", "数理サイエンス学科", "化学・生命科学科", "電気電子工学科", "機械創造工学科", "経営システム工学科", "情報テクノロジー学科"],
    "社会情報学部": ["社会情報学科"],
    "地球社会共生学部": ["地球社会共生学科"],
    "コミュニティ人間科学部": ["コミュニティ人間科学科"]
  },
  "立教大学": {
    "文学部": ["キリスト教学科", "文学科", "史学科", "教育学科"],
    "異文化コミュニケーション学部": ["異文化コミュニケーション学科"],
    "経済学部": ["経済学科", "経済政策学科", "会計ファイナンス学科"],
    "経営学部": ["経営学科", "国際経営学科"],
    "理学部": ["数学科", "物理学科", "化学科", "生命理学科"],
    "社会学部": ["社会学科", "現代文化学科", "メディア社会学科"],
    "法学部": ["法学科", "国際ビジネス法学科", "政治学科"],
    "観光学部": ["観光学科", "交流文化学科"],
    "コミュニティ福祉学部": ["コミュニティ政策学科", "福祉学科", "スポーツウエルネス学科"],
    "現代心理学部": ["心理学科", "映像身体学科"],
    "グローバル・リベラルアーツ・プログラム": ["グローバル・リベラルアーツ学科"]
  },
  "中央大学": {
    "法学部": ["法律学科", "国際企業関係法学科", "政治学科"],
    "経済学部": ["経済学科", "経済情報システム学科", "国際経済学科", "公共・環境経済学科"],
    "商学部": ["経営学科", "会計学科", "商業・貿易学科", "金融学科"],
    "文学部": ["人文社会学科"],
    "総合政策学部": ["政策科学科", "国際政策文化学科"],
    "理工学部": ["数学科", "物理学科", "都市環境学科", "精密機械工学科", "電気電子情報通信工学科", "応用化学科", "ビジネスデータサイエンス学科", "情報工学科", "生命科学科", "人間総合理工学科"],
    "国際経営学部": ["国際経営学科"],
    "国際情報学部": ["国際情報学科"]
  },
  "法政大学": {
    "法学部": ["法律学科", "政治学科", "国際政治学科"],
    "文学部": ["哲学科", "日本文学科", "英文学科", "史学科", "地理学科", "心理学科"],
    "経済学部": ["経済学科", "国際経済学科", "現代ビジネス学科"],
    "社会学部": ["社会政策科学科", "社会学科", "メディア社会学科"],
    "経営学部": ["経営学科", "経営戦略学科", "市場経営学科"],
    "国際文化学部": ["国際文化学科"],
    "人間環境学部": ["人間環境学科"],
    "現代福祉学部": ["福祉コミュニティ学科", "臨床心理学科"],
    "キャリアデザイン学部": ["キャリアデザイン学科"],
    "グローバル教養学部": ["グローバル教養学科"],
    "スポーツ健康学部": ["スポーツ健康学科"],
    "情報科学部": ["コンピュータ科学科", "ディジタルメディア学科"],
    "デザイン工学部": ["建築学科", "都市環境デザイン工学科", "システムデザイン学科"],
    "理工学部": ["機械工学科", "電気電子工学科", "応用情報工学科", "経営システム工学科", "創生科学科"],
    "生命科学部": ["生命機能学科", "環境応用化学科", "応用植物科学科"]
  }
};

// 大学選択時に学部を更新
function updateFaculties() {
  const universitySelect = document.getElementById('universitySelect');
  const facultySelect = document.getElementById('facultySelect');
  const departmentSelect = document.getElementById('departmentSelect');
  
  const selectedUniversity = universitySelect.value;
  
  // 学部セレクトをリセット
  facultySelect.innerHTML = '<option value="">学部を選択してください</option>';
  facultySelect.disabled = !selectedUniversity;
  
  // 学科セレクトをリセット
  departmentSelect.innerHTML = '<option value="">学科を選択してください</option>';
  departmentSelect.disabled = true;
  
  if (selectedUniversity && universityData[selectedUniversity]) {
    const faculties = Object.keys(universityData[selectedUniversity]);
    faculties.forEach(faculty => {
      const option = document.createElement('option');
      option.value = faculty;
      option.textContent = faculty;
      facultySelect.appendChild(option);
    });
  }
}

// 学部選択時に学科を更新
function updateDepartments() {
  const universitySelect = document.getElementById('universitySelect');
  const facultySelect = document.getElementById('facultySelect');
  const departmentSelect = document.getElementById('departmentSelect');
  
  const selectedUniversity = universitySelect.value;
  const selectedFaculty = facultySelect.value;
  
  // 学科セレクトをリセット
  departmentSelect.innerHTML = '<option value="">学科を選択してください</option>';
  departmentSelect.disabled = !selectedFaculty;
  
  if (selectedUniversity && selectedFaculty && universityData[selectedUniversity][selectedFaculty]) {
    const departments = universityData[selectedUniversity][selectedFaculty];
    departments.forEach(department => {
      const option = document.createElement('option');
      option.value = department;
      option.textContent = department;
      departmentSelect.appendChild(option);
    });
  }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', function() {
  const universitySelect = document.getElementById('universitySelect');
  const facultySelect = document.getElementById('facultySelect');
  
  if (universitySelect) {
    universitySelect.addEventListener('change', updateFaculties);
  }
  
  if (facultySelect) {
    facultySelect.addEventListener('change', updateDepartments);
  }
});