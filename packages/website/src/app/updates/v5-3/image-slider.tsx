'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  initial?: number; // 0..100
  maxWidth?: number | string; // e.g. 900 or "100%"
  aspectRatio?: string; // e.g. "16 / 9" or "4 / 3"
  showLabels?: boolean;
};

export function BeforeAfterSlider({
                                    beforeSrc,
                                    afterSrc,
                                    beforeAlt = 'Before image',
                                    afterAlt = 'After image',
                                    initial = 50,
                                    maxWidth = 900,
                                    aspectRatio = '16 / 9',
                                    showLabels = true,
                                  }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(() => clamp(initial, 0, 100));
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const maxWidthStyle = useMemo(
    () => (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth),
    [maxWidth]
  );

  const setFromPointer = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setValue(clamp(pct, 0, 100));
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromPointer(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <figure style={{ margin: 0 }}>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: maxWidthStyle,
          aspectRatio,
          overflow: 'hidden',
          borderRadius: 12,
          border: '2px solid white',
          userSelect: 'none',
          touchAction: 'none',
        }}
        onPointerDown={(e) => {
          draggingRef.current = true;
          setFromPointer(e.clientX);
        }}
        aria-label="Before and after image comparison"
      >
        {/* Base (Before) */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Top (After) clipped */}
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            clipPath: `inset(0 ${100 - value}% 0 0)`,
          }}
        />

        {/* Divider line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${value}%`,
            width: 2,
            transform: 'translateX(-1px)',
            background: 'white',
            boxShadow: '0 0 0 1px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
          }}
        />

        {/* Handle */}
        <div
          style={{
            position: 'absolute',
            left: `${value}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 44,
            height: 44,
            borderRadius: 999,
            background: 'rgba(255,255,255,0.95)',
            border: '2px solid white',
            boxShadow: '0 10px 24px rgba(0,0,0,0.25)',
            display: 'grid',
            placeItems: 'center',
            pointerEvents: 'none',
          }}
        >
          <div style={{ display: 'flex', gap: 6, opacity: 0.75 }}>
            <span style={{ fontSize: 18, lineHeight: 1 }}>‹</span>
            <span style={{ fontSize: 18, lineHeight: 1 }}>›</span>
          </div>
        </div>

        {/* Labels */}
        {showLabels && (
          <>
            <span style={labelStyle({ left: 12 })}>Before</span>
            <span style={labelStyle({ right: 12 })}>After</span>
          </>
        )}
      </div>

      {/* Range input */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(value)}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Adjust before/after split"
        style={{
          width: '100%',
          maxWidth: maxWidthStyle,
          marginTop: 10,
        }}
      />
    </figure>
  );
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function labelStyle(pos: React.CSSProperties): React.CSSProperties {
  return {
    position: 'absolute',
    bottom: 12,
    padding: '6px 10px',
    borderRadius: 999,
    fontSize: 12,
    background: 'rgba(0,0,0,0.55)',
    color: 'white',
    backdropFilter: 'blur(6px)',
    ...pos,
    pointerEvents: 'none',
  };
}
