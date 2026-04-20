"use client";
import { useEffect, useMemo, useState } from "react";

interface HeroMediaProps {
  scrollSectionId: string;
  frameCount: number;
}

const pad = (value: number) => String(value).padStart(4, "0");

export const HeroMedia = ({ scrollSectionId, frameCount }: HeroMediaProps) => {
  const [frameIndex, setFrameIndex] = useState(1);
  const initialFrame = useMemo(() => `/frames/frame-${pad(1)}.jpg`, []);

  useEffect(() => {
    const section = document.getElementById(scrollSectionId);

    if (!section) {
      return;
    }

    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastTime = performance.now();

    const preloadFrames = () => {
      for (let index = 1; index <= frameCount; index += 1) {
        const image = new Image();
        image.decoding = "async";
        image.src = `/frames/frame-${pad(index)}.jpg`;
      }
    };

    const updateBounds = () => {
      const start = section.offsetTop;
      const distance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const raw = (window.scrollY - start) / distance;
      targetProgress = Math.max(0, Math.min(1, raw));
    };

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      currentProgress += (targetProgress - currentProgress) * Math.min(1, dt * 10);

      const nextFrame = Math.min(
        frameCount,
        Math.max(1, Math.round(currentProgress * (frameCount - 1)) + 1),
      );

      setFrameIndex((previous) => (previous === nextFrame ? previous : nextFrame));
      rafId = window.requestAnimationFrame(animate);
    };

    preloadFrames();
    updateBounds();
    window.addEventListener("scroll", updateBounds, { passive: true });
    window.addEventListener("resize", updateBounds);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", updateBounds);
      window.removeEventListener("resize", updateBounds);
      window.cancelAnimationFrame(rafId);
    };
  }, [frameCount, scrollSectionId]);

  return (
    <div className="absolute inset-0">
      <img
        src={frameIndex ? `/frames/frame-${pad(frameIndex)}.jpg` : initialFrame}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
