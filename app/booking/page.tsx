"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PLANS = [
  "ライトプラン（¥8,000）",
  "スタンダードプラン（¥12,000）",
  "プレミアムプラン（¥50,000）",
];

export default function BookingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const isPremium = selectedPlan === "プレミアムプラン（¥50,000）";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      cemetery: (form.elements.namedItem("cemetery") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      date: isPremium
        ? (form.elements.namedItem("date") as HTMLInputElement)?.value || ""
        : "日程は後日ご連絡で調整",
      plan: (form.elements.namedItem("plan") as HTMLSelectElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };
    await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
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
              <span className="text-gray-400 font-normal ml-1 text-xs">（任意）</span>
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

          {/* 住所（任意） */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              住所（霊園の所在地）
              <span className="text-gray-400 font-normal ml-1 text-xs">（任意）</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="大阪府〇〇市〇〇 1-2-3"
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
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white"
            >
              <option value="">選択してください</option>
              {PLANS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* 希望日（プレミアムのみ必須） */}
          {isPremium ? (
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
              <p className="text-xs text-stone-400 mt-1">
                プレミアムプランはご希望日を確約いたします
              </p>
            </div>
          ) : selectedPlan ? (
            <div className="bg-stone-50 rounded-lg px-4 py-3 border border-stone-100">
              <p className="text-sm text-stone-600">
                📅 作業日程は予約確認後、スタッフよりLINEまたはお電話で日程調整いたします。
              </p>
            </div>
          ) : null}

          {/* 備考 */}
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-1">
              ご要望・備考
              <span className="text-gray-400 font-normal ml-1 text-xs">（任意）</span>
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
            送信後、1営業日以内に確認のご連絡をいたします
          </p>
        </form>
      </main>
    </div>
  );
}
