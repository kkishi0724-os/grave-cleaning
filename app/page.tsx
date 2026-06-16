import Link from "next/link";
import {
  IllustBooking,
  IllustCalendar,
  IllustCleaning,
  IllustPhoto,
  IllustPayment,
} from "./components/StepIllustrations";

const plans = [
  {
    name: "ライトプラン",
    price: "8,000",
    tag: null,
    tagColor: "",
    summary: "毎年定期的にお手入れされていて、そこまでひどく汚れていないお墓に。",
    features: [
      "敷地内のゴミ拾い",
      "目立つ雑草の草むしり（手で抜ける範囲）",
      "墓石の簡易水拭き・お掃除",
      "お花・お線香のお供えとお参り",
      "作業前後の写真報告（LINEまたはメール）",
    ],
    highlight: false,
  },
  {
    name: "スタンダードプラン",
    price: "12,000",
    tag: "人気No.1",
    tagColor: "bg-amber-400 text-stone-900",
    summary: "半年〜1年以上お墓参りに行けておらず、雑草や汚れが気になっている方に。",
    features: [
      "しつこい雑草の本格的な草むしり（根元から徹底的に）",
      "墓石の手洗い・タワシ洗浄・高圧洗浄機（苔や水垢の除去）",
      "花立て・香炉など小物の取り外し洗浄",
      "お花・お線香のお供えとお参り",
      "作業前後の写真報告（LINEまたはメール）",
    ],
    highlight: true,
  },
  {
    name: "プレミアムプラン",
    price: "20,000",
    tag: "目玉機能あり",
    tagColor: "bg-sky-500 text-white",
    summary: "関東や海外など遠方に住んでいて帰省が難しい方、お墓の荒れ具合が心配な方に。",
    features: [
      "【目玉】LINEビデオ通話でリアルタイムお参り代行",
      "除草剤の散布（または防草砂の簡易補修）",
      "墓石の拭き上げ仕上げ（水滴を残さないプロ仕様）",
      "お花・お線香のお供えとお参り",
      "作業前後の写真報告（LINEまたはメール）",
    ],
    highlight: false,
  },
];

