"use client";

import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sj-theme") as Theme | null;
    const initial = stored === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("sj-theme", next);
      document.documentElement.classList.toggle("light", next === "light");
      return next;
    });
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
      className="theme-switcher-dock"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ambient glow */}
      <div
        className={`theme-switcher-glow ${isDark ? "theme-glow-dark" : "theme-glow-light"}`}
      />

      {/* Main capsule */}
      <div
        className={`theme-switcher-capsule ${hovered ? "theme-capsule-expanded" : ""} ${isDark ? "theme-capsule-dark" : "theme-capsule-light"}`}
        onClick={() => {
          if (hovered) toggle();
        }}
      >
        {/* Scene background */}
        <div className="theme-scene">
          {isDark ? <NightScene /> : <DayScene />}
        </div>

        {/* Toggle button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className={`theme-toggle-btn ${hovered ? "theme-toggle-visible" : ""}`}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <div className={`theme-toggle-track ${isDark ? "theme-track-dark" : "theme-track-light"}`}>
            <div className={`theme-toggle-thumb ${isDark ? "theme-thumb-dark" : "theme-thumb-light"}`}>
              {isDark ? (
                <svg viewBox="0 0 24 24" className="theme-thumb-icon">
                  <path
                    d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    fill="#fbbf24"
                    stroke="#f59e0b"
                    strokeWidth="0.5"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="theme-thumb-icon">
                  <circle cx="12" cy="12" r="4" fill="#fbbf24" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 12 + Math.cos(rad) * 6;
                    const y1 = 12 + Math.sin(rad) * 6;
                    const x2 = 12 + Math.cos(rad) * 8.5;
                    const y2 = 12 + Math.sin(rad) * 8.5;
                    return (
                      <line
                        key={angle}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </svg>
              )}
            </div>
          </div>
        </button>

        {/* Icon indicator (visible when collapsed) */}
        <div className={`theme-indicator ${hovered ? "theme-indicator-hidden" : ""}`}>
          {isDark ? (
            <svg viewBox="0 0 24 24" className="theme-indicator-icon theme-indicator-moon">
              <defs>
                <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <path
                d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                fill="url(#moonGrad)"
                stroke="#f59e0b"
                strokeWidth="0.5"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="theme-indicator-icon theme-indicator-sun">
              <defs>
                <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="4" fill="url(#sunGrad)" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 12 + Math.cos(rad) * 6.5;
                const y1 = 12 + Math.sin(rad) * 6.5;
                const x2 = 12 + Math.cos(rad) * 9;
                const y2 = 12 + Math.sin(rad) * 9;
                return (
                  <line
                    key={angle}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#f97316"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="sun-ray"
                  />
                );
              })}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Night Scene ──────────────────────────────── */
function NightScene() {
  return (
    <div className="theme-night-scene">
      {/* Stars */}
      <div className="theme-star theme-star-1" />
      <div className="theme-star theme-star-2" />
      <div className="theme-star theme-star-3" />
      <div className="theme-star theme-star-4" />
      <div className="theme-star theme-star-5" />
      <div className="theme-star theme-star-6" />
      <div className="theme-star theme-star-7" />
      <div className="theme-star theme-star-8" />

      {/* Shooting star */}
      <div className="theme-shooting-star" />

      {/* Moon crescent */}
      <svg viewBox="0 0 32 32" className="theme-scene-moon">
        <defs>
          <linearGradient id="sceneMoonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path
          d="M27 16.5A12 12 0 0 1 15 4.5a12 12 0 0 0 0 24 12 12 0 0 0 12-12Z"
          fill="url(#sceneMoonGrad)"
        />
      </svg>
    </div>
  );
}

/* ── Day Scene ──────────────────────────────── */
function DayScene() {
  return (
    <div className="theme-day-scene">
      {/* Sun */}
      <svg viewBox="0 0 40 40" className="theme-scene-sun">
        <defs>
          <radialGradient id="sceneSunGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="60%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </radialGradient>
        </defs>
        <circle cx="20" cy="20" r="8" fill="url(#sceneSunGrad)" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 20 + Math.cos(rad) * 11;
          const y1 = 20 + Math.sin(rad) * 11;
          const x2 = 20 + Math.cos(rad) * 15;
          const y2 = 20 + Math.sin(rad) * 15;
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="scene-sun-ray"
              style={{ animationDelay: `${angle * 8}ms` }}
            />
          );
        })}
      </svg>

      {/* Clouds */}
      <div className="theme-cloud theme-cloud-1">
        <svg viewBox="0 0 64 24" className="theme-cloud-svg">
          <ellipse cx="20" cy="16" rx="16" ry="8" fill="rgba(255,255,255,0.85)" />
          <ellipse cx="34" cy="12" rx="12" ry="10" fill="rgba(255,255,255,0.9)" />
          <ellipse cx="46" cy="16" rx="14" ry="7" fill="rgba(255,255,255,0.8)" />
        </svg>
      </div>
      <div className="theme-cloud theme-cloud-2">
        <svg viewBox="0 0 48 20" className="theme-cloud-svg">
          <ellipse cx="16" cy="14" rx="12" ry="6" fill="rgba(255,255,255,0.7)" />
          <ellipse cx="28" cy="10" rx="10" ry="8" fill="rgba(255,255,255,0.8)" />
          <ellipse cx="38" cy="14" rx="10" ry="5" fill="rgba(255,255,255,0.65)" />
        </svg>
      </div>
    </div>
  );
}
