// 各ステップのSVGイラストコンポーネント

const C = {
  stone: "#78716c",
  stoneDark: "#44403c",
  stoneLight: "#d6d3d1",
  stonePale: "#e7e5e4",
  green: "#86a882",
  sky: "#93c5d4",
  skin: "#f5c99a",
  white: "#ffffff",
  line: "#06C755",
};

// STEP1: スマホ＋LINEチャット
export function IllustBooking() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* スマホ本体 */}
      <rect x="35" y="15" width="50" height="85" rx="8" fill={C.stoneDark} />
      <rect x="39" y="22" width="42" height="66" rx="4" fill={C.stonePale} />
      {/* ホームボタン */}
      <circle cx="60" cy="95" r="3.5" fill={C.stone} />
      {/* フロントカメラ */}
      <circle cx="60" cy="19" r="2" fill={C.stone} />

      {/* LINEっぽい吹き出し（受信） */}
      <rect x="44" y="30" width="28" height="14" rx="6" fill={C.line} />
      <polygon points="44,38 38,42 44,42" fill={C.line} />
      <rect x="48" y="35" width="14" height="3" rx="1.5" fill={C.white} />
      <rect x="48" y="40" width="8" height="3" rx="1.5" fill={C.white} />

      {/* 吹き出し（送信） */}
      <rect x="48" y="54" width="28" height="14" rx="6" fill={C.stoneLight} />
      <polygon points="76,60 82,64 76,64" fill={C.stoneLight} />
      <rect x="52" y="59" width="16" height="3" rx="1.5" fill={C.stone} />
      <rect x="52" y="64" width="10" height="3" rx="1.5" fill={C.stone} />

      {/* 入力欄 */}
      <rect x="44" y="76" width="32" height="8" rx="4" fill={C.stoneLight} />
      <circle cx="70" cy="80" r="3" fill={C.line} />
    </svg>
  );
}

// STEP2: カレンダー＋チェックマーク
export function IllustCalendar() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* カレンダー本体 */}
      <rect x="18" y="28" width="84" height="72" rx="8" fill={C.stonePale} />
      {/* ヘッダー */}
      <rect x="18" y="28" width="84" height="24" rx="8" fill={C.stoneDark} />
      <rect x="18" y="40" width="84" height="12" fill={C.stoneDark} />
      {/* リング */}
      <rect x="35" y="18" width="8" height="20" rx="4" fill={C.stone} />
      <rect x="77" y="18" width="8" height="20" rx="4" fill={C.stone} />
      {/* ヘッダーテキスト */}
      <rect x="46" y="34" width="28" height="4" rx="2" fill={C.stoneLight} />

      {/* 日付グリッド */}
      {[0,1,2,3,4,5,6].map((i) => (
        <rect key={`h${i}`} x={24 + i * 11} y="58" width="7" height="3" rx="1" fill={C.stoneLight} />
      ))}
      {[0,1,2,3,4,5,6].map((i) => (
        <rect key={`r1${i}`} x={24 + i * 11} y="66" width="7" height="5" rx="1.5" fill={C.stoneLight} />
      ))}
      {[0,1,2,3,4].map((i) => (
        <rect key={`r2${i}`} x={24 + i * 11} y="76" width="7" height="5" rx="1.5" fill={C.stoneLight} />
      ))}

      {/* チェックマーク（大きく中央） */}
      <circle cx="82" cy="81" r="14" fill={C.green} />
      <polyline
        points="75,81 80,87 90,73"
        stroke={C.white}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// STEP3: 人物がお墓を清掃（メインイラスト）
