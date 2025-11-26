import { useMemo } from "react";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export default function StarFieldPulse({
  count = 40,
  width = "100%",
  height = "100%",
  color = "rgba(255,255,255,0.9)"
}) {
  const stars = useMemo(() => {
    const generated = Array.from({ length: count }).map(() => {
      const size = Math.round(rand(1, 4));
      const left = rand(0, 100);
      const top = rand(0, 100);
      const delay = rand(0, 6).toFixed(2);
      const duration = rand(1.2, 3).toFixed(2);
      const glow = rand(0, 6).toFixed(2);
      return { size, left, top, delay, duration, glow, isSun: false };
    });

    const sunIndex = Math.floor(Math.random() * generated.length);
    generated[sunIndex] = {
      size: rand(20, 35),
      left: rand(30, 70),
      top: rand(30, 70),
      delay: rand(0, 2).toFixed(2),
      duration: rand(3, 6).toFixed(2),
      glow: rand(20, 40).toFixed(2),
      isSun: true
    };

    return generated;
  }, [count]);

  return (
    <div
      className="relative overflow-hidden pointer-events-none"
      style={{ width, height }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/30" />

      {stars.map((s, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${
            s.isSun
              ? "shadow-[0_0_60px_rgba(255,165,0,0.9)] blur-xs"
              : `shadow-[0_0_${s.glow}px_rgba(255,255,255,0.6)] animate-pulse`
          }`}
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.left}%`,
            top: `${s.top}%`,
            background: s.isSun ? "rgba(255,165,0,0.9)" : color,
            transform: "translate(-50%, -50%)",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            willChange: "opacity, transform",
            borderRadius: "50%"
          }}
        />
      ))}

      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden" />
      </div>
    </div>
  );
}
