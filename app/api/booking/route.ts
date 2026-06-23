import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, cemetery, address, date, plan, notes } = body;

    console.log("予約受信:", { name, email, plan });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"関西お墓サポート" <${process.env.GMAIL_USER}>`,
      to: "kansaiohakasupport@gmail.com",
      subject: `【関西お墓サポート】新しいご予約：${name} 様`,
      html: `
        <h2>新しいご予約が届きました</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">お名前</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">メール</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">電話番号</td><td style="padding:8px;border:1px solid #ddd">${phone || "未記入"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">霊園・墓地名</td><td style="padding:8px;border:1px solid #ddd">${cemetery}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">住所</td><td style="padding:8px;border:1px solid #ddd">${address || "未記入"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">ご希望日</td><td style="padding:8px;border:1px solid #ddd">${date}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">プラン</td><td style="padding:8px;border:1px solid #ddd">${plan}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold">ご要望・備考</td><td style="padding:8px;border:1px solid #ddd">${notes || "なし"}</td></tr>
        </table>
      `,
    });

    console.log("メール送信完了");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("エラー:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
