"use client";

import { Color } from "@/lib/types";
import React, { useEffect, useRef } from "react";

interface ConfettiCanvasProps {
  trigger: boolean;
  colors?: string[];
}
const colors = [
  Color.DEEP_PURPLE,
  Color.LIGHT_PURPLE,
  Color.GREEN,
  Color.ORANGE,
  Color.WHITE,
];

const ConfettiCanvas: React.FC<ConfettiCanvasProps> = ({ trigger }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (trigger && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);

      const confettiCount = 200;
      const confetti = Array.from({ length: confettiCount }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight - window.innerHeight,
        w: Math.random() * 10 + 5,
        h: Math.random() * 20 + 5,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      let animationFrameId: number;

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c) => {
          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rotation * Math.PI) / 180);
          ctx.fillStyle = c.color;
          ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
          ctx.restore();
          c.x += c.dx;
          c.y += c.dy;
          c.rotation += c.rotationSpeed;

          if (c.y > window.innerHeight) {
            c.y = -c.h;
            c.x = Math.random() * window.innerWidth;
          }
        });
        animationFrameId = requestAnimationFrame(render);
      };

      render();

      setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 3000);
    }
  }, [trigger]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    />
  );
};

export default ConfettiCanvas;
