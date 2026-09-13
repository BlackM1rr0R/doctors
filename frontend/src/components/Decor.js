// Decorative SVG clouds, drawn in the spirit of the original design's cloud imagery.
export function Cloud({ width = 260, style, className, color = "#fff" }) {
  return (
    <svg viewBox="0 0 260 110" width={width} style={style} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cloudShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor="#e3eef7" />
        </linearGradient>
      </defs>
      <path
        fill="url(#cloudShade)"
        d="M34 96c-18 0-30-11-30-25s12-24 28-24c3-19 19-32 38-32 13 0 25 6 32 17 7-11 20-19 35-19 22 0 40 16 42 37 3-1 7-2 11-2 20 0 36 13 36 30 0 10-7 18-18 18z"
      />
    </svg>
  );
}

export function CloudBank({ className = "cloud-bank" }) {
  return (
    <svg className={className} viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="bank" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".7" />
          <stop offset=".35" stopColor="#ffffff" stopOpacity=".95" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path fill="#eef5fb" opacity=".8" d="M0 120c60-30 120-40 190-20 40-40 120-50 180-10 60-45 160-45 220 0 50-35 140-40 200 5 60-40 150-45 210-5 60-35 140-35 190 10 70-30 160-25 250 10V320H0z" />
      <path fill="url(#bank)" d="M0 170c80-35 150-30 220 0 60-40 150-40 210 5 70-45 170-40 230 5 70-40 170-40 240 0 60-35 150-35 220 5 70-30 160-35 320-5V320H0z" />
    </svg>
  );
}

export function WorldMap({ className }) {
  // Stylized dotted map texture
  const dots = [];
  for (let y = 0; y < 14; y++) {
    for (let x = 0; x < 40; x++) {
      const inLand =
        (x > 3 && x < 12 && y > 1 && y < 8) ||
        (x > 8 && x < 13 && y > 7 && y < 13) ||
        (x > 17 && x < 24 && y > 1 && y < 6) ||
        (x > 18 && x < 25 && y > 5 && y < 12) ||
        (x > 24 && x < 36 && y > 1 && y < 8) ||
        (x > 31 && x < 37 && y > 9 && y < 12);
      if (inLand) dots.push(<circle key={`${x}-${y}`} cx={x * 25 + 12} cy={y * 25 + 12} r="5" />);
    }
  }
  return (
    <svg className={className} viewBox="0 0 1000 350" preserveAspectRatio="xMidYMid slice" fill="#fff" aria-hidden="true">
      {dots}
    </svg>
  );
}
