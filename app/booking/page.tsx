"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PLANS = ["ライトプラン（¥6,600）", "スタンダードプラン（¥11,000）", "プレミアムプラン（¥19,800）"];

export default function BookingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: API連携（現在はダミー送信）
    await new Promise((r) => setTimeout(r, 800));
    router.push("/booking/thanks");
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="text-stone-500 hover:text-stone-700 text-sm">
            ← トップへ戻る
          </Link>
        </div>
      </header>

      <main className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-stone-800 mb-2">ご予約フォーム</h1>
        <p className="text-gray-500 text-sm mb-8">
          内容確認後、1営業日以内にご連絡いたします。
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
          {/* お名前 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="山田 太郎"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* 電話番号 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              電話番号
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="090-0000-0000"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* 霊園・墓地名 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              霊園・墓地名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="cemetery"
              required
              placeholder="〇〇霊園"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* 住所 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              住所（霊園の所在地） <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              required
              placeholder="東京都〇〇区〇〇 1-2-3"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* 希望日 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              ご希望日 <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          {/* プラン */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              プラン <span className="text-red-500">*</span>
            </label>
            <select
              name="plan"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white"
            >
              <option value="">選択してください</option>
              {PLANS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* 備考 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              ご要望・備考
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="墓所の区画番号、特別なご要望など"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-stone-700 text-white py-3 rounded-full font-bold hover:bg-stone-800 transition-colors disabled:opacity-60"
          >
            {loading ? "送信中..." : "予約を申し込む"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            送信後、1営業日以内に確認メールをお送りします
          </p>
        </form>
      </main>
    </div>
  );
}
