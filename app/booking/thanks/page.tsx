import Link from "next/link";

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white rounded-2xl p-12 shadow-sm max-w-md w-full">
        <div className="text-5xl mb-4">🙏</div>
        <h1 className="text-2xl font-bold text-stone-800 mb-3">ご予約ありがとうございます</h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          お申し込みを受け付けました。<br />
          1営業日以内に担当スタッフよりご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <Link
          href="/"
          className="inline-block bg-stone-700 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-stone-800 transition-colors"
        >
          トップページへ戻る
        </Link>
      </div>
    </div>
  );
}
