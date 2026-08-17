# 買取カメラ LP（ランディングページ）

「買取カメラ」（リユース・買取店向け AI査定アシスト）の紹介 LP。**Astro + Tailwind v4** のクリーンな B2B SaaS デザイン。Screen Studio 風のプロダクト動画枠を備えます。

- 本体アプリ：https://genka-camera.vercel.app
- 構成：Astro 7 / Tailwind CSS v4（`@tailwindcss/vite`）/ 依存は完全固定

## 開発

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ に静的出力
npm run preview
```

## デモ動画の差し替え（Screen Studio 等で収録後）

Hero のプロダクト動画は差し替え式です。収録した mp4 を置くだけで自動再生ループになります。

1. Screen Studio 等でアプリ操作（査定→結果→成約→台帳）を録画し `demo.mp4` として書き出し
2. `public/media/demo.mp4` に配置（必要なら静止画を `public/media/demo-poster.svg`/`.png` として差し替え）
3. 再ビルド／再デプロイ

未設置時はプレースホルダ（再生ボタン付きの枠）が表示されます。

## セクション構成

`src/pages/index.astro` が全体を組み立て：
- `Hero` … 見出し＋CTA＋プロダクト動画枠
- `Features` … 主要機能（AI査定 / バーコード / 他店相場 / 推奨買取＋粗利 / 履歴・集計 / 古物台帳）
- `HowItWorks` … 3ステップ（かざす→状態→成約・記帳）
- `Pricing` … シート課金（※価格は参考）
- `Faq` … よくある質問
- `Cta` … 導入導線
- `Footer`

## デプロイ（Vercel・静的）

```bash
npx vercel        # 初回リンク＋デプロイ（フレームワークは Astro を自動検出）
npx vercel --prod
```

独自ドメインを使う場合は Vercel のドメイン設定で割り当て、`astro.config.mjs` の `site` を更新してください。

## 文言・料金について

料金や数値は暫定（LP上で「参考」と明記）。正式値が決まったら `src/components/Pricing.astro` を更新してください。