export function IllustCleaning() {
  return (
    <svg viewBox="0 0 140 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* 空 */}
      <rect x="0" y="0" width="140" height="80" rx="0" fill="#f0f5f9" />

      {/* 地面 */}
      <rect x="0" y="88" width="140" height="32" fill={C.green} />
      <rect x="0" y="85" width="140" height="6" rx="2" fill="#6b9467" />

      {/* お墓本体 */}
      <rect x="72" y="32" width="42" height="58" rx="4" fill={C.stoneLight} />
      {/* 墓石アーチ上部 */}
      <rect x="72" y="20" width="42" height="18" rx="21 21 0 0" fill={C.stone} />
      {/* 文字っぽい線 */}
      <rect x="82" y="38" width="22" height="3" rx="1.5" fill={C.stone} opacity="0.6" />
      <rect x="86" y="44" width="14" height="3" rx="1.5" fill={C.stone} opacity="0.6" />
      <rect x="88" y="50" width="10" height="3" rx="1.5" fill={C.stone} opacity="0.6" />
      {/* 台座 */}
      <rect x="66" y="86" width="54" height="8" rx="2" fill={C.stone} />

      {/* バケツ */}
      <rect x="18" y="76" width="18" height="14" rx="3" fill="#78a2c0" />
      <path d="M19 76 Q27 66 35 76" stroke="#5a8aad" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* バケツの水 */}
      <rect x="19" y="82" width="16" height="7" rx="0 0 2 2" fill="#93c5d4" />

      {/* 人物 */}
      {/* 頭 */}
      <circle cx="50" cy="38" r="11" fill={C.skin} />
      {/* 髪 */}
      <rect x="39" y="30" width="22" height="10" rx="5 5 0 0" fill={C.stoneDark} />
      {/* 体 */}
      <rect x="41" y="49" width="18" height="24" rx="4" fill="#6b8fa3" />
      {/* 右腕（雑巾でお墓を拭いている） */}
      <line x1="59" y1="54" x2="74" y2="65" stroke="#6b8fa3" strokeWidth="6" strokeLinecap="round" />
      {/* 雑巾 */}
      <rect x="71" y="62" width="10" height="7" rx="2" fill={C.stonePale} />
      {/* 左腕（バケツ持ち） */}
      <line x1="41" y1="56" x2="32" y2="72" stroke="#6b8fa3" strokeWidth="6" strokeLinecap="round" />
      {/* 脚 */}
      <rect x="43" y="71" width="7" height="18" rx="3" fill="#44607a" />
      <rect x="50" y="71" width="7" height="18" rx="3" fill="#44607a" />
      {/* 靴 */}
      <rect x="41" y="86" width="11" height="5" rx="2" fill={C.stoneDark} />
      <rect x="48" y="86" width="11" height="5" rx="2" fill={C.stoneDark} />

      {/* お線香の煙 */}
      <path d="M93 82 Q96 76 93 70 Q90 64 93 58" stroke={C.stoneLight} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M100 82 Q97 74 100 67" stroke={C.stoneLight} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// STEP4: スマホで写真報告
export function IllustPhoto() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* スマホ */}
      <rect x="30" y="12" width="60" height="96" rx="9" fill={C.stoneDark} />
      <rect x="34" y="20" width="52" height="78" rx="5" fill={C.stonePale} />
      <circle cx="60" cy="16" r="2.5" fill={C.stone} />
      <circle cx="60" cy="106" r="4" fill={C.stone} />

      {/* 写真エリア（before） */}
      <rect x="37" y="24" width="22" height="28" rx="3" fill="#b8d4c8" />
      {/* beforeのお墓（汚れている） */}
      <rect x="43" y="30" width="10" height="16" rx="2 2 0 0" fill={C.stone} />
      <rect x="41" y="45" width="14" height="4" rx="1" fill={C.stone} />
      {/* 苔・汚れ */}
      <rect x="44" y="33" width="8" height="3" rx="1" fill="#7a9e7e" opacity="0.7" />
      <rect x="43" y="38" width="5" height="3" rx="1" fill="#7a9e7e" opacity="0.7" />
      <rect x="37" y="48" width="22" height="4" rx="1" fill="#7a9e7e" opacity="0.4" />
      <rect x="38" y="48" width="3" height="6" rx="1" fill="#7a9e7e" opacity="0.5" />
      <rect x="54" y="46" width="3" height="8" rx="1" fill="#7a9e7e" opacity="0.5" />

      {/* 矢印 */}
      <text x="60" y="42" fontSize="10" fill={C.stone} textAnchor="middle">→</text>

      {/* 写真エリア（after） */}
      <rect x="61" y="24" width="22" height="28" rx="3" fill="#d4e8d4" />
      {/* afterのお墓（きれい） */}
      <rect x="67" y="28" width="10" height="16" rx="2 2 0 0" fill={C.stoneLight} />
      <rect x="65" y="43" width="14" height="4" rx="1" fill={C.stoneLight} />
      {/* お花 */}
      <circle cx="66" cy="47" r="3" fill="#f4a0a0" />
      <circle cx="80" cy="47" r="3" fill="#f4a0a0" />
      {/* 草（きれい） */}
      <rect x="61" y="47" width="22" height="5" rx="1" fill="#a8d4a0" />

      {/* BEFOREラベル */}
      <rect x="37" y="53" width="22" height="6" rx="2" fill={C.stone} />
      <rect x="40" y="55" width="12" height="2" rx="1" fill={C.white} />

      {/* AFTERラベル */}
      <rect x="61" y="53" width="22" height="6" rx="2" fill={C.green} />
      <rect x="64" y="55" width="12" height="2" rx="1" fill={C.white} />

      {/* 送信ボタン */}
      <rect x="38" y="64" width="44" height="14" rx="7" fill={C.green} />
      <rect x="48" y="68" width="24" height="3" rx="1.5" fill={C.white} />
      <rect x="52" y="73" width="16" height="3" rx="1.5" fill={C.white} />

      {/* 通知丸 */}
      <circle cx="82" cy="24" r="6" fill="#f87171" />
      <rect x="80" y="21" width="4" height="6" rx="1" fill={C.white} />
    </svg>
  );
}

