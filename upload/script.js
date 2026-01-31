<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>キャンバスシェア</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ヘッダー -->
    <header class="header">
        <div class="header-left">
            <div class="logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" fill="#1E88E5"/>
                    <path d="M8 8L16 16M16 8L8 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <h1 class="site-title">キャンバスシェア</h1>
        </div>
        <nav class="header-nav">
            <a href="#" class="nav-link">マイページ</a>
            <a href="#" class="nav-link active">時間割テンプレート</a>
            <a href="#" class="nav-link">授業詳細</a>
            <a href="#" class="nav-link">
                <span class="icon-plus">⊕</span> 投稿作成
            </a>
            <button class="logout-btn">ログアウト</button>
        </nav>
        <div class="header-right">
            <div class="user-avatar"></div>
        </div>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
        <!-- ウェルカムセクション -->
        <section class="welcome-section">
            <h2 class="welcome-title">ようこそ、慶應義塾大学の佐藤さん！</h2>
            <p class="welcome-subtitle">時間割テンプレートを検索して、履修登録をスムーズに進めましょう。</p>
        </section>

        <div class="content-wrapper">
            <!-- 左サイドバー：検索フィルター -->
            <aside class="sidebar">
                <div class="search-panel">
                    <h3 class="search-title">
                        <span class="search-icon">🔍</span>
                        時間割を検索・作成
                    </h3>

                    <!-- 学部選択 -->
                    <div class="filter-group">
                        <label class="filter-label">学部を選択</label>
                        <select class="filter-select">
                            <option>全ての学部</option>
                            <option>経済学部</option>
                            <option>法学部</option>
                            <option>理工学部</option>
                            <option>文学部</option>
                        </select>
                    </div>

                    <!-- 学年選択 -->
                    <div class="filter-group">
                        <label class="filter-label">学年</label>
                        <div class="year-buttons">
                            <button class="year-btn active">1年</button>
                            <button class="year-btn">2年</button>
                            <button class="year-btn">3年</button>
                            <button class="year-btn">4年</button>
                        </div>
                    </div>

                    <!-- キーワード検索 -->
                    <div class="filter-group">
                        <label class="filter-label">キーワード検索</label>
                        <input type="text" class="keyword-input" placeholder="講義名、教授名、教室など">
                    </div>

                    <!-- 検索ボタン -->
                    <button class="search-btn">
                        <span class="filter-icon">▼</span>
                        条件を適用して検索
                    </button>
                </div>

                <!-- ヒントセクション -->
                <div class="hint-panel">
                    <h4 class="hint-title">
                        <span class="hint-icon">💡</span>
                        ヒント
                    </h4>
                    <p class="hint-text">
                        自分の時間割を投稿して、後輩や同級生を助けましょう！投稿すると「キャンバスポイント」が貯まり、学内特典と交換できます。
                    </p>
                    <a href="#" class="hint-link">詳細を見る ›</a>
                </div>
            </aside>

            <!-- メインコンテンツエリア -->
            <div class="main-area">
                <!-- テンプレートヘッダー -->
                <div class="templates-header">
                    <h3 class="templates-title">最新のテンプレート</h3>
                    <div class="view-toggle">
                        <button class="view-btn active">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <rect x="2" y="2" width="7" height="7" rx="1"/>
                                <rect x="11" y="2" width="7" height="7" rx="1"/>
                                <rect x="2" y="11" width="7" height="7" rx="1"/>
                                <rect x="11" y="11" width="7" height="7" rx="1"/>
                            </svg>
                        </button>
                        <button class="view-btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <rect x="2" y="3" width="16" height="2" rx="1"/>
                                <rect x="2" y="9" width="16" height="2" rx="1"/>
                                <rect x="2" y="15" width="16" height="2" rx="1"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- テンプレートグリッド -->
                <div class="templates-grid">
                    <!-- テンプレートカード1 -->
                    <div class="template-card">
                        <div class="timetable-preview timetable-blue">
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                        </div>
                        <div class="card-content">
                            <div class="card-header">
                                <h4 class="card-title">経済学部 1年 春学期</h4>
                                <span class="badge badge-full">フル単位</span>
                            </div>
                            <div class="card-user">
                                <div class="user-avatar-small"></div>
                                <span class="username">@tanaka_keio</span>
                            </div>
                            <div class="card-footer">
                                <div class="card-stats">
                                    <span class="stat">👍 24</span>
                                    <span class="stat">💬 12</span>
                                </div>
                                <button class="save-btn">保存 📌</button>
                            </div>
                        </div>
                    </div>

                    <!-- テンプレートカード2 -->
                    <div class="template-card">
                        <div class="timetable-preview timetable-orange">
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                        </div>
                        <div class="card-content">
                            <div class="card-header">
                                <h4 class="card-title">理工学部 2年 秋 専門重視</h4>
                                <span class="badge badge-units">24単位</span>
                            </div>
                            <div class="card-user">
                                <div class="user-avatar-small"></div>
                                <span class="username">@yuki_science</span>
                            </div>
                            <div class="card-footer">
                                <div class="card-stats">
                                    <span class="stat">👍 56</span>
                                    <span class="stat">💬 38</span>
                                </div>
                                <button class="save-btn">保存 📌</button>
                            </div>
                        </div>
                    </div>

                    <!-- テンプレートカード3 -->
                    <div class="template-card">
                        <div class="timetable-preview timetable-pink">
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                            <div class="time-cell"></div>
                        </div>
                        <div class="card-content">
                            <div class="card-header">
                                <h4 class="card-title">法学部 3年 ゼミ中心</h4>
                                <span class="badge badge-efficient">効率重視</span>
                            </div>
                            <div class="card-user">
                                <div class="user-avatar-small"></div>
                                <span class="username">@ken_law</span>
                            </div>
                            <div class="card-footer">
                                <div class="card-stats">
                                    <span class="stat">👍 112</span>
                                    <span class="stat">💬 84</span>
                                </div>
                                <button class="save-btn">保存 📌</button>
                            </div>
                        </div>
                    </div>

                    <!-- 新規作成カード -->
                    <div class="template-card create-card">
                        <div class="create-content">
                            <button class="create-btn">
                                <span class="plus-icon">+</span>
                            </button>
                            <p class="create-text">新しい時間割を投稿して<br>シェアする</p>
                        </div>
                    </div>
                </div>

                <!-- もっと見るボタン -->
                <div class="load-more">
                    <button class="load-more-btn">もっと見る</button>
                </div>
            </div>
        </div>
    </main>

    <script src="script.js"></script>
</body>
</html>