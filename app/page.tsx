import Link from "next/link";

const plans = [
  {
    name: "ライトプラン",
    price: "6,600",
    features: ["墓石の拭き掃除", "周辺の清掃", "完了報告写真"],
    highlight: false,
  },
  {
    name: "スタンダードプラン",
    price: "11,000",
    features: ["墓石の拭き掃除", "周辺の清掃", "草むしり", "花・線香のお供え", "完了報告写真"],
    highlight: true,
  },
  {
    name: "プレミアムプラン",
    price: "19,800",
    features: [
      "墓石の拭き掃除",
      "周辺の清掃",
      "草むしり",
      "花・線香のお供え",
      "お酒・お水のお供え",
      "完了報告写真（複数枚）",
      "現地動画レポート",
    ],
    highlight: false,
  },
];

const steps = [
  { num: "1", title: "ご予約", desc: "フォームからご希望の日程・プランをお申し込みください。" },
  { num: "2", title: "確認連絡", desc: "スタッフよりご確認のご連絡を差し上げます（1営業日以内）。" },
  { num: "3", title: "清掃実施", desc: "ご指定の日時に丁寧にお墓を清掃・お参りいたします。" },
  { num: "4", title: "報告", desc: "清掃後、写真付きの完了レポートをお送りします。" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-stone-700">お墓清掃代行</span>
          <Link
            href="/booking"
            className="bg-stone-700 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-800 transition-colors"
          >
            予約する
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-stone-50 py-20 px-4 text-center">
          <p className="text-sm text-stone-500 mb-3 tracking-widest uppercase">Grave Cleaning Service</p>
          <h1 className="text-4xl font-bold text-stone-800 mb-4 leading-snug">
            大切なご先祖様のお墓を、<br />心を込めて清掃します
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto mb-8 text-lg">
            遠方にお住まいの方・お体の不自由な方に代わり、丁寧にお墓のお掃除・お参りを代行いたします。
          </p>
          <Link
            href="/booking"
            className="inline-block bg-stone-700 text-white px-10 py-4 rounded-full text-lg hover:bg-stone-800 transition-colors"
          >
            無料で予約する
          </Link>
          <p className="text-sm text-gray-400 mt-4">完了後に写真レポートをお届けします</p>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-10">選ばれる3つの理由</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "📸", title: "写真でご報告", desc: "清掃完了後、現地の写真をメールでお送りします。遠くにいても安心です。" },
                { icon: "🤝", title: "丁寧なスタッフ", desc: "経験豊富なスタッフが心を込めてお参り・清掃を行います。" },
                { icon: "📅", title: "定期プランあり", desc: "月1回・季節ごとなど、定期清掃プランでご先祖様のお墓をいつも清潔に。" },
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
        <section className="py-16 px-4 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">料金プラン</h2>
            <p className="text-center text-gray-500 mb-10 text-sm">すべて税込み・出張費別途</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl p-6 flex flex-col ${
                    plan.highlight
                      ? "bg-stone-700 text-white shadow-lg"
                      : "bg-white text-stone-800 border border-stone-200"
                  }`}
                >
                  {plan.highlight && (
                    <span className="text-xs bg-amber-400 text-stone-900 font-bold px-2 py-1 rounded-full self-start mb-3">
                      人気No.1
                    </span>
                  )}
                  <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-4">
                    ¥{plan.price}
                    <span className={`text-sm font-normal ml-1 ${plan.highlight ? "text-stone-300" : "text-gray-400"}`}>
                      /回
                    </span>
                  </p>
                  <ul className="flex-1 space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className={`text-sm flex items-start gap-2 ${plan.highlight ? "text-stone-200" : "text-gray-600"}`}>
                        <span className="mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/booking"
                    className={`text-center py-2 rounded-full text-sm font-bold transition-colors ${
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

        {/* Flow */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-10">ご利用の流れ</h2>
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-700 text-white flex items-center justify-center font-bold shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">{s.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-stone-700 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">まずはお気軽にご相談ください</h2>
          <p className="text-stone-300 mb-8">ご予約・お見積もりは無料です。対応エリアについてもお気軽にお問い合わせください。</p>
          <Link
            href="/booking"
            className="inline-block bg-white text-stone-700 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors"
          >
            予約フォームへ
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-sm py-8 px-4 text-center">
        <p>© 2026 お墓清掃代行サービス. All rights reserved.</p>
      </footer>
    </div>
  );
}
