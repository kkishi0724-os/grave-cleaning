import Link from "next/link";
import Image from "next/image";

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
    price: "50,000",
    tag: "日程確約プラン",
    tagColor: "bg-sky-500 text-white",
    summary: "ご要望があれば柔軟に対応いたします。特別なご希望はお気軽にお聞かせください。",
    features: [
      "ご希望日の日程確約（日付・曜日を指定できます）",
      "【目玉】LINEビデオ通話でリアルタイムお参り代行",
      "墓石の拭き上げ仕上げ（水滴を残さないプロ仕様）",
      "お花・お線香のお供えとお参り",
      "作業前後の写真報告（LINEまたはメール）",
    ],
    highlight: false,
  },
];

const steps = [
  {
    img: "/step1-booking.jpg",
    title: "ご予約・ご相談",
    desc: "LINE・フォーム・お電話、どこからでもご連絡ください。墓所の場所やご希望をお聞きします。",
  },
  {
    img: "/step2-schedule.jpg",
    title: "日程確定",
    desc: "ご希望の日程をもとにスタッフが現地へ。1〜2日以内にご連絡いたします。",
  },
  {
    img: "/hero.jpg",
    title: "清掃・お参り実施",
    desc: "ご選択のプランに沿って丁寧に作業します。プレミアムはビデオ通話でリアルタイム参加も可能です。",
  },
  {
    img: "/step3-report.jpg",
    title: "写真報告",
    desc: "作業前後の写真をLINEまたはメールでお送りします。仕上がりをしっかりご確認いただけます。",
  },
  {
    img: "/step4-payment.jpg",
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
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="関西お墓サポート" width={40} height={40} className="w-10 h-10 shrink-0" />
            <div className="leading-tight">
              <p className="text-[9px] text-emerald-600 font-semibold tracking-[0.12em]">KANSAI OHAKA SUPPORT</p>
              <p className="text-base font-bold text-stone-800">関西お墓サポート</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* X (Twitter) */}
            <a
              href="https://x.com/kansaiohaka2026"
              target="_blank"
              rel="noopener noreferrer"
              title="X (Twitter)"
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/kansaiohakasupport2026"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScJnKFIZZh3s7qELYY_cRaE-T2j5DingdvaemjDlizKDfVG9w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-700 text-white text-sm px-5 py-2 rounded-full hover:bg-stone-800 transition-colors"
            >
              予約する
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-stone-50 py-10 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-5">
                <span className="text-stone-400 text-xs">📍</span>
                {["大阪府", "京都府", "兵庫県"].map((pref) => (
                  <span key={pref} className="bg-stone-200 text-stone-700 text-xs font-bold px-3 py-1 rounded-full">
                    {pref}
                  </span>
                ))}
                <span className="text-stone-400 text-xs">対応</span>
              </div>
              <p className="text-sm text-stone-400 mb-2 tracking-widest uppercase">Student Grave Cleaning Service</p>
              <h1 className="text-4xl font-bold text-stone-800 mb-4 leading-snug">
                学生が、一生懸命<br />きれいにします。
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                遠方にお住まいの方・お体の不自由な方に代わり、<br className="hidden md:block" />
                地元の学生が体を動かして丁寧にお墓をきれいにします。
              </p>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScJnKFIZZh3s7qELYY_cRaE-T2j5DingdvaemjDlizKDfVG9w/viewform"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-block bg-stone-700 text-white px-10 py-4 rounded-full text-lg hover:bg-stone-800 transition-colors"
              >
                無料で相談・予約する
              </Link>
              <p className="text-sm text-gray-400 mt-4">作業前後に写真レポートをお届けします</p>
            </div>
            {/* ヒーロー写真 */}
            <div className="shrink-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/hero.jpg"
                  alt="お墓清掃の様子"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs text-stone-400 mt-2">※画像はイメージです</p>
            </div>
          </div>
        </section>

        {/* About us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs font-bold text-stone-400 tracking-widest uppercase mb-2">About us</p>
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-6">関西の大学生で作ったサービスです</h2>
            <p className="text-gray-600 text-center leading-relaxed mb-10">
              「アルバイト感覚ではなく、本当に喜んでもらいたい」という気持ちで取り組んでいます。<br />
              若さと体力を活かして、草むしりも墓石磨きも最後まで手を抜きません。<br />
              お客様のご先祖様のお墓を、自分の家のお墓と同じように大切に扱います。
            </p>
            {/* 3つの約束 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  num: "01",
                  title: "手を抜きません",
                  desc: "時間をかけてでも、納得できる仕上がりになるまでやり切ります。",
                },
                {
                  num: "02",
                  title: "やり直し無料",
                  desc: "仕上がりにご不満があれば、無料で再清掃いたします。",
                },
                {
                  num: "03",
                  title: "写真で証明",
                  desc: "作業前後の写真をお送りして、仕上がりをしっかり確認していただきます。",
                },
              ].map((p) => (
                <div key={p.num} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                  <p className="text-3xl font-bold text-stone-200 mb-2">{p.num}</p>
                  <h3 className="font-bold text-stone-800 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-10">学生ならではの強み</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💪",
                  title: "体力で徹底清掃",
                  desc: "重い墓石の拭き上げも、しつこい雑草の根元抜きも、若い体力で最後までやり切ります。",
                },
                {
                  icon: "💰",
                  title: "リーズナブルな価格",
                  desc: "業者に頼むより手頃な8,000円〜。学生が直接対応するからこそ実現できる価格です。",
                },
                {
                  icon: "📱",
                  title: "LINEで気軽に相談",
                  desc: "予約・報告・質問まですべてLINEで完結。堅苦しくなく気軽にやりとりできます。",
                },
              ].map((f) => (
                <div key={f.title} className="text-center p-6 rounded-2xl bg-white border border-stone-100">
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
            <p className="text-center text-gray-500 mb-10 text-sm">すべて税込み・交通費込み</p>
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
                    href="https://docs.google.com/forms/d/e/1FAIpQLScJnKFIZZh3s7qELYY_cRaE-T2j5DingdvaemjDlizKDfVG9w/viewform"
              target="_blank"
              rel="noopener noreferrer"
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
            <p className="text-center text-gray-500 text-sm mb-10">ご予約からお支払いまで丁寧に対応します</p>
            <div className="relative">
              {/* 縦線 */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-stone-200 hidden sm:block" />
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex items-start gap-4 relative">
                    <div className="w-24 h-20 shrink-0 relative z-10 rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                      <Image src={s.img} alt={s.title} width={96} height={80} className="w-full h-full object-cover" />
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

        {/* Service Area */}
        <section className="py-16 px-4 bg-stone-50" id="area">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-xs font-bold text-stone-400 tracking-widest uppercase mb-2">Service Area</p>
            <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">対応エリア</h2>
            <p className="text-center text-gray-500 text-sm mb-8">
              ※距離や場所によって価格が変わる場合があります。まずはご相談ください。
            </p>
            <div className="space-y-4">
              {[
                {
                  pref: "大阪府",
                  color: "bg-amber-50 border-amber-200",
                  headColor: "text-amber-700",
                  cities: ["大阪市", "吹田市", "茨木市", "高槻市", "摂津市", "豊中市", "箕面市", "池田市", "守口市", "門真市", "寝屋川市", "枚方市", "交野市", "四條畷市", "大東市", "東大阪市", "八尾市", "柏原市", "藤井寺市", "羽曳野市", "松原市", "堺市", "高石市"],
                  uncertain: ["泉大津市", "和泉市", "岸和田市", "貝塚市"],
                },
                {
                  pref: "京都府",
                  color: "bg-red-50 border-red-200",
                  headColor: "text-red-700",
                  cities: ["京都市", "向日市", "長岡京市", "八幡市", "京田辺市", "城陽市", "宇治市"],
                  uncertain: [],
                },
                {
                  pref: "兵庫県",
                  color: "bg-blue-50 border-blue-200",
                  headColor: "text-blue-700",
                  cities: ["尼崎市", "伊丹市", "川西市", "宝塚市", "西宮市", "芦屋市", "神戸市", "三田市", "明石市"],
                  uncertain: [],
                },
              ].map((area) => (
                <div key={area.pref} className={`rounded-2xl border p-5 ${area.color}`}>
                  <h3 className={`font-bold text-lg mb-3 ${area.headColor}`}>{area.pref}</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.cities.map((city) => (
                      <span key={city} className="bg-white text-stone-700 text-sm px-3 py-1 rounded-full border border-stone-200">
                        {city}
                      </span>
                    ))}
                    {area.uncertain.map((city) => (
                      <span key={city} className="bg-white text-stone-400 text-sm px-3 py-1 rounded-full border border-dashed border-stone-300">
                        {city}
                      </span>
                    ))}
                  </div>
                  {area.uncertain.length > 0 && (
                    <p className="text-xs text-stone-400 mt-3">
                      ※ 点線枠のエリアはご相談ください（対応できない場合があります）
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-stone-700 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">まずはお気軽にご相談ください</h2>
          <p className="text-stone-300 mb-8 text-sm leading-relaxed">
            LINE・フォーム・お電話、何でもお気軽に。
            <br />
            エリア・日程・料金など、お気軽にどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScJnKFIZZh3s7qELYY_cRaE-T2j5DingdvaemjDlizKDfVG9w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-stone-700 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-colors"
            >
              フォームで相談・予約
            </Link>
            <a
              href="https://lin.ee/zRLKoe1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#06C755] text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span>LINE で相談する</span>
            </a>
          </div>
          <p className="text-stone-300 text-sm mt-6">
            お電話でのご相談も受け付けています<br className="sm:hidden" />
            <a href="tel:080-8182-8124" className="font-bold text-white hover:underline">080-8182-8124</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 text-sm py-8 px-4 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://x.com/kansaiohaka2026" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X (Twitter)
          </a>
          <a href="https://www.instagram.com/kansaiohakasupport2026" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
        </div>
        <p>© 2026 関西お墓サポート. All rights reserved.</p>
      </footer>
    </div>
  );
}
