import { Point } from "../types";

const hasCrypto =
  typeof window !== "undefined" &&
  !!(window.crypto || (window as any).msCrypto) &&
  typeof (window.crypto || (window as any).msCrypto).getRandomValues ===
    "function";

const getCryptoUint32 = (): number => {
  const cryptoObj = (window.crypto || (window as any).msCrypto) as Crypto;
  return cryptoObj.getRandomValues(new Uint32Array(1))[0];
};

export const secureRandomInt = (max: number): number => {
  if (max <= 0) return 0;
  if (!hasCrypto) return Math.floor(Math.random() * max);

  const maxUint32 = 4294967296;
  const limit = Math.floor(maxUint32 / max) * max;
  let r = getCryptoUint32();
  while (r >= limit) {
    r = getCryptoUint32();
  }
  return r % max;
};

export const secureRandomFloat = (): number => {
  if (hasCrypto) {
    return getCryptoUint32() / 4294967296;
  }
  return Math.random();
};

export const selectRandom = <T>(arr: T[]): T => {
  const idx = secureRandomInt(arr.length);
  return arr[idx];
};

export const calcDistance = (a: Point, b: Point) => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

export const generateRandomPoint = () => {
  if (typeof window === "undefined") {
    return { x: 0, y: 0 };
  }

  const width = Math.max(0, window.innerWidth - 170);
  const height = Math.max(0, window.innerHeight);

  return {
    x: secureRandomFloat() * width,
    y: secureRandomFloat() * height
  };
};

export const ScrollToTopObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const el = document.getElementById("scrollToTop");

    if (entry.isIntersecting) {
      if (el) el.style.display = "block";
    } else {
      if (el) el.style.display = "none";
    }
  });
});