const steps = [
  {
    Illust: IllustBooking,
    title: "ご予約・ご相談",
    desc: "LINEまたはお問い合わせフォームからご連絡ください。墓所の場所やご希望をお聞きします。",
  },
  {
    Illust: IllustCalendar,
    title: "日程確定",
    desc: "ご希望の日程をもとにスタッフが現地へ。1〜2日以内にご連絡いたします。",
  },
  {
    Illust: IllustCleaning,
    title: "清掃・お参り実施",
    desc: "ご選択のプランに沿って丁寧に作業します。プレミアムはビデオ通話でリアルタイム参加も可能です。",
  },
  {
    Illust: IllustPhoto,
    title: "写真報告",
    desc: "作業前後の写真をLINEまたはメールでお送りします。仕上がりをしっかりご確認いただけます。",
  },
  {
    Illust: IllustPayment,
    title: "お支払い",
    desc: "作業完了後に銀行振込にてお支払いください。お振込先は作業完了のご連絡時にお伝えします。",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-stone-700">お墓清掃代行</span>
            <span className="ml-2 text-xs text-stone-400 hidden sm:inline">丁寧なお墓参り代行サービス</span>
          </div>
          <div className="flex items-center gap-3">
            {/* SNSアイコン（準備中） */}
            <button
              title="LINE公式（準備中）"
              className="w-8 h-8 rounded-full bg-[#06C755] text-white flex items-center justify-center text-sm opacity-50 cursor-not-allowed"
            >
              L
            </button>
            <button
              title="Instagram（準備中）"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm opacity-50 cursor-not-allowed"
            >
              IG
            </button>
            <Link
              href="/booking"
              className="bg-stone-700 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              予約する
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-stone-50 py-20 px-4 text-center">
          <p className="text-sm text-stone-400 mb-3 tracking-widest uppercase">Grave Cleaning Service</p>
          <h1 className="text-4xl font-bold text-stone-800 mb-4 leading-snug">
            大切なご先祖様のお墓を、<br />心を込めて清掃します
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto mb-8 text-lg leading-relaxed">
            遠方にお住まいの方・お体の不自由な方に代わり、<br className="hidden sm:block" />
            丁寧にお墓のお掃除・お参りを代行いたします。
          </p>
          <Link
            href="/booking"
            className="inline-block bg-stone-700 text-white px-10 py-4 rounded-full text-lg hover:bg-stone-800 transition-colors"
          >
            無料で相談・予約する
          </Link>
          <p className="text-sm text-gray-400 mt-4">作業前後に写真レポートをお届けします</p>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-10">選ばれる理由</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📱",
                  title: "LINEで完結",
                  desc: "予約から写真報告まで、すべてLINEで完結。電話不要でスムーズです。",
                },
                {
                  icon: "📹",
                  title: "リアルタイム参加",
                  desc: "プレミアムプランではLINEビデオ通話で、画面越しに一緒にお参りできます。",
                },
                {
                  icon: "💰",
                  title: "リーズナブルな価格",
                  desc: "8,000円〜。学生スタッフが丁寧に対応することでコストを抑えています。",
                },
              ].map((f) => (
                <div key={f.title} className="text-center p-6 rounded-2xl bg-stone-50">
                  <div className="text-4xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-stone-50" id="plans">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">料金プラン</h2>
            <p className="text-center text-gray-500 mb-10 text-sm">すべて税込み・別途交通費実費</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 flex flex-col gap-4 ${
                    plan.highlight
                      ? "bg-stone-700 text-white shadow-xl ring-2 ring-stone-500"
                      : "bg-white text-stone-800 border border-stone-200"
                  }`}
                >
                  <div>
                    {plan.tag && (
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${plan.tagColor} inline-block mb-2`}>
                        {plan.tag}
                      </span>
                    )}
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <p className="text-4xl font-bold mt-1">
                      ¥{plan.price}
                      <span className={`text-sm font-normal ml-1 ${plan.highlight ? "text-stone-300" : "text-gray-400"}`}>
                        /回
                      </span>
                    </p>
                  </div>

                  <p className={`text-xs leading-relaxed border-t pt-3 ${plan.highlight ? "text-stone-300 border-stone-600" : "text-gray-500 border-stone-100"}`}>
                    💡 {plan.summary}
                  </p>

                  <ul className="space-y-2 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`text-sm flex items-start gap-2 ${plan.highlight ? "text-stone-200" : "text-gray-600"}`}
                      >
                        <span className="mt-0.5 shrink-0">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/booking"
                    className={`text-center py-2.5 rounded-full text-sm font-bold transition-colors ${
                      plan.highlight
                        ? "bg-white text-stone-700 hover:bg-stone-100"
                        : "bg-stone-700 text-white hover:bg-stone-800"
                    }`}
                  >
                    このプランで予約
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-white" id="flow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">作業の流れ</h2>
            <p className="text-center text-gray-500 text-sm mb-10">ご予約からお支払いまで、すべてスムーズに対応します</p>
            <div className="relative">
              {/* 縦線 */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-stone-200 hidden sm:block" />
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex items-start gap-4 relative">
                    {/* イラスト */}
                    <div className="w-20 h-20 shrink-0 relative z-10 bg-white rounded-2xl border border-stone-200 p-1 shadow-sm">
                      <s.Illust />
                    </div>
                    <div className="flex-1 bg-stone-50 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-stone-400">STEP {i + 1}</span>
                        <h3 className="font-bold text-stone-800">{s.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-stone-700 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">まずはお気軽にご相談ください</h2>
          <p className="text-stone-300 mb-8 text-sm leading-relaxed">
            対応エリア・日程など、お気軽にお問い合わせください。<br />
            お支払いは銀行振込のみ対応しています。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-block bg-white text-stone-700 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors"
            >
              予約フォームへ
            </Link>
            <button
              className="inline-flex items-center gap-2 bg-[#06C755] text-white px-10 py-4 rounded-full font-bold opacity-50 cursor-not-allowed"
              title="LINE公式（準備中）"
            >
              <span>LINE で相談する</span>
              <span className="text-xs">（準備中）</span>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-sm py-8 px-4 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <button title="LINE公式（準備中）" className="opacity-40 cursor-not-allowed text-xs">LINE</button>
          <button title="Instagram（準備中）" className="opacity-40 cursor-not-allowed text-xs">Instagram</button>
        </div>
        <p>© 2026 お墓清掃代行サービス. All rights reserved.</p>
      </footer>
    </div>
  );
}
