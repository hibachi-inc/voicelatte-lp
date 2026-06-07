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
  },
  ja: {
    // Top page
    'top.title': 'Latte — by HIBACHI inc.',
    'top.description': 'Latteシリーズ：日常をちょっとラクにするMacアプリ',
    'top.heading': 'Latte',
    'top.tagline': '日常をちょっとラクにするMacアプリ',
    'top.voicelatte.desc': '声でテキスト入力。完全オンデバイス。',

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
