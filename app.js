// GH-300 GitHub Copilot 認定試験 練習アプリ
(function () {
  'use strict';

  // ===== 状態管理 =====
  const state = {
    screen: 'start',        // 'start' | 'quiz' | 'result'
    allQuestions: [],
    currentQuestions: [],
    currentIndex: 0,
    selectedOption: null,
    answered: false,
    score: { correct: 0, incorrect: 0 },
    categoryStats: {},      // { category: { correct, total } }
    shuffle: true,
    selectedCategory: 'すべて',
    questionCount: 20,
  };

  // ===== DOM 参照 =====
  const app = document.getElementById('app');

  // ===== ユーティリティ =====
  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getOptionLabel(index) {
    return String.fromCharCode(65 + index); // A, B, C, D
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // ===== セッションストレージ =====
  function saveStats() {
    try {
      sessionStorage.setItem('gh300_stats', JSON.stringify({
        categoryStats: state.categoryStats,
        score: state.score,
      }));
    } catch (e) {
      console.warn('Failed to save stats to sessionStorage:', e);
    }
  }

  function loadStats() {
    try {
      const data = sessionStorage.getItem('gh300_stats');
      if (data) {
        const parsed = JSON.parse(data);
        state.categoryStats = parsed.categoryStats || {};
        state.score = parsed.score || { correct: 0, incorrect: 0 };
      }
    } catch (e) {
      console.warn('Failed to load stats from sessionStorage:', e);
    }
  }

  // ===== レンダリング =====
  function render() {
    switch (state.screen) {
      case 'start': renderStart(); break;
      case 'quiz':  renderQuiz();  break;
      case 'result': renderResult(); break;
    }
  }

  // ----- スタート画面 -----
  function renderStart() {
    const total = questions.length;
    const totalAnswered = state.score.correct + state.score.incorrect;
    const accuracy = totalAnswered > 0
      ? Math.round(state.score.correct / totalAnswered * 100)
      : 0;

    const countOptions = [10, 20, 30, total].filter((n, i, arr) => arr.indexOf(n) === i);

    app.innerHTML = `
      <div class="start-screen">
        <h1>🤖 GitHub Copilot 認定試験</h1>
        <p class="subtitle">GH-300 練習問題 — フラッシュカード形式</p>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="number">${total}</div>
            <div class="label">総問題数</div>
          </div>
          <div class="stat-card">
            <div class="number">${totalAnswered}</div>
            <div class="label">回答済み</div>
          </div>
          <div class="stat-card">
            <div class="number">${accuracy}%</div>
            <div class="label">正解率</div>
          </div>
        </div>

        <div class="start-options">
          <h2>⚙️ 設定</h2>

          <div class="option-group">
            <label>カテゴリ</label>
            <select id="categorySelect">
              ${categories.map(c => `<option value="${c}" ${c === state.selectedCategory ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <div class="option-group">
            <label>問題数</label>
            <select id="countSelect">
              ${countOptions.map(n => `<option value="${n}" ${n === state.questionCount ? 'selected' : ''}>${n === total ? `全問 (${total}問)` : `${n}問`}</option>`).join('')}
            </select>
          </div>

          <div class="option-group">
            <label>オプション</label>
            <div class="checkbox-row">
              <input type="checkbox" id="shuffleCheck" ${state.shuffle ? 'checked' : ''}>
              <span>問題をランダムな順序で出題する</span>
            </div>
          </div>
        </div>

        <button class="btn btn-primary btn-lg" id="startBtn">
          ▶ 練習を開始する
        </button>
      </div>
    `;

    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('categorySelect').addEventListener('change', e => {
      state.selectedCategory = e.target.value;
    });
    document.getElementById('countSelect').addEventListener('change', e => {
      state.questionCount = parseInt(e.target.value, 10);
    });
    document.getElementById('shuffleCheck').addEventListener('change', e => {
      state.shuffle = e.target.checked;
    });
  }

  // ----- クイズ開始 -----
  function startQuiz() {
    // カテゴリフィルタ
    let pool = state.selectedCategory === 'すべて'
      ? [...questions]
      : questions.filter(q => q.category === state.selectedCategory);

    // シャッフル
    if (state.shuffle) {
      pool = shuffleArray(pool);
    }

    // 選択肢もシャッフル（正解インデックスを追従させる）
    pool = pool.map(q => {
      const indices = q.options.map((_, i) => i);
      const shuffled = shuffleArray(indices);
      return {
        ...q,
        options: shuffled.map(i => q.options[i]),
        correct: shuffled.indexOf(q.correct),
      };
    });

    // 問題数クリップ
    const count = clamp(state.questionCount, 1, pool.length);
    state.currentQuestions = pool.slice(0, count);
    state.currentIndex = 0;
    state.selectedOption = null;
    state.answered = false;
    state.score = { correct: 0, incorrect: 0 };
    state.categoryStats = {};
    state.screen = 'quiz';
    saveStats();
    render();
  }

  // ----- クイズ画面 -----
  function renderQuiz() {
    const q = state.currentQuestions[state.currentIndex];
    const total = state.currentQuestions.length;
    const progressPct = Math.round((state.currentIndex / total) * 100);
    const isLast = state.currentIndex === total - 1;

    let feedbackHtml = '';
    if (state.answered) {
      const isCorrect = state.selectedOption === q.correct;
      feedbackHtml = `
        <div class="feedback ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}">
          <div class="feedback-title">
            ${isCorrect ? '✅ 正解！' : '❌ 不正解'}
          </div>
          <p class="feedback-explanation">${q.explanation}</p>
        </div>
      `;
    }

    app.innerHTML = `
      <div class="quiz-header">
        <div class="quiz-meta">
          <span class="quiz-progress-text">問題 ${state.currentIndex + 1} / ${total}</span>
          <span class="quiz-category">${q.category}</span>
          <span class="score-display">
            <span class="score-correct">✓ ${state.score.correct}</span>
            <span class="score-incorrect">✗ ${state.score.incorrect}</span>
          </span>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${progressPct}%"></div>
        </div>
      </div>

      <div class="question-card">
        <div class="question-number">問題 ${state.currentIndex + 1}</div>
        <p class="question-text">${q.question}</p>
        <ul class="options-list" id="optionsList">
          ${q.options.map((opt, i) => {
            let cls = 'option-item';
            if (state.answered) {
              cls += ' disabled';
              if (i === q.correct) {
                cls += ' correct';
              } else if (i === state.selectedOption && i !== q.correct) {
                cls += ' incorrect';
              }
            } else if (i === state.selectedOption) {
              cls += ' selected';
            }
            return `
              <li>
                <button class="${cls}" data-index="${i}" ${state.answered ? 'disabled' : ''}>
                  <span class="option-marker">${getOptionLabel(i)}</span>
                  <span>${opt}</span>
                </button>
              </li>
            `;
          }).join('')}
        </ul>
      </div>

      ${feedbackHtml}

      <div class="action-bar">
        <button class="btn btn-secondary btn-sm" id="quitBtn">終了</button>
        ${state.answered
          ? `<button class="btn btn-primary" id="nextBtn">${isLast ? '結果を見る' : '次の問題 →'}</button>`
          : `<button class="btn btn-primary" id="checkBtn" ${state.selectedOption === null ? 'disabled' : ''}>回答を確認する</button>`
        }
      </div>
    `;

    // イベントリスナー
    document.querySelectorAll('.option-item:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.index, 10)));
      btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectOption(parseInt(btn.dataset.index, 10));
        }
      });
    });

    const checkBtn = document.getElementById('checkBtn');
    if (checkBtn) {
      checkBtn.addEventListener('click', confirmAnswer);
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', nextQuestion);
    }

    document.getElementById('quitBtn').addEventListener('click', () => {
      if (confirm('練習を終了して結果を表示しますか？')) {
        showResult();
      }
    });
  }

  function selectOption(index) {
    if (state.answered) return;
    state.selectedOption = index;
    render();
  }

  function confirmAnswer() {
    if (state.selectedOption === null || state.answered) return;

    const q = state.currentQuestions[state.currentIndex];
    const isCorrect = state.selectedOption === q.correct;

    state.answered = true;

    if (isCorrect) {
      state.score.correct++;
    } else {
      state.score.incorrect++;
    }

    // カテゴリ別集計
    if (!state.categoryStats[q.category]) {
      state.categoryStats[q.category] = { correct: 0, total: 0 };
    }
    state.categoryStats[q.category].total++;
    if (isCorrect) {
      state.categoryStats[q.category].correct++;
    }

    saveStats();
    render();

    // フィードバックにスクロール
    setTimeout(() => {
      const feedback = document.querySelector('.feedback');
      if (feedback) {
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  }

  function nextQuestion() {
    const total = state.currentQuestions.length;
    if (state.currentIndex >= total - 1) {
      showResult();
      return;
    }
    state.currentIndex++;
    state.selectedOption = null;
    state.answered = false;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showResult() {
    state.screen = 'result';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ----- 結果画面 -----
  function renderResult() {
    const total = state.score.correct + state.score.incorrect;
    const pct = total > 0 ? Math.round(state.score.correct / total * 100) : 0;
    const pass = pct >= 70;

    const catEntries = Object.entries(state.categoryStats).sort((a, b) => {
      const pctA = a[1].total > 0 ? a[1].correct / a[1].total : 0;
      const pctB = b[1].total > 0 ? b[1].correct / b[1].total : 0;
      return pctA - pctB; // 正解率が低い順
    });

    const catHtml = catEntries.length > 0 ? `
      <div class="category-results">
        <h3>📊 カテゴリ別スコア（正解率が低い順）</h3>
        ${catEntries.map(([cat, stat]) => {
          const catPct = stat.total > 0 ? Math.round(stat.correct / stat.total * 100) : 0;
          const color = catPct >= 80 ? '#107c10' : catPct >= 60 ? '#0078d4' : '#a4262c';
          return `
            <div class="category-row">
              <div class="category-row-header">
                <span class="category-name">${cat}</span>
                <span class="category-score">${stat.correct} / ${stat.total} (${catPct}%)</span>
              </div>
              <div class="category-bar-bg">
                <div class="category-bar-fill" style="width: ${catPct}%; background: ${color}"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : '';

    app.innerHTML = `
      <div class="result-screen">
        <div class="result-circle ${pass ? 'pass' : 'fail'}">
          <div class="result-pct">${pct}%</div>
          <div class="result-label">${pass ? '合格' : '不合格'}</div>
        </div>

        <h2 class="result-message">${pass ? '🎉 おめでとうございます！' : '📖 もう少し学習が必要です'}</h2>
        <p class="result-sub">
          ${pass
            ? `素晴らしい成績です！合格ライン（70%）を超えました。`
            : `合格ライン 70% まであと ${70 - pct}% です。苦手なカテゴリを重点的に学習しましょう。`
          }
        </p>

        <div class="result-details">
          <div class="result-stat correct">
            <div class="number">${state.score.correct}</div>
            <div class="label">正解</div>
          </div>
          <div class="result-stat incorrect">
            <div class="number">${state.score.incorrect}</div>
            <div class="label">不正解</div>
          </div>
          <div class="result-stat total">
            <div class="number">${total}</div>
            <div class="label">出題数</div>
          </div>
        </div>

        ${catHtml}

        <div class="result-actions" style="margin-top: 24px;">
          <button class="btn btn-primary btn-lg" id="retryBtn">🔄 同じ設定でもう一度</button>
          <button class="btn btn-secondary" id="homeBtn">🏠 最初に戻る</button>
        </div>
      </div>
    `;

    document.getElementById('retryBtn').addEventListener('click', startQuiz);
    document.getElementById('homeBtn').addEventListener('click', () => {
      state.screen = 'start';
      state.score = { correct: 0, incorrect: 0 };
      state.categoryStats = {};
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== 初期化 =====
  function init() {
    loadStats();
    render();
  }

  init();
})();
