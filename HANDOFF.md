# 引き継ぎドキュメント（2026-07-11 更新）

新しいセッション・別モデルで作業を再開するときは、まずこのファイルを読むこと。
作業を進めたら **このファイルの「未処理事項」を必ず更新** すること。

## プロジェクト概要

お墓掃除代行サービス「関西お墓サポート（KANSAI OHAKA SUPPORT）」の公式サイト。
**本番公開済み・運用中**。

- Next.js 16 (App Router) + TypeScript + Tailwind CSS、静的エクスポート（`out/` に出力）
- ホスティング: Cloudflare Workers（static assets 方式、`wrangler.toml` 参照。Worker 名: `grave-cleaning`）
- **デプロイ方法: `git push origin main` するだけ**。Cloudflare が GitHub 連携で自動ビルドし、
  数分で本番に反映される
- GitHub: https://github.com/kkishi0724-os/grave-cleaning
- Cloudflare / Google 系はすべて kansaiohakasupport@gmail.com のアカウントで管理

## サイトの構成

- 予約は **Google フォーム** に飛ばす方式（サイト内フォームは使っていない）:
  https://docs.google.com/forms/d/e/1FAIpQLScJnKFIZZh3s7qELYY_cRaE-T2j5DingdvaemjDlizKDfVG9w/viewform
- Google Analytics 導入済み: `G-VJD5654HST`（app/layout.tsx）
- SNS: X = @kansaiohaka2026 / Instagram = @kansaiohakasupport2026
- 作業の流れ: 予約（Googleフォーム）→ 日程確定 → 清掃 → お支払い（この順序は確定済み。変えないこと）
- ヒーロー・作業の流れは実写真を使用（イラストから置き換え済み）
- ヘッダーロゴ: logo.png のアイコン + 「KANSAI OHAKA SUPPORT」（文字色はアイコンに合わせた
  茶オリーブ系 #8c7850 付近）+「関西お墓サポート」

## 未処理事項

1. **未コミットの画像素材が3つある**（用途はユーザーに確認してから使うこと）:
   - `public/ho-mupe-ji.png` … 墓地で作業する人の実写風画像（ヒーロー差し替え候補？）
   - `public/ho-mupe-ji2.png` … 同系統の画像
   - `お支払い.png`（リポジトリ直下）… スマホで振込確認をしている写真（「お支払い」ステップ用の候補？）
2. **デッドコードの掃除（低優先・要ユーザー確認）**: 予約を Google フォームに変えたため、
   `app/booking/`（旧予約ページ）と `app/api/booking/route.ts`（nodemailer 送信 API）は
   使われていない可能性が高い。静的エクスポートでは API ルートは動かない。
   削除するなら本番でリンク切れがないか確認してから

## 注意事項

- 静的エクスポート構成なので、サーバー処理（API ルート、force-dynamic など）は追加できない。
  動的機能が必要になったら Cloudflare Workers の機能か外部サービス（Googleフォーム等）を使う
- wrangler.toml の Worker 名は `grave-cleaning` で確定（過去に ohaka 等へ変えて戻した経緯あり。変えないこと）
- デザイン変更のコミットメッセージは日本語の `feat:` / `fix:` 形式（git log 参照）
