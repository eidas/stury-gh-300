// GH-300 GitHub Copilot 練習問題
const questions = [
  // ===== GitHub Copilot の概要 =====
  {
    id: 1,
    category: "GitHub Copilot の概要",
    question: "GitHub Copilot はどのような種類の AI ツールですか？",
    options: [
      "コードレビューのみを行うツール",
      "AI を活用したコード補完・生成ツール",
      "バグを自動修正するデバッガー",
      "ドキュメントを自動生成するツール"
    ],
    correct: 1,
    explanation: "GitHub Copilot は AI を活用したコーディングアシスタントであり、コードの補完・生成・提案を行います。OpenAI Codex モデルをベースに開発されています。"
  },
  {
    id: 2,
    category: "GitHub Copilot の概要",
    question: "GitHub Copilot はどの AI モデルをベースに構築されていますか？",
    options: [
      "GPT-3",
      "BERT",
      "OpenAI Codex",
      "LaMDA"
    ],
    correct: 2,
    explanation: "GitHub Copilot は OpenAI Codex モデルをベースに構築されており、GitHub 上のパブリックリポジトリのコードで学習されています。"
  },
  {
    id: 3,
    category: "GitHub Copilot の概要",
    question: "GitHub Copilot が提供する主な機能はどれですか？（最も適切なものを選んでください）",
    options: [
      "コードのデプロイ",
      "インラインコード提案とチャット",
      "コードのビルドとテスト実行",
      "リポジトリの自動管理"
    ],
    correct: 1,
    explanation: "GitHub Copilot の主な機能は、エディタ内でのインラインコード提案と GitHub Copilot Chat を通じた対話形式のアシスタンスです。"
  },
  {
    id: 4,
    category: "GitHub Copilot の概要",
    question: "GitHub Copilot Individual プランでは、コードスニペットがどのように扱われますか？",
    options: [
      "すべてのスニペットが GitHub サーバーに永続的に保存される",
      "デフォルトでスニペットが学習データとして使用されるが、オプトアウト可能",
      "スニペットは一切保存されない",
      "スニペットは組織の管理者のみが閲覧できる"
    ],
    correct: 1,
    explanation: "GitHub Copilot Individual では、デフォルトでコードスニペットがモデルの改善に使用されますが、ユーザーは設定でオプトアウトすることができます。"
  },
  {
    id: 5,
    category: "GitHub Copilot の概要",
    question: "GitHub Copilot for Business と GitHub Copilot Individual の主な違いは何ですか？",
    options: [
      "Copilot for Business は無料で提供される",
      "Copilot for Business はコードスニペットを学習データとして使用しない",
      "Copilot for Business は個人ユーザーのみが使用できる",
      "Copilot for Business は特定のプログラミング言語のみサポートする"
    ],
    correct: 1,
    explanation: "GitHub Copilot for Business では、組織のコードスニペットがモデルの学習データとして使用されません。これは企業のコードプライバシーを保護するための重要な違いです。"
  },

  // ===== サブスクリプションと管理 =====
  {
    id: 6,
    category: "サブスクリプションと管理",
    question: "GitHub Copilot Enterprise と Copilot for Business の主な違いは何ですか？",
    options: [
      "Enterprise は個人向けプランである",
      "Enterprise は組織独自のコードベースを活用してカスタマイズできる",
      "Enterprise はチャット機能を提供しない",
      "Enterprise は GitHub.com でのみ使用できる"
    ],
    correct: 1,
    explanation: "GitHub Copilot Enterprise では、組織独自のコードベースやドキュメントを活用した知識ベースの構築や、カスタマイズされた提案が可能です。"
  },
  {
    id: 7,
    category: "サブスクリプションと管理",
    question: "組織の管理者が GitHub Copilot の使用を特定のリポジトリで無効化する方法はどれですか？",
    options: [
      "リポジトリの .gitignore ファイルに設定を追加する",
      "組織設定でコンテンツ除外を設定する",
      "ユーザーのアカウント設定から無効化する",
      "GitHub Support にリクエストを送る"
    ],
    correct: 1,
    explanation: "組織の管理者は、GitHub の組織設定でコンテンツ除外（Content Exclusion）を設定することで、特定のリポジトリやファイルパスに対して Copilot の提案を無効化できます。"
  },
  {
    id: 8,
    category: "サブスクリプションと管理",
    question: "GitHub Copilot for Business の場合、組織の管理者はどのような権限を持ちますか？",
    options: [
      "個々のユーザーの提案内容を閲覧できる",
      "Copilot の使用に関するポリシーを設定できる",
      "ユーザーのローカルコードにアクセスできる",
      "AI モデルのカスタマイズができる"
    ],
    correct: 1,
    explanation: "組織の管理者は、GitHub Copilot の使用に関するポリシー（コンテンツ除外、Copilot Chat の有効/無効など）を組織レベルで設定できます。"
  },
  {
    id: 9,
    category: "サブスクリプションと管理",
    question: "GitHub Copilot の監査ログで追跡できるイベントはどれですか？",
    options: [
      "ユーザーが書いた個々のコード行",
      "Copilot 機能の有効化/無効化、シート割り当ての変更",
      "ユーザーが受け入れたコード提案の内容",
      "ユーザーのキーストローク"
    ],
    correct: 1,
    explanation: "監査ログでは、Copilot の機能設定変更、シート割り当ての追加/削除などの管理アクションを追跡できますが、個々のコード内容は記録されません。"
  },
  {
    id: 10,
    category: "サブスクリプションと管理",
    question: "GitHub Copilot Business のシートを管理する際、組織の管理者は何ができますか？",
    options: [
      "シートを個人に永続的に割り当てることのみ可能",
      "シートの割り当てと取り消しを随時行える",
      "シートは一度割り当てたら変更できない",
      "シートの管理は GitHub Support のみが行える"
    ],
    correct: 1,
    explanation: "組織の管理者は、メンバーへの Copilot シートの割り当てと取り消しをいつでも行うことができます。"
  },

  // ===== IDE 統合 =====
  {
    id: 11,
    category: "IDE 統合",
    question: "GitHub Copilot がサポートする IDE はどれですか？",
    options: [
      "Visual Studio Code のみ",
      "Visual Studio Code と JetBrains IDE のみ",
      "Visual Studio Code、Visual Studio、JetBrains IDE、Vim/Neovim など複数の IDE",
      "Web ブラウザ上の IDE のみ"
    ],
    correct: 2,
    explanation: "GitHub Copilot は、Visual Studio Code、Visual Studio、JetBrains IDE（IntelliJ IDEA、PyCharm など）、Vim/Neovim、Azure Data Studio など、多数のエディタ・IDE をサポートしています。"
  },
  {
    id: 12,
    category: "IDE 統合",
    question: "VS Code で GitHub Copilot のインライン提案を受け入れるデフォルトのキーボードショートカットはどれですか？",
    options: [
      "Ctrl + Enter",
      "Tab キー",
      "Ctrl + Space",
      "Alt + Enter"
    ],
    correct: 1,
    explanation: "VS Code で GitHub Copilot のインライン提案を受け入れるには、Tab キーを押します。提案の一部のみ受け入れる場合は Ctrl + → を使用します。"
  },
  {
    id: 13,
    category: "IDE 統合",
    question: "GitHub Copilot で次の候補に切り替えるキーボードショートカットはどれですか？（VS Code）",
    options: [
      "Alt + ] または Option + ]",
      "Ctrl + N",
      "Tab キー",
      "Ctrl + Alt + ↓"
    ],
    correct: 0,
    explanation: "VS Code で次の Copilot 提案に切り替えるには Alt + ]（Windows/Linux）または Option + ]（Mac）を使用します。前の提案に戻るには Alt + [ または Option + [ です。"
  },
  {
    id: 14,
    category: "IDE 統合",
    question: "GitHub Copilot が提案を生成する際に考慮するコンテキストはどれですか？",
    options: [
      "現在のファイルの内容のみ",
      "現在のファイルと、エディタで開いている関連ファイルの内容",
      "プロジェクト全体のすべてのファイル",
      "GitHub 上のすべてのリポジトリ"
    ],
    correct: 1,
    explanation: "GitHub Copilot はコンテキストウィンドウとして、現在のファイルの内容に加え、エディタで開いている関連ファイルや近隣コードを考慮して提案を生成します。"
  },
  {
    id: 15,
    category: "IDE 統合",
    question: "GitHub Copilot の提案を複数候補まとめて表示する方法はどれですか？（VS Code）",
    options: [
      "Ctrl + Shift + P でコマンドパレットを開く",
      "Ctrl + Enter でオープンパネルを開く",
      "右クリックからコンテキストメニューを開く",
      "設定画面から候補数を変更する"
    ],
    correct: 1,
    explanation: "VS Code では Ctrl + Enter（Mac では Ctrl + Return）を押すことで、GitHub Copilot の提案を複数候補まとめて表示するパネルを開くことができます。"
  },

  // ===== GitHub Copilot Chat =====
  {
    id: 16,
    category: "GitHub Copilot Chat",
    question: "GitHub Copilot Chat で使用できるスラッシュコマンドのうち、コードの説明を求める際に使用するものはどれですか？",
    options: [
      "/fix",
      "/explain",
      "/tests",
      "/doc"
    ],
    correct: 1,
    explanation: "/explain コマンドを使用すると、選択したコードや特定のコードブロックの説明を GitHub Copilot Chat に求めることができます。"
  },
  {
    id: 17,
    category: "GitHub Copilot Chat",
    question: "GitHub Copilot Chat の `@workspace` エージェントは何をしますか？",
    options: [
      "Web 検索を実行する",
      "プロジェクト全体のコードベースをコンテキストとして使用する",
      "GitHub の Issue を検索する",
      "ターミナルコマンドを実行する"
    ],
    correct: 1,
    explanation: "@workspace エージェントを使用すると、プロジェクト全体のコードベースをコンテキストとして Copilot Chat に質問でき、プロジェクト固有の回答を得ることができます。"
  },
  {
    id: 18,
    category: "GitHub Copilot Chat",
    question: "GitHub Copilot Chat で `/tests` コマンドは何をしますか？",
    options: [
      "既存のテストを実行する",
      "選択したコードのユニットテストを生成する",
      "テストファイルを削除する",
      "テストカバレッジレポートを生成する"
    ],
    correct: 1,
    explanation: "/tests コマンドを使用すると、選択したコードに対するユニットテストを自動生成することができます。"
  },
  {
    id: 19,
    category: "GitHub Copilot Chat",
    question: "GitHub Copilot Chat の `#file` 変数は何に使用しますか？",
    options: [
      "ファイルを削除する",
      "特定のファイルをチャットのコンテキストに追加する",
      "新しいファイルを作成する",
      "ファイルの検索を行う"
    ],
    correct: 1,
    explanation: "#file 変数を使用すると、特定のファイルをチャットセッションのコンテキストに含め、そのファイルに関する質問ができます。"
  },
  {
    id: 20,
    category: "GitHub Copilot Chat",
    question: "GitHub Copilot Chat が提供するスラッシュコマンドのうち、コードの修正を依頼する際に使用するものはどれですか？",
    options: [
      "/explain",
      "/doc",
      "/fix",
      "/new"
    ],
    correct: 2,
    explanation: "/fix コマンドを使用すると、選択したコードの問題点を特定して修正案を提案するよう GitHub Copilot Chat に依頼できます。"
  },
  {
    id: 21,
    category: "GitHub Copilot Chat",
    question: "GitHub.com 上の GitHub Copilot Chat（github.com/copilot）はどのような場合に使用できますか？",
    options: [
      "IDE がインストールされていない場合のみ",
      "ブラウザから直接 AI アシスタンスが必要な場合",
      "オフライン環境での作業時",
      "コードのデプロイ時のみ"
    ],
    correct: 1,
    explanation: "GitHub.com 上の Copilot Chat はブラウザから直接利用でき、IDE がなくてもコードの質問、生成、デバッグ支援などを受けることができます。"
  },
  {
    id: 22,
    category: "GitHub Copilot Chat",
    question: "Copilot Chat で `@terminal` エージェントは何をしますか？",
    options: [
      "ターミナルウィンドウを自動的に開く",
      "ターミナルコマンドに関する質問に答える",
      "ターミナルの履歴を削除する",
      "ターミナルをリセットする"
    ],
    correct: 1,
    explanation: "@terminal エージェントを使用すると、シェルコマンドについての質問や、ターミナルで実行するコマンドの提案を受けることができます。"
  },

  // ===== GitHub Copilot CLI =====
  {
    id: 23,
    category: "GitHub Copilot CLI",
    question: "GitHub Copilot CLI (`gh copilot`) の主な機能は何ですか？",
    options: [
      "GitHub リポジトリの自動バックアップ",
      "コマンドライン操作の提案と説明",
      "コードの自動デプロイ",
      "ブランチの自動マージ"
    ],
    correct: 1,
    explanation: "GitHub Copilot CLI は、ターミナルで実行するコマンドの提案・説明・修正を AI で支援します。`gh copilot suggest` や `gh copilot explain` などのサブコマンドがあります。"
  },
  {
    id: 24,
    category: "GitHub Copilot CLI",
    question: "`gh copilot suggest` コマンドは何をしますか？",
    options: [
      "コードの提案を表示する",
      "実行したいことを自然言語で説明するとコマンドを提案する",
      "GitHub の Issue を提案する",
      "プルリクエストのレビューを提案する"
    ],
    correct: 1,
    explanation: "`gh copilot suggest` を使用すると、実行したいことを自然言語（日本語や英語）で説明することで、適切なシェルコマンドを AI が提案してくれます。"
  },
  {
    id: 25,
    category: "GitHub Copilot CLI",
    question: "`gh copilot explain` コマンドは何をしますか？",
    options: [
      "コードの説明を生成する",
      "指定したコマンドやスクリプトの動作を説明する",
      "エラーメッセージを解析する",
      "ドキュメントを自動生成する"
    ],
    correct: 1,
    explanation: "`gh copilot explain` を使用すると、指定したシェルコマンドやスクリプトが何をするのかを AI が自然言語で説明してくれます。"
  },

  // ===== プルリクエストとコードレビュー =====
  {
    id: 26,
    category: "プルリクエストとコードレビュー",
    question: "GitHub Copilot のプルリクエスト要約機能は何をしますか？",
    options: [
      "プルリクエストを自動マージする",
      "変更内容の概要を自動生成してプルリクエストの説明に追加する",
      "プルリクエストのコードをデプロイする",
      "プルリクエストのレビュアーを自動割り当てる"
    ],
    correct: 1,
    explanation: "GitHub Copilot のプルリクエスト要約機能は、変更されたファイルやコードの内容を分析し、プルリクエストの説明文を自動生成します。"
  },
  {
    id: 27,
    category: "プルリクエストとコードレビュー",
    question: "GitHub Copilot code review 機能は何を提供しますか？",
    options: [
      "コードのデプロイを自動化する",
      "コードの潜在的な問題点や改善提案をコメントとして提供する",
      "テストを自動実行してレポートを生成する",
      "マージ競合を自動解決する"
    ],
    correct: 1,
    explanation: "GitHub Copilot code review は、プルリクエストのコードを分析し、潜在的なバグ、セキュリティ問題、改善提案などをコメントとして提供します。"
  },

  // ===== 責任ある AI =====
  {
    id: 28,
    category: "責任ある AI",
    question: "GitHub Copilot の AI 提案を使用する際のベストプラクティスはどれですか？",
    options: [
      "提案されたコードはすべて正確なので、確認なしに使用できる",
      "提案されたコードを必ずレビューし、理解した上で使用する",
      "AI 提案のコードはテスト不要である",
      "提案されたコードは著作権フリーである"
    ],
    correct: 1,
    explanation: "GitHub Copilot の提案は参考情報です。提案されたコードが正確か、セキュリティ上の問題がないか、プロジェクトの要件に合っているかを必ず確認・レビューしてから使用することが重要です。"
  },
  {
    id: 29,
    category: "責任ある AI",
    question: "GitHub Copilot が生成するコードの著作権に関して正しい説明はどれですか？",
    options: [
      "Copilot が生成したコードはすべて MIT ライセンスである",
      "生成されたコードにはパブリックコードのマッチが含まれる可能性があるため確認が必要",
      "Copilot のコードに著作権問題は一切ない",
      "生成されたコードは自動的に組織のライセンスになる"
    ],
    correct: 1,
    explanation: "GitHub Copilot はパブリックコードで学習しているため、生成されたコードがパブリックコードと類似している場合があります。Copilot には類似コードを検出してユーザーに通知する機能があります。"
  },
  {
    id: 30,
    category: "責任ある AI",
    question: "GitHub の責任ある AI に関する原則の一つとして正しいものはどれですか？",
    options: [
      "AI は人間の判断を完全に代替できる",
      "AI システムは公平で偏りのない設計を目指すべきである",
      "AI の出力は常に 100% 正確である",
      "AI ツールに対する人間の監視は不要である"
    ],
    correct: 1,
    explanation: "Microsoft と GitHub は責任ある AI の原則として、公平性、信頼性と安全性、プライバシーとセキュリティ、包括性、透明性、説明責任を掲げています。"
  },
  {
    id: 31,
    category: "責任ある AI",
    question: "GitHub Copilot の提案にセキュリティの脆弱性が含まれる可能性がある理由は何ですか？",
    options: [
      "Copilot はウイルスを意図的に含める",
      "学習データには脆弱なコードパターンが含まれている可能性がある",
      "Copilot はセキュリティチェックを行わない設計になっている",
      "脆弱性は Copilot の仕様である"
    ],
    correct: 1,
    explanation: "GitHub Copilot は大量のパブリックコードで学習しており、その中には脆弱なコードパターンも含まれる可能性があります。そのため、セキュリティの観点からもコードレビューが重要です。"
  },
  {
    id: 32,
    category: "責任ある AI",
    question: "GitHub Copilot を使用した場合、開発者の役割はどう変わりますか？",
    options: [
      "開発者はコードを書く必要がなくなる",
      "開発者は AI の提案を評価・検証する重要な役割を担う",
      "開発者はコードレビューが不要になる",
      "開発者のスキルは不要になる"
    ],
    correct: 1,
    explanation: "GitHub Copilot は開発者を代替するものではなく、生産性を高めるツールです。開発者は AI の提案を批判的に評価し、コードの品質・セキュリティ・適切性を確認する責任を持ち続けます。"
  },

  // ===== プライバシーとセキュリティ =====
  {
    id: 33,
    category: "プライバシーとセキュリティ",
    question: "GitHub Copilot for Business で、ユーザーのプロンプトとコード提案はどのように扱われますか？",
    options: [
      "すべてのデータが永続的に保存され、モデルの学習に使用される",
      "プロンプトと提案はリアルタイム処理され、学習データとして保持されない",
      "データは第三者と共有される",
      "データは組織の全メンバーが閲覧できる"
    ],
    correct: 1,
    explanation: "GitHub Copilot for Business では、ユーザーのプロンプトとコード提案はリアルタイムで処理され、モデルの学習データとして保持されません。これにより企業の機密コードが保護されます。"
  },
  {
    id: 34,
    category: "プライバシーとセキュリティ",
    question: "コンテンツ除外（Content Exclusion）機能を使用する目的は何ですか？",
    options: [
      "Copilot の応答速度を向上させる",
      "機密ファイルや特定のリポジトリを Copilot の提案から除外する",
      "特定のプログラミング言語のサポートを無効化する",
      "特定のユーザーの Copilot アクセスを制限する"
    ],
    correct: 1,
    explanation: "コンテンツ除外機能を使用すると、機密性の高いファイルや特定のリポジトリを Copilot のコンテキストから除外し、機密コードが Copilot の提案に影響しないようにできます。"
  },
  {
    id: 35,
    category: "プライバシーとセキュリティ",
    question: "GitHub Copilot が使用するデータの転送において、どのようなセキュリティ措置が取られていますか？",
    options: [
      "データは暗号化なしで転送される",
      "データは転送中および保存時に暗号化される",
      "データはユーザーのローカルマシン内でのみ処理される",
      "データセキュリティは実装されていない"
    ],
    correct: 1,
    explanation: "GitHub Copilot はデータの転送中および保存時に暗号化を使用しており、Microsoft のエンタープライズグレードのセキュリティ基準に準拠しています。"
  },
  {
    id: 36,
    category: "プライバシーとセキュリティ",
    question: "コンテンツ除外の設定はどこで行いますか？",
    options: [
      "ユーザーの個人設定画面",
      "組織またはリポジトリの設定画面",
      ".gitignore ファイル",
      "IDE のプラグイン設定"
    ],
    correct: 1,
    explanation: "コンテンツ除外は、GitHub.com の組織設定またはリポジトリ設定から管理者が設定できます。除外するパスやファイルパターンを指定します。"
  },

  // ===== プロンプトエンジニアリング =====
  {
    id: 37,
    category: "プロンプトエンジニアリング",
    question: "GitHub Copilot からより良い提案を得るためのベストプラクティスはどれですか？",
    options: [
      "コメントを書かずに Copilot に任せる",
      "明確なコメントや関数名を書き、意図を明示する",
      "プロンプトは常に英語で書く必要がある",
      "提案を得るためにコードを最小化する"
    ],
    correct: 1,
    explanation: "明確なコメント、わかりやすい変数・関数名、具体的な意図の記述などにより、Copilot が適切なコンテキストを理解し、より良い提案を生成できます。"
  },
  {
    id: 38,
    category: "プロンプトエンジニアリング",
    question: "GitHub Copilot のコンテキストウィンドウとは何ですか？",
    options: [
      "コードエディタの表示領域",
      "Copilot が提案を生成する際に考慮するコードの範囲",
      "Copilot のポップアップウィンドウ",
      "コードのデバッグウィンドウ"
    ],
    correct: 1,
    explanation: "コンテキストウィンドウとは、Copilot が提案を生成する際に参照するコードの範囲です。現在のファイル、カーソル周辺のコード、開いている関連ファイルなどが含まれます。"
  },
  {
    id: 39,
    category: "プロンプトエンジニアリング",
    question: "GitHub Copilot Chat でより精度の高い回答を得るためのプロンプト技法はどれですか？",
    options: [
      "できるだけ短く曖昧な質問をする",
      "具体的なコンテキストと明確な要件を含む質問をする",
      "専門用語を避けて一般的な言葉で質問する",
      "一度に多くのトピックを混ぜて質問する"
    ],
    correct: 1,
    explanation: "Copilot Chat では、具体的なコンテキスト（使用言語、フレームワーク、目的など）と明確な要件を含めることで、より的確で有用な回答を得ることができます。"
  },
  {
    id: 40,
    category: "プロンプトエンジニアリング",
    question: "Zero-shot プロンプティングとは何ですか？",
    options: [
      "コードのエラーをゼロにするプロンプト手法",
      "例示なしに直接タスクをモデルに指示する手法",
      "空のプロンプトを使用する手法",
      "射撃ゲームのプロンプト手法"
    ],
    correct: 1,
    explanation: "Zero-shot プロンプティングは、具体的な例を提供せずに直接タスクをモデルに指示する手法です。Few-shot では例を提供してモデルの理解を助けます。"
  },
  {
    id: 41,
    category: "プロンプトエンジニアリング",
    question: "Few-shot プロンプティングが有効な場面はどれですか？",
    options: [
      "簡単な計算タスク",
      "特定の形式や例に従った出力が必要な場合",
      "コードのコンパイルエラーの修正",
      "単純なコード補完"
    ],
    correct: 1,
    explanation: "Few-shot プロンプティングは、特定のパターンや形式に従った出力が必要な場合に有効です。例を提示することでモデルが期待する出力形式を学習します。"
  },

  // ===== GitHub Copilot の高度な機能 =====
  {
    id: 42,
    category: "GitHub Copilot の高度な機能",
    question: "GitHub Copilot の Spark 機能は何ですか？",
    options: [
      "コードの高速実行環境",
      "自然言語の説明からアプリケーションを生成する機能",
      "データベース最適化ツール",
      "CI/CD パイプラインの自動化"
    ],
    correct: 1,
    explanation: "GitHub Copilot Spark は、自然言語での説明からマイクロアプリケーションを生成する機能です。コーディングなしでシンプルなアプリを作成できます。"
  },
  {
    id: 43,
    category: "GitHub Copilot の高度な機能",
    question: "GitHub Copilot Extensions は何を可能にしますか？",
    options: [
      "IDE のフォントを変更する",
      "サードパーティツールや外部サービスを Copilot Chat に統合する",
      "コードの自動デプロイを行う",
      "GitHub のテーマをカスタマイズする"
    ],
    correct: 1,
    explanation: "GitHub Copilot Extensions を使用すると、外部ツールやサービス（Docker、Azure、Sentry など）を Copilot Chat に統合し、それらのサービスをチャットから操作できます。"
  },
  {
    id: 44,
    category: "GitHub Copilot の高度な機能",
    question: "GitHub Copilot Enterprise の「知識ベース」機能は何ですか？",
    options: [
      "インターネット上の技術情報を検索する",
      "組織独自のドキュメントやコードを Copilot Chat の知識として活用する",
      "新人開発者向けのトレーニング資料を生成する",
      "競合他社の製品情報を収集する"
    ],
    correct: 1,
    explanation: "GitHub Copilot Enterprise の知識ベース機能では、組織独自のリポジトリ、Wiki、ドキュメントを Copilot の知識ベースとして設定し、社内固有の質問に回答できるようになります。"
  },
  {
    id: 45,
    category: "GitHub Copilot の高度な機能",
    question: "GitHub Copilot Autofix は何をする機能ですか？",
    options: [
      "コードを自動的にデプロイする",
      "Code Scanning で検出された脆弱性を自動的に修正する",
      "マージ競合を自動解決する",
      "CI/CD のエラーを自動修正する"
    ],
    correct: 1,
    explanation: "GitHub Copilot Autofix は、GitHub Advanced Security の Code Scanning と連携し、検出されたセキュリティ脆弱性に対する修正案を自動生成する機能です。"
  },

  // ===== GitHub Actions との統合 =====
  {
    id: 46,
    category: "GitHub Actions との統合",
    question: "GitHub Copilot は GitHub Actions ワークフローのどのような場面で役立ちますか？",
    options: [
      "ワークフローの自動実行のみ",
      "ワークフローファイルの生成・修正・デバッグの支援",
      "GitHub Actions の課金管理",
      "ランナーの自動プロビジョニング"
    ],
    correct: 1,
    explanation: "GitHub Copilot は GitHub Actions ワークフローの YAML ファイルの生成、修正、エラーのデバッグ支援など、CI/CD パイプラインの構築と管理を支援します。"
  },

  // ===== Copilot の制限と考慮事項 =====
  {
    id: 47,
    category: "Copilot の制限と考慮事項",
    question: "GitHub Copilot が提供する提案を使用する際の主なリスクはどれですか？",
    options: [
      "提案が過剰に多くなりすぎる",
      "セキュリティの脆弱性、著作権の問題、不正確なコードの可能性",
      "IDE がクラッシュする可能性",
      "インターネット接続が切断される可能性"
    ],
    correct: 1,
    explanation: "GitHub Copilot の提案には、セキュリティの脆弱性が含まれる可能性、パブリックコードとの類似による著作権問題、不正確または不完全なコードのリスクがあります。"
  },
  {
    id: 48,
    category: "Copilot の制限と考慮事項",
    question: "GitHub Copilot は次のどの状況で最も効果的に機能しますか？",
    options: [
      "コンテキスト情報がまったくない状態",
      "明確なコメントと適切な変数名が書かれた状態",
      "コードが複雑に難読化された状態",
      "ファイルが空の状態"
    ],
    correct: 1,
    explanation: "GitHub Copilot は、明確なコメント、意味のある変数・関数名、適切なコンテキストが提供された状態で最も効果的に動作します。"
  },
  {
    id: 49,
    category: "Copilot の制限と考慮事項",
    question: "GitHub Copilot が提案するコードが常に本番環境に適切である保証はありますか？",
    options: [
      "はい、Copilot は完璧なコードを生成する",
      "いいえ、Copilot の提案は必ず人間が検証する必要がある",
      "はい、Copilot はすべてのエッジケースを考慮する",
      "はい、Copilot のコードはすべてテスト済みである"
    ],
    correct: 1,
    explanation: "GitHub Copilot の提案は参考情報であり、本番環境への適合性を保証するものではありません。開発者が必ずコードをレビュー・テストし、品質を確認する責任があります。"
  },
  {
    id: 50,
    category: "Copilot の制限と考慮事項",
    question: "GitHub Copilot の \"hallucination\"（ハルシネーション）とは何ですか？",
    options: [
      "コードのビジュアル的な表示エラー",
      "AI が事実と異なる情報や存在しないコードを自信を持って生成すること",
      "IDE での表示グリッチ",
      "ネットワーク接続の問題"
    ],
    correct: 1,
    explanation: "ハルシネーションとは、AI モデルが不正確な情報（存在しない API、誤った構文など）を自信を持って提示することです。これが Copilot の提案を常に検証する重要な理由の一つです。"
  },

  // ===== GitHub Copilot の設定とカスタマイズ =====
  {
    id: 51,
    category: "設定とカスタマイズ",
    question: "GitHub Copilot でパブリックコードに一致する提案を無効化する設定はどこにありますか？",
    options: [
      "IDE のキーボードショートカット設定",
      "GitHub.com のユーザー設定または組織設定",
      ".gitignore ファイル",
      "ターミナルの環境変数"
    ],
    correct: 1,
    explanation: "パブリックコードとの一致をブロックする設定は、GitHub.com のユーザー設定（個人利用）または組織の Copilot ポリシー設定で変更できます。"
  },
  {
    id: 52,
    category: "設定とカスタマイズ",
    question: "GitHub Copilot を特定のファイルタイプで無効化する方法はどれですか？",
    options: [
      ".gitignore にファイルタイプを追加する",
      "IDE の Copilot 設定でファイルタイプを指定して無効化する",
      "GitHub Support に依頼する",
      "ファイルを暗号化する"
    ],
    correct: 1,
    explanation: "VS Code などの IDE の GitHub Copilot 拡張機能の設定で、特定のファイルタイプ（.env ファイルなど）での Copilot を無効化することができます。"
  },
  {
    id: 53,
    category: "設定とカスタマイズ",
    question: "`.github/copilot-instructions.md` ファイルは何に使用しますか？",
    options: [
      "Copilot のライセンスキーを保存する",
      "リポジトリ固有の Copilot Chat のカスタム指示を定義する",
      "Copilot を無効化する",
      "Copilot のバージョンを指定する"
    ],
    correct: 1,
    explanation: "`.github/copilot-instructions.md` ファイルを使用すると、リポジトリ固有のカスタム指示を GitHub Copilot Chat に提供でき、プロジェクトの規約や要件を Copilot に理解させることができます。"
  },

  // ===== GitHub Copilot の活用事例 =====
  {
    id: 54,
    category: "活用事例とユースケース",
    question: "GitHub Copilot がコードのドキュメント作成を支援できる場面はどれですか？",
    options: [
      "ドキュメントの印刷",
      "関数やクラスの JSDoc/docstring の自動生成",
      "外部 API ドキュメントの取得",
      "ドキュメントの翻訳"
    ],
    correct: 1,
    explanation: "GitHub Copilot は、関数やクラスに対して JSDoc コメント、Python の docstring、JavaDoc などのドキュメントコメントを自動生成することができます。"
  },
  {
    id: 55,
    category: "活用事例とユースケース",
    question: "レガシーコードの理解においてGitHub Copilot Chat が役立つ方法はどれですか？",
    options: [
      "レガシーコードを自動的に削除する",
      "古いコードの動作を解説し、モダンな書き方への変換を提案する",
      "レガシーコードを新しい言語に自動翻訳する",
      "レガシーコードのデプロイを自動化する"
    ],
    correct: 1,
    explanation: "GitHub Copilot Chat の /explain コマンドや質問機能を使用して、レガシーコードの動作を理解し、モダンなアプローチへのリファクタリング提案を受けることができます。"
  },
  {
    id: 56,
    category: "活用事例とユースケース",
    question: "GitHub Copilot は新しい言語やフレームワークの学習においてどのように役立ちますか？",
    options: [
      "オンラインコースを自動的に受講させる",
      "コード例の生成と説明を通じて、新しい技術の理解を助ける",
      "プログラミング言語の変換を行う",
      "認定試験を自動的に合格させる"
    ],
    correct: 1,
    explanation: "GitHub Copilot は新しい言語やフレームワークのコード例を生成し、その説明を提供することで、開発者が新技術を効率的に学習するのを支援します。"
  },

  // ===== GitHub Copilot の仕組み =====
  {
    id: 57,
    category: "GitHub Copilot の仕組み",
    question: "GitHub Copilot は何のために「テレメトリ」データを収集しますか？（Copilot Individual の場合）",
    options: [
      "ユーザーの個人情報を収集するため",
      "製品の改善とモデルのトレーニングのため",
      "競合企業への情報提供のため",
      "ユーザーのコードを所有するため"
    ],
    correct: 1,
    explanation: "GitHub Copilot Individual では、オプトインした場合、テレメトリデータ（提案の受け入れ/拒否など）がモデルの改善に使用されます。ユーザーはオプトアウトできます。"
  },
  {
    id: 58,
    category: "GitHub Copilot の仕組み",
    question: "GitHub Copilot が複数の候補を生成できる理由は何ですか？",
    options: [
      "複数の AI モデルを並列実行するため",
      "同じコンテキストに対して確率的に異なる補完を生成できるため",
      "異なるリポジトリからコードをコピーするため",
      "ランダムにコードを選択するため"
    ],
    correct: 1,
    explanation: "大規模言語モデル（LLM）は確率的にトークンを生成するため、同じコンテキストに対して複数の異なる有効な補完候補を生成することができます。"
  },
  {
    id: 59,
    category: "GitHub Copilot の仕組み",
    question: "GitHub Copilot の提案の質を左右する主要な要因はどれですか？",
    options: [
      "インターネット接続速度",
      "コードのコンテキスト、コメントの明確さ、ファイル構造",
      "使用するコンピュータのスペック",
      "GitHub アカウントの種類"
    ],
    correct: 1,
    explanation: "提案の質は、コードのコンテキスト（カーソル周辺のコード）、コメントの明確さ、ファイルの構造、開いている関連ファイルなどに依存します。"
  },
  {
    id: 60,
    category: "GitHub Copilot の仕組み",
    question: "GitHub Copilot はどのようにしてコードの文脈を理解しますか？",
    options: [
      "開発者の過去のコーディング履歴を参照する",
      "大規模言語モデルがコンテキストウィンドウ内のコードパターンを分析する",
      "リアルタイムでインターネットを検索する",
      "コンパイラの出力を分析する"
    ],
    correct: 1,
    explanation: "GitHub Copilot の大規模言語モデルは、コンテキストウィンドウ内のコード（現在のファイルと関連ファイル）のパターンを分析し、次に来るべきコードを統計的に予測します。"
  },

  // ===== 追加問題 =====
  {
    id: 61,
    category: "GitHub Copilot の概要",
    question: "GitHub Copilot は何年に一般公開（GA）されましたか？",
    options: [
      "2020年",
      "2021年",
      "2022年",
      "2023年"
    ],
    correct: 2,
    explanation: "GitHub Copilot は 2021年のプレビュー期間を経て、2022年6月に一般公開されました。"
  },
  {
    id: 62,
    category: "プロンプトエンジニアリング",
    question: "Chain-of-thought（チェーン・オブ・ソート）プロンプティングとは何ですか？",
    options: [
      "複数のプロンプトをチェーンのようにつなげる手法",
      "段階的な推論ステップを含めてモデルに問題を解かせる手法",
      "プロンプトの長さを最大化する手法",
      "複数のユーザーが同時にプロンプトを入力する手法"
    ],
    correct: 1,
    explanation: "Chain-of-thought プロンプティングは、複雑な問題を段階的な推論ステップに分解してモデルに解かせる手法で、複雑なタスクでの精度向上に有効です。"
  },
  {
    id: 63,
    category: "サブスクリプションと管理",
    question: "GitHub Copilot Business でコンテンツ除外を設定できる最小単位はどれですか？",
    options: [
      "個々のファイル",
      "ファイルパスまたはパターン（glob）",
      "コードの行単位",
      "フォルダの第一層のみ"
    ],
    correct: 1,
    explanation: "コンテンツ除外はファイルパスまたは glob パターン（例：`src/secrets/**`）で指定でき、特定のパターンに合致するすべてのファイルを除外することができます。"
  },
  {
    id: 64,
    category: "IDE 統合",
    question: "GitHub Copilot の提案の一部のみを受け入れる（単語単位）キーショートカットはどれですか？（VS Code）",
    options: [
      "Shift + Tab",
      "Ctrl + → (Windows) / Command + → (Mac)",
      "Alt + Enter",
      "Ctrl + Shift + Enter"
    ],
    correct: 1,
    explanation: "VS Code では Ctrl + →（Windows/Linux）または Command + →（Mac）を使用すると、提案を単語単位で受け入れることができます。"
  },
  {
    id: 65,
    category: "GitHub Copilot Chat",
    question: "GitHub Copilot Chat の `/new` コマンドは何をしますか？",
    options: [
      "新しいブランチを作成する",
      "新しいプロジェクトやファイルの雛形を生成する",
      "新しいチャットセッションを開始する",
      "新しい GitHub Issue を作成する"
    ],
    correct: 1,
    explanation: "/new コマンドを使用すると、新しいプロジェクトやワークスペースの雛形（スキャフォールディング）を生成することができます。"
  }
];

// カテゴリ一覧を取得
const categories = ["すべて", ...new Set(questions.map(q => q.category))];
