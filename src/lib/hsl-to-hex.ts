/** Convert HSL (h: 0-360, s/l: 0-1) to #rrggbb. */
export function hslToHex(h: number, s: number, l: number): string {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function readPrimaryColorStops(): string[] {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
  if (!raw) {
    return ["#1d4ed8", "#3b82f6", "#60a5fa"];
  }

  const [h, s, l] = raw.split(/\s+/).map((part, index) => {
    const value = parseFloat(part);
    return index === 0 ? value : value / 100;
  });

  return [
    hslToHex(h, s, Math.max(0, l - 0.18)),
    hslToHex(h, s, l),
    hslToHex(h, s, Math.min(1, l + 0.14)),
  ];
}

/** Single brand primary as #rrggbb from --primary. */
export function readPrimaryHex(): string {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
  if (!raw) {
    return "#3b82f6";
  }

  const [h, s, l] = raw.split(/\s+/).map((part, index) => {
    const value = parseFloat(part);
    return index === 0 ? value : value / 100;
  });

  return hslToHex(h, s, l);
}
