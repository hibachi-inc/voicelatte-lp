export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Top page
    'top.title': 'Latte — by HIBACHI inc.',
    'top.description': 'Latte series: Mac apps that make your day a little easier.',
    'top.heading': 'Latte',
    'top.tagline': 'Mac apps that make your day a little easier.',
    'top.voicelatte.desc': 'Voice to text. Fully on-device.',
    'top.translatte.desc': 'Select, translate. Fully on-device.',

    // VoiceLatte LP
    'voice.title': 'VoiceLatte — Voice to text, on your Mac',
    'voice.description': 'Voice input anywhere on your Mac. Fully on-device. Open source.',
    'voice.lead.1': 'Voice to text, anywhere on your Mac.',
    'voice.lead.2': 'Your voice and text never leave your Mac.',
    'voice.btn.download': 'Download',
    'voice.btn.opensource': 'Open Source',

    'voice.how': 'How it works',
    'voice.step1.title': 'Press a shortcut key',
    'voice.step1.desc': 'No matter what app you\'re in, just press your key to start recording.',
    'voice.step2.title': 'Speak',
    'voice.step2.desc': 'Japanese or English. AI automatically adds punctuation and removes filler words.',
    'voice.step3.title': 'Text appears',
    'voice.step3.desc': 'Inserted right at your cursor. No copy-paste needed.',

    'voice.point1.title': 'A shortcut key, anywhere',
    'voice.point1.desc': 'Browser, editor, chat — press the key and speak. Text appears at your cursor. Push-to-talk mode lets you record only while holding the key.',
    'voice.point2.title': 'Completely offline',
    'voice.point2.desc': 'Speech recognition and AI refinement both run on-device with Apple Intelligence. No network connection needed. Your recordings never leave your Mac.',

    'voice.pro.label': 'Pro',
    'voice.pro.heading': 'Do more',
    'voice.pro.translate.title': 'Quick multi-language translation',
    'voice.pro.translate.desc': 'Speak in one language, type in another. Real-time translation as you dictate.',
    'voice.pro.custom.title': 'Per-app custom refinement',
    'voice.pro.custom.desc': 'Casual for chat, polite for email. Set refinement rules for each app.',

    'voice.privacy': '100% on-device. No data leaves your Mac.',
    'voice.screenshot.alt': 'VoiceLatte main window',

    // TransLatte LP
    'translate.title': 'TransLatte — Fully Local Translation with Apple Intelligence',
    'translate.description': 'Select text, press ⌃T. Apple Intelligence translates on-device with nuance explanations. macOS 26+, free.',
    'translate.eyebrow': 'From the makers of VoiceLatte',
    'translate.lead.1': 'Select. Translate. Done.',
    'translate.lead.2': 'Select text, press ⌃T. Apple Intelligence translates on your device. Your data never leaves your Mac.',
    'translate.btn.download': 'Download',
    'translate.btn.github': 'Open Source',
    'translate.how': 'How it works',
    'translate.step1.title': 'Select text',
    'translate.step1.desc': 'Browser, email, editor, Slack. Any app works.',
    'translate.step2.title': 'Press ⌃T',
    'translate.step2.desc': 'The global shortcut activates TransLatte.',
    'translate.step3.title': 'Translated',
    'translate.step3.desc': 'Apple Intelligence translates on-device instantly. With nuance explanations.',
    'translate.point1.title': 'No more app switching',
    'translate.point1.desc': 'Browser, email, Slack, documents. Select text in any app and press the shortcut. No need to open a separate translation app.',
    'translate.point2.title': 'Completely on-device',
    'translate.point2.desc': 'Powered by Apple Intelligence Foundation Models. All translations happen on your Mac. No data is sent to any server. Works offline.',
    'translate.nuance.title': 'Beyond literal translation',
    'translate.nuance.desc': 'Not just translation — understand why the translation works that way, explained in your native language.',
    'translate.nuance.original': '空気を読む',
    'translate.nuance.translation': 'Read the room.',
    'translate.nuance.label': 'Nuance explanation',
    'translate.nuance.text': '"空気を読む" literally means "read the air" in Japanese. It refers to the social skill of perceiving unspoken feelings. "Read the room" captures this naturally in English.',
    'translate.privacy': '100% on-device. No data leaves your Mac.',

    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.copy': '© 2026 HIBACHI inc.',

    // Privacy page
    'privacy.title': 'Privacy Policy — VoiceLatte',
    'privacy.heading': 'Privacy Policy',
    'privacy.updated': 'Last updated: June 5, 2026',
    'privacy.overview.title': 'Overview',
    'privacy.overview.text': 'VoiceLatte processes all speech recognition and text refinement entirely on your Mac. No audio or text data is ever sent over the internet.',
    'privacy.data.title': 'Data Collection',
    'privacy.data.text': 'VoiceLatte does not collect any personal data.',
    'privacy.label.audio': 'Audio',
    'privacy.label.text': 'Text',
    'privacy.label.ai': 'AI',
    'privacy.label.analytics': 'Analytics',
    'privacy.data.audio': 'Microphone input is processed exclusively by the on-device speech recognition engine and is never stored or transmitted',
    'privacy.data.text_item': 'Transcription results are stored locally in the app\'s history feature. No data is sent to external servers',
    'privacy.data.ai': 'Text refinement via Apple Intelligence runs entirely on-device',
    'privacy.data.analytics': 'No usage tracking or analytics of any kind',
    'privacy.iap.title': 'In-App Purchases',
    'privacy.iap.text': 'Pro features are unlocked via In-App Purchase. Payment processing is handled entirely by Apple\'s infrastructure. VoiceLatte never accesses your payment information.',
    'privacy.storage.title': 'Data Storage',
    'privacy.storage.text': 'Voice input history is stored only on your Mac\'s local storage. You can delete it at any time from the app\'s settings.',
    'privacy.sharing.title': 'Third-Party Sharing',
    'privacy.sharing.text': 'VoiceLatte does not share any data with third parties.',

    // App mockup
    'mock.sidebar.history': 'Voice History',
    'mock.sidebar.preferences': 'Preferences',
    'mock.sidebar.hotkey': 'Hotkey',
    'mock.sidebar.translate': 'Quick Translate',
    'mock.sidebar.refine': 'Custom Refine',
    'mock.sidebar.about': 'About',
    'mock.mic': 'Tap to start voice input',
    'mock.hud.listening': 'Listening...',
    'mock.hud.refining': 'Refining...',
    'mock.hud.done': 'Copied — ⌘V to paste',
    'mock.hud.transcript': 'Let\'s schedule the meeting for',
    'mock.hud.transcript.full': 'Let\'s schedule the meeting for next Tuesday.',
    'mock.time1': '3 min ago',
    'mock.time2': '15 min ago',
    'mock.time3': '1 hr ago',
    'mock.text1.refined': 'Let\'s schedule the meeting for next Tuesday.',
    'mock.text1.original': 'let\'s schedule the meeting for um next tuesday',
    'mock.text2.refined': 'Sounds good, I\'ll check and get back to you!',
    'mock.text2.original': 'sounds good i\'ll check and get back to you',
    'mock.text3.refined': 'Thank you for your prompt response. I would like to confirm the details.',
    'mock.text3.original': 'thank you for your prompt response i would like to confirm the details',
  },
  ja: {
    // Top page
    'top.title': 'Latte — by HIBACHI inc.',
    'top.description': 'Latteシリーズ：日常をちょっとラクにするMacアプリ',
    'top.heading': 'Latte',
    'top.tagline': '日常をちょっとラクにするMacアプリ',
    'top.voicelatte.desc': '声でテキスト入力。完全オンデバイス。',
    'top.translatte.desc': '選んで、翻訳。完全オンデバイス。',

    // VoiceLatte LP
    'voice.title': 'VoiceLatte — Mac向けローカルAI音声入力',
    'voice.description': 'Macのどこからでも声でテキスト入力。完全オンデバイス処理。オープンソース。',
    'voice.lead.1': 'Macのどこからでも、声でテキスト入力。',
    'voice.lead.2': '音声もテキストも、Macの外に出ません。',
    'voice.btn.download': 'ダウンロード',
    'voice.btn.opensource': 'オープンソース',

    'voice.how': '使い方',
    'voice.step1.title': 'ショートカットキーを押す',
    'voice.step1.desc': 'どのアプリを使っていても、設定したキーを押すだけで録音開始。',
    'voice.step2.title': '話す',
    'voice.step2.desc': '日本語でも英語でも。AI が句読点やフィラーを自動で整えます。',
    'voice.step3.title': 'テキストが入力される',
    'voice.step3.desc': 'カーソル位置にそのまま挿入。コピペ不要。',

    'voice.point1.title': 'ショートカットキーで、どこでも',
    'voice.point1.desc': 'ブラウザでもエディタでもチャットでも。キーを押して話すだけで、カーソル位置にテキストが入力されます。押している間だけ録音する長押しモードも。',
    'voice.point2.title': '完全にオフライン',
    'voice.point2.desc': '音声認識もAI整形もApple Intelligenceでオンデバイス処理。ネットワーク接続は不要です。録音データがMacの外に出ることは一切ありません。',

    'voice.pro.label': 'Pro',
    'voice.pro.heading': 'もっと便利に',
    'voice.pro.translate.title': 'クイック多言語翻訳',
    'voice.pro.translate.desc': '話した言葉をリアルタイムで別の言語に翻訳して入力。',
    'voice.pro.custom.title': 'アプリ別カスタム整形',
    'voice.pro.custom.desc': 'チャットではカジュアルに、メールでは丁寧に。アプリごとに整形ルールを設定。',

    'voice.privacy': '100% on-device. No data leaves your Mac.',
    'voice.screenshot.alt': 'VoiceLatte のメインウィンドウ',

    // TransLatte LP
    'translate.title': 'TransLatte — Apple Intelligence で完全ローカル翻訳',
    'translate.description': 'テキストを選んで ⌃T。Apple Intelligenceがデバイス上で翻訳＋ニュアンス解説。macOS 26+、無料。',
    'translate.eyebrow': 'From the makers of VoiceLatte',
    'translate.lead.1': '選んで、翻訳。それだけ。',
    'translate.lead.2': 'テキストを選択して ⌃T。Apple Intelligence がデバイス上で翻訳する。データは一切外に出ない。',
    'translate.btn.download': 'ダウンロード',
    'translate.btn.github': 'オープンソース',
    'translate.how': '使い方',
    'translate.step1.title': 'テキストを選択',
    'translate.step1.desc': 'ブラウザ、メール、エディタ、Slack。どのアプリでもOK。',
    'translate.step2.title': '⌃T を押す',
    'translate.step2.desc': 'グローバルショートカットでTransLatteが起動。',
    'translate.step3.title': '翻訳完了',
    'translate.step3.desc': 'Apple Intelligenceがデバイス上で即座に翻訳。ニュアンス解説付き。',
    'translate.point1.title': 'アプリを切り替えない',
    'translate.point1.desc': 'ブラウザ、メール、Slack、ドキュメント。どのアプリでもテキストを選んでショートカットを押すだけ。翻訳アプリを開く必要はない。',
    'translate.point2.title': '完全にオンデバイス',
    'translate.point2.desc': 'Apple Intelligence Foundation Modelsで処理。すべての翻訳はMac上で完結。サーバーにデータは送信されない。オフラインでも動作。',
    'translate.nuance.title': '「なぜその訳なのか」まで',
    'translate.nuance.desc': '直訳だけでなく、文脈・ニュアンス・語彙の選択理由をネイティブ言語で解説。',
    'translate.nuance.original': 'It\'s not rocket science.',
    'translate.nuance.translation': 'そんなに難しいことじゃない。',
    'translate.nuance.label': 'ニュアンス解説',
    'translate.nuance.text': '「rocket science」は英語の慣用表現で、「非常に複雑・難解なこと」を意味します。日常会話では「そんなに難しくない」と意訳するのが自然です。',
    'translate.privacy': '100% on-device. No data leaves your Mac.',

    // Footer
    'footer.privacy': 'プライバシーポリシー',
    'footer.copy': '© 2026 HIBACHI inc.',

    // Privacy page
    'privacy.title': 'プライバシーポリシー — VoiceLatte',
    'privacy.heading': 'プライバシーポリシー',
    'privacy.updated': '最終更新: 2026年6月5日',
    'privacy.overview.title': '概要',
    'privacy.overview.text': 'VoiceLatteは、すべての音声認識・テキスト処理をお使いのMac上で完結するアプリです。音声データやテキストデータがインターネットに送信されることはありません。',
    'privacy.data.title': '収集するデータ',
    'privacy.data.text': 'VoiceLatteは個人データを収集しません。',
    'privacy.label.audio': '音声データ',
    'privacy.label.text': 'テキストデータ',
    'privacy.label.ai': 'AI整形',
    'privacy.label.analytics': 'アナリティクス',
    'privacy.data.audio': 'マイクからの音声はMac上のオンデバイス音声認識エンジンのみで処理され、保存・送信されません',
    'privacy.data.text_item': '音声認識の結果はアプリ内の履歴機能にローカル保存されます。外部サーバーへの送信はありません',
    'privacy.data.ai': 'Apple Intelligenceによるテキスト整形はすべてデバイス上で実行されます',
    'privacy.data.analytics': '使用状況のトラッキングやアナリティクスは一切行いません',
    'privacy.iap.title': 'App内課金',
    'privacy.iap.text': 'Pro機能のアンロックにApp内課金を利用します。課金の処理はAppleのインフラストラクチャを通じて行われ、VoiceLatteが決済情報にアクセスすることはありません。',
    'privacy.storage.title': 'データの保存',
    'privacy.storage.text': '音声入力の履歴はお使いのMacのローカルストレージにのみ保存されます。アプリの設定画面からいつでも削除できます。',
    'privacy.sharing.title': '第三者へのデータ提供',
    'privacy.sharing.text': 'VoiceLatteはいかなるデータも第三者に提供しません。',

    // App mockup
    'mock.sidebar.history': '音声入力履歴',
    'mock.sidebar.preferences': '基本設定',
    'mock.sidebar.hotkey': 'ショートカット',
    'mock.sidebar.translate': 'クイック翻訳',
    'mock.sidebar.refine': 'カスタム整形',
    'mock.sidebar.about': 'アプリについて',
    'mock.mic': 'タップして音声入力を開始',
    'mock.hud.listening': '聞き取り中...',
    'mock.hud.refining': '整形中...',
    'mock.hud.done': 'コピー済み — ⌘V でペースト',
    'mock.hud.transcript': '来週の火曜日にミーティングを',
    'mock.hud.transcript.full': '来週の火曜日にミーティングを入れましょう。',
    'mock.time1': '3分前',
    'mock.time2': '15分前',
    'mock.time3': '1時間前',
    'mock.text1.refined': '来週の火曜日にミーティングを入れましょう。',
    'mock.text1.original': '来週の火曜日にえーとミーティングを入れましょう',
    'mock.text2.refined': 'いいね、確認して折り返すよ！',
    'mock.text2.original': 'いいね確認して折り返すよ',
    'mock.text3.refined': 'ご返信ありがとうございます。詳細を確認させていただきたく存じます。',
    'mock.text3.original': 'ご返信ありがとうございます詳細を確認させていただきたく存じます',
  },
} as const;

export function t(lang: Lang, key: keyof typeof translations['en']): string {
  return translations[lang][key] ?? translations['en'][key] ?? key;
}

export function localePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function alternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'ja' : 'en';
}
