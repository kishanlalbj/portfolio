import { useMemo } from "react";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

// 3 comets × 30 s stagger = one comet visible every ~30 s
const TRAVERSE_S = 4.5;  // seconds to cross the screen
const WAIT_S = 85.5;     // pause after each crossing (total cycle = 90 s)

interface StarDot {
  size: number;
  left: number;
  top: number;
  delay: string;
  duration: string;
  glow: number;
  opacity: number;
}

interface Comet {
  id: number;
  top: number;       // % from container top
  rotate: number;    // visual angle + travel direction in degrees
  delay: number;     // seconds before first appearance
  tailLength: number;
}

export default function StarBackground({
  count = 200,
  width = "100%",
  height = "100%"
}) {
  const { stars, comets } = useMemo(() => {
    const stars: StarDot[] = Array.from({ length: count }).map(() => {
      const tier = Math.random();
      const size =
        tier < 0.62 ? rand(0.5, 1.5) : tier < 0.92 ? rand(1.5, 2.5) : rand(2.5, 4);
      return {
        size,
        left: rand(0, 100),
        top: rand(0, 100),
        delay: rand(0, 10).toFixed(2),
        duration: rand(2.5, 7).toFixed(2),
        glow: size > 2.5 ? rand(4, 10) : size > 1.5 ? rand(0, 3) : 0,
        opacity: rand(0.3, 1)
      };
    });

    const comets: Comet[] = [
      { id: 1, top: rand(6, 18),  rotate: rand(22, 30), delay: 2,  tailLength: Math.round(rand(260, 360)) },
      { id: 2, top: rand(14, 30), rotate: rand(26, 34), delay: 32, tailLength: Math.round(rand(220, 320)) },
      { id: 3, top: rand(4, 20),  rotate: rand(20, 28), delay: 62, tailLength: Math.round(rand(280, 400)) }
    ];

    return { stars, comets };
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ width, height }}
      aria-hidden="true"
    >
      {/* Subtle vignette for section blending */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40" />

      {/* ── Star field ──────────────────────────────────────── */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.left}%`,
            top: `${s.top}%`,
            opacity: s.opacity,
            background: "rgba(255, 255, 255, 1)",
            boxShadow:
              s.glow > 0
                ? `0 0 ${s.glow}px ${s.glow * 0.4}px rgba(200, 210, 255, 0.5)`
                : "none",
            transform: "translate(-50%, -50%)",
            animation: `star-twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
            willChange: "opacity, transform"
          }}
        />
      ))}

      {/* ── Comets ──────────────────────────────────────────── */}
      {comets.map((c) => (
        <div
          key={c.id}
          className="absolute"
          style={{
            top: `${c.top}%`,
            left: 0,
            transform: `rotate(${c.rotate}deg)`
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              opacity: 0,
              animation: `comet-pass ${TRAVERSE_S + WAIT_S}s linear ${c.delay}s infinite`,
              animationFillMode: "backwards"
            }}
          >
            {/* Tail — gradient from transparent to near-white */}
            <div
              style={{
                width: `${c.tailLength}px`,
                height: "2px",
                background:
                  "linear-gradient(to right, transparent 0%, rgba(180,210,255,0.22) 38%, rgba(220,235,255,0.72) 82%, rgba(255,255,255,0.96) 100%)",
                borderRadius: "2px"
              }}
            />
            {/* Head — bright glowing dot */}
            <div
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                flexShrink: 0,
                background: "white",
                boxShadow:
                  "0 0 10px 4px rgba(180,210,255,0.55), 0 0 4px 1px rgba(255,255,255,0.9)"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