// STEP5: PayPay決済
export function IllustPayment() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* カード */}
      <rect x="15" y="55" width="90" height="55" rx="8" fill={C.stoneDark} transform="rotate(-8 60 80)" />
      <rect x="15" y="55" width="90" height="55" rx="8" fill="#5a7a9a" transform="rotate(-8 60 80)" />
      <rect x="15" y="68" width="90" height="14" fill="#4a6a8a" transform="rotate(-8 60 80)" />
      <rect x="24" y="82" width="24" height="16" rx="3" fill="#f5c040" transform="rotate(-8 60 80)" />

      {/* スマホ */}
      <rect x="32" y="8" width="56" height="90" rx="8" fill={C.stoneDark} />
      <rect x="36" y="15" width="48" height="74" rx="5" fill={C.white} />
      <circle cx="60" cy="12" r="2.5" fill={C.stone} />
      <circle cx="60" cy="103" r="4" fill={C.stone} />

      {/* PayPayロゴ風 */}
      <rect x="40" y="19" width="40" height="10" rx="3" fill="#e63f20" />
      <rect x="43" y="21" width="24" height="6" rx="2" fill={C.white} />

      {/* QRコード */}
      <rect x="41" y="33" width="38" height="38" rx="3" fill={C.stonePale} />
      {/* QR角マーカー */}
      <rect x="43" y="35" width="12" height="12" rx="2" fill={C.stoneDark} />
      <rect x="45" y="37" width="8" height="8" rx="1" fill={C.white} />
      <rect x="47" y="39" width="4" height="4" rx="0.5" fill={C.stoneDark} />

      <rect x="65" y="35" width="12" height="12" rx="2" fill={C.stoneDark} />
      <rect x="67" y="37" width="8" height="8" rx="1" fill={C.white} />
      <rect x="69" y="39" width="4" height="4" rx="0.5" fill={C.stoneDark} />

      <rect x="43" y="57" width="12" height="12" rx="2" fill={C.stoneDark} />
      <rect x="45" y="59" width="8" height="8" rx="1" fill={C.white} />
      <rect x="47" y="61" width="4" height="4" rx="0.5" fill={C.stoneDark} />

      {/* QRドット */}
      {[0,1,2,3].map(i => (
        <rect key={i} x={60 + i * 4} y="57" width="3" height="3" rx="0.5" fill={C.stoneDark} />
      ))}
      {[0,1,2].map(i => (
        <rect key={i} x={60} y={61 + i * 4} width="3" height="3" rx="0.5" fill={C.stoneDark} />
      ))}

      {/* 金額表示 */}
      <rect x="40" y="75" width="40" height="10" rx="3" fill={C.stonePale} />
      <rect x="42" y="77" width="24" height="6" rx="2" fill={C.stoneLight} />
    </svg>
  );
}
